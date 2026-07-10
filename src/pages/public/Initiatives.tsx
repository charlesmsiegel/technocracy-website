import { INITIATIVES } from '../../data/initiatives'
import pub from './Public.module.css'

export default function Initiatives() {
  return (
    <div className={pub.container}>
      <div className={pub.pageHead}>
        <h1>Global initiatives</h1>
        <p>
          Progress does not happen by accident. It is planned, funded,
          scheduled, and delivered — on time, every time, whether or not anyone
          notices. These are the programs we are permitted to be proudest of.
        </p>
      </div>
      <div className={pub.section}>
        <div className={pub.grid2}>
          {INITIATIVES.map((init) => (
            <div key={init.id} className={pub.card}>
              <div className={pub.statValue}>{init.metric.value}</div>
              <div className={pub.meta}>{init.metric.label}</div>
              <div className={pub.cardTitle}>{init.title}</div>
              <div className={pub.cardBlurb}>{init.blurb}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
