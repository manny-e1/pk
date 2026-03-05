'use client';

import { useState, useEffect } from 'react';

export interface PolicyConfig {
  userVerification: string;
  uvCache: number;
  txnSigning: boolean;
  knownDevice: boolean;
  minDeviceAge: number;
  deviceTypes: string;
  
  requireStepUp: boolean;
  stepUpMethods: string[];
  
  maxAttempts: number;
  lockoutDuration: number;
  lockoutAction: string;
  captchaAfter: number;
  baseDelay: number;
  progDelay: boolean;
  notifySecurity: boolean;
  
  totalTimeout: number;
  fido2Timeout: number;
  stepUpTimeout: number;
  idleTimeout: number;
  
  dualAuth?: boolean;
  minApprovers?: number;
  approvalTimeout?: number;
}

const defaultValues: PolicyConfig = {
  userVerification: 'required',
  uvCache: 0,
  txnSigning: false,
  knownDevice: false,
  minDeviceAge: 0,
  deviceTypes: 'all',
  requireStepUp: false,
  stepUpMethods: [],
  maxAttempts: 3,
  lockoutDuration: 900,
  lockoutAction: 'soft_lock',
  captchaAfter: 1,
  baseDelay: 5,
  progDelay: true,
  notifySecurity: true,
  totalTimeout: 120,
  fido2Timeout: 60,
  stepUpTimeout: 0,
  idleTimeout: 45,
  dualAuth: false,
  minApprovers: 2,
  approvalTimeout: 4
};

const STEP_UP_LABELS: Record<string, string> = {
  hardware_totp: 'Hardware TOTP',
  push_otp: 'Push OTP (Mobile App)',
  sms_otp: 'SMS OTP',
  email_otp: 'Email OTP',
  callback: 'Callback Verification'
};

const ToggleSwitch = ({ label, desc, checked, onChange }: { label: string, desc: string, checked: boolean, onChange: (val: boolean) => void }) => (
  <div className="flex items-center justify-between py-3 border-b border-[var(--border-primary)] last:border-0">
    <div className="flex flex-col gap-0.5">
      <span className="text-[13px] font-medium text-[var(--text-primary)]">{label}</span>
      <span className="text-[11px] text-[var(--text-tertiary)]">{desc}</span>
    </div>
    <div 
      onClick={() => onChange(!checked)}
      className={`w-[44px] h-[24px] rounded-full relative cursor-pointer transition-all duration-200 shrink-0 ${checked ? 'bg-[var(--accent)]' : 'bg-[var(--bg-tertiary)]'}`}
    >
      <div className={`absolute w-[18px] h-[18px] bg-white rounded-full top-[3px] transition-all duration-200 ${checked ? 'left-[23px]' : 'left-[3px]'}`} />
    </div>
  </div>
);

