'use client';

const formatDuration = (seconds: number) => {
  if (!seconds) return '0s';
  if (seconds < 60) return `${seconds}s`;
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m`;
  return `${Math.floor(seconds / 3600)}h`;
};

const formatUV = (uv: string, cache: number) => {
  if (uv === 'discouraged') return 'UP only';
  if (uv === 'preferred') return cache > 0 ? `Preferred (${cache}s)` : 'Preferred';
  return cache > 0 ? `Required (${cache}s)` : 'Required (fresh)';
};

interface PolicyCardProps {
  risk: string;
  data: any;
  onEdit: () => void;
  isCorporate?: boolean;
}

export function PolicyCard({ risk, data, onEdit, isCorporate }: PolicyCardProps) {
  
  const config: any = {
    low: { 
      label: 'Low Risk', 
      dotColor: 'bg-[var(--success)]',
      badgeClass: 'bg-[var(--success-bg)] text-[var(--success)]' 
    },
    medium: { 
      label: 'Medium Risk', 
      dotColor: 'bg-[var(--warning)]',
      badgeClass: 'bg-[var(--warning-bg)] text-[var(--warning)]' 
    },
    high: { 
      label: 'High Risk', 
      dotColor: 'bg-[var(--error)]',
      badgeClass: 'bg-[var(--error-bg)] text-[var(--error)]' 
    }
  };

  const c = config[risk] || config.low;

  return (
    <div className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[12px] overflow-hidden hover:border-[var(--border-secondary)] transition-colors flex flex-col h-full shadow-sm">
      
      <div className="px-4 py-3 border-b border-[var(--border-primary)] flex items-center justify-between bg-[var(--bg-tertiary)]/20">
        <div className="flex items-center gap-2.5">
          <div className={`w-2 h-2 rounded-full ${c.dotColor} shadow-[0_0_8px_rgba(0,0,0,0.2)]`}></div>
          <h3 className="text-[14px] font-semibold text-[var(--text-primary)] tracking-tight">{c.label}</h3>
        </div>
        
        <span className={`inline-flex items-center px-2.5 py-1 rounded-[20px] text-[10px] font-bold uppercase tracking-wide ${c.badgeClass}`}>
          {risk}
        </span>
      </div>

      <div className="p-4 flex-1 space-y-0.5">
        <Row label="User Verification" value={formatUV(data.userVerification, data.uvCache)} />
        
        <Row 
          label="Step-Up" 
          value={data.requireStepUp ? 'Required' : 'None'} 
          valClass={data.requireStepUp ? 'text-[var(--warning)]' : 'text-[var(--success)]'} 
        />
        
        <Row label="Max Retries" value={data.maxAttempts} />
        
        <Row label="Lockout" value={formatDuration(data.lockoutDuration)} mono />
        
        <Row label="Total Timeout" value={`${data.totalTimeout}s`} mono />
        
        {isCorporate && data.dualAuth && (
           <Row label="Dual Auth" value={`${data.minApprovers} approvers`} valClass="text-[var(--accent)]" />
        )}
      </div>

      <div className="px-4 py-3 bg-[var(--bg-tertiary)]/30 border-t border-[var(--border-primary)] flex justify-end mt-auto">
        <button 
          onClick={onEdit} 
          className="flex items-center  gap-1.5 px-3 py-1.5 bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-[6px] text-[11px] font-medium text-[var(--text-primary)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-all shadow-sm"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 opacity-80">
            <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
            <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
          </svg>
          Edit
        </button>
      </div>
    </div>
  );
}

const Row = ({ label, value, mono, valClass }: any) => (
  <div className="flex justify-between items-center py-2 border-b border-[var(--border-primary)] border-dashed last:border-0 last:border-b-0">
    <span className="text-[12px] text-[var(--text-tertiary)]">{label}</span>
    <span className={`text-[12px] font-medium ${valClass || 'text-[var(--text-primary)]'} ${mono ? 'font-mono text-[11px]' : ''}`}>
      {value}
    </span>
  </div>
);