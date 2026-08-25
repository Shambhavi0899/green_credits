import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { AssistantDock } from '@/components/assistant/AssistantDock'
import { ArticleView } from '@/components/blog/ArticleView'
import { SiteHeader } from '@/components/site/SiteHeader'
import { articles, getArticle } from '@/data/blog'

type PageProps = { params: Promise<{ slug: string }> }

/** Static export: every route is generated ahead of time. */
export const dynamicParams = false

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) return { title: 'Article not found' }
  return { title: article.title, description: article.standfirst }
}

/** Paper artboard "03 Blog article". */
export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

  return (
    <>
      <SiteHeader />
      <main>
        <ArticleView article={article} />
      </main>
      <AssistantDock initialConversation="explain" />
    </>
  )
}
