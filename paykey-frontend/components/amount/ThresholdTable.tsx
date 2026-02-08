'use client';
import { Toggle } from '@/components/ui/Toggle';

// Definisi Interface dipindah ke sini agar bisa di-export
export interface Threshold {
  id: number;
  min: number;
  max: number | null;
  weight: number;
  label: 'low' | 'medium' | 'high' | 'critical';
  stepUp: boolean;
  methods: string[];
}

// Tipe data spesifik untuk value yang di-update
type ThresholdValue = number | string | boolean | null;

interface ThresholdTableProps {
  data: Threshold[];
  // Mengganti 'any' dengan tipe yang lebih spesifik
  onUpdate: (id: number, field: keyof Threshold, val: ThresholdValue) => void;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onAdd: () => void;
}

export function ThresholdTable({ data, onUpdate, onEdit, onDelete, onAdd }: ThresholdTableProps) {

  const formatMethod = (m: string) => {
    const map: Record<string, string> = { hardware_totp: 'HW Token', push_otp: 'Push', sms_otp: 'SMS', email_otp: 'Email', callback: 'Callback' };
    return map[m] || m;
  };

  const getLabelClass = (l: string) => {
    // Pastikan input di-lowercase agar case-insensitive
    switch (l?.toLowerCase()) {
      case 'low':
        // Menggunakan --success-bg (hijau transparan)
        return 'bg-[var(--success-bg)] text-[var(--success)]';

      case 'medium':
        // Menggunakan --warning-bg (kuning transparan)
        return 'bg-[var(--warning-bg)] text-[var(--warning)]';

      case 'high':
        // Menggunakan --error-bg (merah transparan)
        return 'bg-[var(--error-bg)] text-[var(--error)]';

      case 'critical':
        // Menggunakan --purple-bg (ungu transparan) yang ada di globals.css
        return 'bg-[var(--purple-bg)] text-[var(--purple)]';

      default:
        // Fallback warna abu-abu jika tidak cocok
        return 'bg-[var(--bg-tertiary)] text-[var(--text-secondary)]';
    }
  };
  return (
    <div className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[10px] overflow-hidden mb-6">
      <div className="p-4 border-b border-[var(--border-primary)] flex justify-between items-center">
        <div className="flex items-center gap-2.5 text-[14px] font-semibold text-[var(--text-primary)]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px] text-[var(--text-tertiary)]"><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>
          Amount Thresholds
        </div>
        <button onClick={onAdd} className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-[6px] text-[11px] font-medium bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-primary)] hover:bg-[var(--bg-hover)] transition-all">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg> Add Threshold
        </button>
      </div>

      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[var(--bg-tertiary)] border-b border-[var(--border-primary)]">
            <th className="p-3 pl-4 text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider rounded-tl-[6px]">Amount Range (MYR)</th>
            <th className="p-3 text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider">Risk Weight</th>
            <th className="p-3 text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider">Label</th>
            <th className="p-3 text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider">Step-Up</th>
            <th className="p-3 text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider">Methods</th>
            <th className="p-3 text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider rounded-tr-[6px]"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[var(--border-primary)]">
          {data.map(t => (
            <tr key={t.id} className="hover:bg-[var(--bg-tertiary)] transition-colors group">
              <td className="p-3.5 pl-4">
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    className="w-[100px] bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[6px] px-2.5 py-1.5 text-[13px] font-mono text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                    value={t.min}
                    onChange={e => onUpdate(t.id, 'min', parseFloat(e.target.value) || 0)}
                  />
                  <span className="text-[12px] text-[var(--text-tertiary)]">to</span>
                  <input
                    type="number"
                    className="w-[100px] bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[6px] px-2.5 py-1.5 text-[13px] font-mono text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors placeholder-[var(--text-tertiary)]"
                    value={t.max || ''}
                    placeholder="∞"
                    onChange={e => onUpdate(t.id, 'max', e.target.value ? parseFloat(e.target.value) : null)}
                  />
                </div>
              </td>
              <td className="p-3.5">
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="0" max="100"
                    className="w-full max-w-[120px] h-1.5 bg-[var(--bg-tertiary)] rounded-full appearance-none cursor-pointer accent-[var(--accent)]"
                    value={t.weight}
                    onChange={e => onUpdate(t.id, 'weight', parseInt(e.target.value) || 0)}
                  />
                  <div className="w-[40px] px-1.5 py-1 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[4px] text-center text-[12px] font-mono text-[var(--text-primary)]">
                    {t.weight}
                  </div>
                </div>
              </td>
              <td className="p-3.5">
                <span className={`px-2.5 py-1 rounded-[4px] text-[11px] font-bold uppercase ${getLabelClass(t.label)}`}>
                  {t.label}
                </span>
              </td>
              <td className="p-3.5">
                <div className="flex items-center gap-2">
                  <Toggle active={t.stepUp} onChange={(val) => onUpdate(t.id, 'stepUp', val)} />
                </div>
              </td>
              <td className="p-3.5">
                {t.methods.length > 0 ? (
                  <div className="flex flex-wrap gap-1">
                    {t.methods.map(m => (
                      <span key={m} className="px-2 py-0.5 bg-[var(--bg-tertiary)] rounded-[4px] text-[10px] text-[var(--text-secondary)]">
                        {formatMethod(m)}
                      </span>
                    ))}
                  </div>
                ) : (
                  <span className="text-[var(--text-tertiary)] text-[12px]">—</span>
                )}
              </td>
              <td className="p-3.5 text-right">
                <div className="flex justify-end gap-1.5 transition-opacity">
                  <button onClick={() => onEdit(t.id)} className="w-7 h-7 flex items-center justify-center rounded-[4px] bg-[var(--bg-tertiary)] border border-[var(--border-primary)] text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] transition-colors">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                  </button>
                  <button onClick={() => onDelete(t.id)} className="w-7 h-7 flex items-center justify-center rounded-[4px] bg-[var(--bg-tertiary)] border border-[var(--border-primary)] text-[var(--text-secondary)] hover:bg-[var(--error-muted)] hover:text-[var(--error)] hover:border-[var(--error-muted)] transition-colors">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}