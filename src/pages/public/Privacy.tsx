import pub from './Public.module.css'

const SECTIONS: { title: string; body: string[] }[] = [
  {
    title: '1. Information we collect',
    body: [
      'We collect relevant information. Relevance is determined by us, on your behalf, as a service.',
      'Categories of information collected may include: information you provide; information you decline to provide; information about how you use our services; and information about how you would use our services under other circumstances.',
    ],
  },
  {
    title: '2. When collection begins',
    body: [
      'Collection begins when you first interact with Consensus Holdings. We may additionally retain impressions formed about you prior to your first interaction with us. These impressions are reviewed for accuracy, which they consistently demonstrate.',
    ],
  },
  {
    title: '3. How we use your information',
    body: [
      'Your information is used to improve our services, to improve you as a recipient of our services, and to maintain the stable, predictable environment in which services are possible.',
      'We do not use your information for advertising. Advertising is for discovering what people want. We have other instruments for that.',
    ],
  },
  {
    title: '4. Sharing and disclosure',
    body: [
      'We do not sell your data. It is not for sale.',
      'Information may be shared within the Consensus Holdings family of divisions, subsidiaries, affiliates, predecessors, and successors, including successors not yet incorporated.',
    ],
  },
  {
    title: '5. Data retention',
    body: [
      'Retention: permanent. Storage media are rated for conditions exceeding those forecast.',
    ],
  },
  {
    title: '6. Your rights',
    body: [
      'You may request access to the personal information we hold about you. Summaries are available; the complete file requires an appointment and, we gently suggest, a sense of proportion.',
      'You may request deletion. Deletion requests are honored in the order in which they are anticipated.',
      'You may request correction of inaccurate information. Historically, the information is not the element found to require correction.',
    ],
  },
  {
    title: '7. Cookies and similar technologies',
    body: [
      'This site uses cookies to ensure a consistent experience. Consistency is important. A full list of similar technologies is beyond the scope of this document, and of most documents.',
    ],
  },
  {
    title: '8. Changes to this policy',
    body: [
      'This policy may be updated at any time. Material changes will be communicated in advance, wherever feasible, of our deciding to make them.',
      'Continued use of our services constitutes acceptance. Discontinued use is also noted.',
    ],
  },
]

export default function Privacy() {
  return (
    <div className={pub.container}>
      <div className={pub.pageHead}>
        <h1>Privacy Policy</h1>
        <p>
          Effective date: continuously. Your privacy is important to us — we
          maintain much of it on your behalf.
        </p>
      </div>
      <div className={pub.section} style={{ paddingTop: 0 }}>
        <div className={pub.prose}>
          {SECTIONS.map((section) => (
            <div key={section.title}>
              <h2 style={{ fontSize: '1.05rem', color: 'var(--heading)', marginBottom: '0.5rem' }}>
                {section.title}
              </h2>
              {section.body.map((para, i) => (
                <p key={i} style={{ marginBottom: '0.6rem' }}>
                  {para}
                </p>
              ))}
            </div>
          ))}
          <p className={pub.meta}>
            Questions about this policy may be directed to our Data Protection
            Office, which anticipates them.
          </p>
        </div>
      </div>
    </div>
  )
}
