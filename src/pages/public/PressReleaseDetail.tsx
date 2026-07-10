import { Link, useParams } from 'react-router-dom'
import { getPressRelease } from '../../data/pressReleases'
import { getDivision } from '../../data/divisions'
import pub from './Public.module.css'

function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function PressReleaseDetail() {
  const { slug } = useParams()
  const release = slug ? getPressRelease(slug) : undefined

  if (!release) {
    return (
      <div className={pub.container}>
        <div className={pub.pageHead}>
          <h1>Release not found</h1>
          <p>
            This announcement has been superseded by better news.{' '}
            <Link to="/newsroom">Return to the newsroom.</Link>
          </p>
        </div>
      </div>
    )
  }

  const division = release.division ? getDivision(release.division) : undefined

  return (
    <div className={pub.container}>
      <div className={pub.pageHead}>
        <Link to="/newsroom" className={pub.backLink}>
          ← Newsroom
        </Link>
        <div className={pub.eyebrow} style={{ marginTop: '1rem' }}>
          {formatDate(release.date)}
          {division ? ` · ${division.publicName}` : ' · Corporate'}
        </div>
        <h1 style={{ marginTop: '0.5rem' }}>{release.headline}</h1>
        <p>{release.summary}</p>
      </div>
      <div className={pub.section} style={{ paddingTop: 0 }}>
        <div className={pub.prose}>
          {release.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
          <p className={pub.meta}>
            Media inquiries: newsroom@consensus-holdings.example — responses
            are typically issued before inquiries are received.
          </p>
        </div>
      </div>
    </div>
  )
}
