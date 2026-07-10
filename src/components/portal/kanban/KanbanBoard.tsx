import { useState } from 'react'
import {
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  closestCorners,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import type { DragEndEvent, DragOverEvent, DragStartEvent } from '@dnd-kit/core'
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable'
import type { Board, KanbanCardData, KanbanColumnData } from '../../../data/types'
import { useSession } from '../../../session/SessionContext'
import KanbanColumn from './KanbanColumn'
import { CardBody } from './KanbanCard'
import CardDetailDrawer from './CardDetailDrawer'
import styles from './Kanban.module.css'

/** Board state lives per mount — drags are session theater, not persistence. */
export default function KanbanBoard({ board }: { board: Board }) {
  const { operativeName } = useSession()
  const [columns, setColumns] = useState<KanbanColumnData[]>(() =>
    board.columns.map((c) => ({ ...c, cardIds: [...c.cardIds] })),
  )
  const [activeCard, setActiveCard] = useState<KanbanCardData | null>(null)
  const [openCard, setOpenCard] = useState<KanbanCardData | null>(null)

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 6 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  )

  const findColumn = (id: string): KanbanColumnData | undefined =>
    columns.find((c) => c.id === id || c.cardIds.includes(id))

  const handleDragStart = ({ active }: DragStartEvent) => {
    setActiveCard(board.cards[active.id as string] ?? null)
  }

  const handleDragOver = ({ active, over }: DragOverEvent) => {
    if (!over) return
    const activeId = active.id as string
    const overId = over.id as string
    const from = findColumn(activeId)
    const to = findColumn(overId)
    if (!from || !to || from.id === to.id) return

    setColumns((cols) =>
      cols.map((col) => {
        if (col.id === from.id) {
          return { ...col, cardIds: col.cardIds.filter((id) => id !== activeId) }
        }
        if (col.id === to.id) {
          const overIndex = col.cardIds.indexOf(overId)
          const insertAt = overIndex >= 0 ? overIndex : col.cardIds.length
          const next = [...col.cardIds]
          next.splice(insertAt, 0, activeId)
          return { ...col, cardIds: next }
        }
        return col
      }),
    )
  }

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    setActiveCard(null)
    if (!over) return
    const activeId = active.id as string
    const overId = over.id as string
    const column = findColumn(activeId)
    if (!column) return
    const oldIndex = column.cardIds.indexOf(activeId)
    const newIndex = column.cardIds.indexOf(overId)
    if (oldIndex >= 0 && newIndex >= 0 && oldIndex !== newIndex) {
      setColumns((cols) =>
        cols.map((col) =>
          col.id === column.id
            ? { ...col, cardIds: arrayMove(col.cardIds, oldIndex, newIndex) }
            : col,
        ),
      )
    }
  }

  return (
    <>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
        onDragCancel={() => setActiveCard(null)}
      >
        <div className={styles.columns}>
          {columns.map((column) => (
            <KanbanColumn
              key={column.id}
              column={column}
              cards={column.cardIds
                .map((id) => board.cards[id])
                .filter(Boolean)}
              operativeName={operativeName}
              onOpen={setOpenCard}
            />
          ))}
        </div>
        <DragOverlay>
          {activeCard && (
            <div className={styles.cardOverlay}>
              <CardBody card={activeCard} operativeName={operativeName} />
            </div>
          )}
        </DragOverlay>
      </DndContext>
      {openCard && (
        <CardDetailDrawer
          card={openCard}
          operativeName={operativeName}
          onClose={() => setOpenCard(null)}
        />
      )}
    </>
  )
}
