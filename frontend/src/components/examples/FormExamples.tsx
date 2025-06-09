/**
 * Form Component Examples
 * Demonstrates how to use the design system for form elements
 * 
 * Note: This example requires React to be installed:
 * npm install react react-dom @types/react @types/react-dom
 */

import React from 'react';
import { colors, spacing, typography, effects, components } from '../../styles/design-system';

// Example 1: Input component using design tokens
export const Input: React.FC<{
  type?: string;
  placeholder?: string;
  error?: boolean;
  size?: 'sm' | 'md' | 'lg';
}> = ({ type = 'text', error = false, size = 'md', ...props }) => {
  const sizeStyles = components.input.sizes[size];
  
  return (
    <input
      type={type}
      style={{
        backgroundColor: components.input.default.bg,
        color: components.input.default.text,
        border: `1px solid ${error ? components.input.error.border : components.input.default.border}`,
        padding: sizeStyles.padding,
        fontSize: sizeStyles.fontSize,
        height: sizeStyles.height,
        borderRadius: effects.borderRadius.md,
        width: '100%',
        transition: effects.transition.all,
        fontFamily: typography.fontFamily.sans,
        outline: 'none',
      }}
      onFocus={(e) => {
        if (!error) {
          e.currentTarget.style.borderColor = components.input.focus.border;
          e.currentTarget.style.boxShadow = `0 0 0 3px ${components.input.focus.ring}`;
        }
      }}
      onBlur={(e) => {
        if (!error) {
          e.currentTarget.style.borderColor = components.input.default.border;
          e.currentTarget.style.boxShadow = 'none';
        }
      }}
      {...props}
    />
  );
};

// Example 2: Label component
export const Label: React.FC<{
  required?: boolean;
  children: React.ReactNode;
  htmlFor?: string;
}> = ({ required = false, children, htmlFor }) => {
  return (
    <label
      htmlFor={htmlFor}
      style={{
        display: 'block',
        marginBottom: spacing[2],
        fontSize: typography.fontSize.sm.size,
        fontWeight: typography.fontWeight.medium,
        color: colors.text.primary,
      }}
    >
      {children}
      {required && (
        <span style={{ color: colors.semantic.error.main, marginLeft: spacing[1] }}>*</span>
      )}
    </label>
  );
};

// Example 3: Form field with label and error
export const FormField: React.FC<{
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
  htmlFor?: string;
}> = ({ label, error, required = false, children, htmlFor }) => {
  return (
    <div style={{ marginBottom: spacing[4] }}>
      <Label required={required} htmlFor={htmlFor}>
        {label}
      </Label>
      {children}
      {error && (
        <p
          style={{
            marginTop: spacing[1],
            fontSize: typography.fontSize.sm.size,
            color: colors.semantic.error.main,
          }}
        >
          {error}
        </p>
      )}
    </div>
  );
};

