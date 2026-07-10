import type { MethodologyPanel } from '../types'

export const syndicateMethodologies: MethodologyPanel[] = [
  {
    id: 'placeholder',
    convention: 'syndicate',
    name: 'Placeholder',
    role: 'Placeholder',
    kind: 'dashboard',
    metrics: [
      { kind: 'counter', id: 'p1', label: 'Placeholder', value: 1 },
    ],
  },
]
