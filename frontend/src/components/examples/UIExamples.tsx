/**
 * UI Component Examples
 * Demonstrates how to use the design system for UI elements
 * 
 * Note: This example requires React to be installed:
 * npm install react react-dom @types/react @types/react-dom
 */

import React from 'react';
import { colors, spacing, typography, effects, components } from '../../styles/design-system';

// Example 1: Card component
export const Card: React.FC<{
  children: React.ReactNode;
  padding?: 'sm' | 'md' | 'lg';
  hoverable?: boolean;
  onClick?: () => void;
}> = ({ children, padding = 'md', hoverable = false, onClick }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  
  return (
    <div
      style={{
        backgroundColor: components.card.default.bg,
        border: `1px solid ${components.card.default.border}`,
        boxShadow: isHovered && hoverable ? components.card.hover.shadow : components.card.default.shadow,
        borderRadius: effects.borderRadius.lg,
        padding: components.card.padding[padding],
        transition: effects.transition.shadow,
        cursor: onClick ? 'pointer' : 'default',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

// Example 2: Badge component
export const Badge: React.FC<{
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  children: React.ReactNode;
}> = ({ variant = 'primary', children }) => {
  const styles = components.badge[variant];
  
  return (
    <span
      style={{
        backgroundColor: styles.bg,
        color: styles.text,
        border: `1px solid ${styles.border}`,
        padding: `${spacing[1]} ${spacing[2]}`,
        borderRadius: effects.borderRadius.md,
        fontSize: typography.fontSize.sm.size,
        fontWeight: typography.fontWeight.medium,
        display: 'inline-flex',
        alignItems: 'center',
        gap: spacing[1],
      }}
    >
      {children}
    </span>
  );
};

// Example 3: Alert component
export const Alert: React.FC<{
  variant?: 'success' | 'warning' | 'error' | 'info';
  title?: string;
  children: React.ReactNode;
  onClose?: () => void;
}> = ({ variant = 'info', title, children, onClose }) => {
  const styles = components.alert[variant];
  
  const iconMap = {
    success: '✓',
    warning: '⚠',
    error: '✕',
    info: 'ℹ',
  };
  
  return (
    <div
      style={{
        backgroundColor: styles.bg,
        color: styles.text,
        border: `1px solid ${styles.border}`,
        padding: spacing[4],
        borderRadius: effects.borderRadius.lg,
        display: 'flex',
        gap: spacing[3],
        position: 'relative',
      }}
    >
      <span
        style={{
          color: styles.icon,
          fontSize: typography.fontSize.xl.size,
          flexShrink: 0,
          width: '24px',
          height: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {iconMap[variant]}
      </span>
      <div style={{ flex: 1 }}>
        {title && (
          <h4
            style={{
              fontSize: typography.fontSize.base.size,
              fontWeight: typography.fontWeight.semibold,
              marginBottom: spacing[1],
            }}
          >
            {title}
          </h4>
        )}
        <div style={{ fontSize: typography.fontSize.sm.size }}>{children}</div>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: spacing[2],
            right: spacing[2],
            background: 'none',
            border: 'none',
            color: styles.text,
            cursor: 'pointer',
            padding: spacing[1],
            fontSize: typography.fontSize.lg.size,
            lineHeight: 1,
            opacity: 0.7,
            transition: effects.transition.opacity,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '1';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '0.7';
          }}
        >
          ×
        </button>
      )}
    </div>
  );
};

// Example 4: Divider component
export const Divider: React.FC<{
  orientation?: 'horizontal' | 'vertical';
  spacing?: keyof typeof spacing;
}> = ({ orientation = 'horizontal', spacing: spacingValue = 4 }) => {
  const isHorizontal = orientation === 'horizontal';
  
  return (
    <div
      style={{
        backgroundColor: colors.border.light,
        width: isHorizontal ? '100%' : '1px',
        height: isHorizontal ? '1px' : '100%',
        margin: isHorizontal
          ? `${spacing[spacingValue]} 0`
          : `0 ${spacing[spacingValue]}`,
      }}
    />
  );
};

// Example 5: Avatar component
export const Avatar: React.FC<{
  src?: string;
  name: string;
  size?: 'sm' | 'md' | 'lg';
}> = ({ src, name, size = 'md' }) => {
  const sizeMap = {
    sm: { width: '32px', height: '32px', fontSize: typography.fontSize.sm.size },
    md: { width: '40px', height: '40px', fontSize: typography.fontSize.base.size },
    lg: { width: '48px', height: '48px', fontSize: typography.fontSize.lg.size },
  };
  
  const sizeStyles = sizeMap[size];
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
  
  return (
    <div
      style={{
        width: sizeStyles.width,
        height: sizeStyles.height,
        borderRadius: effects.borderRadius.full,
        overflow: 'hidden',
        backgroundColor: colors.primary[400],
        color: colors.white,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: sizeStyles.fontSize,
        fontWeight: typography.fontWeight.medium,
        flexShrink: 0,
      }}
    >
      {src ? (
        <img
          src={src}
          alt={name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ) : (
        initials
      )}
    </div>
  );
};

// Example 6: Progress bar component
export const ProgressBar: React.FC<{
  value: number;
  max?: number;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  showLabel?: boolean;
}> = ({ value, max = 100, variant = 'primary', showLabel = false }) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  
  const variantColors = {
    primary: colors.primary[400],
    secondary: colors.accent[500],
    success: colors.semantic.success.main,
    warning: colors.semantic.warning.main,
    error: colors.semantic.error.main,
  };
  
  return (
    <div>
      <div
        style={{
          width: '100%',
          height: '8px',
          backgroundColor: colors.gray[200],
          borderRadius: effects.borderRadius.full,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: `${percentage}%`,
            height: '100%',
            backgroundColor: variantColors[variant],
            transition: 'width 300ms ease',
          }}
        />
      </div>
      {showLabel && (
        <div
          style={{
            marginTop: spacing[1],
            fontSize: typography.fontSize.sm.size,
            color: colors.text.secondary,
            textAlign: 'right',
          }}
        >
          {percentage.toFixed(0)}%
        </div>
      )}
    </div>
  );
};

// Example 7: Skeleton loader
export const Skeleton: React.FC<{
  width?: string | number;
  height?: string | number;
  variant?: 'text' | 'rectangular' | 'circular';
}> = ({ width = '100%', height = '20px', variant = 'text' }) => {
  const borderRadius = {
    text: effects.borderRadius.md,
    rectangular: effects.borderRadius.lg,
    circular: effects.borderRadius.full,
  };
  
  return (
    <div
      style={{
        width,
        height,
        backgroundColor: colors.gray[200],
        borderRadius: borderRadius[variant],
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '-100%',
          width: '100%',
          height: '100%',
          background: `linear-gradient(90deg, transparent, ${colors.gray[100]}, transparent)`,
          animation: 'shimmer 2s infinite',
        }}
      />
      <style jsx>{`
        @keyframes shimmer {
          100% {
            left: 100%;
          }
        }
      `}</style>
    </div>
  );
};

// Example showcase component
export const UIExamplesShowcase: React.FC = () => {
  const [alertVisible, setAlertVisible] = React.useState(true);
  const [progress, setProgress] = React.useState(75);
  
  return (
    <div style={{ padding: spacing[8], backgroundColor: colors.background.secondary }}>
      <h2 style={{ 
        fontSize: typography.heading.h2.fontSize, 
        fontWeight: typography.heading.h2.fontWeight,
        marginBottom: spacing[6],
        color: colors.text.primary,
      }}>
        UI Component Examples
      </h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[8] }}>
        {/* Cards */}
        <section>
          <h3 style={{ 
            fontSize: typography.heading.h3.fontSize,
            marginBottom: spacing[4],
            color: colors.text.primary,
          }}>
            Cards
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: spacing[4] }}>
            <Card padding="sm">
              <h4 style={{ marginBottom: spacing[2] }}>Small Padding Card</h4>
              <p style={{ color: colors.text.secondary, margin: 0 }}>This card has small padding.</p>
            </Card>
            <Card padding="md" hoverable>
              <h4 style={{ marginBottom: spacing[2] }}>Hoverable Card</h4>
              <p style={{ color: colors.text.secondary, margin: 0 }}>Hover over this card to see the effect.</p>
            </Card>
            <Card padding="lg" onClick={() => alert('Card clicked!')}>
              <h4 style={{ marginBottom: spacing[2] }}>Clickable Card</h4>
              <p style={{ color: colors.text.secondary, margin: 0 }}>Click this card to trigger an action.</p>
            </Card>
          </div>
        </section>
        
        {/* Badges */}
        <section>
          <h3 style={{ 
            fontSize: typography.heading.h3.fontSize,
            marginBottom: spacing[4],
            color: colors.text.primary,
          }}>
            Badges
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: spacing[2] }}>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
            <Badge variant="info">Info</Badge>
          </div>
        </section>
        
        {/* Alerts */}
        <section>
          <h3 style={{ 
            fontSize: typography.heading.h3.fontSize,
            marginBottom: spacing[4],
            color: colors.text.primary,
          }}>
            Alerts
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[3] }}>
            <Alert variant="success" title="Success!">
              Your changes have been saved successfully.
            </Alert>
            <Alert variant="warning" title="Warning">
              Please review your input before proceeding.
            </Alert>
            <Alert variant="error" title="Error">
              An error occurred while processing your request.
            </Alert>
            {alertVisible && (
              <Alert variant="info" title="Information" onClose={() => setAlertVisible(false)}>
                This alert can be dismissed by clicking the close button.
              </Alert>
            )}
          </div>
        </section>
        
        {/* Avatars */}
        <section>
          <h3 style={{ 
            fontSize: typography.heading.h3.fontSize,
            marginBottom: spacing[4],
            color: colors.text.primary,
          }}>
            Avatars
          </h3>
          <div style={{ display: 'flex', gap: spacing[3], alignItems: 'center' }}>
            <Avatar name="John Doe" size="sm" />
            <Avatar name="Jane Smith" size="md" />
            <Avatar name="Robert Johnson" size="lg" />
            <Avatar name="AI" src="https://via.placeholder.com/48" size="lg" />
          </div>
        </section>
        
        {/* Progress Bars */}
        <section>
          <h3 style={{ 
            fontSize: typography.heading.h3.fontSize,
            marginBottom: spacing[4],
            color: colors.text.primary,
          }}>
            Progress Bars
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[3] }}>
            <ProgressBar value={25} variant="primary" showLabel />
            <ProgressBar value={50} variant="secondary" showLabel />
            <ProgressBar value={progress} variant="success" showLabel />
            <ProgressBar value={90} variant="warning" showLabel />
          </div>
        </section>
        
        {/* Skeleton Loaders */}
        <section>
          <h3 style={{ 
            fontSize: typography.heading.h3.fontSize,
            marginBottom: spacing[4],
            color: colors.text.primary,
          }}>
            Skeleton Loaders
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[3] }}>
            <Skeleton variant="text" height="16px" />
            <Skeleton variant="text" height="16px" width="80%" />
            <Skeleton variant="rectangular" height="100px" />
            <div style={{ display: 'flex', gap: spacing[3] }}>
              <Skeleton variant="circular" width="48px" height="48px" />
              <div style={{ flex: 1 }}>
                <Skeleton variant="text" height="20px" />
                <div style={{ marginTop: spacing[2] }}>
                  <Skeleton variant="text" height="16px" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};