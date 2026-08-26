/**
 * Journey step illustrations — flat two-colour marks drawn on a 50×40 grid,
 * traced from the Paper file. Sage fill, copper stroke at 2px, no gradients and
 * no shadows: they sit next to the step numbers without competing with them.
 *
 * Both colours come from CSS custom properties set on the card in
 * `home.module.css`, so the palette stays in one place.
 */

function Illo({ children }: { children: React.ReactNode }) {
  return (
    <svg
      width="50"
      height="40"
      viewBox="0 0 50 40"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  )
}

const fill = 'var(--illo-fill)'
const stroke = 'var(--illo-stroke)'

/** 01 Learn — an open book. */
export function IlloBook() {
  return (
    <Illo>
      <path
        d="M25 12 C21 9 14 7.5 6 8 L6 30 C14 29.5 21 31 25 34 Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M25 12 C29 9 36 7.5 44 8 L44 30 C36 29.5 29 31 25 34 Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M11 16 H19 M11 22 H19 M31 16 H39 M31 22 H39"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Illo>
  )
}

/** 02 Explore sellers — a listing panel with a magnifier over its corner. */
export function IlloMagnifier() {
  return (
    <Illo>
      <rect x="3" y="3" width="31" height="25" rx="2.5" fill={fill} stroke={stroke} strokeWidth="2" />
      <path d="M8 11 H27 M8 17 H24 M8 23 H19" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
      <circle cx="34" cy="26" r="9" fill={fill} stroke={stroke} strokeWidth="2" />
      <path d="M40.4 32.4 L45 37" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
    </Illo>
  )
}

/** 03 Review credits — a document with a check badge. */
export function IlloDocumentCheck() {
  return (
    <Illo>
      <path
        d="M5 6 a3 3 0 0 1 3 -3 h15 l8 8 v23 a3 3 0 0 1 -3 3 h-20 a3 3 0 0 1 -3 -3 z"
        fill={fill}
        stroke={stroke}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M23 3 v5 a3 3 0 0 0 3 3 h5" stroke={stroke} strokeWidth="2" strokeLinejoin="round" />
      <path d="M10 18 H23 M10 24 H19" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
      <circle cx="34" cy="29" r="8.5" fill={fill} stroke={stroke} strokeWidth="2" />
      <path
        d="M30 29 l3 3 l5.5 -6"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Illo>
  )
}

/** 04 Place an order — a shopping cart. */
export function IlloCart() {
  return (
    <Illo>
      <path
        d="M4 7.5 H8.5 L12.5 14"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 14 H44 L40 27 H16 Z" fill={fill} stroke={stroke} strokeWidth="2" strokeLinejoin="round" />
      <path d="M14 20 H42" stroke={stroke} strokeWidth="2" />
      <circle cx="20" cy="31.5" r="3" fill={fill} stroke={stroke} strokeWidth="2" />
      <circle cx="36" cy="31.5" r="3" fill={fill} stroke={stroke} strokeWidth="2" />
    </Illo>
  )
}

/** 05 Track progress — three ascending bars on a baseline. */
export function IlloBars() {
  return (
    <Illo>
      <rect x="9.5" y="22" width="9" height="12" rx="1.5" fill={fill} stroke={stroke} strokeWidth="2" />
      <rect x="20.5" y="15" width="9" height="19" rx="1.5" fill={fill} stroke={stroke} strokeWidth="2" />
      <rect x="31.5" y="8" width="9" height="26" rx="1.5" fill={fill} stroke={stroke} strokeWidth="2" />
      <path d="M6 34 H44" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
    </Illo>
  )
}

/** Step index → illustration, in the order the design lays them out. */
export const journeyIllustrations = [IlloBook, IlloMagnifier, IlloDocumentCheck, IlloCart, IlloBars]
