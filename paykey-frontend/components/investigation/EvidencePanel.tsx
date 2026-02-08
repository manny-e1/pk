// import React from 'react';

// export function EvidencePanel() {
//   return (
//     <div className="w-[340px] bg-[var(--bg-secondary)] border-l border-[var(--border-primary)] flex flex-col shrink-0">
//       {/* Header Panel */}
//       <div className="px-4 py-3.5 border-b border-[var(--border-primary)]">
//         <div className="text-[13px] font-semibold text-[var(--text-primary)] flex items-center gap-2">
//           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[var(--text-tertiary)]"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
//           Evidence Data
//         </div>
//         <div className="text-[10px] text-[var(--text-tertiary)] mt-0.5 ml-6">Input for AI analysis</div>
//       </div>
      
//       {/* Body */}
//       <div className="flex-1 overflow-y-auto p-3.5 custom-scrollbar">
//         {/* Data Indicator */}
//         <div className="flex items-center gap-1.5 p-2 bg-[var(--bg-primary)] rounded-md mb-4 text-[10px] text-[var(--text-tertiary)]">
//           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3 text-[var(--accent)]"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
//           Raw data sent to Claude — no ML pre-processing
//         </div>

//         {/* Transaction Card */}
//         <div className="mb-4">
//           <div className="text-[10px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wide mb-2 flex items-center gap-1.5">
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg> TRANSACTION
//           </div>
//           <div className="bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-md p-3">
//             <div className="flex items-center justify-between mb-2">
//               <span className="text-xs font-semibold text-[var(--text-primary)]">TXN_892847</span>
//               <span className="text-[9px] px-1.5 py-0.5 bg-[var(--warning-bg)] text-[var(--warning)] rounded font-bold">Under Review</span>
//             </div>
//             <div className="space-y-1">
//               <div className="flex justify-between text-[11px]"><span className="text-[var(--text-tertiary)]">Amount</span><span className="font-medium text-[var(--error)]">MYR 4,250.00</span></div>
//               <div className="flex justify-between text-[11px]"><span className="text-[var(--text-tertiary)]">Merchant</span><span className="font-medium text-[var(--text-primary)]">Electronics Hub</span></div>
//               <div className="flex justify-between text-[11px]"><span className="text-[var(--text-tertiary)]">Category</span><span className="font-medium text-[var(--text-primary)]">Electronics</span></div>
//               <div className="flex justify-between text-[11px]"><span className="text-[var(--text-tertiary)]">Location</span><span className="font-medium text-[var(--error)]">Bangkok, TH</span></div>
//               <div className="flex justify-between text-[11px]"><span className="text-[var(--text-tertiary)]">Time</span><span className="font-medium text-[var(--text-primary)] font-mono text-[10px]">14:32:15</span></div>
//               <div className="flex justify-between text-[11px]"><span className="text-[var(--text-tertiary)]">Auth</span><span className="font-medium text-[var(--warning)]">Challenged</span></div>
//             </div>
//           </div>
//         </div>

//         {/* User Card */}
//         <div className="mb-4">
//           <div className="text-[10px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wide mb-2 flex items-center gap-1.5">
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> USER PROFILE
//           </div>
//           <div className="bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-md p-3">
//             <div className="flex justify-between mb-2"><span className="text-xs font-semibold text-[var(--text-primary)]">John Davidson</span></div>
//             <div className="space-y-1">
//               <div className="flex justify-between text-[11px]"><span className="text-[var(--text-tertiary)]">User ID</span><span className="font-medium text-[var(--text-primary)] font-mono text-[10px]">USR_8847291</span></div>
//               <div className="flex justify-between text-[11px]"><span className="text-[var(--text-tertiary)]">Account Age</span><span className="font-medium text-[var(--text-primary)]">295 days</span></div>
//               <div className="flex justify-between text-[11px]"><span className="text-[var(--text-tertiary)]">Usual Loc</span><span className="font-medium text-[var(--text-primary)]">KL, Singapore</span></div>
//               <div className="flex justify-between text-[11px]"><span className="text-[var(--text-tertiary)]">Avg Txn</span><span className="font-medium text-[var(--text-primary)]">MYR 179.79</span></div>
//               <div className="flex justify-between text-[11px]"><span className="text-[var(--text-tertiary)]">30d Total</span><span className="font-medium text-[var(--text-primary)]">MYR 8,450</span></div>
//             </div>
//           </div>
//         </div>

