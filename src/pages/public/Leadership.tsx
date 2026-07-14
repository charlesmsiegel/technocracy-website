import { LEADERSHIP } from '../../data/leadership'
import { getDivision } from '../../data/divisions'
import InitialsAvatar from '../../components/shared/InitialsAvatar'
import pub from './Public.module.css'
import styles from './Leadership.module.css'

export default function Leadership() {
  return (
    <div className={pub.container}>
      <div className={pub.pageHead}>
        <h1>Leadership</h1>
        <p>
          The officers and division presidents who set direction for
          Consensus Holdings. Photography is omitted by policy — we would
          rather you read the record than trust a headshot.
        </p>
      </div>

      <div className={pub.section} style={{ paddingTop: 0 }}>
        <div className={styles.grid}>
          {LEADERSHIP.map((exec) => {
            const division =
              exec.division && exec.division !== 'corporate'
                ? getDivision(exec.division)
                : undefined
            const accentVar = division ? `--cv-${division.slug}` : undefined
            return (
              <div key={exec.id} className={styles.card}>
                <div className={styles.head}>
                  <InitialsAvatar name={exec.name} accentVar={accentVar} />
                  <div>
                    <div className={styles.name}>{exec.name}</div>
                    <div className={styles.title}>{exec.title}</div>
                    {division && (
                      <div className={styles.division}>{division.publicName}</div>
                    )}
                  </div>
                </div>
                <div className={styles.bio}>
                  {exec.bio.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
                {exec.priorRoles.length > 0 && (
                  <ul className={styles.priorRoles}>
                    {exec.priorRoles.map((role, i) => (
                      <li key={i}>{role}</li>
                    ))}
                  </ul>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
