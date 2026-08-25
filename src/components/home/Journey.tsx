'use client'

import { motion } from 'framer-motion'
import { Eyebrow } from '@/components/site/Eyebrow'
import { rise, stagger, viewport } from '@/components/motion/variants'
import { journey, journeySteps } from '@/data/home'
import styles from './home.module.css'
import { Fragment } from 'react'

export function Journey() {
  return (
    <section className={`shell gutter ${styles.section} ${styles.journey}`}>
      <Eyebrow>{journey.label}</Eyebrow>

      <div className={styles.sectionHead}>
        <motion.h2
          className={`section-title ${styles.sectionHeadTitle}`}
          initial="hidden"
          whileInView="shown"
          viewport={viewport}
          variants={rise}
        >
          {journey.title}
        </motion.h2>
        <motion.div
          className={styles.sectionHeadBody}
          initial="hidden"
          whileInView="shown"
          viewport={viewport}
          variants={rise}
          transition={{ delay: 0.1 }}
        >
          <p className="lede">{journey.body}</p>
        </motion.div>
      </div>

      <motion.div
        className={styles.steps}
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, amount: 0.3 }}
        variants={stagger(0.08)}
      >
        {journeySteps.map((step, index) => (
          <Fragment key={step.index}>
            {index > 0 ? <span className={styles.vRule} /> : null}
            <motion.div
              className={styles.step}
              data-highlight={step.highlight ?? false}
              variants={rise}
            >
              <span className={styles.stepIndex}>{step.index}</span>
              <span className={styles.stepTitle}>{step.title}</span>
              <span className={styles.stepBody}>{step.body}</span>
            </motion.div>
          </Fragment>
        ))}
      </motion.div>
    </section>
  )
}
