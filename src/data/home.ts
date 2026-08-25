import type {
  ComparisonRow,
  CreditKind,
  JourneyStep,
  ProjectFamily,
  ProofPoint,
  ProvenanceStep,
  ServiceCard,
  Stat,
} from '@/lib/types'

export const hero = {
  headline: 'FIND A CARBON CREDIT SELLER YOU CAN ACTUALLY CHECK.',
  body: 'We bring verified sellers into one place so you can compare them side by side, see the registry record behind every credit, and buy without becoming an expert first.',
  action: 'Browse sellers',
  actionNote: 'FREE TO LOOK · NO ACCOUNT NEEDED',
  image: { src: '/images/hero-wetland.png', alt: 'Wetland restoration site seen from the air' },
} as const

export const stats: Stat[] = [
  { value: '18', caption: 'verified sellers on the platform' },
  { value: '2.4M', caption: 'tonnes of credits available today' },
  { value: '3', caption: 'registries we check every listing against', accent: true },
  { value: '4', caption: 'kinds of credit, from sealed wells to forestry' },
]

export const askBand = {
  title: 'Not sure where to start? Ask.',
  body: 'Our assistant explains anything, recommends sellers, and helps you place an order.',
  placeholder: 'Which seller is best for 5,000 tonnes?',
  action: 'Ask',
} as const

export const journey = {
  label: 'HOW BUYING WORKS HERE',
  title: 'FIVE STEPS, AND YOU CAN STOP AT ANY OF THEM.',
  body: 'Nothing is locked behind a sign-up until you actually want to order. Look at sellers, read the paperwork, compare prices, all without an account.',
} as const

export const journeySteps: JourneyStep[] = [
  {
    index: '01',
    title: 'Learn',
    body: 'Find out what a credit is and which kind suits you. No jargon.',
  },
  {
    index: '02',
    title: 'Explore sellers',
    body: 'Browse verified sellers side by side. Compare price, type and track record.',
  },
  {
    index: '03',
    title: 'Review credits',
    body: 'Open any listing for the project, the price, the documents and the registry record.',
  },
  {
    index: '04',
    title: 'Place an order',
    body: 'Add what you want to an order. A person confirms the price before you pay.',
  },
  {
    index: '05',
    title: 'Track progress',
    body: 'Watch documents, verification, payment and delivery move along in one place.',
    highlight: true,
  },
]

export const howMade = {
  label: 'HOW A CARBON CREDIT IS MADE',
  title: 'ONE CREDIT IS ONE TONNE, PROVEN EIGHT TIMES OVER.',
  body: 'A carbon credit is created when a project can prove it has prevented or removed one tonne of carbon dioxide equivalent from the atmosphere. Here is every step between the work and the credit.',
} as const

export const projectFamilies: ProjectFamily[] = [
  {
    src: '/images/forestry-replanting.png',
    alt: 'Young trees planted in contoured rows of red soil',
    caption: 'FORESTRY AND REPLANTING',
  },
  {
    src: '/images/methane-capture.png',
    alt: 'Gas processing plant with capture pipework',
    caption: 'METHANE CAPTURE',
  },
  {
    src: '/images/renewable-energy.png',
    alt: 'Solar array beside a reservoir',
    caption: 'RENEWABLE ENERGY',
  },
  {
    src: '/images/sealing-wells.png',
    alt: 'Abandoned wellhead standing in dry grassland',
    caption: 'SEALING LEAKING WELLS',
  },
]

export const provenanceLeft: ProvenanceStep[] = [
  {
    index: '01',
    title: 'A climate project is developed',
    body: 'Planting forests, capturing methane, replacing fossil fuel power with renewables, or pulling carbon straight out of the air.',
  },
  {
    index: '02',
    title: 'A baseline is calculated',
    body: 'The developer works out what the emissions would have been if the project had never happened. Everything else is measured against this.',
  },
  {
    index: '03',
    title: 'A recognised methodology is followed',
    body: 'A published rulebook that sets out exactly how the reduction or removal has to be calculated. Not something the project invents.',
  },
  {
    index: '04',
    title: 'The project is validated',
    body: 'An independent auditor checks that the design and the sums actually meet the standard being claimed.',
  },
]

export const provenanceRight: ProvenanceStep[] = [
  {
    index: '05',
    title: 'Results are monitored',
    body: 'The project gathers evidence over time showing how much carbon was really avoided or removed, not just predicted.',
  },
  {
    index: '06',
    title: 'The results are verified',
    body: 'A second independent verifier reviews all that evidence and confirms the reduction actually achieved.',
  },
  {
    index: '07',
    title: 'Credits are issued by a registry',
    body: 'The registry creates the credits and gives each one a unique serial number. One credit equals one tonne of CO₂e reduced or removed.',
    highlight: true,
  },
  {
    index: '08',
    title: 'Credits are sold and retired',
    body: 'You buy them. When you use them to claim against your own emissions they are retired on the registry, so nobody can ever sell them again.',
  },
]

export const workedExample = {
  label: 'A WORKED EXAMPLE',
  value: '20,000',
  unit: 'tonnes prevented',
  body: 'If a methane capture project verifiably prevents 20,000 tonnes of CO₂e, the registry may issue 20,000 carbon credits against it. Each one carries its own serial number and can only ever be retired once.',
} as const

export const distinction = {
  label: 'A DISTINCTION WORTH MAKING',
  title: 'Carbon credits and India’s Green Credits are not the same thing.',
  body: 'A carbon credit specifically represents CO₂e reduced or removed. India’s Green Credit scheme rewards a wider set of environmental activities, such as tree planting, water conservation and waste management. If you are buying to offset emissions, you want carbon credits.',
} as const

