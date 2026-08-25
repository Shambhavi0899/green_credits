'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ease } from '@/components/motion/variants'
import { askBand } from '@/data/home'
import styles from './home.module.css'

export function AskBand() {
  const [question, setQuestion] = useState('')

  return (
    <section className={styles.ask}>
      <div className={`shell gutter ${styles.askInner}`}>
        <motion.div
          className={styles.askCopy}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease }}
        >
          <h2 className={styles.askTitle}>{askBand.title}</h2>
          <p className={styles.askBody}>{askBand.body}</p>
        </motion.div>

        <motion.form
          className={styles.askForm}
          onSubmit={(event) => event.preventDefault()}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
        >
          <input
            className={styles.askField}
            placeholder={askBand.placeholder}
            aria-label={askBand.title}
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
          />
          <motion.button
            type="submit"
            className={styles.askSubmit}
            whileHover={{ y: -1 }}
            whileTap={{ y: 0 }}
            transition={{ duration: 0.2, ease }}
          >
            {askBand.action}
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}
