import type { Metadata } from 'next';
import './globals.css';
import { IdleTimerWrapper } from '@/components/IdleTimerWrapper';

export const metadata: Metadata = {
  title: 'Secure Paykey - FIDO2 Authentication',
  description: 'FIDO2-based payment authentication system',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <IdleTimerWrapper>
      <body>{children}</body>
      </IdleTimerWrapper>
    </html>
  );
}