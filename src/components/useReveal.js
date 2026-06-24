import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Robust scroll-reveal hook.
//
// Root cause of blank-page bug:
//   IntersectionObserver only fires when an element CROSSES the threshold —
//   not for elements already in the viewport when observe() is called.
//   Above-the-fold .reveal elements start at opacity:0 and never get
//   .is-visible added because they were never "entering" the viewport.
//
// Fix: after attaching the observer, immediately check every observed
//   element with getBoundingClientRect() and reveal any that are
//   already visible. This covers above-the-fold content on every page load
//   and every route change.

function revealNow(el) {
  el.classList.add('is-visible')
}

function isInViewport(el) {
  const rect = el.getBoundingClientRect()
  return (
    rect.top < window.innerHeight &&
    rect.bottom > 0 &&
    rect.left < window.innerWidth &&
    rect.right > 0
  )
}

export default function useReveal() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Respect reduced motion — reveal everything immediately, no animation
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      document.querySelectorAll('.reveal').forEach(revealNow)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealNow(entry.target)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -20px 0px' }
    )

    function attachAndReveal() {
      const elements = document.querySelectorAll('.reveal:not(.is-visible)')
      elements.forEach((el) => {
        // KEY FIX: immediately reveal elements already in the viewport
        if (isInViewport(el)) {
          revealNow(el)
        } else {
          observer.observe(el)
        }
      })
    }

    // Run immediately (synchronous — no delay)
    attachAndReveal()

    // Also run after a short paint delay for any elements React renders async
    const t1 = setTimeout(attachAndReveal, 60)
    const t2 = setTimeout(attachAndReveal, 200)

    return () => {
      observer.disconnect()
      clearTimeout(t1)
      clearTimeout(t2)
    }
  // Re-run on every route change — pathname dep ensures fresh attach
  }, [pathname])
}
