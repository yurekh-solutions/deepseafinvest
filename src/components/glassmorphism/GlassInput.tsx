'use client';

import { cn } from '@/lib/utils';
import { InputHTMLAttributes, forwardRef } from 'react';

interface GlassInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const GlassInput = forwardRef<HTMLInputElement, GlassInputProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-white/80 mb-2">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            'w-full px-4 py-3 glass-input',
            error && 'border-accent-red/50',
            className
          )}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-accent-red-light">{error}</p>}
      </div>
    );
  }
);

GlassInput.displayName = 'GlassInput';
