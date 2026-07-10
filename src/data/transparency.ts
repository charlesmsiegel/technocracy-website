/* The Narrative Integrity Report (Nexus Worldwide Operations). */

export interface StatTable {
  title: string
  note?: string
  columns: string[]
  rows: string[][]
}

export const TRANSPARENCY_INTRO: string[] = [
  'Nexus Worldwide Operations publishes the Narrative Integrity Report each quarter because we believe an informed public is a calm public, and a calm public is an informed one; the direction of that relationship is a research question we consider settled. Transparency is sometimes described as letting the public see what a company does. We prefer a stronger formulation: telling the public what it has seen.',
  'Methodology. Narratives circulating in the information environment are assessed for reliability against observed reality, to which we have excellent access. A narrative is classified as unreliable when it diverges from the record; the record is maintained by us, continuously, precisely for occasions such as this. Unreliable narratives are then addressed. We are frequently asked what “addressed” means. It means the narrative no longer diverges from the record.',
  'All figures in this report are exact. We do not publish estimates, because we do not need to. Figures are audited internally, which we have found to be the most rigorous kind of audit, since no one knows our numbers better than we do. Comparisons to prior quarters are provided for continuity, of which we are also in favor.',
]

export const TRANSPARENCY_TABLES: StatTable[] = [
  {
    title: 'Narrative integrity metrics, by quarter',
    note: 'Recurrence rate measures the fraction of addressed narratives that are subsequently re-narrated by anyone.',
    columns: ['Quarter', 'Unreliable narratives identified', 'Narratives addressed', 'Recurrence rate'],
    rows: [
      ['Q2 2025', '1,204,318', '1,204,318', '0.041%'],
      ['Q3 2025', '1,187,552', '1,187,552', '0.012%'],
      ['Q4 2025', '1,163,209', '1,163,209', '0.003%'],
      ['Q1 2026', '1,141,876', '1,141,876', '0.000%'],
    ],
  },
  {
    title: 'Categories addressed, trailing four quarters',
    note: 'Categories are assigned at intake and are final.',
    columns: ['Category', 'Narratives addressed'],
    rows: [
      ['Misinformation regarding weather', '412,067'],
      ['Misinformation regarding health', '638,441'],
      ['Misinformation regarding corporate activity', '287,309'],
      ['Accounts of events that did not occur', '3,344,912'],
      ['Accounts of events that will not have occurred', '14,226'],
    ],
  },
  {
    title: 'Government requests',
    columns: ['Item', 'Count'],
    rows: [
      ['Requests from governments for user data', '0'],
      ['Requests from governments for assistance interpreting events', '214 (all fulfilled)'],
      ['Requests from governments for assistance interpreting this report', '9 (all fulfilled)'],
      ['Requests to governments', 'Figure available upon request'],
    ],
  },
  {
    title: 'Appeals',
    note: 'Appeals may be filed by any party who believes a narrative was addressed in error. Reflection assistance is provided free of charge.',
    columns: ['Item', 'Count'],
    rows: [
      ['Appeals received', '58,441'],
      ['Appeals upheld', '2'],
      ['Appeals withdrawn following reflection', '58,439'],
    ],
  },
]

export const TRANSPARENCY_CLOSING: string[] = [
  'We recognize that reports of this kind ask for trust, and trust must be earned. We earn it the only way we know: by publishing the same numbers we operate on, in the same order, every quarter, on schedule. Readers who identify a discrepancy between this report and their own recollection are invited to contact our Community Clarity portal, where trained specialists will work with them until the discrepancy is resolved. It is always resolved.',
  'No report of this kind can be complete. This one, however, is.',
]
