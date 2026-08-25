'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { Breadcrumb } from '@/components/site/Breadcrumb'
import { ease, rise, row, stagger, viewport } from '@/components/motion/variants'
import type { CreditListing, SpecRow } from '@/lib/types'
import styles from './CreditDetail.module.css'

/** Parses "$23.80" and "1,000" so the running total stays honest as you type. */
function money(value: string) {
  return Number(value.replace(/[^0-9.]/g, ''))
}

function tonnes(value: string) {
  return Number(value.replace(/[^0-9]/g, ''))
}

export function CreditDetail({ listing }: { listing: CreditListing }) {
  const [frame, setFrame] = useState(0)
  const [direction, setDirection] = useState(1)
  const [quantity, setQuantity] = useState(listing.defaultTonnes)

  const total = tonnes(quantity) * money(listing.price)
  const totalLabel = Number.isFinite(total)
    ? `$${total.toLocaleString('en-US', { maximumFractionDigits: 0 })}`
    : listing.orderTotal

  const step = (delta: number) => {
    setDirection(delta)
    setFrame((current) => (current + delta + listing.gallery.length) % listing.gallery.length)
  }

  const jumpTo = (index: number) => {
    setDirection(index > frame ? 1 : -1)
    setFrame(index)
  }

  return (
    <>
      <section className={`shell gutter ${styles.top}`}>
        <Breadcrumb
          items={[
            { label: 'Sellers', href: '/sellers' },
            { label: listing.sellerName, href: '/sellers' },
            { label: listing.shortTitle },
          ]}
        />

        <div className={styles.layout}>
          <div className={styles.main}>
            <motion.div
              className={styles.tags}
              initial="hidden"
              animate="shown"
              variants={stagger(0.07)}
            >
              {listing.tags.map((tag) => (
                <motion.span
                  key={tag.label}
                  className={styles.tag}
                  data-tone={tag.tone}
                  variants={row}
                >
                  {tag.tone === 'verified' ? <span className={styles.tagTick}>✓</span> : null}
                  {tag.label}
                </motion.span>
              ))}
            </motion.div>

            <motion.h1
              className={styles.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.08 }}
            >
              {listing.title}
            </motion.h1>

            <motion.p
              className={styles.summary}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.16 }}
            >
              {listing.summary}
            </motion.p>

            {/* --- gallery --- */}
            <div className={styles.gallery}>
              <div className={styles.stage}>
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                  <motion.div
                    key={frame}
                    className={styles.frame}
                    style={{ backgroundImage: `url(${listing.gallery[frame].src})` }}
                    role="img"
                    aria-label={listing.gallery[frame].alt}
                    custom={direction}
                    initial={{ opacity: 0, scale: 1.04, x: direction * 40 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 1.02, x: direction * -40 }}
                    transition={{ duration: 0.6, ease }}
                  />
                </AnimatePresence>

                <button
                  type="button"
                  className={`${styles.arrow} ${styles.arrowPrev}`}
                  onClick={() => step(-1)}
                  aria-label="Previous photograph"
                >
                  ←
                </button>
                <button
                  type="button"
                  className={`${styles.arrow} ${styles.arrowNext}`}
                  onClick={() => step(1)}
                  aria-label="Next photograph"
                >
                  →
                </button>

                <span className={styles.counter}>
                  {frame + 1} / {listing.gallery.length + listing.extraFrames}
                </span>

                <div className={styles.dots}>
                  {listing.gallery.map((image, index) => (
                    <motion.button
                      key={image.src}
                      type="button"
                      layout
                      className={styles.dot}
                      data-active={index === frame}
                      onClick={() => jumpTo(index)}
                      aria-label={`Photograph ${index + 1}`}
                      transition={{ duration: 0.35, ease }}
                    />
                  ))}
                  <span className={styles.dot} aria-hidden />
                </div>
              </div>

              <div className={styles.thumbs}>
                {listing.gallery.map((image, index) => (
                  <button
                    key={image.src}
                    type="button"
                    className={styles.thumb}
                    data-active={index === frame}
                    onClick={() => jumpTo(index)}
                    aria-label={image.alt}
                  >
                    <span
                      className={styles.thumbImage}
                      style={{ backgroundImage: `url(${image.src})` }}
                    />
                  </button>
                ))}
                <span className={styles.thumbMore}>+{listing.extraFrames} more</span>
              </div>

              <div className={styles.galleryMeta}>
                <span className={styles.galleryCaption}>{listing.galleryCaption}</span>
                <span className={styles.gallerySource}>{listing.gallerySource}</span>
              </div>
            </div>

            <SpecTable
              heading="THE PROJECT"
              rows={listing.project}
              className={styles.tableTop}
            />
          </div>

          {/* --- rail --- */}
          <aside className={styles.rail}>
            <motion.div
              className={styles.buy}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.2 }}
            >
              <div className={styles.buyPrice}>
                <span className={styles.buyPriceValue}>{listing.price}</span>
                <span className={styles.buyPriceUnit}>{listing.priceUnit}</span>
              </div>
              <span className={styles.buyAvailability}>{listing.availability}</span>

              <div className={styles.quantityRow}>
                <input
                  className={styles.quantityField}
                  value={quantity}
                  onChange={(event) => setQuantity(event.target.value)}
                  inputMode="numeric"
                  aria-label="Tonnes"
                />
                <span className={styles.quantityUnit}>tonnes</span>
              </div>

              <div className={styles.totalRow}>
                <span className={styles.totalLabel}>Order total</span>
                <motion.span
                  key={totalLabel}
                  className={styles.totalValue}
                  initial={{ opacity: 0.4, y: -3 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, ease }}
                >
                  {totalLabel}
                </motion.span>
              </div>

              <motion.button
                type="button"
                className={styles.buyAction}
                whileHover={{ y: -1 }}
                whileTap={{ y: 0 }}
                transition={{ duration: 0.2, ease }}
              >
                Add to order
              </motion.button>
              <p className={styles.buyNote}>
                Nothing is charged yet. A person confirms the price before you pay.
              </p>
            </motion.div>

            <motion.div
              className={styles.registry}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.28 }}
            >
              <div className={styles.registryTop}>
                <span className={styles.registryLabel}>ON THE PUBLIC REGISTRY</span>
                <span className={styles.registryChecked}>{listing.registryCheckedAt}</span>
              </div>
              <p className={styles.registryNote}>{listing.registryNote}</p>
              <div className={styles.registryRows}>
                {listing.registryRows.map((line) => (
                  <div key={line.label} className={styles.registryRow}>
                    <span className={styles.registryRowLabel}>{line.label}</span>
                    <span className={styles.registryRowValue} data-mono={line.mono ?? false}>
                      {line.value}
                    </span>
                  </div>
                ))}
              </div>
              <button type="button" className={styles.registryAction}>
                {listing.registryAction}
              </button>
            </motion.div>

            <motion.div
              className={styles.advisory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.36 }}
            >
              <span className={styles.advisoryLabel}>{listing.advisory.label}</span>
              <p className={styles.advisoryBody}>{listing.advisory.body}</p>
              <button type="button" className={styles.advisoryAction}>
                {listing.advisory.action}
              </button>
            </motion.div>
          </aside>
        </div>
      </section>

      <section className={`shell gutter ${styles.lower}`}>
        <div className={styles.lowerColumn}>
          <SpecTable heading="WHO CHECKED IT" rows={listing.verification} />

          <motion.div
            className={styles.table}
            initial="hidden"
            whileInView="shown"
            viewport={viewport}
            variants={stagger(0.06)}
          >
            <motion.div className={styles.tableHead} variants={row}>
              DOCUMENTS YOU CAN DOWNLOAD
            </motion.div>
            {listing.documents.map((doc) => (
              <motion.div key={doc.title} className={styles.docRow} variants={row}>
                <span className={styles.docIdentity}>
                  <span className={styles.docKind}>{doc.kind}</span>
                  <span className={styles.docTitle}>{doc.title}</span>
                </span>
                <button type="button" className={styles.docAction}>
                  {doc.action}
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}

function SpecTable({
  heading,
  rows,
  className,
}: {
  heading: string
  rows: SpecRow[]
  className?: string
}) {
  return (
    <motion.div
      className={`${styles.table} ${className ?? ''}`}
      initial="hidden"
      whileInView="shown"
      viewport={viewport}
      variants={stagger(0.06)}
    >
      <motion.div className={styles.tableHead} variants={rise}>
        {heading}
      </motion.div>
      {rows.map((line) => (
        <motion.div key={line.label} className={styles.specRow} variants={row}>
          <span className={styles.specLabel}>{line.label}</span>
          <span className={styles.specValue}>{line.value}</span>
        </motion.div>
      ))}
    </motion.div>
  )
}
