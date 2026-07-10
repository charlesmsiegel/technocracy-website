import type { MethodologyPanel } from '../types'

export const voidEngineersMethodologies: MethodologyPanel[] = [
  {
    id: 'border-corps-division',
    convention: 'void-engineers',
    name: 'Border Corps Division',
    role: 'Near Universe patrol, crossing-point security, and escort',
    kind: 'board',
    board: {
      convention: 'void-engineers',
      codename: 'BORDER CORPS PATROL QUEUE',
      designation: 'METHODOLOGY QUEUE VE-BCD-2026',
      banner: 'VE INTERNAL — BORDER CORPS PERSONNEL',
      brief:
        'Rotation, escort, and checkpoint traffic for Near Universe crossing points. Screening dates must be current within 90 days for any card in this queue involving transit. Checkpoint flags are worked in tally order, not in order of how much anyone wants to think about them.',
      columns: [
        { id: 'rotation', title: 'Rotation Queue', cardIds: ['bcd-01', 'bcd-02', 'bcd-03'] },
        { id: 'patrol', title: 'On Patrol', cardIds: ['bcd-04', 'bcd-05', 'bcd-06'] },
        { id: 'flags', title: 'Checkpoint Flags', cardIds: ['bcd-07', 'bcd-08', 'bcd-09'] },
      ],
      cards: {
        'bcd-01': {
          id: 'bcd-01',
          title: 'Patrol rotation 26-C — crew assignments',
          summary:
            'Staffing the outer corridor rotation. Two berths open after medical holds. Volunteers with current screening dates preferred; volunteers with enthusiasm about the outer corridor will be asked why.',
          clearance: 'internal',
          tags: ['rotation', 'staffing', 'screening'],
          priority: 'routine',
        },
        'bcd-02': {
          id: 'bcd-02',
          title: 'Checkpoint K-5 garrison relief',
          summary:
            'Standard 90-day relief. Outgoing garrison to complete exit screening before contact with incoming garrison, not after, per the amended procedure everyone has now read.',
          clearance: 'internal',
          tags: ['garrison', 'relief', 'k-5'],
          priority: 'routine',
        },
        'bcd-03': {
          id: 'bcd-03',
          title: 'Stores rotation: EDR packs and Primium small arms',
          summary:
            'Quarterly inventory swap for checkpoints B-2 through K-9. Manifest attached. Count everything twice. If the second count is higher than the first, count a third time and call it in.',
          clearance: 'internal',
          tags: ['logistics', 'inventory', 'quarterly'],
          priority: 'routine',
        },
        'bcd-04': {
          id: 'bcd-04',
          title: 'Sweep 26-121 — corridor GAMMA',
          summary:
            'Routine perimeter sweep, four-craft element, standard loadout. Corridor GAMMA has been quiet for five sweeps. Quiet is a data point, not a mood. Log it like one.',
          clearance: 'internal',
          tags: ['sweep', 'corridor-gamma', 'patrol'],
          priority: 'routine',
          assignee: 'Element Lead Vasquez, M.',
        },
        'bcd-05': {
          id: 'bcd-05',
          title: 'Escort: Progenitor sample convoy, crossing point B-2',
          summary:
            'Two-craft escort for a refrigerated convoy. Cargo manifest is sealed at the client’s request and the client’s request has been countersigned, so the escort’s curiosity is officially satisfied.',
          clearance: 'restricted',
          tags: ['escort', 'convoy', 'progenitors'],
          priority: 'routine',
        },
        'bcd-06': {
          id: 'bcd-06',
          title: 'Extended-range picket — marker K-9 approach',
          summary:
            'Standing picket near the K-9 contact site per DTFT 6 assessment. Break-contact rules of engagement in force. Nothing observed in 40 days, which is 40 days of successful observing.',
          clearance: 'restricted',
          tags: ['picket', 'k-9', 'dtft-6'],
          priority: 'elevated',
        },
        'bcd-07': {
          id: 'bcd-07',
          title: 'Checkpoint B-2 tally variance: one more outbound than inbound',
          summary:
            'Crossing logs for the 14th show 23 outbound transits against 22 inbound on a closed loop. All 23 outbound craft returned. Both counts confirmed on recount. Determining which of the 23 was the extra one is complicated by the fact that all of them came back.',
          clearance: 'restricted',
          tags: ['tally-variance', 'b-2', 'transit-logs'],
          priority: 'elevated',
          detail: [
            'Every outbound transit on the 14th presented valid registry, correct challenge responses, and a crew roster matching personnel records. Every inbound transit did the same. The variance is arithmetically certain and procedurally impossible, which is the exact overlap this desk exists for.',
            'Interim measure: B-2 challenge phrases rotated out of cycle, and inbound crews on the affected registries scheduled for early screening. Crews are being told it is a paperwork reconciliation. It is, in the sense that the paperwork and reality require reconciling.',
          ],
          redactedLines: 2,
        },
        'bcd-08': {
          id: 'bcd-08',
          title: 'Challenge-phrase rotation overdue — three checkpoints',
          summary:
            'K-5, B-4, and CERBERUS approach are past the 30-day rotation mark. Overdue phrases are a standing finding in every audit and a standing invitation to everything else. Close this week.',
          clearance: 'internal',
          tags: ['comsec', 'challenge-phrase', 'audit'],
          priority: 'elevated',
        },
        'bcd-09': {
          id: 'bcd-09',
          title: 'Patrol AAR backlog — sweeps 26-114 through 26-119',
          summary:
            'Six after-action reports pending final format review before archive. Uneventful sweeps still get complete AARs; the uneventful ones are the baseline the eventful ones get measured against.',
          clearance: 'internal',
          tags: ['aar', 'backlog', 'admin'],
          priority: 'routine',
          assignee: '@operative',
        },
      },
    },
  },
  {
    id: 'neutralization-specialist-corps',
    convention: 'void-engineers',
    name: 'Neutralization Specialist Corps',
    role: 'Terrestrial containment response and post-incident decontamination',
    kind: 'board',
    board: {
      convention: 'void-engineers',
      codename: 'NEUTRALIZATION DISPATCH QUEUE',
      designation: 'METHODOLOGY QUEUE VE-NSC-2026',
      banner: 'VE INTERNAL — NSC PERSONNEL',
      brief:
        'Dispatch, containment, and decon workflow for terrestrial incursion response. ITAG flags are triaged twice daily. Teams are reminded that a missed check-in is a report, and that the absence of a report is also a report.',
      columns: [
        { id: 'dispatch', title: 'Dispatch Queue', cardIds: ['nsc-01', 'nsc-02', 'nsc-03'] },
        { id: 'containment', title: 'Active Containment', cardIds: ['nsc-04', 'nsc-05', 'nsc-06'] },
        { id: 'decon', title: 'Decon & Refit', cardIds: ['nsc-07', 'nsc-08', 'nsc-09'] },
      ],
      cards: {
        'nsc-01': {
          id: 'nsc-01',
          title: 'ITAG flag 26-0871: recurring EDE signature, Düsseldorf ring road',
          summary:
            'Weak recurring signature at the same kilometer marker, four consecutive nights, always between 03:10 and 03:20. Grid confidence 71%. Two-person assessment element to observe from the 03:00 window onward.',
          clearance: 'internal',
          tags: ['itag', 'ede', 'assessment'],
          priority: 'routine',
        },
        'nsc-02': {
          id: 'nsc-02',
          title: 'DIMH referral batch — Team THETA-2 post-incident evaluations',
          summary:
            'Five referrals to the Descartes Institute following the reservoir containment. Standard post-exposure protocol. Attendance is mandatory and is not a mark against anyone, per the memo, which teams are asked to believe.',
          clearance: 'internal',
          tags: ['dimh', 'wellness', 'post-incident'],
          priority: 'routine',
        },
        'nsc-03': {
          id: 'nsc-03',
          title: 'Saigon Construct sensor net recalibration',
          summary:
            'Quarterly recalibration of the spectral detection ring. Coverage gap on the river approach persists at 4%. The gap has not moved in three quarters. Gaps that do not move are either stable or chosen; recalibrate accordingly.',
          clearance: 'internal',
          tags: ['sensors', 'saigon', 'quarterly'],
          priority: 'routine',
        },
        'nsc-04': {
          id: 'nsc-04',
          title: 'Containment: apartment block, São Paulo — floor 9 only',
          summary:
            'Spectral bleed confined to a single floor for eleven days. Perimeter holds. Residents relocated under a plumbing-failure cover story that the building manager improved without being asked. Entity shows no interest in floors 8 or 10.',
          clearance: 'restricted',
          tags: ['containment', 'sao-paulo', 'spectral'],
          priority: 'elevated',
        },
        'nsc-05': {
          id: 'nsc-05',
          title: 'Team SIGMA-4 overdue — day 3',
          summary:
            'Check-in missed at +48h on a culvert survey rated low-risk. Suit transponders return nominal telemetry on schedule; the timestamps inside the packets are from last Tuesday. Recovery element staged and holding for authorization.',
          clearance: 'restricted',
          tags: ['overdue', 'sigma-4', 'recovery'],
          priority: 'critical',
          assignee: 'Duty Officer Nakamura, S.',
          detail: [
            'Telemetry content is unremarkable: steady vitals, ambient readings consistent with the culvert, comm channel open with no traffic. Every packet arrives exactly on the scheduled interval. Every packet is timestamped 14:31:07 on the 30th, the moment SIGMA-4 passed the survey threshold.',
            'Recovery element briefed on temporal-displacement contact procedure, revision 4. Rule one is unchanged: whatever is at the threshold answering on schedule, do not assume it is a clock error, and do not assume it is SIGMA-4.',
          ],
          redactedLines: 3,
        },
        'nsc-06': {
          id: 'nsc-06',
          title: 'Marrakesh perimeter: entity holding at threshold',
          summary:
            'Contact 26-0863 has held position at the Construct’s outer ward line for six days without attempting entry. Necronaut liaison assesses it as waiting. Current tasking is determining for what, preferably before it finds out first.',
          clearance: 'restricted',
          tags: ['marrakesh', 'threshold', 'necronaut'],
          priority: 'elevated',
        },
        'nsc-07': {
          id: 'nsc-07',
          title: 'Gear decon: Lot 26-19, ectoplasmic residue',
          summary:
            'Standard three-cycle decon extended to four out of caution; residue on two helmets re-registered on instruments after the second cycle. Fourth cycle clean. Gear releases to stores Friday. Cause of the re-registration filed under caution.',
          clearance: 'internal',
          tags: ['decon', 'lot-26-19', 'extended'],
          priority: 'routine',
        },
        'nsc-08': {
          id: 'nsc-08',
          title: 'EDR pack recharge and recertification',
          summary:
            'Nineteen packs through the recharge bench this cycle. Two failed capacity test and route to R&E under warranty. Do not field a pack with a yellow tag. The tag is yellow for a reason someone else already learned.',
          clearance: 'internal',
          tags: ['edr', 'recert', 'bench'],
          priority: 'routine',
          assignee: '@operative',
        },
        'nsc-09': {
          id: 'nsc-09',
          title: 'Deprocessing intake paperwork — cadet class 26-B',
          summary:
            'ECTA intake forms for the incoming class. Complete before conditioning review, file in duplicate, and route the NWO liaison copy through channels that take eleven business days. The eleven days are load-bearing.',
          clearance: 'internal',
          tags: ['ecta', 'deprocessing', 'admin'],
          priority: 'routine',
        },
      },
    },
  },
  {
    id: 'pan-dimensional-corps',
    convention: 'void-engineers',
    name: 'Pan-Dimensional Corps',
    role: 'Deep Universe survey, sample intake, and chart maintenance',
    kind: 'board',
    board: {
      convention: 'void-engineers',
      codename: 'PAN-DIMENSIONAL SURVEY QUEUE',
      designation: 'METHODOLOGY QUEUE VE-PDC-2026',
      banner: 'VE INTERNAL — PDC PERSONNEL',
      brief:
        'Survey sortie planning, sample and data intake, and chart correction workflow. Science berths remain scarce while Fleet holds allocation priority; plan sorties tight. Chart corrections are permanent records — write them as if someone’s life will depend on them, because that is the use case.',
      columns: [
        { id: 'planning', title: 'Sortie Planning', cardIds: ['pdc-01', 'pdc-02', 'pdc-03'] },
        { id: 'intake', title: 'Sample & Data Intake', cardIds: ['pdc-04', 'pdc-05', 'pdc-06'] },
        { id: 'charts', title: 'Chart Corrections', cardIds: ['pdc-07', 'pdc-08', 'pdc-09'] },
      ],
      cards: {
        'pdc-01': {
          id: 'pdc-01',
          title: 'Survey sortie 26-44: Everett Volume EV-7 margin',
          summary:
            'Passive-instrument survey of the EV-7 boundary layer. Twelve-day window, single vessel, no landings. Objective is a cleaner boundary trace than the 2023 pass, which was drawn under fire and looks like it.',
          clearance: 'internal',
          tags: ['sortie', 'ev-7', 'survey'],
          priority: 'routine',
        },
        'pdc-02': {
          id: 'pdc-02',
          title: 'Fleet escort allocation — science sorties, Q4',
          summary:
            'Three escort requests submitted, one granted, standing disagreement about which one. Fleet Operations notes that survey data is of limited use to vessels that do not come back, and allocates accordingly.',
          clearance: 'internal',
          tags: ['fleet', 'escort', 'allocation'],
          priority: 'elevated',
        },
        'pdc-03': {
          id: 'pdc-03',
          title: 'Torchbearer Y122 refit window vs. sortie calendar',
          summary:
            'The Persistent Inquiry enters refit in week 6, which collides with sortie 26-46. Either the sortie slips or the refit slips, and R&E has already communicated, warmly, which one it will be.',
          clearance: 'internal',
          tags: ['refit', 'scheduling', 'r-and-e'],
          priority: 'routine',
        },
        'pdc-04': {
          id: 'pdc-04',
          title: 'Sample intake: crystalline lattice, EV-3',
          summary:
            'Sealed sample mass up 0.4% since intake. Growth is within tolerance for a category the tolerance table does not have yet. Containment upgraded one class; tolerance table amendment drafted; sample notified of nothing.',
          clearance: 'restricted',
          tags: ['sample', 'ev-3', 'containment'],
          priority: 'elevated',
        },
        'pdc-05': {
          id: 'pdc-05',
          title: 'Long-baseline survey data — Copernicus Station relay',
          summary:
            'Fourteen months of passive array data staged for transfer during the recalibration window. Checksums verified at both ends. Verify them again anyway; the array watched a long time, and the data is not replaceable.',
          clearance: 'internal',
          tags: ['copernicus', 'data-transfer', 'archive'],
          priority: 'routine',
        },
        'pdc-06': {
          id: 'pdc-06',
          title: 'Returnee data quarantine — 90-day hold, sortie 26-38',
          summary:
            'All recorded media from the returned sortie remains in instrument quarantine per Standing Order 4 screening requirements. Analysts requesting early access will be reminded, in writing, why the hold exists, without being told why the hold exists.',
          clearance: 'restricted',
          tags: ['quarantine', 'standing-order-4', 'data'],
          priority: 'routine',
        },
        'pdc-07': {
          id: 'pdc-07',
          title: 'Chart correction CN-1189: charted landmark absent',
          summary:
            'Beacon nebula charted in 2019 is absent on two consecutive sorties. Nothing occupies the volume. Correction filed as REMOVE; the survey lead’s annotation, "verify it was ever there," was struck by format review and reinstated by the chart custodian.',
          clearance: 'restricted',
          tags: ['chart-correction', 'cn-1189', 'anomaly'],
          priority: 'elevated',
          detail: [
            'The 2019 plate shows the object across six instruments and two vessels. Archive integrity on the plate is confirmed. The current absence is likewise confirmed. Between confirmation and confirmation there is no transit record, no dissipation signature, and no residue.',
            'Navigation guidance in the interim: the volume is charted as empty and is to be treated as occupied.',
          ],
          redactedLines: 1,
        },
        'pdc-08': {
          id: 'pdc-08',
          title: 'Chart symbol standardization — post-Anomaly hazard glyphs',
          summary:
            'Committee pass on the revised glyph set. The proposal to merge "presumed hostile" and "presumed friendly" into one glyph on grounds of observed outcomes was ruled out of order but recorded in the minutes.',
          clearance: 'internal',
          tags: ['charts', 'standards', 'committee'],
          priority: 'routine',
          assignee: '@operative',
        },
        'pdc-09': {
          id: 'pdc-09',
          title: 'Corridor GAMMA transit-time drift — remeasure',
          summary:
            'Scheduled re-derivation of corridor transit tables against chronotic drift. Last cycle’s correction was within tolerance. Tables that stay honest are tables crews trust at bad moments; run the full protocol.',
          clearance: 'internal',
          tags: ['corridor-gamma', 'chronotic-drift', 'tables'],
          priority: 'routine',
        },
      },
    },
  },
  {
    id: 'earth-frontier-division',
    convention: 'void-engineers',
    name: 'Earth Frontier Division',
    role: 'Terrestrial frontier stations: deep ocean, polar, subterranean',
    kind: 'dashboard',
    metrics: [
      {
        kind: 'counter',
        id: 'efd-stations',
        label: 'Stations Reporting',
        value: 14,
        jitter: 0,
      },
      {
        kind: 'status',
        id: 'efd-yemaja',
        label: 'Station YEMAJA (Hadal Bench)',
        status: 'nominal',
        note: 'Crew rotation completed on schedule. Independent verification current.',
      },
      {
        kind: 'status',
        id: 'efd-lodestone',
        label: 'Station LODESTONE SOUTH (Polar Plateau)',
        status: 'nominal',
        note: 'Nominal (self-reported). Last independent verification 61 days ago. Telemetry arrives on schedule and is formatted correctly.',
      },
      {
        kind: 'gauge',
        id: 'efd-pressure',
        label: 'Hull Pressure Margin — Aquatic Constructs',
        value: 74,
        thresholds: [60, 45],
        descending: true,
        unit: '%',
      },
      {
        kind: 'gauge',
        id: 'efd-comms',
        label: 'Comm Window Reliability — Polar Net',
        value: 62,
        thresholds: [55, 40],
        descending: true,
        unit: '%',
      },
      {
        kind: 'sparkline',
        id: 'efd-acoustic',
        label: 'Unresolved Acoustic Contacts (Trench Net)',
        history: [1, 0, 2, 1, 1, 3, 2, 4, 3, 5, 4, 6],
      },
      {
        kind: 'counter',
        id: 'efd-sorties',
        label: 'Surface Sorties (30d)',
        value: 23,
        jitter: 2,
      },
    ],
    note: 'Stations reporting: 14 of 14. Verification visits resume when Fleet releases a hull. Until then, "on schedule and formatted correctly" is the standard, and the standard is noted to be doing a lot of work.',
  },
  {
    id: 'research-and-execution',
    convention: 'void-engineers',
    name: 'Research & Execution',
    role: 'Equipment, vessels, and Construct sustainment',
    kind: 'dashboard',
    metrics: [
      {
        kind: 'counter',
        id: 're-prototypes',
        label: 'Prototypes on Bench',
        value: 27,
        jitter: 1,
      },
      {
        kind: 'gauge',
        id: 're-range',
        label: 'Test Range Availability',
        value: 38,
        thresholds: [50, 30],
        descending: true,
        unit: '%',
      },
      {
        kind: 'counter',
        id: 're-early',
        label: 'Tests Concluded Early (Q3)',
        value: 3,
        jitter: 0,
      },
      {
        kind: 'sparkline',
        id: 're-primium',
        label: 'Primium Yield per Pour',
        history: [88, 87, 89, 90, 88, 91, 90, 92, 91, 93],
        unit: '%',
      },
      {
        kind: 'status',
        id: 're-torchbearer',
        label: 'Torchbearer Refit Line',
        status: 'nominal',
        note: 'Warship conversions on schedule, 41 of 41 hulls. Science hull queue unchanged at six since 1999.',
      },
      {
        kind: 'counter',
        id: 're-thanks',
        label: '"Thank You, R&E" Acknowledgements (30d)',
        value: 118,
        jitter: 3,
      },
    ],
    note: '"Concluded early" is a findings category, not an efficiency category. All three early conclusions this quarter are pending range decontamination reports. Replacement instrumentation requisitions are on the portal; condolence templates are with the duty officer.',
  },
]
