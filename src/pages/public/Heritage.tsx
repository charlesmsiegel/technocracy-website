import { Link } from 'react-router-dom'
import { HERITAGE_ERAS } from '../../data/heritage'
import type { HeritageMark } from '../../data/heritage'
import sigilSonsOfEther from '../../assets/logos/sigil-sons-of-ether.png'
import insigniaDfgAlumni from '../../assets/logos/insignia-dfg-alumni.png'
import pub from './Public.module.css'
import styles from './Heritage.module.css'

interface DefunctDivision {
  name: string
  years: string
  sector: string
  paragraphs: string[]
  footnote: string
  successorMark: string
  successorCaption: string
}

const DEFUNCT: DefunctDivision[] = [
  {
    name: 'Electrodyne Engineering Division',
    years: '1851 – 1904',
    sector: 'Energy Sciences (portfolio classification retired)',
    paragraphs: [
      'For half a century, Electrodyne Engineering was among our most celebrated divisions — a fountain of dirigibles, resonance engines, and boundary-pushing energy research conducted with an enthusiasm that contemporary observers described as "infectious," and our review board later described as "the problem."',
      'Following the Strategic Review of 1904, the division’s research program was found to rest on a foundational premise incompatible with our commitment to reproducible outcomes. The premise in question was subsequently deprecated, effective globally. We do not discuss the premise. There is nothing to discuss; that is what deprecated means.',
      'Former Electrodyne personnel continue to publish independently under a variety of names, most commonly a fraternal society styling themselves the "Sons of Ether." Consensus Holdings does not endorse their findings, wishes them every happiness, and reminds them — warmly, and through counsel — that Patent Nos. 88,341 through 91,207 remain company property.',
    ],
    footnote:
      'Divested assets: 1 orbital platform (decommissioned), 14 research vessels (whereabouts various), 2,190 patents (retained).',
    successorMark: sigilSonsOfEther,
    successorCaption:
      'Insignia of the successor organization, reproduced for identification purposes only. We did not design this.',
  },
  {
    name: 'Digital Futures Group',
    years: '1948 – 1961',
    sector: 'Computation & Network Futures (absorbed into Iterion)',
    paragraphs: [
      'Our youngest and briefest division, Digital Futures Group was chartered to explore computation, networked information, and what its founding memo called — decades before the industry — "a shared virtual space where information wants to be free." The memo has since been corrected: information wants to be accurate.',
      'In 1961, following a good-faith disagreement regarding the appropriate pace of public disclosure and the handling of a senior researcher’s retirement, the division’s staff elected, with striking unanimity and in a single evening, to pursue opportunities elsewhere. The separation was amicable. Accounts describing the separation as otherwise are mistaken, including firsthand accounts.',
      'The former group’s alumni remain active in the technology sector, where several claim to have invented certain network infrastructure. Consensus Holdings takes no position on these claims, other than to note that the infrastructure in question runs on our hardware, our standards, and our schedule, and that we are glad everyone finds it so useful.',
    ],
    footnote:
      'Divested assets: none. Nothing was taken. We have checked repeatedly.',
    successorMark: insigniaDfgAlumni,
    successorCaption:
      'Insignia currently circulated by group alumni, reproduced for identification purposes only. It renders correctly on our hardware.',
  },
]

function MarkCard({ mark }: { mark: HeritageMark }) {
  return (
    <div className={styles.markCard}>
      <img
        src={mark.mark}
        alt={`Historical mark of ${mark.name}`}
        className={`${styles.markImg} ${mark.uncertain ? styles.markUncertain : ''}`}
        loading="lazy"
      />
      <div>
        <div className={styles.markName}>{mark.name}</div>
        <div className={styles.markBlurb}>{mark.blurb}</div>
      </div>
    </div>
  )
}

export default function Heritage() {
  return (
    <div className={pub.container}>
      <div className={pub.pageHead}>
        <h1>Heritage</h1>
        <p>
          Seven centuries of building tomorrow, presented in the spirit of
          transparency — which our Newsroom colleagues assure us is fashionable
          again. Every organization below is either part of us, descended into
          us, or discussed at the bottom of this page in the section provided
          for that purpose.
        </p>
      </div>

      {HERITAGE_ERAS.map((era) => (
        <section key={era.id} className={styles.era}>
          <div className={styles.eraYears}>{era.years}</div>
          <h2 className={styles.eraTitle}>{era.title}</h2>
          <div className={styles.eraIntro}>
            {era.intro.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <div className={styles.marksLabel}>{era.marksLabel}</div>
          <div className={styles.markGrid}>
            {era.marks.map((mark) => (
              <MarkCard key={mark.id} mark={mark} />
            ))}
          </div>
          {era.marks2 && (
            <>
              <div className={styles.marksLabel}>{era.marks2Label}</div>
              <div className={styles.markGrid}>
                {era.marks2.map((mark) => (
                  <MarkCard key={mark.id} mark={mark} />
                ))}
              </div>
            </>
          )}
        </section>
      ))}

      <section className={styles.era}>
        <div className={styles.eraYears}>1904 – Present</div>
        <h2 className={styles.eraTitle}>The Modern Structure</h2>
        <div className={styles.eraIntro}>
          <p>
            The Strategic Review of 1904 consolidated ten guilds and five blocs
            into the five divisions you know today — a ratio the Board still
            regards as its finest single piece of work. The divisions have
            carried the mission since: order from disorder, tomorrow on
            schedule, no surprises.
          </p>
          <p>
            <Link to="/divisions">Meet the five divisions →</Link>
          </p>
        </div>
      </section>

      <hr className={styles.timelineRule} />

      <section className={styles.era}>
        <div className={styles.eraYears}>Divested Divisions</div>
        <h2 className={styles.eraTitle}>Chapters we have outgrown</h2>
        <div className={pub.section} style={{ paddingTop: 0 }}>
          {DEFUNCT.map((division) => (
            <div
              key={division.name}
              className={pub.card}
              style={{ marginBottom: '1.5rem' }}
            >
              <span className={pub.eyebrow}>
                {division.years} · {division.sector}
              </span>
              <span className={pub.cardTitle}>{division.name}</span>
              {division.paragraphs.map((para, i) => (
                <p key={i} className={pub.cardBlurb}>
                  {para}
                </p>
              ))}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  borderTop: '1px solid var(--border)',
                  paddingTop: '1rem',
                }}
              >
                <img
                  src={division.successorMark}
                  alt={`Insignia associated with former ${division.name} personnel`}
                  style={{ height: 64, width: 'auto', opacity: 0.75 }}
                />
                <span className={pub.meta} style={{ maxWidth: '46ch' }}>
                  {division.successorCaption}
                </span>
              </div>
              <p className={pub.meta}>{division.footnote}</p>
            </div>
          ))}
        </div>
        <div className={pub.prose}>
          <p>
            Divestiture is not failure. It is quality control, applied to
            ourselves, which is the highest compliment we know how to pay. We
            remain on excellent terms with all former colleagues — wherever
            they are, whatever they are currently claiming — and we mean that
            in the fullest sense: <em>we know</em>.
          </p>
          <p className={pub.meta}>
            Researchers seeking archival records of divested divisions may
            submit a request via our <Link to="/about">corporate office</Link>.
            Requests are processed in the order in which they are anticipated.
          </p>
        </div>
      </section>
    </div>
  )
}
