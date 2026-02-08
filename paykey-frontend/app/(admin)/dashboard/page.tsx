// 'use client';

// import { useState } from 'react';
// import Sidebar from '@/components/layout/Sidebar';
// import { Card, CardHeader, CardTitle, CardSubtitle, CardBody } from '@/components/ui/Card';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   BarElement,
//   ArcElement,
//   Title,
//   Tooltip,
//   Legend,
//   Filler,
//   ChartOptions
// } from 'chart.js';
// import { Bar, Doughnut, Line } from 'react-chartjs-2';

// // --- Register ChartJS ---
// ChartJS.register(
//   CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend, Filler
// );

// // --- Global Chart Defaults (Dark Theme) ---
// ChartJS.defaults.color = '#6b6b6b'; 
// ChartJS.defaults.borderColor = '#383838';
// ChartJS.defaults.font.family = "'Inter', sans-serif";
// ChartJS.defaults.font.size = 11;

// export default function DashboardPage() {
//   const [timeRange, setTimeRange] = useState('7d');

//   // ==========================
//   // 1. DATASETS
//   // ==========================

//   // A. Device Chart (Doughnut)
//   const deviceChartData = {
//     labels: ['Mobile', 'Desktop', 'Tablet'],
//     datasets: [{
//       data: [6234, 2456, 558],
//       backgroundColor: ['#22c55e', '#3b82f6', '#8b5cf6'],
//       borderWidth: 0,
//       hoverOffset: 4,
//       cutout: '78%', // Lebih tipis agar lebih elegan
//     }]
//   };

//   // B. Main Trend Chart (Bar Stacked)
//   const trendChartData = {
//     labels: ['Dec 21', 'Dec 22', 'Dec 23', 'Dec 24', 'Dec 25', 'Dec 26', 'Dec 27'],
//     datasets: [
//       {
//         label: 'Approved',
//         data: [1245, 1389, 1567, 1234, 987, 1456, 1370],
//         backgroundColor: '#22c55e',
//         borderRadius: 2,
//         barPercentage: 0.6,
//         categoryPercentage: 0.7,
//         stack: 'Stack 0',
//       },
//       {
//         label: 'Denied',
//         data: [45, 52, 48, 67, 34, 58, 46],
//         backgroundColor: '#f87171',
//         borderRadius: 2,
//         barPercentage: 0.6,
//         categoryPercentage: 0.7,
//         stack: 'Stack 0',
//       },
//       {
//         label: 'Timeout',
//         data: [23, 31, 28, 42, 18, 35, 29],
//         backgroundColor: '#fbbf24',
//         borderRadius: 2,
//         barPercentage: 0.6,
//         categoryPercentage: 0.7,
//         stack: 'Stack 0',
//       }
//     ]
//   };

//   // C. Security Metrics Chart (Line)
//   const securityChartData = {
//     labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
//     datasets: [
//       {
//         label: 'Failed Approvals',
//         data: [18, 22, 19, 25, 23, 20, 23],
//         borderColor: '#f59e0b', // Warning Color
//         backgroundColor: 'rgba(245, 158, 11, 0.1)',
//         tension: 0.4,
//         fill: true,
//         pointRadius: 0,
//         pointHoverRadius: 4,
//         borderWidth: 2,
//       },
//       {
//         label: 'Retry Attempts',
//         data: [42, 55, 48, 52, 45, 38, 42],
//         borderColor: '#f87171', // Error Color
//         backgroundColor: 'rgba(248, 113, 113, 0.1)',
//         tension: 0.4,
//         fill: true,
//         pointRadius: 0,
//         pointHoverRadius: 4,
//         borderWidth: 2,
//       }
//     ]
//   };

//   // ==========================
//   // 2. CHART OPTIONS
//   // ==========================

//   const trendChartOptions: ChartOptions<'bar'> = {
//     responsive: true,
//     maintainAspectRatio: false,
//     scales: {
//       x: { stacked: true, grid: { display: false } },
//       y: { 
//         stacked: true, 
//         beginAtZero: true, 
//         grid: { color: '#2d2d2d' },
//         border: { display: false } // Hilangkan garis border axis
//       }
//     },
//     plugins: {
//       legend: { 
//         position: 'bottom', 
//         align: 'center',
//         labels: { 
//             usePointStyle: true, 
//             padding: 25, 
//             boxWidth: 8,
//             color: '#9b9b9b' 
//         } 
//       },
//       tooltip: {
//         backgroundColor: '#202020',
//         titleColor: '#ebebeb',
//         bodyColor: '#9b9b9b',
//         borderColor: '#383838',
//         borderWidth: 1,
//         padding: 10,
//         cornerRadius: 6,
//         displayColors: true,
//         usePointStyle: true,
//       }
//     }
//   };

