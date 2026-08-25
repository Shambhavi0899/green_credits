'use client'

import { motion } from 'framer-motion'
import { CountUp } from '@/components/motion/CountUp'
import { ease } from '@/components/motion/variants'
import { stats } from '@/data/home'
import styles from './home.module.css'
import { Fragment } from 'react'

export function StatBand() {
  return (
    <section className={styles.stats} aria-label="Platform figures">
      {stats.map((stat, index) => (
        <Fragment key={stat.caption}>
          {index > 0 ? <span className={styles.vRule} /> : null}
          <motion.div
            className={styles.stat}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease, delay: index * 0.08 }}
          >
            <span className={styles.statValue} data-accent={stat.accent ?? false}>
              <CountUp value={stat.value} />
            </span>
            <span className={styles.statCaption}>{stat.caption}</span>
          </motion.div>
        </Fragment>
      ))}
    </section>
  )
}
