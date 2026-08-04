import { useEffect, useState } from 'react'
import { useI18n } from '../../i18n/useI18n.js'
import styles from './Carousel.module.css'

/*
  Lightweight, dependency-free image carousel.
  - Prev/next arrows, dot indicators, keyboard (←/→) and touch swipe.
  - Optional autoplay (`autoplay` prop), done accessibly:
      * pauses while hovered or focused (so people can read),
      * disabled for users with prefers-reduced-motion,
      * stops announcing each slide to screen readers while auto-advancing.
  - Accessible: labelled controls, sr-only counter, aria-current on dots.

  Used by ProjectCard. If only one image is passed, ProjectCard renders a
  plain <img> instead — this component assumes 2+ images.
*/
export default function Carousel({ images, altBase, autoplay = false, interval = 4500 }) {
  const { t } = useI18n()
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = images.length

  const goTo = (i) => setIndex((i + count) % count)
  const prev = () => goTo(index - 1)
  const next = () => goTo(index + 1)

  // Autoplay: advance on a timer, but only when it won't annoy the user.
  useEffect(() => {
    if (!autoplay || paused || count < 2) return
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (reduceMotion) return

    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % count),
      interval,
    )
    return () => window.clearInterval(id)
  }, [autoplay, paused, count, interval])

  // Keyboard navigation when the carousel (or anything inside it) has focus.
  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      prev()
    } else if (e.key === 'ArrowRight') {
      e.preventDefault()
      next()
    }
  }

  // Touch swipe (horizontal). Threshold avoids accidental taps.
  let touchStartX = null
  const onTouchStart = (e) => {
    touchStartX = e.touches[0].clientX
  }
  const onTouchEnd = (e) => {
    if (touchStartX === null) return
    const delta = e.changedTouches[0].clientX - touchStartX
    if (Math.abs(delta) > 40) (delta < 0 ? next : prev)()
    touchStartX = null
  }

  return (
    <div
      className={styles.carousel}
      role="group"
      aria-roledescription="carrossel"
      aria-label={altBase}
      onKeyDown={onKeyDown}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      // Pause autoplay while the user hovers or focuses inside the carousel.
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/* Slides track — moves by translateX */}
      <div
        className={styles.track}
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <div className={styles.slide} key={src}>
            <img
              src={src}
              alt={`${altBase} (${i + 1}/${count})`}
              loading={i === 0 ? 'eager' : 'lazy'}
              decoding="async"
            />
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        type="button"
        className={`${styles.arrow} ${styles.arrowPrev}`}
        onClick={prev}
        aria-label={t('carousel_prev')}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M15 18l-6-6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        type="button"
        className={`${styles.arrow} ${styles.arrowNext}`}
        onClick={next}
        aria-label={t('carousel_next')}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Dots */}
      <div className={styles.dots}>
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
            aria-label={`${t('carousel_goto')} ${i + 1}`}
            aria-current={i === index ? 'true' : undefined}
            onClick={() => goTo(i)}
          />
        ))}
      </div>

      {/* Screen-reader position announcement (silent while auto-advancing) */}
      <span className="sr-only" aria-live={autoplay ? 'off' : 'polite'}>
        {index + 1} / {count}
      </span>
    </div>
  )
}
