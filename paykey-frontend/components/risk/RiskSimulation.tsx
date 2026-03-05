'use client';

import { useState, useEffect, useCallback } from 'react';

interface RiskSimulatorProps {
  lowThreshold: number;
  highThreshold: number;
  activeRules: any[]; 
  historicalTxns?: any[]; 
  realMetrics?: { avgTime: string; successRate: string };
}

interface RiskResult {
  score: number;
  level: string;
  style: 'low' | 'medium' | 'high';
  actions: string[];
  breakdown: Array<{ label: string; val: string }>;
}

export function RiskSimulator({ lowThreshold, highThreshold, activeRules, historicalTxns = [], realMetrics = { avgTime: '0.00s', successRate: '0.0%' } }: RiskSimulatorProps) {
  const [amount, setAmount] = useState('750');
  const [flags, setFlags] = useState({ 
    newBen: true, 
    newDev: false, 
    geo: false, 
    dormant: false, 
    vpn: false 
  });
  
  const [result, setResult] = useState<RiskResult | null>(null);
  const [impactStats, setImpactStats] = useState({ low: '68.0%', mid: '24.0%', high: '8.0%' });

  const toggleFlag = (key: keyof typeof flags) => setFlags(p => ({ ...p, [key]: !p[key] }));

  const runSimulation = useCallback(() => {
    let currentScore = 0;
    const breakdown: Array<{ label: string; val: string }> = [];

    const getRule = (type: string) => activeRules.find(r => r.ruleType === type);

    const amountRule = getRule('AMOUNT');
    const inputAmount = parseInt(amount) || 0;
    if (amountRule && amountRule.isActive) {
        if (amountRule.parameters?.tiers) {
            const tiers = amountRule.parameters.tiers;
            const matchedTier = tiers.find((t: any) => inputAmount >= t.min && inputAmount <= t.max);
            if (matchedTier) {
                 currentScore += matchedTier.score;
                 breakdown.push({ label: `Amount Tier ($${matchedTier.min}-$${matchedTier.max})`, val: `+${matchedTier.score}` });
            } else if (tiers.length > 0 && inputAmount > tiers[tiers.length-1].max) {
                 const topScore = tiers[tiers.length-1].score;
                 currentScore += topScore;
                 breakdown.push({ label: `Amount Tier (> $${tiers[tiers.length-1].max})`, val: `+${topScore}` });
            }
        } else {
            const threshold = amountRule.parameters?.amountThreshold || 0;
            if (inputAmount > threshold) {
                currentScore += (amountRule.weight || 0);
                breakdown.push({ label: `Amount > $${threshold}`, val: `+${amountRule.weight}` });
            }
        }
    }

    const benRule = getRule('BENEFICIARY');
    if (flags.newBen && benRule && benRule.isActive) {
        currentScore += (benRule.weight || 0);
        breakdown.push({ label: 'New beneficiary', val: `+${benRule.weight}` });
    }

    const devRule = getRule('NEW_DEVICE');
    if (flags.newDev && devRule && devRule.isActive) {
        currentScore += (devRule.weight || 0);
        breakdown.push({ label: 'New device', val: `+${devRule.weight}` });
    }

    const geoRule = getRule('GEO_ANOMALY');
    if (flags.geo && geoRule && geoRule.isActive) {
        currentScore += (geoRule.weight || 0);
        breakdown.push({ label: 'Geographic anomaly', val: `+${geoRule.weight}` });
    }

    if (flags.vpn && geoRule && geoRule.isActive && geoRule.parameters?.detectVPN) {
        currentScore += 15;
        breakdown.push({ label: 'VPN/Proxy detected', val: '+15' });
    }

    const dormantRule = getRule('DORMANT');
    if (flags.dormant && dormantRule && dormantRule.isActive) {
        currentScore += (dormantRule.weight || 0);
        breakdown.push({ label: 'Dormant account', val: `+${dormantRule.weight}` });
    }

    currentScore = Math.min(currentScore, 100);

    let level = 'Low Risk';
    let style: 'low' | 'medium' | 'high' = 'low';
    let actions = ['Auto-approved, no additional verification'];

    if (currentScore >= highThreshold) {
        level = 'High Risk';
        style = 'high';
        actions = ['FIDO2 authentication required', 'Cooldown period enforced', 'Out-of-band notification sent'];
    } else if (currentScore >= lowThreshold) {
        level = 'Medium Risk';
        style = 'medium';
        actions = ['FIDO2 authentication required'];
    }

    setResult({ score: currentScore, level, style, actions, breakdown });
  }, [amount, flags, activeRules, lowThreshold, highThreshold]);

  useEffect(() => {
    runSimulation();
  }, []); 

  useEffect(() => {
      if (!historicalTxns || historicalTxns.length === 0) return;

      let lowCount = 0, midCount = 0, highCount = 0;
      const getRule = (type: string) => activeRules.find(r => r.ruleType === type);

      historicalTxns.forEach(tx => {
          let score = 0;

          const amtRule = getRule('AMOUNT');
          if (amtRule && amtRule.isActive) {
              if (amtRule.parameters?.tiers) {
                  const tiers = amtRule.parameters.tiers;
                  const t = tiers.find((tier: any) => tx.amount >= tier.min && tx.amount <= tier.max);
                  if (t) score += t.score;
                  else if (tiers.length > 0 && tx.amount > tiers[tiers.length-1].max) score += tiers[tiers.length-1].score;
              } else {
                  if (tx.amount > (amtRule.parameters?.amountThreshold || 0)) score += amtRule.weight || 0;
              }
          }
          
          if (tx.isNewDevice && getRule('NEW_DEVICE')?.isActive) score += getRule('NEW_DEVICE').weight || 0;
          if (tx.isNewBen && getRule('BENEFICIARY')?.isActive) score += getRule('BENEFICIARY').weight || 0;
          if (tx.isGeoAnomaly && getRule('GEO_ANOMALY')?.isActive) score += getRule('GEO_ANOMALY').weight || 0;

          if (score >= highThreshold) highCount++;
          else if (score >= lowThreshold) midCount++;
          else lowCount++;
      });

      const total = historicalTxns.length;
      setImpactStats({
          low: ((lowCount / total) * 100).toFixed(1) + '%',
          mid: ((midCount / total) * 100).toFixed(1) + '%',
          high: ((highCount / total) * 100).toFixed(1) + '%'
      });
  }, [historicalTxns, activeRules, lowThreshold, highThreshold]);


  return (
    <div className="w-[380px] flex flex-col gap-6 sticky top-6 h-fit">
      <div className="bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-[12px] overflow-hidden shadow-sm">
        <div className="p-5 border-b border-[var(--border-secondary)]">
          <div className="text-[14px] font-semibold text-[var(--text-primary)] flex items-center gap-2">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[var(--text-tertiary)]"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            Risk Simulator
          </div>
          <div className="text-[12px] text-[var(--text-tertiary)] mt-0.5">Test your configuration</div>
        </div>
        
        <div className="p-5">
          <div className="mb-4">
            <label className="block text-[12px] font-medium text-[var(--text-secondary)] mb-1.5 uppercase tracking-wide">Payment Amount</label>
            <div className="flex items-center bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[6px] overflow-hidden focus-within:border-[var(--accent)] transition-colors">
              <input 
                type="number" 
                className="w-full bg-transparent text-[var(--text-primary)] text-[13px] font-mono px-3 py-2.5 outline-none placeholder-[var(--text-tertiary)]" 
                value={amount} 
                onChange={e => setAmount(e.target.value)} 
              />
              <span className="px-3 py-2.5 bg-[var(--bg-hover)] text-[var(--text-tertiary)] text-[12px] border-l border-[var(--border-primary)]">USD</span>
            </div>
          </div>

          <div className="mb-5">
            <label className="block text-[12px] font-medium text-[var(--text-secondary)] mb-2 uppercase tracking-wide">Scenario Flags</label>
            <div className="flex flex-col gap-2.5">
              {[
                { k: 'newBen' as const, l: 'New beneficiary' },
                { k: 'newDev' as const, l: 'New device' },
                { k: 'geo' as const, l: 'Geographic anomaly' },
                { k: 'dormant' as const, l: 'Dormant account' },
                { k: 'vpn' as const, l: 'VPN/Proxy detected' },
              ].map((item) => (
                <div 
                    key={item.k} 
                    onClick={() => toggleFlag(item.k as keyof typeof flags)} 
                    className="flex items-center gap-2.5 p-2.5 bg-[var(--bg-tertiary)] rounded-[6px] cursor-pointer hover:bg-[var(--bg-hover)] transition-all border border-transparent hover:border-[var(--border-primary)]"
                >
                  <div className={`w-[18px] h-[18px] border rounded-[4px] flex items-center justify-center transition-all ${flags[item.k as keyof typeof flags] ? 'bg-[var(--accent)] border-[var(--accent)]' : 'border-[var(--border-primary)] bg-[var(--bg-secondary)]'}`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className={`w-3 h-3 text-white transition-opacity ${flags[item.k as keyof typeof flags] ? 'opacity-100' : 'opacity-0'}`}><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <span className="text-[13px] text-[var(--text-primary)]">{item.l}</span>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={runSimulation} 
            className="w-full flex items-center justify-center gap-2 py-2.5 bg-[var(--accent)] text-white rounded-[6px] text-[13px] font-medium hover:bg-[var(--accent-hover)] transition-all shadow-md active:scale-[0.98]"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            Run Simulation
          </button>

          {result && (
            <div className={`mt-4 p-4 rounded-[8px] border animate-[slideIn_0.3s_ease-out] ${
                result.style === 'low' ? 'bg-[var(--success-bg)] border-[var(--success-border)]' : 
                result.style === 'medium' ? 'bg-[var(--warning-bg)] border-[var(--warning-border)]' : 
                'bg-[var(--error-bg)] border-[var(--error-border)]'
            }`}>
                <div className="flex items-center justify-between mb-3 border-b border-[rgba(0,0,0,0.05)] pb-3">
                    <span className={`text-[24px] font-bold font-mono leading-none ${
                        result.style === 'low' ? 'text-[var(--success)]' : 
                        result.style === 'medium' ? 'text-[var(--warning)]' : 'text-[var(--error)]'
                    }`}>{result.score}</span>
                    <span className={`text-[12px] font-bold px-2.5 py-1 rounded-[20px] ${
                        result.style === 'low' ? 'bg-[var(--success)] text-black' : 
                        result.style === 'medium' ? 'bg-[var(--warning)] text-black' : 'bg-[var(--error)] text-white'
                    }`}>{result.level}</span>
                </div>

                <div className="space-y-2 mb-3 pb-3">
                    <div className="flex justify-between text-[12px]">
                        <span className="text-[var(--text-secondary)]">Base score</span>
                        <span className="font-mono font-semibold text-[var(--text-primary)]">0</span>
                    </div>
                    {result.breakdown.length > 0 && result.breakdown.map((b, i) => (
                        <div key={i} className="flex justify-between text-[12px]">
                            <span className="text-[var(--text-secondary)]">{b.label}</span>
                            <span className="font-mono font-semibold text-[var(--error)]">{b.val}</span>
                        </div>
                    ))}
                </div>

                <div className="text-[13px] text-[var(--text-primary)] border-t border-[rgba(0,0,0,0.1)] pt-3">
                    <strong className="block mb-2 text-[12px] font-bold text-[var(--text-primary)]">Required Actions:</strong>
                    <div className="flex flex-col gap-1.5">
                        {result.actions.map((act, index) => (
                            <div key={index} className="flex items-center gap-1.5 text-[12px] text-[var(--text-secondary)]">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[14px] h-[14px] text-[var(--text-primary)]"><polyline points="20 6 9 17 4 12"/></svg>
                                {act}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-[12px] overflow-hidden shadow-sm">
        <div className="p-5 border-b border-[var(--border-secondary)]">
          <div className="text-[14px] font-semibold text-[var(--text-primary)] flex items-center gap-2">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[var(--text-tertiary)]"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>
            Configuration Impact
          </div>
          <div className="text-[12px] text-[var(--text-tertiary)] mt-0.5">Based on Live DB Rules Evaluation</div>
        </div>
        <div className="p-5 space-y-0">
            {[
                { l: 'Low risk transactions', v: impactStats.low, c: 'text-[var(--success)]' },
                { l: 'Medium risk (FIDO2)', v: impactStats.mid, c: 'text-[var(--warning)]' },
                { l: 'High risk (Step-up)', v: impactStats.high, c: 'text-[var(--error)]' },
                { l: 'Avg. approval time', v: realMetrics.avgTime, c: 'text-[var(--text-primary)]' },
                { l: 'Step-up success rate', v: realMetrics.successRate, c: 'text-[var(--success)]' }
            ].map((s, i) => (
                <div key={i} className="flex justify-between items-center text-[12px] py-2.5 border-b border-[var(--border-secondary)] last:border-0 last:pb-0">
                    <span className="text-[var(--text-secondary)]">{s.l}</span>
                    <span className={`font-mono font-semibold ${s.c}`}>{s.v}</span>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}