//         {/* Device Card */}
//         <div className="mb-4">
//           <div className="text-[10px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wide mb-2 flex items-center gap-1.5">
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg> DEVICE
//           </div>
//           <div className="bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-md p-3">
//             <div className="flex items-center justify-between mb-2">
//               <span className="text-xs font-semibold text-[var(--text-primary)]">iPhone 15 Pro</span>
//               <span className="text-[9px] px-1.5 py-0.5 bg-[var(--success-bg)] text-[var(--success)] rounded font-bold">Known</span>
//             </div>
//             <div className="space-y-1">
//               <div className="flex justify-between text-[11px]"><span className="text-[var(--text-tertiary)]">Registered</span><span className="font-medium text-[var(--text-primary)]">Nov 15, 2024</span></div>
//               <div className="flex justify-between text-[11px]"><span className="text-[var(--text-tertiary)]">Total Auths</span><span className="font-medium text-[var(--success)]">234</span></div>
//               <div className="flex justify-between text-[11px]"><span className="text-[var(--text-tertiary)]">Last Used</span><span className="font-medium text-[var(--text-primary)] font-mono text-[10px]">09:15 @ KL</span></div>
//               <div className="flex justify-between text-[11px]"><span className="text-[var(--text-tertiary)]">Current</span><span className="font-medium text-[var(--error)]">Bangkok</span></div>
//             </div>
//           </div>
//         </div>

//         {/* Recent Activity */}
//         <div className="mb-4">
//           <div className="text-[10px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wide mb-2 flex items-center gap-1.5">
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> RECENT ACTIVITY
//           </div>
//           <div className="bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-md py-2 px-3">
//             {[
//               { dot: 'bg-[var(--error)]', act: 'Payment Attempt', t: '14:32', det: 'Electronics Hub · Bangkok', amt: 'MYR 4,250 · Challenged' },
//               { dot: 'bg-[var(--warning)]', act: 'Payment', t: '14:28', det: 'Travel Co · Bangkok', amt: 'MYR 890' },
//               { dot: 'bg-[var(--warning)]', act: 'Payment', t: '14:15', det: 'Travel Co · Bangkok', amt: 'MYR 450' },
//               { dot: 'bg-[var(--success)]', act: 'Login', t: '09:15', det: 'iPhone 15 Pro · KL', amt: '' },
//               { dot: 'bg-[var(--success)]', act: 'Payment', t: 'Yest 18:45', det: 'Grab Food · KL', amt: 'MYR 85.50' }
//             ].map((a, i) => (
//               <div key={i} className="flex gap-2 py-2 border-b border-[var(--border-primary)] last:border-0">
//                 <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${a.dot}`}></div>
//                 <div className="flex-1 min-w-0">
//                   <div className="flex justify-between items-center mb-0.5">
//                     <span className="text-[11px] font-medium text-[var(--text-primary)]">{a.act}</span>
//                     <span className="text-[9px] text-[var(--text-tertiary)] font-mono">{a.t}</span>
//                   </div>
//                   <div className="text-[10px] text-[var(--text-tertiary)]">{a.det}</div>
//                   {a.amt && <div className="text-[10px] text-[var(--text-secondary)]">{a.amt}</div>}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
'use client';

import React from 'react';
import { InvestigationContext } from '@/types/investigation';

interface Props {
  data?: InvestigationContext; // Data Raw dari Database
}

