'use client';

import { useState, useEffect } from 'react';

// Tipe data disesuaikan dengan permintaan client
interface PolicyConfig {
  userVerification: string; // 'discouraged' | 'required'
  uvCache: number;
  requireStepUp: boolean;
  stepUpMethods: string[]; // Hanya ['email_otp']
  txnSigning: boolean;
  knownDevice: boolean;
  minDeviceAge: number;
  maxAttempts: number;
  lockoutDuration: number;
  lockoutAction: string; // 'soft_lock', 'suspend_device', 'suspend_account'
  totalTimeout: number;
  fido2Timeout: number;
  stepUpTimeout: number;
  baseDelay: number;
  progDelay: boolean;
  
  // Field Corporate only
  dualAuth?: boolean;
  minApprovers?: number;
  approvalTimeout?: number;
}

const defaultValues: PolicyConfig = {
  userVerification: 'discouraged',
  uvCache: 300,
  requireStepUp: false,
  stepUpMethods: [],
  txnSigning: false,
  knownDevice: false,
  minDeviceAge: 0,
  maxAttempts: 3,
  lockoutDuration: 300,
  lockoutAction: 'soft_lock',
  totalTimeout: 180,
  fido2Timeout: 120,
  stepUpTimeout: 60,
  baseDelay: 0,
  progDelay: false
};

