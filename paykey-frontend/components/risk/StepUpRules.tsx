// 'use client';

// // Helper Components (Sama persis)
// const Toggle = ({ active, onClick }: { active: boolean, onClick: () => void }) => (
//   <div onClick={onClick} className={`relative w-11 h-6 rounded-full cursor-pointer transition-colors border border-[var(--border-primary)] ${active ? 'bg-[var(--accent)] border-[var(--accent)]' : 'bg-[var(--bg-tertiary)]'}`}>
//     <div className={`absolute top-[1px] left-[1px] w-[20px] h-[20px] bg-[var(--text-primary)] rounded-full transition-all ${active ? 'translate-x-[20px]' : ''}`}></div>
//   </div>
// );

// const WeightPills = ({ selected, onChange }: { selected: number, onChange: (v: number) => void }) => {
//   const options = [10, 20, 30, 40, 50];
//   return (
//     <div className="flex gap-2 flex-wrap">
//       {options.map(val => (
//         <button key={val} onClick={() => onChange(val)} className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[20px] text-[12px] font-medium border transition-all ${selected === val ? 'bg-[var(--accent)] border-[var(--accent)] text-white' : 'bg-[var(--bg-tertiary)] border-[var(--border-primary)] text-[var(--text-primary)] hover:border-[var(--accent)]'}`}>
//           +<span className="font-mono bg-black/20 px-1.5 rounded-[10px]">{val}</span>
//         </button>
//       ))}
//     </div>
//   );
// };

// // Interface Props Baru (Logic Injection)
// interface StepUpRulesProps {
//   rules?: any[];
//   onChange?: (updatedRules: any[]) => void;
// }

// export function StepUpRules({ rules = [], onChange }: StepUpRulesProps) {
  
//   // Logic Update (Hanya bekerja jika onChange tersedia)
//   const updateRule = (type: string, field: string, value: any) => {
//     if (!onChange) return;
//     const newRules = rules.map(r => {
//       if (r.ruleType === type) {
//         if (field === 'isActive' || field === 'weight') return { ...r, [field]: value };
//         return { ...r, parameters: { ...r.parameters, [field]: value } };
//       }
//       return r;
//     });
//     onChange(newRules);
//   };

//   const getRule = (type: string) => rules.find(r => r.ruleType === type) || { isActive: false, parameters: {}, weight: 0 };

//   const renderRuleCard = (type: string, label: string, desc: string, icon: any, children: any) => {
//     const rule = getRule(type);
//     return (
//         <div className={`bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-lg)] p-4 transition-all mb-3 ${rule.isActive ? 'hover:border-[var(--accent)]' : 'opacity-60'}`}>
//             <div className="flex items-start justify-between mb-3">
//                 <div>
//                     <div className="text-[14px] font-semibold text-[var(--text-primary)] flex items-center gap-2 mb-1">
//                         {icon}
//                         {label}
//                     </div>
//                     <div className="text-[12px] text-[var(--text-tertiary)]">{desc}</div>
//                 </div>
//                 <Toggle active={rule.isActive} onClick={() => updateRule(type, 'isActive', !rule.isActive)} />
//             </div>
//             {rule.isActive && (
//                 <div className="mt-3 pt-3 border-t border-[var(--border-secondary)] space-y-3">
//                     <div className="flex items-center gap-3">
//                         <span className="text-[12px] text-[var(--text-tertiary)] min-w-[120px]">Risk Score Weight</span>
//                         <WeightPills selected={rule.weight} onChange={(v) => updateRule(type, 'weight', v)} />
//                     </div>
//                     {children}
//                 </div>
//             )}
//         </div>
//     );
//   };

//   // UI JSX TETAP SAMA 100%
//   return (
//     <div className="bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-[var(--radius-lg)] overflow-hidden mb-6">
//       <div className="p-5 border-b border-[var(--border-secondary)] flex items-center justify-between">
//         <div>
//           <div className="text-[14px] font-semibold flex items-center gap-2 text-[var(--text-primary)]">
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[var(--accent)]"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
//             Step-up Authentication Rules
//           </div>
//           <div className="text-[12px] text-[var(--text-tertiary)] mt-0.5">Configure conditions that trigger elevated authentication</div>
//         </div>
//       </div>

//       <div className="p-5 flex flex-col gap-3">
        
