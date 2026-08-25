'use client'

import { motion } from 'framer-motion'
import { Eyebrow } from '@/components/site/Eyebrow'
import { rise, row, stagger, viewport } from '@/components/motion/variants'
import { compare, comparisonRows } from '@/data/home'
import styles from './home.module.css'

export function Compare() {
  return (
    <section className={`shell gutter ${styles.section} ${styles.compare}`}>
      <Eyebrow>{compare.label}</Eyebrow>

      <div className={styles.compareHead}>
        <motion.h2
          className="section-title"
          style={{ width: '100%' }}
          initial="hidden"
          whileInView="shown"
          viewport={viewport}
          variants={rise}
        >
          {compare.title}
        </motion.h2>
        <motion.p
          className={`lede ${styles.compareLede}`}
          initial="hidden"
          whileInView="shown"
          viewport={viewport}
          variants={rise}
          transition={{ delay: 0.08 }}
        >
          {compare.body}
        </motion.p>
      </div>

      <motion.div
        className={styles.compareTable}
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, amount: 0.12 }}
        variants={stagger(0.06)}
      >
        <motion.div className={styles.compareHeaderRow} variants={row}>
          {compare.columns.map((column) => (
            <div key={column} className={styles.compareCell}>
              <span className={styles.compareHeaderLabel}>{column}</span>
            </div>
          ))}
        </motion.div>

        {comparisonRows.map((line) => (
          <motion.div key={line.aspect} className={styles.compareRow} variants={row}>
            <div className={styles.compareCell}>
              <span className={styles.compareAspect}>{line.aspect}</span>
            </div>
            <div className={styles.compareCell}>
              <span className={styles.compareBroker}>{line.broker}</span>
            </div>
            <div className={styles.compareCell}>
              <span className={styles.compareOurs}>{line.greenCredit}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
