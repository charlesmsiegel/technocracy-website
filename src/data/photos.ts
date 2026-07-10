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
import slideHandshake from '../assets/photos/slide-handshake.jpg'
import slideTeam from '../assets/photos/slide-team.jpg'

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

export interface Slide {
  photo: string
  alt: string
  eyebrow: string
  headline: string
  blurb: string
}

/** The obligatory corporate accomplishments carousel. */
export const SLIDES: Slide[] = [
  {
    photo: slideHandshake,
    alt: 'Two businesspeople shaking hands in a bright office',
    eyebrow: 'Exchequer Capital Group',
    headline: 'Partnerships that outlast markets.',
    blurb:
      'Fund VII closed at $40 billion — capital for infrastructure the world didn’t know it needed, on terms everyone will eventually agree to.',
  },
  {
    photo: divIterationX,
    alt: 'A humanoid service robot raising one hand in greeting',
    eyebrow: 'Iterion Advanced Manufacturing',
    headline: 'Two million limbs, freely given.',
    blurb:
      'The BioMechanics Access Program is the largest medical-device philanthropy in history. Every limb fitted, calibrated, and registered to its recipient for life.',
  },
  {
    photo: divProgenitors,
    alt: 'A pipette dispensing bright fluid into an array of sample tubes',
    eyebrow: 'Progenera Life Sciences',
    headline: 'Two billion meals a day.',
    blurb:
      'DOAA seed and yield platforms now feed a quarter of humanity. The harvest arrives on schedule. The harvest always arrives on schedule.',
  },
  {
    photo: divVoidEngineers,
    alt: 'The Earth at night seen from orbit, cities glowing below',
    eyebrow: 'Celestine Aerospace',
    headline: '312 satellites. Zero blind spots.',
    blurb:
      'The completed Sentinel constellation watches over eight billion neighbors — and everything that approaches from any direction.',
  },
  {
    photo: initiativesWind,
    alt: 'Wind turbines in a wheat field at sunrise',
    eyebrow: 'Climate Change Reversal Initiative',
    headline: 'The forecast is: better.',
    blurb:
      'Four consecutive quarters of measured atmospheric drawdown. The atmosphere is a system, and systems respond to disciplined intervention.',
  },
  {
    photo: slideTeam,
    alt: 'A team working together on laptops around a wooden table',
    eyebrow: 'Our people',
    headline: 'One workforce. One tomorrow.',
    blurb:
      'From 61 countries, our colleagues arrive each morning aligned, motivated, and remarkably consistent. Employee satisfaction: 100%, as measured.',
  },
]

export const DIVISION_PHOTO_ALT: Record<ConventionSlug, string> = {
  'iteration-x': 'A humanoid service robot raising one hand in greeting',
  'new-world-order': 'A person on a bench, face hidden behind an open newspaper',
  progenitors: 'A pipette dispensing bright fluid into an array of sample tubes',
  syndicate: 'A trading terminal displaying steadily rising market charts',
  'void-engineers': 'The Earth at night seen from orbit, cities glowing below',
}
