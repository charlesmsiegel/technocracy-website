import type { ConventionSlug } from './types'

export interface ConventionInfo {
  slug: ConventionSlug
  /** True name, used inside the portal */
  name: string
  /** Abbreviation used in internal chrome, e.g. "NWO" */
  abbr: string
  /** CSS custom property holding the accent color */
  accentVar: string
}

export const CONVENTIONS: Record<ConventionSlug, ConventionInfo> = {
  'iteration-x': {
    slug: 'iteration-x',
    name: 'Iteration X',
    abbr: 'ITX',
    accentVar: '--cv-iteration-x',
  },
  'new-world-order': {
    slug: 'new-world-order',
    name: 'New World Order',
    abbr: 'NWO',
    accentVar: '--cv-new-world-order',
  },
  progenitors: {
    slug: 'progenitors',
    name: 'Progenitors',
    abbr: 'PGN',
    accentVar: '--cv-progenitors',
  },
  syndicate: {
    slug: 'syndicate',
    name: 'Syndicate',
    abbr: 'SYN',
    accentVar: '--cv-syndicate',
  },
  'void-engineers': {
    slug: 'void-engineers',
    name: 'Void Engineers',
    abbr: 'VE',
    accentVar: '--cv-void-engineers',
  },
}

export const CONVENTION_SLUGS = Object.keys(CONVENTIONS) as ConventionSlug[]
