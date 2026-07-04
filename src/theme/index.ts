import { TextStyle, ViewStyle } from 'react-native';

/**
 * Wortreise design system — "Modern Premium" (dark).
 * Single source of truth for colors, typography, spacing, radii and shadows.
 * Screens must not hard-code palette values; import from here.
 */

// ---------------------------------------------------------------------------
// Color
// ---------------------------------------------------------------------------

export const colors = {
  // Canvas
  bg: '#080C18',
  bgTop: '#0D1430',
  bgSheet: '#101830',

  // Glass surfaces (layered translucency instead of boxed cards)
  glass: 'rgba(148,163,255,0.06)',
  glassStrong: 'rgba(148,163,255,0.10)',
  glassBorder: 'rgba(160,175,255,0.14)',
  glassBorderStrong: 'rgba(160,175,255,0.24)',
  glassHighlight: 'rgba(255,255,255,0.06)',

  // Text
  text: '#F2F5FF',
  textDim: '#9AA6CC',
  textFaint: '#5E6A92',
  onAccent: '#FFFFFF',

  // Brand accents
  primary: '#7C8CF8',
  primaryDeep: '#5B6CF0',
  violet: '#A78BFA',
  gold: '#F5B04C',

  // Semantic
  success: '#3DDC97',
  danger: '#F87171',
  warning: '#FBBF24',

  // Soft (translucent) accent fills for dark surfaces
  primarySoft: 'rgba(124,140,248,0.14)',
  primaryBorder: 'rgba(124,140,248,0.35)',
  goldSoft: 'rgba(245,176,76,0.12)',
  goldBorder: 'rgba(245,176,76,0.32)',
  successSoft: 'rgba(61,220,151,0.12)',
  successBorder: 'rgba(61,220,151,0.32)',
  dangerSoft: 'rgba(248,113,113,0.12)',
  dangerBorder: 'rgba(248,113,113,0.32)',
  warningSoft: 'rgba(251,191,36,0.12)',
  warningBorder: 'rgba(251,191,36,0.32)',

  // Overlays
  backdrop: 'rgba(3,6,16,0.72)',
} as const;

/** Accent per CEFR level. */
export const levelAccent = {
  A1: '#7C8CF8',
  A2: '#4CC3FA',
  B1: '#3DDC97',
} as const;

/** Accent per mini-game. */
export const gameAccent = {
  matching: '#A78BFA',
  artikel: '#F472B6',
  kelimeAvi: '#22D3EE',
  hafiza: '#818CF8',
  wortdorf: '#F5B04C',
} as const;

/** Primary CTA gradient (indigo → violet). */
export const accentGradient = ['#6366F1', '#8B5CF6'] as const;
/** Screen canvas gradient, top → bottom. */
export const canvasGradient = ['#0D1430', '#080C18'] as const;

/** rgba() helper for hex accents, e.g. alpha('#7C8CF8', 0.15). */
export function alpha(hex: string, opacity: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${opacity})`;
}

/** Opaque darkened accent — used for the extruded edges of raised buttons. */
export function shade(hex: string, factor: number): string {
  const r = Math.round(parseInt(hex.slice(1, 3), 16) * factor);
  const g = Math.round(parseInt(hex.slice(3, 5), 16) * factor);
  const b = Math.round(parseInt(hex.slice(5, 7), 16) * factor);
  return `rgb(${r},${g},${b})`;
}

// ---------------------------------------------------------------------------
// Spacing / radii
// ---------------------------------------------------------------------------

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 28,
  xxxl: 40,
} as const;

export const radius = {
  sm: 10,
  md: 14,
  lg: 20,
  xl: 28,
  pill: 999,
} as const;

/** Comfortable hit area extension for small touch targets. */
export const hitSlop = { top: 10, bottom: 10, left: 10, right: 10 } as const;

// ---------------------------------------------------------------------------
// Typography
// ---------------------------------------------------------------------------

type Type = Record<string, TextStyle>;

export const type: Type = {
  display: { fontSize: 34, fontWeight: '800', letterSpacing: -0.8, color: colors.text },
  title: { fontSize: 24, fontWeight: '800', letterSpacing: -0.4, color: colors.text },
  heading: { fontSize: 18, fontWeight: '700', letterSpacing: -0.2, color: colors.text },
  body: { fontSize: 15, fontWeight: '500', letterSpacing: 0.1, color: colors.textDim, lineHeight: 21 },
  caption: { fontSize: 12.5, fontWeight: '500', letterSpacing: 0.1, color: colors.textFaint },
  label: { fontSize: 11, fontWeight: '700', letterSpacing: 1.6, color: colors.textFaint, textTransform: 'uppercase' },
  numeral: { fontSize: 28, fontWeight: '800', letterSpacing: -0.8, color: colors.text, fontVariant: ['tabular-nums'] },
};

// ---------------------------------------------------------------------------
// Elevation — low-opacity soft shadows for depth without hard boxes
// ---------------------------------------------------------------------------

export const shadow = {
  soft: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.22,
    shadowRadius: 16,
    elevation: 5,
  } as ViewStyle,
  floating: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.32,
    shadowRadius: 28,
    elevation: 12,
  } as ViewStyle,
  /** Colored glow behind accented elements. */
  glow(color: string, strength = 0.35): ViewStyle {
    return {
      shadowColor: color,
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: strength,
      shadowRadius: 18,
      elevation: 8,
    };
  },
};

/** Base glass surface — combine with a radius and padding. */
export const glassSurface: ViewStyle = {
  backgroundColor: colors.glass,
  borderWidth: 1,
  borderColor: colors.glassBorder,
};
