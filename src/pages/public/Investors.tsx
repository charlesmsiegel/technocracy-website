import { Link } from 'react-router-dom'
import { AGM_NOTE, CHAIRMAN_LETTERS, EARNINGS, OWNERS_MANUAL } from '../../data/investors'
import pub from './Public.module.css'

export default function Investors() {
  return (
    <div className={pub.container}>
      <div className={pub.pageHead}>
        <h1>Investor Relations</h1>
        <p>
          Consensus Holdings has delivered uninterrupted returns for as long
          as returns have been delivered. We publish the materials below in
          the interest of transparency, and because our results improve upon
          inspection.
        </p>
      </div>

      <div className={pub.section} style={{ paddingTop: 0 }}>
        <div className={pub.sectionTitle}>Quarterly results</div>
        <div className={pub.tableWrap}>
          <table className={pub.dataTable}>
            <thead>
              <tr>
                <th>Period</th>
                <th>Revenue</th>
                <th>Net income</th>
                <th>Outcome</th>
              </tr>
            </thead>
            <tbody>
              {EARNINGS.map((row) => (
                <tr key={row.period}>
                  <td>{row.period}</td>
                  <td>{row.revenue}</td>
                  <td>{row.netIncome}</td>
                  <td>{row.outcome}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className={pub.meta} style={{ marginTop: '0.6rem' }}>
          Guidance for future periods is available in the past periods.
        </p>
      </div>

      <div className={pub.section}>
        <div className={pub.sectionTitle}>Letters from the Chair</div>
        <p className={pub.meta} style={{ marginBottom: '1rem' }}>
          Published annually since 1905. Readers occasionally remark on the
          consistency of the voice across twelve decades. We thank them.
        </p>
        <div style={{ display: 'grid', gap: '0.5rem' }}>
          {CHAIRMAN_LETTERS.map((letter) =>
            letter.body ? (
              <details
                key={letter.year}
                className={pub.card}
                style={{ padding: '1rem 1.5rem' }}
              >
                <summary style={{ cursor: 'pointer', fontWeight: 600, color: 'var(--heading)' }}>
                  {letter.year} — {letter.title}
                </summary>
                <div className={pub.prose} style={{ marginTop: '1rem' }}>
                  {letter.body.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </details>
            ) : (
              <div
                key={letter.year}
                className={pub.card}
                style={{ padding: '1rem 1.5rem', flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}
              >
                <span style={{ fontWeight: 600, color: 'var(--heading)' }}>
                  {letter.year} — {letter.title}
                </span>
                <span className={pub.meta}>Available upon request, once.</span>
              </div>
            ),
          )}
        </div>
      </div>

      <div className={pub.section}>
        <div className={pub.sectionTitle}>An owner’s manual</div>
        <div className={pub.prose}>
          {OWNERS_MANUAL.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>

      <div className={pub.section}>
        <div className={pub.sectionTitle}>Annual General Meeting</div>
        <div className={pub.prose}>
          {AGM_NOTE.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>

      <div className={pub.section}>
        <div className={pub.prose}>
          <p>
            A directory of our operating companies is available:{' '}
            <Link to="/portfolio">Operating Company Links</Link>.
          </p>
        </div>
      </div>
    </div>
  )
}
