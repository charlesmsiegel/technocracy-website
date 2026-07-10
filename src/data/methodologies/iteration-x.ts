import type { MethodologyPanel } from '../types'

export const iterationXMethodologies: MethodologyPanel[] = [
  {
    id: 'biomechanics',
    convention: 'iteration-x',
    name: 'BioMechanics',
    role: 'Implant fabrication, fitting, and recipient lifecycle support',
    kind: 'board',
    board: {
      convention: 'iteration-x',
      codename: 'BIOMECHANICS WORK QUEUE',
      designation: 'METHODOLOGY QUEUE IX-BM-2026',
      banner: 'ITX INTERNAL — BIOMECHANICS PERSONNEL',
      brief:
        'Routine fabrication, fitting, and callback traffic for the implant program. Fitting backlog remains above target for the sixth consecutive cycle; do not promise recipients dates. All callbacks involving legacy donor stock route through the sealed-provenance desk, not through this queue’s comments field.',
      columns: [
        { id: 'fitting-backlog', title: 'Fitting Backlog', cardIds: ['bm-01', 'bm-02', 'bm-03', 'bm-04'] },
        { id: 'bench', title: 'On the Bench', cardIds: ['bm-05', 'bm-06', 'bm-07'] },
        { id: 'callbacks', title: 'Rejection & Callback', cardIds: ['bm-08', 'bm-09', 'bm-10'] },
      ],
      cards: {
        'bm-01': {
          id: 'bm-01',
          title: 'Batch fitting: dermal lattice, 22 field operatives',
          summary:
            'NWO field office requests expedited scheduling for a full amalgam roster. Backlog position 34 days. Expedite request denied twice; third request arrived pre-approved, which is not how approval works. Investigating.',
          clearance: 'internal',
          tags: ['dermal-armor', 'backlog', 'inter-convention'],
          priority: 'routine',
        },
        'bm-02': {
          id: 'bm-02',
          title: 'ADEI ocular revision 4.2 — rollout triage',
          summary:
            'Revision 4.2 corrects the low-light banding complaint. Queue order is by clearance tier, not medical need, per standing policy. Recipients asking why are to be referred to the policy, not to an answer.',
          clearance: 'internal',
          tags: ['adei', 'ocular', 'rollout'],
          priority: 'routine',
        },
        'bm-03': {
          id: 'bm-03',
          title: 'Myoelectric forearm, pediatric recipient — custom scaling',
          summary:
            'Off-catalogue scaling for a nine-year-old dependent of Construct staff. Growth-accommodating socket, three revisions budgeted. The kind of job this Methodology says it exists for. Handle it like that.',
          clearance: 'internal',
          tags: ['prosthetics', 'custom', 'dependent-care'],
          priority: 'routine',
        },
        'bm-04': {
          id: 'bm-04',
          title: 'Progenitor graft-interface consult backlog',
          summary:
            'Seven pending co-consults on tissue-to-lattice interfaces. Progenitor liaison has been "about to arrive" for three weeks. Reschedule weekly; log each reschedule; do not editorialize in the log.',
          clearance: 'internal',
          tags: ['progenitors', 'consult', 'graft'],
          priority: 'routine',
        },
        'bm-05': {
          id: 'bm-05',
          title: 'Life-extension implant — Comptroller Hsu, quarterly service',
          summary:
            'Scheduled maintenance on a Series 3 cardiac governor. Service window is 40 minutes; the Comptroller schedules 35. Have the bench prepped, the spares staged, and nothing interesting to report.',
          clearance: 'restricted',
          tags: ['life-extension', 'vip', 'scheduled-service'],
          priority: 'elevated',
          assignee: 'Fitter-Specialist Okonkwo, D.',
        },
        'bm-06': {
          id: 'bm-06',
          title: 'Texture-sense finger array calibration rig — down for parts',
          summary:
            'Rig 4 awaiting a piezo reference block from Macrotechnician stores. Manual calibration authorized in the interim; throughput drops to six arrays per shift. Order placed. Order re-placed. Order escalated.',
          clearance: 'internal',
          tags: ['equipment', 'parts', 'calibration'],
          priority: 'routine',
        },
        'bm-07': {
          id: 'bm-07',
          title: 'Nanite hazard review: Series 9 subdermal plating',
          summary:
            'Pre-deployment review of self-repairing plating. The nanite population self-repairs correctly; the review concerns what it did to the test coupon it was not asked to repair. Deployment hold continues.',
          clearance: 'restricted',
          tags: ['nanotech', 'hazard-review', 'hold'],
          priority: 'elevated',
        },
        'bm-08': {
          id: 'bm-08',
          title: 'Callback: recipient reports the hand remembers things',
          summary:
            'Recipient IX-4471 (transradial, Mark VII salvage donor stock) reports the hand executes key sequences he has never learned and pauses over keypads "as if waiting for a prompt." Provenance query on the donor stock returned SEALED.',
          clearance: 'restricted',
          tags: ['callback', 'mark-vii', 'donor-stock', 'sealed'],
          priority: 'elevated',
          assignee: 'Fitter-Specialist Okonkwo, D.',
          detail: [
            'Recipient woke on three occasions to find the hand entering a repeating 14-key sequence against the nightstand. Motion logs confirm the events and confirm the recipient’s own myoelectric channels were idle at the time. The sequence matches no current system. It matches a legacy HIT Mark maintenance handshake, deprecated 2004.',
            'Recommended disposition: exchange the unit under warranty, retain the original for bench study, and inform the recipient the fault was firmware. It was not firmware. The bench study request requires countersignature from the sealed-provenance desk, which has already asked, twice, how we got this unit.',
          ],
          redactedLines: 2,
        },
        'bm-09': {
          id: 'bm-09',
          title: 'Rejection cluster: Batch 26-C dermal weave, 4 of 60',
          summary:
            'Four recipients from a single batch presenting interface inflammation at week three. Batch chemistry within spec. Common factor so far: all four fitted on the same bench, same shift. Bench swabbed; fitter interviewed; both nominal.',
          clearance: 'internal',
          tags: ['rejection', 'batch-26c', 'investigation'],
          priority: 'elevated',
        },
        'bm-10': {
          id: 'bm-10',
          title: 'Recipient satisfaction survey — quarterly, mandatory',
          summary:
            'Distribute and collect the Q3 instrument. Participation is mandatory; satisfaction is expected. Scores below 9.0 trigger an automatic wellness referral for the recipient, so consider carefully before helping anyone fill it in honestly.',
          clearance: 'internal',
          tags: ['survey', 'quarterly', 'admin'],
          priority: 'routine',
          assignee: '@operative',
        },
      },
    },
  },
  {
    id: 'macrotechnicians',
    convention: 'iteration-x',
    name: 'Macrotechnicians',
    role: 'Heavy systems, hardsuit maintenance, and Construct plant upkeep',
    kind: 'board',
    board: {
      convention: 'iteration-x',
      codename: 'MACROTECHNICS WORK QUEUE',
      designation: 'METHODOLOGY QUEUE IX-MT-2026',
      banner: 'ITX INTERNAL — MACROTECHNICIAN PERSONNEL',
      brief:
        'Shop-floor and plant queue for heavy fabrication, hardsuit sustainment, and Construct physical systems. Forge slots remain oversubscribed. Work orders touching legacy HIT Mark hardware require two-person integrity and a completed decommission checklist, every line, every time.',
      columns: [
        { id: 'intake', title: 'Work Orders — Intake', cardIds: ['mt-01', 'mt-02', 'mt-03'] },
        { id: 'floor', title: 'On the Floor', cardIds: ['mt-04', 'mt-05', 'mt-06', 'mt-07'] },
        { id: 'signoff', title: 'Awaiting Parts / Sign-off', cardIds: ['mt-08', 'mt-09', 'mt-10'] },
      ],
      cards: {
        'mt-01': {
          id: 'mt-01',
          title: 'HIT Mark IX decommission — three units remaining',
          summary:
            'Final teardown of retired chassis stock, Autoclave storage bay 2. Units 09-112 and 09-113 processed without incident. Unit 09-114 continues to hold standby posture with the power bus physically disconnected. Teardown deferred pending an explanation nobody has offered to provide.',
          clearance: 'restricted',
          tags: ['hit-mark', 'decommission', 'deferred'],
          priority: 'elevated',
          detail: [
            'Standby posture requires servo power. Unit 09-114 has none. Thermal imaging shows the chassis at ambient. Strain gauges on the mounting cradle nonetheless register the load shifting, slightly, on an approximately daily cycle, as if the unit were settling its weight.',
            'Two-person integrity is now three-person integrity for bay 2. The checklist has been amended: line 41, "confirm unit is not waiting."',
          ],
          redactedLines: 1,
        },
        'mt-02': {
          id: 'mt-02',
          title: 'Hardsuit R25 myomer refit — lot of 12',
          summary:
            'Scheduled bundle replacement at 800-hour intervals. Ten suits standard wear; two show asymmetric stretch consistent with operators exceeding load governors. Governor logs show no exceedance. Refit anyway; note it anyway.',
          clearance: 'internal',
          tags: ['hardsuit', 'myomer', 'scheduled'],
          priority: 'routine',
        },
        'mt-03': {
          id: 'mt-03',
          title: 'Primium pour schedule, Q3 — forge slot allocation',
          summary:
            'Fourteen slot requests against nine available pours. Void Engineer shipyard subcontract holds priority two. Everyone else attaches a justification memo, which the committee reads, enjoys, and mostly declines.',
          clearance: 'internal',
          tags: ['primium', 'forge', 'scheduling'],
          priority: 'routine',
        },
        'mt-04': {
          id: 'mt-04',
          title: 'Construct plant: cooling loop descale, Level B-4',
          summary:
            'Annual descale of the secondary loop. Isolation valves tagged, chemistry approved, four-shift job. The loop has never once been interesting and the entire floor would like it to stay that way.',
          clearance: 'internal',
          tags: ['plant', 'cooling', 'maintenance'],
          priority: 'routine',
          assignee: '@operative',
        },
        'mt-05': {
          id: 'mt-05',
          title: 'Fusion bottle recertification — Plant 2',
          summary:
            'Five-year recert on the containment vessel. Inspection window requires a 30% draw-down on Construct power; schedule against the Statisticians’ batch runs or accept the consequences of scheduling against the Statisticians’ batch runs.',
          clearance: 'restricted',
          tags: ['power', 'recertification', 'plant-2'],
          priority: 'elevated',
        },
        'mt-06': {
          id: 'mt-06',
          title: 'Fabrication cell 6 retooling — VE shipyard subcontract',
          summary:
            'Retool for hull bracket runs per the R&E order book. Tolerances are tighter than our house standard, which the customer communicated politely and in writing, twice. Thank you, R&E.',
          clearance: 'internal',
          tags: ['fabrication', 'void-engineers', 'subcontract'],
          priority: 'routine',
        },
        'mt-07': {
          id: 'mt-07',
          title: 'Blast range booking conflict — week of the 21st',
          summary:
            'Combat engineering (shaped-charge series) and materials acoustics (resonance series) both hold confirmed bookings. Both teams cite precedent. The range officer cites the range officer. Mediation scheduled.',
          clearance: 'internal',
          tags: ['range', 'scheduling', 'mediation'],
          priority: 'routine',
        },
        'mt-08': {
          id: 'mt-08',
          title: 'Load-bearing analysis — Sublevel 9 expansion',
          summary:
            'As-built drawings disagree with the building by one structural bay. Survey team confirms the bay exists; archives confirm it was never built. Analysis proceeds using the building, since that is the one holding the weight.',
          clearance: 'restricted',
          tags: ['structural', 'survey', 'discrepancy'],
          priority: 'elevated',
        },
        'mt-09': {
          id: 'mt-09',
          title: 'Myomer bundle shortage — supplier under Adjustment',
          summary:
            'Sole-source supplier missed two deliveries. Syndicate liaison reports the supplier relationship is "being restructured for improved reliability." Expect improved reliability. Order interim stock regardless.',
          clearance: 'internal',
          tags: ['supply-chain', 'myomer', 'syndicate'],
          priority: 'routine',
        },
        'mt-10': {
          id: 'mt-10',
          title: 'Sign-off: seismic isolation, archive vault',
          summary:
            'Isolation bearings installed and load-tested to specification. Awaiting counter-signature from Records, who want it in writing that the vault will not move. It will move exactly as designed. This apparently requires a meeting.',
          clearance: 'internal',
          tags: ['vault', 'sign-off', 'records'],
          priority: 'routine',
        },
      },
    },
  },
  {
    id: 'statisticians',
    convention: 'iteration-x',
    name: 'Statisticians',
    role: 'Simulation, forecasting, and Time Table stewardship',
    kind: 'dashboard',
    metrics: [
      {
        kind: 'gauge',
        id: 'st-timetable',
        label: 'Time Table Adherence',
        value: 87,
        thresholds: [80, 68],
        descending: true,
        unit: '%',
      },
      {
        kind: 'counter',
        id: 'st-simulations',
        label: 'Simulations Running',
        value: 312,
        jitter: 4,
      },
      {
        kind: 'gauge',
        id: 'st-variance',
        label: 'Forecast Variance (Q3)',
        value: 9,
        thresholds: [12, 20],
        unit: '%',
      },
      {
        kind: 'sparkline',
        id: 'st-residuals',
        label: 'Anomaly Residuals (Unattributed)',
        history: [2, 2, 3, 2, 4, 3, 5, 6, 5, 8, 7, 9, 11, 12],
      },
      {
        kind: 'counter',
        id: 'st-dead-data',
        label: 'Dead Data Flagged (30d)',
        value: 1408,
        jitter: 12,
      },
      {
        kind: 'status',
        id: 'st-model7',
        label: 'Model 7 Disagreement',
        status: 'elevated',
        note: 'Model 7 continues to diverge from Models 1–6 and to agree with observed outcomes. Per review board, the divergence remains classified as an error until the source of its accuracy is identified.',
      },
      {
        kind: 'status',
        id: 'st-linear',
        label: 'Linear Extrapolation Review',
        status: 'nominal',
        note: 'Revalidation of pre-Anomaly Time Table methods proceeding on schedule.',
      },
    ],
    note: 'Residual series excludes items transferred to file IX-2005-0007. Analysts identifying structure in the excluded set should report it to the file custodian and to no one else, including this dashboard.',
  },
  {
    id: 'time-motion-managers',
    convention: 'iteration-x',
    name: 'Time-Motion Managers',
    role: 'Process efficiency, scheduling, and computing hardware',
    kind: 'dashboard',
    metrics: [
      {
        kind: 'counter',
        id: 'tmm-cycle',
        label: 'Mean Procedure Cycle Time',
        value: 47.3,
        unit: 's',
        decimals: 1,
        jitter: 0.4,
      },
      {
        kind: 'gauge',
        id: 'tmm-deviation',
        label: 'Deviation From Schedule',
        value: 8,
        thresholds: [12, 20],
        unit: '%',
      },
      {
        kind: 'sparkline',
        id: 'tmm-throughput',
        label: 'Amalgam Throughput Index',
        history: [61, 63, 62, 66, 65, 68, 67, 70, 69, 71, 73, 72],
      },
      {
        kind: 'counter',
        id: 'tmm-hours',
        label: 'Personnel-Hours Reclaimed (30d)',
        value: 11240,
        jitter: 40,
      },
      {
        kind: 'gauge',
        id: 'tmm-hardware',
        label: 'Hardware Fabrication Utilization',
        value: 91,
        thresholds: [95, 98],
        unit: '%',
      },
      {
        kind: 'counter',
        id: 'tmm-constant',
        label: 'Unexplained Residual Constant',
        value: 11,
        unit: 's',
        decimals: 3,
        jitter: 0,
      },
      {
        kind: 'status',
        id: 'tmm-sweep',
        label: 'Optimization Sweep 26-3',
        status: 'nominal',
        note: 'Retiming complete on lines 1–4. Net cycle improvement 2.1 s. Residual unchanged.',
      },
    ],
    tickerItems: [
      {
        id: 'tmm-ticker-1',
        text: '[TMM-26-3112] LINE 4 RETIMED · CYCLE −2.1s · RESIDUAL 11.000s · RESIDUAL UNCHANGED',
      },
    ],
    note: 'The 11.000-second residual recurs across unrelated procedures, sites, and shifts, and does not respond to optimization. Personnel holding List A access to file IX-2005-0007 should log occurrences through that channel. All other personnel should round it off.',
  },
]
