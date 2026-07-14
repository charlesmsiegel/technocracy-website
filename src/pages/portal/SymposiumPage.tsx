import { SYMPOSIUM_BOARD } from '../../data/symposium'
import { CONVENTION_SLUGS, CONVENTIONS } from '../../data/conventions'
import { BOARDS } from '../../data/boards'
import { METHODOLOGIES } from '../../data/methodologies'
import type { ConventionSlug } from '../../data/types'
import KanbanBoard from '../../components/portal/kanban/KanbanBoard'
import { UnionSeal, ConventionSigil } from '../../components/shared/logos'
import kanbanStyles from '../../components/portal/kanban/Kanban.module.css'
import chromeStyles from '../../components/portal/chrome/Chrome.module.css'
import styles from './SymposiumPage.module.css'

/** Counts cards each Convention has flagged NOT SHARED WITH SYMPOSIUM,
    across its response file and its methodology desks — a real number
    computed from real data, without ever exposing what's behind it. */
function withheldCount(slug: ConventionSlug): number {
  let count = 0
  for (const card of Object.values(BOARDS[slug].cards)) {
    if (card.notSharedWith === 'symposium') count++
  }
  for (const panel of METHODOLOGIES[slug]) {
    if (panel.kind === 'board' && panel.board) {
      for (const card of Object.values(panel.board.cards)) {
        if (card.notSharedWith === 'symposium') count++
      }
    }
  }
  return count
}

export default function SymposiumPage() {
  const report = CONVENTION_SLUGS.map((slug) => ({
    slug,
    info: CONVENTIONS[slug],
    count: withheldCount(slug),
  })).sort((a, b) => b.count - a.count)

  const total = report.reduce((sum, r) => sum + r.count, 0)

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
            <div className={kanbanStyles.codename}>{SYMPOSIUM_BOARD.codename}</div>
            <div className={kanbanStyles.designation}>
              {SYMPOSIUM_BOARD.designation}
            </div>
          </div>
        </div>
        <div className={kanbanStyles.bannerRow}>
          <div className={chromeStyles.sectionBanner}>{SYMPOSIUM_BOARD.banner}</div>
        </div>
        <p className={kanbanStyles.brief}>{SYMPOSIUM_BOARD.brief}</p>
      </div>

      <div className={styles.sectionLabel}>Compartmentalization report</div>
      <p className={styles.reportNote}>
        Items each Convention has marked NOT SHARED WITH SYMPOSIUM across its
        response file and methodology desks. Counts only — content remains
        compartmented at its source.
      </p>
      <div className={styles.reportGrid}>
        {report.map(({ slug, info, count }) => (
          <div
            key={slug}
            className={styles.reportTile}
            style={{ '--tile-accent': `var(${info.accentVar})` } as React.CSSProperties}
          >
            <ConventionSigil convention={slug} size={20} />
            <span className={styles.reportName}>{info.name}</span>
            <span className={styles.reportCount}>{count}</span>
          </div>
        ))}
        <div className={styles.reportTile}>
          <span className={styles.reportName}>Total, all Conventions</span>
          <span className={styles.reportCount}>{total}</span>
        </div>
      </div>

      <div className={styles.sectionLabel} style={{ marginTop: '1.6rem' }}>
        Standing session
      </div>
      <KanbanBoard board={SYMPOSIUM_BOARD} />
    </div>
  )
}
