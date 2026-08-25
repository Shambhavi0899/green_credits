import type { Metadata } from 'next'
import { AssistantDock } from '@/components/assistant/AssistantDock'
import { AssistantLanding } from '@/components/home/AssistantLanding'
import { SiteHeader } from '@/components/site/SiteHeader'

export const metadata: Metadata = {
  title: 'How it works',
  description:
    'One credit is one tonne of greenhouse gas kept out of the air. The assistant explains anything, recommends sellers, and tracks an order you already placed.',
}

/** Paper artboard "08 AI agent". */
export default function AssistantPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <AssistantLanding />
      </main>
      <AssistantDock initialConversation="explain" showNudge={false} />
    </>
  )
}
