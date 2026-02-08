import type { Metadata } from 'next';
import './globals.css';

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
      {/* Font dimuat langsung di globals.css via Google Fonts untuk akurasi layout */}
      <body>{children}</body>
    </html>
  );
}