import { EXPLAINED_ENTRIES, EXPLAINED_INTRO } from '../../data/explained'
import pub from './Public.module.css'

export default function Explained() {
  return (
    <div className={pub.container}>
      <div className={pub.pageHead}>
        <h1>Consensus Explained</h1>
        <p>An occasional series. Entries are numbered for your convenience.</p>
      </div>

      <div className={pub.section} style={{ paddingTop: 0 }}>
        <div className={pub.prose} style={{ marginBottom: '2rem' }}>
          {EXPLAINED_INTRO.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {EXPLAINED_ENTRIES.map((entry) => (
          <div key={entry.number} className={pub.card} style={{ marginBottom: '1.5rem' }}>
            <span className={pub.eyebrow}>No. {entry.number}</span>
            <span className={pub.cardTitle}>{entry.title}</span>
            {entry.paragraphs.map((para, i) => (
              <p key={i} className={pub.cardBlurb}>
                {para}
              </p>
            ))}
          </div>
        ))}

        <p className={pub.meta}>
          Entries not shown have been retired, superseded, or resolved.
        </p>
      </div>
    </div>
  )
}