export const kinds = {
  label: 'WHAT KINDS ARE THERE?',
  title: 'FOUR FAMILIES, AND THE PRICE GAP IS NOT RANDOM.',
} as const

export const creditKinds: CreditKind[] = [
  {
    price: '$18-24',
    name: 'Methane, sealed wells',
    supply: 'OUR OWN SUPPLY',
    supplyAccent: true,
    body: 'Methane warms the planet about eighty times faster than CO2 over twenty years, so stopping a leak counts for a lot. Cement in a bore hole cannot burn down or be cut down later.',
  },
  {
    price: '$16-22',
    name: 'Clean coal and industry',
    supply: 'SOURCED',
    body: 'Boilers and furnaces retrofitted to burn less for the same output. Cheap, measurable, and ruled out by any buyer whose policy excludes fossil fuels.',
  },
  {
    price: '$25-35',
    name: 'Forestry and replanting',
    supply: 'SOURCED',
    body: 'The one everybody pictures. It reads well in a report, and it costs more because a forest has to be watched for decades and can still burn.',
  },
  {
    price: '$9-20',
    name: 'Cookstoves and soil',
    supply: 'SOURCED',
    body: 'Cheapest on the market and the hardest to prove, because you are measuring something that would have happened otherwise. Most of the credits that failed independent review sit here.',
  },
]

export const compare = {
  label: 'WHY NOT JUST USE A BROKER?',
  title: 'THE DIFFERENCE IS WHAT YOU CAN CHECK.',
  body: 'There are about five firms doing what we do. They all sell their own book and tell you to trust them. That is the whole reason this market has a reputation problem.',
  columns: ['WHEN YOU BUY', 'MOST BROKERS', 'GREEN CREDIT'],
} as const

export const comparisonRows: ComparisonRow[] = [
  {
    aspect: 'What you get',
    broker: 'A PDF certificate with a logo on it',
    greenCredit: 'The registry number, so you can look it up on a site we do not own',
  },
  {
    aspect: 'Whose supply you see',
    broker: 'Only what they happen to hold',
    greenCredit: 'Ours and four competitors’, in the same table, labelled',
  },
  {
    aspect: 'How the price is set',
    broker: 'One bundled number, margin not disclosed',
    greenCredit: 'We publish what the market paid, then quote under it',
  },
  {
    aspect: 'If it is the wrong fit',
    broker: 'You find out after the contract',
    greenCredit: 'It says so on the listing, before you call',
  },
  {
    aspect: 'If it gets cancelled later',
    broker: 'Your problem, and your board’s',
    greenCredit: 'Insured at Lloyd’s, about $2.50 a tonne',
  },
]

export const proof = {
  label: 'HOW DO I KNOW IT IS REAL?',
  title: 'EVERY CLAIM HERE CARRIES THE TIME WE LAST CHECKED IT.',
  body: 'We hold a copy of somebody else’s record, so we are sometimes wrong. Saying when we last looked is the difference between a platform you can trust and one that quietly lies.',
} as const

export const proofPoints: ProofPoint[] = [
  {
    label: 'CHECK ONE',
    title: 'It is on a public list',
    body: 'Not our list. A registry run by somebody else, that anyone can search. We give you the reference number and you can look it up before you speak to us.',
  },
  {
    label: 'CHECK TWO',
    title: 'A stranger measured it',
    body: 'The inspector who signs off on the gas figures does not work for us and does not work for the crew. If they ever share an address, the supply does not go on our board.',
  },
  {
    label: 'CHECK THREE',
    title: 'It is insured at Lloyd’s',
    body: 'If a credit you bought is later cancelled, the insurance pays out. It costs about two dollars fifty a tonne and we will tell you when it is not worth buying.',
  },
]

export const services = {
  label: 'WHAT WE DO FOR YOU',
  title: 'THREE WAYS TO USE US.',
  body: 'Most people start with the marketplace and never need the rest. The other two exist for buyers with a harder problem.',
} as const

export const serviceCards: ServiceCard[] = [
  {
    pricing: 'FREE TO USE',
    pricingAccent: true,
    title: 'Marketplace',
    body: 'Verified sellers in one place. Compare price, credit type and track record, open any listing to read the paperwork, then order. We take a small commission from the seller, never from you.',
    action: 'Browse sellers',
  },
  {
    pricing: 'PAID, BY THE DAY',
    title: 'Consulting',
    body: 'If you do not know how many tonnes you need or which kind your auditor will accept, we work it out with you. Useful when there is a policy, a board, or a reporting deadline involved.',
    action: 'Talk to someone',
  },
  {
    pricing: 'PAID, PER PORTFOLIO',
    title: 'Portfolio design',
    body: 'For buyers taking a few thousand tonnes a month. We build the mix across sellers and credit types, set it up to repeat, and keep it inside whatever your policy rules out.',
    action: 'See how it works',
  },
]

export const readingSection = {
  label: 'START BY READING',
  title: 'LEARN BEFORE YOU SPEND ANYTHING.',
  action: 'All articles',
} as const

export const callSection = {
  title: 'WHAT HAPPENS IF YOU CALL US',
  steps: [
    'You tell us roughly how many tonnes you need, and whether it is for tax or for a report. Two questions, no account, no card.',
    'A person emails you back within a day with a price and the reference numbers. The price holds for seven days. Nothing is reserved.',
    'If you say yes, the credits move into your company’s name on the registry and you get a certificate your auditor will accept.',
  ],
  priceLabel: 'WHAT IT COSTS, ROUGHLY',
  price: '$23.80',
  priceUnit: 'a tonne',
  priceBody:
    'Delivered and insured. A thousand tonnes comes to about $23,800. We publish what the market actually paid last month and quote you under it, because we would rather have you back next quarter.',
  action: 'Ask us what it would cost you',
} as const
