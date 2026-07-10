/* Investor relations content. */

export interface ChairmanLetter {
  year: number
  title: string
  /** Present only for letters published in full. */
  body?: string[]
}

export interface EarningsRow {
  period: string
  revenue: string
  netIncome: string
  outcome: string
}

export const CHAIRMAN_LETTERS: ChairmanLetter[] = [
  { year: 2025, title: 'Placeholder', body: ['Placeholder'] },
  { year: 1905, title: 'Placeholder' },
]

export const EARNINGS: EarningsRow[] = [
  { period: 'Q1 2026', revenue: '$0', netIncome: '$0', outcome: 'As forecast' },
]

export const OWNERS_MANUAL: string[] = ['Placeholder']

export const AGM_NOTE: string[] = ['Placeholder']
