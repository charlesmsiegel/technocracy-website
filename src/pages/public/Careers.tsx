import { CAREERS } from '../../data/careers'
import { getDivision } from '../../data/divisions'
import pub from './Public.module.css'

export default function Careers() {
  return (
    <div className={pub.container}>
      <div className={pub.pageHead}>
        <h1>Build the future. Belong to it.</h1>
        <p>
          Consensus Holdings recruits exceptional individuals — often before
          they know they are exceptional. If you have always felt that the
          world runs on rules other people cannot quite see, we should talk.
          We may already have.
        </p>
      </div>
      <div className={pub.section} style={{ paddingTop: 0 }}>
        <div className={pub.sectionTitle}>Benefits</div>
        <div className={pub.grid2}>
          {[
            {
              title: 'Total health',
              blurb:
                'Industry-leading medical coverage, including circumstances other insurers decline to describe. Our associates are, measurably, in the best shape of anyone’s lives.',
            },
            {
              title: 'Mobility',
              blurb:
                'Generous relocation support, worldwide and beyond expectations, including on short notice. Most relocations come with a promotion. The rest come with an explanation.',
            },
            {
              title: 'Continuity',
              blurb:
                'Retirement planning with guaranteed continuity of benefits. Whatever tomorrow holds, your plan already holds it too.',
            },
            {
              title: 'Belonging',
              blurb:
                'Applicants of every background are encouraged, including unconventional educational histories. A routine background check is required; it has already begun.',
            },
          ].map((benefit) => (
            <div key={benefit.title} className={pub.card}>
              <span className={pub.cardTitle}>{benefit.title}</span>
              <span className={pub.cardBlurb}>{benefit.blurb}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={pub.section}>
        <div className={pub.sectionTitle}>Open positions</div>
        <div className={pub.grid2}>
          {CAREERS.map((job) => {
            const division =
              job.division === 'corporate' ? undefined : getDivision(job.division)
            return (
              <div key={job.id} className={pub.card}>
                <span className={pub.eyebrow}>
                  {division ? division.publicName : 'Corporate'} · {job.location}
                </span>
                <span className={pub.cardTitle}>{job.title}</span>
                <span className={pub.cardBlurb}>{job.blurb}</span>
                <span className={pub.meta}>
                  To apply, continue excelling. A representative will contact
                  you at the appropriate stage of your development.
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
