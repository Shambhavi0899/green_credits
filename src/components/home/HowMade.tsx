'use client'

import { motion } from 'framer-motion'
import { CountUp } from '@/components/motion/CountUp'
import { Eyebrow } from '@/components/site/Eyebrow'
import { rise, stagger, viewport } from '@/components/motion/variants'
import { equivalencies, howMade, projectFamilies, workedExample } from '@/data/home'
import { IconBulb, IconCar, IconRoad } from './icons'
import { ProvenanceTimeline } from './ProvenanceTimeline'
import styles from './home.module.css'

const EQUIVALENCY_ICONS = {
  car: IconCar,
  bulb: IconBulb,
  road: IconRoad,
} as const

export function HowMade() {
  return (
    <section className={`shell gutter ${styles.section} ${styles.howMade}`}>
      <Eyebrow>{howMade.label}</Eyebrow>

      <div className={styles.sectionHead}>
        <motion.h2
          className={`section-title ${styles.sectionHeadTitle}`}
          initial="hidden"
          whileInView="shown"
          viewport={viewport}
          variants={rise}
        >
          {howMade.title}
        </motion.h2>
        <motion.div
          className={styles.sectionHeadBody}
          initial="hidden"
          whileInView="shown"
          viewport={viewport}
          variants={rise}
          transition={{ delay: 0.1 }}
        >
          <p className="lede">{howMade.body}</p>
        </motion.div>
      </div>

      <motion.div
        className={styles.families}
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, amount: 0.25 }}
        variants={stagger(0.09)}
      >
        {projectFamilies.map((family) => (
          <motion.figure key={family.caption} className={styles.family} variants={rise}>
            <span className={styles.familyFrame}>
              <span
                className={styles.familyImage}
                style={{ backgroundImage: `url(${family.src})` }}
                role="img"
                aria-label={family.alt}
              />
            </span>
            <figcaption className={styles.familyCaption}>{family.caption}</figcaption>
          </motion.figure>
        ))}
      </motion.div>

      <motion.div
        className={styles.timelineWrap}
        initial="hidden"
        whileInView="shown"
        viewport={viewport}
        variants={rise}
      >
        <ProvenanceTimeline />
      </motion.div>

      <motion.div
        className={styles.callouts}
        initial="hidden"
        whileInView="shown"
        viewport={viewport}
        variants={rise}
      >
        <div className={styles.worked}>
          <div className={styles.workedCopy}>
            <span className={styles.workedLabel}>{workedExample.label}</span>
            <span className={styles.workedFigure}>
              <span className={styles.workedValue}>
                <CountUp value={workedExample.value} />
              </span>
              <span className={styles.workedUnit}>{workedExample.unit}</span>
            </span>
            <p className={styles.workedBody}>{workedExample.body}</p>
          </div>

          <div className={styles.equivalencies}>
            {equivalencies.map((item) => {
              const Icon = EQUIVALENCY_ICONS[item.icon]
              return (
                <div key={item.label} className={styles.equivalency}>
                  <span className={styles.equivalencyIcon}>
                    <Icon size={22} />
                  </span>
                  <span className={styles.equivalencyStat}>
                    <span className={styles.equivalencyFigure}>{item.figure}</span>
                    <span className={styles.equivalencyLabel}>{item.label}</span>
                    <span className={styles.equivalencyBar} aria-hidden="true" />
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        <p className={styles.workedSource}>{workedExample.source}</p>
      </motion.div>
    </section>
  )
}
