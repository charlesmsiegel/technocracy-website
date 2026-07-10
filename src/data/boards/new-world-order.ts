import type { Board } from '../types'

export const newWorldOrderBoard: Board = {
  convention: 'new-world-order',
  codename: 'MIRRORGLASS',
  designation: 'COUNTERINTELLIGENCE CASE FILE NWO-2026-0031',
  banner: 'WATCHERS INTERNAL — IVORY TOWER DISTRIBUTION ONLY — SDS GRADE 2 MINIMUM TO READ',
  brief:
    'MIRRORGLASS is the active investigation into the transfer of classified Union material to Sleeper journalists. Six confirmed leak items since January; item 9 reproduced internal phrasing verbatim. Canary-trap wave 3 is in distribution and the suspect pool has been reduced from sixty-one to nine. All personnel reading this board are within the suspect pool unless annotated otherwise. Your annotation status is not visible to you.',
  columns: [
    { id: 'leads', title: 'Unassessed Leads', cardIds: ['nwo-01', 'nwo-02', 'nwo-03'] },
    { id: 'evaluation', title: 'Under Evaluation', cardIds: ['nwo-04', 'nwo-05', 'nwo-06', 'nwo-07', 'nwo-08'] },
    { id: 'watch', title: 'Active Watch', cardIds: ['nwo-09', 'nwo-10', 'nwo-11', 'nwo-12'] },
    { id: 'adjusted', title: 'Closed — Adjusted', cardIds: ['nwo-13', 'nwo-14', 'nwo-15'] },
  ],
  cards: {
    'nwo-01': {
      id: 'nwo-01',
      title: 'Leak item 9: internal phrasing verbatim in Sleeper print',
      summary:
        'A regional outlet published the phrase "consensus maintenance expenditure" in the exact seven-word context it occupies in a single internal budget memo. Distribution of that memo: eleven readers. All eleven now have files thicker than the memo.',
      clearance: 'restricted',
      tags: ['leak-item-9', 'verbatim', 'TI', 'the-feed'],
      priority: 'elevated',
    },
    'nwo-02': {
      id: 'nwo-02',
      title: 'Freelance journalist L. Okafor — contact network map',
      summary:
        'Request to map second-degree contacts of the freelancer carrying items 4, 6, and 9. Subject practices better operational security than two of our nine suspects, which is its own data point.',
      clearance: 'restricted',
      tags: ['journalist', 'network-analysis', 'IG', 'okafor'],
      priority: 'routine',
    },
    'nwo-03': {
      id: 'nwo-03',
      title: 'Pattern comparison: 2011 CASSANDRA leak file',
      summary:
        'Archival comparison against the 2011 internal leak, which was closed as "resolved by attrition." Methodological overlap in dead-drop hygiene suggests either the same tradecraft training or the same trainer. The 2011 file names the trainer. The name is redacted. In our own file.',
      clearance: 'restricted',
      tags: ['cassandra', 'archive', 'pattern-analysis', 'IG'],
      priority: 'routine',
    },
    'nwo-04': {
      id: 'nwo-04',
      title: 'Canary-trap wave 3 — variant tracking',
      summary:
        'Twenty-two uniquely watermarked document variants seeded across the residual suspect pool. Variant 17 surfaced in Okafor’s draft folder within nine days. Variant 17’s recipient list is one name long.',
      clearance: 'restricted',
      tags: ['canary-trap', 'wave-3', 'variant-17', 'TE'],
      priority: 'critical',
      detail: [
        'Wave 3 variants differ only in the ordering of two clauses and the value of one invented statistic. Variant 17 was issued to a single recipient: the inter-Convention liaison desk, Records Annex. The desk is staffed by two Watchers and one seconded Syndicate liaison. The Watchers received variants 16 and 18 respectively.',
        'Complication: the surfaced draft contained variant 17’s statistic but variant 16’s clause ordering. Either the leak passes through two hands before it leaves the building, or someone in the chain is editing for style. The second possibility has, regrettably, precedent in this Convention.',
      ],
      redactedLines: 2,
    },
    'nwo-05': {
      id: 'nwo-05',
      title: 'Suspect pool reduction — 61 to 9',
      summary:
        'Access-log correlation, travel records, and The Feed sentiment overlays have cleared fifty-two personnel. Of the residual nine, six are Watchers, two are seconded from other Conventions, one is a Supervisor whose clearance exceeds this file’s. That last row is handled in an annex.',
      clearance: 'restricted',
      tags: ['suspect-pool', 'correlation', 'SDS', 'IG'],
      priority: 'critical',
      detail: [
        'Reduction methodology per standard exclusion doctrine: physical impossibility first, then psychometric stability, then cui bono. The nine residuals survive all three filters. Note that the exclusion of the fifty-two is provisional; per doctrine, "cleared" is a scheduling term, not a character reference.',
        'The Supervisor-grade residual is documented in Annex D, access to which requires authorization from the subject of Annex D. The procedural difficulty is acknowledged. A workaround is under evaluation and is not written down.',
      ],
    },
    'nwo-06': {
      id: 'nwo-06',
      title: 'Cross-Convention access anomaly — Records Annex badge trace',
      summary:
        'The seconded Syndicate liaison’s badge registered Records Annex presence on four dates outside logged duty hours, each within 72 hours of a leak item’s publication. Evidence now points outside the Watchers. This changes the case from an embarrassment into an opportunity.',
      clearance: 'eyes-only',
      tags: ['syndicate-liaison', 'badge-trace', 'anomaly', 'ivory-tower'],
      priority: 'critical',
      notSharedWith: 'symposium',
      detail: [
        'Correlation of badge events with leak-item publication dates yields four-for-four alignment inside a 72-hour lead window. Countervailing data: the badge system is administered by us, badge cloning is within Syndicate capability, and the liaison passed a scheduled Conditioning verification in March with unremarkable scores. Unremarkable scores on a verification the subject knew was scheduled are, per doctrine, unremarkable.',
        'If the finding matures, the Union-facing question is not "who leaked" but "which Convention answers for it." The Ivory Tower position is that we surface this at a time, in a forum, and with a framing of our choosing — after Conditioning-refresh of all Watcher residuals is complete, so the reveal cannot be turned back on us.',
        'Until then, the liaison remains in place and unaware. Feed material moving through the Annex desk is now pre-filtered to be accurate, verifiable, and useless.',
      ],
      redactedLines: 4,
    },
    'nwo-07': {
      id: 'nwo-07',
      title: 'Reveal-control strategy — timing options memo',
      summary:
        'Draft options for surfacing the cross-Convention finding: at Symposium (maximum leverage, maximum exposure), bilaterally to Syndicate leadership (quiet, collects a favor), or never (asset conversion). Option three is drafted in the most detail. Draw your own conclusions, then keep them to yourself.',
      clearance: 'eyes-only',
      tags: ['strategy', 'reveal-control', 'ivory-tower', 'options'],
      priority: 'elevated',
      notSharedWith: 'symposium',
      detail: [
        'Option one treats the leak as a Union-integrity matter and spends our finding for standing at Symposium. Option two trades it to the Syndicate VPO structure for consideration to be named later. Option three retains the liaison in place as an unwitting channel, through which the Watchers control precisely what the Syndicate — and through the outlet, the Masses — believe they have discovered about us.',
        'The memo notes for the record that option three is indistinguishable, from outside, from the crime under investigation. The memo then recommends option three.',
      ],
    },
    'nwo-08': {
      id: 'nwo-08',
      title: 'Polygraph and Conditioning-refresh scheduling — Records Annex staff',
      summary:
        'Rolling schedule of verification interviews and Conditioning refreshes for all Annex personnel, sequenced so the liaison observes colleagues returning calm and content. Refreshed personnel report improved sleep and no longer remember why they needed it.',
      clearance: 'restricted',
      tags: ['conditioning', 'scheduling', 'records-annex', 'S&C'],
      priority: 'elevated',
      assignee: 'Supervisor 9 (Ivory Tower)',
    },
    'nwo-09': {
      id: 'nwo-09',
      title: 'Journalist monitoring rotation — four subjects',
      summary:
        'Full-spectrum watch on Okafor plus three secondary carriers: communications overlay via The Feed, physical rotation at 12-hour intervals, refuse collection standing order. Subjects are to remain healthy, productive, and unlucky with sources.',
      clearance: 'restricted',
      tags: ['surveillance', 'the-feed', 'rotation', 'FO'],
      priority: 'elevated',
    },
    'nwo-10': {
      id: 'nwo-10',
      title: 'Distribute revised NDA addenda — Records Annex, same-day wet signatures',
      summary:
        'Hand-carry the revised nondisclosure addenda to all Records Annex staff, collect wet signatures before end of shift, and note verbatim any questions asked before signing. Especially questions about clause 12. Do not answer questions about clause 12.',
      clearance: 'internal',
      tags: ['admin', 'nda', 'clause-12', 'same-day'],
      priority: 'routine',
      assignee: '@operative',
    },
    'nwo-11': {
      id: 'nwo-11',
      title: 'Mail-cover and residence-sweep authorizations — renewals',
      summary:
        'Ninety-day renewals for passive coverage of all nine residuals, including the two seconded personnel and the Annex D subject. The Annex D renewal is signed by the subject, per procedure. Procedure has not noticed.',
      clearance: 'restricted',
      tags: ['authorization', 'mail-cover', 'renewal', 'IG'],
      priority: 'elevated',
    },
    'nwo-12': {
      id: 'nwo-12',
      title: 'Variant 17 chain-of-custody reconstruction',
      summary:
        'Minute-by-minute reconstruction of variant 17’s handling from issuance to surfacing: two badge events, one print job, one 34-minute gap. The gap is the case. Everyone assigned to the gap is cleared, which is what makes it a gap.',
      clearance: 'restricted',
      tags: ['variant-17', 'custody', 'reconstruction', 'TE'],
      priority: 'critical',
    },
    'nwo-13': {
      id: 'nwo-13',
      title: 'Suspect 44 — cleared; residual doubt Adjusted',
      summary:
        'Archivist grade 2, cleared by travel-record impossibility. Subject had independently deduced the existence of this investigation, which was itself a finding. Residual doubt on both sides resolved via voluntary Adjustment. Subject is doing very well.',
      clearance: 'restricted',
      tags: ['suspect-44', 'adjustment', 'cleared', 'closed'],
      priority: 'routine',
      detail: [
        'The subject’s deduction was reconstructed from her personal notes: she noticed that two colleagues received "identical" memos that differed by one statistic, and concluded a canary trap was in progress. Analytical aptitude of this order is an asset in the correct role and a liability in an Annex under investigation.',
        'Post-Adjustment placement: promoted one grade, relocated, and enrolled in the talent-development track. Her notes are retained in this file. Her recollection of writing them is not retained anywhere.',
      ],
    },
    'nwo-14': {
      id: 'nwo-14',
      title: 'Outlet acquisition: "The Lantern" — completed',
      summary:
        'The secondary outlet carrying leak item 6 has been acquired through a third-shell media group. Editorial independence is guaranteed in the purchase agreement and supervised in practice. Item 6 follow-up coverage is now scheduled for never.',
      clearance: 'restricted',
      tags: ['acquisition', 'media', 'shell', 'closed'],
      priority: 'routine',
    },
    'nwo-15': {
      id: 'nwo-15',
      title: 'Leak item 4 — clerical origin; clerk reassigned',
      summary:
        'Item 4 traced to a declassification batch error, not the primary channel: one paragraph cleared for release eleven years early. The responsible clerk has been made available for reassignment and is grateful for the opportunity.',
      clearance: 'internal',
      tags: ['leak-item-4', 'clerical', 'reassignment', 'closed'],
      priority: 'routine',
    },
  },
}
