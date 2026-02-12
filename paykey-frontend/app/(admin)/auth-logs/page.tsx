'use client';

import { useState, useEffect } from 'react';
import { adminService } from '@/services/adminService';
import { useRouter } from 'next/navigation';

interface RiskTag {
  label: string;
  class: string;
}

interface ReasonCode {
  rule: string;
  score: number;
  desc?: string;
}

interface AuthEvent {
  id: string;
  type: string;
  timestamp: string;
  result: string;
  resultLabel: string;
  userId: string;
  paymentId?: string;
  isNewDevice: boolean;

  // Data Struktural untuk UI Detail
  device: {
    type: string;
    os: string;
    model: string;
    browser?: string;
  };
  location: {
    country: string;
    ip: string;
    city?: string;
    flag: string;
    asn?: string;
    isp?: string;
    lat?: number;
    long?: number;
  };
  risk: {
    score: number;
    level: string;
    amount?: string;
    amountClass?: string;
    network?: string; // 'vpn' | 'tor' | 'proxy' | null
    tags: RiskTag[];
    reasons: ReasonCode[];
    beneficiary?: string;
  };
}


const StatsCard = ({ label, value, change, trend, icon }: any) => (
  <div className="bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-[var(--radius-lg)] p-4 flex flex-col justify-between h-[110px]">
    <div className="flex justify-between items-start">
      <span className="text-[12px] text-[var(--text-tertiary)] font-medium">{label}</span>
      <div className="text-[var(--text-tertiary)] opacity-70">{icon}</div>
    </div>
    <div>
      <div className="text-[24px] font-bold text-[var(--text-primary)] mb-1">{value}</div>
      <div className={`text-[11px] font-medium ${trend === 'positive' ? 'text-[var(--success)]' : trend === 'negative' ? 'text-[var(--error)]' : 'text-[var(--text-secondary)]'}`}>
        {change}
      </div>
    </div>
  </div>
);

const DetailRow = ({ label, value, className = "", valueClass = "" }: any) => (
  <div className={`flex justify-between py-2.5 border-b border-[var(--border-secondary)] last:border-0 ${className}`}>
    <span className="text-[13px] text-[var(--text-tertiary)]">{label}</span>
    <span className={`text-[13px] text-[var(--text-primary)] text-right max-w-[250px] break-words ${valueClass}`}>{value}</span>
  </div>
);

const SlideOver = ({ isOpen, onClose, title, children, footer }: any) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-black/50 ransition-opacity" onClick={onClose}></div>
      <div className="relative w-[400px] bg-[var(--bg-secondary)] border-l border-[var(--border-secondary)] h-full shadow-2xl flex flex-col animate-[slideInRight_0.3s]">
        <div className="p-6 border-b border-[var(--border-secondary)] flex justify-between items-center shrink-0">
          <h3 className="text-[16px] font-semibold text-[var(--text-primary)]">{title}</h3>
          <button onClick={onClose} className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">{children}</div>
        {footer && <div className="p-6 border-t border-[var(--border-secondary)] bg-[var(--bg-tertiary)] shrink-0">{footer}</div>}
      </div>
    </div>
  );
};

