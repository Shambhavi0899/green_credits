'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { account, accountNav, brand } from '@/data/site'
import styles from './AccountHeader.module.css'

/**
 * Signed-in chrome for the orders area. The active tab rule is a shared layout
 * element, so it slides between tabs rather than cutting.
 */
export function AccountHeader() {
  const [active, setActive] = useState(accountNav[0].label)

  return (
    <>
      <div className={styles.bar}>
        <div className={`shell gutter ${styles.barInner}`}>
          <Link href="/" className={styles.brand} aria-label="Green Credit, home">
            <span className={styles.wordmark}>{brand.name}</span>
            <span className={styles.tagline}>{brand.accountTagline}</span>
          </Link>
          <div className={styles.account}>
            <span className={styles.company}>{account.company}</span>
            <span className={styles.avatar}>{account.initials}</span>
          </div>
        </div>
      </div>

      <div className={styles.tabs}>
        <nav className={`shell gutter ${styles.tabsInner}`}>
          {accountNav.map((item) => {
            const current = item.label === active
            return (
              <button
                key={item.label}
                type="button"
                className={styles.tab}
                data-current={current}
                onClick={() => setActive(item.label)}
              >
                {item.label}
                {current ? (
                  <motion.span
                    layoutId="account-tab-rule"
                    className={styles.tabRule}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  />
                ) : null}
              </button>
            )
          })}
        </nav>
      </div>
    </>
  )
}
