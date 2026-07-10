import { Link, useParams } from 'react-router-dom'
import { getMethodology } from '../../data/methodologies'
import { CONVENTIONS, CONVENTION_SLUGS } from '../../data/conventions'
import type { ConventionSlug } from '../../data/types'
import { useSession } from '../../session/SessionContext'
import KanbanBoard from '../../components/portal/kanban/KanbanBoard'
import MetricGrid from '../../components/portal/widgets/MetricGrid'
import IncidentTicker from '../../components/portal/widgets/IncidentTicker'
import NoRecord from '../../components/portal/chrome/NoRecord'
import { ConventionSigil } from '../../components/shared/logos'
import kanbanStyles from '../../components/portal/kanban/Kanban.module.css'
import chromeStyles from '../../components/portal/chrome/Chrome.module.css'

// Own-key validation: `in` would also accept inherited properties like
// 'constructor', which then indexes METHODOLOGIES off the prototype chain
// and crashes the route instead of denying it.
const isConventionSlug = (value: string): value is ConventionSlug =>
  (CONVENTION_SLUGS as string[]).includes(value)

export default function MethodologyPage() {
  const { convention, methodology } = useParams()
  const session = useSession()

  const panel =
    convention && methodology && isConventionSlug(convention)
      ? getMethodology(convention, methodology)
      : undefined

  if (!panel || panel.convention !== session.convention) {
    return <NoRecord kind="desk" />
  }

  const info = CONVENTIONS[panel.convention]

  return (
    <div>
      <div className={kanbanStyles.boardHead}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.9rem',
            color: `var(${info.accentVar})`,
          }}
        >
          <ConventionSigil convention={panel.convention} size={40} />
          <div>
            <div className={kanbanStyles.codename}>{panel.name}</div>
            <div className={kanbanStyles.designation}>
              {info.name} · Methodology desk ·{' '}
              {panel.kind === 'board' ? 'work queue' : 'telemetry'}
            </div>
          </div>
        </div>
        <div className={kanbanStyles.bannerRow}>
          <div className={chromeStyles.sectionBanner}>
            {info.abbr} INTERNAL — METHODOLOGY LEVEL — HANDLE ACCORDINGLY
          </div>
        </div>
        <p className={kanbanStyles.brief}>{panel.role}</p>
      </div>

      {panel.kind === 'board' && panel.board && (
        <KanbanBoard key={panel.id} board={panel.board} />
      )}

      {panel.kind === 'dashboard' && (
        <>
          {panel.tickerItems && panel.tickerItems.length > 0 && (
            <div style={{ marginBottom: '1rem' }}>
              <IncidentTicker items={panel.tickerItems} />
            </div>
          )}
          {panel.metrics && <MetricGrid metrics={panel.metrics} />}
          {panel.note && (
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--text-muted)',
                marginTop: '1rem',
                maxWidth: '70ch',
                lineHeight: 1.7,
              }}
            >
              {panel.note}
            </p>
          )}
        </>
      )}

      <p style={{ marginTop: '1.5rem' }}>
        <Link
          to="/portal/operations"
          style={{ color: 'var(--accent)', fontSize: '0.85rem' }}
        >
          ← All assigned operations
        </Link>
      </p>
    </div>
  )
}