//   const securityChartOptions: ChartOptions<'line'> = {
//     responsive: true,
//     maintainAspectRatio: false,
//     scales: {
//       x: { 
//         grid: { display: false },
//         ticks: { color: '#6b6b6b' }
//       },
//       y: { 
//         beginAtZero: true, 
//         grid: { color: '#2d2d2d' }, 
//         ticks: { display: false }, // Sembunyikan angka Y-axis agar bersih seperti sparkline
//         border: { display: false }
//       }
//     },
//     plugins: { 
//       legend: { 
//         display: true, // AKTIFKAN LEGEND
//         position: 'bottom', 
//         align: 'start', // Rata kiri/bawah
//         labels: { 
//             usePointStyle: true, // Gunakan titik bulat
//             boxWidth: 8, 
//             padding: 20,
//             color: '#9b9b9b'
//         } 
//       },
//       tooltip: {
//         mode: 'index',
//         intersect: false,
//         backgroundColor: '#202020',
//         titleColor: '#ebebeb',
//         bodyColor: '#9b9b9b',
//         borderColor: '#383838',
//         borderWidth: 1,
//         padding: 10,
//         usePointStyle: true,
//       }
//     },
//     elements: {
//         point: {
//             radius: 0, // Sembunyikan titik default
//             hitRadius: 10
//         }
//     }
//   };

//   return (
//     <div className="flex min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-[family-name:var(--font-inter)]">
//       <Sidebar />

//       <main className="flex-1 flex flex-col h-screen overflow-hidden">
//         {/* Header */}
//         <header className="px-6 py-3 border-b border-[var(--border-secondary)] bg-[var(--bg-secondary)] flex justify-between items-center shrink-0 h-[60px]">
//            <div className="flex items-center gap-2">
//              <h1 className="text-lg font-semibold text-[var(--text-primary)]">Dashboard</h1>
//            </div>
//            <div className="flex items-center gap-3">
//              <div className="flex bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] overflow-hidden">
//                 {['24h', '7d', '30d', '90d'].map((range) => (
//                     <button 
//                         key={range}
//                         onClick={() => setTimeRange(range)}
//                         className={`px-3.5 py-2 text-[13px] font-medium transition-colors ${timeRange === range ? 'bg-[var(--accent)] text-white' : 'text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]'}`}
//                     >
//                         {range}
//                     </button>
//                 ))}
//              </div>
//              <button className="flex items-center gap-1.5 px-3.5 py-2 rounded-[var(--radius-md)] text-[13px] font-medium bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-primary)] hover:bg-[var(--bg-hover)] transition-all">
//                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
//                 Export
//              </button>
//              <button onClick={() => window.location.reload()} className="flex items-center gap-1.5 px-3.5 py-2 rounded-[var(--radius-md)] text-[13px] font-medium bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-all">
//                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><polyline points="23,4 23,10 17,10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
//                 Refresh
//              </button>
//            </div>
//         </header>

//         {/* Content Area */}
//         <div className="flex-1 overflow-auto p-6 custom-scrollbar">
//             <div className="grid grid-cols-12 gap-5">

//                 {/* 1. Authentication Funnel */}
//                 <Card className="col-span-7">
//                     <CardHeader>
//                         <div>
//                             <CardTitle icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>}>
//                                 Authentication Funnel
//                             </CardTitle>
//                             <CardSubtitle>Payment flow conversion rates</CardSubtitle>
//                         </div>
//                     </CardHeader>
//                     <CardBody>
//                         <div className="py-2">
//                             {/* Funnel Stage 1 */}
//                             <div className="flex items-center mb-4">
//                                 <div className="flex-1 relative h-12 rounded-[var(--radius-md)] flex items-center px-4 bg-gradient-to-r from-blue-500 to-blue-600 w-full" style={{ clipPath: 'polygon(0% 0%, 97% 0%, 100% 50%, 97% 100%, 0% 100%)' }}>
//                                     <span className="text-[13px] font-medium text-white z-10">Payment Initiated</span>
//                                 </div>
//                                 <div className="w-[140px] text-right pl-5">
//                                     <div className="text-lg font-semibold text-[var(--text-primary)] tabular-nums">12,847</div>
//                                     <div className="text-xs text-[var(--text-tertiary)]">100%</div>
//                                 </div>
//                             </div>
//                             {/* Funnel Stage 2 */}
//                             <div className="flex items-center mb-4">
//                                 <div className="flex-1 relative">
//                                     <div className="h-12 rounded-[var(--radius-md)] flex items-center px-4 bg-gradient-to-r from-violet-500 to-violet-600" style={{ width: '78%', clipPath: 'polygon(0% 0%, 96% 0%, 100% 50%, 96% 100%, 0% 100%)' }}>
//                                         <span className="text-[13px] font-medium text-white z-10">Approval Requested</span>
//                                     </div>
//                                 </div>
//                                 <div className="w-[140px] text-right pl-5">
//                                     <div className="text-lg font-semibold text-[var(--text-primary)] tabular-nums">10,021</div>
//                                     <div className="text-xs text-[var(--text-tertiary)]">78.0%</div>
//                                 </div>
//                             </div>
//                             {/* Funnel Stage 3 */}
//                             <div className="flex items-center">
//                                 <div className="flex-1 relative">
//                                     <div className="h-12 rounded-[var(--radius-md)] flex items-center px-4 bg-gradient-to-r from-green-500 to-green-600" style={{ width: '72%' }}>
//                                         <span className="text-[13px] font-medium text-white z-10">Payment Approved</span>
//                                     </div>
//                                 </div>
//                                 <div className="w-[140px] text-right pl-5">
//                                     <div className="text-lg font-semibold text-[var(--text-primary)] tabular-nums">9,248</div>
//                                     <div className="text-xs text-[var(--text-tertiary)]">72.0%</div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="flex items-center gap-5 mt-5 pt-4 border-t border-[var(--border-secondary)]">
//                             <div className="flex items-center gap-2">
//                                 <div className="w-2 h-2 rounded-full bg-[var(--warning)]"></div>
//                                 <div>
//                                     <div className="text-xs text-[var(--text-tertiary)]">Drop-off: Initiated → Requested</div>
//                                     <div className="text-[13px] font-semibold text-[var(--text-primary)]">22.0% (2,826 users)</div>
//                                 </div>
//                             </div>
//                             <div className="flex items-center gap-2">
//                                 <div className="w-2 h-2 rounded-full bg-[var(--error)]"></div>
//                                 <div>
//                                     <div className="text-xs text-[var(--text-tertiary)]">Drop-off: Requested → Approved</div>
//                                     <div className="text-[13px] font-semibold text-[var(--text-primary)]">7.7% (773 users)</div>
//                                 </div>
//                             </div>
//                         </div>
//                     </CardBody>
//                 </Card>

