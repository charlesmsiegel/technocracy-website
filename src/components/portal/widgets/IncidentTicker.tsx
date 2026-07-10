import type { TickerItem } from '../../../data/types'
import styles from './Widgets.module.css'

export default function IncidentTicker({ items }: { items: TickerItem[] }) {
  // Track is duplicated so the -50% translate loops seamlessly.
  const doubled = [...items, ...items]
  return (
    <div
      className={styles.ticker}
      role="marquee"
      aria-label="Live incident feed"
      style={{ '--ticker-duration': `${items.length * 7}s` } as React.CSSProperties}
    >
      <div className={styles.tickerTrack}>
        {doubled.map((item, i) => (
          <span key={`${item.id}-${i}`} className={styles.tickerItem}>
            {item.text}
          </span>
        ))}
      </div>
    </div>
  )
}
