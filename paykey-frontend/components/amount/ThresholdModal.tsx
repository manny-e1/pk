'use client';
import { useState, useEffect } from 'react';
import { Threshold } from './ThresholdTable';
import { Toggle } from '@/components/ui/Toggle';

type ThresholdLabel = Threshold['label'];

interface ThresholdModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: Partial<Threshold>) => void;
  initialData?: Threshold | null;
}

export function ThresholdModal({ isOpen, onClose, onSave, initialData }: ThresholdModalProps) {
  const [formData, setFormData] = useState<Partial<Threshold>>({
    min: 0,
    max: null,
    weight: 25,
    label: 'low',
    stepUp: false,
    methods: []
  });

  useEffect(() => {
    if (initialData) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFormData(initialData);
    } else {
      setFormData({ min: 0, max: null, weight: 25, label: 'low', stepUp: false, methods: [] });
    }
  }, [initialData, isOpen]);

  const toggleMethod = (method: string) => {
    const currentMethods = formData.methods || [];
    if (currentMethods.includes(method)) {
      setFormData({ ...formData, methods: currentMethods.filter(m => m !== method) });
    } else {
      setFormData({ ...formData, methods: [...currentMethods, method] });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[1000] opacity-100 transition-opacity">
      <div className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[12px] w-full max-w-[500px] shadow-2xl transform scale-100 transition-transform">
        
        <div className="p-5 border-b border-[var(--border-primary)] flex items-center justify-between">
          <h3 className="text-[15px] font-semibold text-[var(--text-primary)]">
            {initialData ? 'Edit Threshold' : 'Add Threshold'}
          </h3>
          <button onClick={onClose} className="w-7 h-7 flex items-center justify-center rounded-[6px] bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] transition-colors">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        <div className="p-5">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-medium text-[var(--text-secondary)]">Minimum Amount (MYR)</label>
              <input type="number" className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[6px] px-3 py-2.5 text-[13px] text-[var(--text-primary)] outline-none focus:border-[var(--accent)]" value={formData.min} onChange={e => setFormData({...formData, min: parseFloat(e.target.value)})} />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-medium text-[var(--text-secondary)]">Maximum Amount (MYR)</label>
              <input type="number" className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[6px] px-3 py-2.5 text-[13px] text-[var(--text-primary)] outline-none focus:border-[var(--accent)]" value={formData.max || ''} placeholder="Unlimited" onChange={e => setFormData({...formData, max: e.target.value ? parseFloat(e.target.value) : null})} />
            </div>
          </div>

          <div className="mb-4">
            <label className="text-[12px] font-medium text-[var(--text-secondary)] block mb-2">Risk Weight (0-100)</label>
            <div className="flex items-center gap-3">
              <input type="range" min="0" max="100" className="flex-1 h-1.5 bg-[var(--bg-tertiary)] rounded-full appearance-none cursor-pointer accent-[var(--accent)]" value={formData.weight} onChange={e => setFormData({...formData, weight: parseInt(e.target.value)})} />
              <input type="text" className="w-[50px] bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[4px] px-2 py-1.5 text-center text-[12px] font-mono text-[var(--text-primary)] outline-none" value={formData.weight} readOnly />
            </div>
          </div>

          <div className="mb-4">
            <label className="text-[12px] font-medium text-[var(--text-secondary)] block mb-1.5">Risk Label</label>
            <select 
              className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[6px] px-3 py-2.5 text-[13px] text-[var(--text-primary)] outline-none focus:border-[var(--accent)]" 
              value={formData.label} 
              onChange={e => setFormData({...formData, label: e.target.value as ThresholdLabel})}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="critical">Critical</option>
            </select>
          </div>

          <div className="flex items-center justify-between py-3 border-t border-b border-[var(--border-primary)] mb-4">
            <div className="flex flex-col">
              <span className="text-[13px] font-medium text-[var(--text-primary)]">Require Step-Up Authentication</span>
              <span className="text-[11px] text-[var(--text-tertiary)]">Require additional verification for this range</span>
            </div>
            <Toggle active={formData.stepUp || false} onChange={(val) => setFormData({...formData, stepUp: val})} />
          </div>

          {formData.stepUp && (
            <div className="animate-in fade-in slide-in-from-top-1">
              <label className="text-[12px] font-medium text-[var(--text-secondary)] block mb-2">Allowed Step-Up Methods</label>
              <div className="flex flex-wrap gap-2">
                {[
                  { k: 'hardware_totp', l: 'Hardware TOTP' },
                  { k: 'push_otp', l: 'Push OTP' },
                  { k: 'sms_otp', l: 'SMS OTP' },
                  { k: 'email_otp', l: 'Email OTP' },
                  { k: 'callback', l: 'Callback' }
                ].map((m) => (
                  <div 
                    key={m.k} 
                    onClick={() => toggleMethod(m.k)}
                    className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-[6px] border text-[11px] cursor-pointer transition-all ${
                      formData.methods?.includes(m.k) 
                        ? 'bg-[var(--accent-muted)] border-[var(--accent)] text-[var(--accent)]' 
                        : 'bg-[var(--bg-secondary)] border-[var(--border-primary)] text-[var(--text-secondary)] hover:border-[var(--text-tertiary)]'
                    }`}
                  >
                    {formData.methods?.includes(m.k) && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-3 h-3"><polyline points="20 6 9 17 4 12"/></svg>}
                    {m.l}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="p-5 border-t border-[var(--border-primary)] flex justify-end gap-2.5">
          <button onClick={onClose} className="px-4 py-2 rounded-[6px] bg-[var(--bg-tertiary)] border border-[var(--border-primary)] text-[var(--text-primary)] text-[12px] font-medium hover:bg-[var(--bg-hover)] transition-colors">Cancel</button>
          <button onClick={() => onSave(formData)} className="px-4 py-2 rounded-[6px] bg-[var(--accent)] text-white text-[12px] font-medium hover:bg-[var(--accent-hover)] transition-colors">Save Threshold</button>
        </div>
      </div>
    </div>
  );
}