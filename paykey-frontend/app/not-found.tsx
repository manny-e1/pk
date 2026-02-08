import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--bg-primary)] text-[var(--text-primary)] px-6">
      
      <div className="mb-8 opacity-40 grayscale">
        <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-[var(--radius-md)] flex items-center justify-center bg-gradient-to-br from-[var(--accent)] to-[#60a5fa]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 text-white">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
          </div>
            <span className="font-semibold text-sm tracking-wide">Secure Paykey</span>
        </div>
      </div>

      <div className="text-center max-w-lg">
        <h1 className="text-[120px] leading-none font-bold text-[var(--border-secondary)] select-none">
          404
        </h1>
        
        <h2 className="mt-6 text-2xl font-semibold text-[var(--text-primary)] tracking-tight">
          Page not found
        </h2>
        
        <p className="mt-3 text-[var(--text-secondary)] text-[15px] leading-relaxed">
          The page you are looking for doesn&apos;t exist or has been moved. <br className="hidden sm:block"/>
          Please check the URL or navigate back to the dashboard.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <Link 
            href="/dashboard" 
            className="inline-flex items-center justify-center h-10 px-6 rounded-[var(--radius-md)] bg-[var(--text-primary)] text-[var(--bg-primary)] text-sm font-medium transition-colors hover:opacity-90 active:scale-[0.98]"
          >
            Go back home
          </Link>
          
          <Link
            href="/login"
            className="inline-flex items-center justify-center h-10 px-6 rounded-[var(--radius-md)] border border-[var(--border-secondary)] text-[var(--text-secondary)] text-sm font-medium transition-colors hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)]"
          >
            Sign in
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 text-[11px] text-[var(--text-tertiary)] font-mono tracking-wider uppercase">
        System Error &bull; Route Missing
      </div>

    </div>
  );
}