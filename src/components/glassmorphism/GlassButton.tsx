'use client';

import { cn } from '@/lib/utils';
import { ReactNode, ButtonHTMLAttributes } from 'react';

interface GlassButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

export function GlassButton({
  children,
  className,
  variant = 'primary',
  size = 'md',
  ...props
}: GlassButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={cn(
        'relative overflow-hidden rounded-xl font-semibold transition-all duration-300',
        sizeClasses[size],
        variant === 'primary'
          ? 'glass-button-primary'
          : 'glass-button-secondary',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
