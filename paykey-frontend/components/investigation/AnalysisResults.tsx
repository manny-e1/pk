// import React from 'react';

// export function AnalysisResults() {
//   return (
//     <div className="space-y-6 animate-in fade-in duration-500">
      
//       {/* Anomalies */}
//       <div className="analysis-section">
//         <div className="flex items-center gap-2.5 mb-3">
//           <div className="w-7 h-7 bg-[var(--error-bg)] text-[var(--error)] rounded-md flex items-center justify-center">
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/></svg>
//           </div>
//           <div className="text-[13px] font-semibold text-[var(--text-primary)]">Anomalies Detected</div>
//         </div>
//         <div className="flex flex-col gap-2">
//           {[
//             { badge: 'LOCATION', color: 'text-[var(--purple)] bg-[var(--purple-bg)]', text: 'Transaction from Bangkok while last known location was Kuala Lumpur 5 hours earlier. The 1,200km distance makes this timeline highly suspicious.', severity: 'high', border: 'border-l-[var(--error)]' },
//             { badge: 'AMOUNT', color: 'text-[var(--warning)] bg-[var(--warning-bg)]', text: 'Amount of MYR 4,250 is 23.6x above user\'s average of MYR 179.79 and exceeds historical max of MYR 520.', severity: 'high', border: 'border-l-[var(--error)]' },
//             { badge: 'VELOCITY', color: 'text-[var(--cyan)] bg-[var(--cyan-bg)]', text: '3 transactions totaling MYR 5,590 in 17 minutes vs normal pattern of ~2 per day.', severity: 'medium', border: 'border-l-[var(--warning)]' },
//             { badge: 'MERCHANT', color: 'text-[var(--success)] bg-[var(--success-bg)]', text: 'First electronics purchase. User typically shops at grocery, food delivery.', severity: 'medium', border: 'border-l-[var(--success)]' }
//           ].map((a, i) => (
//             <div key={i} className={`bg-[var(--bg-secondary)] border border-[var(--border-primary)] border-l-[3px] ${a.border} rounded-lg p-3 flex gap-2.5`}>
//               <span className={`h-fit px-2 py-0.5 rounded text-[10px] font-bold uppercase shrink-0 ${a.color}`}>{a.badge}</span>
//               <div>
//                 <div className="text-xs text-[var(--text-primary)] leading-relaxed">{a.text}</div>
//                 <div className="text-[10px] text-[var(--text-tertiary)] mt-1">Severity: {a.severity}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Findings */}
//       <div className="analysis-section">
//         <div className="flex items-center gap-2.5 mb-3">
//           <div className="w-7 h-7 bg-[var(--accent-bg)] text-[var(--accent)] rounded-md flex items-center justify-center"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></div>
//           <div className="text-[13px] font-semibold text-[var(--text-primary)]">Key Findings</div>
//         </div>
//         <div className="grid grid-cols-2 gap-3">
//           <div className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] border-l-[3px] border-l-[var(--error)] rounded-lg p-3">
//             <div className="text-[10px] font-bold text-[var(--error)] uppercase tracking-wide mb-2 flex items-center gap-1.5"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg> SUSPICIOUS</div>
//             <ul className="space-y-1.5">{["Impossible travel: KL to Bangkok in 5 hours", "Transaction 23.6x above average", "3 rapid transactions in 17 minutes", "First-ever electronics purchase"].map((t,i)=><li key={i} className="text-[11px] text-[var(--text-secondary)] flex gap-1.5 leading-snug"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3 text-[var(--error)] flex-shrink-0 mt-[2px]"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/></svg>{t}</li>)}</ul>
//           </div>
//           <div className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] border-l-[3px] border-l-[var(--success)] rounded-lg p-3">
//             <div className="text-[10px] font-bold text-[var(--success)] uppercase tracking-wide mb-2 flex items-center gap-1.5"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> MITIGATING</div>
//             <ul className="space-y-1.5">{["Known device with 234 prior auths", "FIDO2 biometric passed", "Account is 295 days old"].map((t,i)=><li key={i} className="text-[11px] text-[var(--text-secondary)] flex gap-1.5 leading-snug"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3 text-[var(--success)] flex-shrink-0 mt-[2px]"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>{t}</li>)}</ul>
//           </div>
//         </div>
//       </div>

