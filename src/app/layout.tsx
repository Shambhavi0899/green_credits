import type { Metadata, Viewport } from 'next'
import { Archivo, Geist_Mono } from 'next/font/google'
import { RouteScrollReset } from '@/components/site/RouteScrollReset'
import './globals.css'

/**
 * Archivo is loaded as a variable font with its width axis, because the design
 * pins `wdth` per element (125 for display, 112–120 for sub-heads).
 */
const archivo = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  display: 'swap',
  variable: '--font-archivo',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: {
    default: 'Green Credit — verified carbon credits',
    template: '%s · Green Credit',
  },
  description:
    'Verified carbon credit sellers in one place. Compare them side by side, see the registry record behind every credit, and buy without becoming an expert first.',
}

export const viewport: Viewport = {
  themeColor: '#EFEEE9',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${geistMono.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>
        {/* Framer Motion writes its `initial` state into the exported HTML.
            With scripting off nothing would ever animate in, so reveal
            everything up front for those readers. */}
        <noscript>
          <style>{`[style*="opacity:0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <RouteScrollReset />
        <div className="page-shell">{children}</div>
      </body>
    </html>
  )
}
