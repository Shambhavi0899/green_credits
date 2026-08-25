import type { Metadata } from 'next'
import { AssistantDock } from '@/components/assistant/AssistantDock'
import { BlogIndex } from '@/components/blog/BlogIndex'
import { SiteHeader } from '@/components/site/SiteHeader'

export const metadata: Metadata = {
  title: 'The blog',
  description:
    'Everything we know, written down for somebody new to this. Drafted from the registries and the rulebooks, checked by a person before it goes up.',
}

/** Paper artboard "02 Blog". */
export default function BlogPage() {
  return (
    <>
      <SiteHeader spacing="wide" />
      <main>
        <BlogIndex />
      </main>
      <AssistantDock initialConversation="explain" showNudge={false} />
    </>
  )
}
