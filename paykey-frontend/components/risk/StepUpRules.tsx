'use client';

import React, { useEffect } from 'react';

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
        <button key={val} type="button" onClick={() => onChange(val)} className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[20px] text-[12px] font-medium border transition-all ${selected === val ? 'bg-[var(--accent)] border-[var(--accent)] text-white' : 'bg-[var(--bg-tertiary)] border-[var(--border-primary)] text-[var(--text-primary)] hover:border-[var(--accent)]'}`}>
          <span className="font-mono">+{val}</span>
        </button>
      ))}
    </div>
  );
};

export function StepUpRules({ rules = [], onChange }: { rules: any[], onChange: (rules: any[]) => void }) {
  
  const updateRule = (type: string, field: string, value: any) => {
    const newRules = JSON.parse(JSON.stringify(rules)); 
    const index = newRules.findIndex((r: any) => r.ruleType === type);

    if (index === -1) {
        const newRule = { ruleType: type, isActive: false, weight: 20, parameters: {} };
        if (field === 'isActive' || field === 'weight') (newRule as any)[field] = value;
        else (newRule as any).parameters = { [field]: value };
        newRules.push(newRule);
    } else {
        if (field === 'isActive' || field === 'weight') newRules[index][field] = value;
        else newRules[index].parameters = { ...newRules[index].parameters, [field]: value };
    }
    onChange(newRules);
  };

  const getRule = (type: string) => rules.find(r => r.ruleType?.trim().toUpperCase() === type) || { isActive: false, parameters: {}, weight: 20 };

  const handleNumberInput = (type: string, paramKey: string, rawValue: string) => {
    if (rawValue === '') {
        updateRule(type, paramKey, ''); 
        return;
    }
    const val = parseInt(rawValue);
    if (!isNaN(val)) updateRule(type, paramKey, Math.max(1, val)); 
  };

  const renderRuleCard = (type: string, label: string, desc: string, icon: any, children: any, hidePills: boolean = false) => {
    const rule = getRule(type);
    const isActive = rule.isActive || false;
    return (
        <div className={`bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-lg)] p-4 transition-all mb-3 ${isActive ? 'hover:border-[var(--accent)]' : 'opacity-60'}`}>
            <div className="flex items-start justify-between mb-3">
                <div>
                    <div className="text-[14px] font-semibold text-[var(--text-primary)] flex items-center gap-2 mb-1">
                        {icon}{label}
                        {rule.id && <span className="w-2 h-2 rounded-full bg-green-500" title="Sync with DB"></span>}
                    </div>
                    <div className="text-[12px] text-[var(--text-tertiary)]">{desc}</div>
                </div>
                <Toggle active={isActive} onClick={() => updateRule(type, 'isActive', !isActive)} />
            </div>
            {isActive && (
                <div className="mt-3 pt-3 border-t border-[var(--border-secondary)] space-y-4">
                    {!hidePills && (
                        <div className="flex items-center gap-3">
                            <span className="text-[12px] text-[var(--text-tertiary)] min-w-[120px]">Risk Score Weight</span>
                            <WeightPills selected={rule.weight || 20} onChange={(v) => updateRule(type, 'weight', v)} />
                        </div>
                    )}
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


  const amountRule = getRule('AMOUNT');
  const tiers = amountRule.parameters?.tiers || [
      { min: 0, max: 1000, score: 10 }, 
      { min: 1001, max: 5000, score: 30 },
      { min: 5001, max: 10000, score: 50 }
  ];

  const updateTier = (idx: number, field: string, val: string) => {
      const newTiers = [...tiers];
      newTiers[idx][field] = parseInt(val) || 0;
      updateRule('AMOUNT', 'tiers', newTiers);
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
        
        {renderRuleCard('AMOUNT', 'Payment Amount Threshold', 'Trigger step-up when payment amount exceeds threshold', 
            <span>💰</span>,
            <div className="space-y-4">
                {tiers.map((t: any, i: number) => (
                    <div key={i} className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <input type="number" className="w-[80px] bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[6px] px-3 py-1.5 text-[13px] font-mono outline-none focus:border-[var(--accent)] transition-colors" value={t.min} onChange={(e) => updateTier(i, 'min', e.target.value)} />
                            <span className="text-[12px] text-[var(--text-tertiary)]">to</span>
                            <input type="number" className="w-[80px] bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[6px] px-3 py-1.5 text-[13px] font-mono outline-none focus:border-[var(--accent)] transition-colors" value={t.max} onChange={(e) => updateTier(i, 'max', e.target.value)} />
                        </div>
                        
                        <div className="flex-1 flex items-center px-4">
                            <input 
                                type="range" 
                                className="slider w-full" 
                                min="0" 
                                max="100" 
                                value={t.score} 
                                onChange={(e) => updateTier(i, 'score', e.target.value)}
                            />
                        </div>
                        
                        <div className="flex items-center gap-2 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[6px] px-3 py-1.5 focus-within:border-[var(--accent)] transition-colors">
                            <span className="text-[13px] font-mono text-[var(--text-tertiary)]">+</span>
                            <input type="number" className="w-[40px] bg-transparent text-[13px] font-mono outline-none" value={t.score} onChange={(e) => updateTier(i, 'score', e.target.value)} />
                        </div>
                    </div>
                ))}
            </div>,
            true 
        )}

  
        {renderRuleCard('NEW_DEVICE', 'First Payment from Device', 'Trigger step-up for first payment from unrecognized device', <span>📱</span>,
            <div className="flex items-center gap-3">
                <span className="text-[12px] text-[var(--text-tertiary)] min-w-[120px]">Trust Period</span>
                <div className="flex items-center bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] overflow-hidden max-w-[200px]">
                  <input type="number" min="1" className="w-full bg-transparent px-3 py-1.5 text-[13px] font-mono outline-none" 
                     value={getRule('NEW_DEVICE').parameters?.days ?? 90}
                     onChange={(e) => handleNumberInput('NEW_DEVICE', 'days', e.target.value)} />
                  <span className="px-3 py-1.5 bg-[var(--bg-hover)] text-[var(--text-tertiary)] text-[12px] border-l border-[var(--border-primary)]">days</span>
                </div>
            </div>
        )}

    
        {renderRuleCard('VELOCITY_LIMIT', 'High Frequency', 'Detect if user makes too many transactions in a short time window.', <span>⚡</span>,
            <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                    <span className="text-[12px] text-[var(--text-tertiary)] min-w-[120px]">Max Transactions</span>
                    <div className="flex items-center bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] overflow-hidden w-[200px] focus-within:border-[var(--accent)] transition-colors">
                        <input type="number" min="1" className="w-full bg-transparent px-3 py-1.5 text-[13px] font-mono outline-none"
                            value={getRule('VELOCITY_LIMIT').parameters?.maxCount ?? 5}
                            onChange={(e) => handleNumberInput('VELOCITY_LIMIT', 'maxCount', e.target.value)} />
                        <span className="px-3 py-1.5 bg-[var(--bg-hover)] text-[var(--text-tertiary)] text-[11px] font-medium border-l border-[var(--border-primary)]">count</span>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-[12px] text-[var(--text-tertiary)] min-w-[120px]">Time Window</span>
                    <div className="flex items-center bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] overflow-hidden w-[200px] focus-within:border-[var(--accent)] transition-colors">
                        <input type="number" min="1" className="w-full bg-transparent px-3 py-1.5 text-[13px] font-mono outline-none"
                            value={getRule('VELOCITY_LIMIT').parameters?.windowMinutes ?? 10}
                            onChange={(e) => handleNumberInput('VELOCITY_LIMIT', 'windowMinutes', e.target.value)} />
                        <span className="px-3 py-1.5 bg-[var(--bg-hover)] text-[var(--text-tertiary)] text-[11px] font-medium border-l border-[var(--border-primary)]">minutes</span>
                    </div>
                </div>
            </div>
        )}

      
        {renderRuleCard('GEO_ANOMALY', 'Geographic Anomaly', 'Trigger step-up when payment originates from unexpected location', <span>🌍</span>,
            <div className="flex items-center gap-3">
                <span className="text-[12px] text-[var(--text-tertiary)] min-w-[120px]">Detection Level</span>
                <select 
                    className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] text-[var(--text-primary)] text-[12px] rounded-[var(--radius-md)] px-3 py-1.5 w-[200px] outline-none focus:border-[var(--accent)] transition-colors"
                    value={getRule('GEO_ANOMALY').parameters?.level || 'country'}
                    onChange={(e) => updateRule('GEO_ANOMALY', 'level', e.target.value)}
                >
                    <option value="country">Country change</option>
                    <option value="region">Region change</option>
                </select>
            </div>
        )}

        {renderRuleCard('BENEFICIARY', 'New Beneficiary', 'Trigger step-up for payments to new recipients', <span>👤</span>,
            <div className="flex items-center gap-3">
                <span className="text-[12px] text-[var(--text-tertiary)] min-w-[120px]">Trust After</span>
                <div className="flex items-center bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] overflow-hidden max-w-[200px]">
                  <input type="number" min="1" className="w-full bg-transparent px-3 py-1.5 text-[13px] font-mono outline-none" 
                    value={getRule('BENEFICIARY').parameters?.trustCount ?? 3}
                    onChange={(e) => handleNumberInput('BENEFICIARY', 'trustCount', e.target.value)} />
                  <span className="px-3 py-1.5 bg-[var(--bg-hover)] text-[var(--text-tertiary)] text-[12px] border-l border-[var(--border-primary)]">transactions</span>
                </div>
            </div>
        )}

        {renderRuleCard('DORMANT', 'Dormant Account', 'Trigger step-up for inactive accounts', <span>💤</span>,
            <div className="flex items-center gap-3">
                <span className="text-[12px] text-[var(--text-tertiary)] min-w-[120px]">Inactivity Days</span>
                <div className="flex items-center bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] overflow-hidden max-w-[200px]">
                  <input type="number" min="1" className="w-full bg-transparent px-3 py-1.5 text-[13px] font-mono outline-none" 
                    value={getRule('DORMANT').parameters?.days ?? 180}
                    onChange={(e) => handleNumberInput('DORMANT', 'days', e.target.value)} />
                  <span className="px-3 py-1.5 bg-[var(--bg-hover)] text-[var(--text-tertiary)] text-[12px] border-l border-[var(--border-primary)]">days</span>
                </div>
            </div>
        )}

      </div>
    </div>
  );
}