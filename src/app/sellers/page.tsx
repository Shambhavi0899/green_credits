import type { Metadata } from 'next'
import { AssistantDock } from '@/components/assistant/AssistantDock'
import { Marketplace } from '@/components/sellers/Marketplace'
import { SiteHeader } from '@/components/site/SiteHeader'

export const metadata: Metadata = {
  title: 'Sellers',
  description:
    'Every seller here has passed the same six checks. Compare what they sell, what they charge and how many orders they have completed.',
}

/** Paper artboard "05 Seller marketplace". */
export default function SellersPage() {
  return (
    <>
      <SiteHeader spacing="wide" />
      <main>
        <Marketplace />
      </main>
      <AssistantDock initialConversation="recommend" />
    </>
  )
}
