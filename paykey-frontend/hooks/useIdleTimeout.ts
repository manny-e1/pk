'use client';

import { useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { authService } from '@/services/authService';

const IDLE_TIMEOUT_MS = 30 * 60 * 1000; 

export function useIdleTimeout() {
  const router = useRouter();
  const pathname = usePathname();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleLogout = async () => {
    if (pathname === '/login') return;

    console.warn("User has been idle for 30 minutes. Logging out...");
    
    try {
      await authService.logout();
    } catch (error) {
      console.error("Error during logout:", error);
    } finally {
      localStorage.removeItem('paykey_last_user_email');
      sessionStorage.clear();
      
      router.push('/login');
    }
  };

  const resetTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(handleLogout, IDLE_TIMEOUT_MS);
  };

  useEffect(() => {
    if (pathname === '/login') {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      return;
    }

    const activeEvents = [
      'mousemove', 
      'mousedown', 
      'keydown', 
      'scroll', 
      'touchstart', 
      'wheel'
    ];

    activeEvents.forEach((event) => {
      window.addEventListener(event, resetTimer, { passive: true });
    });

    resetTimer();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      activeEvents.forEach((event) => {
        window.removeEventListener(event, resetTimer);
      });
    };
  }, [pathname]);
}