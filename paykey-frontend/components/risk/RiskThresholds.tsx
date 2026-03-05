'use client';
import { useState } from 'react';

interface RiskThresholdsProps {
  lowThreshold: number;
  highThreshold: number;
  onLowChange: (value: number) => void;
  onHighChange: (value: number) => void;
}

export function RiskThresholds({ lowThreshold, highThreshold, onLowChange, onHighChange }: RiskThresholdsProps) {

  const Icons = {
    check: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>,
    clock: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    shield: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    zap: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
    alert: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/></svg>,
    passkey: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
    fingerprint: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
    stop: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>,
    eye: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    bell: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
    info: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
  };

  const handleLowSlider = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    if (val < highThreshold - 5) {
        onLowChange(val);
    }
  };

  const handleHighSlider = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    if (val > lowThreshold + 5) {
        onHighChange(val);
    }
  };

  return (
    <div className="bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-[var(--radius-lg)] overflow-hidden mb-6">
      
      <div className="p-5 border-b border-[var(--border-secondary)] flex items-center justify-between">
        <div>
          <div className="text-[14px] font-semibold flex items-center gap-2 text-[var(--text-primary)]">
            <span className="text-[var(--text-tertiary)] w-4 h-4">{Icons.shield}</span>
            Risk Thresholds
          </div>
          <div className="text-[12px] text-[var(--text-tertiary)] mt-0.5">Configure score ranges for each risk level</div>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex gap-3 p-4 bg-[var(--info-bg)] border border-[var(--info-border)] rounded-[var(--radius-md)] mb-4">
          <div className="w-5 h-5 text-[var(--info)] shrink-0">{Icons.info}</div>
          <div>
            <div className="text-[13px] font-semibold text-[var(--info)] mb-0.5">How Risk Scoring Works</div>
            <div className="text-[12px] text-[var(--text-secondary)]">Each transaction is assigned a score from 0-100 based on configured rules. The score determines which authentication flow is triggered.</div>
          </div>
        </div>

        <div className="relative h-2 bg-gradient-to-r from-[var(--success)] via-[var(--warning)] to-[var(--error)] rounded-full mb-8 mt-5">

          <div className="absolute top-[-6px] w-1 h-5 bg-[var(--text-primary)] rounded-[2px] shadow-sm transition-all" style={{left: `${lowThreshold}%`}}></div>
          <div className="absolute top-5 text-[11px] text-[var(--text-tertiary)] -translate-x-1/2 font-mono transition-all" style={{left: `${lowThreshold}%`}}>{lowThreshold}</div>
          
          <div className="absolute top-[-6px] w-1 h-5 bg-[var(--text-primary)] rounded-[2px] shadow-sm transition-all" style={{left: `${highThreshold}%`}}></div>
          <div className="absolute top-5 text-[11px] text-[var(--text-tertiary)] -translate-x-1/2 font-mono transition-all" style={{left: `${highThreshold}%`}}>{highThreshold}</div>
        </div>

        <div className="flex flex-col gap-4 mb-6">
          <div className="bg-[var(--success-bg)] border border-[var(--success-border)] rounded-[var(--radius-lg)] p-5 relative overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[12px] font-semibold bg-[var(--success)] text-black">
                <span className="w-3.5 h-3.5">{Icons.zap}</span> Low Risk
              </span>
              <span className="text-[12px] text-[var(--text-secondary)] font-mono">Score: 0 – {lowThreshold}</span>
            </div>
            <div className="text-[15px] font-semibold text-[var(--text-primary)] mb-1">No Extra Friction</div>
            <div className="text-[13px] text-[var(--text-secondary)] mb-4">Standard payment flow with minimal verification. User experience is optimized for speed.</div>

            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[var(--radius-md)] text-[12px] font-medium bg-black/20 text-[var(--text-primary)]">
                <span className="w-3.5 h-3.5">{Icons.check}</span> Auto-approve
              </span>
            </div>
          </div>

          <div className="bg-[var(--warning-bg)] border border-[var(--warning-border)] rounded-[var(--radius-lg)] p-5 relative overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[12px] font-semibold bg-[var(--warning)] text-black">
                <span className="w-3.5 h-3.5">{Icons.alert}</span> Medium Risk
              </span>
              <span className="text-[12px] text-[var(--text-secondary)] font-mono">Score: {lowThreshold} – {highThreshold}</span>
            </div>
            <div className="text-[15px] font-semibold text-[var(--text-primary)] mb-1">Require FIDO2 Approval</div>
            <div className="text-[13px] text-[var(--text-secondary)] mb-4">User must authenticate with registered passkey before payment can proceed.</div>

            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[var(--radius-md)] text-[12px] font-medium bg-black/20 text-[var(--text-primary)]">
                <span className="w-3.5 h-3.5">{Icons.passkey}</span> FIDO2 Required
              </span>
            </div>
          </div>

          <div className="bg-[var(--error-bg)] border border-[var(--error-border)] rounded-[var(--radius-lg)] p-5 relative overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[12px] font-semibold bg-[var(--error)] text-white">
                <span className="w-3.5 h-3.5">{Icons.stop}</span> High Risk
              </span>
              <span className="text-[12px] text-[var(--text-secondary)] font-mono">Score: {highThreshold} – 100</span>
            </div>
            <div className="text-[15px] font-semibold text-[var(--text-primary)] mb-1">FIDO2 + Cooldown / Additional Checks</div>
            <div className="text-[13px] text-[var(--text-secondary)] mb-4">Enhanced verification with mandatory waiting period and additional security measures.</div>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[var(--radius-md)] text-[12px] font-medium bg-black/20 text-[var(--text-primary)]">
                <span className="w-3.5 h-3.5">{Icons.passkey}</span> FIDO2 Required
              </span>
               <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[var(--radius-md)] text-[12px] font-medium bg-black/20 text-[var(--text-primary)]">
                <span className="w-3.5 h-3.5">{Icons.clock}</span> Cooldown
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5 mt-5">
          <div className="w-full">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[12px] text-[var(--text-tertiary)]">Low → Medium Threshold</span>
              <span className="text-[13px] font-semibold text-[var(--text-primary)] font-mono">{lowThreshold}</span>
            </div>
            <input 
              type="range" className="w-full h-1.5 bg-[var(--bg-tertiary)] rounded-full appearance-none cursor-pointer accent-[var(--accent)]" 
              min="10" max="50" value={lowThreshold} onChange={handleLowSlider}
            />
          </div>
          <div className="w-full">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[12px] text-[var(--text-tertiary)]">Medium → High Threshold</span>
              <span className="text-[13px] font-semibold text-[var(--text-primary)] font-mono">{highThreshold}</span>
            </div>
            <input 
              type="range" className="w-full h-1.5 bg-[var(--bg-tertiary)] rounded-full appearance-none cursor-pointer accent-[var(--accent)]" 
              min="50" max="95" value={highThreshold} onChange={handleHighSlider}
            />
          </div>
        </div>

      </div>
    </div>
  );
}