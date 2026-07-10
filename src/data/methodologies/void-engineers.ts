import type { MethodologyPanel } from '../types'

export const voidEngineersMethodologies: MethodologyPanel[] = [
  {
    id: 'placeholder',
    convention: 'void-engineers',
    name: 'Placeholder',
    role: 'Placeholder',
    kind: 'dashboard',
    metrics: [
      { kind: 'counter', id: 'p1', label: 'Placeholder', value: 1 },
    ],
  },
]
