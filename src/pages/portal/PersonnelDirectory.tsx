import { useMemo, useState } from 'react'
import { useSession } from '../../session/SessionContext'
import { PERSONNEL } from '../../data/personnel'
import { CONVENTIONS } from '../../data/conventions'
import { ConventionSigil } from '../../components/shared/logos'
import styles from './PersonnelDirectory.module.css'

export default function PersonnelDirectory() {
  const { convention, operativeName } = useSession()
  const [query, setQuery] = useState('')

  const visible = useMemo(
    () =>
      PERSONNEL.filter(
        (p) => p.convention === convention || p.convention === 'corporate',
      ),
    [convention],
  )

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return visible
    return visible.filter((p) =>
      `${p.name} ${p.designation} ${p.site} ${p.note}`.toLowerCase().includes(q),
    )
  }, [visible, query])

  const info = convention ? CONVENTIONS[convention] : null

  return (
    <div>
      <div className={styles.head}>
        <h1>Personnel Directory</h1>
        <p>
          Visible: {info ? info.name : 'your Convention'} and shared
          corporate staff. Records outside your Convention are not
          returned by this query, regardless of how it is phrased —
          consistent with the response {operativeName} received the last
          time that was tested.
        </p>
      </div>

      <input
        type="search"
        className={styles.search}
        placeholder="Search by name, designation, or note…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Search personnel"
      />

      <div className={styles.count}>
        {results.length} record{results.length === 1 ? '' : 's'}
      </div>

      <div className={styles.list}>
        {results.map((p) => {
          const div = p.convention === 'corporate' ? null : CONVENTIONS[p.convention]
          return (
            <div key={p.id} className={styles.card}>
              <div className={styles.cardHead}>
                {div && <ConventionSigil convention={div.slug} size={18} />}
                <div>
                  <div className={styles.name}>{p.name}</div>
                  <div className={styles.designation}>{p.designation}</div>
                </div>
              </div>
              <div className={styles.tags}>
                <span className={styles.tag}>{p.tier}</span>
                <span className={styles.tag}>{p.loyaltyGrade}</span>
              </div>
              <div className={styles.site}>{p.site}</div>
              <div className={styles.note}>{p.note}</div>
            </div>
          )
        })}
        {results.length === 0 && (
          <div className={styles.empty}>No matching records.</div>
        )}
      </div>
    </div>
  )
}
