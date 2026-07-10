import { useState } from 'react'

/* The newsletter form. Any address entered turns out to be already
   subscribed, which is of course a coincidence of good coverage. */
export default function NewsletterSignup() {
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState('')

  return (
    <div>
      <h3
        style={{
          fontSize: '0.78rem',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          color: '#ffffff',
          marginBottom: '0.75rem',
        }}
      >
        Stay informed
      </h3>
      {submitted ? (
        <p style={{ fontSize: '0.85rem', color: '#b9c6d6', maxWidth: '26ch' }}>
          You are already subscribed. You’re welcome.
        </p>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault()
            if (email.trim()) setSubmitted(true)
          }}
          style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.25)',
              borderRadius: '6px',
              color: '#ffffff',
              padding: '0.45rem 0.7rem',
              fontSize: '0.85rem',
              minWidth: '180px',
            }}
          />
          <button
            type="submit"
            style={{
              background: '#ffffff',
              color: 'var(--heading)',
              border: 'none',
              borderRadius: '6px',
              fontWeight: 700,
              fontSize: '0.82rem',
              padding: '0.45rem 0.9rem',
            }}
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  )
}
