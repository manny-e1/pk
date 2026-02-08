'use client';

interface SegmentSelectorProps {
  activeSegment: string;
  onSelect: (segment: 'consumer' | 'corporate') => void;
}

export function SegmentSelector({ activeSegment, onSelect }: SegmentSelectorProps) {
  return (
    <div className="flex gap-2 mb-6">
      <button 
        onClick={() => onSelect('consumer')} 
        className={`flex items-center gap-1.5 px-4 py-2 rounded-[6px] text-[12px] font-medium border transition-all ${
          activeSegment === 'consumer' 
            ? 'bg-[var(--accent-muted)] border-[var(--accent)] text-[var(--accent)]' 
            : 'bg-[var(--bg-tertiary)] border-[var(--border-primary)] text-[var(--text-secondary)] hover:border-[var(--text-tertiary)] hover:text-[var(--text-primary)]'
        }`}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> 
        Consumer Banking
      </button>
      <button 
        onClick={() => onSelect('corporate')} 
        className={`flex items-center gap-1.5 px-4 py-2 rounded-[6px] text-[12px] font-medium border transition-all ${
          activeSegment === 'corporate' 
            ? 'bg-[var(--accent-muted)] border-[var(--accent)] text-[var(--accent)]' 
            : 'bg-[var(--bg-tertiary)] border-[var(--border-primary)] text-[var(--text-secondary)] hover:border-[var(--text-tertiary)] hover:text-[var(--text-primary)]'
        }`}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><path d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11"/></svg> 
        Corporate Banking
      </button>
    </div>
  );
}