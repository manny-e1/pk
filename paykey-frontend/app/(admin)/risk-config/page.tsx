// 'use client';

// import { useState, useEffect } from 'react';
// import { RiskThresholds } from '@/components/risk/RiskThresholds';
// import { StepUpRules } from '@/components/risk/StepUpRules';
// import { RiskSimulator } from '@/components/risk/RiskSimulation';
// import { adminService } from '@/services/adminService';

// // Default rules agar UI tidak blank saat loading
// const defaultRules = [
//   { ruleType: 'AMOUNT', isActive: true, weight: 20, parameters: { amountThreshold: 500 } },
//   { ruleType: 'NEW_DEVICE', isActive: false, weight: 30, parameters: { days: 90 } },
//   { ruleType: 'GEO_ANOMALY', isActive: false, weight: 25, parameters: { level: 'country' } },
//   { ruleType: 'BENEFICIARY', isActive: false, weight: 15, parameters: { trustCount: 3 } },
//   { ruleType: 'DORMANT', isActive: false, weight: 40, parameters: { days: 180 } },
// ];

// export default function RiskConfigPage() {
//   const [lowThreshold, setLowThreshold] = useState(30);
//   const [highThreshold, setHighThreshold] = useState(60);
//   const [rules, setRules] = useState<any[]>(defaultRules);
//   const [toast, setToast] = useState<string | null>(null);
//   const [isLoading, setIsLoading] = useState(true);

//   // 1. LOAD DATA DARI DB
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const data = await adminService.getRiskConfig();
        
//         // Update Thresholds
//         if (data.threshold) {
//           setLowThreshold(data.threshold.lowScore);
//           setHighThreshold(data.threshold.highScore);
//         }

//         // Update Rules (Merge dengan default agar UI aman)
//         if (data.rules && Array.isArray(data.rules)) {
//            const merged = defaultRules.map(def => {
//              const found = data.rules.find((r: any) => r.ruleType === def.ruleType);
//              // Parse JSON parameters dari backend
//              const params = found && typeof found.parameters === 'string' 
//                 ? JSON.parse(found.parameters) 
//                 : (found?.parameters || def.parameters);
//              return found ? { ...def, ...found, parameters: params } : def;
//            });
//            setRules(merged);
//         }
//       } catch (e) {
//         console.error("Failed to load config", e);
//       } finally {
//         setIsLoading(false);
//       }
//     }
//     fetchData();
//   }, []);

//   const showToast = (msg: string) => {
//     setToast(msg);
//     setTimeout(() => setToast(null), 3000);
//   };

//   // 2. SAVE DATA KE DB
//   const handleSave = async () => {
//     try {
//       // Tampilkan indikator loading atau toast proses jika perlu
//       await adminService.updateRiskConfig({
//         lowThreshold,
//         highThreshold,
//         rules,
//         adminEmail: 'admin@paykey.com' // Ganti dengan user session nanti
//       });
//       showToast('Configuration saved successfully!');
//     } catch (e) {
//       showToast('Failed to save configuration');
//     }
//   };

//   const handleLowChange = (val: number) => {
//     setLowThreshold(val);
//     if (val >= highThreshold) setHighThreshold(val + 10);
//   };

//   const handleHighChange = (val: number) => {
//     setHighThreshold(val);
//     if (val <= lowThreshold) setLowThreshold(val - 10);
//   };

//   return (
//     <div className="flex min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-[family-name:var(--font-inter)]">
      
//       <main className="flex-1 flex flex-col h-screen overflow-hidden">
//         {/* Header */}
//         <header className="px-6 py-3 border-b border-[var(--border-secondary)] bg-[var(--bg-secondary)] flex justify-between items-center shrink-0 h-[60px]">
//            <div className="flex items-center gap-4">
//              <div className="flex items-center gap-2 text-sm">
//                 <span className="text-[var(--text-tertiary)]">Security</span>
//                 <span className="text-[var(--text-muted)]">/</span>
//                 <span className="font-medium text-[var(--text-primary)]">Risk Configuration</span>
//              </div>
//              {isLoading && <span className="text-xs text-[var(--text-tertiary)] animate-pulse ml-2">Syncing...</span>}
//            </div>
           
