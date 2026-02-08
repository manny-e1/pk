import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  type?: 'default' | 'danger';
}

export const Modal = ({ isOpen, onClose, title, children, footer, type = 'default' }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1001] flex items-center justify-center font-sans">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      <div className="relative bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-lg)] w-full max-w-md shadow-2xl p-6 animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className={`text-lg font-semibold ${type === 'danger' ? 'text-[var(--error)]' : 'text-[var(--text-primary)]'}`}>
            {title}
          </h3>
          <button onClick={onClose} className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        <div className="text-[13px] text-[var(--text-secondary)] leading-relaxed mb-6">
          {children}
        </div>
        {footer && <div className="flex justify-end gap-3 pt-2 border-t border-[var(--border-secondary)]">{footer}</div>}
      </div>
    </div>
  );
};