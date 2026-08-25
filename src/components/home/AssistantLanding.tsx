'use client'

import { motion } from 'framer-motion'
import { CountUp } from '@/components/motion/CountUp'
import { ease } from '@/components/motion/variants'
import { assistantPage } from '@/data/assistant'
import styles from './AssistantLanding.module.css'
import { Fragment } from 'react'

const HEADLINE_LINES = ['CARBON CREDITS', 'YOU CAN CHECK', 'YOURSELF.']

export function AssistantLanding() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={`shell gutter ${styles.heroCopy}`} style={{ width: '100%' }}>
          <h1 className={styles.heroTitle}>
            {HEADLINE_LINES.map((line, index) => (
              <span key={line} className={styles.heroLine}>
                <motion.span
                  style={{ display: 'block' }}
                  initial={{ y: '105%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.85, ease, delay: 0.1 + index * 0.09 }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.p
            className={styles.heroBody}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.45 }}
          >
            {assistantPage.body}
          </motion.p>
        </div>
      </section>

      <section className={styles.stats} aria-label="Platform figures">
        {assistantPage.stats.map((stat, index) => (
          <Fragment key={stat.caption}>
            {index > 0 ? <span className={styles.vRule} /> : null}
            <motion.div
              className={styles.stat}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease, delay: index * 0.08 }}
            >
              <span className={styles.statValue} data-accent={'accent' in stat && stat.accent}>
                <CountUp value={stat.value} />
              </span>
              <span className={styles.statCaption}>{stat.caption}</span>
            </motion.div>
          </Fragment>
        ))}
      </section>

      <motion.aside
        className={styles.note}
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease }}
      >
        <span className={styles.noteLabel}>{assistantPage.note.label}</span>
        <p className={styles.noteBody}>{assistantPage.note.body}</p>
      </motion.aside>
    </div>
  )
}
