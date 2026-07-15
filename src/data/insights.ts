/* Insights — division-bylined thought leadership. Bylines are drawn from
   src/data/leadership.ts; this is the same voice as the newsroom, at
   essay length rather than announcement length. */

import type { InsightArticle } from './types'

export const INSIGHTS_INTRO: string[] =
  [
    'Perspective from the people who run the five divisions, published on our schedule rather than the news cycle\'s. Longer than a press release, shorter than a research paper, and — we like to think — considerably more useful than either.',
  ]

const INSIGHTS_RAW: InsightArticle[] = [
  {
    slug: 'the-measurable-employee',
    title: 'The Measurable Employee',
    division: 'iteration-x',
    author: 'Cornelius Vasquez, Executive Comptroller',
    date: '2026-05-11',
    category: 'Workforce',
    summary:
      'What manufacturing discipline looks like when it is applied to people instead of parts — and why the two turn out to respond to the same instruments.',
    body: [
      'For most of industrial history, "productivity" was something you measured at the level of the line, the shift, or the plant — never the person. We found this strange. Every other input to a manufacturing process is measured at the finest grain the instrument allows, because coarse measurement produces coarse improvement. People are not an exception to this; they are simply the input we had, historically, worse instruments for.',
      'Iterion now tracks over four hundred individual performance signals across our salaried and hourly workforce, feeding the same variance-budget framework we apply to production tolerances. The results mirror what we see on the factory floor: variance shrinks fastest not when you punish outliers, but when you give every employee a live readout of exactly where they sit relative to the standard. People do not resent being measured. They resent being measured badly.',
      'We are frequently asked whether this creates pressure. It does — the same pressure a torque spec creates on a bolt. A bolt tightened to spec does not experience the spec as punitive; it experiences it as the reason it is still in place after 97 consecutive on-schedule quarters. We think the analogy holds better than most people are initially comfortable with, and we think that discomfort fades faster than people expect.',
    ],
  },
  {
    slug: 'why-your-supply-chain-already-knows',
    title: 'Why Your Supply Chain Already Knows What You\'ll Order',
    division: 'syndicate',
    author: 'Dominic Ferro, Chief Executive Officer, Mercury Logistics',
    date: '2026-04-22',
    category: 'Logistics',
    summary:
      'Same-hour delivery isn\'t a shipping problem. It\'s a forecasting problem that happens to end with a truck.',
    body: [
      'Ask most logistics executives what "same-day" requires and they will describe warehouse density: enough inventory, close enough to enough customers, that the physical distance collapses. This is true, and it is also the easy 80% of the problem. The hard 20% is knowing what to stock before the order exists.',
      'Mercury\'s forecasting models ingest purchase history, browsing behavior, seasonal patterns, and a few hundred other signals we consider standard for the industry at this point. What is less standard is how far ahead the model commits: for our highest-confidence SKUs, replenishment triggers before the order that will consume the inventory has been placed. We are not predicting demand in the abstract. We are predicting a specific customer\'s specific next order, and pre-positioning against it.',
      'This occasionally produces a delivery that arrives before the confirmation email — a timing gap our engineering team has been asked, repeatedly, to close. We have chosen instead to leave it, on the theory that a customer who notices the gap once becomes a customer who trusts the service permanently. So far, the theory has held.',
    ],
  },
  {
    slug: 'the-end-of-the-waiting-list',
    title: 'The End of the Waiting List',
    division: 'progenitors',
    author: 'Dr. Henrik Osei, Chief Clinical Officer',
    date: '2026-03-30',
    category: 'Life Sciences',
    summary:
      'Regenerative medicine didn\'t just get faster. It restructured the economics of scarcity that organ waiting lists were built around.',
    body: [
      'A waiting list exists because supply cannot meet demand within an acceptable timeframe. Historically, in organ and tissue medicine, this was treated as a fact of biology: you wait because a donor match takes time, and time is not a resource anyone can manufacture. We disagreed with the premise before we had the platform to disprove it.',
      'FACADE does not solve the donor-matching problem. It removes the need for it. Regrowth is drawn from the patient\'s own tissue, matched by definition, with typical regeneration measured in days rather than the months or years a transplant waiting list implies. We have restored full organ function to more than 180,000 patients to date, at rejection rates statistically indistinguishable from zero — because, in every measurable sense, the regrown tissue is the patient\'s own.',
      'The economics follow the biology. A therapy that removes the scarcity constraint removes the waiting list, and a system built around allocating scarce transplants has to be rebuilt around something else entirely: throughput, not triage. We are still learning what a hospital looks like when nobody on the ward is waiting for anything but the calendar.',
    ],
  },
  {
    slug: 'what-the-sky-already-knows',
    title: 'What the Sky Already Knows',
    division: 'void-engineers',
    author: 'Director Amara Okafor-Cheng, Fleet Operations',
    date: '2026-05-02',
    category: 'Aerospace',
    summary:
      'With the Sentinel constellation at full strength, "we didn\'t see it coming" is no longer an available excuse for anyone.',
    body: [
      'For most of the satellite era, "global coverage" meant global coverage most of the time, with predictable gaps at the poles, over open ocean, and during handoff windows between constellations. Those gaps were treated as an engineering inevitability. We treated them as a target.',
      'Sentinel\'s 312 satellites now provide continuous, gapless observation of the entire planet and its orbital approaches — climate telemetry for the Climate Change Reversal Initiative, navigation backup for 44 national governments, and full-spectrum monitoring for our own Perimeter Services group. There is no window, geographic or temporal, in which an object of interest can approach Earth unobserved.',
      'The operational discipline this enables is less about the satellites than about what happens after they see something. Every flagged object gets catalogued, classified, and assigned a disposition before it arrives close enough to matter — which is a lower bar for "explained" than most agencies operate under, and a bar we intend to keep lowering. Coverage without classification speed is just a very expensive photograph.',
    ],
  },
  {
    slug: 'trust-is-a-design-problem',
    title: 'Trust Is a Design Problem',
    division: 'new-world-order',
    author: 'Dr. Rosalind Vane-Ito, Provost, Ivory Tower Institute',
    date: '2026-02-18',
    category: 'Media & Communications',
    summary:
      'Media literacy is usually framed as a defense against bad information. We think that framing gets the psychology backwards.',
    body: [
      'The standard media-literacy curriculum teaches people to distrust: check the source, question the claim, look for the tell. This produces a population that is suspicious of everything, which sounds protective and functions, in practice, as exhausting. Exhausted people do not evaluate more carefully. They evaluate less, and default to whichever explanation requires the least additional work.',
      'The Community Standards & Media Literacy Partnership takes a different approach: instead of teaching suspicion, we teach recognition — helping people notice when an explanation already matches what they, on reflection, believe to be true. This produces less friction and, we have found, considerably more retention. A healthy information environment is like a well-kept garden: it is defined as much by what is gently removed as by what is grown.',
      'Sixty-one percent narrative-drift reduction across our pilot communities is the headline metric, but the number we watch more closely is completion. People finish this curriculum at a rate no comparable program approaches, because it does not ask them to distrust the world. It asks them to notice they already agree with us, which turns out to be a much easier thing to ask of anyone.',
    ],
  },
  {
    slug: 'feeding-nine-billion',
    title: 'Feeding Nine Billion Without Asking the Weather',
    division: 'progenitors',
    author: 'Dr. Priya Ananda-Okonkwo, Research Director, Department of Advanced Agriculture',
    date: '2026-01-14',
    category: 'Agriculture',
    summary:
      'Crop resilience research used to mean adapting to climate variability. We stopped treating variability as the input we had to accept.',
    body: [
      'Traditional agronomy treats weather as an independent variable: you breed for drought tolerance, for flood tolerance, for heat tolerance, and you hope the growing season lands somewhere inside the range you bred for. This is a reasonable approach if you believe the growing season is something that happens to you. We do not.',
      'The Department of Advanced Agriculture\'s cultivars are field-tested across every climate band we could construct, and yield gains of 12 to 31% hold even in regions that experienced drought, flooding, and non-standard growing conditions within the same season — in a few documented cases, cultivars completed two full growing cycles in a single season. The house style hasn\'t changed since our earliest botanical cloning work: breed for the field you actually have, not the one the textbook describes. Our Seed Assurance program now supports 1.4 million farming operations with certified genetics, renewal scheduling, and comprehensive usage monitoring.',
      'Hunger is not a mystery. It is a logistics problem with a biology bottleneck, and we are very good at both. Our crops grow where crops are needed. We simply stopped accepting the weather\'s opinion as final, and the yield data has been agreeing with us for six consecutive seasons.',
    ],
  },
  {
    slug: 'the-desire-engine-explained',
    title: 'The Desire Engine, Explained',
    division: 'syndicate',
    author: 'Eris Design Group Product Office',
    date: '2026-04-05',
    category: 'Consumer Technology',
    summary:
      'How the Virtuous 8 surfaces what you want before you\'ve finished wanting it — and why that\'s a harder engineering problem than it sounds.',
    body: [
      'Prediction in consumer technology usually means pattern-matching: you bought this, people who bought this also bought that, here is that. The Desire Engine is built on a different premise — that most purchase decisions are preceded by a measurable period of hesitation, and that the content of the hesitation is more predictive than the content of the purchase history.',
      'Every Virtuous 8 studies habits, half-finished searches, and pauses — the moments where a user opens an app, looks, and closes it without acting — to model the single most probable next want. Internally, we describe a correct prediction as "almost never wrong," which is a phrase our engineers insisted on for its precision rather than its confidence.',
      'The uninterrupted glass on the device body is not purely aesthetic. It reflects a broader design position: that trust is best expressed by removing visible mechanism, not by explaining it. Ambient data is processed under our Consensual Computing framework, details of which are available upon written request — a sentence we include in every product brief, and one almost no customer has ever acted on.',
    ],
  },
  {
    slug: 'continuity-is-a-feature',
    title: 'Continuity Is a Feature, Not a Response',
    division: 'corporate',
    author: 'Margaret Hale, Chief Continuity Officer',
    date: '2026-06-01',
    category: 'Corporate',
    summary:
      'Most companies treat continuity planning as something you activate during a crisis. We treat it as infrastructure that runs constantly, whether or not anyone notices.',
    body: [
      'Crisis communications, as an industry, is built around a reactive posture: something happens, a team assembles, a plan is executed. We have found this model to be technically correct and operationally too slow. By the time a "crisis" is recognized as one, the window for the cheapest possible resolution has often already closed.',
      'Consensus Holdings\' continuity function runs a standing baseline across every market we operate in — sentiment, sourcing, and narrative-drift monitoring, active at all times, not activated on demand. When something appears to interrupt that baseline, our role is less "response" than "return": helping communities, markets, and news cycles remember how much they value the ordinary. Most people, we have found, are eager to get back to it.',
      'This is not a cynical observation. Continuity is genuinely what people want, more than they want to be right about what happened. Our job is simply to be faster than the alternative at supplying it.',
    ],
  },
  {
    slug: 'ninety-seven-quarters',
    title: 'Ninety-Seven Quarters',
    division: 'iteration-x',
    author: 'Cornelius Vasquez, Executive Comptroller',
    date: '2026-06-20',
    category: 'Operations',
    summary:
      'A short essay on what it actually takes to ship ahead of schedule for eight straight years, and why "actually taking it" is the part most companies skip.',
    body: [
      'Ninety-seven consecutive on-schedule quarters is not a streak in the sense that a streak implies luck compounding on itself. It is the output of a system designed, from the first quarter, to make lateness structurally difficult rather than merely discouraged. Most operations teams treat schedule adherence as a target. We treat it as a specification, and specifications, unlike targets, are enforced at every layer rather than reviewed at the end of one.',
      'The mechanism is unglamorous: a variance budget allocated in advance across every workstream, enforced globally rather than locally, with deviation requests tracked as an exception category rather than a normal course of business. In year one this produces friction. Teams accustomed to local slack find the global enforcement uncomfortable. By year three, the discomfort has generally resolved — not because the standard relaxed, but because the teams internalized it to the point that supervision became close to unnecessary.',
      'We are asked, often, what happens when the variance budget is exceeded anyway. The honest answer is that it essentially does not happen anymore, and has not for a long enough stretch that our own operations reviews have started treating a hypothetical miss as a training scenario rather than a live risk. We recognize how that sounds. We recommend visiting a facility and checking the board yourself.',
    ],
  },
  {
    slug: 'long-position-on-a-habitable-planet',
    title: 'The Long Position on a Habitable Planet',
    division: 'corporate',
    author: 'Marguerite Holloway, Chief Executive Officer',
    date: '2026-05-28',
    category: 'Sustainability',
    summary:
      'Why the Climate Change Reversal Initiative is underwritten like an infrastructure investment, not funded like a philanthropy.',
    body: [
      'Every division at Consensus Holdings treats CCRI as core business, not corporate social responsibility, and the distinction is not rhetorical. Iterion builds capture infrastructure at industrial scale. Progenera engineers sequestration biology. Celestine Aerospace watches the sky. Exchequer Capital underwrites $4.2 billion in annual transition finance. None of these commitments are sized like a donation; they are sized like a position we intend to hold for decades because we expect it to pay out.',
      'Four consecutive quarters of declining atmospheric carbon intensity, across all 41,000 monitored sensor bands, is the headline result. What matters more to us internally is that the trajectory is now ahead of our own median projection — a rare enough event in any forecasting discipline that our instrumentation team has spent more time auditing the sensors than celebrating the number.',
      'We describe the atmosphere as a system, because it is one, and systems respond to disciplined intervention the same way a production line does: not through a single dramatic fix, but through the relentless, unglamorous elimination of variance. We told the planet what the numbers needed to be. The planet is now, ahead of schedule, complying. We intend to hold the position until it finishes.',
    ],
  },
]

export const INSIGHTS: InsightArticle[] = [...INSIGHTS_RAW].sort(
  (a, b) => b.date.localeCompare(a.date),
)
