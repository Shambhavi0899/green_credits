'use client'

import { motion } from 'framer-motion'
import { ease } from '@/components/motion/variants'

/**
 * The 26px copper rule plus a mono label that opens most sections. The rule
 * draws itself in from the left when the section arrives.
 */
export function Eyebrow({ children, tone = 'copper' }: { children: string; tone?: 'copper' | 'mint' }) {
  const color = tone === 'mint' ? 'var(--ink-mint)' : 'var(--color-copper)'

  return (
    <motion.div
      className="eyebrow"
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0.6 }}
    >
      <motion.span
        className="eyebrow__rule"
        style={{ background: color }}
        variants={{ hidden: { scaleX: 0 }, shown: { scaleX: 1 } }}
        transition={{ duration: 0.55, ease }}
      />
      <motion.span
        className="eyebrow__text"
        style={{ color }}
        variants={{ hidden: { opacity: 0, x: -6 }, shown: { opacity: 1, x: 0 } }}
        transition={{ duration: 0.5, ease, delay: 0.1 }}
      >
        {children}
      </motion.span>
    </motion.div>
  )
}