export function EvidencePanel({ data }: Props) {
  
  // State Loading / Empty Data
  if (!data) return (
      <div className="w-[340px] bg-[var(--bg-secondary)] border-l border-[var(--border-primary)] flex flex-col items-center justify-center text-[var(--text-tertiary)] text-xs h-full shrink-0">
          <div className="flex flex-col items-center gap-2">
            <div className="w-5 h-5 border-2 border-[var(--border-primary)] border-t-[var(--accent)] rounded-full animate-spin"></div>
            <span>Loading database records...</span>
          </div>
      </div>
  );

  return (
    <div className="w-[340px] bg-[var(--bg-secondary)] border-l border-[var(--border-primary)] flex flex-col shrink-0 h-full">
      {/* Header Panel */}
      <div className="px-4 py-3.5 border-b border-[var(--border-primary)] shrink-0">
        <div className="text-[13px] font-semibold text-[var(--text-primary)] flex items-center gap-2">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[var(--text-tertiary)]"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
          Evidence Data
        </div>
        <div className="text-[10px] text-[var(--text-tertiary)] mt-0.5 ml-6">Source: Real-time Database</div>
      </div>
      
      {/* Body */}
      <div className="flex-1 overflow-y-auto p-3.5 custom-scrollbar">
        {/* Data Indicator */}
        <div className="flex items-center gap-1.5 p-2 bg-[var(--bg-primary)] rounded-md mb-4 text-[10px] text-[var(--text-tertiary)]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3 text-[var(--accent)]"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          Raw data sent to Claude — no ML pre-processing
        </div>

        {/* 1. Transaction Card */}
        {data.transaction && (
            <div className="mb-4">
            <div className="text-[10px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wide mb-2 flex items-center gap-1.5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg> TRANSACTION
            </div>
            <div className="bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-md p-3">
                <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-[var(--text-primary)]">{data.transaction.id}</span>
                <span className="text-[9px] px-1.5 py-0.5 bg-[var(--warning-bg)] text-[var(--warning)] rounded font-bold">Under Review</span>
                </div>
                <div className="space-y-1">
                <div className="flex justify-between text-[11px]"><span className="text-[var(--text-tertiary)]">Amount</span><span className="font-medium text-[var(--error)]">{data.transaction.currency} {data.transaction.amount?.toLocaleString()}</span></div>
                <div className="flex justify-between text-[11px]"><span className="text-[var(--text-tertiary)]">Merchant</span><span className="font-medium text-[var(--text-primary)]">{data.transaction.merchant_name}</span></div>
                <div className="flex justify-between text-[11px]"><span className="text-[var(--text-tertiary)]">Category</span><span className="font-medium text-[var(--text-primary)] capitalize">{data.transaction.merchant_category}</span></div>
                <div className="flex justify-between text-[11px]"><span className="text-[var(--text-tertiary)]">Location</span><span className="font-medium text-[var(--error)]">{data.transaction.location?.city}, {data.transaction.location?.country}</span></div>
                <div className="flex justify-between text-[11px]"><span className="text-[var(--text-tertiary)]">Time</span><span className="font-medium text-[var(--text-primary)] font-mono text-[10px]">{data.transaction.timestamp ? new Date(data.transaction.timestamp).toLocaleTimeString() : 'N/A'}</span></div>
                <div className="flex justify-between text-[11px]"><span className="text-[var(--text-tertiary)]">Auth</span><span className="font-medium text-[var(--warning)]">{data.transaction.auth_result}</span></div>
                </div>
            </div>
            </div>
        )}

        {/* 2. User Card */}
        {data.user && (
            <div className="mb-4">
            <div className="text-[10px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wide mb-2 flex items-center gap-1.5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> USER PROFILE
            </div>
            <div className="bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-md p-3">
                <div className="flex justify-between mb-2"><span className="text-xs font-semibold text-[var(--text-primary)]">{data.user.name}</span></div>
                <div className="space-y-1">
                <div className="flex justify-between text-[11px]"><span className="text-[var(--text-tertiary)]">User ID</span><span className="font-medium text-[var(--text-primary)] font-mono text-[10px]">{data.user.id}</span></div>
                <div className="flex justify-between text-[11px]"><span className="text-[var(--text-tertiary)]">Account Age</span><span className="font-medium text-[var(--text-primary)]">{data.user.account_age_days} days</span></div>
                <div className="flex justify-between text-[11px]"><span className="text-[var(--text-tertiary)]">Usual Loc</span><span className="font-medium text-[var(--text-primary)] truncate max-w-[150px]">{data.user.typical_locations?.slice(0,2).join(', ') || 'N/A'}</span></div>
                <div className="flex justify-between text-[11px]"><span className="text-[var(--text-tertiary)]">Avg Txn</span><span className="font-medium text-[var(--text-primary)]">{data.transaction.currency} {data.user.transaction_stats_30d?.average_amount?.toLocaleString(undefined, {maximumFractionDigits:2})}</span></div>
                <div className="flex justify-between text-[11px]"><span className="text-[var(--text-tertiary)]">30d Count</span><span className="font-medium text-[var(--text-primary)]">{data.user.transaction_stats_30d?.count} txns</span></div>
                </div>
            </div>
            </div>
        )}

        {/* 3. Device Card */}
        {data.device && (
            <div className="mb-4">
            <div className="text-[10px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wide mb-2 flex items-center gap-1.5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg> DEVICE
            </div>
            <div className="bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-md p-3">
                <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-[var(--text-primary)]">{data.device.device_name}</span>
                <span className={`text-[9px] px-1.5 py-0.5 rounded font-bold ${data.device.is_known_device ? 'bg-[var(--success-bg)] text-[var(--success)]' : 'bg-[var(--warning-bg)] text-[var(--warning)]'}`}>
                    {data.device.is_known_device ? 'Known' : 'New'}
                </span>
                </div>
                <div className="space-y-1">
                {/* <div className="flex justify-between text-[11px]"><span className="text-[var(--text-tertiary)]">Registered</span><span className="font-medium text-[var(--text-primary)]">{data.device.registered_date ? new Date(data.device.registered_date).toLocaleDateString() : 'N/A'}</span></div> */}
                {/* <div className="flex justify-between text-[11px]"><span className="text-[var(--text-tertiary)]">Total Auths</span><span className="font-medium text-[var(--success)]">{data.device.total_authentications || 0}</span></div> */}
                <div className="flex justify-between text-[11px]"><span className="text-[var(--text-tertiary)]">Last Used</span><span className="font-medium text-[var(--text-primary)] font-mono text-[10px]">{data.device.last_used_before_this}</span></div>
                </div>
            </div>
            </div>
        )}

        {/* 4. Recent Activity (PERBAIKAN UTAMA DISINI) */}
        <div className="mb-4">
          <div className="text-[10px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wide mb-2 flex items-center gap-1.5">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> RECENT ACTIVITY (DB)
          </div>
          <div className="bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-md py-2 px-3">
            
            {/* SAFE GUARD: (array || []).map(...) agar tidak crash */}
            {(data.recent_activity || []).length > 0 ? (
                (data.recent_activity || []).map((a, i) => {
                // Logic pewarnaan dot berdasarkan status
                let dot = 'bg-[var(--text-tertiary)]';
                const status = (a.status || '').toLowerCase();
                
                if (status.includes('success')) dot = 'bg-[var(--success)]';
                else if (status.includes('challenged')) dot = 'bg-[var(--warning)]';
                else if (status.includes('failed') || status.includes('denied') || status.includes('blocked')) dot = 'bg-[var(--error)]';
                
                return (
                    <div key={i} className="flex gap-2 py-2 border-b border-[var(--border-primary)] last:border-0">
                    <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${dot}`}></div>
                    <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center mb-0.5">
                        <span className="text-[11px] font-medium text-[var(--text-primary)] capitalize">
                            {(a.action || 'Unknown').replace(/_/g, ' ')}
                        </span>
                        <span className="text-[9px] text-[var(--text-tertiary)] font-mono">
                            {a.timestamp ? new Date(a.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) : ''}
                        </span>
                        </div>
                        <div className="text-[10px] text-[var(--text-tertiary)] truncate">
                            {a.merchant || a.device || 'N/A'} · {a.location || 'Unknown Loc'}
                        </div>
                        {a.amount ? (
                             <div className="text-[10px] text-[var(--text-secondary)]">
                                {data.transaction?.currency || 'MYR'} {a.amount.toLocaleString()} · {a.status}
                             </div>
                        ) : (
                             <div className="text-[10px] text-[var(--text-secondary)] capitalize">{a.status}</div>
                        )}
                    </div>
                    </div>
                );
                })
            ) : (
                <div className="text-[11px] text-[var(--text-tertiary)] text-center py-2">
                    No recent activity found in database (Last 48h).
                </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}