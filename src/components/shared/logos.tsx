/* Brand marks. The artwork (Technocracy seal, Convention sigils and
   wordmarks, Panopticon eye) is rendered via CSS mask so every mark takes
   `currentColor` — the same PNG serves the light corporate theme, the dark
   ops console, and the per-Convention accent colors. */

import type { CSSProperties } from 'react'
import type { ConventionSlug } from '../../data/types'
import sealUrl from '../../assets/logos/seal-technocracy.png'
import panopticonUrl from '../../assets/logos/sigil-panopticon.png'
import sigilIterationX from '../../assets/logos/sigil-iteration-x.png'
import sigilNwo from '../../assets/logos/sigil-new-world-order.png'
import sigilProgenitors from '../../assets/logos/sigil-progenitors.png'
import sigilSyndicate from '../../assets/logos/sigil-syndicate.png'
import sigilVoidEngineers from '../../assets/logos/sigil-void-engineers.png'
import wordmarkIterationX from '../../assets/logos/wordmark-iteration-x.png'
import wordmarkNwo from '../../assets/logos/wordmark-new-world-order.png'
import wordmarkProgenitors from '../../assets/logos/wordmark-progenitors.png'
import wordmarkSyndicate from '../../assets/logos/wordmark-syndicate.png'
import wordmarkVoidEngineers from '../../assets/logos/wordmark-void-engineers.png'

function maskStyle(src: string, width: number, height: number): CSSProperties {
  return {
    display: 'inline-block',
    flexShrink: 0,
    width,
    height,
    backgroundColor: 'currentColor',
    WebkitMaskImage: `url(${src})`,
    maskImage: `url(${src})`,
    WebkitMaskSize: 'contain',
    maskSize: 'contain',
    WebkitMaskRepeat: 'no-repeat',
    maskRepeat: 'no-repeat',
    WebkitMaskPosition: 'center',
    maskPosition: 'center',
  }
}

/** The Technocratic Union seal — also the Consensus Holdings brand mark. */
export function UnionSeal({ size = 32 }: { size?: number }) {
  return <span aria-hidden="true" style={maskStyle(sealUrl, size * 1.08, size)} />
}

/** Public-face brand mark (the seal, worn corporately). */
export function ConsensusMark({ size = 28 }: { size?: number }) {
  return <UnionSeal size={size} />
}

/** Panopticon: the eye that audits the auditors. */
export function PanopticonMark({ size = 32 }: { size?: number }) {
  return (
    <span aria-hidden="true" style={maskStyle(panopticonUrl, size * 1.62, size)} />
  )
}

const SIGILS: Record<ConventionSlug, { src: string; aspect: number }> = {
  'iteration-x': { src: sigilIterationX, aspect: 1.01 },
  'new-world-order': { src: sigilNwo, aspect: 1.0 },
  progenitors: { src: sigilProgenitors, aspect: 0.98 },
  syndicate: { src: sigilSyndicate, aspect: 0.85 },
  'void-engineers': { src: sigilVoidEngineers, aspect: 1.48 },
}

export function ConventionSigil({
  convention,
  size = 24,
}: {
  convention: ConventionSlug
  size?: number
}) {
  const { src, aspect } = SIGILS[convention]
  return <span aria-hidden="true" style={maskStyle(src, size * aspect, size)} />
}

const WORDMARKS: Record<ConventionSlug, string> = {
  'iteration-x': wordmarkIterationX,
  'new-world-order': wordmarkNwo,
  progenitors: wordmarkProgenitors,
  syndicate: wordmarkSyndicate,
  'void-engineers': wordmarkVoidEngineers,
}

/** The Convention's book-style wordmark (internal portal only — the public
    site uses the sanitized division names). Renders inside a fixed box with
    `contain` fitting, left-aligned — the source marks' aspect ratios range
    from 2:1 to 7:1. */
export function ConventionWordmark({
  convention,
  width = 150,
  height = 30,
}: {
  convention: ConventionSlug
  width?: number
  height?: number
}) {
  return (
    <span
      aria-hidden="true"
      style={{
        ...maskStyle(WORDMARKS[convention], width, height),
        WebkitMaskPosition: 'left center',
        maskPosition: 'left center',
      }}
    />
  )
}
