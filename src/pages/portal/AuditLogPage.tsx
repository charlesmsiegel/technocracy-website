import { useSession } from '../../session/SessionContext'
import { AUDIT_LOG, withOperative } from '../../data/auditLog'
import styles from './AuditLogPage.module.css'

export default function AuditLogPage() {
  const { operativeName } = useSession()
  const flaggedCount = AUDIT_LOG.filter((e) => e.flagged).length

  return (
    <div>
      <div className={styles.head}>
        <h1>Surveillance &amp; Audit Log</h1>
        <p>
          A live excerpt of the standing monitoring feed for this session
          and this facility. The feed does not pause while you read it,
          and reading it is itself an entry in it.
        </p>
      </div>

      <div className={styles.summary}>
        <span>
          <strong>{AUDIT_LOG.length}</strong> entries, most recent window
        </span>
        <span className={styles.flaggedSummary}>
          <strong>{flaggedCount}</strong> flagged for review
        </span>
      </div>

      <div className={styles.log} role="log">
        {AUDIT_LOG.map((entry) => (
          <div
            key={entry.id}
            className={entry.flagged ? styles.lineFlagged : styles.line}
          >
            <span className={styles.time}>{entry.time}</span>
            <span className={styles.text}>
              {withOperative(entry.line, operativeName)}
            </span>
          </div>
        ))}
      </div>

      <p className={styles.footnote}>
        Damian-scale awareness: all procedures logged // deviation is
        inefficiency. This page refreshes when you leave and return to it,
        not before.
      </p>
    </div>
  )
}
