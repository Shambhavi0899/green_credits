import type { Article, BlogPost } from '@/lib/types'

export const blogIntro = {
  label: 'THE BLOG',
  title: 'EVERYTHING WE KNOW, WRITTEN DOWN FOR SOMEBODY NEW TO THIS.',
  body: 'The assistant drafts these from the registries and the rulebooks, and a person here checks every one before it goes up. It is also where the assistant gets its answers, so the blog and the chat always say the same thing.',
} as const

export const featuredPost = {
  slug: 'a-carbon-credit-explained',
  badge: 'START HERE',
  meta: '9 MIN READ · CHECKED 21 AUG 2026',
  title: 'A carbon credit, explained without any jargon',
  excerpt:
    'What one credit actually is, who checks it, why two credits can cost very different amounts, and the four questions worth asking any seller before you sign anything.',
  action: 'Read the guide',
  image: { src: '/images/blog-inspector.png', alt: 'Inspector taking a meter reading at a wellhead' },
} as const

export const posts: BlogPost[] = [
  {
    slug: 'can-we-put-this-through-as-a-deduction',
    category: 'FOR FINANCE',
    categoryTone: 'copper',
    title: 'Can we put this through as a deduction?',
    excerpt:
      'How offsets are usually treated on the books, and the paperwork your accountant will ask you for.',
    checked: 'CHECKED 14 AUG 2026',
    readingTime: '6 MIN READ',
  },
  {
    slug: 'why-one-tonne-costs-9-and-another-400',
    category: 'CHOOSING',
    categoryTone: 'copper',
    title: 'Why one tonne costs $9 and another costs $400',
    excerpt:
      'Trees, sealed wells, cookstoves and machines that pull carbon out of the air, side by side on price and risk.',
    checked: 'CHECKED 19 AUG 2026',
    readingTime: '7 MIN READ',
  },
  {
    slug: 'the-four-ways-people-get-sold-junk-credits',
    category: 'BEFORE YOU SIGN',
    categoryTone: 'oxide',
    title: 'The four ways people get sold junk credits',
    excerpt:
      'Expired units resold, double counting, made-up certificates, and projects that would have happened anyway.',
    checked: 'CHECKED 22 AUG 2026',
    readingTime: '6 MIN READ',
  },
]

export const editorial = {
  label: 'HOW THESE GET WRITTEN',
  title: 'The assistant writes the first draft. A person signs it off.',
  body: 'Everything here is drafted from the registries and the published rules, then read by someone here before it goes up. Nothing about price or money is ever written by the assistant, and every post carries the date it was last checked so you can see when it went stale.',
  steps: [
    'It watches the registries and the rulebooks for anything that changed',
    'It drafts the guide and lists every source it used',
    'Somebody here reads it, edits it, and puts their name to it',
    'The date at the top is the day a human last looked, not the day it published',
  ],
} as const

/** Home page teaser copy differs slightly from the blog index in the design. */
export const homeTeasers = [
  {
    slug: 'a-carbon-credit-explained',
    meta: 'START HERE · 9 MIN',
    tone: 'copper' as const,
    title: 'What a carbon credit actually is',
    excerpt:
      'In plain words, with no jargon and no sales pitch. Read this one first if the whole thing is new to you.',
  },
  {
    slug: 'why-one-tonne-costs-9-and-another-400',
    meta: 'CHOOSING · 7 MIN',
    tone: 'copper' as const,
    title: 'Why one tonne costs $9 and another $400',
    excerpt:
      'The price gap is not random. It comes down to how long the carbon stays put and how hard it is to prove.',
  },
  {
    slug: 'the-four-ways-people-get-sold-junk-credits',
    meta: 'BEFORE YOU BUY · 6 MIN',
    tone: 'oxide' as const,
    title: 'How to spot a seller you should walk away from',
    excerpt:
      'Expired credits resold, fake certificates, projects that would have happened anyway. Four things to check first.',
  },
]

