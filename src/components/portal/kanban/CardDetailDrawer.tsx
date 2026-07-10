import { useEffect } from 'react'
import type { KanbanCardData } from '../../../data/types'
import ClearanceTag from '../chrome/ClearanceTag'
import NotSharedRibbon from '../chrome/NotSharedRibbon'
import Redacted from '../chrome/Redacted'
import { resolveAssignee } from './KanbanCard'
import styles from './Kanban.module.css'

export default function CardDetailDrawer({
  card,
  operativeName,
  onClose,
}: {
  card: KanbanCardData
  operativeName: string
  onClose: () => void
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <>
      <div className={styles.drawerScrim} onClick={onClose} aria-hidden="true" />
      <aside
        className={styles.drawer}
        role="dialog"
        aria-modal="true"
        aria-label={`Case file: ${card.title}`}
      >
        <button type="button" className={styles.drawerClose} onClick={onClose}>
          CLOSE
        </button>
        <div className={styles.drawerLabel}>Case file · {card.id.toUpperCase()}</div>
        <h2 className={styles.drawerTitle}>{card.title}</h2>
        {card.notSharedWith && (
          <NotSharedRibbon notSharedWith={card.notSharedWith} />
        )}
        <div className={styles.drawerMeta}>
          <ClearanceTag clearance={card.clearance} />
          {card.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.drawerBody}>
          <p>{card.summary}</p>
          {card.detail?.map((para, i) => <p key={i}>{para}</p>)}
          {card.redactedLines ? (
            <div>
              <div className={styles.drawerLabel}>
                Further detail requires elevated clearance
              </div>
              <Redacted lines={card.redactedLines} />
            </div>
          ) : null}
          {card.assignee && (
            <div>
              <div className={styles.drawerLabel}>Assigned</div>
              {resolveAssignee(card.assignee, operativeName)}
            </div>
          )}
        </div>
      </aside>
    </>
  )
}
