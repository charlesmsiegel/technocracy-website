import { Link, useParams } from 'react-router-dom'
import { INSIGHTS } from '../../data/insights'
import { getDivision } from '../../data/divisions'
import pub from './Public.module.css'

function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function InsightDetail() {
  const { slug } = useParams()
  const article = slug ? INSIGHTS.find((a) => a.slug === slug) : undefined

  if (!article) {
    return (
      <div className={pub.container}>
        <div className={pub.pageHead}>
          <h1>Article not found</h1>
          <p>
            This piece has been retired.{' '}
            <Link to="/insights">Return to Insights.</Link>
          </p>
        </div>
      </div>
    )
  }

  const division =
    article.division && article.division !== 'corporate'
      ? getDivision(article.division)
      : undefined

  return (
    <div className={pub.container}>
      <div className={pub.pageHead}>
        <Link to="/insights" className={pub.backLink}>
          ← Insights
        </Link>
        <div className={pub.eyebrow} style={{ marginTop: '1rem' }}>
          {article.category} · {formatDate(article.date)}
        </div>
        <h1 style={{ marginTop: '0.5rem' }}>{article.title}</h1>
        <p className={pub.meta} style={{ fontSize: '0.95rem' }}>
          By {article.author}
          {division ? ` · ${division.publicName}` : ''}
        </p>
      </div>
      <div className={pub.section} style={{ paddingTop: 0 }}>
        <div className={pub.prose}>
          {article.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </div>
  )
}
