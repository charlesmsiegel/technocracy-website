import { Link } from 'react-router-dom'
import { BOARDS } from '../../data/boards'
import { CONVENTIONS, CONVENTION_SLUGS } from '../../data/conventions'
import { useSession } from '../../session/SessionContext'
import { ConventionSigil, ConventionWordmark } from '../../components/shared/logos'
import styles from './OperationsIndex.module.css'

export default function OperationsIndex() {
  const { convention } = useSession()

  return (
    <div>
      <div className={styles.head}>
        <h1>Long-Horizon Response Files</h1>
        <p>
          Convention-level standing operations. Access is scoped to your
          Convention and logged. Personnel are reminded that curiosity about
          response files outside their assignment is itself reportable via
          Form MX-2.
        </p>
      </div>
      <div className={styles.grid}>
        {CONVENTION_SLUGS.map((slug) => {
          const board = BOARDS[slug]
          const info = CONVENTIONS[slug]
          const accessible = slug === convention

          if (!accessible) {
            return (
              <div
                key={slug}
                className={styles.tile}
                aria-label={`${info.name} response file — access restricted`}
                style={
                  {
                    opacity: 0.55,
                    '--tile-accent': `var(${info.accentVar})`,
                  } as React.CSSProperties
                }
              >
                <div className={styles.tileHead} title={info.name}>
                  <ConventionSigil convention={slug} size={30} />
                  <ConventionWordmark convention={slug} width={120} height={26} />
                  <span className="sr-only">{info.name}</span>
                </div>
                <div
                  className={styles.tileCodename}
                  aria-hidden="true"
                  style={{ filter: 'blur(6px)', userSelect: 'none' }}
                >
                  {board.codename}
                </div>
                <div className={styles.tileBrief}>
                  A standing response file exists for this Convention. Its
                  contents are not available at your affiliation.
                </div>
                <div className={styles.tileStats}>
                  <span className={styles.hidden}>
                    COMPARTMENTED — {info.abbr} PERSONNEL ONLY
                  </span>
                </div>
              </div>
            )
          }

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
              <div className={styles.tileHead} title={info.name}>
                <ConventionSigil convention={slug} size={30} />
                <ConventionWordmark convention={slug} width={120} height={26} />
                {/* the wordmark is a masked, aria-hidden image — keep a real
                    text label for screen readers and mask-less environments */}
                <span className="sr-only">{info.name}</span>
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
