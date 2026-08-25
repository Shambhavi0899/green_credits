import type { Metadata } from 'next'
import { AssistantDock } from '@/components/assistant/AssistantDock'
import { OrdersView } from '@/components/orders/OrdersView'
import { AccountHeader } from '@/components/site/AccountHeader'

export const metadata: Metadata = {
  title: 'Your orders',
  description: 'Everything you have bought, and where each order has got to.',
}

/** Paper artboard "07 Orders". */
export default function OrdersPage() {
  return (
    <>
      <AccountHeader />
      <main>
        <OrdersView />
      </main>
      {/* Signed in, so the dock opens on the order-tracking thread. */}
      <AssistantDock initialConversation="track" showNudge={false} />
    </>
  )
}
