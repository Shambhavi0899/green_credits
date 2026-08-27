/**
 * Shared shapes for the mock content. Every page reads from `src/data`, so
 * swapping the mock for a real API means changing those modules only.
 */

export type NavItem = {
  label: string
  href: string
}

export type Stat = {
  value: string
  caption: string
  /** The design tints exactly one figure per band copper. */
  accent?: boolean
}

export type JourneyStep = {
  index: string
  title: string
  body: string
  /** Step 05 sits on a copper tint in the design. */
  highlight?: boolean
}

export type ProvenanceStep = {
  index: string
  title: string
  body: string
  /** Icon drawn in the step's dot on the timeline rail. */
  icon:
    | 'seedling'
    | 'ruler'
    | 'book'
    | 'clipboard-check'
    | 'chart-line'
    | 'shield-check'
    | 'certificate'
    | 'recycle'
}

/** The eight provenance steps are grouped under three phase labels. */
export type ProvenancePhase = {
  label: string
  /** How many consecutive steps sit under this label. */
  count: number
}

/** One "20,000 tonnes is the same as…" tile in the worked example. */
export type Equivalency = {
  icon: 'car' | 'bulb' | 'road'
  figure: string
  label: string
}

export type CreditKind = {
  price: string
  icon: 'flame' | 'factory' | 'tree' | 'bowl'
  name: string
  supply: string
  /** "OUR OWN SUPPLY" is copper; everything else is graphite. */
  supplyAccent?: boolean
  body: string
}

export type ComparisonRow = {
  aspect: string
  broker: string
  greenCredit: string
}

export type ProofPoint = {
  label: string
  title: string
  body: string
}

export type ServiceCard = {
  pricing: string
  pricingAccent?: boolean
  title: string
  body: string
  action: string
  /** Where the panel's CTA points once this branch is selected. */
  href: string
}

export type ImageAsset = {
  src: string
  alt: string
}

export type ProjectFamily = ImageAsset & {
  caption: string
}

export type SellerTag = {
  label: string
  tone: 'verified' | 'neutral' | 'copper' | 'brass'
}

export type Seller = {
  slug: string
  initials: string
  /** Delacroix is our own supply, so its monogram sits on a copper tint. */
  initialsAccent?: boolean
  name: string
  location: string
  image: ImageAsset
  tags: SellerTag[]
  price: string
  priceCaption: string
  volume: string
  volumeCaption: string
  blurb: string
  /** Filter facets this seller answers to on the marketplace. */
  facets: string[]
  /** The credit listing "View credits" opens. */
  listingSlug: string
}

export type SpecRow = {
  label: string
  value: string
}

export type RegistryRow = {
  label: string
  value: string
  mono?: boolean
}

export type DocumentRow = {
  kind: string
  title: string
  action: string
}

export type CreditListing = {
  slug: string
  sellerSlug: string
  sellerName: string
  title: string
  /** Sentence-case name for the breadcrumb; the title is set in caps. */
  shortTitle: string
  summary: string
  tags: SellerTag[]
  gallery: ImageAsset[]
  extraFrames: number
  galleryCaption: string
  gallerySource: string
  price: string
  priceUnit: string
  availability: string
  defaultTonnes: string
  orderTotal: string
  registryCheckedAt: string
  registryNote: string
  registryRows: RegistryRow[]
  registryAction: string
  advisory: {
    label: string
    body: string
    action: string
  }
  project: SpecRow[]
  verification: SpecRow[]
  documents: DocumentRow[]
}

export type OrderStage = {
  title: string
  body: string
  stamp: string
  state: 'done' | 'active' | 'waiting'
}

export type ActiveOrder = {
  reference: string
  title: string
  total: string
  paidOn: string
  stages: OrderStage[]
  handlerNote: string
  actions: string[]
}

export type OrderStatusTone = 'copper' | 'oxide' | 'brass'

export type PastOrder = {
  title: string
  serial: string
  ordered: string
  tonnes: string
  status: { label: string; tone: OrderStatusTone }
  certificate: { label: string; emphasis?: boolean }
}

export type Listing = {
  title: string
  serial: string
  tonnes: string
  price: string
  priceMuted?: boolean
  status: { label: string; tone: OrderStatusTone }
}

export type Note = {
  title: string
  body: string
  tone: 'oxide' | 'copper'
}

export type SellTerm = {
  value: string
  accent?: boolean
  body: string
}

export type BlogPost = {
  slug: string
  category: string
  categoryTone: 'copper' | 'oxide'
  title: string
  excerpt: string
  checked: string
  readingTime: string
}

export type ArticleBand = {
  price: string
  title: string
  body: string
}

export type Article = {
  slug: string
  category: string
  readingTime: string
  title: string
  standfirst: string
  bylineName: string
  bylineMeta: string
  hero: ImageAsset
  heroCaption: string
  opening: string
  pullQuoteLabel: string
  pullQuote: string
  bandsHeading: string
  bands: ArticleBand[]
  closing: string
  cta: { title: string; body: string; action: string }
  sourcesLabel: string
  sources: string
}

/* --- Assistant ---------------------------------------------------------- */

export type AssistantBlock =
  | { kind: 'user'; text: string }
  | { kind: 'reply'; text: string }
  | { kind: 'shortlist'; label: string; filled: number; total: number; line: string }
  | { kind: 'blogLink'; label: string; title: string }
  | {
      kind: 'orderDraft'
      label: string
      seller: string
      tonnes: string
      totalLabel: string
      total: string
      action: string
      footnote: string
    }
  | {
      kind: 'creditCard'
      badge: string
      title: string
      body: string
      facts: { title: string; caption: string }[]
    }
  | {
      kind: 'priceBars'
      label: string
      rows: { name: string; price: string; fill: number; tone: 'brass' | 'copper' | 'slate' }[]
      footnote: string
    }
  | {
      kind: 'perspective'
      label: string
      value: string
      caption: string
      filled: number
      total: number
    }
  | {
      kind: 'orderTrack'
      reference: string
      title: string
      total: string
      steps: { title: string; caption?: string; stamp: string; state: 'done' | 'active' | 'waiting' }[]
      handler: { initials: string; text: string; action: string }
    }
  | { kind: 'emailToggle'; title: string; address: string }
  | {
      kind: 'documentBundle'
      label: string
      volume: string
      rows: { kind: string; title: string }[]
      action: string
    }
  | { kind: 'suggestions'; items: string[] }

export type AssistantConversation = {
  id: 'recommend' | 'explain' | 'track'
  chip: string
  /** Header caption; the signed-in thread carries the account name. */
  headline: string
  blocks: AssistantBlock[]
}
