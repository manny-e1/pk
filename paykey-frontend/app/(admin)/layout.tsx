'use client';

import { useEffect, useState } from 'react';
import Sidebar from '@/components/layout/Sidebar'; 
import { authService } from '@/services/authService';
import { useRouter } from 'next/navigation';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let isMounted = true;

    const verifySession = async () => {
      try {
        await authService.me();
        
        if (isMounted) setIsAuthorized(true);
      } catch (err) {
        if (isMounted) router.replace('/login');
      }
    };

    verifySession();

    return () => { isMounted = false; };
  }, [router]);

  if (!isAuthorized) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-[var(--bg-primary)]">
        <div className="flex flex-col items-center gap-4">
            <div className="animate-spin rounded-full h-10 w-10 border-[3px] border-[var(--border-secondary)] border-t-[var(--accent)]"></div>
            
            <div className="flex flex-col items-center gap-1">
              <span className="text-[var(--text-primary)] text-sm font-medium">Verifying Session</span>
              <span className="text-[var(--text-tertiary)] text-xs">Please wait...</span>
            </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans">
      <Sidebar />
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        {children}
      </main>
    </div>
  );
}