export const articles: Article[] = [
  {
    slug: 'a-carbon-credit-explained',
    category: 'START HERE',
    readingTime: '9 MIN READ',
    title: 'A CARBON CREDIT, EXPLAINED WITHOUT ANY JARGON',
    standfirst:
      'One credit is one tonne of greenhouse gas that did not end up in the air. Everything else — the registries, the inspectors, the serial numbers — exists to make that one sentence checkable by a stranger.',
    bylineName: 'Drafted by the assistant, checked and edited by a person here',
    bylineMeta: 'LAST CHECKED 21 AUG 2026 · 5 SOURCES LISTED AT THE FOOT',
    hero: {
      src: '/images/blog-inspector.png',
      alt: 'Inspector taking a meter reading at a wellhead',
    },
    heroCaption: 'THE MEASUREMENT IS THE PRODUCT. EVERYTHING ELSE IS PAPERWORK ABOUT THE MEASUREMENT.',
    opening:
      'A credit is not a donation and it is not a share in a project. It is a unit on a public register, created only after somebody measured a reduction and somebody else checked the measurement. When you buy one and cancel it, that unit can never be sold again.',
    pullQuoteLabel: 'THE SHORT ANSWER',
    pullQuote:
      'One tonne of CO₂e, with a serial number, on a register you can search without asking us for permission.',
    bandsHeading: 'The four questions worth asking any seller',
    bands: [
      {
        price: 'ONE',
        title: 'Which registry is it on, and what is the serial number?',
        body: 'If a seller cannot give you a registry and a serial range, there is nothing to check and no reason to believe the tonne exists.',
      },
      {
        price: 'TWO',
        title: 'Who measured it, and do they work for the seller?',
        body: 'The inspector should be independent of the crew doing the work. Shared addresses and shared directors are the tell.',
      },
      {
        price: 'THREE',
        title: 'When did anybody last look at it?',
        body: 'Registry records change. A listing without a checked-at time is a claim about the past being sold as a fact about today.',
      },
      {
        price: 'FOUR',
        title: 'What happens if it is cancelled later?',
        body: 'Insurance at Lloyd’s costs roughly $2.50 a tonne. Whether that is worth buying depends on the credit, and we will say so.',
      },
    ],
    closing:
      'If those four answers come back quickly and in writing, the credit is probably fine. If they arrive slowly, or as a PDF with a logo on it and nothing else, that is your answer too.',
    cta: {
      title: 'Want this applied to your own numbers?',
      body: 'Ask the assistant in the corner. It will filter the sellers to your budget and put an order together.',
      action: 'Ask about my budget',
    },
    sourcesLabel: 'SOURCES USED FOR THIS GUIDE',
    sources:
      'American Carbon Registry and Verra public methodology libraries, read 21 Aug 2026 · ICVCM Core Carbon Principles · Lloyd’s market wordings for carbon cancellation cover · our own listing checks for the trailing thirty days',
  },
  {
    slug: 'can-we-put-this-through-as-a-deduction',
    category: 'FOR FINANCE',
    readingTime: '6 MIN READ',
    title: 'CAN WE PUT THIS THROUGH AS A DEDUCTION?',
    standfirst:
      'Usually yes, as an operating expense in the year you cancel the credit rather than the year you bought it. The distinction matters more than most buyers expect, and your accountant will ask for three documents.',
    bylineName: 'Drafted by the assistant, checked and edited by a person here',
    bylineMeta: 'LAST CHECKED 14 AUG 2026 · 4 SOURCES LISTED AT THE FOOT',
    hero: {
      src: '/images/renewable-energy.png',
      alt: 'Solar array beside a reservoir',
    },
    heroCaption: 'BOUGHT IN ONE REPORTING YEAR, CLAIMED IN ANOTHER. THE DATES RARELY LINE UP.',
    opening:
      'Buying a credit gives you an asset. Cancelling it against a reporting year is what turns it into a claim, and that is the event most tax treatments hang on. Holding credits across a year end is normal; claiming them twice is not.',
    pullQuoteLabel: 'THE SHORT ANSWER',
    pullQuote:
      'The purchase is a transaction. The cancellation is the claim. Your books usually care about the second one.',
    bandsHeading: 'What your accountant will ask you for',
    bands: [
      {
        price: 'ONE',
        title: 'The retirement certificate',
        body: 'Proof the credits were cancelled in your company’s legal name, not a broker’s, against a stated reporting year.',
      },
      {
        price: 'TWO',
        title: 'The registry serial numbers',
        body: 'The range that was cancelled, so an auditor can confirm on the register that nobody else has claimed the same tonnes.',
      },
      {
        price: 'THREE',
        title: 'The independent inspector’s report',
        body: 'Evidence the reduction was measured by somebody who does not work for the seller. Auditors ask for this more often each year.',
      },
    ],
    closing:
      'All three come with every order here and sit in your documents tab. If your accountant wants them zipped and emailed, the assistant will do that for a whole reporting year in one go.',
    cta: {
      title: 'Want this applied to your own numbers?',
      body: 'Ask the assistant in the corner. It will filter the sellers to your budget and put an order together.',
      action: 'Ask about my budget',
    },
    sourcesLabel: 'SOURCES USED FOR THIS GUIDE',
    sources:
      'Published corporate guidance on offset accounting, read 14 Aug 2026 · GHG Protocol corporate standard · ICVCM Core Carbon Principles · our own retirement records for the trailing twelve months',
  },
  {
    slug: 'the-four-ways-people-get-sold-junk-credits',
    category: 'BEFORE YOU SIGN',
    readingTime: '6 MIN READ',
    title: 'THE FOUR WAYS PEOPLE GET SOLD JUNK CREDITS',
    standfirst:
      'Almost every bad outcome in this market is one of four things. None of them are subtle, and all four are visible before you sign if you know which field to look at.',
    bylineName: 'Drafted by the assistant, checked and edited by a person here',
    bylineMeta: 'LAST CHECKED 22 AUG 2026 · 6 SOURCES LISTED AT THE FOOT',
    hero: {
      src: '/images/methane-capture.png',
      alt: 'Gas processing plant with capture pipework',
    },
    heroCaption: 'THE PAPERWORK LOOKS THE SAME IN ALL FOUR CASES. THE REGISTRY DOES NOT.',
    opening:
      'A junk credit is not usually a forgery. It is normally a real unit being sold in a way that quietly breaks the one rule the whole market rests on: one tonne, claimed once, by one company.',
    pullQuoteLabel: 'THE SHORT ANSWER',
    pullQuote:
      'Check the register before you check the certificate. The certificate is written by the person selling to you.',
    bandsHeading: 'The four, in the order we see them',
    bands: [
      {
        price: 'ONE',
        title: 'Expired units resold',
        body: 'Credits from a vintage nobody accepts any more, priced as if they were current. The registry shows the vintage; the certificate often does not.',
      },
      {
        price: 'TWO',
        title: 'Double counting',
        body: 'The same tonne claimed by the buyer and by the country it happened in, or sold to two buyers before either cancels it.',
      },
      {
        price: 'THREE',
        title: 'Made-up certificates',
        body: 'A PDF with a logo and no serial range behind it. This is the easiest one to catch and still the most common.',
      },
      {
        price: 'FOUR',
        title: 'Projects that would have happened anyway',
        body: 'A reduction that was going to occur regardless, dressed as one the credit paid for. This is the hardest to prove and where most failed reviews land.',
      },
    ],
    closing:
      'Every listing here states which of these risks apply to it, in plain words, before you call. When a credit is the wrong fit for your policy we would rather say so on the page than after a contract.',
    cta: {
      title: 'Want this applied to your own numbers?',
      body: 'Ask the assistant in the corner. It will filter the sellers to your budget and put an order together.',
      action: 'Ask about my budget',
    },
    sourcesLabel: 'SOURCES USED FOR THIS GUIDE',
    sources:
      'Verra and American Carbon Registry public project data, read 22 Aug 2026 · Max Planck Institute review of credit quality · ICVCM Core Carbon Principles · published independent review outcomes · our own rejected-listing log',
  },
  {
    slug: 'why-one-tonne-costs-9-and-another-400',
    category: 'CHOOSING',
    readingTime: '7 MIN READ',
    title: 'WHY ONE TONNE COSTS $9 AND ANOTHER COSTS $400',
    standfirst:
      'They are the same unit on paper. The price gap is about how long the carbon stays put, how hard it is to prove, and how much of it there is. Here is the short version.',
    bylineName: 'Drafted by the assistant, checked and edited by a person here',
    bylineMeta: 'LAST CHECKED 19 AUG 2026 · 6 SOURCES LISTED AT THE FOOT',
    hero: {
      src: '/images/article-forest.png',
      alt: 'Managed forest running into low cloud on a hillside',
    },
    heroCaption: 'FOUR VERY DIFFERENT WAYS TO REMOVE A TONNE, AND FOUR VERY DIFFERENT PRICES.',
    opening:
      'Start with the thing nobody explains. A credit is a promise that one tonne of greenhouse gas either never went into the air, or came back out of it. Those are two different products and the market prices them very differently.',
    pullQuoteLabel: 'THE SHORT ANSWER',
    pullQuote:
      'You are paying for how certain the tonne is, and how long it stays put. Cheap tonnes are usually neither.',
    bandsHeading: 'What you get at each price',
    bands: [
      {
        price: '$5-12',
        title: 'Cookstoves, avoided deforestation',
        body: 'Cheap, plentiful, and the hardest to prove. Most of the credits that failed independent review sit in this band.',
      },
      {
        price: '$18-30',
        title: 'Sealed wells, replanting, soil',
        body: 'Measurable with a meter or a satellite. This is where most corporate buying happens and where our own supply sits.',
      },
      {
        price: '$100+',
        title: 'Machines that pull carbon out of the air',
        body: 'Permanent and easy to prove, and barely any of it exists yet. Mostly bought by technology companies making a point.',
      },
    ],
    closing:
      'If a seller offers you the middle band at the bottom band’s price, that is the moment to ask which registry it is on and when anybody last looked at it.',
    cta: {
      title: 'Want this applied to your own numbers?',
      body: 'Ask the assistant in the corner. It will filter the sellers to your budget and put an order together.',
      action: 'Ask about my budget',
    },
    sourcesLabel: 'SOURCES USED FOR THIS GUIDE',
    sources:
      'Verra and American Carbon Registry public project data, read 19 Aug 2026 · Max Planck Institute review of credit quality · ICVCM Core Carbon Principles · our own cleared prices for the trailing thirty days',
  },
]

export function getArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug)
}
