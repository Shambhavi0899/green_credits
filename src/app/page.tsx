import { AssistantDock } from '@/components/assistant/AssistantDock'
import { AskBand } from '@/components/home/AskBand'
import { Compare } from '@/components/home/Compare'
import { FromTheBlog } from '@/components/home/FromTheBlog'
import { Hero } from '@/components/home/Hero'
import { HowMade } from '@/components/home/HowMade'
import { Journey } from '@/components/home/Journey'
import { Kinds } from '@/components/home/Kinds'
import { NextSteps } from '@/components/home/NextSteps'
import { Proof } from '@/components/home/Proof'
import { Services } from '@/components/home/Services'
import { StatBand } from '@/components/home/StatBand'
import { SiteHeader } from '@/components/site/SiteHeader'

/** Paper artboard "01 Main website". Sections run in artboard order. */
export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <StatBand />
        <AskBand />
        <Journey />
        <HowMade />
        <Kinds />
        <Compare />
        <Proof />
        <Services />
        <FromTheBlog />
        <NextSteps />
      </main>
      <AssistantDock />
    </>
  )
}
