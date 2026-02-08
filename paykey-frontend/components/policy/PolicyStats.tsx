'use client';
import React from 'react';

export function PolicyStats() {
  return (
    <div className="grid grid-cols-3 gap-5 mb-6 shrink-0">
      
      {/* Total Policies */}
      <div className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-lg)] p-5 relative overflow-hidden group hover:border-[var(--border-secondary)] transition-colors">
        <div className="flex items-start justify-between mb-3">
          <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--bg-tertiary)] border border-[var(--border-primary)] flex items-center justify-center text-[var(--text-primary)]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
          </div>
          <span className="flex items-center gap-1 text-[11px] font-medium bg-[var(--success-muted)] text-[var(--success)] px-2 py-0.5 rounded-[10px]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg> +2
          </span>
        </div>
        <div>
          <div className="text-[26px] font-semibold text-[var(--text-primary)] mb-0.5">24</div>
          <div className="text-[12px] text-[var(--text-tertiary)]">Total Policies</div>
        </div>
      </div>

      {/* Active Rules */}
      <div className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-lg)] p-5 relative overflow-hidden group hover:border-[var(--border-secondary)] transition-colors">
        <div className="flex items-start justify-between mb-3">
          <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--bg-tertiary)] border border-[var(--border-primary)] flex items-center justify-center text-[var(--text-primary)]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
          </div>
          <span className="flex items-center gap-1 text-[11px] font-medium bg-[var(--bg-tertiary)] text-[var(--text-secondary)] px-2 py-0.5 rounded-[10px]">98% Coverage</span>
        </div>
        <div>
          <div className="text-[26px] font-semibold text-[var(--text-primary)] mb-0.5">18</div>
          <div className="text-[12px] text-[var(--text-tertiary)]">Active Enforcement</div>
        </div>
      </div>

      {/* Custom Scripts */}
      <div className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-lg)] p-5 relative overflow-hidden group hover:border-[var(--border-secondary)] transition-colors">
        <div className="flex items-start justify-between mb-3">
          <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--bg-tertiary)] border border-[var(--border-primary)] flex items-center justify-center text-[var(--text-primary)]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
          </div>
          <span className="flex items-center gap-1 text-[11px] font-medium bg-[var(--purple-muted)] text-[var(--purple)] px-2 py-0.5 rounded-[10px]">Advanced</span>
        </div>
        <div>
          <div className="text-[26px] font-semibold text-[var(--text-primary)] mb-0.5">6</div>
          <div className="text-[12px] text-[var(--text-tertiary)]">Custom Logic Scripts</div>
        </div>
      </div>

    </div>
  );
}