//         {renderRuleCard('AMOUNT', 'Payment Amount Threshold', 'Trigger step-up when payment amount exceeds configured threshold', 
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px] text-[var(--accent)]"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
//             <>
//               <div className="flex items-center gap-3">
//                 <span className="text-[12px] text-[var(--text-tertiary)] min-w-[120px]">Threshold Amount</span>
//                 <div className="flex items-center bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] overflow-hidden max-w-[200px]">
//                   <input type="number" 
//                     className="w-full bg-transparent text-[var(--text-primary)] text-[13px] font-mono px-3 py-1.5 outline-none" 
//                     value={getRule('AMOUNT').parameters?.amountThreshold || 0}
//                     onChange={(e) => updateRule('AMOUNT', 'amountThreshold', parseInt(e.target.value))}
//                   />
//                   <span className="px-3 py-1.5 bg-[var(--bg-hover)] text-[var(--text-tertiary)] text-[12px] border-l border-[var(--border-primary)]">USD</span>
//                 </div>
//               </div>
//               <div className="flex items-center gap-3">
//                 <span className="text-[12px] text-[var(--text-tertiary)] min-w-[120px]">Tiered Scoring</span>
//                 <div className="flex items-center gap-3">
//                     <Toggle active={true} onClick={()=>{}} />
//                     <span className="text-[12px] text-[var(--text-tertiary)]">Scale weight by amount</span>
//                 </div>
//               </div>
//             </>
//         )}

//         {renderRuleCard('BENEFICIARY', 'New Beneficiary', 'Trigger step-up for payments to recipients not seen before',
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px] text-[var(--accent)]"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>,
//             <div className="flex items-center gap-3">
//                 <span className="text-[12px] text-[var(--text-tertiary)] min-w-[120px]">Trust After</span>
//                 <div className="flex items-center bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] overflow-hidden max-w-[200px]">
//                   <input type="number" 
//                     className="w-full bg-transparent text-[var(--text-primary)] text-[13px] font-mono px-3 py-1.5 outline-none" 
//                     value={getRule('BENEFICIARY').parameters?.trustCount || 3}
//                     onChange={(e) => updateRule('BENEFICIARY', 'trustCount', parseInt(e.target.value))}
//                   />
//                   <span className="px-3 py-1.5 bg-[var(--bg-hover)] text-[var(--text-tertiary)] text-[12px] border-l border-[var(--border-primary)]">transactions</span>
//                 </div>
//             </div>
//         )}

//         {renderRuleCard('NEW_DEVICE', 'First Payment from Device', 'Trigger step-up for the first payment attempt from an unrecognized device',
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px] text-[var(--accent)]"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>,
//             <div className="flex items-center gap-3">
//                 <span className="text-[12px] text-[var(--text-tertiary)] min-w-[120px]">Device Trust Period</span>
//                 <div className="flex items-center bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] overflow-hidden max-w-[200px]">
//                   <input type="number" 
//                      className="w-full bg-transparent text-[var(--text-primary)] text-[13px] font-mono px-3 py-1.5 outline-none" 
//                      value={getRule('NEW_DEVICE').parameters?.days || 90}
//                      onChange={(e) => updateRule('NEW_DEVICE', 'days', parseInt(e.target.value))}
//                   />
//                   <span className="px-3 py-1.5 bg-[var(--bg-hover)] text-[var(--text-tertiary)] text-[12px] border-l border-[var(--border-primary)]">days</span>
//                 </div>
//             </div>
//         )}

//         {renderRuleCard('GEO_ANOMALY', 'Geographic Anomaly', 'Trigger step-up when payment originates from unexpected country or region',
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px] text-[var(--accent)]"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
//             <>
//                 <div className="flex items-center gap-3">
//                     <span className="text-[12px] text-[var(--text-tertiary)] min-w-[120px]">Detection Level</span>
//                     <select 
//                         className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] text-[var(--text-primary)] text-[12px] rounded-[var(--radius-md)] px-3 py-1.5 w-[200px] outline-none"
//                         value={getRule('GEO_ANOMALY').parameters?.level || 'country'}
//                         onChange={(e) => updateRule('GEO_ANOMALY', 'level', e.target.value)}
//                     >
//                         <option value="country">Country change</option>
//                         <option value="region">Region change</option>
//                         <option value="city">City change</option>
//                     </select>
//                 </div>
//                 <div className="flex items-center gap-3">
//                     <span className="text-[12px] text-[var(--text-tertiary)] min-w-[120px]">VPN/Proxy</span>
//                     <div className="flex items-center gap-3">
//                         <Toggle active={false} onClick={()=>{}} />
//                         <span className="text-[12px] text-[var(--text-tertiary)]">Add +15 for VPN/Proxy</span>
//                     </div>
//                 </div>
//             </>
//         )}

