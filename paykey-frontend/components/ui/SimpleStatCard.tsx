// components/ui/SimpleStatCard.tsx
import React from 'react';

interface SimpleStatCardProps {
  label: string;
  value: string;
  icon: React.ReactNode;
  valueColor?: string; // e.g. text-[var(--success)]
}

export function SimpleStatCard({ label, value, icon, valueColor = 'text-[var(--text-primary)]' }: SimpleStatCardProps) {
  return (
    <div className="bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-[var(--radius-lg)] p-4">
      <div className="text-xs text-[var(--text-tertiary)] mb-1.5 flex items-center gap-1.5">
        <div className="text-[var(--text-secondary)]">
          {icon}
        </div>
        {label}
      </div>
      <div className={`text-2xl font-semibold ${valueColor}`}>
        {value}
      </div>
    </div>
  );
}