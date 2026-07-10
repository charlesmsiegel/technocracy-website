import type { GaugeMetric } from '../../../data/types'
import { useCountUp } from '../../../hooks/useCountUp'
import styles from './Widgets.module.css'

const R = 30
const CIRC = Math.PI * R // semicircle arc length

function severityColor(m: GaugeMetric): string {
  const [elevated, critical] = m.thresholds
  const v = m.value
  const isElevated = m.descending ? v <= elevated : v >= elevated
  const isCritical = m.descending ? v <= critical : v >= critical
  if (isCritical) return 'var(--status-critical)'
  if (isElevated) return 'var(--status-elevated)'
  return 'var(--accent)'
}

export default function Gauge({ metric }: { metric: GaugeMetric }) {
  const display = useCountUp(metric.value, 1100)
  const frac = Math.max(0, Math.min(1, metric.value / 100))
  const color = severityColor(metric)

  return (
    <div className={styles.card}>
      <div className={styles.cardLabel}>{metric.label}</div>
      <div className={styles.gaugeWrap}>
        <svg
          className={styles.gaugeSvg}
          width="84"
          height="50"
          viewBox="0 0 84 50"
          role="img"
          aria-label={`${metric.label}: ${metric.value}${metric.unit ?? '%'}`}
        >
          <path
            className={styles.gaugeTrack}
            d={`M 12 46 A ${R} ${R} 0 0 1 72 46`}
            fill="none"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <path
            className={styles.gaugeFill}
            d={`M 12 46 A ${R} ${R} 0 0 1 72 46`}
            fill="none"
            stroke={color}
            strokeWidth="7"
            strokeLinecap="round"
            strokeDasharray={CIRC}
            strokeDashoffset={CIRC * (1 - frac)}
          />
        </svg>
        <div>
          <div className={styles.gaugeValue}>
            {Math.round(display)}
            <span className={styles.statUnit}>{metric.unit ?? '%'}</span>
          </div>
          <div className={styles.gaugeNote} style={{ color }}>
            {color === 'var(--status-critical)'
              ? 'critical'
              : color === 'var(--status-elevated)'
                ? 'elevated'
                : 'nominal'}
          </div>
        </div>
      </div>
    </div>
  )
}
