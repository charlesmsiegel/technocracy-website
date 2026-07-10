import { useState } from 'react'
import type { StatMetric } from '../../../data/types'
import { useCountUp } from '../../../hooks/useCountUp'
import { useInterval } from '../../../hooks/useInterval'
import styles from './Widgets.module.css'

function formatValue(value: number, decimals = 0): string {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`
  if (value >= 10_000) return `${(value / 1_000).toFixed(1)}K`
  return value.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
}

export default function StatCounter({ metric }: { metric: StatMetric }) {
  const [target, setTarget] = useState(metric.value)
  const display = useCountUp(target)

  useInterval(
    () => {
      const drift = (Math.random() * 2 - 1) * (metric.jitter ?? 0)
      setTarget(Math.max(0, Math.round(metric.value + drift)))
    },
    metric.jitter ? 6000 + Math.random() * 3000 : null,
  )

  return (
    <div className={styles.card}>
      <div className={styles.cardLabel}>{metric.label}</div>
      <div className={styles.statValue}>
        {formatValue(display, metric.decimals)}
        {metric.unit && <span className={styles.statUnit}>{metric.unit}</span>}
      </div>
    </div>
  )
}