//         {renderRuleCard('DORMANT', 'Dormant Account Reactivation', 'Trigger step-up when an inactive account suddenly becomes active',
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px] text-[var(--accent)]"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
//             <div className="flex items-center gap-3">
//                 <span className="text-[12px] text-[var(--text-tertiary)] min-w-[120px]">Inactivity Threshold</span>
//                 <div className="flex items-center bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] overflow-hidden max-w-[200px]">
//                   <input type="number" 
//                     className="w-full bg-transparent text-[var(--text-primary)] text-[13px] font-mono px-3 py-1.5 outline-none" 
//                     value={getRule('DORMANT').parameters?.days || 180}
//                     onChange={(e) => updateRule('DORMANT', 'days', parseInt(e.target.value))}
//                   />
//                   <span className="px-3 py-1.5 bg-[var(--bg-hover)] text-[var(--text-tertiary)] text-[12px] border-l border-[var(--border-primary)]">days</span>
//                 </div>
//             </div>
//         )}

//       </div>
//     </div>
//   );
// }

'use client';

import React, { useEffect } from 'react';

// --- HELPER COMPONENTS (Ditaruh disini agar tidak error import) ---

const Toggle = ({ active, onClick }: { active: boolean, onClick: () => void }) => (
  <div onClick={onClick} className={`relative w-11 h-6 rounded-full cursor-pointer transition-colors border border-[var(--border-primary)] ${active ? 'bg-[var(--accent)] border-[var(--accent)]' : 'bg-[var(--bg-tertiary)]'}`}>
    <div className={`absolute top-[1px] left-[1px] w-[20px] h-[20px] bg-[var(--text-primary)] rounded-full transition-all ${active ? 'translate-x-[20px]' : ''}`}></div>
  </div>
);

