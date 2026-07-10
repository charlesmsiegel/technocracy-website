import type { MethodologyPanel } from '../types'

export const iterationXMethodologies: MethodologyPanel[] = [
  {
    id: 'placeholder',
    convention: 'iteration-x',
    name: 'Placeholder',
    role: 'Placeholder',
    kind: 'dashboard',
    metrics: [
      { kind: 'counter', id: 'p1', label: 'Placeholder', value: 1 },
    ],
  },
]
