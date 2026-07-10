import type { Board } from '../types'

export const voidEngineersBoard: Board = {
  convention: 'void-engineers',
  codename: 'DEEP PERIMETER',
  designation: 'LONG-HORIZON RESPONSE FILE VE-2004-0001',
  banner: 'BLACK CLEARANCE — VE PERSONNEL ONLY — NULL CONDITIONING SCREEN CURRENT WITHIN 90 DAYS',
  brief:
    'Since designation was made official in 2004, DEEP PERIMETER maintains containment of THREAT NULL (formerly ETCNEP) at all monitored Deep Universe approaches. The adversary organization is adaptive to Enlightened procedure, demonstrates co-option capability against un-Deprocessed personnel, and continues to identify itself as the Technocratic Union. Disclosure beyond Black Clearance remains suspended per Standing Order 4. There is no fifth column. Verify your screening date before reading further.',
  columns: [
    { id: 'long-watch', title: 'The Long Watch (Deferred)', cardIds: ['ve-01', 've-02', 've-03', 've-04'] },
    { id: 'analysis', title: 'Under Analysis', cardIds: ['ve-05', 've-06', 've-07', 've-08', 've-09'] },
    { id: 'perimeter-ops', title: 'Active Perimeter Operations', cardIds: ['ve-10', 've-11', 've-12', 've-13', 've-14'] },
    { id: 'holding', title: 'Contained / Holding', cardIds: ['ve-15', 've-16'] },
  ],
  cards: {
    've-01': {
      id: 've-01',
      title: 'Symposium disclosure assessment — Item 7 (recurring)',
      summary:
        'Annual reassessment of whether the Symposium should be briefed on the adversary’s self-identification. Recommendation unchanged since 2004: DO NOT DISCLOSE. Un-Deprocessed personnel remain vulnerable to Null Conditioning.',
      clearance: 'eyes-only',
      tags: ['black-clearance', 'standing-order-4', 'policy', 'RAN'],
      priority: 'elevated',
      notSharedWith: 'symposium',
      detail: [
        'The core problem is unchanged: Threat Null calls itself the Technocratic Union. It observes our forms, answers in our formats, and its conditioning binds through loyalty itself. A briefed operative who has not undergone Deprocessing is not an informed operative; they are an attack surface. Every disclosure model run since 2004 projects net Consensus damage and a measurable co-option yield among briefed personnel.',
        'Counterargument (logged, unresolved): the other four Conventions are already in contact with mirror-faction assets without knowing it — Resident financial instruments, Agency-format correspondence, Autopolitan salvage. Ignorance is itself an attack surface. This argument has been noted in the minutes for twenty-two consecutive years.',
        'Disposition: defer. Reassess at next cycle. Attendance at the reassessment is mandatory for Border Corps Division directorate; minutes are not distributed.',
      ],
      redactedLines: 3,
    },
    've-02': {
      id: 've-02',
      title: 'The absent fifth: no VE analogue in adversary order of battle',
      summary:
        'Twenty-two years of contact data contain Autopolitan, Agency, Transhumanity, and Resident signatures. No Void Engineer mirror-faction has ever been observed. Hypotheses remain open. None are comfortable.',
      clearance: 'eyes-only',
      tags: ['black-clearance', 'PDE', 'order-of-battle', 'IG'],
      priority: 'elevated',
      notSharedWith: 'symposium',
      detail: [
        'Working hypotheses, in descending order of preference: (1) the analogue was destroyed or absorbed prior to 2000; (2) the analogue holds the far Interstellar Deep against the adversary’s own enemies and does not present at our perimeter (the "Sentinel" hypothesis); (3) the analogue is not absent.',
        'Hypothesis 3 implies that a Void Engineer mirror would be indistinguishable from Void Engineer personnel operating at extended range under standard comms discipline. Screening cadence was shortened from 180 to 90 days in 2019 on the strength of this implication alone. No positive detection has resulted. This is noted without further comment.',
      ],
      redactedLines: 4,
    },
    've-03': {
      id: 've-03',
      title: 'Indomitable anniversary broadcasts — archival and response policy',
      summary:
        'Border Patrol continues to receive Capt. Templeton’s distress transmission near each Anomaly anniversary, out of sequence due to chronotic drift. Current policy: log, do not answer. Petition to answer once is on file from the crew of Station ECHO-4.',
      clearance: 'restricted',
      tags: ['ghost-signal', 'chronotic-drift', 'border-patrol', 'policy'],
      priority: 'routine',
    },
    've-04': {
      id: 've-04',
      title: 'Deep-berth expansion, Perimeter Station ECHO-4',
      summary:
        'Two additional quarantine berths requested to eliminate co-berthing of screened and unscreened returnee craft. Deferred three consecutive budget cycles. Risk memo attached to this iteration.',
      clearance: 'internal',
      tags: ['logistics', 'quarantine', 'RSP', 'budget'],
      priority: 'routine',
    },
    've-05': {
      id: 've-05',
      title: 'Agency mimic corpus — linguistic drift study',
      summary:
        'Intercepted Agency-format traffic is procedurally indistinguishable from Union boilerplate. Sole reliable discriminator: operational vocabulary is consistently 30–40 months stale. Discriminator half-life is shortening.',
      clearance: 'eyes-only',
      tags: ['black-clearance', 'SIGINT', 'agency-mimic', 'TE'],
      priority: 'critical',
      notSharedWith: 'symposium',
      detail: [
        'The corpus now contains 4,411 intercepted documents in valid Union format: mission taskings, AAR templates, wellness-screening notices, one commendation letter. Formatting, classification markings, and tone are correct. Three documents in the corpus reference operations that our own records confirm — operations conducted after the Anomaly. Source of the adversary’s currency is under investigation.',
        'The staleness discriminator (adversary vocabulary lags current CTA usage by 30–40 months) has degraded from a 41-month mean lag in 2008 to 31 months in the current window. If the trend is linear, discriminator failure occurs within the decade. If the trend is not linear, it occurs sooner.',
        'Interim directive: any inbound document that cannot be verified through a live courier chain is to be treated as adversary-origin regardless of format validity. Yes, including this one. The verification stamp is on the reverse.',
      ],
      redactedLines: 4,
    },
    've-06': {
      id: 've-06',
      title: 'Null Conditioning propagation vectors — transmission study',
      summary:
        'Determining whether conditioning effect requires direct contact or can propagate via recorded audio/visual material. Preliminary result from Cohort C is the reason Cohort C is no longer listed in this file.',
      clearance: 'eyes-only',
      tags: ['black-clearance', 'null-conditioning', 'S&C', 'research'],
      priority: 'critical',
      notSharedWith: 'symposium',
      detail: [
        'Study design: three cohorts of Deprocessed volunteers exposed to sanitized adversary material under instrumented observation. Cohort A (transcripts only): null result. Cohort B (still imagery): null result. Cohort C (audio, 11 seconds, heavily filtered): see addendum. Addendum access requires directorate countersignature.',
        'All Cohort C personnel completed exit interviews and expressed satisfaction with their treatment. All have been made available for reassignment to the Cohort C Continuity Program, where their loyalty scores remain exemplary.',
      ],
    },
    've-07': {
      id: 've-07',
      title: 'Autopolitan contact incident — Patrol Sweep 26-114 AAR',
      summary:
        'Collective structure at perimeter marker K-9 displayed hull plating with valid Union registry markings from a Construct lost in 1999. Sweep element broke contact per RoE. AAR under review; no pursuit authorized.',
      clearance: 'restricted',
      tags: ['AAR', 'autopolitan', 'DTFT-6', 'RoE'],
      priority: 'elevated',
      detail: [
        'The structure matched no catalogued Autopolitan configuration. Registry plates were current-format, undamaged, and mounted in accordance with Union hull standard VE-STD-114 — mounted, per the sweep element’s telemetry, more neatly than our own yards manage. The lost Construct’s complement was 212 personnel. Disposition of complement remains unknown and is to remain listed as unknown.',
        'The sweep element is commended for exact adherence to break-contact procedure. The element commander’s request to be told "what the plates mean" has been answered through appropriate channels.',
      ],
    },
    've-08': {
      id: 've-08',
      title: 'Anomaly boundary drift model — 53,000 km shell',
      summary:
        'Quarterly re-derivation of the calm-boundary radius around the quarantined body. Shell radius stable to four significant figures for eleven consecutive quarters. Stability of this kind is not natural and is being modeled as intent.',
      clearance: 'restricted',
      tags: ['dimensional-science', 'quarantine', 'modeling', 'RAN'],
      priority: 'routine',
    },
    've-09': {
      id: 've-09',
      title: 'Returnee psychometric baselines — Cohort 2026-B',
      summary:
        'Baseline drift analysis across 34 returned Deep Universe personnel. Two subjects show elevated institutional-loyalty scores exceeding instrument calibration range. Elevated loyalty is a flag condition. Do not congratulate them.',
      clearance: 'restricted',
      tags: ['null-conditioning', 'screening', 'psychometrics', 'SDS'],
      priority: 'elevated',
    },
    've-10': {
      id: 've-10',
      title: 'Quarantine hold: DSEV Cutting Edge returnee crew',
      summary:
        'Eleven crew in Null Conditioning screening, day 61 of 90. All eleven passed every instrument on day one, which is itself the anomaly under investigation. Extension to 120 days pre-authorized.',
      clearance: 'restricted',
      tags: ['quarantine', 'null-conditioning', 'S&C', 'day-61'],
      priority: 'critical',
      assignee: 'Quarantine Officer Ashe, R.',
      detail: [
        'Historical baseline: honest crews fail between two and five screening instruments in week one, because the instruments are calibrated to catch fatigue, resentment, and grief, all of which honest returned crews have. The Cutting Edge complement failed zero. Their answers are correct, prompt, and uniform. Their gratitude toward the Union is total.',
        'Officer Ashe has requested authority to introduce deliberate procedural errors into the screening schedule and observe whether the crew corrects them. Request granted. Results to this file only.',
      ],
      redactedLines: 2,
    },
    've-11': {
      id: 've-11',
      title: 'Perimeter Station CERBERUS-9 stores rotation',
      summary:
        'Consumables, Primium spares, and EDR inventory rotation for the outer picket. Convoy window 26-C. Standard manifest, standard escort, standard prayer that it stays standard.',
      clearance: 'internal',
      tags: ['logistics', 'XMDD', 'convoy', 'RSP'],
      priority: 'routine',
    },
    've-12': {
      id: 've-12',
      title: 'Copernicus Station passive array recalibration',
      summary:
        'Long-baseline passive sensors recalibrating after 14 months of continuous watch. Approach corridor restricted for the duration; traffic advisory issued Union-wide without stated reason, per policy.',
      clearance: 'restricted',
      tags: ['copernicus', 'sensors', 'traffic-advisory', 'IG'],
      priority: 'elevated',
    },
    've-13': {
      id: 've-13',
      title: 'Compile Q3 loyalty attestation packet — perimeter commands',
      summary:
        'Collate signed loyalty attestations from all Deep Perimeter station commanders, verify wet signatures against reference cards, and flag any attestation submitted early, late, or with unusual enthusiasm.',
      clearance: 'internal',
      tags: ['SDS', 'attestation', 'quarterly', 'admin'],
      priority: 'routine',
      assignee: '@operative',
    },
    've-14': {
      id: 've-14',
      title: 'Black Dagger escort rotation — convoy window 26-C',
      summary:
        'IECSSC detachment assigned to resupply convoy per DTFT 6 standing assessment of the corridor. Escort personnel are exempt from convoy manifest and from conversation.',
      clearance: 'restricted',
      tags: ['IECSSC', 'DTFT-6', 'escort', 'convoy'],
      priority: 'elevated',
    },
    've-15': {
      id: 've-15',
      title: 'Incursion 2024-011: Resident solicitation attempt — closed',
      summary:
        'Adversary Resident asset opened a negotiation channel offering liquidity in exchange for perimeter scheduling data. Channel terminated. The three personnel who described the terms as "actually pretty reasonable" have been reassigned.',
      clearance: 'eyes-only',
      tags: ['black-clearance', 'resident', 'co-option', 'CCC'],
      priority: 'elevated',
      notSharedWith: 'symposium',
      detail: [
        'The solicitation arrived as a properly formatted inter-Convention funding memorandum, complete with Syndicate routing codes that our Syndicate liaison confirms are valid but unissued. The offered instrument was denominated in a Primal Utility structure our Financiers describe as "sound, conservative, and about forty years ahead of us."',
        'All materials transferred to secure archive. The reassigned personnel completed Deprocessing and have expressed no further opinions.',
      ],
      redactedLines: 3,
    },
    've-16': {
      id: 've-16',
      title: 'Ghost-signal triangulation sweep FY25 — closed',
      summary:
        'Annual sweep of derelict-origin distress broadcasts completed. Fourteen sources triangulated; zero live crew; all sources catalogued and left broadcasting. Silencing them was assessed as disrespectful and, per Dimensional Science, unwise.',
      clearance: 'restricted',
      tags: ['border-patrol', 'ghost-signal', 'survey', 'closed'],
      priority: 'routine',
    },
  },
}
