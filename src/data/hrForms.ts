// Human Resources Directorate — standard forms index.
// Source documents live in forms-src/*.html and are rendered to PDF at build time.

export interface HrForm {
  id: string
  code: string
  title: string
  revision: string
  blurb: string
  file: string
  pages: number
}

export const HR_FORMS: HrForm[] = [
  {
    id: 'uh-7',
    code: 'UH-7',
    title: 'Enlightened Health Coverage Claim',
    revision: 'Rev. 14 · Effective 03/2026',
    blurb:
      'Claim benefits for injuries, conditions, and discontinuities sustained in the course of assigned duties. Accredited Progenitor facilities only.',
    file: 'forms/uh-7.pdf',
    pages: 2,
  },
  {
    id: 'rd-11a',
    code: 'RD-11(a)',
    title: 'Disclosure of Romantic or Interpersonal Entanglement with a Reality Deviant',
    revision: 'Rev. 6 · Effective 11/2025',
    blurb:
      'Timely disclosure is your affirmative defense against a charge of Collaboration. One form per entanglement, per subject. It is already known.',
    file: 'forms/rd-11a.pdf',
    pages: 2,
  },
  {
    id: 'rsp-3',
    code: 'RSP-3',
    title: 'Equipment & Materiel Requisition',
    revision: 'Rev. 22 · Effective 01/2026',
    blurb:
      'Request mission equipment during your authorized Req Spec Phase. All Devices remain property of the Union, including after implantation.',
    file: 'forms/rsp-3.pdf',
    pages: 2,
  },
  {
    id: 'lv-9',
    code: 'LV-9',
    title: 'Application for Leave of Absence',
    revision: 'Rev. 9 · Effective 05/2026',
    blurb:
      'Apply for annual, medical, bereavement, temporal displacement, or other authorized leave. Personnel on leave remain subject to recall at any moment.',
    file: 'forms/lv-9.pdf',
    pages: 1,
  },
  {
    id: 'mx-2',
    code: 'MX-2',
    title: 'Memetic Exposure Self-Report',
    revision: 'Rev. 3 · Effective 06/2026',
    blurb:
      'Report suspected memetic contamination upon first symptom. Early reporting is the highest form of self-care. The Union thanks you for your candor.',
    file: 'forms/mx-2.pdf',
    pages: 2,
  },
  {
    id: 'px-1',
    code: 'PX-1',
    title: 'Procedural Recoil Incident Report',
    revision: 'Rev. 11 · Effective 04/2026',
    blurb:
      'Report any procedural recoil (reality assertion event) within 24 hours. One form per flaw manifested. Filing is not an admission of fault; fault is determined separately, using this form.',
    file: 'forms/px-1.pdf',
    pages: 2,
  },
  {
    id: 'cd-4',
    code: 'CD-4',
    title: 'Public Explanation Requisition',
    revision: 'Rev. 19 · Effective 02/2026',
    blurb:
      'Requisition an approved public explanation for an observed event. Explanations lose 40% effectiveness per news cycle; file immediately. Do not construct your own.',
    file: 'forms/cd-4.pdf',
    pages: 2,
  },
  {
    id: 'tr-8',
    code: 'TR-8',
    title: 'Travel Authorization: Non-Standard Destinations',
    revision: 'Rev. 7 · Effective 05/2026',
    blurb:
      'Request authorization for travel to destinations not serviced by commercial carriers. Return dates are commitments. Items acquired at destination must be declared and may be declared hostile.',
    file: 'forms/tr-8.pdf',
    pages: 2,
  },
  {
    id: 'am-3',
    code: 'AM-3',
    title: 'Amalgam Cohesion Concern Report',
    revision: 'Rev. 4 · Effective 12/2025',
    blurb:
      'Document a cohesion concern within your amalgam. Both parties receive complete copies of all filings, which historically resolves most concerns before Part II.',
    file: 'forms/am-3.pdf',
    pages: 2,
  },
  {
    id: 'eol-9',
    code: 'EOL-9',
    title: 'Continuity of Service Directive',
    revision: 'Rev. 2 · Effective 06/2026',
    blurb:
      'Record your directives in the event of a discontinuity of service. Mandatory for all personnel T1 and above. Discontinuity is an operational category, not a conclusion.',
    file: 'forms/eol-9.pdf',
    pages: 2,
  },
]
