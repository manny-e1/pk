// 'use client';

// import { useState, useEffect } from 'react';
// import { EvidencePanel } from '@/components/investigation/EvidencePanel';
// import { AnalysisResults } from '@/components/investigation/AnalysisResults';
// import { ChatAssistant } from '@/components/ui/ChatAssistant';

// export default function InvestigationPage() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [showResults, setShowResults] = useState(false);
//   const [isChatOpen, setIsChatOpen] = useState(false);

//   // Auto-analyze on load
//   useEffect(() => {
//     const timer = setTimeout(() => { setIsLoading(false); setShowResults(true); }, 1500);
//     return () => clearTimeout(timer);
//   }, []);

//   const handleReAnalyze = () => {
//     setIsLoading(true);
//     setShowResults(false);
//     setTimeout(() => { setIsLoading(false); setShowResults(true); }, 1500);
//   };

//   return (
//     <div className="flex h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans overflow-hidden">
      
//       {/* Main Content */}
//       <div className="flex-1 flex flex-col min-w-0">
        
//         {/* Header */}
//         <header className="h-[60px] px-6 bg-[var(--bg-secondary)] border-b border-[var(--border-primary)] flex items-center justify-between shrink-0">
//            <div className="flex items-center gap-3">
//              <button className="w-8 h-8 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-md text-[var(--text-secondary)] flex items-center justify-center hover:bg-[var(--bg-hover)] transition-colors" onClick={() => window.history.back()}>
//                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><polyline points="15 18 9 12 15 6"/></svg>
//              </button>
//              <div>
//                 <h2 className="text-[15px] font-semibold">Investigation: TXN_892847</h2>
//                 <div className="text-[11px] text-[var(--text-tertiary)] mt-[1px]">LLM-Powered Fraud Analysis</div>
//              </div>
//            </div>
//            <div className="flex items-center gap-2.5">
//              {showResults && (
//                 <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[var(--critical-bg)] border border-[rgba(220,38,38,0.3)] rounded-md text-[var(--critical)] font-semibold text-xs mr-2">
//                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/></svg>
//                     CRITICAL <span className="opacity-80 font-medium text-[10px]">89%</span>
//                 </div>
//              )}
//              {/* <button onClick={handleReAnalyze} className="flex items-center gap-1.5 px-3 py-1.5 bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-primary)] rounded-md text-xs font-medium hover:bg-[var(--bg-hover)] transition-colors">
//                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"/></svg> Re-analyze
//              </button> */}
//              <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[var(--accent)] text-white rounded-md text-xs font-medium hover:bg-[var(--accent-hover)] transition-colors">
//                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg> Export Report
//              </button>
//            </div>
//         </header>

//         {/* Content Layout */}
//         <div className="flex-1 flex overflow-hidden">
            
//             {/* Investigation Panel (Center) */}
//             <div className="flex-1 flex flex-col overflow-hidden min-w-0 bg-[var(--bg-primary)]">
//                 <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
                    
//                     {/* Loading State */}
//                     {isLoading && (
//                         <div className="h-full flex flex-col items-center justify-center gap-4">
//                             <div className="w-10 h-10 border-[3px] border-[var(--border-primary)] border-t-[var(--accent)] rounded-full animate-spin"></div>
//                             <div className="text-[13px] text-[var(--text-secondary)]">Analyzing transaction data...</div>
//                             <div className="text-xs text-[var(--text-tertiary)] text-center max-w-[280px]">Claude is reviewing the evidence and identifying potential anomalies</div>
//                         </div>
//                     )}

//                     {/* Analysis Results */}
//                     {!isLoading && showResults && <AnalysisResults />}
//                 </div>
//             </div>

//             {/* Evidence Panel (Right) */}
//             <EvidencePanel />

//         </div>
//       </div>

//       {/* Floating AI Button */}
//       {/* {showResults && (
//         <button 
//             onClick={() => setIsChatOpen(true)}
//             className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-[var(--accent)] to-[var(--purple)] rounded-2xl flex items-center justify-center text-white shadow-[0_4px_20px_rgba(59,130,246,0.4)] transition-all hover:scale-105 z-50"
//         >
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
//             <span className="absolute -top-1 -right-1 w-5 h-5 bg-[var(--error)] rounded-full text-[10px] font-bold flex items-center justify-center border-2 border-[var(--bg-primary)]">1</span>
//         </button>
//       )} */}

//       {/* Chat Component */}
//       <ChatAssistant isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

//     </div>
//   );
// }

'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { EvidencePanel } from '@/components/investigation/EvidencePanel';
import { AnalysisResults } from '@/components/investigation/AnalysisResults';
import { ChatAssistant } from '@/components/ui/ChatAssistant';
import { adminService } from '@/services/adminService'; 

