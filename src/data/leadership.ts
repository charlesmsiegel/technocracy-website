/* Executive leadership. Where a name and title already appear in a press
   release, this file uses them verbatim — division leads here are the same
   people quoted in src/data/pressReleases.ts, not new inventions.
   Photography is intentionally omitted; see Leadership.tsx for why. */

import type { Executive } from './types'

export const LEADERSHIP: Executive[] = [
  {
    id: 'holloway-marguerite',
    name: 'Marguerite Holloway',
    title: 'Chief Executive Officer',
    division: 'corporate',
    bio: [
      'Marguerite Holloway has served as Chief Executive Officer of Consensus Holdings since 2003, guiding the company through its expansion from an industrial holding company into a five-division global conglomerate. She sits on the boards of two international standards bodies and chairs the Climate Change Reversal Initiative steering committee.',
      'Ms. Holloway also served as Chief Executive Officer of Consensus Holdings from 1971 to 1989. The intervening years are addressed in Note 14 of the annual report, filed consistently since 1990, which no shareholder has ever asked a follow-up question about.',
    ],
    priorRoles: [
      'Chief Executive Officer, Consensus Holdings (1971–1989)',
      'Senior Fellow, Consensus Holdings Institute for Applied Continuity (1989–2003)',
      'B.S., Industrial Engineering',
    ],
  },
  {
    id: 'hale-margaret',
    name: 'Margaret Hale',
    title: 'Chief Continuity Officer',
    division: 'corporate',
    bio: [
      'Margaret Hale leads Consensus Holdings\' continuity function, the corporate office responsible for helping communities, markets, and news cycles return to normal after an incident touches them. "Communities thrive on continuity," she has said. "Most people find they are eager to get back to it."',
      'Her office maintains the company\'s incident-response playbooks across all five divisions and coordinates directly with Nexus Worldwide Operations on matters of public narrative. She has held the role since 2014.',
    ],
    priorRoles: [
      'VP, Crisis & Continuity Planning, Consensus Holdings (2008–2014)',
      'Municipal emergency management, prior to joining Consensus Holdings',
      'Certified Business Continuity Professional',
    ],
  },
  {
    id: 'wexford-corliss',
    name: 'Corliss Wexford',
    title: 'Founding Chairman Emeritus',
    division: 'corporate',
    bio: [
      'Corliss Wexford holds the title of Founding Chairman Emeritus, a role widely understood within the company to be ceremonial. Board minutes, which are not public, are understood to disagree.',
      'Mr. Wexford attends one meeting per year, contributes no more than a single sentence, and has never once been asked to repeat it.',
    ],
    priorRoles: [
      'Chairman of the Board, Consensus Holdings (founding–1971)',
      'Founding Chairman Emeritus, Consensus Holdings (1971–present)',
    ],
  },
  {
    id: 'vasquez-cornelius',
    name: 'Cornelius Vasquez',
    title: 'Executive Comptroller, Iterion Advanced Manufacturing',
    division: 'iteration-x',
    bio: [
      'Cornelius Vasquez oversees production standards across Iterion\'s 6,417 facilities and chairs the cross-divisional Climate Change Reversal Initiative. "The atmosphere is a system, and systems respond to disciplined intervention," he said at the program\'s first milestone announcement.',
      'Colleagues describe him as the only executive who can state, at any moment and without checking, exactly how far ahead or behind schedule any given project is — down to the minute. He has never been observed to consult a clock while doing so.',
    ],
    priorRoles: [
      'VP, Global Production Standards, Iterion Advanced Manufacturing (2011–2019)',
      'Plant Manager, Louisville Manufacturing Campus (2003–2011)',
      'M.S., Industrial & Systems Engineering',
    ],
  },
  {
    id: 'wren-elias',
    name: 'Dr. Elias Wren',
    title: 'Program Comptroller, BioMechanics Access Program',
    division: 'iteration-x',
    bio: [
      'Dr. Elias Wren oversees the BioMechanics Access Program, which has donated more than two million advanced prosthetic limbs to date. "Every limb we donate is registered, telemetered, and continuously improved through over-the-air refinement," he has said. "Our recipients are never alone."',
      'He joined the program at its founding and has personally reviewed every unit\'s calibration record — a dataset now numbering in the millions — without, by his own account, missing an entry.',
    ],
    priorRoles: [
      'Director of Prosthetics Research, Iterion Advanced Manufacturing (2009–2015)',
      'Clinical fellowship, biomechanical engineering',
      'M.D., Ph.D., Biomedical Engineering',
    ],
  },
  {
    id: 'vane-ito-rosalind',
    name: 'Dr. Rosalind Vane-Ito',
    title: 'Provost, Ivory Tower Institute',
    division: 'new-world-order',
    bio: [
      'Dr. Rosalind Vane-Ito leads the Ivory Tower Institute, Nexus Worldwide Operations\' academic partnership network behind the Community Standards & Media Literacy Partnership, active in 74 countries. "We are not telling anyone what to think," she has said. "We are helping them notice that, on reflection, they already agree."',
      'She is known for holding the same position in every interview she has ever given, word for word, regardless of who asks the question or how it is phrased.',
    ],
    priorRoles: [
      'Dean of Curriculum Partnerships, Ivory Tower Institute (2012–2019)',
      'Professor of Media Studies, prior to joining Nexus Worldwide Operations',
      'Ph.D., Communications & Media Studies',
    ],
  },
  {
    id: 'voss-adrian',
    name: 'Adrian Voss',
    title: 'Vice President of Operations, Exchequer Capital Group',
    division: 'syndicate',
    bio: [
      'Adrian Voss led Exchequer Capital Group\'s Consensus Infrastructure Fund VII to a $40 billion close, $8 billion above target. "We don\'t ask markets what they want," he said at the close. "Desire is a signal, and we read it at the source."',
      'He is regarded internally as the firm\'s most effective negotiator; colleagues note that meetings with him tend to end in agreement, and tend to end faster than the meeting invite allotted.',
    ],
    priorRoles: [
      'Managing Director, Infrastructure Finance, Exchequer Capital Group (2013–2019)',
      'Investment banking, prior to joining Exchequer Capital Group',
      'MBA, Finance',
    ],
  },
  {
    id: 'ferro-dominic',
    name: 'Dominic Ferro',
    title: 'Chief Executive Officer, Mercury Logistics',
    division: 'syndicate',
    bio: [
      'Dominic Ferro leads Mercury Logistics, Exchequer Capital Group\'s distribution subsidiary, through its expansion from same-day to same-hour delivery. "Whatever you need, it is already closer than you think," he said at the same-hour launch. "In our internal tests, packages have occasionally arrived before the confirmation email. We are working on the email."',
      'Under his leadership Mercury has expanded to distribution hubs on five continents without, per his own repeated claim, ever missing a delivery window it publicly committed to.',
    ],
    priorRoles: [
      'COO, Mercury Logistics (2015–2020)',
      'Regional operations, a competing logistics firm since acquired by Mercury',
      'B.S., Supply Chain Management',
    ],
  },
  {
    id: 'osei-henrik',
    name: 'Dr. Henrik Osei',
    title: 'Chief Clinical Officer, Progenera Life Sciences',
    division: 'progenitors',
    bio: [
      'Dr. Henrik Osei leads clinical strategy for Progenera Life Sciences, including the FACADE tissue-engineering platform. "The body already knows how to build itself," he has said. "It simply needed clearer instructions, and we are excellent instructors."',
      'He has overseen a period in which regenerative-therapy waiting lists have shortened company-wide even as enrollment has grown, a combination his office describes as "expected, given the instructions."',
    ],
    priorRoles: [
      'Director of Regenerative Medicine, Progenera Life Sciences (2010–2017)',
      'Clinical research, tissue engineering',
      'M.D., Regenerative Medicine',
    ],
  },
  {
    id: 'ananda-okonkwo-priya',
    name: 'Dr. Priya Ananda-Okonkwo',
    title: 'Research Director, Department of Advanced Agriculture',
    division: 'progenitors',
    bio: [
      'Dr. Priya Ananda-Okonkwo leads the Department of Advanced Agriculture\'s crop-resilience research, developing drought- and pest-resistant cultivars deployed across dozens of growing regions. "Our crops grow where crops are needed," she has said. "We simply stopped accepting the weather\'s opinion as final."',
      'Her department\'s yield-forecast accuracy is, per internal reporting, unusually difficult to distinguish from the eventual harvest report itself.',
    ],
    priorRoles: [
      'Senior Plant Geneticist, Department of Advanced Agriculture (2008–2016)',
      'Postdoctoral research, agronomy and crop genetics',
      'Ph.D., Plant Genetics',
    ],
  },
  {
    id: 'marchand-celeste',
    name: 'Celeste Marchand',
    title: 'President, Iridium Medical',
    division: 'progenitors',
    bio: [
      'Celeste Marchand leads Iridium Medical, Progenera Life Sciences\' clinical partnership network. "Actuarially, a customer with fresh organs is a customer for a very long time," she has said of the division\'s regenerative-care partnerships. "We consider that alignment of incentives the healthiest thing about this partnership."',
      'She joined Iridium Medical in 2016 following its acquisition by Progenera and has led its integration into the broader Progenera clinical network since.',
    ],
    priorRoles: [
      'Chief Operating Officer, Iridium Medical, prior to acquisition (2011–2016)',
      'Hospital network administration',
      'MBA, Healthcare Administration',
    ],
  },
  {
    id: 'okafor-cheng-amara',
    name: 'Director Amara Okafor-Cheng',
    title: 'Director of Fleet Operations, Celestine Aerospace',
    division: 'void-engineers',
    bio: [
      'Director Amara Okafor-Cheng leads Fleet Operations for Celestine Aerospace, overseeing the 312-satellite Sentinel constellation. "There is no longer a blind spot," she said upon the constellation reaching full operational status. "Anything that moves toward this planet will be seen, catalogued, and assigned a satisfactory explanation before it arrives."',
      'She is known for flagging sensor anomalies before the automated classification system does — colleagues describe her as "faster than the algorithm, and better company."',
    ],
    priorRoles: [
      'Deputy Director, Fleet Operations, Celestine Aerospace (2013–2020)',
      'Satellite systems engineering, prior to joining Celestine Aerospace',
      'M.S., Aerospace Engineering',
    ],
  },
]
