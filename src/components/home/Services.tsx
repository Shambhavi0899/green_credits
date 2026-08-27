'use client'

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Eyebrow } from '@/components/site/Eyebrow'
import { rise, viewport } from '@/components/motion/variants'
import { serviceCards, services } from '@/data/home'
import styles from './home.module.css'

/**
 * Diagram geometry, in the 1264 × 220 coordinate space the design draws in.
 * The SVG scales to its container and the labels are positioned as percentages
 * of the same grid, so the two stay locked together at any width.
 */
const VIEW_W = 1264
const VIEW_H = 220
const SPLIT_X = 300
const DOT_X = 620
const LABEL_X = 644
/** Half a label's height, to centre it on its dot. */
const LABEL_HALF = 20

const BRANCHES = [
  { d: `M${SPLIT_X} 110 C380 110 400 45 480 45 H${DOT_X}`, cy: 45 },
  { d: `M${SPLIT_X} 110 H${DOT_X}`, cy: 110 },
  { d: `M${SPLIT_X} 110 C380 110 400 175 480 175 H${DOT_X}`, cy: 175 },
]

/**
 * Fraction of the pinned range spent advancing. The rest holds on the last
 * branch, so it gets a beat of its own instead of arriving on the final pixel.
 */
const SWEEP_END = 0.9

const clamp = (n: number, min: number, max: number) => Math.min(Math.max(n, min), max)

/** useLayoutEffect warns during SSR; the first measure must still beat paint. */
const useIsoLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect

/**
 * The three ways to use us, advanced by page scroll rather than by clicking a
 * branch — the same pinning the provenance timeline uses. A tall parent supplies
 * the travel, the diagram and panel stick inside it, and how far through that
 * travel the reader is decides which branch is lit.
 */
export function Services() {
  const pinRef = useRef<HTMLDivElement>(null)
  const stickyRef = useRef<HTMLDivElement>(null)

  /** Before the reader reaches the section, the marketplace is the one in view. */
  const [selected, setSelected] = useState(0)

  const measure = useCallback(() => {
    const pin = pinRef.current
    const sticky = stickyRef.current
    if (!pin || !sticky) return

    /* How far through the pinned range the reader has scrolled. */
    const topOffset = parseFloat(getComputedStyle(sticky).top) || 0
    const distance = Math.max(pin.offsetHeight - sticky.offsetHeight, 1)
    const travelled = topOffset - pin.getBoundingClientRect().top
    const progress = clamp(travelled / distance, 0, 1)

    const share = SWEEP_END / serviceCards.length
    setSelected(clamp(Math.floor(progress / share), 0, serviceCards.length - 1))
  }, [])

  useIsoLayoutEffect(() => {
    measure()
  }, [measure])

  useEffect(() => {
    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(measure)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [measure])

  const active = serviceCards[selected] ?? serviceCards[0]

  const renderBranch = (index: number) => {
    const branch = BRANCHES[index]
    if (!branch) return null
    const isActive = index === selected

    return (
      <g key={index} className={isActive ? styles.branchActive : styles.branchIdle}>
        <path d={branch.d} />
        <circle cx={DOT_X} cy={branch.cy} r="7" />
      </g>
    )
  }

  return (
    <section className={`shell gutter ${styles.section} ${styles.services}`}>
      <Eyebrow>{services.label}</Eyebrow>

      <div className={styles.sectionHead}>
        <motion.h2
          className={`section-title ${styles.sectionHeadTitle}`}
          initial="hidden"
          whileInView="shown"
          viewport={viewport}
          variants={rise}
        >
          {services.title}
        </motion.h2>
        <motion.div
          className={styles.sectionHeadBody}
          initial="hidden"
          whileInView="shown"
          viewport={viewport}
          variants={rise}
          transition={{ delay: 0.1 }}
        >
          <p className="lede">{services.body}</p>
        </motion.div>
      </div>

      <div ref={pinRef} className={styles.branchPin}>
        <div ref={stickyRef} className={styles.branchSticky}>
          <motion.div
            className={styles.branching}
            initial="hidden"
            whileInView="shown"
            viewport={viewport}
            variants={rise}
          >
            <div className={styles.branchDiagram}>
              <svg
                viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
                className={styles.branchSvg}
                aria-hidden="true"
                focusable="false"
              >
                <path d={`M0 110 H${SPLIT_X}`} className={styles.branchTrunk} />
                {/* Idle branches first so the selected one paints over the split. */}
                {BRANCHES.map((_, index) => (index === selected ? null : renderBranch(index)))}
                {renderBranch(selected)}
              </svg>

              {serviceCards.map((card, index) => {
                const branch = BRANCHES[index]
                if (!branch) return null

                return (
                  <span
                    key={card.title}
                    className={styles.branchLabel}
                    data-active={index === selected}
                    style={{
                      left: `${(LABEL_X / VIEW_W) * 100}%`,
                      top: `calc(${(branch.cy / VIEW_H) * 100}% - ${LABEL_HALF}px)`,
                    }}
                  >
                    <span className={styles.branchLabelTag}>{card.pricing}</span>
                    <span className={styles.branchLabelTitle}>{card.title}</span>
                  </span>
                )
              })}
            </div>

            <div className={styles.branchPanel}>
              <h3 className={styles.branchPanelTitle}>{active.title}</h3>
              <p className={styles.branchPanelBody}>{active.body}</p>
              <Link href={active.href} className={styles.branchPanelAction}>
                {active.action}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
