import type { Transition, Variants } from 'framer-motion'

/**
 * One easing curve for the whole site. It is deliberately calm — the design is
 * Swiss-editorial and anything springy would fight it. The assistant is the
 * single exception and uses its own spring.
 */
export const ease = [0.16, 1, 0.3, 1] as const

export const transition: Transition = { duration: 0.7, ease }
export const quick: Transition = { duration: 0.35, ease }

/** Standard scroll reveal: settle at identity so the resting page is the design. */
export const rise: Variants = {
  hidden: { opacity: 0, y: 22 },
  shown: { opacity: 1, y: 0, transition },
}

export const fade: Variants = {
  hidden: { opacity: 0 },
  shown: { opacity: 1, transition },
}

/** Wipe a rule or bar in from its leading edge. */
export const wipeX: Variants = {
  hidden: { scaleX: 0 },
  shown: { scaleX: 1, transition: { duration: 0.6, ease } },
}

/** Parent that hands its children a staggered entrance. */
export function stagger(step = 0.07, delay = 0): Variants {
  return {
    hidden: {},
    shown: { transition: { staggerChildren: step, delayChildren: delay } },
  }
}

/** Rows in a table or list — a shorter throw than a whole section. */
export const row: Variants = {
  hidden: { opacity: 0, y: 12 },
  shown: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
}

/** Cards lift very slightly on hover; the border does the rest. */
export const cardHover = {
  y: -4,
  transition: { duration: 0.25, ease },
}

/** How much of an element must be on screen before it animates. */
export const viewport = { once: true, amount: 0.2 } as const
export const viewportEarly = { once: true, amount: 0.05 } as const
