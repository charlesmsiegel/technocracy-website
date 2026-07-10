import { Link } from 'react-router-dom'
import { BOARDS } from '../../data/boards'
import { CONVENTIONS, CONVENTION_SLUGS } from '../../data/conventions'
import { METHODOLOGIES } from '../../data/methodologies'
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
          Standing operations assigned to your Convention. This listing is
          complete. Personnel with reason to believe otherwise should report
          that belief via Form MX-2.
        </p>
      </div>
      <div className={styles.grid}>
        {CONVENTION_SLUGS.filter((slug) => slug === convention).map((slug) => {
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

      {convention && (
        <>
          <div className={styles.head} style={{ marginTop: '2rem' }}>
            <h1 style={{ fontSize: '1.05rem' }}>Methodology Desks</h1>
            <p>
              Routine workstreams for your Convention’s Methodologies. Desk
              access implies neither need-to-know nor want-to-know.
            </p>
          </div>
          <div className={styles.grid}>
            {METHODOLOGIES[convention].map((panel) => {
              const info = CONVENTIONS[convention]
              const boardCards = panel.board
                ? Object.keys(panel.board.cards).length
                : 0
              return (
                <Link
                  key={panel.id}
                  to={`/portal/operations/${convention}/${panel.id}`}
                  className={styles.tile}
                  style={
                    { '--tile-accent': `var(${info.accentVar})` } as React.CSSProperties
                  }
                >
                  <div className={styles.tileCodename} style={{ fontSize: '1.15rem' }}>
                    {panel.name}
                  </div>
                  <div className={styles.tileBrief}>{panel.role}</div>
                  <div className={styles.tileStats}>
                    <span>
                      {panel.kind === 'board' ? (
                        <>
                          <strong>{boardCards}</strong> items · work queue
                        </>
                      ) : (
                        <>
                          <strong>{panel.metrics?.length ?? 0}</strong>{' '}
                          instruments · telemetry
                        </>
                      )}
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}
