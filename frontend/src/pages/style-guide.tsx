/**
 * LawyerOfOne Style Guide
 * Complete documentation of the design system
 * 
 * Note: This example requires React to be installed:
 * npm install react react-dom @types/react @types/react-dom
 */

import React from 'react';
import { colors, spacing, typography, effects } from '../styles/design-system';

const StyleGuide: React.FC = () => {
  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: colors.background.secondary,
      fontFamily: typography.fontFamily.sans,
    }}>
      {/* Header */}
      <header style={{
        backgroundColor: colors.primary[400],
        color: colors.white,
        padding: `${spacing[8]} 0`,
        boxShadow: effects.shadow.lg,
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: `0 ${spacing[6]}` }}>
          <h1 style={{
            fontSize: typography.heading.h1.fontSize,
            fontWeight: typography.heading.h1.fontWeight,
            margin: 0,
          }}>
            LawyerOfOne Design System
          </h1>
          <p style={{
            fontSize: typography.fontSize.lg.size,
            marginTop: spacing[2],
            opacity: 0.9,
          }}>
            Built with Utlyze Blue (#4169E1) and Accent Color (#34495E)
          </p>
        </div>
      </header>

      {/* Navigation */}
      <nav style={{
        backgroundColor: colors.white,
        borderBottom: `1px solid ${colors.border.light}`,
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: effects.shadow.sm,
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: `0 ${spacing[6]}` }}>
          <ul style={{
            display: 'flex',
            gap: spacing[6],
            listStyle: 'none',
            margin: 0,
            padding: `${spacing[4]} 0`,
            overflowX: 'auto',
          }}>
            {['Colors', 'Typography', 'Spacing', 'Components', 'Layout', 'Effects'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  style={{
                    color: colors.text.primary,
                    textDecoration: 'none',
                    fontWeight: typography.fontWeight.medium,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: spacing[6] }}>
        {/* Colors Section */}
        <section id="colors" style={{ marginBottom: spacing[16] }}>
          <h2 style={{
            fontSize: typography.heading.h2.fontSize,
            fontWeight: typography.heading.h2.fontWeight,
            marginBottom: spacing[6],
            color: colors.text.primary,
          }}>
            Colors
          </h2>

          {/* Primary Colors */}
          <div style={{ marginBottom: spacing[8] }}>
            <h3 style={{
              fontSize: typography.heading.h3.fontSize,
              marginBottom: spacing[4],
              color: colors.text.primary,
            }}>
              Primary Colors
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: spacing[3] }}>
              {Object.entries(colors.primary).map(([key, value]) => (
                <ColorSwatch key={key} name={`primary.${key}`} color={value} />
              ))}
            </div>
          </div>

          {/* Accent Colors */}
          <div style={{ marginBottom: spacing[8] }}>
            <h3 style={{
              fontSize: typography.heading.h3.fontSize,
              marginBottom: spacing[4],
              color: colors.text.primary,
            }}>
              Accent Colors
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: spacing[3] }}>
              {Object.entries(colors.accent).map(([key, value]) => (
                <ColorSwatch key={key} name={`accent.${key}`} color={value} />
              ))}
            </div>
          </div>

          {/* Semantic Colors */}
          <div style={{ marginBottom: spacing[8] }}>
            <h3 style={{
              fontSize: typography.heading.h3.fontSize,
              marginBottom: spacing[4],
              color: colors.text.primary,
            }}>
              Semantic Colors
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: spacing[4] }}>
              {Object.entries(colors.semantic).map(([variant, shades]) => (
                <div key={variant}>
                  <h4 style={{ marginBottom: spacing[2], textTransform: 'capitalize' }}>{variant}</h4>
                  <div style={{ display: 'flex', gap: spacing[2] }}>
                    {Object.entries(shades).map(([shade, color]) => (
                      <ColorSwatch key={shade} name={shade} color={color} small />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Typography Section */}
        <section id="typography" style={{ marginBottom: spacing[16] }}>
          <h2 style={{
            fontSize: typography.heading.h2.fontSize,
            fontWeight: typography.heading.h2.fontWeight,
            marginBottom: spacing[6],
            color: colors.text.primary,
          }}>
            Typography
          </h2>

          {/* Font Families */}
          <div style={{ marginBottom: spacing[8] }}>
            <h3 style={{
              fontSize: typography.heading.h3.fontSize,
              marginBottom: spacing[4],
              color: colors.text.primary,
            }}>
              Font Families
            </h3>
            <div style={{ display: 'grid', gap: spacing[4] }}>
              <div>
                <p style={{ fontFamily: typography.fontFamily.sans, fontSize: typography.fontSize.lg.size }}>
                  Sans Serif: The quick brown fox jumps over the lazy dog
                </p>
                <code style={{ fontSize: typography.fontSize.sm.size, color: colors.text.tertiary }}>
                  {typography.fontFamily.sans}
                </code>
              </div>
              <div>
                <p style={{ fontFamily: typography.fontFamily.serif, fontSize: typography.fontSize.lg.size }}>
                  Serif: The quick brown fox jumps over the lazy dog
                </p>
                <code style={{ fontSize: typography.fontSize.sm.size, color: colors.text.tertiary }}>
                  {typography.fontFamily.serif}
                </code>
              </div>
              <div>
                <p style={{ fontFamily: typography.fontFamily.mono, fontSize: typography.fontSize.lg.size }}>
                  Monospace: The quick brown fox jumps over the lazy dog
                </p>
                <code style={{ fontSize: typography.fontSize.sm.size, color: colors.text.tertiary }}>
                  {typography.fontFamily.mono}
                </code>
              </div>
            </div>
          </div>

          {/* Font Sizes */}
          <div style={{ marginBottom: spacing[8] }}>
            <h3 style={{
              fontSize: typography.heading.h3.fontSize,
              marginBottom: spacing[4],
              color: colors.text.primary,
            }}>
              Font Sizes
            </h3>
            <div style={{ display: 'grid', gap: spacing[3] }}>
              {Object.entries(typography.fontSize).map(([key, value]) => (
                <div key={key} style={{ display: 'flex', alignItems: 'baseline', gap: spacing[4] }}>
                  <span style={{ 
                    fontSize: typography.fontSize.sm.size, 
                    color: colors.text.tertiary,
                    minWidth: '60px',
                  }}>
                    {key}
                  </span>
                  <span style={{ fontSize: value.size, lineHeight: value.lineHeight }}>
                    The quick brown fox jumps over the lazy dog
                  </span>
                  <span style={{ fontSize: typography.fontSize.xs.size, color: colors.text.tertiary }}>
                    {value.size}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Headings */}
          <div style={{ marginBottom: spacing[8] }}>
            <h3 style={{
              fontSize: typography.heading.h3.fontSize,
              marginBottom: spacing[4],
              color: colors.text.primary,
            }}>
              Headings
            </h3>
            <div style={{ display: 'grid', gap: spacing[4] }}>
              {Object.entries(typography.heading).map(([level, styles]) => {
                const HeadingTag = level as keyof JSX.IntrinsicElements;
                return (
                  <div key={level}>
                    <HeadingTag style={styles}>
                      {level.toUpperCase()}: Heading Example
                    </HeadingTag>
                    <code style={{ fontSize: typography.fontSize.xs.size, color: colors.text.tertiary }}>
                      {styles.fontSize} / {styles.fontWeight} / {styles.lineHeight}
                    </code>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Spacing Section */}
        <section id="spacing" style={{ marginBottom: spacing[16] }}>
          <h2 style={{
            fontSize: typography.heading.h2.fontSize,
            fontWeight: typography.heading.h2.fontWeight,
            marginBottom: spacing[6],
            color: colors.text.primary,
          }}>
            Spacing
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: spacing[3] }}>
            {Object.entries(spacing).slice(0, 20).map(([key, value]) => (
              <div key={key} style={{ display: 'flex', alignItems: 'center', gap: spacing[2] }}>
                <span style={{ 
                  fontSize: typography.fontSize.sm.size, 
                  color: colors.text.tertiary,
                  minWidth: '40px',
                }}>
                  {key}
                </span>
                <div style={{
                  height: '24px',
                  backgroundColor: colors.primary[400],
                  width: value,
                  borderRadius: effects.borderRadius.sm,
                }} />
                <span style={{ fontSize: typography.fontSize.xs.size, color: colors.text.tertiary }}>
                  {value}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Components Section */}
        <section id="components" style={{ marginBottom: spacing[16] }}>
          <h2 style={{
            fontSize: typography.heading.h2.fontSize,
            fontWeight: typography.heading.h2.fontWeight,
            marginBottom: spacing[6],
            color: colors.text.primary,
          }}>
            Components
          </h2>
          
          <div style={{
            padding: spacing[6],
            backgroundColor: colors.white,
            borderRadius: effects.borderRadius.lg,
            boxShadow: effects.shadow.sm,
          }}>
            <p style={{ marginBottom: spacing[4], color: colors.text.secondary }}>
              Component examples are available in separate files:
            </p>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              <li style={{ marginBottom: spacing[2] }}>
                <code style={{ 
                  backgroundColor: colors.gray[100], 
                  padding: `${spacing[1]} ${spacing[2]}`,
                  borderRadius: effects.borderRadius.sm,
                }}>
                  /components/examples/ButtonExamples.tsx
                </code>
              </li>
              <li style={{ marginBottom: spacing[2] }}>
                <code style={{ 
                  backgroundColor: colors.gray[100], 
                  padding: `${spacing[1]} ${spacing[2]}`,
                  borderRadius: effects.borderRadius.sm,
                }}>
                  /components/examples/FormExamples.tsx
                </code>
              </li>
              <li style={{ marginBottom: spacing[2] }}>
                <code style={{ 
                  backgroundColor: colors.gray[100], 
                  padding: `${spacing[1]} ${spacing[2]}`,
                  borderRadius: effects.borderRadius.sm,
                }}>
                  /components/examples/UIExamples.tsx
                </code>
              </li>
            </ul>
          </div>
        </section>

        {/* Effects Section */}
        <section id="effects" style={{ marginBottom: spacing[16] }}>
          <h2 style={{
            fontSize: typography.heading.h2.fontSize,
            fontWeight: typography.heading.h2.fontWeight,
            marginBottom: spacing[6],
            color: colors.text.primary,
          }}>
            Effects
          </h2>

          {/* Shadows */}
          <div style={{ marginBottom: spacing[8] }}>
            <h3 style={{
              fontSize: typography.heading.h3.fontSize,
              marginBottom: spacing[4],
              color: colors.text.primary,
            }}>
              Shadows
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: spacing[4] }}>
              {Object.entries(effects.shadow).filter(([key]) => !key.includes('primary') && !key.includes('accent')).map(([key, value]) => (
                <div
                  key={key}
                  style={{
                    backgroundColor: colors.white,
                    padding: spacing[4],
                    borderRadius: effects.borderRadius.lg,
                    boxShadow: value,
                    textAlign: 'center',
                  }}
                >
                  <p style={{ margin: 0, fontWeight: typography.fontWeight.medium }}>{key}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Border Radius */}
          <div style={{ marginBottom: spacing[8] }}>
            <h3 style={{
              fontSize: typography.heading.h3.fontSize,
              marginBottom: spacing[4],
              color: colors.text.primary,
            }}>
              Border Radius
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: spacing[3] }}>
              {Object.entries(effects.borderRadius).map(([key, value]) => (
                <div
                  key={key}
                  style={{
                    backgroundColor: colors.primary[100],
                    border: `2px solid ${colors.primary[400]}`,
                    height: '80px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: value,
                  }}
                >
                  <span style={{ fontSize: typography.fontSize.sm.size, fontWeight: typography.fontWeight.medium }}>
                    {key}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Usage Examples */}
        <section style={{ marginBottom: spacing[16] }}>
          <h2 style={{
            fontSize: typography.heading.h2.fontSize,
            fontWeight: typography.heading.h2.fontWeight,
            marginBottom: spacing[6],
            color: colors.text.primary,
          }}>
            Usage Examples
          </h2>
          
          <div style={{
            backgroundColor: colors.gray[900],
            color: colors.gray[100],
            padding: spacing[6],
            borderRadius: effects.borderRadius.lg,
            fontFamily: typography.fontFamily.mono,
            fontSize: typography.fontSize.sm.size,
            overflow: 'auto',
          }}>
            <pre style={{ margin: 0 }}>
{`// Import the design system
import { colors, spacing, typography, effects } from '@/styles/design-system';

// Use in your components
const Button = styled.button\`
  background-color: \${colors.primary[400]};
  color: \${colors.white};
  padding: \${spacing[3]} \${spacing[6]};
  font-size: \${typography.fontSize.base.size};
  border-radius: \${effects.borderRadius.md};
  transition: \${effects.transition.all};
  
  &:hover {
    background-color: \${colors.primary[500]};
    box-shadow: \${effects.shadow.primary};
  }
\`;

// Or use with inline styles
<div style={{
  padding: spacing[4],
  backgroundColor: colors.background.secondary,
  borderRadius: effects.borderRadius.lg,
}}>
  Content
</div>`}
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
};

// Color swatch component
const ColorSwatch: React.FC<{ name: string; color: string; small?: boolean }> = ({ name, color, small = false }) => {
  const size = small ? '40px' : '80px';
  
  return (
    <div style={{ textAlign: 'center' }}>
      <div
        style={{
          width: size,
          height: size,
          backgroundColor: color,
          borderRadius: effects.borderRadius.md,
          boxShadow: effects.shadow.sm,
          margin: '0 auto',
          marginBottom: spacing[2],
          border: `1px solid ${colors.border.light}`,
        }}
      />
      <p style={{ 
        fontSize: typography.fontSize.xs.size, 
        margin: 0,
        fontWeight: typography.fontWeight.medium,
      }}>
        {name}
      </p>
      <p style={{ 
        fontSize: typography.fontSize.xs.size, 
        margin: 0,
        color: colors.text.tertiary,
        fontFamily: typography.fontFamily.mono,
      }}>
        {color}
      </p>
    </div>
  );
};

export default StyleGuide;