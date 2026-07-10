import { useSession } from '../../session/SessionContext'
import { DASHBOARD_METRICS } from '../../data/metrics'
import { TICKER_ITEMS } from '../../data/ticker'
import StatCounter from '../../components/portal/widgets/StatCounter'
import Gauge from '../../components/portal/widgets/Gauge'
import Sparkline from '../../components/portal/widgets/Sparkline'
import StatusLight from '../../components/portal/widgets/StatusLight'
import IncidentTicker from '../../components/portal/widgets/IncidentTicker'
import ThreatMatrix from '../../components/portal/widgets/ThreatMatrix'
import type { Metric } from '../../data/types'
import styles from './Dashboard.module.css'

function renderMetric(metric: Metric) {
  switch (metric.kind) {
    case 'counter':
      return <StatCounter key={metric.id} metric={metric} />
    case 'gauge':
      return <Gauge key={metric.id} metric={metric} />
    case 'sparkline':
      return <Sparkline key={metric.id} metric={metric} />
    case 'status':
      return <StatusLight key={metric.id} metric={metric} />
  }
}

export default function Dashboard() {
  const { operativeName, convention } = useSession()

  // Telemetry is compartmented: untagged items are Union-wide; tagged items
  // surface only on their own Convention's dashboard.
  const visible = DASHBOARD_METRICS.filter(
    (m) => !m.convention || m.convention === convention,
  )
  const tickerItems = TICKER_ITEMS.filter(
    (t) => !t.convention || t.convention === convention,
  )

  const gauges = visible.filter((m) => m.kind === 'gauge')
  const counters = visible.filter((m) => m.kind === 'counter')
  const sparks = visible.filter((m) => m.kind === 'sparkline')
  const statuses = visible.filter((m) => m.kind === 'status')

  return (
    <div>
      <div className={styles.greeting}>
        <h1>Welcome back, {operativeName.replace(/\.$/, '')}.</h1>
        <p>
          The Union thanks you for your continued loyalty. Session for{' '}
          {operativeName} is being monitored for quality assurance.
        </p>
      </div>

      <IncidentTicker items={tickerItems} />

      <div className={styles.section}>
        <div className={styles.sectionTitle}>Consensus telemetry</div>
        <div className={styles.grid}>
          {gauges.map(renderMetric)}
          {counters.map(renderMetric)}
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionTitle}>Trend analysis</div>
        <div className={styles.grid}>
          {sparks.map(renderMetric)}
          {statuses.map(renderMetric)}
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionTitle}>Threat environment</div>
        <ThreatMatrix />
      </div>
    </div>
  )
}
