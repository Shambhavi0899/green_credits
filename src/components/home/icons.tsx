/**
 * Tabler-style outline icons, drawn on the same 24×24 grid with round joins so
 * they read as one family at every size they are used at (14px in the compare
 * header, 16px in table cells, 20px on timeline dots, 28px on kind cards).
 *
 * Stroke colour always comes from `currentColor` so callers set it with CSS
 * tokens rather than passing hex around.
 */

type IconProps = {
  size?: number
  /** Tabler draws at 2 on a 24 grid; small sizes need a heavier nominal weight. */
  strokeWidth?: number
  className?: string
}

function Svg({ size = 20, strokeWidth = 2, className, children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  )
}

/* --- Provenance timeline dots, in step order ----------------------------- */

export function IconSeedling(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 10a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3" />
      <path d="M12 14a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3" />
      <path d="M12 20v-10" />
    </Svg>
  )
}

export function IconRuler(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M5 4h14a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-7a1 1 0 0 0 -1 1v7a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1" />
      <path d="M4 8h2" />
      <path d="M4 12h3" />
      <path d="M4 16h2" />
      <path d="M8 4v2" />
      <path d="M12 4v3" />
      <path d="M16 4v2" />
    </Svg>
  )
}

export function IconBook(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
      <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
      <path d="M3 6v13" />
      <path d="M12 6v13" />
      <path d="M21 6v13" />
    </Svg>
  )
}

export function IconClipboardCheck(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
      <path d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2" />
      <path d="M9 14l2 2l4 -4" />
    </Svg>
  )
}

export function IconChartLine(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 19h16" />
      <path d="M4 15l4 -6l4 2l4 -5l4 4" />
    </Svg>
  )
}

export function IconShieldCheck(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
      <path d="M9 12l2 2l4 -4" />
    </Svg>
  )
}

export function IconCertificate(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M15 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5" />
      <path d="M10 19h-5a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73" />
      <path d="M6 9h12" />
      <path d="M6 12h3" />
      <path d="M6 15h2" />
    </Svg>
  )
}

export function IconRecycle(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 17l-2 2l2 2" />
      <path d="M10 19h9a2 2 0 0 0 1.75 -2.75l-.55 -1" />
      <path d="M8.536 11l-.732 -2.732l-2.732 .732" />
      <path d="M7.804 8.268l-4.5 7.794a2 2 0 0 0 1.506 2.89l1.141 .024" />
      <path d="M15.464 11l2.732 .732l.732 -2.732" />
      <path d="M18.196 11.732l-4.5 -7.794a2 2 0 0 0 -3.256 -.14l-.591 .976" />
    </Svg>
  )
}

/* --- Worked-example equivalency tiles ------------------------------------ */

export function IconCar(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
    </Svg>
  )
}

export function IconBulb(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" />
      <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" />
      <path d="M9.7 17h4.6" />
    </Svg>
  )
}

/**
 * Tabler's stock `road` bows outward and collapses into a bracket shape below
 * about 24px. Redrawn with converging edges so it still reads as a road at the
 * 22px this tile uses.
 */
export function IconRoad(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M5 20l2 -16" />
      <path d="M19 20l-2 -16" />
      <path d="M12 5v2" />
      <path d="M12 11v2" />
      <path d="M12 17v2" />
    </Svg>
  )
}

/* --- Credit-kind cards --------------------------------------------------- */

export function IconFlame(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z" />
    </Svg>
  )
}

export function IconFactory(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M3 21h18" />
      <path d="M5 21v-12l5 4v-4l5 4h4" />
      <path d="M19 21v-8l-1.436 -9.574a.5 .5 0 0 0 -.564 -.426h-2a.5 .5 0 0 0 -.564 .426l-.436 2.574" />
      <path d="M9 17h1" />
      <path d="M14 17h1" />
    </Svg>
  )
}

export function IconTree(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 13l-2 -2" />
      <path d="M12 12l2 -2" />
      <path d="M12 21v-13" />
      <path d="M9.824 16a3 3 0 0 1 -2.743 -3.69a3 3 0 0 1 .304 -4.833a3 3 0 0 1 4.615 -3.977a3 3 0 0 1 4.614 3.977a3 3 0 0 1 .305 4.833a3 3 0 0 1 -2.919 3.69h-4.176z" />
    </Svg>
  )
}

/** Cookstoves: a pot over heat. Tabler has no stove glyph, so a bowl carries it. */
export function IconBowl(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 20a8 8 0 0 0 8 -8h-16a8 8 0 0 0 8 8z" />
      <path d="M3 12h18" />
      <path d="M9 8c0 -1.2 .6 -1.8 1 -3" />
      <path d="M14 8c0 -1.2 .6 -1.8 1 -3" />
    </Svg>
  )
}

/* --- Compare table ------------------------------------------------------- */

export function IconX(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </Svg>
  )
}

export function IconCheck(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M5 12l5 5l10 -10" />
    </Svg>
  )
}
