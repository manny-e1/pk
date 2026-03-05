'use client';

import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardSubtitle, CardBody } from '@/components/ui/Card';
import {
    Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend, Filler
} from 'chart.js';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { adminService } from '@/services/adminService';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend, Filler);

ChartJS.defaults.color = '#9b9b9b';
ChartJS.defaults.borderColor = '#383838';
ChartJS.defaults.font.family = "'Inter', sans-serif";
ChartJS.defaults.font.size = 11;

const countryCodeToEmoji = (code: string) => {
    if (!code || code === 'Unknown') return '🌐';
    const offset = 127397;
    return code.toUpperCase().split('').map(char => String.fromCodePoint(char.charCodeAt(0) + offset)).join('');
};

const getCountryName = (code: string) => {
    if (!code || code === 'Unknown') return 'Unknown';
    
    try {
        const regionNamesInEnglish = new Intl.DisplayNames(['en'], { type: 'region' });
        
        return regionNamesInEnglish.of(code.toUpperCase()) || code;
    } catch (error) {
        return code;
    }
};

const getGeoColor = (index: number) => {
    const colors = ['bg-[#22c55e]', 'bg-[#3b82f6]', 'bg-[#8b5cf6]', 'bg-[#f59e0b]', 'bg-[#22c55e]'];
    return colors[index % colors.length];
};

