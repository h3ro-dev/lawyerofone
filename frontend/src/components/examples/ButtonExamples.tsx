/**
 * Button Component Examples
 * Demonstrates how to use the design system for buttons
 * 
 * Note: This example requires React to be installed:
 * npm install react react-dom @types/react @types/react-dom
 */

import React from 'react';
import { colors, spacing, typography, effects, components } from '../../styles/design-system';

// Example 1: Button using direct design system tokens
export const ButtonWithTokens: React.FC<{ 
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  children?: React.ReactNode;
  disabled?: boolean;
}> = ({ 
  variant = 'primary',
  children,
  ...props 
}) => {
  const styles = components.button[variant];
  
  return (
    <button
      style={{
        backgroundColor: styles.default.bg,
        color: styles.default.text,
        border: `1px solid ${styles.default.border}`,
        padding: `${spacing[2.5]} ${spacing[4]}`,
        fontSize: typography.fontSize.base.size,
        fontWeight: typography.fontWeight.medium,
        borderRadius: effects.borderRadius.md,
        cursor: 'pointer',
        transition: effects.transition.all,
        fontFamily: typography.fontFamily.sans,
        ...(props.disabled && {
          backgroundColor: styles.disabled.bg,
          color: styles.disabled.text,
          borderColor: styles.disabled.border,
          cursor: 'not-allowed',
          opacity: 0.6,
        }),
      }}
      onMouseEnter={(e) => {
        if (!props.disabled) {
          e.currentTarget.style.backgroundColor = styles.hover.bg;
          e.currentTarget.style.color = styles.hover.text;
          e.currentTarget.style.borderColor = styles.hover.border;
        }
      }}
      onMouseLeave={(e) => {
        if (!props.disabled) {
          e.currentTarget.style.backgroundColor = styles.default.bg;
          e.currentTarget.style.color = styles.default.text;
          e.currentTarget.style.borderColor = styles.default.border;
        }
      }}
      onMouseDown={(e) => {
        if (!props.disabled) {
          e.currentTarget.style.backgroundColor = styles.active.bg;
          e.currentTarget.style.color = styles.active.text;
          e.currentTarget.style.borderColor = styles.active.border;
        }
      }}
      onMouseUp={(e) => {
        if (!props.disabled) {
          e.currentTarget.style.backgroundColor = styles.hover.bg;
          e.currentTarget.style.color = styles.hover.text;
          e.currentTarget.style.borderColor = styles.hover.border;
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
};

// Example 2: Button component with CSS classes
export const ButtonWithClasses: React.FC<{
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
}> = ({ variant = 'primary', size = 'md', className = '', children, ...props }) => {
  return (
    <button
      className={`btn-${variant} btn-${size} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Example 3: Styled button with emotion/styled-components (pseudo-code)
export const StyledButtonExample = `
import styled from '@emotion/styled';
import { colors, spacing, typography, effects } from '@/styles/design-system';

const StyledButton = styled.button\`
  background-color: \${colors.primary[400]};
  color: \${colors.white};
  border: 1px solid \${colors.primary[400]};
  padding: \${spacing[2.5]} \${spacing[4]};
  font-size: \${typography.fontSize.base.size};
  font-weight: \${typography.fontWeight.medium};
  border-radius: \${effects.borderRadius.md};
  cursor: pointer;
  transition: \${effects.transition.all};
  font-family: \${typography.fontFamily.sans};
  
  &:hover {
    background-color: \${colors.primary[500]};
    border-color: \${colors.primary[500]};
    box-shadow: \${effects.shadow.primary};
  }
  
  &:active {
    background-color: \${colors.primary[600]};
    border-color: \${colors.primary[600]};
  }
  
  &:disabled {
    background-color: \${colors.gray[300]};
    color: \${colors.gray[500]};
    border-color: \${colors.gray[300]};
    cursor: not-allowed;
    opacity: 0.6;
  }
  
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px \${colors.primary[100]}, 0 0 0 4px \${colors.primary[50]};
  }
\`;
`;

// Example 4: Button group component
export const ButtonGroup: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      style={{
        display: 'inline-flex',
        gap: spacing[2],
        alignItems: 'center',
      }}
    >
      {children}
    </div>
  );
};

// Example 5: Icon button
export const IconButton: React.FC<{
  icon: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  'aria-label': string;
}> = ({ icon, variant = 'ghost', size = 'md', ...props }) => {
  const sizeMap = {
    sm: { width: '32px', height: '32px', padding: spacing[1.5] },
    md: { width: '40px', height: '40px', padding: spacing[2] },
    lg: { width: '48px', height: '48px', padding: spacing[2.5] },
  };
  
  const styles = components.button[variant];
  const sizeStyles = sizeMap[size];
  
  return (
    <button
      style={{
        backgroundColor: styles.default.bg,
        color: styles.default.text,
        border: `1px solid ${styles.default.border}`,
        width: sizeStyles.width,
        height: sizeStyles.height,
        padding: sizeStyles.padding,
        borderRadius: effects.borderRadius.md,
        cursor: 'pointer',
        transition: effects.transition.all,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
      {...props}
    >
      {icon}
    </button>
  );
};

// Example usage component
export const ButtonExamplesShowcase: React.FC = () => {
  return (
    <div style={{ padding: spacing[8], backgroundColor: colors.background.secondary }}>
      <h2 style={{ 
        fontSize: typography.heading.h2.fontSize, 
        fontWeight: typography.heading.h2.fontWeight,
        marginBottom: spacing[6],
        color: colors.text.primary,
      }}>
        Button Examples
      </h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[8] }}>
        {/* Primary Buttons */}
        <section>
          <h3 style={{ 
            fontSize: typography.heading.h3.fontSize,
            marginBottom: spacing[4],
            color: colors.text.primary,
          }}>
            Primary Buttons
          </h3>
          <ButtonGroup>
            <ButtonWithTokens variant="primary">Primary Button</ButtonWithTokens>
            <ButtonWithTokens variant="primary" disabled>Disabled</ButtonWithTokens>
          </ButtonGroup>
        </section>
        
        {/* Secondary Buttons */}
        <section>
          <h3 style={{ 
            fontSize: typography.heading.h3.fontSize,
            marginBottom: spacing[4],
            color: colors.text.primary,
          }}>
            Secondary Buttons
          </h3>
          <ButtonGroup>
            <ButtonWithTokens variant="secondary">Secondary Button</ButtonWithTokens>
            <ButtonWithTokens variant="secondary" disabled>Disabled</ButtonWithTokens>
          </ButtonGroup>
        </section>
        
        {/* Outline Buttons */}
        <section>
          <h3 style={{ 
            fontSize: typography.heading.h3.fontSize,
            marginBottom: spacing[4],
            color: colors.text.primary,
          }}>
            Outline Buttons
          </h3>
          <ButtonGroup>
            <ButtonWithTokens variant="outline">Outline Button</ButtonWithTokens>
            <ButtonWithTokens variant="outline" disabled>Disabled</ButtonWithTokens>
          </ButtonGroup>
        </section>
        
        {/* Ghost Buttons */}
        <section>
          <h3 style={{ 
            fontSize: typography.heading.h3.fontSize,
            marginBottom: spacing[4],
            color: colors.text.primary,
          }}>
            Ghost Buttons
          </h3>
          <ButtonGroup>
            <ButtonWithTokens variant="ghost">Ghost Button</ButtonWithTokens>
            <ButtonWithTokens variant="ghost" disabled>Disabled</ButtonWithTokens>
          </ButtonGroup>
        </section>
        
        {/* Button Sizes (using CSS classes) */}
        <section>
          <h3 style={{ 
            fontSize: typography.heading.h3.fontSize,
            marginBottom: spacing[4],
            color: colors.text.primary,
          }}>
            Button Sizes
          </h3>
          <ButtonGroup>
            <ButtonWithClasses size="sm">Small</ButtonWithClasses>
            <ButtonWithClasses size="md">Medium</ButtonWithClasses>
            <ButtonWithClasses size="lg">Large</ButtonWithClasses>
          </ButtonGroup>
        </section>
        
        {/* Icon Buttons */}
        <section>
          <h3 style={{ 
            fontSize: typography.heading.h3.fontSize,
            marginBottom: spacing[4],
            color: colors.text.primary,
          }}>
            Icon Buttons
          </h3>
          <ButtonGroup>
            <IconButton icon="+" aria-label="Add" size="sm" />
            <IconButton icon="✓" aria-label="Check" size="md" variant="primary" />
            <IconButton icon="×" aria-label="Close" size="lg" variant="outline" />
          </ButtonGroup>
        </section>
      </div>
    </div>
  );
};