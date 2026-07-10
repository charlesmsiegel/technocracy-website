import { useDroppable } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import type { KanbanCardData, KanbanColumnData } from '../../../data/types'
import KanbanCard from './KanbanCard'
import styles from './Kanban.module.css'

export default function KanbanColumn({
  column,
  cards,
  operativeName,
  onOpen,
}: {
  column: KanbanColumnData
  cards: KanbanCardData[]
  operativeName: string
  onOpen: (card: KanbanCardData) => void
}) {
  const { setNodeRef } = useDroppable({ id: column.id })

  return (
    <section className={styles.column} aria-label={column.title}>
      <div className={styles.columnHead}>
        <span className={styles.columnTitle}>{column.title}</span>
        <span className={styles.columnCount}>{cards.length}</span>
      </div>
      <SortableContext
        items={column.cardIds}
        strategy={verticalListSortingStrategy}
      >
        <div ref={setNodeRef} className={styles.cardList}>
          {cards.map((card) => (
            <KanbanCard
              key={card.id}
              card={card}
              operativeName={operativeName}
              onOpen={onOpen}
            />
          ))}
        </div>
      </SortableContext>
    </section>
  )
}
