export interface ThreatRow {
  /** Classification code, e.g. 'TAMURD' */
  code: string
  /** Plain-language gloss shown under the code */
  gloss: string
  activeCases: number
  trend: 'up' | 'down' | 'flat'
  /** Typical Hierarchy of Asset Retention band assigned to field assets */
  hoarBand: string
  /** Default force threshold for engagement */
  dtft: number
}

export const THREAT_MATRIX: ThreatRow[] = [
  {
    code: 'TAMURD',
    gloss: 'Tradition-affiliated deviant',
    activeCases: 212,
    trend: 'up',
    hoarBand: '4–6',
    dtft: 3,
  },
  {
    code: 'NAMURD',
    gloss: 'Non-affiliated deviant',
    activeCases: 148,
    trend: 'flat',
    hoarBand: '5–7',
    dtft: 2,
  },
  {
    code: 'HE',
    gloss: 'Hematophagic entity',
    activeCases: 391,
    trend: 'down',
    hoarBand: '6–8',
    dtft: 4,
  },
  {
    code: 'TE',
    gloss: 'Therianthropic entity',
    activeCases: 117,
    trend: 'flat',
    hoarBand: '7–9',
    dtft: 5,
  },
  {
    code: 'TBE',
    gloss: 'Thought-based entity',
    activeCases: 64,
    trend: 'up',
    hoarBand: '5–8',
    dtft: 3,
  },
  {
    code: 'JMARD',
    gloss: 'Post-mortem deviant',
    activeCases: 83,
    trend: 'down',
    hoarBand: '3–6',
    dtft: 2,
  },
  {
    code: 'PDE',
    gloss: 'Para-dimensional entity',
    activeCases: 29,
    trend: 'up',
    hoarBand: '8–10',
    dtft: 6,
  },
  {
    code: 'CMURD',
    gloss: 'Craft-affiliated deviant',
    activeCases: 52,
    trend: 'up',
    hoarBand: '4–7',
    dtft: 3,
  },
  {
    code: 'PEE',
    gloss: 'Paradox-effect manifestation',
    activeCases: 21,
    trend: 'up',
    hoarBand: '9–10',
    dtft: 7,
  },
]
