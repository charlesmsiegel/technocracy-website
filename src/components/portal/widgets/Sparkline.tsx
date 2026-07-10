import { useMemo } from 'react'
import type { SparkMetric } from '../../../data/types'
import styles from './Widgets.module.css'

const W = 160
const H = 40
const PAD = 3

export default function Sparkline({ metric }: { metric: SparkMetric }) {
  const { points, last } = useMemo(() => {
    const data = metric.history
    const min = Math.min(...data)
    const max = Math.max(...data)
    const span = max - min || 1
    const step = (W - PAD * 2) / (data.length - 1 || 1)
    const pts = data.map((v, i) => ({
      x: PAD + i * step,
      y: H - PAD - ((v - min) / span) * (H - PAD * 2),
    }))
    return { points: pts, last: pts[pts.length - 1] }
  }, [metric.history])

  const path = points.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ')
  const latest = metric.history[metric.history.length - 1]

  return (
    <div className={styles.card}>
      <div className={styles.cardLabel}>{metric.label}</div>
      <svg
        className={styles.sparkSvg}
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="none"
        role="img"
        aria-label={`${metric.label}: latest ${latest}${metric.unit ?? ''}`}
      >
        <polyline
          className={`${styles.sparkLine} ${styles.sparkDraw}`}
          points={path}
          style={
            {
              '--spark-len': 400,
              strokeDasharray: 400,
            } as React.CSSProperties
          }
        />
        <circle className={styles.sparkDotPulse} cx={last.x} cy={last.y} r="3" />
        <circle className={styles.sparkDot} cx={last.x} cy={last.y} r="3" />
      </svg>
      <div className={styles.sparkValue}>
        {latest.toLocaleString('en-US')}
        {metric.unit && <span className={styles.statUnit}>{metric.unit}</span>}
      </div>
    </div>
  )
}
