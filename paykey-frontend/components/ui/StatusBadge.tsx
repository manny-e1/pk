import React from 'react';

type StatusType = 'active' | 'suspended' | 'revoked' | string;

export function StatusBadge({ status, className = '' }: { status: StatusType, className?: string }) {
  const normalizedStatus = (status || '').toString().toLowerCase();
  const styles: Record<string, string> = {
    active: 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/20',
    suspended: 'bg-amber-500/10 text-amber-600 border border-amber-500/20',
    revoked: 'bg-red-500/10 text-red-600 border border-red-500/20'
  };

  // Fallback untuk status lain (misal: unknown)
  const defaultStyle = 'bg-gray-500/10 text-gray-600 border border-gray-500/20';

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[12px] text-[11px] font-medium capitalize tracking-wide ${styles[normalizedStatus] || defaultStyle} ${className}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${
         normalizedStatus === 'active' ? 'bg-emerald-500' :
         normalizedStatus === 'suspended' ? 'bg-amber-500' :
         normalizedStatus === 'revoked' ? 'bg-red-500' : 'bg-gray-400'
      }`}></span>
      
      {status}
    </span>
  );
}