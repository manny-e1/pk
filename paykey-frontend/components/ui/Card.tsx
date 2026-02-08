// components/ui/Card.tsx
import React from 'react';

export function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-[var(--radius-lg)] overflow-hidden ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`p-5 border-b border-[var(--border-secondary)] flex items-center justify-between ${className}`}>
      {children}
    </div>
  );
}

export function CardTitle({ children, icon }: { children: React.ReactNode; icon?: React.ReactNode }) {
  return (
    <div>
      <div className="text-[14px] font-semibold flex items-center gap-2 text-[var(--text-primary)]">
        {icon && <span className="text-[var(--text-tertiary)]">{icon}</span>}
        {children}
      </div>
    </div>
  );
}

export function CardSubtitle({ children }: { children: React.ReactNode }) {
  return <div className="text-xs text-[var(--text-tertiary)] mt-0.5">{children}</div>;
}

export function CardBody({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`p-5 ${className}`}>{children}</div>;
}