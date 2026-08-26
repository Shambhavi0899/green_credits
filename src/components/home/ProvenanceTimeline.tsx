'use client'

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { provenancePhases, provenanceSteps } from '@/data/home'
import type { ProvenanceStep } from '@/lib/types'
import {
  IconBook,
  IconCertificate,
  IconChartLine,
  IconClipboardCheck,
  IconRecycle,
  IconRuler,
  IconSeedling,
  IconShieldCheck,
} from './icons'
import styles from './home.module.css'

const ICONS = {
  seedling: IconSeedling,
  ruler: IconRuler,
  book: IconBook,
  'clipboard-check': IconClipboardCheck,
  'chart-line': IconChartLine,
  'shield-check': IconShieldCheck,
  certificate: IconCertificate,
  recycle: IconRecycle,
} as const

/** Window height in px — the design draws the frame at 520 × 460. */
const BOX_H = 460

/** Fraction of the pinned range over which the rail sweeps all eight steps. */
const SWEEP_END = 0.88

const clamp = (n: number, min: number, max: number) => Math.min(Math.max(n, min), max)

/** useLayoutEffect warns during SSR; the first measure must still beat paint. */
const useIsoLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect

type Row =
  | { kind: 'phase'; key: string; label: string; firstStep: number }
  | { kind: 'step'; key: string; step: ProvenanceStep; index: number }

/** Interleave the three phase labels into the eight-step run. */
function buildRows(): Row[] {
  const rows: Row[] = []
  let cursor = 0
  for (const phase of provenancePhases) {
    rows.push({ kind: 'phase', key: `phase-${phase.label}`, label: phase.label, firstStep: cursor })
    for (let i = 0; i < phase.count; i += 1) {
      const step = provenanceSteps[cursor]
      if (step) rows.push({ kind: 'step', key: step.index, step, index: cursor })
      cursor += 1
    }
  }
  return rows
}

const ROWS = buildRows()

/**
 * The eight provenance steps as a section that pins to the viewport while the
 * *page* scrolls past it.
 *
 * A tall parent supplies the scroll distance; the 520 × 340 frame sticks inside
 * it. Progress through that distance drives three things at once — how far the
 * content is translated up behind the frame, how far the copper rail has filled,
 * and which dot is solid. Nothing scrolls internally, so there is no second
 * scrollbar competing with the page.
 */
export function ProvenanceTimeline() {
  const pinRef = useRef<HTMLDivElement>(null)
  const stickyRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const dotRefs = useRef<(HTMLSpanElement | null)[]>([])

  /** Before the reader reaches the section, step 01 is the one in view. */
  const [active, setActive] = useState(0)
  const [fill, setFill] = useState(0)
  const [railEnd, setRailEnd] = useState(0)
  const [offset, setOffset] = useState(0)

  /** Centre of each dot in track coordinates — the shared transform cancels. */
  const dotCentres = useCallback(() => {
    const track = trackRef.current
    if (!track) return [] as number[]
    const trackTop = track.getBoundingClientRect().top
    return dotRefs.current.map((dot) => {
      if (!dot) return 0
      const rect = dot.getBoundingClientRect()
      return rect.top - trackTop + rect.height / 2
    })
  }, [])

  const measure = useCallback(() => {
    const pin = pinRef.current
    const sticky = stickyRef.current
    const track = trackRef.current
    if (!pin || !sticky || !track) return

    const centres = dotCentres()
    if (centres.length < 2) return

    /* How far through the pinned range the reader has scrolled. */
    const topOffset = parseFloat(getComputedStyle(sticky).top) || 0
    const distance = Math.max(pin.offsetHeight - sticky.offsetHeight, 1)
    const travelled = topOffset - pin.getBoundingClientRect().top
    const progress = clamp(travelled / distance, 0, 1)

    /* Same progress moves the content up behind the frame. */
    const contentTravel = Math.max(track.offsetHeight - BOX_H, 0)
    const shift = progress * contentTravel

    /**
     * The rail sweeps linearly from the first dot to the last. Anchoring to the
     * dots rather than to a fraction of the frame keeps the ends exact — step 01
     * at rest, step 08 at the finish — whatever the frame or rows measure.
     *
     * It completes a little before the pin ends so the last step holds for a
     * moment; sweeping to exactly 1.0 would light step 08 only on the final
     * pixel of scroll and skip straight past it.
     */
    const first = centres[0] ?? 0
    const last = centres[centres.length - 1] ?? 0
    const filled = first + clamp(progress / SWEEP_END, 0, 1) * (last - first)

    let next = 0
    centres.forEach((centre, index) => {
      if (centre <= filled) next = index
    })

    setOffset(shift)
    setFill(filled)
    setActive(next)
    setRailEnd(last)
  }, [dotCentres])

  useIsoLayoutEffect(() => {
    measure()
  }, [measure])

  useEffect(() => {
    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(measure)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [measure])

  const activeStep = provenanceSteps[active] ?? provenanceSteps[0]
  const ActiveIcon = ICONS[activeStep.icon]

  return (
    <div ref={pinRef} className={styles.timelinePin}>
      <div ref={stickyRef} className={styles.timelineSticky}>
        <div
          className={styles.timelineViewport}
          role="region"
          aria-label="How a carbon credit is made, step by step"
        >
          <div
            ref={trackRef}
            className={styles.timelineTrack}
            style={{ transform: `translate3d(0, ${-offset}px, 0)` }}
          >
            <span
              className={styles.timelineRail}
              style={{ height: `${railEnd}px` }}
              aria-hidden="true"
            />
            <span
              className={styles.timelineRailFill}
              style={{ height: `${fill}px` }}
              aria-hidden="true"
            />

            {ROWS.map((row) => {
              if (row.kind === 'phase') {
                return (
                  <div
                    key={row.key}
                    className={styles.timelinePhase}
                    data-reached={row.firstStep <= active}
                  >
                    <span className={styles.timelineGutter} aria-hidden="true" />
                    <span className={styles.timelinePhaseLabel}>{row.label}</span>
                  </div>
                )
              }

              const Icon = ICONS[row.step.icon]
              const state = row.index === active ? 'active' : row.index < active ? 'done' : 'ahead'

              return (
                <div key={row.key} className={styles.timelineStep} data-state={state}>
                  <span className={styles.timelineGutter}>
                    <span
                      className={styles.timelineDot}
                      ref={(node) => {
                        dotRefs.current[row.index] = node
                      }}
                    >
                      <Icon size={20} />
                    </span>
                  </span>
                  <span className={styles.timelineCopy}>
                    <span className={styles.timelineTitle}>{row.step.title}</span>
                    <span className={styles.timelineBody}>{row.step.body}</span>
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Restates the step the rail is already showing, so it is hidden from
            assistive tech rather than announced twice on every scroll tick. */}
        <aside className={styles.timelineCompanion} aria-hidden="true">
          <span className={styles.companionBadge}>
            <ActiveIcon size={32} strokeWidth={1.75} />
          </span>
          <span className={styles.companionCount}>
            <span className={styles.companionLabel}>STEP</span>
            <span className={styles.companionFigure}>
              <span className={styles.companionNumber}>{activeStep.index}</span>
              <span className={styles.companionTotal}>of {provenanceSteps.length}</span>
            </span>
          </span>
        </aside>
      </div>
    </div>
  )
}
