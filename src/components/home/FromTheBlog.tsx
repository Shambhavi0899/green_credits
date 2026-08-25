'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Eyebrow } from '@/components/site/Eyebrow'
import { cardHover, rise, stagger, viewport } from '@/components/motion/variants'
import { readingSection } from '@/data/home'
import { homeTeasers } from '@/data/blog'
import styles from './home.module.css'

export function FromTheBlog() {
  return (
    <section className={`shell gutter ${styles.section} ${styles.reading}`}>
      <div className={styles.readingHead}>
        <div className={styles.readingTitleGroup}>
          <Eyebrow>{readingSection.label}</Eyebrow>
          <motion.h2
            className="section-title"
            initial="hidden"
            whileInView="shown"
            viewport={viewport}
            variants={rise}
          >
            {readingSection.title}
          </motion.h2>
        </div>
        <Link href="/blog" className={styles.readingAll}>
          {readingSection.action}
        </Link>
      </div>

      <motion.div
        className={styles.teasers}
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger(0.09)}
      >
        {homeTeasers.map((teaser) => (
          <motion.div key={teaser.slug} variants={rise} whileHover={cardHover}>
            <Link href={`/blog/${teaser.slug}`} className={styles.teaser} style={{ height: '100%' }}>
              <span className={styles.teaserMeta} data-tone={teaser.tone}>
                {teaser.meta}
              </span>
              <span className={styles.teaserTitle}>{teaser.title}</span>
              <span className={styles.teaserBody}>{teaser.excerpt}</span>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
