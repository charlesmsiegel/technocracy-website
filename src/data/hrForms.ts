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
]
