'use client'

import { motion } from 'framer-motion'
import { CountUp } from '@/components/motion/CountUp'
import { Eyebrow } from '@/components/site/Eyebrow'
import { rise, stagger, viewport } from '@/components/motion/variants'
import {
  distinction,
  howMade,
  projectFamilies,
  provenanceLeft,
  provenanceRight,
  workedExample,
} from '@/data/home'
import type { ProvenanceStep } from '@/lib/types'
import styles from './home.module.css'

function ProvenanceColumn({ steps, delay }: { steps: ProvenanceStep[]; delay: number }) {
  return (
    <motion.div
      className={styles.provenanceColumn}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0.15 }}
      variants={stagger(0.07, delay)}
    >
      {steps.map((step) => (
        <motion.div
          key={step.index}
          className={styles.provenanceRow}
          data-highlight={step.highlight ?? false}
          variants={rise}
        >
          <span className={styles.provenanceIndex}>{step.index}</span>
          <span className={styles.provenanceCopy}>
            <span className={styles.provenanceTitle}>{step.title}</span>
            <span className={styles.provenanceBody}>{step.body}</span>
          </span>
        </motion.div>
      ))}
    </motion.div>
  )
}

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

      <div className={styles.provenance}>
        <ProvenanceColumn steps={provenanceLeft} delay={0} />
        <ProvenanceColumn steps={provenanceRight} delay={0.08} />
      </div>

      <div className={styles.callouts}>
        <motion.div
          className={styles.worked}
          initial="hidden"
          whileInView="shown"
          viewport={viewport}
          variants={rise}
        >
          <span className={styles.workedLabel}>{workedExample.label}</span>
          <span className={styles.workedFigure}>
            <span className={styles.workedValue}>
              <CountUp value={workedExample.value} />
            </span>
            <span className={styles.workedUnit}>{workedExample.unit}</span>
          </span>
          <p className={styles.workedBody}>{workedExample.body}</p>
        </motion.div>

        <motion.div
          className={styles.distinction}
          initial="hidden"
          whileInView="shown"
          viewport={viewport}
          variants={rise}
          transition={{ delay: 0.09 }}
        >
          <span className={styles.distinctionLabel}>{distinction.label}</span>
          <p className={styles.distinctionTitle}>{distinction.title}</p>
          <p className={styles.distinctionBody}>{distinction.body}</p>
        </motion.div>
      </div>
    </section>
  )
}
