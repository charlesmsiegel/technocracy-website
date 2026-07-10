/* SVG recreations of the World-of-Darkness marks provided as reference
   images (Union knot, five Convention sigils, Panopticon eye). Hand-traced
   approximations — swap for licensed vector art if it becomes available. */

import type { ConventionSlug } from '../../data/types'

/* ---------- The Union knot: three interlocking beveled ribbons ---------- */

function KnotRibbons({ inner = true }: { inner?: boolean }) {
  // One horizontal ribbon (bottom band), duplicated at 120° rotations.
  // Beveled ends angle inward, echoing the reference mark.
  const ribbon =
    'M 8 62 L 24 90 L 78 90 L 92 66 L 84 66 L 74 82 L 28 82 L 16 62 Z'
  return (
    <>
      {[0, 120, 240].map((angle) => (
        <path
          key={angle}
          d={ribbon}
          transform={`rotate(${angle} 50 57)`}
          fill="currentColor"
          stroke="var(--seal-gap, transparent)"
          strokeWidth="2.5"
        />
      ))}
      {inner && (
        // Central "ladder of Enlightenment" emblem
        <g
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        >
          <path d="M 44 44 L 44 68 M 56 44 L 56 68" />
          <path d="M 44 50 L 56 50 M 44 56 L 56 56 M 44 62 L 56 62" />
          <path d="M 44 44 C 41 41, 47 39, 47 42" />
          <path d="M 56 68 C 59 71, 53 73, 53 70" />
        </g>
      )}
    </>
  )
}

/** The Technocratic Union seal — also the Consensus Holdings brand mark. */
export function UnionSeal({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
      <KnotRibbons />
    </svg>
  )
}

/** Public-face lockup: the same knot, contained and corporate. */
export function ConsensusMark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
      <rect width="100" height="100" rx="18" fill="var(--heading)" />
      <g
        transform="translate(50 50) scale(0.72) translate(-50 -50)"
        style={{ color: 'var(--surface)' } as React.CSSProperties}
      >
        <KnotRibbons inner={false} />
      </g>
    </svg>
  )
}

/** Panopticon: the Union knot held inside a watching eye. */
export function PanopticonMark({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={Math.round(size * 0.62)} viewBox="0 0 160 100" aria-hidden="true">
      <path
        d="M 4 50 C 30 8, 130 8, 156 50 C 130 92, 30 92, 4 50 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="7"
      />
      <g transform="translate(80 50) scale(0.42) translate(-50 -57)">
        <KnotRibbons inner={false} />
      </g>
    </svg>
  )
}

/* ---------- Convention sigils ---------- */

function IterationXSigil() {
  // Nested square frames with corner cuts — the "iterating" square tunnel.
  return (
    <g fill="currentColor">
      <path d="M 2 2 H 98 V 98 H 2 Z M 10 10 V 90 H 90 V 10 Z" fillRule="evenodd" />
      <path d="M 16 16 H 84 V 84 H 16 Z M 24 24 V 76 H 76 V 24 Z" fillRule="evenodd" />
      <path d="M 30 30 H 70 V 70 H 30 Z M 38 38 V 62 H 62 V 38 Z" fillRule="evenodd" />
      <path d="M 50 42 L 58 50 L 50 58 L 42 50 Z" />
      {/* corner iterations */}
      <path d="M 2 2 L 16 16 L 10 16 L 2 8 Z" />
      <path d="M 98 2 L 84 16 L 90 16 L 98 8 Z" />
      <path d="M 2 98 L 16 84 L 10 84 L 2 92 Z" />
      <path d="M 98 98 L 84 84 L 90 84 L 98 92 Z" />
    </g>
  )
}

function NewWorldOrderSigil() {
  // Diamond ⊃ circle ⊃ square ⊃ circle ⊃ ring — order nested in order.
  return (
    <g>
      <path d="M 50 0 L 100 50 L 50 100 L 0 50 Z" fill="currentColor" />
      <circle cx="50" cy="50" r="35" fill="var(--sigil-bg, var(--surface, #fff))" />
      <rect x="25.5" y="25.5" width="49" height="49" fill="currentColor" />
      <path d="M 26 26 L 50 49 Z M 74 26 L 51 50 Z" stroke="var(--sigil-bg, var(--surface, #fff))" strokeWidth="2" />
      <path
        d="M 26 26 L 49 50 L 26 74 Z M 74 26 L 51 50 L 74 74 Z"
        fill="var(--sigil-bg, var(--surface, #fff))"
      />
      <circle cx="50" cy="50" r="17.5" fill="var(--sigil-bg, var(--surface, #fff))" />
      <circle cx="50" cy="50" r="11" fill="none" stroke="currentColor" strokeWidth="5" />
    </g>
  )
}