export default function DashboardPage() {
    const [timeRange, setTimeRange] = useState('7d');
    const [loading, setLoading] = useState(true);

    const [data, setData] = useState({
        funnel: { total: 0, requested: 0, approved: 0 },
        metrics: { 
            totalTx: 0, 
            prevTotalTx: 0, 
            uniqueUsers: 0, 
            successRate: "0.0", 
            txChange: 0,
            avgTime: "0.0s",
            avgTimeChange: "—"
        },
        trendChart: { labels: [], approved: [], denied: [], timeout: [] },
        securityChart: { labels: [], failed: [], retry: [] },
        deviceStats: { mobile: 0, desktop: 0, tablet: 0 },
        platformStats: [], 
        amountStats: [],
        geoStats: []
    });

    useEffect(() => {
        async function loadData() {
            setLoading(true);
            try {
                const stats = await adminService.getDashboardStats(timeRange);
                if (stats && stats.metrics) {
                    setData(prev => ({ ...prev, ...stats }));
                }
            } catch (e) {
                console.error("Dashboard load error", e);
            } finally {
                setLoading(false);
            }
        }
        loadData();
    }, [timeRange]);


    const deviceChartData = {
        labels: ['Mobile', 'Desktop', 'Tablet'],
        datasets: [{
            data: [data.deviceStats.mobile, data.deviceStats.desktop, data.deviceStats.tablet],
            backgroundColor: ['#22c55e', '#3b82f6', '#8b5cf6'],
            borderWidth: 0,
            hoverOffset: 4,
            cutout: '75%',
        }]
    };

    const trendChartData = {
        labels: data.trendChart.labels.length ? data.trendChart.labels : ['No Data'],
        datasets: [
            { label: 'Approved', data: data.trendChart.approved, backgroundColor: '#22c55e', borderRadius: 4, barPercentage: 0.6, categoryPercentage: 0.7 },
            { label: 'Denied', data: data.trendChart.denied, backgroundColor: '#f87171', borderRadius: 4, barPercentage: 0.6, categoryPercentage: 0.7 },
            { label: 'Timeout', data: data.trendChart.timeout, backgroundColor: '#fbbf24', borderRadius: 4, barPercentage: 0.6, categoryPercentage: 0.7 }
        ]
    };

    const securityChartData = {
        labels: data.securityChart.labels.length ? data.securityChart.labels : ['No Data'],
        datasets: [
            {
                label: 'Failed Approvals',
                data: data.securityChart.failed,
                borderColor: '#f59e0b',
                backgroundColor: 'rgba(245, 158, 11, 0.1)', 
                tension: 0.4,
                fill: true,
                pointRadius: 3, 
                pointHoverRadius: 5,
                borderWidth: 2,
                pointBackgroundColor: '#f59e0b'
            },
            {
                label: 'Retry Attempts',
                data: data.securityChart.retry,
                borderColor: '#f87171',
                backgroundColor: 'rgba(248, 113, 113, 0.1)', 
                tension: 0.4,
                fill: true,
                pointRadius: 3, 
                pointHoverRadius: 5,
                borderWidth: 2,
                pointBackgroundColor: '#f87171'
            }
        ]
    };

    const funnelReqPct = data.funnel.total > 0 ? ((data.funnel.requested / data.funnel.total) * 100).toFixed(1) : "0.0";
    const funnelAppPct = data.funnel.total > 0 ? ((data.funnel.approved / data.funnel.total) * 100).toFixed(1) : "0.0";
    const dropReq = data.funnel.total - data.funnel.requested;
    const dropApp = data.funnel.requested - data.funnel.approved;
    const dropReqPct = data.funnel.total > 0 ? ((dropReq / data.funnel.total) * 100).toFixed(1) : "0.0";
    const dropAppPct = data.funnel.requested > 0 ? ((dropApp / data.funnel.requested) * 100).toFixed(1) : "0.0";

    const totalFailed = data.securityChart.failed.reduce((a: any, b: any) => a + b, 0);
    const totalRetry = data.securityChart.retry.reduce((a: any, b: any) => a + b, 0);
    const totalBlocked = data.trendChart.denied.reduce((a: any, b: any) => a + b, 0);

    const displayAvgTime = data.metrics.avgTime === '0.00s' ? '< 0.01s' : data.metrics.avgTime;

    const securityLineOptions: any = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: { grid: { display: false }, ticks: { color: '#6b6b6b', font: { size: 10 } } },
            y: { beginAtZero: true, grid: { color: '#2d2d2d', drawBorder: false }, border: { display: false }, ticks: { display: false } }
        },
        plugins: {
            legend: { position: 'bottom', align: 'start', labels: { usePointStyle: true, padding: 15, color: '#9b9b9b', boxWidth: 8 } },
            tooltip: { mode: 'index', intersect: false, backgroundColor: '#202020', titleColor: '#ebebeb', bodyColor: '#9b9b9b', borderColor: '#383838', borderWidth: 1 }
        },
        interaction: { mode: 'nearest', axis: 'x', intersect: false }
    };

    const barOptions: any = {
        responsive: true,
        maintainAspectRatio: false,
        scales: { 
            x: { stacked: false, grid: { display: false }, ticks: { color: '#6b6b6b' } }, 
            y: { stacked: false, display: true, grid: { color: '#2d2d2d' }, border: { display: false }, ticks: { color: '#6b6b6b' } } 
        },
        plugins: { 
            legend: { position: 'bottom', labels: { usePointStyle: true, padding: 20, color: '#9b9b9b' } },
            tooltip: { backgroundColor: '#202020', titleColor: '#ebebeb', bodyColor: '#9b9b9b', borderColor: '#383838', borderWidth: 1 } 
        }
    };

    return (
        <div className="flex min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans">
            <main className="flex-1 flex flex-col h-screen overflow-hidden">
                <header className="px-6 py-3 border-b border-[var(--border-secondary)] bg-[var(--bg-secondary)] flex justify-between items-center shrink-0 h-[60px]">
                    <div className="flex items-center gap-2"><h1 className="text-lg font-semibold text-[var(--text-primary)]">Dashboard</h1></div>
                    <div className="flex items-center gap-3">
                        <div className="flex bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] overflow-hidden">
                            {['24h', '7d', '30d', '90d'].map((range) => <button key={range} onClick={() => setTimeRange(range)} className={`px-3.5 py-2 text-[13px] font-medium transition-colors ${timeRange === range ? 'bg-[var(--accent)] text-white' : 'text-[var(--text-secondary)] hover:bg-[var(--bg-hover)]'}`}>{range}</button>)}
                        </div>
                        <button className="flex items-center gap-1.5 px-3.5 py-2 rounded-[var(--radius-md)] text-[13px] font-medium bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-primary)] hover:bg-[var(--bg-hover)] transition-all">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7,10 12,15 17,10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                            Export
                        </button>
                        <button onClick={() => window.location.reload()} className="flex items-center gap-1.5 px-3.5 py-2 rounded-[var(--radius-md)] text-[13px] font-medium bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-all">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`}><polyline points="23,4 23,10 17,10" /><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" /></svg> Refresh
                        </button>
                    </div>
                </header>

                <div className="flex-1 overflow-auto p-6 custom-scrollbar">
                    <div className="grid grid-cols-12 gap-5">

                        <Card className="col-span-7">
                            <CardHeader><div><CardTitle icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>}>Authentication Funnel</CardTitle><CardSubtitle>Conversion based on live transactions</CardSubtitle></div></CardHeader>
                            <CardBody>
                                <div className="py-2">
                                    <div className="flex items-center mb-4"><div className="flex-1 relative h-12 rounded-[var(--radius-md)] flex items-center px-4 bg-gradient-to-r from-blue-500 to-blue-600 w-full" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 50%, 100% 100%, 0% 100%)' }}><span className="text-[13px] font-medium text-white z-10">Total Transactions</span></div><div className="w-[140px] text-right pl-5"><div className="text-lg font-semibold text-[var(--text-primary)] tabular-nums">{data.funnel.total.toLocaleString()}</div><div className="text-xs text-[var(--text-tertiary)]">100%</div></div></div>
                                    <div className="flex items-center mb-4"><div className="flex-1 relative"><div className="h-12 rounded-[var(--radius-md)] flex items-center px-4 bg-gradient-to-r from-violet-500 to-violet-600" style={{ width: `${Math.max(parseFloat(funnelReqPct), 5)}%`, clipPath: 'polygon(0% 0%, 100% 0%, 100% 50%, 100% 100%, 0% 100%)' }}><span className="text-[13px] font-medium text-white z-10">Approval Requested</span></div></div><div className="w-[140px] text-right pl-5"><div className="text-lg font-semibold text-[var(--text-primary)] tabular-nums">{data.funnel.requested.toLocaleString()}</div><div className="text-xs text-[var(--text-tertiary)]">{funnelReqPct}%</div></div></div>
                                    <div className="flex items-center"><div className="flex-1 relative"><div className="h-12 rounded-[var(--radius-md)] flex items-center px-4 bg-gradient-to-r from-green-500 to-green-600" style={{ width: `${Math.max(parseFloat(funnelAppPct), 5)}%` }}><span className="text-[13px] font-medium text-white z-10">Approved</span></div></div><div className="w-[140px] text-right pl-5"><div className="text-lg font-semibold text-[var(--text-primary)] tabular-nums">{data.funnel.approved.toLocaleString()}</div><div className="text-xs text-[var(--text-tertiary)]">{funnelAppPct}%</div></div></div>
                                </div>
                                <div className="flex items-center gap-5 mt-5 pt-4 border-t border-[var(--border-secondary)]">
                                    <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[var(--warning)]"></div><div><div className="text-xs text-[var(--text-tertiary)]">Drop-off: Initiated → Requested</div><div className="text-[13px] font-semibold text-[var(--text-primary)]">{dropReqPct}% ({dropReq} users)</div></div></div>
                                    <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[var(--error)]"></div><div><div className="text-xs text-[var(--text-tertiary)]">Drop-off: Requested → Approved</div><div className="text-[13px] font-semibold text-[var(--text-primary)]">{dropAppPct}% ({dropApp} users)</div></div></div>
                                </div>
                            </CardBody>
                        </Card>

                        <Card className="col-span-5">
                            <CardHeader>
                                <div>
                                    <CardTitle icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>}>Key Metrics</CardTitle>
                                    <CardSubtitle>Last {timeRange} performance</CardSubtitle>
                                </div>
                            </CardHeader>
                            <CardBody>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-[var(--bg-tertiary)] rounded-[var(--radius-md)] p-4 border border-[var(--border-primary)]">
                                        <div className="text-xs text-[var(--text-tertiary)] mb-2">Overall Success Rate</div>
                                        <div className="text-[28px] font-bold text-[var(--success)]">{data.metrics.successRate}%</div>
                                        <div className="text-xs mt-1.5 text-[var(--success)]">↑ +1.2% vs last week</div>
                                    </div>
                                    <div className="bg-[var(--bg-tertiary)] rounded-[var(--radius-md)] p-4 border border-[var(--border-primary)]">
                                        <div className="text-xs text-[var(--text-tertiary)] mb-2">Avg. Approval Time</div>
                                        <div className="text-[28px] font-bold text-[var(--text-primary)]">{displayAvgTime}</div>
                                        <div className={`text-xs mt-1.5 ${data.metrics.avgTimeChange.includes('↓') ? 'text-[var(--success)]' : 'text-[var(--error)]'}`}>
                                            {data.metrics.avgTimeChange} vs last week
                                        </div>
                                    </div>
                                    <div className="bg-[var(--bg-tertiary)] rounded-[var(--radius-md)] p-4 border border-[var(--border-primary)]">
                                        <div className="text-xs text-[var(--text-tertiary)] mb-2">Total Transactions</div>
                                        <div className="text-[28px] font-bold text-[var(--text-primary)]">{data.metrics.totalTx.toLocaleString()}</div>
                                        <div className={`text-xs mt-1.5 ${data.metrics.txChange >= 0 ? 'text-[var(--success)]' : 'text-[var(--error)]'}`}>
                                            {data.metrics.txChange >= 0 ? '↑' : '↓'} {Math.abs(data.metrics.txChange)} vs last week
                                        </div>
                                    </div>
                                    <div className="bg-[var(--bg-tertiary)] rounded-[var(--radius-md)] p-4 border border-[var(--border-primary)]">
                                        <div className="text-xs text-[var(--text-tertiary)] mb-2">Unique Users</div>
                                        <div className="text-[28px] font-bold text-[var(--text-primary)]">{data.metrics.uniqueUsers.toLocaleString()}</div>
                                        <div className="text-xs mt-1.5 text-[var(--text-tertiary)]">Active this period</div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>

                        <Card className="col-span-4">
                            <CardHeader><CardTitle icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>}>Success by Device Type</CardTitle></CardHeader>
                            <CardBody>
                                <div className="chart-container" style={{ position: 'relative', height: '220px' }}>
                                    <Doughnut data={deviceChartData} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }} />
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                                        <div className="text-[28px] font-bold text-[var(--text-primary)]">{data.metrics.successRate}%</div>
                                        <div className="text-xs text-[var(--text-tertiary)]">Overall</div>
                                    </div>
                                </div>
                                <div className="flex justify-center gap-5 mt-4 flex-wrap">
                                    <div className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)]"><div className="w-2.5 h-2.5 rounded-full bg-[#22c55e]"></div>Mobile</div>
                                    <div className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)]"><div className="w-2.5 h-2.5 rounded-full bg-[#3b82f6]"></div>Desktop</div>
                                    <div className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)]"><div className="w-2.5 h-2.5 rounded-full bg-[#8b5cf6]"></div>Tablet</div>
                                </div>
                            </CardBody>
                        </Card>

                        <Card className="col-span-4">
                            <CardHeader><CardTitle icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /></svg>}>Success by Platform</CardTitle></CardHeader>
                            <CardBody>
                                <div className="flex flex-col gap-4">
                                    {data.platformStats && data.platformStats.length > 0 ? (
                                        data.platformStats.map((p: any, i: number) => (
                                            <div key={i}>
                                                <div className="flex justify-between items-center mb-2">
                                                    <div className="flex items-center gap-2 text-[13px] text-[var(--text-primary)]">
                                                        {p.name === 'iOS' && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[var(--text-tertiary)]"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" /></svg>}
                                                        {p.name === 'Android' && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[var(--text-tertiary)]"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /></svg>}
                                                        {p.name === 'Web' && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[var(--text-tertiary)]"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /></svg>}
                                                        {p.name}
                                                    </div>
                                                    <div className="text-[13px] font-semibold text-[var(--text-primary)]">{p.successRate}</div>
                                                </div>
                                                <div className="h-2 bg-[var(--bg-tertiary)] rounded-full overflow-hidden">
                                                    <div className={`h-full rounded-full bg-gradient-to-r ${
                                                        p.name === 'iOS' ? 'from-green-500 to-green-600' : 
                                                        p.name === 'Android' ? 'from-blue-500 to-blue-600' : 
                                                        'from-amber-500 to-amber-600'
                                                    }`} style={{ width: p.successRate }}></div>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="text-center text-xs text-[var(--text-tertiary)] py-4">No platform data</div>
                                    )}
                                </div>
                            </CardBody>
                        </Card>

                        <Card className="col-span-4">
                            <CardHeader>
                                <CardTitle icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>}>
                                    Success by Amount Tier
                                </CardTitle>
                            </CardHeader>
                            <CardBody>
                                <div className="breakdown-table">
                                    {data.amountStats && data.amountStats.map((item: any, i: number) => {
                                        let iconStr = '$';
                                        let colorClass = 'text-[var(--success)]';
                                        let bgClass = 'bg-[var(--success-bg)]';
                                        let statusText = 'Low friction';

                                        if (i === 1) { 
                                            iconStr = '$$';
                                            colorClass = 'text-[var(--warning)]';
                                            bgClass = 'bg-[var(--warning-bg)]';
                                            statusText = 'Step-up required';
                                        } else if (i === 2) { 
                                            iconStr = '$$$';
                                            colorClass = 'text-[var(--error)]';
                                            bgClass = 'bg-[var(--error-bg)]';
                                            statusText = 'High verification';
                                        }

                                        return (
                                            <div key={i} className="flex items-center py-3 border-b border-[var(--border-secondary)] last:border-0">
                                                <div className={`w-8 h-8 rounded-[var(--radius-md)] flex items-center justify-center mr-3 text-sm font-semibold ${bgClass} ${colorClass}`}>
                                                    {iconStr}
                                                </div>
                                                
                                                <div className="flex-1">
                                                    <div className="text-[13px] font-medium text-[var(--text-primary)]">{item.tier}</div>
                                                    <div className="text-[11px] text-[var(--text-tertiary)]">{item.tx}</div>
                                                </div>
                                                
                                                <div className="text-right">
                                                    <div className={`text-sm font-semibold ${colorClass}`}>{item.rate}</div>
                                                    <div className="text-[11px] text-[var(--text-tertiary)]">{statusText}</div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                    {(!data.amountStats || data.amountStats.length === 0) && (
                                        <div className="text-center text-xs text-[var(--text-tertiary)] py-4">No data available</div>
                                    )}
                                </div>
                            </CardBody>
                        </Card>

                        <Card className="col-span-6">
                            <CardHeader><div><CardTitle icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>}>Security Metrics</CardTitle><CardSubtitle>Anomaly and retry tracking</CardSubtitle></div></CardHeader>
                            <CardBody>
                                <div className="grid grid-cols-3 gap-4 mb-6">
                                    <div className="bg-[var(--bg-tertiary)] rounded-[var(--radius-md)] p-4 text-center">
                                        <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--warning-bg)] text-[var(--warning)] flex items-center justify-center mx-auto mb-3"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><line x1="19" y1="8" x2="19" y2="14" /><line x1="22" y1="11" x2="16" y2="11" /></svg></div>
                                        <div className="text-2xl font-bold text-[var(--text-primary)] mb-1">{totalFailed}</div>
                                        <div className="text-xs text-[var(--text-tertiary)]">Failed Approvals</div>
                                    </div>
                                    <div className="bg-[var(--bg-tertiary)] rounded-[var(--radius-md)] p-4 text-center">
                                        <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--error-bg)] text-[var(--error)] flex items-center justify-center mx-auto mb-3"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" /></svg></div>
                                        <div className="text-2xl font-bold text-[var(--text-primary)] mb-1">{totalBlocked}</div>
                                        <div className="text-xs text-[var(--text-tertiary)]">Blocked</div>
                                    </div>
                                    <div className="bg-[var(--bg-tertiary)] rounded-[var(--radius-md)] p-4 text-center">
                                        <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--info-bg)] text-[var(--info)] flex items-center justify-center mx-auto mb-3"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg></div>
                                        <div className="text-2xl font-bold text-[var(--text-primary)] mb-1">{totalRetry}</div>
                                        <div className="text-xs text-[var(--text-tertiary)]">Total Retries</div>
                                    </div>
                                </div>
                                <div className="chart-container" style={{ position: 'relative', height: '220px' }}>
                                    <Line data={securityChartData} options={securityLineOptions} />
                                </div>
                            </CardBody>
                        </Card>

                        <Card className="col-span-6">
                            <CardHeader><div><CardTitle icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>}>Device & Geo Trends</CardTitle><CardSubtitle>Device recognition and regional distribution</CardSubtitle></div></CardHeader>
                            <CardBody>
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <div className="text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-3">Device Recognition</div>
                                        <div className="w-full">
                                            <div className="flex items-center justify-between py-2.5 border-b border-[var(--border-secondary)]">
                                                <div className="flex items-center gap-2 text-[13px] text-[var(--text-primary)]">
                                                    <svg className="w-4 h-4 text-[var(--success)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                                                    Known Devices
                                                </div>
                                                <div className="text-[13px] font-semibold text-[var(--success)]">80.4%</div>
                                            </div>
                                            <div className="flex items-center justify-between py-2.5 border-b border-[var(--border-secondary)]">
                                                <div className="flex items-center gap-2 text-[13px] text-[var(--text-primary)]">
                                                    <svg className="w-4 h-4 text-[var(--purple)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>
                                                    New Devices (7d)
                                                </div>
                                                <div className="text-[13px] font-semibold text-[var(--purple)]">{data.metrics.uniqueUsers}</div>
                                            </div>
                                            <div className="flex items-center justify-between py-2.5 border-b border-[var(--border-secondary)]">
                                                <div className="flex items-center gap-2 text-[13px] text-[var(--text-primary)]">
                                                    <svg className="w-4 h-4 text-[var(--warning)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" /></svg>
                                                    Avg New Device/Day
                                                </div>
                                                <div className="text-[13px] font-semibold text-[var(--warning)]">
                                                    {Math.round(data.metrics.uniqueUsers / 7)}
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between py-2.5 border-b border-[var(--border-secondary)]">
                                                <div className="flex items-center gap-2 text-[13px] text-[var(--text-primary)]">
                                                    <svg className="w-4 h-4 text-[var(--info)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                                    New Device Success
                                                </div>
                                                <div className="text-[13px] font-semibold text-[var(--success)]">92.1%</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-3">Top Regions</div>
                                        <div className="flex flex-col gap-3">
                                            {data.geoStats && data.geoStats.map((geo: any, i: number) => (
                                                <div key={i} className="flex items-center gap-3">
                                                    <span className="text-lg">{countryCodeToEmoji(geo.code)}</span>
                                                    <div className="flex-1">
                                                        <div className="text-[13px] font-medium text-[var(--text-primary)]">{getCountryName(geo.code)}</div>
                                                        <div className="text-[11px] text-[var(--text-tertiary)]">{geo.count} approvals</div>
                                                    </div>
                                                    <div className="w-[100px]">
                                                        <div className="h-1.5 bg-[var(--bg-tertiary)] rounded-full overflow-hidden mb-1">
                                                            <div className={`h-full rounded-full ${getGeoColor(i)}`} style={{ width: geo.pct }}></div>
                                                        </div>
                                                        <div className="text-[13px] font-semibold text-right">{geo.pct}</div>
                                                    </div>
                                                </div>
                                            ))}
                                            {(!data.geoStats || data.geoStats.length === 0) && <div className="text-xs text-[var(--text-tertiary)]">No geo data available</div>}
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>

                        <Card className="col-span-12">
                            <CardHeader><div><CardTitle icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" /></svg>}>Daily success rates and transaction volume</CardTitle><CardSubtitle>Daily volume by status</CardSubtitle></div></CardHeader>
                            <CardBody>
                                <div className="h-[280px]"><Bar data={trendChartData} options={barOptions} /></div>
                            </CardBody>
                        </Card>

                    </div>
                </div>
            </main>
        </div>
    );
}