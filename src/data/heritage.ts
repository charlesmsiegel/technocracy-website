/* The sanitized corporate history of the Union, for public consumption.
   Every claim is true. That is what makes it a lie. */

import era1BuildersFellowship from '../assets/logos/heritage/era1-builders-fellowship.png'
import era2Instruments from '../assets/logos/heritage/era2-instruments-engines.png'
import era2RightUnderstanding from '../assets/logos/heritage/era2-right-understanding.png'
import era2Astronomical from '../assets/logos/heritage/era2-astronomical-society.png'
import era2BuildersSociety from '../assets/logos/heritage/era2-builders-society.png'
import era2Merchants from '../assets/logos/heritage/era2-honorable-merchants.png'
import era2Physicians from '../assets/logos/heritage/era2-physicians-circle.png'
import era2Unattributed from '../assets/logos/heritage/era2-unattributed.png'
import era2Cartographic from '../assets/logos/heritage/era2-cartographic-society.png'
import era3Meridian from '../assets/logos/heritage/era3-meridian-society.png'
import era3FrontierSurvey from '../assets/logos/heritage/era3-frontier-survey.png'
import era3Statistical from '../assets/logos/heritage/era3-statistical-society.png'
import era3Clinical from '../assets/logos/heritage/era3-clinical-institute.png'
import era3ElectricalResearch from '../assets/logos/heritage/era3-electrical-research.png'
import era3CivicIllumination from '../assets/logos/heritage/era3-civic-illumination.png'
import era3SpecialInquiries from '../assets/logos/heritage/era3-special-inquiries.png'
import era3Amalgamated from '../assets/logos/heritage/era3-amalgamated-engineering.png'
import era3CommercialArts from '../assets/logos/heritage/era3-commercial-arts.png'
import era3ExchequerSociety from '../assets/logos/heritage/era3-exchequer-society.png'
import era3BlocExpeditionary from '../assets/logos/heritage/era3-bloc-expeditionary-trust.png'
import era3BlocResearchFaculties from '../assets/logos/heritage/era3-bloc-research-faculties.png'
import era3BlocPublicInstruction from '../assets/logos/heritage/era3-bloc-public-instruction.png'
import era3BlocIndustrialWorks from '../assets/logos/heritage/era3-bloc-industrial-works.png'
import era3BlocCapitalCommittee from '../assets/logos/heritage/era3-bloc-capital-committee.png'

export interface HeritageMark {
  id: string
  name: string
  mark: string
  blurb: string
  /** Render faded — for entries the archive is confident about. */
  uncertain?: boolean
}

export interface HeritageEra {
  id: string
  years: string
  title: string
  intro: string[]
  marks: HeritageMark[]
  marksLabel: string
  /** Optional second group (the Victorian blocs). */
  marks2?: HeritageMark[]
  marks2Label?: string
}

