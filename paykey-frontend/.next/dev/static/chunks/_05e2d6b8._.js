(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/totp-inventory/TotpCharts.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TotpCharts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$auto$2f$auto$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/chart.js/auto/auto.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function TotpCharts({ tokens }) {
    _s();
    const vendorChartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const expiryChartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const vendorChartInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const expiryChartInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TotpCharts.useEffect": ()=>{
            if (!tokens || tokens.length === 0) return;
            const vendorCounts = {
                yubico: 0,
                feitian: 0,
                safenet: 0,
                other: 0
            };
            tokens.forEach({
                "TotpCharts.useEffect": (t)=>{
                    if (vendorCounts[t.vendor] !== undefined) vendorCounts[t.vendor]++;
                    else vendorCounts.other++;
                }
            }["TotpCharts.useEffect"]);
            if (vendorChartInstance.current) vendorChartInstance.current.destroy();
            if (vendorChartRef.current) {
                vendorChartInstance.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$auto$2f$auto$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"](vendorChartRef.current, {
                    type: 'doughnut',
                    data: {
                        labels: [
                            'Yubico',
                            'Feitian',
                            'SafeNet',
                            'Other'
                        ],
                        datasets: [
                            {
                                data: [
                                    vendorCounts.yubico,
                                    vendorCounts.feitian,
                                    vendorCounts.safenet,
                                    vendorCounts.other
                                ],
                                backgroundColor: [
                                    '#3b82f6',
                                    '#8b5cf6',
                                    '#10b981',
                                    '#64748b'
                                ],
                                borderWidth: 0
                            }
                        ]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                position: 'right',
                                labels: {
                                    color: '#94a3b8'
                                }
                            }
                        }
                    }
                });
            }
            if (expiryChartInstance.current) expiryChartInstance.current.destroy();
            if (expiryChartRef.current) {
                expiryChartInstance.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$auto$2f$auto$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"](expiryChartRef.current, {
                    type: 'bar',
                    data: {
                        labels: [
                            'Q1',
                            'Q2',
                            'Q3',
                            'Q4',
                            'Next Year',
                            'Future'
                        ],
                        datasets: [
                            {
                                label: 'Tokens Expiring',
                                data: [
                                    12,
                                    28,
                                    45,
                                    89,
                                    234,
                                    2959
                                ],
                                backgroundColor: '#3b82f6',
                                borderRadius: 4
                            }
                        ]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                display: false
                            }
                        },
                        scales: {
                            x: {
                                grid: {
                                    display: false
                                }
                            },
                            y: {
                                grid: {
                                    color: '#2d2d2d'
                                }
                            }
                        }
                    }
                });
            }
            return ({
                "TotpCharts.useEffect": ()=>{
                    if (vendorChartInstance.current) vendorChartInstance.current.destroy();
                    if (expiryChartInstance.current) expiryChartInstance.current.destroy();
                }
            })["TotpCharts.useEffect"];
        }
    }["TotpCharts.useEffect"], [
        tokens
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-2 gap-6 mb-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-xl overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-5 py-4 border-b border-[var(--border-secondary)] flex items-center gap-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                className: "w-[18px] h-[18px] text-[var(--text-tertiary)]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M18 20V10M12 20V4M6 20v-6"
                                }, void 0, false, {
                                    fileName: "[project]/components/totp-inventory/TotpCharts.tsx",
                                    lineNumber: 66,
                                    columnNumber: 154
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/totp-inventory/TotpCharts.tsx",
                                lineNumber: 66,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-semibold text-[var(--text-primary)]",
                                children: "Inventory by Vendor"
                            }, void 0, false, {
                                fileName: "[project]/components/totp-inventory/TotpCharts.tsx",
                                lineNumber: 67,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/totp-inventory/TotpCharts.tsx",
                        lineNumber: 65,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-[200px] p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                            ref: vendorChartRef
                        }, void 0, false, {
                            fileName: "[project]/components/totp-inventory/TotpCharts.tsx",
                            lineNumber: 69,
                            columnNumber: 48
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/totp-inventory/TotpCharts.tsx",
                        lineNumber: 69,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/totp-inventory/TotpCharts.tsx",
                lineNumber: 64,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-xl overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-5 py-4 border-b border-[var(--border-secondary)] flex items-center gap-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                className: "w-[18px] h-[18px] text-[var(--text-tertiary)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "12",
                                        cy: "12",
                                        r: "10"
                                    }, void 0, false, {
                                        fileName: "[project]/components/totp-inventory/TotpCharts.tsx",
                                        lineNumber: 73,
                                        columnNumber: 154
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                        points: "12 6 12 12 16 14"
                                    }, void 0, false, {
                                        fileName: "[project]/components/totp-inventory/TotpCharts.tsx",
                                        lineNumber: 73,
                                        columnNumber: 186
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/totp-inventory/TotpCharts.tsx",
                                lineNumber: 73,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-semibold text-[var(--text-primary)]",
                                children: "Token Expiry Timeline"
                            }, void 0, false, {
                                fileName: "[project]/components/totp-inventory/TotpCharts.tsx",
                                lineNumber: 74,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/totp-inventory/TotpCharts.tsx",
                        lineNumber: 72,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-[200px] p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                            ref: expiryChartRef
                        }, void 0, false, {
                            fileName: "[project]/components/totp-inventory/TotpCharts.tsx",
                            lineNumber: 76,
                            columnNumber: 48
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/totp-inventory/TotpCharts.tsx",
                        lineNumber: 76,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/totp-inventory/TotpCharts.tsx",
                lineNumber: 71,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/totp-inventory/TotpCharts.tsx",
        lineNumber: 63,
        columnNumber: 9
    }, this);
}
_s(TotpCharts, "8y+xeGP2DmaLpHpiqDP7o02PgNM=");
_c = TotpCharts;
var _c;
__turbopack_context__.k.register(_c, "TotpCharts");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/totp-inventory/TotpModals.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// "use client";
// import React, { useState } from 'react';
// import { adminService } from '@/services/adminService';
// const capitalize = (s: string) => s ? s.charAt(0).toUpperCase() + s.slice(1) : '';
// const getVendorName = (vendor: string) => { const v: any = { yubico: 'Yubico', feitian: 'Feitian', safenet: 'SafeNet' }; return v[vendor] || vendor; };
// const formatDate = (dateStr: string) => dateStr ? new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : '-';
// export function ImportModal({ isOpen, onClose, onImportSuccess, showToast }: any) {
//     const [importFile, setImportFile] = useState<File | null>(null);
//     const [importVendor, setImportVendor] = useState('');
//     const [importBatchId, setImportBatchId] = useState('');
//     const [decryptionKey, setDecryptionKey] = useState('');
//     const [importPeriod, setImportPeriod] = useState('30');
//     const [importAlgorithm, setImportAlgorithm] = useState('SHA1');
//     const [progress, setProgress] = useState({ active: false, percent: 0, text: '' });
//     if (!isOpen) return null;
//     const handleImportSubmit = async () => {
//         if (!importVendor || !importBatchId || !decryptionKey || !importFile) {
//             return showToast('warning', 'Incomplete Form', 'Mohon lengkapi semua data import.');
//         }
//         setProgress({ active: true, percent: 30, text: 'Uploading & Decrypting file...' });
//         const formData = new FormData();
//         formData.append('seedFile', importFile);
//         formData.append('vendor', importVendor);
//         formData.append('batchId', importBatchId);
//         formData.append('decryptionKey', decryptionKey);
//         formData.append('period', importPeriod);
//         formData.append('algorithm', importAlgorithm);
//         try {
//             const result = await adminService.importTotpBatch(formData);
//             setProgress({ active: true, percent: 100, text: 'Import complete!' });
//             setTimeout(() => {
//                 setProgress({ active: false, percent: 0, text: '' });
//                 if (result.success || result.message) {
//                     showToast('success', 'Import Successful', result.message || 'Token berhasil diimport');
//                     onImportSuccess(); 
//                 } else {
//                     showToast('error', 'Import Failed', result.error || 'Terjadi kesalahan sistem');
//                 }
//                 onClose();
//             }, 1000);
//         } catch (err: any) {
//             showToast('error', 'Import Error', err.response?.data?.error || err.message);
//             setProgress({ active: false, percent: 0, text: '' });
//             onClose();
//         }
//     };
//     return (
//         <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[1000] transition-all">
//             <div className="bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-2xl w-full max-w-lg shadow-2xl animate-in zoom-in-95">
//                 <div className="p-5 border-b border-[var(--border-secondary)] flex justify-between items-center">
//                     <h3 className="text-base font-semibold text-[var(--text-primary)] m-0">Import Token Batch</h3>
//                     <button className="p-1.5 rounded-md text-[var(--text-tertiary)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)] transition-colors" onClick={onClose}>
//                         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
//                     </button>
//                 </div>
//                 <div className="p-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
//                     <div className="grid grid-cols-2 gap-4 mb-5">
//                         <div>
//                             <label className="block text-[13px] font-medium text-[var(--text-secondary)] mb-2">Vendor</label>
//                             <select className="w-full py-2.5 px-3 bg-[var(--bg-tertiary)] border border-[var(--border-secondary)] rounded-lg text-sm outline-none focus:border-[var(--accent)] text-[var(--text-primary)]" value={importVendor} onChange={(e) => setImportVendor(e.target.value)}>
//                                 <option value="">Select vendor...</option><option value="yubico">Yubico</option><option value="feitian">Feitian</option><option value="safenet">SafeNet / Thales</option>
//                             </select>
//                         </div>
//                         <div>
//                             <label className="block text-[13px] font-medium text-[var(--text-secondary)] mb-2">Batch ID</label>
//                             <input type="text" className="w-full py-2.5 px-3 bg-[var(--bg-tertiary)] border border-[var(--border-secondary)] rounded-lg text-sm outline-none focus:border-[var(--accent)] text-[var(--text-primary)]" value={importBatchId} onChange={(e) => setImportBatchId(e.target.value)} placeholder="e.g., BATCH-001" />
//                         </div>
//                     </div>
//                     <div className="grid grid-cols-2 gap-4 mb-5 p-4 border border-[var(--border-secondary)] rounded-xl bg-[rgba(35,131,226,0.03)]">
//                         <div>
//                             <label className="block text-[12px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-2">Algorithm</label>
//                             <select className="w-full py-2 px-3 bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-lg text-sm outline-none focus:border-[var(--accent)] text-[var(--text-primary)]" value={importAlgorithm} onChange={(e) => setImportAlgorithm(e.target.value)}>
//                                 <option value="SHA1">HMAC-SHA1</option>
//                                 <option value="SHA256">HMAC-SHA256</option>
//                                 <option value="SHA512">HMAC-SHA512</option>
//                             </select>
//                         </div>
//                         <div>
//                             <label className="block text-[12px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-2">Period</label>
//                             <select className="w-full py-2 px-3 bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-lg text-sm outline-none focus:border-[var(--accent)] text-[var(--text-primary)]" value={importPeriod} onChange={(e) => setImportPeriod(e.target.value)}>
//                                 <option value="30">30 Seconds</option>
//                                 <option value="60">60 Seconds</option>
//                             </select>
//                         </div>
//                     </div>
//                     <div className="mb-5">
//                         <label className="block text-[13px] font-medium text-[var(--text-secondary)] mb-2">Seed File</label>
//                         <div className="border-2 border-dashed border-[var(--border-secondary)] hover:border-[var(--accent)] rounded-xl p-8 text-center cursor-pointer transition-colors hover:bg-[rgba(35,131,226,0.05)]" onClick={() => document.getElementById('seedFile')?.click()}>
//                             <input type="file" id="seedFile" className="hidden" onChange={(e) => { if(e.target.files) setImportFile(e.target.files[0]) }} accept=".xlsx,.csv,.xml,.pskc" />
//                             <div className="w-10 h-10 bg-[var(--bg-tertiary)] rounded-full flex items-center justify-center mx-auto mb-3">
//                                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-[var(--accent)]"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
//                             </div>
//                             <div className="text-sm text-[var(--text-secondary)]">
//                                 {importFile ? <span className="text-[var(--success)]">{importFile.name}</span> : <>Click to upload CSV/Excel</>}
//                             </div>
//                         </div>
//                     </div>
//                     <div className="mb-2">
//                         <label className="block text-[13px] font-medium text-[var(--text-secondary)] mb-2">Master Decryption Key</label>
//                         <input type="password" className="w-full py-2.5 px-3 bg-[var(--bg-tertiary)] border border-[var(--border-secondary)] rounded-lg text-sm outline-none focus:border-[var(--accent)] text-[var(--text-primary)]" value={decryptionKey} onChange={(e) => setDecryptionKey(e.target.value)} placeholder="Enter key to decrypt factory seeds" />
//                     </div>
//                 </div>
//                 <div className="p-4 border-t border-[var(--border-secondary)] flex justify-end gap-3 rounded-b-2xl bg-[var(--bg-secondary)]">
//                     <button className="px-4 py-2 rounded-lg text-sm font-medium bg-[var(--bg-tertiary)] border border-[var(--border-secondary)] text-[var(--text-primary)] hover:bg-[var(--bg-hover)] transition-colors" onClick={onClose}>Cancel</button>
//                     <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white transition-colors" onClick={handleImportSubmit}>
//                         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
//                         Import Tokens
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }
// export function DetailModal({ isOpen, onClose, token, showToast, onSuccess }: any) {
//     if (!isOpen || !token) return null;
//     const handleRevoke = async () => {
//         try {
//             await adminService.updateTotpStatus(token.serial, 'revoked');
//             showToast('success', 'Token Revoked', `${token.serial} has been permanently disabled`);
//             onSuccess();
//             onClose();
//         } catch (err: any) {
//             showToast('error', 'Action Failed', err.response?.data?.error || err.message);
//         }
//     };
//     return (
//         <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[1000] transition-all">
//             <div className="bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-2xl w-full max-w-2xl shadow-2xl animate-in zoom-in-95">
//                 <div className="p-5 border-b border-[var(--border-secondary)] flex justify-between items-center">
//                     <h3 className="text-base font-semibold text-[var(--text-primary)] m-0">Token Details</h3>
//                     <button className="p-1.5 rounded-md text-[var(--text-tertiary)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)] transition-colors" onClick={onClose}>
//                         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
//                     </button>
//                 </div>
//                 <div className="p-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
//                     <div className="mb-6">
//                         <div className="text-[11px] font-semibold uppercase tracking-wider text-[var(--text-tertiary)] mb-3 pb-2 border-b border-[var(--border-secondary)]">Token Information</div>
//                         <div className="grid grid-cols-2 gap-4">
//                             <div className="flex flex-col gap-1">
//                                 <span className="text-xs text-[var(--text-tertiary)]">Serial Number</span>
//                                 <span className="text-sm text-[var(--text-primary)] font-mono font-medium">{token.serial}</span>
//                             </div>
//                             <div className="flex flex-col gap-1">
//                                 <span className="text-xs text-[var(--text-tertiary)]">Status</span>
//                                 <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium w-fit border
//                                     ${token.status === 'available' ? 'bg-[var(--success-bg)] text-[var(--success)] border-[var(--success-border)]' : ''}
//                                     ${token.status === 'assigned' ? 'bg-[rgba(35,131,226,0.15)] text-[var(--accent)] border-[rgba(35,131,226,0.3)]' : ''}
//                                     ${token.status === 'suspended' ? 'bg-[var(--warning-bg)] text-[var(--warning)] border-[rgba(251,191,36,0.3)]' : ''}
//                                     ${token.status === 'revoked' ? 'bg-[var(--error-bg)] text-[var(--error)] border-[rgba(248,113,113,0.3)]' : ''}
//                                 `}>
//                                     {capitalize(token.status)}
//                                 </span>
//                             </div>
//                             <div className="flex flex-col gap-1">
//                                 <span className="text-xs text-[var(--text-tertiary)]">Vendor</span>
//                                 <span className="text-sm text-[var(--text-primary)] font-medium">{getVendorName(token.vendor)}</span>
//                             </div>
//                             <div className="flex flex-col gap-1">
//                                 <span className="text-xs text-[var(--text-tertiary)]">Batch ID</span>
//                                 <span className="text-sm text-[var(--text-primary)] font-mono font-medium">{token.batch}</span>
//                             </div>
//                             <div className="flex flex-col gap-1">
//                                 <span className="text-xs text-[var(--text-tertiary)]">Algorithm</span>
//                                 <span className="text-sm text-[var(--text-primary)] font-medium">TOTP-SHA1</span>
//                             </div>
//                             <div className="flex flex-col gap-1">
//                                 <span className="text-xs text-[var(--text-tertiary)]">Period</span>
//                                 <span className="text-sm text-[var(--text-primary)] font-medium">30 seconds</span>
//                             </div>
//                             <div className="flex flex-col gap-1">
//                                 <span className="text-xs text-[var(--text-tertiary)]">Expiry Date</span>
//                                 <span className="text-sm text-[var(--text-primary)] font-medium">{formatDate(token.expiry)}</span>
//                             </div>
//                             <div className="flex flex-col gap-1">
//                                 <span className="text-xs text-[var(--text-tertiary)]">Last Used</span>
//                                 <span className="text-sm text-[var(--text-primary)] font-medium">{token.lastUsed || 'Never'}</span>
//                             </div>
//                         </div>
//                     </div>
//                     {token.user && (
//                         <div className="mb-6">
//                             <div className="text-[11px] font-semibold uppercase tracking-wider text-[var(--text-tertiary)] mb-3 pb-2 border-b border-[var(--border-secondary)]">Assigned User</div>
//                             <div className="grid grid-cols-2 gap-4">
//                                 <div className="flex flex-col gap-1">
//                                     <span className="text-xs text-[var(--text-tertiary)]">Name</span>
//                                     <span className="text-sm text-[var(--text-primary)] font-medium">{token.user.name}</span>
//                                 </div>
//                                 <div className="flex flex-col gap-1">
//                                     <span className="text-xs text-[var(--text-tertiary)]">User ID</span>
//                                     <span className="text-sm text-[var(--text-primary)] font-mono font-medium">{token.user.id}</span>
//                                 </div>
//                             </div>
//                         </div>
//                     )}
//                     <div className="mb-2">
//                         <div className="text-[11px] font-semibold uppercase tracking-wider text-[var(--text-tertiary)] mb-3 pb-2 border-b border-[var(--border-secondary)]">Audit Log</div>
//                         <div className="flex flex-col">
//                             {token.user && (
//                                 <div className="flex gap-3 py-2.5 border-b border-[var(--border-secondary)]">
//                                     <div className="w-7 h-7 rounded-md bg-[rgba(35,131,226,0.15)] text-[var(--accent)] flex items-center justify-center shrink-0">
//                                         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>
//                                     </div>
//                                     <div>
//                                         <div className="text-[13px] text-[var(--text-primary)]">Assigned to {token.user.name}</div>
//                                         <div className="text-[11px] text-[var(--text-tertiary)] mt-0.5">Assigned automatically via system</div>
//                                     </div>
//                                 </div>
//                             )}
//                             <div className="flex gap-3 py-2.5">
//                                 <div className="w-7 h-7 rounded-md bg-[var(--success-bg)] text-[var(--success)] flex items-center justify-center shrink-0">
//                                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
//                                 </div>
//                                 <div>
//                                     <div className="text-[13px] text-[var(--text-primary)]">Imported from batch {token.batch}</div>
//                                     <div className="text-[11px] text-[var(--text-tertiary)] mt-0.5">System Administrator</div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="p-4 border-t border-[var(--border-secondary)] flex justify-end gap-3 rounded-b-2xl bg-[var(--bg-secondary)]">
//                     <button className="px-4 py-2 rounded-lg text-sm font-medium bg-[var(--bg-tertiary)] border border-[var(--border-secondary)] text-[var(--text-primary)] hover:bg-[var(--bg-hover)] transition-colors" onClick={onClose}>Close</button>
//                     {token.status !== 'revoked' && (
//                         <button className="px-4 py-2 rounded-lg text-sm font-medium bg-[var(--error-bg)] text-[var(--error)] hover:bg-[var(--error)] hover:text-white transition-colors" onClick={handleRevoke}>Revoke Token</button>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }
// export function AssignModal({ isOpen, onClose, tokenSerial, showToast, onAssignSuccess }: any) {
//     const [userId, setUserId] = useState('');
//     const [searchQuery, setSearchQuery] = useState('');
//     const [searchResults, setSearchResults] = useState<any[]>([]);
//     const [isSearching, setIsSearching] = useState(false);
//     const [showDropdown, setShowDropdown] = useState(false);
//     const [verificationCode, setVerificationCode] = useState('');
//     const [isAssigning, setIsAssigning] = useState(false);
//     React.useEffect(() => {
//         const fetchUsers = async () => {
//             if (searchQuery.trim().length < 2) {
//                 setSearchResults([]);
//                 setShowDropdown(false);
//                 return;
//             }
//             if (userId && searchQuery.includes(' - ')) return;
//             setIsSearching(true);
//             try {
//                 const response = await adminService.searchUsers(searchQuery);
//                 let users = [];
//                 if (Array.isArray(response)) {
//                     users = response;
//                 } else if (response && Array.isArray(response.data)) {
//                     users = response.data;
//                 } else if (response && Array.isArray(response.users)) {
//                     users = response.users;
//                 }
//                 const lowerQuery = searchQuery.toLowerCase();
//                 const filteredUsers = users.filter((u: any) => 
//                     (u.name && u.name.toLowerCase().includes(lowerQuery)) || 
//                     (u.email && u.email.toLowerCase().includes(lowerQuery))
//                 );
//                 setSearchResults(filteredUsers);
//                 setShowDropdown(true);
//             } catch (error) {
//                 console.error("Search failed", error);
//             } finally {
//                 setIsSearching(false);
//             }
//         };
//         const timeoutId = setTimeout(fetchUsers, 400);
//         return () => clearTimeout(timeoutId);
//     }, [searchQuery, userId]);
//     if (!isOpen) return null;
//     const handleSelectUser = (user: any) => {
//         setUserId(user.id);
//         setSearchQuery(`${user.name} - ${user.email}`);
//         setShowDropdown(false);
//     };
//     const handleAssign = async () => {
//         if (!userId) return showToast('warning', 'Validasi', 'Select a user to assign the token');
//         if (!verificationCode || verificationCode.length < 6) return showToast('warning', 'Validasi', '6-digit verification code is required');
//         setIsAssigning(true);
//         try {
//             await adminService.assignTotpToken(tokenSerial, userId, verificationCode);
//             showToast('success', 'Token Assigned', `${tokenSerial} has been assigned to ${searchQuery}`);
//             onAssignSuccess();
//             onClose();
//             setUserId('');
//             setSearchQuery('');
//             setVerificationCode('');
//         } catch (err: any) {
//             showToast('error', 'Assign Failed', err.response?.data?.error || err.message);
//         } finally {
//             setIsAssigning(false);
//         }
//     };
//     return (
//         <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[1000] transition-all">
//             {showDropdown && (
//                 <div className="fixed inset-0 z-[1001]" onClick={() => setShowDropdown(false)} />
//             )}
//             <div className="bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-2xl w-full max-w-md shadow-2xl animate-in zoom-in-95 relative z-[1002]">
//                 <div className="p-5 border-b border-[var(--border-secondary)] flex justify-between items-center bg-[var(--bg-secondary)] rounded-t-2xl">
//                     <h3 className="text-base font-semibold text-[var(--text-primary)] m-0">Assign Token to User</h3>
//                     <button className="p-1.5 rounded-md text-[var(--text-tertiary)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)] transition-colors" onClick={onClose} disabled={isAssigning}>
//                         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
//                     </button>
//                 </div>
//                 <div className="p-6">
//                     <div className="mb-5">
//                         <label className="block text-[13px] font-medium text-[var(--text-secondary)] mb-2">Serial Number</label>
//                         <input type="text" className="w-full py-2.5 px-3 bg-[var(--bg-tertiary)] border border-[var(--border-secondary)] rounded-lg text-sm font-mono text-[var(--text-tertiary)] opacity-70 cursor-not-allowed" value={tokenSerial} readOnly />
//                     </div>
//                     <div className="mb-5 relative">
//                         <label className="block text-[13px] font-medium text-[var(--text-secondary)] mb-2">Search User</label>
//                         <div className="relative flex items-center">
//                             <input 
//                                 type="text" 
//                                 className={`w-full py-2.5 pl-10 pr-4 bg-[var(--bg-tertiary)] border ${userId ? 'border-[var(--success)] shadow-[0_0_0_1px_var(--success)]' : 'border-[var(--border-secondary)] focus:border-[var(--accent)]'} rounded-lg text-sm outline-none text-[var(--text-primary)] placeholder-[var(--text-tertiary)] transition-all`}
//                                 placeholder="Type name or email..." 
//                                 value={searchQuery} 
//                                 onChange={(e) => {
//                                     setSearchQuery(e.target.value);
//                                     if (userId) setUserId('');
//                                     if (e.target.value.length > 1) setShowDropdown(true);
//                                 }} 
//                                 disabled={isAssigning} 
//                             />
//                             <div className="absolute left-3 flex items-center justify-center">
//                                 {userId ? (
//                                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 text-[var(--success)]"><polyline points="20 6 9 17 4 12"/></svg>
//                                 ) : (
//                                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[var(--text-tertiary)]"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
//                                 )}
//                             </div>
//                             {isSearching && !userId && (
//                                 <div className="absolute right-3 flex items-center justify-center">
//                                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[var(--accent)] animate-spin"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
//                                 </div>
//                             )}
//                         </div>
//                         {showDropdown && (
//                             <div className="absolute top-[100%] left-0 w-full mt-2 bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] z-[1003] max-h-[220px] overflow-y-auto custom-scrollbar overflow-hidden animate-in fade-in slide-in-from-top-2">
//                                 {searchResults.length === 0 && !isSearching ? (
//                                     <div className="p-4 text-[13px] text-[var(--text-tertiary)] text-center flex flex-col items-center gap-2">
//                                         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
//                                         User not found
//                                     </div>
//                                 ) : (
//                                     <div className="py-1">
//                                         {searchResults.map((user: any) => (
//                                             <div 
//                                                 key={user.id} 
//                                                 className="px-4 py-2.5 hover:bg-[var(--bg-tertiary)] cursor-pointer border-b border-[var(--border-secondary)] last:border-0 transition-colors flex items-center gap-3"
//                                                 onClick={() => handleSelectUser(user)}
//                                             >
//                                                 <div className="w-8 h-8 rounded-full bg-[rgba(35,131,226,0.15)] text-[var(--accent)] flex items-center justify-center text-xs font-bold uppercase shrink-0">
//                                                     {user.initials || user.name.charAt(0)}
//                                                 </div>
//                                                 <div className="flex flex-col overflow-hidden w-full">
//                                                     <div className="text-[13px] font-medium text-[var(--text-primary)] truncate">{user.name}</div>
//                                                     <div className="text-[11px] text-[var(--text-tertiary)] truncate">{user.email}</div>
//                                                 </div>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 )}
//                             </div>
//                         )}
//                     </div>
//                     <div className="mb-2">
//                         <label className="block text-[13px] font-medium text-[var(--text-secondary)] mb-2">Verification Code</label>
//                         <input type="text" className="w-full py-2.5 px-3 bg-[var(--bg-tertiary)] border border-[var(--border-secondary)] rounded-lg text-sm font-mono tracking-[0.25em] outline-none focus:border-[var(--accent)] text-[var(--text-primary)] placeholder-[var(--text-tertiary)]" placeholder="123456" maxLength={6} value={verificationCode} onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, ''))} disabled={isAssigning} />
//                         <div className="text-[11px] text-[var(--text-tertiary)] mt-2 flex items-start gap-1.5">
//                             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 shrink-0 mt-0.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
//                             Validate the 6-digit code from the user&apos;s authenticator app to confirm assignment.
//                         </div>
//                     </div>
//                 </div>
//                 <div className="p-4 border-t border-[var(--border-secondary)] flex justify-end gap-3 bg-[var(--bg-secondary)] rounded-b-2xl">
//                     <button className="px-4 py-2 rounded-lg text-sm font-medium bg-[var(--bg-tertiary)] border border-[var(--border-secondary)] text-[var(--text-primary)] hover:bg-[var(--bg-hover)] transition-colors disabled:opacity-50" onClick={onClose} disabled={isAssigning}>Cancel</button>
//                     <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white transition-colors disabled:opacity-50 disabled:bg-[var(--bg-tertiary)] disabled:text-[var(--text-tertiary)]" onClick={handleAssign} disabled={isAssigning || !userId || verificationCode.length < 6}>
//                         {isAssigning ? 'Assigning...' : 'Assign Token'}
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }
// === IMPORT MODAL (DENGAN DUKUNGAN ZIP) ===
__turbopack_context__.s([
    "ImportModal",
    ()=>ImportModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
function ImportModal({ isOpen, onClose, onImportSuccess, showToast }) {
    _s();
    const [importFile, setImportFile] = useState(null);
    const [importVendor, setImportVendor] = useState('');
    const [importBatchId, setImportBatchId] = useState('');
    const [decryptionKey, setDecryptionKey] = useState('');
    // Konfigurasi Kriptografi Baru
    const [importPeriod, setImportPeriod] = useState('30');
    const [importAlgorithm, setImportAlgorithm] = useState('SHA1');
    const [progress, setProgress] = useState({
        active: false,
        percent: 0,
        text: ''
    });
    if (!isOpen) return null;
    const handleImportSubmit = async ()=>{
        if (!importVendor || !importBatchId || !decryptionKey || !importFile) {
            return showToast('warning', 'Incomplete Form', 'Mohon lengkapi semua data import.');
        }
        setProgress({
            active: true,
            percent: 30,
            text: 'Uploading & Extracting ZIP...'
        });
        const formData = new FormData();
        formData.append('seedFile', importFile);
        formData.append('vendor', importVendor);
        formData.append('batchId', importBatchId);
        formData.append('decryptionKey', decryptionKey); // Digunakan sebagai Passcode ZIP
        formData.append('period', importPeriod);
        formData.append('algorithm', importAlgorithm);
        try {
            const result = await adminService.importTotpBatch(formData);
            setProgress({
                active: true,
                percent: 100,
                text: 'Import complete!'
            });
            setTimeout(()=>{
                setProgress({
                    active: false,
                    percent: 0,
                    text: ''
                });
                if (result.success || result.message) {
                    showToast('success', 'Import Successful', result.message || 'Token berhasil diimport');
                    onImportSuccess();
                } else {
                    showToast('error', 'Import Failed', result.error || 'Terjadi kesalahan sistem');
                }
                onClose();
            }, 1000);
        } catch (err) {
            showToast('error', 'Import Error', err.response?.data?.error || err.message);
            setProgress({
                active: false,
                percent: 0,
                text: ''
            });
            onClose();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/70 flex items-center justify-center z-[1000] transition-all",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-2xl w-full max-w-lg shadow-2xl animate-in zoom-in-95",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-5 border-b border-[var(--border-secondary)] flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-base font-semibold text-[var(--text-primary)] m-0",
                            children: "Import Secure Token Batch"
                        }, void 0, false, {
                            fileName: "[project]/components/totp-inventory/TotpModals.tsx",
                            lineNumber: 490,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "p-1.5 rounded-md text-[var(--text-tertiary)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)] transition-colors",
                            onClick: onClose,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "20",
                                height: "20",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "18",
                                        y1: "6",
                                        x2: "6",
                                        y2: "18"
                                    }, void 0, false, {
                                        fileName: "[project]/components/totp-inventory/TotpModals.tsx",
                                        lineNumber: 492,
                                        columnNumber: 123
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "6",
                                        y1: "6",
                                        x2: "18",
                                        y2: "18"
                                    }, void 0, false, {
                                        fileName: "[project]/components/totp-inventory/TotpModals.tsx",
                                        lineNumber: 492,
                                        columnNumber: 160
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/totp-inventory/TotpModals.tsx",
                                lineNumber: 492,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/totp-inventory/TotpModals.tsx",
                            lineNumber: 491,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/totp-inventory/TotpModals.tsx",
                    lineNumber: 489,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 max-h-[70vh] overflow-y-auto custom-scrollbar",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-4 mb-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-[13px] font-medium text-[var(--text-secondary)] mb-2",
                                            children: "Vendor"
                                        }, void 0, false, {
                                            fileName: "[project]/components/totp-inventory/TotpModals.tsx",
                                            lineNumber: 499,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: "w-full py-2.5 px-3 bg-[var(--bg-tertiary)] border border-[var(--border-secondary)] rounded-lg text-sm outline-none focus:border-[var(--accent)] text-[var(--text-primary)]",
                                            value: importVendor,
                                            onChange: (e)=>setImportVendor(e.target.value),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Select vendor..."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/totp-inventory/TotpModals.tsx",
                                                    lineNumber: 501,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "yubico",
                                                    children: "Yubico"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/totp-inventory/TotpModals.tsx",
                                                    lineNumber: 501,
                                                    columnNumber: 75
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "feitian",
                                                    children: "Feitian"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/totp-inventory/TotpModals.tsx",
                                                    lineNumber: 501,
                                                    columnNumber: 113
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "safenet",
                                                    children: "SafeNet / Thales"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/totp-inventory/TotpModals.tsx",
                                                    lineNumber: 501,
                                                    columnNumber: 153
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/totp-inventory/TotpModals.tsx",
                                            lineNumber: 500,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/totp-inventory/TotpModals.tsx",
                                    lineNumber: 498,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-[13px] font-medium text-[var(--text-secondary)] mb-2",
                                            children: "Batch ID"
                                        }, void 0, false, {
                                            fileName: "[project]/components/totp-inventory/TotpModals.tsx",
                                            lineNumber: 505,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            className: "w-full py-2.5 px-3 bg-[var(--bg-tertiary)] border border-[var(--border-secondary)] rounded-lg text-sm outline-none focus:border-[var(--accent)] text-[var(--text-primary)]",
                                            value: importBatchId,
                                            onChange: (e)=>setImportBatchId(e.target.value),
                                            placeholder: "e.g., BATCH-001"
                                        }, void 0, false, {
                                            fileName: "[project]/components/totp-inventory/TotpModals.tsx",
                                            lineNumber: 506,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/totp-inventory/TotpModals.tsx",
                                    lineNumber: 504,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/totp-inventory/TotpModals.tsx",
                            lineNumber: 497,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-4 mb-5 p-4 border border-[var(--border-secondary)] rounded-xl bg-[rgba(35,131,226,0.03)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-[12px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-2",
                                            children: "Algorithm"
                                        }, void 0, false, {
                                            fileName: "[project]/components/totp-inventory/TotpModals.tsx",
                                            lineNumber: 512,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: "w-full py-2 px-3 bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-lg text-sm outline-none focus:border-[var(--accent)] text-[var(--text-primary)]",
                                            value: importAlgorithm,
                                            onChange: (e)=>setImportAlgorithm(e.target.value),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "SHA1",
                                                    children: "HMAC-SHA1"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/totp-inventory/TotpModals.tsx",
                                                    lineNumber: 514,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "SHA256",
                                                    children: "HMAC-SHA256"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/totp-inventory/TotpModals.tsx",
                                                    lineNumber: 515,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "SHA512",
                                                    children: "HMAC-SHA512"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/totp-inventory/TotpModals.tsx",
                                                    lineNumber: 516,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/totp-inventory/TotpModals.tsx",
                                            lineNumber: 513,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/totp-inventory/TotpModals.tsx",
                                    lineNumber: 511,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-[12px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-2",
                                            children: "Period"
                                        }, void 0, false, {
                                            fileName: "[project]/components/totp-inventory/TotpModals.tsx",
                                            lineNumber: 520,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: "w-full py-2 px-3 bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-lg text-sm outline-none focus:border-[var(--accent)] text-[var(--text-primary)]",
                                            value: importPeriod,
                                            onChange: (e)=>setImportPeriod(e.target.value),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "30",
                                                    children: "30 Seconds"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/totp-inventory/TotpModals.tsx",
                                                    lineNumber: 522,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "60",
                                                    children: "60 Seconds"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/totp-inventory/TotpModals.tsx",
                                                    lineNumber: 523,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/totp-inventory/TotpModals.tsx",
                                            lineNumber: 521,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/totp-inventory/TotpModals.tsx",
                                    lineNumber: 519,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/totp-inventory/TotpModals.tsx",
                            lineNumber: 510,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-[13px] font-medium text-[var(--text-secondary)] mb-2",
                                    children: "Seed File (Encrypted ZIP)"
                                }, void 0, false, {
                                    fileName: "[project]/components/totp-inventory/TotpModals.tsx",
                                    lineNumber: 530,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-2 border-dashed border-[var(--border-secondary)] hover:border-[var(--accent)] rounded-xl p-8 text-center cursor-pointer transition-colors hover:bg-[rgba(35,131,226,0.05)]",
                                    onClick: ()=>document.getElementById('seedFile')?.click(),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "file",
                                            id: "seedFile",
                                            className: "hidden",
                                            onChange: (e)=>{
                                                if (e.target.files) setImportFile(e.target.files[0]);
                                            },
                                            accept: ".zip"
                                        }, void 0, false, {
                                            fileName: "[project]/components/totp-inventory/TotpModals.tsx",
                                            lineNumber: 532,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-10 h-10 bg-[var(--bg-tertiary)] rounded-full flex items-center justify-center mx-auto mb-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                className: "w-5 h-5 text-[var(--accent)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/totp-inventory/TotpModals.tsx",
                                                        lineNumber: 534,
                                                        columnNumber: 149
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                        points: "17 8 12 3 7 8"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/totp-inventory/TotpModals.tsx",
                                                        lineNumber: 534,
                                                        columnNumber: 200
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "12",
                                                        y1: "3",
                                                        x2: "12",
                                                        y2: "15"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/totp-inventory/TotpModals.tsx",
                                                        lineNumber: 534,
                                                        columnNumber: 234
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/totp-inventory/TotpModals.tsx",
                                                lineNumber: 534,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/totp-inventory/TotpModals.tsx",
                                            lineNumber: 533,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-[var(--text-secondary)]",
                                            children: importFile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[var(--success)]",
                                                children: importFile.name
                                            }, void 0, false, {
                                                fileName: "[project]/components/totp-inventory/TotpModals.tsx",
                                                lineNumber: 537,
                                                columnNumber: 47
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    "Click to upload ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "text-[var(--text-primary)]",
                                                        children: ".ZIP"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/totp-inventory/TotpModals.tsx",
                                                        lineNumber: 537,
                                                        columnNumber: 132
                                                    }, this),
                                                    " file"
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/components/totp-inventory/TotpModals.tsx",
                                            lineNumber: 536,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/totp-inventory/TotpModals.tsx",
                                    lineNumber: 531,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/totp-inventory/TotpModals.tsx",
                            lineNumber: 529,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-[13px] font-medium text-[var(--text-secondary)] mb-2",
                                    children: "ZIP File Passcode"
                                }, void 0, false, {
                                    fileName: "[project]/components/totp-inventory/TotpModals.tsx",
                                    lineNumber: 544,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "password",
                                    className: "w-full py-2.5 px-3 bg-[var(--bg-tertiary)] border border-[var(--border-secondary)] rounded-lg text-sm outline-none focus:border-[var(--accent)] text-[var(--text-primary)]",
                                    value: decryptionKey,
                                    onChange: (e)=>setDecryptionKey(e.target.value),
                                    placeholder: "Enter the password to extract the ZIP"
                                }, void 0, false, {
                                    fileName: "[project]/components/totp-inventory/TotpModals.tsx",
                                    lineNumber: 545,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/totp-inventory/TotpModals.tsx",
                            lineNumber: 543,
                            columnNumber: 21
                        }, this),
                        progress.active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-2 bg-[var(--bg-tertiary)] rounded-full overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-full bg-[var(--accent)] transition-all duration-300",
                                        style: {
                                            width: `${progress.percent}%`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/totp-inventory/TotpModals.tsx",
                                        lineNumber: 551,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/totp-inventory/TotpModals.tsx",
                                    lineNumber: 550,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between text-xs text-[var(--text-tertiary)] mt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: progress.text
                                        }, void 0, false, {
                                            fileName: "[project]/components/totp-inventory/TotpModals.tsx",
                                            lineNumber: 554,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                progress.percent,
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/totp-inventory/TotpModals.tsx",
                                            lineNumber: 554,
                                            columnNumber: 61
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/totp-inventory/TotpModals.tsx",
                                    lineNumber: 553,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/totp-inventory/TotpModals.tsx",
                            lineNumber: 549,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/totp-inventory/TotpModals.tsx",
                    lineNumber: 495,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 border-t border-[var(--border-secondary)] flex justify-end gap-3 rounded-b-2xl bg-[var(--bg-secondary)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "px-4 py-2 rounded-lg text-sm font-medium bg-[var(--bg-tertiary)] border border-[var(--border-secondary)] text-[var(--text-primary)] hover:bg-[var(--bg-hover)] transition-colors",
                            onClick: onClose,
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/components/totp-inventory/TotpModals.tsx",
                            lineNumber: 560,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white transition-colors",
                            onClick: handleImportSubmit,
                            disabled: progress.active,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    className: "w-4 h-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/totp-inventory/TotpModals.tsx",
                                            lineNumber: 562,
                                            columnNumber: 120
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                            points: "17 8 12 3 7 8"
                                        }, void 0, false, {
                                            fileName: "[project]/components/totp-inventory/TotpModals.tsx",
                                            lineNumber: 562,
                                            columnNumber: 171
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "12",
                                            y1: "3",
                                            x2: "12",
                                            y2: "15"
                                        }, void 0, false, {
                                            fileName: "[project]/components/totp-inventory/TotpModals.tsx",
                                            lineNumber: 562,
                                            columnNumber: 205
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/totp-inventory/TotpModals.tsx",
                                    lineNumber: 562,
                                    columnNumber: 25
                                }, this),
                                "Extract & Import"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/totp-inventory/TotpModals.tsx",
                            lineNumber: 561,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/totp-inventory/TotpModals.tsx",
                    lineNumber: 559,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/totp-inventory/TotpModals.tsx",
            lineNumber: 488,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/totp-inventory/TotpModals.tsx",
        lineNumber: 487,
        columnNumber: 9
    }, this);
}
_s(ImportModal, "1wQ9Z2bd3EVmMKrE/4P7yQAdehc=");
_c = ImportModal;
var _c;
__turbopack_context__.k.register(_c, "ImportModal");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/apiClient.ts [app-client] (ecmascript)");
;
const adminService = {
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
    getRiskRules: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/admin/risk-rules`);
        return res.data;
    },
    getRiskConfig: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/admin/risk-config`);
        return res.data;
    },
    saveRiskConfigBatch: async (rulesPayload)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post('/api/admin/risk-rules', {
            rules: rulesPayload
        });
        return res.data;
    },
    updateRiskConfig: async (payload)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post('/api/admin/risk-config', payload);
        return res.data;
    },
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
    getTransactions: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/admin/transactions`);
        return res.data;
    },
    getTransactionDetail: async (id)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/admin/transactions/${id}`);
        return res.data;
    },
    getAuthLogs: async (eventType)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/admin/logs`, {
            params: {
                eventType
            }
        });
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
    },
    getTotpInventory: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/admin/totp-inventory`);
        return res.data;
    },
    importTotpBatch: async (formData)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`/api/admin/totp-inventory/import`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return res.data;
    },
    updateTotpStatus: async (serial, status)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].put(`/api/admin/totp-inventory/${serial}/status`, {
            status
        });
        return res.data;
    },
    assignTotpToken: async (serial, userId, verificationCode)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`/api/admin/totp-inventory/${serial}/assign`, {
            userId,
            verificationCode
        });
        return res.data;
    },
    unassignTotpToken: async (serial)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`/api/admin/totp-inventory/${serial}/unassign`);
        return res.data;
    },
    searchUsers: async (query)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/users`, {
            params: {
                search: query
            }
        });
        return res.data;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(admin)/totp-inventory/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TotpInventoryPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$totp$2d$inventory$2f$TotpCharts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/totp-inventory/TotpCharts.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$totp$2d$inventory$2f$TotpModals$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/totp-inventory/TotpModals.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$adminService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/adminService.ts [app-client] (ecmascript)"); // Import Service API
;
var _s = __turbopack_context__.k.signature();
// "use client";
// import React, { useState, useEffect } from 'react';
// import * as XLSX from 'xlsx';
// import TotpCharts from '@/components/totp-inventory/TotpCharts';
// import { ImportModal, DetailModal, AssignModal } from '@/components/totp-inventory/TotpModals';
// import { adminService } from '@/services/adminService'; // Import Service API
// // Helpers UI
// const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
// const getVendorName = (vendor: string) => { const v: any = { yubico: 'Yubico', feitian: 'Feitian', safenet: 'SafeNet' }; return v[vendor] || vendor; };
// const getInitials = (name: string) => name.split(' ').map(n => n[0]).join('').toUpperCase();
// const formatDate = (dateStr: string) => new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
// const getExpiryClass = (dateStr: string) => {
//     const days = Math.floor((new Date(dateStr).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
//     if (days < 0) return 'text-[var(--error)]';
//     if (days < 90) return 'text-[var(--warning)]';
//     return 'text-[var(--text-tertiary)]';
// };
// const getExpiryText = (dateStr: string) => {
//     const days = Math.floor((new Date(dateStr).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
//     if (days < 0) return 'Expired';
//     if (days < 30) return `${days} days left`;
//     if (days < 365) return `${Math.floor(days / 30)} months left`;
//     return `${Math.floor(days / 365)} years left`;
// };
// export default function TotpInventoryPage() {
//     const [tokens, setTokens] = useState<any[]>([]);
//     const [stats, setStats] = useState({ available: 0, assigned: 0, suspended: 0, revoked: 0, expiringSoon: 0 });
//     const [selectedTokens, setSelectedTokens] = useState<Set<string>>(new Set());
//     const [activeMenu, setActiveMenu] = useState<string | null>(null);
//     const [isLoading, setIsLoading] = useState(false);
//     // Filters
//     const [searchQuery, setSearchQuery] = useState('');
//     const [statusFilter, setStatusFilter] = useState('');
//     const [vendorFilter, setVendorFilter] = useState('');
//     // Modals & Toasts
//     const [isImportOpen, setImportOpen] = useState(false);
//     const [isDetailOpen, setDetailOpen] = useState(false);
//     const [isAssignOpen, setAssignOpen] = useState(false);
//     const [activeToken, setActiveToken] = useState<any>(null);
//     const [toasts, setToasts] = useState<any[]>([]);
//     // --- FETCH DATA MENGGUNAKAN SERVICE ---
//     const fetchInventoryData = async () => {
//         setIsLoading(true);
//         try {
//             const result = await adminService.getTotpInventory();
//             if (result.success || result.tokens) {
//                 const mappedTokens = result.tokens.map((t: any) => ({
//                     serial: t.serialNumber, status: t.status, vendor: t.vendor, batch: t.batchId,
//                     user: t.user ? { name: t.user.fullName, id: t.user.id } : null,
//                     expiry: t.expiryDate, lastUsed: t.lastUsedAt ? new Date(t.lastUsedAt).toLocaleString('en-US') : null
//                 }));
//                 setTokens(mappedTokens);
//                 if (result.stats) setStats(result.stats);
//             }
//         } catch (err: any) {
//             showToast('error', 'Connection Error', err.response?.data?.error || 'Gagal memuat data');
//         } finally {
//             setIsLoading(false);
//         }
//     };
//     useEffect(() => {
//         fetchInventoryData();
//         const handleClickOutside = () => setActiveMenu(null);
//         document.addEventListener('click', handleClickOutside);
//         return () => document.removeEventListener('click', handleClickOutside);
//     }, []);
//     // --- LOGIKA AKSI TUNGGAL (CONTEXT MENU) ---
//     const handleAction = async (serial: string, action: string) => {
//         try {
//             if (action === 'unassign') {
//                 await adminService.unassignTotpToken(serial);
//                 showToast('success', 'Unassigned', `Token ${serial} telah dilepas`);
//             } else {
//                 await adminService.updateTotpStatus(serial, action);
//                 showToast('success', 'Status Updated', `Token ${serial} diubah menjadi ${action}`);
//             }
//             fetchInventoryData();
//         } catch (err: any) {
//             showToast('error', 'Action Failed', err.response?.data?.error || 'Terjadi kesalahan sistem');
//         }
//     };
//     // --- LOGIKA AKSI MASSAL (BATCH ACTIONS) ---
//     const handleBatchAction = async (action: string) => {
//         try {
//             const serials = Array.from(selectedTokens);
//             // Eksekusi API secara paralel untuk semua token yang dipilih
//             await Promise.all(serials.map(serial => adminService.updateTotpStatus(serial, action)));
//             showToast('success', 'Batch Update Success', `${serials.length} token diubah menjadi ${action}`);
//             setSelectedTokens(new Set()); // Bersihkan pilihan
//             fetchInventoryData();
//         } catch (err: any) {
//             showToast('error', 'Batch Update Failed', err.response?.data?.error || 'Gagal memperbarui beberapa token');
//         }
//     };
//     const filteredTokens = tokens.filter(t => {
//         const s = searchQuery.toLowerCase();
//         return (!s || t.serial.toLowerCase().includes(s) || (t.user && t.user.name.toLowerCase().includes(s)) || t.batch.toLowerCase().includes(s)) &&
//                (!statusFilter || t.status === statusFilter) &&
//                (!vendorFilter || t.vendor === vendorFilter);
//     });
//     const toggleSelection = (serial: string) => {
//         const newSet = new Set(selectedTokens);
//         if (newSet.has(serial)) newSet.delete(serial); else newSet.add(serial);
//         setSelectedTokens(newSet);
//     };
//     const toggleAllSelection = () => {
//         if (selectedTokens.size === filteredTokens.length) setSelectedTokens(new Set());
//         else setSelectedTokens(new Set(filteredTokens.map(t => t.serial)));
//     };
//     const handleExport = () => {
//         if (tokens.length === 0) return showToast('warning', 'Empty Data', 'Tidak ada data untuk diekspor');
//         const exportData = tokens.map(t => ({ 'Serial Number': t.serial, 'Status': t.status, 'Vendor': t.vendor, 'Batch ID': t.batch, 'Assigned User': t.user ? t.user.name : 'N/A', 'Expiry Date': new Date(t.expiry).toLocaleDateString() }));
//         const worksheet = XLSX.utils.json_to_sheet(exportData);
//         const workbook = XLSX.utils.book_new();
//         XLSX.utils.book_append_sheet(workbook, worksheet, "TOTP_Inventory");
//         XLSX.writeFile(workbook, `TOTP_Inventory_${new Date().toISOString().slice(0,10)}.xlsx`);
//         showToast('success', 'Export Started', 'File Excel berhasil diunduh');
//     };
//     const showToast = (type: string, title: string, message: string) => {
//         const id = Date.now();
//         setToasts(prev => [...prev, { id, type, title, message }]);
//         setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 4000);
//     };
//     return (
//         <div className="flex-1 flex flex-col h-full bg-[var(--bg-primary)] overflow-hidden">
//             {/* HEADER */}
//             <header className="px-6 py-3 border-b border-[var(--border-secondary)] flex items-center justify-between bg-[var(--bg-secondary)] shrink-0 h-[60px]">
//                 <div className="flex items-center gap-2 text-sm">
//                     <span className="text-[var(--text-tertiary)]">Inventory</span>
//                     <span className="text-[var(--text-muted)]">/</span>
//                     <span className="text-[var(--text-primary)] font-medium">TOTP Tokens</span>
//                     <span className="ml-2 bg-[var(--bg-tertiary)] px-2.5 py-0.5 border border-[var(--border-primary)] rounded-[var(--radius-sm)] text-[11px] text-[var(--text-secondary)] font-medium">Hardware</span>
//                 </div>
//                 <div className="flex gap-3">
//                     <button className="flex items-center gap-1.5 px-3.5 py-2 rounded-[var(--radius-md)] text-[13px] font-medium bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-primary)] hover:bg-[var(--bg-hover)] transition-all" onClick={handleExport}>
//                         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7,10 12,15 17,10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
//                         Export
//                     </button>
//                     <button className="flex items-center gap-1.5 px-3.5 py-2 rounded-[var(--radius-md)] text-[13px] font-medium bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-all" onClick={() => setImportOpen(true)}>
//                         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
//                         Import Batch
//                     </button>
//                 </div>
//             </header>
//             {/* MAIN CONTENT */}
//             <div className="flex-1 overflow-auto p-6 flex flex-col">
//                 <div className="grid grid-cols-5 gap-4 mb-6 shrink-0">
//                     {[
//                         { label: 'Available', value: stats.available, sub: 'Ready to assign', color: 'bg-[var(--success)]', textColor: 'text-[var(--success)]' },
//                         { label: 'Assigned', value: stats.assigned, sub: 'Active users', color: 'bg-[var(--accent)]', textColor: 'text-[var(--accent)]' },
//                         { label: 'Suspended', value: stats.suspended, sub: 'Temp disabled', color: 'bg-[var(--warning)]', textColor: 'text-[var(--warning)]' },
//                         { label: 'Revoked', value: stats.revoked, sub: 'Permanently disabled', color: 'bg-[var(--error)]', textColor: 'text-[var(--error)]' },
//                         { label: 'Expiring Soon', value: stats.expiringSoon, sub: 'Within 90 days', color: 'bg-[var(--text-tertiary)]', textColor: 'text-[var(--text-tertiary)]' },
//                     ].map((stat, i) => (
//                         <div key={i} className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] p-4 relative overflow-hidden">
//                             <div className={`absolute top-0 left-0 right-0 h-[3px] ${stat.color}`}></div>
//                             <div className="text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-2">{stat.label}</div>
//                             <div className={`text-2xl font-bold font-mono ${stat.textColor}`}>{stat.value}</div>
//                             <div className="text-xs text-[var(--text-tertiary)] mt-1">{stat.sub}</div>
//                         </div>
//                     ))}
//                 </div>
//                 <TotpCharts tokens={tokens} />
//                 {/* TABLE PANEL */}
//                 <div className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-lg)] mb-6 flex-1 flex flex-col">
//                     <div className="px-5 py-3 border-b border-[var(--border-secondary)] flex justify-between items-center">
//                         <div className="text-[13px] font-semibold flex items-center gap-2.5 text-[var(--text-primary)]">
//                             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[16px] h-[16px] text-[var(--text-tertiary)]"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
//                             Token Inventory
//                         </div>
//                         <button className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[var(--bg-tertiary)] hover:bg-[var(--bg-hover)] border border-[var(--border-primary)] rounded-[var(--radius-sm)] text-[12px] font-medium transition-all text-[var(--text-primary)]" onClick={fetchInventoryData}>
//                             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`}><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/></svg>
//                             {isLoading ? 'Loading...' : 'Refresh'}
//                         </button>
//                     </div>
//                     <div className="p-5 flex-1 flex flex-col">
//                         <div className="flex gap-3 mb-5 flex-wrap shrink-0">
//                             <div className="flex-1 min-w-[280px] flex items-center gap-2 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] px-3 py-2">
//                                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[var(--text-tertiary)]"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
//                                 <input type="text" placeholder="Search by serial number or user..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full bg-transparent border-none outline-none text-[13px] text-[var(--text-primary)] placeholder-[var(--text-tertiary)]" />
//                             </div>
//                             <select className="bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] px-3 py-2 text-[13px] text-[var(--text-primary)] outline-none focus:border-[var(--accent)] cursor-pointer" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
//                                 <option value="">All Status</option><option value="available">Available</option><option value="assigned">Assigned</option><option value="suspended">Suspended</option><option value="revoked">Revoked</option>
//                             </select>
//                             <select className="bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] px-3 py-2 text-[13px] text-[var(--text-primary)] outline-none focus:border-[var(--accent)] cursor-pointer" value={vendorFilter} onChange={(e) => setVendorFilter(e.target.value)}>
//                                 <option value="">All Vendors</option><option value="yubico">Yubico</option><option value="feitian">Feitian</option><option value="safenet">SafeNet</option>
//                             </select>
//                         </div>
//                         {/* BATCH ACTIONS (Sekarang Berfungsi!) */}
//                         {selectedTokens.size > 0 && (
//                             <div className="bg-[rgba(35,131,226,0.1)] border border-[rgba(35,131,226,0.3)] rounded-[var(--radius-md)] p-3 mb-4 flex items-center justify-between shrink-0">
//                                 <div className="flex items-center gap-3 text-[13px]">
//                                     <div className="w-[18px] h-[18px] rounded-[var(--radius-sm)] border-2 border-[var(--accent)] bg-[var(--accent)] flex items-center justify-center cursor-pointer" onClick={() => setSelectedTokens(new Set())}>
//                                         <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" className="w-3 h-3"><polyline points="20 6 9 17 4 12"/></svg>
//                                     </div>
//                                     <span><strong className="text-[var(--text-primary)]">{selectedTokens.size}</strong> tokens selected</span>
//                                 </div>
//                                 <div className="flex gap-2">
//                                     <button className="px-3 py-1.5 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-sm)] text-[12px] font-medium hover:bg-[var(--bg-hover)]" onClick={() => handleBatchAction('suspended')}>Suspend</button>
//                                     <button className="px-3 py-1.5 bg-[var(--error-bg)] text-[var(--error)] border border-transparent rounded-[var(--radius-sm)] text-[12px] font-medium hover:bg-[var(--error)] hover:text-white transition-colors" onClick={() => handleBatchAction('revoked')}>Revoke</button>
//                                 </div>
//                             </div>
//                         )}
//                         <div className="overflow-x-auto flex-1">
//                             <table className="w-full border-collapse text-left">
//                                 <thead>
//                                     <tr>
//                                         <th className="px-3 py-3 border-b border-[var(--border-secondary)] w-10">
//                                             <div className={`w-[18px] h-[18px] rounded-[var(--radius-sm)] border-2 flex items-center justify-center cursor-pointer transition-colors ${selectedTokens.size === filteredTokens.length && filteredTokens.length > 0 ? 'border-[var(--accent)] bg-[var(--accent)]' : 'border-[var(--border-primary)] hover:border-[var(--accent)]'}`} onClick={toggleAllSelection}>
//                                                 <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" className={`w-3 h-3 ${selectedTokens.size === filteredTokens.length && filteredTokens.length > 0 ? 'opacity-100' : 'opacity-0'}`}><polyline points="20 6 9 17 4 12"/></svg>
//                                             </div>
//                                         </th>
//                                         <th className="px-3 py-3 border-b border-[var(--border-secondary)] text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider">Serial Number</th>
//                                         <th className="px-3 py-3 border-b border-[var(--border-secondary)] text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider">Status</th>
//                                         <th className="px-3 py-3 border-b border-[var(--border-secondary)] text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider">Vendor</th>
//                                         <th className="px-3 py-3 border-b border-[var(--border-secondary)] text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider">Batch ID</th>
//                                         <th className="px-3 py-3 border-b border-[var(--border-secondary)] text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider">Assigned To</th>
//                                         <th className="px-3 py-3 border-b border-[var(--border-secondary)] text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider">Expiry</th>
//                                         <th className="px-3 py-3 border-b border-[var(--border-secondary)]"></th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {filteredTokens.length === 0 ? (
//                                         <tr><td colSpan={8} className="px-3 py-8 text-center text-[13px] text-[var(--text-tertiary)]">No tokens found</td></tr>
//                                     ) : (
//                                         filteredTokens.map((token) => (
//                                             <tr key={token.serial} className={`group cursor-pointer transition-colors hover:bg-[var(--bg-tertiary)] border-b border-[var(--border-secondary)] last:border-0 ${selectedTokens.has(token.serial) ? 'bg-[rgba(35,131,226,0.1)]' : ''}`}>
//                                                 <td className="px-3 py-3" onClick={(e) => { e.stopPropagation(); toggleSelection(token.serial); }}>
//                                                     <div className={`w-[18px] h-[18px] rounded-[var(--radius-sm)] border-2 flex items-center justify-center cursor-pointer transition-colors ${selectedTokens.has(token.serial) ? 'border-[var(--accent)] bg-[var(--accent)]' : 'border-[var(--border-primary)] group-hover:border-[var(--accent)]'}`}>
//                                                         <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" className={`w-3 h-3 ${selectedTokens.has(token.serial) ? 'opacity-100' : 'opacity-0'}`}><polyline points="20 6 9 17 4 12"/></svg>
//                                                     </div>
//                                                 </td>
//                                                 <td className="px-3 py-3 font-mono font-medium text-[13px]">{token.serial}</td>
//                                                 <td className="px-3 py-3">
//                                                     <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-[var(--radius-sm)] text-[11px] font-medium border
//                                                         ${token.status === 'available' ? 'bg-[var(--success-bg)] text-[var(--success)] border-[var(--success-border)]' : ''}
//                                                         ${token.status === 'assigned' ? 'bg-[rgba(35,131,226,0.15)] text-[var(--accent)] border-[rgba(35,131,226,0.3)]' : ''}
//                                                         ${token.status === 'suspended' ? 'bg-[var(--warning-bg)] text-[var(--warning)] border-[rgba(251,191,36,0.3)]' : ''}
//                                                         ${token.status === 'revoked' ? 'bg-[var(--error-bg)] text-[var(--error)] border-[rgba(248,113,113,0.3)]' : ''}
//                                                     `}>
//                                                         {capitalize(token.status)}
//                                                     </span>
//                                                 </td>
//                                                 <td className="px-3 py-3">
//                                                     <span className="px-2 py-1 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-sm)] text-[11px] text-[var(--text-secondary)]">{getVendorName(token.vendor)}</span>
//                                                 </td>
//                                                 <td className="px-3 py-3 font-mono text-[11px] text-[var(--text-tertiary)]">{token.batch}</td>
//                                                 <td className="px-3 py-3">
//                                                     {token.user ? (
//                                                         <div className="flex items-center gap-2">
//                                                             <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[var(--accent)] to-purple-500 flex items-center justify-center text-[10px] font-semibold text-white">{getInitials(token.user.name)}</div>
//                                                             <div className="flex flex-col">
//                                                                 <span className="font-medium text-[13px]">{token.user.name}</span>
//                                                                 <span className="text-[11px] font-mono text-[var(--text-tertiary)]">{token.user.id}</span>
//                                                             </div>
//                                                         </div>
//                                                     ) : <span className="text-[var(--text-tertiary)]">—</span>}
//                                                 </td>
//                                                 <td className="px-3 py-3">
//                                                     <div className="flex flex-col gap-0.5">
//                                                         <span className="text-[13px]">{formatDate(token.expiry)}</span>
//                                                         <span className={`text-[11px] ${getExpiryClass(token.expiry)}`}>{getExpiryText(token.expiry)}</span>
//                                                     </div>
//                                                 </td>
//                                                 <td className="px-3 py-3 relative text-right">
//                                                     <button className="p-1.5 rounded-[var(--radius-md)] text-[var(--text-tertiary)] border border-transparent hover:border-[var(--border-primary)] hover:bg-[var(--bg-tertiary)] transition-colors" onClick={(e) => { e.stopPropagation(); setActiveMenu(activeMenu === token.serial ? null : token.serial); }}>
//                                                         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
//                                                     </button>
//                                                     {activeMenu === token.serial && (
//                                                         <div className="absolute right-6 top-8 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] w-48 shadow-2xl z-10 py-1 text-left animate-in fade-in slide-in-from-top-2">
//                                                             <div className="flex items-center gap-2.5 px-3 py-2 text-[13px] text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] cursor-pointer" onClick={() => { setActiveToken(token); setDetailOpen(true); setActiveMenu(null); }}>
//                                                                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[15px] h-[15px]"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg> View Details
//                                                             </div>
//                                                             {token.status === 'available' && (
//                                                                 <div className="flex items-center gap-2.5 px-3 py-2 text-[13px] text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] cursor-pointer" onClick={() => { setActiveToken(token); setAssignOpen(true); setActiveMenu(null); }}>
//                                                                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[15px] h-[15px]"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg> Assign to User
//                                                                 </div>
//                                                             )}
//                                                             {token.status === 'assigned' && (
//                                                                 <>
//                                                                     <div className="flex items-center gap-2.5 px-3 py-2 text-[13px] text-[var(--warning)] hover:bg-[var(--warning-bg)] cursor-pointer" onClick={() => { handleAction(token.serial, 'suspended'); setActiveMenu(null); }}>
//                                                                         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[15px] h-[15px]"><circle cx="12" cy="12" r="10"/><line x1="10" y1="15" x2="10" y2="9"/><line x1="14" y1="15" x2="14" y2="9"/></svg> Suspend Token
//                                                                     </div>
//                                                                     <div className="flex items-center gap-2.5 px-3 py-2 text-[13px] text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] cursor-pointer" onClick={() => { handleAction(token.serial, 'unassign'); setActiveMenu(null); }}>
//                                                                         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[15px] h-[15px]"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="23" y1="11" x2="17" y2="11"/></svg> Unassign
//                                                                     </div>
//                                                                 </>
//                                                             )}
//                                                             {token.status === 'suspended' && (
//                                                                 <div className="flex items-center gap-2.5 px-3 py-2 text-[13px] text-[var(--success)] hover:bg-[var(--success-bg)] cursor-pointer" onClick={() => { handleAction(token.serial, 'available'); setActiveMenu(null); }}>
//                                                                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[15px] h-[15px]"><polygon points="5 3 19 12 5 21 5 3"/></svg> Reactivate
//                                                                 </div>
//                                                             )}
//                                                             <div className="h-px bg-[var(--border-primary)] my-1"></div>
//                                                             <div className="flex items-center gap-2.5 px-3 py-2 text-[13px] text-[var(--error)] hover:bg-[var(--error-bg)] cursor-pointer" onClick={() => { handleAction(token.serial, 'revoked'); setActiveMenu(null); }}>
//                                                                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[15px] h-[15px]"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg> Revoke Token
//                                                             </div>
//                                                         </div>
//                                                     )}
//                                                 </td>
//                                             </tr>
//                                         ))
//                                     )}
//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <ImportModal isOpen={isImportOpen} onClose={() => setImportOpen(false)} onImportSuccess={fetchInventoryData} showToast={showToast} />
//             <DetailModal isOpen={isDetailOpen} onClose={() => setDetailOpen(false)} token={activeToken} showToast={showToast} onSuccess={fetchInventoryData} />
//             <AssignModal isOpen={isAssignOpen} onClose={() => setAssignOpen(false)} tokenSerial={activeToken?.serial} showToast={showToast} onAssignSuccess={fetchInventoryData} />
//             <div className="fixed bottom-6 right-6 z-[2000] flex flex-col gap-3 pointer-events-none">
//                 {toasts.map(toast => (
//                     <div key={toast.id} className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-lg)] px-4 py-3 flex items-center gap-3 shadow-[0_8px_24px_rgba(0,0,0,0.4)] animate-[shake_0.4s_ease]">
//                         <div className={`w-8 h-8 rounded-[var(--radius-md)] flex items-center justify-center 
//                             ${toast.type === 'success' ? 'bg-[var(--success-bg)] text-[var(--success)]' : ''}
//                             ${toast.type === 'error' ? 'bg-[var(--error-bg)] text-[var(--error)]' : ''}
//                             ${toast.type === 'warning' ? 'bg-[var(--warning-bg)] text-[var(--warning)]' : ''}
//                         `}>
//                             {toast.type === 'success' && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px]"><polyline points="20 6 9 17 4 12"/></svg>}
//                             {toast.type === 'error' && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px]"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>}
//                             {toast.type === 'warning' && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px]"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>}
//                         </div>
//                         <div>
//                             <div className="text-[13px] font-semibold text-[var(--text-primary)]">{toast.title}</div>
//                             <div className="text-[12px] text-[var(--text-tertiary)] mt-0.5">{toast.message}</div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }
"use client";
;
;
;
;
;
// Helpers UI
const capitalize = (str)=>str.charAt(0).toUpperCase() + str.slice(1);
const getVendorName = (vendor)=>{
    const v = {
        yubico: 'Yubico',
        feitian: 'Feitian',
        safenet: 'SafeNet'
    };
    return v[vendor] || vendor;
};
const getInitials = (name)=>name.split(' ').map((n)=>n[0]).join('').toUpperCase();
const formatDate = (dateStr)=>new Date(dateStr).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
const getExpiryClass = (dateStr)=>{
    const days = Math.floor((new Date(dateStr).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
    if (days < 0) return 'text-[var(--error)]';
    if (days < 90) return 'text-[var(--warning)]';
    return 'text-[var(--text-tertiary)]';
};
const getExpiryText = (dateStr)=>{
    const days = Math.floor((new Date(dateStr).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
    if (days < 0) return 'Expired';
    if (days < 30) return `${days} days left`;
    if (days < 365) return `${Math.floor(days / 30)} months left`;
    return `${Math.floor(days / 365)} years left`;
};
function TotpInventoryPage() {
    _s();
    const [tokens, setTokens] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        available: 0,
        assigned: 0,
        suspended: 0,
        revoked: 0,
        expiringSoon: 0
    });
    const [selectedTokens, setSelectedTokens] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [activeMenu, setActiveMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Filters
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [statusFilter, setStatusFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [vendorFilter, setVendorFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Modals & Toasts
    const [isImportOpen, setImportOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDetailOpen, setDetailOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAssignOpen, setAssignOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeToken, setActiveToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [toasts, setToasts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // --- FETCH DATA MENGGUNAKAN SERVICE ---
    const fetchInventoryData = async ()=>{
        setIsLoading(true);
        try {
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$adminService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminService"].getTotpInventory();
            if (result.success || result.tokens) {
                const mappedTokens = result.tokens.map((t)=>({
                        serial: t.serialNumber,
                        status: t.status,
                        vendor: t.vendor,
                        batch: t.batchId,
                        user: t.user ? {
                            name: t.user.fullName,
                            id: t.user.id
                        } : null,
                        expiry: t.expiryDate,
                        // Format Last Used
                        lastUsed: t.lastUsedAt ? new Date(t.lastUsedAt).toLocaleString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                        }) : null
                    }));
                setTokens(mappedTokens);
                if (result.stats) setStats(result.stats);
            }
        } catch (err) {
            showToast('error', 'Connection Error', err.response?.data?.error || 'Gagal memuat data');
        } finally{
            setIsLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TotpInventoryPage.useEffect": ()=>{
            fetchInventoryData();
        // PERBAIKAN: Fungsi handleClickOutside via document.addEventListener DIHAPUS 
        // karena menyebabkan Event Bubbling Bug dengan React onClick.
        }
    }["TotpInventoryPage.useEffect"], []);
    // --- LOGIKA AKSI TUNGGAL (CONTEXT MENU) ---
    const handleAction = async (serial, action)=>{
        try {
            if (action === 'unassign') {
                await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$adminService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminService"].unassignTotpToken(serial);
                showToast('success', 'Unassigned', `Token ${serial} telah dilepas`);
            } else {
                await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$adminService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminService"].updateTotpStatus(serial, action);
                showToast('success', 'Status Updated', `Token ${serial} diubah menjadi ${action}`);
            }
            fetchInventoryData();
        } catch (err) {
            showToast('error', 'Action Failed', err.response?.data?.error || 'Terjadi kesalahan sistem');
        }
    };
    // --- LOGIKA AKSI MASSAL (BATCH ACTIONS) ---
    const handleBatchAction = async (action)=>{
        try {
            const serials = Array.from(selectedTokens);
            await Promise.all(serials.map((serial)=>__TURBOPACK__imported__module__$5b$project$5d2f$services$2f$adminService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminService"].updateTotpStatus(serial, action)));
            showToast('success', 'Batch Update Success', `${serials.length} token diubah menjadi ${action}`);
            setSelectedTokens(new Set()); // Bersihkan pilihan
            fetchInventoryData();
        } catch (err) {
            showToast('error', 'Batch Update Failed', err.response?.data?.error || 'Gagal memperbarui beberapa token');
        }
    };
    const filteredTokens = tokens.filter((t)=>{
        const s = searchQuery.toLowerCase();
        return (!s || t.serial.toLowerCase().includes(s) || t.user && t.user.name.toLowerCase().includes(s) || t.batch.toLowerCase().includes(s)) && (!statusFilter || t.status === statusFilter) && (!vendorFilter || t.vendor === vendorFilter);
    });
    const toggleSelection = (serial)=>{
        const newSet = new Set(selectedTokens);
        if (newSet.has(serial)) newSet.delete(serial);
        else newSet.add(serial);
        setSelectedTokens(newSet);
    };
    const toggleAllSelection = ()=>{
        if (selectedTokens.size === filteredTokens.length) setSelectedTokens(new Set());
        else setSelectedTokens(new Set(filteredTokens.map((t)=>t.serial)));
    };
    const handleExport = ()=>{
        if (tokens.length === 0) return showToast('warning', 'Empty Data', 'Tidak ada data untuk diekspor');
        const exportData = tokens.map((t)=>({
                'Serial Number': t.serial,
                'Status': t.status,
                'Vendor': t.vendor,
                'Batch ID': t.batch,
                'Assigned User': t.user ? t.user.name : 'N/A',
                'Expiry Date': new Date(t.expiry).toLocaleDateString(),
                'Last Used': t.lastUsed || 'Never'
            }));
        const worksheet = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].json_to_sheet(exportData);
        const workbook = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].book_new();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(workbook, worksheet, "TOTP_Inventory");
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeFile"](workbook, `TOTP_Inventory_${new Date().toISOString().slice(0, 10)}.xlsx`);
        showToast('success', 'Export Started', 'File Excel berhasil diunduh');
    };
    const showToast = (type, title, message)=>{
        const id = Date.now();
        setToasts((prev)=>[
                ...prev,
                {
                    id,
                    type,
                    title,
                    message
                }
            ]);
        setTimeout(()=>setToasts((prev)=>prev.filter((t)=>t.id !== id)), 4000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 flex flex-col h-full bg-[var(--bg-primary)] overflow-hidden relative",
        children: [
            activeMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[40]",
                onClick: ()=>setActiveMenu(null)
            }, void 0, false, {
                fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                lineNumber: 514,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "px-6 py-3 border-b border-[var(--border-secondary)] flex items-center justify-between bg-[var(--bg-secondary)] shrink-0 h-[60px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[var(--text-tertiary)]",
                                children: "Inventory"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                lineNumber: 523,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[var(--text-muted)]",
                                children: "/"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                lineNumber: 524,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[var(--text-primary)] font-medium",
                                children: "TOTP Tokens"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                lineNumber: 525,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-2 bg-[var(--bg-tertiary)] px-2.5 py-0.5 border border-[var(--border-primary)] rounded-[var(--radius-sm)] text-[11px] text-[var(--text-secondary)] font-medium",
                                children: "Hardware"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                lineNumber: 526,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                        lineNumber: 522,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "flex items-center gap-1.5 px-3.5 py-2 rounded-[var(--radius-md)] text-[13px] font-medium bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-primary)] hover:bg-[var(--bg-hover)] transition-all",
                                onClick: handleExport,
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
                                                fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                lineNumber: 530,
                                                columnNumber: 120
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                points: "7,10 12,15 17,10"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                lineNumber: 530,
                                                columnNumber: 174
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "12",
                                                y1: "15",
                                                x2: "12",
                                                y2: "3"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                lineNumber: 530,
                                                columnNumber: 212
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                        lineNumber: 530,
                                        columnNumber: 25
                                    }, this),
                                    "Export"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                lineNumber: 529,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "flex items-center gap-1.5 px-3.5 py-2 rounded-[var(--radius-md)] text-[13px] font-medium bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-all",
                                onClick: ()=>setImportOpen(true),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        className: "w-4 h-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                lineNumber: 534,
                                                columnNumber: 120
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                points: "17 8 12 3 7 8"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                lineNumber: 534,
                                                columnNumber: 171
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "12",
                                                y1: "3",
                                                x2: "12",
                                                y2: "15"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                lineNumber: 534,
                                                columnNumber: 205
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                        lineNumber: 534,
                                        columnNumber: 25
                                    }, this),
                                    "Import Batch"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                lineNumber: 533,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                        lineNumber: 528,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                lineNumber: 521,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-auto p-6 flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-5 gap-4 mb-6 shrink-0",
                        children: [
                            {
                                label: 'Available',
                                value: stats.available,
                                sub: 'Ready to assign',
                                color: 'bg-[var(--success)]',
                                textColor: 'text-[var(--success)]'
                            },
                            {
                                label: 'Assigned',
                                value: stats.assigned,
                                sub: 'Active users',
                                color: 'bg-[var(--accent)]',
                                textColor: 'text-[var(--accent)]'
                            },
                            {
                                label: 'Suspended',
                                value: stats.suspended,
                                sub: 'Temp disabled',
                                color: 'bg-[var(--warning)]',
                                textColor: 'text-[var(--warning)]'
                            },
                            {
                                label: 'Revoked',
                                value: stats.revoked,
                                sub: 'Permanently disabled',
                                color: 'bg-[var(--error)]',
                                textColor: 'text-[var(--error)]'
                            },
                            {
                                label: 'Expiring Soon',
                                value: stats.expiringSoon,
                                sub: 'Within 90 days',
                                color: 'bg-[var(--text-tertiary)]',
                                textColor: 'text-[var(--text-tertiary)]'
                            }
                        ].map((stat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] p-4 relative overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `absolute top-0 left-0 right-0 h-[3px] ${stat.color}`
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                        lineNumber: 551,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-2",
                                        children: stat.label
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                        lineNumber: 552,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `text-2xl font-bold font-mono ${stat.textColor}`,
                                        children: stat.value
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                        lineNumber: 553,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-[var(--text-tertiary)] mt-1",
                                        children: stat.sub
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                        lineNumber: 554,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                lineNumber: 550,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                        lineNumber: 542,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$totp$2d$inventory$2f$TotpCharts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        tokens: tokens
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                        lineNumber: 559,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-lg)] mb-6 flex-1 flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-5 py-3 border-b border-[var(--border-secondary)] flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[13px] font-semibold flex items-center gap-2.5 text-[var(--text-primary)]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                className: "w-[16px] h-[16px] text-[var(--text-tertiary)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: "3",
                                                        y: "3",
                                                        width: "18",
                                                        height: "18",
                                                        rx: "2",
                                                        ry: "2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                        lineNumber: 565,
                                                        columnNumber: 162
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "3",
                                                        y1: "9",
                                                        x2: "21",
                                                        y2: "9"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                        lineNumber: 565,
                                                        columnNumber: 218
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "9",
                                                        y1: "21",
                                                        x2: "9",
                                                        y2: "9"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                        lineNumber: 565,
                                                        columnNumber: 254
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                lineNumber: 565,
                                                columnNumber: 29
                                            }, this),
                                            "Token Inventory"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                        lineNumber: 564,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "inline-flex items-center gap-1.5 px-3 py-1.5 bg-[var(--bg-tertiary)] hover:bg-[var(--bg-hover)] border border-[var(--border-primary)] rounded-[var(--radius-sm)] text-[12px] font-medium transition-all text-[var(--text-primary)]",
                                        onClick: fetchInventoryData,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                className: `w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                        points: "23 4 23 10 17 10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                        lineNumber: 569,
                                                        columnNumber: 165
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                        points: "1 20 1 14 7 14"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                        lineNumber: 569,
                                                        columnNumber: 202
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                        lineNumber: 569,
                                                        columnNumber: 237
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                lineNumber: 569,
                                                columnNumber: 29
                                            }, this),
                                            isLoading ? 'Loading...' : 'Refresh'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                        lineNumber: 568,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                lineNumber: 563,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-5 flex-1 flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-3 mb-5 flex-wrap shrink-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 min-w-[280px] flex items-center gap-2 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] px-3 py-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        className: "w-4 h-4 text-[var(--text-tertiary)]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: "11",
                                                                cy: "11",
                                                                r: "8"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                lineNumber: 577,
                                                                columnNumber: 156
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "21",
                                                                y1: "21",
                                                                x2: "16.65",
                                                                y2: "16.65"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                lineNumber: 577,
                                                                columnNumber: 187
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                        lineNumber: 577,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        placeholder: "Search by serial number or user...",
                                                        value: searchQuery,
                                                        onChange: (e)=>setSearchQuery(e.target.value),
                                                        className: "w-full bg-transparent border-none outline-none text-[13px] text-[var(--text-primary)] placeholder-[var(--text-tertiary)]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                        lineNumber: 578,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                lineNumber: 576,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: "bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] px-3 py-2 text-[13px] text-[var(--text-primary)] outline-none focus:border-[var(--accent)] cursor-pointer",
                                                value: statusFilter,
                                                onChange: (e)=>setStatusFilter(e.target.value),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "All Status"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                        lineNumber: 581,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "available",
                                                        children: "Available"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                        lineNumber: 581,
                                                        columnNumber: 69
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "assigned",
                                                        children: "Assigned"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                        lineNumber: 581,
                                                        columnNumber: 113
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "suspended",
                                                        children: "Suspended"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                        lineNumber: 581,
                                                        columnNumber: 155
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "revoked",
                                                        children: "Revoked"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                        lineNumber: 581,
                                                        columnNumber: 199
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                lineNumber: 580,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: "bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] px-3 py-2 text-[13px] text-[var(--text-primary)] outline-none focus:border-[var(--accent)] cursor-pointer",
                                                value: vendorFilter,
                                                onChange: (e)=>setVendorFilter(e.target.value),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "All Vendors"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                        lineNumber: 584,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "yubico",
                                                        children: "Yubico"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                        lineNumber: 584,
                                                        columnNumber: 70
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "feitian",
                                                        children: "Feitian"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                        lineNumber: 584,
                                                        columnNumber: 108
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "safenet",
                                                        children: "SafeNet"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                        lineNumber: 584,
                                                        columnNumber: 148
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                lineNumber: 583,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                        lineNumber: 575,
                                        columnNumber: 25
                                    }, this),
                                    selectedTokens.size > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-[rgba(35,131,226,0.1)] border border-[rgba(35,131,226,0.3)] rounded-[var(--radius-md)] p-3 mb-4 flex items-center justify-between shrink-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 text-[13px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-[18px] h-[18px] rounded-[var(--radius-sm)] border-2 border-[var(--accent)] bg-[var(--accent)] flex items-center justify-center cursor-pointer",
                                                        onClick: ()=>setSelectedTokens(new Set()),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            stroke: "white",
                                                            strokeWidth: "3",
                                                            className: "w-3 h-3",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                points: "20 6 9 17 4 12"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                lineNumber: 593,
                                                                columnNumber: 129
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                            lineNumber: 593,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                        lineNumber: 592,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "text-[var(--text-primary)]",
                                                                children: selectedTokens.size
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                lineNumber: 595,
                                                                columnNumber: 43
                                                            }, this),
                                                            " tokens selected"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                        lineNumber: 595,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                lineNumber: 591,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "px-3 py-1.5 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-sm)] text-[12px] font-medium hover:bg-[var(--bg-hover)]",
                                                        onClick: ()=>handleBatchAction('suspended'),
                                                        children: "Suspend"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                        lineNumber: 598,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "px-3 py-1.5 bg-[var(--error-bg)] text-[var(--error)] border border-transparent rounded-[var(--radius-sm)] text-[12px] font-medium hover:bg-[var(--error)] hover:text-white transition-colors",
                                                        onClick: ()=>handleBatchAction('revoked'),
                                                        children: "Revoke"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                        lineNumber: 599,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                lineNumber: 597,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                        lineNumber: 590,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "overflow-x-auto overflow-y-visible flex-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            className: "w-full border-collapse text-left",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-3 py-3 border-b border-[var(--border-secondary)] w-10",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `w-[18px] h-[18px] rounded-[var(--radius-sm)] border-2 flex items-center justify-center cursor-pointer transition-colors ${selectedTokens.size === filteredTokens.length && filteredTokens.length > 0 ? 'border-[var(--accent)] bg-[var(--accent)]' : 'border-[var(--border-primary)] hover:border-[var(--accent)]'}`,
                                                                    onClick: toggleAllSelection,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        viewBox: "0 0 24 24",
                                                                        fill: "none",
                                                                        stroke: "white",
                                                                        strokeWidth: "3",
                                                                        className: `w-3 h-3 ${selectedTokens.size === filteredTokens.length && filteredTokens.length > 0 ? 'opacity-100' : 'opacity-0'}`,
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                            points: "20 6 9 17 4 12"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                            lineNumber: 610,
                                                                            columnNumber: 247
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                        lineNumber: 610,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                    lineNumber: 609,
                                                                    columnNumber: 45
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                lineNumber: 608,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-3 py-3 border-b border-[var(--border-secondary)] text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider",
                                                                children: "Serial Number"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                lineNumber: 613,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-3 py-3 border-b border-[var(--border-secondary)] text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider",
                                                                children: "Status"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                lineNumber: 614,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-3 py-3 border-b border-[var(--border-secondary)] text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider",
                                                                children: "Vendor"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                lineNumber: 615,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-3 py-3 border-b border-[var(--border-secondary)] text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider",
                                                                children: "Batch ID"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                lineNumber: 616,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-3 py-3 border-b border-[var(--border-secondary)] text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider",
                                                                children: "Assigned To"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                lineNumber: 617,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-3 py-3 border-b border-[var(--border-secondary)] text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider",
                                                                children: "Expiry"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                lineNumber: 618,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-3 py-3 border-b border-[var(--border-secondary)] text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider",
                                                                children: "Last Used"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                lineNumber: 619,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-3 py-3 border-b border-[var(--border-secondary)]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                lineNumber: 620,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                        lineNumber: 607,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                    lineNumber: 606,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    children: filteredTokens.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            colSpan: 9,
                                                            className: "px-3 py-8 text-center text-[13px] text-[var(--text-tertiary)]",
                                                            children: "No tokens found"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                            lineNumber: 625,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                        lineNumber: 625,
                                                        columnNumber: 41
                                                    }, this) : filteredTokens.map((token)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: `group cursor-pointer transition-colors hover:bg-[var(--bg-tertiary)] border-b border-[var(--border-secondary)] last:border-0 ${selectedTokens.has(token.serial) ? 'bg-[rgba(35,131,226,0.1)]' : ''}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-3 py-3",
                                                                    onClick: (e)=>{
                                                                        e.stopPropagation();
                                                                        toggleSelection(token.serial);
                                                                    },
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `w-[18px] h-[18px] rounded-[var(--radius-sm)] border-2 flex items-center justify-center cursor-pointer transition-colors ${selectedTokens.has(token.serial) ? 'border-[var(--accent)] bg-[var(--accent)]' : 'border-[var(--border-primary)] group-hover:border-[var(--accent)]'}`,
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            viewBox: "0 0 24 24",
                                                                            fill: "none",
                                                                            stroke: "white",
                                                                            strokeWidth: "3",
                                                                            className: `w-3 h-3 ${selectedTokens.has(token.serial) ? 'opacity-100' : 'opacity-0'}`,
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                                points: "20 6 9 17 4 12"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                                lineNumber: 631,
                                                                                columnNumber: 213
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                            lineNumber: 631,
                                                                            columnNumber: 57
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                        lineNumber: 630,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                    lineNumber: 629,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-3 py-3 font-mono font-medium text-[13px] text-[var(--text-primary)]",
                                                                    children: token.serial
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                    lineNumber: 634,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-3 py-3",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `inline-flex items-center gap-1.5 px-2 py-0.5 rounded-[var(--radius-sm)] text-[11px] font-medium border
                                                        ${token.status === 'available' ? 'bg-[var(--success-bg)] text-[var(--success)] border-[var(--success-border)]' : ''}
                                                        ${token.status === 'assigned' ? 'bg-[rgba(35,131,226,0.15)] text-[var(--accent)] border-[rgba(35,131,226,0.3)]' : ''}
                                                        ${token.status === 'suspended' ? 'bg-[var(--warning-bg)] text-[var(--warning)] border-[rgba(251,191,36,0.3)]' : ''}
                                                        ${token.status === 'revoked' ? 'bg-[var(--error-bg)] text-[var(--error)] border-[rgba(248,113,113,0.3)]' : ''}
                                                    `,
                                                                        children: capitalize(token.status)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                        lineNumber: 636,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                    lineNumber: 635,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-3 py-3",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "px-2 py-1 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-sm)] text-[11px] text-[var(--text-secondary)]",
                                                                        children: getVendorName(token.vendor)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                        lineNumber: 646,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                    lineNumber: 645,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-3 py-3 font-mono text-[11px] text-[var(--text-tertiary)]",
                                                                    children: token.batch
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                    lineNumber: 648,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-3 py-3",
                                                                    children: token.user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "w-6 h-6 rounded-full bg-gradient-to-br from-[var(--accent)] to-purple-500 flex items-center justify-center text-[10px] font-semibold text-white",
                                                                                children: getInitials(token.user.name)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                                lineNumber: 652,
                                                                                columnNumber: 61
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex flex-col",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "font-medium text-[13px] text-[var(--text-primary)]",
                                                                                        children: token.user.name
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                                        lineNumber: 654,
                                                                                        columnNumber: 65
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-[11px] font-mono text-[var(--text-tertiary)]",
                                                                                        children: token.user.id
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                                        lineNumber: 655,
                                                                                        columnNumber: 65
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                                lineNumber: 653,
                                                                                columnNumber: 61
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                        lineNumber: 651,
                                                                        columnNumber: 57
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[var(--text-tertiary)]",
                                                                        children: "—"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                        lineNumber: 658,
                                                                        columnNumber: 57
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                    lineNumber: 649,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-3 py-3",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-col gap-0.5",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[13px] text-[var(--text-primary)]",
                                                                                children: formatDate(token.expiry)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                                lineNumber: 662,
                                                                                columnNumber: 57
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: `text-[11px] ${getExpiryClass(token.expiry)}`,
                                                                                children: getExpiryText(token.expiry)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                                lineNumber: 663,
                                                                                columnNumber: 57
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                        lineNumber: 661,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                    lineNumber: 660,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-3 py-3 text-[13px]",
                                                                    style: {
                                                                        color: token.lastUsed ? 'var(--text-secondary)' : 'var(--text-tertiary)'
                                                                    },
                                                                    children: token.lastUsed || 'Never'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                    lineNumber: 668,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-3 py-3 relative text-right",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            className: "p-1.5 rounded-[var(--radius-md)] text-[var(--text-tertiary)] border border-transparent hover:border-[var(--border-primary)] hover:bg-[var(--bg-tertiary)] transition-colors relative z-10",
                                                                            onClick: (e)=>{
                                                                                e.stopPropagation();
                                                                                setActiveMenu(activeMenu === token.serial ? null : token.serial);
                                                                            },
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                viewBox: "0 0 24 24",
                                                                                fill: "none",
                                                                                stroke: "currentColor",
                                                                                strokeWidth: "2",
                                                                                className: "w-4 h-4",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                                        cx: "12",
                                                                                        cy: "12",
                                                                                        r: "1"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                                        lineNumber: 681,
                                                                                        columnNumber: 152
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                                        cx: "12",
                                                                                        cy: "5",
                                                                                        r: "1"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                                        lineNumber: 681,
                                                                                        columnNumber: 183
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                                        cx: "12",
                                                                                        cy: "19",
                                                                                        r: "1"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                                        lineNumber: 681,
                                                                                        columnNumber: 213
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                                lineNumber: 681,
                                                                                columnNumber: 57
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                            lineNumber: 674,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        activeMenu === token.serial && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "absolute right-6 top-8 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] w-48 shadow-[0_10px_40px_rgba(0,0,0,0.5)] z-[50] py-1 text-left animate-in fade-in slide-in-from-top-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex items-center gap-2.5 px-3 py-2 text-[13px] text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] cursor-pointer",
                                                                                    onClick: (e)=>{
                                                                                        e.stopPropagation();
                                                                                        setActiveToken(token);
                                                                                        setDetailOpen(true);
                                                                                        setActiveMenu(null);
                                                                                    },
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                            viewBox: "0 0 24 24",
                                                                                            fill: "none",
                                                                                            stroke: "currentColor",
                                                                                            strokeWidth: "2",
                                                                                            className: "w-[15px] h-[15px]",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                    d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                                                    lineNumber: 687,
                                                                                                    columnNumber: 170
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                                                    cx: "12",
                                                                                                    cy: "12",
                                                                                                    r: "3"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                                                    lineNumber: 687,
                                                                                                    columnNumber: 226
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                                            lineNumber: 687,
                                                                                            columnNumber: 65
                                                                                        }, this),
                                                                                        " View Details"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                                    lineNumber: 686,
                                                                                    columnNumber: 61
                                                                                }, this),
                                                                                token.status === 'available' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex items-center gap-2.5 px-3 py-2 text-[13px] text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] cursor-pointer",
                                                                                    onClick: (e)=>{
                                                                                        e.stopPropagation();
                                                                                        setActiveToken(token);
                                                                                        setAssignOpen(true);
                                                                                        setActiveMenu(null);
                                                                                    },
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                            viewBox: "0 0 24 24",
                                                                                            fill: "none",
                                                                                            stroke: "currentColor",
                                                                                            strokeWidth: "2",
                                                                                            className: "w-[15px] h-[15px]",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                    d: "M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                                                    lineNumber: 691,
                                                                                                    columnNumber: 174
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                                                    cx: "8.5",
                                                                                                    cy: "7",
                                                                                                    r: "4"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                                                    lineNumber: 691,
                                                                                                    columnNumber: 225
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                                                    x1: "20",
                                                                                                    y1: "8",
                                                                                                    x2: "20",
                                                                                                    y2: "14"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                                                    lineNumber: 691,
                                                                                                    columnNumber: 256
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                                                    x1: "23",
                                                                                                    y1: "11",
                                                                                                    x2: "17",
                                                                                                    y2: "11"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                                                    lineNumber: 691,
                                                                                                    columnNumber: 294
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                                            lineNumber: 691,
                                                                                            columnNumber: 69
                                                                                        }, this),
                                                                                        " Assign to User"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                                    lineNumber: 690,
                                                                                    columnNumber: 65
                                                                                }, this),
                                                                                token.status === 'assigned' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex items-center gap-2.5 px-3 py-2 text-[13px] text-[var(--warning)] hover:bg-[var(--warning-bg)] cursor-pointer",
                                                                                            onClick: (e)=>{
                                                                                                e.stopPropagation();
                                                                                                handleAction(token.serial, 'suspended');
                                                                                                setActiveMenu(null);
                                                                                            },
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                                    viewBox: "0 0 24 24",
                                                                                                    fill: "none",
                                                                                                    stroke: "currentColor",
                                                                                                    strokeWidth: "2",
                                                                                                    className: "w-[15px] h-[15px]",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                                                            cx: "12",
                                                                                                            cy: "12",
                                                                                                            r: "10"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                                                            lineNumber: 697,
                                                                                                            columnNumber: 178
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                                                            x1: "10",
                                                                                                            y1: "15",
                                                                                                            x2: "10",
                                                                                                            y2: "9"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                                                            lineNumber: 697,
                                                                                                            columnNumber: 210
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                                                            x1: "14",
                                                                                                            y1: "15",
                                                                                                            x2: "14",
                                                                                                            y2: "9"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                                                            lineNumber: 697,
                                                                                                            columnNumber: 248
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                                                    lineNumber: 697,
                                                                                                    columnNumber: 73
                                                                                                }, this),
                                                                                                " Suspend Token"
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                                            lineNumber: 696,
                                                                                            columnNumber: 69
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex items-center gap-2.5 px-3 py-2 text-[13px] text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] cursor-pointer",
                                                                                            onClick: (e)=>{
                                                                                                e.stopPropagation();
                                                                                                handleAction(token.serial, 'unassign');
                                                                                                setActiveMenu(null);
                                                                                            },
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                                    viewBox: "0 0 24 24",
                                                                                                    fill: "none",
                                                                                                    stroke: "currentColor",
                                                                                                    strokeWidth: "2",
                                                                                                    className: "w-[15px] h-[15px]",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                            d: "M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                                                            lineNumber: 700,
                                                                                                            columnNumber: 178
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                                                            cx: "8.5",
                                                                                                            cy: "7",
                                                                                                            r: "4"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                                                            lineNumber: 700,
                                                                                                            columnNumber: 229
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                                                            x1: "23",
                                                                                                            y1: "11",
                                                                                                            x2: "17",
                                                                                                            y2: "11"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                                                            lineNumber: 700,
                                                                                                            columnNumber: 260
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                                                    lineNumber: 700,
                                                                                                    columnNumber: 73
                                                                                                }, this),
                                                                                                " Unassign"
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                                            lineNumber: 699,
                                                                                            columnNumber: 69
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true),
                                                                                token.status === 'suspended' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex items-center gap-2.5 px-3 py-2 text-[13px] text-[var(--success)] hover:bg-[var(--success-bg)] cursor-pointer",
                                                                                    onClick: (e)=>{
                                                                                        e.stopPropagation();
                                                                                        handleAction(token.serial, 'available');
                                                                                        setActiveMenu(null);
                                                                                    },
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                            viewBox: "0 0 24 24",
                                                                                            fill: "none",
                                                                                            stroke: "currentColor",
                                                                                            strokeWidth: "2",
                                                                                            className: "w-[15px] h-[15px]",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                                                                                points: "5 3 19 12 5 21 5 3"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                                                lineNumber: 706,
                                                                                                columnNumber: 174
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                                            lineNumber: 706,
                                                                                            columnNumber: 69
                                                                                        }, this),
                                                                                        " Reactivate"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                                    lineNumber: 705,
                                                                                    columnNumber: 65
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "h-px bg-[var(--border-primary)] my-1"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                                    lineNumber: 709,
                                                                                    columnNumber: 61
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex items-center gap-2.5 px-3 py-2 text-[13px] text-[var(--error)] hover:bg-[var(--error-bg)] cursor-pointer",
                                                                                    onClick: (e)=>{
                                                                                        e.stopPropagation();
                                                                                        handleAction(token.serial, 'revoked');
                                                                                        setActiveMenu(null);
                                                                                    },
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                            viewBox: "0 0 24 24",
                                                                                            fill: "none",
                                                                                            stroke: "currentColor",
                                                                                            strokeWidth: "2",
                                                                                            className: "w-[15px] h-[15px]",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                                                    cx: "12",
                                                                                                    cy: "12",
                                                                                                    r: "10"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                                                    lineNumber: 711,
                                                                                                    columnNumber: 170
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                                                    x1: "15",
                                                                                                    y1: "9",
                                                                                                    x2: "9",
                                                                                                    y2: "15"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                                                    lineNumber: 711,
                                                                                                    columnNumber: 202
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                                                    x1: "9",
                                                                                                    y1: "9",
                                                                                                    x2: "15",
                                                                                                    y2: "15"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                                                    lineNumber: 711,
                                                                                                    columnNumber: 239
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                                            lineNumber: 711,
                                                                                            columnNumber: 65
                                                                                        }, this),
                                                                                        " Revoke Token"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                                    lineNumber: 710,
                                                                                    columnNumber: 61
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                            lineNumber: 685,
                                                                            columnNumber: 57
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                                    lineNumber: 673,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, token.serial, true, {
                                                            fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                            lineNumber: 628,
                                                            columnNumber: 45
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                    lineNumber: 623,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                            lineNumber: 605,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                        lineNumber: 604,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                lineNumber: 574,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                        lineNumber: 562,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                lineNumber: 541,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$totp$2d$inventory$2f$TotpModals$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImportModal"], {
                isOpen: isImportOpen,
                onClose: ()=>setImportOpen(false),
                onImportSuccess: fetchInventoryData,
                showToast: showToast
            }, void 0, false, {
                fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                lineNumber: 726,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$totp$2d$inventory$2f$TotpModals$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DetailModal"], {
                isOpen: isDetailOpen,
                onClose: ()=>setDetailOpen(false),
                token: activeToken,
                showToast: showToast,
                onSuccess: fetchInventoryData
            }, void 0, false, {
                fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                lineNumber: 727,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$totp$2d$inventory$2f$TotpModals$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssignModal"], {
                isOpen: isAssignOpen,
                onClose: ()=>setAssignOpen(false),
                tokenSerial: activeToken?.serial,
                showToast: showToast,
                onAssignSuccess: fetchInventoryData
            }, void 0, false, {
                fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                lineNumber: 728,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-6 right-6 z-[2000] flex flex-col gap-3 pointer-events-none",
                children: toasts.map((toast)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-lg)] px-4 py-3 flex items-center gap-3 shadow-[0_8px_24px_rgba(0,0,0,0.4)] animate-[shake_0.4s_ease]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-8 h-8 rounded-[var(--radius-md)] flex items-center justify-center 
                            ${toast.type === 'success' ? 'bg-[var(--success-bg)] text-[var(--success)]' : ''}
                            ${toast.type === 'error' ? 'bg-[var(--error-bg)] text-[var(--error)]' : ''}
                            ${toast.type === 'warning' ? 'bg-[var(--warning-bg)] text-[var(--warning)]' : ''}
                        `,
                                children: [
                                    toast.type === 'success' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        className: "w-[18px] h-[18px]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                            points: "20 6 9 17 4 12"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                            lineNumber: 738,
                                            columnNumber: 163
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                        lineNumber: 738,
                                        columnNumber: 58
                                    }, this),
                                    toast.type === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        className: "w-[18px] h-[18px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "18",
                                                y1: "6",
                                                x2: "6",
                                                y2: "18"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                lineNumber: 739,
                                                columnNumber: 161
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "6",
                                                y1: "6",
                                                x2: "18",
                                                y2: "18"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                lineNumber: 739,
                                                columnNumber: 198
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                        lineNumber: 739,
                                        columnNumber: 56
                                    }, this),
                                    toast.type === 'warning' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        className: "w-[18px] h-[18px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                lineNumber: 740,
                                                columnNumber: 163
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "12",
                                                y1: "9",
                                                x2: "12",
                                                y2: "13"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                lineNumber: 740,
                                                columnNumber: 258
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "12",
                                                y1: "17",
                                                x2: "12.01",
                                                y2: "17"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                                lineNumber: 740,
                                                columnNumber: 296
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                        lineNumber: 740,
                                        columnNumber: 58
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                lineNumber: 733,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[13px] font-semibold text-[var(--text-primary)]",
                                        children: toast.title
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                        lineNumber: 743,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[12px] text-[var(--text-tertiary)] mt-0.5",
                                        children: toast.message
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                        lineNumber: 744,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                                lineNumber: 742,
                                columnNumber: 25
                            }, this)
                        ]
                    }, toast.id, true, {
                        fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                        lineNumber: 732,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
                lineNumber: 730,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/totp-inventory/page.tsx",
        lineNumber: 510,
        columnNumber: 9
    }, this);
}
_s(TotpInventoryPage, "IHzZQTph6GXUSK23laFqNTnecpA=");
_c = TotpInventoryPage;
var _c;
__turbopack_context__.k.register(_c, "TotpInventoryPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_05e2d6b8._.js.map