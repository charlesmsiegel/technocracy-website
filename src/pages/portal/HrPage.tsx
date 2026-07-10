import { HR_FORMS } from '../../data/hrForms'
import { useSession } from '../../session/SessionContext'
import styles from './HrPage.module.css'

const POLICIES = [
  {
    title: 'Doctrine of Mutuality',
    body: 'The Union provides for you completely; you provide for the Union completely. Personnel experiencing an imbalance in this arrangement should report it — the imbalance, not the arrangement.',
  },
  {
    title: 'Mandatory Disclosure',
    body: 'Entanglements, exposures, anomalies, and doubts must be disclosed within 72 hours of occurrence or of first suspicion, whichever is earlier. Timely disclosure is an affirmative defense. Late disclosure is evidence.',
  },
  {
    title: 'Wellness & Conditioning',
    body: 'Voluntary Social Conditioning refreshes are available on a walk-in basis and are, of course, entirely voluntary. Attendance records are reviewed quarterly for enthusiasm.',
  },
  {
    title: 'Benefits Continuity',
    body: 'Your coverage continues uninterrupted across reassignment, redeployment, and, where applicable, instantiation. The Union honors its commitments to you — all versions of you.',
  },
]

export default function HrPage() {
  const { operativeName } = useSession()

  return (
    <div>
      <div className={styles.head}>
        <h1>Human Resources Directorate</h1>
        <p>
          Serving those who serve. Download, complete in blue-black ink, and
          submit in triplicate to your Amalgam Supervisor. Digital submission
          is coming in Q3 and has been coming in Q3 since 2019.
        </p>
        <div className={styles.countersign}>
          Forms will be countersigned under: {operativeName}
        </div>
      </div>

      <div className={styles.sectionTitle}>Forms library</div>
      <div className={styles.formGrid}>
        {HR_FORMS.map((form) => (
          <a
            key={form.id}
            className={styles.formCard}
            href={`${import.meta.env.BASE_URL}${form.file}`}
            download
          >
            <span className={styles.formIcon}>
              {form.code}
              <br />
              PDF
            </span>
            <span className={styles.formBody}>
              <span className={styles.formTitle}>{form.title}</span>
              <span className={styles.formBlurb}>{form.blurb}</span>
              <span className={styles.formMeta}>
                {form.revision} · {form.pages} page{form.pages > 1 ? 's' : ''} ·
                retention: permanent
              </span>
            </span>
          </a>
        ))}
      </div>

      <div className={styles.sectionTitle}>Policy reminders</div>
      <div className={styles.policyGrid}>
        {POLICIES.map((policy) => (
          <div key={policy.title} className={styles.policy}>
            <div className={styles.policyTitle}>{policy.title}</div>
            <div className={styles.policyBody}>{policy.body}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
