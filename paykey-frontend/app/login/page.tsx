'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { authService } from '@/services/authService';
import { deviceService, DeviceTelemetry } from '@/services/systemDevice';
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [cachedTelemetry, setCachedTelemetry] = useState<DeviceTelemetry | null>(null);

  const [verifiedUser, setVerifiedUser] = useState<{
    name: string;
    email: string;
    hasPasskey?: boolean;
  } | null>(null);

  const [showPassword, setShowPassword] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const passwordInputRef = useRef<HTMLInputElement>(null);


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

  const handleError = (msg: string) => {
    setIsLoading(false);
    setIsChecking(false);
    setErrorMessage(msg);
    setTimeout(() => setErrorMessage(''), 4000);
  };

  const handleCheckEmail = async () => {
    if (!email || isChecking || verifiedUser) return;

    setIsChecking(true);
    setErrorMessage('');

    try {
      const res = await authService.checkUser(email);

      await new Promise(r => setTimeout(r, 600));

      if (!res.exists) {
        handleError("Account not found. Please check your email.");
        return;
      }

      if (res.isBlocked) {
        handleError(res.message || "Access denied. Administrators only.");
        return;
      }

      setVerifiedUser({
        name: res.name || 'Administrator',
        email: email,
        hasPasskey: res.hasPasskey
      });

      setTimeout(() => passwordInputRef.current?.focus(), 100);

    } catch (err: any) {
      handleError(err.message || 'Connection failed');
    } finally {
      setIsChecking(false);
    }
  };

  const handleEmailKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCheckEmail();
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) return handleError("Password required");

    setIsLoading(true);
    try {
      const telemetry = cachedTelemetry || await deviceService.getDeviceTelemetry();
      const loginEmail = verifiedUser ? verifiedUser.email : email;

      await authService.loginPassword(loginEmail, password, telemetry);
      localStorage.setItem('paykey_last_user_email', loginEmail);
      router.push('/dashboard');
    } catch (err: any) {
      handleError('Invalid credentials');
    }
  };

  const handlePasskeyLogin = async () => {
    if (!verifiedUser?.hasPasskey || isLoading) return;

    setIsLoading(true);
    try {
      const telemetry = cachedTelemetry || await deviceService.getDeviceTelemetry();
      await authService.loginPasskey(verifiedUser.email, telemetry);
      localStorage.setItem('paykey_last_user_email', verifiedUser.email);
      router.push('/dashboard');
    } catch (err: any) {
      let msg = err.message || "Passkey login failed";
      if (msg.includes("not allowed") || msg.includes("cancelled")) msg = "Login cancelled";
      handleError(msg);
    }
  };

  const handleSwitchAccount = () => {
    setVerifiedUser(null);
    setEmail('');
    setPassword('');
    setErrorMessage('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-5 bg-[var(--bg-primary)] font-sans text-[14px]">
      <div className="w-full max-w-[400px]">
        
        <div className="bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-[var(--radius-xl)] p-10 shadow-[0_4px_24px_rgba(0,0,0,0.3)]">

          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3">
            
            <Image 
              src="/Logo.png"
              alt="Secure Paykey Logo" 
              width={200} 
              height={22} 
              className="object-contain"
            />

            </div>
            <h1 className="text-xl font-semibold mb-2 text-[var(--text-primary)]">
              {verifiedUser ? `Welcome Back, ${verifiedUser.name.split(' ')[0]}` : 'Admin Login'}
            </h1>
            <p className="text-sm text-[var(--text-tertiary)]">
              {verifiedUser ? 'Enter your password or use your Passkey' : 'Enter your email to continue'}
            </p>
          </div>

          {errorMessage && (
            <div className="mb-4 p-3 rounded-[var(--radius-md)] bg-[var(--error-muted)] border border-[var(--error)] text-[var(--error)] text-xs text-center font-medium animate-pulse">
              {errorMessage}
            </div>
          )}

          {!verifiedUser ? (
            
            <div className="animate-scale-in">
              <div className="mb-6">
                <label className="block text-[13px] font-medium text-[var(--text-secondary)] mb-2">Email Address</label>
                <div className="relative">
                  <input
                    type="email"
                    className="w-full p-3 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent)] focus:ring-[3px] focus:ring-[rgba(35,131,226,0.15)] transition-all placeholder-[var(--text-tertiary)]"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={handleEmailKeyDown}
                    disabled={isChecking}
                    autoFocus
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={handleCheckEmail}
                disabled={isChecking || !email}
                className="w-full flex items-center justify-center gap-2 p-3 rounded-[var(--radius-md)] bg-[var(--accent)] text-white text-sm font-medium hover:bg-[var(--accent-hover)] active:scale-95 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isChecking ? (
                  <>
                    <svg className="animate-spin w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" strokeDasharray="32" strokeDashoffset="12" />
                    </svg>
                    Checking...
                  </>
                ) : (
                  'Continue'
                )}
              </button>
            </div>

          ) : (

            <div className="animate-scale-in">
              <div className="flex items-center gap-3 p-3.5 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] mb-6">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold text-white shrink-0 bg-gradient-to-br from-[var(--accent)] to-[var(--purple)]">
                  {verifiedUser.name.substring(0, 2).toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-[var(--text-primary)] truncate">{verifiedUser.email}</div>
                  <div className="text-xs text-[var(--text-tertiary)]">Administrator</div>
                </div>
                <div className="w-5 h-5 bg-[var(--accent)] rounded-full flex items-center justify-center shrink-0 cursor-pointer hover:bg-[var(--accent-hover)] transition-colors" onClick={handleSwitchAccount} title="Change account">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-3 h-3 text-white">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </div>

              <form onSubmit={handleLogin}>
                <div className="mb-5">
                  <label className="block text-[13px] font-medium text-[var(--text-secondary)] mb-2">Password</label>
                  <div className="relative">
                    <input
                      ref={passwordInputRef}
                      type={showPassword ? "text" : "password"}
                      className="w-full p-3 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent)] focus:ring-[3px] focus:ring-[rgba(35,131,226,0.15)] transition-all placeholder-[var(--text-tertiary)]"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)] hover:text-[var(--text-secondary)] p-1"
                    >
                      {showPassword ? (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px]">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
                        </svg>
                      ) : (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px]">
                          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" /><line x1="1" y1="1" x2="23" y2="23" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-2 p-3 rounded-[var(--radius-md)] bg-[var(--accent)] text-white text-sm font-medium hover:bg-[var(--accent-hover)] active:scale-95 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" strokeDasharray="32" strokeDashoffset="12" />
                      </svg>
                      Signing in...
                    </>
                  ) : (
                    <>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px]">
                        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" /><polyline points="10 17 15 12 10 7" /><line x1="15" y1="12" x2="3" y2="12" />
                      </svg>
                      Log in
                    </>
                  )}
                </button>
              </form>

              <a href="#" className="block text-center text-[13px] text-[var(--text-tertiary)] mt-4 hover:text-[var(--accent)] transition-colors">
                Forgot password?
              </a>

              <div className="flex items-center gap-4 my-6">
                <div className="flex-1 h-px bg-[var(--border-primary)]"></div>
                <span className="text-xs text-[var(--text-tertiary)]">or</span>
                <div className="flex-1 h-px bg-[var(--border-primary)]"></div>
              </div>

              <button
                onClick={handlePasskeyLogin}
                disabled={!verifiedUser?.hasPasskey || isLoading}
                className={`w-full flex items-center justify-center gap-2.5 p-3 border border-[var(--border-primary)] rounded-[var(--radius-md)] text-sm font-medium transition-all
                  ${verifiedUser?.hasPasskey
                    ? 'bg-[var(--bg-tertiary)] text-[var(--text-primary)] hover:bg-[var(--bg-hover)] hover:border-[var(--text-tertiary)] cursor-pointer'
                    : 'bg-transparent text-[var(--text-tertiary)] opacity-50 cursor-not-allowed'
                  }`}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`w-5 h-5 ${verifiedUser?.hasPasskey ? 'text-[var(--accent)]' : 'text-[var(--text-tertiary)]'}`}>
                  <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
                </svg>
                Sign in with Passkey
              </button>
              
              <button
                type="button"
                onClick={handleSwitchAccount}
                className="block w-full text-center text-[13px] text-[var(--text-tertiary)] mt-6 hover:text-[var(--accent)] transition-colors"
              >
                Log in as someone else
              </button>
            </div>
          )}

          <p className="text-center text-xs text-[var(--text-tertiary)] mt-6 leading-5">
            Protected by FIDO2 authentication<br />
            <Link href="/signup" className="text-[var(--text-secondary)] hover:text-[var(--accent)] no-underline">Create an account</Link>
          </p>

        </div>
      </div>
    </div>
  );
}