/* Training & certification desk. Nearly every course here exists to
   prepare personnel to file (or survive filing) a form already in
   src/data/hrForms.ts — the two pages are meant to be read together. */

export interface TrainingCourse {
  id: string
  code: string
  title: string
  mandatory: boolean
  recurrence: string
  hours: number
  description: string
  relatedForm?: string
}

export const TRAINING_COURSES: TrainingCourse[] = [
  {
    id: 'new-operative-orientation',
    code: 'TRN-101',
    title: 'New Operative Orientation',
    mandatory: true,
    recurrence: 'One-time, first week',
    hours: 6,
    description:
      'Covers facility access, the Six-Tier Pyramid, standard clearance procedures, and where to find every form you will eventually need without knowing it yet.',
  },
  {
    id: 'discretion-disclosure-standards',
    code: 'TRN-104',
    title: 'Discretion & Disclosure Standards',
    mandatory: true,
    recurrence: 'Annual',
    hours: 2,
    description:
      'What may be discussed, with whom, in which rooms. Passing this course is a prerequisite for holding any clearance above Internal.',
  },
  {
    id: 'social-conditioning-refresh-prep',
    code: 'TRN-108',
    title: 'Social Conditioning Refresh: What to Expect',
    mandatory: true,
    recurrence: 'Every 90 days',
    hours: 1,
    description:
      'A brief, calm walkthrough of the standard refresh procedure for personnel whose duties require periodic conditioning maintenance. Attendance is itself logged as compliance.',
  },
  {
    id: 'procedural-recoil-response-basics',
    code: 'TRN-112',
    title: 'Procedural Recoil Response Basics',
    mandatory: true,
    recurrence: 'Annual',
    hours: 3,
    description:
      'Recognize, document, and report a reality-assertion event within the mandated 24-hour window. Pairs with Form PX-1; graduates are noticeably faster filers.',
    relatedForm: 'PX-1',
  },
  {
    id: 'public-explanation-drafting',
    code: 'TRN-115',
    title: 'Public Explanation Drafting Workshop',
    mandatory: false,
    recurrence: 'Annual',
    hours: 4,
    description:
      'Draft an approved public explanation for an observed event before the news cycle drafts one for you. Optional, but every graduate\'s explanations clear review faster.',
    relatedForm: 'CD-4',
  },
  {
    id: 'amalgam-cohesion-fundamentals',
    code: 'TRN-118',
    title: 'Amalgam Cohesion Fundamentals',
    mandatory: true,
    recurrence: 'Once per new amalgam assignment',
    hours: 3,
    description:
      'Communication, conflict de-escalation, and cohesion maintenance for personnel newly assigned to a cross-functional amalgam. Attendance does not guarantee cohesion.',
    relatedForm: 'AM-3',
  },
  {
    id: 'continuity-of-service-briefing',
    code: 'TRN-121',
    title: 'Continuity of Service Directive Briefing',
    mandatory: true,
    recurrence: 'One-time, refreshed at T1',
    hours: 1,
    description:
      'Mandatory for all personnel T1 and above. Walks through directive options in the event of a discontinuity of service — an operational category, not a conclusion, and this course treats it exactly that way.',
    relatedForm: 'EOL-9',
  },
  {
    id: 'truce-compliance-orientation',
    code: 'TRN-124',
    title: 'Truce Compliance Orientation',
    mandatory: true,
    recurrence: 'Annual, field-adjacent roles',
    hours: 2,
    description:
      'Article Five compliance, boundary recognition, and authorization procedure before initiating any operation touching a party to a standing Truce. Attest, don\'t assume.',
    relatedForm: 'TRO-1',
  },
  {
    id: 'amendable-coexistence-certification-prep',
    code: 'TRN-127',
    title: 'Amendable Coexistence Certification Prep',
    mandatory: false,
    recurrence: 'Situational',
    hours: 2,
    description:
      'For personnel maintaining a sanctioned liaison relationship under a standing coexistence arrangement. Recertification lapses are treated as a lapse in judgment, and this course exists to prevent both.',
    relatedForm: 'CC-5',
  },
  {
    id: 'requisitions-damian-scale-assessment',
    code: 'TRN-130',
    title: 'Requisitions & Damian Scale Assessment',
    mandatory: true,
    recurrence: 'Annual, requesting roles',
    hours: 2,
    description:
      'How to rate a requisition\'s blatancy honestly, and why every request rated 6 or above needs a paragraph, not a checkbox.',
    relatedForm: 'RSP-3',
  },
  {
    id: 'leave-category-awareness',
    code: 'TRN-133',
    title: 'Leave Category Awareness',
    mandatory: false,
    recurrence: 'Annual',
    hours: 1,
    description:
      'A tour of every leave category available to you, including several most personnel discover only after they need one.',
    relatedForm: 'LV-9',
  },
  {
    id: 'memetic-exposure-self-report',
    code: 'TRN-136',
    title: 'Memetic Exposure Self-Report Protocol',
    mandatory: true,
    recurrence: 'Annual',
    hours: 1,
    description:
      'Recognize early symptoms — unauthorized hope, recurring symbolism, sympathy for Deviant viewpoints — and report at first onset. Early reporting is the highest form of self-care.',
    relatedForm: 'MX-2',
  },
  {
    id: 'enlightened-health-claims-walkthrough',
    code: 'TRN-140',
    title: 'Enlightened Health Coverage Claims Walkthrough',
    mandatory: false,
    recurrence: 'As needed',
    hours: 1,
    description:
      'A practical walkthrough of the claims process for conditions sustained in the course of assigned duties, at accredited Progenitor facilities only.',
    relatedForm: 'UH-7',
  },
  {
    id: 'non-standard-travel-authorization-prep',
    code: 'TRN-145',
    title: 'Non-Standard Travel Authorization Prep',
    mandatory: true,
    recurrence: 'Annual, traveling roles',
    hours: 1,
    description:
      'Requesting travel to destinations not serviced by commercial carriers, and what "items acquired at destination must be declared" actually means in practice.',
    relatedForm: 'TR-8',
  },
  {
    id: 'leadership-development-cohort',
    code: 'TRN-150',
    title: 'Leadership Development Cohort',
    mandatory: false,
    recurrence: 'Annual, invite-only',
    hours: 40,
    description:
      'Structured coaching and a rotational leadership assignment for high performers. Completion rate is, per L&D\'s own description, "very high," and they decline to elaborate further.',
  },
  {
    id: 'exceptional-aptitude-assessment-prep',
    code: 'TRN-155',
    title: 'Exceptional Aptitude Track Assessment Prep',
    mandatory: false,
    recurrence: 'Invite-only',
    hours: 8,
    description:
      'For personnel identified for the Exceptional Aptitude Track. There is no application form for the underlying program; this course is, notably, the only part of the pipeline you can sign up for yourself.',
  },
]
