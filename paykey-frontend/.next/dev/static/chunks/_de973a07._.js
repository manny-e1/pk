(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/investigation/EvidencePanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EvidencePanel",
    ()=>EvidencePanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// import React from 'react';
// export function EvidencePanel() {
//   return (
//     <div className="w-[340px] bg-[var(--bg-secondary)] border-l border-[var(--border-primary)] flex flex-col shrink-0">
//       {/* Header Panel */}
//       <div className="px-4 py-3.5 border-b border-[var(--border-primary)]">
//         <div className="text-[13px] font-semibold text-[var(--text-primary)] flex items-center gap-2">
//           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[var(--text-tertiary)]"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
//           Evidence Data
//         </div>
//         <div className="text-[10px] text-[var(--text-tertiary)] mt-0.5 ml-6">Input for AI analysis</div>
//       </div>
//       {/* Body */}
//       <div className="flex-1 overflow-y-auto p-3.5 custom-scrollbar">
//         {/* Data Indicator */}
//         <div className="flex items-center gap-1.5 p-2 bg-[var(--bg-primary)] rounded-md mb-4 text-[10px] text-[var(--text-tertiary)]">
//           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3 text-[var(--accent)]"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
//           Raw data sent to Claude — no ML pre-processing
//         </div>
//         {/* Transaction Card */}
//         <div className="mb-4">
//           <div className="text-[10px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wide mb-2 flex items-center gap-1.5">
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg> TRANSACTION
//           </div>
//           <div className="bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-md p-3">
//             <div className="flex items-center justify-between mb-2">
//               <span className="text-xs font-semibold text-[var(--text-primary)]">TXN_892847</span>
//               <span className="text-[9px] px-1.5 py-0.5 bg-[var(--warning-bg)] text-[var(--warning)] rounded font-bold">Under Review</span>
//             </div>
//             <div className="space-y-1">
//               <div className="flex justify-between text-[11px]"><span className="text-[var(--text-tertiary)]">Amount</span><span className="font-medium text-[var(--error)]">MYR 4,250.00</span></div>
//               <div className="flex justify-between text-[11px]"><span className="text-[var(--text-tertiary)]">Merchant</span><span className="font-medium text-[var(--text-primary)]">Electronics Hub</span></div>
//               <div className="flex justify-between text-[11px]"><span className="text-[var(--text-tertiary)]">Category</span><span className="font-medium text-[var(--text-primary)]">Electronics</span></div>
//               <div className="flex justify-between text-[11px]"><span className="text-[var(--text-tertiary)]">Location</span><span className="font-medium text-[var(--error)]">Bangkok, TH</span></div>
//               <div className="flex justify-between text-[11px]"><span className="text-[var(--text-tertiary)]">Time</span><span className="font-medium text-[var(--text-primary)] font-mono text-[10px]">14:32:15</span></div>
//               <div className="flex justify-between text-[11px]"><span className="text-[var(--text-tertiary)]">Auth</span><span className="font-medium text-[var(--warning)]">Challenged</span></div>
//             </div>
//           </div>
//         </div>
//         {/* User Card */}
//         <div className="mb-4">
//           <div className="text-[10px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wide mb-2 flex items-center gap-1.5">
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> USER PROFILE
//           </div>
//           <div className="bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-md p-3">
//             <div className="flex justify-between mb-2"><span className="text-xs font-semibold text-[var(--text-primary)]">John Davidson</span></div>
//             <div className="space-y-1">
//               <div className="flex justify-between text-[11px]"><span className="text-[var(--text-tertiary)]">User ID</span><span className="font-medium text-[var(--text-primary)] font-mono text-[10px]">USR_8847291</span></div>
//               <div className="flex justify-between text-[11px]"><span className="text-[var(--text-tertiary)]">Account Age</span><span className="font-medium text-[var(--text-primary)]">295 days</span></div>
//               <div className="flex justify-between text-[11px]"><span className="text-[var(--text-tertiary)]">Usual Loc</span><span className="font-medium text-[var(--text-primary)]">KL, Singapore</span></div>
//               <div className="flex justify-between text-[11px]"><span className="text-[var(--text-tertiary)]">Avg Txn</span><span className="font-medium text-[var(--text-primary)]">MYR 179.79</span></div>
//               <div className="flex justify-between text-[11px]"><span className="text-[var(--text-tertiary)]">30d Total</span><span className="font-medium text-[var(--text-primary)]">MYR 8,450</span></div>
//             </div>
//           </div>
//         </div>
//         {/* Device Card */}
//         <div className="mb-4">
//           <div className="text-[10px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wide mb-2 flex items-center gap-1.5">
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg> DEVICE
//           </div>
//           <div className="bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-md p-3">
//             <div className="flex items-center justify-between mb-2">
//               <span className="text-xs font-semibold text-[var(--text-primary)]">iPhone 15 Pro</span>
//               <span className="text-[9px] px-1.5 py-0.5 bg-[var(--success-bg)] text-[var(--success)] rounded font-bold">Known</span>
//             </div>
//             <div className="space-y-1">
//               <div className="flex justify-between text-[11px]"><span className="text-[var(--text-tertiary)]">Registered</span><span className="font-medium text-[var(--text-primary)]">Nov 15, 2024</span></div>
//               <div className="flex justify-between text-[11px]"><span className="text-[var(--text-tertiary)]">Total Auths</span><span className="font-medium text-[var(--success)]">234</span></div>
//               <div className="flex justify-between text-[11px]"><span className="text-[var(--text-tertiary)]">Last Used</span><span className="font-medium text-[var(--text-primary)] font-mono text-[10px]">09:15 @ KL</span></div>
//               <div className="flex justify-between text-[11px]"><span className="text-[var(--text-tertiary)]">Current</span><span className="font-medium text-[var(--error)]">Bangkok</span></div>
//             </div>
//           </div>
//         </div>
//         {/* Recent Activity */}
//         <div className="mb-4">
//           <div className="text-[10px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wide mb-2 flex items-center gap-1.5">
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> RECENT ACTIVITY
//           </div>
//           <div className="bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-md py-2 px-3">
//             {[
//               { dot: 'bg-[var(--error)]', act: 'Payment Attempt', t: '14:32', det: 'Electronics Hub · Bangkok', amt: 'MYR 4,250 · Challenged' },
//               { dot: 'bg-[var(--warning)]', act: 'Payment', t: '14:28', det: 'Travel Co · Bangkok', amt: 'MYR 890' },
//               { dot: 'bg-[var(--warning)]', act: 'Payment', t: '14:15', det: 'Travel Co · Bangkok', amt: 'MYR 450' },
//               { dot: 'bg-[var(--success)]', act: 'Login', t: '09:15', det: 'iPhone 15 Pro · KL', amt: '' },
//               { dot: 'bg-[var(--success)]', act: 'Payment', t: 'Yest 18:45', det: 'Grab Food · KL', amt: 'MYR 85.50' }
//             ].map((a, i) => (
//               <div key={i} className="flex gap-2 py-2 border-b border-[var(--border-primary)] last:border-0">
//                 <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${a.dot}`}></div>
//                 <div className="flex-1 min-w-0">
//                   <div className="flex justify-between items-center mb-0.5">
//                     <span className="text-[11px] font-medium text-[var(--text-primary)]">{a.act}</span>
//                     <span className="text-[9px] text-[var(--text-tertiary)] font-mono">{a.t}</span>
//                   </div>
//                   <div className="text-[10px] text-[var(--text-tertiary)]">{a.det}</div>
//                   {a.amt && <div className="text-[10px] text-[var(--text-secondary)]">{a.amt}</div>}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
'use client';
;
function EvidencePanel({ data }) {
    // State Loading / Empty Data
    if (!data) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-[340px] bg-[var(--bg-secondary)] border-l border-[var(--border-primary)] flex flex-col items-center justify-center text-[var(--text-tertiary)] text-xs h-full shrink-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-5 h-5 border-2 border-[var(--border-primary)] border-t-[var(--accent)] rounded-full animate-spin"
                }, void 0, false, {
                    fileName: "[project]/components/investigation/EvidencePanel.tsx",
                    lineNumber: 126,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Loading database records..."
                }, void 0, false, {
                    fileName: "[project]/components/investigation/EvidencePanel.tsx",
                    lineNumber: 127,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/investigation/EvidencePanel.tsx",
            lineNumber: 125,
            columnNumber: 11
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/investigation/EvidencePanel.tsx",
        lineNumber: 124,
        columnNumber: 7
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-[340px] bg-[var(--bg-secondary)] border-l border-[var(--border-primary)] flex flex-col shrink-0 h-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-3.5 border-b border-[var(--border-primary)] shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[13px] font-semibold text-[var(--text-primary)] flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                className: "w-4 h-4 text-[var(--text-tertiary)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"
                                    }, void 0, false, {
                                        fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                        lineNumber: 137,
                                        columnNumber: 134
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                        points: "14 2 14 8 20 8"
                                    }, void 0, false, {
                                        fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                        lineNumber: 137,
                                        columnNumber: 199
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this),
                            "Evidence Data"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/investigation/EvidencePanel.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[10px] text-[var(--text-tertiary)] mt-0.5 ml-6",
                        children: "Source: Real-time Database"
                    }, void 0, false, {
                        fileName: "[project]/components/investigation/EvidencePanel.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/investigation/EvidencePanel.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto p-3.5 custom-scrollbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5 p-2 bg-[var(--bg-primary)] rounded-md mb-4 text-[10px] text-[var(--text-tertiary)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                className: "w-3 h-3 text-[var(--accent)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "12",
                                        cy: "12",
                                        r: "10"
                                    }, void 0, false, {
                                        fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                        lineNumber: 147,
                                        columnNumber: 127
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M12 16v-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                        lineNumber: 147,
                                        columnNumber: 159
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M12 8h.01"
                                    }, void 0, false, {
                                        fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                        lineNumber: 147,
                                        columnNumber: 180
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                lineNumber: 147,
                                columnNumber: 11
                            }, this),
                            "Raw data sent to Claude — no ML pre-processing"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/investigation/EvidencePanel.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this),
                    data.transaction && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[10px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wide mb-2 flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        className: "w-3 h-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "1",
                                                y: "4",
                                                width: "22",
                                                height: "16",
                                                rx: "2"
                                            }, void 0, false, {
                                                fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                                lineNumber: 155,
                                                columnNumber: 112
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "1",
                                                y1: "10",
                                                x2: "23",
                                                y2: "10"
                                            }, void 0, false, {
                                                fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                                lineNumber: 155,
                                                columnNumber: 161
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                        lineNumber: 155,
                                        columnNumber: 17
                                    }, this),
                                    " TRANSACTION"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                lineNumber: 154,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-md p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-semibold text-[var(--text-primary)]",
                                                children: data.transaction.id
                                            }, void 0, false, {
                                                fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                                lineNumber: 159,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[9px] px-1.5 py-0.5 bg-[var(--warning-bg)] text-[var(--warning)] rounded font-bold",
                                                children: "Under Review"
                                            }, void 0, false, {
                                                fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                                lineNumber: 160,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                        lineNumber: 158,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-[11px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[var(--text-tertiary)]",
                                                        children: "Amount"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                                        lineNumber: 163,
                                                        columnNumber: 67
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium text-[var(--error)]",
                                                        children: [
                                                            data.transaction.currency,
                                                            " ",
                                                            data.transaction.amount?.toLocaleString()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                                        lineNumber: 163,
                                                        columnNumber: 126
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                                lineNumber: 163,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-[11px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[var(--text-tertiary)]",
                                                        children: "Merchant"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 67
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium text-[var(--text-primary)]",
                                                        children: data.transaction.merchant_name
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 128
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                                lineNumber: 164,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-[11px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[var(--text-tertiary)]",
                                                        children: "Category"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                                        lineNumber: 165,
                                                        columnNumber: 67
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium text-[var(--text-primary)] capitalize",
                                                        children: data.transaction.merchant_category
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                                        lineNumber: 165,
                                                        columnNumber: 128
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                                lineNumber: 165,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-[11px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[var(--text-tertiary)]",
                                                        children: "Location"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 67
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium text-[var(--error)]",
                                                        children: [
                                                            data.transaction.location?.city,
                                                            ", ",
                                                            data.transaction.location?.country
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 128
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                                lineNumber: 166,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-[11px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[var(--text-tertiary)]",
                                                        children: "Time"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                                        lineNumber: 167,
                                                        columnNumber: 67
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium text-[var(--text-primary)] font-mono text-[10px]",
                                                        children: data.transaction.timestamp ? new Date(data.transaction.timestamp).toLocaleTimeString() : 'N/A'
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                                        lineNumber: 167,
                                                        columnNumber: 124
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                                lineNumber: 167,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-[11px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[var(--text-tertiary)]",
                                                        children: "Auth"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                                        lineNumber: 168,
                                                        columnNumber: 67
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium text-[var(--warning)]",
                                                        children: data.transaction.auth_result
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                                        lineNumber: 168,
                                                        columnNumber: 124
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                                lineNumber: 168,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                        lineNumber: 162,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                lineNumber: 157,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/investigation/EvidencePanel.tsx",
                        lineNumber: 153,
                        columnNumber: 13
                    }, this),
                    data.user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[10px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wide mb-2 flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        className: "w-3 h-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"
                                            }, void 0, false, {
                                                fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                                lineNumber: 178,
                                                columnNumber: 112
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "12",
                                                cy: "7",
                                                r: "4"
                                            }, void 0, false, {
                                                fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                                lineNumber: 178,
                                                columnNumber: 163
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                        lineNumber: 178,
                                        columnNumber: 17
                                    }, this),
                                    " USER PROFILE"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                lineNumber: 177,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-md p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between mb-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-semibold text-[var(--text-primary)]",
                                            children: data.user.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                            lineNumber: 181,
                                            columnNumber: 60
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                        lineNumber: 181,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-[11px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[var(--text-tertiary)]",
                                                        children: "User ID"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                                        lineNumber: 183,
                                                        columnNumber: 67
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium text-[var(--text-primary)] font-mono text-[10px]",
                                                        children: data.user.id
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                                        lineNumber: 183,
                                                        columnNumber: 127
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                                lineNumber: 183,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-[11px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[var(--text-tertiary)]",
                                                        children: "Account Age"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                                        lineNumber: 184,
                                                        columnNumber: 67
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium text-[var(--text-primary)]",
                                                        children: [
                                                            data.user.account_age_days,
                                                            " days"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                                        lineNumber: 184,
                                                        columnNumber: 131
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                                lineNumber: 184,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-[11px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[var(--text-tertiary)]",
                                                        children: "Usual Loc"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                                        lineNumber: 185,
                                                        columnNumber: 67
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium text-[var(--text-primary)] truncate max-w-[150px]",
                                                        children: data.user.typical_locations?.slice(0, 2).join(', ') || 'N/A'
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                                        lineNumber: 185,
                                                        columnNumber: 129
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                                lineNumber: 185,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-[11px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[var(--text-tertiary)]",
                                                        children: "Avg Txn"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                                        lineNumber: 186,
                                                        columnNumber: 67
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium text-[var(--text-primary)]",
                                                        children: [
                                                            data.transaction.currency,
                                                            " ",
                                                            data.user.transaction_stats_30d?.average_amount?.toLocaleString(undefined, {
                                                                maximumFractionDigits: 2
                                                            })
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                                        lineNumber: 186,
                                                        columnNumber: 127
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                                lineNumber: 186,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-[11px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[var(--text-tertiary)]",
                                                        children: "30d Count"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 67
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium text-[var(--text-primary)]",
                                                        children: [
                                                            data.user.transaction_stats_30d?.count,
                                                            " txns"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 129
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                                lineNumber: 187,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                        lineNumber: 182,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                lineNumber: 180,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/investigation/EvidencePanel.tsx",
                        lineNumber: 176,
                        columnNumber: 13
                    }, this),
                    data.device && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[10px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wide mb-2 flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        className: "w-3 h-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "5",
                                                y: "2",
                                                width: "14",
                                                height: "20",
                                                rx: "2"
                                            }, void 0, false, {
                                                fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                                lineNumber: 197,
                                                columnNumber: 112
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "12",
                                                y1: "18",
                                                x2: "12.01",
                                                y2: "18"
                                            }, void 0, false, {
                                                fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                                lineNumber: 197,
                                                columnNumber: 161
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                        lineNumber: 197,
                                        columnNumber: 17
                                    }, this),
                                    " DEVICE"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                lineNumber: 196,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-md p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-semibold text-[var(--text-primary)]",
                                                children: data.device.device_name
                                            }, void 0, false, {
                                                fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                                lineNumber: 201,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-[9px] px-1.5 py-0.5 rounded font-bold ${data.device.is_known_device ? 'bg-[var(--success-bg)] text-[var(--success)]' : 'bg-[var(--warning-bg)] text-[var(--warning)]'}`,
                                                children: data.device.is_known_device ? 'Known' : 'New'
                                            }, void 0, false, {
                                                fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                                lineNumber: 202,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                        lineNumber: 200,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between text-[11px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[var(--text-tertiary)]",
                                                    children: "Last Used"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                                    lineNumber: 209,
                                                    columnNumber: 67
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium text-[var(--text-primary)] font-mono text-[10px]",
                                                    children: data.device.last_used_before_this
                                                }, void 0, false, {
                                                    fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                                    lineNumber: 209,
                                                    columnNumber: 129
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                            lineNumber: 209,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                        lineNumber: 206,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                lineNumber: 199,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/investigation/EvidencePanel.tsx",
                        lineNumber: 195,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[10px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wide mb-2 flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        className: "w-3 h-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "12",
                                                cy: "12",
                                                r: "10"
                                            }, void 0, false, {
                                                fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                                lineNumber: 218,
                                                columnNumber: 108
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                points: "12 6 12 12 16 14"
                                            }, void 0, false, {
                                                fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                                lineNumber: 218,
                                                columnNumber: 140
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                        lineNumber: 218,
                                        columnNumber: 13
                                    }, this),
                                    " RECENT ACTIVITY (DB)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                lineNumber: 217,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-md py-2 px-3",
                                children: (data.recent_activity || []).length > 0 ? (data.recent_activity || []).map((a, i)=>{
                                    // Logic pewarnaan dot berdasarkan status
                                    let dot = 'bg-[var(--text-tertiary)]';
                                    const status = (a.status || '').toLowerCase();
                                    if (status.includes('success')) dot = 'bg-[var(--success)]';
                                    else if (status.includes('challenged')) dot = 'bg-[var(--warning)]';
                                    else if (status.includes('failed') || status.includes('denied') || status.includes('blocked')) dot = 'bg-[var(--error)]';
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2 py-2 border-b border-[var(--border-primary)] last:border-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${dot}`
                                            }, void 0, false, {
                                                fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                                lineNumber: 235,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center mb-0.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[11px] font-medium text-[var(--text-primary)] capitalize",
                                                                children: (a.action || 'Unknown').replace(/_/g, ' ')
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                                                lineNumber: 238,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[9px] text-[var(--text-tertiary)] font-mono",
                                                                children: a.timestamp ? new Date(a.timestamp).toLocaleTimeString([], {
                                                                    hour: '2-digit',
                                                                    minute: '2-digit'
                                                                }) : ''
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                                                lineNumber: 241,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                                        lineNumber: 237,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] text-[var(--text-tertiary)] truncate",
                                                        children: [
                                                            a.merchant || a.device || 'N/A',
                                                            " · ",
                                                            a.location || 'Unknown Loc'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                                        lineNumber: 245,
                                                        columnNumber: 25
                                                    }, this),
                                                    a.amount ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] text-[var(--text-secondary)]",
                                                        children: [
                                                            data.transaction?.currency || 'MYR',
                                                            " ",
                                                            a.amount.toLocaleString(),
                                                            " · ",
                                                            a.status
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                                        lineNumber: 249,
                                                        columnNumber: 30
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] text-[var(--text-secondary)] capitalize",
                                                        children: a.status
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                                        lineNumber: 253,
                                                        columnNumber: 30
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                                lineNumber: 236,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                        lineNumber: 234,
                                        columnNumber: 21
                                    }, this);
                                }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[11px] text-[var(--text-tertiary)] text-center py-2",
                                    children: "No recent activity found in database (Last 48h)."
                                }, void 0, false, {
                                    fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                    lineNumber: 260,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/investigation/EvidencePanel.tsx",
                                lineNumber: 220,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/investigation/EvidencePanel.tsx",
                        lineNumber: 216,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/investigation/EvidencePanel.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/investigation/EvidencePanel.tsx",
        lineNumber: 133,
        columnNumber: 5
    }, this);
}
_c = EvidencePanel;
var _c;
__turbopack_context__.k.register(_c, "EvidencePanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/investigation/AnalysisResults.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnalysisResults",
    ()=>AnalysisResults
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// import React from 'react';
// export function AnalysisResults() {
//   return (
//     <div className="space-y-6 animate-in fade-in duration-500">
//       {/* Anomalies */}
//       <div className="analysis-section">
//         <div className="flex items-center gap-2.5 mb-3">
//           <div className="w-7 h-7 bg-[var(--error-bg)] text-[var(--error)] rounded-md flex items-center justify-center">
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/></svg>
//           </div>
//           <div className="text-[13px] font-semibold text-[var(--text-primary)]">Anomalies Detected</div>
//         </div>
//         <div className="flex flex-col gap-2">
//           {[
//             { badge: 'LOCATION', color: 'text-[var(--purple)] bg-[var(--purple-bg)]', text: 'Transaction from Bangkok while last known location was Kuala Lumpur 5 hours earlier. The 1,200km distance makes this timeline highly suspicious.', severity: 'high', border: 'border-l-[var(--error)]' },
//             { badge: 'AMOUNT', color: 'text-[var(--warning)] bg-[var(--warning-bg)]', text: 'Amount of MYR 4,250 is 23.6x above user\'s average of MYR 179.79 and exceeds historical max of MYR 520.', severity: 'high', border: 'border-l-[var(--error)]' },
//             { badge: 'VELOCITY', color: 'text-[var(--cyan)] bg-[var(--cyan-bg)]', text: '3 transactions totaling MYR 5,590 in 17 minutes vs normal pattern of ~2 per day.', severity: 'medium', border: 'border-l-[var(--warning)]' },
//             { badge: 'MERCHANT', color: 'text-[var(--success)] bg-[var(--success-bg)]', text: 'First electronics purchase. User typically shops at grocery, food delivery.', severity: 'medium', border: 'border-l-[var(--success)]' }
//           ].map((a, i) => (
//             <div key={i} className={`bg-[var(--bg-secondary)] border border-[var(--border-primary)] border-l-[3px] ${a.border} rounded-lg p-3 flex gap-2.5`}>
//               <span className={`h-fit px-2 py-0.5 rounded text-[10px] font-bold uppercase shrink-0 ${a.color}`}>{a.badge}</span>
//               <div>
//                 <div className="text-xs text-[var(--text-primary)] leading-relaxed">{a.text}</div>
//                 <div className="text-[10px] text-[var(--text-tertiary)] mt-1">Severity: {a.severity}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       {/* Findings */}
//       <div className="analysis-section">
//         <div className="flex items-center gap-2.5 mb-3">
//           <div className="w-7 h-7 bg-[var(--accent-bg)] text-[var(--accent)] rounded-md flex items-center justify-center"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></div>
//           <div className="text-[13px] font-semibold text-[var(--text-primary)]">Key Findings</div>
//         </div>
//         <div className="grid grid-cols-2 gap-3">
//           <div className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] border-l-[3px] border-l-[var(--error)] rounded-lg p-3">
//             <div className="text-[10px] font-bold text-[var(--error)] uppercase tracking-wide mb-2 flex items-center gap-1.5"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg> SUSPICIOUS</div>
//             <ul className="space-y-1.5">{["Impossible travel: KL to Bangkok in 5 hours", "Transaction 23.6x above average", "3 rapid transactions in 17 minutes", "First-ever electronics purchase"].map((t,i)=><li key={i} className="text-[11px] text-[var(--text-secondary)] flex gap-1.5 leading-snug"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3 text-[var(--error)] flex-shrink-0 mt-[2px]"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/></svg>{t}</li>)}</ul>
//           </div>
//           <div className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] border-l-[3px] border-l-[var(--success)] rounded-lg p-3">
//             <div className="text-[10px] font-bold text-[var(--success)] uppercase tracking-wide mb-2 flex items-center gap-1.5"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> MITIGATING</div>
//             <ul className="space-y-1.5">{["Known device with 234 prior auths", "FIDO2 biometric passed", "Account is 295 days old"].map((t,i)=><li key={i} className="text-[11px] text-[var(--text-secondary)] flex gap-1.5 leading-snug"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3 text-[var(--success)] flex-shrink-0 mt-[2px]"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>{t}</li>)}</ul>
//           </div>
//         </div>
//       </div>
//       {/* Timeline */}
//       <div className="analysis-section">
//         <div className="flex items-center gap-2.5 mb-3">
//           <div className="w-7 h-7 bg-[var(--purple-bg)] text-[var(--purple)] rounded-md flex items-center justify-center"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
//           <div className="text-[13px] font-semibold text-[var(--text-primary)]">Timeline Reconstruction</div>
//         </div>
//         <div className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg p-3.5">
//           <div className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3.5 pb-3.5 border-b border-[var(--border-primary)]">
//             At 09:15, legitimate login from KL. Device appears in Bangkok at 14:15 making rapid purchases. Given travel time requirements, this is physically implausible.
//           </div>
//           <div className="space-y-1">
//             {[
//               { t: '09:15', e: 'Login from Kuala Lumpur', r: 'low', c: 'bg-[var(--success-bg)] text-[var(--success)]' },
//               { t: '14:15', e: 'First Bangkok transaction', r: 'high', c: 'bg-[var(--error-bg)] text-[var(--error)]' },
//               { t: '14:28', e: 'Second transaction', r: 'high', c: 'bg-[var(--error-bg)] text-[var(--error)]' },
//               { t: '14:32', e: 'Large electronics purchase', r: 'critical', c: 'bg-[var(--critical-bg)] text-[var(--critical)]' }
//             ].map((ev, i) => (
//               <div key={i} className="grid grid-cols-[55px_1fr_auto] gap-2.5 items-center p-2 bg-[var(--bg-tertiary)] rounded text-[11px]">
//                 <span className="font-mono text-[10px] text-[var(--text-tertiary)]">{ev.t}</span>
//                 <span className="text-[var(--text-secondary)]">{ev.e}</span>
//                 <span className={`px-1.5 py-0.5 rounded-[10px] text-[9px] font-bold uppercase ${ev.c}`}>{ev.r}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       {/* Pattern */}
//       <div className="analysis-section">
//         <div className="flex items-center gap-2.5 mb-3">
//           <div className="w-7 h-7 bg-[var(--warning-bg)] text-[var(--warning)] rounded-md flex items-center justify-center"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg></div>
//           <div className="text-[13px] font-semibold text-[var(--text-primary)]">Attack Pattern</div>
//         </div>
//         <div className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg p-3.5 flex gap-3.5">
//           <div className="w-10 h-10 bg-[var(--warning-bg)] rounded-lg flex items-center justify-center shrink-0">
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-[var(--warning)]"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/></svg>
//           </div>
//           <div>
//             <div className="text-[13px] font-semibold text-[var(--text-primary)] mb-0.5">Device Theft with Coerced Biometric</div>
//             <div className="text-[10px] text-[var(--text-tertiary)] mb-1.5">76% confidence</div>
//             <div className="text-[11px] text-[var(--text-secondary)] leading-snug">Pattern consistent with physical device theft where victim is forced to authenticate, or device stolen while unlocked.</div>
//           </div>
//         </div>
//       </div>
//       {/* Recommended Actions */}
//       <div className="analysis-section">
//         <div className="flex items-center gap-2.5 mb-3">
//           <div className="w-7 h-7 bg-[var(--success-bg)] text-[var(--success)] rounded-md flex items-center justify-center"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg></div>
//           <div className="text-[13px] font-semibold text-[var(--text-primary)]">Recommended Actions</div>
//         </div>
//         <div className="grid grid-cols-2 gap-3">
//           <div className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] border-t-[3px] border-t-[var(--error)] rounded-lg p-3">
//             <div className="text-[10px] font-bold text-[var(--error)] uppercase tracking-wide mb-2.5">IMMEDIATE</div>
//             <div className="space-y-1.5">
//               {['Block', 'Suspend', 'Freeze'].map((a, i) => (
//                 <div key={i} className="flex items-center gap-2 py-1.5 border-b border-[var(--border-primary)] last:border-0">
//                   <button className={`px-2.5 py-1 rounded text-[10px] font-medium text-white ${a === 'Suspend' ? 'bg-[var(--warning)] text-black' : 'bg-[var(--error)]'}`}>{a}</button>
//                   <span className="text-[11px] text-[var(--text-secondary)]">{a} {a === 'Block' ? 'transaction' : a === 'Suspend' ? 'device' : 'account'}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] border-t-[3px] border-t-[var(--accent)] rounded-lg p-3">
//             <div className="text-[10px] font-bold text-[var(--accent)] uppercase tracking-wide mb-2.5">FOLLOW-UP</div>
//             <div className="space-y-1.5">
//               {[{b:'Call User', t:'Contact via phone'}, {b:'Check Reports', t:'Device theft reports'}, {b:'Review CCTV', t:'Merchant footage'}].map((a, i) => (
//                 <div key={i} className="flex items-center gap-2 py-1.5 border-b border-[var(--border-primary)] last:border-0">
//                   <button className="px-2.5 py-1 rounded text-[10px] font-medium bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-primary)]">{a.b}</button>
//                   <span className="text-[11px] text-[var(--text-secondary)]">{a.t}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div className="mt-3 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg p-3">
//           <div className="text-[11px] font-medium text-[var(--text-primary)] mb-1.5 flex items-center gap-1.5">
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3 text-[var(--warning)]"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/></svg>
//             Communication Warning
//           </div>
//           <div className="text-[11px] text-[var(--text-secondary)] leading-snug">Do not send SMS/push to compromised device. Use voice call to landline or emergency contact.</div>
//         </div>
//       </div>
//       {/* Investigation Questions */}
//       <div className="analysis-section">
//         <div className="flex items-center gap-2.5 mb-3">
//           <div className="w-7 h-7 bg-[var(--cyan-bg)] text-[var(--cyan)] rounded-md flex items-center justify-center"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></div>
//           <div className="text-[13px] font-semibold text-[var(--text-primary)]">Investigation Questions</div>
//         </div>
//         <div className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg p-3">
//           {[
//             "Can we verify user's location via other devices?",
//             "Has the MacBook shown recent activity?",
//             "Any support tickets from this user?",
//             "Scheduled travel that explains location?"
//           ].map((q, i) => (
//             <div key={i} className="flex items-start gap-2 py-1.5 border-b border-[var(--border-primary)] last:border-0">
//               <div className="w-5 h-5 bg-[var(--bg-tertiary)] rounded-full flex items-center justify-center text-[10px] font-bold text-[var(--text-tertiary)] shrink-0">{i+1}</div>
//               <div className="text-[11px] text-[var(--text-secondary)] leading-snug">{q}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
'use client';
;
function AnalysisResults({ data }) {
    // Jika data belum ada sama sekali, jangan render apa-apa
    if (!data) return null;
    // Helper untuk styling dinamis Anomaly Badge
    const getAnomalyStyle = (type, severity)=>{
        const s = (severity || 'low').toLowerCase();
        const t = (type || '').toLowerCase();
        let color = 'text-[var(--text-secondary)] bg-[var(--bg-tertiary)]';
        let border = 'border-l-[var(--border-primary)]';
        if (t.includes('location')) {
            color = 'text-[var(--purple)] bg-[var(--purple-bg)]';
            border = 'border-l-[var(--error)]';
        } else if (t.includes('amount')) {
            color = 'text-[var(--warning)] bg-[var(--warning-bg)]';
            border = s === 'high' ? 'border-l-[var(--error)]' : 'border-l-[var(--warning)]';
        } else if (t.includes('velocity')) {
            color = 'text-[var(--cyan)] bg-[var(--cyan-bg)]';
            border = 'border-l-[var(--warning)]';
        } else if (t.includes('merchant')) {
            color = 'text-[var(--success)] bg-[var(--success-bg)]';
            border = 'border-l-[var(--success)]';
        } else if (t.includes('device')) {
            color = 'text-[var(--accent)] bg-[var(--accent-bg)]';
            border = 'border-l-[var(--error)]';
        }
        return {
            color,
            border
        };
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 animate-in fade-in duration-500",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "analysis-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2.5 mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-7 h-7 bg-[var(--error-bg)] text-[var(--error)] rounded-md flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    className: "w-3.5 h-3.5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
                                    }, void 0, false, {
                                        fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                        lineNumber: 207,
                                        columnNumber: 112
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                    lineNumber: 207,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                lineNumber: 206,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[13px] font-semibold text-[var(--text-primary)]",
                                children: "Anomalies Detected"
                            }, void 0, false, {
                                fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                lineNumber: 209,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/investigation/AnalysisResults.tsx",
                        lineNumber: 205,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2",
                        children: [
                            (data.anomalies_detected || []).map((a, i)=>{
                                const style = getAnomalyStyle(a.type, a.severity);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `bg-[var(--bg-secondary)] border border-[var(--border-primary)] border-l-[3px] ${style.border} rounded-lg p-3 flex gap-2.5`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `h-fit px-2 py-0.5 rounded text-[10px] font-bold uppercase shrink-0 ${style.color}`,
                                            children: a.type
                                        }, void 0, false, {
                                            fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                            lineNumber: 217,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-[var(--text-primary)] leading-relaxed",
                                                    children: a.description
                                                }, void 0, false, {
                                                    fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                                    lineNumber: 219,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[10px] text-[var(--text-tertiary)] mt-1",
                                                    children: [
                                                        "Severity: ",
                                                        a.severity
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                                    lineNumber: 220,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                            lineNumber: 218,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                    lineNumber: 216,
                                    columnNumber: 15
                                }, this);
                            }),
                            (!data.anomalies_detected || data.anomalies_detected.length === 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-[var(--text-tertiary)] italic px-2",
                                children: "No specific anomalies detected."
                            }, void 0, false, {
                                fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                lineNumber: 226,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/investigation/AnalysisResults.tsx",
                        lineNumber: 211,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/investigation/AnalysisResults.tsx",
                lineNumber: 204,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "analysis-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2.5 mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-7 h-7 bg-[var(--accent-bg)] text-[var(--accent)] rounded-md flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    className: "w-3.5 h-3.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "11",
                                            cy: "11",
                                            r: "8"
                                        }, void 0, false, {
                                            fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                            lineNumber: 234,
                                            columnNumber: 222
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "21",
                                            y1: "21",
                                            x2: "16.65",
                                            y2: "16.65"
                                        }, void 0, false, {
                                            fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                            lineNumber: 234,
                                            columnNumber: 253
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                    lineNumber: 234,
                                    columnNumber: 123
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                lineNumber: 234,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[13px] font-semibold text-[var(--text-primary)]",
                                children: "Key Findings"
                            }, void 0, false, {
                                fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                lineNumber: 235,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/investigation/AnalysisResults.tsx",
                        lineNumber: 233,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[var(--bg-secondary)] border border-[var(--border-primary)] border-l-[3px] border-l-[var(--error)] rounded-lg p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] font-bold text-[var(--error)] uppercase tracking-wide mb-2 flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                className: "w-3 h-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "12",
                                                        cy: "12",
                                                        r: "10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                                        lineNumber: 239,
                                                        columnNumber: 222
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "15",
                                                        y1: "9",
                                                        x2: "9",
                                                        y2: "15"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                                        lineNumber: 239,
                                                        columnNumber: 254
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "9",
                                                        y1: "9",
                                                        x2: "15",
                                                        y2: "15"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                                        lineNumber: 239,
                                                        columnNumber: 291
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                                lineNumber: 239,
                                                columnNumber: 127
                                            }, this),
                                            " SUSPICIOUS"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                        lineNumber: 239,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-1.5",
                                        children: (data.key_findings?.suspicious || []).map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "text-[11px] text-[var(--text-secondary)] flex gap-1.5 leading-snug",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        className: "w-3 h-3 text-[var(--error)] flex-shrink-0 mt-[2px]",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                                            lineNumber: 241,
                                                            columnNumber: 320
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 182
                                                    }, this),
                                                    t
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                                lineNumber: 241,
                                                columnNumber: 91
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                        lineNumber: 241,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                lineNumber: 238,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[var(--bg-secondary)] border border-[var(--border-primary)] border-l-[3px] border-l-[var(--success)] rounded-lg p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] font-bold text-[var(--success)] uppercase tracking-wide mb-2 flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                className: "w-3 h-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M22 11.08V12a10 10 0 11-5.93-9.14"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                                        lineNumber: 244,
                                                        columnNumber: 224
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                        points: "22 4 12 14.01 9 11.01"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                                        lineNumber: 244,
                                                        columnNumber: 269
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                                lineNumber: 244,
                                                columnNumber: 129
                                            }, this),
                                            " MITIGATING"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                        lineNumber: 244,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-1.5",
                                        children: (data.key_findings?.mitigating || []).map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "text-[11px] text-[var(--text-secondary)] flex gap-1.5 leading-snug",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        className: "w-3 h-3 text-[var(--success)] flex-shrink-0 mt-[2px]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M22 11.08V12a10 10 0 11-5.93-9.14"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                                                lineNumber: 246,
                                                                columnNumber: 322
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                points: "22 4 12 14.01 9 11.01"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                                                lineNumber: 246,
                                                                columnNumber: 367
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                                        lineNumber: 246,
                                                        columnNumber: 182
                                                    }, this),
                                                    t
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                                lineNumber: 246,
                                                columnNumber: 91
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                        lineNumber: 246,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                lineNumber: 243,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/investigation/AnalysisResults.tsx",
                        lineNumber: 237,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/investigation/AnalysisResults.tsx",
                lineNumber: 232,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "analysis-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2.5 mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-7 h-7 bg-[var(--purple-bg)] text-[var(--purple)] rounded-md flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    className: "w-3.5 h-3.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "12",
                                            cy: "12",
                                            r: "10"
                                        }, void 0, false, {
                                            fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                            lineNumber: 254,
                                            columnNumber: 222
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                            points: "12 6 12 12 16 14"
                                        }, void 0, false, {
                                            fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                            lineNumber: 254,
                                            columnNumber: 254
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                    lineNumber: 254,
                                    columnNumber: 123
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                lineNumber: 254,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[13px] font-semibold text-[var(--text-primary)]",
                                children: "Timeline Reconstruction"
                            }, void 0, false, {
                                fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                lineNumber: 255,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/investigation/AnalysisResults.tsx",
                        lineNumber: 253,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg p-3.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-[var(--text-secondary)] leading-relaxed mb-3.5 pb-3.5 border-b border-[var(--border-primary)]",
                                children: data.timeline_analysis?.reconstruction || "Timeline data not available."
                            }, void 0, false, {
                                fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                lineNumber: 258,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: (data.timeline_analysis?.events || []).map((ev, i)=>{
                                    let riskClass = 'bg-[var(--bg-tertiary)] text-[var(--text-tertiary)]';
                                    const risk = (ev.risk || '').toLowerCase();
                                    if (risk === 'critical') riskClass = 'bg-[var(--critical-bg)] text-[var(--critical)]';
                                    if (risk === 'high') riskClass = 'bg-[var(--error-bg)] text-[var(--error)]';
                                    if (risk === 'medium') riskClass = 'bg-[var(--warning-bg)] text-[var(--warning)]';
                                    if (risk === 'low') riskClass = 'bg-[var(--success-bg)] text-[var(--success)]';
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-[55px_1fr_auto] gap-2.5 items-center p-2 bg-[var(--bg-tertiary)] rounded text-[11px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono text-[10px] text-[var(--text-tertiary)]",
                                                children: ev.time
                                            }, void 0, false, {
                                                fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                                lineNumber: 273,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[var(--text-secondary)]",
                                                children: ev.event
                                            }, void 0, false, {
                                                fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                                lineNumber: 274,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `px-1.5 py-0.5 rounded-[10px] text-[9px] font-bold uppercase ${riskClass}`,
                                                children: ev.risk || 'INFO'
                                            }, void 0, false, {
                                                fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                                lineNumber: 275,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                        lineNumber: 272,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                lineNumber: 261,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/investigation/AnalysisResults.tsx",
                        lineNumber: 257,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/investigation/AnalysisResults.tsx",
                lineNumber: 252,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "analysis-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2.5 mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-7 h-7 bg-[var(--warning-bg)] text-[var(--warning)] rounded-md flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    className: "w-3.5 h-3.5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"
                                    }, void 0, false, {
                                        fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                        lineNumber: 286,
                                        columnNumber: 224
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                    lineNumber: 286,
                                    columnNumber: 125
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                lineNumber: 286,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[13px] font-semibold text-[var(--text-primary)]",
                                children: "Attack Pattern"
                            }, void 0, false, {
                                fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                lineNumber: 287,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/investigation/AnalysisResults.tsx",
                        lineNumber: 285,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg p-3.5 flex gap-3.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 bg-[var(--warning-bg)] rounded-lg flex items-center justify-center shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    className: "w-5 h-5 text-[var(--warning)]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
                                    }, void 0, false, {
                                        fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                        lineNumber: 291,
                                        columnNumber: 130
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                    lineNumber: 291,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                lineNumber: 290,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[13px] font-semibold text-[var(--text-primary)] mb-0.5",
                                        children: data.pattern_match?.pattern_name || "Unknown Pattern"
                                    }, void 0, false, {
                                        fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                        lineNumber: 294,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] text-[var(--text-tertiary)] mb-1.5",
                                        children: [
                                            data.pattern_match?.confidence || 0,
                                            "% confidence"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                        lineNumber: 295,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[11px] text-[var(--text-secondary)] leading-snug",
                                        children: data.pattern_match?.description || "No description available."
                                    }, void 0, false, {
                                        fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                        lineNumber: 296,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                lineNumber: 293,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/investigation/AnalysisResults.tsx",
                        lineNumber: 289,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/investigation/AnalysisResults.tsx",
                lineNumber: 284,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "analysis-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2.5 mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-7 h-7 bg-[var(--success-bg)] text-[var(--success)] rounded-md flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    className: "w-3.5 h-3.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                            points: "9 11 12 14 22 4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                            lineNumber: 304,
                                            columnNumber: 224
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"
                                        }, void 0, false, {
                                            fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                            lineNumber: 304,
                                            columnNumber: 260
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                    lineNumber: 304,
                                    columnNumber: 125
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                lineNumber: 304,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[13px] font-semibold text-[var(--text-primary)]",
                                children: "Recommended Actions"
                            }, void 0, false, {
                                fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                lineNumber: 305,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/investigation/AnalysisResults.tsx",
                        lineNumber: 303,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[var(--bg-secondary)] border border-[var(--border-primary)] border-t-[3px] border-t-[var(--error)] rounded-lg p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] font-bold text-[var(--error)] uppercase tracking-wide mb-2.5",
                                        children: "IMMEDIATE"
                                    }, void 0, false, {
                                        fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                        lineNumber: 309,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1.5",
                                        children: (data.recommended_actions?.immediate || []).map((a, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 py-1.5 border-b border-[var(--border-primary)] last:border-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: `px-2.5 py-1 rounded text-[10px] font-medium text-white ${a.toLowerCase().includes('suspend') ? 'bg-[var(--warning)] text-black' : 'bg-[var(--error)]'}`,
                                                        children: a.split(' ')[0]
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                                        lineNumber: 314,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[11px] text-[var(--text-secondary)]",
                                                        children: a
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                                        lineNumber: 317,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                                lineNumber: 313,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                        lineNumber: 310,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                lineNumber: 308,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[var(--bg-secondary)] border border-[var(--border-primary)] border-t-[3px] border-t-[var(--accent)] rounded-lg p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] font-bold text-[var(--accent)] uppercase tracking-wide mb-2.5",
                                        children: "FOLLOW-UP"
                                    }, void 0, false, {
                                        fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                        lineNumber: 323,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1.5",
                                        children: (data.recommended_actions?.followup || []).map((a, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 py-1.5 border-b border-[var(--border-primary)] last:border-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "px-2.5 py-1 rounded text-[10px] font-medium bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-primary)]",
                                                        children: "Action"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                                        lineNumber: 328,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[11px] text-[var(--text-secondary)]",
                                                        children: a
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                                        lineNumber: 331,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                                lineNumber: 327,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                        lineNumber: 324,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                lineNumber: 322,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/investigation/AnalysisResults.tsx",
                        lineNumber: 307,
                        columnNumber: 9
                    }, this),
                    data.recommended_actions?.user_communication && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg p-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[11px] font-medium text-[var(--text-primary)] mb-1.5 flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        className: "w-3 h-3 text-[var(--warning)]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
                                        }, void 0, false, {
                                            fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                            lineNumber: 341,
                                            columnNumber: 134
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                        lineNumber: 341,
                                        columnNumber: 17
                                    }, this),
                                    "Communication Warning"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                lineNumber: 340,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[11px] text-[var(--text-secondary)] leading-snug",
                                children: data.recommended_actions.user_communication
                            }, void 0, false, {
                                fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                lineNumber: 344,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/investigation/AnalysisResults.tsx",
                        lineNumber: 339,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/investigation/AnalysisResults.tsx",
                lineNumber: 302,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "analysis-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2.5 mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-7 h-7 bg-[var(--cyan-bg)] text-[var(--cyan)] rounded-md flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    className: "w-3.5 h-3.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "12",
                                            cy: "12",
                                            r: "10"
                                        }, void 0, false, {
                                            fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                            lineNumber: 352,
                                            columnNumber: 218
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"
                                        }, void 0, false, {
                                            fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                            lineNumber: 352,
                                            columnNumber: 250
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "12",
                                            y1: "17",
                                            x2: "12.01",
                                            y2: "17"
                                        }, void 0, false, {
                                            fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                            lineNumber: 352,
                                            columnNumber: 296
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                    lineNumber: 352,
                                    columnNumber: 119
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                lineNumber: 352,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[13px] font-semibold text-[var(--text-primary)]",
                                children: "Investigation Questions"
                            }, void 0, false, {
                                fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                lineNumber: 353,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/investigation/AnalysisResults.tsx",
                        lineNumber: 351,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg p-3",
                        children: [
                            (data.investigation_questions || []).map((q, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-2 py-1.5 border-b border-[var(--border-primary)] last:border-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-5 h-5 bg-[var(--bg-tertiary)] rounded-full flex items-center justify-center text-[10px] font-bold text-[var(--text-tertiary)] shrink-0",
                                            children: i + 1
                                        }, void 0, false, {
                                            fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                            lineNumber: 359,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[11px] text-[var(--text-secondary)] leading-snug",
                                            children: q
                                        }, void 0, false, {
                                            fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                            lineNumber: 360,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                    lineNumber: 358,
                                    columnNumber: 13
                                }, this)),
                            (!data.investigation_questions || data.investigation_questions.length === 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-[var(--text-tertiary)] italic px-2",
                                children: "No additional investigation questions generated."
                            }, void 0, false, {
                                fileName: "[project]/components/investigation/AnalysisResults.tsx",
                                lineNumber: 364,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/investigation/AnalysisResults.tsx",
                        lineNumber: 355,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/investigation/AnalysisResults.tsx",
                lineNumber: 350,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/investigation/AnalysisResults.tsx",
        lineNumber: 201,
        columnNumber: 5
    }, this);
}
_c = AnalysisResults;
var _c;
__turbopack_context__.k.register(_c, "AnalysisResults");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/ChatAssistant.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatAssistant",
    ()=>ChatAssistant
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function ChatAssistant({ isOpen, onClose }) {
    _s();
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: 1,
            role: 'assistant',
            text: "I've analyzed the transaction data. This case shows <strong>critical risk</strong> with 89% confidence. What would you like to explore?",
            time: 'Just now'
        }
    ]);
    const [isTyping, setIsTyping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const bottomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatAssistant.useEffect": ()=>{
            bottomRef.current?.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }["ChatAssistant.useEffect"], [
        messages,
        isTyping,
        isOpen
    ]);
    const handleSend = ()=>{
        if (!input.trim()) return;
        const userMsg = {
            id: Date.now(),
            role: 'user',
            text: input,
            time: new Date().toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit'
            })
        };
        setMessages((prev)=>[
                ...prev,
                userMsg
            ]);
        setInput('');
        setIsTyping(true);
        setTimeout(()=>{
            setIsTyping(false);
            const aiMsg = {
                id: Date.now() + 1,
                role: 'assistant',
                text: "Based on the connection graph, this device fingerprint matches 3 other known fraud cases from last month.",
                time: new Date().toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit'
                })
            };
            setMessages((prev)=>[
                    ...prev,
                    aiMsg
                ]);
        }, 1500);
    };
    const suggestions = [
        'Similar cases?',
        'Check other devices',
        'How detected?',
        'Travel history'
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `fixed inset-0 z-[100] transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-black/50",
                    onClick: onClose
                }, void 0, false, {
                    fileName: "[project]/components/ui/ChatAssistant.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `absolute top-0 right-0 bottom-0 w-[400px] bg-[var(--bg-secondary)] border-l border-[var(--border-primary)] shadow-2xl flex flex-col transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 border-b border-[var(--border-primary)] flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-9 h-9 bg-gradient-to-br from-[var(--accent)] to-[var(--purple)] rounded-lg flex items-center justify-center text-white",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                className: "w-[18px] h-[18px]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 017 7h1a1 1 0 011 1v3a1 1 0 01-1 1h-1v1a2 2 0 01-2 2H5a2 2 0 01-2-2v-1H2a1 1 0 01-1-1v-3a1 1 0 011-1h1a7 7 0 017-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 012-2M7.5 13a1.5 1.5 0 100 3 1.5 1.5 0 000-3m9 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ui/ChatAssistant.tsx",
                                                    lineNumber: 52,
                                                    columnNumber: 130
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/ui/ChatAssistant.tsx",
                                                lineNumber: 52,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/ChatAssistant.tsx",
                                            lineNumber: 51,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[14px] font-semibold text-[var(--text-primary)]",
                                                    children: "Investigation Assistant"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ui/ChatAssistant.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[11px] text-[var(--text-tertiary)]",
                                                    children: "Ask questions about this case"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ui/ChatAssistant.tsx",
                                                    lineNumber: 56,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ui/ChatAssistant.tsx",
                                            lineNumber: 54,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ui/ChatAssistant.tsx",
                                    lineNumber: 50,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "w-8 h-8 bg-[var(--bg-tertiary)] rounded-md flex items-center justify-center text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                                                fileName: "[project]/components/ui/ChatAssistant.tsx",
                                                lineNumber: 60,
                                                columnNumber: 126
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "6",
                                                y1: "6",
                                                x2: "18",
                                                y2: "18"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ui/ChatAssistant.tsx",
                                                lineNumber: 60,
                                                columnNumber: 163
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ui/ChatAssistant.tsx",
                                        lineNumber: 60,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/ChatAssistant.tsx",
                                    lineNumber: 59,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ui/ChatAssistant.tsx",
                            lineNumber: 49,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-y-auto p-4 space-y-3.5 custom-scrollbar",
                            children: [
                                messages.map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `flex gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${msg.role === 'assistant' ? 'bg-gradient-to-br from-[var(--accent)] to-[var(--purple)] text-white' : 'bg-[var(--bg-tertiary)] text-[var(--text-secondary)]'}`,
                                                children: msg.role === 'assistant' ? 'AI' : 'You'
                                            }, void 0, false, {
                                                fileName: "[project]/components/ui/ChatAssistant.tsx",
                                                lineNumber: 68,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "max-w-[85%]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `p-2.5 rounded-[10px] text-[12px] leading-relaxed ${msg.role === 'assistant' ? 'bg-[var(--bg-tertiary)] rounded-tl-sm text-[var(--text-primary)]' : 'bg-[var(--accent)] text-white rounded-tr-sm'}`,
                                                        dangerouslySetInnerHTML: {
                                                            __html: msg.text
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ui/ChatAssistant.tsx",
                                                        lineNumber: 72,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `text-[9px] text-[var(--text-tertiary)] mt-1 ${msg.role === 'user' ? 'text-right' : ''}`,
                                                        children: msg.time
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ui/ChatAssistant.tsx",
                                                        lineNumber: 73,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ui/ChatAssistant.tsx",
                                                lineNumber: 71,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, msg.id, true, {
                                        fileName: "[project]/components/ui/ChatAssistant.tsx",
                                        lineNumber: 67,
                                        columnNumber: 21
                                    }, this)),
                                isTyping && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-7 h-7 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--purple)] flex items-center justify-center text-white text-[10px] font-bold",
                                            children: "AI"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/ChatAssistant.tsx",
                                            lineNumber: 79,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-[var(--bg-tertiary)] rounded-[10px] rounded-tl-sm p-3 flex gap-1 items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-1.5 h-1.5 bg-[var(--text-tertiary)] rounded-full animate-bounce [animation-delay:0s]"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ui/ChatAssistant.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-1.5 h-1.5 bg-[var(--text-tertiary)] rounded-full animate-bounce [animation-delay:0.2s]"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ui/ChatAssistant.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-1.5 h-1.5 bg-[var(--text-tertiary)] rounded-full animate-bounce [animation-delay:0.4s]"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ui/ChatAssistant.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ui/ChatAssistant.tsx",
                                            lineNumber: 80,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ui/ChatAssistant.tsx",
                                    lineNumber: 78,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: bottomRef
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/ChatAssistant.tsx",
                                    lineNumber: 87,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ui/ChatAssistant.tsx",
                            lineNumber: 65,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-t border-[var(--border-primary)] bg-[var(--bg-tertiary)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 flex gap-1.5 flex-wrap border-b border-[var(--border-primary)] bg-[var(--bg-secondary)]",
                                    children: suggestions.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setInput(s),
                                            className: "px-2.5 py-1.5 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-full text-[10px] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors",
                                            children: s
                                        }, i, false, {
                                            fileName: "[project]/components/ui/ChatAssistant.tsx",
                                            lineNumber: 94,
                                            columnNumber: 25
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/ChatAssistant.tsx",
                                    lineNumber: 92,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3.5 flex gap-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Ask about this investigation...",
                                            className: "flex-1 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-lg px-3 py-2.5 text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)]",
                                            value: input,
                                            onChange: (e)=>setInput(e.target.value),
                                            onKeyDown: (e)=>e.key === 'Enter' && handleSend()
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/ChatAssistant.tsx",
                                            lineNumber: 98,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleSend,
                                            className: "w-10 h-10 bg-[var(--accent)] rounded-lg flex items-center justify-center text-white hover:bg-[var(--accent-hover)] transition-colors shrink-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                className: "w-4 h-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "22",
                                                        y1: "2",
                                                        x2: "11",
                                                        y2: "13"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ui/ChatAssistant.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 120
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                                        points: "22 2 15 22 11 13 2 9 22 2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ui/ChatAssistant.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 158
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ui/ChatAssistant.tsx",
                                                lineNumber: 107,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/ChatAssistant.tsx",
                                            lineNumber: 106,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ui/ChatAssistant.tsx",
                                    lineNumber: 97,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ui/ChatAssistant.tsx",
                            lineNumber: 91,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/ChatAssistant.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/ChatAssistant.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s(ChatAssistant, "kv6LOCT4ufRAEoXdM8SoqA2BS4s=");
_c = ChatAssistant;
var _c;
__turbopack_context__.k.register(_c, "ChatAssistant");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const API_URL = ("TURBOPACK compile-time value", "http://localhost:4000") || 'https://api.authkey.my';
const adminService = {
    // --- 1. AMOUNT THRESHOLDS ---
    getAmountLimits: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`${API_URL}/api/admin/limits`);
        return res.data;
    },
    updateAmountLimit: async (id, data)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`${API_URL}/api/admin/limits/${id}`, data);
        return res.data;
    },
    createAmountLimit: async (data)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`${API_URL}/api/admin/limits`, data);
        return res.data;
    },
    deleteAmountLimit: async (id)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`${API_URL}/api/admin/limits/${id}`);
        return res.data;
    },
    getRiskRules: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`${API_URL}/api/admin/risk-rules`);
        return res.data;
    },
    // [POST] Simpan Rules (Batch Update) - INI YANG BARU
    saveRiskConfigBatch: async (rules)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`${API_URL}/api/admin/risk-rules/batch-update`, {
            rules
        });
        return res.data;
    },
    // [GET] Thresholds
    getRiskConfig: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`${API_URL}/api/admin/risk-config`);
        return res.data;
    },
    // [PUT] Update Thresholds
    updateRiskConfig: async (data)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`${API_URL}/api/admin/risk-config`, data);
        return res.data;
    },
    // --- 3. AUTH POLICIES ---
    getPolicies: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`${API_URL}/api/admin/policies`);
        return res.data;
    },
    upsertPolicy: async (payload)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`${API_URL}/api/admin/policies`, payload);
        return res.data;
    },
    getPolicyAuditLogs: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`${API_URL}/api/admin/policies/audit`);
        return res.data;
    },
    // --- 4. INVESTIGATION & LOGS ---
    getTransactions: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`${API_URL}/api/admin/transactions`);
        return res.data;
    },
    getTransactionDetail: async (id)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`${API_URL}/api/admin/transactions/${id}`);
        return res.data;
    },
    getAuthLogs: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`${API_URL}/api/admin/logs`);
        return res.data;
    },
    getDashboardStats: async (range)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`${API_URL}/api/admin/dashboard`, {
            params: {
                timeRange: range
            }
        });
        return res.data;
    },
    // 1. Fetch Evidence (Cepat)    
    async getTransactionEvidence (id) {
        const res = await fetch(`${API_URL}/api/admin/transactions/${id}/evidence`);
        if (!res.ok) throw new Error('Failed to load evidence');
        return res.json();
    },
    // 2. Fetch Analysis (Lambat)
    async getInvestigationReport (id) {
        const res = await fetch(`${API_URL}/api/admin/transactions/${id}/investigate`);
        if (!res.ok) throw new Error('Failed to load analysis');
        return res.json();
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(admin)/investigation/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InvestigationPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$investigation$2f$EvidencePanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/investigation/EvidencePanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$investigation$2f$AnalysisResults$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/investigation/AnalysisResults.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ChatAssistant$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/ChatAssistant.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$adminService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/adminService.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
;
;
;
;
;
;
function InvestigationPage() {
    _s();
    // State Terpisah
    const [evidenceData, setEvidenceData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // Untuk Panel Kanan (Cepat)
    const [analysisData, setAnalysisData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // Untuk Panel Tengah (Lambat)
    const [isEvidenceLoading, setIsEvidenceLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isAnalysisLoading, setIsAnalysisLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isChatOpen, setIsChatOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const transactionId = searchParams.get('id');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InvestigationPage.useEffect": ()=>{
            if (!transactionId) return;
            // 1. Fetch Data Database (Cepat)
            const fetchEvidence = {
                "InvestigationPage.useEffect.fetchEvidence": async ()=>{
                    setIsEvidenceLoading(true);
                    try {
                        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$adminService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminService"].getTransactionEvidence(transactionId);
                        setEvidenceData(res.raw_data);
                    } catch (e) {
                        console.error("Evidence Error:", e);
                    } finally{
                        setIsEvidenceLoading(false);
                    }
                }
            }["InvestigationPage.useEffect.fetchEvidence"];
            // 2. Fetch Analisis AI (Lambat)
            const fetchAnalysis = {
                "InvestigationPage.useEffect.fetchAnalysis": async ()=>{
                    setIsAnalysisLoading(true);
                    try {
                        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$adminService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminService"].getInvestigationReport(transactionId);
                        setAnalysisData(res.analysis);
                    } catch (e) {
                        console.error("Analysis Error:", e);
                    } finally{
                        setIsAnalysisLoading(false);
                    }
                }
            }["InvestigationPage.useEffect.fetchAnalysis"];
            // Jalankan Paralel
            fetchEvidence();
            fetchAnalysis();
        }
    }["InvestigationPage.useEffect"], [
        transactionId
    ]);
    // Helper UI untuk warna Badge Header
    const getRiskBadgeColor = (level)=>{
        switch(level?.toLowerCase()){
            case 'critical':
                return 'bg-[var(--critical-bg)] border-[rgba(220,38,38,0.3)] text-[var(--critical)]';
            case 'high':
                return 'bg-[var(--error-bg)] border-[rgba(239,68,68,0.3)] text-[var(--error)]';
            case 'medium':
                return 'bg-[var(--warning-bg)] border-[rgba(245,158,11,0.3)] text-[var(--warning)]';
            default:
                return 'bg-[var(--success-bg)] border-[rgba(16,185,129,0.3)] text-[var(--success)]';
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "h-[60px] px-6 bg-[var(--bg-secondary)] border-b border-[var(--border-primary)] flex items-center justify-between shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "w-8 h-8 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-md text-[var(--text-secondary)] flex items-center justify-center hover:bg-[var(--bg-hover)] transition-colors",
                                        onClick: ()=>window.history.back(),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            className: "w-4 h-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                points: "15 18 9 12 15 6"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/investigation/page.tsx",
                                                lineNumber: 179,
                                                columnNumber: 112
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/investigation/page.tsx",
                                            lineNumber: 179,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/investigation/page.tsx",
                                        lineNumber: 178,
                                        columnNumber: 14
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-[15px] font-semibold",
                                                children: [
                                                    "Investigation: ",
                                                    evidenceData?.transaction?.id || transactionId
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/investigation/page.tsx",
                                                lineNumber: 183,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[11px] text-[var(--text-tertiary)] mt-[1px]",
                                                children: "LLM-Powered Fraud Analysis"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/investigation/page.tsx",
                                                lineNumber: 184,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/investigation/page.tsx",
                                        lineNumber: 181,
                                        columnNumber: 14
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/investigation/page.tsx",
                                lineNumber: 177,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2.5",
                                children: [
                                    !isAnalysisLoading && analysisData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `flex items-center gap-1.5 px-3 py-1.5 border rounded-md font-semibold text-xs mr-2 ${getRiskBadgeColor(analysisData.risk_assessment.level)}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                className: "w-3.5 h-3.5",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/investigation/page.tsx",
                                                    lineNumber: 191,
                                                    columnNumber: 120
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/investigation/page.tsx",
                                                lineNumber: 191,
                                                columnNumber: 21
                                            }, this),
                                            analysisData.risk_assessment.level.toUpperCase(),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "opacity-80 font-medium text-[10px] ml-1",
                                                children: [
                                                    analysisData.risk_assessment.confidence,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/investigation/page.tsx",
                                                lineNumber: 193,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/investigation/page.tsx",
                                        lineNumber: 190,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "flex items-center gap-1.5 px-3 py-1.5 bg-[var(--accent)] text-white rounded-md text-xs font-medium hover:bg-[var(--accent-hover)] transition-colors opacity-70 cursor-not-allowed",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                className: "w-3.5 h-3.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/investigation/page.tsx",
                                                        lineNumber: 197,
                                                        columnNumber: 116
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                        points: "14 2 14 8 20 8"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/investigation/page.tsx",
                                                        lineNumber: 197,
                                                        columnNumber: 181
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/investigation/page.tsx",
                                                lineNumber: 197,
                                                columnNumber: 17
                                            }, this),
                                            " Export Report"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/investigation/page.tsx",
                                        lineNumber: 196,
                                        columnNumber: 14
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/investigation/page.tsx",
                                lineNumber: 187,
                                columnNumber: 12
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/investigation/page.tsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 flex flex-col overflow-hidden min-w-0 bg-[var(--bg-primary)]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 overflow-y-auto p-6 custom-scrollbar",
                                    children: [
                                        isAnalysisLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-full flex flex-col items-center justify-center gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-10 h-10 border-[3px] border-[var(--border-primary)] border-t-[var(--accent)] rounded-full animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/investigation/page.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[13px] text-[var(--text-secondary)]",
                                                    children: "Analyzing transaction data..."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/investigation/page.tsx",
                                                    lineNumber: 213,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-[var(--text-tertiary)] text-center max-w-[280px]",
                                                    children: "Claude is reviewing the evidence and identifying potential anomalies"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/investigation/page.tsx",
                                                    lineNumber: 214,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(admin)/investigation/page.tsx",
                                            lineNumber: 211,
                                            columnNumber: 25
                                        }, this),
                                        !isAnalysisLoading && analysisData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$investigation$2f$AnalysisResults$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnalysisResults"], {
                                            data: analysisData
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/investigation/page.tsx",
                                            lineNumber: 219,
                                            columnNumber: 60
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(admin)/investigation/page.tsx",
                                    lineNumber: 207,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/investigation/page.tsx",
                                lineNumber: 206,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$investigation$2f$EvidencePanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EvidencePanel"], {
                                data: evidenceData
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/investigation/page.tsx",
                                lineNumber: 225,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/investigation/page.tsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/investigation/page.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ChatAssistant$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatAssistant"], {
                isOpen: isChatOpen,
                onClose: ()=>setIsChatOpen(false)
            }, void 0, false, {
                fileName: "[project]/app/(admin)/investigation/page.tsx",
                lineNumber: 230,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/investigation/page.tsx",
        lineNumber: 170,
        columnNumber: 5
    }, this);
}
_s(InvestigationPage, "ALpQjqCamYcl9F5gs7/cS/2FPSw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = InvestigationPage;
var _c;
__turbopack_context__.k.register(_c, "InvestigationPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_de973a07._.js.map