export const EditPolicyModal = ({ isOpen, onClose, policyName, initialData, isCorporate, onSave }: any) => {
  const [formData, setFormData] = useState<PolicyConfig>({ ...defaultValues, ...initialData });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (isOpen) setFormData({ ...defaultValues, ...initialData });
  }, [isOpen, initialData]);

  if (!isOpen) return null;

  const handleChange = (field: keyof PolicyConfig, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[2000] p-4" onClick={onClose}>
      <div className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[12px] w-full max-w-[600px] flex flex-col max-h-[90vh]" onClick={e => e.stopPropagation()}>
        
        {/* Header */}
        <div className="p-5 border-b border-[var(--border-primary)] flex justify-between items-center">
          <h3 className="text-lg font-semibold capitalize text-[var(--text-primary)]">Edit {policyName.replace(/_/g, ' ')} Policy</h3>
          <button onClick={onClose} className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)]">✕</button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar space-y-6">
            
            {/* 1. General Auth Settings */}
            <section>
                <h4 className="text-xs font-bold text-[var(--text-tertiary)] uppercase mb-4">Authentication Requirements</h4>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-[12px] text-[var(--text-secondary)] mb-1.5">User Verification (UV)</label>
                        <select 
                            className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[6px] p-2 text-sm text-[var(--text-primary)]"
                            value={formData.userVerification}
                            onChange={e => handleChange('userVerification', e.target.value)}
                        >
                            <option value="discouraged">Discouraged (UP Only - Tap)</option>
                            <option value="required">Required (UV Mandatory - Bio/PIN)</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-[12px] text-[var(--text-secondary)] mb-1.5">UV Cache Window (Seconds)</label>
                        <input type="number" className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[6px] p-2 text-sm text-[var(--text-primary)]"
                            value={formData.uvCache} onChange={e => handleChange('uvCache', parseInt(e.target.value))} />
                    </div>
                </div>
                
                <div className="mt-4 space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" checked={formData.txnSigning} onChange={e => handleChange('txnSigning', e.target.checked)} className="rounded bg-[var(--bg-tertiary)] border-[var(--border-primary)]" />
                        <span className="text-sm text-[var(--text-primary)]">Enable Transaction Signing (Include details in challenge)</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" checked={formData.knownDevice} onChange={e => handleChange('knownDevice', e.target.checked)} className="rounded bg-[var(--bg-tertiary)] border-[var(--border-primary)]" />
                        <span className="text-sm text-[var(--text-primary)]">Require Known Device</span>
                    </label>
                </div>
            </section>

            {/* 2. Step-Up Auth */}
            <section>
                <h4 className="text-xs font-bold text-[var(--text-tertiary)] uppercase mb-4 border-t border-[var(--border-primary)] pt-4">Step-Up Authentication</h4>
                <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-[var(--text-primary)]">Require Step-Up?</span>
                    <input type="checkbox" checked={formData.requireStepUp} onChange={e => handleChange('requireStepUp', e.target.checked)} />
                </div>
                
                {formData.requireStepUp && (
                    <div>
                        <label className="block text-[12px] text-[var(--text-secondary)] mb-1.5">Allowed Method</label>
                        <select disabled className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[6px] p-2 text-sm text-[var(--text-primary)] opacity-70 cursor-not-allowed">
                            <option>Email OTP (Default)</option>
                        </select>
                        <p className="text-[10px] text-[var(--text-tertiary)] mt-1">Only Email OTP is supported per current configuration.</p>
                    </div>
                )}
            </section>

            {/* 3. Security & Lockout */}
            <section>
                <h4 className="text-xs font-bold text-[var(--text-tertiary)] uppercase mb-4 border-t border-[var(--border-primary)] pt-4">Security Controls</h4>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block text-[12px] text-[var(--text-secondary)] mb-1.5">Max Attempts</label>
                        <input type="number" className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[6px] p-2 text-sm text-[var(--text-primary)]"
                            value={formData.maxAttempts} onChange={e => handleChange('maxAttempts', parseInt(e.target.value))} />
                    </div>
                    <div>
                        <label className="block text-[12px] text-[var(--text-secondary)] mb-1.5">Lockout Action</label>
                        <select 
                            className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[6px] p-2 text-sm text-[var(--text-primary)]"
                            value={formData.lockoutAction}
                            onChange={e => handleChange('lockoutAction', e.target.value)}
                        >
                            <option value="soft_lock">Soft Lock (Temporary)</option>
                            <option value="suspend_device">Suspend Device</option>
                            <option value="suspend_account">Suspend Account</option>
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-[12px] text-[var(--text-secondary)] mb-1.5">Base Delay (Seconds)</label>
                        <input type="number" className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[6px] p-2 text-sm text-[var(--text-primary)]"
                            value={formData.baseDelay || 0} onChange={e => handleChange('baseDelay', parseInt(e.target.value))} />
                    </div>
                    <div className="flex items-end pb-2">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" checked={formData.progDelay} onChange={e => handleChange('progDelay', e.target.checked)} />
                            <span className="text-sm text-[var(--text-primary)]">Progressive Delay (2x)</span>
                        </label>
                    </div>
                </div>
            </section>

            {/* 4. Timeouts */}
            <section>
                <h4 className="text-xs font-bold text-[var(--text-tertiary)] uppercase mb-4 border-t border-[var(--border-primary)] pt-4">Timeouts (Seconds)</h4>
                <div className="grid grid-cols-3 gap-3">
                    <div>
                        <label className="block text-[11px] text-[var(--text-secondary)] mb-1">Total Timeout</label>
                        <input type="number" className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[6px] p-2 text-sm"
                            value={formData.totalTimeout} onChange={e => handleChange('totalTimeout', parseInt(e.target.value))} />
                    </div>
                    <div>
                        <label className="block text-[11px] text-[var(--text-secondary)] mb-1">FIDO2 Timeout</label>
                        <input type="number" className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[6px] p-2 text-sm"
                            value={formData.fido2Timeout} onChange={e => handleChange('fido2Timeout', parseInt(e.target.value))} />
                    </div>
                    <div>
                        <label className="block text-[11px] text-[var(--text-secondary)] mb-1">Step-Up Timeout</label>
                        <input type="number" className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[6px] p-2 text-sm"
                            value={formData.stepUpTimeout} onChange={e => handleChange('stepUpTimeout', parseInt(e.target.value))} />
                    </div>
                </div>
            </section>

            {/* Corporate Only Fields */}
            {isCorporate && (
                <section>
                    <h4 className="text-xs font-bold text-[var(--accent)] uppercase mb-4 border-t border-[var(--accent)]/30 pt-4">Corporate Controls</h4>
                    <div className="flex items-center gap-4 mb-3">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" checked={formData.dualAuth} onChange={e => handleChange('dualAuth', e.target.checked)} />
                            <span className="text-sm text-[var(--text-primary)] font-medium">Require Dual Approval</span>
                        </label>
                    </div>
                    {formData.dualAuth && (
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-[11px] text-[var(--text-secondary)] mb-1">Min. Approvers</label>
                                <input type="number" min="1" className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[6px] p-2 text-sm"
                                    value={formData.minApprovers} onChange={e => handleChange('minApprovers', parseInt(e.target.value))} />
                            </div>
                            <div>
                                <label className="block text-[11px] text-[var(--text-secondary)] mb-1">Approval Timeout (Hours)</label>
                                <input type="number" className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[6px] p-2 text-sm"
                                    value={formData.approvalTimeout} onChange={e => handleChange('approvalTimeout', parseInt(e.target.value))} />
                            </div>
                        </div>
                    )}
                </section>
            )}

        </div>

        {/* Footer Actions */}
        <div className="p-5 border-t border-[var(--border-primary)] flex justify-end gap-3 bg-[var(--bg-secondary)] rounded-b-[12px]">
            <button onClick={onClose} className="px-4 py-2 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[6px] text-sm hover:bg-[var(--bg-hover)]">Cancel</button>
            <button onClick={() => onSave(formData)} className="px-4 py-2 bg-[var(--accent)] text-white rounded-[6px] text-sm hover:bg-[var(--accent-hover)]">Save Changes</button>
        </div>
      </div>
    </div>
  );
};