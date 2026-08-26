'use client'

import { useState } from 'react'
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

export function Services() {
  const [selected, setSelected] = useState(0)
  const active = serviceCards[selected] ?? serviceCards[0]

  const renderBranch = (index: number) => {
    const branch = BRANCHES[index]
    if (!branch) return null
    const isActive = index === selected

    return (
      <g
        key={index}
        className={isActive ? styles.branchActive : styles.branchIdle}
        onClick={() => setSelected(index)}
      >
        <path d={branch.d} />
        <circle cx={DOT_X} cy={branch.cy} r="7" />
        {/* A fat transparent copy so the thin line is comfortably clickable. */}
        <path d={branch.d} className={styles.branchHit} />
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
            const isActive = index === selected

            return (
              <button
                key={card.title}
                type="button"
                className={styles.branchLabel}
                data-active={isActive}
                aria-pressed={isActive}
                onClick={() => setSelected(index)}
                style={{
                  left: `${(LABEL_X / VIEW_W) * 100}%`,
                  top: `calc(${(branch.cy / VIEW_H) * 100}% - ${LABEL_HALF}px)`,
                }}
              >
                <span className={styles.branchLabelTag}>{card.pricing}</span>
                <span className={styles.branchLabelTitle}>{card.title}</span>
              </button>
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
    </section>
  )
}
