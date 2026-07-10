/* Placeholder brand marks. Swap the SVG bodies for the real WoD logos
   (Union seal, Convention sigils) once asset links are provided — every
   consumer renders these components, so replacement is drop-in. */

import type { ConventionSlug } from '../../data/types'

export function ConsensusMark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <rect width="64" height="64" rx="12" fill="var(--heading)" />
      <path
        d="M32 12 L52 48 H12 Z"
        fill="none"
        stroke="var(--surface)"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="36" r="4.5" fill="var(--accent)" />
    </svg>
  )
}

export function UnionSeal({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r="29" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="32" cy="32" r="23" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <path
        d="M32 16 L48 44 H16 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="35" r="4" fill="currentColor" />
      <circle cx="32" cy="35" r="1.6" fill="var(--bg, #0a0e12)" />
    </svg>
  )
}

const SIGIL_PATHS: Record<ConventionSlug, string> = {
  // gear cross — machine
  'iteration-x': 'M32 14 v10 M32 40 v10 M14 32 h10 M40 32 h10 M19 19 l7 7 M38 38 l7 7 M45 19 l-7 7 M26 38 l-7 7',
  // eye
  'new-world-order': 'M12 32 Q32 14 52 32 Q32 50 12 32 Z M32 32 m-6 0 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0',
  // helix
  progenitors: 'M22 14 Q42 24 22 34 Q42 44 22 54 M42 14 Q22 24 42 34 Q22 44 42 54 M26 20 h12 M26 44 h12',
  // pyramid of coins / bars
  syndicate: 'M20 46 h24 M23 38 h18 M26 30 h12 M29 22 h6',
  // orbit
  'void-engineers': 'M32 32 m-8 0 a8 8 0 1 0 16 0 a8 8 0 1 0 -16 0 M10 40 Q32 20 54 24',
}

export function ConventionSigil({
  convention,
  size = 24,
}: {
  convention: ConventionSlug
  size?: number
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r="29" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.6" />
      <path
        d={SIGIL_PATHS[convention]}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
