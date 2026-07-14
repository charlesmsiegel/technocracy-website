/* The Symposium — the one body every Convention sits on, and the one body
   every Convention is least honest with. Distinct from the Five-Year Plan
   (delivery scheduling): this board is where resourcing disputes, turf
   friction, and arbitration requests between Conventions actually surface. */

import type { Board } from './types'

export const SYMPOSIUM_BOARD: Board = {
  convention: 'union',
  codename: 'THE SYMPOSIUM',
  designation: 'CROSS-CONVENTION DELIBERATIVE BODY · STANDING SESSION',
  banner: 'ALL CONVENTIONS SEATED — CONSENSUS IS MANDATORY, AGREEMENT IS OPTIONAL',
  brief:
    'Every Convention holds a standing seat and a standing obligation to disclose anything materially affecting shared resources, shared cover, or shared risk. In practice, disclosure is calibrated: each delegation reports what keeps its own file moving and withholds what would slow it down. The Symposium has never once achieved unanimous agreement on what "materially affecting" means, and has never once let that stop a vote.',
  columns: [
    {
      id: 'agenda',
      title: 'Standing Agenda',
      cardIds: ['sym-01', 'sym-02', 'sym-03', 'sym-04'],
    },
    {
      id: 'arbitration',
      title: 'Under Arbitration',
      cardIds: ['sym-05', 'sym-06', 'sym-07', 'sym-08'],
    },
    {
      id: 'tabled',
      title: 'Tabled Indefinitely',
      cardIds: ['sym-09', 'sym-10', 'sym-11'],
    },
    {
      id: 'resolved',
      title: 'Resolved — Nominally',
      cardIds: ['sym-12', 'sym-13', 'sym-14'],
    },
  ],
  cards: {
    'sym-01': {
      id: 'sym-01',
      title: 'ITX emergency Requisitions request, priority override',
      summary:
        'Iteration X has filed for an out-of-cycle Requisitions allocation citing continuity-restoration priority. Syndicate Finance has flagged the request for independent audit before release.',
      clearance: 'restricted',
      tags: ['Requisitions', 'ITX', 'SYN'],
      priority: 'elevated',
      notSharedWith: ['syndicate'],
      detail: [
        'Iteration X\'s filing references its SILENT ANVIL continuity file without elaborating on scope, timeline, or why the standard allocation cycle is insufficient. The Symposium record shows the request as "priority, cause: operational continuity" — the full justification was submitted to the Chair under seal and has not been circulated.',
        'Syndicate Finance\'s audit hold is procedurally routine. Iteration X\'s delegation has characterized it, informally, as "routine in the way weather is routine."',
      ],
    },
    'sym-02': {
      id: 'sym-02',
      title: 'NWO narrative-load sharing request, quarterly',
      summary:
        'New World Order requests other Conventions route incident-adjacent Sleeper narratives through Nexus Worldwide channels rather than independent Damage Control, citing consistency of public messaging.',
      clearance: 'internal',
      tags: ['Narrative', 'NWO'],
      priority: 'routine',
      detail: [
        'The request has stalled for three consecutive quarters. Every Convention agrees in principle and every Convention has, at least once, run an independent narrative-suppression action without notifying New World Order first — a pattern NWO\'s delegation has stopped commenting on publicly, and started documenting privately.',
      ],
    },
    'sym-03': {
      id: 'sym-03',
      title: 'Void Engineers perimeter-classification briefing, quarterly',
      summary:
        'Standing quarterly briefing on Black Clearance perimeter status, delivered at the minimum disclosure threshold required by Symposium charter.',
      clearance: 'internal',
      tags: ['Perimeter', 'VE'],
      priority: 'routine',
      notSharedWith: 'symposium',
      detail: [
        'The briefing has been delivered, verbatim, for eleven consecutive quarters: "The perimeter holds. No further comment is required by charter." No delegation has challenged the sufficiency of this disclosure on the record. Several have challenged it off the record.',
      ],
    },
    'sym-04': {
      id: 'sym-04',
      title: 'Progenitors biosafety incident disclosure threshold review',
      summary:
        'Standing item to review what tier of Progenitors field incident triggers mandatory Symposium disclosure. Progenitors has proposed raising the threshold; every other delegation has proposed lowering it.',
      clearance: 'internal',
      tags: ['Biosafety', 'PGN'],
      priority: 'elevated',
      detail: [
        'The current threshold has not changed in six years, through what the record describes only as "several qualifying incidents, resolved within protocol." Damage Control declined, again, to characterize what "several" means as a number.',
      ],
    },
    'sym-05': {
      id: 'sym-05',
      title: 'Cross-Convention amalgam staffing dispute',
      summary:
        'Iteration X and Void Engineers are in arbitration over personnel assigned to a joint amalgam, each Convention claiming primary loyalty jurisdiction over the same three operatives.',
      clearance: 'internal',
      tags: ['Personnel', 'ITX', 'VE'],
      priority: 'elevated',
      detail: [
        'Both Conventions have filed Form AM-3 cohesion-concern paperwork against the other\'s conduct within the amalgam. The Symposium\'s mediation panel has scheduled four sessions and closed zero of them with a signed resolution.',
      ],
    },
    'sym-06': {
      id: 'sym-06',
      title: 'Syndicate asset-recovery jurisdiction claim',
      summary:
        'Syndicate has requested exclusive jurisdiction over a legacy asset-recovery matter currently drawing interest from two other delegations. Details filed under seal.',
      clearance: 'restricted',
      tags: ['SYN', 'Jurisdiction'],
      priority: 'critical',
      notSharedWith: ['new-world-order', 'void-engineers'],
      detail: [
        'The matter is understood by the Chair to relate to a Syndicate asset-recovery file with a designation beginning "LEDGER," though Syndicate\'s filing does not use that word. The jurisdiction request has been renewed at every session for four years without a Symposium vote ever being called on it.',
      ],
    },
    'sym-07': {
      id: 'sym-07',
      title: 'Shared surveillance-infrastructure cost allocation',
      summary:
        'Ongoing dispute over how satellite, sensor, and feed-analytics infrastructure costs are split across Conventions that all draw on shared monitoring capacity.',
      clearance: 'internal',
      tags: ['Infrastructure', 'Cost'],
      priority: 'routine',
      detail: [
        'Every delegation agrees the current split is unfair. No two delegations agree on which direction the unfairness runs.',
      ],
    },
    'sym-08': {
      id: 'sym-08',
      title: 'NWO internal-leak inquiry, resourcing request',
      summary:
        'New World Order has requested additional Symposium-level counterintelligence support for an internal matter, without specifying the matter.',
      clearance: 'restricted',
      tags: ['NWO', 'Counterintelligence'],
      priority: 'critical',
      notSharedWith: 'symposium',
      detail: [
        'The request cites "an internal matter of counterintelligence significance" and asks for expanded access to cross-Convention personnel records to pursue it — a scope other delegations have declined to approve without knowing what, or whom, is being investigated. NWO has declined to say.',
      ],
    },
    'sym-09': {
      id: 'sym-09',
      title: 'Proposal: unified Damian Scale reporting standard',
      summary:
        'A proposal to standardize blatancy reporting across all five Conventions using a single shared scale and shared review board.',
      clearance: 'internal',
      tags: ['Standards', 'Damian Scale'],
      priority: 'routine',
      detail: [
        'Tabled for the ninth consecutive session. Every Convention supports standardization of everyone else\'s reporting.',
      ],
    },
    'sym-10': {
      id: 'sym-10',
      title: 'Proposal: joint amalgam pre-screening protocol',
      summary:
        'A proposal to pre-screen personnel before cross-Convention amalgam assignment, intended to reduce disputes like sym-05.',
      clearance: 'internal',
      tags: ['Personnel', 'Standards'],
      priority: 'routine',
      detail: [
        'Tabled pending resolution of sym-05, which is itself tabled pending a mediation outcome no one expects to arrive.',
      ],
    },
    'sym-11': {
      id: 'sym-11',
      title: 'Proposal: rotating Symposium chair term limits',
      summary:
        'A standing proposal to limit how long any one Convention may hold the Symposium chair. Reintroduced annually; never scheduled for a vote.',
      clearance: 'internal',
      tags: ['Governance'],
      priority: 'routine',
      detail: [
        'The current chair has held the position for longer than the proposal has existed.',
      ],
    },
    'sym-12': {
      id: 'sym-12',
      title: 'FY prior-year infrastructure cost split — closed',
      summary:
        'Last year\'s version of sym-07. Resolved by a formula every delegation still disputes but no longer contests aloud.',
      clearance: 'internal',
      tags: ['Infrastructure', 'Resolved'],
      priority: 'routine',
      detail: [
        'Closed by exhaustion rather than agreement, which the Symposium record classifies identically to agreement.',
      ],
    },
    'sym-13': {
      id: 'sym-13',
      title: 'Cross-Convention discretion-standard harmonization — closed',
      summary:
        'A multi-year effort to harmonize public-facing discretion standards across all five divisions. Closed as complete.',
      clearance: 'internal',
      tags: ['Standards', 'Resolved'],
      priority: 'routine',
      detail: [
        'Complete in the sense that a document was signed. Field practice across the five Conventions remains, politely, uncoordinated.',
      ],
    },
    'sym-14': {
      id: 'sym-14',
      title: 'Prior-year amalgam mediation backlog — closed',
      summary:
        'Last year\'s backlog of unresolved amalgam disputes. Closed by carryover into the current backlog.',
      clearance: 'internal',
      tags: ['Personnel', 'Resolved'],
      priority: 'routine',
      detail: [
        'The backlog was not resolved. It was renamed and reopened under the current session\'s numbering, which the record also classifies as resolution.',
      ],
    },
  },
}
