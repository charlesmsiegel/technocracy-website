/* The sanitized corporate history of the Union, for public consumption.
   Every claim is true. That is what makes it a lie. */

import era1Craftmasons from '../assets/logos/heritage/era1-craftmasons-fellowship.png'
import era2Artificers from '../assets/logos/heritage/era2-artificers.png'
import era2Cabal from '../assets/logos/heritage/era2-cabal-of-pure-thought.png'
import era2Celestial from '../assets/logos/heritage/era2-celestial-masters.png'
import era2Craftmasons from '../assets/logos/heritage/era2-craftmasons.png'
import era2HighGuild from '../assets/logos/heritage/era2-high-guild.png'
import era2Hippocratic from '../assets/logos/heritage/era2-hippocratic-circle.png'
import era2Ksirafai from '../assets/logos/heritage/era2-ksirafai.png'
import era2VoidSeekers from '../assets/logos/heritage/era2-void-seekers.png'
import era3Celestial from '../assets/logos/heritage/era3-celestial-masters.png'
import era3VoidSeekers from '../assets/logos/heritage/era3-void-seekers.png'
import era3Reckoners from '../assets/logos/heritage/era3-analytical-reckoners.png'
import era3Hippocratic from '../assets/logos/heritage/era3-hippocratic-circle.png'
import era3Electrodyne from '../assets/logos/heritage/era3-electrodyne-engineers.png'
import era3Lightkeepers from '../assets/logos/heritage/era3-lightkeepers.png'
import era3SkeletonKeys from '../assets/logos/heritage/era3-skeleton-keys.png'
import era3Mechanicians from '../assets/logos/heritage/era3-brotherhood-of-mechanicians.png'
import era3GoldenGuild from '../assets/logos/heritage/era3-golden-guild.png'
import era3Exchequers from '../assets/logos/heritage/era3-invisible-exchequers.png'
import era3BlocExploratory from '../assets/logos/heritage/era3-bloc-exploratory-society.png'
import era3BlocGrandFaculty from '../assets/logos/heritage/era3-bloc-grand-faculty.png'
import era3BlocIvoryTower from '../assets/logos/heritage/era3-bloc-ivory-tower.png'
import era3BlocConstructors from '../assets/logos/heritage/era3-bloc-league-of-constructors.png'
import era3BlocSyndicate from '../assets/logos/heritage/era3-bloc-syndicate.png'

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
        id: 'craftmasons-fellowship',
        name: 'The Craftmason Fellowship',
        mark: era1Craftmasons,
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
        id: 'craftmasons',
        name: 'The Craftmasons',
        mark: era2Craftmasons,
        blurb: 'The founding fellowship, continued. See above; see also everything since.',
      },
      {
        id: 'artificers',
        name: 'The Artificers',
        mark: era2Artificers,
        blurb:
          'Instruments, engines, and the dignity of the made thing. The direct ancestor of Iterion.',
      },
      {
        id: 'cabal-of-pure-thought',
        name: 'The Cabal of Pure Thought',
        mark: era2Cabal,
        blurb:
          'Values-driven information stewardship, from an era in which values were enforced somewhat differently.',
      },
      {
        id: 'celestial-masters',
        name: 'The Celestial Masters',
        mark: era2Celestial,
        blurb:
          'Astronomy, celestial navigation, and travel plans their contemporaries considered ambitious. They were ambitious.',
      },
      {
        id: 'high-guild',
        name: 'The High Guild',
        mark: era2HighGuild,
        blurb:
          'Commerce as a civilizing instrument. The ancestor of Exchequer Capital Group, and of the phrase "we should discuss terms."',
      },
      {
        id: 'hippocratic-circle',
        name: 'The Hippocratic Circle',
        mark: era2Hippocratic,
        blurb:
          'Medicine made rigorous, reproducible, and available. The ancestor of Progenera Life Sciences.',
      },
      {
        id: 'void-seekers',
        name: 'The Void Seekers',
        mark: era2VoidSeekers,
        blurb:
          'Cartographers of the world’s remaining blank spaces, and authors of plans for them.',
      },
      {
        id: 'unattributed',
        name: '(Unattributed)',
        mark: era2Ksirafai,
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
        id: 'mechanicians',
        name: 'Int’l Brotherhood of Mechanicians',
        mark: era3Mechanicians,
        blurb: 'Industrial invention and the modern workplace, including the concept of the shift.',
      },
      {
        id: 'analytical-reckoners',
        name: 'Guild of Analytical Reckoners',
        mark: era3Reckoners,
        blurb: 'Computation before computers. The Guild counted everything, twice, and filed both counts.',
      },
      {
        id: 'electrodyne-engineers',
        name: 'Guild of Electrodyne Engineers',
        mark: era3Electrodyne,
        blurb: 'The "Frontier Electric." See Divested Divisions, below, and see it with composure.',
      },
      {
        id: 'hippocratic-circle-v',
        name: 'The Hippocratic Circle',
        mark: era3Hippocratic,
        blurb: 'Clinical science, sanitation, and public health — delivered at municipal scale.',
      },
      {
        id: 'lightkeepers',
        name: 'The Lightkeepers',
        mark: era3Lightkeepers,
        blurb: 'Public information and civic order. Light, aimed responsibly.',
      },
      {
        id: 'skeleton-keys',
        name: 'The Skeleton Keys',
        mark: era3SkeletonKeys,
        blurb:
          'Specialized investigations, by royal appointment. The case files are sealed; the cases are closed; the distinction matters.',
      },
      {
        id: 'golden-guild',
        name: 'The Golden Guild',
        mark: era3GoldenGuild,
        blurb: 'The persuasion sciences and market development. People want things; someone must be responsible about it.',
      },
      {
        id: 'invisible-exchequers',
        name: 'The Invisible Exchequers',
        mark: era3Exchequers,
        blurb:
          'Finance. You will not have heard of them — that was the point, the name, and their only recorded joke.',
      },
      {
        id: 'celestial-masters-v',
        name: 'Society of Celestial Masters',
        mark: era3Celestial,
        blurb: 'Astronomy, meteorology, and the upper air, in an era when the upper air was contested.',
      },
      {
        id: 'void-seekers-v',
        name: 'The Void Seekers',
        mark: era3VoidSeekers,
        blurb: 'Exploration and frontier logistics: reaching the blank spaces first, with paperwork.',
      },
    ],
    marks2Label: 'The five operating blocs',
    marks2: [
      {
        id: 'league-of-constructors',
        name: 'League of Constructors',
        mark: era3BlocConstructors,
        blurb: 'Heavy industry and manufacturing. Became Iterion Advanced Manufacturing.',
      },
      {
        id: 'ivory-tower',
        name: 'The Ivory Tower',
        mark: era3BlocIvoryTower,
        blurb: 'Scholarship, policy, and public alignment. Became Nexus Worldwide Operations.',
      },
      {
        id: 'grand-faculty',
        name: 'The Grand Faculty',
        mark: era3BlocGrandFaculty,
        blurb: 'Research and instruction. Its life-science chairs became Progenera.',
      },
      {
        id: 'syndicate-bloc',
        name: 'The Syndicate',
        mark: era3BlocSyndicate,
        blurb:
          'Capital allocation. The name proved durable internally; clients know it today as Exchequer Capital Group.',
      },
      {
        id: 'exploratory-society',
        name: 'The Exploratory Society',
        mark: era3BlocExploratory,
        blurb: 'Expeditions, surveys, and the sky. Became Celestine Aerospace.',
      },
    ],
  },
]