//                 {/* 2. Key Metrics */}
//                 <Card className="col-span-5">
//                     <CardHeader>
//                         <div>
//                             <CardTitle icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>}>
//                                 Key Metrics
//                             </CardTitle>
//                             <CardSubtitle>Last 7 days performance</CardSubtitle>
//                         </div>
//                     </CardHeader>
//                     <CardBody>
//                         <div className="grid grid-cols-2 gap-4">
//                             {[
//                                 { label: 'Overall Success Rate', val: '92.3%', change: '↑ +1.2% vs last week', type: 'success', changeColor: 'text-[var(--success)]' },
//                                 { label: 'Avg. Approval Time', val: '2.4s', change: '↓ -0.3s vs last week', type: 'text-[var(--text-primary)]', changeColor: 'text-[var(--success)]' },
//                                 { label: 'Total Transactions', val: '9,248', change: '↑ +847 vs last week', type: 'text-[var(--text-primary)]', changeColor: 'text-[var(--success)]' },
//                                 { label: 'Unique Users', val: '3,891', change: '↑ +234 vs last week', type: 'text-[var(--text-primary)]', changeColor: 'text-[var(--success)]' }
//                             ].map((stat, i) => (
//                                 <div key={i} className="bg-[var(--bg-tertiary)] rounded-[var(--radius-md)] p-4">
//                                     <div className="text-xs text-[var(--text-tertiary)] mb-2">{stat.label}</div>
//                                     <div className={`text-[28px] font-bold leading-tight ${stat.type === 'success' ? 'text-[var(--success)]' : 'text-[var(--text-primary)]'}`}>{stat.val}</div>
//                                     <div className={`text-xs mt-1.5 ${stat.changeColor}`}>{stat.change}</div>
//                                 </div>
//                             ))}
//                         </div>
//                     </CardBody>
//                 </Card>

//                 {/* 3. Success by Device Type */}
//                 <Card className="col-span-4">
//                     <CardHeader>
//                         <CardTitle icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>}>
//                             Success by Device Type
//                         </CardTitle>
//                     </CardHeader>
//                     <CardBody>
//                         <div className="relative h-[220px]">
//                             <Doughnut data={deviceChartData} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }} />
//                             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
//                                 <div className="text-[28px] font-bold text-[var(--text-primary)]">92.3%</div>
//                                 <div className="text-xs text-[var(--text-tertiary)]">Overall</div>
//                             </div>
//                         </div>
//                         <div className="flex justify-center gap-5 mt-4 flex-wrap">
//                             {[
//                                 { l: 'Mobile', v: '94.2%', c: '#22c55e' },
//                                 { l: 'Desktop', v: '89.1%', c: '#3b82f6' },
//                                 { l: 'Tablet', v: '91.8%', c: '#8b5cf6' }
//                             ].map((item, i) => (
//                                 <div key={i} className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)]">
//                                     <div className="w-2.5 h-2.5 rounded-full" style={{ background: item.c }}></div>
//                                     {item.l} ({item.v})
//                                 </div>
//                             ))}
//                         </div>
//                     </CardBody>
//                 </Card>

