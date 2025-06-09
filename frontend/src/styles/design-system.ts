/**
 * LawyerOfOne Design System
 * 
 * A comprehensive design system built around Utlyze blue (#4169E1) and accent color (#34495E)
 * This system provides consistent design tokens for the entire application.
 */

// ===========================
// Color System
// ===========================

/**
 * Color palette with shades generated from base colors
 */
export const colors = {
  // Base colors
  white: '#FFFFFF',
  black: '#000000',
  
  // Primary color scale (Utlyze Blue)
  primary: {
    50: '#E6ECFB',
    100: '#C1CFF5',
    200: '#98AFEE',
    300: '#6E8FE7',
    400: '#4169E1',    // Base
    500: '#3356C8',
    600: '#2844AF',
    700: '#1E3396',
    800: '#15237D',
    900: '#0D1664',
    950: '#070C4B',
  },
  
  // Accent color scale (Dark Slate)
  accent: {
    50: '#E8EAED',
    100: '#C6CBD2',
    200: '#A1AAB7',
    300: '#7C899C',
    400: '#576881',
    500: '#34495E',    // Base
    600: '#2A3A4D',
    700: '#202C3C',
    800: '#171E2B',
    900: '#0E121A',
    950: '#070910',
  },
  
  // Neutral grays
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
    950: '#030712',
  },
  
  // Semantic colors
  semantic: {
    success: {
      light: '#10B981',
      main: '#059669',
      dark: '#047857',
      bg: '#F0FDF4',
      border: '#BBF7D0',
    },
    warning: {
      light: '#F59E0B',
      main: '#D97706',
      dark: '#B45309',
      bg: '#FFFBEB',
      border: '#FDE68A',
    },
    error: {
      light: '#EF4444',
      main: '#DC2626',
      dark: '#B91C1C',
      bg: '#FEF2F2',
      border: '#FECACA',
    },
    info: {
      light: '#3B82F6',
      main: '#2563EB',
      dark: '#1D4ED8',
      bg: '#EFF6FF',
      border: '#BFDBFE',
    },
  },
  
  // UI colors
  background: {
    primary: '#FFFFFF',
    secondary: '#F9FAFB',
    tertiary: '#F3F4F6',
    inverse: '#111827',
  },
  
  text: {
    primary: '#111827',
    secondary: '#6B7280',
    tertiary: '#9CA3AF',
    inverse: '#FFFFFF',
    disabled: '#D1D5DB',
  },
  
  border: {
    light: '#E5E7EB',
    default: '#D1D5DB',
    dark: '#9CA3AF',
  },
  
  // Special purpose
  overlay: {
    light: 'rgba(0, 0, 0, 0.05)',
    medium: 'rgba(0, 0, 0, 0.3)',
    dark: 'rgba(0, 0, 0, 0.7)',
  },
} as const;

// ===========================
// Typography System
// ===========================

