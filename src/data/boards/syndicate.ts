import type { Board } from '../types'

export const syndicateBoard: Board = {
  convention: 'syndicate',
  codename: 'LEDGER',
  designation: 'ASSET RECOVERY FILE SY-1999-0114',
  banner: 'SYNDICATE INTERNAL — VPO FINANCE EYES ONLY — DO NOT DISCUSS IN MIXED AMALGAMS',
  brief:
    'LEDGER carries all open items arising from the cessation of contact with Special Projects Division following the Dimensional Anomaly. Entry operations were suspended in 2000 after unacceptable Enforcer losses. Pentex Incorporated continues to remit quarterly dividends in full and on time. The Board has determined that the cost of answers exceeds their carrying value; this file exists to keep re-verifying that determination. Item 0 remains unassigned.',
  columns: [
    { id: 'open', title: 'Open Items', cardIds: ['sy-01', 'sy-02', 'sy-03'] },
    { id: 'audit', title: 'Under Audit', cardIds: ['sy-04', 'sy-05', 'sy-06', 'sy-07', 'sy-08'] },
    { id: 'recovery', title: 'Active Recovery', cardIds: ['sy-09', 'sy-10', 'sy-11', 'sy-12'] },
    { id: 'written-off', title: 'Written Off', cardIds: ['sy-13', 'sy-14', 'sy-15'] },
  ],
  cards: {
    'sy-01': {
      id: 'sy-01',
      title: 'Item 0: source-of-funds inquiry — UNASSIGNED',
      summary:
        'Formal inquiry into the origin of the dividend cash flow. Drafted 2011. Fourteen operatives have been offered the assignment; fourteen have cited workload. Item remains open, unassigned, and current.',
      clearance: 'eyes-only',
      tags: ['item-0', 'pentex', 'primal-utility', 'unassigned'],
      priority: 'elevated',
      detail: [
        'The question is one sentence long: given that SPD has shipped no product, licensed no technology, and answered no correspondence since 1999, what is the dividend payment FOR? The draft inquiry has been through eleven revisions, each of which softened the sentence further. The current revision asks whether Pentex would "care to characterize the revenue basis at its convenience."',
        'Financiers who have modeled the flow agree it is real money — clean, liquid, and correctly taxed in every jurisdiction. One model note, appended and never discussed since: the payment amounts track our own quarterly funding requirements more closely than they track any plausible Pentex earnings curve. As if someone on the other end can see our budget.',
        'Assignment of Item 0 confers sole ownership of the answer. This has been explained to all fourteen candidates.',
      ],
      redactedLines: 3,
    },
    'sy-02': {
      id: 'sy-02',
      title: 'Enforcer remains — final disposition (outstanding since 2000)',
      summary:
        'Partial remains delivered by courier to the VPO of Finance in 2000 remain classified as evidence rather than personnel, which blocks interment and survivor benefits. Reclassification memo drafted annually. Blocked annually.',
      clearance: 'restricted',
      tags: ['personnel', 'evidence-hold', 'benefits', 'RAN'],
      priority: 'routine',
    },
    'sy-03': {
      id: 'sy-03',
      title: 'Project Invictus deconfliction memo — annual issue',
      summary:
        'Annual reminder to regional offices that Project Invictus operations are sanctioned and that friction with our own information-security personnel is to be reported upward, not resolved locally. The memo does not explain why. That is the point of the memo.',
      clearance: 'internal',
      tags: ['invictus', 'deconfliction', 'policy', 'annual'],
      priority: 'routine',
    },
    'sy-04': {
      id: 'sy-04',
      title: 'Dividend anomaly analysis — FY2026 Q2 remittance',
      summary:
        'Q2 payment arrived four days early, exact to the cent, via instruments our clearing desks rate as valid but cannot trace past the second correspondent. Early payment is a first in 27 years and is therefore being treated as a message.',
      clearance: 'eyes-only',
      tags: ['pentex', 'forensic-accounting', 'anomaly', 'TE'],
      priority: 'critical',
      detail: [
        'Twenty-six consecutive years of remittances have arrived on the contractual date to the hour. The Q2 payment broke pattern in one respect only: timing. Amount, routing format, and instrument structure were unchanged. Analysis of the four-day differential notes that it corresponds to the interval between the Board’s most recent closed-session discussion of this file and the payment date.',
        'The clearing desk’s summary judgment is quoted in full: "Either this is a coincidence, or they attend our meetings. We recommend treating it as a coincidence."',
      ],
      redactedLines: 2,
    },
    'sy-05': {
      id: 'sy-05',
      title: 'Singapore lead: Blacksin / Overlook sighting file (2007) — rescored',
      summary:
        'Former SPD chairs Amanda Blacksin and James Overlook, sighted Singapore 2007 and not since. A 2026 facial-recall match at a Singapore private-banking function has raised the lead from dormant to active. Neither subject has aged.',
      clearance: 'eyes-only',
      tags: ['blacksin', 'overlook', 'IG', 'singapore'],
      priority: 'elevated',
      detail: [
        'The 2026 match derives from a Watchers courtesy feed (unprompted, which has been noted separately). Confidence 91 percent on Blacksin, 88 percent on Overlook. Both subjects appear in a single frame, seated, in conversation with a third party whose face does not resolve in any frame. Enhancement of the third party was attempted by two independent labs; both labs returned the file with resignation letters attached.',
        'Field inquiry authorized at AFET 1 only: observation, no contact, no financial transactions with any entity the subjects touch. The last stipulation is load-bearing.',
      ],
    },
    'sy-06': {
      id: 'sy-06',
      title: 'Reality-Toxin assay — SPD inventory Batch 31',
      summary:
        'Legacy SPD hardware from the Rotterdam bond store shows accelerating Reality-Toxin leach rates. Batch 31 assay confirms handling limit of 40 minutes per technician per month. Archiving priority raised accordingly.',
      clearance: 'restricted',
      tags: ['reality-toxin', 'batch-31', 'assay', 'CCC'],
      priority: 'elevated',
      detail: [
        'Batch 31 comprises 212 units of consumer-adjacent prototype hardware, none of which does what its casing says it does. Leach rates have increased 14 percent year over year since 2020, consistent with the working theory that the inventory is not degrading but ripening.',
        'Technicians report the standard effects within the exposure limit: irritability, vivid product-endorsement dreams, and a documented tendency to describe the inventory as "wasted on storage." Rotation schedules are enforced by badge lockout.',
      ],
    },
    'sy-07': {
      id: 'sy-07',
      title: 'SISD correspondence audit — request denial ratio',
      summary:
        'Quarterly verification that the Division’s SPD-facing correspondence maintains a 100 percent denial rate with plausible variance in tone. Two recent denials were "too helpful" and have been reissued with corrections.',
      clearance: 'restricted',
      tags: ['SISD', 'masquerade', 'audit', 'quarterly'],
      priority: 'routine',
      notSharedWith: 'symposium',
    },
    'sy-08': {
      id: 'sy-08',
      title: 'SPD adverse-evidence review: Nephandi linkage (off-book)',
      summary:
        'Consolidated review of SISD off-book findings: procurement trails consistent with Nephandic materiel, live human testing records, and corrupted Deviant-origin components in pre-1999 SPD product. Distribution: this card.',
      clearance: 'eyes-only',
      tags: ['nephandi', 'HSKIN-adjacent', 'evidence', 'off-book'],
      priority: 'critical',
      notSharedWith: 'symposium',
      detail: [
        'The evidence package now runs to eleven volumes. Standing counsel’s assessment: sufficient to obtain a Union-wide finding against SPD in absentia, and sufficient to invite the question of what the Syndicate knew before 1999 and what it accepted dividends for after. The second question has no good answer at any level of this Convention.',
        'The Symposium would treat disclosure as a Syndicate confession. The Board treats non-disclosure as an accounting decision. Both characterizations are accurate, which is why this card has the distribution it has.',
        'Volume 12 (Singapore addendum) pending under sy-05.',
      ],
      redactedLines: 5,
    },
    'sy-09': {
      id: 'sy-09',
      title: 'Archiving of SPD gear cache — Rotterdam bond store, phase 3',
      summary:
        'Enlightened disposal ("archiving") of Batch 29 through 33. Incineration is contraindicated; the material objects to it. Phase 3 uses the slower protocol. Comptroller Voss has the manifests and the incident log.',
      clearance: 'restricted',
      tags: ['archiving', 'reality-toxin', 'disposal', 'CCC'],
      priority: 'elevated',
      assignee: 'Comptroller Voss, L.',
      detail: [
        'Phase 2 after-action, summarized: thermal destruction of Batch 28 produced localized effects in the surrounding district best described as enthusiastic brand loyalty toward products that do not exist. CCC costs exceeded the batch’s insured value by a factor of nine. The Masses affected have been compensated with products that do exist.',
        'Phase 3 protocol dissolves each unit’s Pattern over 40 days in a Primal Utility sink. It is slow, expensive, and quiet. Comptroller Voss’s standing instruction to staff: "Nothing leaves early. Nothing is salvaged for parts. I will know."',
      ],
    },
    'sy-10': {
      id: 'sy-10',
      title: 'SISD masquerade upkeep — Q3 persona refresh',
      summary:
        'Scheduled rotation of the identities under which SISD answers correspondence addressed to SPD. Persona set must remain unhelpful without becoming memorable. Two personas retired after receiving holiday cards.',
      clearance: 'eyes-only',
      tags: ['SISD', 'masquerade', 'persona', 'quarterly'],
      priority: 'elevated',
      notSharedWith: 'symposium',
    },
    'sy-11': {
      id: 'sy-11',
      title: 'Invictus agent intake — Processing referrals (2 units)',
      summary:
        'Two Project Invictus operatives captured during an attempted raid on an SISD site they believed to be SPD. Both submitted for Processing per standing procedure. Their initiative has been noted favorably in files they will never see.',
      clearance: 'restricted',
      tags: ['invictus', 'processing', 'S&C', 'intake'],
      priority: 'elevated',
    },
    'sy-12': {
      id: 'sy-12',
      title: 'Atlanta office — perimeter lease renewal',
      summary:
        'Renewal of the leases on all properties adjoining the Pentex Atlanta office, maintaining the vacancy buffer. The office itself requires no maintenance. The lights are on. No one has entered since 2000 and this line item keeps it that way.',
      clearance: 'internal',
      tags: ['real-estate', 'atlanta', 'buffer', 'annual'],
      priority: 'routine',
    },
    'sy-13': {
      id: 'sy-13',
      title: 'Entry-operation cost-benefit review (2000–2004) — closed',
      summary:
        'Consolidated review of all entry attempts against former SPD sites. Finding: sixteen personnel expended, zero information recovered, one message received (see sy-02). Determination: the price of answers exceeds carrying value. Written off.',
      clearance: 'restricted',
      tags: ['AAR', 'write-off', 'entry-ops', 'closed'],
      priority: 'routine',
    },
    'sy-14': {
      id: 'sy-14',
      title: 'VP Sinclair welfare inquiry — closed',
      summary:
        'Final welfare determination for VP Sinclair and the pre-1999 SPD leadership roster: "no longer home." Pension obligations transferred to the general fund. The dividends continue to arrive signed with Sinclair’s authorization code.',
      clearance: 'restricted',
      tags: ['personnel', 'sinclair', 'write-off', 'closed'],
      priority: 'routine',
    },
    'sy-15': {
      id: 'sy-15',
      title: 'Munich site residue — written off',
      summary:
        'The Munich entry site remains inert within its containment footprint. Quarterly instrumentation confirms residue stability. Property has been converted to a parking structure. Level B3 is not rented out.',
      clearance: 'internal',
      tags: ['munich', 'containment', 'residue', 'closed'],
      priority: 'routine',
    },
  },
}