// --- DATA TABLE DENGAN PAGINATION ANGKA ---
const DataTable = ({ columns, data, renderRow, currentPage, totalPages, itemsPerPage, onPageChange, totalItems }: any) => {
  const start = totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
  const end = Math.min(currentPage * itemsPerPage, totalItems);

  // Logic generate nomor halaman (e.g. 1 2 3 ... 10)
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);

      if (currentPage <= 3) { startPage = 2; endPage = 4; }
      else if (currentPage >= totalPages - 2) { startPage = totalPages - 3; endPage = totalPages - 1; }

      if (startPage > 2) pages.push('...');
      for (let i = startPage; i <= endPage; i++) pages.push(i);
      if (endPage < totalPages - 1) pages.push('...');

      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-[12px] overflow-hidden flex flex-col">

        {/* HEADER TABLE */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--border-secondary)] shrink-0">
          <div>
            <span className="text-[15px] font-semibold text-[var(--text-primary)]">Authentication Events</span>
            <span className="text-[12px] text-[var(--text-tertiary)] ml-2">Showing {start}-{end} of {totalItems.toLocaleString()} events</span>
          </div>
        </div>

        {/* TABLE CONTENT */}
        <div className="overflow-auto flex-1 custom-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead className="sticky top-0 bg-[var(--bg-tertiary)] z-10 shadow-sm">
              <tr>{columns.map((col: any, i: number) => <th key={i} className={`p-3 text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider border-b border-[var(--border-secondary)] ${col.className || ''}`}>{col.header}</th>)}</tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((item: any) => renderRow(item))
              ) : (
                <tr>
                  <td colSpan={columns.length} className="p-10 text-center text-[var(--text-tertiary)] text-sm">
                    No events found matching your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* PAGINATION FOOTER */}
        <div className="p-4 border-t border-[var(--border-secondary)] flex justify-between items-center shrink-0">
          <div className="text-[13px] text-[var(--text-tertiary)]">
            Showing <strong className="text-[var(--text-primary)]">{start}-{end}</strong> of <strong className="text-[var(--text-primary)]">{totalItems.toLocaleString()}</strong> events
          </div>

          <div className="flex gap-1.5">
            <button disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)} className="w-8 h-8 flex items-center justify-center rounded-[6px] bg-[var(--bg-tertiary)] border border-[var(--border-primary)] text-[var(--text-secondary)] disabled:opacity-50 hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] transition-all disabled:cursor-not-allowed">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
            </button>

            {getPageNumbers().map((pageNum, idx) => (
              pageNum === '...' ? (
                <span key={`dots-${idx}`} className="w-8 h-8 flex items-center justify-center text-[var(--text-tertiary)]">...</span>
              ) : (
                <button
                  key={pageNum}
                  onClick={() => onPageChange(Number(pageNum))}
                  className={`w-8 h-8 flex items-center justify-center rounded-[6px] text-[13px] font-medium transition-all ${currentPage === pageNum
                    ? 'bg-[var(--accent)] border border-[var(--accent)] text-white shadow-sm'
                    : 'bg-[var(--bg-tertiary)] border border-[var(--border-primary)] text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]'
                    }`}
                >
                  {pageNum}
                </button>
              )
            ))}

            <button disabled={currentPage === totalPages || totalPages === 0} onClick={() => onPageChange(currentPage + 1)} className="w-8 h-8 flex items-center justify-center rounded-[6px] bg-[var(--bg-tertiary)] border border-[var(--border-primary)] text-[var(--text-secondary)] disabled:opacity-50 hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] transition-all disabled:cursor-not-allowed">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
// --- LOGIC HELPER ---
const formatType = (t: string) => t ? t.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'Unknown';

const getRiskTagStyle = (tag: RiskTag) => {
  const cls = tag.class?.toLowerCase() || 'default';

  if (cls === 'high' || cls === 'critical') return 'bg-red-500/15 text-red-500';
  if (cls === 'medium' || cls === 'warning') return 'bg-yellow-500/15 text-yellow-600'; // Kuning agak gelap agar terbaca
  if (cls === 'low' || cls === 'info') return 'bg-blue-500/15 text-blue-500';
  if (cls === 'success') return 'bg-emerald-500/15 text-emerald-500';

  return 'bg-gray-500/15 text-gray-500';
};

const countryCodeToEmoji = (code: string) => {
    if (!code || code === 'Unknown') return '🌐';
    const offset = 127397;
    return code.toUpperCase().split('').map(char => String.fromCodePoint(char.charCodeAt(0) + offset)).join('');
};


// Timeline Generator (Visual Dinamis)
const generateTimeline = (e: AuthEvent) => {
  const timeline = [];
  const t = new Date(e.timestamp);

  // 1. Final Event (Top)
  let dotColor = 'bg-[var(--success)]';
  if (e.result === 'BLOCKED' || e.result === 'FAILED' || e.result === 'REJECTED') dotColor = 'bg-[var(--error)]';
  else if (e.result.includes('CHALLENGE') || e.result === 'TIMEOUT') dotColor = 'bg-[var(--warning)]';

  timeline.push({
    label: `${formatType(e.type)} ${e.resultLabel}`,
    time: t.toLocaleTimeString('en-US', { hour12: false }),
    dotColor: dotColor
  });

  // 2. Risk/Auth Steps
  // if (e.result === 'SUCCESS' || e.result.includes('CHALLENGE')) {
  //   timeline.push({
  //     label: 'Biometric / Risk Check',
  //     time: new Date(t.getTime() - 2000).toLocaleTimeString('en-US', { hour12: false }),
  //     dotColor: 'bg-[var(--bg-tertiary)]'
  //   });
  // }

  // 3. Risk Context in Timeline
  if (e.risk.tags && e.risk.tags.length > 0) {
    e.risk.tags.forEach((tag, i) => {
      timeline.push({
        label: `${tag.label.replace(/_/g, ' ')}`, // Ambil label-nya
        time: new Date(t.getTime() - (3000 + (i * 500))).toLocaleTimeString('en-US', { hour12: false }),
        dotColor: `${getRiskTagStyle(tag).includes('red') ? 'bg-[var(--error)]' : getRiskTagStyle(tag).includes('yellow') ? 'bg-[var(--warning)]' : getRiskTagStyle(tag).includes('blue') ? 'bg-[var(--info)]' : getRiskTagStyle(tag).includes('emerald') ? 'bg-[var(--success)]' : 'bg-[var(--bg-tertiary)]'}`
      });
    });
  }

  // 4. Start (Bottom)
  timeline.push({
    label: 'Request initiated',
    time: new Date(t.getTime() - 5000).toLocaleTimeString('en-US', { hour12: false }),
    dotColor: 'bg-[var(--bg-tertiary)]'
  });

  return timeline;
};