export const typography = {
  // Font families
  fontFamily: {
    sans: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    serif: '"Merriweather", Georgia, Cambria, "Times New Roman", Times, serif',
    mono: '"JetBrains Mono", "SF Mono", Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
  
  // Font sizes with line heights
  fontSize: {
    xs: { size: '0.75rem', lineHeight: '1rem' },      // 12px
    sm: { size: '0.875rem', lineHeight: '1.25rem' },  // 14px
    base: { size: '1rem', lineHeight: '1.5rem' },     // 16px
    lg: { size: '1.125rem', lineHeight: '1.75rem' },  // 18px
    xl: { size: '1.25rem', lineHeight: '1.75rem' },   // 20px
    '2xl': { size: '1.5rem', lineHeight: '2rem' },    // 24px
    '3xl': { size: '1.875rem', lineHeight: '2.25rem' }, // 30px
    '4xl': { size: '2.25rem', lineHeight: '2.5rem' },  // 36px
    '5xl': { size: '3rem', lineHeight: '1' },          // 48px
    '6xl': { size: '3.75rem', lineHeight: '1' },       // 60px
    '7xl': { size: '4.5rem', lineHeight: '1' },        // 72px
  },
  
  // Font weights
  fontWeight: {
    thin: 100,
    extralight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  
  // Letter spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  
  // Heading styles
  heading: {
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.025em',
    },
    h2: {
      fontSize: '2.25rem',
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: '-0.025em',
    },
    h3: {
      fontSize: '1.875rem',
      fontWeight: 600,
      lineHeight: 1.4,
      letterSpacing: '-0.025em',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.5,
      letterSpacing: '0',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.5,
      letterSpacing: '0',
    },
    h6: {
      fontSize: '1.125rem',
      fontWeight: 600,
      lineHeight: 1.5,
      letterSpacing: '0',
    },
  },
} as const;

// ===========================
// Spacing System
// ===========================

export const spacing = {
  0: '0',
  px: '1px',
  0.5: '0.125rem',  // 2px
  1: '0.25rem',     // 4px
  1.5: '0.375rem',  // 6px
  2: '0.5rem',      // 8px
  2.5: '0.625rem',  // 10px
  3: '0.75rem',     // 12px
  3.5: '0.875rem',  // 14px
  4: '1rem',        // 16px
  5: '1.25rem',     // 20px
  6: '1.5rem',      // 24px
  7: '1.75rem',     // 28px
  8: '2rem',        // 32px
  9: '2.25rem',     // 36px
  10: '2.5rem',     // 40px
  11: '2.75rem',    // 44px
  12: '3rem',       // 48px
  14: '3.5rem',     // 56px
  16: '4rem',       // 64px
  20: '5rem',       // 80px
  24: '6rem',       // 96px
  28: '7rem',       // 112px
  32: '8rem',       // 128px
  36: '9rem',       // 144px
  40: '10rem',      // 160px
  44: '11rem',      // 176px
  48: '12rem',      // 192px
  52: '13rem',      // 208px
  56: '14rem',      // 224px
  60: '15rem',      // 240px
  64: '16rem',      // 256px
  72: '18rem',      // 288px
  80: '20rem',      // 320px
  96: '24rem',      // 384px
} as const;

// ===========================
// Layout System
// ===========================

export const layout = {
  // Container widths
  container: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  
  // Breakpoints
  breakpoints: {
    xs: '480px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  
  // Grid system
  grid: {
    columns: 12,
    gap: {
      sm: '1rem',
      md: '1.5rem',
      lg: '2rem',
    },
  },
} as const;

// ===========================
// Effects & Motion
// ===========================

export const effects = {
  // Box shadows
  shadow: {
    xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
    none: 'none',
    
    // Colored shadows for buttons
    primary: '0 4px 14px 0 rgba(65, 105, 225, 0.25)',
    accent: '0 4px 14px 0 rgba(52, 73, 94, 0.25)',
  },
  
  // Border radius
  borderRadius: {
    none: '0',
    sm: '0.125rem',   // 2px
    base: '0.25rem',  // 4px
    md: '0.375rem',   // 6px
    lg: '0.5rem',     // 8px
    xl: '0.75rem',    // 12px
    '2xl': '1rem',    // 16px
    '3xl': '1.5rem',  // 24px
    full: '9999px',
  },
  
  // Transitions
  transition: {
    none: 'none',
    all: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
    default: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1), border-color 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1), fill 150ms cubic-bezier(0.4, 0, 0.2, 1), stroke 150ms cubic-bezier(0.4, 0, 0.2, 1), opacity 150ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1)',
    colors: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1), border-color 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1), fill 150ms cubic-bezier(0.4, 0, 0.2, 1), stroke 150ms cubic-bezier(0.4, 0, 0.2, 1)',
    opacity: 'opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)',
    shadow: 'box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1)',
    transform: 'transform 150ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
  
  // Animation durations
  duration: {
    75: '75ms',
    100: '100ms',
    150: '150ms',
    200: '200ms',
    300: '300ms',
    500: '500ms',
    700: '700ms',
    1000: '1000ms',
  },
  
  // Animation timing functions
  timing: {
    linear: 'linear',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
} as const;

