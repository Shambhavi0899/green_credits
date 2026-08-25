'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { composer, conversations } from '@/data/assistant'
import { assistantNudge } from '@/data/site'
import type { AssistantConversation } from '@/lib/types'
import { AssistantBlockView, blockVariants } from './AssistantBlocks'
import styles from './AssistantDock.module.css'

const ease = [0.16, 1, 0.3, 1] as const

/** The concentric mark used on the button and in the panel header. */
function AssistantMark({ size, color }: { size: number; color: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 52 52"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.fabMark}
      aria-hidden
    >
      <circle
        cx="26"
        cy="26"
        r="24"
        fill="none"
        stroke={color}
        strokeWidth={size > 20 ? 3 : 4}
        opacity={0.45}
      />
      <circle
        cx="26"
        cy="26"
        r="16"
        fill="none"
        stroke={color}
        strokeWidth={size > 20 ? 3 : 4}
        opacity={0.7}
      />
      <circle cx="26" cy="26" r="7" fill={color} />
    </svg>
  )
}

type AssistantDockProps = {
  /** Which thread opens first. The marketplace leads with the shortlist. */
  initialConversation?: AssistantConversation['id']
  /** The design shows the nudge card on the home, marketplace and article pages. */
  showNudge?: boolean
}

export function AssistantDock({
  initialConversation = 'recommend',
  showNudge = true,
}: AssistantDockProps) {
  const [open, setOpen] = useState(false)
  const [nudgeDismissed, setNudgeDismissed] = useState(false)
  const [activeId, setActiveId] = useState<AssistantConversation['id']>(initialConversation)
  const threadRef = useRef<HTMLDivElement>(null)

  const conversation =
    conversations.find((item) => item.id === activeId) ?? conversations[0]

  // A freshly switched thread should start at the top of the conversation.
  useEffect(() => {
    threadRef.current?.scrollTo({ top: 0 })
  }, [activeId])

  // Escape closes the panel, as it should for anything that overlays a page.
  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const nudgeVisible = showNudge && !nudgeDismissed && !open

  return (
    <div className={styles.dock}>
      <AnimatePresence>
        {open ? (
          <motion.section
            key="panel"
            className={styles.panel}
            data-conversation={conversation.id}
            aria-label="Green Credit assistant"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ type: 'spring', stiffness: 260, damping: 26, mass: 0.9 }}
          >
            <header className={styles.panelHead}>
              <div className={styles.panelBrand}>
                <AssistantMark size={18} color="#5CBC8D" />
                <AnimatePresence mode="wait">
                  <motion.span
                    key={conversation.headline}
                    className={styles.panelTitle}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.22, ease }}
                  >
                    {conversation.headline}
                  </motion.span>
                </AnimatePresence>
              </div>
              <div className={styles.panelControls}>
                <span className={`${styles.panelControl} ${styles.panelControlExpand}`} aria-hidden>
                  ⛶
                </span>
                <button
                  type="button"
                  className={`${styles.panelControl} ${styles.panelControlClose}`}
                  onClick={() => setOpen(false)}
                  aria-label="Minimise the assistant"
                >
                  –
                </button>
              </div>
            </header>

            <div className={styles.chips}>
              {conversations.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={styles.chip}
                  data-current={item.id === activeId}
                  onClick={() => setActiveId(item.id)}
                >
                  {item.chip}
                </button>
              ))}
            </div>

            <div className={styles.thread} ref={threadRef}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={conversation.id}
                  style={{ display: 'contents' }}
                  initial="hidden"
                  animate="shown"
                  exit="hidden"
                  variants={{
                    hidden: {},
                    shown: { transition: { staggerChildren: 0.08 } },
                  }}
                >
                  {conversation.blocks.map((block, index) => (
                    <motion.div key={`${conversation.id}-${index}`} variants={blockVariants}>
                      <AssistantBlockView block={block} />
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            <form className={styles.composer} onSubmit={(event) => event.preventDefault()}>
              <input
                className={styles.composerField}
                placeholder={composer.placeholder}
                aria-label="Ask the assistant"
              />
              <button type="submit" className={styles.composerSend}>
                {composer.send}
              </button>
            </form>
          </motion.section>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {nudgeVisible ? (
          <motion.div
            key="nudge"
            className={styles.nudge}
            initial={{ opacity: 0, x: 20, y: 8 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 12 }}
            transition={{ duration: 0.5, ease, delay: 1.1 }}
          >
            <button
              type="button"
              className={styles.nudgeText}
              onClick={() => setOpen(true)}
              style={{ textAlign: 'left' }}
            >
              {assistantNudge}
            </button>
            <button
              type="button"
              className={styles.nudgeClose}
              onClick={() => setNudgeDismissed(true)}
              aria-label="Dismiss"
            >
              ✕
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.button
        type="button"
        className={styles.fab}
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? 'Close the assistant' : 'Open the assistant'}
        aria-expanded={open}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.25, ease }}
      >
        {!open ? (
          <>
            <span className={styles.ping} aria-hidden />
            <span className={styles.ping} aria-hidden />
          </>
        ) : null}
        <AssistantMark size={32} color="#FFFFFF" />
      </motion.button>
    </div>
  )
}
