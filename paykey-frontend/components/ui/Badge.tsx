import React from 'react';

type BadgeType = 'success' | 'warning' | 'error' | 'info' | 'neutral' | 'purple';

interface BadgeProps {
  children: React.ReactNode;
  type?: BadgeType;
  className?: string;
  dot?: boolean;
}

export const Badge = ({ children, type = 'neutral', className = '', dot = false }: BadgeProps) => {
  // Mapping eksplisit agar Tailwind JIT bisa mendeteksi class
  const styles: Record<BadgeType, string> = {
    success: 'bg-[var(--success-bg)] text-[var(--success)]',
    warning: 'bg-[var(--warning-bg)] text-[var(--warning)]',
    error: 'bg-[var(--error-bg)] text-[var(--error)]',
    info: 'bg-[var(--info-bg)] text-[var(--info)]',
    neutral: 'bg-[var(--bg-tertiary)] text-[var(--text-secondary)]',
    purple: 'bg-[var(--purple-bg)] text-[var(--purple)]'
  };

  const dotColors: Record<BadgeType, string> = {
    success: 'bg-[var(--success)]',
    warning: 'bg-[var(--warning)]',
    error: 'bg-[var(--error)]',
    info: 'bg-[var(--info)]',
    neutral: 'bg-[var(--text-secondary)]',
    purple: 'bg-[var(--purple)]'
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[var(--radius-sm)] text-[11px] font-medium capitalize ${styles[type]} ${className}`}>
      {dot && <span className={`w-1.5 h-1.5 rounded-full ${dotColors[type]}`}></span>}
      {children}
    </span>
  );
};