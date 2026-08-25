import type { NavItem } from '@/lib/types'

export const brand = {
  name: 'GREEN CREDIT',
  tagline: 'VERIFIED CARBON CREDITS',
  accountTagline: 'YOUR ACCOUNT',
} as const

export const nav: NavItem[] = [
  { label: 'How it works', href: '/assistant' },
  { label: 'Sellers', href: '/sellers' },
  { label: 'Blog', href: '/blog' },
]

export const accountNav: NavItem[] = [
  { label: 'Orders', href: '/orders' },
  { label: 'Documents', href: '/orders' },
  { label: 'Sellers I use', href: '/sellers' },
]

export const account = {
  company: 'Meridian Foods',
  initials: 'MF',
} as const

export const assistantNudge =
  'New to this? I can explain it, or work out what you need.'
