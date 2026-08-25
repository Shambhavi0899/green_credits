'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { ease } from '@/components/motion/variants'
import { signIn, signUp, signUpAside } from '@/data/auth'
import { brand } from '@/data/site'
import styles from './Auth.module.css'

type Mode = 'create' | 'signin'

/** Paper artboard "04 Sign up and sign in". The two tabs are one panel that
 *  cross-fades; the copper rule slides between them as a shared element. */
export function AuthView() {
  const router = useRouter()
  const [mode, setMode] = useState<Mode>('create')
  const creating = mode === 'create'

  /* Nothing is validated — this is mock data. Signing in is simply the way
     into the account area, which is what the panel on the right promises. */
  const enterAccount = (event: React.SyntheticEvent) => {
    event.preventDefault()
    router.push('/orders')
  }

  return (
    <section className={styles.split}>
      <div className={styles.form}>
        <Link href="/" className={styles.wordmark}>
          {brand.name}
        </Link>

        <div className={styles.tabs} role="tablist">
          {signUp.tabs.map((label, index) => {
            const value: Mode = index === 0 ? 'create' : 'signin'
            const current = value === mode
            return (
              <button
                key={label}
                type="button"
                role="tab"
                aria-selected={current}
                className={styles.tab}
                data-current={current}
                onClick={() => setMode(value)}
              >
                {label}
                {current ? (
                  <motion.span
                    layoutId="auth-tab-rule"
                    className={styles.tabRule}
                    transition={{ duration: 0.4, ease }}
                  />
                ) : null}
              </button>
            )
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.32, ease }}
          >
            <h1 className={styles.title}>{creating ? signUp.title : signIn.title}</h1>
            <p className={styles.lead}>{creating ? signUp.body : signIn.body}</p>

            <form className={styles.fields} onSubmit={enterAccount}>
              <label className={styles.field}>
                <span className={styles.label}>{signUp.fields.email.label}</span>
                <input
                  className={styles.input}
                  type={signUp.fields.email.type}
                  placeholder={signUp.fields.email.placeholder}
                />
              </label>

              {creating ? (
                <div className={styles.pair}>
                  <label className={styles.field}>
                    <span className={styles.label}>{signUp.fields.name.label}</span>
                    <input
                      className={styles.input}
                      type={signUp.fields.name.type}
                      placeholder={signUp.fields.name.placeholder}
                    />
                  </label>
                  <label className={styles.field}>
                    <span className={styles.label}>{signUp.fields.company.label}</span>
                    <input
                      className={styles.input}
                      type={signUp.fields.company.type}
                      placeholder={signUp.fields.company.placeholder}
                    />
                  </label>
                </div>
              ) : null}

              <label className={styles.field}>
                <span className={styles.label}>{signUp.fields.password.label}</span>
                <input
                  className={styles.input}
                  type={signUp.fields.password.type}
                  placeholder={signUp.fields.password.placeholder}
                />
              </label>

              <motion.button
                type="submit"
                className={styles.submit}
                whileHover={{ y: -1 }}
                whileTap={{ y: 0 }}
                transition={{ duration: 0.2, ease }}
              >
                {creating ? signUp.submit : signIn.submit}
              </motion.button>

              <div className={styles.divider}>
                <span className={styles.dividerRule} />
                <span className={styles.dividerLabel}>{signUp.divider}</span>
                <span className={styles.dividerRule} />
              </div>

              <button type="button" className={styles.federated} onClick={enterAccount}>
                {signUp.federated}
              </button>

              <p className={styles.footnote}>
                {creating ? signUp.footnote : signIn.footnote}
              </p>
            </form>
          </motion.div>
        </AnimatePresence>
      </div>

      <aside className={styles.aside}>
        <motion.span
          className={styles.asideLabel}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
        >
          {signUpAside.label}
        </motion.span>

        <motion.h2
          className={styles.asideTitle}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease, delay: 0.18 }}
        >
          {signUpAside.title}
        </motion.h2>

        <div className={styles.points}>
          {signUpAside.points.map((point, index) => (
            <motion.div
              key={point}
              className={styles.point}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.28 + index * 0.1 }}
            >
              <span className={styles.pointIndex}>{String(index + 1).padStart(2, '0')}</span>
              <span className={styles.pointBody}>{point}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.asideNote}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.62 }}
        >
          <span className={styles.asideNoteLabel}>{signUpAside.note.label}</span>
          <span className={styles.asideNoteBody}>{signUpAside.note.body}</span>
        </motion.div>
      </aside>
    </section>
  )
}
