import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PRESS_RELEASES } from '../../data/pressReleases'
import { DIVISIONS } from '../../data/divisions'
import type { ConventionSlug } from '../../data/types'
import pub from './Public.module.css'

export default function Newsroom() {
  const [filter, setFilter] = useState<ConventionSlug | 'all'>('all')
  const releases =
    filter === 'all'
      ? PRESS_RELEASES
      : PRESS_RELEASES.filter((pr) => pr.division === filter)

  return (
    <div className={pub.container}>
      <div className={pub.pageHead}>
        <h1>Newsroom</h1>
        <p>
          Everything worth knowing about Consensus Holdings, exactly when it is
          appropriate for you to know it.
        </p>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <button
          type="button"
          className={filter === 'all' ? pub.ctaButton : pub.ctaGhost}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        {DIVISIONS.map((d) => (
          <button
            key={d.slug}
            type="button"
            className={filter === d.slug ? pub.ctaButton : pub.ctaGhost}
            onClick={() => setFilter(d.slug)}
          >
            {d.shortName}
          </button>
        ))}
      </div>

      <div className={pub.section}>
        <div className={pub.grid3}>
          {releases.map((pr) => (
            <Link
              key={pr.slug}
              to={`/newsroom/${pr.slug}`}
              className={pub.cardLink}
            >
              <span className={pub.meta}>{pr.date}</span>
              <span className={pub.cardTitle}>{pr.headline}</span>
              <span className={pub.cardBlurb}>{pr.summary}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
