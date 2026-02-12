'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { authService } from '@/services/authService';
import { deviceService ,DeviceTelemetry} from '@/services/systemDevice';

export default function SignupPage() {
  const router = useRouter();

  // --- STATE ---
  const [selectedMethod, setSelectedMethod] = useState<'password' | 'passkey'>('password');

  const [cachedTelemetry, setCachedTelemetry] = useState<DeviceTelemetry | null>(null);
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: ''
  });

  useEffect(() => {
    const initTelemetry = async () => {
        try {
            const data = await deviceService.getDeviceTelemetry();
            
            setCachedTelemetry(data);
            console.log("✅ Telemetry ready:", data);
        } catch (e) {
            console.warn("⚠️ Silent telemetry check failed/denied:", e);
        }
    };

    initTelemetry();
  }, []);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  // Password Strength Logic
  const [strength, setStrength] = useState(0); 
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  // Modal State
  const [modalOpen, setModalOpen] = useState(false);
  const [modalState, setModalState] = useState<'initial' | 'loading' | 'success' | 'error'>('initial');
  const [errorMessage, setErrorMessage] = useState('');

  // --- HANDLERS ---

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));

    if (id === 'password') checkStrength(value);
    if (id === 'confirmPassword') checkMatch(formData.password, value);
    if (id === 'password' && formData.confirmPassword) checkMatch(value, formData.confirmPassword);
  };

  const checkStrength = (pass: string) => {
    if (!pass) { setStrength(0); return; }
    let s = 0;
    if (pass.length >= 8) s++;
    if (/[a-z]/.test(pass) && /[A-Z]/.test(pass)) s++;
    if (/\d/.test(pass)) s++;
    if (/[^a-zA-Z0-9]/.test(pass)) s++;
    setStrength(s);
  };

  const checkMatch = (pass: string, confirm: string) => {
    setPasswordsMatch(pass === confirm);
  };

  const getStrengthLabel = () => {
    if (formData.password.length === 0) return '';
    const labels = ['Weak', 'Fair', 'Good', 'Strong'];
    return labels[Math.max(0, strength - 1)] + ' password';
  };

  // Helper untuk warna bar kekuatan password
  const getStrengthColorClass = () => {
    const colors = ['bg-[var(--error)]', 'bg-[var(--warning)]', 'bg-[var(--accent)]', 'bg-[var(--success)]'];
    return colors[Math.max(0, strength - 1)];
  };

  const getStrengthWidth = () => {
    const widths = ['w-[25%]', 'w-[50%]', 'w-[75%]', 'w-[100%]'];
    return widths[Math.max(0, strength - 1)];
  };

  // --- SUBMIT LOGIC ---

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.mobile) {
        alert('Please fill in all required fields');
        return;
    }

    if (selectedMethod === 'password') {
        if (!formData.password || formData.password.length < 8) {
            alert('Password must be at least 8 characters');
            return;
        }
        if (!passwordsMatch) return;

        setModalState('loading');
        setModalOpen(true);

        const telemetry = cachedTelemetry || await deviceService.getDeviceTelemetry();

        try {
            await authService.registerPassword(
                formData.fullName, 
                formData.email, 
                formData.password,
                "Personal", 
                formData.mobile,
                telemetry
            );

            setModalState('success');
            localStorage.setItem('paykey_last_user_email', formData.email);
            localStorage.setItem('paykey_last_user_name', formData.fullName);
        } catch (error: any) {
            console.error(error);
            setErrorMessage(error.message || "Registration failed");
            setModalState('error');
        }

    } else {
        setModalState('initial');
        setModalOpen(true);
    }
  };

  const startPasskeyProcess = async () => {
    setModalState('loading');
    try {
        const telemetry = cachedTelemetry || await deviceService.getDeviceTelemetry();
        await authService.registerPasskey(formData.email, formData.fullName, formData.mobile, telemetry);
        setModalState('success');
        localStorage.setItem('paykey_last_user_email', formData.email);
    } catch (error: any) {
        let msg = error.message || "Passkey registration failed";
        if (msg.includes("NotAllowedError")) msg = "Biometric cancelled or timed out.";
        setErrorMessage(msg);
        setModalState('error');
    }
  };

  const closeModal = () => {
    if (modalState === 'loading') return;
    setModalOpen(false);
  };

  const handleContinue = () => {
    router.push('/login');
  };

  // --- RENDER ---
  return (
    <div className="min-h-screen flex items-center justify-center p-5 bg-[var(--bg-primary)] font-sans text-[14px]">
      <div className="w-full max-w-[480px]">
        {/* SIGNUP CARD */}
        <div className="bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-[var(--radius-xl)] p-10 shadow-[0_4px_24px_rgba(0,0,0,0.3)]">
            
            {/* Header */}
            <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-[var(--accent)] to-[#60a5fa] rounded-[var(--radius-md)] flex items-center justify-center">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-[22px] h-[22px] text-white">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                        </svg>
                    </div>
                    <span className="font-semibold text-lg text-[var(--text-primary)]">Secure Paykey</span>
                    <span className="text-[10px] bg-[var(--purple-bg)] text-[var(--purple)] px-1.5 py-0.5 rounded-[10px]">FIDO2</span>
                </div>
                <h1 className="text-xl font-semibold mb-2 text-[var(--text-primary)]">Create Account</h1>
                <p className="text-sm text-[var(--text-tertiary)]">Choose your preferred sign-up method</p>
            </div>
            
            {/* Method Selector */}
            <div className="grid grid-cols-2 gap-3 mb-7">
                <div 
                    className={`flex flex-col items-center gap-2.5 p-5 bg-[var(--bg-tertiary)] border-2 rounded-[var(--radius-lg)] cursor-pointer transition-all 
                    ${selectedMethod === 'password' ? 'border-[var(--accent)] bg-[var(--accent-bg)]' : 'border-[var(--border-primary)] hover:border-[var(--text-tertiary)]'}`}
                    onClick={() => setSelectedMethod('password')}
                >
                    <div className={`w-12 h-12 rounded-[var(--radius-md)] flex items-center justify-center ${selectedMethod === 'password' ? 'text-[var(--purple)]' : 'text-[var(--purple)]'} bg-[var(--purple-bg)]`}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                        </svg>
                    </div>
                    <span className={`text-sm font-semibold ${selectedMethod === 'password' ? 'text-[var(--accent)]' : 'text-[var(--text-primary)]'}`}>Email & Password</span>
                    <span className="text-[11px] text-[var(--text-tertiary)] text-center">Traditional login method</span>
                </div>
                <div 
                    className={`flex flex-col items-center gap-2.5 p-5 bg-[var(--bg-tertiary)] border-2 rounded-[var(--radius-lg)] cursor-pointer transition-all 
                    ${selectedMethod === 'passkey' ? 'border-[var(--accent)] bg-[var(--accent-bg)]' : 'border-[var(--border-primary)] hover:border-[var(--text-tertiary)]'}`}
                    onClick={() => setSelectedMethod('passkey')}
                >
                    <div className="w-12 h-12 bg-[var(--warning-bg)] text-[var(--warning)] rounded-[var(--radius-md)] flex items-center justify-center">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                            <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>
                        </svg>
                    </div>
                    <span className={`text-sm font-semibold ${selectedMethod === 'passkey' ? 'text-[var(--accent)]' : 'text-[var(--text-primary)]'}`}>Passkey</span>
                    <span className="text-[11px] text-[var(--text-tertiary)] text-center">Passwordless with FIDO2</span>
                </div>
            </div>
            
            {/* Form */}
            <form onSubmit={handleSignup}>
                <div className="mb-6">
                    <div className="text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wide mb-4 flex items-center gap-2 after:content-[''] after:flex-1 after:h-px after:bg-[var(--border-primary)]">
                        Personal Information
                    </div>
                    
                    <div className="mb-4">
                        <label className="block text-[13px] font-medium text-[var(--text-secondary)] mb-2">Full Name</label>
                        <input type="text" className="w-full p-3 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent)] focus:ring-[3px] focus:ring-[rgba(35,131,226,0.15)] transition-all placeholder-[var(--text-tertiary)]" id="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Enter your full name" required />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="block text-[13px] font-medium text-[var(--text-secondary)] mb-2">Email Address</label>
                            <input type="email" className="w-full p-3 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent)] focus:ring-[3px] focus:ring-[rgba(35,131,226,0.15)] transition-all placeholder-[var(--text-tertiary)]" id="email" value={formData.email} onChange={handleInputChange} placeholder="you@example.com" required />
                        </div>
                        <div>
                            <label className="block text-[13px] font-medium text-[var(--text-secondary)] mb-2">Mobile Number</label>
                            <input type="tel" className="w-full p-3 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent)] focus:ring-[3px] focus:ring-[rgba(35,131,226,0.15)] transition-all placeholder-[var(--text-tertiary)]" id="mobile" value={formData.mobile} onChange={handleInputChange} placeholder="+60 12 345 6789" required />
                        </div>
                    </div>
                </div>
                
                {selectedMethod === 'password' && (
                    <div className="animate-scale-in">
                        <div className="mb-6">
                            <div className="text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wide mb-4 flex items-center gap-2 after:content-[''] after:flex-1 after:h-px after:bg-[var(--border-primary)]">
                                Create Password
                            </div>
                            
                            <div className="mb-4">
                                <label className="block text-[13px] font-medium text-[var(--text-secondary)] mb-2">Password</label>
                                <div className="relative">
                                    <input 
                                        type={showPassword ? "text" : "password"} 
                                        className="w-full p-3 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent)] focus:ring-[3px] focus:ring-[rgba(35,131,226,0.15)] transition-all placeholder-[var(--text-tertiary)]"
                                        id="password" 
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        placeholder="Create a strong password" 
                                    />
                                    <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)] hover:text-[var(--text-secondary)] p-1" onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px]"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                                        ) : (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px]"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                                        )}
                                    </button>
                                </div>
                                {formData.password.length > 0 && (
                                    <div className="mt-2">
                                        <div className="h-1 bg-[var(--bg-tertiary)] rounded-full overflow-hidden mb-1.5">
                                            <div className={`h-full rounded-full transition-all duration-300 ${getStrengthWidth()} ${getStrengthColorClass()}`}></div>
                                        </div>
                                        <span className="text-[11px] text-[var(--text-tertiary)]">{getStrengthLabel()}</span>
                                    </div>
                                )}
                            </div>
                            
                            <div className="mb-4">
                                <label className="block text-[13px] font-medium text-[var(--text-secondary)] mb-2">Confirm Password</label>
                                <div className="relative">
                                    <input 
                                        type={showConfirmPassword ? "text" : "password"} 
                                        className={`w-full p-3 bg-[var(--bg-tertiary)] border rounded-[var(--radius-md)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent)] focus:ring-[3px] focus:ring-[rgba(35,131,226,0.15)] transition-all placeholder-[var(--text-tertiary)] ${!passwordsMatch && formData.confirmPassword ? 'border-[var(--error)]' : 'border-[var(--border-primary)]'}`}
                                        id="confirmPassword" 
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                        placeholder="Confirm your password" 
                                    />
                                    <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)] hover:text-[var(--text-secondary)] p-1" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                        {showConfirmPassword ? (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px]"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                                        ) : (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px]"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                                        )}
                                    </button>
                                </div>
                                {!passwordsMatch && formData.confirmPassword && (
                                    <div className="text-[11px] text-[var(--error)] mt-1.5">Passwords do not match</div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
                
                {selectedMethod === 'passkey' && (
                    <div className="bg-[var(--accent-bg)] border border-[rgba(35,131,226,0.3)] rounded-[var(--radius-md)] p-4 mb-5 animate-scale-in">
                        <div className="text-[13px] font-semibold text-[var(--accent)] mb-1.5 flex items-center gap-2">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                            How Passkey Works
                        </div>
                        <div className="text-[12px] text-[var(--text-secondary)] leading-relaxed">
                            After submitting, you&apos;ll be prompted to authenticate using your device&apos;s biometrics (fingerprint, Face ID) or PIN. This creates a secure cryptographic key pair - no password needed!
                        </div>
                    </div>
                )}
                
                <button type="submit" className="w-full flex items-center justify-center gap-2 p-3 rounded-[var(--radius-md)] bg-[var(--accent)] text-white text-sm font-medium hover:bg-[var(--accent-hover)] transition-all disabled:opacity-70 disabled:cursor-not-allowed">
                    {selectedMethod === 'passkey' ? (
                        <>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px]">
                                <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>
                            </svg>
                            Continue with Passkey
                        </>
                    ) : (
                        <>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px]">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                                <circle cx="8.5" cy="7" r="4"/>
                                <line x1="20" y1="8" x2="20" y2="14"/>
                                <line x1="23" y1="11" x2="17" y2="11"/>
                            </svg>
                            Create Account
                        </>
                    )}
                </button>
            </form>
            
            <p className="text-center text-xs text-[var(--text-tertiary)] mt-4 leading-relaxed">
                By creating an account, you agree to our<br/>
                <Link href="#" className="text-[var(--text-secondary)] hover:text-[var(--accent)]">Terms of Service</Link> and <Link href="#" className="text-[var(--text-secondary)] hover:text-[var(--accent)]">Privacy Policy</Link>
            </p>
            
            <div className="text-center text-[13px] text-[var(--text-tertiary)] mt-6 pt-6 border-t border-[var(--border-primary)]">
                Already have an account? <Link href="/login" className="text-[var(--accent)] font-medium hover:underline">Log in</Link>
            </div>
        </div>
      </div>

      {/* --- MODALS --- */}
      <div className={`fixed inset-0 bg-[rgba(0,0,0,0.7)] flex items-center justify-center z-[1000] transition-all duration-200 ${modalOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={closeModal}>
        <div className={`bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-xl)] w-full max-w-[400px] p-10 text-center transform transition-transform duration-200 ${modalOpen ? 'scale-100' : 'scale-95'}`} onClick={e => e.stopPropagation()}>
            
            {/* 1. INITIAL PASSKEY PROMPT */}
            {modalState === 'initial' && (
                <>
                    <div className="w-[72px] h-[72px] rounded-full flex items-center justify-center mx-auto mb-6 bg-[var(--warning-bg)] text-[var(--warning)]">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-9 h-9 animate-pulse-custom">
                            <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>
                        </svg>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-[var(--text-primary)]">Register Your Passkey</h3>
                    <p className="text-sm text-[var(--text-secondary)] mb-6 leading-relaxed">Please authenticate using your device&apos;s biometrics (fingerprint, Face ID) or enter your device PIN to create your passkey.</p>
                    <div className="flex flex-col gap-3">
                        <button className="w-full flex items-center justify-center gap-2 p-3 rounded-[var(--radius-md)] bg-[var(--accent)] text-white text-sm font-medium hover:bg-[var(--accent-hover)] transition-all" onClick={startPasskeyProcess}>Continue</button>
                        <button className="w-full flex items-center justify-center gap-2 p-3 rounded-[var(--radius-md)] bg-[var(--bg-tertiary)] border border-[var(--border-primary)] text-[var(--text-primary)] text-sm font-medium hover:bg-[var(--bg-hover)] transition-all" onClick={closeModal}>Cancel</button>
                    </div>
                </>
            )}

            {/* 2. LOADING */}
            {modalState === 'loading' && (
                <>
                    <div className="w-[72px] h-[72px] rounded-full flex items-center justify-center mx-auto mb-6 bg-[var(--accent-bg)] text-[var(--accent)]">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-9 h-9 animate-spin">
                            <circle cx="12" cy="12" r="10" strokeDasharray="32" strokeDashoffset="12"/>
                        </svg>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-[var(--text-primary)]">Processing...</h3>
                    <p className="text-sm text-[var(--text-secondary)] mb-6 leading-relaxed">Please wait while we create your account securely.</p>
                </>
            )}

            {/* 3. SUCCESS */}
            {modalState === 'success' && (
                <>
                    <div className="w-[72px] h-[72px] rounded-full flex items-center justify-center mx-auto mb-6 bg-[var(--success-bg)] text-[var(--success)]">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-9 h-9">
                            <path className="checkmark" d="M20 6L9 17l-5-5"/>
                        </svg>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-[var(--text-primary)]">{selectedMethod === 'passkey' ? 'Passkey Created!' : 'Account Created!'}</h3>
                    <p className="text-sm text-[var(--text-secondary)] mb-6 leading-relaxed">Your account has been created successfully. You can now sign in.</p>
                    <div className="flex flex-col gap-3">
                        <button className="w-full flex items-center justify-center gap-2 p-3 rounded-[var(--radius-md)] bg-[var(--accent)] text-white text-sm font-medium hover:bg-[var(--accent-hover)] transition-all" onClick={handleContinue}>Continue to Login</button>
                    </div>
                </>
            )}

            {/* 4. ERROR */}
            {modalState === 'error' && (
                <>
                     <div className="w-[72px] h-[72px] rounded-full flex items-center justify-center mx-auto mb-6 bg-[var(--error-bg)] text-[var(--error)]">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-9 h-9">
                             <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                        </svg>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-[var(--text-primary)]">Registration Failed</h3>
                    <p className="text-sm text-[var(--error)] mb-6 leading-relaxed">{errorMessage}</p>
                    <div className="flex flex-col gap-3">
                        <button className="w-full flex items-center justify-center gap-2 p-3 rounded-[var(--radius-md)] bg-[var(--bg-tertiary)] border border-[var(--border-primary)] text-[var(--text-primary)] text-sm font-medium hover:bg-[var(--bg-hover)] transition-all" onClick={() => { setModalState('initial'); closeModal(); }}>Close</button>
                    </div>
                </>
            )}
        </div>
      </div>
    </div>
  );
}