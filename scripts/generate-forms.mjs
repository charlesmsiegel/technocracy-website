/**
 * Renders forms-src/*.html to public/forms/*.pdf via headless Chromium.
 * The PDFs are committed, so CI does not need a browser.
 *
 * Usage: node scripts/generate-forms.mjs
 * Env:   CHROMIUM_PATH overrides the browser binary (defaults to the
 *        Playwright-managed install, then common system locations).
 */
import { chromium } from '@playwright/test'
import { existsSync } from 'node:fs'
import { mkdir, readdir } from 'node:fs/promises'
import { resolve, join, basename } from 'node:path'
import { pathToFileURL } from 'node:url'

const root = resolve(import.meta.dirname, '..')
const srcDir = join(root, 'forms-src')
const outDir = join(root, 'public', 'forms')

function findChromium() {
  const candidates = [
    process.env.CHROMIUM_PATH,
    '/opt/pw-browsers/chromium',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
  ].filter(Boolean)
  return candidates.find((p) => existsSync(p))
}

const executablePath = findChromium()
const browser = await chromium.launch(
  executablePath ? { executablePath } : {},
)

await mkdir(outDir, { recursive: true })
const files = (await readdir(srcDir)).filter((f) => f.endsWith('.html'))

const page = await browser.newPage()
for (const file of files.sort()) {
  const out = join(outDir, `${basename(file, '.html')}.pdf`)
  await page.goto(pathToFileURL(join(srcDir, file)).href, {
    waitUntil: 'networkidle',
  })
  await page.pdf({
    path: out,
    format: 'Letter',
    printBackground: true,
    preferCSSPageSize: true,
  })
  console.log(`rendered ${file} -> ${out}`)
}

await browser.close()