//            <div className="flex items-center gap-3">
//              <button onClick={() => { setRules(defaultRules); showToast('Defaults restored'); }} className="flex items-center gap-1.5 px-3.5 py-2 rounded-[var(--radius-md)] text-[13px] font-medium bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-primary)] hover:bg-[var(--bg-hover)] transition-all">
//                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M1 4v6h6"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
//                 Reset to Defaults
//              </button>
//              {/* Tombol Save sekarang memanggil handleSave (API) */}
//              <button onClick={handleSave} className="flex items-center gap-1.5 px-3.5 py-2 rounded-[var(--radius-md)] text-[13px] font-medium bg-[var(--success)] text-black hover:bg-[#22c55e] transition-all">
//                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
//                 Save Configuration
//              </button>
//            </div>
//         </header>

//         {/* Content Layout */}
//         <div className="flex-1 overflow-auto p-6 custom-scrollbar">
//             <div className="flex gap-6 max-w-[1400px]">
                
//                 {/* Left Column (Main Config) */}
//                 <div className="flex-1 min-w-0">
//                     <RiskThresholds 
//                         lowThreshold={lowThreshold} 
//                         highThreshold={highThreshold}
//                         onLowChange={handleLowChange}
//                         onHighChange={handleHighChange}
//                     />
//                     {/* Mengirimkan state rules ke komponen ini agar bisa diedit */}
//                     <StepUpRules rules={rules} onChange={setRules} />
//                 </div>

//                 {/* Right Column (Simulator) */}
//                 {/* Simulator mengambil data live dari state */}
//                 <RiskSimulator 
//                     lowThreshold={lowThreshold} 
//                     highThreshold={highThreshold} 
//                     activeRules={rules}
//                 />
//             </div>
//         </div>
//       </main>

//       {/* Toast Notification */}
//       {toast && (
//         <div className="fixed bottom-6 right-6 bg-[var(--success-bg)] border border-[var(--success-border)] text-[var(--text-primary)] px-4 py-3 rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.5)] z-50 flex items-center gap-3 animate-[slideIn_0.3s_ease-out]">
//             <div className="w-5 h-5 rounded-full bg-[var(--success)] text-black flex items-center justify-center">
//                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3"><polyline points="20 6 9 17 4 12"/></svg>
//             </div>
//             <span className="text-[13px] font-medium">{toast}</span>
//         </div>
//       )}
//     </div>
//   );
// }

'use client';

import { useState, useEffect } from 'react';
import { RiskThresholds } from '@/components/risk/RiskThresholds';
import { StepUpRules } from '@/components/risk/StepUpRules';
import { RiskSimulator } from '@/components/risk/RiskSimulation';
import { adminService } from '@/services/adminService';
import { rule } from 'postcss';

// Default rules agar UI tidak blank saat loading atau jika DB kosong
const defaultRules = [
  { ruleType: 'AMOUNT', ruleName: 'Payment Amount Threshold', isActive: true, weight: 20, parameters: { amountThreshold: 500 } },
  { ruleType: 'NEW_DEVICE', ruleName: 'First Payment from Device', isActive: false, weight: 30, parameters: { days: 90 } },
  { ruleType: 'GEO_ANOMALY', ruleName: 'Geographic Anomaly', isActive: false, weight: 25, parameters: { level: 'country' } },
  { ruleType: 'BENEFICIARY', ruleName: 'New Beneficiary', isActive: false, weight: 15, parameters: { trustCount: 3 } },
  { ruleType: 'DORMANT', ruleName: 'Dormant Account', isActive: false, weight: 40, parameters: { days: 180 } },
  { ruleType: 'VELOCITY_LIMIT', ruleName: 'High Frequency Transactions', isActive: false, weight: 35, parameters: { maxTransactions: 5, timeWindowMinutes: 10 } },
];

