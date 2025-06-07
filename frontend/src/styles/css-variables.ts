/**
 * CSS Variables Generator
 * Converts design system tokens to CSS custom properties
 */

import designSystem from './design-system';

type NestedObject = {
  [key: string]: string | number | NestedObject;
};

/**
 * Convert a nested object to CSS variable format
 */
function objectToCSSVariables(
  obj: NestedObject,
  prefix: string = '',
  result: string[] = []
): string[] {
  Object.entries(obj).forEach(([key, value]) => {
    // Convert camelCase to kebab-case
    const kebabKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
    const varName = prefix ? `${prefix}-${kebabKey}` : kebabKey;
    
    if (typeof value === 'object' && value !== null) {
      // Recursively process nested objects
      objectToCSSVariables(value as NestedObject, varName, result);
    } else {
      // Add the CSS variable
      result.push(`--${varName}: ${value};`);
    }
  });
  
  return result;
}

/**
 * Generate CSS variables from design system
 */
export function generateCSSVariables(): string {
  const cssVars: string[] = [];
  
  // Colors
  cssVars.push('/* Colors */');
  cssVars.push(...objectToCSSVariables(designSystem.colors, 'color'));
  cssVars.push('');
  
  // Typography
  cssVars.push('/* Typography */');
  cssVars.push(...objectToCSSVariables({
    fontFamily: designSystem.typography.fontFamily,
    fontSize: Object.entries(designSystem.typography.fontSize).reduce((acc, [key, value]) => ({
      ...acc,
      [key]: value.size,
      [`${key}-line-height`]: value.lineHeight,
    }), {}),
    fontWeight: designSystem.typography.fontWeight,
    letterSpacing: designSystem.typography.letterSpacing,
  }, ''));
  cssVars.push('');
  
  // Spacing
  cssVars.push('/* Spacing */');
  cssVars.push(...objectToCSSVariables(designSystem.spacing, 'space'));
  cssVars.push('');
  
  // Layout
  cssVars.push('/* Layout */');
  cssVars.push(...objectToCSSVariables(designSystem.layout.container, 'container'));
  cssVars.push(...objectToCSSVariables(designSystem.layout.breakpoints, 'breakpoint'));
  cssVars.push('');
  
  // Effects
  cssVars.push('/* Effects */');
  cssVars.push(...objectToCSSVariables(designSystem.effects.shadow, 'shadow'));
  cssVars.push(...objectToCSSVariables(designSystem.effects.borderRadius, 'radius'));
  cssVars.push(...objectToCSSVariables(designSystem.effects.duration, 'duration'));
  cssVars.push('');
  
  // Z-index
  cssVars.push('/* Z-index */');
  cssVars.push(...objectToCSSVariables(designSystem.zIndex, 'z'));
  cssVars.push('');
  
  return `:root {\n  ${cssVars.join('\n  ')}\n}`;
}

/**
 * Generate component-specific CSS classes
 */
