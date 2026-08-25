import type { AssistantConversation } from '@/lib/types'

/**
 * The Paper file draws three assistant states. They live here as data so the
 * dock can move between them without duplicating markup: the quick-action
 * chips in the panel header switch conversation.
 */
export const conversations: AssistantConversation[] = [
  {
    id: 'explain',
    chip: 'Explain something',
    headline: 'ASK',
    blocks: [
      { kind: 'user', text: 'honestly, what am I even buying here' },
      {
        kind: 'reply',
        text: 'One tonne of greenhouse gas that did not go into the air. That is it. Here is what one credit looks like.',
      },
      {
        kind: 'creditCard',
        badge: '1t',
        title: 'One carbon credit',
        body: 'One tonne of CO₂e prevented or removed, with its own serial number on a public register.',
        facts: [
          { title: 'USED ONCE', caption: 'then retired forever' },
          { title: 'CHECKED TWICE', caption: 'validated, then verified' },
        ],
      },
      { kind: 'user', text: 'why is one $9 and another $400' },
      {
        kind: 'reply',
        text: 'How certain it is, and how long it stays put. Cheap tonnes are usually neither.',
      },
      {
        kind: 'priceBars',
        label: 'WHAT YOU PAY FOR',
        rows: [
          { name: 'Cookstoves', price: '$9', fill: 8, tone: 'brass' },
          { name: 'Sealed wells and forestry', price: '$24', fill: 22, tone: 'copper' },
          { name: 'Machines that pull carbon out of the air', price: '$400', fill: 100, tone: 'slate' },
        ],
        footnote: 'Most companies buy in the middle band. That is where our sellers sit.',
      },
      {
        kind: 'perspective',
        label: 'TO PUT 5,000 TONNES IN PERSPECTIVE',
        value: '1,100',
        caption: 'cars off the road for a year',
        filled: 11,
        total: 20,
      },
      {
        kind: 'suggestions',
        items: ['Which kind suits us?', 'Can we claim this on tax?', 'Show me sellers'],
      },
    ],
  },
  {
    id: 'recommend',
    chip: 'Recommend a seller',
    headline: 'ASK',
    blocks: [
      { kind: 'user', text: 'we need 5,000 tonnes and our board says nothing from oil and gas' },
      {
        kind: 'reply',
        text: 'That rules out most sealed-well sellers, including our own supply. Two sellers fit you. Mata Viva is forestry in Brazil, checked today. Kilimo Safi does cookstoves in Kenya and is $10 cheaper a tonne.',
      },
      {
        kind: 'shortlist',
        label: 'BEST FIT · CHECKED TODAY',
        filled: 3,
        total: 4,
        line: 'Kilimo Safi · cookstoves, Kenya · $18.90 a tonne · 12,000 available',
      },
      { kind: 'user', text: 'what does my auditor need from this?' },
      {
        kind: 'reply',
        text: 'Three things: the registry serial numbers, the independent inspector’s report, and proof the credits were cancelled in your company’s name. All three come with the order and sit in your documents tab.',
      },
      { kind: 'blogLink', label: 'FROM THE BLOG', title: 'What a carbon credit actually is' },
      { kind: 'user', text: 'add 5,000 of the Kenya one to an order' },
      {
        kind: 'orderDraft',
        label: 'ADDED TO YOUR ORDER',
        seller: 'Kilimo Safi, Kenya',
        tonnes: '5,000 t',
        totalLabel: 'Indicative total',
        total: '$94,500',
        action: 'Review and place order',
        footnote: 'You will see the documents and the registry record before you pay anything.',
      },
    ],
  },
  {
    id: 'track',
    chip: 'Track my order',
    headline: 'ASK · SIGNED IN AS MERIDIAN FOODS',
    blocks: [
      { kind: 'user', text: 'where has our order got to?' },
      {
        kind: 'reply',
        text: 'Three of the five steps are done. It is sitting with the seller now while they move the credits into your name.',
      },
      {
        kind: 'orderTrack',
        reference: 'ORDER 2026-0184',
        title: '1,000 t · Delacroix Well Services',
        total: '$23,800',
        steps: [
          { title: 'Documents received', stamp: '18 AUG', state: 'done' },
          { title: 'Serial numbers verified on ACR', stamp: '18 AUG', state: 'done' },
          { title: 'Invoice paid', stamp: '19 AUG', state: 'done' },
          {
            title: 'Transfer in progress',
            caption: 'Moved by hand between registry accounts',
            stamp: 'NOW',
            state: 'active',
          },
          { title: 'Certificate delivered', stamp: 'FRIDAY', state: 'waiting' },
        ],
        handler: { initials: 'PR', text: 'Priya is handling this one', action: 'Message her' },
      },
      { kind: 'user', text: 'tell me the moment it lands' },
      {
        kind: 'emailToggle',
        title: 'I will email you the second it clears',
        address: 'p.raghunathan@meridianfoods.com',
      },
      { kind: 'user', text: 'our auditor wants everything for 2025' },
      {
        kind: 'documentBundle',
        label: 'EVERYTHING CANCELLED IN 2025',
        volume: '12,000 t',
        rows: [
          { kind: 'PDF', title: 'Retirement certificates, 4 blocks' },
          { kind: 'PDF', title: 'Inspector reports, all sellers' },
          { kind: 'CSV', title: 'Serial numbers and registry links' },
        ],
        action: 'Zip it all and email to my auditor',
      },
    ],
  },
]

export const composer = {
  placeholder: 'Ask anything…',
  send: 'Send',
} as const

/** The standalone "how it works" page that leads with the assistant. */
export const assistantPage = {
  headline: 'CARBON CREDITS YOU CAN CHECK YOURSELF.',
  body: 'One credit is one tonne of greenhouse gas kept out of the air. We help companies buy them without becoming experts first.',
  stats: [
    { value: '2.4M', caption: 'tonnes available right now' },
    { value: '4', caption: 'kinds of credit on the board' },
    { value: '96%', caption: 'insured against being cancelled', accent: true },
  ],
  note: {
    label: '06 · THE ASSISTANT',
    body: 'One place for support, everything the blog knows, and buying. It sits in the corner of every page. It answers from the blog and shows you which post, it tracks an order you already placed, and it can put a new one together. A person confirms the price before anything is charged.',
  },
} as const
