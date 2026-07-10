import { Link, useParams } from 'react-router-dom'
import { getPaper } from '../../data/research'
import pub from './Public.module.css'

export default function ResearchPaper() {
  const { slug } = useParams()
  const paper = slug ? getPaper(slug) : undefined

  if (!paper) {
    return (
      <div className={pub.container}>
        <div className={pub.pageHead}>
          <h1>Publication not found</h1>
          <p>
            The requested publication has been superseded by better findings.{' '}
            <Link to="/research">Return to Our Research.</Link>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className={pub.container}>
      <div className={pub.pageHead}>
        <Link to="/research" className={pub.backLink}>
          ← Our Research
        </Link>
        <div className={pub.eyebrow} style={{ marginTop: '1rem' }}>
          {paper.venue} · {paper.date}
          {paper.division ? ` · ${paper.division}` : ''}
        </div>
        <h1 style={{ marginTop: '0.5rem', fontSize: 'clamp(1.5rem, 3vw, 2.1rem)' }}>
          {paper.title}
        </h1>
        <p>{paper.authors.join(' · ')}</p>
      </div>

      <div className={pub.section} style={{ paddingTop: 0 }}>
        <div className={pub.sectionTitle}>Abstract</div>
        <div className={pub.prose}>
          {paper.abstract.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </div>
  )
}
