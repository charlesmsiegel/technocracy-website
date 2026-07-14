/* A deliberately non-photographic avatar — initials on a tinted disc.
   The site never depicts named individuals with generated or stock
   photography standing in as their likeness. */

function initialsOf(name: string): string {
  const words = name.replace(/^Dr\.\s*/, '').split(/\s+/).filter(Boolean)
  const letters = words.filter((w) => /^[A-Z]/.test(w)).map((w) => w[0])
  return (letters.slice(0, 2).join('') || name[0] || '?').toUpperCase()
}

export default function InitialsAvatar({
  name,
  size = 56,
  accentVar,
}: {
  name: string
  size?: number
  accentVar?: string
}) {
  const color = accentVar ? `var(${accentVar})` : 'var(--accent)'
  return (
    <div
      aria-hidden="true"
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        background: `color-mix(in srgb, ${color} 16%, var(--surface-alt))`,
        color,
        fontWeight: 700,
        fontSize: size * 0.36,
        letterSpacing: '0.02em',
      }}
    >
      {initialsOf(name)}
    </div>
  )
}
