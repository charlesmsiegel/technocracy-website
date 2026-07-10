import {
  TRANSPARENCY_CLOSING,
  TRANSPARENCY_INTRO,
  TRANSPARENCY_TABLES,
} from '../../data/transparency'
import pub from './Public.module.css'

export default function Transparency() {
  return (
    <div className={pub.container}>
      <div className={pub.pageHead}>
        <h1>Narrative Integrity Report</h1>
        <p>
          Published quarterly by Nexus Worldwide Operations on behalf of
          Consensus Holdings. Current edition: Q2 2026.
        </p>
      </div>

      <div className={pub.section} style={{ paddingTop: 0 }}>
        <div className={pub.prose} style={{ marginBottom: '2rem' }}>
          {TRANSPARENCY_INTRO.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {TRANSPARENCY_TABLES.map((table) => (
          <div key={table.title} style={{ marginBottom: '2.25rem' }}>
            <div className={pub.sectionTitle}>{table.title}</div>
            <div className={pub.tableWrap}>
              <table className={pub.dataTable}>
                <thead>
                  <tr>
                    {table.columns.map((col) => (
                      <th key={col}>{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {table.rows.map((row, i) => (
                    <tr key={i}>
                      {row.map((cell, j) => (
                        <td key={j}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {table.note && (
              <p className={pub.meta} style={{ marginTop: '0.5rem' }}>
                {table.note}
              </p>
            )}
          </div>
        ))}

        <div className={pub.prose}>
          {TRANSPARENCY_CLOSING.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </div>
  )
}
