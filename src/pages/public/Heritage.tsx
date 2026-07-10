import { Link } from 'react-router-dom'
import sigilSonsOfEther from '../../assets/logos/sigil-sons-of-ether.png'
import sigilVirtualAdepts from '../../assets/logos/sigil-virtual-adepts.png'
import pub from './Public.module.css'

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
    successorMark: sigilVirtualAdepts,
    successorCaption:
      'Insignia currently circulated by group alumni, reproduced for identification purposes only. It renders correctly on our hardware.',
  },
]

export default function Heritage() {
  return (
    <div className={pub.container}>
      <div className={pub.pageHead}>
        <h1>Heritage</h1>
        <p>
          A company that has been building tomorrow for this long accumulates
          history — including chapters we have, after careful review,
          outgrown. We present them here in the spirit of transparency, which
          our Newsroom colleagues assure us is fashionable again.
        </p>
      </div>

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

      <div className={pub.section} style={{ paddingTop: 0 }}>
        <div className={pub.prose}>
          <p>
            Divestiture is not failure. It is quality control, applied to
            ourselves, which is the highest compliment we know how to pay.
            We remain on excellent terms with all former colleagues — wherever
            they are, whatever they are currently claiming — and we mean that
            in the fullest sense: <em>we know</em>.
          </p>
          <p className={pub.meta}>
            Researchers seeking archival records of divested divisions may
            submit a request via our <Link to="/about">corporate office</Link>.
            Requests are processed in the order in which they are anticipated.
          </p>
        </div>
      </div>
    </div>
  )
}
