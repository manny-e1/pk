// 'use client';

// export const ComparisonTable = ({ segment, channel, policies }: any) => {
//   const risks = ['low', 'medium', 'high'];
//   const p = policies?.[segment]?.[channel];

//   // Helper konversi waktu (detik -> menit/jam)
//   const formatTime = (seconds: number) => {
//     if (!seconds) return '';
//     if (seconds < 60) return `${seconds}s`;
//     if (seconds < 3600) return `${Math.floor(seconds / 60)}m`;
//     return `${Math.floor(seconds / 3600)}h`;
//   };

//   // Badge User Verification
//   const formatUVBadge = (uv: string, cache: number) => {
//     if (!uv) return <span className="text-[var(--text-tertiary)]">—</span>;
    
//     let label = '';
//     let styleClass = '';

//     if (uv === 'preferred') {
//       // Blue / Accent
//       const timeStr = cache > 0 ? ` (${formatTime(cache)})` : '';
//       label = `Preferred${timeStr}`;
//       // FIX: Gunakan var(--accent-bg) yang baru ditambahkan
//       styleClass = 'bg-[var(--accent-bg)] text-[var(--accent)]';
      
//     } else if (uv === 'required') {
//       // Orange / Warning
//       const timeStr = cache > 0 ? ` (${formatTime(cache)})` : '';
//       label = `Required${timeStr}`;
//       // FIX: Gunakan var(--warning-bg) sesuai globals.css
//       styleClass = 'bg-[var(--warning-bg)] text-[var(--warning)]';

//     } else {
//       // Green / Success (UP Only)
//       label = 'UP Only';
//       // FIX: Gunakan var(--success-bg) sesuai globals.css
//       styleClass = 'bg-[var(--success-bg)] text-[var(--success)]';
//     }

//     return (
//         <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[20px] text-xs font-medium whitespace-nowrap ${styleClass}`}>
//             {label}
//         </span>
//     );
//   };

//   // Badge Lockout Action
//   const formatLockoutBadge = (action: string) => {
//     if (!action) return <span className="text-[var(--text-tertiary)]">—</span>;

//     let label = action.replace('_', ' '); 
//     let styleClass = '';

//     switch (action) {
//         case 'soft_lock':
//             // Warning
//             styleClass = 'bg-[var(--warning-bg)] text-[var(--warning)]';
//             label = 'Soft Lock';
//             break;
//         case 'suspend_device':
//         case 'suspend_account':
//         case 'hard_lock':
//             // Error
//             styleClass = 'bg-[var(--error-bg)] text-[var(--error)]';
//             label = label.charAt(0).toUpperCase() + label.slice(1);
//             break;
//         default:
//             // Neutral
//             styleClass = 'bg-[var(--bg-tertiary)] text-[var(--text-secondary)]';
//             break;
//     }

//     return (
//         <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[20px] text-xs font-medium whitespace-nowrap capitalize ${styleClass}`}>
//             {label}
//         </span>
//     );
//   };

//   if (!p) return null;

//   const rows = [
//     { 
//       label: 'User Verification', 
//       render: (r: string) => formatUVBadge(p[r]?.userVerification, p[r]?.uvCache) 
//     },
//     { 
//       label: 'Transaction Signing', 
//       render: (r: string) => p[r]?.txnSigning ? 
//         <span className="text-[var(--text-primary)] font-medium">✓ Yes</span> : 
//         <span className="text-[var(--text-tertiary)]">—</span> 
//     },
//     { 
//       label: 'Step-Up Required', 
//       render: (r: string) => p[r]?.requireStepUp ? 
//         <span className="text-[12px] text-[var(--accent)] font-medium">Email OTP</span> : 
//         <span className="text-[var(--text-tertiary)]">—</span> 
//     },
//     { 
//       label: 'Lockout Action', 
//       render: (r: string) => formatLockoutBadge(p[r]?.lockoutAction) 
//     },
//     { 
//       label: 'Total Timeout', 
//       render: (r: string) => p[r]?.totalTimeout ? 
//         <span className="font-mono text-[12px] text-[var(--text-primary)]">{p[r].totalTimeout}s</span> : 
//         <span className="text-[var(--text-tertiary)]">—</span> 
//     }
//   ];

//   return (
//     <div className="mb-8 mt-8">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-4">
//         <div className="flex items-center gap-2.5 text-[16px] font-semibold text-[var(--text-primary)]">
//           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-[var(--text-tertiary)]"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
//           Policy Comparison
//         </div>
//         <span className="text-[12px] text-[var(--text-tertiary)] uppercase tracking-wide font-medium">
//           {segment} Banking · {channel}
//         </span>
//       </div>

