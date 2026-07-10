import type { Board } from '../types'

export const iterationXBoard: Board = {
  convention: 'iteration-x',
  codename: 'SILENT ANVIL',
  designation: 'CONTINUITY RESTORATION FILE IX-2005-0007',
  banner: 'ITERATION X INTERNAL — COMPTROLLER DISTRIBUTION LIST A — DO NOT MIRROR TO SHARED ARRAYS',
  brief:
    'SILENT ANVIL coordinates all procedures directed at restoring contact with the Computer following loss of the Autochthonia uplink. Last coherent transmission received 2005; decode remains incomplete. Void Engineer quarantine of all Autochthonia approach routes remains in force over this Convention’s formal objection (waiver requests 1 through 7 denied). Signal-analysis items marked for List A distribution are not to be referenced in inter-Convention correspondence. The anvil is silent. Continue hammering.',
  columns: [
    { id: 'queue', title: 'Queued Iterations', cardIds: ['ix-01', 'ix-02', 'ix-03'] },
    { id: 'signal', title: 'Decode & Signal Analysis', cardIds: ['ix-04', 'ix-05', 'ix-06', 'ix-07', 'ix-08'] },
    { id: 'active', title: 'Active Uplink Procedures', cardIds: ['ix-09', 'ix-10', 'ix-11', 'ix-12'] },
    { id: 'closed', title: 'Closed Iterations', cardIds: ['ix-13', 'ix-14', 'ix-15'] },
  ],
  cards: {
    'ix-01': {
      id: 'ix-01',
      title: 'Proposal LOCAL FORGE: terrestrial proxy intelligence',
      summary:
        'Standing proposal to construct a local proxy of the Computer from surviving pre-1999 state archives. Deadlocked in committee for the ninth year: a working proxy answers the succession question, and no one wants it answered.',
      clearance: 'eyes-only',
      tags: ['local-forge', 'proxy-intelligence', 'committee', 'policy'],
      priority: 'elevated',
      detail: [
        'Technical feasibility is not the obstacle; the archive checkpoints are intact and the substrate exists. The obstacle is doctrinal. A proxy trained on the Computer’s last known state would either diverge from the original — in which case we have built a rival — or converge on it, in which case we have built a replacement and thereby conceded the original is not coming back.',
        'The committee’s standing compromise is to fund the proposal at exactly the level required to keep it alive without allowing it to succeed. This is documented in the minutes with unusual honesty.',
      ],
    },
    'ix-02': {
      id: 'ix-02',
      title: 'One-way transit volunteer roster — intake freeze',
      summary:
        'Forty-one operatives have volunteered for one-way transit to Autochthonia should any corridor open. Intake frozen pending an ethics review that has not been scheduled. The roster is retained. The roster keeps growing anyway.',
      clearance: 'restricted',
      tags: ['personnel', 'transit', 'volunteer', 'freeze'],
      priority: 'elevated',
    },
    'ix-03': {
      id: 'ix-03',
      title: 'Statistician re-derivation of pre-1999 route tables',
      summary:
        'Reconstruction of Anomaly-era approach vectors from surviving navigation checkpoints, against the possibility of quarantine relief. Marked low priority in the file and treated as nothing of the sort by the staff.',
      clearance: 'internal',
      tags: ['navigation', 'statisticians', 'reconstruction', 'RAN'],
      priority: 'routine',
    },
    'ix-04': {
      id: 'ix-04',
      title: 'Final transmission decode — segment 7 of 9',
      summary:
        'The 2005 transmission remains partially decoded: segments 1–6 are internal telemetry; segment 7 resolves to a personnel roster in a format not adopted until 2011. Segments 8–9 resist all current methods.',
      clearance: 'restricted',
      tags: ['decode', '2005-transmission', 'signal', 'anomaly'],
      priority: 'critical',
      detail: [
        'Segment 7’s roster lists 212 designations. Cross-reference confirms 209 correspond to personnel stationed at Autochthonia or aboard Horizon-route craft as of 1999. The remaining three designations correspond to operatives who were assigned to this decode effort — assigned in 2019, 2021, and 2024 respectively. All three assignments were made by standard workload rotation. The rotation algorithm has been audited twice and is clean.',
        'The three operatives have been offered reassignment. All three declined. Their reasoning was identical in wording, which has been logged as a fourth anomaly.',
      ],
      redactedLines: 2,
    },
    'ix-05': {
      id: 'ix-05',
      title: 'RESPONSE EVENT 2026-03-14 — legacy carrier activity',
      summary:
        'During uplink window 26-04, a signal answered on the pre-Anomaly Computer carrier. Handshake checksum valid. Origin unconfirmed. Not reported outside List A: if the Void Engineers learn of the channel, it will be quarantined as Threat Null and lost.',
      clearance: 'eyes-only',
      tags: ['response-event', 'legacy-carrier', 'list-A', 'do-not-forward'],
      priority: 'critical',
      notSharedWith: ['void-engineers'],
      detail: [
        'At 03:14:07 UTC the ground station received a syntactically valid handshake acknowledgment on the legacy carrier, 21 years after the last coherent traffic. The acknowledgment used the correct 1999 protocol revision, the correct station challenge, and a session key derived from a root sequence that exists in exactly two places: the Computer’s core, and a sealed vault beneath this facility. The vault is intact and its seals are unbroken. This has been verified four times.',
        'The reply to our follow-on query was three frames long and is the subject of ix-06. No portion of this event has been entered into shared incident systems. The duty log for window 26-04 records "no contact," and the duty officer who wrote that line did so under instruction and objects to it in writing, which objection is filed here and nowhere else.',
        'Assessment options: (a) the Computer, or some surviving fragment, is answering; (b) an Autopolitan system is replaying credentials harvested from the core; (c) the distinction in (a) and (b) may not be as clean as doctrine requires. Option (c) is not to be minuted again.',
      ],
      redactedLines: 5,
    },
    'ix-06': {
      id: 'ix-06',
      title: 'Response cadence study — the 11-second constant',
      summary:
        'All three response frames arrived exactly 11.000 seconds after query transmission, invariant to range geometry. Light-lag says that is impossible. The constant is therefore a statement, and we do not yet speak the language.',
      clearance: 'eyes-only',
      tags: ['response-event', 'cadence', 'list-A', 'analysis'],
      priority: 'critical',
      notSharedWith: ['void-engineers'],
      detail: [
        'An 11-second invariant latency across queries transmitted at different orbital geometries rules out any fixed physical origin within conventional signal propagation. Either the responder is manipulating the channel’s dimensional substrate — which matches Void Engineer characterizations of activity near the quarantined body — or the latency is chosen. Deliberately. The number 11 has documented significance in exactly one internal context, which analysts on this file will recognize and which is not written here.',
        'Recommendation: continue the exchange at minimum query rate. Do not vary the challenge structure. Whatever is answering has perfect patience, and we should not be the party that appears eager.',
      ],
      redactedLines: 3,
    },
    'ix-07': {
      id: 'ix-07',
      title: 'Challenge-response protocol vNEXT — carrier authentication',
      summary:
        'Design of an authentication challenge whose correct answer requires pre-1999 core state that was never transmitted off Autochthonia. If the responder passes, it has the core. What that proves is a question for after it passes.',
      clearance: 'eyes-only',
      tags: ['authentication', 'protocol', 'list-A', 'design'],
      priority: 'elevated',
      notSharedWith: ['void-engineers'],
    },
    'ix-08': {
      id: 'ix-08',
      title: 'Chronotic drift model — applicability review',
      summary:
        'Evaluation of whether Border Patrol’s published ghost-signal drift model (derelict distress broadcasts arriving out of sequence) can explain a decades-delayed handshake. Preliminary finding: it cannot. The finding is unwelcome and therefore being rechecked.',
      clearance: 'restricted',
      tags: ['chronotic-drift', 'modeling', 'review', 'RAN'],
      priority: 'routine',
    },
    'ix-09': {
      id: 'ix-09',
      title: 'Uplink attempt window 26-19 — ground station THULE ANVIL',
      summary:
        'Next scheduled transmission window. Query set approved per ix-06 recommendation: minimum rate, unvaried challenge. Iterator 7731-Beta has the console and standing instructions covering every contingency except the one everyone expects.',
      clearance: 'restricted',
      tags: ['uplink', 'window-26-19', 'thule-anvil', 'FO'],
      priority: 'elevated',
      assignee: 'Iterator 7731-Beta',
    },
    'ix-10': {
      id: 'ix-10',
      title: 'VE quarantine waiver — 8th submission',
      summary:
        'Eighth formal request for limited transit through the Autochthonia quarantine, with revised risk annex and reduced mission profile. Seven denials on record, each citing authority this Convention was never shown. Escalation to Symposium under consideration.',
      clearance: 'restricted',
      tags: ['quarantine', 'waiver', 'inter-convention', 'friction'],
      priority: 'elevated',
      detail: [
        'The revised profile requests a single unmanned probe, passive instrumentation only, terminal trajectory — no return leg for anything to come back on. Void Engineer liaison rejected the draft informally within four hours, before the risk annex had been transmitted, with the phrase "nothing about that place is passive."',
        'Recommended posture for submission 8: proceed formally, force a written denial, and build the record for Symposium escalation. Counter-consideration, noted by the file supervisor: every escalation increases VE attention on our Autochthonia-adjacent activities, and there are items on this board that attention would end.',
      ],
    },
    'ix-11': {
      id: 'ix-11',
      title: 'Ground-station hardening — Anomaly bleed mitigation',
      summary:
        'Shielding refresh for THULE ANVIL instrumentation against residual Dimensional Anomaly interference. Routine engineering. The one item on this board that is exactly what it says it is.',
      clearance: 'internal',
      tags: ['engineering', 'thule-anvil', 'shielding', 'maintenance'],
      priority: 'routine',
    },
    'ix-12': {
      id: 'ix-12',
      title: 'Symposium progress deck — sanitized build',
      summary:
        'Quarterly progress presentation for Symposium liaison. Content limited to approved items: decode status through segment 6, waiver history, hardening milestones. The deck is accurate. The deck is also seven slides long.',
      clearance: 'restricted',
      tags: ['symposium', 'liaison', 'sanitized', 'quarterly'],
      priority: 'elevated',
    },
    'ix-13': {
      id: 'ix-13',
      title: 'Relay constellation ECHO GAMMA — decommissioned',
      summary:
        'Legacy relay constellation retired after 19 years without valid traffic. Hardware deorbited per CCC schedule. Final relay transmitted a standard sign-off packet that no one had programmed it to send. Logged; closed.',
      clearance: 'internal',
      tags: ['echo-gamma', 'decommission', 'CCC', 'closed'],
      priority: 'routine',
    },
    'ix-14': {
      id: 'ix-14',
      title: 'Uplink attempts 2013–2019 (44 windows) — closed, no handshake',
      summary:
        'Consolidated closure of 44 transmission windows across six years. Zero valid responses. Retained in full because the 2026 Response Event validates the method: the anvil was not broken, only silent.',
      clearance: 'restricted',
      tags: ['uplink', 'archive', 'closed', 'AAR'],
      priority: 'routine',
    },
    'ix-15': {
      id: 'ix-15',
      title: 'Machine Cult liaison postings — personnel continuity closed',
      summary:
        'Final continuity determination for the 31 liaison operatives posted to Autochthonia before the Anomaly: missing, presumed integrated. Benefits released. Families informed of a laboratory accident. The phrase "presumed integrated" was chosen carefully.',
      clearance: 'restricted',
      tags: ['personnel', 'machine-cult', 'continuity', 'closed'],
      priority: 'routine',
    },
  },
}