//                 {/* 4. Success by Platform */}
//                 <Card className="col-span-4">
//                     <CardHeader>
//                         <CardTitle icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/></svg>}>
//                             Success by Platform
//                         </CardTitle>
//                     </CardHeader>
//                     <CardBody>
//                         <div className="flex flex-col gap-4">
//                             {[
//                                 { name: 'iOS', icon: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>, val: '95.4%', color: 'from-green-500 to-green-600', w: '95.4%' },
//                                 { name: 'Android', icon: <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>, val: '93.1%', color: 'from-blue-500 to-blue-600', w: '93.1%' },
//                                 { name: 'Web', icon: <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>, val: '88.7%', color: 'from-amber-500 to-amber-600', w: '88.7%' }
//                             ].map((p, i) => (
//                                 <div key={i}>
//                                     <div className="flex justify-between items-center mb-2">
//                                         <div className="flex items-center gap-2 text-[13px] text-[var(--text-primary)]">
//                                             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[var(--text-tertiary)]">{p.icon}</svg>
//                                             {p.name}
//                                         </div>
//                                         <div className="text-[13px] font-semibold text-[var(--text-primary)]">{p.val}</div>
//                                     </div>
//                                     <div className="h-2 bg-[var(--bg-tertiary)] rounded-full overflow-hidden">
//                                         <div className={`h-full rounded-full bg-gradient-to-r ${p.color}`} style={{ width: p.w }}></div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </CardBody>
//                 </Card>

//                 {/* 5. Success by Amount Tier */}
//                 <Card className="col-span-4">
//                     <CardHeader>
//                         <CardTitle icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>}>
//                             Success by Amount Tier
//                         </CardTitle>
//                     </CardHeader>
//                     <CardBody>
//                         <div className="flex flex-col">
//                             {[
//                                 { tier: 'Under $100', tx: '5,421 transactions', rate: '96.8%', status: 'Low friction', color: 'success', icon: '$' },
//                                 { tier: '$100 - $1,000', tx: '2,847 transactions', rate: '91.2%', status: 'Step-up required', color: 'warning', icon: '$$' },
//                                 { tier: 'Over $1,000', tx: '980 transactions', rate: '84.3%', status: 'High verification', color: 'error', icon: '$$$' }
//                             ].map((item, i) => (
//                                 <div key={i} className="flex items-center py-3 border-b border-[var(--border-secondary)] last:border-0">
//                                     <div className={`w-8 h-8 rounded-[var(--radius-md)] flex items-center justify-center mr-3 text-sm font-semibold ${
//                                         item.color === 'success' ? 'bg-[var(--success-bg)] text-[var(--success)]' :
//                                         item.color === 'warning' ? 'bg-[var(--warning-bg)] text-[var(--warning)]' :
//                                         'bg-[var(--error-bg)] text-[var(--error)]'
//                                     }`}>
//                                         {item.icon}
//                                     </div>
//                                     <div className="flex-1">
//                                         <div className="text-[13px] font-medium text-[var(--text-primary)]">{item.tier}</div>
//                                         <div className="text-[11px] text-[var(--text-tertiary)]">{item.tx}</div>
//                                     </div>
//                                     <div className="text-right">
//                                         <div className={`text-sm font-semibold ${
//                                             item.color === 'success' ? 'text-[var(--success)]' :
//                                             item.color === 'warning' ? 'text-[var(--warning)]' :
//                                             'text-[var(--error)]'
//                                         }`}>{item.rate}</div>
//                                         <div className="text-[11px] text-[var(--text-tertiary)]">{item.status}</div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </CardBody>
//                 </Card>

//                 {/* 6. Security Metrics (PERBAIKAN UTAMA) */}
//                 <Card className="col-span-6">
//                     <CardHeader>
//                         <div>
//                             <CardTitle icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>}>
//                                 Security Metrics
//                             </CardTitle>
//                             <CardSubtitle>Anomaly and retry tracking</CardSubtitle>
//                         </div>
//                     </CardHeader>
//                     <CardBody>
//                         {/* Stats Boxes */}
//                         <div className="grid grid-cols-3 gap-4 mb-6">
//                             <div className="bg-[var(--bg-tertiary)] rounded-[var(--radius-md)] p-4 text-center">
//                                 <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--warning-bg)] text-[var(--warning)] flex items-center justify-center mx-auto mb-3">
//                                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg>
//                                 </div>
//                                 <div className="text-2xl font-bold text-[var(--text-primary)] mb-1">23</div>
//                                 <div className="text-xs text-[var(--text-tertiary)]">Failed Approvals per User</div>
//                                 <div className="text-[11px] text-[var(--error)] mt-2 pt-2 border-t border-[var(--border-secondary)]">↑ 3 more</div>
//                             </div>
//                             <div className="bg-[var(--bg-tertiary)] rounded-[var(--radius-md)] p-4 text-center">
//                                 <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--error-bg)] text-[var(--error)] flex items-center justify-center mx-auto mb-3">
//                                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
//                                 </div>
//                                 <div className="text-2xl font-bold text-[var(--text-primary)] mb-1">1.8</div>
//                                 <div className="text-xs text-[var(--text-tertiary)]">Repeated Attempts</div>
//                                 <div className="text-[11px] text-[var(--success)] mt-2 pt-2 border-t border-[var(--border-secondary)]">↓ 0.2 less</div>
//                             </div>
//                             <div className="bg-[var(--bg-tertiary)] rounded-[var(--radius-md)] p-4 text-center">
//                                 <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--info-bg)] text-[var(--info)] flex items-center justify-center mx-auto mb-3">
//                                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
//                                 </div>
//                                 <div className="text-2xl font-bold text-[var(--text-primary)] mb-1">342</div>
//                                 <div className="text-xs text-[var(--text-tertiary)]">Approval Retries</div>
//                                 <div className="text-[11px] text-[var(--success)] mt-2 pt-2 border-t border-[var(--border-secondary)]">↓ 12%</div>
//                             </div>
//                         </div>