function ProgenitorsSigil() {
  // Circle crowned with rays; twin embryonic curls at the heart.
  const rays = [-72, -54, -36, -18, 0, 18, 36, 54, 72]
  return (
    <g fill="none" stroke="currentColor">
      <circle cx="50" cy="52" r="44" strokeWidth="5" />
      {rays.map((angle) => (
        <line
          key={angle}
          x1="50"
          y1="52"
          x2={50 + 40 * Math.sin((angle * Math.PI) / 180)}
          y2={52 - 40 * Math.cos((angle * Math.PI) / 180)}
          strokeWidth="4"
          transform="translate(0 -3)"
        />
      ))}
      <circle cx="50" cy="63" r="27" fill="var(--sigil-bg, var(--surface, #fff))" stroke="none" />
      <path
        d="M 46 56 C 38 46, 24 50, 24 62 C 24 72, 34 78, 42 74 C 48 71, 49 64, 44 61 C 40 59, 35 61, 36 66"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M 54 56 C 62 46, 76 50, 76 62 C 76 72, 66 78, 58 74 C 52 71, 51 64, 56 61 C 60 59, 65 61, 64 66"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <line x1="38" y1="63" x2="62" y2="63" strokeWidth="5" />
    </g>
  )
}

function SyndicateSigil() {
  // A coin split down the middle: two half-dollar-signs facing away.
  return (
    <g fill="none" stroke="currentColor">
      <circle cx="50" cy="50" r="42" strokeWidth="8" />
      <line x1="44" y1="2" x2="44" y2="98" strokeWidth="8" />
      <line x1="56" y1="2" x2="56" y2="98" strokeWidth="8" />
      {/* left half-S */}
      <path
        d="M 40 28 C 28 28, 22 36, 28 44 L 40 58"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path d="M 40 58 C 46 66, 38 74, 30 70" strokeWidth="7" strokeLinecap="round" />
      {/* right half-S (mirrored) */}
      <path
        d="M 60 72 C 72 72, 78 64, 72 56 L 60 42"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path d="M 60 42 C 54 34, 62 26, 70 30" strokeWidth="7" strokeLinecap="round" />
    </g>
  )
}

function VoidEngineersSigil() {
  // Angular star-and-delta: the void star rising over the frontier housing.
  return (
    <g fill="currentColor">
      {/* outer delta with wings */}
      <path d="M 50 2 L 88 40 L 98 48 L 74 48 L 50 24 L 26 48 L 2 48 L 12 40 Z" />
      {/* housing */}
      <path
        d="M 14 52 L 86 52 L 86 74 L 68 96 L 32 96 L 14 74 Z M 26 58 L 26 72 L 38 84 L 62 84 L 74 72 L 74 58 Z"
        fillRule="evenodd"
      />
      {/* inner star */}
      <path d="M 50 34 L 58 54 L 80 54 L 62 66 L 70 88 L 50 74 L 30 88 L 38 66 L 20 54 L 42 54 Z" />
      <path
        d="M 50 46 L 55 58 L 45 58 Z M 42 64 L 58 64 L 50 76 Z"
        fill="var(--sigil-bg, var(--surface, #fff))"
      />
    </g>
  )
}

const SIGILS: Record<ConventionSlug, () => React.JSX.Element> = {
  'iteration-x': IterationXSigil,
  'new-world-order': NewWorldOrderSigil,
  progenitors: ProgenitorsSigil,
  syndicate: SyndicateSigil,
  'void-engineers': VoidEngineersSigil,
}

export function ConventionSigil({
  convention,
  size = 24,
}: {
  convention: ConventionSlug
  size?: number
}) {
  const Sigil = SIGILS[convention]
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
      <Sigil />
    </svg>
  )
}
