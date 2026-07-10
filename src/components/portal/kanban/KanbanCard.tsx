import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import type { KanbanCardData } from '../../../data/types'
import ClearanceTag from '../chrome/ClearanceTag'
import NotSharedRibbon from '../chrome/NotSharedRibbon'
import styles from './Kanban.module.css'

const PRIORITY_COLOR: Record<KanbanCardData['priority'], string> = {
  routine: 'var(--status-nominal)',
  elevated: 'var(--status-elevated)',
  critical: 'var(--status-critical)',
}

export function resolveAssignee(assignee: string, operativeName: string): string {
  return assignee === '@operative' ? operativeName : assignee
}

export function CardBody({
  card,
  operativeName,
}: {
  card: KanbanCardData
  operativeName: string
}) {
  return (
    <>
      <div className={styles.cardTop}>
        <span className={styles.cardTitle}>{card.title}</span>
        <span
          className={styles.priority}
          style={{ background: PRIORITY_COLOR[card.priority] }}
          title={`Priority: ${card.priority}`}
        />
      </div>
      {card.notSharedWith && (
        <NotSharedRibbon notSharedWith={card.notSharedWith} />
      )}
      <span className={styles.cardSummary}>{card.summary}</span>
      <span className={styles.cardMeta}>
        <ClearanceTag clearance={card.clearance} />
        {card.tags.map((tag) => (
          <span key={tag} className={styles.tag}>
            {tag}
          </span>
        ))}
      </span>
      {card.assignee && (
        <span className={styles.assignee}>
          ☰ {resolveAssignee(card.assignee, operativeName)}
        </span>
      )}
    </>
  )
}

export default function KanbanCard({
  card,
  operativeName,
  onOpen,
}: {
  card: KanbanCardData
  operativeName: string
  onOpen: (card: KanbanCardData) => void
}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id: card.id })

  return (
    <div
      ref={setNodeRef}
      className={`${styles.card} ${isDragging ? styles.cardDragging : ''}`}
      style={{ transform: CSS.Transform.toString(transform), transition }}
      {...attributes}
      {...listeners}
      onClick={() => onOpen(card)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') onOpen(card)
      }}
      role="button"
      tabIndex={0}
      aria-label={`${card.title} — open case file`}
    >
      <CardBody card={card} operativeName={operativeName} />
    </div>
  )
}
