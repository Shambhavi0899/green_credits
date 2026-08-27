'use client'

import { motion } from 'framer-motion'
import { Eyebrow } from '@/components/site/Eyebrow'
import { ease, rise, stagger, viewport } from '@/components/motion/variants'
import { creditKinds, kinds } from '@/data/home'
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
        {creditKinds.map((kind) => {
          const Icon = KIND_ICONS[kind.icon]

          return (
            <motion.div
              key={kind.name}
              className={styles.kindCard}
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
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