// ===========================
// Z-Index System
// ===========================

export const zIndex = {
  behind: -1,
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  backdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
  notification: 1080,
} as const;

// ===========================
// Component Tokens
// ===========================

export const components = {
  // Button variants
  button: {
    primary: {
      default: {
        bg: colors.primary[400],
        text: colors.white,
        border: colors.primary[400],
      },
      hover: {
        bg: colors.primary[500],
        text: colors.white,
        border: colors.primary[500],
      },
      active: {
        bg: colors.primary[600],
        text: colors.white,
        border: colors.primary[600],
      },
      disabled: {
        bg: colors.gray[300],
        text: colors.gray[500],
        border: colors.gray[300],
      },
    },
    secondary: {
      default: {
        bg: colors.accent[500],
        text: colors.white,
        border: colors.accent[500],
      },
      hover: {
        bg: colors.accent[600],
        text: colors.white,
        border: colors.accent[600],
      },
      active: {
        bg: colors.accent[700],
        text: colors.white,
        border: colors.accent[700],
      },
      disabled: {
        bg: colors.gray[300],
        text: colors.gray[500],
        border: colors.gray[300],
      },
    },
    outline: {
      default: {
        bg: 'transparent',
        text: colors.primary[400],
        border: colors.primary[400],
      },
      hover: {
        bg: colors.primary[50],
        text: colors.primary[500],
        border: colors.primary[500],
      },
      active: {
        bg: colors.primary[100],
        text: colors.primary[600],
        border: colors.primary[600],
      },
      disabled: {
        bg: 'transparent',
        text: colors.gray[400],
        border: colors.gray[400],
      },
    },
    ghost: {
      default: {
        bg: 'transparent',
        text: colors.gray[700],
        border: 'transparent',
      },
      hover: {
        bg: colors.gray[100],
        text: colors.gray[900],
        border: 'transparent',
      },
      active: {
        bg: colors.gray[200],
        text: colors.gray[900],
        border: 'transparent',
      },
      disabled: {
        bg: 'transparent',
        text: colors.gray[400],
        border: 'transparent',
      },
    },
    sizes: {
      sm: {
        padding: `${spacing[2]} ${spacing[3]}`,
        fontSize: typography.fontSize.sm.size,
        height: '32px',
      },
      md: {
        padding: `${spacing[2.5]} ${spacing[4]}`,
        fontSize: typography.fontSize.base.size,
        height: '40px',
      },
      lg: {
        padding: `${spacing[3]} ${spacing[5]}`,
        fontSize: typography.fontSize.lg.size,
        height: '48px',
      },
    },
  },
  
  // Input styles
  input: {
    default: {
      bg: colors.white,
      text: colors.text.primary,
      border: colors.border.default,
      placeholder: colors.text.tertiary,
    },
    hover: {
      border: colors.border.dark,
    },
    focus: {
      border: colors.primary[400],
      ring: colors.primary[100],
    },
    error: {
      border: colors.semantic.error.main,
      ring: colors.semantic.error.bg,
    },
    disabled: {
      bg: colors.gray[50],
      text: colors.text.disabled,
      border: colors.border.light,
    },
    sizes: {
      sm: {
        padding: `${spacing[2]} ${spacing[3]}`,
        fontSize: typography.fontSize.sm.size,
        height: '32px',
      },
      md: {
        padding: `${spacing[2.5]} ${spacing[3.5]}`,
        fontSize: typography.fontSize.base.size,
        height: '40px',
      },
      lg: {
        padding: `${spacing[3]} ${spacing[4]}`,
        fontSize: typography.fontSize.lg.size,
        height: '48px',
      },
    },
  },
  
  // Card styles
  card: {
    default: {
      bg: colors.white,
      border: colors.border.light,
      shadow: effects.shadow.sm,
    },
    hover: {
      shadow: effects.shadow.md,
    },
    padding: {
      sm: spacing[4],
      md: spacing[6],
      lg: spacing[8],
    },
  },
  
  // Badge styles
  badge: {
    primary: {
      bg: colors.primary[100],
      text: colors.primary[700],
      border: colors.primary[200],
    },
    secondary: {
      bg: colors.accent[100],
      text: colors.accent[700],
      border: colors.accent[200],
    },
    success: {
      bg: colors.semantic.success.bg,
      text: colors.semantic.success.dark,
      border: colors.semantic.success.border,
    },
    warning: {
      bg: colors.semantic.warning.bg,
      text: colors.semantic.warning.dark,
      border: colors.semantic.warning.border,
    },
    error: {
      bg: colors.semantic.error.bg,
      text: colors.semantic.error.dark,
      border: colors.semantic.error.border,
    },
    info: {
      bg: colors.semantic.info.bg,
      text: colors.semantic.info.dark,
      border: colors.semantic.info.border,
    },
  },
  
  // Alert styles
  alert: {
    success: {
      bg: colors.semantic.success.bg,
      text: colors.semantic.success.dark,
      border: colors.semantic.success.border,
      icon: colors.semantic.success.main,
    },
    warning: {
      bg: colors.semantic.warning.bg,
      text: colors.semantic.warning.dark,
      border: colors.semantic.warning.border,
      icon: colors.semantic.warning.main,
    },
    error: {
      bg: colors.semantic.error.bg,
      text: colors.semantic.error.dark,
      border: colors.semantic.error.border,
      icon: colors.semantic.error.main,
    },
    info: {
      bg: colors.semantic.info.bg,
      text: colors.semantic.info.dark,
      border: colors.semantic.info.border,
      icon: colors.semantic.info.main,
    },
  },
} as const;

