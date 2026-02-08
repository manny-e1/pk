'use client';
import React from 'react';
import { Range } from './RiskVisualizer';

interface RiskTableProps {
  ranges: (Range & { stepUp: boolean })[];
}

export function RiskTable({ ranges }: RiskTableProps) {
  const getVisualizerColor = (label: string) => {
    switch(label) {
        case 'low': return '#22c55e';
        case 'medium': return '#f59e0b';
        case 'high': return '#ef4444';
        case 'critical': return '#dc2626';
        default: return '#737373';
    }
  };

  const getLabelStyle = (label: string) => {
    switch(label) {
        case 'low': return 'bg-[var(--success-muted)] text-[var(--success)] border-[rgba(34,197,94,0.3)]';
        case 'medium': return 'bg-[var(--warning-muted)] text-[var(--warning)] border-[rgba(245,158,11,0.3)]';
        case 'high': return 'bg-[var(--error-muted)] text-[var(--error)] border-[rgba(239,68,68,0.3)]';
        case 'critical': return 'bg-[var(--critical-muted)] text-[var(--critical)] border-[rgba(220,38,38,0.3)]';
        default: return '';
    }
  };

  const fmt = (n: number | null) => n === null ? '∞' : `$${n.toLocaleString()}`;

  return (
    <div className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg overflow-hidden">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[var(--bg-tertiary)] border-b border-[var(--border-primary)]">
            <th className="p-3 text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider pl-4">Range (USD)</th>
            <th className="p-3 text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider">Risk Weight</th>
            <th className="p-3 text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider">Label</th>
            <th className="p-3 text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider">Step-Up</th>
            <th className="p-3 text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider text-right pr-4">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[var(--border-primary)]">
          {ranges.map((range) => (
            <tr key={range.id} className="hover:bg-[var(--bg-tertiary)] transition-colors group">
              <td className="p-3 pl-4">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-8 rounded-full" style={{backgroundColor: getVisualizerColor(range.label)}}></div>
                  <div className="font-mono text-[13px] text-[var(--text-primary)]">
                    {fmt(range.min)} <span className="text-[var(--text-muted)] mx-1">→</span> {fmt(range.max)}
                  </div>
                </div>
              </td>
              <td className="p-3">
                <div className="flex items-center gap-3">
                  <span className="text-[13px] font-medium text-[var(--text-primary)] w-6 text-right">{range.weight}</span>
                  <div className="w-20 h-1.5 bg-[var(--bg-elevated)] rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{width: `${range.weight}%`, backgroundColor: getVisualizerColor(range.label)}}></div>
                  </div>
                </div>
              </td>
              <td className="p-3">
                <span className={`px-2 py-0.5 rounded border text-[10px] font-bold uppercase ${getLabelStyle(range.label)}`}>
                  {range.label}
                </span>
              </td>
              <td className="p-3">
                {range.stepUp ? (
                  <div className="flex items-center gap-1.5 text-[11px] text-[var(--accent)] bg-[var(--accent-muted)] px-2 py-1 rounded w-fit">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> Required
                  </div>
                ) : (
                  <span className="text-[11px] text-[var(--text-muted)] px-2">Optional</span>
                )}
              </td>
              <td className="p-3 text-right pr-4">
                <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-1.5 hover:bg-[var(--bg-elevated)] rounded text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                  </button>
                  <button className="p-1.5 hover:bg-[var(--error-muted)] rounded text-[var(--text-secondary)] hover:text-[var(--error)] transition-colors">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="p-3 border-t border-[var(--border-primary)] bg-[var(--bg-tertiary)] flex justify-center">
        <button className="flex items-center gap-1.5 text-[11px] font-medium text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Add Range
        </button>
      </div>
    </div>
  );
}