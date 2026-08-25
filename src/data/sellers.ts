import type { CreditListing, Seller } from '@/lib/types'

export const marketplace = {
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Sellers', href: '/sellers' },
  ],
  title: '18 VERIFIED SELLERS, SIDE BY SIDE.',
  body: 'Every seller here has passed the same six checks. Compare what they sell, what they charge and how many orders they have completed. You do not need an account to look.',
  aside: {
    label: 'NOT SURE WHICH ONE?',
    body: 'Tell the assistant your volume and any policy limits, and it will shortlist three.',
    action: 'Ask the assistant',
  },
  /** The first facet is the resting state in the design. */
  facets: ['Everything', 'Sealed wells', 'Clean coal', 'Forestry', 'Cookstoves'],
  exclusionFacet: 'Nothing from oil and gas',
  meta: '6 SUPPLIERS · CHECKED 06:12 CT TODAY',
} as const

export const sellers: Seller[] = [
  {
    slug: 'delacroix-well-services',
    initials: 'DW',
    initialsAccent: true,
    name: 'Delacroix Well Services',
    location: 'Lafayette, Louisiana',
    image: { src: '/images/sealing-wells.png', alt: 'Sealed wellhead in Louisiana grassland' },
    tags: [
      { label: 'Verified', tone: 'verified' },
      { label: 'Sealed wells', tone: 'neutral' },
      { label: 'Insured', tone: 'neutral' },
    ],
    price: '$23.80',
    priceCaption: 'from, a tonne',
    volume: '42,000',
    volumeCaption: 'tonnes available',
    blurb:
      'Seals leaking oil wells across Louisiana and Texas. 61 orders completed here, all delivered on time.',
    facets: ['Everything', 'Sealed wells'],
    listingSlug: 'bayou-teche-phase-2',
  },
  {
    slug: 'mata-viva-restauracao',
    initials: 'MV',
    name: 'Mata Viva Restauração',
    location: 'Goiás, Brazil',
    image: { src: '/images/forestry-replanting.png', alt: 'Replanted Cerrado in contoured rows' },
    tags: [
      { label: 'Verified', tone: 'verified' },
      { label: 'Forestry', tone: 'neutral' },
      { label: 'No fossil fuel link', tone: 'copper' },
    ],
    price: '$29.40',
    priceCaption: 'from, a tonne',
    volume: '8,500',
    volumeCaption: 'tonnes available',
    blurb:
      'Replants native Cerrado with smallholder farmers. Suits buyers whose policy rules out anything from oil and gas.',
    facets: ['Everything', 'Forestry', 'Nothing from oil and gas'],
    listingSlug: 'serra-do-facao-block-4',
  },
  {
    slug: 'sabine-environmental',
    initials: 'SE',
    name: 'Sabine Environmental',
    location: 'Midland, Texas',
    image: { src: '/images/methane-capture.png', alt: 'Gas processing plant with capture pipework' },
    tags: [
      { label: 'Verified', tone: 'verified' },
      { label: 'Sealed wells', tone: 'neutral' },
      { label: 'Not insured', tone: 'brass' },
    ],
    price: '$21.15',
    priceCaption: 'from, a tonne',
    volume: '14,000',
    volumeCaption: 'tonnes available',
    blurb:
      'Cheapest sealed-well supply on the platform. No insurance cover, so worth reading the listing before you commit.',
    facets: ['Everything', 'Sealed wells', 'Clean coal'],
    listingSlug: 'permian-orphan-wells-group-9',
  },
]

