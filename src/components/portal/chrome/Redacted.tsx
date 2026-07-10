import styles from './Chrome.module.css'

/** Renders n blacked-out lines. Hovering hints at what you are not cleared for. */
export default function Redacted({ lines }: { lines: number }) {
  return (
    <span aria-label={`${lines} redacted lines`}>
      {Array.from({ length: lines }, (_, i) => (
        <span
          key={i}
          className={styles.redactedLine}
          style={{ width: `${70 + ((i * 37) % 30)}%` }}
        />
      ))}
    </span>
  )
}
