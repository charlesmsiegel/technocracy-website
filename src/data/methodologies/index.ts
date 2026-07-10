import type { ConventionSlug, MethodologyPanel } from '../types'
import { iterationXMethodologies } from './iteration-x'
import { newWorldOrderMethodologies } from './new-world-order'
import { progenitorsMethodologies } from './progenitors'
import { syndicateMethodologies } from './syndicate'
import { voidEngineersMethodologies } from './void-engineers'

export const METHODOLOGIES: Record<ConventionSlug, MethodologyPanel[]> = {
  'iteration-x': iterationXMethodologies,
  'new-world-order': newWorldOrderMethodologies,
  progenitors: progenitorsMethodologies,
  syndicate: syndicateMethodologies,
  'void-engineers': voidEngineersMethodologies,
}

export function getMethodology(
  convention: ConventionSlug,
  id: string,
): MethodologyPanel | undefined {
  return METHODOLOGIES[convention].find((m) => m.id === id)
}
