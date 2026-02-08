'use client';
import { useState } from 'react';
import { Toggle } from '@/components/ui/Toggle';

interface PolicyEditorProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PolicyEditor({ isOpen, onClose }: PolicyEditorProps) {
  const [isActive, setIsActive] = useState(true);
  const [requireStepUp, setRequireStepUp] = useState(true);
  const [txnSigning, setTxnSigning] = useState(true);
  const [knownDevice, setKnownDevice] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 transition-opacity animate-[fadeIn_0.2s]" onClick={onClose}></div>
      
      {/* Panel */}
      <div className="relative w-[480px] bg-[var(--bg-secondary)] border-l border-[var(--border-primary)] h-full shadow-2xl flex flex-col transform transition-transform duration-300 translate-x-0 animate-[slideInRight_0.3s]">
        
        {/* Header */}
        <div className="p-5 border-b border-[var(--border-primary)] flex items-center justify-between">
          <div>
            <div className="text-[15px] font-semibold text-[var(--text-primary)]">Configure Policy</div>
            <div className="text-[12px] text-[var(--text-tertiary)] mt-0.5">Define access rules and conditions</div>
          </div>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-[6px] bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] transition-colors">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-5 custom-scrollbar">
          
          {/* Main Info */}
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-[12px] font-medium text-[var(--text-secondary)] mb-1.5">Policy Name</label>
              <input type="text" className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[6px] px-3 py-2 text-[13px] text-[var(--text-primary)] outline-none focus:border-[var(--accent)] transition-colors" defaultValue="Admin High Security" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[12px] font-medium text-[var(--text-secondary)] mb-1.5">Policy Type</label>
                <select className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[6px] px-3 py-2 text-[13px] text-[var(--text-primary)] outline-none focus:border-[var(--accent)] transition-colors">
                  <option>Role Based (RBAC)</option>
                  <option>Contextual</option>
                  <option>MFA Enforcement</option>
                </select>
              </div>
              <div>
                <label className="block text-[12px] font-medium text-[var(--text-secondary)] mb-1.5">Status</label>
                <div className="flex items-center justify-between bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[6px] px-3 py-1.5">
                  <span className={`text-[12px] ${isActive ? 'text-[var(--success)]' : 'text-[var(--text-secondary)]'}`}>{isActive ? 'Active' : 'Inactive'}</span>
                  <Toggle active={isActive} onChange={setIsActive} />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-[var(--border-primary)] mb-6"></div>

          {/* Rules Builder Visual */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <div className="text-[13px] font-semibold text-[var(--text-primary)]">Rules Logic</div>
              <button className="text-[11px] text-[var(--accent)] hover:underline">+ Add Condition</button>
            </div>
            
            <div className="bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[8px] p-4 space-y-3 relative">
              <div className="absolute left-[26px] top-8 bottom-8 w-px bg-[var(--border-primary)] border-l border-dashed border-[var(--text-tertiary)] opacity-30"></div>
              
              {/* Condition 1 */}
              <div className="flex gap-3 relative z-10">
                <div className="w-6 h-6 rounded-full bg-[var(--accent-muted)] border border-[var(--accent)] flex items-center justify-center text-[10px] text-[var(--accent)] font-bold shrink-0">1</div>
                <div className="flex-1 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[6px] p-2.5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] font-medium text-[var(--text-secondary)] bg-[var(--bg-tertiary)] px-1.5 py-0.5 rounded border border-[var(--border-primary)]">User Group</span>
                    <span className="text-[11px] text-[var(--text-tertiary)]">is equal to</span>
                    <span className="text-[11px] font-medium text-[var(--text-primary)]">Administrators</span>
                  </div>
                </div>
              </div>

              {/* Operator */}
              <div className="flex gap-3 relative z-10">
                <div className="w-6 flex justify-center"><div className="px-1.5 py-0.5 bg-[var(--bg-hover)] rounded text-[9px] font-bold text-[var(--text-secondary)]">AND</div></div>
              </div>

              {/* Condition 2 */}
              <div className="flex gap-3 relative z-10">
                <div className="w-6 h-6 rounded-full bg-[var(--accent-muted)] border border-[var(--accent)] flex items-center justify-center text-[10px] text-[var(--accent)] font-bold shrink-0">2</div>
                <div className="flex-1 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[6px] p-2.5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] font-medium text-[var(--text-secondary)] bg-[var(--bg-tertiary)] px-1.5 py-0.5 rounded border border-[var(--border-primary)]">Time of Day</span>
                    <span className="text-[11px] text-[var(--text-tertiary)]">is not between</span>
                    <span className="text-[11px] font-medium text-[var(--text-primary)]">09:00 - 18:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Settings Section */}
          <div className="space-y-6">
             {/* FIDO2 */}
             <div>
                <div className="flex items-center gap-2 text-[13px] font-semibold text-[var(--text-primary)] mb-4 pb-2 border-b border-[var(--border-primary)]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[var(--text-tertiary)]"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                    Authentication Settings
                </div>
                <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 border-b border-[var(--border-primary)]">
                        <div>
                            <div className="text-[12px] font-medium text-[var(--text-primary)]">Step-Up Required</div>
                            <div className="text-[11px] text-[var(--text-tertiary)]">Require additional verification factor</div>
                        </div>
                        <Toggle active={requireStepUp} onChange={setRequireStepUp} />
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-[var(--border-primary)]">
                        <div>
                            <div className="text-[12px] font-medium text-[var(--text-primary)]">Transaction Signing</div>
                            <div className="text-[11px] text-[var(--text-tertiary)]">Sign transaction details</div>
                        </div>
                        <Toggle active={txnSigning} onChange={setTxnSigning} />
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-[var(--border-primary)]">
                        <div>
                            <div className="text-[12px] font-medium text-[var(--text-primary)]">Known Device Only</div>
                            <div className="text-[11px] text-[var(--text-tertiary)]">Block new/unknown devices</div>
                        </div>
                        <Toggle active={knownDevice} onChange={setKnownDevice} />
                    </div>
                </div>
             </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-5 border-t border-[var(--border-primary)] flex justify-end gap-3 bg-[var(--bg-secondary)]">
          <button onClick={onClose} className="px-4 py-2 rounded-[6px] bg-[var(--bg-tertiary)] border border-[var(--border-primary)] text-[var(--text-primary)] text-[12px] font-medium hover:bg-[var(--bg-hover)] transition-colors">Cancel</button>
          <button onClick={onClose} className="px-4 py-2 rounded-[6px] bg-[var(--accent)] text-white text-[12px] font-medium hover:bg-[var(--accent-hover)] transition-colors shadow-lg shadow-blue-500/20">Save Policy</button>
        </div>
      </div>
    </div>
  );
}