export function generateComponentClasses(): string {
  const classes: string[] = [];
  
  // Button classes
  classes.push('/* Button Styles */');
  Object.entries(designSystem.components.button).forEach(([variant, styles]) => {
    if (variant === 'sizes') {
      // Handle button sizes
      Object.entries(styles as typeof designSystem.components.button.sizes).forEach(([size, sizeStyles]) => {
        classes.push(`.btn-${size} {`);
        classes.push(`  padding: ${sizeStyles.padding};`);
        classes.push(`  font-size: ${sizeStyles.fontSize};`);
        classes.push(`  height: ${sizeStyles.height};`);
        classes.push(`}`);
        classes.push('');
      });
    } else {
      // Button variants - Type guard to ensure we have the right structure
      const variantStyles = styles as typeof designSystem.components.button.primary;
      if ('default' in variantStyles && 'hover' in variantStyles && 'active' in variantStyles && 'disabled' in variantStyles) {
        classes.push(`.btn-${variant} {`);
        classes.push(`  background-color: ${variantStyles.default.bg};`);
        classes.push(`  color: ${variantStyles.default.text};`);
        classes.push(`  border: 1px solid ${variantStyles.default.border};`);
        classes.push(`  transition: all 150ms ease;`);
        classes.push(`}`);
        classes.push('');
        
        classes.push(`.btn-${variant}:hover {`);
        classes.push(`  background-color: ${variantStyles.hover.bg};`);
        classes.push(`  color: ${variantStyles.hover.text};`);
        classes.push(`  border-color: ${variantStyles.hover.border};`);
        classes.push(`}`);
        classes.push('');
        
        classes.push(`.btn-${variant}:active {`);
        classes.push(`  background-color: ${variantStyles.active.bg};`);
        classes.push(`  color: ${variantStyles.active.text};`);
        classes.push(`  border-color: ${variantStyles.active.border};`);
        classes.push(`}`);
        classes.push('');
        
        classes.push(`.btn-${variant}:disabled {`);
        classes.push(`  background-color: ${variantStyles.disabled.bg};`);
        classes.push(`  color: ${variantStyles.disabled.text};`);
        classes.push(`  border-color: ${variantStyles.disabled.border};`);
        classes.push(`  cursor: not-allowed;`);
        classes.push(`  opacity: 0.6;`);
        classes.push(`}`);
        classes.push('');
      }
    }
  });
  
  // Input classes
  classes.push('/* Input Styles */');
  classes.push('.input {');
  classes.push(`  background-color: ${designSystem.components.input.default.bg};`);
  classes.push(`  color: ${designSystem.components.input.default.text};`);
  classes.push(`  border: 1px solid ${designSystem.components.input.default.border};`);
  classes.push(`  transition: all 150ms ease;`);
  classes.push('}');
  classes.push('');
  
  classes.push('.input:hover {');
  classes.push(`  border-color: ${designSystem.components.input.hover.border};`);
  classes.push('}');
  classes.push('');
  
  classes.push('.input:focus {');
  classes.push(`  outline: none;`);
  classes.push(`  border-color: ${designSystem.components.input.focus.border};`);
  classes.push(`  box-shadow: 0 0 0 3px ${designSystem.components.input.focus.ring};`);
  classes.push('}');
  classes.push('');
  
  classes.push('.input-error {');
  classes.push(`  border-color: ${designSystem.components.input.error.border};`);
  classes.push('}');
  classes.push('');
  
  classes.push('.input:disabled {');
  classes.push(`  background-color: ${designSystem.components.input.disabled.bg};`);
  classes.push(`  color: ${designSystem.components.input.disabled.text};`);
  classes.push(`  border-color: ${designSystem.components.input.disabled.border};`);
  classes.push(`  cursor: not-allowed;`);
  classes.push('}');
  classes.push('');
  
  // Input sizes
  Object.entries(designSystem.components.input.sizes).forEach(([size, sizeStyles]) => {
    classes.push(`.input-${size} {`);
    classes.push(`  padding: ${sizeStyles.padding};`);
    classes.push(`  font-size: ${sizeStyles.fontSize};`);
    classes.push(`  height: ${sizeStyles.height};`);
    classes.push(`}`);
    classes.push('');
  });
  
  // Card classes
  classes.push('/* Card Styles */');
  classes.push('.card {');
  classes.push(`  background-color: ${designSystem.components.card.default.bg};`);
  classes.push(`  border: 1px solid ${designSystem.components.card.default.border};`);
  classes.push(`  box-shadow: ${designSystem.components.card.default.shadow};`);
  classes.push(`  border-radius: ${designSystem.effects.borderRadius.lg};`);
  classes.push(`  transition: box-shadow 150ms ease;`);
  classes.push('}');
  classes.push('');
  
  classes.push('.card:hover {');
  classes.push(`  box-shadow: ${designSystem.components.card.hover.shadow};`);
  classes.push('}');
  classes.push('');
  
  // Card padding variants
  Object.entries(designSystem.components.card.padding).forEach(([size, padding]) => {
    classes.push(`.card-${size} {`);
    classes.push(`  padding: ${padding};`);
    classes.push(`}`);
    classes.push('');
  });
  
  // Badge classes
  classes.push('/* Badge Styles */');
  Object.entries(designSystem.components.badge).forEach(([variant, styles]) => {
    classes.push(`.badge-${variant} {`);
    classes.push(`  background-color: ${styles.bg};`);
    classes.push(`  color: ${styles.text};`);
    classes.push(`  border: 1px solid ${styles.border};`);
    classes.push(`  padding: ${designSystem.spacing[1]} ${designSystem.spacing[2]};`);
    classes.push(`  border-radius: ${designSystem.effects.borderRadius.md};`);
    classes.push(`  font-size: ${designSystem.typography.fontSize.sm.size};`);
    classes.push(`  font-weight: ${designSystem.typography.fontWeight.medium};`);
    classes.push(`  display: inline-flex;`);
    classes.push(`  align-items: center;`);
    classes.push(`}`);
    classes.push('');
  });
  
  // Alert classes
  classes.push('/* Alert Styles */');
  Object.entries(designSystem.components.alert).forEach(([variant, styles]) => {
    classes.push(`.alert-${variant} {`);
    classes.push(`  background-color: ${styles.bg};`);
    classes.push(`  color: ${styles.text};`);
    classes.push(`  border: 1px solid ${styles.border};`);
    classes.push(`  padding: ${designSystem.spacing[4]};`);
    classes.push(`  border-radius: ${designSystem.effects.borderRadius.lg};`);
    classes.push(`  display: flex;`);
    classes.push(`  align-items: flex-start;`);
    classes.push(`  gap: ${designSystem.spacing[3]};`);
    classes.push(`}`);
    classes.push('');
    
    classes.push(`.alert-${variant} .alert-icon {`);
    classes.push(`  color: ${styles.icon};`);
    classes.push(`  flex-shrink: 0;`);
    classes.push(`}`);
    classes.push('');
  });
  
  return classes.join('\n');
}

