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

export const RESEARCH_INTRO: string[] = ['Placeholder']

export const PAPERS: Paper[] = [
  {
    slug: 'placeholder',
    title: 'Placeholder',
    authors: ['Placeholder'],
    venue: 'Placeholder',
    date: '2026-01',
    abstract: ['Placeholder'],
  },
]

export function getPaper(slug: string): Paper | undefined {
  return PAPERS.find((p) => p.slug === slug)
}

export const MONTHLY_EXERCISE: { month: string; prompt: string; note: string } = {
  month: 'Placeholder',
  prompt: 'Placeholder',
  note: 'Placeholder',
}
