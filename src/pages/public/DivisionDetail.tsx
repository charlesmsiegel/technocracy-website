import { Link, useParams } from 'react-router-dom'
import { getDivision } from '../../data/divisions'
import { PRESS_RELEASES } from '../../data/pressReleases'
import { ConventionSigil } from '../../components/shared/logos'
import { DIVISION_PHOTOS, DIVISION_PHOTO_ALT } from '../../data/photos'
import pub from './Public.module.css'

export default function DivisionDetail() {
  const { slug } = useParams()
  const division = slug ? getDivision(slug) : undefined

  if (!division) {
    return (
      <div className={pub.container}>
        <div className={pub.pageHead}>
          <h1>Division not found</h1>
          <p>
            The page you requested does not exist, and never has.{' '}
            <Link to="/divisions">View our divisions.</Link>
          </p>
        </div>
      </div>
    )
  }

  const related = PRESS_RELEASES.filter((pr) => pr.division === division.slug)

  return (
    <div className={pub.container}>
      <div className={pub.pageHead}>
        <Link to="/divisions" className={pub.backLink}>
          ← All divisions
        </Link>
        <div
          className={pub.divisionBadge}
          style={{ color: `var(--cv-${division.slug})`, marginTop: '1rem' }}
        >
          <ConventionSigil convention={division.slug} size={30} />
          {division.publicName}
        </div>
        <h1 style={{ marginTop: '0.5rem' }}>{division.sector}</h1>
        <p>{division.tagline}</p>
      </div>

      <img
        src={DIVISION_PHOTOS[division.slug]}
        alt={DIVISION_PHOTO_ALT[division.slug]}
        style={{
          width: '100%',
          maxHeight: '340px',
          objectFit: 'cover',
          borderRadius: 'var(--radius)',
          boxShadow: 'var(--shadow)',
        }}
      />

      <div className={pub.section}>
        <div className={pub.statStrip}>
          {division.stats.map((s) => (
            <div key={s.label} className={pub.stat}>
              <div className={pub.statValue}>{s.value}</div>
              <div className={pub.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={pub.section}>
        <div className={pub.prose}>
          {division.description.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>

      <div className={pub.section}>
        <div className={pub.sectionTitle}>Selected achievements</div>
        <div className={pub.grid2}>
          {division.accomplishments.map((a) => (
            <div key={a.title} className={pub.card}>
              <span className={pub.cardTitle}>{a.title}</span>
              <span className={pub.cardBlurb}>{a.blurb}</span>
            </div>
          ))}
        </div>
      </div>

      {related.length > 0 && (
        <div className={pub.section}>
          <div className={pub.sectionTitle}>In the news</div>
          <div className={pub.grid3}>
            {related.map((pr) => (
              <Link
                key={pr.slug}
                to={`/newsroom/${pr.slug}`}
                className={pub.cardLink}
              >
                <span className={pub.meta}>{pr.date}</span>
                <span className={pub.cardTitle}>{pr.headline}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
