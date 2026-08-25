import Link from 'next/link'
import styles from './Breadcrumb.module.css'
import { Fragment } from 'react'

export type Crumb = { label: string; href?: string }

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav className={styles.crumbs} aria-label="Breadcrumb">
      {items.map((item, index) => (
        <Fragment key={item.label}>
          {item.href ? (
            <Link href={item.href} className={styles.link}>
              {item.label}
            </Link>
          ) : (
            <span className={styles.current}>{item.label}</span>
          )}
          {index < items.length - 1 ? <span aria-hidden>/</span> : null}
        </Fragment>
      ))}
    </nav>
  )
}
