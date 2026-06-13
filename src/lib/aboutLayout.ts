/**
 * About section layout tokens — single source of truth.
 *
 * Breakpoints are registered in tailwind.config.ts (screens.about-tablet / screens.about-desktop).
 * Spacing values are mirrored as CSS custom properties in globals.css (:root block).
 * When changing any value here, update the matching CSS custom property in globals.css
 * and the media-query pixel values in the @media blocks (they cannot read JS constants).
 */
export const ABOUT_LAYOUT = {
  /** px — float layout starts; registered as the `about-tablet` Tailwind screen */
  tabletMin: 640,
  /** px — desktop grid starts; registered as the `about-desktop` Tailwind screen */
  desktopMin: 1021,

  /** CSS — width of the floated image column on tablet */
  imageWidth: '44%',
  /** CSS — max absolute width of the floated image */
  imageMaxWidth: '400px',
  /** CSS — horizontal gap between the floated image and the text column */
  imageTextGap: '2rem',
  /** CSS — bottom clearance below the float (where text begins using full width) */
  imageBottomMargin: '1.5rem',

  /** CSS — vertical gap between header, p1 and the float zone on tablet */
  sectionGap: '2rem',
  /** CSS — vertical gap between paragraphs inside the float zone on tablet */
  paragraphGap: '1.5rem',
  /** CSS — top margin of the stats block after the float clears */
  statsTopMargin: '2.5rem',

  /** CSS — desktop grid column ratio: image column / text column */
  desktopGridCols: '2fr 3fr',
  /** CSS — desktop grid horizontal gap */
  desktopColGap: '3.5rem',
  /** CSS — desktop grid vertical gap */
  desktopRowGap: '2rem',
} as const;
