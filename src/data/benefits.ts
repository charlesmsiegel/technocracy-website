/* Benefits guide — expands on the summary cards shown on the Careers page. */

export interface BenefitItem {
  title: string
  blurb: string
}

export interface BenefitCategory {
  id: string
  title: string
  items: BenefitItem[]
}

export const BENEFITS_INTRO: string[] = [
  'Consensus Holdings benefits are designed the way we design everything else: comprehensively, and in advance. Coverage begins on day one, follows you to every regional office, and — unlike most benefits guides — is written to actually be read. What follows is the complete picture, not the summary.',
  'A note on eligibility: every benefit below applies uniformly across all five operating divisions. Where a division’s work requires something a standard plan does not anticipate, coverage is extended rather than declined. We would rather revise the plan than revise your expectations of it.',
]

export const BENEFIT_STATS: { label: string; value: string }[] = [
  { label: 'Coverage categories', value: '40+' },
  { label: 'Average claim resolution', value: '36 hrs' },
  { label: 'Countries with local benefits desks', value: '48' },
  { label: 'Employee assistance program utilization', value: '118%' },
]

export const BENEFIT_CATEGORIES: BenefitCategory[] = [
  {
    id: 'health-continuity',
    title: 'Health & continuity',
    items: [
      {
        title: 'Comprehensive medical coverage',
        blurb:
          'Full medical, dental, and vision from day one, at every regional office, with no waiting period and no network gap anywhere Consensus Holdings operates.',
      },
      {
        title: 'Enlightened Health Program',
        blurb:
          'Access to accredited Progenera Life Sciences facilities for conditions standard insurance categories were not written to describe. Covered without pre-authorization; see Form UH-7 for filing specifics.',
      },
      {
        title: 'Confidential wellness support',
        blurb:
          'Employee Assistance Program counselors are available 24/7, trained to take seriously whatever you bring them — including the parts of the week that were hard to explain even to yourself.',
      },
      {
        title: 'Continuity of Service Directive',
        blurb:
          'Retirement and estate planning with guaranteed continuity of benefits, mandatory for personnel T1 and above. Discontinuity is an operational category, not a conclusion; see Form EOL-9.',
      },
    ],
  },
  {
    id: 'financial-security',
    title: 'Financial security',
    items: [
      {
        title: 'Retirement matching',
        blurb:
          'Exchequer Capital manages the house retirement fund at institutional rates unavailable to outside investors. Matching begins at hire, fully vests in three years.',
      },
      {
        title: 'Equity & profit participation',
        blurb:
          'Eligible roles receive a share of divisional performance, paid quarterly, in addition to base compensation. The forecasting behind these payouts is, we are told, unusually accurate.',
      },
      {
        title: 'Life & continuity insurance',
        blurb:
          'Standard life insurance, plus a continuity rider covering circumstances your policy administrator will explain fully only if the circumstance arises.',
      },
      {
        title: 'Financial counseling',
        blurb:
          'One-on-one sessions with Exchequer Capital advisors on budgeting, home purchase, and long-horizon planning — the same planning discipline we apply to century-scale infrastructure, scaled down to your household.',
      },
    ],
  },
  {
    id: 'family-household',
    title: 'Family & household',
    items: [
      {
        title: 'Parental leave',
        blurb:
          'Twenty weeks paid leave for any new parent, regardless of role or tenure, with a phased return schedule built around your actual recovery rather than a calendar default.',
      },
      {
        title: 'Dependent & elder care support',
        blurb:
          'Subsidized childcare and eldercare referrals in every region we operate, plus a flexible spending account that covers arrangements a standard FSA form has no line for.',
      },
      {
        title: 'Extended household coverage',
        blurb:
          'Coverage extends to your household as you currently define it — including members not listed on any prior employer’s paperwork. We ask once, gently, and then we stop asking.',
      },
      {
        title: 'Relocation & family transition support',
        blurb:
          'Full-service relocation for you and your household, including school placement, spousal employment assistance, and — when a move is sudden — same-week logistics.',
      },
    ],
  },
  {
    id: 'growth-development',
    title: 'Growth & development',
    items: [
      {
        title: 'Tuition & certification reimbursement',
        blurb:
          'Full reimbursement for job-relevant coursework, certifications, and advanced degrees, approved in advance and paid whether or not you finish first in your cohort.',
      },
      {
        title: 'Internal mobility',
        blurb:
          'Cross-divisional transfers are encouraged, not merely tolerated. Iterion engineers have moved into Progenera research; NWO field associates have moved into Exchequer analytics. The org chart is a starting position.',
      },
      {
        title: 'Exceptional Aptitude Track',
        blurb:
          'A small number of employees each year are identified for accelerated development based on assessment results they did not know they had already taken. If this applies to you, you will be contacted directly.',
      },
      {
        title: 'Leadership development',
        blurb:
          'Structured coaching and rotational leadership assignments for high performers, with a completion rate our L&D team describes, without further comment, as “very high.”',
      },
    ],
  },
  {
    id: 'time-flexibility',
    title: 'Time off & flexibility',
    items: [
      {
        title: 'Flexible paid time off',
        blurb:
          'No fixed accrual cap. Time off is approved on trust, tracked lightly, and — per employee survey — used less than most companies’ far stingier policies.',
      },
      {
        title: 'Sabbatical program',
        blurb:
          'Four weeks paid sabbatical after five years of service, extendable on request. Approval is fast, and the paperwork is genuinely short — see Form LV-9 for the full leave-category list, including a few categories most HR departments do not maintain.',
      },
      {
        title: 'Recovery & decompression leave',
        blurb:
          'Mandatory paid rest following an unusually demanding deployment cycle, scheduled by your manager rather than requested by you — because by that point, you are usually not the best judge of how much you need.',
      },
      {
        title: 'Remote & hybrid flexibility',
        blurb:
          'Most corporate and analytical roles set their own on-site cadence. Field, clinical, and frontier-systems roles follow their site schedule, published well in advance except when it cannot be.',
      },
    ],
  },
  {
    id: 'perks',
    title: 'Perks',
    items: [
      {
        title: 'Campus amenities',
        blurb:
          'On-site fitness centers, subsidized dining, and quiet rooms at every major campus, stocked and staffed to a standard our facilities team insists on calling “baseline.”',
      },
      {
        title: 'Employee product access',
        blurb:
          'Preferred pricing on Iterion consumer devices and Progenera wellness lines, plus early access to products still in limited release.',
      },
      {
        title: 'Commuter & mobility stipend',
        blurb:
          'Monthly stipend covering transit, parking, or a company shuttle seat — and, at qualifying sites, priority boarding on regional transport that does not appear on any public timetable.',
      },
      {
        title: 'Annual recognition events',
        blurb:
          'Divisional celebrations held once a year, catered generously, photographed thoroughly, and — attendees consistently report — remembered less clearly than the rest of the year.',
      },
    ],
  },
]
