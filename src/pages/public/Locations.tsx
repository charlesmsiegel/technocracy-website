import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { FLAGSHIP_LOCATIONS } from '../../data/locations'
import { CAREERS, REGION_ORDER } from '../../data/careers'
import { getDivision } from '../../data/divisions'
import pub from './Public.module.css'
import styles from './Locations.module.css'

export default function Locations() {
  // Directory below the flagship cards is derived live from the careers
  // dataset — one line to maintain instead of a second list that drifts.
  const byRegion = useMemo(() => {
    const map = new Map<string, Set<string>>()
    for (const job of CAREERS) {
      if (job.region === 'Off-World Rotation' || job.region === 'Remote / Global') continue
      const key = job.region
      const line = job.country === 'Multiple' ? job.city : `${job.city}, ${job.country}`
      if (!map.has(key)) map.set(key, new Set())
      map.get(key)!.add(line)
    }
    return REGION_ORDER.filter((r) => map.has(r)).map((region) => ({
      region,
      places: [...map.get(region)!].sort(),
    }))
  }, [])

  return (
    <div className={pub.container}>
      <div className={pub.pageHead}>
        <h1>Locations</h1>
        <p>
          Consensus Holdings operates facilities on every inhabited
          continent. Below: the campuses we profile by name, and the full
          directory of cities with an active presence today.
        </p>
      </div>

      <div className={pub.section} style={{ paddingTop: 0 }}>
        <div className={pub.sectionTitle}>Flagship campuses</div>
        <div className={pub.grid3}>
          {FLAGSHIP_LOCATIONS.map((loc) => {
            const division = loc.division === 'corporate' ? undefined : getDivision(loc.division)
            return (
              <div key={loc.id} className={pub.card}>
                <span className={pub.eyebrow}>
                  {division ? division.publicName : 'Corporate'}
                </span>
                <span className={pub.cardTitle}>{loc.name}</span>
                <span className={styles.place}>
                  {loc.city}, {loc.country} · {loc.established}
                </span>
                <span className={pub.cardBlurb}>{loc.blurb}</span>
              </div>
            )
          })}
        </div>
      </div>

      <div className={pub.section}>
        <div className={pub.sectionTitle}>Full directory</div>
        <div className={styles.directory}>
          {byRegion.map(({ region, places }) => (
            <div key={region} className={styles.regionBlock}>
              <div className={styles.regionTitle}>
                {region}
                <span className={styles.regionCount}>{places.length}</span>
              </div>
              <div className={styles.placeList}>{places.join(' · ')}</div>
            </div>
          ))}
        </div>
        <p className={pub.meta} style={{ marginTop: '1rem' }}>
          Directory reflects cities with an open requisition today; see{' '}
          <Link to="/careers">Careers</Link> for current openings by location.
        </p>
      </div>
    </div>
  )
}
