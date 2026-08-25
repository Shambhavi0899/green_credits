'use client'

import { motion, useScroll, useSpring } from 'framer-motion'
import { ease, rise, row, stagger, viewport } from '@/components/motion/variants'
import type { Article } from '@/lib/types'
import styles from './Blog.module.css'

export function ArticleView({ article }: { article: Article }) {
  // A hairline reading indicator. It is the only element not in the artboard;
  // it lives above the nav rule so it never covers designed content.
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 })

  return (
    <article className={styles.article}>
      <motion.div className={styles.progress} style={{ scaleX: progress }} aria-hidden />

      <header className={`${styles.measure} ${styles.articleHead}`}>
        <motion.div
          className={styles.articleMeta}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          <span className={styles.badge}>{article.category}</span>
          <span className={styles.articleReadingTime}>{article.readingTime}</span>
        </motion.div>

        <motion.h1
          className={styles.articleTitle}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.08 }}
        >
          {article.title}
        </motion.h1>

        <motion.p
          className={styles.standfirst}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.18 }}
        >
          {article.standfirst}
        </motion.p>

        <motion.div
          className={styles.byline}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease, delay: 0.28 }}
        >
          <span className={styles.bylineMark}>AI</span>
          <span className={styles.bylineCopy}>
            <span className={styles.bylineName}>{article.bylineName}</span>
            <span className={styles.bylineMeta}>{article.bylineMeta}</span>
          </span>
        </motion.div>
      </header>

      <motion.figure
        className={styles.articleHero}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease, delay: 0.3 }}
      >
        <span className={styles.articleHeroFrame}>
          <span
            className={styles.articleHeroImage}
            style={{ backgroundImage: `url(${article.hero.src})` }}
            role="img"
            aria-label={article.hero.alt}
          />
        </span>
        <figcaption className={styles.articleHeroCaption}>{article.heroCaption}</figcaption>
      </motion.figure>

      <div className={`${styles.measure} ${styles.articleBody}`}>
        <motion.p
          className={styles.paragraph}
          initial="hidden"
          whileInView="shown"
          viewport={viewport}
          variants={rise}
        >
          {article.opening}
        </motion.p>

        <motion.aside
          className={styles.pullQuote}
          initial="hidden"
          whileInView="shown"
          viewport={viewport}
          variants={rise}
        >
          <span className={styles.pullQuoteLabel}>{article.pullQuoteLabel}</span>
          <p className={styles.pullQuoteBody}>{article.pullQuote}</p>
        </motion.aside>

        <motion.h2
          className={styles.subhead}
          initial="hidden"
          whileInView="shown"
          viewport={viewport}
          variants={rise}
        >
          {article.bandsHeading}
        </motion.h2>

        <motion.div
          className={styles.bands}
          initial="hidden"
          whileInView="shown"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger(0.08)}
        >
          {article.bands.map((band) => (
            <motion.div key={band.title} className={styles.band} variants={row}>
              <span className={styles.bandPrice}>{band.price}</span>
              <span className={styles.bandCopy}>
                <span className={styles.bandTitle}>{band.title}</span>
                <span className={styles.bandBody}>{band.body}</span>
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className={styles.paragraph}
          initial="hidden"
          whileInView="shown"
          viewport={viewport}
          variants={rise}
        >
          {article.closing}
        </motion.p>
      </div>

      <motion.div
        className={styles.articleCta}
        initial="hidden"
        whileInView="shown"
        viewport={viewport}
        variants={rise}
      >
        <span className={styles.articleCtaCopy}>
          <span className={styles.articleCtaTitle}>{article.cta.title}</span>
          <span className={styles.articleCtaBody}>{article.cta.body}</span>
        </span>
        <button type="button" className={styles.articleCtaAction}>
          {article.cta.action}
        </button>
      </motion.div>

      <footer className={`${styles.measure} ${styles.sources}`}>
        <span className={styles.sourcesLabel}>{article.sourcesLabel}</span>
        <p className={styles.sourcesBody}>{article.sources}</p>
      </footer>
    </article>
  )
}
