'use client'

import { motion } from 'framer-motion'
import { CountUp } from '@/components/motion/CountUp'
import { ease, rise, stagger } from '@/components/motion/variants'
import { callSection } from '@/data/home'
import styles from './home.module.css'

export function NextSteps() {
  return (
    <section className={styles.next}>
      <motion.div
        className={styles.nextSteps}
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger(0.08)}
      >
        <motion.h2 className={styles.nextTitle} variants={rise}>
          {callSection.title}
        </motion.h2>
        <div className={styles.nextList}>
          {callSection.steps.map((step, index) => (
            <motion.div key={step} className={styles.nextRow} variants={rise}>
              <span className={styles.nextIndex}>{String(index + 1).padStart(2, '0')}</span>
              <span className={styles.nextBody}>{step}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className={styles.priceCard}
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, amount: 0.25 }}
        variants={stagger(0.08)}
      >
        <motion.span className={styles.priceLabel} variants={rise}>
          {callSection.priceLabel}
        </motion.span>
        <motion.span className={styles.priceFigure} variants={rise}>
          <span className={styles.priceValue}>
            <CountUp value={callSection.price} />
          </span>
          <span className={styles.priceUnit}>{callSection.priceUnit}</span>
        </motion.span>
        <motion.p className={styles.priceBody} variants={rise}>
          {callSection.priceBody}
        </motion.p>
        <motion.button
          type="button"
          className={styles.priceAction}
          variants={rise}
          whileHover={{ y: -2 }}
          transition={{ duration: 0.25, ease }}
        >
          {callSection.action}
        </motion.button>
      </motion.div>
    </section>
  )
}