const WeightPills = ({ selected, onChange }: { selected: number, onChange: (v: number) => void }) => {
  const options = [10, 20, 30, 40, 50];
  return (
    <div className="flex gap-2 flex-wrap">
      {options.map(val => (
        <button 
            key={val} 
            type="button" // PENTING: agar tidak submit form
            onClick={() => onChange(val)} 
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[20px] text-[12px] font-medium border transition-all ${selected === val ? 'bg-[var(--accent)] border-[var(--accent)] text-white' : 'bg-[var(--bg-tertiary)] border-[var(--border-primary)] text-[var(--text-primary)] hover:border-[var(--accent)]'}`}
        >
          <span className="font-mono">+{val}</span>
        </button>
      ))}
    </div>
  );
};

// --- MAIN COMPONENT ---

interface StepUpRulesProps {
  rules: any[];
  onChange: (updatedRules: any[]) => void;
}

export function StepUpRules({ rules = [], onChange }: StepUpRulesProps) {
  
  // Debugging: Pastikan data masuk
  useEffect(() => {
    console.log("StepUpRules Rendered with:", rules);
  }, [rules]);

  // Fungsi Update Data
  const updateRule = (type: string, field: string, value: any) => {
    // Clone array agar state React terdeteksi berubah
    const newRules = JSON.parse(JSON.stringify(rules)); 
    
    const index = newRules.findIndex((r: any) => r.ruleType === type);

    if (index === -1) {
        // Jika rule belum ada, buat baru
        const newRule = { ruleType: type, isActive: false, weight: 20, parameters: {} };
        if (field === 'isActive' || field === 'weight') (newRule as any)[field] = value;
        else (newRule as any).parameters = { [field]: value };
        newRules.push(newRule);
    } else {
        // Update existing
        if (field === 'isActive' || field === 'weight') {
            newRules[index][field] = value;
        } else {
            newRules[index].parameters = { ...newRules[index].parameters, [field]: value };
        }
    }
    onChange(newRules);
  };

  // Helper Get Rule (Aman dari crash)
  const getRule = (type: string) => {
    // Trim dan UpperCase untuk memastikan cocok dengan DB
    return rules.find(r => r.ruleType?.trim().toUpperCase() === type) || { isActive: false, parameters: {}, weight: 20 };
  };

  // Renderer Kartu
  const renderRuleCard = (type: string, label: string, desc: string, icon: any, children: any) => {
    const rule = getRule(type);
    const isActive = rule.isActive || false;
    const weight = rule.weight || 20;

    return (
        <div className={`bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-lg)] p-4 transition-all mb-3 ${isActive ? 'hover:border-[var(--accent)]' : 'opacity-60'}`}>
            <div className="flex items-start justify-between mb-3">
                <div>
                    <div className="text-[14px] font-semibold text-[var(--text-primary)] flex items-center gap-2 mb-1">
                        {icon}
                        {label}
                        {/* Indikator visual jika data tersambung DB */}
                        {rule.id && <span className="w-2 h-2 rounded-full bg-green-500" title="Sync with DB"></span>}
                    </div>
                    <div className="text-[12px] text-[var(--text-tertiary)]">{desc}</div>
                </div>
                <Toggle active={isActive} onClick={() => updateRule(type, 'isActive', !isActive)} />
            </div>
            {isActive && (
                <div className="mt-3 pt-3 border-t border-[var(--border-secondary)] space-y-3">
                    <div className="flex items-center gap-3">
                        <span className="text-[12px] text-[var(--text-tertiary)] min-w-[120px]">Risk Score Weight</span>
                        <WeightPills selected={weight} onChange={(v) => updateRule(type, 'weight', v)} />
                    </div>
                    {children}
                </div>
            )}
            {isActive && type === 'GEO_ANOMALY' && (
              <div className="mt-3 pt-3 border-t border-[var(--border-secondary)] space-y-3">
                <div className="flex items-center gap-3">
                        <span className="text-[12px] text-[var(--text-tertiary)] min-w-[120px]">VPN/Proxy Detection</span>
                        <Toggle active={getRule('GEO_ANOMALY').parameters?.detectVPN || false} onClick={() => updateRule('GEO_ANOMALY', 'detectVPN', !getRule('GEO_ANOMALY').parameters?.detectVPN)} />
                        <span className="text-[12px] text-[var(--text-tertiary)]">Add +15 for VPN/Proxy</span>
                    </div>
              </div>
            )}
            
        </div>
    );
  };

  return (
    <div className="bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-[var(--radius-lg)] overflow-hidden mb-6">
      <div className="p-5 border-b border-[var(--border-secondary)] flex items-center justify-between">
        <div>
          <div className="text-[14px] font-semibold flex items-center gap-2 text-[var(--text-primary)]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[var(--accent)]"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            Step-up Authentication Rules
          </div>
          <div className="text-[12px] text-[var(--text-tertiary)] mt-0.5">Configure conditions that trigger elevated authentication</div>
        </div>
      </div>

      <div className="p-5 flex flex-col gap-3">
        
        {/* RULE 1: AMOUNT */}
        {renderRuleCard('AMOUNT', 'Payment Amount Threshold', 'Trigger step-up when payment amount exceeds threshold', 
            <span>💰</span>,
            <div className="flex items-center gap-3">
                <span className="text-[12px] text-[var(--text-tertiary)] min-w-[120px]">Threshold Amount</span>
                <div className="flex items-center bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] overflow-hidden max-w-[200px]">
                  <input type="number" 
                    className="w-full bg-transparent text-[var(--text-primary)] text-[13px] font-mono px-3 py-1.5 outline-none" 
                    value={getRule('AMOUNT').parameters?.amountThreshold || 0}
                    onChange={(e) => updateRule('AMOUNT', 'amountThreshold', parseInt(e.target.value))}
                  />
                  <span className="px-3 py-1.5 bg-[var(--bg-hover)] text-[var(--text-tertiary)] text-[12px] border-l border-[var(--border-primary)]">MYR</span>
                </div>
            </div>
        )}

        {/* RULE 2: NEW DEVICE */}
        {renderRuleCard('NEW_DEVICE', 'First Payment from Device', 'Trigger step-up for first payment from unrecognized device',
            <span>📱</span>,
            <div className="flex items-center gap-3">
                <span className="text-[12px] text-[var(--text-tertiary)] min-w-[120px]">Trust Period</span>
                <div className="flex items-center bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] overflow-hidden max-w-[200px]">
                  <input type="number" 
                     className="w-full bg-transparent text-[var(--text-primary)] text-[13px] font-mono px-3 py-1.5 outline-none" 
                     value={getRule('NEW_DEVICE').parameters?.days || 90}
                     onChange={(e) => updateRule('NEW_DEVICE', 'days', parseInt(e.target.value))}
                  />
                  <span className="px-3 py-1.5 bg-[var(--bg-hover)] text-[var(--text-tertiary)] text-[12px] border-l border-[var(--border-primary)]">days</span>
                </div>
            </div>
        )}

        {/* RULE 2: VELOCITY LIMIT (BARU DITAMBAHKAN) */}
        {renderRuleCard('VELOCITY_LIMIT', 'High Frequency', 'Detect if user makes too many transactions in a short time window.',
            <span>⚡</span>,
            <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                    <span className="text-[12px] text-[var(--text-tertiary)] min-w-[120px]">Max Transactions</span>
                    <div className="flex items-center bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] overflow-hidden w-[200px] focus-within:border-[var(--accent)] transition-colors">
                        <input type="number"
                            className="w-full bg-transparent text-[var(--text-primary)] text-[13px] font-mono px-3 py-1.5 outline-none"
                            value={getRule('VELOCITY_LIMIT').parameters?.maxCount || 5}
                            onChange={(e) => updateRule('VELOCITY_LIMIT', 'maxCount', parseInt(e.target.value))}
                        />
                        <span className="px-3 py-1.5 bg-[var(--bg-hover)] text-[var(--text-tertiary)] text-[11px] font-medium border-l border-[var(--border-primary)]">count</span>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-[12px] text-[var(--text-tertiary)] min-w-[120px]">Time Window</span>
                    <div className="flex items-center bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] overflow-hidden w-[200px] focus-within:border-[var(--accent)] transition-colors">
                        <input type="number"
                            className="w-full bg-transparent text-[var(--text-primary)] text-[13px] font-mono px-3 py-1.5 outline-none"
                            value={getRule('VELOCITY_LIMIT').parameters?.windowMinutes || 10}
                            onChange={(e) => updateRule('VELOCITY_LIMIT', 'windowMinutes', parseInt(e.target.value))}
                        />
                        <span className="px-3 py-1.5 bg-[var(--bg-hover)] text-[var(--text-tertiary)] text-[11px] font-medium border-l border-[var(--border-primary)]">minutes</span>
                    </div>
                </div>
                <p className="text-[11px] text-[var(--text-tertiary)] italic ml-[132px]">
                   Example: Allow max 5 transactions every 10 minutes.
                </p>
            </div>
        )}

        {/* RULE 3: GEO ANOMALY */}
        {renderRuleCard('GEO_ANOMALY', 'Geographic Anomaly', 'Trigger step-up when payment originates from unexpected location',
            <span>🌍</span>,
            <div className="flex items-center gap-3">
                <span className="text-[12px] text-[var(--text-tertiary)] min-w-[120px]">Detection Level</span>
                <select 
                    className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] text-[var(--text-primary)] text-[12px] rounded-[var(--radius-md)] px-3 py-1.5 w-[200px] outline-none"
                    value={getRule('GEO_ANOMALY').parameters?.level || 'country'}
                    onChange={(e) => updateRule('GEO_ANOMALY', 'level', e.target.value)}
                >
                    <option value="country">Country change</option>
                    <option value="region">Region change</option>
                </select>
            </div>
        )}

        {/* RULE 4: BENEFICIARY */}
        {renderRuleCard('BENEFICIARY', 'New Beneficiary', 'Trigger step-up for payments to new recipients',
            <span>👤</span>,
            <div className="flex items-center gap-3">
                <span className="text-[12px] text-[var(--text-tertiary)] min-w-[120px]">Trust After</span>
                <div className="flex items-center bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] overflow-hidden max-w-[200px]">
                  <input type="number" 
                    className="w-full bg-transparent text-[var(--text-primary)] text-[13px] font-mono px-3 py-1.5 outline-none" 
                    value={getRule('BENEFICIARY').parameters?.trustCount || 3}
                    onChange={(e) => updateRule('BENEFICIARY', 'trustCount', parseInt(e.target.value))}
                  />
                  <span className="px-3 py-1.5 bg-[var(--bg-hover)] text-[var(--text-tertiary)] text-[12px] border-l border-[var(--border-primary)]">transactions</span>
                </div>
            </div>
        )}

        {/* RULE 5: DORMANT */}
        {renderRuleCard('DORMANT', 'Dormant Account', 'Trigger step-up for inactive accounts',
            <span>💤</span>,
            <div className="flex items-center gap-3">
                <span className="text-[12px] text-[var(--text-tertiary)] min-w-[120px]">Inactivity Days</span>
                <div className="flex items-center bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] overflow-hidden max-w-[200px]">
                  <input type="number" 
                    className="w-full bg-transparent text-[var(--text-primary)] text-[13px] font-mono px-3 py-1.5 outline-none" 
                    value={getRule('DORMANT').parameters?.days || 180}
                    onChange={(e) => updateRule('DORMANT', 'days', parseInt(e.target.value))}
                  />
                  <span className="px-3 py-1.5 bg-[var(--bg-hover)] text-[var(--text-tertiary)] text-[12px] border-l border-[var(--border-primary)]">days</span>
                </div>
            </div>
        )}

      </div>
    </div>
  );
}