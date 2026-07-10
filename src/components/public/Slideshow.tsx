import { useCallback, useState } from 'react'
import { SLIDES } from '../../data/photos'
import { useInterval } from '../../hooks/useInterval'
import styles from './Slideshow.module.css'

const ADVANCE_MS = 5500

export default function Slideshow() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

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
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
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
          <img src={slide.photo} alt={slide.alt} loading="lazy" />
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
