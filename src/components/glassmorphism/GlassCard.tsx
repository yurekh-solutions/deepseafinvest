'use client';

import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  elevated?: boolean;
  hover?: boolean;
  shimmer?: boolean;
}

export function GlassCard({
  children,
  className,
  elevated = false,
  hover = false,
  shimmer = false,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        'rounded-3xl backdrop-blur-xl border border-glass-border',
        elevated
          ? 'bg-glass-white-light shadow-glass-elevated'
          : 'bg-glass-white shadow-glass',
        hover && 'glass-card-hover cursor-pointer',
        shimmer && 'glass-shimmer',
        className
      )}
    >
      {children}
    </div>
  );
}
