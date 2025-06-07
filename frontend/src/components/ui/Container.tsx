import React from 'react';
import { cn } from '../../../lib/utils';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: boolean;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ 
    className, 
    size = 'lg', 
    padding = true,
    children, 
    ...props 
  }, ref) => {
    const sizes = {
      sm: 'max-w-2xl',    // 672px
      md: 'max-w-4xl',    // 896px
      lg: 'max-w-6xl',    // 1152px
      xl: 'max-w-7xl',    // 1280px
      full: 'max-w-full', // 100%
    };
    
    return (
      <div
        ref={ref}
        className={cn(
          'mx-auto w-full',
          sizes[size],
          padding && 'px-4 sm:px-6 lg:px-8',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';

export { Container }; 