// --- PAGE COMPONENT UTAMA ---

export default function AuthLogsPage() {
  const [logs, setLogs] = useState<AuthEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // State Statistik
  const [stats, setStats] = useState({
    total: { value: 0, text: '—', trend: 'neutral' as any },
    success: { value: '0%', text: '—', trend: 'neutral' as any },
    failed: { value: 0, text: '—', trend: 'neutral' as any },
    risk: { value: 0, text: '—', trend: 'neutral' as any },
    passkey: { value: 0, text: '—', trend: 'neutral' as any }
  });

  // Filters State
  const [eventType, setEventType] = useState('');
  const [resultFilter, setResultFilter] = useState('');
  const [startDate, setStartDate] = useState(''); // DIKOSONGKAN
  const [endDate, setEndDate] = useState('');     // DIKOSONGKAN
  const [activeChips, setActiveChips] = useState<Set<string>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedEvent, setSelectedEvent] = useState<AuthEvent | null>(null);

  // FETCH DATA (SAFE PARSING LOGIC)
  const fetchLogs = async () => {
    setLoading(true);
    try {
      const rawLogs = await adminService.getAuthLogs();

      const mappedData: AuthEvent[] = rawLogs.map((log: any) => {

        // --- EXTRACTION LOGIC ---
        let richData: any = {};
        let tagsArray: RiskTag[] = [];

        // Parse riskTags field (bisa string, bisa object)
        if (typeof log.riskTags === 'string') {
          try { richData = JSON.parse(log.riskTags); } catch { richData = {}; }
        } else if (typeof log.riskTags === 'object' && log.riskTags !== null) {
          richData = log.riskTags;
        }

        // 1. Ambil Tags Array
        if (Array.isArray(richData.tags)) {
          tagsArray = richData.tags;
        } else if (Array.isArray(richData)) {
          // Fallback jika format lama (array strings/obj langsung)
          tagsArray = richData.map((t: any) => typeof t === 'string' ? { label: t, class: 'default' } : t);
        }

        // 2. Ambil Telemetry & Network
        const telemetry = richData.telemetry || {};
        const network = richData.network || {};
        const deviceInfo = richData.device_info || {};

        // 3. Status Mapping
        const statusRaw = log.status?.toUpperCase() || 'UNKNOWN';
        let statusLabel = 'Success';
        if (statusRaw === 'BLOCKED' || statusRaw === 'FAILED' || statusRaw === 'REJECTED') statusLabel = 'Blocked';
        else if (statusRaw.includes('CHALLENGE') || statusRaw === 'TIMEOUT') statusLabel = 'Challenged';

        // 4. Construct Event Object
        return {
          id: log.id.toString(),
          type: log.eventType || 'unknown',
          timestamp: log.createdAt,
          result: statusRaw,
          resultLabel: statusLabel,
          userId: log.email || log.userName || 'Unknown',
          paymentId: richData.paymentId || null,
          isNewDevice: tagsArray.some(t => t.label.toLowerCase().includes('new device')),

          device: {
            type: deviceInfo.type || (log.userAgent?.toLowerCase().includes('mobile') ? 'Mobile' : 'Desktop'),
            os: deviceInfo.os || log.userAgent || 'Unknown',
            model: telemetry.device_model || log.device || 'Unknown Device',
            browser: log.userAgent?.split('/')[0] || 'Unknown Browser'
          },

          location: {
            country: network.country || log.countryCode || 'Unknown',
            city: richData.location?.split(',')[0] || log.location?.split(',')[0] || 'Unknown',
            ip: network.ip || log.ipAddress || '0.0.0.0',
            flag: (network.country || log.countryCode) === 'MY' ? '🇲🇾' : (network.country || log.countryCode) === 'ID' ? '🇮🇩' : (network.country || log.countryCode) === 'UK' || (network.country || log.countryCode) === 'GB' ? '🇬🇧' : '🌐',
            asn: network.asn || 'AS-UNKNOWN',
            isp: network.isp || 'Unknown ISP',
            lat: telemetry.gps_latitude,
            long: telemetry.gps_longitude
          },

          risk: {
            score: richData.riskScore || log.riskScore || 0,
            level: richData.riskLevel || 'UNKNOWN',
            amount: richData.amount ? `${richData.currency || '$'}${richData.amount}` : undefined,
            amountClass: (richData.amount > 1000) ? 'high' : 'low',
            network: telemetry.is_vpn_active ? 'vpn' : richData.isVpn ? 'vpn' : undefined,
            tags: tagsArray,
            reasons: richData.reasonCodes || [],
            beneficiary: richData.beneficiaryAccount
          }
        };
      });

      setLogs(mappedData);
      calculateStats(mappedData);

      console.log('Fetched Logs:', mappedData);

    } catch (err) {
      console.error('Failed to load logs', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  // CALC STATS
  const calculateStats = (data: AuthEvent[]) => {
    const now = new Date();
    const startToday = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    const startYesterday = startToday - 86400000;

    const todayLogs = data.filter(l => new Date(l.timestamp).getTime() >= startToday);
    const yesterdayLogs = data.filter(l => {
      const t = new Date(l.timestamp).getTime();
      return t >= startYesterday && t < startToday;
    });

    const getChange = (curr: number, prev: number) => prev === 0 ? (curr > 0 ? 100 : 0) : ((curr - prev) / prev) * 100;
    const formatChangeText = (pct: number) => `${pct > 0 ? '↑' : pct < 0 ? '↓' : ''} ${pct > 0 ? '+' : ''}${pct.toFixed(1)}% from yesterday`;

    const totalToday = todayLogs.length;
    const totalYest = yesterdayLogs.length;
    const totalPct = getChange(totalToday, totalYest);

    const successToday = todayLogs.filter(l => l.result === 'SUCCESS' || l.result === 'APPROVED').length;
    const rateToday = totalToday ? (successToday / totalToday) * 100 : 0;
    const rateDiff = rateToday - (totalYest ? (yesterdayLogs.filter(l => l.result === 'SUCCESS').length / totalYest) * 100 : 0);

    const failToday = todayLogs.filter(l => l.result === 'BLOCKED' || l.result === 'FAILED' || l.result === 'REJECTED').length;
    const failPct = getChange(failToday, yesterdayLogs.filter(l => l.result === 'BLOCKED' || l.result === 'FAILED').length);

    const riskToday = todayLogs.filter(l => l.risk.amountClass === 'high' || l.risk.tags?.length > 0).length;
    const riskPct = getChange(riskToday, yesterdayLogs.filter(l => l.risk.amountClass === 'high' || l.risk.tags?.length > 0).length);

    const pkToday = todayLogs.filter(l => l.type.toLowerCase().includes('passkey')).length;
    const pkPct = getChange(pkToday, yesterdayLogs.filter(l => l.type.toLowerCase().includes('passkey')).length);

    setStats({
      total: { value: totalToday, text: formatChangeText(totalPct), trend: totalPct >= 0 ? 'positive' : 'negative' },
      success: { value: `${rateToday.toFixed(1)}%`, text: `${rateDiff >= 0 ? '↑ +' : '↓ '}${rateDiff.toFixed(1)}% from yesterday`, trend: rateDiff >= 0 ? 'positive' : 'negative' },
      failed: { value: failToday, text: formatChangeText(failPct), trend: failPct <= 0 ? 'positive' : 'negative' },
      risk: { value: riskToday, text: formatChangeText(riskPct), trend: riskPct <= 0 ? 'positive' : 'negative' },
      passkey: { value: pkToday, text: formatChangeText(pkPct), trend: 'positive' }
    });
  };

  // HANDLERS
  const toggleChip = (chip: string) => { const newSet = new Set(activeChips); newSet.has(chip) ? newSet.delete(chip) : newSet.add(chip); setActiveChips(newSet); setCurrentPage(1); };
  const handleClearFilters = () => { setEventType(''); setResultFilter(''); setActiveChips(new Set()); setCurrentPage(1); };

  const filteredData = logs.filter(e => {
    const matchType = eventType === '' || e.type.toLowerCase().includes(eventType.toLowerCase());
    const matchResult = resultFilter === '' || e.resultLabel.toLowerCase() === resultFilter.toLowerCase();
    let matchDate = true;
    if (startDate && endDate) {
      const d = new Date(e.timestamp); const start = new Date(startDate); const end = new Date(endDate); end.setHours(23, 59, 59);
      matchDate = d >= start && d <= end;
    }
    let matchChips = true;
    if (activeChips.has('new-device') && !e.isNewDevice) matchChips = false;
    if (activeChips.has('vpn') && e.risk.network !== 'vpn') matchChips = false;
    // Updated chip logic with safe String usage
    if (activeChips.has('high-risk') && (
      e.risk.amountClass !== 'high' &&
      !e.risk.tags?.some(t => t.class === 'high' || t.label.toLowerCase().includes('high'))
    )) matchChips = false;
    return matchType && matchResult && matchDate && matchChips;
  });

  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage) || 1;
  const paginatedData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="flex min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-[family-name:var(--font-inter)]">
      <main className="flex-1 flex flex-col h-screen overflow-hidden">

        {/* HEADER */}
        <header className="px-6 py-3 border-b border-[var(--border-secondary)] bg-[var(--bg-secondary)] flex justify-between items-center shrink-0 h-[60px]">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-[var(--text-tertiary)]">Security</span><span className="text-[var(--text-muted)]">/</span><span className="font-medium text-[var(--text-primary)]">Authentication Logs</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-xs text-[var(--success)] mr-2"><span className="w-2 h-2 rounded-full bg-[var(--success)] animate-pulse"></span> Live</div>
            <div className="flex items-center gap-2 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] px-3 py-2 min-w-[280px]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--text-tertiary)]"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
              <input type="text" placeholder="Search by user, payment, or ID..." className="bg-transparent border-none outline-none text-[13px] text-[var(--text-primary)] placeholder-[var(--text-tertiary)] flex-1" />
              <span className="text-[10px] text-[var(--text-tertiary)] bg-[var(--bg-secondary)] px-1.5 py-0.5 rounded border border-[var(--border-secondary)] font-mono">⌘K</span>
            </div>
            <button className="flex items-center gap-1.5 px-3.5 py-2 rounded-[var(--radius-md)] text-[13px] font-medium bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-primary)] hover:bg-[var(--bg-hover)] transition-all">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7,10 12,15 17,10" /><line x1="12" y1="15" x2="12" y2="3" /></svg> Export
            </button>
            <button onClick={fetchLogs} className="flex items-center gap-1.5 px-3.5 py-2 rounded-[var(--radius-md)] text-[13px] font-medium bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-all">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={loading ? 'animate-spin' : ''}><polyline points="23,4 23,10 17,10" /><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" /></svg> Refresh
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-auto p-6 flex flex-col">
          {/* STATS BAR */}
          <div className="grid grid-cols-5 gap-4 mb-6 shrink-0">
            <StatsCard label="Total Events (24h)" value={stats.total.value} change={stats.total.text} trend={stats.total.trend} icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>} />
            <StatsCard label="Success Rate" value={stats.success.value} change={stats.success.text} trend={stats.success.trend} icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>} />
            <StatsCard label="Failed / Blocked" value={stats.failed.value} change={stats.failed.text} trend={stats.failed.trend} icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>} />
            <StatsCard label="Risk Alerts" value={stats.risk.value} change={stats.risk.text} trend={stats.risk.trend} icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>} />
            <StatsCard label="New Passkeys" value={stats.passkey.value} change={stats.passkey.text} trend={stats.passkey.trend} icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>} />
          </div>

          {/* FILTERS BAR */}
          <div className="flex items-center gap-3 mb-5 shrink-0 flex-wrap">
            <div className="flex items-center gap-2"><label className="text-xs text-[var(--text-tertiary)]">Event Type</label><select className="bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] px-2.5 py-1.5 text-[13px] text-[var(--text-primary)] outline-none min-w-[140px] cursor-pointer" value={eventType} onChange={e => setEventType(e.target.value)}><option value="">All Events</option><option value="passkey_registered">Passkey Registered</option><option value="payment_approval_requested">Approval Requested</option><option value="payment_approved">Payment Approved</option><option value="payment_denied">Payment Denied</option><option value="biometric_login">Biometric Login</option></select></div>
            <div className="flex items-center gap-2"><label className="text-xs text-[var(--text-tertiary)]">Result</label><select className="bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] px-2.5 py-1.5 text-[13px] text-[var(--text-primary)] outline-none min-w-[120px] cursor-pointer" value={resultFilter} onChange={e => setResultFilter(e.target.value)}><option value="">All Results</option><option value="success">Success</option><option value="blocked">Blocked/Failed</option><option value="challenged">Challenged</option></select></div>
            <div className="flex items-center gap-2"><label className="text-xs text-[var(--text-tertiary)]">Date Range</label><div className="flex items-center gap-2 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] px-3 py-1.5"><input type="date" className="bg-transparent border-none text-[13px] outline-none text-[var(--text-primary)] w-[110px] [color-scheme:dark]" value={startDate} onChange={e => setStartDate(e.target.value)} /><span className="text-[var(--text-tertiary)]">→</span><input type="date" className="bg-transparent border-none text-[13px] outline-none text-[var(--text-primary)] w-[110px] [color-scheme:dark]" value={endDate} onChange={e => setEndDate(e.target.value)} /></div></div>
            <button onClick={() => toggleChip('new-device')} className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-[20px] border text-[12px] transition-all ${activeChips.has('new-device') ? 'bg-[var(--accent)] border-[var(--accent)] text-white' : 'bg-[var(--bg-tertiary)] border-[var(--border-primary)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--text-primary)]'}`}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg> New Device</button>
            <button onClick={() => toggleChip('vpn')} className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-[20px] border text-[12px] transition-all ${activeChips.has('vpn') ? 'bg-[var(--accent)] border-[var(--accent)] text-white' : 'bg-[var(--bg-tertiary)] border-[var(--border-primary)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--text-primary)]'}`}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg> VPN/Proxy</button>
            <button onClick={() => toggleChip('high-risk')} className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-[20px] border text-[12px] transition-all ${activeChips.has('high-risk') ? 'bg-[var(--accent)] border-[var(--accent)] text-white' : 'bg-[var(--bg-tertiary)] border-[var(--border-primary)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--text-primary)]'}`}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg> High Risk</button>
            <div className="flex-1"></div>
            <button onClick={handleClearFilters} className="px-3.5 py-1.5 text-[13px] font-medium bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] text-[var(--text-primary)] hover:bg-[var(--bg-hover)] transition-all">Clear Filters</button>
          </div>

          {/* TABLE RENDER */}
          {loading ? <div className="text-[var(--text-tertiary)] text-center py-10 text-sm">Loading logs...</div> :
            <DataTable
              columns={[
                { header: 'Event Type', className: 'pl-5' },
                { header: 'Timestamp' },
                { header: 'User' },
                { header: 'Device' },
                { header: 'Location' },
                { header: 'Risk Context' },
                { header: 'Result', className: 'text-right' }
              ]}
              data={paginatedData}
              currentPage={currentPage}
              totalPages={totalPages}
              itemsPerPage={itemsPerPage}
              onPageChange={setCurrentPage}
              totalItems={filteredData.length}
              renderRow={(e: AuthEvent) => (
                <tr key={e.id} onClick={() => setSelectedEvent(e)} className="group border-b border-[var(--border-secondary)] hover:bg-[var(--bg-hover)] cursor-pointer transition-colors">
                  <td className="p-3 pl-5">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[20px] text-xs font-medium ${e.type.includes('Passkey') ? 'bg-[var(--info-bg)] text-[var(--info)]' :
                      e.type.includes('Approval') || e.type.includes('Requested') ? 'bg-[var(--warning-bg)] text-[var(--warning)]' :
                        e.type.includes('Approved') || e.type.includes('Success') ? 'bg-[var(--success-bg)] text-[var(--success)]' :
                          'bg-[var(--error-bg)] text-[var(--error)]'
                      }`}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        {e.type.includes('Passkey') && <><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></>}
                        {(e.type.includes('Approval') || e.type.includes('Requested')) && <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>}
                        {e.type.includes('Approved') && <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></>}
                        {(e.type.includes('Denied') || e.type.includes('Blocked')) && <><circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" /></>}
                        {(e.type.includes('Device') || e.type.includes('Revoked')) && <><circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" /></>}
                      </svg>
                      {formatType(e.type)}
                    </span>
                  </td>
                  <td className="p-3"><div className="flex flex-col gap-0.5"><span className="text-[13px] text-[var(--text-primary)]">{new Date(e.timestamp).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span><span className="text-[11px] text-[var(--text-tertiary)] font-mono">{new Date(e.timestamp).toLocaleTimeString('en-US', { hour12: false })} UTC</span></div></td>
                  <td className="p-3"><div className="flex flex-col gap-0.5"><span className="text-[12px] font-mono text-[var(--text-secondary)]">{e.userId}</span><span className="text-[11px] font-mono text-[var(--text-tertiary)]">{e.paymentId || '—'}</span></div></td>
                  <td className="p-3"><div className="flex items-center gap-2"><div className="w-7 h-7 rounded-[var(--radius-md)] bg-[var(--bg-tertiary)] flex items-center justify-center shrink-0"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--text-secondary)]">{e.device.type.toLowerCase().includes('mobile') || e.device.type.toLowerCase().includes('phone') ? <><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></> : <><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></>}</svg></div><div className="flex flex-col"><span className="text-[13px] text-[var(--text-primary)]">{e.device.model}</span><div className="flex items-center gap-1.5"><span className="text-[11px] text-[var(--text-tertiary)] max-w-[120px] truncate">{e.device.os}</span>{e.isNewDevice && <span className="text-[9px] bg-[var(--purple-bg)] text-[var(--purple)] px-1.5 py-0.5 rounded font-bold uppercase tracking-wide">New</span>}</div></div></div></td>
                  <td className="p-3"><div className="flex items-center gap-2"><span className="text-base">{countryCodeToEmoji(e.location.country)}</span><div className="flex flex-col"><span className="text-[13px] text-[var(--text-primary)]">{e.location.country}</span><span className="text-[11px] text-[var(--text-tertiary)] font-mono">{e.location.ip}</span></div></div>{e.risk.network && <div className={`mt-1 inline-block text-[9px] px-1.5 py-0.5 rounded font-bold uppercase ${e.risk.network === 'vpn' ? 'bg-[var(--warning-bg)] text-[var(--warning)]' : 'bg-[var(--info-bg)] text-[var(--info)]'}`}>{e.risk.network}</div>}</td>

                  {/* RISK CONTEXT RENDER */}
                  <td className="p-3">
                    <div className="flex flex-wrap gap-1.5 max-w-[200px]">
                      {e.risk.tags.length > 0 ? (
                        e.risk.tags.map((tag, i) => (
                          <span key={i} className={`px-2.5 py-1 rounded-[6px] text-[11px] font-medium ${getRiskTagStyle(tag)} uppercase tracking-wide`}>
                            {tag.label.replace(/_/g, ' ')}
                          </span>
                        ))
                      ) : (
                        <span className="text-[11px] text-[var(--text-tertiary)]">-</span>
                      )}
                    </div>
                  </td>

                  <td className="p-3 text-right">
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-[var(--radius-sm)] text-[12px] font-medium capitalize ${e.resultLabel === 'Success' ? 'bg-[var(--success-bg)] text-[var(--success)]' :
                      e.resultLabel === 'Blocked' ? 'bg-[var(--error-bg)] text-[var(--error)]' :
                        'bg-[var(--warning-bg)] text-[var(--warning)]' // Challenged
                      }`}>
                      {e.resultLabel === 'Success' && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>}
                      {e.resultLabel === 'Blocked' && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>}
                      {e.resultLabel}
                    </span>
                  </td>
                </tr>
              )}
            />
          }
        </div>

        <SlideOver
          isOpen={!!selectedEvent}
          onClose={() => setSelectedEvent(null)}
          title="Event Details"
          footer={
            <div className="flex gap-2 w-full">
              <button className="flex-1 py-2 border border-[var(--border-primary)] rounded-[6px] text-[13px] text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)] transition-all">View User</button>
              <button className="flex-1 py-2 border border-[var(--border-primary)] rounded-[6px] text-[13px] text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)] transition-all">View Device</button>
              <button onClick={() => { if (selectedEvent?.paymentId) router.push(`/investigation?id=${selectedEvent.paymentId}`); else alert('No ID'); }} className="flex-1 py-2 bg-[var(--accent)] text-white rounded-[6px] text-[13px] hover:bg-[var(--accent-hover)] transition-all font-medium shadow-sm">Investigate</button>
            </div>
          }
        >
          {selectedEvent && (
            <div className="space-y-6">

              {/* Section 1: Authentication Event */}
              <div className="pb-2">
                <div className="flex items-center gap-2 text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-[0.5px] mb-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg> Authentication Event
                </div>
                <div className="flex justify-between py-2 border-b border-[var(--border-secondary)]">
                  <span className="text-[13px] text-[var(--text-tertiary)]">Event Type</span>
                  <span className={`px-2 py-0.5 rounded-[20px] text-[11px] font-medium ${selectedEvent.type.includes('Approved') ? 'bg-[var(--success-bg)] text-[var(--success)]' : 'bg-[var(--error-bg)] text-[var(--error)]'}`}>{formatType(selectedEvent.type)}</span>
                </div>
                <DetailRow label="Event ID" value={selectedEvent.id} valueClass="font-mono text-[12px]" />
                <DetailRow label="Timestamp" value={new Date(selectedEvent.timestamp).toISOString()} valueClass="font-mono text-[12px]" />
                <DetailRow label="User ID" value={selectedEvent.userId} valueClass="font-mono text-[12px]" />
                <DetailRow label="Payment ID" value={selectedEvent.paymentId || '—'} valueClass="font-mono text-[12px]" />
                <div className="flex justify-between py-2.5 border-b border-[var(--border-secondary)]">
                  <span className="text-[13px] text-[var(--text-tertiary)]">Result</span>
                  <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-[4px] text-[12px] font-medium ${selectedEvent.resultLabel === 'Success' ? 'bg-[var(--success-bg)] text-[var(--success)]' : 'bg-[var(--error-bg)] text-[var(--error)]'}`}>{selectedEvent.resultLabel}</span>
                </div>
              </div>

              {/* Section 2: Device & Environment */}
              <div className="pb-2">
                <div className="flex items-center gap-2 text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-[0.5px] mb-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg> Device & Environment
                </div>
                <DetailRow label="Device Type" value={selectedEvent.device.type} />
                <DetailRow label="Device Model" value={selectedEvent.device.model} />
                <DetailRow label="OS & Version" value={selectedEvent.device.os} />
                <DetailRow label="Browser / User Agent" value={selectedEvent.device.browser} />
                {selectedEvent.isNewDevice && (
                  <div className="flex justify-between py-2.5 border-b border-[var(--border-secondary)]">
                    <span className="text-[13px] text-[var(--text-tertiary)]">Flag</span>
                    <span className="text-[10px] bg-[var(--purple-bg)] text-[var(--purple)] px-2 py-0.5 rounded font-bold uppercase">NEW DEVICE</span>
                  </div>
                )}
              </div>

              {/* Section 3: Network & Location */}
              <div className="pb-2">
                <div className="flex items-center gap-2 text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-[0.5px] mb-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg> Network & Location
                </div>
                <DetailRow label="IP Address" value={selectedEvent.location.ip} valueClass="font-mono text-[12px]" />
                <div className="flex justify-between py-2.5 border-b border-[var(--border-secondary)]">
                  <span className="text-[13px] text-[var(--text-tertiary)]">Location</span>
                  <span className="text-[13px] text-[var(--text-primary)] text-right"><span className="mr-1.5">{countryCodeToEmoji(selectedEvent.location.country)}</span>{selectedEvent.location.city}, {selectedEvent.location.country}</span>
                </div>
                <DetailRow label="ASN / ISP" value={`${selectedEvent.location.asn} - ${selectedEvent.location.isp}`} />
                <DetailRow label="Coordinates" value={selectedEvent.location.lat ? `${selectedEvent.location.lat}, ${selectedEvent.location.long}` : '—'} valueClass="font-mono text-[11px]" />
                <div className="flex justify-between py-2.5 border-b border-[var(--border-secondary)]">
                  <span className="text-[13px] text-[var(--text-tertiary)]">Network Signals</span>
                  <span className={`text-[12px] font-medium ${selectedEvent.risk.network ? 'text-[var(--warning)]' : 'text-[var(--success)]'}`}>
                    {selectedEvent.risk.network ? selectedEvent.risk.network.toUpperCase() + ' DETECTED' : 'Clean (No VPN/Proxy)'}
                  </span>
                </div>
              </div>

              {/* Section 4: Risk Context */}
              <div className="pb-2">
                <div className="flex items-center gap-2 text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-[0.5px] mb-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg> Risk Context
                </div>
                {selectedEvent.risk.amount && <DetailRow label="Transaction Amount" value={selectedEvent.risk.amount} valueClass="font-mono font-medium" />}
                <DetailRow label="Beneficiary" value={selectedEvent.risk.beneficiary || '—'} valueClass="font-mono text-[12px]" />
                <div className="flex justify-between py-2.5 border-b border-[var(--border-secondary)]">
                  <span className="text-[13px] text-[var(--text-tertiary)]">Risk Score</span>
                  <span className={`text-[13px] font-bold ${selectedEvent.risk.score > 60 ? 'text-[var(--error)]' : 'text-[var(--success)]'}`}>
                    {selectedEvent.risk.score} / 100 ({selectedEvent.risk.level})
                  </span>
                </div>
                {selectedEvent.risk.reasons.length > 0 && (
                  <div className="mt-3 bg-[var(--bg-tertiary)] rounded-[8px] p-3 border border-[var(--border-primary)]">
                    <span className="block text-[11px] text-[var(--text-tertiary)] mb-2 uppercase font-semibold">Reason Codes</span>
                    <ul className="space-y-2">
                      {selectedEvent.risk.reasons.map((r, i) => (
                        <li key={i} className="flex justify-between items-start text-[12px]">
                          <span className="text-[var(--text-secondary)]">{r.rule} {r.desc && <span className="text-[var(--text-tertiary)]">- {r.desc}</span>}</span>
                          <span className="font-mono text-[var(--error)]">+{r.score}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Section 5: Timeline */}
              <div>
                <div className="flex items-center gap-2 text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-[0.5px] mb-4">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg> Event Timeline
                </div>
                <div className="relative border-l-2 border-[var(--border-primary)] ml-2 pl-6 space-y-5 pb-2">
                  {generateTimeline(selectedEvent).map((t, i) => (
                    <div key={i} className="relative">
                      <div className={`absolute -left-[31px] top-1 w-4 h-4 rounded-full border-2 border-[var(--bg-secondary)] ${t.dotColor === 'success' ? 'bg-[var(--success)]' : t.dotColor === 'error' ? 'bg-[var(--error)]' : t.dotColor === 'warning' ? 'bg-[var(--warning)]' : 'bg-[var(--bg-tertiary)]'}`}></div>
                      <div className="text-[13px] text-[var(--text-primary)]">{t.label}</div>
                      <div className="text-[11px] text-[var(--text-tertiary)] font-mono mt-0.5">{t.time}</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}
        </SlideOver>
      </main>
    </div>
  );
}