//                         {/* Line Chart with Bottom Legend */}
//                         <div className="h-[200px]">
//                             <Line data={securityChartData} options={securityChartOptions} />
//                         </div>
//                     </CardBody>
//                 </Card>

//                 {/* 7. Device & Geo Trends */}
//                 <Card className="col-span-6">
//                     <CardHeader>
//                         <div>
//                             <CardTitle icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>}>
//                                 Device & Geo Trends
//                             </CardTitle>
//                             <CardSubtitle>Device recognition and regional distribution</CardSubtitle>
//                         </div>
//                     </CardHeader>
//                     <CardBody>
//                         <div className="grid grid-cols-2 gap-6">
//                             {/* Device Recog */}
//                             <div>
//                                 <div className="text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-3">Device Recognition</div>
//                                 <div className="flex flex-col gap-0">
//                                     <div className="flex items-center justify-between py-2.5 border-b border-[var(--border-secondary)]">
//                                         <div className="flex items-center gap-2 text-[13px] text-[var(--text-primary)]">
//                                             <svg className="w-4 h-4 text-[var(--success)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
//                                             Known Devices
//                                         </div>
//                                         <div className="text-[13px] font-semibold text-[var(--success)]">78.4%</div>
//                                     </div>
//                                     <div className="flex items-center justify-between py-2.5 border-b border-[var(--border-secondary)]">
//                                         <div className="flex items-center gap-2 text-[13px] text-[var(--text-primary)]">
//                                             <svg className="w-4 h-4 text-[var(--purple)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
//                                             New Devices (7d)
//                                         </div>
//                                         <div className="text-[13px] font-semibold text-[var(--purple)]">847</div>
//                                     </div>
//                                     <div className="flex items-center justify-between py-2.5 border-b border-[var(--border-secondary)]">
//                                         <div className="flex items-center gap-2 text-[13px] text-[var(--text-primary)]">
//                                             <svg className="w-4 h-4 text-[var(--warning)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>
//                                             Avg New Device/Day
//                                         </div>
//                                         <div className="text-[13px] font-semibold text-[var(--warning)]">121</div>
//                                     </div>
//                                     <div className="flex items-center justify-between py-2.5 border-b border-[var(--border-secondary)]">
//                                         <div className="flex items-center gap-2 text-[13px] text-[var(--text-primary)]">
//                                             <svg className="w-4 h-4 text-[var(--info)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
//                                             New Device Success
//                                         </div>
//                                         <div className="text-[13px] font-semibold text-[var(--info)]">86.2%</div>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Geo Dist */}
//                             <div>
//                                 <div className="text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-3">Top Regions</div>
//                                 <div className="flex flex-col gap-3">
//                                     {[
//                                         { c: 'Singapore', f: '🇸🇬', count: '3,421', pct: '37.0%', color: 'bg-green-500' },
//                                         { c: 'Malaysia', f: '🇲🇾', count: '2,156', pct: '23.3%', color: 'bg-blue-500' },
//                                         { c: 'Thailand', f: '🇹🇭', count: '1,432', pct: '15.5%', color: 'bg-violet-500' },
//                                         { c: 'Hong Kong', f: '🇭🇰', count: '1,021', pct: '11.0%', color: 'bg-amber-500' },
//                                         { c: 'Japan', f: '🇯🇵', count: '687', pct: '7.4%', color: 'bg-green-500' },
//                                     ].map((geo, i) => (
//                                         <div key={i} className="flex items-center gap-3">
//                                             <span className="text-lg">{geo.f}</span>
//                                             <div className="flex-1">
//                                                 <div className="text-[13px] font-medium text-[var(--text-primary)]">{geo.c}</div>
//                                                 <div className="text-[11px] text-[var(--text-tertiary)]">{geo.count} approvals</div>
//                                             </div>
//                                             <div className="w-[120px] text-right">
//                                                 <div className="h-1.5 bg-[var(--bg-tertiary)] rounded-full overflow-hidden mb-1">
//                                                     <div className={`h-full rounded-full ${geo.color}`} style={{ width: geo.pct }}></div>
//                                                 </div>
//                                                 <div className="text-[13px] font-semibold">{geo.pct}</div>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </CardBody>
//                 </Card>

