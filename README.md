# Green Credit

A static marketing-and-product site for a verified carbon credit marketplace,
built from the Paper design file **“Green Credit App”** with Next.js (App
Router) and TypeScript. All content is mock data — there is no backend.

```
npm install
npm run dev      # http://localhost:3000
npm run build    # static export into ./out
```

`next.config.mjs` sets `output: 'export'`, so `npm run build` emits a
self-contained static site in `out/` that can be served from any file host.

## Artboard → route

Every artboard in the Paper file is a route. Measurements, colours, copy and
image assets were read out of the design with the Paper MCP tools rather than
eyeballed from screenshots.

| Paper artboard | Route | Component |
| --- | --- | --- |
| 01 Main website | `/` | `components/home/*` |
| 02 Blog | `/blog` | `components/blog/BlogIndex.tsx` |
| 03 Blog article | `/blog/[slug]` | `components/blog/ArticleView.tsx` |
| 04 Sign up and sign in | `/signin` | `components/auth/AuthView.tsx` |
| 05 Seller marketplace | `/sellers` | `components/sellers/Marketplace.tsx` |
| 06 Credit details | `/credits/[slug]` | `components/credit/CreditDetail.tsx` |
| 07 Orders | `/orders` | `components/orders/OrdersView.tsx` |
| 08 AI agent | `/assistant` | `components/home/AssistantLanding.tsx` |
| Assistant open | dock, “Recommend a seller” | `components/assistant/*` |
| 09 Assistant — explaining | dock, “Explain something” | `components/assistant/*` |
| 10 Assistant — tracking an order | dock, “Track my order” | `components/assistant/*` |

The three assistant artboards are three states of one component. The floating
button opens the dock and the quick-action chips in its header switch between
the threads, so all three designs are reachable from any page.

## Getting around

The design has no nav link to the signed-in area, so the routes into every
screen are:

- **Credit details** — `/sellers` → any seller card → **View credits**. All
  three cards have their own listing.
- **Orders** — nav **Sign in** → **Create account** (or **Sign in**). Nothing
  is validated; the button is simply the door into the account area, which is
  what the panel beside the form promises.
- **Assistant (09, 10, Assistant open)** — the copper button in the corner of
  any page, then the chips in the panel header.

## Structure

```
src/
  app/            routes, root layout, global tokens
  components/     one folder per artboard, plus shared chrome and motion
  data/           all mock content, typed against src/lib/types.ts
  lib/types.ts    the shapes every page reads
public/images/    the ten photographs exported from the design file
```

Swapping the mock for a real API means changing `src/data` only; nothing in
`components/` reaches past those modules.

## Design tokens

`src/app/globals.css` carries the Paper token set verbatim — `--color-copper`,
`--color-limestone`, `--spacing-gutter: 88px` and the rest. Literals that the
design uses on dark ground (`#7FC4AE`, `#3A3E44`, …) are named as `--ink-*` so
components never carry raw hex.

Type is Archivo (variable, with its **width** axis loaded, because the design
pins `wdth` per element: 125 for display, 112–120 for sub-heads) and Geist
Mono, both via `next/font`. Body copy is `system-ui`, matching the design.

## Fidelity

The artboard is 1440px wide, so the whole page sits on that measure, centred.
Built page heights against their artboards:

| Route | Design | Built |
| --- | --- | --- |
| `/` | 6386 | 6390 |
| `/sellers` | 1063 | 1062 |
| `/orders` | 1908 | 1906 |
| `/blog` | 1430 | 1430 |
| `/blog/[slug]` | 2116 | 2108 |
| `/credits/[slug]` | 1737 | 1737 |
| `/signin` | 900 | 900 |
| `/assistant` | 900 | 900 |

Remaining differences are a line of text reflowing, since `system-ui` resolves
to a different face on different machines.

Below 1440 the gutter tightens and two-column blocks stack. No route scrolls
horizontally at 390, 768, 1024, 1440 or 1920.

## Motion

Framer Motion, with one easing curve (`cubic-bezier(0.16, 1, 0.3, 1)`) across
the site. Every animation settles at identity, so the page at rest is the
artboard — the motion only covers arrival.

- Hero headlines are masked per line and lifted into place
- Sections fade and rise as they scroll in; tables and lists stagger their rows
- Figures count up (`CountUp` re-renders the exact authored string on the last
  frame, and the server sends the real number so it is right with no JS)
- The nav tightens and picks up a blur once you leave the top
- Marketplace filters move a shared pill between facets; cards animate in and
  out of the grid as the filter changes
- The credit gallery cross-fades and slides with the direction of travel
- Order stage bars wipe in; the assistant's price bars and tick grid build
- The assistant dock springs open from the button, and each message in a thread
  arrives on its own beat
- Tab underlines (orders, sign-in) slide as shared layout elements
- Everything is disabled under `prefers-reduced-motion`

## Interactive behaviour

Static pages, but the design's controls work: marketplace filters and the
policy toggle, seller comparison, the credit gallery and its live order total,
the sign-in / create-account tabs, the account tabs, the assistant dock and its
three threads, and the email toggle inside the tracking thread.

## Notes

- The Paper file was read only. Nothing was written back to the design.
- Three of the four blog posts have mock article bodies written against the
  designed article template; the fourth (“Why one tonne costs $9…”) is the
  artboard's own copy, verbatim. Two of the three credit listings are mock
  content on the same template for the same reason — the file draws one credit
  detail screen, but all three seller cards need somewhere to go.
- `next dev` and `next build` use separate dist directories (`.next-dev` and
  `.next`). Building while the dev server is live otherwise rewrites the chunks
  underneath it and the running page starts throwing module errors.
- On `/assistant` the “06 · THE ASSISTANT” note is absolutely positioned over
  the foot of the stat band because that is where the artboard puts it. Below
  1200px it drops back into the flow so it covers nothing.
