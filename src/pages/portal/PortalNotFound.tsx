import { Link } from 'react-router-dom'

export default function PortalNotFound() {
  return (
    <div>
      <h1
        style={{
          fontFamily: 'var(--font-mono)',
          color: 'var(--status-critical)',
          letterSpacing: '0.1em',
        }}
      >
        RECORD EXPUNGED
      </h1>
      <p style={{ color: 'var(--text-muted)', marginTop: '0.75rem', maxWidth: '60ch' }}>
        The resource you attempted to access has been archived, reclassified,
        or never authorized for existence. This attempt has been noted in your
        file — routinely, of course.
      </p>
      <p style={{ marginTop: '0.75rem' }}>
        <Link to="/portal" style={{ color: 'var(--accent)' }}>
          Return to Command Dashboard
        </Link>
      </p>
    </div>
  )
}
