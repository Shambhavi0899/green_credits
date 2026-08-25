'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Eyebrow } from '@/components/site/Eyebrow'
import { cardHover, ease, rise, stagger, viewport } from '@/components/motion/variants'
import { blogIntro, editorial, featuredPost, posts } from '@/data/blog'
import styles from './Blog.module.css'

export function BlogIndex() {
  return (
    <>
      <section className={`shell gutter ${styles.intro}`}>
        <motion.div
          className={styles.introCopy}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <Eyebrow>{blogIntro.label}</Eyebrow>
          <h1 className={styles.introTitle}>{blogIntro.title}</h1>
        </motion.div>
        <motion.div
          className={styles.introBody}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.12 }}
        >
          <p className="lede">{blogIntro.body}</p>
        </motion.div>
      </section>

      <motion.div
        className="shell"
        initial="hidden"
        whileInView="shown"
        viewport={viewport}
        variants={rise}
      >
        <Link href={`/blog/${featuredPost.slug}`} className={styles.featured}>
          <span className={styles.featuredFrame}>
            <span
              className={styles.featuredImage}
              style={{ backgroundImage: `url(${featuredPost.image.src})` }}
              role="img"
              aria-label={featuredPost.image.alt}
            />
          </span>
          <span className={styles.featuredCopy}>
            <span className={styles.featuredMeta}>
              <span className={styles.badge}>{featuredPost.badge}</span>
              <span className={styles.featuredStamp}>{featuredPost.meta}</span>
            </span>
            <span className={styles.featuredTitle}>{featuredPost.title}</span>
            <span className={styles.featuredExcerpt}>{featuredPost.excerpt}</span>
            <span className={styles.featuredAction}>{featuredPost.action}</span>
          </span>
        </Link>
      </motion.div>

      <motion.div
        className={`shell gutter ${styles.cards}`}
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger(0.09)}
      >
        {posts.map((post) => (
          <motion.div key={post.slug} variants={rise} whileHover={cardHover} style={{ flex: 1 }}>
            <Link href={`/blog/${post.slug}`} className={styles.card} style={{ height: '100%' }}>
              <span className={styles.cardCategory} data-tone={post.categoryTone}>
                {post.category}
              </span>
              <span className={styles.cardTitle}>{post.title}</span>
              <span className={styles.cardExcerpt}>{post.excerpt}</span>
              <span className={styles.cardChecked}>{post.checked}</span>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <section className={styles.editorial}>
        <motion.div
          className={styles.editorialCopy}
          initial="hidden"
          whileInView="shown"
          viewport={viewport}
          variants={rise}
        >
          <span className={styles.editorialLabel}>{editorial.label}</span>
          <h2 className={styles.editorialTitle}>{editorial.title}</h2>
          <p className={styles.editorialBody}>{editorial.body}</p>
        </motion.div>

        <motion.div
          className={styles.editorialSteps}
          initial="hidden"
          whileInView="shown"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger(0.08)}
        >
          {editorial.steps.map((step, index) => (
            <motion.div key={step} className={styles.editorialStep} variants={rise}>
              <span className={styles.editorialIndex}>
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className={styles.editorialStepBody}>{step}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  )
}
