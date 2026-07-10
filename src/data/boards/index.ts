import type { Board, ConventionSlug } from '../types'
import { iterationXBoard } from './iteration-x'
import { newWorldOrderBoard } from './new-world-order'
import { progenitorsBoard } from './progenitors'
import { syndicateBoard } from './syndicate'
import { voidEngineersBoard } from './void-engineers'

export const BOARDS: Record<ConventionSlug, Board> = {
  'iteration-x': iterationXBoard,
  'new-world-order': newWorldOrderBoard,
  progenitors: progenitorsBoard,
  syndicate: syndicateBoard,
  'void-engineers': voidEngineersBoard,
}