//       {/* Table */}
//       <div className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[12px] overflow-hidden">
//         <table className="w-full border-collapse text-left">
//           <thead>
//             <tr>
//               <th className="p-4 text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider bg-[var(--bg-tertiary)] border-b border-[var(--border-primary)] w-[200px]">Setting</th>
//               {risks.map(r => (
//                 <th key={r} className="p-4 text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider bg-[var(--bg-tertiary)] border-b border-[var(--border-primary)] capitalize">{r} Risk</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-[var(--border-primary)]">
//             {rows.map((row, i) => (
//               <tr key={i} className="hover:bg-[var(--bg-tertiary)]/5 transition-colors">
//                 <td className="p-4 text-[13px] font-medium text-[var(--text-primary)] bg-[var(--bg-tertiary)]/5">{row.label}</td>
//                 {risks.map(r => (
//                   <td key={r} className="p-4 text-[13px] text-[var(--text-primary)]">
//                     {row.render(r)}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

'use client';

export const ComparisonTable = ({ segment, channel, policies }: any) => {
  // Kita sesuaikan risk level dengan struktur state yang ada (Low, Medium, High)
  const risks = ['low', 'medium', 'high'];
  const p = policies?.[segment]?.[channel];

  // 1. Helper: Konversi Waktu (Detik -> Menit/Jam/Hari)
  const formatDuration = (seconds: number) => {
    if (!seconds) return <span className="text-[var(--text-tertiary)]">—</span>;
    if (seconds < 60) return `${seconds}s`;
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}h`;
    return `${Math.floor(seconds / 86400)}d`;
  };

  // 2. Helper: Render Badge User Verification (UV)
  const formatUVBadge = (uv: string, cache: number) => {
    if (!uv) return <span className="text-[var(--text-tertiary)]">—</span>;

    if (uv === 'discouraged') {
      return <span className="inline-flex px-2 py-0.5 rounded-[4px] text-[11px] font-medium bg-[var(--success-muted)] text-[var(--success)]">UP Only</span>;
    }
    
    if (uv === 'preferred') {
      return (
        <div className="flex items-center gap-1.5">
          <span className="inline-flex px-2 py-0.5 rounded-[4px] text-[11px] font-medium bg-[var(--success-muted)] text-[var(--success)]">Preferred</span>
          {cache > 0 && <small className="text-[11px] text-[var(--text-tertiary)]">({formatDuration(cache)})</small>}
        </div>
      );
    }

    // Required
    return cache > 0 ? (
      <div className="flex items-center gap-1.5">
        <span className="inline-flex px-2 py-0.5 rounded-[4px] text-[11px] font-medium bg-[var(--warning-muted)] text-[var(--warning)]">Required</span>
        <small className="text-[11px] text-[var(--text-tertiary)]">({formatDuration(cache)})</small>
      </div>
    ) : (
      <span className="inline-flex px-2 py-0.5 rounded-[4px] text-[11px] font-medium bg-[var(--error-muted)] text-[var(--error)]">Fresh UV</span>
    );
  };

  // 3. Helper: Format Step-Up Methods
  const formatStepUp = (methods: string[]) => {
    if (!methods || methods.length === 0) return <span className="text-[var(--text-tertiary)]">—</span>;
    
    const labels: Record<string, string> = {
      hardware_totp: 'HW Token',
      push_otp: 'Push',
      sms_otp: 'SMS',
      email_otp: 'Email',
      callback: 'Callback'
    };
    
    const displayStr = methods.map(m => labels[m] || m).join(', ');
    return <span className="text-[13px] text-[var(--text-primary)]">{displayStr}</span>;
  };

  // 4. Helper: Render Badge Lockout Action
  const formatLockoutBadge = (action: string) => {
    if (!action) return <span className="text-[var(--text-tertiary)]">—</span>;

    const badges: Record<string, { label: string; class: string }> = {
      soft_lock: { label: 'Soft Lock', class: 'bg-[var(--cyan-muted)] text-[var(--cyan)]' },
      hard_lock: { label: 'Hard Lock', class: 'bg-[var(--warning-muted)] text-[var(--warning)]' },
      device_suspend: { label: 'Device Suspend', class: 'bg-[var(--warning-muted)] text-[var(--warning)]' },
      account_freeze: { label: 'Account Freeze', class: 'bg-[var(--error-muted)] text-[var(--error)]' }
    };

    const b = badges[action] || { label: action, class: 'bg-[var(--bg-tertiary)] text-[var(--text-secondary)]' };
    
    return (
      <span className={`inline-flex px-2 py-0.5 rounded-[4px] text-[11px] font-medium capitalize ${b.class}`}>
        {b.label}
      </span>
    );
  };

  if (!p) return null;

  // Mendefinisikan Semua Baris Data Persis Seperti HTML
  const rows = [
    { label: 'User Verification', render: (r: string) => formatUVBadge(p[r]?.userVerification, p[r]?.uvCache) },
    { label: 'Transaction Signing', render: (r: string) => p[r]?.txnSigning ? <span className="text-[var(--text-primary)] font-medium">✓ Yes</span> : <span className="text-[var(--text-tertiary)]">—</span> },
    { label: 'Step-Up Required', render: (r: string) => p[r]?.requireStepUp ? formatStepUp(p[r]?.stepUpMethods) : <span className="text-[var(--text-tertiary)]">—</span> },
    { label: 'Known Device Required', render: (r: string) => p[r]?.knownDevice ? <span className="text-[var(--text-primary)] font-medium">✓ Yes</span> : <span className="text-[var(--text-tertiary)]">—</span> },
    { label: 'Min Device Age', render: (r: string) => p[r]?.minDeviceAge > 0 ? <span className="text-[13px] text-[var(--text-primary)]">{p[r].minDeviceAge} days</span> : <span className="text-[var(--text-tertiary)]">—</span> },
    { label: 'Max Attempts', render: (r: string) => p[r]?.maxAttempts !== undefined ? <span className="text-[13px] text-[var(--text-primary)]">{p[r].maxAttempts}</span> : <span className="text-[var(--text-tertiary)]">—</span> },
    { label: 'Lockout Duration', render: (r: string) => <span className="font-mono text-[11px] text-[var(--text-primary)]">{formatDuration(p[r]?.lockoutDuration)}</span> },
    { label: 'Lockout Action', render: (r: string) => formatLockoutBadge(p[r]?.lockoutAction) },
    { label: 'Total Timeout', render: (r: string) => p[r]?.totalTimeout ? <span className="font-mono text-[11px] text-[var(--text-primary)]">{p[r].totalTimeout}s</span> : <span className="text-[var(--text-tertiary)]">—</span> },
    { label: 'Idle Timeout', render: (r: string) => p[r]?.idleTimeout ? <span className="font-mono text-[11px] text-[var(--text-primary)]">{p[r].idleTimeout}s</span> : <span className="text-[var(--text-tertiary)]">—</span> }
  ];

  // Tambahkan baris Dual Authorization khusus jika segment Corporate
  if (segment === 'corporate') {
    rows.push({
      label: 'Dual Authorization',
      render: (r: string) => {
        if (!p[r]?.dualAuth) return <span className="text-[var(--text-tertiary)]">—</span>;
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-[4px] text-[11px] font-medium bg-[var(--purple-muted)] text-[var(--purple)]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
            {p[r].minApprovers} approvers
          </span>
        );
      }
    });
  }

  return (
    <div className="mb-8 mt-2">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2.5 text-[16px] font-semibold text-[var(--text-primary)]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-[var(--text-tertiary)]"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
          Policy Comparison
        </div>
        <span className="text-[12px] text-[var(--text-tertiary)] font-medium">
          <span className="capitalize">{segment}</span> Banking · <span className="capitalize">{channel}</span>
        </span>
      </div>

      {/* Comparison Table */}
      <div className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[12px] overflow-hidden">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr>
              <th className="p-4 text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider bg-[var(--bg-tertiary)] border-b border-[var(--border-primary)] w-[220px]">Setting</th>
              {risks.map(r => (
                <th key={r} className="p-4 text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider bg-[var(--bg-tertiary)] border-b border-[var(--border-primary)] capitalize">{r} Risk</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border-primary)]">
            {rows.map((row, i) => (
              <tr key={i} className="hover:bg-[var(--bg-tertiary)]/30 transition-colors">
                <td className="p-4 text-[13px] font-medium text-[var(--text-primary)] bg-[var(--bg-tertiary)]/20 whitespace-nowrap">
                  {row.label}
                </td>
                {risks.map(r => (
                  <td key={r} className="p-4 align-middle">
                    {row.render(r)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};