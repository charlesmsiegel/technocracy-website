import type { MethodologyPanel } from '../types'

export const progenitorsMethodologies: MethodologyPanel[] = [
  {
    id: 'facade-engineers',
    convention: 'progenitors',
    name: 'FACADE Engineers',
    role: 'Clone tissue and identity work — grafts, continuity, and handover',
    kind: 'board',
    board: {
      convention: 'progenitors',
      codename: 'TISSUE & IDENTITY QUEUE',
      designation: 'METHODOLOGY QUEUE PGN-FA-2026',
      banner: 'PROGENITORS INTERNAL — FACADE ENGINEERS / SYORKA WORKFLOW',
      brief:
        'Working queue for clone tissue fabrication and identity maintenance: graft scheduling, continuity verification against Life-Pattern baselines, and handover of finished units. Chiurgeons are reminded that a Type I face is a scheduled consumable and a Type II face is a promise; do not confuse the paperwork. Print quality is holding. Personalities are the part that still fails.',
      columns: [
        { id: 'intake', title: 'Fabrication Queue', cardIds: ['fa-01', 'fa-02', 'fa-03'] },
        { id: 'continuity', title: 'Continuity Checks', cardIds: ['fa-04', 'fa-05'] },
        { id: 'requests', title: 'Client Requests', cardIds: ['fa-06', 'fa-07'] },
        { id: 'handover', title: 'Handover', cardIds: ['fa-08', 'fa-09'] },
      ],
      cards: {
        'fa-01': {
          id: 'fa-01',
          title: 'Graft schedule — Type I witness-replacement, batch of four',
          summary:
            'Four Type I units queued for the printer at Syorka: standard witness-replacement chassis, off-the-rack physical templates, synthetic personalities loaded from stock. Expected service life is a few years before the Life-Pattern inconsistencies show. They are not built to last. They are built to be plausible until the schedule no longer needs them.',
          clearance: 'restricted',
          tags: ['graft', 'type-i', 'schedule'],
          priority: 'routine',
        },
        'fa-02': {
          id: 'fa-02',
          title: 'Dermis print rerun — texture mismatch on visible skin',
          summary:
            'A completed unit failed the close-inspection pass: the printed dermis reads correctly on camera but wrong to a hand. Rerun the visible surfaces. The client for this unit is a hugger, which the intake form flagged and the fabrication run did not read.',
          clearance: 'internal',
          tags: ['dermis', 'rerun', 'qa'],
          priority: 'routine',
        },
        'fa-03': {
          id: 'fa-03',
          title: 'Priority fabrication — Type II handover, senior leadership',
          summary:
            'A Type II unit for a leadership immortality case is on the priority line: full Mind and Life-Pattern copy, near-perfect, reserved-grade. Every step is double-verified because a Type II does not get retired if it fails; it gets discovered. The original is asking after the timeline daily.',
          clearance: 'eyes-only',
          tags: ['type-ii', 'immortality', 'priority'],
          priority: 'critical',
          redactedLines: 3,
          notSharedWith: 'symposium',
        },
        'fa-04': {
          id: 'fa-04',
          title: 'Continuity check — active Type I approaching drift window',
          summary:
            'A deployed Type I is entering the age band where synthetic personalities begin to unravel. Run the baseline comparison and score the drift. If it exceeds tolerance, the unit is scheduled for quiet replacement rather than repair; you cannot patch a personality, you can only print a new one and hope no one at the office notices the seam.',
          clearance: 'restricted',
          tags: ['continuity', 'type-i', 'drift'],
          priority: 'elevated',
        },
        'fa-05': {
          id: 'fa-05',
          title: 'Baseline reconciliation — cluster unit, shared Pattern',
          summary:
            'A Type III cluster of three physically distinct units sharing one Pattern has returned inconsistent continuity scores across its members. Reconcile against the master baseline. Two members match. The third has begun forming memories the other two do not have, which the manual describes as impossible and the log describes as Tuesday.',
          clearance: 'restricted',
          tags: ['type-iii', 'cluster', 'reconciliation'],
          priority: 'elevated',
        },
        'fa-06': {
          id: 'fa-06',
          title: 'Client requested their old face back — cite policy',
          summary:
            'A field asset who received a new identity eighteen months ago has formally requested reversion to his original face, citing "personal reasons." Reversion is not offered. The original template was retired at handover per continuity policy and the biological original is, per the same policy, no longer available for reference. Respond citing Policy FA-7 and schedule a wellness conversation, not a graft.',
          clearance: 'restricted',
          tags: ['client-request', 'reversion', 'policy'],
          priority: 'elevated',
          detail: [
            'Policy FA-7 exists precisely to close this loop: an identity is issued once, and the prior face is decommissioned at handover so that two versions of a person can never be in the record at the same time. The asset knows this — he signed the FA-7 acknowledgment — and is asking anyway, which the intake reviewer has flagged as the actual finding here. People do not usually want back a face they were happy to leave.',
            'Recommended handling: decline in writing, cite the policy number, and route the underlying distress to a wellness conversation. Do not speculate in the ticket about why he wants the old face. Do not confirm, if he asks, whether the old face is still on file. It is not the graft that is the problem.',
          ],
        },
        'fa-07': {
          id: 'fa-07',
          title: 'Client request — cosmetic revision, out of scope',
          summary:
            'A leadership Type II original has requested cosmetic adjustments to his active copy for reasons of vanity. Politely out of scope: a Type II is a continuity instrument, not a mirror, and altering the copy desynchronizes it from the Pattern that makes it immortal. He has been offered the changes on his biological original instead, which he declined, which is itself noted.',
          clearance: 'restricted',
          tags: ['client-request', 'cosmetic', 'out-of-scope'],
          priority: 'routine',
        },
        'fa-08': {
          id: 'fa-08',
          title: 'Handover — Type I units to Operatives amalgam',
          summary:
            'A completed batch of Black-Suit-grade Type I units is ready for transfer to a New World Order wetwork amalgam, per the joint program. Standard handover: chain-of-custody signed, service-life card attached, and the receiving Enlightened lead briefed on the instability-watch schedule. They break down eventually. That is the receiver’s problem after signature.',
          clearance: 'restricted',
          tags: ['handover', 'operatives', 'type-i'],
          priority: 'routine',
        },
        'fa-09': {
          id: 'fa-09',
          title: 'Handover complete — Type II accepted by principal',
          summary:
            'The priority Type II has passed final verification and been accepted by its original. Both now exist. Policy requires that this sentence never be true in any external record, so it is true only here, and this card is scheduled for archival to a place this desk does not have the clearance to read.',
          clearance: 'eyes-only',
          tags: ['handover', 'type-ii', 'closed'],
          priority: 'elevated',
          redactedLines: 2,
        },
      },
    },
  },
  {
    id: 'genegineers',
    convention: 'progenitors',
    name: 'Genegineers',
    role: 'Sequence review, germline sign-off, and specimen-line audit',
    kind: 'board',
    board: {
      convention: 'progenitors',
      codename: 'SEQUENCE REVIEW QUEUE',
      designation: 'METHODOLOGY QUEUE PGN-GE-2026',
      banner: 'PROGENITORS INTERNAL — GENEGINEERS / QUALITY ASSURANCE',
      brief:
        'Standing review queue for sequence work: edit-package sign-off, germline authorizations requiring two-signature release, and periodic specimen-line audits. Scientists are reminded that "complete understanding and mastery of the genetics of every species" is a charter, not a status, and the gap between the two is where the audit findings live. Sign only what you have read. Read only what you can defend at symposium.',
      columns: [
        { id: 'review', title: 'Sequence Review', cardIds: ['ge-01', 'ge-02', 'ge-03'] },
        { id: 'germline', title: 'Germline Sign-off', cardIds: ['ge-04', 'ge-05'] },
        { id: 'audit', title: 'Specimen-Line Audit', cardIds: ['ge-06', 'ge-07', 'ge-08'] },
        { id: 'released', title: 'Released', cardIds: ['ge-09', 'ge-10'] },
      ],
      cards: {
        'ge-01': {
          id: 'ge-01',
          title: 'Sequence review — drought-tolerance cassette for DOAA',
          summary:
            'Routine review of an edit package bound for the Agronomists: three stacked traits for stress tolerance in a staple cereal. Clean design, well-documented, boringly good work. Approve and forward. This is the kind of ticket that reminds the desk why the charter is worth defending — a cassette that will feed people and do nothing else.',
          clearance: 'internal',
          tags: ['sequence', 'agronomy', 'review'],
          priority: 'routine',
        },
        'ge-02': {
          id: 'ge-02',
          title: 'Sequence review — biomod implant, voluntary-surgery decline',
          summary:
            'A xenotransplant biomod package submitted for review, one of the dwindling few now that Pharmacopoeist drugs have replaced most implant surgeries. Volume is down 87 percent since the nineties and the reviewers are rusty on the old techniques. Approve if sound, and note for the record that this line of work is quietly ending.',
          clearance: 'restricted',
          tags: ['biomod', 'xenotransplant', 'review'],
          priority: 'routine',
        },
        'ge-03': {
          id: 'ge-03',
          title: 'Sequence review — dermis-adaptation package, chimeric chassis',
          summary:
            'An edit package for an adaptive-dermis trait on a predator chassis, submitted from a security-oriented line for "durability improvements." The dermis genes are flagged dominant. The submitting facility is one the desk is not supposed to correlate with anything, so the review is confined strictly to the sequence in front of it and asks no questions the sequence does not raise.',
          clearance: 'eyes-only',
          tags: ['dermis', 'chimeric', 'dominant'],
          priority: 'elevated',
          detail: [
            'On its own terms the package is competent: a dermis-adaptation trait, engineered symbiote flora for wound closure and scent masking, packaged for a durable security-role organism of the sort that goes to Damage Control. The desk’s remit is the sequence, and the sequence is well-formed. That is the whole of what this card is permitted to conclude.',
            'The reviewer has noted, and confined to this drawer, that the dominance profile of the dermis genes means the trait does not stay in the organism it was designed for. Introgression risk on a dominant cassette is a standard finding and is filed as a standard finding. Where that risk goes if the chassis is ever outside containment is a question for a different queue, run by people with law-enforcement titles, and is not asked here.',
          ],
          redactedLines: 4,
          notSharedWith: 'symposium',
        },
        'ge-04': {
          id: 'ge-04',
          title: 'Germline sign-off — heritable correction, human clinical line',
          summary:
            'A heritable edit for a single-gene disorder awaits the required two signatures. Altruistic-wing work, cancer-and-disorder clinic pipeline, exactly the kind of case the growing altruistic wing points to when the Convention argues about whether it plays God. Second signature pending. Both signatories will have to defend it, so both are reading it.',
          clearance: 'restricted',
          tags: ['germline', 'heritable', 'two-signature'],
          priority: 'elevated',
        },
        'ge-05': {
          id: 'ge-05',
          title: 'Germline sign-off held — supporting-ecology dependency',
          summary:
            'A germline package for a Rejection-prone biomorph is held because it cannot survive without an entire engineered supporting ecology that has not itself been signed off. Approving the organism without the ecology approves a thing that starves. Return to the submitter to bundle the ecology, or to explain what the organism is expected to eat.',
          clearance: 'restricted',
          tags: ['germline', 'ecology', 'hold'],
          priority: 'routine',
        },
        'ge-06': {
          id: 'ge-06',
          title: 'Specimen-line audit — genome-atlas cold storage, quarterly',
          summary:
            'Quarterly inventory of the catalogued genome library: tens of thousands of sequenced species in cold storage against hundreds of thousands earmarked. Confirm counts, verify chain of custody on the acquired lines, and flag any specimen whose provenance paperwork is thinner than its scientific value. Three lines have provenance thinner than that. Two are expected.',
          clearance: 'internal',
          tags: ['audit', 'genome-atlas', 'inventory'],
          priority: 'routine',
        },
        'ge-07': {
          id: 'ge-07',
          title: 'Specimen-line audit — rainforest acquisition, unlogged sample',
          summary:
            'A sample from the South American investment programs has appeared in the freezer inventory without a matching acquisition record. Probably a labeling error from a field team that funds itself and cuts corners. Reconcile the log. If the sample is real and the record is not, the sample is the finding.',
          clearance: 'restricted',
          tags: ['audit', 'rainforest', 'provenance'],
          priority: 'elevated',
        },
        'ge-08': {
          id: 'ge-08',
          title: 'Specimen-line audit — count discrepancy against field estimate',
          summary:
            'A monitored organism line’s inventory count does not reconcile with the field population estimate provided by a partnered security programme. The two numbers have never matched and the gap is widening in the direction of "more than we made." The audit records the discrepancy, forwards it to the programme that owns the field number, and does not attempt to close it here.',
          clearance: 'eyes-only',
          tags: ['audit', 'discrepancy', 'population'],
          priority: 'elevated',
          redactedLines: 2,
          notSharedWith: 'symposium',
        },
        'ge-09': {
          id: 'ge-09',
          title: 'Released — DOAA cassette forwarded to Agronomists',
          summary:
            'The drought-tolerance package has cleared review and gone to the Agronomists for field integration. It will feed people, adhere to the harvest schedule, and generate no findings. The desk records it as a good day and moves to the next ticket, which is not one.',
          clearance: 'internal',
          tags: ['released', 'agronomy', 'closed'],
          priority: 'routine',
        },
        'ge-10': {
          id: 'ge-10',
          title: 'Released — heritable correction, both signatures obtained',
          summary:
            'The human clinical germline edit has its second signature and has been released to the clinic pipeline. A child who does not yet exist will not inherit a disease, and two Scientists have put their names to the reason why. The altruistic wing files this one where the arguments about playing God can find it.',
          clearance: 'restricted',
          tags: ['released', 'germline', 'closed'],
          priority: 'routine',
        },
      },
    },
  },
  {
    id: 'pharmacopoeists',
    convention: 'progenitors',
    name: 'Pharmacopoeists',
    role: 'Batch QA, trial scheduling, and formulation review',
    kind: 'board',
    board: {
      convention: 'progenitors',
      codename: 'BATCH & TRIAL QUEUE',
      designation: 'METHODOLOGY QUEUE PGN-PH-2026',
      banner: 'PROGENITORS INTERNAL — PHARMACOPOEISTS / QUALITY & TRIALS',
      brief:
        'Working queue for the legitimate pipeline: batch quality assurance on production lots, clinical-trial scheduling, and formulation review. The street-lab side is directed elsewhere and is not tracked on this board. Chemists are reminded that the Convention’s prestige comes from the drugs that save lives and its fear from the drugs that end them; both are made in the same buildings by the same hands.',
      columns: [
        { id: 'qa', title: 'Batch QA', cardIds: ['ph-01', 'ph-02', 'ph-03'] },
        { id: 'trials', title: 'Trial Scheduling', cardIds: ['ph-04', 'ph-05'] },
        { id: 'review', title: 'Formulation Review', cardIds: ['ph-06', 'ph-07'] },
        { id: 'released', title: 'Released', cardIds: ['ph-08', 'ph-09'] },
      ],
      cards: {
        'ph-01': {
          id: 'ph-01',
          title: 'Batch QA — vaccine lot, developed-market release',
          summary:
            'Standard release testing on a large vaccine lot bound for developed nations under the controlled-formula model. Potency, purity, sterility, all within specification. Approve and release. This is the work the Convention points to first and argues about last.',
          clearance: 'internal',
          tags: ['batch-qa', 'vaccine', 'release'],
          priority: 'routine',
        },
        'ph-02': {
          id: 'ph-02',
          title: 'Batch QA — hold on assay drift, cancer therapeutic',
          summary:
            'A high-value oncology batch shows a slow drift in one assay across three retests. Within spec today, trending out of it. Hold the lot, root-cause the drift, and do not release on the argument that it is "still passing." A batch that is still passing while trending is a recall with a delay built in.',
          clearance: 'restricted',
          tags: ['batch-qa', 'drift', 'hold'],
          priority: 'elevated',
        },
        'ph-03': {
          id: 'ph-03',
          title: 'Batch QA — amnestic cocktail, restricted-use lot',
          summary:
            'Release testing on a controlled batch of the amnesia formulation supplied to internal security programs across the Union. Potency verified against the standard dosing curve; the desk confirms it does exactly what it is meant to, which is the part that keeps QA quiet at parties. Release to the requesting desks only, under the restricted schedule.',
          clearance: 'eyes-only',
          tags: ['batch-qa', 'amnestic', 'restricted'],
          priority: 'elevated',
          redactedLines: 2,
          notSharedWith: 'symposium',
        },
        'ph-04': {
          id: 'ph-04',
          title: 'Trial scheduling — Phase II enrollment, next quarter',
          summary:
            'Slot the Phase II enrollment for a new therapeutic across the partner-clinic network, sequencing sites so the favorable ones report first and set the narrative for the rest. The drug is genuinely good, which makes the scheduling honest work with a dishonest shape. Confirm site readiness and lock the calendar.',
          clearance: 'restricted',
          tags: ['trial', 'phase-ii', 'scheduling'],
          priority: 'routine',
        },
        'ph-05': {
          id: 'ph-05',
          title: 'Trial anomaly — placebo outperforming again',
          summary:
            'For the third consecutive trial in this program the placebo arm is beating the active arm on the primary endpoint. The drug does nothing measurable; the sugar pill does something the statistics keep insisting on. Convene the review before publication, because a result this clean in the wrong direction gets noticed, and decide what the trial discovered before the trial tells anyone itself.',
          clearance: 'restricted',
          tags: ['trial', 'placebo', 'anomaly'],
          priority: 'elevated',
          detail: [
            'Three trials, same signal: the placebo arm consistently and significantly outperforms the active compound on the endpoint the program was built to move. The mundane readings are the obvious ones — the compound is inert at these doses, or the endpoint is measuring belief rather than biology, or the enrollment is quietly non-random in a way the site-sequencing introduced. Any of those is a publishable, survivable finding and the review should exhaust them first.',
            'The unmundane reading, filed here only because doctrine requires the possibility be named and then not discussed further: the expectation of getting better is, in this population, doing measurable work that the chemistry is not. That is either a methods error or a result the Convention would rather own than have a Tradition find first. The review’s remit is to make it the former.',
          ],
        },
        'ph-06': {
          id: 'ph-06',
          title: 'Formulation review — pediatric dosing, altruistic pipeline',
          summary:
            'Reformulation of an existing therapeutic into a stable pediatric dose for the clinic pipeline. Straightforward, well-motivated, and the sort of ticket the legitimate side keeps to remind itself which house it lives in. Review the excipients and the stability data and forward for scale-up.',
          clearance: 'internal',
          tags: ['formulation', 'pediatric', 'review'],
          priority: 'routine',
        },
        'ph-07': {
          id: 'ph-07',
          title: 'Formulation review — truth-serum stability, shelf-life query',
          summary:
            'A requesting desk asks whether a controlled interrogation formulation can be reformulated for longer field shelf-life. Chemically yes; the review flags that longer shelf-life means wider distribution means more copies of a thing the Convention prefers scarce. Answer the chemistry question, escalate the distribution question, and let a higher desk decide which answer is binding.',
          clearance: 'eyes-only',
          tags: ['formulation', 'truth-serum', 'shelf-life'],
          priority: 'elevated',
          redactedLines: 2,
          notSharedWith: 'symposium',
        },
        'ph-08': {
          id: 'ph-08',
          title: 'Released — vaccine lot cleared to distribution',
          summary:
            'The vaccine lot has passed QA and shipped. Somewhere a number of people will not get a disease and will never know a Progenitor Quality Assurance analyst is the reason. The analyst prefers it that way. The prestige is nice; the anonymity is the point of the prestige.',
          clearance: 'internal',
          tags: ['released', 'vaccine', 'closed'],
          priority: 'routine',
        },
        'ph-09': {
          id: 'ph-09',
          title: 'Trial closed — endpoint revised, program continued',
          summary:
            'The underperforming program has closed its current trial after the review "clarified" the primary endpoint to one the active arm does move. Publication proceeds on the revised endpoint; the placebo finding is retained internally and cited nowhere. The program continues. The sugar pill is not thanked in the acknowledgments.',
          clearance: 'restricted',
          tags: ['trial', 'endpoint', 'closed'],
          priority: 'routine',
        },
      },
    },
  },
  {
    id: 'damage-control',
    convention: 'progenitors',
    name: 'Damage Control',
    role: 'Site remediation, witness aftercare, and evidence recovery',
    kind: 'board',
    board: {
      convention: 'progenitors',
      codename: 'REMEDIATION & COVERAGE QUEUE',
      designation: 'METHODOLOGY QUEUE PGN-DC-2026',
      banner: 'PROGENITORS INTERNAL — DAMAGE CONTROL / ETHICAL COMPLIANCE ADJACENT',
      brief:
        'Standing cleanup queue: site remediation after facility incidents, witness aftercare, and recovery of physical evidence into Union custody. Constables and Chief Inspectors are reminded of the code — amputate the finger before the infection reaches the arm — and of its corollary, that the arm is always watching to see how neatly the finger comes off. Coverage is a science. Regret is optional and, per policy, unbillable.',
      columns: [
        { id: 'remediation', title: 'Site Remediation', cardIds: ['dc-01', 'dc-02', 'dc-03'] },
        { id: 'aftercare', title: 'Witness Aftercare', cardIds: ['dc-04', 'dc-05'] },
        { id: 'recovery', title: 'Evidence Recovery', cardIds: ['dc-06', 'dc-07'] },
        { id: 'closed', title: 'Coverage Complete', cardIds: ['dc-08', 'dc-09'] },
      ],
      cards: {
        'dc-01': {
          id: 'dc-01',
          title: 'Site remediation — facility incident, "ventilation event"',
          summary:
            'Restore a research site to a defensible state after an incident the report styles a "ventilation event." Sanitize the affected wing, reconcile the equipment ledger to the equipment present, and prepare the site for an inspection it will pass. The event is over. The remediation is the event now.',
          clearance: 'restricted',
          tags: ['remediation', 'facility', 'sanitize'],
          priority: 'elevated',
        },
        'dc-02': {
          id: 'dc-02',
          title: 'Site remediation — escaped specimen recovery, remote range',
          summary:
            'A durable security-role organism is unaccounted for outside a remote facility’s perimeter. Recover it or account for it, and restore the surrounding area to a condition consistent with the cover story. The recovery team carries doctorates and Inspired weaponry, in that order of usefulness for this particular ticket.',
          clearance: 'eyes-only',
          tags: ['remediation', 'specimen', 'recovery'],
          priority: 'critical',
          redactedLines: 3,
          notSharedWith: 'symposium',
        },
        'dc-03': {
          id: 'dc-03',
          title: 'Site remediation — front office, cover integrity refresh',
          summary:
            'A co-opted Sleeper organization used as a facility front has developed staff who are becoming curious. Refresh the cover: rotate the curious into promotions that relocate them, install replacement staff, and leave the front more legitimate than it was. More than one field office has quietly become one of ours; this is the maintenance that keeps it quiet.',
          clearance: 'restricted',
          tags: ['remediation', 'front', 'cover'],
          priority: 'routine',
        },
        'dc-04': {
          id: 'dc-04',
          title: 'Witness aftercare — Sleeper who saw the recovery team',
          summary:
            'A Sleeper observed the remote-range recovery and has been brought into aftercare: a gentle interview, a plausible memory, and a follow-up to confirm the plausible memory took. He is being treated well because well-treated witnesses stay convinced. The amnestic is on hand and, if the memory holds on its own, unbilled.',
          clearance: 'restricted',
          tags: ['aftercare', 'witness', 'memory'],
          priority: 'elevated',
        },
        'dc-05': {
          id: 'dc-05',
          title: 'Witness aftercare — clinic staff, exposure to unlabeled work',
          summary:
            'Two partner-clinic employees saw paperwork they were not cleared for during the site refresh. Aftercare rather than action: reassignment, an improved package, and a nondisclosure conversation framed as a promotion briefing. They leave the meeting believing they were rewarded, which, by the desk’s accounting, they were.',
          clearance: 'restricted',
          tags: ['aftercare', 'staff', 'nda'],
          priority: 'routine',
        },
        'dc-06': {
          id: 'dc-06',
          title: 'Evidence recovery — physical samples in Sleeper custody',
          summary:
            'Biological samples from an incident have reached a Sleeper forensic lab. Recover them into Union custody through the appropriate front before they are sequenced by anyone who would recognize what they are looking at. Preferred instrument is a records error and a courier, not a raid. Raids generate the evidence they recover.',
          clearance: 'restricted',
          tags: ['recovery', 'samples', 'custody'],
          priority: 'elevated',
        },
        'dc-07': {
          id: 'dc-07',
          title: 'Evidence buyback — documents surfacing at auction',
          summary:
            'A cache of documents connected to a decades-old facility has surfaced through an estate sale and is being offered to collectors. Acquire the lot quietly through a third-party bidder, confirm completeness against the index, and retire it. The seller believes he is liquidating a curiosity. He is, and the curiosity is worth exactly the discreet premium being paid to make it stop being for sale.',
          clearance: 'restricted',
          tags: ['recovery', 'buyback', 'documents'],
          priority: 'routine',
        },
        'dc-08': {
          id: 'dc-08',
          title: 'Coverage complete — site passed inspection',
          summary:
            'The remediated facility passed its scheduled inspection without a finding. The wing that had the incident now has a maintenance log showing it was closed for scheduled work on the relevant dates. The log is true in the sense that matters. There is no other sense in which logs are kept.',
          clearance: 'restricted',
          tags: ['coverage', 'inspection', 'closed'],
          priority: 'routine',
        },
        'dc-09': {
          id: 'dc-09',
          title: 'Coverage complete — samples recovered, chain retired',
          summary:
            'The forensic samples are in Union custody and the Sleeper lab’s records reflect a mislabeled batch discarded per protocol. Everyone in the chain acted correctly according to the record they were given. The record they were given is the deliverable, and it has been delivered, and the finger has come off cleanly.',
          clearance: 'restricted',
          tags: ['coverage', 'recovery', 'closed'],
          priority: 'routine',
        },
      },
    },
  },
  {
    id: 'agronomists',
    convention: 'progenitors',
    name: 'Agronomists',
    role: 'DOAA telemetry — yield, harvest adherence, and biosphere status',
    kind: 'dashboard',
    tickerItems: [
      { id: 'agro-t1', text: '[DOAA-2026-0771] SEED PLATFORM NA-3 · CULTIVAR RESILIENCE PORTFOLIO · YIELD +19% BAND · NOMINAL' },
      { id: 'agro-t2', text: '[DOAA-2026-0772] HARVEST WINDOW EU-2 · SCHEDULE ADHERENCE 100% · WEATHER OBJECTION OVERRULED' },
      { id: 'agro-t3', text: '[DOAA-2026-0773] BLIGHT WATCH SA-1 · CONTAINED (SCHEDULED) · POLLINATOR CORRIDOR STABLE' },
    ],
    metrics: [
      {
        kind: 'gauge',
        id: 'agro-yield',
        label: 'Aggregate Yield vs. Plan',
        value: 108,
        thresholds: [95, 85],
        descending: true,
        unit: '%',
      },
      {
        kind: 'gauge',
        id: 'agro-adherence',
        label: 'Harvest-Schedule Adherence',
        value: 100,
        thresholds: [98, 95],
        descending: true,
        unit: '%',
      },
      {
        kind: 'counter',
        id: 'agro-meals',
        label: 'Meals Served / day',
        value: 2.1,
        unit: 'bn',
        decimals: 2,
        jitter: 0.03,
      },
      {
        kind: 'counter',
        id: 'agro-cultivars',
        label: 'Active Resilient Cultivars',
        value: 1174,
        unit: ' lines',
      },
      {
        kind: 'counter',
        id: 'agro-pollinators',
        label: 'Managed Pollinator Population',
        value: 41.8,
        unit: 'bn',
        decimals: 1,
        jitter: 0.6,
      },
      {
        kind: 'sparkline',
        id: 'agro-topsoil',
        label: 'Agrivelopment Topsoil Renewal (7-day, ha)',
        history: [1180, 1205, 1240, 1230, 1268, 1290, 1315],
      },
      {
        kind: 'status',
        id: 'agro-blight',
        label: 'Blight Status',
        status: 'nominal',
        note: 'Contained (scheduled). The blight appears where the model places it and recedes on the date the model closes it. This is described internally as control.',
      },
      {
        kind: 'status',
        id: 'agro-weather',
        label: 'Growing-Condition Compliance',
        status: 'nominal',
        note: 'Two regions reported non-standard growing conditions this cycle. The conditions were overruled and the harvest arrived on schedule. The harvest always arrives on schedule.',
      },
    ],
    note:
      'Yield and adherence are reported on the DOAA operational basis and reflect delivered outcomes, not forecast. Adherence has been at 100% for eleven consecutive cycles; the figure is not a rounding of 99.7% and is not to be softened for external audiences. Pollinator counts drift with sampling; the drift is sampling, not the pollinators. Hunger is a logistics problem with a biology bottleneck, and this desk owns both.',
  },
]
