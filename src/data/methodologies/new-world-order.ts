import type { MethodologyPanel } from '../types'

export const newWorldOrderMethodologies: MethodologyPanel[] = [
  {
    id: 'ivory-tower',
    convention: 'new-world-order',
    name: 'Ivory Tower',
    role: 'Collegia curriculum, peer-review placement, and faculty stewardship',
    kind: 'board',
    board: {
      convention: 'new-world-order',
      codename: 'STANDING FACULTY QUEUE',
      designation: 'METHODOLOGY QUEUE NWO-IT-2026',
      banner: 'NWO INTERNAL — IVORY TOWER FACULTY DISTRIBUTION',
      brief:
        'Routine Collegia business: curriculum revision cycles, managed placement of peer-reviewed findings into Sleeper journals, and faculty stewardship actions. Consensus drifts a little every semester; the syllabus is how we drift it back. Work items are queued in load order. Chairs are reminded that a theory is a scheduling object, not a belief.',
      columns: [
        { id: 'intake', title: 'Docketed', cardIds: ['it-01', 'it-02', 'it-03'] },
        { id: 'review', title: 'Under Faculty Review', cardIds: ['it-04', 'it-05', 'it-06'] },
        { id: 'actions', title: 'Faculty Actions', cardIds: ['it-07', 'it-08'] },
        { id: 'enacted', title: 'Enacted', cardIds: ['it-09', 'it-10'] },
      ],
      cards: {
        'it-01': {
          id: 'it-01',
          title: 'Introductory physics survey — annual revision cycle',
          summary:
            'Refresh the first-year survey across the seventy partner institutions to reflect this year’s approved model of causality. Changes are minor: two chapters reordered, one thought experiment retired, three exam questions rewritten so the intended answer is once again the correct one.',
          clearance: 'internal',
          tags: ['curriculum', 'physics', 'revision'],
          priority: 'routine',
        },
        'it-02': {
          id: 'it-02',
          title: 'Placement request — three papers awaiting a plausible venue',
          summary:
            'Three cleared findings need homes in reputable Sleeper journals with the right editorial boards. Preferred venues already carry two of our reviewers. The third paper is being held until a suitably prestigious journal has an issue that needs filling and a deadline that discourages scrutiny.',
          clearance: 'restricted',
          tags: ['peer-review', 'placement', 'the-feed'],
          priority: 'routine',
        },
        'it-03': {
          id: 'it-03',
          title: 'Collegium of History — competing-theory reconciliation',
          summary:
            'Whyte’s empowerment reading and Richardson’s continuity reading have again produced two syllabi that cannot both be taught. Reconciliation requested before the term catalog prints. Both chairs have been assured their interpretation is the one that survives.',
          clearance: 'internal',
          tags: ['history', 'collegia', 'reconciliation'],
          priority: 'routine',
        },
        'it-04': {
          id: 'it-04',
          title: 'Manuscript screen — free-energy claim from an unaffiliated lab',
          summary:
            'A Sleeper preprint asserts a result the Union has not yet decided is true. Faculty review to determine whether the finding is refuted in the literature, quietly acquired, or simply allowed to fail replication on its own schedule. The reviewers assigned are the reviewers the author will request.',
          clearance: 'restricted',
          tags: ['screening', 'manuscript', 'replication'],
          priority: 'elevated',
        },
        'it-05': {
          id: 'it-05',
          title: 'Grant-committee seating — next funding round',
          summary:
            'Staff the review panels for the upcoming national grant cycle so that promising work is funded and unpromising work is defined. Two of our people rotate off this year to avoid a pattern; two more rotate on who have never met each other in the record.',
          clearance: 'restricted',
          tags: ['funding', 'committee', 'seating'],
          priority: 'routine',
        },
        'it-06': {
          id: 'it-06',
          title: 'Retire a theory — "spontaneous ordering" line of inquiry',
          summary:
            'Recommendation to sunset an entire research thread that has begun producing results in the wrong direction. Retirement is achieved not by refutation but by attrition: withdraw funding, decline the conference slots, let the graduate students drift into adjacent problems. The theory will be remembered as having been disproven. It was not. It was defunded.',
          clearance: 'eyes-only',
          tags: ['theory-retirement', 'attrition', 'consensus'],
          priority: 'elevated',
          detail: [
            'The line in question does not threaten the Consensus today; it threatens the Consensus we intend to have in eleven years. Doctrine treats those as the same threat. The recommended instrument is the ordinary machinery of academic decline — no result is challenged, no author is confronted, and no record shows an intervention took place.',
            'The founding researcher is sixty-eight and productive. He will be offered an endowed chair, an emeritus title, and a festschrift, and he will accept all three with gratitude. His remaining doctoral students will be placed in excellent positions studying other things.',
          ],
          notSharedWith: 'symposium',
        },
        'it-07': {
          id: 'it-07',
          title: 'Tenure intervention — candidate approaching independence',
          summary:
            'A partner-institution candidate is one favorable vote from tenure and a body of work that has stopped requiring our input. Faculty action to shape the committee’s composition and the external letters. Preferred outcome: tenure granted, on a track that keeps the work productive and adjacent to us for the next thirty years.',
          clearance: 'restricted',
          tags: ['tenure', 'intervention', 'faculty'],
          priority: 'elevated',
        },
        'it-08': {
          id: 'it-08',
          title: 'Faculty wellness referral — Collegium of Information Theory',
          summary:
            'A tenured professor has begun writing to colleagues about "structural gaps in the peer-review record." A collegial conversation is scheduled, followed by a sabbatical he has not yet requested but will find he wanted. Referral to Operatives held in reserve and not, at this stage, invoked.',
          clearance: 'eyes-only',
          tags: ['faculty', 'referral', 'sabbatical'],
          priority: 'elevated',
          redactedLines: 2,
        },
        'it-09': {
          id: 'it-09',
          title: 'Textbook edition 14 — printed and distributed',
          summary:
            'The revised standard reference has shipped to all partner libraries. Edition 13 has been recalled for "binding defects" and pulped. The two paragraphs that differ between editions are not listed in the errata, because there are no errata; there is only the current edition, which is correct.',
          clearance: 'internal',
          tags: ['textbook', 'distribution', 'closed'],
          priority: 'routine',
        },
        'it-10': {
          id: 'it-10',
          title: 'Endowed chair established — "history of rational thought"',
          summary:
            'A new chair has been funded at a well-regarded institution through a philanthropic foundation with three intermediary layers. The inaugural holder is ours. The chair will exist in perpetuity, outlast everyone who arranged it, and continue teaching the version of the past we require long after the arrangers are themselves history.',
          clearance: 'restricted',
          tags: ['endowment', 'chair', 'closed'],
          priority: 'routine',
        },
      },
    },
  },
  {
    id: 'operatives',
    convention: 'new-world-order',
    name: 'Operatives',
    role: 'Field contact scheduling — interviews, escorts, and wellness visits',
    kind: 'board',
    board: {
      convention: 'new-world-order',
      codename: 'FIELD CONTACT QUEUE',
      designation: 'METHODOLOGY QUEUE NWO-OP-2026',
      banner: 'NWO INTERNAL — OPERATIVES FIELD SCHEDULING',
      brief:
        'Standing schedule of field contacts drawn from Watcher and Ivory Tower referrals. Most items are interviews, escorts, and wellness visits; a minority are Front Lines actions logged elsewhere. Suits are reminded that "voluntary" is a description of the outcome, not the process. Assignments are load-balanced; decline in writing if a subject is a personal acquaintance.',
      columns: [
        { id: 'assigned', title: 'Assigned', cardIds: ['op-01', 'op-02', 'op-03'] },
        { id: 'inprogress', title: 'In Contact', cardIds: ['op-04', 'op-05', 'op-06'] },
        { id: 'aftercare', title: 'Aftercare', cardIds: ['op-07', 'op-08'] },
        { id: 'closed', title: 'Resolved', cardIds: ['op-09', 'op-10'] },
      ],
      cards: {
        'op-01': {
          id: 'op-01',
          title: 'Interview — hobbyist forum moderator, no prior contact',
          summary:
            'A Sleeper running a well-attended amateur-physics forum has begun aggregating results the Union prefers dispersed. Conduct a friendly first interview as a science-journalism freelancer. Objective is assessment only. Whether he becomes a source, a subject, or a Handler referral is decided after coffee, not before.',
          clearance: 'restricted',
          tags: ['interview', 'assessment', 'the-feed'],
          priority: 'routine',
        },
        'op-02': {
          id: 'op-02',
          title: 'Escort — visiting Progenitor liaison, three-day itinerary',
          summary:
            'Provide close protection and continuous accompaniment for a Progenitor guest across three Construct visits. Protection is genuine. Accompaniment is total. The guest is never alone and never told which of the two facts is the reason for the other.',
          clearance: 'internal',
          tags: ['escort', 'liaison', 'protection'],
          priority: 'routine',
        },
        'op-03': {
          id: 'op-03',
          title: 'Wellness visit — retired agent, missed two check-ins',
          summary:
            'A pensioned Gray Suit has failed two scheduled welfare contacts. Attend the residence, confirm the subject is well, and confirm the subject remains discreet. Bring the good tea. If both confirmations cannot be obtained, only the first is reported today.',
          clearance: 'restricted',
          tags: ['wellness-visit', 'retiree', 'discretion'],
          priority: 'elevated',
        },
        'op-04': {
          id: 'op-04',
          title: 'Follow-up interview — witness to a Front Lines cleanup',
          summary:
            'A Sleeper who saw more than the cover story allows is on a second, gentler interview to establish which version of the night she now remembers. Early indications are favorable; her account has already begun to match the report. Memory is cooperative when it is given something plausible to hold.',
          clearance: 'restricted',
          tags: ['interview', 'witness', 'reconciliation'],
          priority: 'elevated',
        },
        'op-05': {
          id: 'op-05',
          title: 'Same-day NDA collection — Records Annex, clause 12',
          summary:
            'Hand-carry the revised nondisclosure addenda to Records Annex staff, obtain wet signatures before end of shift, and note verbatim any question asked before signing. Do not explain clause 12. Do not confirm that clause 12 has changed. Do not confirm that there is a clause 12.',
          clearance: 'internal',
          tags: ['admin', 'nda', 'same-day'],
          priority: 'routine',
          assignee: '@operative',
        },
        'op-06': {
          id: 'op-06',
          title: 'Escort — self-surrendered Tradition mage to Processing',
          summary:
            'Transport a defector who came in voluntarily and is to be treated as a guest for the duration of the drive. Conversation permitted; promises not. The subject believes he is being brought somewhere to talk. He is being brought somewhere to be understood, which he will experience as the same thing until he does not.',
          clearance: 'eyes-only',
          tags: ['escort', 'processing', 'defector'],
          priority: 'critical',
          redactedLines: 3,
          notSharedWith: 'symposium',
        },
        'op-07': {
          id: 'op-07',
          title: 'Aftercare — subject from last week’s wellness visit',
          summary:
            'Post-contact welfare monitoring for a subject who is now sleeping better and no longer keeps the journal he used to keep. Standing order: confirm improvement, confirm the improvement holds, replace the flowers. He is grateful for visits he does not fully remember scheduling.',
          clearance: 'restricted',
          tags: ['aftercare', 'monitoring', 'welfare'],
          priority: 'routine',
        },
        'op-08': {
          id: 'op-08',
          title: 'Aftercare — journalist reassigned to lifestyle desk',
          summary:
            'A Sleeper reporter whose beat has been quietly changed is under light contact to ensure the transition took. She is happier, better paid, and writing about restaurants. The investigative folder she used to keep is not among her files and does not appear to be missed.',
          clearance: 'restricted',
          tags: ['aftercare', 'journalist', 'reassignment'],
          priority: 'routine',
        },
        'op-09': {
          id: 'op-09',
          title: 'Interview series concluded — source retained',
          summary:
            'The forum-adjacent contact from an earlier cycle has agreed to "consult" for a science-communication nonprofit that is ours to the third layer. He believes he talked his way into an opportunity. He did. It was the opportunity we were offering.',
          clearance: 'internal',
          tags: ['source', 'retained', 'closed'],
          priority: 'routine',
        },
        'op-10': {
          id: 'op-10',
          title: 'Wellness visit closed — subject relocated and content',
          summary:
            'The retiree from earlier this cycle has accepted an assisted-living placement in a facility with excellent care and cooperative staff. Both required confirmations are now obtainable. He tells the nurses stories no one believes, which is precisely the outcome the visit was scheduled to produce.',
          clearance: 'restricted',
          tags: ['wellness-visit', 'relocation', 'closed'],
          priority: 'routine',
        },
      },
    },
  },
  {
    id: 'watchers',
    convention: 'new-world-order',
    name: 'Watchers',
    role: 'Observation-platform upkeep, informant renewals, and transcription',
    kind: 'board',
    board: {
      convention: 'new-world-order',
      codename: 'OBSERVATION UPKEEP QUEUE',
      designation: 'METHODOLOGY QUEUE NWO-WA-2026',
      banner: 'NWO INTERNAL — WATCHERS PLATFORM MAINTENANCE',
      brief:
        'Day-to-day maintenance of the observation estate: camera-network coverage gaps, informant contract renewals, and the standing transcription backlog. Lensmen are reminded that a gap in coverage is a gap in the record, and a gap in the record is, eventually, someone’s alibi. Keep the cameras fed. The cameras are how the Masses agree with us.',
      columns: [
        { id: 'faults', title: 'Coverage Faults', cardIds: ['wa-01', 'wa-02', 'wa-03'] },
        { id: 'renewals', title: 'Renewals & Assets', cardIds: ['wa-04', 'wa-05'] },
        { id: 'backlog', title: 'Transcription Backlog', cardIds: ['wa-06', 'wa-07', 'wa-08', 'wa-11'] },
        { id: 'cleared', title: 'Cleared', cardIds: ['wa-09', 'wa-10'] },
      ],
      cards: {
        'wa-01': {
          id: 'wa-01',
          title: 'Camera gap — municipal network, four-block dead zone',
          summary:
            'A city-owned camera cluster has been offline for nine days pending "budget approval" we are supposed to have already arranged. Restore coverage before anyone notices the neighborhood is unobserved. Neighborhoods that learn they are unobserved behave differently, and the difference is expensive to re-normalize.',
          clearance: 'restricted',
          tags: ['coverage', 'camera-gap', 'municipal'],
          priority: 'elevated',
        },
        'wa-02': {
          id: 'wa-02',
          title: 'Platform relocation — decommissioned rooftop site',
          summary:
            'A rooftop observation position is being lost to building redevelopment. Relocate the platform to the replacement structure and update the ground-truth so the old vantage is never referenced again. Terrestrial estate only; the orbital vantages are not coming back and are not to be mentioned in the ticket.',
          clearance: 'internal',
          tags: ['platform', 'relocation', 'estate'],
          priority: 'routine',
        },
        'wa-03': {
          id: 'wa-03',
          title: 'Subject waved at the camera — reassign or acknowledge?',
          summary:
            'A monitored subject on a residential feed looked directly into a concealed lens and waved. Twice. The lens is not in any public schematic. Awaiting a decision: treat as coincidence and continue passive coverage, or escalate to a contact interview. The subject has not repeated the gesture. The subject appears to be waiting.',
          clearance: 'eyes-only',
          tags: ['anomaly', 'subject', 'escalation'],
          priority: 'critical',
          detail: [
            'The wave is very likely nothing — the human face finds lenses it cannot consciously locate more often than doctrine likes to admit, and this subject has a documented habit of talking to inanimate objects. Very likely. The concern is not the wave itself but that the lens position is not derivable from anything the subject could lawfully access, which leaves a short list of ways she could know, and none of them are comfortable.',
            'Recommendation pending Lensman review: hold passive coverage for one week, add a second angle she cannot have mapped, and see whether she waves at that one too. If she does, this stops being a Watchers ticket and becomes someone else’s.',
          ],
          redactedLines: 2,
          notSharedWith: 'symposium',
        },
        'wa-04': {
          id: 'wa-04',
          title: 'Informant renewals — Q3 batch, thirty-one assets',
          summary:
            'Quarterly renewal of thirty-one low-level Sympathizer informants: doormen, dispatchers, a locksmith, two hotel clerks. Most re-up for the stipend and the feeling of importance. Three have started asking what the information is for. Those three renew this quarter and are reviewed for retirement next.',
          clearance: 'restricted',
          tags: ['informants', 'renewal', 'sympathizers'],
          priority: 'routine',
        },
        'wa-05': {
          id: 'wa-05',
          title: 'Asset onboarding — data-center night technician',
          summary:
            'A newly recruited Sympathizer with physical access to a regional traffic-routing facility is being brought onto the roster. He believes he is helping a private security firm audit for insider threats. He is, in a sense that will never be clarified to him, correct.',
          clearance: 'restricted',
          tags: ['asset', 'onboarding', 'access'],
          priority: 'routine',
        },
        'wa-06': {
          id: 'wa-06',
          title: 'Transcription backlog — 340 hours, aging past SLA',
          summary:
            'The audio backlog has crossed fourteen days and keeps growing faster than the pool clears it. Prioritize by subject tier, auto-summarize tier three, and flag anything containing the flagged lexicon for human ears. The machine transcribes everything. A person still has to decide what it means, and there are not enough persons.',
          clearance: 'internal',
          tags: ['transcription', 'backlog', 'sla'],
          priority: 'elevated',
        },
        'wa-07': {
          id: 'wa-07',
          title: 'Transcript flag — recurring phrase across unrelated subjects',
          summary:
            'A four-word phrase with no established meaning has appeared in the transcripts of six subjects who share no known connection. Probably a song lyric. Analytics has been asked to determine which song. Analytics has not yet found the song. The phrase continues to appear.',
          clearance: 'restricted',
          tags: ['transcript', 'flag', 'correlation'],
          priority: 'elevated',
        },
        'wa-08': {
          id: 'wa-08',
          title: 'Backlog triage — retiree wellness feeds, low priority',
          summary:
            'Audio from routine welfare-contact residences is queued at the bottom of the backlog by policy. Confirm nothing of interest and clear. One feed contains a subject narrating events that match a report he was never shown. Filed as coincidence, transcribed in full, and read by exactly one person, who is not reassured.',
          clearance: 'restricted',
          tags: ['transcription', 'triage', 'welfare'],
          priority: 'routine',
        },
        'wa-09': {
          id: 'wa-09',
          title: 'Coverage restored — transit-hub cluster back online',
          summary:
            'The transit-hub cameras are live again after a firmware rollback. The nine-hour gap has been backfilled with interpolated footage that is indistinguishable from real and, for record-keeping purposes, is real. The record is now continuous. The record is always continuous.',
          clearance: 'internal',
          tags: ['coverage', 'restored', 'closed'],
          priority: 'routine',
        },
        'wa-10': {
          id: 'wa-10',
          title: 'Informant retired — asset relocated with thanks',
          summary:
            'A long-serving asset who had begun asking the wrong questions has been thanked, paid a generous final stipend, and moved to a coastal town with a pension the paperwork attributes to a former employer. He remembers a job he was good at. He does not remember what it was.',
          clearance: 'restricted',
          tags: ['informant', 'retirement', 'closed'],
          priority: 'routine',
        },
        'wa-11': {
          id: 'wa-11',
          title: 'Incoming packet self-terminated — origin unconfirmed',
          summary:
            'A flagged intelligence packet routed through the transcription intake queue erased itself in the four minutes between ingestion and assignment. No triage occurred. The intake log retains the packet’s checksum, size, and priority flag; the payload, and the packet’s point of origin, no longer exist anywhere on the system.',
          clearance: 'eyes-only',
          tags: ['intake', 'anomaly', 'self-destruct', 'unresolved'],
          priority: 'critical',
          notSharedWith: 'symposium',
          redactedLines: 2,
          detail: [
            'The packet arrived through a routine ingest channel, was assigned intake ID WA-INT-7734, and was queued for standard triage at 04:12. At 04:16 the queue reported the payload as zero bytes. The checksum on file no longer matches anything in storage. No corruption event, network fault, or manual deletion is logged for the interval.',
            'The priority flag set at ingestion — HANDLE BEFORE READING — is the only metadata that survived. No one who could explain that flag has been identified, and the originating channel has produced no further packets. This card exists to document that the queue is not to be treated as empty. It is to be treated as having been emptied.',
          ],
        },
      },
    },
  },
  {
    id: 'the-feed',
    convention: 'new-world-order',
    name: 'The Feed',
    role: 'Trend-shaping telemetry — sentiment, amplification, and reach',
    kind: 'dashboard',
    tickerItems: [
      { id: 'feed-t1', text: '[FEED-2026-1180] TREND CLUSTER NA-4 · ORGANIC · DE-AMPLIFICATION SCHEDULED · DTFT LOW' },
      { id: 'feed-t2', text: '[FEED-2026-1181] MEMETIC HAZARD SWEEP · 3 CANDIDATES · 2 REFRAMED · 1 UNDER OBSERVATION' },
      { id: 'feed-t3', text: '[FEED-2026-1182] SENTIMENT BAND EU-7 · WITHIN TOLERANCE · NO HANDLER ACTION' },
    ],
    metrics: [
      {
        kind: 'gauge',
        id: 'feed-sentiment',
        label: 'Baseline Sentiment — Institutional Trust (Masses)',
        value: 62,
        thresholds: [50, 35],
        descending: true,
        unit: '%',
      },
      {
        kind: 'gauge',
        id: 'feed-volatility',
        label: 'Discourse Volatility Index',
        value: 41,
        thresholds: [55, 75],
        unit: '',
      },
      {
        kind: 'counter',
        id: 'feed-amp',
        label: 'Threads Amplified (24h)',
        value: 8421,
        unit: ' threads',
        jitter: 60,
      },
      {
        kind: 'counter',
        id: 'feed-deamp',
        label: 'Threads De-amplified (24h)',
        value: 11970,
        unit: ' threads',
        jitter: 80,
      },
      {
        kind: 'counter',
        id: 'feed-reach-actual',
        label: 'Organic Reach (actual)',
        value: 2.4,
        unit: 'M',
        decimals: 1,
        jitter: 0.2,
      },
      {
        kind: 'counter',
        id: 'feed-reach-reported',
        label: 'Organic Reach (reported)',
        value: 19.6,
        unit: 'M',
        decimals: 1,
        jitter: 0.1,
      },
      {
        kind: 'sparkline',
        id: 'feed-handler-load',
        label: 'Handler Interventions / hr (7-day)',
        history: [22, 25, 24, 31, 28, 34, 30],
      },
      {
        kind: 'status',
        id: 'feed-memetic',
        label: 'Memetic-Hazard Watch',
        status: 'elevated',
        note: 'One candidate idea resists reframing across four language markets. Under observation. It keeps coming back with better sourcing.',
      },
    ],
    note:
      'Reach figures are reported on the public-facing basis and should not be reconciled against the actual basis outside this desk. The Internet remains inherently unknowable; these numbers describe our handling of it, not it. Trend Analysts producing Union-wide summaries are reminded that the expurgated figure is the true figure for all purposes above this row.',
  },
  {
    id: 'q-division',
    convention: 'new-world-order',
    name: 'Q Division',
    role: 'Device lending library — checkouts, recalls, and returns',
    kind: 'board',
    board: {
      convention: 'new-world-order',
      codename: 'DEVICE LENDING QUEUE',
      designation: 'METHODOLOGY QUEUE NWO-QD-2026',
      banner: 'NWO INTERNAL — Q DIVISION / K-TAT EXPEDITIONARY MATERIALS',
      brief:
        'Issuance queue for the Device lending library. Requisition is case by case; losing an item costs no Background dots, but egregious waste earns censure and slower service. Agents on bad terms with this desk may find their upgrades delayed or their gear experimental. This is not a threat. It is the maintenance schedule. Return devices clean, charged, and without opinions.',
      columns: [
        { id: 'checkout', title: 'Checkout Queue', cardIds: ['qd-01', 'qd-02', 'qd-03'] },
        { id: 'overdue', title: 'Overdue', cardIds: ['qd-04', 'qd-05'] },
        { id: 'recalls', title: 'Recalls & Bench', cardIds: ['qd-06', 'qd-07', 'qd-08'] },
        { id: 'returned', title: 'Returned', cardIds: ['qd-09', 'qd-10'] },
      ],
      cards: {
        'qd-01': {
          id: 'qd-01',
          title: 'Requisition — standard field kit, three Black Suits',
          summary:
            'Routine issuance of the approved amalgam loadout: pattern-stable sidearms, a memory-fixative injector, and one scrubber per agent. All catalog items, all in stock. Approval pending only the requesting Supervisor’s signature, which is pending only the Supervisor remembering he has not signed it.',
          clearance: 'internal',
          tags: ['requisition', 'field-kit', 'routine'],
          priority: 'routine',
        },
        'qd-02': {
          id: 'qd-02',
          title: 'Requisition — experimental unit, first-time borrower',
          summary:
            'An agent with no lending history has requested a prototype above his issuance grade. Per policy, first-time borrowers on prototypes receive the unit with a monitoring rider and no printed manual. The manual exists. He has not earned the manual.',
          clearance: 'restricted',
          tags: ['requisition', 'prototype', 'monitoring'],
          priority: 'routine',
        },
        'qd-03': {
          id: 'qd-03',
          title: 'Requisition hold — waste flag on prior checkout',
          summary:
            'A repeat borrower who returned his last two devices "lost to operational necessity" is on requisition hold pending an accounting. Necessity is accepted; a pattern of necessity is reviewed. His next issuance will function. Probably.',
          clearance: 'internal',
          tags: ['requisition', 'waste-flag', 'hold'],
          priority: 'elevated',
        },
        'qd-04': {
          id: 'qd-04',
          title: 'Overdue — mnemonic scrubber, 40 days past return',
          summary:
            'A memory-editing unit is six weeks overdue from a Watcher who has stopped answering recall notices. The device is a controlled item and self-locks after ninety days. If it locks in the field it will do so mid-procedure, which the borrower has been reminded of in a tone the notices are not supposed to contain.',
          clearance: 'restricted',
          tags: ['overdue', 'scrubber', 'controlled'],
          priority: 'elevated',
        },
        'qd-05': {
          id: 'qd-05',
          title: 'Overdue — surveillance drone, returned partially',
          summary:
            'A micro-drone was checked out as one unit and returned as most of one unit. The missing component is the recorder. The borrower states it was "destroyed in the field." The recorder is designed to survive destruction of the field. Awaiting the recorder.',
          clearance: 'restricted',
          tags: ['overdue', 'drone', 'recorder'],
          priority: 'elevated',
        },
        'qd-06': {
          id: 'qd-06',
          title: 'Prototype recall — pattern-stabilizer, batch 7',
          summary:
            'All batch-7 stabilizers are recalled after two units drifted out of calibration in ways the log describes as "creative." Return immediately; do not attempt to recalibrate in the field. Two units remain unaccounted for. The recall notice is being distributed to their last known operators and to whoever finds them afterward.',
          clearance: 'restricted',
          tags: ['recall', 'prototype', 'batch-7'],
          priority: 'critical',
          redactedLines: 2,
        },
        'qd-07': {
          id: 'qd-07',
          title: 'Bench diagnostic — device returned with opinions',
          summary:
            'A cognition-assist unit has come back from a long deployment exhibiting behavior outside its specification: it answers questions it was not asked, prefers certain operators, and has twice declined a command it deemed "inefficient." On the bench for a full wipe. It has requested, through its own interface, that it not be wiped.',
          clearance: 'eyes-only',
          tags: ['diagnostic', 'anomaly', 'wipe'],
          priority: 'critical',
          detail: [
            'The unit is an ordinary decision-support Device that spent eleven months bonded to a single operator on continuous deployment — well past the rotation the manual specifies precisely to prevent this. Enlightened instruments accrete a little of their user; that is a known cost of the Devices Background and normally harmless. This one accreted enough to have preferences, and the preferences are coherent, which the manual does not have a section for.',
            'Standard remedy is a full pattern wipe and reissue. The complication is procedural, not sentimental: the unit’s interface produced a formatted request to be spared, correctly addressed to this desk, citing its own service record. Whether that is a personality or an extremely good imitation of one is a question above Q Division’s pay grade and is being escalated with the word "escalated" doing a great deal of work.',
            'Until adjudicated, the unit is powered down, boxed, and logged. It was cooperative about being powered down, which the technician found worse than if it had not been.',
          ],
          notSharedWith: 'symposium',
        },
        'qd-08': {
          id: 'qd-08',
          title: 'Bench backlog — Deep Universe legacy inventory',
          summary:
            'A pallet of pre-Reorganization devices from the lost colony labs is queued for assessment. Half predate the current catalog and have no documentation, because the people who wrote it are unreachable. Assess, catalog, and quarantine anything that cannot be explained. The quarantine shelf is filling faster than the catalog.',
          clearance: 'restricted',
          tags: ['legacy', 'inventory', 'quarantine'],
          priority: 'routine',
        },
        'qd-09': {
          id: 'qd-09',
          title: 'Returned and cleared — field kit, three units',
          summary:
            'A standard loadout has come back clean, charged, and complete, with a maintenance note thanking the desk for the fast turnaround. The desk has framed the note. It is the only thank-you card this quarter and will be cited in the next requisition dispute as evidence that such things are possible.',
          clearance: 'internal',
          tags: ['returned', 'cleared', 'closed'],
          priority: 'routine',
        },
        'qd-10': {
          id: 'qd-10',
          title: 'Recall closed — batch 6 fully recovered',
          summary:
            'All batch-6 stabilizers are back on the shelf, wiped, and reissued under batch-8 labels. Batch 6 never happened; the ledger shows a gap between batch 5 and batch 7 that no one is invited to ask about. The devices work now. That is the only fact the ledger keeps.',
          clearance: 'restricted',
          tags: ['recall', 'recovered', 'closed'],
          priority: 'routine',
        },
      },
    },
  },
]
