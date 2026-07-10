import { PLAN_BOARD, PLAN_METRICS } from '../../data/fiveYearPlan'
import KanbanBoard from '../../components/portal/kanban/KanbanBoard'
import MetricGrid from '../../components/portal/widgets/MetricGrid'
import { UnionSeal } from '../../components/shared/logos'
import kanbanStyles from '../../components/portal/kanban/Kanban.module.css'
import chromeStyles from '../../components/portal/chrome/Chrome.module.css'

/* The one place every Convention sees the same thing. */
export default function PlanPage() {
  return (
    <div>
      <div className={kanbanStyles.boardHead}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.9rem',
            color: 'var(--heading)',
          }}
        >
          <UnionSeal size={46} />
          <div>
            <div className={kanbanStyles.codename}>{PLAN_BOARD.codename}</div>
            <div className={kanbanStyles.designation}>
              {PLAN_BOARD.designation}
            </div>
          </div>
        </div>
        <div className={kanbanStyles.bannerRow}>
          <div className={chromeStyles.sectionBanner}>{PLAN_BOARD.banner}</div>
        </div>
        <p className={kanbanStyles.brief}>{PLAN_BOARD.brief}</p>
      </div>

      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: 'var(--amber)',
          margin: '0 0 0.7rem',
        }}
      >
        Plan telemetry
      </div>
      <MetricGrid metrics={PLAN_METRICS} />

      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: 'var(--amber)',
          margin: '1.6rem 0 0.7rem',
        }}
      >
        Release schedule
      </div>
      <KanbanBoard board={PLAN_BOARD} />
    </div>
  )
}
