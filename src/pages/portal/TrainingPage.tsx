import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { TRAINING_COURSES } from '../../data/training'
import hrStyles from './HrPage.module.css'
import styles from './TrainingPage.module.css'

const ALL = 'All'
const MANDATORY = 'Mandatory'
const OPTIONAL = 'Optional'

export default function TrainingPage() {
  const [filter, setFilter] = useState(ALL)

  const courses = useMemo(() => {
    if (filter === MANDATORY) return TRAINING_COURSES.filter((c) => c.mandatory)
    if (filter === OPTIONAL) return TRAINING_COURSES.filter((c) => !c.mandatory)
    return TRAINING_COURSES
  }, [filter])

  const mandatoryCount = TRAINING_COURSES.filter((c) => c.mandatory).length

  return (
    <div>
      <div className={hrStyles.head}>
        <h1>Training &amp; Certification Desk</h1>
        <p>
          {mandatoryCount} of {TRAINING_COURSES.length} listed courses are
          mandatory for at least one personnel category. Most map directly
          to a form in the{' '}
          <Link to="/portal/hr">Human Resources Directorate</Link> — complete
          the course before you need the form, not after.
        </p>
      </div>

      <div className={styles.filterRow}>
        {[ALL, MANDATORY, OPTIONAL].map((f) => (
          <button
            key={f}
            type="button"
            className={filter === f ? styles.filterActive : styles.filter}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {courses.map((course) => (
          <div key={course.id} className={styles.card}>
            <div className={styles.cardHead}>
              <span className={styles.code}>{course.code}</span>
              <span
                className={
                  course.mandatory ? styles.badgeMandatory : styles.badgeOptional
                }
              >
                {course.mandatory ? 'Mandatory' : 'Optional'}
              </span>
            </div>
            <span className={styles.title}>{course.title}</span>
            <span className={styles.meta}>
              {course.recurrence} · {course.hours}h
              {course.relatedForm ? ` · Form ${course.relatedForm}` : ''}
            </span>
            <span className={styles.description}>{course.description}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
