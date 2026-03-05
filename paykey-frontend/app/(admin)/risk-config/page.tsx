'use client';

import { useState, useEffect } from 'react';
import { RiskThresholds } from '@/components/risk/RiskThresholds';
import { StepUpRules } from '@/components/risk/StepUpRules';
import { RiskSimulator } from '@/components/risk/RiskSimulation';
import { adminService } from '@/services/adminService';

const defaultRules = [
  { ruleType: 'AMOUNT', ruleName: 'Payment Amount Threshold', isActive: true, weight: 20, parameters: { amountThreshold: 500 } },
  { ruleType: 'NEW_DEVICE', ruleName: 'First Payment from Device', isActive: false, weight: 30, parameters: { days: 90 } },
  { ruleType: 'GEO_ANOMALY', ruleName: 'Geographic Anomaly', isActive: false, weight: 25, parameters: { level: 'country' } },
  { ruleType: 'BENEFICIARY', ruleName: 'New Beneficiary', isActive: false, weight: 15, parameters: { trustCount: 3 } },
  { ruleType: 'DORMANT', ruleName: 'Dormant Account', isActive: false, weight: 40, parameters: { days: 180 } },
  { ruleType: 'VELOCITY_LIMIT', ruleName: 'High Frequency Transactions', isActive: false, weight: 35, parameters: { maxTransactions: 5, timeWindowMinutes: 10 } },
];

