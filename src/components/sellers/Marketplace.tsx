'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { Breadcrumb } from '@/components/site/Breadcrumb'
import { ease, rise, viewport } from '@/components/motion/variants'
import { marketplace, sellers } from '@/data/sellers'
import type { Seller } from '@/lib/types'
import styles from './Marketplace.module.css'

export function Marketplace() {
  const [facet, setFacet] = useState<string>(marketplace.facets[0])
  const [excludeFossil, setExcludeFossil] = useState(false)
  const [compared, setCompared] = useState<string[]>([])

  const visible = useMemo(() => {
    return sellers.filter((seller) => {
      const matchesFacet = facet === marketplace.facets[0] || seller.facets.includes(facet)
      const matchesPolicy =
        !excludeFossil || seller.facets.includes(marketplace.exclusionFacet)
      return matchesFacet && matchesPolicy
    })
  }, [facet, excludeFossil])

  const toggleCompare = (slug: string) =>
    setCompared((current) =>
      current.includes(slug) ? current.filter((item) => item !== slug) : [...current, slug],
    )

  return (
    <>
      <section className={`shell gutter ${styles.intro}`}>
        <Breadcrumb
          items={marketplace.breadcrumb.map((crumb, index, all) =>
            index === all.length - 1 ? { label: crumb.label } : crumb,
          )}
        />

        <div className={styles.introRow}>
          <motion.div
            className={styles.introCopy}
            initial="hidden"
            whileInView="shown"
            viewport={viewport}
            variants={rise}
          >
            <h1 className="section-title">{marketplace.title}</h1>
            <p className="lede">{marketplace.body}</p>
          </motion.div>

          <motion.aside
            className={styles.aside}
            initial="hidden"
            whileInView="shown"
            viewport={viewport}
            variants={rise}
            transition={{ delay: 0.1 }}
          >
            <span className={styles.asideLabel}>{marketplace.aside.label}</span>
            <p className={styles.asideBody}>{marketplace.aside.body}</p>
            <button type="button" className={styles.asideAction}>
              {marketplace.aside.action}
            </button>
          </motion.aside>
        </div>
      </section>

      <div className={`shell gutter ${styles.filterBar}`}>
        <div className={styles.facets}>
          {marketplace.facets.map((option) => {
            const active = option === facet
            return (
              <button
                key={option}
                type="button"
                className={styles.facet}
                data-active={active}
                onClick={() => setFacet(option)}
              >
                {active ? (
                  <motion.span
                    layoutId="facet-pill"
                    className={styles.facetPill}
                    transition={{ duration: 0.35, ease }}
                  />
                ) : null}
                <span className={styles.facetLabel}>{option}</span>
              </button>
            )
          })}

          <span className={styles.facetDivider} />

          <button
            type="button"
            className={styles.facet}
            data-active={excludeFossil}
            onClick={() => setExcludeFossil((value) => !value)}
            aria-pressed={excludeFossil}
          >
            {excludeFossil ? (
              <motion.span
                layoutId="policy-pill"
                className={styles.facetPill}
                transition={{ duration: 0.35, ease }}
              />
            ) : null}
            <span className={styles.facetLabel}>{marketplace.exclusionFacet}</span>
          </button>
        </div>

        <span className={styles.meta}>{marketplace.meta}</span>
      </div>

      <div className={`shell gutter ${styles.grid}`}>
        <AnimatePresence mode="popLayout">
          {visible.map((seller) => (
            <SellerCard
              key={seller.slug}
              seller={seller}
              compared={compared.includes(seller.slug)}
              onCompare={() => toggleCompare(seller.slug)}
            />
          ))}
        </AnimatePresence>

        {visible.length === 0 ? (
          <motion.p
            className={styles.empty}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            No seller on the board matches that combination today. Widen the filter, or ask the
            assistant to watch for one.
          </motion.p>
        ) : null}
      </div>
    </>
  )
}

function SellerCard({
  seller,
  compared,
  onCompare,
}: {
  seller: Seller
  compared: boolean
  onCompare: () => void
}) {
  return (
    <motion.article
      layout
      className={styles.card}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12, scale: 0.98 }}
      transition={{ duration: 0.5, ease }}
      whileHover={{ y: -5 }}
    >
      <span className={styles.cardFrame}>
        <span
          className={styles.cardImage}
          style={{ backgroundImage: `url(${seller.image.src})` }}
          role="img"
          aria-label={seller.image.alt}
        />
      </span>

      <div className={styles.cardHead}>
        <span className={styles.monogram} data-accent={seller.initialsAccent ?? false}>
          {seller.initials}
        </span>
        <span className={styles.cardIdentity}>
          <span className={styles.cardName}>{seller.name}</span>
          <span className={styles.cardLocation}>{seller.location}</span>
        </span>
      </div>

      <div className={styles.tags}>
        {seller.tags.map((tag) => (
          <span key={tag.label} className={styles.tag} data-tone={tag.tone}>
            {tag.tone === 'verified' ? <span className={styles.tagTick}>✓</span> : null}
            {tag.label}
          </span>
        ))}
      </div>

      <div className={styles.figures}>
        <span className={styles.figure}>
          <span className={styles.figureValue}>{seller.price}</span>
          <span className={styles.figureCaption}>{seller.priceCaption}</span>
        </span>
        <span className={styles.figureRule} />
        <span className={styles.figure}>
          <span className={styles.figureValue}>{seller.volume}</span>
          <span className={styles.figureCaption}>{seller.volumeCaption}</span>
        </span>
      </div>

      <div className={styles.cardFoot}>
        <p className={styles.blurb}>{seller.blurb}</p>
        <div className={styles.cardActions}>
          <Link href={`/credits/${seller.listingSlug}`} className={styles.primary}>
            View credits
          </Link>
          <button
            type="button"
            className={styles.secondary}
            data-selected={compared}
            aria-pressed={compared}
            onClick={onCompare}
          >
            {compared ? 'Comparing' : 'Compare'}
          </button>
        </div>
      </div>
    </motion.article>
  )
}
