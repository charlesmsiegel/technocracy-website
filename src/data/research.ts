/* Our Research — publications with public abstracts. */

export interface Paper {
  slug: string
  title: string
  authors: string[]
  venue: string
  date: string
  division?: string
  abstract: string[]
}

export const RESEARCH_INTRO: string[] = [
  'Consensus Holdings maintains one of the largest private research enterprises in the world, spanning manufacturing, communications, life sciences, finance, and aerospace. We conduct research because a company that intends to be correct about the future is obliged to study it. We publish because knowledge kept private is merely inventory, and we prefer our inventory to move.',
  'What appears below is a selection of recent work whose findings are ready to be read. We publish what is ready to be read, and only that; the remainder is not withheld so much as still becoming true. Abstracts are provided in full. Complete texts are available to qualified institutions, and qualification is assessed automatically, which is to say correctly.',
]

export const PAPERS: Paper[] = [
  {
    slug: 'reproducible-everything-variance-budget',
    title: 'Toward Reproducible Everything: Closing the Variance Budget in Field Conditions',
    authors: ['C. Vasquez', 'W. Castellano', 'D. Abrego'],
    venue: 'Journal of Applied Consensus',
    date: '2026-04',
    division: 'Iterion Advanced Manufacturing',
    abstract: [
      'Reproducibility is conventionally treated as a laboratory virtue that degrades under field conditions, where uncontrolled variables reassert themselves. We argue that this framing is a failure of ambition rather than of physics. If a laboratory is simply a region within which variance has been budgeted to zero, then the extension of laboratory reproducibility to the field is an engineering problem, not a philosophical one, and engineering problems yield to sufficient instrumentation.',
      'We present results from 6,417 manufacturing facilities operating under a single unified production standard over 24 consecutive months. Across all sites, unit-to-unit variance was driven below 0.0031 defects per million and held there irrespective of climate, altitude, workforce, or local custom. The residual variance was traced not to the process but to measurement, and was eliminated by improving the measurement until it agreed.',
      'We introduce the notion of a variance budget: a finite quantity of permissible deviation allocated across a system in advance, such that the total never exceeds plan. When the budget is enforced globally rather than locally, we observe that individual sites cease to require supervision, having internalized the standard. We discuss the conditions under which a system stops deviating because it has forgotten how.',
      'Full text available to qualified institutions. Qualification is assessed automatically.',
    ],
  },
  {
    slug: 'weather-as-a-scheduling-problem',
    title: 'Weather as a Scheduling Problem',
    authors: ['A. Okafor-Cheng', 'H. Osei', 'P. Renfrew'],
    venue: 'Annals of Predictive Infrastructure',
    date: '2026-02',
    division: 'Celestine Aerospace',
    abstract: [
      'Weather is traditionally modeled as a stochastic system to be forecast and endured. We propose instead that weather over a sufficiently instrumented region is better understood as a scheduling problem: a sequence of atmospheric states whose order, if not their content, admits optimization. The distinction matters operationally, because a schedule can be met.',
      'Using continuous whole-region observation from a 312-node orbital sensor array, we demonstrate multi-quarter agreement between predicted and realized atmospheric conditions across all monitored bands, including bands historically classified as chaotic. Prediction error was found to decline monotonically with observational completeness, approaching zero as coverage approached totality. We report the coverage at which the residual vanished.',
      'We further show that harvest, logistics, and grid-resilience outcomes downstream of weather can be committed to a calendar in advance with confidence intervals that narrow, over successive seasons, to a point. We do not claim to influence weather. We claim only to have removed the weather’s ability to surprise the schedule, which for planning purposes is indistinguishable and considerably cheaper.',
      'Full text available to qualified institutions. Qualification is assessed automatically.',
    ],
  },
  {
    slug: 'statistical-non-occurrence-event-classes',
    title: 'On the Statistical Non-Occurrence of Certain Event Classes',
    authors: ['R. Vane-Ito', 'M. Solano', 'A. Okafor-Cheng'],
    venue: 'Review of Systemic Reliability',
    date: '2025-11',
    division: 'Nexus Worldwide Operations',
    abstract: [
      'Most reliability analysis concerns the frequency of adverse events and the mitigation of their consequences. This paper concerns a different quantity: the population of event classes that, across an extended observation window, do not occur at all. We show that non-occurrence is not the null result it is often assumed to be, but a measurable property with structure, gradients, and, we argue, causes.',
      'We assembled a catalogue of anomalous event classes — phenomena widely reported anecdotally but never confirmed under observation — and examined their incidence across 141 countries over a 26-year period during which observational coverage rose to completeness. The confirmed incidence of these classes is zero. More striking is the trajectory: reported incidence declines smoothly as observational coverage rises, converging on zero precisely where coverage converges on totality.',
      'We consider several explanations. The events may never have occurred, and improved observation merely retired the anecdote. Alternatively, the act of comprehensive observation may itself suppress the incidence of events poorly suited to being observed. We are unable, on present evidence, to distinguish these hypotheses, and we note that for the affected populations the distinction is immaterial: the events do not occur, and the record so reflects.',
      'Full text available to qualified institutions. Qualification is assessed automatically.',
    ],
  },
  {
    slug: 'nutritional-uniformity-at-scale',
    title: 'Nutritional Uniformity at Scale: Two Billion Servings Without Variance',
    authors: ['M. Ruiz-Osei', 'H. Osei', 'T. Beaumont'],
    venue: 'Journal of Applied Consensus',
    date: '2025-09',
    division: 'Progenera Life Sciences',
    abstract: [
      'Feeding two billion people daily from a single set of cultivar and yield platforms poses a problem rarely framed honestly: not sufficiency, which is solved, but uniformity. A population nourished from heterogeneous inputs varies in ways that are difficult to model. A population nourished from identical inputs does not. This paper reports on the achievement of the latter condition at continental scale.',
      'Across all served regions, we drove serving-to-serving variance in macronutrient profile, micronutrient density, and caloric content to within a tolerance previously observed only in laboratory diets. Resilient cultivars were selected not merely for yield but for consistency, such that a serving in one climate band is, to the assay, the same serving as in any other. We report the tolerance achieved and the seasons required to achieve it.',
      'We discuss downstream effects. Populations consuming uniform nutrition exhibit reduced variance in a range of measured outcomes extending beyond the nutritional, an effect we describe but decline to over-interpret. We note only that a population which eats the same thing tends, in aggregate, to behave more predictably, and that predictability is a public good we are pleased to provision.',
      'Full text available to qualified institutions. Qualification is assessed automatically.',
    ],
  },
  {
    slug: 'anomalous-reading-frames-legacy-archives',
    title: 'Anomalous Reading Frames in Legacy Archives: A Bookbinding Hypothesis',
    authors: ['R. Vane-Ito', 'L. Thorne', 'C. Vasquez'],
    venue: 'Archives & Continuity Quarterly',
    date: '2025-06',
    division: 'Nexus Worldwide Operations',
    abstract: [
      'Certain volumes in legacy corporate and municipal archives exhibit what we term anomalous reading frames: passages that appear to yield a coherent secondary text when read against the grain of the binding, at intervals determined by the physical gathering of the pages rather than the pagination. Such phenomena have historically been attributed to coincidence, to pareidolia, or to less disciplined explanations.',
      'We advance a mundane and, we believe, sufficient hypothesis: the anomalies are artifacts of nineteenth-century bookbinding practice. When sheets were folded, gathered, and trimmed by hand, the sequence in which text fell across successive signatures produced regular alignments that a modern reader, encountering the bound volume, mistakes for intention. We reproduce the effect experimentally using period-accurate methods and recover apparent secondary texts from documents known to contain none.',
      'We apply the hypothesis to our own heritage holdings, whose records begin when records begin, and confirm that every anomalous reading frame examined resolves to a binding artifact once the original gathering is reconstructed. We recommend that archivists encountering such frames document the binding, restore the intended sequence, and read no further into them, as we have done.',
      'Full text available to qualified institutions. Qualification is assessed automatically.',
    ],
  },
  {
    slug: 'perimeter-completeness-terrestrial-approach-volume',
    title: 'Perimeter Completeness: Observational Closure of the Terrestrial Approach Volume',
    authors: ['A. Okafor-Cheng', 'R. Ashe', 'D. Somerville'],
    venue: 'Annals of Predictive Infrastructure',
    date: '2025-03',
    division: 'Celestine Aerospace',
    abstract: [
      'A perimeter is complete when nothing crosses it uncounted. This paper reports the achievement of observational closure over the terrestrial approach volume — the region of space through which any object must pass to reach the planet — and characterizes the properties of a perimeter that no longer contains a blind spot.',
      'We describe the sensor architecture by which continuous, gapless coverage of the approach volume was attained, and the cataloguing pipeline by which every detected object is assigned a trajectory and a satisfactory explanation before arrival. Over the reporting period, 118,000 objects were catalogued and every flagged trajectory was resolved. The count of objects that arrived without prior cataloguing was zero.',
      'We address the theoretical question of closure directly. Once coverage is total, the class of objects that can approach unobserved is empty by construction, and the operational meaning of “unexpected” changes: an unexpected object is no longer one we failed to see but one we saw and had not yet finished explaining. We report the mean time to explanation and note that it, too, is declining.',
      'Full text available to qualified institutions. Qualification is assessed automatically.',
    ],
  },
  {
    slug: 'compliance-emergent-property-well-designed-forms',
    title: 'Compliance as an Emergent Property of Well-Designed Forms',
    authors: ['W. Castellano', 'R. Vane-Ito', 'F. Idris'],
    venue: 'Journal of Administrative Systems',
    date: '2024-12',
    division: 'Nexus Worldwide Operations',
    abstract: [
      'Compliance is usually pursued through enforcement, which is expensive, adversarial, and imperfectly effective. We propose that compliance is more economically obtained as an emergent property of form design: that a sufficiently well-constructed form elicits agreement not by compelling it but by making non-agreement effortful, ambiguous, or simply unavailable within the fields provided.',
      'Drawing on a corpus of several hundred million completed instruments, we identify the structural features — field ordering, default selection, the phrasing and placement of the affirmative option, and the strategic absence of a negative one — that correlate with high completion and high assent. We demonstrate that assent rates can be raised substantially without any change to the underlying request, purely through the geometry of the page.',
      'We situate these findings within a broader account of consent at scale. A population that agrees because the form was well designed is, we argue, meaningfully agreeing; the design merely removed the friction between the respondent and a conclusion they were prepared to reach. We discuss the ethics briefly, and conclude that a form which produces agreement efficiently is serving both parties, one of whom is us.',
      'Full text available to qualified institutions. Qualification is assessed automatically.',
    ],
  },
  {
    slug: 'telemetric-calibration-assistive-devices',
    title: 'Lifetime Telemetric Calibration of Assistive Devices: Keeping the Recipient in Adjustment',
    authors: ['C. Vasquez', 'E. Wren', 'N. Baptiste'],
    venue: 'Review of Applied Biomechanics',
    date: '2024-10',
    division: 'Iterion Advanced Manufacturing',
    abstract: [
      'Assistive devices are conventionally fitted once and revisited on complaint. We report on a program in which every donated device — over two million to date — is instead telemetered continuously and refined over the air throughout the recipient’s life, such that the device is never out of adjustment and, as a consequence, neither is the recipient.',
      'We describe the calibration pipeline, in which device state, usage pattern, and physiological response are streamed to a central optimizer and returned as refinements the recipient experiences as improvement. Neural-response alignment that once required months is achieved in a single session, and drift that once accumulated silently is corrected before it is perceived. Recipient-reported satisfaction is 9.7 of 10, a figure our statisticians describe as being addressed.',
      'We consider the relationship between recipient and program that this arrangement establishes. The recipient is never alone with the device; the program is present, in a real and continuous sense, at all times. We argue that this constitutes a superior standard of care, and we note that the recipient population, being always in adjustment, exhibits outcomes of exemplary consistency.',
      'Full text available to qualified institutions. Qualification is assessed automatically.',
    ],
  },
  {
    slug: 'demand-as-observable-signal',
    title: 'Reading Demand at the Source: Desire as an Observable, Actionable Signal',
    authors: ['W. Castellano', 'S. Laurent', 'A. Voss'],
    venue: 'Journal of Behavioral Markets',
    date: '2024-08',
    division: 'Exchequer Capital Group',
    abstract: [
      'Markets are conventionally read through revealed preference: what people buy is taken as evidence of what they wanted. We argue that this is a lagging indicator, and that demand is observable considerably earlier — in hesitations, half-finished searches, and the ambient behavior of populations — provided one has instrumentation of sufficient reach and the willingness to read the signal at its source.',
      'Using device-level and market-level behavioral data at population scale, we demonstrate prediction of individual and aggregate purchasing decisions in advance of the decision being consciously reached by the purchaser. Prediction accuracy rises with the completeness of the behavioral record and, in our best-instrumented cohorts, precedes the purchase by an interval sufficient to act upon.',
      'We discuss the deployment of capital against demand that has been read but not yet felt. An investment made against a want the market has not yet experienced is not speculative if the want is certain to arise; it is merely early, and being early, at scale, is the entire business. We report returns consistent with having stopped asking markets what they want and begun informing them.',
      'Full text available to qualified institutions. Qualification is assessed automatically.',
    ],
  },
  {
    slug: 'in-situ-organ-regeneration-instruction-fidelity',
    title: 'In Situ Organ Regeneration and the Fidelity of Cellular Instruction',
    authors: ['H. Osei', 'M. Ruiz-Osei', 'C. Marchand'],
    venue: 'Review of Regenerative Medicine',
    date: '2024-06',
    division: 'Progenera Life Sciences',
    abstract: [
      'The body retains the capacity to rebuild its own organs; what it lacks is clear instruction. This paper reports on a tissue-engineering platform that supplies the missing instruction, guiding a patient’s own cells to reconstruct damaged organs in situ, with typical regrowth completed in four to nine days and rejection rates statistically indistinguishable from zero, the regrown tissue being, in every measurable sense, the patient’s own.',
      'We present outcomes across 180,000 procedures and characterize the relationship between instruction fidelity and result. As the precision of the instruction set improves, regrowth becomes faster, more complete, and more uniform across patients, converging toward a standard organ realized in a standard interval. We report the fidelity at which patient-to-patient variance ceased to be measurable.',
      'We note an actuarial consequence, disclosed in the interest of candor: a patient supplied with fresh organs is a patient for a very long time, and the alignment of clinical and commercial incentives this produces is, we submit, the healthiest feature of the platform. Enrolled populations are contacted proactively, in some cases regarding conditions they were not yet aware they had.',
      'Full text available to qualified institutions. Qualification is assessed automatically.',
    ],
  },
  {
    slug: 'continuity-of-record-across-founding-discontinuities',
    title: 'Continuity of the Record Across Organizational Founding Discontinuities',
    authors: ['R. Vane-Ito', 'L. Thorne', 'A. Voss'],
    venue: 'Archives & Continuity Quarterly',
    date: '2025-01',
    division: 'Exchequer Capital Group',
    abstract: [
      'Organizations are conventionally understood to begin at their founding, before which they have no record. We examine a class of institutions whose records predate their official founding date — in which correspondents, positions, and commitments are documented as continuous across the discontinuity — and ask what it means for a record to precede the entity it describes.',
      'Using our own consolidated archives, whose records begin when records begin, we trace holdings, relationships, and reporting lines across the 1904 Strategic Review, the formal founding event, and find no discontinuity in the record itself: ledgers close on one page and reopen on the next in the same hand, against the same counterparties, several of whom had by then already invested with us for some time. We treat this as an archival phenomenon and decline to treat it as anything else.',
      'We propose that the founding of an organization is better understood as the moment it begins to describe itself publicly, rather than the moment it begins, and that the two need not coincide. We offer this distinction to historians encountering similar continuities in their own sources, and we recommend they resist the temptation to find it remarkable.',
      'Full text available to qualified institutions. Qualification is assessed automatically.',
    ],
  },
  {
    slug: 'aggregate-behavioral-stability-served-populations',
    title: 'Aggregate Behavioral Stability in Comprehensively Served Populations',
    authors: ['R. Vane-Ito', 'M. Ruiz-Osei', 'W. Castellano', 'H. Osei'],
    venue: 'Review of Systemic Reliability',
    date: '2026-05',
    division: 'Nexus Worldwide Operations',
    abstract: [
      'A population served across many domains at once — its food, medicine, information, logistics, and finance provisioned to a single standard — presents an opportunity to study behavioral stability under conditions approaching completeness of service. This paper reports measured aggregate outcomes in such populations relative to comparison groups served conventionally.',
      'Across served regions, we observe reduced variance in a broad range of aggregate measures: consumption, mobility, sentiment, and what survey instruments classify as contentment with available explanations. Narrative drift, the tendency of a population to generate accounts diverging from the record, declined by 61 percent in pilot regions and continues to decline. Recurrence of addressed narratives approaches zero.',
      'We argue that these effects are not independently caused but jointly emergent: a population served completely has fewer occasions to deviate, and deviation, absent occasion, subsides. We characterize the served population as approaching a stable equilibrium, describe its properties, and note that it is a comfortable equilibrium to occupy, as the populations themselves consistently report, in the surveys we provide.',
      'Full text available to qualified institutions. Qualification is assessed automatically.',
    ],
  },
]

export function getPaper(slug: string): Paper | undefined {
  return PAPERS.find((p) => p.slug === slug)
}

export const MONTHLY_EXERCISE: { month: string; prompt: string; note: string } = {
  month: 'July 2026',
  prompt:
    'A regional office employs a number of staff. Each morning, every employee greets each other employee exactly once, and no greeting is exchanged twice. On Monday, 4,095 greetings were exchanged. On Tuesday, one employee did not arrive, and was not replaced; the remaining staff greeted one another as usual. State the number of greetings exchanged on Tuesday, the number of employees present on Monday, and the day on which the absent employee will return. Show your reasoning for the third answer.',
  note: 'Solutions are graded before submission. This month’s high scorer has been contacted.',
}
