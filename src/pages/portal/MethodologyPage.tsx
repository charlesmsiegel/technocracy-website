import { Link, useParams } from 'react-router-dom'
import { getMethodology } from '../../data/methodologies'
import { CONVENTIONS } from '../../data/conventions'
import type { ConventionSlug } from '../../data/types'
import { useSession } from '../../session/SessionContext'
import KanbanBoard from '../../components/portal/kanban/KanbanBoard'
import MetricGrid from '../../components/portal/widgets/MetricGrid'
import IncidentTicker from '../../components/portal/widgets/IncidentTicker'
import { ConventionSigil } from '../../components/shared/logos'
import kanbanStyles from '../../components/portal/kanban/Kanban.module.css'
import chromeStyles from '../../components/portal/chrome/Chrome.module.css'

function Denied() {
  return (
    <div>
      <h1
        style={{
          fontFamily: 'var(--font-mono)',
          color: 'var(--status-critical)',
          letterSpacing: '0.1em',
        }}
      >
        NO RECORD AT YOUR AFFILIATION
      </h1>
      <p style={{ color: 'var(--text-muted)', marginTop: '0.75rem', maxWidth: '62ch' }}>
        No desk exists at this address for personnel of your affiliation. If
        you were given this address, complete Form MX-2 and identify who gave
        it to you.
      </p>
      <p style={{ marginTop: '0.75rem' }}>
        <Link to="/portal/operations" style={{ color: 'var(--accent)' }}>
          Return to your assigned operations
        </Link>
      </p>
    </div>
  )
}

export default function MethodologyPage() {
  const { convention, methodology } = useParams()
  const session = useSession()

  const panel =
    convention && methodology && convention in CONVENTIONS
      ? getMethodology(convention as ConventionSlug, methodology)
      : undefined

  if (!panel || panel.convention !== session.convention) {
    return <Denied />
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
