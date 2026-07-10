import { Link, useParams } from 'react-router-dom'
import { BOARDS } from '../../data/boards'
import { CONVENTIONS } from '../../data/conventions'
import type { ConventionSlug } from '../../data/types'
import KanbanBoard from '../../components/portal/kanban/KanbanBoard'
import { ConventionSigil, ConventionWordmark } from '../../components/shared/logos'
import kanbanStyles from '../../components/portal/kanban/Kanban.module.css'
import chromeStyles from '../../components/portal/chrome/Chrome.module.css'

export default function BoardPage() {
  const { convention } = useParams()
  const board =
    convention && convention in BOARDS
      ? BOARDS[convention as ConventionSlug]
      : undefined

  if (!board) {
    return (
      <div>
        <h1 style={{ fontFamily: 'var(--font-mono)' }}>RECORD EXPUNGED</h1>
        <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>
          No response file exists at this address, and it would be best not to
          ask why. <Link to="/portal/operations">Return to operations.</Link>
        </p>
      </div>
    )
  }

  const info = CONVENTIONS[board.convention]

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
          <ConventionSigil convention={board.convention} size={52} />
          <div>
            <ConventionWordmark
              convention={board.convention}
              width={190}
              height={34}
            />
            <div className={kanbanStyles.codename}>
              Operation {board.codename}
            </div>
            <div className={kanbanStyles.designation}>
              {info.name} · {board.designation}
            </div>
          </div>
        </div>
        <div className={kanbanStyles.bannerRow}>
          <div className={chromeStyles.sectionBanner}>{board.banner}</div>
        </div>
        <p className={kanbanStyles.brief}>{board.brief}</p>
      </div>
      {/* key resets drag state when switching boards */}
      <KanbanBoard key={board.convention} board={board} />
    </div>
  )
}
