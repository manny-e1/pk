'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { authService } from '@/services/authService';

export default function Sidebar() {
  const pathname = usePathname();
  
  const isActive = (path: string) => pathname === path || pathname.startsWith(`${path}/`);
  
  const handleLogout = async () => {
    await authService.logout();
  };

  return (
    <aside className="w-[240px] bg-[var(--bg-secondary)] border-r border-[var(--border-secondary)] shrink-0 h-screen flex flex-col z-10 sticky top-0">
      
      <div className="p-4 border-b border-[var(--border-secondary)]">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-[var(--radius-md)] flex items-center justify-center bg-gradient-to-br from-[var(--accent)] to-[#60a5fa]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 text-white">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
          </div>
          <span className="font-semibold text-sm text-[var(--text-primary)]">Secure Paykey</span>
          <span className="ml-auto text-[10px] bg-[var(--purple-bg)] text-[var(--purple)] px-1.5 py-0.5 rounded-[10px] font-medium">FIDO2</span>
        </div>
      </div>
      
      <nav className="p-2 overflow-y-auto custom-scrollbar flex-1">
        
        <div className="mb-5">
          <div className="text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-[0.5px] px-2 py-1.5">Overview</div>
          
          <Link href="/dashboard" className={`flex items-center gap-2.5 px-2.5 py-2 rounded-[var(--radius-md)] text-[14px] cursor-pointer transition-all mb-0.5 ${isActive('/dashboard') ? 'bg-[var(--bg-tertiary)] text-[var(--text-primary)]' : 'text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]'}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px] opacity-70"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
            Dashboard
          </Link>
          
          <Link href="/auth-logs" className={`flex items-center gap-2.5 px-2.5 py-2 rounded-[var(--radius-md)] text-[14px] cursor-pointer transition-all mb-0.5 ${isActive('/auth-logs') ? 'bg-[var(--bg-tertiary)] text-[var(--text-primary)]' : 'text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]'}`}>
             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px] opacity-70"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
             Auth Logs
             <span className="ml-auto text-[11px] bg-[var(--error-bg)] text-[var(--error)] px-1.5 py-0.5 rounded-[10px] font-medium">12</span>
          </Link>
        </div>
        
        <div className="mb-5">
          <div className="text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-[0.5px] px-2 py-1.5">Security</div>
          
          <Link href="/auth-policies" className={`flex items-center gap-2.5 px-2.5 py-2 rounded-[var(--radius-md)] text-[14px] cursor-pointer transition-all mb-0.5 ${isActive('/auth-policies') ? 'bg-[var(--bg-tertiary)] text-[var(--text-primary)]' : 'text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]'}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`w-[18px] h-[18px] ${isActive('/auth-policies') ? 'opacity-100' : 'opacity-70'}`}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="8" r="5"/></svg>
            Auth Policies
          </Link>

          <Link href="/risk-config" className={`flex items-center gap-2.5 px-2.5 py-2 rounded-[var(--radius-md)] text-[14px] cursor-pointer transition-all mb-0.5 ${isActive('/risk-config') ? 'bg-[var(--bg-tertiary)] text-[var(--text-primary)]' : 'text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]'}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`w-[18px] h-[18px] ${isActive('/risk-config') ? 'opacity-100' : 'opacity-70'}`}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            Risk Config
          </Link>

          <Link href="/amount-thresholds" className={`flex items-center gap-2.5 px-2.5 py-2 rounded-[var(--radius-md)] text-[14px] cursor-pointer transition-all mb-0.5 ${isActive('/amount-thresholds') ? 'bg-[var(--bg-tertiary)] text-[var(--text-primary)]' : 'text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]'}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`w-[18px] h-[18px] ${isActive('/amount-thresholds') ? 'opacity-100' : 'opacity-70'}`}><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            Amount Thresholds
          </Link>

        </div>

        <div className="mb-5">
          <div className="text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-[0.5px] px-2 py-1.5">Users</div>
          
          <Link href="/users" className={`flex items-center gap-2.5 px-2.5 py-2 rounded-[var(--radius-md)] text-[14px] cursor-pointer transition-all mb-0.5 ${isActive('/users') ? 'bg-[var(--bg-tertiary)] text-[var(--text-primary)]' : 'text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]'}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px] opacity-70"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
            Users
          </Link>
          <Link href="/devices" className={`flex items-center gap-2.5 px-2.5 py-2 rounded-[var(--radius-md)] text-[14px] cursor-pointer transition-all mb-0.5 ${isActive('/devices') ? 'bg-[var(--bg-tertiary)] text-[var(--text-primary)]' : 'text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]'}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px] opacity-70"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
            Devices
          </Link>
        </div>
      </nav>

      <div className="p-3 border-t border-[var(--border-secondary)] bg-[var(--bg-secondary)] mt-auto">
        <button 
          onClick={handleLogout}
          className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-[var(--radius-md)] text-[14px] font-medium text-[var(--text-secondary)] hover:bg-[var(--error-bg)] hover:text-[var(--error)] transition-all group cursor-pointer"
        >
          <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            className="w-[18px] h-[18px] opacity-70 group-hover:opacity-100 transition-opacity"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          Sign Out
        </button>
      </div>

    </aside>
  );
}