import { useCallback, useRef, useState } from 'react'
import { SLIDES } from '../../data/photos'
import { useInterval } from '../../hooks/useInterval'
import styles from './Slideshow.module.css'

const ADVANCE_MS = 5500

export default function Slideshow() {
  const [index, setIndex] = useState(0)
  // Hover and focus pause independently — a single boolean lets one
  // condition ending resume the carousel while the other still holds.
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const paused = hovered || focused

  // Only the active slide and its neighbors get a src, so the home page
  // doesn't fetch the whole carousel payload up front. Once a slide has
  // loaded it stays loaded to avoid re-fetch flicker.
  const loadedRef = useRef(new Set<number>())
  const shouldLoad = (i: number) => {
    const n = SLIDES.length
    if (
      i === index ||
      i === (index + 1) % n ||
      i === (index - 1 + n) % n ||
      loadedRef.current.has(i)
    ) {
      loadedRef.current.add(i)
      return true
    }
    return false
  }

  const go = useCallback(
    (delta: number) =>
      setIndex((i) => (i + delta + SLIDES.length) % SLIDES.length),
    [],
  )

  // useInterval is a no-op under prefers-reduced-motion, so the carousel
  // degrades to a manually-advanced slide.
  useInterval(() => go(1), paused ? null : ADVANCE_MS)

  return (
    <div
      className={styles.frame}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setFocused(false)
      }}
      role="region"
      aria-roledescription="carousel"
      aria-label="Selected accomplishments"
    >
      {SLIDES.map((slide, i) => (
        <div
          key={slide.headline}
          className={i === index ? styles.slideActive : styles.slide}
          aria-hidden={i !== index}
        >
          {shouldLoad(i) && (
            <img src={slide.photo} alt={slide.alt} loading="lazy" />
          )}
          <div className={styles.caption}>
            <div className={styles.eyebrow}>{slide.eyebrow}</div>
            <div className={styles.headline}>{slide.headline}</div>
            <p className={styles.blurb}>{slide.blurb}</p>
          </div>
        </div>
      ))}

      <div className={styles.controls}>
        <button
          type="button"
          className={styles.arrow}
          onClick={() => go(-1)}
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          type="button"
          className={styles.arrow}
          onClick={() => go(1)}
          aria-label="Next slide"
        >
          ›
        </button>
      </div>

      <div className={styles.dots}>
        {SLIDES.map((slide, i) => (
          <button
            key={slide.headline}
            type="button"
            className={i === index ? styles.dotActive : styles.dot}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}: ${slide.headline}`}
          />
        ))}
      </div>
    </div>
  )
}
