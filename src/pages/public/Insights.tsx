import { Link } from 'react-router-dom'
import { INSIGHTS, INSIGHTS_INTRO } from '../../data/insights'
import pub from './Public.module.css'

export default function Insights() {
  return (
    <div className={pub.container}>
      <div className={pub.pageHead}>
        <h1>Insights</h1>
        <p>{INSIGHTS_INTRO[0]}</p>
      </div>

      <div className={pub.section} style={{ paddingTop: 0 }}>
        <div className={pub.grid3}>
          {INSIGHTS.map((article) => (
            <Link
              key={article.slug}
              to={`/insights/${article.slug}`}
              className={pub.cardLink}
            >
              <span className={pub.eyebrow}>{article.category}</span>
              <span className={pub.cardTitle}>{article.title}</span>
              <span className={pub.cardBlurb}>{article.summary}</span>
              <span className={pub.meta}>{article.author}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
