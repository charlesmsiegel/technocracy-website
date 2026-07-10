import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSession } from '../session/SessionContext'
import { UnionSeal } from '../components/shared/logos'
import styles from './LoginPage.module.css'

const VERIFY_STEPS: [string, string][] = [
  ['CREDENTIALS RECEIVED', 'OK'],
  ['DEVICE POSTURE', 'COMPLIANT'],
  ['BIOMETRIC CADENCE', 'MATCHED'],
  ['LOYALTY INDEX', 'WITHIN TOLERANCE'],
  ['CLEARANCE', 'VERIFIED'],
]

const STEP_MS = 380

export default function LoginPage() {
  const { login } = useSession()
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [verifying, setVerifying] = useState(false)
  const [linesShown, setLinesShown] = useState(0)
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])

  useEffect(() => {
    return () => timers.current.forEach(clearTimeout)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (verifying) return
    setVerifying(true)
    VERIFY_STEPS.forEach((_, i) => {
      timers.current.push(
        setTimeout(() => setLinesShown(i + 1), STEP_MS * (i + 1)),
      )
    })
    timers.current.push(
      setTimeout(() => {
        login(username)
        navigate('/portal')
      }, STEP_MS * (VERIFY_STEPS.length + 1)),
    )
  }

  return (
    <div className={styles.page} data-theme="internal">
      <div className={styles.card}>
        <div className={styles.eyebrow}>Consensus Holdings</div>
        <div className={styles.seal}>
          <UnionSeal size={56} />
        </div>
        <h1 className={styles.wordmark}>Personnel Access</h1>
        <div className={styles.sub}>Integrated Operations Network</div>

        {verifying ? (
          <div className={styles.verifyLog} role="status" aria-live="polite">
            {VERIFY_STEPS.slice(0, linesShown).map(([label, result]) => (
              <div key={label} className={styles.verifyLine}>
                <span>{label}…</span>
                <span>{result}</span>
              </div>
            ))}
            {linesShown < VERIFY_STEPS.length && <div className={styles.cursor} />}
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label htmlFor="designation">Personnel designation</label>
              <input
                id="designation"
                autoComplete="off"
                autoFocus
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="e.g. Voss, L."
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="passphrase">Passphrase</label>
              <input
                id="passphrase"
                type="password"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className={styles.submit}>
              Request Access
            </button>
          </form>
        )}

        <p className={styles.notice}>
          Access is monitored. By proceeding you consent to observation,
          retention, and adjustment. There is no need to be alarmed.
        </p>
      </div>
      <p className={styles.back}>
        <Link to="/">← Return to public site</Link>
      </p>
    </div>
  )
}
