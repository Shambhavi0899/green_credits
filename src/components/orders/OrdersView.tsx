'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ease, rise, row, stagger, viewport } from '@/components/motion/variants'
import {
  activeOrder,
  cancellationNote,
  listingNote,
  listings,
  listingsColumns,
  ordersIntro,
  pastOrders,
  pastOrdersColumns,
  pastOrdersLabel,
  sellSection,
  sellTerms,
} from '@/data/orders'
import type { Note } from '@/lib/types'
import styles from './Orders.module.css'
import { Fragment } from 'react'

const STAGE_MARK: Record<string, string> = { done: '✓', active: '●', waiting: '○' }

export function OrdersView() {
  return (
    <>
      <section className={`shell gutter ${styles.intro}`}>
        <motion.div
          className={styles.introCopy}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <h1 className={styles.introTitle}>{ordersIntro.title}</h1>
          <p className="lede">{ordersIntro.body}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
        >
          <Link href="/sellers" className={styles.primaryAction}>
            {ordersIntro.action}
          </Link>
        </motion.div>
      </section>

      {/* --- the live order --- */}
      <div className="shell gutter">
      <motion.section
        className={styles.active}
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger(0.07)}
        aria-label="Current order"
      >
        <motion.div className={styles.activeHead} variants={rise}>
          <div>
            <div className={styles.activeRef}>{activeOrder.reference}</div>
            <div className={styles.activeTitle}>{activeOrder.title}</div>
          </div>
          <div className={styles.activeTotals}>
            <span className={styles.activeTotal}>{activeOrder.total}</span>
            <span className={styles.activePaid}>{activeOrder.paidOn}</span>
          </div>
        </motion.div>

        <div className={styles.stages}>
          {activeOrder.stages.map((stage, index) => (
            <motion.div
              key={stage.title}
              className={styles.stage}
              data-state={stage.state}
              variants={rise}
            >
              <motion.span
                className={styles.stageBar}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease, delay: 0.2 + index * 0.1 }}
              />
              <span className={styles.stageTop}>
                <span className={styles.stageMark}>{STAGE_MARK[stage.state]}</span>
                <span className={styles.stageTitle}>{stage.title}</span>
              </span>
              <span className={styles.stageBody}>{stage.body}</span>
              <span className={styles.stageStamp}>{stage.stamp}</span>
            </motion.div>
          ))}
        </div>

        <motion.div className={styles.activeFoot} variants={rise}>
          <span className={styles.activeNote}>{activeOrder.handlerNote}</span>
          <span className={styles.activeActions}>
            {activeOrder.actions.map((action) => (
              <button key={action} type="button" className={styles.ghost}>
                {action}
              </button>
            ))}
          </span>
        </motion.div>
      </motion.section>
      </div>

      {/* --- history --- */}
      <section className={`shell gutter ${styles.history}`}>
        <div className={styles.sectionLabel}>{pastOrdersLabel}</div>

        <motion.div
          className={styles.table}
          initial="hidden"
          whileInView="shown"
          viewport={viewport}
          variants={stagger(0.06)}
        >
          <motion.div className={styles.tableHead} variants={row}>
            <span className={`${styles.headCell} ${styles.colWhat}`}>{pastOrdersColumns[0]}</span>
            <span className={`${styles.headCell} ${styles.colOrdered}`}>{pastOrdersColumns[1]}</span>
            <span className={`${styles.headCell} ${styles.colTonnes}`}>{pastOrdersColumns[2]}</span>
            <span className={`${styles.headCell} ${styles.colStatus}`}>{pastOrdersColumns[3]}</span>
            <span className={`${styles.headCell} ${styles.colCertificate}`}>
              {pastOrdersColumns[4]}
            </span>
          </motion.div>

          {pastOrders.map((order) => (
            <motion.div key={order.serial} className={styles.tableRow} variants={row}>
              <span className={styles.colWhat}>
                <span className={styles.rowTitle}>{order.title}</span>
                <span className={styles.rowSerial}>{order.serial}</span>
              </span>
              <span className={`${styles.rowMuted} ${styles.colOrdered}`}>{order.ordered}</span>
              <span className={`${styles.rowFigure} ${styles.colTonnes}`}>{order.tonnes}</span>
              <span className={styles.colStatus}>
                <span className={styles.pill} data-tone={order.status.tone}>
                  {order.status.label}
                </span>
              </span>
              <span
                className={`${styles.certificate} ${styles.colCertificate}`}
                data-emphasis={order.certificate.emphasis ?? false}
              >
                {order.certificate.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <PullNote note={cancellationNote} />
      </section>

      {/* --- sell side --- */}
      <section className={`shell gutter ${styles.sell}`}>
        <div className={styles.sellHead}>
          <motion.div
            className={styles.sellCopy}
            initial="hidden"
            whileInView="shown"
            viewport={viewport}
            variants={rise}
          >
            <span className={styles.sellLabel}>{sellSection.label}</span>
            <h2 className={styles.sellTitle}>{sellSection.title}</h2>
            <p className={styles.sellBody}>{sellSection.body}</p>
          </motion.div>
          <motion.button
            type="button"
            className={`${styles.primaryAction} ${styles.sellAction}`}
            initial="hidden"
            whileInView="shown"
            viewport={viewport}
            variants={rise}
            transition={{ delay: 0.1 }}
          >
            {sellSection.action}
          </motion.button>
        </div>

        <motion.div
          className={styles.terms}
          initial="hidden"
          whileInView="shown"
          viewport={viewport}
          variants={stagger(0.08)}
        >
          {sellTerms.map((term, index) => (
            <Fragment key={term.value}>
              {index > 0 ? <span className={styles.vRule} /> : null}
              <motion.div className={styles.term} variants={rise}>
                <span className={styles.termValue} data-accent={term.accent ?? false}>
                  {term.value}
                </span>
                <span className={styles.termBody}>{term.body}</span>
              </motion.div>
            </Fragment>
          ))}
        </motion.div>

        <motion.div
          className={styles.listings}
          initial="hidden"
          whileInView="shown"
          viewport={viewport}
          variants={stagger(0.06)}
        >
          <motion.div className={styles.listingsHead} variants={row}>
            <span className={`${styles.headCell} ${styles.colListing}`}>{listingsColumns[0]}</span>
            <span className={`${styles.headCell} ${styles.colTonnesWide}`}>
              {listingsColumns[1]}
            </span>
            <span className={`${styles.headCell} ${styles.colPrice}`}>{listingsColumns[2]}</span>
            <span className={`${styles.headCell} ${styles.colListingStatus}`}>
              {listingsColumns[3]}
            </span>
          </motion.div>

          {listings.map((listing) => (
            <motion.div key={listing.serial} className={styles.listingRow} variants={row}>
              <span className={styles.colListing}>
                <span className={styles.rowTitle}>{listing.title}</span>
                <span className={styles.rowSerial}>{listing.serial}</span>
              </span>
              <span className={`${styles.rowFigure} ${styles.colTonnesWide}`}>{listing.tonnes}</span>
              <span
                className={`${listing.priceMuted ? styles.rowFigureMuted : styles.rowFigure} ${
                  styles.colPrice
                }`}
              >
                {listing.price}
              </span>
              <span className={styles.colListingStatus}>
                <span className={styles.pill} data-tone={listing.status.tone}>
                  {listing.status.label}
                </span>
              </span>
            </motion.div>
          ))}
        </motion.div>

        <PullNote note={listingNote} />
      </section>
    </>
  )
}

function PullNote({ note }: { note: Note }) {
  return (
    <motion.div
      className={styles.note}
      data-tone={note.tone}
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={viewport}
      transition={{ duration: 0.6, ease }}
    >
      <span className={styles.noteCopy}>
        <span className={styles.noteTitle}>{note.title}</span>
        <span className={styles.noteBody}>{note.body}</span>
      </span>
    </motion.div>
  )
}
