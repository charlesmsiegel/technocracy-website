import { Link } from 'react-router-dom'

/* The single denial voice for anything an operative may not see. Foreign
   files and nonexistent addresses MUST render identically — any difference
   in copy confirms existence, which is itself a disclosure. */
export default function NoRecord({ kind }: { kind: string }) {
  return (
    <div>
      <h1
        style={{
          fontFamily: 'var(--font-mono)',
          color: 'var(--status-critical)',
          letterSpacing: '0.1em',
        }}
      >
        NO RECORD AT YOUR AFFILIATION
      </h1>
      <p
        style={{
          color: 'var(--text-muted)',
          marginTop: '0.75rem',
          maxWidth: '62ch',
        }}
      >
        No {kind} exists at this address for personnel of your affiliation.
        If you were given this address, complete Form MX-2 and identify who
        gave it to you. This attempt has been recorded and, in the spirit of
        the Doctrine of Mutuality, forgiven. Once.
      </p>
      <p style={{ marginTop: '0.75rem' }}>
        <Link to="/portal/operations" style={{ color: 'var(--accent)' }}>
          Return to your assigned operations
        </Link>
      </p>
    </div>
  )
}