//                 {/* 8. Approval Trends */}
//                 <Card className="col-span-12">
//                     <CardHeader>
//                         <div>
//                             <CardTitle icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>}>
//                                 Approval Trends Over Time
//                             </CardTitle>
//                             <CardSubtitle>Daily success rates and transaction volume</CardSubtitle>
//                         </div>
//                     </CardHeader>
//                     <CardBody>
//                         <div className="h-[280px]">
//                             <Bar data={trendChartData} options={trendChartOptions} />
//                         </div>
//                     </CardBody>
//                 </Card>

//             </div>
//         </div>
//       </main>
//     </div>
//   );
// }


'use client';

import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardSubtitle, CardBody } from '@/components/ui/Card';
import {
    Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend, Filler
} from 'chart.js';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { adminService } from '@/services/adminService';

// --- Register ChartJS ---
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend, Filler);

// --- Global Defaults ---
ChartJS.defaults.color = '#9b9b9b';
ChartJS.defaults.borderColor = '#383838';
ChartJS.defaults.font.family = "'Inter', sans-serif";
ChartJS.defaults.font.size = 11;

// --- Helper Functions ---
const countryCodeToEmoji = (code: string) => {
    if (!code || code === 'Unknown') return '🌐';
    const offset = 127397;
    return code.toUpperCase().split('').map(char => String.fromCodePoint(char.charCodeAt(0) + offset)).join('');
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
        platformStats: [], // Akan diisi data real dari backend
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

    // --- CHART DATA CONFIG ---

    // 1. Device Chart
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

    // 2. Trend Chart (Bar)
    const trendChartData = {
        labels: data.trendChart.labels.length ? data.trendChart.labels : ['No Data'],
        datasets: [
            { label: 'Approved', data: data.trendChart.approved, backgroundColor: '#22c55e', borderRadius: 4, barPercentage: 0.7, categoryPercentage: 0.8, stack: 'Stack 0' },
            { label: 'Denied', data: data.trendChart.denied, backgroundColor: '#f87171', borderRadius: 4, barPercentage: 0.7, categoryPercentage: 0.8, stack: 'Stack 0' },
            { label: 'Timeout', data: data.trendChart.timeout, backgroundColor: '#fbbf24', borderRadius: 4, barPercentage: 0.7, categoryPercentage: 0.8, stack: 'Stack 0' }
        ]
    };

    // 3. Security Chart (Line) - PERBAIKAN: Point Radius & Style
    const securityChartData = {
        labels: data.securityChart.labels.length ? data.securityChart.labels : ['No Data'],
        datasets: [
            {
                label: 'Failed Approvals',
                data: data.securityChart.failed,
                borderColor: '#f59e0b',
                backgroundColor: 'rgba(245, 158, 11, 0.1)', // Transparan orange
                tension: 0.4,
                fill: true,
                pointRadius: 3, // Tampilkan titik (sebelumnya 0)
                pointHoverRadius: 5,
                borderWidth: 2,
                pointBackgroundColor: '#f59e0b'
            },
            {
                label: 'Retry Attempts',
                data: data.securityChart.retry,
                borderColor: '#f87171',
                backgroundColor: 'rgba(248, 113, 113, 0.1)', // Transparan merah
                tension: 0.4,
                fill: true,
                pointRadius: 3, // Tampilkan titik (sebelumnya 0)
                pointHoverRadius: 5,
                borderWidth: 2,
                pointBackgroundColor: '#f87171'
            }
        ]
    };

    // --- CALCULATIONS ---
    const funnelReqPct = data.funnel.total > 0 ? ((data.funnel.requested / data.funnel.total) * 100).toFixed(1) : "0.0";
    const funnelAppPct = data.funnel.total > 0 ? ((data.funnel.approved / data.funnel.total) * 100).toFixed(1) : "0.0";
    const dropReq = data.funnel.total - data.funnel.requested;
    const dropApp = data.funnel.requested - data.funnel.approved;
    const dropReqPct = data.funnel.total > 0 ? ((dropReq / data.funnel.total) * 100).toFixed(1) : "0.0";
    const dropAppPct = data.funnel.requested > 0 ? ((dropApp / data.funnel.requested) * 100).toFixed(1) : "0.0";

    const totalFailed = data.securityChart.failed.reduce((a: any, b: any) => a + b, 0);
    const totalRetry = data.securityChart.retry.reduce((a: any, b: any) => a + b, 0);
    const totalBlocked = data.trendChart.denied.reduce((a: any, b: any) => a + b, 0);

    // --- CHART OPTIONS ---
    const commonOptions: any = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: { grid: { display: false }, ticks: { color: '#6b6b6b' } },
            y: { display: false }
        },
        plugins: { legend: { display: false } }
    };

    const barOptions: any = {
        ...commonOptions,
        scales: { x: { stacked: true, grid: { display: false } }, y: { stacked: true, display: false } },
        plugins: { legend: { position: 'bottom', labels: { usePointStyle: true, padding: 20, color: '#9b9b9b' } } }
    };

    // PERBAIKAN: Opsi Chart Security (Line) agar titik muncul dan grid rapi
    const securityLineOptions: any = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: { display: false },
                ticks: { color: '#6b6b6b', font: { size: 10 } }
            },
            y: {
                beginAtZero: true,
                grid: { color: '#2d2d2d', drawBorder: false }, // Grid tipis gelap
                border: { display: false },
                ticks: { display: false } // Sembunyikan angka Y agar bersih
            }
        },
        plugins: {
            legend: {
                position: 'bottom',
                align: 'start', // Legend rata kiri bawah
                labels: { usePointStyle: true, padding: 15, color: '#9b9b9b', boxWidth: 8 }
            },
            tooltip: {
                mode: 'index',
                intersect: false,
                backgroundColor: '#202020',
                titleColor: '#ebebeb',
                bodyColor: '#9b9b9b',
                borderColor: '#383838',
                borderWidth: 1
            }
        },
        interaction: {
            mode: 'nearest',
            axis: 'x',
            intersect: false
        }
    };

    return (
        <div className="flex min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans">
            <main className="flex-1 flex flex-col h-screen overflow-hidden">
                {/* HEADER */}
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

                        {/* 1. AUTHENTICATION FUNNEL */}
                        <Card className="col-span-7">
                            <CardHeader><div><CardTitle icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>}>Authentication Funnel</CardTitle><CardSubtitle>Conversion based on live transactions</CardSubtitle></div></CardHeader>
                            <CardBody>
                                <div className="py-2">
                                    <div className="flex items-center mb-4"><div className="flex-1 relative h-12 rounded-[var(--radius-md)] flex items-center px-4 bg-gradient-to-r from-blue-500 to-blue-600 w-full" style={{ clipPath: 'polygon(0% 0%, 97% 0%, 100% 50%, 97% 100%, 0% 100%)' }}><span className="text-[13px] font-medium text-white z-10">Total Transactions</span></div><div className="w-[140px] text-right pl-5"><div className="text-lg font-semibold text-[var(--text-primary)] tabular-nums">{data.funnel.total.toLocaleString()}</div><div className="text-xs text-[var(--text-tertiary)]">100%</div></div></div>
                                    <div className="flex items-center mb-4"><div className="flex-1 relative"><div className="h-12 rounded-[var(--radius-md)] flex items-center px-4 bg-gradient-to-r from-violet-500 to-violet-600" style={{ width: `${Math.max(parseFloat(funnelReqPct), 5)}%`, clipPath: 'polygon(0% 0%, 96% 0%, 100% 50%, 96% 100%, 0% 100%)' }}><span className="text-[13px] font-medium text-white z-10">Approval Requested</span></div></div><div className="w-[140px] text-right pl-5"><div className="text-lg font-semibold text-[var(--text-primary)] tabular-nums">{data.funnel.requested.toLocaleString()}</div><div className="text-xs text-[var(--text-tertiary)]">{funnelReqPct}%</div></div></div>
                                    <div className="flex items-center"><div className="flex-1 relative"><div className="h-12 rounded-[var(--radius-md)] flex items-center px-4 bg-gradient-to-r from-green-500 to-green-600" style={{ width: `${Math.max(parseFloat(funnelAppPct), 5)}%` }}><span className="text-[13px] font-medium text-white z-10">Approved</span></div></div><div className="w-[140px] text-right pl-5"><div className="text-lg font-semibold text-[var(--text-primary)] tabular-nums">{data.funnel.approved.toLocaleString()}</div><div className="text-xs text-[var(--text-tertiary)]">{funnelAppPct}%</div></div></div>
                                </div>
                                <div className="flex items-center gap-5 mt-5 pt-4 border-t border-[var(--border-secondary)]">
                                    <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[var(--warning)]"></div><div><div className="text-xs text-[var(--text-tertiary)]">Drop-off: Init → Req</div><div className="text-[13px] font-semibold text-[var(--text-primary)]">{dropReqPct}% ({dropReq})</div></div></div>
                                    <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[var(--error)]"></div><div><div className="text-xs text-[var(--text-tertiary)]">Drop-off: Req → App</div><div className="text-[13px] font-semibold text-[var(--text-primary)]">{dropAppPct}% ({dropApp})</div></div></div>
                                </div>
                            </CardBody>
                        </Card>

                        {/* 2. KEY METRICS */}
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
                                        <div className="text-xs mt-1.5 text-[var(--success)]">↑ +1.2% vs prev</div>
                                    </div>
                                    <div className="bg-[var(--bg-tertiary)] rounded-[var(--radius-md)] p-4 border border-[var(--border-primary)]">
                                        <div className="text-xs text-[var(--text-tertiary)] mb-2">Avg. Approval Time</div>
                                        <div className="text-[28px] font-bold text-[var(--text-primary)]">{data.metrics.avgTime}</div>
                                        <div className={`text-xs mt-1.5 ${data.metrics.avgTimeChange.includes('↓') ? 'text-[var(--success)]' : 'text-[var(--error)]'}`}>
                                            {data.metrics.avgTimeChange} vs prev
                                        </div>
                                    </div>
                                    <div className="bg-[var(--bg-tertiary)] rounded-[var(--radius-md)] p-4 border border-[var(--border-primary)]">
                                        <div className="text-xs text-[var(--text-tertiary)] mb-2">Total Transactions</div>
                                        <div className="text-[28px] font-bold text-[var(--text-primary)]">{data.metrics.totalTx.toLocaleString()}</div>
                                        <div className={`text-xs mt-1.5 ${data.metrics.txChange >= 0 ? 'text-[var(--success)]' : 'text-[var(--error)]'}`}>
                                            {data.metrics.txChange >= 0 ? '↑' : '↓'} {Math.abs(data.metrics.txChange)} vs prev
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

                        {/* 3. DEVICE CHART */}
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

                        {/* 4. PLATFORM STATS (REAL DATA) */}
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
                                                    {/* Dynamic Color based on Platform Name */}
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

                        {/* 5. AMOUNT TIER */}
                        <Card className="col-span-4">
                            <CardHeader><CardTitle icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>}>Success by Amount Tier</CardTitle></CardHeader>
                            <CardBody>
                                <div className="breakdown-table">
                                    {data.amountStats && data.amountStats.map((item: any, i: number) => {
                                        const rateNum = parseFloat(item.rate);
                                        const colorText = rateNum >= 90 ? 'text-[var(--success)]' : rateNum >= 70 ? 'text-[var(--warning)]' : 'text-[var(--error)]';
                                        const colorBg = rateNum >= 90 ? 'bg-[var(--success-bg)]' : rateNum >= 70 ? 'bg-[var(--warning-bg)]' : 'bg-[var(--error-bg)]';
                                        return (
                                            <div key={i} className="flex items-center py-3 border-b border-[var(--border-secondary)] last:border-0">
                                                <div className={`w-8 h-8 rounded-[var(--radius-md)] flex items-center justify-center mr-3 text-sm font-semibold ${colorBg} ${rateNum >= 90 ? 'text-[var(--success)]' : rateNum >= 40 ? 'text-[var(--warning)]' : 'text-[var(--error)]'}`}>$</div>
                                                <div className="flex-1"><div className="text-[13px] font-medium text-[var(--text-primary)]">{item.tier}</div><div className="text-[11px] text-[var(--text-tertiary)]">{item.tx}</div></div>
                                                <div className="text-right"><div className={`text-sm font-semibold ${colorText}`}>{item.rate}</div></div>
                                            </div>
                                        );
                                    })}
                                    {(!data.amountStats || data.amountStats.length === 0) && <div className="text-center text-xs text-[var(--text-tertiary)] py-4">No data available</div>}
                                </div>
                            </CardBody>
                        </Card>

                        {/* 6. SECURITY METRICS CHART (FIXED) */}
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

                        {/* 7. DEVICE & GEO TRENDS (FIXED STRUCTURE) */}
                        <Card className="col-span-6">
                            <CardHeader><div><CardTitle icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>}>Device & Geo Trends</CardTitle><CardSubtitle>Device recognition and regional distribution</CardSubtitle></div></CardHeader>
                            <CardBody>
                                <div className="grid grid-cols-2 gap-6">
                                    {/* Left: Device Recognition Table */}
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
                                                {/* Use uniqueUsers as proxy for New Device metric since we don't have explicit count */}
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
                                                <div className="text-[13px] font-semibold text-[var(--info)]">92.1%</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right: Top Regions List */}
                                    <div>
                                        <div className="text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-3">Top Regions</div>
                                        <div className="flex flex-col gap-3">
                                            {data.geoStats && data.geoStats.map((geo: any, i: number) => (
                                                <div key={i} className="flex items-center gap-3">
                                                    <span className="text-lg">{countryCodeToEmoji(geo.code)}</span>
                                                    <div className="flex-1">
                                                        <div className="text-[13px] font-medium text-[var(--text-primary)]">{geo.code}</div>
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

                        {/* 8. TREND CHART */}
                        <Card className="col-span-12">
                            <CardHeader><div><CardTitle icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" /></svg>}>Approval Trends Over Time</CardTitle><CardSubtitle>Daily volume by status</CardSubtitle></div></CardHeader>
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