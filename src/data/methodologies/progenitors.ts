import type { MethodologyPanel } from '../types'

export const progenitorsMethodologies: MethodologyPanel[] = [
  {
    id: 'placeholder',
    convention: 'progenitors',
    name: 'Placeholder',
    role: 'Placeholder',
    kind: 'dashboard',
    metrics: [
      { kind: 'counter', id: 'p1', label: 'Placeholder', value: 1 },
    ],
  },
]
