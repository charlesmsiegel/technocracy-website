import { useParams } from 'react-router-dom'
import { BOARDS } from '../../data/boards'
import { CONVENTIONS, CONVENTION_SLUGS } from '../../data/conventions'
import type { ConventionSlug } from '../../data/types'
import { useSession } from '../../session/SessionContext'
import KanbanBoard from '../../components/portal/kanban/KanbanBoard'
import NoRecord from '../../components/portal/chrome/NoRecord'
import { ConventionSigil, ConventionWordmark } from '../../components/shared/logos'
import kanbanStyles from '../../components/portal/kanban/Kanban.module.css'
import chromeStyles from '../../components/portal/chrome/Chrome.module.css'

const isConventionSlug = (value: string): value is ConventionSlug =>
  (CONVENTION_SLUGS as string[]).includes(value)

export default function BoardPage() {
  const { convention } = useParams()
  const session = useSession()
  const board =
    convention && isConventionSlug(convention) ? BOARDS[convention] : undefined

  // Full compartmentalization: a foreign Convention's file and a genuinely
  // nonexistent address produce byte-identical output — the response must
  // not confirm whether anything exists here.
  if (!board || board.convention !== session.convention) {
    return <NoRecord kind="response file" />
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
