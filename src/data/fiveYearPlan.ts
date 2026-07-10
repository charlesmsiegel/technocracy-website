/* The Five-Year Plan — Union-wide coordination, visible to every
   Convention. Year one is complete. It went exactly as planned, because
   that is what a plan is. */

import type { Board, Metric } from './types'

export const PLAN_METRICS: Metric[] = [
  {
    kind: 'gauge',
    id: 'plan-completion',
    label: 'Plan Completion',
    value: 20,
    thresholds: [101, 102],
    unit: '%',
  },
  {
    kind: 'gauge',
    id: 'schedule-adherence',
    label: 'Schedule Adherence',
    value: 100,
    thresholds: [95, 90],
    descending: true,
    unit: '%',
  },
  {
    kind: 'counter',
    id: 'milestones-delivered',
    label: 'Milestones Delivered (Year One)',
    value: 23,
  },
  {
    kind: 'counter',
    id: 'quarters-remaining',
    label: 'Quarters Remaining',
    value: 16,
  },
  {
    kind: 'sparkline',
    id: 'readiness-index',
    label: 'Masses Readiness Index',
    history: [61, 62, 64, 64, 66, 68, 69, 71, 73, 74, 76, 78],
  },
  {
    kind: 'status',
    id: 'time-table-integrity',
    label: 'Time Table Integrity',
    status: 'nominal',
    note: 'All release dates hold. All release dates have always held.',
  },
  {
    kind: 'counter',
    id: 'deviation-requests',
    label: 'Deviation Requests Received',
    value: 4,
  },
  {
    kind: 'counter',
    id: 'deviation-approved',
    label: 'Deviation Requests Approved',
    value: 0,
  },
]

