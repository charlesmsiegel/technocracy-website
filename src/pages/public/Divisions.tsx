import { Link } from 'react-router-dom'
import { DIVISIONS } from '../../data/divisions'
import { ConventionSigil } from '../../components/shared/logos'
import pub from './Public.module.css'

export default function Divisions() {
  return (
    <div className={pub.container}>
      <div className={pub.pageHead}>
        <h1>Five divisions. One future.</h1>
        <p>
          Every Consensus Holdings division leads its field — and has, for as
          long as its field has existed. Together they form an integrated
          system for human progress, each part precisely where it belongs.
        </p>
      </div>
      <div className={pub.section}>
        <div className={pub.grid2}>
          {DIVISIONS.map((d) => (
            <Link key={d.slug} to={`/divisions/${d.slug}`} className={pub.cardLink}>
              <span
                className={pub.divisionBadge}
                style={{ color: `var(--cv-${d.slug})` }}
              >
                <ConventionSigil convention={d.slug} size={24} />
                {d.publicName}
              </span>
              <span className={pub.cardTitle}>{d.sector}</span>
              <span className={pub.cardBlurb}>{d.tagline}</span>
              <span className={pub.meta}>
                {d.stats
                  .slice(0, 2)
                  .map((s) => `${s.label}: ${s.value}`)
                  .join(' · ')}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
