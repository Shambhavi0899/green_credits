'use client'

import { motion } from 'framer-motion'
import { Eyebrow } from '@/components/site/Eyebrow'
import { rise, row, stagger, viewport } from '@/components/motion/variants'
import { creditKinds, kinds } from '@/data/home'
import styles from './home.module.css'

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
        className={styles.kindsTable}
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger(0.07)}
      >
        {creditKinds.map((kind) => (
          <motion.div key={kind.name} className={styles.kindRow} variants={row}>
            <span className={styles.kindPrice}>{kind.price}</span>
            <span className={styles.kindName}>
              <span className={styles.kindNameTitle}>{kind.name}</span>
              <span className={styles.kindSupply} data-accent={kind.supplyAccent ?? false}>
                {kind.supply}
              </span>
            </span>
            <span className={styles.kindBody}>{kind.body}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
