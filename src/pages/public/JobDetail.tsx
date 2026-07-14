import { Link, useParams } from 'react-router-dom'
import { getCareer } from '../../data/careers'
import { getDivision } from '../../data/divisions'
import pub from './Public.module.css'
import styles from './Careers.module.css'

export default function JobDetail() {
  const { id } = useParams()
  const job = id ? getCareer(id) : undefined

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

  return (
    <div className={pub.container}>
      <div className={pub.pageHead}>
        <Link to="/careers" className={pub.backLink}>
          ← Open positions
        </Link>
        <div className={styles.jobTags} style={{ marginTop: '1rem' }}>
          <span className={styles.jobTag}>{job.jobFamily}</span>
          <span className={styles.jobTag}>{job.region}</span>
        </div>
        <h1 style={{ marginTop: '0.5rem' }}>{job.title}</h1>
        <p className={pub.meta} style={{ fontSize: '0.95rem' }}>
          {division ? division.publicName : 'Corporate'} · {job.location} ·{' '}
          {job.employmentType}
        </p>
      </div>

      <div className={pub.section} style={{ paddingTop: 0 }}>
        <div className={pub.sectionTitle}>About this role</div>
        <div className={pub.prose}>
          <p>{job.blurb}</p>
        </div>
      </div>

      <div className={pub.section}>
        <div className={pub.sectionTitle}>What we're looking for</div>
        <ul className={styles.reqList} style={{ fontSize: '0.92rem' }}>
          {job.requirements.map((req, i) => (
            <li key={i}>{req}</li>
          ))}
        </ul>
      </div>

      <div className={pub.section}>
        <p className={pub.meta} style={{ marginBottom: '1rem' }}>
          To apply, continue excelling. A representative will contact you at
          the appropriate stage of your development — or you may accelerate
          matters below.
        </p>
        <Link to={`/careers/${job.id}/apply`} className={pub.ctaButton}>
          Apply for this position
        </Link>
      </div>
    </div>
  )
}
