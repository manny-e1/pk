// components/ui/StatsCard.tsx
import React from 'react';

interface StatsCardProps {
  label: string;
  value: string;
  change: string;
  trend: 'positive' | 'negative';
  icon: React.ReactNode;
}

export function StatsCard({ label, value, change, trend, icon }: StatsCardProps) {
  return (
    <div className="bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-[var(--radius-lg)] p-5">
      <div className="text-xs text-[var(--text-tertiary)] mb-1.5 flex items-center gap-1.5">
        <div className="text-[var(--text-primary)]">
          {icon}
        </div>
        {label}
      </div>
      <div className="text-2xl font-semibold text-[var(--text-primary)] tabular-nums">
        {value}
      </div>
      <div className={`text-xs mt-1 flex items-center gap-1 ${trend === 'positive' ? 'text-[var(--success)]' : 'text-[var(--error)]'}`}>
        {change}
      </div>
    </div>
  );
}