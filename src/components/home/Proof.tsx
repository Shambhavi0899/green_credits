'use client'

import { motion } from 'framer-motion'
import { Eyebrow } from '@/components/site/Eyebrow'
import { rise, stagger, viewport } from '@/components/motion/variants'
import { proof, proofPoints } from '@/data/home'
import styles from './home.module.css'
import { Fragment } from 'react'

export function Proof() {
  return (
    <section className={styles.proof}>
      <div className={`shell gutter ${styles.proofInner}`}>
        <div className={styles.proofHead}>
          <div className={styles.proofTitleGroup}>
            <Eyebrow tone="mint">{proof.label}</Eyebrow>
            <motion.h2
              className={styles.proofTitle}
              initial="hidden"
              whileInView="shown"
              viewport={viewport}
              variants={rise}
            >
              {proof.title}
            </motion.h2>
          </div>
          <motion.p
            className={styles.proofLede}
            initial="hidden"
            whileInView="shown"
            viewport={viewport}
            variants={rise}
            transition={{ delay: 0.08 }}
          >
            {proof.body}
          </motion.p>
        </div>

        <motion.div
          className={styles.proofPoints}
          initial="hidden"
          whileInView="shown"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger(0.1)}
        >
          {proofPoints.map((point, index) => (
            <Fragment key={point.label}>
              {index > 0 ? <span className={styles.proofRule} /> : null}
              <motion.div className={styles.proofPoint} variants={rise}>
                <span className={styles.proofLabel}>{point.label}</span>
                <span className={styles.proofPointTitle}>{point.title}</span>
                <span className={styles.proofBody}>{point.body}</span>
              </motion.div>
            </Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
