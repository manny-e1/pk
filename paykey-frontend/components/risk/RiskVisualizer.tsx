'use client';
import React from 'react';

export interface Range {
  id: number;
  min: number;
  max: number | null;
  weight: number;
  label: string;
}

interface RiskVisualizerProps {
  ranges: Range[];
}

export function RiskVisualizer({ ranges }: RiskVisualizerProps) {
  const getVisualizerColor = (label: string) => {
    switch(label) {
        case 'low': return '#22c55e';
        case 'medium': return '#f59e0b';
        case 'high': return '#ef4444';
        case 'critical': return '#dc2626';
        default: return '#737373';
    }
  };

  const fmt = (n: number | null) => n === null ? '∞' : `$${n.toLocaleString()}`;

  return (
    <div className="mb-8 p-6 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <div className="text-[13px] font-semibold text-[var(--text-primary)] flex items-center gap-2">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[var(--text-tertiary)]"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
          Threshold Visualizer
        </div>
        <div className="flex gap-4">
          {['low', 'medium', 'high', 'critical'].map(l => (
            <div key={l} className="flex items-center gap-1.5 text-[11px] text-[var(--text-tertiary)] uppercase font-semibold">
              <div className="w-2 h-2 rounded-full" style={{backgroundColor: getVisualizerColor(l)}}></div> {l}
            </div>
          ))}
        </div>
      </div>
      
      {/* Visualizer Track */}
      <div className="h-14 flex rounded-md overflow-hidden w-full relative">
        {ranges.map((range) => {
          // Logika lebar visual: max 25k dianggap 'penuh' untuk skala ini agar visual seimbang
          const rangeSize = range.max ? (range.max - range.min) : 20000; 
          const visualFlex = Math.max(rangeSize, 2000); // Minimum width agar text terlihat
          
          return (
            <div 
              key={range.id}
              className="relative flex flex-col justify-center items-center px-2 border-r border-[var(--bg-secondary)] transition-all hover:opacity-90 group cursor-pointer"
              style={{
                flex: visualFlex,
                backgroundColor: getVisualizerColor(range.label),
                opacity: 0.2 + (range.weight / 150)
              }}
            >
              <span className="text-[10px] font-bold text-white drop-shadow-md z-10 relative opacity-0 group-hover:opacity-100 transition-opacity">
                {range.weight}
              </span>
              <div className="absolute bottom-full mb-2 bg-[var(--bg-elevated)] text-[var(--text-primary)] text-[10px] px-2 py-1 rounded border border-[var(--border-secondary)] opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none transition-opacity z-20 shadow-lg">
                {fmt(range.min)} - {fmt(range.max)}
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Axis Labels */}
      <div className="flex justify-between mt-2 text-[10px] text-[var(--text-tertiary)] font-mono">
        <span>$0</span>
        <span className="pl-8">$5k</span>
        <span className="pl-4">$10k</span>
        <span className="pr-4">$25k</span>
        <span>∞</span>
      </div>
    </div>
  );
}