//       {/* Timeline */}
//       <div className="analysis-section">
//         <div className="flex items-center gap-2.5 mb-3">
//           <div className="w-7 h-7 bg-[var(--purple-bg)] text-[var(--purple)] rounded-md flex items-center justify-center"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
//           <div className="text-[13px] font-semibold text-[var(--text-primary)]">Timeline Reconstruction</div>
//         </div>
//         <div className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg p-3.5">
//           <div className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3.5 pb-3.5 border-b border-[var(--border-primary)]">
//             At 09:15, legitimate login from KL. Device appears in Bangkok at 14:15 making rapid purchases. Given travel time requirements, this is physically implausible.
//           </div>
//           <div className="space-y-1">
//             {[
//               { t: '09:15', e: 'Login from Kuala Lumpur', r: 'low', c: 'bg-[var(--success-bg)] text-[var(--success)]' },
//               { t: '14:15', e: 'First Bangkok transaction', r: 'high', c: 'bg-[var(--error-bg)] text-[var(--error)]' },
//               { t: '14:28', e: 'Second transaction', r: 'high', c: 'bg-[var(--error-bg)] text-[var(--error)]' },
//               { t: '14:32', e: 'Large electronics purchase', r: 'critical', c: 'bg-[var(--critical-bg)] text-[var(--critical)]' }
//             ].map((ev, i) => (
//               <div key={i} className="grid grid-cols-[55px_1fr_auto] gap-2.5 items-center p-2 bg-[var(--bg-tertiary)] rounded text-[11px]">
//                 <span className="font-mono text-[10px] text-[var(--text-tertiary)]">{ev.t}</span>
//                 <span className="text-[var(--text-secondary)]">{ev.e}</span>
//                 <span className={`px-1.5 py-0.5 rounded-[10px] text-[9px] font-bold uppercase ${ev.c}`}>{ev.r}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Pattern */}
//       <div className="analysis-section">
//         <div className="flex items-center gap-2.5 mb-3">
//           <div className="w-7 h-7 bg-[var(--warning-bg)] text-[var(--warning)] rounded-md flex items-center justify-center"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg></div>
//           <div className="text-[13px] font-semibold text-[var(--text-primary)]">Attack Pattern</div>
//         </div>
//         <div className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg p-3.5 flex gap-3.5">
//           <div className="w-10 h-10 bg-[var(--warning-bg)] rounded-lg flex items-center justify-center shrink-0">
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-[var(--warning)]"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/></svg>
//           </div>
//           <div>
//             <div className="text-[13px] font-semibold text-[var(--text-primary)] mb-0.5">Device Theft with Coerced Biometric</div>
//             <div className="text-[10px] text-[var(--text-tertiary)] mb-1.5">76% confidence</div>
//             <div className="text-[11px] text-[var(--text-secondary)] leading-snug">Pattern consistent with physical device theft where victim is forced to authenticate, or device stolen while unlocked.</div>
//           </div>
//         </div>
//       </div>

//       {/* Recommended Actions */}
//       <div className="analysis-section">
//         <div className="flex items-center gap-2.5 mb-3">
//           <div className="w-7 h-7 bg-[var(--success-bg)] text-[var(--success)] rounded-md flex items-center justify-center"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg></div>
//           <div className="text-[13px] font-semibold text-[var(--text-primary)]">Recommended Actions</div>
//         </div>
//         <div className="grid grid-cols-2 gap-3">
//           <div className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] border-t-[3px] border-t-[var(--error)] rounded-lg p-3">
//             <div className="text-[10px] font-bold text-[var(--error)] uppercase tracking-wide mb-2.5">IMMEDIATE</div>
//             <div className="space-y-1.5">
//               {['Block', 'Suspend', 'Freeze'].map((a, i) => (
//                 <div key={i} className="flex items-center gap-2 py-1.5 border-b border-[var(--border-primary)] last:border-0">
//                   <button className={`px-2.5 py-1 rounded text-[10px] font-medium text-white ${a === 'Suspend' ? 'bg-[var(--warning)] text-black' : 'bg-[var(--error)]'}`}>{a}</button>
//                   <span className="text-[11px] text-[var(--text-secondary)]">{a} {a === 'Block' ? 'transaction' : a === 'Suspend' ? 'device' : 'account'}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] border-t-[3px] border-t-[var(--accent)] rounded-lg p-3">
//             <div className="text-[10px] font-bold text-[var(--accent)] uppercase tracking-wide mb-2.5">FOLLOW-UP</div>
//             <div className="space-y-1.5">
//               {[{b:'Call User', t:'Contact via phone'}, {b:'Check Reports', t:'Device theft reports'}, {b:'Review CCTV', t:'Merchant footage'}].map((a, i) => (
//                 <div key={i} className="flex items-center gap-2 py-1.5 border-b border-[var(--border-primary)] last:border-0">
//                   <button className="px-2.5 py-1 rounded text-[10px] font-medium bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-primary)]">{a.b}</button>
//                   <span className="text-[11px] text-[var(--text-secondary)]">{a.t}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div className="mt-3 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg p-3">
//           <div className="text-[11px] font-medium text-[var(--text-primary)] mb-1.5 flex items-center gap-1.5">
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3 text-[var(--warning)]"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/></svg>
//             Communication Warning
//           </div>
//           <div className="text-[11px] text-[var(--text-secondary)] leading-snug">Do not send SMS/push to compromised device. Use voice call to landline or emergency contact.</div>
//         </div>
//       </div>

