'use client';

import { useIdleTimeout } from '@/hooks/useIdleTimeout';

export function IdleTimerWrapper({ children }: { children: React.ReactNode }) {
  useIdleTimeout();

  return <>{children}</>;
}