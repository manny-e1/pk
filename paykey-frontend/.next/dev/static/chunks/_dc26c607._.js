(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ui/Card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/ui/Card.tsx
__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardBody",
    ()=>CardBody,
    "CardHeader",
    ()=>CardHeader,
    "CardSubtitle",
    ()=>CardSubtitle,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Card({ children, className = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-[var(--radius-lg)] overflow-hidden ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/Card.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ children, className = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `p-5 border-b border-[var(--border-secondary)] flex items-center justify-between ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/Card.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ children, icon }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-[14px] font-semibold flex items-center gap-2 text-[var(--text-primary)]",
            children: [
                icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[var(--text-tertiary)]",
                    children: icon
                }, void 0, false, {
                    fileName: "[project]/components/ui/Card.tsx",
                    lineNumber: 24,
                    columnNumber: 18
                }, this),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/Card.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/Card.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardSubtitle({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-xs text-[var(--text-tertiary)] mt-0.5",
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/Card.tsx",
        lineNumber: 32,
        columnNumber: 10
    }, this);
}
_c3 = CardSubtitle;
function CardBody({ children, className = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `p-5 ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/Card.tsx",
        lineNumber: 36,
        columnNumber: 10
    }, this);
}
_c4 = CardBody;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardSubtitle");
__turbopack_context__.k.register(_c4, "CardBody");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/services/adminService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "adminService",
    ()=>adminService
]);
// import axios from 'axios';
// const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.authkey.my';
// export const adminService = {
//   // --- 1. AMOUNT THRESHOLDS ---
//     getAmountLimits: async () => {
//         const res = await axios.get(`${API_URL}/api/admin/limits`);
//         return res.data;
//     },
//     updateAmountLimit: async (id: string, data: any) => {
//         const res = await axios.put(`${API_URL}/api/admin/limits/${id}`, data);
//         return res.data;
//     },
//     createAmountLimit: async (data: any) => {
//         const res = await axios.post(`${API_URL}/api/admin/limits`, data);
//         return res.data;
//     },
//     deleteAmountLimit: async (id: string) => {
//         const res = await axios.delete(`${API_URL}/api/admin/limits/${id}`);
//         return res.data;
//     },
//     getRiskRules: async () => {
//         const res = await axios.get(`${API_URL}/api/admin/risk-rules`);
//         return res.data;
//     },
//     // [POST] Simpan Rules (Batch Update) - INI YANG BARU
//     saveRiskConfigBatch: async (rules: any[]) => {
//         const res = await axios.post(`${API_URL}/api/admin/risk-rules/batch-update`, { rules });
//         return res.data;
//     },
//     // [GET] Thresholds
//     getRiskConfig: async () => {
//         const res = await axios.get(`${API_URL}/api/admin/risk-config`);
//         return res.data;
//     },
//     // [PUT] Update Thresholds
//     updateRiskConfig: async (data: any) => {
//         const res = await axios.put(`${API_URL}/api/admin/risk-config`, data);
//         return res.data;
//     },
//     // --- 3. AUTH POLICIES ---
//     getPolicies: async () => {
//         const res = await axios.get(`${API_URL}/api/admin/policies`);
//         return res.data;
//     },
//     upsertPolicy: async (payload: any) => {
//         const res = await axios.post(`${API_URL}/api/admin/policies`, payload);
//         return res.data;
//     },
//     getPolicyAuditLogs: async () => {
//         const res = await axios.get(`${API_URL}/api/admin/policies/audit`);
//         return res.data;
//     },
//     // --- 4. INVESTIGATION & LOGS ---
//     getTransactions: async () => {
//         const res = await axios.get(`${API_URL}/api/admin/transactions`);
//         return res.data;
//     },
//     getTransactionDetail: async (id: string) => {
//         const res = await axios.get(`${API_URL}/api/admin/transactions/${id}`);
//         return res.data;
//     }
//     ,
//     getAuthLogs: async () => {
//         const res = await axios.get(`${API_URL}/api/admin/logs`);
//         return res.data;
//     },
//     getDashboardStats: async (range: string) => {
//     const res = await axios.get(`${API_URL}/api/admin/dashboard`, { 
//         params: { timeRange: range } 
//     });
//     return res.data;
//     },
//     // 1. Fetch Evidence (Cepat)    
//     async getTransactionEvidence(id: string) {
//         const res = await fetch(`${API_URL}/api/admin/transactions/${id}/evidence`);
//         if (!res.ok) throw new Error('Failed to load evidence');
//         return res.json();
//     },
//     // 2. Fetch Analysis (Lambat)
//     async getInvestigationReport(id: string) {
//         const res = await fetch(`${API_URL}/api/admin/transactions/${id}/investigate`);
//         if (!res.ok) throw new Error('Failed to load analysis');
//         return res.json();
//     }
// };
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/apiClient.ts [app-client] (ecmascript)");
;
const adminService = {
    // --- 1. AMOUNT THRESHOLDS ---
    getAmountLimits: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/admin/limits`);
        return res.data;
    },
    updateAmountLimit: async (id, data)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].put(`/api/admin/limits/${id}`, data);
        return res.data;
    },
    createAmountLimit: async (data)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`/api/admin/limits`, data);
        return res.data;
    },
    deleteAmountLimit: async (id)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].delete(`/api/admin/limits/${id}`);
        return res.data;
    },
    // --- 2. RISK CONFIG & RULES ---
    // getRiskRules: async () => {
    //     const res = await apiClient.get(`/api/admin/risk-rules`);
    //     return res.data;
    // },
    // saveRiskConfigBatch: async (rules: any[]) => {
    //     const res = await apiClient.post(`/api/admin/risk-rules/batch-update`, { rules });
    //     return res.data;
    // },
    // getRiskConfig: async () => {
    //     const res = await apiClient.get(`/api/admin/risk-config`);
    //     return res.data;
    // },
    // updateRiskConfig: async (data: any) => {
    //     const res = await apiClient.put(`/api/admin/risk-config`, data);
    //     return res.data;
    // },
    getRiskRules: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/admin/risk-rules`);
        return res.data;
    },
    getRiskConfig: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/admin/risk-config`);
        return res.data;
    },
    saveRiskConfigBatch: async (rulesPayload)=>{
        // Cukup kirimkan object { rules: rulesPayload } langsung sebagai parameter kedua
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post('/api/admin/risk-rules', {
            rules: rulesPayload
        });
        return res.data;
    },
    updateRiskConfig: async (payload)=>{
        // Cukup kirimkan variable payload langsung sebagai parameter kedua
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post('/api/admin/risk-config', payload);
        return res.data;
    },
    // --- 3. AUTH POLICIES ---
    getPolicies: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/admin/policies`);
        return res.data;
    },
    upsertPolicy: async (payload)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`/api/admin/policies`, payload);
        return res.data;
    },
    getPolicyAuditLogs: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/admin/policies/audit`);
        return res.data;
    },
    // --- 4. INVESTIGATION & LOGS ---
    getTransactions: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/admin/transactions`);
        return res.data;
    },
    getTransactionDetail: async (id)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/admin/transactions/${id}`);
        return res.data;
    },
    getAuthLogs: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/admin/logs`);
        return res.data;
    },
    getDashboardStats: async (range)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/admin/dashboard`, {
            params: {
                timeRange: range
            }
        });
        return res.data;
    },
    getTransactionEvidence: async (id)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/admin/transactions/${id}/evidence`);
        return res.data;
    },
    getInvestigationReport: async (id)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/admin/transactions/${id}/investigate`);
        return res.data;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(admin)/dashboard/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/chart.js/dist/chart.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-chartjs-2/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$adminService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/adminService.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// // 'use client';
// // import { useState } from 'react';
// // import Sidebar from '@/components/layout/Sidebar';
// // import { Card, CardHeader, CardTitle, CardSubtitle, CardBody } from '@/components/ui/Card';
// // import {
// //   Chart as ChartJS,
// //   CategoryScale,
// //   LinearScale,
// //   PointElement,
// //   LineElement,
// //   BarElement,
// //   ArcElement,
// //   Title,
// //   Tooltip,
// //   Legend,
// //   Filler,
// //   ChartOptions
// // } from 'chart.js';
// // import { Bar, Doughnut, Line } from 'react-chartjs-2';
// // // --- Register ChartJS ---
// // ChartJS.register(
// //   CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend, Filler
// // );
// // // --- Global Chart Defaults (Dark Theme) ---
// // ChartJS.defaults.color = '#6b6b6b'; 
// // ChartJS.defaults.borderColor = '#383838';
// // ChartJS.defaults.font.family = "'Inter', sans-serif";
// // ChartJS.defaults.font.size = 11;
// // export default function DashboardPage() {
// //   const [timeRange, setTimeRange] = useState('7d');
// //   // ==========================
// //   // 1. DATASETS
// //   // ==========================
// //   // A. Device Chart (Doughnut)
// //   const deviceChartData = {
// //     labels: ['Mobile', 'Desktop', 'Tablet'],
// //     datasets: [{
// //       data: [6234, 2456, 558],
// //       backgroundColor: ['#22c55e', '#3b82f6', '#8b5cf6'],
// //       borderWidth: 0,
// //       hoverOffset: 4,
// //       cutout: '78%', // Lebih tipis agar lebih elegan
// //     }]
// //   };
// //   // B. Main Trend Chart (Bar Stacked)
// //   const trendChartData = {
// //     labels: ['Dec 21', 'Dec 22', 'Dec 23', 'Dec 24', 'Dec 25', 'Dec 26', 'Dec 27'],
// //     datasets: [
// //       {
// //         label: 'Approved',
// //         data: [1245, 1389, 1567, 1234, 987, 1456, 1370],
// //         backgroundColor: '#22c55e',
// //         borderRadius: 2,
// //         barPercentage: 0.6,
// //         categoryPercentage: 0.7,
// //         stack: 'Stack 0',
// //       },
// //       {
// //         label: 'Denied',
// //         data: [45, 52, 48, 67, 34, 58, 46],
// //         backgroundColor: '#f87171',
// //         borderRadius: 2,
// //         barPercentage: 0.6,
// //         categoryPercentage: 0.7,
// //         stack: 'Stack 0',
// //       },
// //       {
// //         label: 'Timeout',
// //         data: [23, 31, 28, 42, 18, 35, 29],
// //         backgroundColor: '#fbbf24',
// //         borderRadius: 2,
// //         barPercentage: 0.6,
// //         categoryPercentage: 0.7,
// //         stack: 'Stack 0',
// //       }
// //     ]
// //   };
// //   // C. Security Metrics Chart (Line)
// //   const securityChartData = {
// //     labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
// //     datasets: [
// //       {
// //         label: 'Failed Approvals',
// //         data: [18, 22, 19, 25, 23, 20, 23],
// //         borderColor: '#f59e0b', // Warning Color
// //         backgroundColor: 'rgba(245, 158, 11, 0.1)',
// //         tension: 0.4,
// //         fill: true,
// //         pointRadius: 0,
// //         pointHoverRadius: 4,
// //         borderWidth: 2,
// //       },
// //       {
// //         label: 'Retry Attempts',
// //         data: [42, 55, 48, 52, 45, 38, 42],
// //         borderColor: '#f87171', // Error Color
// //         backgroundColor: 'rgba(248, 113, 113, 0.1)',
// //         tension: 0.4,
// //         fill: true,
// //         pointRadius: 0,
// //         pointHoverRadius: 4,
// //         borderWidth: 2,
// //       }
// //     ]
// //   };
// //   // ==========================
// //   // 2. CHART OPTIONS
// //   // ==========================
// //   const trendChartOptions: ChartOptions<'bar'> = {
// //     responsive: true,
// //     maintainAspectRatio: false,
// //     scales: {
// //       x: { stacked: true, grid: { display: false } },
// //       y: { 
// //         stacked: true, 
// //         beginAtZero: true, 
// //         grid: { color: '#2d2d2d' },
// //         border: { display: false } // Hilangkan garis border axis
// //       }
// //     },
// //     plugins: {
// //       legend: { 
// //         position: 'bottom', 
// //         align: 'center',
// //         labels: { 
// //             usePointStyle: true, 
// //             padding: 25, 
// //             boxWidth: 8,
// //             color: '#9b9b9b' 
// //         } 
// //       },
// //       tooltip: {
// //         backgroundColor: '#202020',
// //         titleColor: '#ebebeb',
// //         bodyColor: '#9b9b9b',
// //         borderColor: '#383838',
// //         borderWidth: 1,
// //         padding: 10,
// //         cornerRadius: 6,
// //         displayColors: true,
// //         usePointStyle: true,
// //       }
// //     }
// //   };
// //   const securityChartOptions: ChartOptions<'line'> = {
// //     responsive: true,
// //     maintainAspectRatio: false,
// //     scales: {
// //       x: { 
// //         grid: { display: false },
// //         ticks: { color: '#6b6b6b' }
// //       },
// //       y: { 
// //         beginAtZero: true, 
// //         grid: { color: '#2d2d2d' }, 
// //         ticks: { display: false }, // Sembunyikan angka Y-axis agar bersih seperti sparkline
// //         border: { display: false }
// //       }
// //     },
// //     plugins: { 
// //       legend: { 
// //         display: true, // AKTIFKAN LEGEND
// //         position: 'bottom', 
// //         align: 'start', // Rata kiri/bawah
// //         labels: { 
// //             usePointStyle: true, // Gunakan titik bulat
// //             boxWidth: 8, 
// //             padding: 20,
// //             color: '#9b9b9b'
// //         } 
// //       },
// //       tooltip: {
// //         mode: 'index',
// //         intersect: false,
// //         backgroundColor: '#202020',
// //         titleColor: '#ebebeb',
// //         bodyColor: '#9b9b9b',
// //         borderColor: '#383838',
// //         borderWidth: 1,
// //         padding: 10,
// //         usePointStyle: true,
// //       }
// //     },
// //     elements: {
// //         point: {
// //             radius: 0, // Sembunyikan titik default
// //             hitRadius: 10
// //         }
// //     }
// //   };
// //   return (
// //     <div className="flex min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-[family-name:var(--font-inter)]">
// //       <Sidebar />
// //       <main className="flex-1 flex flex-col h-screen overflow-hidden">
// //         {/* Header */}
// //         <header className="px-6 py-3 border-b border-[var(--border-secondary)] bg-[var(--bg-secondary)] flex justify-between items-center shrink-0 h-[60px]">
// //            <div className="flex items-center gap-2">
// //              <h1 className="text-lg font-semibold text-[var(--text-primary)]">Dashboard</h1>
// //            </div>
// //            <div className="flex items-center gap-3">
// //              <div className="flex bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] overflow-hidden">
// //                 {['24h', '7d', '30d', '90d'].map((range) => (
// //                     <button 
// //                         key={range}
// //                         onClick={() => setTimeRange(range)}
// //                         className={`px-3.5 py-2 text-[13px] font-medium transition-colors ${timeRange === range ? 'bg-[var(--accent)] text-white' : 'text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]'}`}
// //                     >
// //                         {range}
// //                     </button>
// //                 ))}
// //              </div>
// //              <button className="flex items-center gap-1.5 px-3.5 py-2 rounded-[var(--radius-md)] text-[13px] font-medium bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-primary)] hover:bg-[var(--bg-hover)] transition-all">
// //                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
// //                 Export
// //              </button>
// //              <button onClick={() => window.location.reload()} className="flex items-center gap-1.5 px-3.5 py-2 rounded-[var(--radius-md)] text-[13px] font-medium bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-all">
// //                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><polyline points="23,4 23,10 17,10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
// //                 Refresh
// //              </button>
// //            </div>
// //         </header>
// //         {/* Content Area */}
// //         <div className="flex-1 overflow-auto p-6 custom-scrollbar">
// //             <div className="grid grid-cols-12 gap-5">
// //                 {/* 1. Authentication Funnel */}
// //                 <Card className="col-span-7">
// //                     <CardHeader>
// //                         <div>
// //                             <CardTitle icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>}>
// //                                 Authentication Funnel
// //                             </CardTitle>
// //                             <CardSubtitle>Payment flow conversion rates</CardSubtitle>
// //                         </div>
// //                     </CardHeader>
// //                     <CardBody>
// //                         <div className="py-2">
// //                             {/* Funnel Stage 1 */}
// //                             <div className="flex items-center mb-4">
// //                                 <div className="flex-1 relative h-12 rounded-[var(--radius-md)] flex items-center px-4 bg-gradient-to-r from-blue-500 to-blue-600 w-full" style={{ clipPath: 'polygon(0% 0%, 97% 0%, 100% 50%, 97% 100%, 0% 100%)' }}>
// //                                     <span className="text-[13px] font-medium text-white z-10">Payment Initiated</span>
// //                                 </div>
// //                                 <div className="w-[140px] text-right pl-5">
// //                                     <div className="text-lg font-semibold text-[var(--text-primary)] tabular-nums">12,847</div>
// //                                     <div className="text-xs text-[var(--text-tertiary)]">100%</div>
// //                                 </div>
// //                             </div>
// //                             {/* Funnel Stage 2 */}
// //                             <div className="flex items-center mb-4">
// //                                 <div className="flex-1 relative">
// //                                     <div className="h-12 rounded-[var(--radius-md)] flex items-center px-4 bg-gradient-to-r from-violet-500 to-violet-600" style={{ width: '78%', clipPath: 'polygon(0% 0%, 96% 0%, 100% 50%, 96% 100%, 0% 100%)' }}>
// //                                         <span className="text-[13px] font-medium text-white z-10">Approval Requested</span>
// //                                     </div>
// //                                 </div>
// //                                 <div className="w-[140px] text-right pl-5">
// //                                     <div className="text-lg font-semibold text-[var(--text-primary)] tabular-nums">10,021</div>
// //                                     <div className="text-xs text-[var(--text-tertiary)]">78.0%</div>
// //                                 </div>
// //                             </div>
// //                             {/* Funnel Stage 3 */}
// //                             <div className="flex items-center">
// //                                 <div className="flex-1 relative">
// //                                     <div className="h-12 rounded-[var(--radius-md)] flex items-center px-4 bg-gradient-to-r from-green-500 to-green-600" style={{ width: '72%' }}>
// //                                         <span className="text-[13px] font-medium text-white z-10">Payment Approved</span>
// //                                     </div>
// //                                 </div>
// //                                 <div className="w-[140px] text-right pl-5">
// //                                     <div className="text-lg font-semibold text-[var(--text-primary)] tabular-nums">9,248</div>
// //                                     <div className="text-xs text-[var(--text-tertiary)]">72.0%</div>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div className="flex items-center gap-5 mt-5 pt-4 border-t border-[var(--border-secondary)]">
// //                             <div className="flex items-center gap-2">
// //                                 <div className="w-2 h-2 rounded-full bg-[var(--warning)]"></div>
// //                                 <div>
// //                                     <div className="text-xs text-[var(--text-tertiary)]">Drop-off: Initiated → Requested</div>
// //                                     <div className="text-[13px] font-semibold text-[var(--text-primary)]">22.0% (2,826 users)</div>
// //                                 </div>
// //                             </div>
// //                             <div className="flex items-center gap-2">
// //                                 <div className="w-2 h-2 rounded-full bg-[var(--error)]"></div>
// //                                 <div>
// //                                     <div className="text-xs text-[var(--text-tertiary)]">Drop-off: Requested → Approved</div>
// //                                     <div className="text-[13px] font-semibold text-[var(--text-primary)]">7.7% (773 users)</div>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </CardBody>
// //                 </Card>
// //                 {/* 2. Key Metrics */}
// //                 <Card className="col-span-5">
// //                     <CardHeader>
// //                         <div>
// //                             <CardTitle icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>}>
// //                                 Key Metrics
// //                             </CardTitle>
// //                             <CardSubtitle>Last 7 days performance</CardSubtitle>
// //                         </div>
// //                     </CardHeader>
// //                     <CardBody>
// //                         <div className="grid grid-cols-2 gap-4">
// //                             {[
// //                                 { label: 'Overall Success Rate', val: '92.3%', change: '↑ +1.2% vs last week', type: 'success', changeColor: 'text-[var(--success)]' },
// //                                 { label: 'Avg. Approval Time', val: '2.4s', change: '↓ -0.3s vs last week', type: 'text-[var(--text-primary)]', changeColor: 'text-[var(--success)]' },
// //                                 { label: 'Total Transactions', val: '9,248', change: '↑ +847 vs last week', type: 'text-[var(--text-primary)]', changeColor: 'text-[var(--success)]' },
// //                                 { label: 'Unique Users', val: '3,891', change: '↑ +234 vs last week', type: 'text-[var(--text-primary)]', changeColor: 'text-[var(--success)]' }
// //                             ].map((stat, i) => (
// //                                 <div key={i} className="bg-[var(--bg-tertiary)] rounded-[var(--radius-md)] p-4">
// //                                     <div className="text-xs text-[var(--text-tertiary)] mb-2">{stat.label}</div>
// //                                     <div className={`text-[28px] font-bold leading-tight ${stat.type === 'success' ? 'text-[var(--success)]' : 'text-[var(--text-primary)]'}`}>{stat.val}</div>
// //                                     <div className={`text-xs mt-1.5 ${stat.changeColor}`}>{stat.change}</div>
// //                                 </div>
// //                             ))}
// //                         </div>
// //                     </CardBody>
// //                 </Card>
// //                 {/* 3. Success by Device Type */}
// //                 <Card className="col-span-4">
// //                     <CardHeader>
// //                         <CardTitle icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>}>
// //                             Success by Device Type
// //                         </CardTitle>
// //                     </CardHeader>
// //                     <CardBody>
// //                         <div className="relative h-[220px]">
// //                             <Doughnut data={deviceChartData} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }} />
// //                             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
// //                                 <div className="text-[28px] font-bold text-[var(--text-primary)]">92.3%</div>
// //                                 <div className="text-xs text-[var(--text-tertiary)]">Overall</div>
// //                             </div>
// //                         </div>
// //                         <div className="flex justify-center gap-5 mt-4 flex-wrap">
// //                             {[
// //                                 { l: 'Mobile', v: '94.2%', c: '#22c55e' },
// //                                 { l: 'Desktop', v: '89.1%', c: '#3b82f6' },
// //                                 { l: 'Tablet', v: '91.8%', c: '#8b5cf6' }
// //                             ].map((item, i) => (
// //                                 <div key={i} className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)]">
// //                                     <div className="w-2.5 h-2.5 rounded-full" style={{ background: item.c }}></div>
// //                                     {item.l} ({item.v})
// //                                 </div>
// //                             ))}
// //                         </div>
// //                     </CardBody>
// //                 </Card>
// //                 {/* 4. Success by Platform */}
// //                 <Card className="col-span-4">
// //                     <CardHeader>
// //                         <CardTitle icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/></svg>}>
// //                             Success by Platform
// //                         </CardTitle>
// //                     </CardHeader>
// //                     <CardBody>
// //                         <div className="flex flex-col gap-4">
// //                             {[
// //                                 { name: 'iOS', icon: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>, val: '95.4%', color: 'from-green-500 to-green-600', w: '95.4%' },
// //                                 { name: 'Android', icon: <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>, val: '93.1%', color: 'from-blue-500 to-blue-600', w: '93.1%' },
// //                                 { name: 'Web', icon: <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>, val: '88.7%', color: 'from-amber-500 to-amber-600', w: '88.7%' }
// //                             ].map((p, i) => (
// //                                 <div key={i}>
// //                                     <div className="flex justify-between items-center mb-2">
// //                                         <div className="flex items-center gap-2 text-[13px] text-[var(--text-primary)]">
// //                                             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[var(--text-tertiary)]">{p.icon}</svg>
// //                                             {p.name}
// //                                         </div>
// //                                         <div className="text-[13px] font-semibold text-[var(--text-primary)]">{p.val}</div>
// //                                     </div>
// //                                     <div className="h-2 bg-[var(--bg-tertiary)] rounded-full overflow-hidden">
// //                                         <div className={`h-full rounded-full bg-gradient-to-r ${p.color}`} style={{ width: p.w }}></div>
// //                                     </div>
// //                                 </div>
// //                             ))}
// //                         </div>
// //                     </CardBody>
// //                 </Card>
// //                 {/* 5. Success by Amount Tier */}
// //                 <Card className="col-span-4">
// //                     <CardHeader>
// //                         <CardTitle icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>}>
// //                             Success by Amount Tier
// //                         </CardTitle>
// //                     </CardHeader>
// //                     <CardBody>
// //                         <div className="flex flex-col">
// //                             {[
// //                                 { tier: 'Under $100', tx: '5,421 transactions', rate: '96.8%', status: 'Low friction', color: 'success', icon: '$' },
// //                                 { tier: '$100 - $1,000', tx: '2,847 transactions', rate: '91.2%', status: 'Step-up required', color: 'warning', icon: '$$' },
// //                                 { tier: 'Over $1,000', tx: '980 transactions', rate: '84.3%', status: 'High verification', color: 'error', icon: '$$$' }
// //                             ].map((item, i) => (
// //                                 <div key={i} className="flex items-center py-3 border-b border-[var(--border-secondary)] last:border-0">
// //                                     <div className={`w-8 h-8 rounded-[var(--radius-md)] flex items-center justify-center mr-3 text-sm font-semibold ${
// //                                         item.color === 'success' ? 'bg-[var(--success-bg)] text-[var(--success)]' :
// //                                         item.color === 'warning' ? 'bg-[var(--warning-bg)] text-[var(--warning)]' :
// //                                         'bg-[var(--error-bg)] text-[var(--error)]'
// //                                     }`}>
// //                                         {item.icon}
// //                                     </div>
// //                                     <div className="flex-1">
// //                                         <div className="text-[13px] font-medium text-[var(--text-primary)]">{item.tier}</div>
// //                                         <div className="text-[11px] text-[var(--text-tertiary)]">{item.tx}</div>
// //                                     </div>
// //                                     <div className="text-right">
// //                                         <div className={`text-sm font-semibold ${
// //                                             item.color === 'success' ? 'text-[var(--success)]' :
// //                                             item.color === 'warning' ? 'text-[var(--warning)]' :
// //                                             'text-[var(--error)]'
// //                                         }`}>{item.rate}</div>
// //                                         <div className="text-[11px] text-[var(--text-tertiary)]">{item.status}</div>
// //                                     </div>
// //                                 </div>
// //                             ))}
// //                         </div>
// //                     </CardBody>
// //                 </Card>
// //                 {/* 6. Security Metrics (PERBAIKAN UTAMA) */}
// //                 <Card className="col-span-6">
// //                     <CardHeader>
// //                         <div>
// //                             <CardTitle icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>}>
// //                                 Security Metrics
// //                             </CardTitle>
// //                             <CardSubtitle>Anomaly and retry tracking</CardSubtitle>
// //                         </div>
// //                     </CardHeader>
// //                     <CardBody>
// //                         {/* Stats Boxes */}
// //                         <div className="grid grid-cols-3 gap-4 mb-6">
// //                             <div className="bg-[var(--bg-tertiary)] rounded-[var(--radius-md)] p-4 text-center">
// //                                 <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--warning-bg)] text-[var(--warning)] flex items-center justify-center mx-auto mb-3">
// //                                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg>
// //                                 </div>
// //                                 <div className="text-2xl font-bold text-[var(--text-primary)] mb-1">23</div>
// //                                 <div className="text-xs text-[var(--text-tertiary)]">Failed Approvals per User</div>
// //                                 <div className="text-[11px] text-[var(--error)] mt-2 pt-2 border-t border-[var(--border-secondary)]">↑ 3 more</div>
// //                             </div>
// //                             <div className="bg-[var(--bg-tertiary)] rounded-[var(--radius-md)] p-4 text-center">
// //                                 <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--error-bg)] text-[var(--error)] flex items-center justify-center mx-auto mb-3">
// //                                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
// //                                 </div>
// //                                 <div className="text-2xl font-bold text-[var(--text-primary)] mb-1">1.8</div>
// //                                 <div className="text-xs text-[var(--text-tertiary)]">Repeated Attempts</div>
// //                                 <div className="text-[11px] text-[var(--success)] mt-2 pt-2 border-t border-[var(--border-secondary)]">↓ 0.2 less</div>
// //                             </div>
// //                             <div className="bg-[var(--bg-tertiary)] rounded-[var(--radius-md)] p-4 text-center">
// //                                 <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--info-bg)] text-[var(--info)] flex items-center justify-center mx-auto mb-3">
// //                                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
// //                                 </div>
// //                                 <div className="text-2xl font-bold text-[var(--text-primary)] mb-1">342</div>
// //                                 <div className="text-xs text-[var(--text-tertiary)]">Approval Retries</div>
// //                                 <div className="text-[11px] text-[var(--success)] mt-2 pt-2 border-t border-[var(--border-secondary)]">↓ 12%</div>
// //                             </div>
// //                         </div>
// //                         {/* Line Chart with Bottom Legend */}
// //                         <div className="h-[200px]">
// //                             <Line data={securityChartData} options={securityChartOptions} />
// //                         </div>
// //                     </CardBody>
// //                 </Card>
// //                 {/* 7. Device & Geo Trends */}
// //                 <Card className="col-span-6">
// //                     <CardHeader>
// //                         <div>
// //                             <CardTitle icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>}>
// //                                 Device & Geo Trends
// //                             </CardTitle>
// //                             <CardSubtitle>Device recognition and regional distribution</CardSubtitle>
// //                         </div>
// //                     </CardHeader>
// //                     <CardBody>
// //                         <div className="grid grid-cols-2 gap-6">
// //                             {/* Device Recog */}
// //                             <div>
// //                                 <div className="text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-3">Device Recognition</div>
// //                                 <div className="flex flex-col gap-0">
// //                                     <div className="flex items-center justify-between py-2.5 border-b border-[var(--border-secondary)]">
// //                                         <div className="flex items-center gap-2 text-[13px] text-[var(--text-primary)]">
// //                                             <svg className="w-4 h-4 text-[var(--success)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
// //                                             Known Devices
// //                                         </div>
// //                                         <div className="text-[13px] font-semibold text-[var(--success)]">78.4%</div>
// //                                     </div>
// //                                     <div className="flex items-center justify-between py-2.5 border-b border-[var(--border-secondary)]">
// //                                         <div className="flex items-center gap-2 text-[13px] text-[var(--text-primary)]">
// //                                             <svg className="w-4 h-4 text-[var(--purple)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
// //                                             New Devices (7d)
// //                                         </div>
// //                                         <div className="text-[13px] font-semibold text-[var(--purple)]">847</div>
// //                                     </div>
// //                                     <div className="flex items-center justify-between py-2.5 border-b border-[var(--border-secondary)]">
// //                                         <div className="flex items-center gap-2 text-[13px] text-[var(--text-primary)]">
// //                                             <svg className="w-4 h-4 text-[var(--warning)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>
// //                                             Avg New Device/Day
// //                                         </div>
// //                                         <div className="text-[13px] font-semibold text-[var(--warning)]">121</div>
// //                                     </div>
// //                                     <div className="flex items-center justify-between py-2.5 border-b border-[var(--border-secondary)]">
// //                                         <div className="flex items-center gap-2 text-[13px] text-[var(--text-primary)]">
// //                                             <svg className="w-4 h-4 text-[var(--info)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
// //                                             New Device Success
// //                                         </div>
// //                                         <div className="text-[13px] font-semibold text-[var(--info)]">86.2%</div>
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                             {/* Geo Dist */}
// //                             <div>
// //                                 <div className="text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-3">Top Regions</div>
// //                                 <div className="flex flex-col gap-3">
// //                                     {[
// //                                         { c: 'Singapore', f: '🇸🇬', count: '3,421', pct: '37.0%', color: 'bg-green-500' },
// //                                         { c: 'Malaysia', f: '🇲🇾', count: '2,156', pct: '23.3%', color: 'bg-blue-500' },
// //                                         { c: 'Thailand', f: '🇹🇭', count: '1,432', pct: '15.5%', color: 'bg-violet-500' },
// //                                         { c: 'Hong Kong', f: '🇭🇰', count: '1,021', pct: '11.0%', color: 'bg-amber-500' },
// //                                         { c: 'Japan', f: '🇯🇵', count: '687', pct: '7.4%', color: 'bg-green-500' },
// //                                     ].map((geo, i) => (
// //                                         <div key={i} className="flex items-center gap-3">
// //                                             <span className="text-lg">{geo.f}</span>
// //                                             <div className="flex-1">
// //                                                 <div className="text-[13px] font-medium text-[var(--text-primary)]">{geo.c}</div>
// //                                                 <div className="text-[11px] text-[var(--text-tertiary)]">{geo.count} approvals</div>
// //                                             </div>
// //                                             <div className="w-[120px] text-right">
// //                                                 <div className="h-1.5 bg-[var(--bg-tertiary)] rounded-full overflow-hidden mb-1">
// //                                                     <div className={`h-full rounded-full ${geo.color}`} style={{ width: geo.pct }}></div>
// //                                                 </div>
// //                                                 <div className="text-[13px] font-semibold">{geo.pct}</div>
// //                                             </div>
// //                                         </div>
// //                                     ))}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </CardBody>
// //                 </Card>
// //                 {/* 8. Approval Trends */}
// //                 <Card className="col-span-12">
// //                     <CardHeader>
// //                         <div>
// //                             <CardTitle icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>}>
// //                                 Approval Trends Over Time
// //                             </CardTitle>
// //                             <CardSubtitle>Daily success rates and transaction volume</CardSubtitle>
// //                         </div>
// //                     </CardHeader>
// //                     <CardBody>
// //                         <div className="h-[280px]">
// //                             <Bar data={trendChartData} options={trendChartOptions} />
// //                         </div>
// //                     </CardBody>
// //                 </Card>
// //             </div>
// //         </div>
// //       </main>
// //     </div>
// //   );
// // }
// 'use client';
// import { useState, useEffect } from 'react';
// import { Card, CardHeader, CardTitle, CardSubtitle, CardBody } from '@/components/ui/Card';
// import {
//     Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend, Filler
// } from 'chart.js';
// import { Bar, Doughnut, Line } from 'react-chartjs-2';
// import { adminService } from '@/services/adminService';
// // --- Register ChartJS ---
// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend, Filler);
// // --- Global Defaults ---
// ChartJS.defaults.color = '#9b9b9b';
// ChartJS.defaults.borderColor = '#383838';
// ChartJS.defaults.font.family = "'Inter', sans-serif";
// ChartJS.defaults.font.size = 11;
// // --- Helper Functions ---
// const countryCodeToEmoji = (code: string) => {
//     if (!code || code === 'Unknown') return '🌐';
//     const offset = 127397;
//     return code.toUpperCase().split('').map(char => String.fromCodePoint(char.charCodeAt(0) + offset)).join('');
// };
// const getGeoColor = (index: number) => {
//     const colors = ['bg-[#22c55e]', 'bg-[#3b82f6]', 'bg-[#8b5cf6]', 'bg-[#f59e0b]', 'bg-[#22c55e]'];
//     return colors[index % colors.length];
// };
// export default function DashboardPage() {
//     const [timeRange, setTimeRange] = useState('7d');
//     const [loading, setLoading] = useState(true);
//     const [data, setData] = useState({
//         funnel: { total: 0, requested: 0, approved: 0 },
//         metrics: { 
//             totalTx: 0, 
//             prevTotalTx: 0, 
//             uniqueUsers: 0, 
//             successRate: "0.0", 
//             txChange: 0,
//             avgTime: "0.0s",
//             avgTimeChange: "—"
//         },
//         trendChart: { labels: [], approved: [], denied: [], timeout: [] },
//         securityChart: { labels: [], failed: [], retry: [] },
//         deviceStats: { mobile: 0, desktop: 0, tablet: 0 },
//         platformStats: [], // Akan diisi data real dari backend
//         amountStats: [],
//         geoStats: []
//     });
//     useEffect(() => {
//         async function loadData() {
//             setLoading(true);
//             try {
//                 const stats = await adminService.getDashboardStats(timeRange);
//                 if (stats && stats.metrics) {
//                     setData(prev => ({ ...prev, ...stats }));
//                 }
//             } catch (e) {
//                 console.error("Dashboard load error", e);
//             } finally {
//                 setLoading(false);
//             }
//         }
//         loadData();
//     }, [timeRange]);
//     // --- CHART DATA CONFIG ---
//     // 1. Device Chart
//     const deviceChartData = {
//         labels: ['Mobile', 'Desktop', 'Tablet'],
//         datasets: [{
//             data: [data.deviceStats.mobile, data.deviceStats.desktop, data.deviceStats.tablet],
//             backgroundColor: ['#22c55e', '#3b82f6', '#8b5cf6'],
//             borderWidth: 0,
//             hoverOffset: 4,
//             cutout: '75%',
//         }]
//     };
//     // 2. Trend Chart (Bar)
//     const trendChartData = {
//         labels: data.trendChart.labels.length ? data.trendChart.labels : ['No Data'],
//         datasets: [
//             { label: 'Approved', data: data.trendChart.approved, backgroundColor: '#22c55e', borderRadius: 4, barPercentage: 0.7, categoryPercentage: 0.8, stack: 'Stack 0' },
//             { label: 'Denied', data: data.trendChart.denied, backgroundColor: '#f87171', borderRadius: 4, barPercentage: 0.7, categoryPercentage: 0.8, stack: 'Stack 0' },
//             { label: 'Timeout', data: data.trendChart.timeout, backgroundColor: '#fbbf24', borderRadius: 4, barPercentage: 0.7, categoryPercentage: 0.8, stack: 'Stack 0' }
//         ]
//     };
//     // 3. Security Chart (Line) - PERBAIKAN: Point Radius & Style
//     const securityChartData = {
//         labels: data.securityChart.labels.length ? data.securityChart.labels : ['No Data'],
//         datasets: [
//             {
//                 label: 'Failed Approvals',
//                 data: data.securityChart.failed,
//                 borderColor: '#f59e0b',
//                 backgroundColor: 'rgba(245, 158, 11, 0.1)', // Transparan orange
//                 tension: 0.4,
//                 fill: true,
//                 pointRadius: 3, // Tampilkan titik (sebelumnya 0)
//                 pointHoverRadius: 5,
//                 borderWidth: 2,
//                 pointBackgroundColor: '#f59e0b'
//             },
//             {
//                 label: 'Retry Attempts',
//                 data: data.securityChart.retry,
//                 borderColor: '#f87171',
//                 backgroundColor: 'rgba(248, 113, 113, 0.1)', // Transparan merah
//                 tension: 0.4,
//                 fill: true,
//                 pointRadius: 3, // Tampilkan titik (sebelumnya 0)
//                 pointHoverRadius: 5,
//                 borderWidth: 2,
//                 pointBackgroundColor: '#f87171'
//             }
//         ]
//     };
//     // --- CALCULATIONS ---
//     const funnelReqPct = data.funnel.total > 0 ? ((data.funnel.requested / data.funnel.total) * 100).toFixed(1) : "0.0";
//     const funnelAppPct = data.funnel.total > 0 ? ((data.funnel.approved / data.funnel.total) * 100).toFixed(1) : "0.0";
//     const dropReq = data.funnel.total - data.funnel.requested;
//     const dropApp = data.funnel.requested - data.funnel.approved;
//     const dropReqPct = data.funnel.total > 0 ? ((dropReq / data.funnel.total) * 100).toFixed(1) : "0.0";
//     const dropAppPct = data.funnel.requested > 0 ? ((dropApp / data.funnel.requested) * 100).toFixed(1) : "0.0";
//     const totalFailed = data.securityChart.failed.reduce((a: any, b: any) => a + b, 0);
//     const totalRetry = data.securityChart.retry.reduce((a: any, b: any) => a + b, 0);
//     const totalBlocked = data.trendChart.denied.reduce((a: any, b: any) => a + b, 0);
//     // --- CHART OPTIONS ---
//     const commonOptions: any = {
//         responsive: true,
//         maintainAspectRatio: false,
//         scales: {
//             x: { grid: { display: false }, ticks: { color: '#6b6b6b' } },
//             y: { display: false }
//         },
//         plugins: { legend: { display: false } }
//     };
//     const barOptions: any = {
//         ...commonOptions,
//         scales: { x: { stacked: true, grid: { display: false } }, y: { stacked: true, display: false } },
//         plugins: { legend: { position: 'bottom', labels: { usePointStyle: true, padding: 20, color: '#9b9b9b' } } }
//     };
//     // PERBAIKAN: Opsi Chart Security (Line) agar titik muncul dan grid rapi
//     const securityLineOptions: any = {
//         responsive: true,
//         maintainAspectRatio: false,
//         scales: {
//             x: {
//                 grid: { display: false },
//                 ticks: { color: '#6b6b6b', font: { size: 10 } }
//             },
//             y: {
//                 beginAtZero: true,
//                 grid: { color: '#2d2d2d', drawBorder: false }, // Grid tipis gelap
//                 border: { display: false },
//                 ticks: { display: false } // Sembunyikan angka Y agar bersih
//             }
//         },
//         plugins: {
//             legend: {
//                 position: 'bottom',
//                 align: 'start', // Legend rata kiri bawah
//                 labels: { usePointStyle: true, padding: 15, color: '#9b9b9b', boxWidth: 8 }
//             },
//             tooltip: {
//                 mode: 'index',
//                 intersect: false,
//                 backgroundColor: '#202020',
//                 titleColor: '#ebebeb',
//                 bodyColor: '#9b9b9b',
//                 borderColor: '#383838',
//                 borderWidth: 1
//             }
//         },
//         interaction: {
//             mode: 'nearest',
//             axis: 'x',
//             intersect: false
//         }
//     };
//     return (
//         <div className="flex min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans">
//             <main className="flex-1 flex flex-col h-screen overflow-hidden">
//                 {/* HEADER */}
//                 <header className="px-6 py-3 border-b border-[var(--border-secondary)] bg-[var(--bg-secondary)] flex justify-between items-center shrink-0 h-[60px]">
//                     <div className="flex items-center gap-2"><h1 className="text-lg font-semibold text-[var(--text-primary)]">Dashboard</h1></div>
//                     <div className="flex items-center gap-3">
//                         <div className="flex bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] overflow-hidden">
//                             {['24h', '7d', '30d', '90d'].map((range) => <button key={range} onClick={() => setTimeRange(range)} className={`px-3.5 py-2 text-[13px] font-medium transition-colors ${timeRange === range ? 'bg-[var(--accent)] text-white' : 'text-[var(--text-secondary)] hover:bg-[var(--bg-hover)]'}`}>{range}</button>)}
//                         </div>
//                         <button className="flex items-center gap-1.5 px-3.5 py-2 rounded-[var(--radius-md)] text-[13px] font-medium bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-primary)] hover:bg-[var(--bg-hover)] transition-all">
//                             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7,10 12,15 17,10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
//                             Export
//                         </button>
//                         <button onClick={() => window.location.reload()} className="flex items-center gap-1.5 px-3.5 py-2 rounded-[var(--radius-md)] text-[13px] font-medium bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-all">
//                             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`}><polyline points="23,4 23,10 17,10" /><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" /></svg> Refresh
//                         </button>
//                     </div>
//                 </header>
//                 <div className="flex-1 overflow-auto p-6 custom-scrollbar">
//                     <div className="grid grid-cols-12 gap-5">
//                         {/* 1. AUTHENTICATION FUNNEL */}
//                         <Card className="col-span-7">
//                             <CardHeader><div><CardTitle icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>}>Authentication Funnel</CardTitle><CardSubtitle>Conversion based on live transactions</CardSubtitle></div></CardHeader>
//                             <CardBody>
//                                 <div className="py-2">
//                                     <div className="flex items-center mb-4"><div className="flex-1 relative h-12 rounded-[var(--radius-md)] flex items-center px-4 bg-gradient-to-r from-blue-500 to-blue-600 w-full" style={{ clipPath: 'polygon(0% 0%, 97% 0%, 100% 50%, 97% 100%, 0% 100%)' }}><span className="text-[13px] font-medium text-white z-10">Total Transactions</span></div><div className="w-[140px] text-right pl-5"><div className="text-lg font-semibold text-[var(--text-primary)] tabular-nums">{data.funnel.total.toLocaleString()}</div><div className="text-xs text-[var(--text-tertiary)]">100%</div></div></div>
//                                     <div className="flex items-center mb-4"><div className="flex-1 relative"><div className="h-12 rounded-[var(--radius-md)] flex items-center px-4 bg-gradient-to-r from-violet-500 to-violet-600" style={{ width: `${Math.max(parseFloat(funnelReqPct), 5)}%`, clipPath: 'polygon(0% 0%, 96% 0%, 100% 50%, 96% 100%, 0% 100%)' }}><span className="text-[13px] font-medium text-white z-10">Approval Requested</span></div></div><div className="w-[140px] text-right pl-5"><div className="text-lg font-semibold text-[var(--text-primary)] tabular-nums">{data.funnel.requested.toLocaleString()}</div><div className="text-xs text-[var(--text-tertiary)]">{funnelReqPct}%</div></div></div>
//                                     <div className="flex items-center"><div className="flex-1 relative"><div className="h-12 rounded-[var(--radius-md)] flex items-center px-4 bg-gradient-to-r from-green-500 to-green-600" style={{ width: `${Math.max(parseFloat(funnelAppPct), 5)}%` }}><span className="text-[13px] font-medium text-white z-10">Approved</span></div></div><div className="w-[140px] text-right pl-5"><div className="text-lg font-semibold text-[var(--text-primary)] tabular-nums">{data.funnel.approved.toLocaleString()}</div><div className="text-xs text-[var(--text-tertiary)]">{funnelAppPct}%</div></div></div>
//                                 </div>
//                                 <div className="flex items-center gap-5 mt-5 pt-4 border-t border-[var(--border-secondary)]">
//                                     <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[var(--warning)]"></div><div><div className="text-xs text-[var(--text-tertiary)]">Drop-off: Init → Req</div><div className="text-[13px] font-semibold text-[var(--text-primary)]">{dropReqPct}% ({dropReq})</div></div></div>
//                                     <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[var(--error)]"></div><div><div className="text-xs text-[var(--text-tertiary)]">Drop-off: Req → App</div><div className="text-[13px] font-semibold text-[var(--text-primary)]">{dropAppPct}% ({dropApp})</div></div></div>
//                                 </div>
//                             </CardBody>
//                         </Card>
//                         {/* 2. KEY METRICS */}
//                         <Card className="col-span-5">
//                             <CardHeader>
//                                 <div>
//                                     <CardTitle icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>}>Key Metrics</CardTitle>
//                                     <CardSubtitle>Last {timeRange} performance</CardSubtitle>
//                                 </div>
//                             </CardHeader>
//                             <CardBody>
//                                 <div className="grid grid-cols-2 gap-4">
//                                     <div className="bg-[var(--bg-tertiary)] rounded-[var(--radius-md)] p-4 border border-[var(--border-primary)]">
//                                         <div className="text-xs text-[var(--text-tertiary)] mb-2">Overall Success Rate</div>
//                                         <div className="text-[28px] font-bold text-[var(--success)]">{data.metrics.successRate}%</div>
//                                         <div className="text-xs mt-1.5 text-[var(--success)]">↑ +1.2% vs prev</div>
//                                     </div>
//                                     <div className="bg-[var(--bg-tertiary)] rounded-[var(--radius-md)] p-4 border border-[var(--border-primary)]">
//                                         <div className="text-xs text-[var(--text-tertiary)] mb-2">Avg. Approval Time</div>
//                                         <div className="text-[28px] font-bold text-[var(--text-primary)]">{data.metrics.avgTime}</div>
//                                         <div className={`text-xs mt-1.5 ${data.metrics.avgTimeChange.includes('↓') ? 'text-[var(--success)]' : 'text-[var(--error)]'}`}>
//                                             {data.metrics.avgTimeChange} vs prev
//                                         </div>
//                                     </div>
//                                     <div className="bg-[var(--bg-tertiary)] rounded-[var(--radius-md)] p-4 border border-[var(--border-primary)]">
//                                         <div className="text-xs text-[var(--text-tertiary)] mb-2">Total Transactions</div>
//                                         <div className="text-[28px] font-bold text-[var(--text-primary)]">{data.metrics.totalTx.toLocaleString()}</div>
//                                         <div className={`text-xs mt-1.5 ${data.metrics.txChange >= 0 ? 'text-[var(--success)]' : 'text-[var(--error)]'}`}>
//                                             {data.metrics.txChange >= 0 ? '↑' : '↓'} {Math.abs(data.metrics.txChange)} vs prev
//                                         </div>
//                                     </div>
//                                     <div className="bg-[var(--bg-tertiary)] rounded-[var(--radius-md)] p-4 border border-[var(--border-primary)]">
//                                         <div className="text-xs text-[var(--text-tertiary)] mb-2">Unique Users</div>
//                                         <div className="text-[28px] font-bold text-[var(--text-primary)]">{data.metrics.uniqueUsers.toLocaleString()}</div>
//                                         <div className="text-xs mt-1.5 text-[var(--text-tertiary)]">Active this period</div>
//                                     </div>
//                                 </div>
//                             </CardBody>
//                         </Card>
//                         {/* 3. DEVICE CHART */}
//                         <Card className="col-span-4">
//                             <CardHeader><CardTitle icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>}>Success by Device Type</CardTitle></CardHeader>
//                             <CardBody>
//                                 <div className="chart-container" style={{ position: 'relative', height: '220px' }}>
//                                     <Doughnut data={deviceChartData} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }} />
//                                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
//                                         <div className="text-[28px] font-bold text-[var(--text-primary)]">{data.metrics.successRate}%</div>
//                                         <div className="text-xs text-[var(--text-tertiary)]">Overall</div>
//                                     </div>
//                                 </div>
//                                 <div className="flex justify-center gap-5 mt-4 flex-wrap">
//                                     <div className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)]"><div className="w-2.5 h-2.5 rounded-full bg-[#22c55e]"></div>Mobile</div>
//                                     <div className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)]"><div className="w-2.5 h-2.5 rounded-full bg-[#3b82f6]"></div>Desktop</div>
//                                     <div className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)]"><div className="w-2.5 h-2.5 rounded-full bg-[#8b5cf6]"></div>Tablet</div>
//                                 </div>
//                             </CardBody>
//                         </Card>
//                         {/* 4. PLATFORM STATS (REAL DATA) */}
//                         <Card className="col-span-4">
//                             <CardHeader><CardTitle icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /></svg>}>Success by Platform</CardTitle></CardHeader>
//                             <CardBody>
//                                 <div className="flex flex-col gap-4">
//                                     {data.platformStats && data.platformStats.length > 0 ? (
//                                         data.platformStats.map((p: any, i: number) => (
//                                             <div key={i}>
//                                                 <div className="flex justify-between items-center mb-2">
//                                                     <div className="flex items-center gap-2 text-[13px] text-[var(--text-primary)]">
//                                                         {p.name === 'iOS' && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[var(--text-tertiary)]"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" /></svg>}
//                                                         {p.name === 'Android' && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[var(--text-tertiary)]"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /></svg>}
//                                                         {p.name === 'Web' && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[var(--text-tertiary)]"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /></svg>}
//                                                         {p.name}
//                                                     </div>
//                                                     <div className="text-[13px] font-semibold text-[var(--text-primary)]">{p.successRate}</div>
//                                                 </div>
//                                                 <div className="h-2 bg-[var(--bg-tertiary)] rounded-full overflow-hidden">
//                                                     {/* Dynamic Color based on Platform Name */}
//                                                     <div className={`h-full rounded-full bg-gradient-to-r ${
//                                                         p.name === 'iOS' ? 'from-green-500 to-green-600' : 
//                                                         p.name === 'Android' ? 'from-blue-500 to-blue-600' : 
//                                                         'from-amber-500 to-amber-600'
//                                                     }`} style={{ width: p.successRate }}></div>
//                                                 </div>
//                                             </div>
//                                         ))
//                                     ) : (
//                                         <div className="text-center text-xs text-[var(--text-tertiary)] py-4">No platform data</div>
//                                     )}
//                                 </div>
//                             </CardBody>
//                         </Card>
//                         {/* 5. AMOUNT TIER */}
//                         <Card className="col-span-4">
//                             <CardHeader><CardTitle icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>}>Success by Amount Tier</CardTitle></CardHeader>
//                             <CardBody>
//                                 <div className="breakdown-table">
//                                     {data.amountStats && data.amountStats.map((item: any, i: number) => {
//                                         const rateNum = parseFloat(item.rate);
//                                         const colorText = rateNum >= 90 ? 'text-[var(--success)]' : rateNum >= 70 ? 'text-[var(--warning)]' : 'text-[var(--error)]';
//                                         const colorBg = rateNum >= 90 ? 'bg-[var(--success-bg)]' : rateNum >= 70 ? 'bg-[var(--warning-bg)]' : 'bg-[var(--error-bg)]';
//                                         return (
//                                             <div key={i} className="flex items-center py-3 border-b border-[var(--border-secondary)] last:border-0">
//                                                 <div className={`w-8 h-8 rounded-[var(--radius-md)] flex items-center justify-center mr-3 text-sm font-semibold ${colorBg} ${rateNum >= 90 ? 'text-[var(--success)]' : rateNum >= 40 ? 'text-[var(--warning)]' : 'text-[var(--error)]'}`}>$</div>
//                                                 <div className="flex-1"><div className="text-[13px] font-medium text-[var(--text-primary)]">{item.tier}</div><div className="text-[11px] text-[var(--text-tertiary)]">{item.tx}</div></div>
//                                                 <div className="text-right"><div className={`text-sm font-semibold ${colorText}`}>{item.rate}</div></div>
//                                             </div>
//                                         );
//                                     })}
//                                     {(!data.amountStats || data.amountStats.length === 0) && <div className="text-center text-xs text-[var(--text-tertiary)] py-4">No data available</div>}
//                                 </div>
//                             </CardBody>
//                         </Card>
//                         {/* 6. SECURITY METRICS CHART (FIXED) */}
//                         <Card className="col-span-6">
//                             <CardHeader><div><CardTitle icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>}>Security Metrics</CardTitle><CardSubtitle>Anomaly and retry tracking</CardSubtitle></div></CardHeader>
//                             <CardBody>
//                                 <div className="grid grid-cols-3 gap-4 mb-6">
//                                     <div className="bg-[var(--bg-tertiary)] rounded-[var(--radius-md)] p-4 text-center">
//                                         <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--warning-bg)] text-[var(--warning)] flex items-center justify-center mx-auto mb-3"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><line x1="19" y1="8" x2="19" y2="14" /><line x1="22" y1="11" x2="16" y2="11" /></svg></div>
//                                         <div className="text-2xl font-bold text-[var(--text-primary)] mb-1">{totalFailed}</div>
//                                         <div className="text-xs text-[var(--text-tertiary)]">Failed Approvals</div>
//                                     </div>
//                                     <div className="bg-[var(--bg-tertiary)] rounded-[var(--radius-md)] p-4 text-center">
//                                         <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--error-bg)] text-[var(--error)] flex items-center justify-center mx-auto mb-3"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" /></svg></div>
//                                         <div className="text-2xl font-bold text-[var(--text-primary)] mb-1">{totalBlocked}</div>
//                                         <div className="text-xs text-[var(--text-tertiary)]">Blocked</div>
//                                     </div>
//                                     <div className="bg-[var(--bg-tertiary)] rounded-[var(--radius-md)] p-4 text-center">
//                                         <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--info-bg)] text-[var(--info)] flex items-center justify-center mx-auto mb-3"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg></div>
//                                         <div className="text-2xl font-bold text-[var(--text-primary)] mb-1">{totalRetry}</div>
//                                         <div className="text-xs text-[var(--text-tertiary)]">Total Retries</div>
//                                     </div>
//                                 </div>
//                                 <div className="chart-container" style={{ position: 'relative', height: '220px' }}>
//                                     <Line data={securityChartData} options={securityLineOptions} />
//                                 </div>
//                             </CardBody>
//                         </Card>
//                         {/* 7. DEVICE & GEO TRENDS (FIXED STRUCTURE) */}
//                         <Card className="col-span-6">
//                             <CardHeader><div><CardTitle icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>}>Device & Geo Trends</CardTitle><CardSubtitle>Device recognition and regional distribution</CardSubtitle></div></CardHeader>
//                             <CardBody>
//                                 <div className="grid grid-cols-2 gap-6">
//                                     {/* Left: Device Recognition Table */}
//                                     <div>
//                                         <div className="text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-3">Device Recognition</div>
//                                         <div className="w-full">
//                                             <div className="flex items-center justify-between py-2.5 border-b border-[var(--border-secondary)]">
//                                                 <div className="flex items-center gap-2 text-[13px] text-[var(--text-primary)]">
//                                                     <svg className="w-4 h-4 text-[var(--success)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
//                                                     Known Devices
//                                                 </div>
//                                                 <div className="text-[13px] font-semibold text-[var(--success)]">80.4%</div>
//                                             </div>
//                                             <div className="flex items-center justify-between py-2.5 border-b border-[var(--border-secondary)]">
//                                                 <div className="flex items-center gap-2 text-[13px] text-[var(--text-primary)]">
//                                                     <svg className="w-4 h-4 text-[var(--purple)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>
//                                                     New Devices (7d)
//                                                 </div>
//                                                 {/* Use uniqueUsers as proxy for New Device metric since we don't have explicit count */}
//                                                 <div className="text-[13px] font-semibold text-[var(--purple)]">{data.metrics.uniqueUsers}</div>
//                                             </div>
//                                             <div className="flex items-center justify-between py-2.5 border-b border-[var(--border-secondary)]">
//                                                 <div className="flex items-center gap-2 text-[13px] text-[var(--text-primary)]">
//                                                     <svg className="w-4 h-4 text-[var(--warning)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" /></svg>
//                                                     Avg New Device/Day
//                                                 </div>
//                                                 <div className="text-[13px] font-semibold text-[var(--warning)]">
//                                                     {Math.round(data.metrics.uniqueUsers / 7)}
//                                                 </div>
//                                             </div>
//                                             <div className="flex items-center justify-between py-2.5 border-b border-[var(--border-secondary)]">
//                                                 <div className="flex items-center gap-2 text-[13px] text-[var(--text-primary)]">
//                                                     <svg className="w-4 h-4 text-[var(--info)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
//                                                     New Device Success
//                                                 </div>
//                                                 <div className="text-[13px] font-semibold text-[var(--info)]">92.1%</div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     {/* Right: Top Regions List */}
//                                     <div>
//                                         <div className="text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-3">Top Regions</div>
//                                         <div className="flex flex-col gap-3">
//                                             {data.geoStats && data.geoStats.map((geo: any, i: number) => (
//                                                 <div key={i} className="flex items-center gap-3">
//                                                     <span className="text-lg">{countryCodeToEmoji(geo.code)}</span>
//                                                     <div className="flex-1">
//                                                         <div className="text-[13px] font-medium text-[var(--text-primary)]">{geo.code}</div>
//                                                         <div className="text-[11px] text-[var(--text-tertiary)]">{geo.count} approvals</div>
//                                                     </div>
//                                                     <div className="w-[100px]">
//                                                         <div className="h-1.5 bg-[var(--bg-tertiary)] rounded-full overflow-hidden mb-1">
//                                                             <div className={`h-full rounded-full ${getGeoColor(i)}`} style={{ width: geo.pct }}></div>
//                                                         </div>
//                                                         <div className="text-[13px] font-semibold text-right">{geo.pct}</div>
//                                                     </div>
//                                                 </div>
//                                             ))}
//                                             {(!data.geoStats || data.geoStats.length === 0) && <div className="text-xs text-[var(--text-tertiary)]">No geo data available</div>}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </CardBody>
//                         </Card>
//                         {/* 8. TREND CHART */}
//                         <Card className="col-span-12">
//                             <CardHeader><div><CardTitle icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" /></svg>}>Approval Trends Over Time</CardTitle><CardSubtitle>Daily volume by status</CardSubtitle></div></CardHeader>
//                             <CardBody>
//                                 <div className="h-[280px]"><Bar data={trendChartData} options={barOptions} /></div>
//                             </CardBody>
//                         </Card>
//                     </div>
//                 </div>
//             </main>
//         </div>
//     );
// }
'use client';
;
;
;
;
;
// --- Register ChartJS ---
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CategoryScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LinearScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PointElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LineElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BarElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Title"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Legend"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Filler"]);
// --- Global Defaults ---
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].defaults.color = '#9b9b9b';
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].defaults.borderColor = '#383838';
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].defaults.font.family = "'Inter', sans-serif";
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].defaults.font.size = 11;
// --- Helper Functions ---
const countryCodeToEmoji = (code)=>{
    if (!code || code === 'Unknown') return '🌐';
    const offset = 127397;
    return code.toUpperCase().split('').map((char)=>String.fromCodePoint(char.charCodeAt(0) + offset)).join('');
};
const getCountryName = (code)=>{
    if (!code || code === 'Unknown') return 'Unknown';
    try {
        const regionNamesInEnglish = new Intl.DisplayNames([
            'en'
        ], {
            type: 'region'
        });
        return regionNamesInEnglish.of(code.toUpperCase()) || code;
    } catch (error) {
        return code;
    }
};
const getGeoColor = (index)=>{
    const colors = [
        'bg-[#22c55e]',
        'bg-[#3b82f6]',
        'bg-[#8b5cf6]',
        'bg-[#f59e0b]',
        'bg-[#22c55e]'
    ];
    return colors[index % colors.length];
};
function DashboardPage() {
    _s();
    const [timeRange, setTimeRange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('7d');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        funnel: {
            total: 0,
            requested: 0,
            approved: 0
        },
        metrics: {
            totalTx: 0,
            prevTotalTx: 0,
            uniqueUsers: 0,
            successRate: "0.0",
            txChange: 0,
            avgTime: "0.0s",
            avgTimeChange: "—"
        },
        trendChart: {
            labels: [],
            approved: [],
            denied: [],
            timeout: []
        },
        securityChart: {
            labels: [],
            failed: [],
            retry: []
        },
        deviceStats: {
            mobile: 0,
            desktop: 0,
            tablet: 0
        },
        platformStats: [],
        amountStats: [],
        geoStats: []
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardPage.useEffect": ()=>{
            async function loadData() {
                setLoading(true);
                try {
                    const stats = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$adminService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminService"].getDashboardStats(timeRange);
                    if (stats && stats.metrics) {
                        setData({
                            "DashboardPage.useEffect.loadData": (prev)=>({
                                    ...prev,
                                    ...stats
                                })
                        }["DashboardPage.useEffect.loadData"]);
                    }
                } catch (e) {
                    console.error("Dashboard load error", e);
                } finally{
                    setLoading(false);
                }
            }
            loadData();
        }
    }["DashboardPage.useEffect"], [
        timeRange
    ]);
    // --- CHART DATA CONFIG ---
    // 1. Device Chart
    const deviceChartData = {
        labels: [
            'Mobile',
            'Desktop',
            'Tablet'
        ],
        datasets: [
            {
                data: [
                    data.deviceStats.mobile,
                    data.deviceStats.desktop,
                    data.deviceStats.tablet
                ],
                backgroundColor: [
                    '#22c55e',
                    '#3b82f6',
                    '#8b5cf6'
                ],
                borderWidth: 0,
                hoverOffset: 4,
                cutout: '75%'
            }
        ]
    };
    // 2. Trend Chart (Bar) - Unstacked
    const trendChartData = {
        labels: data.trendChart.labels.length ? data.trendChart.labels : [
            'No Data'
        ],
        datasets: [
            {
                label: 'Approved',
                data: data.trendChart.approved,
                backgroundColor: '#22c55e',
                borderRadius: 4,
                barPercentage: 0.6,
                categoryPercentage: 0.7
            },
            {
                label: 'Denied',
                data: data.trendChart.denied,
                backgroundColor: '#f87171',
                borderRadius: 4,
                barPercentage: 0.6,
                categoryPercentage: 0.7
            },
            {
                label: 'Timeout',
                data: data.trendChart.timeout,
                backgroundColor: '#fbbf24',
                borderRadius: 4,
                barPercentage: 0.6,
                categoryPercentage: 0.7
            }
        ]
    };
    // 3. Security Chart (Line)
    const securityChartData = {
        labels: data.securityChart.labels.length ? data.securityChart.labels : [
            'No Data'
        ],
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
    // --- CALCULATIONS ---
    const funnelReqPct = data.funnel.total > 0 ? (data.funnel.requested / data.funnel.total * 100).toFixed(1) : "0.0";
    const funnelAppPct = data.funnel.total > 0 ? (data.funnel.approved / data.funnel.total * 100).toFixed(1) : "0.0";
    const dropReq = data.funnel.total - data.funnel.requested;
    const dropApp = data.funnel.requested - data.funnel.approved;
    const dropReqPct = data.funnel.total > 0 ? (dropReq / data.funnel.total * 100).toFixed(1) : "0.0";
    const dropAppPct = data.funnel.requested > 0 ? (dropApp / data.funnel.requested * 100).toFixed(1) : "0.0";
    const totalFailed = data.securityChart.failed.reduce((a, b)=>a + b, 0);
    const totalRetry = data.securityChart.retry.reduce((a, b)=>a + b, 0);
    const totalBlocked = data.trendChart.denied.reduce((a, b)=>a + b, 0);
    // Mencegah 0.00s tampil di metric
    const displayAvgTime = data.metrics.avgTime === '0.00s' ? '< 0.01s' : data.metrics.avgTime;
    // --- CHART OPTIONS ---
    const securityLineOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    color: '#6b6b6b',
                    font: {
                        size: 10
                    }
                }
            },
            y: {
                beginAtZero: true,
                grid: {
                    color: '#2d2d2d',
                    drawBorder: false
                },
                border: {
                    display: false
                },
                ticks: {
                    display: false
                }
            }
        },
        plugins: {
            legend: {
                position: 'bottom',
                align: 'start',
                labels: {
                    usePointStyle: true,
                    padding: 15,
                    color: '#9b9b9b',
                    boxWidth: 8
                }
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
    // Opsi Bar Chart (Unstacked & Y Axis Muncul)
    const barOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                stacked: false,
                grid: {
                    display: false
                },
                ticks: {
                    color: '#6b6b6b'
                }
            },
            y: {
                stacked: false,
                display: true,
                grid: {
                    color: '#2d2d2d'
                },
                border: {
                    display: false
                },
                ticks: {
                    color: '#6b6b6b'
                }
            }
        },
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    usePointStyle: true,
                    padding: 20,
                    color: '#9b9b9b'
                }
            },
            tooltip: {
                backgroundColor: '#202020',
                titleColor: '#ebebeb',
                bodyColor: '#9b9b9b',
                borderColor: '#383838',
                borderWidth: 1
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "flex-1 flex flex-col h-screen overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "px-6 py-3 border-b border-[var(--border-secondary)] bg-[var(--bg-secondary)] flex justify-between items-center shrink-0 h-[60px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-lg font-semibold text-[var(--text-primary)]",
                                children: "Dashboard"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                lineNumber: 1229,
                                columnNumber: 62
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                            lineNumber: 1229,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] overflow-hidden",
                                    children: [
                                        '24h',
                                        '7d',
                                        '30d',
                                        '90d'
                                    ].map((range)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setTimeRange(range),
                                            className: `px-3.5 py-2 text-[13px] font-medium transition-colors ${timeRange === range ? 'bg-[var(--accent)] text-white' : 'text-[var(--text-secondary)] hover:bg-[var(--bg-hover)]'}`,
                                            children: range
                                        }, range, false, {
                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                            lineNumber: 1232,
                                            columnNumber: 73
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                    lineNumber: 1231,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "flex items-center gap-1.5 px-3.5 py-2 rounded-[var(--radius-md)] text-[13px] font-medium bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-primary)] hover:bg-[var(--bg-hover)] transition-all",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            className: "w-4 h-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                    lineNumber: 1235,
                                                    columnNumber: 124
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                    points: "7,10 12,15 17,10"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                    lineNumber: 1235,
                                                    columnNumber: 178
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "12",
                                                    y1: "15",
                                                    x2: "12",
                                                    y2: "3"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                    lineNumber: 1235,
                                                    columnNumber: 216
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                            lineNumber: 1235,
                                            columnNumber: 29
                                        }, this),
                                        "Export"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                    lineNumber: 1234,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>window.location.reload(),
                                    className: "flex items-center gap-1.5 px-3.5 py-2 rounded-[var(--radius-md)] text-[13px] font-medium bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-all",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            className: `w-4 h-4 ${loading ? 'animate-spin' : ''}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                    points: "23,4 23,10 17,10"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                    lineNumber: 1239,
                                                    columnNumber: 159
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M20.49 15a9 9 0 1 1-2.12-9.36L23 10"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                    lineNumber: 1239,
                                                    columnNumber: 197
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                            lineNumber: 1239,
                                            columnNumber: 29
                                        }, this),
                                        " Refresh"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                    lineNumber: 1238,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                            lineNumber: 1230,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(admin)/dashboard/page.tsx",
                    lineNumber: 1228,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-auto p-6 custom-scrollbar",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-12 gap-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "col-span-7",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        className: "w-4 h-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                            points: "22 12 18 12 15 21 9 3 6 12 2 12"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                            lineNumber: 1249,
                                                            columnNumber: 158
                                                        }, void 0)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                        lineNumber: 1249,
                                                        columnNumber: 63
                                                    }, void 0),
                                                    children: "Authentication Funnel"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                    lineNumber: 1249,
                                                    columnNumber: 46
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardSubtitle"], {
                                                    children: "Conversion based on live transactions"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                    lineNumber: 1249,
                                                    columnNumber: 252
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                            lineNumber: 1249,
                                            columnNumber: 41
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                        lineNumber: 1249,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardBody"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "py-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center mb-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1 relative h-12 rounded-[var(--radius-md)] flex items-center px-4 bg-gradient-to-r from-blue-500 to-blue-600 w-full",
                                                                style: {
                                                                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 50%, 100% 100%, 0% 100%)'
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[13px] font-medium text-white z-10",
                                                                    children: "Total Transactions"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                    lineNumber: 1252,
                                                                    columnNumber: 293
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                lineNumber: 1252,
                                                                columnNumber: 77
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-[140px] text-right pl-5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-lg font-semibold text-[var(--text-primary)] tabular-nums",
                                                                        children: data.funnel.total.toLocaleString()
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                        lineNumber: 1252,
                                                                        columnNumber: 425
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-xs text-[var(--text-tertiary)]",
                                                                        children: "100%"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                        lineNumber: 1252,
                                                                        columnNumber: 546
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                lineNumber: 1252,
                                                                columnNumber: 382
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                        lineNumber: 1252,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center mb-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1 relative",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "h-12 rounded-[var(--radius-md)] flex items-center px-4 bg-gradient-to-r from-violet-500 to-violet-600",
                                                                    style: {
                                                                        width: `${Math.max(parseFloat(funnelReqPct), 5)}%`,
                                                                        clipPath: 'polygon(0% 0%, 100% 0%, 100% 50%, 100% 100%, 0% 100%)'
                                                                    },
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[13px] font-medium text-white z-10",
                                                                        children: "Approval Requested"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                        lineNumber: 1253,
                                                                        columnNumber: 359
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                    lineNumber: 1253,
                                                                    columnNumber: 110
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                lineNumber: 1253,
                                                                columnNumber: 77
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-[140px] text-right pl-5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-lg font-semibold text-[var(--text-primary)] tabular-nums",
                                                                        children: data.funnel.requested.toLocaleString()
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                        lineNumber: 1253,
                                                                        columnNumber: 497
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-xs text-[var(--text-tertiary)]",
                                                                        children: [
                                                                            funnelReqPct,
                                                                            "%"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                        lineNumber: 1253,
                                                                        columnNumber: 622
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                lineNumber: 1253,
                                                                columnNumber: 454
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                        lineNumber: 1253,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1 relative",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "h-12 rounded-[var(--radius-md)] flex items-center px-4 bg-gradient-to-r from-green-500 to-green-600",
                                                                    style: {
                                                                        width: `${Math.max(parseFloat(funnelAppPct), 5)}%`
                                                                    },
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[13px] font-medium text-white z-10",
                                                                        children: "Approved"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                        lineNumber: 1254,
                                                                        columnNumber: 285
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                    lineNumber: 1254,
                                                                    columnNumber: 105
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                lineNumber: 1254,
                                                                columnNumber: 72
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-[140px] text-right pl-5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-lg font-semibold text-[var(--text-primary)] tabular-nums",
                                                                        children: data.funnel.approved.toLocaleString()
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                        lineNumber: 1254,
                                                                        columnNumber: 413
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-xs text-[var(--text-tertiary)]",
                                                                        children: [
                                                                            funnelAppPct,
                                                                            "%"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                        lineNumber: 1254,
                                                                        columnNumber: 537
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                lineNumber: 1254,
                                                                columnNumber: 370
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                        lineNumber: 1254,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                lineNumber: 1251,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-5 mt-5 pt-4 border-t border-[var(--border-secondary)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-2 h-2 rounded-full bg-[var(--warning)]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                lineNumber: 1258,
                                                                columnNumber: 78
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-xs text-[var(--text-tertiary)]",
                                                                        children: "Drop-off: Initiated → Requested"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                        lineNumber: 1258,
                                                                        columnNumber: 147
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-[13px] font-semibold text-[var(--text-primary)]",
                                                                        children: [
                                                                            dropReqPct,
                                                                            "% (",
                                                                            dropReq,
                                                                            " users)"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                        lineNumber: 1258,
                                                                        columnNumber: 237
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                lineNumber: 1258,
                                                                columnNumber: 142
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                        lineNumber: 1258,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-2 h-2 rounded-full bg-[var(--error)]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                lineNumber: 1259,
                                                                columnNumber: 78
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-xs text-[var(--text-tertiary)]",
                                                                        children: "Drop-off: Requested → Approved"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                        lineNumber: 1259,
                                                                        columnNumber: 145
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-[13px] font-semibold text-[var(--text-primary)]",
                                                                        children: [
                                                                            dropAppPct,
                                                                            "% (",
                                                                            dropApp,
                                                                            " users)"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                        lineNumber: 1259,
                                                                        columnNumber: 234
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                lineNumber: 1259,
                                                                columnNumber: 140
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                        lineNumber: 1259,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                lineNumber: 1256,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                        lineNumber: 1250,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                lineNumber: 1248,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "col-span-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        className: "w-4 h-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                lineNumber: 1268,
                                                                columnNumber: 149
                                                            }, void 0),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                points: "22 4 12 14.01 9 11.01"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                lineNumber: 1268,
                                                                columnNumber: 196
                                                            }, void 0)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                        lineNumber: 1268,
                                                        columnNumber: 54
                                                    }, void 0),
                                                    children: "Key Metrics"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                    lineNumber: 1268,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardSubtitle"], {
                                                    children: [
                                                        "Last ",
                                                        timeRange,
                                                        " performance"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                    lineNumber: 1269,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                            lineNumber: 1267,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                        lineNumber: 1266,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardBody"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-[var(--bg-tertiary)] rounded-[var(--radius-md)] p-4 border border-[var(--border-primary)]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-[var(--text-tertiary)] mb-2",
                                                            children: "Overall Success Rate"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                            lineNumber: 1275,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[28px] font-bold text-[var(--success)]",
                                                            children: [
                                                                data.metrics.successRate,
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                            lineNumber: 1276,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs mt-1.5 text-[var(--success)]",
                                                            children: "↑ +1.2% vs last week"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                            lineNumber: 1277,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                    lineNumber: 1274,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-[var(--bg-tertiary)] rounded-[var(--radius-md)] p-4 border border-[var(--border-primary)]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-[var(--text-tertiary)] mb-2",
                                                            children: "Avg. Approval Time"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                            lineNumber: 1280,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[28px] font-bold text-[var(--text-primary)]",
                                                            children: displayAvgTime
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                            lineNumber: 1281,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `text-xs mt-1.5 ${data.metrics.avgTimeChange.includes('↓') ? 'text-[var(--success)]' : 'text-[var(--error)]'}`,
                                                            children: [
                                                                data.metrics.avgTimeChange,
                                                                " vs last week"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                            lineNumber: 1282,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                    lineNumber: 1279,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-[var(--bg-tertiary)] rounded-[var(--radius-md)] p-4 border border-[var(--border-primary)]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-[var(--text-tertiary)] mb-2",
                                                            children: "Total Transactions"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                            lineNumber: 1287,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[28px] font-bold text-[var(--text-primary)]",
                                                            children: data.metrics.totalTx.toLocaleString()
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                            lineNumber: 1288,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `text-xs mt-1.5 ${data.metrics.txChange >= 0 ? 'text-[var(--success)]' : 'text-[var(--error)]'}`,
                                                            children: [
                                                                data.metrics.txChange >= 0 ? '↑' : '↓',
                                                                " ",
                                                                Math.abs(data.metrics.txChange),
                                                                " vs last week"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                            lineNumber: 1289,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                    lineNumber: 1286,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-[var(--bg-tertiary)] rounded-[var(--radius-md)] p-4 border border-[var(--border-primary)]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-[var(--text-tertiary)] mb-2",
                                                            children: "Unique Users"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                            lineNumber: 1294,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[28px] font-bold text-[var(--text-primary)]",
                                                            children: data.metrics.uniqueUsers.toLocaleString()
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                            lineNumber: 1295,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs mt-1.5 text-[var(--text-tertiary)]",
                                                            children: "Active this period"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                            lineNumber: 1296,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                    lineNumber: 1293,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                            lineNumber: 1273,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                        lineNumber: 1272,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                lineNumber: 1265,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "col-span-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                className: "w-4 h-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: "5",
                                                        y: "2",
                                                        width: "14",
                                                        height: "20",
                                                        rx: "2",
                                                        ry: "2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                        lineNumber: 1304,
                                                        columnNumber: 153
                                                    }, void 0),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "12",
                                                        y1: "18",
                                                        x2: "12.01",
                                                        y2: "18"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                        lineNumber: 1304,
                                                        columnNumber: 210
                                                    }, void 0)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                lineNumber: 1304,
                                                columnNumber: 58
                                            }, void 0),
                                            children: "Success by Device Type"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                            lineNumber: 1304,
                                            columnNumber: 41
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                        lineNumber: 1304,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardBody"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "chart-container",
                                                style: {
                                                    position: 'relative',
                                                    height: '220px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Doughnut"], {
                                                        data: deviceChartData,
                                                        options: {
                                                            responsive: true,
                                                            maintainAspectRatio: false,
                                                            plugins: {
                                                                legend: {
                                                                    display: false
                                                                }
                                                            }
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                        lineNumber: 1307,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[28px] font-bold text-[var(--text-primary)]",
                                                                children: [
                                                                    data.metrics.successRate,
                                                                    "%"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                lineNumber: 1309,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-[var(--text-tertiary)]",
                                                                children: "Overall"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                lineNumber: 1310,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                        lineNumber: 1308,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                lineNumber: 1306,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-center gap-5 mt-4 flex-wrap",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1.5 text-xs text-[var(--text-secondary)]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-2.5 h-2.5 rounded-full bg-[#22c55e]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                lineNumber: 1314,
                                                                columnNumber: 117
                                                            }, this),
                                                            "Mobile"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                        lineNumber: 1314,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1.5 text-xs text-[var(--text-secondary)]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-2.5 h-2.5 rounded-full bg-[#3b82f6]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                lineNumber: 1315,
                                                                columnNumber: 117
                                                            }, this),
                                                            "Desktop"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                        lineNumber: 1315,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1.5 text-xs text-[var(--text-secondary)]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-2.5 h-2.5 rounded-full bg-[#8b5cf6]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                lineNumber: 1316,
                                                                columnNumber: 117
                                                            }, this),
                                                            "Tablet"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                        lineNumber: 1316,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                lineNumber: 1313,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                        lineNumber: 1305,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                lineNumber: 1303,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "col-span-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                className: "w-4 h-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "12",
                                                        cy: "12",
                                                        r: "10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                        lineNumber: 1323,
                                                        columnNumber: 153
                                                    }, void 0),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "2",
                                                        y1: "12",
                                                        x2: "22",
                                                        y2: "12"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                        lineNumber: 1323,
                                                        columnNumber: 186
                                                    }, void 0)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                lineNumber: 1323,
                                                columnNumber: 58
                                            }, void 0),
                                            children: "Success by Platform"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                            lineNumber: 1323,
                                            columnNumber: 41
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                        lineNumber: 1323,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardBody"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-4",
                                            children: data.platformStats && data.platformStats.length > 0 ? data.platformStats.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-center mb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2 text-[13px] text-[var(--text-primary)]",
                                                                    children: [
                                                                        p.name === 'iOS' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            viewBox: "0 0 24 24",
                                                                            fill: "none",
                                                                            stroke: "currentColor",
                                                                            strokeWidth: "2",
                                                                            className: "w-4 h-4 text-[var(--text-tertiary)]",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                                lineNumber: 1331,
                                                                                columnNumber: 201
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                            lineNumber: 1331,
                                                                            columnNumber: 78
                                                                        }, this),
                                                                        p.name === 'Android' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            viewBox: "0 0 24 24",
                                                                            fill: "none",
                                                                            stroke: "currentColor",
                                                                            strokeWidth: "2",
                                                                            className: "w-4 h-4 text-[var(--text-tertiary)]",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                                x: "5",
                                                                                y: "2",
                                                                                width: "14",
                                                                                height: "20",
                                                                                rx: "2",
                                                                                ry: "2"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                                lineNumber: 1332,
                                                                                columnNumber: 205
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                            lineNumber: 1332,
                                                                            columnNumber: 82
                                                                        }, this),
                                                                        p.name === 'Web' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            viewBox: "0 0 24 24",
                                                                            fill: "none",
                                                                            stroke: "currentColor",
                                                                            strokeWidth: "2",
                                                                            className: "w-4 h-4 text-[var(--text-tertiary)]",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                                x: "2",
                                                                                y: "3",
                                                                                width: "20",
                                                                                height: "14",
                                                                                rx: "2",
                                                                                ry: "2"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                                lineNumber: 1333,
                                                                                columnNumber: 201
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                            lineNumber: 1333,
                                                                            columnNumber: 78
                                                                        }, this),
                                                                        p.name
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                    lineNumber: 1330,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[13px] font-semibold text-[var(--text-primary)]",
                                                                    children: p.successRate
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                    lineNumber: 1336,
                                                                    columnNumber: 53
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                            lineNumber: 1329,
                                                            columnNumber: 49
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-2 bg-[var(--bg-tertiary)] rounded-full overflow-hidden",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `h-full rounded-full bg-gradient-to-r ${p.name === 'iOS' ? 'from-green-500 to-green-600' : p.name === 'Android' ? 'from-blue-500 to-blue-600' : 'from-amber-500 to-amber-600'}`,
                                                                style: {
                                                                    width: p.successRate
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                lineNumber: 1339,
                                                                columnNumber: 53
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                            lineNumber: 1338,
                                                            columnNumber: 49
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                    lineNumber: 1328,
                                                    columnNumber: 45
                                                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center text-xs text-[var(--text-tertiary)] py-4",
                                                children: "No platform data"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                lineNumber: 1348,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                            lineNumber: 1325,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                        lineNumber: 1324,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                lineNumber: 1322,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "col-span-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                className: "w-4 h-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "12",
                                                        y1: "1",
                                                        x2: "12",
                                                        y2: "23"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                        lineNumber: 1357,
                                                        columnNumber: 145
                                                    }, void 0),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                        lineNumber: 1357,
                                                        columnNumber: 184
                                                    }, void 0)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                lineNumber: 1357,
                                                columnNumber: 50
                                            }, void 0),
                                            children: "Success by Amount Tier"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                            lineNumber: 1357,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                        lineNumber: 1356,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardBody"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "breakdown-table",
                                            children: [
                                                data.amountStats && data.amountStats.map((item, i)=>{
                                                    // Menentukan Style, Icon, dan Teks statis berdasarkan urutan Tier (0=Low, 1=Mid, 2=High)
                                                    let iconStr = '$';
                                                    let colorClass = 'text-[var(--success)]';
                                                    let bgClass = 'bg-[var(--success-bg)]';
                                                    let statusText = 'Low friction';
                                                    if (i === 1) {
                                                        // Tier Menengah ($100 - $1,000)
                                                        iconStr = '$$';
                                                        colorClass = 'text-[var(--warning)]';
                                                        bgClass = 'bg-[var(--warning-bg)]';
                                                        statusText = 'Step-up required';
                                                    } else if (i === 2) {
                                                        // Tier Tinggi (Over $1,000)
                                                        iconStr = '$$$';
                                                        colorClass = 'text-[var(--error)]';
                                                        bgClass = 'bg-[var(--error-bg)]';
                                                        statusText = 'High verification';
                                                    }
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center py-3 border-b border-[var(--border-secondary)] last:border-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `w-8 h-8 rounded-[var(--radius-md)] flex items-center justify-center mr-3 text-sm font-semibold ${bgClass} ${colorClass}`,
                                                                children: iconStr
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                lineNumber: 1387,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-[13px] font-medium text-[var(--text-primary)]",
                                                                        children: item.tier
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                        lineNumber: 1393,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-[11px] text-[var(--text-tertiary)]",
                                                                        children: item.tx
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                        lineNumber: 1394,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                lineNumber: 1392,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-right",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `text-sm font-semibold ${colorClass}`,
                                                                        children: item.rate
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                        lineNumber: 1399,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-[11px] text-[var(--text-tertiary)]",
                                                                        children: statusText
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                        lineNumber: 1400,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                lineNumber: 1398,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, i, true, {
                                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                        lineNumber: 1385,
                                                        columnNumber: 45
                                                    }, this);
                                                }),
                                                (!data.amountStats || data.amountStats.length === 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center text-xs text-[var(--text-tertiary)] py-4",
                                                    children: "No data available"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                    lineNumber: 1406,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                            lineNumber: 1362,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                        lineNumber: 1361,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                lineNumber: 1355,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "col-span-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        className: "w-4 h-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                            lineNumber: 1414,
                                                            columnNumber: 158
                                                        }, void 0)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                        lineNumber: 1414,
                                                        columnNumber: 63
                                                    }, void 0),
                                                    children: "Security Metrics"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                    lineNumber: 1414,
                                                    columnNumber: 46
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardSubtitle"], {
                                                    children: "Anomaly and retry tracking"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                    lineNumber: 1414,
                                                    columnNumber: 250
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                            lineNumber: 1414,
                                            columnNumber: 41
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                        lineNumber: 1414,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardBody"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-3 gap-4 mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-[var(--bg-tertiary)] rounded-[var(--radius-md)] p-4 text-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-10 h-10 rounded-[var(--radius-md)] bg-[var(--warning-bg)] text-[var(--warning)] flex items-center justify-center mx-auto mb-3",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "2",
                                                                    className: "w-5 h-5",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                            lineNumber: 1418,
                                                                            columnNumber: 281
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                            cx: "9",
                                                                            cy: "7",
                                                                            r: "4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                            lineNumber: 1418,
                                                                            columnNumber: 335
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                            x1: "19",
                                                                            y1: "8",
                                                                            x2: "19",
                                                                            y2: "14"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                            lineNumber: 1418,
                                                                            columnNumber: 365
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                            x1: "22",
                                                                            y1: "11",
                                                                            x2: "16",
                                                                            y2: "11"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                            lineNumber: 1418,
                                                                            columnNumber: 404
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                    lineNumber: 1418,
                                                                    columnNumber: 186
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                lineNumber: 1418,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-2xl font-bold text-[var(--text-primary)] mb-1",
                                                                children: totalFailed
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                lineNumber: 1419,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-[var(--text-tertiary)]",
                                                                children: "Failed Approvals"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                lineNumber: 1420,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                        lineNumber: 1417,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-[var(--bg-tertiary)] rounded-[var(--radius-md)] p-4 text-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-10 h-10 rounded-[var(--radius-md)] bg-[var(--error-bg)] text-[var(--error)] flex items-center justify-center mx-auto mb-3",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "2",
                                                                    className: "w-5 h-5",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                            points: "23 4 23 10 17 10"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                            lineNumber: 1423,
                                                                            columnNumber: 277
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                            points: "1 20 1 14 7 14"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                            lineNumber: 1423,
                                                                            columnNumber: 315
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                            lineNumber: 1423,
                                                                            columnNumber: 351
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                    lineNumber: 1423,
                                                                    columnNumber: 182
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                lineNumber: 1423,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-2xl font-bold text-[var(--text-primary)] mb-1",
                                                                children: totalBlocked
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                lineNumber: 1424,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-[var(--text-tertiary)]",
                                                                children: "Blocked"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                lineNumber: 1425,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                        lineNumber: 1422,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-[var(--bg-tertiary)] rounded-[var(--radius-md)] p-4 text-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-10 h-10 rounded-[var(--radius-md)] bg-[var(--info-bg)] text-[var(--info)] flex items-center justify-center mx-auto mb-3",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "2",
                                                                    className: "w-5 h-5",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                            cx: "12",
                                                                            cy: "12",
                                                                            r: "10"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                            lineNumber: 1428,
                                                                            columnNumber: 275
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                            points: "12 6 12 12 16 14"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                            lineNumber: 1428,
                                                                            columnNumber: 308
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                    lineNumber: 1428,
                                                                    columnNumber: 180
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                lineNumber: 1428,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-2xl font-bold text-[var(--text-primary)] mb-1",
                                                                children: totalRetry
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                lineNumber: 1429,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-[var(--text-tertiary)]",
                                                                children: "Total Retries"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                lineNumber: 1430,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                        lineNumber: 1427,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                lineNumber: 1416,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "chart-container",
                                                style: {
                                                    position: 'relative',
                                                    height: '220px'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                                    data: securityChartData,
                                                    options: securityLineOptions
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                    lineNumber: 1434,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                lineNumber: 1433,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                        lineNumber: 1415,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                lineNumber: 1413,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "col-span-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        className: "w-4 h-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: "12",
                                                                cy: "12",
                                                                r: "10"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                lineNumber: 1441,
                                                                columnNumber: 158
                                                            }, void 0),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "2",
                                                                y1: "12",
                                                                x2: "22",
                                                                y2: "12"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                lineNumber: 1441,
                                                                columnNumber: 191
                                                            }, void 0),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                lineNumber: 1441,
                                                                columnNumber: 230
                                                            }, void 0)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                        lineNumber: 1441,
                                                        columnNumber: 63
                                                    }, void 0),
                                                    children: "Device & Geo Trends"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                    lineNumber: 1441,
                                                    columnNumber: 46
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardSubtitle"], {
                                                    children: "Device recognition and regional distribution"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                    lineNumber: 1441,
                                                    columnNumber: 372
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                            lineNumber: 1441,
                                            columnNumber: 41
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                        lineNumber: 1441,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardBody"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-3",
                                                            children: "Device Recognition"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                            lineNumber: 1446,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-full",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-between py-2.5 border-b border-[var(--border-secondary)]",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-2 text-[13px] text-[var(--text-primary)]",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                    className: "w-4 h-4 text-[var(--success)]",
                                                                                    viewBox: "0 0 24 24",
                                                                                    fill: "none",
                                                                                    stroke: "currentColor",
                                                                                    strokeWidth: "2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                            d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                                            lineNumber: 1450,
                                                                                            columnNumber: 170
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                                            points: "22 4 12 14.01 9 11.01"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                                            lineNumber: 1450,
                                                                                            columnNumber: 217
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                                    lineNumber: 1450,
                                                                                    columnNumber: 53
                                                                                }, this),
                                                                                "Known Devices"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                            lineNumber: 1449,
                                                                            columnNumber: 49
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-[13px] font-semibold text-[var(--success)]",
                                                                            children: "80.4%"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                            lineNumber: 1453,
                                                                            columnNumber: 49
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                    lineNumber: 1448,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-between py-2.5 border-b border-[var(--border-secondary)]",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-2 text-[13px] text-[var(--text-primary)]",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                    className: "w-4 h-4 text-[var(--purple)]",
                                                                                    viewBox: "0 0 24 24",
                                                                                    fill: "none",
                                                                                    stroke: "currentColor",
                                                                                    strokeWidth: "2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                                            x: "5",
                                                                                            y: "2",
                                                                                            width: "14",
                                                                                            height: "20",
                                                                                            rx: "2",
                                                                                            ry: "2"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                                            lineNumber: 1457,
                                                                                            columnNumber: 169
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                                            x1: "12",
                                                                                            y1: "18",
                                                                                            x2: "12.01",
                                                                                            y2: "18"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                                            lineNumber: 1457,
                                                                                            columnNumber: 226
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                                    lineNumber: 1457,
                                                                                    columnNumber: 53
                                                                                }, this),
                                                                                "New Devices (7d)"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                            lineNumber: 1456,
                                                                            columnNumber: 49
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-[13px] font-semibold text-[var(--purple)]",
                                                                            children: data.metrics.uniqueUsers
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                            lineNumber: 1460,
                                                                            columnNumber: 49
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                    lineNumber: 1455,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-between py-2.5 border-b border-[var(--border-secondary)]",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-2 text-[13px] text-[var(--text-primary)]",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                    className: "w-4 h-4 text-[var(--warning)]",
                                                                                    viewBox: "0 0 24 24",
                                                                                    fill: "none",
                                                                                    stroke: "currentColor",
                                                                                    strokeWidth: "2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                            d: "M12 20V10"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                                            lineNumber: 1464,
                                                                                            columnNumber: 170
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                            d: "M18 20V4"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                                            lineNumber: 1464,
                                                                                            columnNumber: 192
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                            d: "M6 20v-4"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                                            lineNumber: 1464,
                                                                                            columnNumber: 213
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                                    lineNumber: 1464,
                                                                                    columnNumber: 53
                                                                                }, this),
                                                                                "Avg New Device/Day"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                            lineNumber: 1463,
                                                                            columnNumber: 49
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-[13px] font-semibold text-[var(--warning)]",
                                                                            children: Math.round(data.metrics.uniqueUsers / 7)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                            lineNumber: 1467,
                                                                            columnNumber: 49
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                    lineNumber: 1462,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-between py-2.5 border-b border-[var(--border-secondary)]",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-2 text-[13px] text-[var(--text-primary)]",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                    className: "w-4 h-4 text-[var(--info)]",
                                                                                    viewBox: "0 0 24 24",
                                                                                    fill: "none",
                                                                                    stroke: "currentColor",
                                                                                    strokeWidth: "2",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                        d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                                        lineNumber: 1473,
                                                                                        columnNumber: 167
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                                    lineNumber: 1473,
                                                                                    columnNumber: 53
                                                                                }, this),
                                                                                "New Device Success"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                            lineNumber: 1472,
                                                                            columnNumber: 49
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-[13px] font-semibold text-[var(--success)]",
                                                                            children: "92.1%"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                            lineNumber: 1477,
                                                                            columnNumber: 49
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                    lineNumber: 1471,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                            lineNumber: 1447,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                    lineNumber: 1445,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-3",
                                                            children: "Top Regions"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                            lineNumber: 1484,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col gap-3",
                                                            children: [
                                                                data.geoStats && data.geoStats.map((geo, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-lg",
                                                                                children: countryCodeToEmoji(geo.code)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                                lineNumber: 1488,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex-1",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "text-[13px] font-medium text-[var(--text-primary)]",
                                                                                        children: getCountryName(geo.code)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                                        lineNumber: 1491,
                                                                                        columnNumber: 57
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "text-[11px] text-[var(--text-tertiary)]",
                                                                                        children: [
                                                                                            geo.count,
                                                                                            " approvals"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                                        lineNumber: 1492,
                                                                                        columnNumber: 57
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                                lineNumber: 1489,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "w-[100px]",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "h-1.5 bg-[var(--bg-tertiary)] rounded-full overflow-hidden mb-1",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: `h-full rounded-full ${getGeoColor(i)}`,
                                                                                            style: {
                                                                                                width: geo.pct
                                                                                            }
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                                            lineNumber: 1496,
                                                                                            columnNumber: 61
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                                        lineNumber: 1495,
                                                                                        columnNumber: 57
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "text-[13px] font-semibold text-right",
                                                                                        children: geo.pct
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                                        lineNumber: 1498,
                                                                                        columnNumber: 57
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                                lineNumber: 1494,
                                                                                columnNumber: 53
                                                                            }, this)
                                                                        ]
                                                                    }, i, true, {
                                                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                        lineNumber: 1487,
                                                                        columnNumber: 49
                                                                    }, this)),
                                                                (!data.geoStats || data.geoStats.length === 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-[var(--text-tertiary)]",
                                                                    children: "No geo data available"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                    lineNumber: 1502,
                                                                    columnNumber: 96
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                            lineNumber: 1485,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                    lineNumber: 1483,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                            lineNumber: 1443,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                        lineNumber: 1442,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                lineNumber: 1440,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "col-span-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        className: "w-4 h-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M12 20V10"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                lineNumber: 1511,
                                                                columnNumber: 158
                                                            }, void 0),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M18 20V4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                lineNumber: 1511,
                                                                columnNumber: 180
                                                            }, void 0),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M6 20v-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                                lineNumber: 1511,
                                                                columnNumber: 201
                                                            }, void 0)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                        lineNumber: 1511,
                                                        columnNumber: 63
                                                    }, void 0),
                                                    children: "Daily success rates and transaction volume"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                    lineNumber: 1511,
                                                    columnNumber: 46
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardSubtitle"], {
                                                    children: "Daily volume by status"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                    lineNumber: 1511,
                                                    columnNumber: 284
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                            lineNumber: 1511,
                                            columnNumber: 41
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                        lineNumber: 1511,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardBody"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-[280px]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                data: trendChartData,
                                                options: barOptions
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                                lineNumber: 1513,
                                                columnNumber: 60
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                            lineNumber: 1513,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                        lineNumber: 1512,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/dashboard/page.tsx",
                                lineNumber: 1510,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/dashboard/page.tsx",
                        lineNumber: 1245,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/dashboard/page.tsx",
                    lineNumber: 1244,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(admin)/dashboard/page.tsx",
            lineNumber: 1226,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(admin)/dashboard/page.tsx",
        lineNumber: 1225,
        columnNumber: 9
    }, this);
}
_s(DashboardPage, "snwHFwBNvL2RrZA7O/CB2d232Ss=");
_c = DashboardPage;
var _c;
__turbopack_context__.k.register(_c, "DashboardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_dc26c607._.js.map