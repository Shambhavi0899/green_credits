import type { Metadata } from 'next'
import { AuthView } from '@/components/auth/AuthView'

export const metadata: Metadata = {
  title: 'Create an account',
  description:
    'You only need an account to place an order or download documents. Browsing sellers stays open to everyone.',
}

/** Paper artboard "04 Sign up and sign in". No site chrome, by design. */
export default function SignInPage() {
  return (
    <main>
      <AuthView />
    </main>
  )
}
