/**
 * Drives the built site end-to-end and captures screenshots for review.
 * Usage: node scripts/screenshot-tour.mjs <baseUrl> <outDir>
 */
import { chromium } from '@playwright/test'
import { existsSync } from 'node:fs'
import { mkdir } from 'node:fs/promises'
import { join } from 'node:path'

const baseUrl = process.argv[2] ?? 'http://localhost:4173/technocracy-website/'
const outDir = process.argv[3] ?? 'screenshots'

const executablePath = ['/opt/pw-browsers/chromium', process.env.CHROMIUM_PATH]
  .filter(Boolean)
  .find((p) => existsSync(p))

await mkdir(outDir, { recursive: true })
const browser = await chromium.launch(executablePath ? { executablePath } : {})
const page = await browser.newPage({ viewport: { width: 1380, height: 900 } })

const shot = (name, opts = {}) =>
  page.screenshot({ path: join(outDir, `${name}.png`), ...opts })

// Public pages
await page.goto(`${baseUrl}#/`, { waitUntil: 'networkidle' })
await shot('01-home', { fullPage: true })
await page.goto(`${baseUrl}#/divisions`, { waitUntil: 'networkidle' })
await shot('02-divisions')
await page.goto(`${baseUrl}#/divisions/iteration-x`, { waitUntil: 'networkidle' })
await shot('03-division-detail', { fullPage: true })
await page.goto(`${baseUrl}#/newsroom`, { waitUntil: 'networkidle' })
await shot('04-newsroom')
await page.goto(`${baseUrl}#/careers`, { waitUntil: 'networkidle' })
await shot('05-careers')
await page.goto(`${baseUrl}#/about`, { waitUntil: 'networkidle' })
await shot('06-about', { fullPage: true })

// Gate: deep link to portal must bounce to login
await page.goto(`${baseUrl}#/portal`, { waitUntil: 'networkidle' })
await page
  .waitForFunction(() => location.hash.startsWith('#/personnel'), null, {
    timeout: 5000,
  })
  .then(() => console.log('login gate: OK'))
  .catch(() => {
    console.error('FAIL: unauthenticated /portal did not redirect to /personnel')
    process.exitCode = 1
  })
await shot('07-login')

// Log in (as Celestine Aerospace / Void Engineers — the tour visits that board)
await page.fill('#designation', 'Voss, L.')
await page.fill('#passphrase', 'hunter2')
await page.click('button[aria-label*="Celestine"]')
await page.waitForURL('**#/portal', { timeout: 8000 })
await page.waitForTimeout(1600) // let counters animate in
await shot('08-dashboard', { fullPage: true })

// Operations + board
await page.goto(`${baseUrl}#/portal/operations`, { waitUntil: 'networkidle' })
await shot('09-operations')
await page.goto(`${baseUrl}#/portal/operations/void-engineers`, {
  waitUntil: 'networkidle',
})
await shot('10-board-ve')

// Open a card drawer
await page.click('[class*="card"][role="button"]')
await page.waitForTimeout(400)
await shot('11-card-drawer')
await page.keyboard.press('Escape')

// Drag a card from first column to second (mouse drag)
const firstCard = page.locator('[class*="cardList"] >> nth=0 >> [role="button"] >> nth=0')
const targetCol = page.locator('[class*="cardList"] >> nth=1')
const cardBox = await firstCard.boundingBox()
const colBox = await targetCol.boundingBox()
if (cardBox && colBox) {
  await page.mouse.move(cardBox.x + cardBox.width / 2, cardBox.y + 20)
  await page.mouse.down()
  await page.mouse.move(colBox.x + colBox.width / 2, colBox.y + 60, { steps: 12 })
  await page.mouse.move(colBox.x + colBox.width / 2, colBox.y + 80, { steps: 6 })
  await page.mouse.up()
  await page.waitForTimeout(400)
  await shot('12-board-after-drag')
} else {
  console.error('WARN: could not locate card/column for drag test')
}

// HR
await page.goto(`${baseUrl}#/portal/hr`, { waitUntil: 'networkidle' })
await shot('13-hr')

// PDF download reachable?
const pdfResp = await page.request.get(`${baseUrl}forms/rd-11a.pdf`)
console.log(`forms/rd-11a.pdf -> HTTP ${pdfResp.status()}`)
if (pdfResp.status() !== 200) process.exitCode = 1

// Terminate session → back to public, portal locked again
await page.click('text=Terminate Session')
await page.waitForFunction(() => location.hash === '#/', null, { timeout: 5000 })
await page.goto(`${baseUrl}#/portal/hr`, { waitUntil: 'networkidle' })
await page
  .waitForFunction(() => location.hash.startsWith('#/personnel'), null, {
    timeout: 5000,
  })
  .then(() => console.log('logout gate: OK'))
  .catch(() => {
    console.error('FAIL: portal reachable after logout')
    process.exitCode = 1
  })

await browser.close()
console.log(`screenshots in ${outDir}`)
