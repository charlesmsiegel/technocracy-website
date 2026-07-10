/* Free-license stock photography (Unsplash license), bundled locally. */

import type { ConventionSlug } from './types'
import heroTowers from '../assets/photos/hero-towers.jpg'
import divIterationX from '../assets/photos/division-iteration-x.jpg'
import divNwo from '../assets/photos/division-new-world-order.jpg'
import divProgenitors from '../assets/photos/division-progenitors.jpg'
import divSyndicate from '../assets/photos/division-syndicate.jpg'
import divVoidEngineers from '../assets/photos/division-void-engineers.jpg'
import initiativesWind from '../assets/photos/initiatives-wind.jpg'
import aboutBoardroom from '../assets/photos/about-boardroom.jpg'

export const HERO_PHOTO = heroTowers
export const INITIATIVES_PHOTO = initiativesWind
export const ABOUT_PHOTO = aboutBoardroom

export const DIVISION_PHOTOS: Record<ConventionSlug, string> = {
  'iteration-x': divIterationX,
  'new-world-order': divNwo,
  progenitors: divProgenitors,
  syndicate: divSyndicate,
  'void-engineers': divVoidEngineers,
}

export const DIVISION_PHOTO_ALT: Record<ConventionSlug, string> = {
  'iteration-x': 'A humanoid service robot raising one hand in greeting',
  'new-world-order': 'A person on a bench, face hidden behind an open newspaper',
  progenitors: 'A pipette dispensing bright fluid into an array of sample tubes',
  syndicate: 'A trading terminal displaying steadily rising market charts',
  'void-engineers': 'The Earth at night seen from orbit, cities glowing below',
}