/**
 * Generate media query mixins
 */
export function generateMediaQueries(): string {
  const queries: string[] = [];
  
  queries.push('/* Media Query Mixins */');
  queries.push('/* Usage: @media (--sm) { ... } with CSS custom media queries */');
  queries.push('/* Or use the provided classes below */');
  queries.push('');
  
  Object.entries(designSystem.layout.breakpoints).forEach(([name, value]) => {
    queries.push(`/* ${name.toUpperCase()} and up (min-width: ${value}) */`);
    queries.push(`@media (min-width: ${value}) {`);
    queries.push(`  .${name}\\:block { display: block; }`);
    queries.push(`  .${name}\\:inline-block { display: inline-block; }`);
    queries.push(`  .${name}\\:inline { display: inline; }`);
    queries.push(`  .${name}\\:flex { display: flex; }`);
    queries.push(`  .${name}\\:inline-flex { display: inline-flex; }`);
    queries.push(`  .${name}\\:grid { display: grid; }`);
    queries.push(`  .${name}\\:hidden { display: none; }`);
    queries.push(`}`);
    queries.push('');
  });
  
  return queries.join('\n');
}

/**
 * Generate complete CSS file with all styles
 */
export function generateCompleteCSS(): string {
  const sections = [
    '/* Generated CSS from Design System */',
    '/* Do not edit manually - generated from design-system.ts */',
    '',
    generateCSSVariables(),
    '',
    generateComponentClasses(),
    '',
    generateMediaQueries(),
  ];
  
  return sections.join('\n');
}

/**
 * Generate Tailwind config based on design system
 */
export function generateTailwindConfig(): string {
  return `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: ${JSON.stringify(designSystem.colors, null, 2)},
      fontFamily: ${JSON.stringify(designSystem.typography.fontFamily, null, 2)},
      fontSize: ${JSON.stringify(
        Object.entries(designSystem.typography.fontSize).reduce((acc, [key, value]) => ({
          ...acc,
          [key]: [value.size, { lineHeight: value.lineHeight }],
        }), {}),
        null,
        2
      )},
      fontWeight: ${JSON.stringify(designSystem.typography.fontWeight, null, 2)},
      spacing: ${JSON.stringify(designSystem.spacing, null, 2)},
      borderRadius: ${JSON.stringify(designSystem.effects.borderRadius, null, 2)},
      boxShadow: ${JSON.stringify(designSystem.effects.shadow, null, 2)},
      zIndex: ${JSON.stringify(designSystem.zIndex, null, 2)},
    },
  },
  plugins: [],
};`;
}

// Export individual generators
export default {
  generateCSSVariables,
  generateComponentClasses,
  generateMediaQueries,
  generateCompleteCSS,
  generateTailwindConfig,
};