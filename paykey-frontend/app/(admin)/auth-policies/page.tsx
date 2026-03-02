'use client';

import { useState, useEffect } from 'react';
import { ChannelTabs } from '@/components/policy/ChannelTabs';
import { PolicyCard } from '@/components/policy/PolicyCard';
import { ComparisonTable } from '@/components/policy/ComparisonTable';
import { AuditLog } from '@/components/policy/AuditLog';
import { EditPolicyModal } from '@/components/policy/EditPolicyModal';
import { adminService } from '@/services/adminService';

const initialPolicies: any = {
  consumer: { web: { low: {}, medium: {}, high: {} }, mobile: { low: {}, medium: {}, high: {} } },
  corporate: { web: { low: {}, medium: {}, high: {} }, mobile: { low: {}, medium: {}, high: {} } }
};

export default function AuthPoliciesPage() {
  const [policies, setPolicies] = useState<any>(initialPolicies);
  const [segment, setSegment] = useState<'consumer' | 'corporate'>('consumer');
  const [channel, setChannel] = useState<string>('web');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingRisk, setEditingRisk] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeCount, setActiveCount] = useState(0);
  const [refreshLogKey, setRefreshLogKey] = useState(0);

  // --- Logic User Session & Sync (Sama seperti sebelumnya) ---
  const syncWithDatabase = async () => {
    try {
      setLoading(true);
      const apiData = await adminService.getPolicies();
      if (Array.isArray(apiData)) setActiveCount(apiData.length);

      const newStructure = JSON.parse(JSON.stringify(initialPolicies));
      if (Array.isArray(apiData)) {
        apiData.forEach((item: any) => {
          const s = item.segment?.toLowerCase();
          const c = item.channel?.toLowerCase();
          const r = item.riskLevel?.toLowerCase();
          if (newStructure[s] && newStructure[s][c] && newStructure[s][c][r]) {
            try { newStructure[s][c][r] = { ...JSON.parse(item.condition), id: item.id }; } catch (e) {}
          }
        });
      }
      setPolicies(newStructure);
    } catch (err) { console.error(err); } 
    finally { setLoading(false); }
  };

  useEffect(() => { syncWithDatabase(); }, []);

  const handleSavePolicy = async (updatedData: any) => {
    if (!editingRisk) return;
    const currentUserEmail = localStorage.getItem('paykey_last_user_email');
    
    console.log("Saving policy with data:", {
      segment, channel, riskLevel: editingRisk, condition: updatedData, adminEmail: currentUserEmail
    });

    try {
      const cleanData = { ...updatedData }; delete cleanData.id;
      await adminService.upsertPolicy({
        segment: segment.toUpperCase(), channel: channel.toUpperCase(), 
        riskLevel: editingRisk.toUpperCase(), condition: JSON.stringify(cleanData), 
        adminEmail: currentUserEmail 
      });
      setToast("Policy saved successfully");
      await syncWithDatabase(); 
      setRefreshLogKey(prev => prev + 1);
      setIsModalOpen(false);
      setTimeout(() => setToast(null), 3000);
    } catch (err) { alert("Failed to save."); }
  };

  const currentPolicySet = policies[segment][channel];

  return (
    <div className="flex min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans">
      <main className="flex-1 flex flex-col h-screen overflow-hidden min-w-0">
        
        {/* HEADER (Sesuai HTML .header) */}
        <header className="px-6 py-4 bg-[var(--bg-secondary)] border-b border-[var(--border-primary)] flex justify-between items-center shrink-0">
           <div className="flex items-center gap-4">
              <h2 className="text-[18px] font-semibold text-[var(--text-primary)]">Authentication Policies</h2>
              <span className="px-2.5 py-1 bg-[var(--bg-tertiary)] rounded-[20px] text-[11px] text-[var(--text-secondary)] font-medium">
                {loading ? 'Syncing...' : `${activeCount} Active Policies`}
              </span>
           </div>
           <div className="flex gap-2.5">
             <button className="flex items-center gap-1.5 px-3.5 py-2 bg-[var(--bg-tertiary)] border border-[var(--border-secondary)] rounded-[6px] text-[13px] font-medium text-[var(--text-primary)] hover:bg-[var(--bg-hover)] transition-all">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Export
             </button>
             <button onClick={() => alert('Data is auto-saved')} className="flex items-center gap-1.5 px-3.5 py-2 bg-[var(--accent)] text-white rounded-[6px] text-[13px] font-medium hover:bg-[var(--accent-hover)] transition-all">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                Save Policy
             </button>
           </div>
        </header>

        {/* CONTENT (Sesuai HTML .content) */}
        <div className="flex-1 overflow-auto p-6 custom-scrollbar relative">
            <div className={`w-full mx-auto transition-opacity ${loading ? 'opacity-50' : 'opacity-100'}`}>
                
                {/* SEGMENT TABS (Sesuai HTML .segment-tabs) */}
                <div className="flex gap-1 bg-[var(--bg-tertiary)] p-1 rounded-[10px] w-fit mb-6">
                    <button onClick={() => setSegment('consumer')} className={`flex items-center gap-2 px-5 py-2.5 rounded-[8px] text-[13px] font-medium transition-all ${segment === 'consumer' ? 'bg-[var(--bg-secondary)] text-[var(--text-primary)] shadow-sm' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        Consumer Banking
                    </button>
                    <button onClick={() => setSegment('corporate')} className={`flex items-center gap-2 px-5 py-2.5 rounded-[8px] text-[13px] font-medium transition-all ${segment === 'corporate' ? 'bg-[var(--bg-secondary)] text-[var(--text-primary)] shadow-sm' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"/></svg>
                        Corporate Banking
                    </button>
                </div>

                {/* INFO BOX (Sesuai HTML .info-box) */}
                <div className="flex items-start gap-3 p-3 bg-[var(--accent-muted)] border border-[rgba(59,130,246,0.3)] rounded-[8px] mb-5">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px] text-[var(--accent)] mt-0.5 shrink-0"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                    <div className="text-[12px] text-[var(--text-secondary)] leading-relaxed">
                        <strong className="text-[var(--text-primary)]">Policy Configuration:</strong> Authentication requirements are determined by risk level and channel. Higher risk transactions require stronger authentication (fresh UV, step-up factors) and have stricter retry limits and shorter timeouts.
                    </div>
                </div>

                {/* CHANNEL TABS (Sesuai HTML .channel-tabs) */}
                <ChannelTabs current={channel} onChange={setChannel} />

                {/* POLICY GRID (Sesuai HTML .policy-grid) */}
                {/* Note: HTML punya 4 kolom, Backend kita support 3. Kita gunakan 3 agar logic jalan, tapi styling CARD persis HTML */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                    {['low', 'medium', 'high'].map(risk => (
                        <PolicyCard 
                            key={risk} 
                            risk={risk} 
                            data={currentPolicySet?.[risk] || {}} 
                            onEdit={() => { setEditingRisk(risk); setIsModalOpen(true); }} 
                            isCorporate={segment === 'corporate'}
                        />
                    ))}
                </div>

                <ComparisonTable segment={segment} channel={channel} policies={policies} />
                
                {/* AUDIT LOG (Data Live) */}
                <AuditLog refreshKey={refreshLogKey} />
            </div>
        </div>
      </main>

      {isModalOpen && editingRisk && (
        <EditPolicyModal 
            isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}
            policyName={`${segment} ${channel} ${editingRisk}`}
            initialData={currentPolicySet?.[editingRisk]} isCorporate={segment === 'corporate'} onSave={handleSavePolicy}
        />
      )}

      {toast && (
        <div className="fixed bottom-6 right-6 bg-[var(--bg-elevated)] border border-[var(--border-secondary)] rounded-[10px] p-4 flex items-center gap-3 shadow-2xl z-[2000] animate-[slideIn_0.3s]">
            <div className="w-6 h-6 rounded-[6px] bg-[var(--success-muted)] text-[var(--success)] flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <div>
                <div className="text-[13px] font-semibold text-[var(--text-primary)]">Success</div>
                <div className="text-[12px] text-[var(--text-tertiary)]">{toast}</div>
            </div>
        </div>
      )}
    </div>
  );
}