'use client';

import { useEffect, useState } from 'react';
import { adminService } from '@/services/adminService';

export function AuditLog({ refreshKey }: { refreshKey?: number }) {
  const [logs, setLogs] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const data = await adminService.getPolicyAuditLogs();
        setLogs(data || []);
        console.log("Fetched logs:", data);
      } catch (error) {
        console.error("Failed to fetch logs");
      } finally {
        setIsLoading(false);
      }
    };
    fetchLogs();
  }, [refreshKey]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
        month: 'short', day: 'numeric', hour: '2-digit', minute:'2-digit', hour12: false 
    }).replace(',', '');
  };

  const formatActionText = (text: string) => {
    return text.replace(
      /(Consumer|Corporate|High|Medium|Low|Risk|Critical)/gi, 
      '<strong class="text-[var(--text-primary)] font-semibold">$1</strong>'
    );
  };

  return (
    <div className="mb-8 mt-8">
      <div className="flex items-center gap-2.5 text-[16px] font-semibold text-[var(--text-primary)] mb-4">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-[var(--text-tertiary)]">
          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
        </svg>
        Recent Policy Changes
      </div>
      
      <div className="bg-[var(--bg-tertiary)] rounded-[8px] p-3 min-h-[50px]">
        {isLoading ? (
           <div className="text-center py-4 text-[12px] text-[var(--text-tertiary)]">Loading history...</div>
        ) : logs.length === 0 ? (
           <div className="text-center py-4 text-[12px] text-[var(--text-tertiary)]">No recent activity recorded.</div>
        ) : (
          logs.map((log, i) => (
            <div key={i} className={`flex items-start  py-2 text-[12px] ${i !== logs.length - 1 ? 'border-b border-[var(--border-primary)]' : ''}`}>
              
              <span className="text-[var(--text-tertiary)] font-mono shrink-0 w-[100px] pt-0.5">
                {formatDate(log.createdAt)}
              </span>

              <span className="text-[var(--text-secondary)] flex-1 leading-relaxed">
                 <span dangerouslySetInnerHTML={{ __html: formatActionText(log.action) }} />
              </span>

              <span className="text-[var(--accent)] font-medium ml-auto shrink-0 pt-0.5">
                {log.adminEmail || 'System'}
              </span>
              
            </div>
          ))
        )}
      </div>
    </div>
  );
}