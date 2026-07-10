/* The Narrative Integrity Report (Nexus Worldwide Operations). */

export interface StatTable {
  title: string
  note?: string
  columns: string[]
  rows: string[][]
}

export const TRANSPARENCY_INTRO: string[] = ['Placeholder']

export const TRANSPARENCY_TABLES: StatTable[] = [
  { title: 'Placeholder', columns: ['A'], rows: [['0']] },
]

export const TRANSPARENCY_CLOSING: string[] = ['Placeholder']
