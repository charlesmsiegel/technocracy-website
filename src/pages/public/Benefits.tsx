import { Link } from 'react-router-dom'
import { BENEFITS_INTRO, BENEFIT_CATEGORIES, BENEFIT_STATS } from '../../data/benefits'
import pub from './Public.module.css'

export default function Benefits() {
  return (
    <div className={pub.container}>
      <div className={pub.pageHead}>
        <h1>Benefits</h1>
        <p>
          The complete guide to what you receive in exchange for what you
          give. Every benefit below applies at every Consensus Holdings site,
          worldwide, starting your first day.
        </p>
      </div>

      <div className={pub.section} style={{ paddingTop: 0 }}>
        <div className={pub.prose} style={{ marginBottom: '2rem' }}>
          {BENEFITS_INTRO.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div className={pub.statStrip}>
          {BENEFIT_STATS.map((stat) => (
            <div key={stat.label} className={pub.stat}>
              <div className={pub.statValue}>{stat.value}</div>
              <div className={pub.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {BENEFIT_CATEGORIES.map((category) => (
        <div key={category.id} className={pub.section}>
          <div className={pub.sectionTitle}>{category.title}</div>
          <div className={pub.grid3}>
            {category.items.map((item) => (
              <div key={item.title} className={pub.card}>
                <span className={pub.cardTitle}>{item.title}</span>
                <span className={pub.cardBlurb}>{item.blurb}</span>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className={pub.section} style={{ textAlign: 'center' }}>
        <Link to="/careers" className={pub.ctaButton}>
          View open positions
        </Link>
      </div>
    </div>
  )
}