export const creditListings: CreditListing[] = [
  {
    slug: 'bayou-teche-phase-2',
    sellerSlug: 'delacroix-well-services',
    sellerName: 'Delacroix Well Services',
    title: 'BAYOU TECHE, PHASE 2',
    shortTitle: 'Bayou Teche, phase 2',
    summary:
      'Eleven leaking oil wells sealed across Caddo and Bossier parishes in Louisiana between June and September 2025. Measured before and after by an independent inspector.',
    tags: [
      { label: 'Verified on the registry today', tone: 'verified' },
      { label: 'Insured', tone: 'neutral' },
      { label: 'Comes from oil and gas', tone: 'brass' },
    ],
    gallery: [
      { src: '/images/bayou-teche-01.png', alt: 'Sealed wellhead on reseeded ground, Caddo Parish' },
      { src: '/images/bayou-teche-02.png', alt: 'Older wellhead awaiting plugging' },
      { src: '/images/methane-capture.png', alt: 'Gas processing plant with capture pipework' },
      { src: '/images/bayou-teche-04.png', alt: 'Reseeded ground where a well once stood' },
    ],
    extraFrames: 18,
    galleryCaption: 'WELL 07 OF 11, SEALED AND RESEEDED. CADDO PARISH, SEPTEMBER 2025.',
    gallerySource: 'SUPPLIED BY THE SELLER',
    price: '$23.80',
    priceUnit: 'a tonne',
    availability: '1,000 tonnes available · insurance included',
    defaultTonnes: '1,000',
    orderTotal: '$23,800',
    registryCheckedAt: 'CHECKED 06:12 CT',
    registryNote:
      'This credit exists on a register we do not own or control. Look it up yourself before you buy anything.',
    registryRows: [
      { label: 'Registry', value: 'American Carbon Registry' },
      { label: 'Project number', value: '1194', mono: true },
      { label: 'Year measured', value: '2025', mono: true },
      { label: 'Serial numbers', value: '8801 to 9800', mono: true },
    ],
    registryAction: 'Open it on the ACR site',
    advisory: {
      label: 'WORTH KNOWING',
      body: 'These credits come from oil and gas infrastructure. Some companies will not buy that. If yours is one of them, look at forestry sellers instead and we will not argue with you.',
      action: 'Show me forestry sellers',
    },
    project: [
      { label: 'What was done', value: 'Eleven wells cemented shut, site cleaned and reseeded' },
      { label: 'Where', value: 'Caddo and Bossier parishes, Louisiana' },
      { label: 'When', value: 'June to September 2025' },
      { label: 'Who did the work', value: 'Delacroix Well Services, Lafayette LA' },
    ],
    verification: [
      { label: 'Inspector', value: 'Ardoin Verification Group, independent of the seller' },
      { label: 'Method used', value: 'Metered before and after, ACR methodology v1.1' },
      { label: 'Insurance', value: 'Lloyd’s Syndicate 1922, pays out if these are ever cancelled' },
    ],
    documents: [
      { kind: 'PDF', title: 'Inspector’s report, September 2025', action: 'Download' },
      { kind: 'CSV', title: 'Meter readings, all eleven wells', action: 'Download' },
      { kind: 'PDF', title: 'Louisiana state plugging certificates', action: 'Download' },
      { kind: 'JPG', title: 'Site photographs, 22 frames', action: 'Download' },
    ],
  },
  {
    slug: 'serra-do-facao-block-4',
    sellerSlug: 'mata-viva-restauracao',
    sellerName: 'Mata Viva Restauração',
    title: 'SERRA DO FACÃO, BLOCK 4',
    shortTitle: 'Serra do Facão, block 4',
    summary:
      'Four hundred hectares of native Cerrado replanted with eighty smallholder families in Goiás between March 2024 and August 2025. Growth measured from satellite and confirmed on the ground twice a year.',
    tags: [
      { label: 'Verified on the registry today', tone: 'verified' },
      { label: 'Insured', tone: 'neutral' },
      { label: 'No fossil fuel link', tone: 'copper' },
    ],
    gallery: [
      { src: '/images/forestry-replanting.png', alt: 'Replanted Cerrado in contoured rows of red soil' },
      { src: '/images/article-forest.png', alt: 'Established canopy running into low cloud' },
      { src: '/images/bayou-teche-04.png', alt: 'Cleared ground before planting' },
      { src: '/images/renewable-energy.png', alt: 'Monitoring station at the edge of the block' },
    ],
    extraFrames: 14,
    galleryCaption: 'BLOCK 4, EIGHTEEN MONTHS AFTER PLANTING. GOIÁS, AUGUST 2025.',
    gallerySource: 'SUPPLIED BY THE SELLER',
    price: '$29.40',
    priceUnit: 'a tonne',
    availability: '8,500 tonnes available · insurance included',
    defaultTonnes: '1,000',
    orderTotal: '$29,400',
    registryCheckedAt: 'CHECKED 06:12 CT',
    registryNote:
      'This credit exists on a register we do not own or control. Look it up yourself before you buy anything.',
    registryRows: [
      { label: 'Registry', value: 'Verra' },
      { label: 'Project number', value: '2841', mono: true },
      { label: 'Year measured', value: '2025', mono: true },
      { label: 'Serial numbers', value: '4400 to 12900', mono: true },
    ],
    registryAction: 'Open it on the Verra site',
    advisory: {
      label: 'WORTH KNOWING',
      body: 'A forest has to stay standing to keep counting. This block is watched for thirty years and insured against fire and clearance, which is most of why it costs more than a sealed well.',
      action: 'Compare this with sealed wells',
    },
    project: [
      { label: 'What was done', value: 'Four hundred hectares replanted with native Cerrado species' },
      { label: 'Where', value: 'Serra do Facão, Goiás, Brazil' },
      { label: 'When', value: 'March 2024 to August 2025' },
      { label: 'Who did the work', value: 'Mata Viva Restauração with eighty smallholder families' },
    ],
    verification: [
      { label: 'Inspector', value: 'Instituto Verde Auditoria, independent of the seller' },
      { label: 'Method used', value: 'Satellite biomass with twice-yearly ground plots, VM0047' },
      { label: 'Insurance', value: 'Lloyd’s Syndicate 1922, covers fire and clearance for thirty years' },
    ],
    documents: [
      { kind: 'PDF', title: 'Verifier’s report, August 2025', action: 'Download' },
      { kind: 'CSV', title: 'Ground plot measurements, all 400 hectares', action: 'Download' },
      { kind: 'PDF', title: 'Land tenure and community agreements', action: 'Download' },
      { kind: 'JPG', title: 'Site photographs, 18 frames', action: 'Download' },
    ],
  },
  {
    slug: 'permian-orphan-wells-group-9',
    sellerSlug: 'sabine-environmental',
    sellerName: 'Sabine Environmental',
    title: 'PERMIAN ORPHAN WELLS, GROUP 9',
    shortTitle: 'Permian orphan wells, group 9',
    summary:
      'Twenty-six orphaned gas wells cemented shut across Ector and Midland counties in Texas between January and June 2025. Metered before and after by an independent inspector.',
    tags: [
      { label: 'Verified on the registry today', tone: 'verified' },
      { label: 'Not insured', tone: 'neutral' },
      { label: 'Comes from oil and gas', tone: 'brass' },
    ],
    gallery: [
      { src: '/images/methane-capture.png', alt: 'Gas processing plant with capture pipework' },
      { src: '/images/bayou-teche-02.png', alt: 'Orphaned wellhead awaiting plugging' },
      { src: '/images/sealing-wells.png', alt: 'Wellhead standing in west Texas grassland' },
      { src: '/images/bayou-teche-01.png', alt: 'Sealed and cleared well site' },
    ],
    extraFrames: 27,
    galleryCaption: 'WELL 14 OF 26, CEMENTED AND CAPPED. ECTOR COUNTY, JUNE 2025.',
    gallerySource: 'SUPPLIED BY THE SELLER',
    price: '$21.15',
    priceUnit: 'a tonne',
    availability: '14,000 tonnes available · no insurance cover',
    defaultTonnes: '1,000',
    orderTotal: '$21,150',
    registryCheckedAt: 'CHECKED 06:12 CT',
    registryNote:
      'This credit exists on a register we do not own or control. Look it up yourself before you buy anything.',
    registryRows: [
      { label: 'Registry', value: 'Climate Action Reserve' },
      { label: 'Project number', value: '1041', mono: true },
      { label: 'Year measured', value: '2025', mono: true },
      { label: 'Serial numbers', value: '1200 to 15200', mono: true },
    ],
    registryAction: 'Open it on the CAR site',
    advisory: {
      label: 'WORTH KNOWING',
      body: 'This block carries no cancellation insurance, which is why it is the cheapest sealed-well supply on the platform. At about $2.50 a tonne the cover is worth buying if your auditor asks for it.',
      action: 'Show me insured sealed wells',
    },
    project: [
      { label: 'What was done', value: 'Twenty-six orphaned wells cemented shut and capped' },
      { label: 'Where', value: 'Ector and Midland counties, Texas' },
      { label: 'When', value: 'January to June 2025' },
      { label: 'Who did the work', value: 'Sabine Environmental, Midland TX' },
    ],
    verification: [
      { label: 'Inspector', value: 'Llano Measurement Services, independent of the seller' },
      { label: 'Method used', value: 'Metered before and after, CAR methodology v2.0' },
      { label: 'Insurance', value: 'None on this block. Cover can be added at about $2.50 a tonne' },
    ],
    documents: [
      { kind: 'PDF', title: 'Inspector’s report, June 2025', action: 'Download' },
      { kind: 'CSV', title: 'Meter readings, all twenty-six wells', action: 'Download' },
      { kind: 'PDF', title: 'Texas Railroad Commission plugging records', action: 'Download' },
      { kind: 'JPG', title: 'Site photographs, 31 frames', action: 'Download' },
    ],
  },
]

export function getCreditListing(slug: string): CreditListing | undefined {
  return creditListings.find((listing) => listing.slug === slug)
}
