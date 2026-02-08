'use client';

interface ToggleProps {
  active: boolean;
  onChange: (val: boolean) => void;
  className?: string;
}

export function Toggle({ active, onChange, className = '' }: ToggleProps) {
  return (
    <div 
      className={`relative w-10 h-[22px] rounded-full cursor-pointer transition-colors ${active ? 'bg-[var(--accent)]' : 'bg-[var(--bg-tertiary)]'} ${className}`}
      onClick={() => onChange(!active)}
    >
      <div className={`absolute top-[3px] left-[3px] w-4 h-4 bg-white rounded-full transition-transform shadow-sm ${active ? 'translate-x-[18px]' : ''}`}></div>
    </div>
  );
}