export default function RiskConfigPage() {
  const [lowThreshold, setLowThreshold] = useState(30);
  const [highThreshold, setHighThreshold] = useState(60);
  // Mulai dengan defaultRules agar UI langsung tampil (Skeleton effect)
  const [rules, setRules] = useState<any[]>(defaultRules);
  const [toast, setToast] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // 1. LOAD DATA DARI DB SAAT MOUNT
  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch Parallel: Rules & Thresholds
        const [apiRules, config] = await Promise.all([
            adminService.getRiskRules(),
            adminService.getRiskConfig()
        ]);

        console.log("API Rules Loaded:", apiRules);

        // MAPPING DATA: API (riskScore) -> UI (weight)
        if (Array.isArray(apiRules) && apiRules.length > 0) {
             const uiRules = apiRules.map((r: any) => ({
                id: r.id,
                ruleType: r.ruleType,
                ruleName: r.ruleName,
                isActive: r.isActive,
                // UI pakai 'weight', DB pakai 'riskScore'
                weight: r.riskScore ?? r.weight ?? 0,
                // Pastikan parameters adalah object
                parameters: typeof r.parameters === 'string' ? JSON.parse(r.parameters) : (r.parameters || {})
            }));
            
            // Merge dengan defaultRules untuk memastikan urutan dan rule yang mungkin belum ada di DB tetap tampil
            const mergedRules = defaultRules.map(def => {
                const found = uiRules.find(r => r.ruleType === def.ruleType);
                return found ? { ...def, ...found } : def;
            });
            
            setRules(mergedRules);
        }

        // Set Thresholds
        if (config) {
             setLowThreshold(config.lowScore ?? 30);
             setHighThreshold(config.highScore ?? 60);
        }

      } catch (err) {
        console.error("Failed to load risk config:", err);
        showToast("Failed to connect to server. Using default configuration.");
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  // Helper Toast
  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  // 2. HANDLE LOCAL CHANGES (Update State UI)
  const handleRulesChange = (updatedRules: any[]) => {
    setRules(updatedRules);
  };

  const handleLowChange = (val: number) => setLowThreshold(val);
  const handleHighChange = (val: number) => setHighThreshold(val);

  // 3. SAVE DATA KE DB (Batch Update)
  const handleSave = async () => {
    try {
        // Mapping Balik: UI (weight) -> Backend (riskScore)
        const dbPayload = rules.map(r => ({
            id: r.id, 
            ruleType: r.ruleType,
            ruleName: r.ruleName || r.ruleType,
            riskScore: r.weight,  // Kembalikan ke format DB
            isActive: r.isActive,
            parameters: r.parameters
        }));

        // Simpan Rules
        await adminService.saveRiskConfigBatch(dbPayload);
        
        // Simpan Thresholds (Opsional: buat endpoint terpisah jika perlu)
        await adminService.updateRiskConfig({ lowScore: lowThreshold, highScore: highThreshold });

        showToast('Configuration saved successfully!');
        console.log("Configuration saved to DB");
    } catch (e) {
        console.error("Save failed:", e);
        showToast('Failed to save configuration');
    }
  };

  return (
    <div className="flex flex-col h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-[family-name:var(--font-inter)] overflow-hidden">
      
      {/* Header (Fixed Top) */}
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
             {/* Tombol Save memanggil handleSave API */}
             <button 
                onClick={handleSave} 
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-[var(--radius-md)] text-[13px] font-medium bg-[var(--success)] text-black hover:bg-[#22c55e] transition-all shadow-sm"
             >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
                Save Configuration
             </button>
           </div>
      </header>

      {/* Content Layout (Scrollable Area) */}
      <div className="flex-1 overflow-auto p-6 custom-scrollbar">
          <div className="flex gap-6  mx-auto h-full">
              
              {/* Left Column (Main Config) */}
              <div className="flex-1 min-w-0 space-y-6">
                  {/* Thresholds Component */}
                  <RiskThresholds 
                      lowThreshold={lowThreshold} 
                      highThreshold={highThreshold}
                      onLowChange={handleLowChange}
                      onHighChange={handleHighChange}
                  />
                  
                  {/* Rules Component (Editable) */}
                  <StepUpRules 
                      rules={rules} 
                      onChange={handleRulesChange} 
                  />
              </div>

              {/* Right Column (Simulator - Sticky) */}
              <div className="w-[400px] xl:w-[450px] shrink-0">
                  <div className="sticky top-0">
                      <RiskSimulator 
                          lowThreshold={lowThreshold} 
                          highThreshold={highThreshold} 
                          activeRules={rules}
                      />
                  </div>
              </div>
          </div>
      </div>

      {/* Toast Notification */}
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