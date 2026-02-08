import React from 'react';

// Card Container
export function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-lg)] overflow-hidden ${className}`}>
      {children}
    </div>
  );
}

// Card Header dengan Icon Opsional
interface CardHeaderProps {
  title: string;
  icon?: React.ReactNode;
  iconColor?: string; // class name, e.g., 'text-blue-500' or 'text-[var(--accent)]'
  iconBg?: string;    // class name, e.g., 'bg-blue-500/10'
  actions?: React.ReactNode;
  className?: string;
}

export function CardHeader({ title, icon, iconColor = 'text-[var(--text-primary)]', iconBg = 'bg-[var(--bg-tertiary)]', actions, className = '' }: CardHeaderProps) {
  return (
    <div className={`p-3.5 border-b border-[var(--border-primary)] flex items-center justify-between ${className}`}>
      <div className="flex items-center gap-2.5">
        {icon && (
          <div className={`w-7 h-7 rounded-md flex items-center justify-center shrink-0 ${iconBg} ${iconColor}`}>
            {icon}
          </div>
        )}
        <div className="text-[13px] font-semibold text-[var(--text-primary)]">{title}</div>
      </div>
      {actions && <div>{actions}</div>}
    </div>
  );
}

// Card Body
export function CardBody({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`p-3.5 ${className}`}>{children}</div>;
}