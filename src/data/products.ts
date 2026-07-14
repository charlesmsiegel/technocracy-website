/* Consumer product lines. The Virtuous 8 (Syndicate / Eris Design Group)
   and the Pharmacopoeia subscription (Progenera) are established
   elsewhere on the site (pressReleases.ts, careers.ts); the rest of each
   division's line is presented in the same voice. */

import type { Product } from './types'

export const PRODUCTS: Product[] = [
  /* ---------- Iterion Advanced Manufacturing ---------- */
  {
    id: 'iterion-vitality-band',
    name: 'Iterion Vitality Band',
    division: 'iteration-x',
    category: 'Wearables',
    tagline: 'Fitness tracking that never rounds up.',
    description:
      'Continuous biometric monitoring with the same measurement discipline Iterion applies to a manufacturing floor. Heart rate, sleep architecture, recovery load, and gait symmetry, logged to a precision most wearables don\'t attempt and few users request twice.',
    specs: [
      '14-day battery life under continuous monitoring',
      'Medical-grade optical and bioimpedance sensors',
      'Gait and posture analysis with drift alerts',
      'Data exportable to any certified UNI-compliant device',
      'Firmware updates apply automatically overnight, without a visible prompt',
    ],
    price: '$349',
  },
  {
    id: 'iterion-home',
    name: 'Iterion Home',
    division: 'iteration-x',
    category: 'Smart Home',
    tagline: 'One standard. Every device. No exceptions.',
    description:
      'A whole-home automation hub built on the UNI industrial interface standard, the same protocol running 6,417 Iterion facilities. Lighting, climate, security, and appliances from any certified manufacturer, coordinated on a single schedule.',
    specs: [
      'Compatible with any UNI-certified device, including legacy hardware',
      'Local processing; no cloud dependency for core automation',
      'Sub-second failover between paired sensors',
      'Energy optimization tuned nightly to household patterns',
    ],
    price: '$599 (hub); devices sold separately',
  },
  {
    id: 'iterion-renew',
    name: 'Iterion Renew',
    division: 'iteration-x',
    category: 'Personal Care',
    tagline: 'Skincare informed by regenerative materials science.',
    description:
      'A topical recovery line developed alongside Iterion\'s dermal-materials research, adapted for daily consumer use. Clinical-grade formulation, drugstore-simple routine.',
    specs: [
      'Dermatologist-tested across four skin types',
      'Visible improvement in a 12-week independent study',
      'Fragrance-free formulation available',
      'Batch-tracked for quality consistency down to the individual tube',
    ],
    price: 'From $42',
  },

  /* ---------- Nexus Worldwide Operations ---------- */
  {
    id: 'ivory-tower-home',
    name: 'Ivory Tower Home Edition',
    division: 'new-world-order',
    category: 'Media & Education',
    tagline: 'The media-literacy curriculum, now for your household.',
    description:
      'A subscription version of the Ivory Tower Institute\'s classroom curriculum, adapted for family use. Weekly modules help households evaluate claims, sources, and the general information environment together.',
    specs: [
      'New module released weekly, ages 8 and up',
      'Household progress dashboard for parents',
      'Completion certificates issued per household member',
      'Available in 41 languages',
    ],
    price: '$14/month',
  },
  {
    id: 'nexus-clear',
    name: 'Nexus Clear',
    division: 'new-world-order',
    category: 'Media & Education',
    tagline: 'A news reader that tells you what you already agree with.',
    description:
      'A curated news and commentary app drawing on Nexus Worldwide Operations\' sentiment research to surface coverage readers report finding "unusually easy to trust." Ad-free, subscription-funded.',
    specs: [
      'Daily digest tuned to reading history',
      'Source-reliability scoring on every article',
      'One-tap "request clarification" on any story',
      'No third-party advertising or tracking pixels',
    ],
    price: '$9/month',
  },

  /* ---------- Progenera Life Sciences ---------- */
  {
    id: 'pharmacopoeia-subscription',
    name: 'Pharmacopoeia',
    division: 'progenitors',
    category: 'Consumer Health',
    tagline: 'Preventive care, delivered monthly.',
    description:
      'Progenera\'s consumer-health subscription: personalized supplement formulations, at-home diagnostic panels, and a direct line to a Progenera-affiliated physician. Sixty million subscribers and growing.',
    specs: [
      'Quarterly at-home blood panel included',
      'Formulation adjusted automatically based on panel results',
      'Telehealth consultation included in every tier',
      'Adverse-event reporting monitored continuously across all markets',
    ],
    price: 'From $59/month',
  },
  {
    id: 'progenera-baseline',
    name: 'Progenera Baseline',
    division: 'progenitors',
    category: 'Diagnostics',
    tagline: 'Know your numbers before they know you.',
    description:
      'An at-home diagnostic kit measuring over 80 biomarkers from a single sample, processed at a Progenera-certified lab. Results delivered with plain-language guidance, not just a spreadsheet.',
    specs: [
      '80+ biomarkers from one at-home collection',
      'Results in 5-7 business days',
      'Year-over-year trend tracking included',
      'Flags requiring follow-up are routed to a physician automatically, before the results reach you',
    ],
    price: '$189',
  },
  {
    id: 'progenera-restore',
    name: 'Progenera Restore',
    division: 'progenitors',
    category: 'Recovery',
    tagline: 'Recovery science, off the clinical floor.',
    description:
      'A consumer recovery line built on Progenera\'s regenerative-therapies research — topical and oral formulations for post-exertion recovery, adapted from protocols used in the FACADE clinical program.',
    specs: [
      'Independently tested recovery-time reduction of 18-31%',
      'Available in topical, oral, and combination kits',
      'Batch quality-controlled to clinical standards',
    ],
    price: 'From $68',
  },

  /* ---------- Exchequer Capital Group ---------- */
  {
    id: 'edg-virtuous-8',
    name: 'EDG Virtuous 8',
    division: 'syndicate',
    category: 'Consumer Electronics',
    tagline: 'The phone that understands you.',
    description:
      'Eris Design Group\'s flagship device. The on-device Desire Engine studies each owner\'s habits, hesitations, and half-finished searches to surface exactly what they need before the want is fully formed. Uninterrupted glass; no visible camera apertures — a design statement about trust.',
    specs: [
      'Desire Engine on-device prediction, refined continuously',
      'No visible camera apertures on any surface',
      'Consensual Computing framework; details available upon written request',
      'Battery life described internally as "sufficient"',
    ],
    price: '$1,299',
  },
  {
    id: 'edg-aperture',
    name: 'EDG Aperture',
    division: 'syndicate',
    category: 'Wearables',
    tagline: 'The watch that knows the meeting is running long.',
    description:
      'Eris Design Group\'s companion wearable, built around the same Desire Engine as the Virtuous 8. Ambient scheduling suggestions arrive before you\'ve finished checking your calendar.',
    specs: [
      'Full Desire Engine integration with Virtuous 8 handsets',
      'Seven-day battery life',
      'Haptic nudges tuned to individual stress response',
      'Always-on display with adaptive brightness',
    ],
    price: '$449',
  },
  {
    id: 'exchequer-everyday',
    name: 'Exchequer Everyday',
    division: 'syndicate',
    category: 'Financial Services',
    tagline: 'Institutional-grade money management, for one household at a time.',
    description:
      'A consumer banking and investing app built on the same allocation models Exchequer Capital uses for its largest institutional clients, scaled down to personal finance. Automatic budgeting, goal-based investing, and a savings recommendation engine with an unusually confident hit rate.',
    specs: [
      'FDIC-insured deposit accounts',
      'Automated investing tied to Exchequer\'s institutional research desk',
      'Savings recommendations with a historical acceptance rate above 90%',
      'No account minimums',
    ],
    price: 'Free; premium tier $6/month',
  },

  /* ---------- Celestine Aerospace ---------- */
  {
    id: 'celestine-horizon',
    name: 'Celestine Horizon',
    division: 'void-engineers',
    category: 'Connectivity',
    tagline: 'Signal, anywhere the sky is visible.',
    description:
      'A personal satellite communicator riding on the Sentinel constellation\'s spare capacity. Messaging, location sharing, and emergency dispatch from anywhere on the planet — coverage Celestine Aerospace describes, accurately, as gapless.',
    specs: [
      'Global coverage via the 312-satellite Sentinel constellation',
      'SOS dispatch with location accurate to within 3 meters',
      'Battery life: 5 days typical use',
      'Location history retained indefinitely for account continuity',
    ],
    price: '$399 device; $15/month service',
  },
  {
    id: 'celestine-wayfinder',
    name: 'Celestine Wayfinder',
    division: 'void-engineers',
    category: 'Navigation',
    tagline: 'Navigation backup for the places maps give up on.',
    description:
      'A rugged handheld navigation unit built for the same remote-deployment conditions Celestine Aerospace field crews work in. Offline mapping, satellite backup positioning, and an unusually confident refusal to ever report "no signal."',
    specs: [
      'Offline mapping for any pre-downloaded region',
      'Satellite positioning backup with sub-meter accuracy',
      'Operating range: -40°C to 60°C',
      'Reports a valid position under all field-tested conditions, including several its engineers have declined to specify',
    ],
    price: '$549',
  },
  {
    id: 'celestine-observatory',
    name: 'Celestine Home Observatory',
    division: 'void-engineers',
    category: 'Consumer Optics',
    tagline: 'The sky, the way our sensors already see it.',
    description:
      'A consumer telescope with automated tracking and object identification, built on optics research from Celestine\'s Earth-observation program. Points itself, focuses itself, and explains what you\'re looking at before you ask.',
    specs: [
      'Automated GoTo tracking across 40,000+ catalogued objects',
      'Smartphone app integration with guided tours',
      'Weatherproof housing rated for year-round outdoor storage',
      'Occasionally identifies an object the catalogue does not yet contain; flagged for review, not displayed',
    ],
    price: '$899',
  },
]
