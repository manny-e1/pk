'use client';

interface ChannelTabsProps {
  current: string;
  onChange: (channel: string) => void;
}

export function ChannelTabs({ current, onChange }: ChannelTabsProps) {
  const tabs = [
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' } // Sesuai backend kita
  ];

  return (
    <div className="flex gap-[2px] mb-5"> 
      {/* gap-[2px] mungkin perlu 0 jika ingin border menyatu total, 
          tapi di HTML ada margin-right kecil antar tab di beberapa design system.
          Kita ikut style HTML: .channel-tabs { display: flex; gap: 2px; } */}
      
      {tabs.map((tab, index) => {
        const isFirst = index === 0;
        const isLast = index === tabs.length - 1;
        const isActive = current === tab.id;
        
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`
              px-4 py-2 text-[12px] font-medium border border-[var(--border-primary)] transition-all
              ${isFirst ? 'rounded-l-[6px]' : ''} 
              ${isLast ? 'rounded-r-[6px]' : ''} 
              /* HTML style: border-radius logic handled via first/last child classes usually, 
                 tailwind rounded-l/r does this. */
              
              ${isActive 
                ? 'bg-[var(--accent)] border-[var(--accent)] text-white relative z-10' 
                : 'bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }
            `}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}