export const PLAN_BOARD: Board = {
  convention: 'union',
  codename: 'THE FIVE-YEAR PLAN',
  designation: 'UNION-WIDE COORDINATION SCHEDULE · YEAR TWO OF FIVE',
  banner: 'ALL CONVENTIONS — ADHERENCE IS EXPECTED, AND OBSERVED',
  brief:
    'The current Plan governs the release of capability to the Masses through the end of Year Five. Year One concluded on schedule, at schedule, because of the schedule. Items may not be reordered, accelerated, or discussed with delivery targets present. The Plan is not a forecast. Forecasts can be wrong.',
  columns: [
    {
      id: 'delivered',
      title: 'Delivered — Year One',
      cardIds: ['fy-01', 'fy-02', 'fy-03', 'fy-04', 'fy-05'],
    },
    {
      id: 'releasing',
      title: 'Releasing This Quarter',
      cardIds: ['fy-06', 'fy-07', 'fy-08'],
    },
    {
      id: 'preparation',
      title: 'In Preparation',
      cardIds: ['fy-09', 'fy-10', 'fy-11', 'fy-12'],
    },
    {
      id: 'scheduled',
      title: 'Scheduled — Years Two Through Five',
      cardIds: ['fy-13', 'fy-14', 'fy-15', 'fy-16', 'fy-17', 'fy-18'],
    },
  ],
  cards: {
    'fy-01': {
      id: 'fy-01',
      title: 'Anticipatory consumer interface — mainstream normalization',
      summary:
        'Virtuous 8 launch completed. The Masses now expect their devices to know what they want. Expectation is the deliverable; the phone was packaging.',
      clearance: 'internal',
      tags: ['year-1', 'SYN', 'delivered'],
      priority: 'routine',
    },
    'fy-02': {
      id: 'fy-02',
      title: 'Continuous whole-Earth observation — public comfort threshold',
      summary:
        'Sentinel-312 completion announced and received warmly. Polling confirms the Masses prefer being watched by something with a press release.',
      clearance: 'internal',
      tags: ['year-1', 'VE', 'delivered'],
      priority: 'routine',
    },
    'fy-03': {
      id: 'fy-03',
      title: 'Regenerative medicine — insured and outpatient',
      summary:
        'Organ regrowth normalized via coverage inclusion rather than headline. Adoption curve tracking projection to within rounding.',
      clearance: 'internal',
      tags: ['year-1', 'PGN', 'delivered'],
      priority: 'routine',
    },
    'fy-04': {
      id: 'fy-04',
      title: 'Climate reversal — first public drawdown milestone',
      summary:
        'Announced per schedule. Public assigned credit to collective effort, as designed. Collective effort is scheduled to continue receiving credit through Year Five.',
      clearance: 'internal',
      tags: ['year-1', 'CCRI', 'delivered'],
      priority: 'routine',
    },
    'fy-05': {
      id: 'fy-05',
      title: 'Narrative hygiene curriculum — 74-country deployment',
      summary:
        'Media-literacy program delivered. Graduates report feeling noticeably more certain about things. Certainty levels within tolerance.',
      clearance: 'internal',
      tags: ['year-1', 'NWO', 'delivered'],
      priority: 'routine',
    },
    'fy-06': {
      id: 'fy-06',
      title: 'Metropolitan wireless power — pilot district energization',
      summary:
        'Three districts, no cables, no announcement. Residents will notice gradually, which is the correct speed for noticing.',
      clearance: 'internal',
      tags: ['year-2', 'ITX', 'releasing'],
      priority: 'elevated',
    },
    'fy-07': {
      id: 'fy-07',
      title: 'Consumer battery density — +11% tranche',
      summary:
        'Eleven percent is the maximum improvement the Masses experience as progress rather than as a question.',
      clearance: 'internal',
      tags: ['year-2', 'ITX', 'releasing'],
      priority: 'routine',
    },
    'fy-08': {
      id: 'fy-08',
      title: 'Ambient assistance normalization — phase 4 of 9',
      summary:
        'This quarter the assistant begins offering help before being asked, in three test markets. Gratitude metrics expected to lag by one quarter. This is normal.',
      clearance: 'internal',
      tags: ['year-2', 'NWO', 'SYN'],
      priority: 'elevated',
    },
    'fy-09': {
      id: 'fy-09',
      title: 'Desktop biofabrication — narrative pre-seeding',
      summary:
        'Home tissue printing requires two years of fictional portrayals before hardware release. Scripts commissioned; casting complete; the heartwarming one airs first.',
      clearance: 'internal',
      tags: ['year-3', 'PGN', 'NWO'],
      priority: 'routine',
    },
    'fy-10': {
      id: 'fy-10',
      title: 'Weather reliability subscription — pricing acceptance study',
      summary:
        'Before the Masses may buy good weather, they must first believe it can be sold. Focus groups underway. Early objection: "but weather is free." Response in drafting.',
      clearance: 'restricted',
      tags: ['year-3', 'SYN', 'CCRI'],
      priority: 'routine',
    },
    'fy-11': {
      id: 'fy-11',
      title: 'Quantum error-correction disclosure — tranche two of five',
      summary:
        'Academic partners will independently discover what we archived in 2011. Discovery dates assigned; laureates notified of their good fortune in advance, discreetly.',
      clearance: 'restricted',
      tags: ['year-2', 'ITX'],
      priority: 'routine',
    },
    'fy-12': {
      id: 'fy-12',
      title: 'Orbital tourism — price-point normalization',
      summary:
        'Ticket price descends on schedule toward upper-middle aspirational. The frontier must feel expensive but reachable — reachable but supervised.',
      clearance: 'internal',
      tags: ['year-3', 'VE', 'SYN'],
      priority: 'routine',
    },
    'fy-13': {
      id: 'fy-13',
      title: 'Fusion breakthrough — announcement',
      summary:
        'Scheduled Year Three, Q2. The breakthrough occurred in 1978; the announcement has been maturing. Grid infrastructure reaches acceptance readiness Year Three, Q1.',
      clearance: 'restricted',
      tags: ['year-3', 'ITX', 'announcement'],
      priority: 'elevated',
    },
    'fy-14': {
      id: 'fy-14',
      title: 'Longevity plateau — public framing',
      summary:
        'Year Three: the Masses learn that 100 is the new 80, from their physicians, gradually, with a pamphlet. The pamphlet is in its eleventh revision. Tone is everything.',
      clearance: 'internal',
      tags: ['year-3', 'PGN'],
      priority: 'routine',
    },
    'fy-15': {
      id: 'fy-15',
      title: 'Consumer neural interface — readiness 61%',
      summary:
        'Year Four. Readiness rises 1.2% per quarter, on schedule. Do not accelerate: the last acceleration attempt is why there is a Form MX-2.',
      clearance: 'restricted',
      tags: ['year-4', 'ITX', 'PGN'],
      priority: 'elevated',
    },
    'fy-16': {
      id: 'fy-16',
      title: 'Municipal automation pilot — governance layer',
      summary:
        'Year Five: one mid-sized city runs itself for six months. If no one notices, the pilot is a success. If everyone notices and approves, the pilot is a triumph. Plan for success.',
      clearance: 'restricted',
      tags: ['year-5', 'ITX', 'NWO'],
      priority: 'routine',
    },
    'fy-17': {
      id: 'fy-17',
      title: 'Crewed Mars return — media architecture',
      summary:
        'Year Five capstone. Broadcast plan complete; landing site selected for camera angles; the phrase the astronaut says has been through fourteen drafts and two focus groups.',
      clearance: 'internal',
      tags: ['year-5', 'VE', 'NWO'],
      priority: 'routine',
    },
    'fy-18': {
      id: 'fy-18',
      title: 'Item 26',
      summary:
        'Details held above this level. Delivery date is firm. Resourcing is complete. All five Conventions have signed, and none of them will say for what.',
      clearance: 'eyes-only',
      tags: ['year-5', 'all-conventions'],
      priority: 'critical',
      redactedLines: 4,
    },
  },
}