// Example 4: Select component
export const Select: React.FC<{
  options: { value: string; label: string }[];
  size?: 'sm' | 'md' | 'lg';
  error?: boolean;
}> = ({ options, size = 'md', error = false, ...props }) => {
  const sizeStyles = components.input.sizes[size];
  
  return (
    <select
      style={{
        backgroundColor: components.input.default.bg,
        color: components.input.default.text,
        border: `1px solid ${error ? components.input.error.border : components.input.default.border}`,
        padding: sizeStyles.padding,
        fontSize: sizeStyles.fontSize,
        height: sizeStyles.height,
        borderRadius: effects.borderRadius.md,
        width: '100%',
        transition: effects.transition.all,
        fontFamily: typography.fontFamily.sans,
        cursor: 'pointer',
        appearance: 'none',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
        backgroundPosition: 'right 0.5rem center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '1.5em 1.5em',
        paddingRight: spacing[10],
      }}
      {...props}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

// Example 5: Checkbox component
export const Checkbox: React.FC<{
  label: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ label, checked = false, onChange }) => {
  return (
    <label
      style={{
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        fontSize: typography.fontSize.base.size,
        color: colors.text.primary,
      }}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        style={{
          width: '20px',
          height: '20px',
          marginRight: spacing[2],
          cursor: 'pointer',
          accentColor: colors.primary[400],
        }}
      />
      {label}
    </label>
  );
};

// Example 6: Radio button group
export const RadioGroup: React.FC<{
  name: string;
  options: { value: string; label: string }[];
  value?: string;
  onChange?: (value: string) => void;
}> = ({ name, options, value, onChange }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[2] }}>
      {options.map((option) => (
        <label
          key={option.value}
          style={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            fontSize: typography.fontSize.base.size,
            color: colors.text.primary,
          }}
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={(e) => onChange?.(e.target.value)}
            style={{
              width: '20px',
              height: '20px',
              marginRight: spacing[2],
              cursor: 'pointer',
              accentColor: colors.primary[400],
            }}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

// Example 7: Textarea component
export const Textarea: React.FC<{
  rows?: number;
  error?: boolean;
  placeholder?: string;
}> = ({ rows = 4, error = false, ...props }) => {
  
  return (
    <textarea
      rows={rows}
      style={{
        backgroundColor: components.input.default.bg,
        color: components.input.default.text,
        border: `1px solid ${error ? components.input.error.border : components.input.default.border}`,
        padding: `${spacing[2.5]} ${spacing[3.5]}`,
        fontSize: typography.fontSize.base.size,
        borderRadius: effects.borderRadius.md,
        width: '100%',
        transition: effects.transition.all,
        fontFamily: typography.fontFamily.sans,
        outline: 'none',
        resize: 'vertical',
        minHeight: '100px',
      }}
      onFocus={(e) => {
        if (!error) {
          e.currentTarget.style.borderColor = components.input.focus.border;
          e.currentTarget.style.boxShadow = `0 0 0 3px ${components.input.focus.ring}`;
        }
      }}
      onBlur={(e) => {
        if (!error) {
          e.currentTarget.style.borderColor = components.input.default.border;
          e.currentTarget.style.boxShadow = 'none';
        }
      }}
      {...props}
    />
  );
};

// Example form showcase
export const FormExamplesShowcase: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    role: '',
    message: '',
    subscribe: false,
    contactMethod: 'email',
  });
  
  const [errors] = React.useState<Record<string, string>>({});
  
  return (
    <div style={{ padding: spacing[8], backgroundColor: colors.background.primary, maxWidth: '600px' }}>
      <h2 style={{ 
        fontSize: typography.heading.h2.fontSize, 
        fontWeight: typography.heading.h2.fontWeight,
        marginBottom: spacing[6],
        color: colors.text.primary,
      }}>
        Form Examples
      </h2>
      
      <form onSubmit={(e) => e.preventDefault()}>
        {/* Text Input */}
        <FormField label="Name" required htmlFor="name" error={errors.name}>
          <Input
            id="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            error={!!errors.name}
          />
        </FormField>
        
        {/* Email Input */}
        <FormField label="Email" required htmlFor="email" error={errors.email}>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            error={!!errors.email}
          />
        </FormField>
        
        {/* Select */}
        <FormField label="Role" htmlFor="role">
          <Select
            id="role"
            options={[
              { value: '', label: 'Select a role' },
              { value: 'attorney', label: 'Attorney' },
              { value: 'client', label: 'Client' },
              { value: 'other', label: 'Other' },
            ]}
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          />
        </FormField>
        
        {/* Radio Group */}
        <FormField label="Preferred Contact Method" htmlFor="contact">
          <RadioGroup
            name="contactMethod"
            options={[
              { value: 'email', label: 'Email' },
              { value: 'phone', label: 'Phone' },
              { value: 'text', label: 'Text Message' },
            ]}
            value={formData.contactMethod}
            onChange={(value) => setFormData({ ...formData, contactMethod: value })}
          />
        </FormField>
        
        {/* Textarea */}
        <FormField label="Message" htmlFor="message">
          <Textarea
            id="message"
            placeholder="Enter your message here..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </FormField>
        
        {/* Checkbox */}
        <div style={{ marginBottom: spacing[6] }}>
          <Checkbox
            label="Subscribe to newsletter"
            checked={formData.subscribe}
            onChange={(e) => setFormData({ ...formData, subscribe: e.target.checked })}
          />
        </div>
        
        {/* Submit Button */}
        <button
          type="submit"
          style={{
            backgroundColor: colors.primary[400],
            color: colors.white,
            border: 'none',
            padding: `${spacing[3]} ${spacing[6]}`,
            fontSize: typography.fontSize.base.size,
            fontWeight: typography.fontWeight.medium,
            borderRadius: effects.borderRadius.md,
            cursor: 'pointer',
            transition: effects.transition.all,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = colors.primary[500];
            e.currentTarget.style.boxShadow = effects.shadow.primary;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = colors.primary[400];
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};