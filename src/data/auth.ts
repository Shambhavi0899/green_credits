export const signUp = {
  tabs: ['Create an account', 'Sign in'] as const,
  title: 'Takes about a minute.',
  body: 'You only need an account to place an order or download documents. Browsing sellers stays open to everyone.',
  fields: {
    email: { label: 'Work email', placeholder: 'you@company.com', type: 'email' },
    name: { label: 'Your name', placeholder: 'First and last', type: 'text' },
    company: { label: 'Company', placeholder: 'Where you work', type: 'text' },
    password: { label: 'Password', placeholder: 'At least eight characters', type: 'password' },
  },
  submit: 'Create account',
  divider: 'or',
  federated: 'Continue with your work Google account',
  footnote: 'No card is needed and we never sell your details on.',
} as const

export const signIn = {
  title: 'Welcome back.',
  body: 'Sign in to see your orders, download documents, and pick up any conversation with the assistant.',
  submit: 'Sign in',
  footnote: 'Trouble getting in? The assistant can send you a fresh link.',
} as const

export const signUpAside = {
  label: 'WHAT AN ACCOUNT GETS YOU',
  title: 'Your orders, your documents, in one place.',
  points: [
    'Place an order and watch it move through documents, verification, payment and delivery',
    'Download every certificate and inspector report your auditor will ask for',
    'Ask the assistant about anything you have bought, any time',
  ],
  note: {
    label: 'NOTE',
    body: 'You can browse every seller and read every listing without signing up. We only ask when you want to order.',
  },
} as const
