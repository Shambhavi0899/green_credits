'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Eyebrow } from '@/components/site/Eyebrow'
import { cardHover, rise, stagger, viewport } from '@/components/motion/variants'
import { serviceCards, services } from '@/data/home'
import styles from './home.module.css'

const HREFS = ['/sellers', '/signin', '/assistant']

export function Services() {
  return (
    <section className={`shell gutter ${styles.section} ${styles.services}`}>
      <Eyebrow>{services.label}</Eyebrow>

      <div className={styles.sectionHead}>
        <motion.h2
          className={`section-title ${styles.sectionHeadTitle}`}
          initial="hidden"
          whileInView="shown"
          viewport={viewport}
          variants={rise}
        >
          {services.title}
        </motion.h2>
        <motion.div
          className={styles.sectionHeadBody}
          initial="hidden"
          whileInView="shown"
          viewport={viewport}
          variants={rise}
          transition={{ delay: 0.1 }}
        >
          <p className="lede">{services.body}</p>
        </motion.div>
      </div>

      <motion.div
        className={styles.serviceCards}
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger(0.09)}
      >
        {serviceCards.map((card, index) => (
          <motion.div key={card.title} variants={rise} className={styles.serviceCard} whileHover={cardHover}>
            <span className={styles.servicePricing} data-accent={card.pricingAccent ?? false}>
              {card.pricing}
            </span>
            <span className={styles.serviceTitle}>{card.title}</span>
            <p className={styles.serviceBody}>{card.body}</p>
            <Link href={HREFS[index] ?? '/sellers'} className={styles.serviceAction}>
              {card.action}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