//       {/* Investigation Questions */}
//       <div className="analysis-section">
//         <div className="flex items-center gap-2.5 mb-3">
//           <div className="w-7 h-7 bg-[var(--cyan-bg)] text-[var(--cyan)] rounded-md flex items-center justify-center"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></div>
//           <div className="text-[13px] font-semibold text-[var(--text-primary)]">Investigation Questions</div>
//         </div>
//         <div className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg p-3">
//           {[
//             "Can we verify user's location via other devices?",
//             "Has the MacBook shown recent activity?",
//             "Any support tickets from this user?",
//             "Scheduled travel that explains location?"
//           ].map((q, i) => (
//             <div key={i} className="flex items-start gap-2 py-1.5 border-b border-[var(--border-primary)] last:border-0">
//               <div className="w-5 h-5 bg-[var(--bg-tertiary)] rounded-full flex items-center justify-center text-[10px] font-bold text-[var(--text-tertiary)] shrink-0">{i+1}</div>
//               <div className="text-[11px] text-[var(--text-secondary)] leading-snug">{q}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//     </div>
//   );
// }
'use client';

import React from 'react';
import { InvestigationReport } from '@/types/investigation';

interface Props {
  data: InvestigationReport;
}

export function AnalysisResults({ data }: Props) {
  // Jika data belum ada sama sekali, jangan render apa-apa
  if (!data) return null;

  // Helper untuk styling dinamis Anomaly Badge
  const getAnomalyStyle = (type: string, severity: string) => {
    const s = (severity || 'low').toLowerCase();
    const t = (type || '').toLowerCase();
    
    let color = 'text-[var(--text-secondary)] bg-[var(--bg-tertiary)]';
    let border = 'border-l-[var(--border-primary)]';

    if (t.includes('location')) {
       color = 'text-[var(--purple)] bg-[var(--purple-bg)]';
       border = 'border-l-[var(--error)]'; 
    } else if (t.includes('amount')) {
       color = 'text-[var(--warning)] bg-[var(--warning-bg)]';
       border = s === 'high' ? 'border-l-[var(--error)]' : 'border-l-[var(--warning)]';
    } else if (t.includes('velocity')) {
       color = 'text-[var(--cyan)] bg-[var(--cyan-bg)]';
       border = 'border-l-[var(--warning)]';
    } else if (t.includes('merchant')) {
       color = 'text-[var(--success)] bg-[var(--success-bg)]';
       border = 'border-l-[var(--success)]';
    } else if (t.includes('device')) {
        color = 'text-[var(--accent)] bg-[var(--accent-bg)]';
        border = 'border-l-[var(--error)]';
    }

    return { color, border };
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      
      {/* 1. Anomalies */}
      <div className="analysis-section">
        <div className="flex items-center gap-2.5 mb-3">
          <div className="w-7 h-7 bg-[var(--error-bg)] text-[var(--error)] rounded-md flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/></svg>
          </div>
          <div className="text-[13px] font-semibold text-[var(--text-primary)]">Anomalies Detected</div>
        </div>
        <div className="flex flex-col gap-2">
          {/* SAFE GUARD: (data.anomalies_detected || []) */}
          {(data.anomalies_detected || []).map((a, i) => {
            const style = getAnomalyStyle(a.type, a.severity);
            return (
              <div key={i} className={`bg-[var(--bg-secondary)] border border-[var(--border-primary)] border-l-[3px] ${style.border} rounded-lg p-3 flex gap-2.5`}>
                <span className={`h-fit px-2 py-0.5 rounded text-[10px] font-bold uppercase shrink-0 ${style.color}`}>{a.type}</span>
                <div>
                  <div className="text-xs text-[var(--text-primary)] leading-relaxed">{a.description}</div>
                  <div className="text-[10px] text-[var(--text-tertiary)] mt-1">Severity: {a.severity}</div>
                </div>
              </div>
            );
          })}
          {(!data.anomalies_detected || data.anomalies_detected.length === 0) && (
              <div className="text-xs text-[var(--text-tertiary)] italic px-2">No specific anomalies detected.</div>
          )}
        </div>
      </div>

      {/* 2. Findings */}
      <div className="analysis-section">
        <div className="flex items-center gap-2.5 mb-3">
          <div className="w-7 h-7 bg-[var(--accent-bg)] text-[var(--accent)] rounded-md flex items-center justify-center"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></div>
          <div className="text-[13px] font-semibold text-[var(--text-primary)]">Key Findings</div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] border-l-[3px] border-l-[var(--error)] rounded-lg p-3">
            <div className="text-[10px] font-bold text-[var(--error)] uppercase tracking-wide mb-2 flex items-center gap-1.5"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg> SUSPICIOUS</div>
            {/* SAFE GUARD */}
            <ul className="space-y-1.5">{(data.key_findings?.suspicious || []).map((t,i)=><li key={i} className="text-[11px] text-[var(--text-secondary)] flex gap-1.5 leading-snug"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3 text-[var(--error)] flex-shrink-0 mt-[2px]"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/></svg>{t}</li>)}</ul>
          </div>
          <div className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] border-l-[3px] border-l-[var(--success)] rounded-lg p-3">
            <div className="text-[10px] font-bold text-[var(--success)] uppercase tracking-wide mb-2 flex items-center gap-1.5"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> MITIGATING</div>
            {/* SAFE GUARD */}
            <ul className="space-y-1.5">{(data.key_findings?.mitigating || []).map((t,i)=><li key={i} className="text-[11px] text-[var(--text-secondary)] flex gap-1.5 leading-snug"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3 text-[var(--success)] flex-shrink-0 mt-[2px]"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>{t}</li>)}</ul>
          </div>
        </div>
      </div>

      {/* 3. Timeline */}
      <div className="analysis-section">
        <div className="flex items-center gap-2.5 mb-3">
          <div className="w-7 h-7 bg-[var(--purple-bg)] text-[var(--purple)] rounded-md flex items-center justify-center"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
          <div className="text-[13px] font-semibold text-[var(--text-primary)]">Timeline Reconstruction</div>
        </div>
        <div className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg p-3.5">
          <div className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3.5 pb-3.5 border-b border-[var(--border-primary)]">
            {data.timeline_analysis?.reconstruction || "Timeline data not available."}
          </div>
          <div className="space-y-1">
            {/* SAFE GUARD */}
            {(data.timeline_analysis?.events || []).map((ev, i) => {
              let riskClass = 'bg-[var(--bg-tertiary)] text-[var(--text-tertiary)]';
              const risk = (ev.risk || '').toLowerCase();
              if (risk === 'critical') riskClass = 'bg-[var(--critical-bg)] text-[var(--critical)]';
              if (risk === 'high') riskClass = 'bg-[var(--error-bg)] text-[var(--error)]';
              if (risk === 'medium') riskClass = 'bg-[var(--warning-bg)] text-[var(--warning)]';
              if (risk === 'low') riskClass = 'bg-[var(--success-bg)] text-[var(--success)]';

              return (
                <div key={i} className="grid grid-cols-[55px_1fr_auto] gap-2.5 items-center p-2 bg-[var(--bg-tertiary)] rounded text-[11px]">
                  <span className="font-mono text-[10px] text-[var(--text-tertiary)]">{ev.time}</span>
                  <span className="text-[var(--text-secondary)]">{ev.event}</span>
                  <span className={`px-1.5 py-0.5 rounded-[10px] text-[9px] font-bold uppercase ${riskClass}`}>{ev.risk || 'INFO'}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 4. Pattern */}
      <div className="analysis-section">
        <div className="flex items-center gap-2.5 mb-3">
          <div className="w-7 h-7 bg-[var(--warning-bg)] text-[var(--warning)] rounded-md flex items-center justify-center"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg></div>
          <div className="text-[13px] font-semibold text-[var(--text-primary)]">Attack Pattern</div>
        </div>
        <div className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg p-3.5 flex gap-3.5">
          <div className="w-10 h-10 bg-[var(--warning-bg)] rounded-lg flex items-center justify-center shrink-0">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-[var(--warning)]"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/></svg>
          </div>
          <div>
            <div className="text-[13px] font-semibold text-[var(--text-primary)] mb-0.5">{data.pattern_match?.pattern_name || "Unknown Pattern"}</div>
            <div className="text-[10px] text-[var(--text-tertiary)] mb-1.5">{data.pattern_match?.confidence || 0}% confidence</div>
            <div className="text-[11px] text-[var(--text-secondary)] leading-snug">{data.pattern_match?.description || "No description available."}</div>
          </div>
        </div>
      </div>

      {/* 5. Recommended Actions */}
      <div className="analysis-section">
        <div className="flex items-center gap-2.5 mb-3">
          <div className="w-7 h-7 bg-[var(--success-bg)] text-[var(--success)] rounded-md flex items-center justify-center"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg></div>
          <div className="text-[13px] font-semibold text-[var(--text-primary)]">Recommended Actions</div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] border-t-[3px] border-t-[var(--error)] rounded-lg p-3">
            <div className="text-[10px] font-bold text-[var(--error)] uppercase tracking-wide mb-2.5">IMMEDIATE</div>
            <div className="space-y-1.5">
              {/* SAFE GUARD */}
              {(data.recommended_actions?.immediate || []).map((a, i) => (
                <div key={i} className="flex items-center gap-2 py-1.5 border-b border-[var(--border-primary)] last:border-0">
                  <button className={`px-2.5 py-1 rounded text-[10px] font-medium text-white ${a.toLowerCase().includes('suspend') ? 'bg-[var(--warning)] text-black' : 'bg-[var(--error)]'}`}>
                    {a.split(' ')[0]}
                  </button>
                  <span className="text-[11px] text-[var(--text-secondary)]">{a}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] border-t-[3px] border-t-[var(--accent)] rounded-lg p-3">
            <div className="text-[10px] font-bold text-[var(--accent)] uppercase tracking-wide mb-2.5">FOLLOW-UP</div>
            <div className="space-y-1.5">
              {/* SAFE GUARD */}
              {(data.recommended_actions?.followup || []).map((a, i) => (
                <div key={i} className="flex items-center gap-2 py-1.5 border-b border-[var(--border-primary)] last:border-0">
                  <button className="px-2.5 py-1 rounded text-[10px] font-medium bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-primary)]">
                    Action
                  </button>
                  <span className="text-[11px] text-[var(--text-secondary)]">{a}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {data.recommended_actions?.user_communication && (
            <div className="mt-3 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg p-3">
            <div className="text-[11px] font-medium text-[var(--text-primary)] mb-1.5 flex items-center gap-1.5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3 text-[var(--warning)]"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/></svg>
                Communication Warning
            </div>
            <div className="text-[11px] text-[var(--text-secondary)] leading-snug">{data.recommended_actions.user_communication}</div>
            </div>
        )}
      </div>

      {/* 6. Investigation Questions (FIX FOR THE ERROR) */}
      <div className="analysis-section">
        <div className="flex items-center gap-2.5 mb-3">
          <div className="w-7 h-7 bg-[var(--cyan-bg)] text-[var(--cyan)] rounded-md flex items-center justify-center"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></div>
          <div className="text-[13px] font-semibold text-[var(--text-primary)]">Investigation Questions</div>
        </div>
        <div className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg p-3">
          {/* SAFE GUARD: Gunakan ( ... || []) untuk mencegah map on undefined */}
          {(data.investigation_questions || []).map((q, i) => (
            <div key={i} className="flex items-start gap-2 py-1.5 border-b border-[var(--border-primary)] last:border-0">
              <div className="w-5 h-5 bg-[var(--bg-tertiary)] rounded-full flex items-center justify-center text-[10px] font-bold text-[var(--text-tertiary)] shrink-0">{i+1}</div>
              <div className="text-[11px] text-[var(--text-secondary)] leading-snug">{q}</div>
            </div>
          ))}
          {(!data.investigation_questions || data.investigation_questions.length === 0) && (
              <div className="text-xs text-[var(--text-tertiary)] italic px-2">No additional investigation questions generated.</div>
          )}
        </div>
      </div>

    </div>
  );
}