export type ConventionSlug =
  | 'iteration-x'
  | 'new-world-order'
  | 'progenitors'
  | 'syndicate'
  | 'void-engineers'

/* ---------- Public site (Consensus Holdings) ---------- */

export interface Division {
  slug: ConventionSlug
  /** Full public brand, e.g. "Iteration X Advanced Manufacturing" */
  publicName: string
  /** Short label used in nav/cards, e.g. "Iteration X" */
  shortName: string
  tagline: string
  /** Corporate sector line, e.g. "Autonomous Systems & Advanced Manufacturing" */
  sector: string
  /** Paragraphs for the division detail page */
  description: string[]
  accomplishments: { title: string; blurb: string }[]
  /** Small stat strip, e.g. { label: "Patents held", value: "14,206" } */
  stats: { label: string; value: string }[]
}

export interface PressRelease {
  slug: string
  /** ISO date, e.g. "2026-05-18" */
  date: string
  division?: ConventionSlug
  headline: string
  summary: string
  body: string[]
}

export interface Initiative {
  id: string
  title: string
  blurb: string
  metric: { label: string; value: string }
}

export interface CareerPosting {
  id: string
  title: string
  division: ConventionSlug | 'corporate'
  location: string
  blurb: string
}

/* ---------- Internal portal ---------- */

export type Clearance = 'internal' | 'restricted' | 'eyes-only'
export type Priority = 'routine' | 'elevated' | 'critical'

export interface KanbanCardData {
  id: string
  title: string
  summary: string
  clearance: Clearance
  tags: string[]
  priority: Priority
  /** Personnel designation; the literal string "@operative" is replaced with
      the logged-in user's name at render time. */
  assignee?: string
  /** Drives the red "NOT SHARED WITH ..." ribbon. */
  notSharedWith?: 'symposium' | ConventionSlug[]
  /** Number of blacked-out lines rendered in the detail drawer. */
  redactedLines?: number
  /** Longer paragraphs shown in the card detail drawer. */
  detail?: string[]
}

export interface KanbanColumnData {
  id: string
  title: string
  cardIds: string[]
}

export interface Board {
  convention: ConventionSlug
  /** Operation codename, e.g. "DEEP PERIMETER" */
  codename: string
  /** File designation, e.g. "LONG-HORIZON RESPONSE FILE VE-2004-0001" */
  designation: string
  /** Classification banner text for this board */
  banner: string
  /** One-paragraph situation brief shown above the columns */
  brief: string
  columns: KanbanColumnData[]
  cards: Record<string, KanbanCardData>
}

/* ---------- Dashboard ---------- */

export interface StatMetric {
  /** When set, shown only to personnel of this Convention. */
  convention?: ConventionSlug
  kind: 'counter'
  id: string
  label: string
  value: number
  unit?: string
  decimals?: number
  /** Max absolute random drift applied periodically so the board feels live */
  jitter?: number
}

export interface GaugeMetric {
  /** When set, shown only to personnel of this Convention. */
  convention?: ConventionSlug
  kind: 'gauge'
  id: string
  label: string
  /** 0..100 */
  value: number
  /** [elevated-at, critical-at]; direction depends on `descending` */
  thresholds: [number, number]
  /** true when LOWER values are worse (e.g. Consensus stability) */
  descending?: boolean
  unit?: string
}

export interface SparkMetric {
  /** When set, shown only to personnel of this Convention. */
  convention?: ConventionSlug
  kind: 'sparkline'
  id: string
  label: string
  history: number[]
  unit?: string
}

export interface StatusMetric {
  /** When set, shown only to personnel of this Convention. */
  convention?: ConventionSlug
  kind: 'status'
  id: string
  label: string
  status: 'nominal' | 'elevated' | 'critical'
  note?: string
}

export type Metric = StatMetric | GaugeMetric | SparkMetric | StatusMetric

export interface TickerItem {
  /** When set, shown only to personnel of this Convention. */
  convention?: ConventionSlug
  id: string
  /** Preformatted line, e.g. "[RDI-2026-0447] SECTOR EU-7 · TAMURD · DTFT 3 · CONTAINED" */
  text: string
}

/* ---------- Methodology desks ---------- */

export interface MethodologyPanel {
  /** kebab-case slug, unique within its Convention */
  id: string
  convention: ConventionSlug
  /** Methodology name as used internally, e.g. "Statisticians" */
  name: string
  /** One-line description of the desk's remit */
  role: string
  /** A desk is either a working kanban or a telemetry dashboard */
  kind: 'board' | 'dashboard'
  /** Present when kind === 'board' */
  board?: Board
  /** Present when kind === 'dashboard' */
  metrics?: Metric[]
  /** Optional ticker line(s) shown above a dashboard desk */
  tickerItems?: TickerItem[]
  /** Optional footnote under a dashboard (e.g. data-quality caveats) */
  note?: string
}
