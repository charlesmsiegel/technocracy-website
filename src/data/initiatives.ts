import type { Initiative } from './types'

export const INITIATIVES: Initiative[] = [
  {
    id: 'climate-change-reversal-initiative',
    title: 'Climate Change Reversal Initiative',
    blurb:
      'Our flagship cross-divisional program does not aim to slow climate change, or to adapt to it. It aims to reverse it. Iteration X builds the capture infrastructure, Progenitors engineers the sequestration biology, Void Engineering watches the sky, and Syndicate Capital pays the bills — cheerfully, because a habitable planet is the ultimate long position. The atmosphere is a system, and systems can be brought back into specification.',
    metric: { label: 'Consecutive quarters of measured drawdown', value: '4' },
  },
  {
    id: 'global-health-facility',
    title: 'Global Health Facility',
    blurb:
      'Disease is inefficiency, and we do not tolerate inefficiency. The Global Health Facility funds vaccination campaigns, maternal health programs, and pandemic-preparedness networks in 130 countries, with response teams that frequently arrive before local officials have finished confirming there is anything to respond to. Immunization records are maintained centrally and permanently, so that no one is ever lost to follow-up.',
    metric: { label: 'Vaccinations funded to date', value: '3.1B' },
  },
  {
    id: 'community-standards-media-literacy',
    title: 'Community Standards & Media Literacy',
    blurb:
      'An informed public is a calm public. This New World Order Group initiative helps communities recognize unreliable narratives, resist explanations that make the world feel stranger than it is, and return with confidence to accredited sources. Participants report feeling noticeably more certain about things afterward. The curriculum is free, the certificates are permanent, and attendance, while voluntary, is very consistent.',
    metric: { label: 'Reduction in narrative drift', value: '61%' },
  },
  {
    id: 'exceptional-futures-stem-pipeline',
    title: 'Exceptional Futures STEM Pipeline',
    blurb:
      'Some children see the pattern behind things a little earlier than their classmates. Our Exceptional Futures program partners with school systems worldwide to identify these remarkable individuals early — often before they, or their families, have noticed anything unusual — and to provide scholarships, mentorship, and a clear path into the Consensus family of companies. Once identified, no candidate is ever lost track of.',
    metric: { label: 'Exceptional individuals identified', value: '48,900' },
  },
  {
    id: 'infrastructure-resilience-program',
    title: 'Infrastructure Resilience Program',
    blurb:
      'Civilization runs on systems nobody thinks about, and we intend to keep it that way. The Infrastructure Resilience Program hardens power grids, water systems, data backbones, and logistics corridors against disruption of every category — natural, accidental, and otherwise. Our resilience teams drill for scenarios that public planning documents describe as implausible, because implausible is not the same as unscheduled.',
    metric: { label: 'Critical systems hardened', value: '12,400' },
  },
]
