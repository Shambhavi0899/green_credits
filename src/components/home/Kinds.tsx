'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Eyebrow } from '@/components/site/Eyebrow'
import { ease, rise, stagger, viewport } from '@/components/motion/variants'
import { creditKinds, kinds, priceScale } from '@/data/home'
import { IconBowl, IconFactory, IconFlame, IconTree } from './icons'
import styles from './home.module.css'

const KIND_ICONS = {
  flame: IconFlame,
  factory: IconFactory,
  tree: IconTree,
  bowl: IconBowl,
} as const

/** The design lifts a card 2px on hover; the border does the rest. */
const lift = { y: -2, transition: { duration: 0.25, ease } }

export function Kinds() {
  const [selected, setSelected] = useState(0)

  const active = creditKinds[selected] ?? creditKinds[0]
  const span = priceScale.max - priceScale.min

  /* Percentages rather than the design's pixel offsets, so the segment stays
     aligned to its range when the lane narrows. At 1264px these resolve to the
     437px / 292px the design specifies. */
  const segmentLeft = ((active.priceMin - priceScale.min) / span) * 100
  const segmentWidth = ((active.priceMax - active.priceMin) / span) * 100

  return (
    <section className={`shell gutter ${styles.section} ${styles.kinds}`}>
      <Eyebrow>{kinds.label}</Eyebrow>

      <motion.h2
        className="section-title"
        initial="hidden"
        whileInView="shown"
        viewport={viewport}
        variants={rise}
      >
        {kinds.title}
      </motion.h2>

      <motion.div
        className={styles.kindCards}
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger(0.07)}
      >
        {creditKinds.map((kind, index) => {
          const Icon = KIND_ICONS[kind.icon]
          const isSelected = index === selected

          return (
            <motion.button
              key={kind.name}
              type="button"
              className={styles.kindCard}
              data-selected={isSelected}
              aria-pressed={isSelected}
              onClick={() => setSelected(index)}
              variants={rise}
              whileHover={lift}
            >
              <span className={styles.kindIcon}>
                <Icon size={28} strokeWidth={1.6} />
              </span>
              <span className={styles.kindCardBody}>
                <span className={styles.kindPrice}>{kind.price}</span>
                <span className={styles.kindSupply} data-accent={kind.supplyAccent ?? false}>
                  {kind.supply}
                </span>
                <span className={styles.kindNameTitle}>{kind.name}</span>
                <span className={styles.kindBody}>{kind.body}</span>
              </span>
            </motion.button>
          )
        })}
      </motion.div>

      <motion.div
        className={styles.priceScale}
        initial="hidden"
        whileInView="shown"
        viewport={viewport}
        variants={rise}
      >
        <div className={styles.priceTrack}>
          <span
            className={styles.priceSegment}
            style={{ left: `${segmentLeft}%`, width: `${segmentWidth}%` }}
          />
        </div>
        <div className={styles.priceLabels}>
          <span className={styles.priceLabelEnd}>${priceScale.min}</span>
          <span className={styles.priceLabelEnd}>${priceScale.max}</span>
        </div>
      </motion.div>
    </section>
  )
}
