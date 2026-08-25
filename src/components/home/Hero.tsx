'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { hero } from '@/data/home'
import { ease } from '@/components/motion/variants'
import styles from './home.module.css'

/** The headline is set in three lines in the design; keeping the break points
 *  explicit lets each line be masked and lifted separately. */
const HEADLINE_LINES = ['FIND A CARBON', 'CREDIT SELLER YOU', 'CAN ACTUALLY', 'CHECK.']

export function Hero() {
  return (
    <section className={styles.hero}>
      <div
        className={styles.heroImage}
        style={{ backgroundImage: `url(${hero.image.src})` }}
        role="img"
        aria-label={hero.image.alt}
      />
      <div className={styles.heroScrim}>
        <div className={`shell gutter ${styles.heroRow}`} style={{ width: '100%' }}>
          <div className={styles.heroCopy}>
            <h1 className={styles.heroHeadline}>
              {HEADLINE_LINES.map((line, index) => (
                <span key={line} className={styles.heroLine}>
                  <motion.span
                    style={{ display: 'block' }}
                    initial={{ y: '105%' }}
                    animate={{ y: '0%' }}
                    transition={{ duration: 0.85, ease, delay: 0.12 + index * 0.09 }}
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
              transition={{ duration: 0.7, ease, delay: 0.5 }}
            >
              {hero.body}
            </motion.p>
          </div>

          <motion.div
            className={styles.heroAside}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.62 }}
          >
            <Link href="/sellers" className={styles.heroAction}>
              {hero.action}
            </Link>
            <span className={styles.heroNote}>{hero.actionNote}</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
