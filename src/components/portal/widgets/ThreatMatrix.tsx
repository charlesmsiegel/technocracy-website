import { THREAT_MATRIX } from '../../../data/threatMatrix'
import type { ThreatRow } from '../../../data/threatMatrix'
import styles from './ThreatMatrix.module.css'

const TREND: Record<ThreatRow['trend'], { glyph: string; cls: string; label: string }> = {
  up: { glyph: '▲', cls: 'trendUp', label: 'rising' },
  down: { glyph: '▼', cls: 'trendDown', label: 'declining' },
  flat: { glyph: '—', cls: 'trendFlat', label: 'stable' },
}

export default function ThreatMatrix() {
  return (
    <div className={styles.wrap}>
      <div className={styles.title}>
        Reality Deviant classification matrix · rolling 90-day window
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th scope="col">Class</th>
            <th scope="col">Designation</th>
            <th scope="col" style={{ textAlign: 'right' }}>
              Active cases
            </th>
            <th scope="col">Trend</th>
            <th scope="col">HOAR band</th>
            <th scope="col">Default DTFT</th>
          </tr>
        </thead>
        <tbody>
          {THREAT_MATRIX.map((row) => {
            const trend = TREND[row.trend]
            return (
              <tr key={row.code}>
                <td className={styles.code}>{row.code}</td>
                <td className={styles.gloss}>{row.gloss}</td>
                <td className={styles.num}>{row.activeCases}</td>
                <td>
                  <span className={styles[trend.cls]} aria-hidden="true">
                    {trend.glyph}
                  </span>{' '}
                  <span className={styles.gloss}>{trend.label}</span>
                </td>
                <td className={styles.mono}>{row.hoarBand}</td>
                <td className={styles.mono}>{row.dtft}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
