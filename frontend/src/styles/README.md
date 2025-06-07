# LawyerOfOne Design System

A comprehensive design system built with Utlyze Blue (#4169E1) and Accent Color (#34495E) as the foundation colors.

## 📁 File Structure

```
frontend/src/styles/
├── design-system.ts      # Core design tokens and system
├── globals.css          # Global CSS with CSS variables
├── css-variables.ts     # CSS variable generator utility
└── README.md           # This file

frontend/src/components/examples/
├── ButtonExamples.tsx   # Button component examples
├── FormExamples.tsx     # Form component examples
└── UIExamples.tsx       # UI component examples

frontend/src/pages/
└── style-guide.tsx      # Complete style guide documentation
```

## 🎨 Core Features

### 1. Color System
- **Primary Palette**: 11 shades of Utlyze Blue (#4169E1)
- **Accent Palette**: 11 shades of Dark Slate (#34495E)
- **Neutral Grays**: Complete grayscale palette
- **Semantic Colors**: Success, warning, error, and info states
- **UI Colors**: Background, text, border, and overlay variations

### 2. Typography
- **Font Families**: Sans (Inter), Serif (Merriweather), Mono (JetBrains Mono)
- **Font Sizes**: 11 sizes from xs (12px) to 7xl (72px)
- **Font Weights**: 9 weights from thin (100) to black (900)
- **Heading Presets**: Pre-configured styles for h1-h6

### 3. Spacing
- **8px Base Grid**: Consistent spacing scale from 0 to 96 (24rem)
- **Pixel-perfect**: Includes px value for precise adjustments

### 4. Effects
- **Shadows**: 8 shadow depths plus colored shadows
- **Border Radius**: 9 options from none to full circle
- **Transitions**: Pre-configured animation properties

### 5. Components
Pre-styled tokens for:
- Buttons (primary, secondary, outline, ghost)
- Form inputs and controls
- Cards
- Badges
- Alerts

## 🚀 Usage

### TypeScript/JavaScript Import

```typescript
import { colors, spacing, typography, effects, components } from '@/styles/design-system';

// Use tokens in your components
const buttonStyle = {
  backgroundColor: colors.primary[400],
  padding: `${spacing[3]} ${spacing[6]}`,
  fontSize: typography.fontSize.base.size,
  borderRadius: effects.borderRadius.md,
};
```

### With CSS Variables

Include the global CSS file in your app:

```typescript
import '@/styles/globals.css';
```

Then use CSS variables:

```css
.button {
  background-color: var(--color-primary-400);
  padding: var(--space-3) var(--space-6);
  font-size: var(--text-base);
  border-radius: var(--radius-md);
}
```

### Generate CSS from Design System

```typescript
import { generateCompleteCSS, generateTailwindConfig } from '@/styles/css-variables';

// Generate complete CSS file
const css = generateCompleteCSS();

// Generate Tailwind config
const tailwindConfig = generateTailwindConfig();
```

## 📚 Component Examples

### Button Example

```typescript
import { ButtonWithTokens } from '@/components/examples/ButtonExamples';

<ButtonWithTokens variant="primary">
  Click me
</ButtonWithTokens>
```

### Form Example

```typescript
import { Input, FormField } from '@/components/examples/FormExamples';

<FormField label="Email" required error={errors.email}>
  <Input 
    type="email" 
    placeholder="Enter your email"
    error={!!errors.email}
  />
</FormField>
```

### UI Components

```typescript
import { Card, Badge, Alert } from '@/components/examples/UIExamples';

<Card padding="md" hoverable>
  <Badge variant="success">Active</Badge>
  <Alert variant="info" title="Note">
    This is an informational message.
  </Alert>
</Card>
```

## 🔧 Utility Functions

### Color Utilities

```typescript
import { hexToRgba, getContrastColor } from '@/styles/design-system';

// Convert hex to rgba
const transparentBlue = hexToRgba('#4169E1', 0.5); // rgba(65, 105, 225, 0.5)

// Get contrast color (black or white)
const textColor = getContrastColor('#4169E1'); // #FFFFFF
```

### Focus Ring

```typescript
import { focusRing } from '@/styles/design-system';

const focusStyles = focusRing(colors.primary[400]);
// Returns focus outline styles for accessibility
```

### Media Queries

```typescript
import { mediaQuery } from '@/styles/design-system';

const styles = `
  ${mediaQuery.up('md')} {
    display: flex;
  }
  
  ${mediaQuery.between('sm', 'lg')} {
    padding: 1rem;
  }
`;
```

## 🎯 Design Principles

1. **Consistency**: All design decisions follow the 8px grid system
2. **Accessibility**: Colors meet WCAG contrast requirements
3. **Scalability**: Token-based system allows easy theme changes
4. **Performance**: CSS variables enable runtime theming
5. **Developer Experience**: Full TypeScript support with autocompletion

## 🔍 Style Guide

View the complete style guide by navigating to:
```
/pages/style-guide
```

This interactive guide showcases:
- All color palettes with hex values
- Typography scales and examples
- Spacing visualization
- Component examples
- Shadow and border radius options
- Usage code snippets

## 🛠️ Customization

To customize the design system:

1. Modify the base colors in `design-system.ts`:
```typescript
const baseColors = {
  primary: '#YourPrimaryColor',
  accent: '#YourAccentColor',
};
```

2. Regenerate CSS variables:
```typescript
npm run generate-css-vars
```

3. Update component styles as needed

## 📦 Dependencies

The component examples require React:
```bash
npm install react react-dom @types/react @types/react-dom
```

For styled-components or emotion:
```bash
npm install @emotion/styled @emotion/react
# or
npm install styled-components
```

## 🤝 Best Practices

1. **Use semantic color names** instead of direct color values
2. **Stick to the spacing scale** for consistent layouts
3. **Use typography presets** for text styles
4. **Apply effects consistently** across similar components
5. **Follow the component patterns** in the examples

## 📄 License

This design system is part of the LawyerOfOne project.