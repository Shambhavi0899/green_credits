'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

/**
 * Next cannot auto-scroll to the top on navigation because the site header is
 * `position: sticky`, so a click from halfway down the marketplace would land
 * you halfway down the credit page. Reset it ourselves, without smooth
 * scrolling, so a new route always starts at the top.
 */
export function RouteScrollReset() {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])

  return null
}
