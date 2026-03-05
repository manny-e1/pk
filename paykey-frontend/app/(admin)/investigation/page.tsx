'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { EvidencePanel } from '@/components/investigation/EvidencePanel';
import { AnalysisResults } from '@/components/investigation/AnalysisResults';
import { ChatAssistant } from '@/components/ui/ChatAssistant';
import { adminService } from '@/services/adminService'; 

export default function InvestigationPage() {
  const [evidenceData, setEvidenceData] = useState<any>(null);
  const [analysisData, setAnalysisData] = useState<any>(null);
  
  const [isEvidenceLoading, setIsEvidenceLoading] = useState(true);
  const [isAnalysisLoading, setIsAnalysisLoading] = useState(true);
  
  const [isChatOpen, setIsChatOpen] = useState(false);
  const searchParams = useSearchParams();
  const transactionId = searchParams.get('id');

  useEffect(() => {
    if (!transactionId) return;

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

    fetchEvidence();
    fetchAnalysis();

  }, [transactionId]);

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
      
      <div className="flex-1 flex flex-col min-w-0">
        
        <header className="h-[60px] px-6 bg-[var(--bg-secondary)] border-b border-[var(--border-primary)] flex items-center justify-between shrink-0">
           <div className="flex items-center gap-3">
             <button className="w-8 h-8 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-md text-[var(--text-secondary)] flex items-center justify-center hover:bg-[var(--bg-hover)] transition-colors" onClick={() => window.history.back()}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><polyline points="15 18 9 12 15 6"/></svg>
             </button>
             <div>
                <h2 className="text-[15px] font-semibold">Investigation: {evidenceData?.transaction?.id || transactionId}</h2>
                <div className="text-[11px] text-[var(--text-tertiary)] mt-[1px]">LLM-Powered Fraud Analysis</div>
             </div>
           </div>
           <div className="flex items-center gap-2.5">
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

        <div className="flex-1 flex overflow-hidden">
            
            <div className="flex-1 flex flex-col overflow-hidden min-w-0 bg-[var(--bg-primary)]">
                <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
                    
                    {isAnalysisLoading && (
                        <div className="h-full flex flex-col items-center justify-center gap-4">
                            <div className="w-10 h-10 border-[3px] border-[var(--border-primary)] border-t-[var(--accent)] rounded-full animate-spin"></div>
                            <div className="text-[13px] text-[var(--text-secondary)]">Analyzing transaction data...</div>
                            <div className="text-xs text-[var(--text-tertiary)] text-center max-w-[280px]">Claude is reviewing the evidence and identifying potential anomalies</div>
                        </div>
                    )}

                    {!isAnalysisLoading && analysisData && <AnalysisResults data={analysisData} />}
                </div>
            </div>

            <EvidencePanel data={evidenceData} />

        </div>
      </div>

      <ChatAssistant isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

    </div>
  );
}