export default function InvestigationPage() {
  // State Terpisah
  const [evidenceData, setEvidenceData] = useState<any>(null); // Untuk Panel Kanan (Cepat)
  const [analysisData, setAnalysisData] = useState<any>(null); // Untuk Panel Tengah (Lambat)
  
  const [isEvidenceLoading, setIsEvidenceLoading] = useState(true);
  const [isAnalysisLoading, setIsAnalysisLoading] = useState(true);
  
  const [isChatOpen, setIsChatOpen] = useState(false);
  const searchParams = useSearchParams();
  const transactionId = searchParams.get('id');

  useEffect(() => {
    if (!transactionId) return;

    // 1. Fetch Data Database (Cepat)
    const fetchEvidence = async () => {
        setIsEvidenceLoading(true);
        try {
            const res = await adminService.getTransactionEvidence(transactionId);
            setEvidenceData(res.raw_data);
        } catch (e) {
            console.error("Evidence Error:", e);
        } finally {
            setIsEvidenceLoading(false);
        }
    };

    // 2. Fetch Analisis AI (Lambat)
    const fetchAnalysis = async () => {
        setIsAnalysisLoading(true);
        try {
            const res = await adminService.getInvestigationReport(transactionId);
            setAnalysisData(res.analysis);
        } catch (e) {
            console.error("Analysis Error:", e);
        } finally {
            setIsAnalysisLoading(false);
        }
    };

    // Jalankan Paralel
    fetchEvidence();
    fetchAnalysis();

  }, [transactionId]);

  // Helper UI untuk warna Badge Header
  const getRiskBadgeColor = (level?: string) => {
      switch(level?.toLowerCase()) {
          case 'critical': return 'bg-[var(--critical-bg)] border-[rgba(220,38,38,0.3)] text-[var(--critical)]';
          case 'high': return 'bg-[var(--error-bg)] border-[rgba(239,68,68,0.3)] text-[var(--error)]';
          case 'medium': return 'bg-[var(--warning-bg)] border-[rgba(245,158,11,0.3)] text-[var(--warning)]';
          default: return 'bg-[var(--success-bg)] border-[rgba(16,185,129,0.3)] text-[var(--success)]';
      }
  };

  return (
    <div className="flex h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans overflow-hidden">
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Header */}
        <header className="h-[60px] px-6 bg-[var(--bg-secondary)] border-b border-[var(--border-primary)] flex items-center justify-between shrink-0">
           <div className="flex items-center gap-3">
             <button className="w-8 h-8 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-md text-[var(--text-secondary)] flex items-center justify-center hover:bg-[var(--bg-hover)] transition-colors" onClick={() => window.history.back()}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><polyline points="15 18 9 12 15 6"/></svg>
             </button>
             <div>
                {/* Tampilkan ID dari Evidence (lebih cepat muncul), fallback ke URL */}
                <h2 className="text-[15px] font-semibold">Investigation: {evidenceData?.transaction?.id || transactionId}</h2>
                <div className="text-[11px] text-[var(--text-tertiary)] mt-[1px]">LLM-Powered Fraud Analysis</div>
             </div>
           </div>
           <div className="flex items-center gap-2.5">
             {/* Badge Risk hanya muncul setelah AI selesai */}
             {!isAnalysisLoading && analysisData && (
                <div className={`flex items-center gap-1.5 px-3 py-1.5 border rounded-md font-semibold text-xs mr-2 ${getRiskBadgeColor(analysisData.risk_assessment.level)}`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/></svg>
                    {analysisData.risk_assessment.level.toUpperCase()} 
                    <span className="opacity-80 font-medium text-[10px] ml-1">{analysisData.risk_assessment.confidence}%</span>
                </div>
             )}
             <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[var(--accent)] text-white rounded-md text-xs font-medium hover:bg-[var(--accent-hover)] transition-colors opacity-70 cursor-not-allowed">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg> Export Report
             </button>
           </div>
        </header>

        {/* Content Layout */}
        <div className="flex-1 flex overflow-hidden">
            
            {/* Center: Investigation Panel (Menunggu AI) */}
            <div className="flex-1 flex flex-col overflow-hidden min-w-0 bg-[var(--bg-primary)]">
                <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
                    
                    {/* Loading Animation khusus Panel Tengah */}
                    {isAnalysisLoading && (
                        <div className="h-full flex flex-col items-center justify-center gap-4">
                            <div className="w-10 h-10 border-[3px] border-[var(--border-primary)] border-t-[var(--accent)] rounded-full animate-spin"></div>
                            <div className="text-[13px] text-[var(--text-secondary)]">Analyzing transaction data...</div>
                            <div className="text-xs text-[var(--text-tertiary)] text-center max-w-[280px]">Claude is reviewing the evidence and identifying potential anomalies</div>
                        </div>
                    )}

                    {/* Tampilkan Hasil AI */}
                    {!isAnalysisLoading && analysisData && <AnalysisResults data={analysisData} />}
                </div>
            </div>

            {/* Right: Evidence Panel (Muncul Instan) */}
            {/* Kita pass data evidenceData ke komponen ini */}
            <EvidencePanel data={evidenceData} />

        </div>
      </div>

      <ChatAssistant isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

    </div>
  );
}