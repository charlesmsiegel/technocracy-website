import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { CAREERS, JOB_FAMILY_ORDER, REGION_ORDER } from '../../data/careers'
import { getDivision } from '../../data/divisions'
import pub from './Public.module.css'
import styles from './Careers.module.css'

const ALL = 'All'

/** Builds select options in a fixed canonical order, keeping only values
    actually present in CAREERS so the dropdown never offers an empty result. */
function optionsInOrder(order: readonly string[], present: Set<string>): string[] {
  return order.filter((value) => present.has(value))
}

export default function Careers() {
  const [search, setSearch] = useState('')
  const [region, setRegion] = useState(ALL)
  const [country, setCountry] = useState(ALL)
  const [jobFamily, setJobFamily] = useState(ALL)
  const [division, setDivision] = useState(ALL)

  const regionOptions = useMemo(
    () => optionsInOrder(REGION_ORDER, new Set(CAREERS.map((j) => j.region))),
    [],
  )
  const jobFamilyOptions = useMemo(
    () => optionsInOrder(JOB_FAMILY_ORDER, new Set(CAREERS.map((j) => j.jobFamily))),
    [],
  )
  // Country list narrows to the selected region, like a real job-search filter.
  const countryOptions = useMemo(() => {
    const pool = region === ALL ? CAREERS : CAREERS.filter((j) => j.region === region)
    return [...new Set(pool.map((j) => j.country))].sort()
  }, [region])
  const divisionOptions = useMemo(
    () => [...new Set(CAREERS.map((j) => j.division))],
    [],
  )

  const results = useMemo(() => {
    const q = search.trim().toLowerCase()
    return CAREERS.filter((job) => {
      if (region !== ALL && job.region !== region) return false
      if (country !== ALL && job.country !== country) return false
      if (jobFamily !== ALL && job.jobFamily !== jobFamily) return false
      if (division !== ALL && job.division !== division) return false
      if (q) {
        const haystack = `${job.title} ${job.blurb} ${job.jobFamily} ${job.city}`.toLowerCase()
        if (!haystack.includes(q)) return false
      }
      return true
    })
  }, [search, region, country, jobFamily, division])

  const hasFilters =
    search !== '' || region !== ALL || country !== ALL || jobFamily !== ALL || division !== ALL

  const clearAll = () => {
    setSearch('')
    setRegion(ALL)
    setCountry(ALL)
    setJobFamily(ALL)
    setDivision(ALL)
  }

  return (
    <div className={pub.container}>
      <div className={pub.pageHead}>
        <h1>Build the future. Belong to it.</h1>
        <p>
          Consensus Holdings recruits exceptional individuals — often before
          they know they are exceptional. If you have always felt that the
          world runs on rules other people cannot quite see, we should talk.
          We may already have.
        </p>
      </div>

      <div className={pub.section} style={{ paddingTop: 0 }}>
        <div className={pub.sectionTitle}>Benefits</div>
        <div className={pub.grid2}>
          {[
            {
              title: 'Total health',
              blurb:
                'Industry-leading medical coverage, including circumstances other insurers decline to describe. Our associates are, measurably, in the best shape of anyone’s lives.',
            },
            {
              title: 'Mobility',
              blurb:
                'Generous relocation support, worldwide and beyond expectations, including on short notice. Most relocations come with a promotion. The rest come with an explanation.',
            },
            {
              title: 'Continuity',
              blurb:
                'Retirement planning with guaranteed continuity of benefits. Whatever tomorrow holds, your plan already holds it too.',
            },
            {
              title: 'Belonging',
              blurb:
                'Applicants of every background are encouraged, including unconventional educational histories. A routine background check is required; it has already begun.',
            },
          ].map((benefit) => (
            <div key={benefit.title} className={pub.card}>
              <span className={pub.cardTitle}>{benefit.title}</span>
              <span className={pub.cardBlurb}>{benefit.blurb}</span>
            </div>
          ))}
        </div>
        <p style={{ marginTop: '1rem' }}>
          <Link to="/benefits" className={pub.ctaGhost}>
            View the full benefits guide
          </Link>
        </p>
      </div>

      <div className={pub.section}>
        <div className={pub.sectionTitle}>Search open positions</div>

        <div className={styles.filterBar}>
          <input
            type="search"
            className={styles.searchInput}
            placeholder="Search by title, keyword, or city…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search open positions"
          />
          <div className={styles.selectRow}>
            <select
              className={styles.select}
              value={region}
              onChange={(e) => {
                setRegion(e.target.value)
                setCountry(ALL)
              }}
              aria-label="Filter by region"
            >
              <option value={ALL}>All regions</option>
              {regionOptions.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
            <select
              className={styles.select}
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              aria-label="Filter by country"
            >
              <option value={ALL}>All countries</option>
              {countryOptions.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <select
              className={styles.select}
              value={jobFamily}
              onChange={(e) => setJobFamily(e.target.value)}
              aria-label="Filter by job family"
            >
              <option value={ALL}>All job families</option>
              {jobFamilyOptions.map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </select>
            <select
              className={styles.select}
              value={division}
              onChange={(e) => setDivision(e.target.value)}
              aria-label="Filter by division"
            >
              <option value={ALL}>All divisions</option>
              {divisionOptions.map((d) => (
                <option key={d} value={d}>
                  {d === 'corporate' ? 'Corporate' : getDivision(d)?.shortName ?? d}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className={styles.resultsRow}>
          <span className={styles.resultsCount}>
            {results.length} {results.length === 1 ? 'position' : 'positions'} found
          </span>
          {hasFilters && (
            <button type="button" className={styles.clearButton} onClick={clearAll}>
              Clear filters
            </button>
          )}
        </div>

        {results.length === 0 ? (
          <div className={styles.empty}>
            No positions match your search. Broaden your criteria, or check
            back — the list changes more often than most.
          </div>
        ) : (
          <div className={styles.jobGrid}>
            {results.map((job) => {
              const div = job.division === 'corporate' ? undefined : getDivision(job.division)
              return (
                <div key={job.id} className={styles.jobCard}>
                  <div className={styles.jobTags}>
                    <span className={styles.jobTag}>{job.jobFamily}</span>
                    <span className={styles.jobTag}>{job.region}</span>
                  </div>
                  <span className={styles.jobTitle}>{job.title}</span>
                  <span className={styles.jobMeta}>
                    {div ? div.publicName : 'Corporate'} · {job.location} ·{' '}
                    {job.employmentType}
                  </span>
                  <span className={styles.jobBlurb}>{job.blurb}</span>
                  {job.requirements.length > 0 && (
                    <ul className={styles.reqList}>
                      {job.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  )}
                  <span className={pub.meta}>
                    To apply, continue excelling. A representative will
                    contact you at the appropriate stage of your development.
                  </span>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
