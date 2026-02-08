import React from 'react';

export function EntityGraph() {
  return (
    <div className="bg-[#111] h-[280px] relative overflow-hidden p-0 w-full">
      <div className="absolute inset-0 flex items-center justify-center">
        {/* SVG Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <line x1="50%" y1="50%" x2="25%" y2="30%" stroke="#333" strokeWidth="1.5" />
          <line x1="50%" y1="50%" x2="75%" y2="30%" stroke="#333" strokeWidth="1.5" />
          <line x1="50%" y1="50%" x2="25%" y2="70%" stroke="#333" strokeWidth="1.5" />
          <line x1="50%" y1="50%" x2="75%" y2="70%" stroke="#333" strokeWidth="1.5" />
          <line x1="25%" y1="70%" x2="15%" y2="60%" stroke="#333" strokeWidth="1.5" strokeDasharray="4 4" />
        </svg>

        {/* Center Node (Target) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10 group cursor-pointer">
          <div className="w-12 h-12 rounded-full bg-[var(--accent)] border-4 border-[#111] shadow-[0_0_30px_rgba(59,130,246,0.4)] flex items-center justify-center text-white font-bold text-xs transition-transform group-hover:scale-110">
            USR
          </div>
          <div className="mt-2 text-[10px] bg-[var(--bg-tertiary)] px-2 py-0.5 rounded text-[var(--text-primary)] border border-[var(--border-primary)]">
            Target
          </div>
        </div>

        {/* Device Node */}
        <div className="absolute top-[30%] left-[25%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
          <div className="w-9 h-9 rounded-full bg-[var(--purple)] border-2 border-[#111] flex items-center justify-center text-white text-[9px] shadow-lg">
            DEV
          </div>
          <div className="mt-1 text-[9px] text-[var(--text-secondary)]">iPhone 15</div>
        </div>

        {/* IP Node */}
        <div className="absolute top-[30%] left-[75%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
          <div className="w-9 h-9 rounded-full bg-[var(--warning)] border-2 border-[#111] flex items-center justify-center text-black font-bold text-[9px] shadow-lg">
            IP
          </div>
          <div className="mt-1 text-[9px] text-[var(--text-secondary)]">192.168.x.x</div>
        </div>

        {/* Account Node (Flagged) */}
        <div className="absolute top-[70%] left-[25%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
          <div className="w-9 h-9 rounded-full bg-[var(--error)] border-2 border-[#111] flex items-center justify-center text-white text-[9px] shadow-lg animate-pulse">
            ACC
          </div>
          <div className="mt-1 text-[9px] text-[var(--error)] font-medium">Flagged</div>
        </div>

        {/* Linked User Node */}
        <div className="absolute top-[70%] left-[75%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
          <div className="w-9 h-9 rounded-full bg-[var(--accent)] border-2 border-[#111] opacity-60 flex items-center justify-center text-white text-[9px]">
            USR
          </div>
          <div className="mt-1 text-[9px] text-[var(--text-secondary)]">Linked</div>
        </div>
      </div>
    </div>
  );
}