export const HERITAGE_ERAS: HeritageEra[] = [
  {
    id: 'fellowship',
    years: 'Fourteenth century',
    title: 'The Fellowship',
    intro: [
      'Our earliest verifiable predecessor was a medieval fellowship of master builders, stonewrights, and practical engineers united by a conviction that was, at the time, genuinely radical: that ordinary people deserved walls that stood, mills that turned, and futures that could be planned. They organized. They standardized. They were, by every account, extremely difficult to argue with.',
      'The Fellowship’s independent charter was retired in the seventeenth century, following an unplanned expansion of its community-outreach program into what period sources describe as "a revolution." We honor their memory, their methods, and their motto, which survives in spirit on every badge we issue: build for everyone.',
    ],
    marksLabel: 'Registered mark of the Fellowship',
    marks: [
      {
        id: 'builders-fellowship',
        name: 'The Builders’ Fellowship',
        mark: era1BuildersFellowship,
        blurb:
          'Master builders for the common good. Charter retired; principles retained; retention involuntary.',
      },
    ],
  },
  {
    id: 'compact',
    years: '1325 – 1851',
    title: 'The Compact of Professional Societies',
    intro: [
      'In 1325, at a convention held in the south of France, the Fellowship and its allied societies signed the compact from which this company descends — a shared commitment to a world that could be measured, improved, and made safe for the people living in it. Contemporary institutions pursued other priorities. We are told they were sincere.',
      'The founding societies are presented below as their marks appear in the Compact rolls. Each survives today, somewhere in our organizational chart, the way a keel survives in a ship.',
    ],
    marksLabel: 'The founding societies',
    marks: [
      {
        id: 'builders-society',
        name: 'The Builders’ Society',
        mark: era2BuildersSociety,
        blurb: 'The founding fellowship, continued. See above; see also everything since.',
      },
      {
        id: 'instruments-engines',
        name: 'The Society of Instruments & Engines',
        mark: era2Instruments,
        blurb:
          'Instruments, engines, and the dignity of the made thing. The direct ancestor of Iterion.',
      },
      {
        id: 'right-understanding',
        name: 'The Society for Right Understanding',
        mark: era2RightUnderstanding,
        blurb:
          'Values-driven information stewardship, from an era in which values were enforced somewhat differently.',
      },
      {
        id: 'astronomical-society',
        name: 'The Astronomical Society',
        mark: era2Astronomical,
        blurb:
          'Astronomy, celestial navigation, and travel plans their contemporaries considered ambitious. They were ambitious.',
      },
      {
        id: 'honorable-merchants',
        name: 'The Honorable Company of Merchants',
        mark: era2Merchants,
        blurb:
          'Commerce as a civilizing instrument. The ancestor of Exchequer Capital Group, and of the phrase "we should discuss terms."',
      },
      {
        id: 'physicians-circle',
        name: 'The Physicians’ Circle',
        mark: era2Physicians,
        blurb:
          'Medicine made rigorous, reproducible, and available. The ancestor of Progenera Life Sciences.',
      },
      {
        id: 'cartographic-society',
        name: 'The Cartographic Society',
        mark: era2Cartographic,
        blurb:
          'Cartographers of the world’s remaining blank spaces, and authors of plans for them.',
      },
      {
        id: 'unattributed',
        name: '(Unattributed)',
        mark: era2Unattributed,
        uncertain: true,
        blurb:
          'This mark recurs throughout Compact-era archives. No corresponding society appears in any roster, ledger, or minutes. Our archivists attribute it to a bookbinding workshop. Our archivists are confident.',
      },
    ],
  },
  {
    id: 'victorian',
    years: '1851 – 1904',
    title: 'The Victorian Reformation',
    intro: [
      'The nineteenth century demanded scale, and the Compact delivered: a reorganization into ten professional guilds coordinated through five operating blocs — an early experiment in matrix management that we survived, and therefore recommend to no one.',
      'It was the age of the engine, the census, the telegraph, and the lighthouse; our guilds built, counted, transmitted, and lit them. By century’s end the world had been substantially measured. The twentieth century would be about what to do with the measurements.',
    ],
    marksLabel: 'The ten guilds',
    marks: [
      {
        id: 'amalgamated-engineering',
        name: 'The Amalgamated Engineering Guild',
        mark: era3Amalgamated,
        blurb: 'Industrial invention and the modern workplace, including the concept of the shift.',
      },
      {
        id: 'statistical-society',
        name: 'The Statistical Society',
        mark: era3Statistical,
        blurb: 'Computation before computers. The Guild counted everything, twice, and filed both counts.',
      },
      {
        id: 'electrical-research',
        name: 'The Electrical Research Guild',
        mark: era3ElectricalResearch,
        blurb: 'The "Frontier Electric." See Divested Divisions, below, and see it with composure.',
      },
      {
        id: 'clinical-institute',
        name: 'The Clinical Institute',
        mark: era3Clinical,
        blurb: 'Clinical science, sanitation, and public health — delivered at municipal scale.',
      },
      {
        id: 'civic-illumination',
        name: 'The Civic Illumination Trust',
        mark: era3CivicIllumination,
        blurb: 'Public information and civic order. Light, aimed responsibly.',
      },
      {
        id: 'special-inquiries',
        name: 'The Office of Special Inquiries',
        mark: era3SpecialInquiries,
        blurb:
          'Specialized investigations, by royal appointment. The case files are sealed; the cases are closed; the distinction matters.',
      },
      {
        id: 'commercial-arts',
        name: 'The Commercial Arts Guild',
        mark: era3CommercialArts,
        blurb: 'The persuasion sciences and market development. People want things; someone must be responsible about it.',
      },
      {
        id: 'exchequer-society',
        name: 'The Exchequer Society',
        mark: era3ExchequerSociety,
        blurb:
          'Finance, conducted so discreetly that their period name was a description, a policy, and their only recorded joke. Exchequer Capital Group keeps their books and their habits.',
      },
      {
        id: 'meridian-society',
        name: 'The Meridian Society',
        mark: era3Meridian,
        blurb: 'Astronomy, meteorology, and the upper air, in an era when the upper air was contested.',
      },
      {
        id: 'frontier-survey',
        name: 'The Frontier Survey',
        mark: era3FrontierSurvey,
        blurb: 'Exploration and frontier logistics: reaching the blank spaces first, with paperwork.',
      },
    ],
    marks2Label: 'The five operating blocs',
    marks2: [
      {
        id: 'industrial-works',
        name: 'The Industrial Works Council',
        mark: era3BlocIndustrialWorks,
        blurb: 'Heavy industry and manufacturing. Became Iterion Advanced Manufacturing.',
      },
      {
        id: 'public-instruction',
        name: 'The Committee on Public Instruction',
        mark: era3BlocPublicInstruction,
        blurb: 'Scholarship, policy, and public alignment. Became Nexus Worldwide Operations.',
      },
      {
        id: 'research-faculties',
        name: 'The Research Faculties',
        mark: era3BlocResearchFaculties,
        blurb: 'Research and instruction. Its life-science chairs became Progenera.',
      },
      {
        id: 'capital-committee',
        name: 'The Capital Committee',
        mark: era3BlocCapitalCommittee,
        blurb:
          'Capital allocation, known internally by a blunter period name we no longer print. Clients know it today as Exchequer Capital Group.',
      },
      {
        id: 'expeditionary-trust',
        name: 'The Expeditionary Trust',
        mark: era3BlocExpeditionary,
        blurb: 'Expeditions, surveys, and the sky. Became Celestine Aerospace.',
      },
    ],
  },
]
