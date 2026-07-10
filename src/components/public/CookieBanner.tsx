import { useState } from 'react'
import styles from './CookieBanner.module.css'

const KEY = 'ch-consent'

export default function CookieBanner() {
  const [dismissed, setDismissed] = useState(
    () => sessionStorage.getItem(KEY) === 'agreed',
  )

  if (dismissed) return null

  const agree = () => {
    sessionStorage.setItem(KEY, 'agreed')
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
