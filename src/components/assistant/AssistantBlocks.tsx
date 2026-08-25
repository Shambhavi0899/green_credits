'use client'

import { motion } from 'framer-motion'
import { Fragment, useState } from 'react'
import type { AssistantBlock } from '@/lib/types'
import styles from './AssistantBlocks.module.css'

const ease = [0.16, 1, 0.3, 1] as const

/** Each block arrives on its own beat, the way a real thread fills in. */
export const blockVariants = {
  hidden: { opacity: 0, y: 10 },
  shown: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
}

export function AssistantBlockView({ block }: { block: AssistantBlock }) {
  switch (block.kind) {
    case 'user':
      return (
        <div className={styles.userRow}>
          <div className={styles.userBubble}>{block.text}</div>
        </div>
      )

    case 'reply':
      return <p className={styles.reply}>{block.text}</p>

    case 'shortlist':
      return (
        <div className={styles.shortlist}>
          <span className={styles.shortlistLabel}>{block.label}</span>
          <div className={styles.segments}>
            {Array.from({ length: block.total }).map((_, index) => (
              <motion.span
                key={index}
                className={styles.segment}
                data-filled={index < block.filled}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.4, ease, delay: 0.15 + index * 0.08 }}
              />
            ))}
          </div>
          <span className={styles.shortlistLine}>{block.line}</span>
        </div>
      )

    case 'blogLink':
      return (
        <button type="button" className={styles.blogLink}>
          <span className={styles.blogLinkLabel}>{block.label}</span>
          <span className={styles.blogLinkTitle}>{block.title}</span>
        </button>
      )

    case 'orderDraft':
      return (
        <div className={styles.draft}>
          <span className={styles.draftLabel}>{block.label}</span>
          <div className={styles.draftRow}>
            <span className={styles.draftSeller}>{block.seller}</span>
            <span className={styles.draftTonnes}>{block.tonnes}</span>
          </div>
          <div className={styles.draftTotalRow}>
            <span className={styles.draftTotalLabel}>{block.totalLabel}</span>
            <span className={styles.draftTotal}>{block.total}</span>
          </div>
          <button type="button" className={styles.draftAction}>
            {block.action}
          </button>
          <p className={styles.draftFootnote}>{block.footnote}</p>
        </div>
      )

    case 'creditCard':
      return (
        <div className={styles.creditCard}>
          <div className={styles.creditHead}>
            <motion.span
              className={styles.creditBadge}
              initial={{ scale: 0.86, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease, delay: 0.1 }}
            >
              {block.badge}
            </motion.span>
            <div className={styles.creditCopy}>
              <span className={styles.creditTitle}>{block.title}</span>
              <span className={styles.creditBody}>{block.body}</span>
            </div>
          </div>
          <div className={styles.creditFacts}>
            {block.facts.map((fact, index) => (
              <Fragment key={fact.title}>
                {index > 0 ? <span className={styles.creditFactRule} /> : null}
                <span className={styles.creditFact}>
                  <span className={styles.creditFactTitle}>{fact.title}</span>
                  <span className={styles.creditFactCaption}>{fact.caption}</span>
                </span>
              </Fragment>
            ))}
          </div>
        </div>
      )

    case 'priceBars':
      return (
        <div className={styles.bars}>
          <span className={styles.barsLabel}>{block.label}</span>
          <div className={styles.barsList}>
            {block.rows.map((bar, index) => (
              <div key={bar.name} className={styles.bar}>
                <div className={styles.barTop}>
                  <span className={styles.barName}>{bar.name}</span>
                  <span className={styles.barPrice} data-tone={bar.tone}>
                    {bar.price}
                  </span>
                </div>
                <div className={styles.barTrack}>
                  <motion.span
                    className={styles.barFill}
                    data-tone={bar.tone}
                    style={{ width: `${bar.fill}%` }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.7, ease, delay: 0.15 + index * 0.12 }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className={styles.barsFootnote}>{block.footnote}</p>
        </div>
      )

    case 'perspective':
      return (
        <div className={styles.perspective}>
          <span className={styles.perspectiveLabel}>{block.label}</span>
          <div className={styles.perspectiveFigure}>
            <span className={styles.perspectiveValue}>{block.value}</span>
            <span className={styles.perspectiveCaption}>{block.caption}</span>
          </div>
          <div className={styles.perspectiveGrid}>
            {Array.from({ length: block.total }).map((_, index) => (
              <motion.span
                key={index}
                className={styles.perspectiveTick}
                data-filled={index < block.filled}
                initial={{ opacity: 0, scaleY: 0.3 }}
                animate={{ opacity: 1, scaleY: 1 }}
                transition={{ duration: 0.3, ease, delay: 0.2 + index * 0.025 }}
              />
            ))}
          </div>
        </div>
      )

    case 'orderTrack':
      return (
        <div className={styles.track}>
          <div className={styles.trackHead}>
            <div>
              <div className={styles.trackRef}>{block.reference}</div>
              <div className={styles.trackTitle}>{block.title}</div>
            </div>
            <span className={styles.trackTotal}>{block.total}</span>
          </div>
          <div className={styles.trackSteps}>
            {block.steps.map((step, index) => (
              <motion.div
                key={step.title}
                className={styles.trackStep}
                data-state={step.state}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease, delay: 0.15 + index * 0.09 }}
              >
                <span className={styles.trackDot} data-state={step.state}>
                  {step.state === 'done' ? '✓' : step.state === 'active' ? '●' : ''}
                </span>
                <span className={styles.trackBody}>
                  <span className={styles.trackStepTitle}>{step.title}</span>
                  {step.caption ? (
                    <span className={styles.trackStepCaption}>{step.caption}</span>
                  ) : null}
                </span>
                <span className={styles.trackStamp}>{step.stamp}</span>
              </motion.div>
            ))}
          </div>
          <div className={styles.trackFooter}>
            <span className={styles.trackAvatar}>{block.handler.initials}</span>
            <span className={styles.trackHandler}>{block.handler.text}</span>
            <button type="button" className={styles.trackAction}>
              {block.handler.action}
            </button>
          </div>
        </div>
      )

    case 'emailToggle':
      return <EmailToggle title={block.title} address={block.address} />

    case 'documentBundle':
      return (
        <div className={styles.bundle}>
          <div className={styles.bundleHead}>
            <span className={styles.bundleLabel}>{block.label}</span>
            <span className={styles.bundleVolume}>{block.volume}</span>
          </div>
          {block.rows.map((doc) => (
            <div key={doc.title} className={styles.bundleRow}>
              <span className={styles.bundleKind}>{doc.kind}</span>
              <span className={styles.bundleTitle}>{doc.title}</span>
            </div>
          ))}
          <button type="button" className={styles.bundleAction}>
            {block.action}
          </button>
        </div>
      )

    case 'suggestions':
      return (
        <div className={styles.suggestions}>
          {block.items.map((item) => (
            <button key={item} type="button" className={styles.suggestion}>
              {item}
            </button>
          ))}
        </div>
      )

    default:
      return null
  }
}

/** The design shows this switched on; it stays switchable so the page has life. */
function EmailToggle({ title, address }: { title: string; address: string }) {
  const [on, setOn] = useState(true)

  return (
    <div className={styles.emailToggle}>
      <span className={styles.emailCopy}>
        <span className={styles.emailTitle}>{title}</span>
        <span className={styles.emailAddress}>{address}</span>
      </span>
      <button
        type="button"
        className={styles.switch}
        data-on={on}
        role="switch"
        aria-checked={on}
        aria-label={title}
        onClick={() => setOn((value) => !value)}
        style={{ justifyContent: on ? 'flex-end' : 'flex-start' }}
      >
        <motion.span layout className={styles.switchKnob} transition={{ duration: 0.28, ease }} />
      </button>
    </div>
  )
}
