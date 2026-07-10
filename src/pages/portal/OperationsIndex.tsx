import { Link } from 'react-router-dom'
import { BOARDS } from '../../data/boards'
import { CONVENTIONS, CONVENTION_SLUGS } from '../../data/conventions'
import { ConventionSigil } from '../../components/shared/logos'
import styles from './OperationsIndex.module.css'

export default function OperationsIndex() {
  return (
    <div>
      <div className={styles.head}>
        <h1>Long-Horizon Response Files</h1>
        <p>
          Convention-level standing operations. Access is logged. Personnel are
          reminded that curiosity about response files outside their assignment
          is itself reportable via Form MX-2.
        </p>
      </div>
      <div className={styles.grid}>
        {CONVENTION_SLUGS.map((slug) => {
          const board = BOARDS[slug]
          const info = CONVENTIONS[slug]
          const cards = Object.values(board.cards)
          const hidden = cards.filter((c) => c.notSharedWith).length
          const active = board.columns
            .filter((c) => !/resolved|written|contained/i.test(c.title))
            .reduce((n, c) => n + c.cardIds.length, 0)
          return (
            <Link
              key={slug}
              to={`/portal/operations/${slug}`}
              className={styles.tile}
              style={{ '--tile-accent': `var(${info.accentVar})` } as React.CSSProperties}
            >
              <div className={styles.tileHead}>
                <ConventionSigil convention={slug} size={30} />
                <span className={styles.tileName}>{info.name}</span>
              </div>
              <div className={styles.tileCodename}>{board.codename}</div>
              <div className={styles.tileBrief}>{board.brief}</div>
              <div className={styles.tileStats}>
                <span>
                  <strong>{cards.length}</strong> items
                </span>
                <span>
                  <strong>{active}</strong> open
                </span>
                {hidden > 0 && (
                  <span className={styles.hidden}>
                    <strong>{hidden}</strong> compartmented
                  </span>
                )}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
