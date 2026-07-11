import type { Board } from '../types'

export const progenitorsBoard: Board = {
  convention: 'progenitors',
  codename: 'FERAL BLOOM',
  designation: 'DAMAGE CONTROL CASE FILE PGN-2021-0117',
  banner: 'PROGENITORS INTERNAL — DAMAGE CONTROL OVERSIGHT — BIOSAFETY ANNEX ROTA ONLY',
  brief:
    'FERAL BLOOM tracks the uncontained propagation of specimen line THV-9 ("Thornveldt"): a gene-edited chimeric predator chassis (canid frame, cephalopod-derived adaptive dermis, engineered symbiote flora providing wound closure and scent masking) originating from Facility GREEN WILLOW, a Damage Control-flagged site. Official containment loss date: March 2021. Field population estimates are currently reconciled against that date. Where reconciliation fails, see the cards marked accordingly, and see them quietly. Public cover: the Northern Range Invasive Predator Response Unit.',
  columns: [
    { id: 'flagged', title: 'Flagged Growth', cardIds: ['pg-01', 'pg-02', 'pg-03'] },
    { id: 'culture-review', title: 'Under Culture Review', cardIds: ['pg-04', 'pg-05', 'pg-06', 'pg-07', 'pg-08', 'pg-16'] },
    { id: 'field', title: 'Active Field Work', cardIds: ['pg-09', 'pg-10', 'pg-11', 'pg-12'] },
    { id: 'catalogued', title: 'Neutralized / Catalogued', cardIds: ['pg-13', 'pg-14', 'pg-15'] },
  ],
  cards: {
    'pg-01': {
      id: 'pg-01',
      title: 'Trophic cascade projection — boreal corridor 2027–2031',
      summary:
        'Five-year ecological impact model for the corridor if current THV-9 spread continues. Deer populations decline within tolerances; apex-competitor displacement does not. The wolves are leaving. Sleeper ecologists will notice the wolves leaving.',
      clearance: 'restricted',
      tags: ['THV-9', 'modeling', 'ecology', 'projection'],
      priority: 'elevated',
    },
    'pg-02': {
      id: 'pg-02',
      title: 'Baseline-canid introgression risk — study charter',
      summary:
        'Charter for a study of THV-9 cross-breeding with wild and domestic canids. The dermis genes are dominant. The charter’s risk section uses the word "irreversible" twice, which Oversight has asked to be rephrased before circulation.',
      clearance: 'restricted',
      tags: ['THV-9', 'genetics', 'introgression', 'charter'],
      priority: 'elevated',
    },
    'pg-03': {
      id: 'pg-03',
      title: 'Public taxonomy decision — "northern hybrid canid"',
      summary:
        'Coordination with cooperative journals to establish the specimen line as a natural coyote-wolf hybrid variant in the literature. Two papers placed; a third, describing the dermis as "unprecedented," is being revised by its author with our editorial assistance.',
      clearance: 'internal',
      tags: ['cover-story', 'taxonomy', 'the-feed', 'PSYOPS'],
      priority: 'routine',
    },
    'pg-04': {
      id: 'pg-04',
      title: 'Sighting-map correlation — wave 6 (118 credible events)',
      summary:
        'Geospatial correlation of credible sightings, livestock incidents, and trail-camera captures. The distribution is coherent, radial, and centered 40 km from Facility GREEN WILLOW. The radius, worked backward at observed dispersal rates, is the problem.',
      clearance: 'restricted',
      tags: ['sightings', 'geospatial', 'wave-6', 'IG'],
      priority: 'elevated',
      detail: [
        'Wave 6 adds 31 events, including the first confirmed captures east of the divide. Dispersal modeling from the March 2021 containment-loss date requires a sustained spread rate of 210 km per year, which exceeds the chassis design maximum by a factor of three. Alternative fit: a spread rate within design parameters, beginning from a containment-loss date in 2013.',
        'The alternative fit is flagged for Culture Review under pg-05. Wave 6 distribution maps are held at this clearance; the underlying date arithmetic is not.',
      ],
    },
    'pg-05': {
      id: 'pg-05',
      title: 'Population model rebase — founding-date reconciliation',
      summary:
        'Effective population and allele-diversity estimates only converge if the founding release predates the official 2021 escape by approximately eight years. The model is correct. The official date is also correct. One of these statements is administrative.',
      clearance: 'eyes-only',
      tags: ['THV-9', 'population-genetics', 'damage-control', 'rebase'],
      priority: 'critical',
      notSharedWith: 'symposium',
      detail: [
        'Allele diversity across 44 recovered specimens indicates a minimum of six founding breeding pairs and roughly eleven generations in the wild. Eleven generations cannot fit inside five years at the observed reproductive interval, even crediting the parthenogenic fallback (see pg-06). The genetics say 2013, plus or minus fourteen months.',
        'Facility GREEN WILLOW’s 2013 records show a Damage Control audit closed as "no findings" and an inventory reconciliation signed by a supervisor who transferred out the following quarter. The specimen ledger for that year was archived under a retention exception that Damage Control itself authorized.',
        'Symposium exposure of an eight-year unreported containment loss — sustained by our own oversight arm — would end Damage Control’s independent audit authority and invite external review of every flagged facility. The rebase therefore proceeds under this file only. The model runs are named after weather patterns and stored with the meteorology group.',
      ],
      redactedLines: 4,
    },
    'pg-06': {
      id: 'pg-06',
      title: 'Necropsy panel THV-9/44 — parthenogenic fallback confirmed',
      summary:
        'Specimen 44 necropsy confirms functional parthenogenesis under mate scarcity — a fallback pathway present in the design specification as DORMANT, DO NOT ACTIVATE. It is active. Change-control has no record of the activation.',
      clearance: 'restricted',
      tags: ['necropsy', 'parthenogenesis', 'specimen-44', 'design-drift'],
      priority: 'critical',
      detail: [
        'The fallback pathway is expressed cleanly, without the degradation markers expected from spontaneous derepression. Two interpretations: eleven generations of selection un-silenced it, or it was never silenced in the released cohort. The second interpretation implies an intentional act by a GREEN WILLOW staff member with sequence-level access, and is being pursued as a personnel question as much as a biological one.',
        'Practical consequence either way: culling males does not bound the population. Field targeting priorities revised accordingly under pg-11.',
      ],
    },
    'pg-07': {
      id: 'pg-07',
      title: 'Evidence procurement ledger — trail cameras and trophies',
      summary:
        'Damage Control continues purchasing physical evidence from the Sleeper market: 340 trail cameras, uncounted SD cards, hunting-forum takedowns, and one taxidermied juvenile acquired at estate auction for eleven thousand dollars. The ledger goes back further than this case file does.',
      clearance: 'eyes-only',
      tags: ['damage-control', 'procurement', 'evidence', 'CCC'],
      priority: 'elevated',
      notSharedWith: 'symposium',
      detail: [
        'The procurement ledger was requested for CCC cost-reconciliation and arrived with entries beginning in 2014 — seven years before the official containment loss. Entries are categorized under "regional cryptid-rumor management," a budget line that exists at no other facility. Annual spend under that line tracks the pg-05 population curve with an r-squared the Statisticians describe as "embarrassing."',
        'Damage Control has been buying the escape for a decade. This card documents that sentence and restricts it to this board. Reconciliation of the ledger into official CCC accounting is deferred until pg-05 resolves the founding-date question — that is, indefinitely.',
      ],
      redactedLines: 3,
    },
    'pg-08': {
      id: 'pg-08',
      title: 'Symbiote dermis viability — cold-chain failures',
      summary:
        'Recovered dermis samples lose culture viability within 30 hours despite specification-compliant cold chain. The symbiote flora appears to require a live host, or at minimum a recently opinionated one. Field kits revised; complaints noted.',
      clearance: 'restricted',
      tags: ['symbiote', 'cold-chain', 'sampling', 'lab'],
      priority: 'routine',
    },
    'pg-09': {
      id: 'pg-09',
      title: 'Sample recovery sweep — Cascades grid N-7 through N-11',
      summary:
        'Systematic recovery sweep across five grid squares: scat, den sites, kill remnants, and camera retrieval. Teams pose as the cover unit’s field biologists, which most of them were before this assignment made the word "were" appropriate.',
      clearance: 'restricted',
      tags: ['field-op', 'sampling', 'grid-sweep', 'FO'],
      priority: 'elevated',
      assignee: 'Field Director Ruiz-Osei, M. (Damage Control)',
    },
    'pg-10': {
      id: 'pg-10',
      title: 'Cover program upkeep — Invasive Predator Response Unit',
      summary:
        'Staffing, funding, and press posture for the public-facing cover program. The Unit now receives genuine federal grant money and unsolicited job applications, and has been asked to present at a wildlife conference. Attendance approved: nothing maintains a cover like an award.',
      clearance: 'restricted',
      tags: ['cover-story', 'PSYOPS', 'staffing', 'terranorming'],
      priority: 'elevated',
    },
    'pg-11': {
      id: 'pg-11',
      title: 'Live-capture attempt — breeding designate MOTHER-4',
      summary:
        'Third capture attempt against the eastern corridor’s primary breeding female. Attempts one and two failed against the dermis camouflage and, respectively, one team’s equipment and one team’s nerve. AFET 3 authorized; the specimen is wanted intact and so are the teams.',
      clearance: 'restricted',
      tags: ['MOTHER-4', 'live-capture', 'AFET-3', 'FO'],
      priority: 'critical',
      detail: [
        'MOTHER-4 is the presumptive matriarch of the eastern population and the best available source for generational tissue series. Behavioral file indicates she has learned the difference between hunters, hikers, and our recovery teams, and reserves ambush behavior exclusively for the third category. The design specification lists threat-discrimination learning as a feature. The specification authors are no longer reachable for congratulation.',
        'Attempt three uses a scent-null perimeter, cold equipment with no facility provenance, and personnel with no prior deployment against the line. If attempt three fails, the standing recommendation converts from capture to termination, and the tissue series will be assembled the other way.',
      ],
      redactedLines: 2,
    },
    'pg-12': {
      id: 'pg-12',
      title: 'CLE liaison — wildlife-attack reclassification pipeline',
      summary:
        'Standing arrangement with regional law enforcement to route unusual predation reports through the cover unit before public filing. Nine incidents reclassified this quarter as bear, cougar, cougar, bear, bear, dog pack, bear, unknown, and bear. The coroner in the "unknown" county has been Attuned.',
      clearance: 'restricted',
      tags: ['CLE', 'reclassification', 'attunement', 'CCC'],
      priority: 'elevated',
    },
    'pg-13': {
      id: 'pg-13',
      title: 'Specimens 001–019 — recovered or destroyed; logs sealed',
      summary:
        'The original 2021-acknowledged cohort: all nineteen catalogued specimens accounted for, necropsied, and incinerated. This closure is complete, accurate, and the reason the official containment-loss narrative held as long as it did. Sealed to this board.',
      clearance: 'restricted',
      tags: ['closure', 'incineration', 'cohort-2021', 'catalogued'],
      priority: 'routine',
    },
    'pg-14': {
      id: 'pg-14',
      title: 'GREEN WILLOW technician disclosure risk — resolved',
      summary:
        'A former facility technician approached a journalist regarding "the 2013 thing." Subject accepted relocation, a research position at a partner institute, and a revised recollection of his employment dates. Follow-up wellness checks are green. He is happier now. This is documented.',
      clearance: 'restricted',
      tags: ['personnel', 'disclosure-risk', 'adjustment', 'resolved'],
      priority: 'routine',
      notSharedWith: 'symposium',
    },
    'pg-15': {
      id: 'pg-15',
      title: '2019 "wolf-hybrid" viral video — de-amplified',
      summary:
        'The 2019 upload showing an adult THV-9 crossing a trailhead in daylight has been algorithmically de-amplified, re-captioned as a costumed hoax, and buried under identical hoax videos we commissioned. The original uploader now works for a subsidiary and films nothing.',
      clearance: 'internal',
      tags: ['the-feed', 'de-amplification', 'hoax-seeding', 'closed'],
      priority: 'routine',
    },
    'pg-16': {
      id: 'pg-16',
      title: 'Reagent diversion — Damage Control supervisor, recipient unconfirmed',
      summary:
        'Inventory reconciliation shows repeated small-batch withdrawals of cold-chain reagent stock signed out by a single Damage Control supervisor against field-loss codes that match no logged operation. The withdrawals correlate with unscheduled meetings at a highway rest stop forty minutes from Facility GREEN WILLOW. The recipient has not been identified. The supervisor has not been asked.',
      clearance: 'eyes-only',
      tags: ['damage-control', 'diversion', 'personnel', 'IG'],
      priority: 'critical',
      notSharedWith: 'symposium',
      detail: [
        'Six withdrawals over four months, each under the single-signature threshold that would otherwise require a countersignature. Reagent class matches THV-9 dermis-stabilization stock, which has no approved use outside this case file. The supervisor’s authorization to hold that stock is itself a residue of the pg-05 rebase and was never revoked.',
        'A field asset who half-followed one meeting reports a civilian vehicle, an unmarked cooler exchanged in under ninety seconds, and a payment the asset could not characterize beyond "not currency, or not only currency." The asset was recalled before the vehicle’s plate could be logged. Reassignment of a second asset is pending budget, which is itself a joke that has stopped being funny.',
        'Confronting the supervisor directly risks accelerating whatever this is; not confronting him risks the same. IG recommends continued passive observation. Damage Control’s own leadership has not been briefed, for reasons that should already be obvious.',
      ],
      redactedLines: 3,
    },
  },
}
