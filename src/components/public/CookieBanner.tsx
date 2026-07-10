import { useState } from 'react'
import styles from './CookieBanner.module.css'

const KEY = 'ch-consent'

/* Users who block site storage entirely would otherwise crash the page —
   an outcome the banner's own copy would struggle to spin. Fail open. */
function readConsent(): boolean {
  try {
    return sessionStorage.getItem(KEY) === 'agreed'
  } catch {
    return false
  }
}

function writeConsent(): void {
  try {
    sessionStorage.setItem(KEY, 'agreed')
  } catch {
    // The preference is noted, if not recorded. It is usually recorded.
  }
}

export default function CookieBanner() {
  const [dismissed, setDismissed] = useState(readConsent)

  if (dismissed) return null

  const agree = () => {
    writeConsent()
    setDismissed(true)
  }

  return (
    <div className={styles.banner} role="region" aria-label="Cookie notice">
      <span className={styles.text}>
        This site uses cookies to ensure a consistent experience. Consistency
        is important.
      </span>
      <button type="button" className={styles.agree} onClick={agree}>
        I Agree
      </button>
    </div>
  )
}