// ===========================
// Utility Functions
// ===========================

/**
 * Convert hex color to rgba
 */
export const hexToRgba = (hex: string, alpha: number): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

/**
 * Get contrast color (black or white) based on background
 */
export const getContrastColor = (hexColor: string): string => {
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
  return yiq >= 128 ? '#000000' : '#FFFFFF';
};

/**
 * Generate focus styles
 */
export const focusRing = (color: string = colors.primary[400]) => ({
  outline: 'none',
  boxShadow: `0 0 0 2px ${hexToRgba(color, 0.2)}, 0 0 0 4px ${hexToRgba(color, 0.1)}`,
});

/**
 * Media query helper
 */
export const mediaQuery = {
  up: (breakpoint: keyof typeof layout.breakpoints) => 
    `@media (min-width: ${layout.breakpoints[breakpoint]})`,
  down: (breakpoint: keyof typeof layout.breakpoints) => 
    `@media (max-width: ${layout.breakpoints[breakpoint]})`,
  between: (min: keyof typeof layout.breakpoints, max: keyof typeof layout.breakpoints) =>
    `@media (min-width: ${layout.breakpoints[min]}) and (max-width: ${layout.breakpoints[max]})`,
};

// ===========================
// Export complete design system
// ===========================

const designSystem = {
  colors,
  typography,
  spacing,
  layout,
  effects,
  zIndex,
  components,
  utils: {
    hexToRgba,
    getContrastColor,
    focusRing,
    mediaQuery,
  },
} as const;

export default designSystem;

// Type exports for TypeScript support
export type DesignSystem = typeof designSystem;
export type Colors = typeof colors;
export type Typography = typeof typography;
export type Spacing = typeof spacing;
export type Layout = typeof layout;
export type Effects = typeof effects;
export type ZIndex = typeof zIndex;
export type Components = typeof components;