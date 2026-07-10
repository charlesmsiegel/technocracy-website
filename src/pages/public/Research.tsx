import { Link } from 'react-router-dom'
import { MONTHLY_EXERCISE, PAPERS, RESEARCH_INTRO } from '../../data/research'
import pub from './Public.module.css'

export default function Research() {
  return (
    <div className={pub.container}>
      <div className={pub.pageHead}>
        <h1>Our Research</h1>
        <p>
          Selected publications from across the Consensus Holdings divisions.
          Abstracts are provided for all listed work.
        </p>
      </div>

      <div className={pub.section} style={{ paddingTop: 0 }}>
        <div className={pub.prose} style={{ marginBottom: '2rem' }}>
          {RESEARCH_INTRO.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div className={pub.sectionTitle}>Recent publications</div>
        <div style={{ display: 'grid', gap: '0.75rem' }}>
          {PAPERS.map((paper) => (
            <Link
              key={paper.slug}
              to={`/research/${paper.slug}`}
              className={pub.cardLink}
              style={{ padding: '1rem 1.25rem' }}
            >
              <span className={pub.cardTitle} style={{ fontSize: '1rem' }}>
                {paper.title}
              </span>
              <span className={pub.meta}>
                {paper.authors.join(', ')} · <em>{paper.venue}</em> ·{' '}
                {paper.date}
                {paper.division ? ` · ${paper.division}` : ''}
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className={pub.section}>
        <div className={pub.sectionTitle}>This month’s exercise</div>
        <div className={pub.card}>
          <span className={pub.eyebrow}>{MONTHLY_EXERCISE.month}</span>
          <span className={pub.cardBlurb} style={{ fontSize: '0.95rem', color: 'var(--text)' }}>
            {MONTHLY_EXERCISE.prompt}
          </span>
          <span className={pub.meta}>{MONTHLY_EXERCISE.note}</span>
        </div>
      </div>
    </div>
  )
}
