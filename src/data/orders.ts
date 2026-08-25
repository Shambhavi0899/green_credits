import type { ActiveOrder, Listing, Note, PastOrder, SellTerm } from '@/lib/types'

export const ordersIntro = {
  title: 'YOUR ORDERS',
  body: 'Everything you have bought, and where each order has got to. Nothing here needs explaining twice.',
  action: 'Browse sellers',
} as const

export const activeOrder: ActiveOrder = {
  reference: 'ORDER 2026-0184 · PLACED 18 AUG',
  title: '1,000 tonnes from Delacroix Well Services',
  total: '$23,800',
  paidOn: 'paid 19 Aug',
  stages: [
    {
      title: 'Documents',
      body: 'Inspector report and certificates received',
      stamp: '18 AUG',
      state: 'done',
    },
    {
      title: 'Verification',
      body: 'Serial numbers confirmed on the ACR registry',
      stamp: '18 AUG',
      state: 'done',
    },
    {
      title: 'Payment',
      body: 'Invoice settled by bank transfer',
      stamp: '19 AUG',
      state: 'done',
    },
    {
      title: 'Transfer',
      body: 'Seller is moving the credits into your name. Done by hand, so it takes a day or two.',
      stamp: 'IN PROGRESS',
      state: 'active',
    },
    {
      title: 'Delivered',
      body: 'Your certificate arrives here when the transfer clears',
      stamp: 'EXPECTED FRIDAY',
      state: 'waiting',
    },
  ],
  handlerNote:
    'Priya at Green Credit is handling this order. Ask the assistant for an update any time.',
  actions: ['All documents', 'Message us'],
}

export const pastOrdersLabel = 'EARLIER ORDERS'

export const pastOrdersColumns = ['WHAT YOU BOUGHT', 'ORDERED', 'TONNES', 'STATUS', 'CERTIFICATE']

export const pastOrders: PastOrder[] = [
  {
    title: 'Eleven wells, Caddo Parish',
    serial: 'ACR-1194-01-2025',
    ordered: '18 Aug 2026',
    tonnes: '1,000',
    status: { label: 'Delivered', tone: 'copper' },
    certificate: { label: 'Ready Friday' },
  },
  {
    title: 'Caddo Parish, first phase',
    serial: 'ACR-1188-01-2024',
    ordered: '3 Mar 2026',
    tonnes: '500',
    status: { label: 'Cancelled by you', tone: 'oxide' },
    certificate: { label: 'Download PDF', emphasis: true },
  },
  {
    title: 'Twenty-six wells, west Texas',
    serial: 'CAR-1041-04-2024 · someone else’s',
    ordered: '21 Jan 2026',
    tonnes: '2,000',
    status: { label: 'Delivered', tone: 'copper' },
    certificate: { label: 'Download' },
  },
]

export const cancellationNote: Note = {
  tone: 'oxide',
  title: 'Cancelling a credit is the part that counts, and you cannot undo it',
  body: 'Until you cancel a credit it is just something you own. Cancelling it against a reporting year is what lets you claim it, and it is permanent. We will never do it for you without an email from you saying so.',
}

export const sellSection = {
  label: 'IF YOU ALSO HOLD CREDITS TO SELL',
  title: 'YOU DID THE HARD PART. WE FIND THE BUYERS.',
  body: 'List a block, keep your registry account, keep your price. We take a stated commission on what closes and nothing on what does not.',
  action: 'List a block',
} as const

export const sellTerms: SellTerm[] = [
  { value: '4%', body: 'on a closed block, the same for everybody. No listing fee, no minimum term.' },
  { value: 'You', body: 'hold the units until settlement. We never take custody in between.' },
  {
    value: 'Listed',
    accent: true,
    body: 'next to our own, marked, sorted by what fits the buyer rather than our margin.',
  },
]

export const listingsColumns = ['YOUR LISTINGS', 'TONNES', 'YOUR PRICE', 'STATUS']

export const listings: Listing[] = [
  {
    title: 'Permian orphan wells III',
    serial: 'CAR-1041-04-2024',
    tonnes: '2,000',
    price: '$21.15',
    status: { label: 'Live, 3 buyers looking', tone: 'copper' },
  },
  {
    title: 'Anadarko cluster, phase 2',
    serial: 'ACR-1207-01-2026',
    tonnes: '4,400',
    price: 'not set',
    priceMuted: true,
    status: { label: 'Waiting on your verifier', tone: 'brass' },
  },
]

export const listingNote: Note = {
  tone: 'copper',
  title: 'Six checks before anything of yours goes live',
  body: 'Legal entity, registry account, serial ownership, listing terms, an independent verifier, and payout details. Anyone can claim to hold a block, so the check is whether the registry says you do. It usually takes two days.',
}
