'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { brand, nav } from '@/data/site'
import styles from './SiteHeader.module.css'

type SiteHeaderProps = {
  /** The blog and marketplace artboards space the menu wider than the home page. */
  spacing?: 'default' | 'wide'
}

export function SiteHeader({ spacing = 'default' }: SiteHeaderProps) {
  const pathname = usePathname()
  const [stuck, setStuck] = useState(false)

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={styles.header} data-stuck={stuck}>
      <div className={`shell gutter ${styles.inner}`}>
        <Link href="/" className={styles.brand} aria-label="Green Credit, home">
          <span className={styles.wordmark}>{brand.name}</span>
          <span className={styles.tagline}>{brand.tagline}</span>
        </Link>

        <nav className={styles.menu} data-spacing={spacing}>
          {nav.map((item) => (
            <Link
              key={item.href + item.label}
              href={item.href}
              className={styles.link}
              data-current={pathname === item.href}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/signin" className={styles.cta}>
            Sign in
          </Link>
        </nav>
      </div>
    </header>
  )
}
