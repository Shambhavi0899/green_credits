import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { AssistantDock } from '@/components/assistant/AssistantDock'
import { CreditDetail } from '@/components/credit/CreditDetail'
import { SiteHeader } from '@/components/site/SiteHeader'
import { creditListings, getCreditListing } from '@/data/sellers'

type PageProps = { params: Promise<{ slug: string }> }

/** Static export: every route is generated ahead of time. */
export const dynamicParams = false

export function generateStaticParams() {
  return creditListings.map((listing) => ({ slug: listing.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const listing = getCreditListing(slug)
  if (!listing) return { title: 'Credit not found' }
  return { title: listing.shortTitle, description: listing.summary }
}

/** Paper artboard "06 Credit details". */
export default async function CreditPage({ params }: PageProps) {
  const { slug } = await params
  const listing = getCreditListing(slug)
  if (!listing) notFound()

  return (
    <>
      <SiteHeader />
      <main>
        <CreditDetail listing={listing} />
      </main>
      <AssistantDock initialConversation="recommend" showNudge={false} />
    </>
  )
}
