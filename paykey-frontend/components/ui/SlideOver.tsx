import React from 'react';

interface SlideOverProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export const SlideOver = ({ isOpen, onClose, title, children, footer }: SlideOverProps) => {
  return (
    <div className={`fixed inset-0 z-[1000] pointer-events-none ${isOpen ? 'pointer-events-auto' : ''}`}>
      <div 
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} 
        onClick={onClose} 
      />
      
      <div className={`absolute top-0 right-0 w-[480px] h-full bg-[var(--bg-secondary)] border-l border-[var(--border-primary)] shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-5 border-b border-[var(--border-secondary)] flex items-center justify-between shrink-0 bg-[var(--bg-secondary)]">
          <span className="text-base font-semibold text-[var(--text-primary)]">{title}</span>
          <button onClick={onClose} className="w-8 h-8 rounded-[var(--radius-md)] bg-[var(--bg-tertiary)] flex items-center justify-center hover:bg-[var(--bg-hover)] transition-colors text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar bg-[var(--bg-secondary)]">
          {children}
        </div>

        {footer && (
          <div className="p-4 border-t border-[var(--border-secondary)] bg-[var(--bg-elevated)] shrink-0">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};