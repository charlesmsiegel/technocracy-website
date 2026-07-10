import { ABOUT_PHOTO } from '../../data/photos'
import pub from './Public.module.css'
import styles from './About.module.css'

const LEADERSHIP = [
  {
    name: 'V. Damian',
    role: 'Founding Charter (attrib.)',
    note: 'Author of the six articles that still govern every decision we make.',
  },
  {
    name: 'The Board of Directors',
    role: 'Governance',
    note: 'Seven vice-presidencies, one for every industry that matters. The Board does not give interviews, which is how you know it is working.',
  },
  {
    name: 'Management',
    role: 'Executive oversight',
    note: 'A distributed leadership collective. Individual attribution of decisions is discouraged; outcomes speak for themselves.',
  },
]

export default function About() {
  return (
    <div className={pub.container}>
      <div className={pub.pageHead}>
        <h1>About Consensus Holdings</h1>
        <p>
          We have been called the most important company you have never thought
          about. We consider that our finest review.
        </p>
      </div>

      <img
        src={ABOUT_PHOTO}
        alt="An empty boardroom with a long table and rows of chairs"
        style={{
          width: '100%',
          maxHeight: '320px',
          objectFit: 'cover',
          borderRadius: 'var(--radius)',
          boxShadow: 'var(--shadow)',
        }}
      />
      <div className={pub.section} style={{ paddingTop: 0 }}>
        <div className={pub.prose}>
          <p>
            Consensus Holdings traces its charter to a Victorian-era compact of
            engineering guilds, medical circles, exchequers, and celestial
            societies who shared one conviction: that a safer, saner, more
            predictable world could be built — and that somebody ought to take
            responsibility for building it.
          </p>
          <p>
            Today our five divisions employ the finest minds on (and above)
            the planet, coordinating advanced manufacturing, life sciences,
            strategic communications, capital allocation, and frontier
            exploration into a single instrument of progress. We measure our
            success in quiet decades: no cataclysms, no monsters, no magic —
            just steady, reliable tomorrow, delivered daily.
          </p>
          <p>
            We do not seek attention. We seek outcomes. If you have enjoyed a
            century in which the sun rose on schedule, the lights stayed on,
            and the things you half-remember from childhood nightmares stayed
            imaginary — you are already one of our satisfied customers.
          </p>
        </div>
      </div>

      <div className={pub.section}>
        <div className={pub.sectionTitle}>Our charter</div>
        <div className={styles.charter}>
          <div className={styles.charterTitle}>The Six Articles</div>
          <div className={styles.charterSub}>
            Adopted at founding · Reaffirmed annually · Non-negotiable
          </div>
          <ul className={styles.charterList}>
            <li>
              <div>
                <strong>Bring order to a disordered world.</strong>
                <span>
                  Stability is the first public service. Everything else is
                  built on it.
                </span>
              </div>
            </li>
            <li>
              <div>
                <strong>Advance the tools humanity deserves.</strong>
                <span>
                  Technology, introduced at the pace people are ready for —
                  and not a moment sooner.
                </span>
              </div>
            </li>
            <li>
              <div>
                <strong>Keep everyone safe.</strong>
                <span>
                  From threats familiar and otherwise. You need never know the
                  details. That is the point.
                </span>
              </div>
            </li>
            <li>
              <div>
                <strong>Understand everything worth understanding.</strong>
                <span>
                  Good decisions require complete information. We are very
                  well informed.
                </span>
              </div>
            </li>
            <li>
              <div>
                <strong>Correct what endangers progress.</strong>
                <span>
                  Deviations from a healthy consensus are addressed promptly,
                  professionally, and with compassion wherever practical.
                </span>
              </div>
            </li>
            <li>
              <div>
                <strong>Shepherd everyone to a brighter tomorrow.</strong>
                <span>
                  No one left behind. No one overlooked. No one unaccounted
                  for.
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className={pub.section}>
        <div className={pub.sectionTitle}>Leadership</div>
        <div className={pub.grid3}>
          {LEADERSHIP.map((leader) => (
            <div key={leader.name} className={pub.card}>
              <span className={pub.cardTitle}>{leader.name}</span>
              <span className={pub.eyebrow}>{leader.role}</span>
              <span className={pub.cardBlurb}>{leader.note}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
