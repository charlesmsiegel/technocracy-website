import { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getCareer } from '../../data/careers'
import { getDivision } from '../../data/divisions'
import { UnionSeal } from '../../components/shared/logos'
import pub from './Public.module.css'
import styles from './JobApply.module.css'

const HOW_HEARD_OPTIONS = [
  'Referral from current personnel',
  'University or campus partnership',
  'Assessment result',
  'Public job posting',
  'Other',
]

const STEP_MS = 420

function confirmationSteps(divisionName: string): [string, string][] {
  return [
    ['APPLICATION RECEIVED', 'LOGGED'],
    ['IDENTITY', 'CONFIRMED'],
    ['PRIOR ASSESSMENT ON FILE', 'FOUND'],
    ['SUITABILITY', 'CONSISTENT WITH PROJECTION'],
    ['ROUTING', divisionName.toUpperCase()],
    ['REPRESENTATIVE', 'ASSIGNED'],
  ]
}

export default function JobApply() {
  const { id } = useParams()
  const job = id ? getCareer(id) : undefined
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [howHeard, setHowHeard] = useState(HOW_HEARD_OPTIONS[0])
  const [why, setWhy] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [linesShown, setLinesShown] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])

  useEffect(() => {
    return () => timers.current.forEach(clearTimeout)
  }, [])

  if (!job) {
    return (
      <div className={pub.container}>
        <div className={pub.pageHead}>
          <h1>Position not found</h1>
          <p>
            This requisition has been filled, withdrawn, or was never posted
            publicly in the first place.{' '}
            <Link to="/careers">Return to open positions.</Link>
          </p>
        </div>
      </div>
    )
  }

  const division = job.division === 'corporate' ? undefined : getDivision(job.division)
  const divisionName = division ? division.publicName : 'Corporate'
  const steps = confirmationSteps(divisionName)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (submitting || submitted) return
    setSubmitting(true)
    steps.forEach((_, i) => {
      timers.current.push(
        setTimeout(() => setLinesShown(i + 1), STEP_MS * (i + 1)),
      )
    })
    timers.current.push(
      setTimeout(() => setSubmitted(true), STEP_MS * (steps.length + 1)),
    )
  }

  if (submitting) {
    return (
      <div className={styles.ominous} data-theme="internal">
        <div className={styles.ominousCard}>
          <div className={styles.ominousSeal}>
            <UnionSeal size={48} />
          </div>
          {submitted ? (
            <>
              <p className={styles.ominousMessage}>
                Thank you for applying — that was not strictly necessary, but
                we appreciate the formality,{' '}
                {name.trim().replace(/\.+$/, '') || 'candidate'}.
              </p>
              <p className={styles.ominousNote}>
                A representative will contact you at the appropriate stage of
                your development. Please do not attempt to contact us first —
                we will know before you finish dialing.
              </p>
              <Link to="/" className={styles.homeLink}>
                Return to the front page
              </Link>
            </>
          ) : (
            <div className={styles.log} role="status" aria-live="polite">
              {steps.slice(0, linesShown).map(([label, result]) => (
                <div key={label} className={styles.logLine}>
                  <span>{label}…</span>
                  <span>{result}</span>
                </div>
              ))}
              {linesShown < steps.length && <div className={styles.cursor} />}
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className={pub.container}>
      <div className={pub.pageHead}>
        <Link to={`/careers/${job.id}`} className={pub.backLink}>
          ← {job.title}
        </Link>
        <h1>Apply</h1>
        <p>
          {job.title} · {divisionName}
        </p>
      </div>

      <div className={`${pub.section} ${styles.page}`} style={{ paddingTop: 0 }}>
        <form className={styles.card} onSubmit={submit}>
          <div className={styles.field}>
            <label htmlFor="applicant-name">Full name</label>
            <input
              id="applicant-name"
              required
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="applicant-email">Email address</label>
            <input
              id="applicant-email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="applicant-how-heard">
              How did you hear about this opening?
            </label>
            <select
              id="applicant-how-heard"
              value={howHeard}
              onChange={(e) => setHowHeard(e.target.value)}
            >
              {HOW_HEARD_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.field}>
            <label htmlFor="applicant-why">
              Why does this role interest you?
            </label>
            <textarea
              id="applicant-why"
              value={why}
              onChange={(e) => setWhy(e.target.value)}
            />
          </div>
          <label className={styles.consent}>
            <input type="checkbox" required />
            <span>
              I consent to standard evaluation procedures, including those
              not listed here.
            </span>
          </label>
          <button type="submit" className={styles.submit}>
            Submit application
          </button>
        </form>
      </div>
    </div>
  )
}