export const EditPolicyModal = ({ isOpen, onClose, policyName, initialData, isCorporate, onSave }: any) => {
  const [formData, setFormData] = useState<PolicyConfig>({ ...defaultValues, ...initialData });

  useEffect(() => {
    if (isOpen) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFormData({ ...defaultValues, ...initialData });
    }
  }, [isOpen, initialData]);

  if (!isOpen) return null;

  const handleChange = (field: keyof PolicyConfig, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAddStepUp = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    if (val && !formData.stepUpMethods.includes(val)) {
      handleChange('stepUpMethods', [...formData.stepUpMethods, val]);
    }
    e.target.value = '';
  };

  const handleRemoveStepUp = (methodToRemove: string) => {
    handleChange('stepUpMethods', formData.stepUpMethods.filter(m => m !== methodToRemove));
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[2000] p-4 opacity-100 transition-opacity" onClick={onClose}>
      <div className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[16px] w-full max-w-[720px] flex flex-col max-h-[90vh] shadow-2xl scale-100 transition-transform" onClick={e => e.stopPropagation()}>
        
        <div className="px-6 py-5 border-b border-[var(--border-primary)] flex justify-between items-center">
          <h3 className="text-base font-semibold text-[var(--text-primary)] capitalize">
            Edit Policy: {isCorporate ? 'Corporate' : 'Consumer'} {policyName.replace(/_/g, ' ')} Risk
          </h3>
          <button onClick={onClose} className="w-8 h-8 rounded-md bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] flex items-center justify-center transition-colors">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px]"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        <div className="p-6 overflow-y-auto custom-scrollbar space-y-6">
            
            <section className="mb-6">
                <div className="text-[13px] font-semibold text-[var(--text-primary)] mb-4 pb-2 border-b border-[var(--border-primary)] flex items-center gap-2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[var(--text-tertiary)]"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
                    FIDO2 Authentication
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                        <label className="text-[12px] font-medium text-[var(--text-secondary)]">User Verification</label>
                        <select className="px-3 py-2.5 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-md text-[13px] text-[var(--text-primary)] outline-none focus:border-[var(--accent)]"
                            value={formData.userVerification} onChange={e => handleChange('userVerification', e.target.value)}>
                            <option value="discouraged">Discouraged (UP only)</option>
                            <option value="preferred">Preferred (UV if available)</option>
                            <option value="required">Required (UV mandatory)</option>
                        </select>
                        <span className="text-[11px] text-[var(--text-tertiary)]">Whether biometric/PIN is required</span>
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label className="text-[12px] font-medium text-[var(--text-secondary)]">UV Cache Window</label>
                        <div className="flex items-center gap-3">
                            <input type="number" className="flex-1 px-3 py-2.5 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-md text-[13px] text-[var(--text-primary)] outline-none focus:border-[var(--accent)]"
                                value={formData.uvCache} onChange={e => handleChange('uvCache', parseInt(e.target.value))} />
                            <span className="text-[12px] text-[var(--text-tertiary)]">seconds</span>
                        </div>
                        <span className="text-[11px] text-[var(--text-tertiary)]">0 = fresh UV required every time</span>
                    </div>
                </div>

                <div className="mt-4">
                    <ToggleSwitch label="Transaction Signing" desc="Include transaction details in challenge for user to sign" checked={formData.txnSigning} onChange={v => handleChange('txnSigning', v)} />
                    <ToggleSwitch label="Require Known Device" desc="Only allow previously registered devices" checked={formData.knownDevice} onChange={v => handleChange('knownDevice', v)} />
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="flex flex-col gap-1.5">
                        <label className="text-[12px] font-medium text-[var(--text-secondary)]">Minimum Device Age</label>
                        <div className="flex items-center gap-3">
                            <input type="number" className="flex-1 px-3 py-2.5 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-md text-[13px] text-[var(--text-primary)] outline-none focus:border-[var(--accent)]"
                                value={formData.minDeviceAge} onChange={e => handleChange('minDeviceAge', parseInt(e.target.value))} />
                            <span className="text-[12px] text-[var(--text-tertiary)]">days</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label className="text-[12px] font-medium text-[var(--text-secondary)]">Allowed Device Types</label>
                        <select className="px-3 py-2.5 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-md text-[13px] text-[var(--text-primary)] outline-none focus:border-[var(--accent)]"
                            value={formData.deviceTypes} onChange={e => handleChange('deviceTypes', e.target.value)}>
                            <option value="all">All (Platform + Cross-platform)</option>
                            <option value="platform">Platform only (Built-in)</option>
                            <option value="cross-platform">Cross-platform only (USB/NFC)</option>
                        </select>
                    </div>
                </div>
            </section>

            <section className="mb-6">
                <div className="text-[13px] font-semibold text-[var(--text-primary)] mb-4 pb-2 border-b border-[var(--border-primary)] flex items-center gap-2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[var(--text-tertiary)]"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    Step-Up Authentication
                </div>
                
                <ToggleSwitch label="Require Step-Up Factor" desc="Require additional verification beyond FIDO2" checked={formData.requireStepUp} onChange={v => handleChange('requireStepUp', v)} />
                
                {formData.requireStepUp && (
                    <div className="mt-4">
                        <label className="text-[12px] font-medium text-[var(--text-secondary)]">Allowed Step-Up Methods</label>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {formData.stepUpMethods.map(method => (
                                <span key={method} className="inline-flex items-center gap-1 px-2.5 py-1 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-full text-[11px] text-[var(--text-secondary)]">
                                    {STEP_UP_LABELS[method] || method}
                                    <button onClick={() => handleRemoveStepUp(method)} className="w-3.5 h-3.5 ml-1 bg-transparent hover:bg-[var(--error-muted)] hover:text-[var(--error)] rounded-full flex items-center justify-center">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-2.5 h-2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                                    </button>
                                </span>
                            ))}
                        </div>
                        <select className="mt-3 w-full px-3 py-2.5 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-md text-[13px] text-[var(--text-secondary)] outline-none focus:border-[var(--accent)]"
                            onChange={handleAddStepUp} defaultValue="">
                            <option value="" disabled>+ Add method...</option>
                            {Object.entries(STEP_UP_LABELS).map(([key, label]) => (
                                !formData.stepUpMethods.includes(key) && <option key={key} value={key}>{label}</option>
                            ))}
                        </select>
                    </div>
                )}
            </section>

            <section className="mb-6">
                <div className="text-[13px] font-semibold text-[var(--text-primary)] mb-4 pb-2 border-b border-[var(--border-primary)] flex items-center gap-2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[var(--text-tertiary)]"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"/></svg>
                    Retry & Lockout Settings
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col gap-1.5">
                        <label className="text-[12px] font-medium text-[var(--text-secondary)]">Max Attempts</label>
                        <input type="number" className="px-3 py-2.5 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-md text-[13px] outline-none focus:border-[var(--accent)] text-[var(--text-primary)]"
                            value={formData.maxAttempts} onChange={e => handleChange('maxAttempts', parseInt(e.target.value))} />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label className="text-[12px] font-medium text-[var(--text-secondary)]">Lockout Duration</label>
                        <div className="flex items-center gap-2">
                            <input type="number" className="flex-1 px-3 py-2.5 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-md text-[13px] outline-none focus:border-[var(--accent)] text-[var(--text-primary)]"
                                value={formData.lockoutDuration} onChange={e => handleChange('lockoutDuration', parseInt(e.target.value))} />
                            <span className="text-[12px] text-[var(--text-tertiary)]">sec</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label className="text-[12px] font-medium text-[var(--text-secondary)]">Lockout Action</label>
                        <select className="px-3 py-2.5 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-md text-[13px] outline-none focus:border-[var(--accent)] text-[var(--text-primary)]"
                            value={formData.lockoutAction} onChange={e => handleChange('lockoutAction', e.target.value)}>
                            <option value="soft_lock">Soft Lock</option>
                            <option value="hard_lock">Hard Lock</option>
                            <option value="device_suspend">Suspend Device</option>
                            <option value="account_freeze">Freeze Account</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="flex flex-col gap-1.5">
                        <label className="text-[12px] font-medium text-[var(--text-secondary)]">CAPTCHA After Failures</label>
                        <input type="number" className="px-3 py-2.5 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-md text-[13px] outline-none focus:border-[var(--accent)] text-[var(--text-primary)]"
                            value={formData.captchaAfter} onChange={e => handleChange('captchaAfter', parseInt(e.target.value))} />
                        <span className="text-[11px] text-[var(--text-tertiary)]">0 = always require CAPTCHA</span>
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label className="text-[12px] font-medium text-[var(--text-secondary)]">Base Delay</label>
                        <div className="flex items-center gap-2">
                            <input type="number" className="flex-1 px-3 py-2.5 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-md text-[13px] outline-none focus:border-[var(--accent)] text-[var(--text-primary)]"
                                value={formData.baseDelay} onChange={e => handleChange('baseDelay', parseInt(e.target.value))} />
                            <span className="text-[12px] text-[var(--text-tertiary)]">sec</span>
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <ToggleSwitch label="Progressive Delay" desc="Exponentially increase delay between retry attempts" checked={formData.progDelay} onChange={v => handleChange('progDelay', v)} />
                    <ToggleSwitch label="Notify Security Team" desc="Alert security team when lockout is triggered" checked={formData.notifySecurity} onChange={v => handleChange('notifySecurity', v)} />
                </div>
            </section>

            <section className="mb-6">
                <div className="text-[13px] font-semibold text-[var(--text-primary)] mb-4 pb-2 border-b border-[var(--border-primary)] flex items-center gap-2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[var(--text-tertiary)]"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    Timeout Settings (Seconds)
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                        <label className="text-[12px] font-medium text-[var(--text-secondary)]">Total Timeout</label>
                        <input type="number" className="px-3 py-2.5 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-md text-[13px] outline-none text-[var(--text-primary)]"
                            value={formData.totalTimeout} onChange={e => handleChange('totalTimeout', parseInt(e.target.value))} />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label className="text-[12px] font-medium text-[var(--text-secondary)]">FIDO2 Timeout</label>
                        <input type="number" className="px-3 py-2.5 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-md text-[13px] outline-none text-[var(--text-primary)]"
                            value={formData.fido2Timeout} onChange={e => handleChange('fido2Timeout', parseInt(e.target.value))} />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label className="text-[12px] font-medium text-[var(--text-secondary)]">Step-Up Timeout</label>
                        <input type="number" className="px-3 py-2.5 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-md text-[13px] outline-none text-[var(--text-primary)]"
                            value={formData.stepUpTimeout} onChange={e => handleChange('stepUpTimeout', parseInt(e.target.value))} />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label className="text-[12px] font-medium text-[var(--text-secondary)]">Idle Timeout</label>
                        <input type="number" className="px-3 py-2.5 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-md text-[13px] outline-none text-[var(--text-primary)]"
                            value={formData.idleTimeout} onChange={e => handleChange('idleTimeout', parseInt(e.target.value))} />
                    </div>
                </div>
            </section>

            {isCorporate && (
                <section>
                    <div className="text-[13px] font-semibold text-[var(--text-primary)] mb-4 pb-2 border-b border-[var(--border-primary)] flex items-center gap-2">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[var(--text-tertiary)]"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
                        Dual Authorization (Corporate)
                    </div>
                    
                    <ToggleSwitch label="Require Dual Authorization" desc="Transaction must be approved by multiple users" checked={!!formData.dualAuth} onChange={v => handleChange('dualAuth', v)} />
                    
                    {formData.dualAuth && (
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[12px] font-medium text-[var(--text-secondary)]">Minimum Approvers</label>
                                <input type="number" min="1" className="px-3 py-2.5 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-md text-[13px] outline-none text-[var(--text-primary)]"
                                    value={formData.minApprovers} onChange={e => handleChange('minApprovers', parseInt(e.target.value))} />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[12px] font-medium text-[var(--text-secondary)]">Approval Timeout (Hours)</label>
                                <input type="number" className="px-3 py-2.5 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-md text-[13px] outline-none text-[var(--text-primary)]"
                                    value={formData.approvalTimeout} onChange={e => handleChange('approvalTimeout', parseInt(e.target.value))} />
                            </div>
                        </div>
                    )}
                </section>
            )}

        </div>

        <div className="px-6 py-4 border-t border-[var(--border-primary)] flex justify-end gap-2.5 bg-[var(--bg-tertiary)] rounded-b-[16px]">
            <button onClick={onClose} className="px-4 py-2 bg-[var(--bg-tertiary)] border border-[var(--border-secondary)] text-[var(--text-primary)] rounded-md text-[13px] font-medium hover:bg-[var(--bg-hover)] transition-colors">
                Cancel
            </button>
            <button onClick={() => onSave(formData)} className="px-4 py-2 flex items-center gap-1.5 bg-[var(--accent)] text-white rounded-md text-[13px] font-medium hover:bg-[var(--accent-hover)] transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
                Save Policy
            </button>
        </div>
      </div>
    </div>
  );
};