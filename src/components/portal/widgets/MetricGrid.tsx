import type { Metric } from '../../../data/types'
import StatCounter from './StatCounter'
import Gauge from './Gauge'
import Sparkline from './Sparkline'
import StatusLight from './StatusLight'

export function renderMetric(metric: Metric) {
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

export default function MetricGrid({ metrics }: { metrics: Metric[] }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(215px, 1fr))',
        gap: '0.8rem',
      }}
    >
      {metrics.map(renderMetric)}
    </div>
  )
}
