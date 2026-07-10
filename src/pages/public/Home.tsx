import { Link } from 'react-router-dom'
import { DIVISIONS } from '../../data/divisions'
import { PRESS_RELEASES } from '../../data/pressReleases'
import { INITIATIVES } from '../../data/initiatives'
import { ConventionSigil } from '../../components/shared/logos'
import { HERO_PHOTO } from '../../data/photos'
import pub from './Public.module.css'
import styles from './Home.module.css'

/* The public echo of the internal Consensus telemetry — investor-relations
   numbers that are just slightly too calm. */
const INDICATORS = [
  { label: 'Global Stability Index', value: '98.7', up: true },
  { label: 'Consumer Confidence (CH basket)', value: '112.4', up: true },
  { label: 'Incidents Requiring Comment', value: '0', up: false },
  { label: 'Communities Served', value: '11,203', up: true },
  { label: 'Predictability (rolling 10-yr)', value: '99.1%', up: true },
]

function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function Home() {
  const featured = PRESS_RELEASES.slice(0, 3)
  const indicators = [...INDICATORS, ...INDICATORS]

  return (
    <>
      <section
        className={styles.hero}
        style={{ '--hero-photo': `url(${HERO_PHOTO})` } as React.CSSProperties}
      >
        <div className={styles.heroInner}>
          <div className={styles.heroEyebrow}>Consensus Holdings</div>
          <h1 className={styles.heroTitle}>A better world, by design.</h1>
          <p className={styles.heroLede}>
            For as long as anyone can remember, Consensus Holdings has been
            there — in your medicine, your markets, your media, and your sky —
            quietly making tomorrow behave. Five divisions. One future. No
            surprises.
          </p>
          <div className={styles.heroActions}>
            <Link to="/divisions" className={pub.ctaButton}>
              Explore our divisions
            </Link>
            <Link to="/initiatives" className={pub.ctaGhost}>
              Our global initiatives
            </Link>
          </div>
        </div>
        <div className={styles.tickerStrip} aria-label="Global progress indicators">
          <div className={styles.tickerInner}>
            {indicators.map((ind, i) => (
              <span
                key={`${ind.label}-${i}`}
                className={`${styles.tickerItem} ${ind.up ? styles.tickerUp : ''}`}
              >
                {ind.label}: <strong>{ind.value}</strong>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className={pub.section}>
        <div className={pub.container}>
          <div className={pub.sectionTitle}>Our divisions</div>
          <div className={pub.grid3}>
            {DIVISIONS.map((d) => (
              <Link
                key={d.slug}
                to={`/divisions/${d.slug}`}
                className={pub.cardLink}
              >
                <span
                  className={pub.divisionBadge}
                  style={{ color: `var(--cv-${d.slug})` }}
                >
                  <ConventionSigil convention={d.slug} size={22} />
                  {d.shortName}
                </span>
                <span className={pub.cardTitle}>{d.sector}</span>
                <span className={pub.cardBlurb}>{d.tagline}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={pub.section}>
        <div className={pub.container}>
          <div className={pub.sectionTitle}>Latest announcements</div>
          <div className={pub.grid3}>
            {featured.map((pr) => (
              <Link
                key={pr.slug}
                to={`/newsroom/${pr.slug}`}
                className={pub.cardLink}
              >
                <span className={pub.meta}>{formatDate(pr.date)}</span>
                <span className={pub.cardTitle}>{pr.headline}</span>
                <span className={pub.cardBlurb}>{pr.summary}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={pub.section}>
        <div className={pub.container}>
          <div className={pub.sectionTitle}>Commitments that count</div>
          <div className={pub.statStrip}>
            {INITIATIVES.slice(0, 4).map((init) => (
              <div key={init.id} className={pub.stat}>
                <div className={pub.statValue}>{init.metric.value}</div>
                <div className={pub.statLabel}>
                  {init.metric.label} · {init.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
