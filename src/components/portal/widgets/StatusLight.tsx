import type { StatusMetric } from '../../../data/types'
import styles from './Widgets.module.css'

const STATUS_COLOR: Record<StatusMetric['status'], string> = {
  nominal: 'var(--status-nominal)',
  elevated: 'var(--status-elevated)',
  critical: 'var(--status-critical)',
}

export default function StatusLight({ metric }: { metric: StatusMetric }) {
  const color = STATUS_COLOR[metric.status]
  return (
    <div className={styles.card}>
      <div className={styles.cardLabel}>{metric.label}</div>
      <div className={styles.statusRow}>
        <span
          className={`${styles.statusDot} ${
            metric.status !== 'nominal' ? styles.statusDotPulse : ''
          }`}
          style={{ background: color }}
        />
        <span className={styles.statusText} style={{ color }}>
          {metric.status}
        </span>
      </div>
      {metric.note && <div className={styles.statusNote}>{metric.note}</div>}
    </div>
  )
}
