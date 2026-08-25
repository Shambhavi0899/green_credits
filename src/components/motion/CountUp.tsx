'use client'

import { animate, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

/** Splits "2.4M" / "$23.80" / "96%" into prefix, number and suffix. */
function parse(value: string) {
  const match = value.match(/^([^\d]*)([\d,.]+)(.*)$/)
  if (!match) return null
  const [, prefix, digits, suffix] = match
  const target = Number(digits.replace(/,/g, ''))
  if (!Number.isFinite(target)) return null
  return {
    prefix,
    suffix,
    target,
    decimals: digits.includes('.') ? digits.split('.')[1].length : 0,
    grouped: digits.includes(','),
  }
}

/**
 * Counts a figure up the first time it scrolls into view.
 *
 * The server renders the authored string, so the page is correct with no
 * JavaScript at all. On the client the value is zeroed only once the element
 * is confirmed to be off screen, which means the reset is never visible — and
 * the animation always lands back on the exact string it was given.
 */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [display, setDisplay] = useState(value)
  const parsed = parse(value)

  useEffect(() => {
    if (!parsed) return

    const { prefix, suffix, target, decimals, grouped } = parsed

    const format = (n: number) => {
      const fixed = n.toFixed(decimals)
      if (!grouped) return `${prefix}${fixed}${suffix}`
      const [whole, fraction] = fixed.split('.')
      const withCommas = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      return `${prefix}${fraction ? `${withCommas}.${fraction}` : withCommas}${suffix}`
    }

    if (!inView) {
      // Off screen: park it at zero, ready to run.
      setDisplay(format(0))
      return
    }

    const controls = animate(0, target, {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(format(latest)),
      onComplete: () => setDisplay(value),
    })

    return () => controls.stop()
    // `parsed` is derived from `value`, so `value` is the real dependency.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, value])

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}
