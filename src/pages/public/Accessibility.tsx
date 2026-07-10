import pub from './Public.module.css'

export default function Accessibility() {
  return (
    <div className={pub.container}>
      <div className={pub.pageHead}>
        <h1>Accessibility Statement</h1>
        <p>Consensus Holdings is committed to access, in every direction.</p>
      </div>
      <div className={pub.section} style={{ paddingTop: 0 }}>
        <div className={pub.prose}>
          <p>
            This website is designed to conform to recognized accessibility
            standards, including keyboard navigation, screen-reader support,
            sufficient color contrast, and reduced-motion preferences, which
            we honor wherever expressed and several places where merely felt.
          </p>
          <p>
            We believe information should be accessible to all persons, as
            defined. If any portion of this site is inaccessible to you, the
            condition is temporary and we apologize for it; a corrected
            experience is already in preparation.
          </p>
          <p>
            To report an accessibility barrier, contact our Digital Experience
            Office. Reports are reviewed by a person, a process, and a third
            reviewer whose role is best described as thorough.
          </p>
          <p className={pub.meta}>
            This statement was last reviewed continuously.
          </p>
        </div>
      </div>
    </div>
  )
}
