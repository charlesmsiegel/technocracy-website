import { useEffect, useRef, useState } from 'react'

const reducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Tweens from the previously rendered value to `target` over `duration` ms. */
export function useCountUp(target: number, duration = 900): number {
  const [display, setDisplay] = useState(reducedMotion() ? target : 0)
  const fromRef = useRef(display)
  const rafRef = useRef(0)

  useEffect(() => {
    if (reducedMotion()) {
      setDisplay(target)
      fromRef.current = target
      return
    }
    const from = fromRef.current
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      const value = from + (target - from) * eased
      setDisplay(value)
      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        fromRef.current = target
      }
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [target, duration])

  return display
}
