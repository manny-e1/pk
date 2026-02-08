// components/ui/DeviceIcon.tsx
import React from 'react';

type DeviceType = 'mobile' | 'desktop' | 'hardware';

export function DeviceIcon({ type }: { type: DeviceType | string }) {
  const styles = {
    mobile: 'bg-[var(--info-bg)] text-[var(--info)]',
    desktop: 'bg-[var(--purple-bg)] text-[var(--purple)]',
    hardware: 'bg-[var(--warning-bg)] text-[var(--warning)]'
  };

  const getIcon = () => {
    switch (type) {
      case 'mobile':
        return <><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></>;
      case 'desktop':
        return <><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></>;
      case 'hardware':
        return <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>;
      default:
        return null;
    }
  };

  // Default to mobile if type matches none (safety)
  const styleClass = styles[type as DeviceType] || styles.mobile;

  return (
    <div className={`w-8 h-8 rounded-[var(--radius-md)] flex items-center justify-center shrink-0 ${styleClass}`}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
        {getIcon()}
      </svg>
    </div>
  );
}