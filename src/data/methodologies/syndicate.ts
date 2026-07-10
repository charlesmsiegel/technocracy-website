import type { MethodologyPanel } from '../types'

export const syndicateMethodologies: MethodologyPanel[] = [
  {
    id: 'financiers',
    convention: 'syndicate',
    name: 'Financiers',
    role: 'Global markets, acquisitions, and hypereconomic telemetry',
    kind: 'dashboard',
    metrics: [
      {
        kind: 'gauge',
        id: 'fin-liquidity',
        label: 'Primal Liquidity',
        value: 57,
        thresholds: [45, 30],
        descending: true,
        unit: '%',
      },
      {
        kind: 'sparkline',
        id: 'fin-desire-consumer',
        label: 'Desire Index — Consumer Staples',
        history: [54, 55, 57, 56, 58, 60, 59, 61, 63, 62, 64, 66],
      },
      {
        kind: 'sparkline',
        id: 'fin-desire-aspirational',
        label: 'Desire Index — Aspirational Goods',
        history: [71, 70, 73, 74, 72, 76, 75, 78, 77, 80, 79, 82],
      },
      {
        kind: 'counter',
        id: 'fin-acquisitions',
        label: 'Acquisitions in Play',
        value: 23,
        jitter: 1,
      },
      {
        kind: 'counter',
        id: 'fin-liquidations',
        label: 'Liquidations Scheduled',
        value: 9,
        jitter: 1,
      },
      {
        kind: 'gauge',
        id: 'fin-confidence',
        label: 'Forecast Confidence',
        value: 100,
        thresholds: [92, 85],
        descending: true,
        unit: '%',
      },
      {
        kind: 'status',
        id: 'fin-sentiment',
        label: 'Sentiment Steering',
        status: 'nominal',
        note: 'Within tolerance across all monitored exchanges. Two exchanges within tolerance before steering was applied; under review.',
      },
    ],
    tickerItems: [
      {
        id: 'fin-ticker-1',
        text: '[FIN-26-Q3] DESIRE INDICES REBASED · WANTING MORE IS THE NEW BASELINE · PRIOR BASELINE RETIRED',
      },
    ],
    note: 'Forecast confidence has held at 100% for nine consecutive quarters. The models no longer emit error bars. A working group was convened to determine whether this constitutes a malfunction and concluded, with 100% confidence, that it does not.',
  },
  {
    id: 'media-control',
    convention: 'syndicate',
    name: 'Media Control',
    role: 'Narrative placement, trend management, and corrections',
    kind: 'board',
    board: {
      convention: 'syndicate',
      codename: 'MEDIA CONTROL PLACEMENT QUEUE',
      designation: 'METHODOLOGY QUEUE SY-MC-2026',
      banner: 'SYNDICATE INTERNAL — MEDIA CONTROL PERSONNEL',
      brief:
        'Placement, circulation, and correction workflow for the quarter. All placements clear Spin review before seeding. Retractions are a service we provide to the truth, on a schedule the truth does not set. Talent relations items are handled warmly; warmth is billable.',
      columns: [
        { id: 'placement', title: 'Placement Queue', cardIds: ['mc-01', 'mc-02', 'mc-03', 'mc-04'] },
        { id: 'circulation', title: 'In Circulation', cardIds: ['mc-05', 'mc-06', 'mc-07'] },
        { id: 'retractions', title: 'Retractions & Corrections', cardIds: ['mc-08', 'mc-09', 'mc-10'] },
      ],
      cards: {
        'mc-01': {
          id: 'mc-01',
          title: 'Seed: drone-swarm explanation, EU-7 night lights',
          summary:
            'Hobbyist-drone narrative for the RDI activity over sector EU-7. Two aviation experts booked, footage package cut, subreddit seeding scheduled ahead of print. The best debunk arrives before the claim.',
          clearance: 'internal',
          tags: ['seed', 'debunk', 'eu-7'],
          priority: 'routine',
        },
        'mc-02': {
          id: 'mc-02',
          title: 'Seed: sleep-tracking normalization, lifestyle verticals',
          summary:
            'Wellness angle for continuous biometric wear: eight placements across lifestyle and productivity verticals. Client (NWO liaison desk) requests emphasis on "peace of mind." Emphasis will be placed.',
          clearance: 'internal',
          tags: ['seed', 'wellness', 'nwo-client'],
          priority: 'routine',
        },
        'mc-03': {
          id: 'mc-03',
          title: 'Arrange regional press award — cooperative byline',
          summary:
            'Nominee has run our corrections verbatim for six consecutive quarters and asks fewer questions each year. Award committee composition already suitable. Ceremony to precede the byline’s next assignment, which will require goodwill.',
          clearance: 'restricted',
          tags: ['talent-relations', 'award', 'goodwill'],
          priority: 'elevated',
          detail: [
            'Award citation to emphasize "integrity" and "independence." Both words test well with the nominee’s peer group and neither is load-bearing. Plaque ordered. Speech drafted, in the nominee’s voice, for the nominee to discover they agree with.',
          ],
        },
        'mc-04': {
          id: 'mc-04',
          title: 'Greenlight: prestige documentary, deep-sea exploration',
          summary:
            'VE liaison request for a Consensus-softening series on ocean frontier science. Budget approved contingent on final cut approval, which the filmmakers will be told is standard, because we have made it standard.',
          clearance: 'internal',
          tags: ['documentary', 'void-engineers', 'consensus'],
          priority: 'routine',
        },
        'mc-05': {
          id: 'mc-05',
          title: 'Trend in circulation: "quiet ambition" — week 6 of 8',
          summary:
            'Organic uptake at 140% of model. Extension to twelve weeks under consideration; Effects warns against trends that outlive their exit plan. Prepare the successor trend either way.',
          clearance: 'internal',
          tags: ['trend', 'circulation', 'effects'],
          priority: 'routine',
        },
        'mc-06': {
          id: 'mc-06',
          title: 'Debunk package: trench "megafauna" footage',
          summary:
            'Compression-artifact explanation holding at 96% acceptance. Expert rotation booked through month end. EFD liaison thanked us and asked that the footage itself be forwarded, unedited, to an address that is not a media address.',
          clearance: 'internal',
          tags: ['debunk', 'footage', 'efd-liaison'],
          priority: 'routine',
        },
        'mc-07': {
          id: 'mc-07',
          title: 'Streaming product-integration audit — Q3',
          summary:
            'Verify placement compliance across fourteen scripted series. Flag any integration played for irony; irony converts poorly and the client contract defines it as breach.',
          clearance: 'internal',
          tags: ['audit', 'streaming', 'compliance'],
          priority: 'routine',
          assignee: '@operative',
        },
        'mc-08': {
          id: 'mc-08',
          title: 'Retraction: metro daily story on unclaimed office floors',
          summary:
            'Reporter compiled a list of downtown floors that are leased, lit, and cleaned nightly for companies whose payroll clears but whose employees no one has met. Retraction runs Friday. Reporter moves to the award track (see placement queue).',
          clearance: 'restricted',
          tags: ['retraction', 'spd-adjacent', 'award-track'],
          priority: 'elevated',
          notSharedWith: 'symposium',
          detail: [
            'The list is accurate. That is the problem. Three of the eleven floors appear in our own facilities ledger under a Division whose file this desk is not cleared to name, and the standing guidance on that Division is that there is no standing guidance.',
            'Retraction language approved upstairs without edits, which has never happened before. Do not follow up. Do not visit the floors.',
          ],
          redactedLines: 2,
        },
        'mc-09': {
          id: 'mc-09',
          title: 'Correction cascade: mispriced Adjustment in wire copy',
          summary:
            'A financial wire ran the pre-Adjustment figure. Correction issued to 214 downstream outlets; 209 complied within the news cycle. The remaining five will be offered exclusive access to something, which usually completes the cascade.',
          clearance: 'internal',
          tags: ['correction', 'wire', 'cascade'],
          priority: 'routine',
        },
        'mc-10': {
          id: 'mc-10',
          title: 'Legacy print obituary standards — style guide update',
          summary:
            'Annual refresh of approved cause-of-death phrasings for personnel and assets. Two new euphemisms enter the guide; "died doing what he loved" retires after overuse in cases where it was alarmingly literal.',
          clearance: 'internal',
          tags: ['style-guide', 'obituaries', 'annual'],
          priority: 'routine',
        },
      },
    },
  },
  {
    id: 'disbursements',
    convention: 'syndicate',
    name: 'Disbursements',
    role: 'Funding assessment, grants, and Primal Energy distribution',
    kind: 'board',
    board: {
      convention: 'syndicate',
      codename: 'DISBURSEMENTS QUEUE',
      designation: 'METHODOLOGY QUEUE SY-DB-2026',
      banner: 'SYNDICATE INTERNAL — DISBURSEMENTS PERSONNEL',
      brief:
        'Assessment, release, and follow-up workflow for the funding cycle. Every disbursement carries its rider; every rider is read aloud to the recipient at signing, which recipients remember as a pleasant formality. Follow-up items are worked promptly. Money that comes back unasked is a symptom, not a windfall.',
      columns: [
        { id: 'assessment', title: 'Assessment Queue', cardIds: ['db-01', 'db-02', 'db-03'] },
        { id: 'cleared', title: 'Cleared for Disbursement', cardIds: ['db-04', 'db-05', 'db-06'] },
        { id: 'follow-up', title: 'Follow-Up Required', cardIds: ['db-07', 'db-08', 'db-09'] },
      ],
      cards: {
        'db-01': {
          id: 'db-01',
          title: 'Progenitor lab expansion — Assessment visit scheduled',
          summary:
            'Site inspection ahead of the tranche-two release. Probationary Assessor Lindqvist assigned for the standard three-to-six-month embed. Condolences noted in file; the posting builds character and occasionally returns it.',
          clearance: 'internal',
          tags: ['assessment', 'progenitors', 'tranche-two'],
          priority: 'routine',
        },
        'db-02': {
          id: 'db-02',
          title: 'University research grant, materials science',
          summary:
            'Endowed chair plus instrumentation, standard rider: publication review window, personnel approval rights, and the first look at anything interesting. The university calls this a partnership. So do we, in the same tone.',
          clearance: 'internal',
          tags: ['grant', 'rider', 'university'],
          priority: 'routine',
        },
        'db-03': {
          id: 'db-03',
          title: 'ITX Plant 2 operating variance — Axe-Grinder advisory requested',
          summary:
            'Recertification costs running 18% over plan. Reorganization Division to advise. Technically they only advise. The plant comptroller has been sent the standard reassurance letter, which reassures no one, by design.',
          clearance: 'restricted',
          tags: ['reorganization', 'variance', 'iteration-x'],
          priority: 'elevated',
        },
        'db-04': {
          id: 'db-04',
          title: 'Municipal arts grant — goodwill venture, release Friday',
          summary:
            'Unrestricted funds to a riverfront arts council. Genuinely unrestricted; the goodwill is the instrument. Photograph the ribbon-cutting. The photograph is the deliverable.',
          clearance: 'internal',
          tags: ['goodwill', 'municipal', 'release'],
          priority: 'routine',
        },
        'db-05': {
          id: 'db-05',
          title: 'Operative stipend uplift — cost-of-living, batch 26-Q3',
          summary:
            'Across-the-board 3.1% uplift, effective next cycle. Process the batch, verify routing, and enjoy the one queue item where everyone is briefly glad to see this Methodology.',
          clearance: 'internal',
          tags: ['stipend', 'batch', 'quarterly'],
          priority: 'routine',
          assignee: '@operative',
        },
        'db-06': {
          id: 'db-06',
          title: 'Primal Energy allotment — condensed packets, field distribution',
          summary:
            'Quarterly packet distribution to cleared field operatives. Chain of custody signatures at every hop. The favors owed in return are minor, individually. The ledger of minor favors is the actual product.',
          clearance: 'restricted',
          tags: ['primal-energy', 'distribution', 'custody'],
          priority: 'elevated',
        },
        'db-07': {
          id: 'db-07',
          title: 'Recipient attempting to return money — explain gently',
          summary:
            'Regional clinic has twice attempted to return grant principal, with interest, citing "a feeling about the terms." A third attempt auto-triggers Reorganization review, which would be bad for the clinic in ways the clinic is correctly intuiting. Senior assessor to visit and explain, gently, that the money is happy where it is.',
          clearance: 'restricted',
          tags: ['returned-funds', 'clinic', 'gentle-handling'],
          priority: 'elevated',
          assignee: 'Senior Assessor Okafor-Reyes, T.',
          detail: [
            'The rider is performing normally: patient outcomes up 31%, staff retention up, audit findings zero. The clinic director reports dreams in which the ledger balances itself and asks her, politely, for nothing yet. This is within expected parameters and is not information the director needs confirmed.',
            'Talking points: the grant is a gift; the interest is unnecessary; the feeling will pass. Enforcer escort requested for the visit, strictly for the drive (see Enforcer queue). Smile. Decline the check.',
          ],
          redactedLines: 2,
        },
        'db-08': {
          id: 'db-08',
          title: 'Repayment renegotiation — franchise group, Enforcers copied',
          summary:
            'Restaurant franchise group requests extended terms after a soft quarter. Terms extendable; the group’s regional manager has been forthcoming and deserves the courtesy. Enforcers copied for schedule awareness only, which is what we always say.',
          clearance: 'internal',
          tags: ['repayment', 'franchise', 'terms'],
          priority: 'routine',
        },
        'db-09': {
          id: 'db-09',
          title: 'Dormant escrow audit — accounts with no living signatories',
          summary:
            'Eleven escrow accounts whose signatories are all deceased continue to receive scheduled deposits from payers we administer. Deposits are correct to the cent. Determine who is being paid, by us, on whose instruction, and since when.',
          clearance: 'restricted',
          tags: ['escrow', 'audit', 'dormant'],
          priority: 'elevated',
        },
      },
    },
  },
  {
    id: 'enforcers',
    convention: 'syndicate',
    name: 'Enforcers',
    role: 'Receivables, compliance, and client relations',
    kind: 'board',
    board: {
      convention: 'syndicate',
      codename: 'ENFORCER ASSIGNMENT QUEUE',
      designation: 'METHODOLOGY QUEUE SY-EN-2026',
      banner: 'SYNDICATE INTERNAL — ENFORCER PERSONNEL',
      brief:
        'Assignment queue for receivables, compliance engagements, and escort work. Persuasion-first policy remains in force: the threat of consequences outperforms consequences, and is considerably cheaper to file. Escalations beyond conversation require sign-off and a valuation memo.',
      columns: [
        { id: 'receivables', title: 'Receivables', cardIds: ['en-01', 'en-02', 'en-03'] },
        { id: 'engagements', title: 'Client Engagements', cardIds: ['en-04', 'en-05', 'en-06', 'en-07'] },
        { id: 'resolved', title: 'Resolved Amicably', cardIds: ['en-08', 'en-09', 'en-10'] },
      ],
      cards: {
        'en-01': {
          id: 'en-01',
          title: 'Outstanding receivable — import/export partner, Rotterdam',
          summary:
            'Ninety days past due after two written reminders. Schedule a conversation at the partner’s office, during business hours, with the door open. The open door is the message.',
          clearance: 'internal',
          tags: ['receivable', 'conversation', 'rotterdam'],
          priority: 'routine',
        },
        'en-02': {
          id: 'en-02',
          title: 'Compliance audit — franchise holder, Macau tables',
          summary:
            'Quarterly review of house percentages against reported figures. Bring the paperwork and the paperwork team. The paperwork team is very thorough and very large, and it is useful for the client to see both qualities.',
          clearance: 'internal',
          tags: ['audit', 'macau', 'compliance'],
          priority: 'routine',
        },
        'en-03': {
          id: 'en-03',
          title: 'Collections rotation, Q3 — policy reminder attached',
          summary:
            'Rotation assignments for the quarter. Attached reminder: persuasion first, always; a client who can still sign is an asset, and a client who cannot is a write-off with witnesses.',
          clearance: 'internal',
          tags: ['collections', 'rotation', 'policy'],
          priority: 'routine',
          assignee: '@operative',
        },
        'en-04': {
          id: 'en-04',
          title: 'Escort — Disbursements assessor site visit (clinic file)',
          summary:
            'Accompany Senior Assessor Okafor-Reyes on the returned-funds visit. Presence strictly for the drive, per the requesting desk. Wear the good suit. Say nothing. Saying nothing is the deliverable.',
          clearance: 'restricted',
          tags: ['escort', 'disbursements', 'site-visit'],
          priority: 'routine',
        },
        'en-05': {
          id: 'en-05',
          title: 'Witness wellness program — third enrollee declining',
          summary:
            'Two program participants successfully relocated with new employment. The third declines enrollment and has retained counsel. Counsel is a firm we know well, because we staff it. Enrollment expected shortly.',
          clearance: 'restricted',
          tags: ['wellness-program', 'relocation', 'legal-division'],
          priority: 'elevated',
        },
        'en-06': {
          id: 'en-06',
          title: 'Labor dispute mediation — port authority',
          summary:
            'Extranational Division engaged by both sides, per tradition. Mediate to a durable settlement, invoice each party for the outcome the other party got, and close the file before anyone compares receipts.',
          clearance: 'internal',
          tags: ['extranational', 'mediation', 'billing'],
          priority: 'routine',
        },
        'en-07': {
          id: 'en-07',
          title: 'Final valuation review — asset at zero or less economic value',
          summary:
            'Standing quarterly review of the one open file in this category. Policy requires the valuation be re-run before any change in handling. Re-run it honestly. The number decides, not the reviewer, and the reviewer should be grateful for that.',
          clearance: 'restricted',
          tags: ['valuation', 'final-review', 'sign-off'],
          priority: 'critical',
          notSharedWith: ['new-world-order'],
          redactedLines: 3,
        },
        'en-08': {
          id: 'en-08',
          title: 'Debt restructured — nightclub chain',
          summary:
            'Terms revised, schedule accepted, first payment early. Client expressed gratitude twice, unprompted, in writing. Gratitude filed with the instrument, where it accrues.',
          clearance: 'internal',
          tags: ['restructure', 'closed', 'gratitude'],
          priority: 'routine',
        },
        'en-09': {
          id: 'en-09',
          title: 'Security contract renewal — private prison group',
          summary:
            'Three-year renewal executed through the Legal Division. Occupancy guarantees intact. The group believes it negotiated well, which is a service we include at no extra charge.',
          clearance: 'internal',
          tags: ['legal-division', 'renewal', 'contract'],
          priority: 'routine',
        },
        'en-10': {
          id: 'en-10',
          title: 'Commendation write-up — Trevaine team, zero-carnage quarter',
          summary:
            'Full quarter of resolutions with no physical persuasion required. Write it up for the bulletin: the threat of violence remains stronger than the violence, and considerably easier to expense.',
          clearance: 'internal',
          tags: ['commendation', 'bulletin', 'quarterly'],
          priority: 'routine',
        },
      },
    },
  },
  {
    id: 'special-projects-division',
    convention: 'syndicate',
    name: 'Special Projects Division',
    role: 'In-house technology and manufacturing partner',
    kind: 'dashboard',
    metrics: [
      {
        kind: 'counter',
        id: 'spd-active-projects',
        label: 'Active Projects',
        value: 0,
        jitter: 0,
      },
      {
        kind: 'counter',
        id: 'spd-checkins',
        label: 'Personnel Check-Ins (30d)',
        value: 0,
        jitter: 0,
      },
      {
        kind: 'sparkline',
        id: 'spd-output',
        label: 'Manufacturing Output Index',
        history: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
      {
        kind: 'status',
        id: 'spd-plant-telemetry',
        label: 'Plant Telemetry',
        status: 'critical',
        note: 'NO DATA SINCE 1999',
      },
      {
        kind: 'status',
        id: 'spd-requisitions',
        label: 'Requisition Channel',
        status: 'critical',
        note: 'NO DATA SINCE 1999',
      },
      {
        kind: 'status',
        id: 'spd-directorate',
        label: 'Directorate Correspondence',
        status: 'critical',
        note: 'NO DATA SINCE 1999',
      },
      {
        kind: 'counter',
        id: 'spd-dividends',
        label: 'Quarterly Dividends Received',
        value: 108,
        jitter: 0,
      },
    ],
    tickerItems: [
      {
        id: 'spd-ticker-1',
        text: 'DIVIDEND RECEIVED · ORIGIN UNRESOLVED · DO NOT INVESTIGATE (STANDING ORDER)',
      },
    ],
    note: 'This desk is maintained for continuity of records. The Division’s offices remain staffed per payroll, which continues to be drawn. Do not visit the offices. — VPO Finance',
  },
]