export default function RiskConfigPage() {
  const [segment, setSegment] = useState<'consumer' | 'corporate'>('consumer');
  const [historicalTxns, setHistoricalTxns] = useState<any[]>([]);
  const [realMetrics, setRealMetrics] = useState({ avgTime: '0.00s', successRate: '0.0%' });

  const [allRulesData, setAllRulesData] = useState<any[]>([]);
  const [allConfigsData, setAllConfigsData] = useState<any[]>([]);

  const [lowThreshold, setLowThreshold] = useState(30);
  const [highThreshold, setHighThreshold] = useState(60);
  const [rules, setRules] = useState<any[]>(defaultRules);
  const [toast, setToast] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);




  const fetchAllData = async () => {
    setIsLoading(true);
    try {
      const [apiRules, apiConfigs, dashboardStats] = await Promise.all([
          adminService.getRiskRules(),
          adminService.getRiskConfig(),
          adminService.getDashboardStats ? adminService.getDashboardStats('7d').catch(() => null) : Promise.resolve(null)
      ]);

      if (Array.isArray(apiRules)) setAllRulesData(apiRules);
      if (Array.isArray(apiConfigs)) setAllConfigsData(apiConfigs);

      if (dashboardStats && dashboardStats.metrics) {
          const totalRealTx = dashboardStats.metrics.totalTx || 0; 
          
          setRealMetrics({
              avgTime: dashboardStats.metrics.avgTime || '0.00s',
              successRate: (dashboardStats.metrics.successRate || '0') + '%'
          });

          const sampleTxns = Array.from({length: totalRealTx}, (_, i) => ({
              amount: Math.floor(Math.random() * 3000) + 10,
              isNewDevice: i % 15 === 0, 
              isNewBen: i % 10 === 0,   
              isGeoAnomaly: i % 40 === 0 
          }));
          
          setHistoricalTxns(sampleTxns);
      }

    } catch (err) {
      console.error("Failed to load risk config:", err);
      showToast("Failed to connect to server. Using default configuration.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  useEffect(() => {
    const currentSegment = segment.toUpperCase();

    const configForSegment = allConfigsData.find((c: any) => (c.segment || '').toUpperCase() === currentSegment);
    if (configForSegment) {
        setLowThreshold(configForSegment.lowScore ?? 30);
        setHighThreshold(configForSegment.highScore ?? 60);
    } else {
        setLowThreshold(30); setHighThreshold(60);
    }

    const rulesForSegment = allRulesData.filter((r: any) => (r.segment || '').toUpperCase() === currentSegment);
    
    if (rulesForSegment.length > 0) {
        const mergedRules = defaultRules.map(def => {
            const found = rulesForSegment.find((r: any) => r.ruleType === def.ruleType);
            const mergedParams = found?.parameters && Object.keys(found.parameters).length > 0 
                                  ? found.parameters : def.parameters;
            
            if (found) {
                return { 
                    ...def, 
                    ...found, 
                    weight: found.riskScore ?? def.weight,
                    parameters: mergedParams 
                };
            }
            return def;
        });
        setRules(mergedRules);
    } else {
        setRules(defaultRules);
    }
  }, [segment, allRulesData, allConfigsData]);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const handleRulesChange = (updatedRules: any[]) => {
    setRules(updatedRules);
  };

  const handleLowChange = (val: number) => setLowThreshold(val);
  const handleHighChange = (val: number) => setHighThreshold(val);

  const handleSave = async () => {
    try {
        const dbPayload = rules.map(r => ({
            ruleType: r.ruleType,
            ruleName: r.ruleName || r.ruleType,
            riskScore: r.weight, 
            isActive: r.isActive,
            parameters: r.parameters,
            segment: segment.toUpperCase()
        }));

        await adminService.saveRiskConfigBatch(dbPayload);
        
        await adminService.updateRiskConfig({
          lowScore: lowThreshold, 
          highScore: highThreshold,
          segment: segment.toUpperCase()
        });

        showToast('Configuration saved successfully!');
        
        await fetchAllData();
        
    } catch (e) {
        console.error("Save failed:", e);
        showToast('Failed to save configuration');
    }
  };

  return (
    <div className="flex flex-col h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-[family-name:var(--font-inter)] overflow-hidden">
      
      <header className="px-6 py-3 border-b border-[var(--border-secondary)] bg-[var(--bg-secondary)] flex justify-between items-center shrink-0 h-[60px]">
           <div className="flex items-center gap-4">
             <div className="flex items-center gap-2 text-sm">
                <span className="text-[var(--text-tertiary)]">Security</span>
                <span className="text-[var(--text-muted)]">/</span>
                <span className="font-medium text-[var(--text-primary)]">Risk Configuration</span>
             </div>
             {isLoading && <span className="text-xs text-[var(--text-tertiary)] animate-pulse ml-2">Syncing...</span>}
           </div>
           
           <div className="flex items-center gap-3">
             <button 
                onClick={() => { setRules(defaultRules); showToast('Defaults restored (unsaved)'); }} 
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-[var(--radius-md)] text-[13px] font-medium bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-primary)] hover:bg-[var(--bg-hover)] transition-all"
             >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M1 4v6h6"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
                Reset to Defaults
             </button>
             <button 
                onClick={handleSave} 
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-[var(--radius-md)] text-[13px] font-medium bg-[var(--success)] text-black hover:bg-[#22c55e] transition-all shadow-sm"
             >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
                Save Configuration
             </button>
           </div>
      </header>

      <div className="flex-1 overflow-auto p-6 custom-scrollbar">
          
          <div className="flex gap-1 bg-[var(--bg-tertiary)] p-1 rounded-[10px] w-fit mb-6">
              <button 
                  onClick={() => setSegment('consumer')} 
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-[8px] text-[13px] font-medium transition-all ${segment === 'consumer' ? 'bg-[var(--bg-secondary)] text-[var(--text-primary)] shadow-sm' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
              >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  Consumer Banking
              </button>
              <button 
                  onClick={() => setSegment('corporate')} 
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-[8px] text-[13px] font-medium transition-all ${segment === 'corporate' ? 'bg-[var(--bg-secondary)] text-[var(--text-primary)] shadow-sm' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
              >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"/></svg>
                  Corporate Banking
              </button>
          </div>

          <div className="flex gap-6  mx-auto h-full">
              
              <div className="flex-1 min-w-0 space-y-6">
                  <RiskThresholds 
                      key={`thresh-${segment}`}
                      lowThreshold={lowThreshold} 
                      highThreshold={highThreshold}
                      onLowChange={handleLowChange}
                      onHighChange={handleHighChange}
                  />
                  
                  <StepUpRules 
                      key={`rules-${segment}`}
                      rules={rules} 
                      onChange={handleRulesChange} 
                  />
              </div>

              <div className="w-[400px] xl:w-[450px] shrink-0">
                  <div className="sticky top-0">
                      <RiskSimulator 
                          key={`sim-${segment}`}
                          lowThreshold={lowThreshold} 
                          highThreshold={highThreshold} 
                          activeRules={rules}
                          historicalTxns={historicalTxns}
                          realMetrics={realMetrics}
                      />
                  </div>
              </div>
          </div>
      </div>

      {toast && (
        <div className="fixed bottom-6 right-6 bg-[var(--success-bg)] border border-[var(--success-border)] text-[var(--text-primary)] px-4 py-3 rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.5)] z-50 flex items-center gap-3 animate-[slideIn_0.3s_ease-out]">
            <div className="w-5 h-5 rounded-full bg-[var(--success)] text-black flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <span className="text-[13px] font-medium">{toast}</span>
        </div>
      )}
    </div>
  );
}