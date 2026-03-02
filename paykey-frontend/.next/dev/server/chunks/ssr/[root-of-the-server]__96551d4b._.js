module.exports = [
"[project]/components/policy/ChannelTabs.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChannelTabs",
    ()=>ChannelTabs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
function ChannelTabs({ current, onChange }) {
    const tabs = [
        {
            id: 'web',
            label: 'Web'
        },
        {
            id: 'mobile',
            label: 'Mobile'
        } // Sesuai backend kita
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex gap-[2px] mb-5",
        children: tabs.map((tab, index)=>{
            const isFirst = index === 0;
            const isLast = index === tabs.length - 1;
            const isActive = current === tab.id;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onChange(tab.id),
                className: `
              px-4 py-2 text-[12px] font-medium border border-[var(--border-primary)] transition-all
              ${isFirst ? 'rounded-l-[6px]' : ''} 
              ${isLast ? 'rounded-r-[6px]' : ''} 
              /* HTML style: border-radius logic handled via first/last child classes usually, 
                 tailwind rounded-l/r does this. */
              
              ${isActive ? 'bg-[var(--accent)] border-[var(--accent)] text-white relative z-10' : 'bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}
            `,
                children: tab.label
            }, tab.id, false, {
                fileName: "[project]/components/policy/ChannelTabs.tsx",
                lineNumber: 26,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/components/policy/ChannelTabs.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/policy/PolicyCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PolicyCard",
    ()=>PolicyCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
// Helper: Format Durasi (Detik ke Menit/Jam)
const formatDuration = (seconds)=>{
    if (!seconds) return '0s';
    if (seconds < 60) return `${seconds}s`;
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m`;
    return `${Math.floor(seconds / 3600)}h`;
};
// Helper: Format User Verification
const formatUV = (uv, cache)=>{
    if (uv === 'discouraged') return 'UP only';
    if (uv === 'preferred') return cache > 0 ? `Preferred (${cache}s)` : 'Preferred';
    return cache > 0 ? `Required (${cache}s)` : 'Required (fresh)';
};
function PolicyCard({ risk, data, onEdit, isCorporate }) {
    // Konfigurasi Style Badge & Warna Indikator
    const config = {
        low: {
            label: 'Low Risk',
            dotColor: 'bg-[var(--success)]',
            // Style Badge: Pill Shape, Success BG
            badgeClass: 'bg-[var(--success-bg)] text-[var(--success)]'
        },
        medium: {
            label: 'Medium Risk',
            dotColor: 'bg-[var(--warning)]',
            // Style Badge: Pill Shape, Warning BG
            badgeClass: 'bg-[var(--warning-bg)] text-[var(--warning)]'
        },
        high: {
            label: 'High Risk',
            dotColor: 'bg-[var(--error)]',
            // Style Badge: Pill Shape, Error BG
            badgeClass: 'bg-[var(--error-bg)] text-[var(--error)]'
        }
    };
    // Fallback ke 'low' jika risk tidak dikenali
    const c = config[risk] || config.low;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[12px] overflow-hidden hover:border-[var(--border-secondary)] transition-colors flex flex-col h-full shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-3 border-b border-[var(--border-primary)] flex items-center justify-between bg-[var(--bg-tertiary)]/20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-2 h-2 rounded-full ${c.dotColor} shadow-[0_0_8px_rgba(0,0,0,0.2)]`
                            }, void 0, false, {
                                fileName: "[project]/components/policy/PolicyCard.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-[14px] font-semibold text-[var(--text-primary)] tracking-tight",
                                children: c.label
                            }, void 0, false, {
                                fileName: "[project]/components/policy/PolicyCard.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/policy/PolicyCard.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `inline-flex items-center px-2.5 py-1 rounded-[20px] text-[10px] font-bold uppercase tracking-wide ${c.badgeClass}`,
                        children: risk
                    }, void 0, false, {
                        fileName: "[project]/components/policy/PolicyCard.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/policy/PolicyCard.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 flex-1 space-y-0.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                        label: "User Verification",
                        value: formatUV(data.userVerification, data.uvCache)
                    }, void 0, false, {
                        fileName: "[project]/components/policy/PolicyCard.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                        label: "Step-Up",
                        value: data.requireStepUp ? 'Required' : 'None',
                        valClass: data.requireStepUp ? 'text-[var(--warning)]' : 'text-[var(--success)]'
                    }, void 0, false, {
                        fileName: "[project]/components/policy/PolicyCard.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                        label: "Max Retries",
                        value: data.maxAttempts
                    }, void 0, false, {
                        fileName: "[project]/components/policy/PolicyCard.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                        label: "Lockout",
                        value: formatDuration(data.lockoutDuration),
                        mono: true
                    }, void 0, false, {
                        fileName: "[project]/components/policy/PolicyCard.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                        label: "Total Timeout",
                        value: `${data.totalTimeout}s`,
                        mono: true
                    }, void 0, false, {
                        fileName: "[project]/components/policy/PolicyCard.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    isCorporate && data.dualAuth && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                        label: "Dual Auth",
                        value: `${data.minApprovers} approvers`,
                        valClass: "text-[var(--accent)]"
                    }, void 0, false, {
                        fileName: "[project]/components/policy/PolicyCard.tsx",
                        lineNumber: 87,
                        columnNumber: 12
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/policy/PolicyCard.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-3 bg-[var(--bg-tertiary)]/30 border-t border-[var(--border-primary)] flex justify-end mt-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onEdit,
                    className: "flex items-center  gap-1.5 px-3 py-1.5 bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-[6px] text-[11px] font-medium text-[var(--text-primary)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-all shadow-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            className: "w-3.5 h-3.5 opacity-80",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"
                                }, void 0, false, {
                                    fileName: "[project]/components/policy/PolicyCard.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"
                                }, void 0, false, {
                                    fileName: "[project]/components/policy/PolicyCard.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/policy/PolicyCard.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this),
                        "Edit"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/policy/PolicyCard.tsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/policy/PolicyCard.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/policy/PolicyCard.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
// Helper Component untuk Baris Data
const Row = ({ label, value, mono, valClass })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-between items-center py-2 border-b border-[var(--border-primary)] border-dashed last:border-0 last:border-b-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[12px] text-[var(--text-tertiary)]",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/policy/PolicyCard.tsx",
                lineNumber: 111,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `text-[12px] font-medium ${valClass || 'text-[var(--text-primary)]'} ${mono ? 'font-mono text-[11px]' : ''}`,
                children: value
            }, void 0, false, {
                fileName: "[project]/components/policy/PolicyCard.tsx",
                lineNumber: 112,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/policy/PolicyCard.tsx",
        lineNumber: 110,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
}),
"[project]/components/policy/ComparisonTable.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ComparisonTable",
    ()=>ComparisonTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// 'use client';
// export const ComparisonTable = ({ segment, channel, policies }: any) => {
//   const risks = ['low', 'medium', 'high'];
//   const p = policies?.[segment]?.[channel];
//   // Helper konversi waktu (detik -> menit/jam)
//   const formatTime = (seconds: number) => {
//     if (!seconds) return '';
//     if (seconds < 60) return `${seconds}s`;
//     if (seconds < 3600) return `${Math.floor(seconds / 60)}m`;
//     return `${Math.floor(seconds / 3600)}h`;
//   };
//   // Badge User Verification
//   const formatUVBadge = (uv: string, cache: number) => {
//     if (!uv) return <span className="text-[var(--text-tertiary)]">—</span>;
//     let label = '';
//     let styleClass = '';
//     if (uv === 'preferred') {
//       // Blue / Accent
//       const timeStr = cache > 0 ? ` (${formatTime(cache)})` : '';
//       label = `Preferred${timeStr}`;
//       // FIX: Gunakan var(--accent-bg) yang baru ditambahkan
//       styleClass = 'bg-[var(--accent-bg)] text-[var(--accent)]';
//     } else if (uv === 'required') {
//       // Orange / Warning
//       const timeStr = cache > 0 ? ` (${formatTime(cache)})` : '';
//       label = `Required${timeStr}`;
//       // FIX: Gunakan var(--warning-bg) sesuai globals.css
//       styleClass = 'bg-[var(--warning-bg)] text-[var(--warning)]';
//     } else {
//       // Green / Success (UP Only)
//       label = 'UP Only';
//       // FIX: Gunakan var(--success-bg) sesuai globals.css
//       styleClass = 'bg-[var(--success-bg)] text-[var(--success)]';
//     }
//     return (
//         <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[20px] text-xs font-medium whitespace-nowrap ${styleClass}`}>
//             {label}
//         </span>
//     );
//   };
//   // Badge Lockout Action
//   const formatLockoutBadge = (action: string) => {
//     if (!action) return <span className="text-[var(--text-tertiary)]">—</span>;
//     let label = action.replace('_', ' '); 
//     let styleClass = '';
//     switch (action) {
//         case 'soft_lock':
//             // Warning
//             styleClass = 'bg-[var(--warning-bg)] text-[var(--warning)]';
//             label = 'Soft Lock';
//             break;
//         case 'suspend_device':
//         case 'suspend_account':
//         case 'hard_lock':
//             // Error
//             styleClass = 'bg-[var(--error-bg)] text-[var(--error)]';
//             label = label.charAt(0).toUpperCase() + label.slice(1);
//             break;
//         default:
//             // Neutral
//             styleClass = 'bg-[var(--bg-tertiary)] text-[var(--text-secondary)]';
//             break;
//     }
//     return (
//         <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[20px] text-xs font-medium whitespace-nowrap capitalize ${styleClass}`}>
//             {label}
//         </span>
//     );
//   };
//   if (!p) return null;
//   const rows = [
//     { 
//       label: 'User Verification', 
//       render: (r: string) => formatUVBadge(p[r]?.userVerification, p[r]?.uvCache) 
//     },
//     { 
//       label: 'Transaction Signing', 
//       render: (r: string) => p[r]?.txnSigning ? 
//         <span className="text-[var(--text-primary)] font-medium">✓ Yes</span> : 
//         <span className="text-[var(--text-tertiary)]">—</span> 
//     },
//     { 
//       label: 'Step-Up Required', 
//       render: (r: string) => p[r]?.requireStepUp ? 
//         <span className="text-[12px] text-[var(--accent)] font-medium">Email OTP</span> : 
//         <span className="text-[var(--text-tertiary)]">—</span> 
//     },
//     { 
//       label: 'Lockout Action', 
//       render: (r: string) => formatLockoutBadge(p[r]?.lockoutAction) 
//     },
//     { 
//       label: 'Total Timeout', 
//       render: (r: string) => p[r]?.totalTimeout ? 
//         <span className="font-mono text-[12px] text-[var(--text-primary)]">{p[r].totalTimeout}s</span> : 
//         <span className="text-[var(--text-tertiary)]">—</span> 
//     }
//   ];
//   return (
//     <div className="mb-8 mt-8">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-4">
//         <div className="flex items-center gap-2.5 text-[16px] font-semibold text-[var(--text-primary)]">
//           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-[var(--text-tertiary)]"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
//           Policy Comparison
//         </div>
//         <span className="text-[12px] text-[var(--text-tertiary)] uppercase tracking-wide font-medium">
//           {segment} Banking · {channel}
//         </span>
//       </div>
//       {/* Table */}
//       <div className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[12px] overflow-hidden">
//         <table className="w-full border-collapse text-left">
//           <thead>
//             <tr>
//               <th className="p-4 text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider bg-[var(--bg-tertiary)] border-b border-[var(--border-primary)] w-[200px]">Setting</th>
//               {risks.map(r => (
//                 <th key={r} className="p-4 text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider bg-[var(--bg-tertiary)] border-b border-[var(--border-primary)] capitalize">{r} Risk</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-[var(--border-primary)]">
//             {rows.map((row, i) => (
//               <tr key={i} className="hover:bg-[var(--bg-tertiary)]/5 transition-colors">
//                 <td className="p-4 text-[13px] font-medium text-[var(--text-primary)] bg-[var(--bg-tertiary)]/5">{row.label}</td>
//                 {risks.map(r => (
//                   <td key={r} className="p-4 text-[13px] text-[var(--text-primary)]">
//                     {row.render(r)}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };
'use client';
;
const ComparisonTable = ({ segment, channel, policies })=>{
    // Kita sesuaikan risk level dengan struktur state yang ada (Low, Medium, High)
    const risks = [
        'low',
        'medium',
        'high'
    ];
    const p = policies?.[segment]?.[channel];
    // 1. Helper: Konversi Waktu (Detik -> Menit/Jam/Hari)
    const formatDuration = (seconds)=>{
        if (!seconds) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[var(--text-tertiary)]",
            children: "—"
        }, void 0, false, {
            fileName: "[project]/components/policy/ComparisonTable.tsx",
            lineNumber: 165,
            columnNumber: 26
        }, ("TURBOPACK compile-time value", void 0));
        if (seconds < 60) return `${seconds}s`;
        if (seconds < 3600) return `${Math.floor(seconds / 60)}m`;
        if (seconds < 86400) return `${Math.floor(seconds / 3600)}h`;
        return `${Math.floor(seconds / 86400)}d`;
    };
    // 2. Helper: Render Badge User Verification (UV)
    const formatUVBadge = (uv, cache)=>{
        if (!uv) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[var(--text-tertiary)]",
            children: "—"
        }, void 0, false, {
            fileName: "[project]/components/policy/ComparisonTable.tsx",
            lineNumber: 174,
            columnNumber: 21
        }, ("TURBOPACK compile-time value", void 0));
        if (uv === 'discouraged') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "inline-flex px-2 py-0.5 rounded-[4px] text-[11px] font-medium bg-[var(--success-muted)] text-[var(--success)]",
                children: "UP Only"
            }, void 0, false, {
                fileName: "[project]/components/policy/ComparisonTable.tsx",
                lineNumber: 177,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
        }
        if (uv === 'preferred') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-flex px-2 py-0.5 rounded-[4px] text-[11px] font-medium bg-[var(--success-muted)] text-[var(--success)]",
                        children: "Preferred"
                    }, void 0, false, {
                        fileName: "[project]/components/policy/ComparisonTable.tsx",
                        lineNumber: 183,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    cache > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                        className: "text-[11px] text-[var(--text-tertiary)]",
                        children: [
                            "(",
                            formatDuration(cache),
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/policy/ComparisonTable.tsx",
                        lineNumber: 184,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/policy/ComparisonTable.tsx",
                lineNumber: 182,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        }
        // Required
        return cache > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1.5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-flex px-2 py-0.5 rounded-[4px] text-[11px] font-medium bg-[var(--warning-muted)] text-[var(--warning)]",
                    children: "Required"
                }, void 0, false, {
                    fileName: "[project]/components/policy/ComparisonTable.tsx",
                    lineNumber: 192,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                    className: "text-[11px] text-[var(--text-tertiary)]",
                    children: [
                        "(",
                        formatDuration(cache),
                        ")"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/policy/ComparisonTable.tsx",
                    lineNumber: 193,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/policy/ComparisonTable.tsx",
            lineNumber: 191,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "inline-flex px-2 py-0.5 rounded-[4px] text-[11px] font-medium bg-[var(--error-muted)] text-[var(--error)]",
            children: "Fresh UV"
        }, void 0, false, {
            fileName: "[project]/components/policy/ComparisonTable.tsx",
            lineNumber: 196,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    // 3. Helper: Format Step-Up Methods
    const formatStepUp = (methods)=>{
        if (!methods || methods.length === 0) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[var(--text-tertiary)]",
            children: "—"
        }, void 0, false, {
            fileName: "[project]/components/policy/ComparisonTable.tsx",
            lineNumber: 202,
            columnNumber: 50
        }, ("TURBOPACK compile-time value", void 0));
        const labels = {
            hardware_totp: 'HW Token',
            push_otp: 'Push',
            sms_otp: 'SMS',
            email_otp: 'Email',
            callback: 'Callback'
        };
        const displayStr = methods.map((m)=>labels[m] || m).join(', ');
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[13px] text-[var(--text-primary)]",
            children: displayStr
        }, void 0, false, {
            fileName: "[project]/components/policy/ComparisonTable.tsx",
            lineNumber: 213,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    };
    // 4. Helper: Render Badge Lockout Action
    const formatLockoutBadge = (action)=>{
        if (!action) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[var(--text-tertiary)]",
            children: "—"
        }, void 0, false, {
            fileName: "[project]/components/policy/ComparisonTable.tsx",
            lineNumber: 218,
            columnNumber: 25
        }, ("TURBOPACK compile-time value", void 0));
        const badges = {
            soft_lock: {
                label: 'Soft Lock',
                class: 'bg-[var(--cyan-muted)] text-[var(--cyan)]'
            },
            hard_lock: {
                label: 'Hard Lock',
                class: 'bg-[var(--warning-muted)] text-[var(--warning)]'
            },
            device_suspend: {
                label: 'Device Suspend',
                class: 'bg-[var(--warning-muted)] text-[var(--warning)]'
            },
            account_freeze: {
                label: 'Account Freeze',
                class: 'bg-[var(--error-muted)] text-[var(--error)]'
            }
        };
        const b = badges[action] || {
            label: action,
            class: 'bg-[var(--bg-tertiary)] text-[var(--text-secondary)]'
        };
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: `inline-flex px-2 py-0.5 rounded-[4px] text-[11px] font-medium capitalize ${b.class}`,
            children: b.label
        }, void 0, false, {
            fileName: "[project]/components/policy/ComparisonTable.tsx",
            lineNumber: 230,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    if (!p) return null;
    // Mendefinisikan Semua Baris Data Persis Seperti HTML
    const rows = [
        {
            label: 'User Verification',
            render: (r)=>formatUVBadge(p[r]?.userVerification, p[r]?.uvCache)
        },
        {
            label: 'Transaction Signing',
            render: (r)=>p[r]?.txnSigning ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[var(--text-primary)] font-medium",
                    children: "✓ Yes"
                }, void 0, false, {
                    fileName: "[project]/components/policy/ComparisonTable.tsx",
                    lineNumber: 241,
                    columnNumber: 79
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[var(--text-tertiary)]",
                    children: "—"
                }, void 0, false, {
                    fileName: "[project]/components/policy/ComparisonTable.tsx",
                    lineNumber: 241,
                    columnNumber: 151
                }, ("TURBOPACK compile-time value", void 0))
        },
        {
            label: 'Step-Up Required',
            render: (r)=>p[r]?.requireStepUp ? formatStepUp(p[r]?.stepUpMethods) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[var(--text-tertiary)]",
                    children: "—"
                }, void 0, false, {
                    fileName: "[project]/components/policy/ComparisonTable.tsx",
                    lineNumber: 242,
                    columnNumber: 115
                }, ("TURBOPACK compile-time value", void 0))
        },
        {
            label: 'Known Device Required',
            render: (r)=>p[r]?.knownDevice ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[var(--text-primary)] font-medium",
                    children: "✓ Yes"
                }, void 0, false, {
                    fileName: "[project]/components/policy/ComparisonTable.tsx",
                    lineNumber: 243,
                    columnNumber: 82
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[var(--text-tertiary)]",
                    children: "—"
                }, void 0, false, {
                    fileName: "[project]/components/policy/ComparisonTable.tsx",
                    lineNumber: 243,
                    columnNumber: 154
                }, ("TURBOPACK compile-time value", void 0))
        },
        {
            label: 'Min Device Age',
            render: (r)=>p[r]?.minDeviceAge > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[13px] text-[var(--text-primary)]",
                    children: [
                        p[r].minDeviceAge,
                        " days"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/policy/ComparisonTable.tsx",
                    lineNumber: 244,
                    columnNumber: 80
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[var(--text-tertiary)]",
                    children: "—"
                }, void 0, false, {
                    fileName: "[project]/components/policy/ComparisonTable.tsx",
                    lineNumber: 244,
                    columnNumber: 171
                }, ("TURBOPACK compile-time value", void 0))
        },
        {
            label: 'Max Attempts',
            render: (r)=>p[r]?.maxAttempts !== undefined ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[13px] text-[var(--text-primary)]",
                    children: p[r].maxAttempts
                }, void 0, false, {
                    fileName: "[project]/components/policy/ComparisonTable.tsx",
                    lineNumber: 245,
                    columnNumber: 87
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[var(--text-tertiary)]",
                    children: "—"
                }, void 0, false, {
                    fileName: "[project]/components/policy/ComparisonTable.tsx",
                    lineNumber: 245,
                    columnNumber: 172
                }, ("TURBOPACK compile-time value", void 0))
        },
        {
            label: 'Lockout Duration',
            render: (r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-mono text-[11px] text-[var(--text-primary)]",
                    children: formatDuration(p[r]?.lockoutDuration)
                }, void 0, false, {
                    fileName: "[project]/components/policy/ComparisonTable.tsx",
                    lineNumber: 246,
                    columnNumber: 57
                }, ("TURBOPACK compile-time value", void 0))
        },
        {
            label: 'Lockout Action',
            render: (r)=>formatLockoutBadge(p[r]?.lockoutAction)
        },
        {
            label: 'Total Timeout',
            render: (r)=>p[r]?.totalTimeout ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-mono text-[11px] text-[var(--text-primary)]",
                    children: [
                        p[r].totalTimeout,
                        "s"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/policy/ComparisonTable.tsx",
                    lineNumber: 248,
                    columnNumber: 75
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[var(--text-tertiary)]",
                    children: "—"
                }, void 0, false, {
                    fileName: "[project]/components/policy/ComparisonTable.tsx",
                    lineNumber: 248,
                    columnNumber: 172
                }, ("TURBOPACK compile-time value", void 0))
        },
        {
            label: 'Idle Timeout',
            render: (r)=>p[r]?.idleTimeout ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-mono text-[11px] text-[var(--text-primary)]",
                    children: [
                        p[r].idleTimeout,
                        "s"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/policy/ComparisonTable.tsx",
                    lineNumber: 249,
                    columnNumber: 73
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[var(--text-tertiary)]",
                    children: "—"
                }, void 0, false, {
                    fileName: "[project]/components/policy/ComparisonTable.tsx",
                    lineNumber: 249,
                    columnNumber: 169
                }, ("TURBOPACK compile-time value", void 0))
        }
    ];
    // Tambahkan baris Dual Authorization khusus jika segment Corporate
    if (segment === 'corporate') {
        rows.push({
            label: 'Dual Authorization',
            render: (r)=>{
                if (!p[r]?.dualAuth) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[var(--text-tertiary)]",
                    children: "—"
                }, void 0, false, {
                    fileName: "[project]/components/policy/ComparisonTable.tsx",
                    lineNumber: 257,
                    columnNumber: 37
                }, ("TURBOPACK compile-time value", void 0));
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-[4px] text-[11px] font-medium bg-[var(--purple-muted)] text-[var(--purple)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            className: "w-3 h-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
                                }, void 0, false, {
                                    fileName: "[project]/components/policy/ComparisonTable.tsx",
                                    lineNumber: 260,
                                    columnNumber: 108
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "9",
                                    cy: "7",
                                    r: "4"
                                }, void 0, false, {
                                    fileName: "[project]/components/policy/ComparisonTable.tsx",
                                    lineNumber: 260,
                                    columnNumber: 159
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M23 21v-2a4 4 0 00-3-3.87"
                                }, void 0, false, {
                                    fileName: "[project]/components/policy/ComparisonTable.tsx",
                                    lineNumber: 260,
                                    columnNumber: 188
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M16 3.13a4 4 0 010 7.75"
                                }, void 0, false, {
                                    fileName: "[project]/components/policy/ComparisonTable.tsx",
                                    lineNumber: 260,
                                    columnNumber: 225
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/policy/ComparisonTable.tsx",
                            lineNumber: 260,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        p[r].minApprovers,
                        " approvers"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/policy/ComparisonTable.tsx",
                    lineNumber: 259,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            }
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-8 mt-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2.5 text-[16px] font-semibold text-[var(--text-primary)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                className: "w-5 h-5 text-[var(--text-tertiary)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "3",
                                        y: "3",
                                        width: "18",
                                        height: "18",
                                        rx: "2",
                                        ry: "2"
                                    }, void 0, false, {
                                        fileName: "[project]/components/policy/ComparisonTable.tsx",
                                        lineNumber: 273,
                                        columnNumber: 134
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "3",
                                        y1: "9",
                                        x2: "21",
                                        y2: "9"
                                    }, void 0, false, {
                                        fileName: "[project]/components/policy/ComparisonTable.tsx",
                                        lineNumber: 273,
                                        columnNumber: 190
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "9",
                                        y1: "21",
                                        x2: "9",
                                        y2: "9"
                                    }, void 0, false, {
                                        fileName: "[project]/components/policy/ComparisonTable.tsx",
                                        lineNumber: 273,
                                        columnNumber: 226
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/policy/ComparisonTable.tsx",
                                lineNumber: 273,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            "Policy Comparison"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/policy/ComparisonTable.tsx",
                        lineNumber: 272,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[12px] text-[var(--text-tertiary)] font-medium",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "capitalize",
                                children: segment
                            }, void 0, false, {
                                fileName: "[project]/components/policy/ComparisonTable.tsx",
                                lineNumber: 277,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            " Banking · ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "capitalize",
                                children: channel
                            }, void 0, false, {
                                fileName: "[project]/components/policy/ComparisonTable.tsx",
                                lineNumber: 277,
                                columnNumber: 67
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/policy/ComparisonTable.tsx",
                        lineNumber: 276,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/policy/ComparisonTable.tsx",
                lineNumber: 271,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[12px] overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full border-collapse text-left",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "p-4 text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider bg-[var(--bg-tertiary)] border-b border-[var(--border-primary)] w-[220px]",
                                        children: "Setting"
                                    }, void 0, false, {
                                        fileName: "[project]/components/policy/ComparisonTable.tsx",
                                        lineNumber: 286,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    risks.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "p-4 text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider bg-[var(--bg-tertiary)] border-b border-[var(--border-primary)] capitalize",
                                            children: [
                                                r,
                                                " Risk"
                                            ]
                                        }, r, true, {
                                            fileName: "[project]/components/policy/ComparisonTable.tsx",
                                            lineNumber: 288,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/policy/ComparisonTable.tsx",
                                lineNumber: 285,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/policy/ComparisonTable.tsx",
                            lineNumber: 284,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            className: "divide-y divide-[var(--border-primary)]",
                            children: rows.map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "hover:bg-[var(--bg-tertiary)]/30 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "p-4 text-[13px] font-medium text-[var(--text-primary)] bg-[var(--bg-tertiary)]/20 whitespace-nowrap",
                                            children: row.label
                                        }, void 0, false, {
                                            fileName: "[project]/components/policy/ComparisonTable.tsx",
                                            lineNumber: 295,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        risks.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-4 align-middle",
                                                children: row.render(r)
                                            }, r, false, {
                                                fileName: "[project]/components/policy/ComparisonTable.tsx",
                                                lineNumber: 299,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    ]
                                }, i, true, {
                                    fileName: "[project]/components/policy/ComparisonTable.tsx",
                                    lineNumber: 294,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/components/policy/ComparisonTable.tsx",
                            lineNumber: 292,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/policy/ComparisonTable.tsx",
                    lineNumber: 283,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/policy/ComparisonTable.tsx",
                lineNumber: 282,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/policy/ComparisonTable.tsx",
        lineNumber: 269,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/services/adminService.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "adminService",
    ()=>adminService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
const API_URL = ("TURBOPACK compile-time value", "http://localhost:4000/admin") || 'https://api.authkey.my';
const adminService = {
    // --- 1. AMOUNT THRESHOLDS ---
    getAmountLimits: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`${API_URL}/api/admin/limits`);
        return res.data;
    },
    updateAmountLimit: async (id, data)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].put(`${API_URL}/api/admin/limits/${id}`, data);
        return res.data;
    },
    createAmountLimit: async (data)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(`${API_URL}/api/admin/limits`, data);
        return res.data;
    },
    deleteAmountLimit: async (id)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].delete(`${API_URL}/api/admin/limits/${id}`);
        return res.data;
    },
    getRiskRules: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`${API_URL}/api/admin/risk-rules`);
        return res.data;
    },
    // [POST] Simpan Rules (Batch Update) - INI YANG BARU
    saveRiskConfigBatch: async (rules)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(`${API_URL}/api/admin/risk-rules/batch-update`, {
            rules
        });
        return res.data;
    },
    // [GET] Thresholds
    getRiskConfig: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`${API_URL}/api/admin/risk-config`);
        return res.data;
    },
    // [PUT] Update Thresholds
    updateRiskConfig: async (data)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].put(`${API_URL}/api/admin/risk-config`, data);
        return res.data;
    },
    // --- 3. AUTH POLICIES ---
    getPolicies: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`${API_URL}/api/admin/policies`);
        return res.data;
    },
    upsertPolicy: async (payload)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(`${API_URL}/api/admin/policies`, payload);
        return res.data;
    },
    getPolicyAuditLogs: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`${API_URL}/api/admin/policies/audit`);
        return res.data;
    },
    // --- 4. INVESTIGATION & LOGS ---
    getTransactions: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`${API_URL}/api/admin/transactions`);
        return res.data;
    },
    getTransactionDetail: async (id)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`${API_URL}/api/admin/transactions/${id}`);
        return res.data;
    },
    getAuthLogs: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`${API_URL}/api/admin/logs`);
        return res.data;
    },
    getDashboardStats: async (range)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`${API_URL}/api/admin/dashboard`, {
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
}),
"[project]/components/policy/AuditLog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuditLog",
    ()=>AuditLog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$adminService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/adminService.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function AuditLog({ refreshKey }) {
    const [logs, setLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchLogs = async ()=>{
            try {
                const data = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$adminService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminService"].getPolicyAuditLogs();
                setLogs(data || []);
                console.log("Fetched logs:", data);
            } catch (error) {
                console.error("Failed to fetch logs");
            } finally{
                setIsLoading(false);
            }
        };
        fetchLogs();
    }, [
        refreshKey
    ]);
    // Format Tanggal: "Jan 4, 14:32"
    const formatDate = (dateString)=>{
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        }).replace(',', ''); // Hapus koma agar persis request
    };
    // Helper untuk menebalkan kata kunci (Consumer, Corporate, High, dll)
    const formatActionText = (text)=>{
        // Regex untuk menangkap kata kunci Policy
        return text.replace(/(Consumer|Corporate|High|Medium|Low|Risk|Critical)/gi, '<strong class="text-[var(--text-primary)] font-semibold">$1</strong>');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-8 mt-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2.5 text-[16px] font-semibold text-[var(--text-primary)] mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        className: "w-5 h-5 text-[var(--text-tertiary)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "12",
                                cy: "12",
                                r: "10"
                            }, void 0, false, {
                                fileName: "[project]/components/policy/AuditLog.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                points: "12 6 12 12 16 14"
                            }, void 0, false, {
                                fileName: "[project]/components/policy/AuditLog.tsx",
                                lineNumber: 46,
                                columnNumber: 43
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/policy/AuditLog.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    "Recent Policy Changes"
                ]
            }, void 0, true, {
                fileName: "[project]/components/policy/AuditLog.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[var(--bg-tertiary)] rounded-[8px] p-3 min-h-[50px]",
                children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-4 text-[12px] text-[var(--text-tertiary)]",
                    children: "Loading history..."
                }, void 0, false, {
                    fileName: "[project]/components/policy/AuditLog.tsx",
                    lineNumber: 54,
                    columnNumber: 12
                }, this) : logs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-4 text-[12px] text-[var(--text-tertiary)]",
                    children: "No recent activity recorded."
                }, void 0, false, {
                    fileName: "[project]/components/policy/AuditLog.tsx",
                    lineNumber: 56,
                    columnNumber: 12
                }, this) : logs.map((log, i)=>// Flex Row Layout (Sesuai Request HTML: Time | Action | User)
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex items-start  py-2 text-[12px] ${i !== logs.length - 1 ? 'border-b border-[var(--border-primary)]' : ''}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[var(--text-tertiary)] font-mono shrink-0 w-[100px] pt-0.5",
                                children: formatDate(log.createdAt)
                            }, void 0, false, {
                                fileName: "[project]/components/policy/AuditLog.tsx",
                                lineNumber: 63,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[var(--text-secondary)] flex-1 leading-relaxed",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: formatActionText(log.action)
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/policy/AuditLog.tsx",
                                    lineNumber: 69,
                                    columnNumber: 18
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/policy/AuditLog.tsx",
                                lineNumber: 68,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[var(--accent)] font-medium ml-auto shrink-0 pt-0.5",
                                children: log.adminEmail || 'System'
                            }, void 0, false, {
                                fileName: "[project]/components/policy/AuditLog.tsx",
                                lineNumber: 73,
                                columnNumber: 15
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/components/policy/AuditLog.tsx",
                        lineNumber: 60,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/policy/AuditLog.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/policy/AuditLog.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/policy/EditPolicyModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EditPolicyModal",
    ()=>EditPolicyModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// 'use client';
// import { useState, useEffect } from 'react';
// // Tipe data disesuaikan dengan permintaan client
// interface PolicyConfig {
//   userVerification: string; // 'discouraged' | 'required'
//   uvCache: number;
//   requireStepUp: boolean;
//   stepUpMethods: string[]; // Hanya ['email_otp']
//   txnSigning: boolean;
//   knownDevice: boolean;
//   minDeviceAge: number;
//   maxAttempts: number;
//   lockoutDuration: number;
//   lockoutAction: string; // 'soft_lock', 'suspend_device', 'suspend_account'
//   totalTimeout: number;
//   fido2Timeout: number;
//   stepUpTimeout: number;
//   baseDelay: number;
//   progDelay: boolean;
//   // Field Corporate only
//   dualAuth?: boolean;
//   minApprovers?: number;
//   approvalTimeout?: number;
// }
// const defaultValues: PolicyConfig = {
//   userVerification: 'discouraged',
//   uvCache: 300,
//   requireStepUp: false,
//   stepUpMethods: [],
//   txnSigning: false,
//   knownDevice: false,
//   minDeviceAge: 0,
//   maxAttempts: 3,
//   lockoutDuration: 300,
//   lockoutAction: 'soft_lock',
//   totalTimeout: 180,
//   fido2Timeout: 120,
//   stepUpTimeout: 60,
//   baseDelay: 0,
//   progDelay: false
// };
// export const EditPolicyModal = ({ isOpen, onClose, policyName, initialData, isCorporate, onSave }: any) => {
//   const [formData, setFormData] = useState<PolicyConfig>({ ...defaultValues, ...initialData });
//   useEffect(() => {
//     // eslint-disable-next-line react-hooks/set-state-in-effect
//     if (isOpen) setFormData({ ...defaultValues, ...initialData });
//   }, [isOpen, initialData]);
//   if (!isOpen) return null;
//   const handleChange = (field: keyof PolicyConfig, value: any) => {
//     setFormData(prev => ({ ...prev, [field]: value }));
//   };
//   return (
//     <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[2000] p-4" onClick={onClose}>
//       <div className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[12px] w-full max-w-[600px] flex flex-col max-h-[90vh]" onClick={e => e.stopPropagation()}>
//         {/* Header */}
//         <div className="p-5 border-b border-[var(--border-primary)] flex justify-between items-center">
//           <h3 className="text-lg font-semibold capitalize text-[var(--text-primary)]">Edit {policyName.replace(/_/g, ' ')} Policy</h3>
//           <button onClick={onClose} className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)]">✕</button>
//         </div>
//         {/* Scrollable Body */}
//         <div className="flex-1 overflow-y-auto p-6 custom-scrollbar space-y-6">
//             {/* 1. General Auth Settings */}
//             <section>
//                 <h4 className="text-xs font-bold text-[var(--text-tertiary)] uppercase mb-4">Authentication Requirements</h4>
//                 <div className="grid grid-cols-2 gap-4">
//                     <div>
//                         <label className="block text-[12px] text-[var(--text-secondary)] mb-1.5">User Verification (UV)</label>
//                         <select 
//                             className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[6px] p-2 text-sm text-[var(--text-primary)]"
//                             value={formData.userVerification}
//                             onChange={e => handleChange('userVerification', e.target.value)}
//                         >
//                             <option value="discouraged">Discouraged (UP Only - Tap)</option>
//                             <option value="required">Required (UV Mandatory - Bio/PIN)</option>
//                         </select>
//                     </div>
//                     <div>
//                         <label className="block text-[12px] text-[var(--text-secondary)] mb-1.5">UV Cache Window (Seconds)</label>
//                         <input type="number" className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[6px] p-2 text-sm text-[var(--text-primary)]"
//                             value={formData.uvCache} onChange={e => handleChange('uvCache', parseInt(e.target.value))} />
//                     </div>
//                 </div>
//                 <div className="mt-4 space-y-2">
//                     <label className="flex items-center gap-2 cursor-pointer">
//                         <input type="checkbox" checked={formData.txnSigning} onChange={e => handleChange('txnSigning', e.target.checked)} className="rounded bg-[var(--bg-tertiary)] border-[var(--border-primary)]" />
//                         <span className="text-sm text-[var(--text-primary)]">Enable Transaction Signing (Include details in challenge)</span>
//                     </label>
//                     <label className="flex items-center gap-2 cursor-pointer">
//                         <input type="checkbox" checked={formData.knownDevice} onChange={e => handleChange('knownDevice', e.target.checked)} className="rounded bg-[var(--bg-tertiary)] border-[var(--border-primary)]" />
//                         <span className="text-sm text-[var(--text-primary)]">Require Known Device</span>
//                     </label>
//                 </div>
//             </section>
//             {/* 2. Step-Up Auth */}
//             <section>
//                 <h4 className="text-xs font-bold text-[var(--text-tertiary)] uppercase mb-4 border-t border-[var(--border-primary)] pt-4">Step-Up Authentication</h4>
//                 <div className="flex items-center justify-between mb-4">
//                     <span className="text-sm text-[var(--text-primary)]">Require Step-Up?</span>
//                     <input type="checkbox" checked={formData.requireStepUp} onChange={e => handleChange('requireStepUp', e.target.checked)} />
//                 </div>
//                 {formData.requireStepUp && (
//                     <div>
//                         <label className="block text-[12px] text-[var(--text-secondary)] mb-1.5">Allowed Method</label>
//                         <select disabled className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[6px] p-2 text-sm text-[var(--text-primary)] opacity-70 cursor-not-allowed">
//                             <option>Email OTP (Default)</option>
//                         </select>
//                         <p className="text-[10px] text-[var(--text-tertiary)] mt-1">Only Email OTP is supported per current configuration.</p>
//                     </div>
//                 )}
//             </section>
//             {/* 3. Security & Lockout */}
//             <section>
//                 <h4 className="text-xs font-bold text-[var(--text-tertiary)] uppercase mb-4 border-t border-[var(--border-primary)] pt-4">Security Controls</h4>
//                 <div className="grid grid-cols-2 gap-4 mb-4">
//                     <div>
//                         <label className="block text-[12px] text-[var(--text-secondary)] mb-1.5">Max Attempts</label>
//                         <input type="number" className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[6px] p-2 text-sm text-[var(--text-primary)]"
//                             value={formData.maxAttempts} onChange={e => handleChange('maxAttempts', parseInt(e.target.value))} />
//                     </div>
//                     <div>
//                         <label className="block text-[12px] text-[var(--text-secondary)] mb-1.5">Lockout Action</label>
//                         <select 
//                             className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[6px] p-2 text-sm text-[var(--text-primary)]"
//                             value={formData.lockoutAction}
//                             onChange={e => handleChange('lockoutAction', e.target.value)}
//                         >
//                             <option value="soft_lock">Soft Lock (Temporary)</option>
//                             <option value="suspend_device">Suspend Device</option>
//                             <option value="suspend_account">Suspend Account</option>
//                         </select>
//                     </div>
//                 </div>
//                 <div className="grid grid-cols-2 gap-4">
//                     <div>
//                         <label className="block text-[12px] text-[var(--text-secondary)] mb-1.5">Base Delay (Seconds)</label>
//                         <input type="number" className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[6px] p-2 text-sm text-[var(--text-primary)]"
//                             value={formData.baseDelay || 0} onChange={e => handleChange('baseDelay', parseInt(e.target.value))} />
//                     </div>
//                     <div className="flex items-end pb-2">
//                         <label className="flex items-center gap-2 cursor-pointer">
//                             <input type="checkbox" checked={formData.progDelay} onChange={e => handleChange('progDelay', e.target.checked)} />
//                             <span className="text-sm text-[var(--text-primary)]">Progressive Delay (2x)</span>
//                         </label>
//                     </div>
//                 </div>
//             </section>
//             {/* 4. Timeouts */}
//             <section>
//                 <h4 className="text-xs font-bold text-[var(--text-tertiary)] uppercase mb-4 border-t border-[var(--border-primary)] pt-4">Timeouts (Seconds)</h4>
//                 <div className="grid grid-cols-3 gap-3">
//                     <div>
//                         <label className="block text-[11px] text-[var(--text-secondary)] mb-1">Total Timeout</label>
//                         <input type="number" className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[6px] p-2 text-sm"
//                             value={formData.totalTimeout} onChange={e => handleChange('totalTimeout', parseInt(e.target.value))} />
//                     </div>
//                     <div>
//                         <label className="block text-[11px] text-[var(--text-secondary)] mb-1">FIDO2 Timeout</label>
//                         <input type="number" className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[6px] p-2 text-sm"
//                             value={formData.fido2Timeout} onChange={e => handleChange('fido2Timeout', parseInt(e.target.value))} />
//                     </div>
//                     <div>
//                         <label className="block text-[11px] text-[var(--text-secondary)] mb-1">Step-Up Timeout</label>
//                         <input type="number" className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[6px] p-2 text-sm"
//                             value={formData.stepUpTimeout} onChange={e => handleChange('stepUpTimeout', parseInt(e.target.value))} />
//                     </div>
//                 </div>
//             </section>
//             {/* Corporate Only Fields */}
//             {isCorporate && (
//                 <section>
//                     <h4 className="text-xs font-bold text-[var(--accent)] uppercase mb-4 border-t border-[var(--accent)]/30 pt-4">Corporate Controls</h4>
//                     <div className="flex items-center gap-4 mb-3">
//                         <label className="flex items-center gap-2 cursor-pointer">
//                             <input type="checkbox" checked={formData.dualAuth} onChange={e => handleChange('dualAuth', e.target.checked)} />
//                             <span className="text-sm text-[var(--text-primary)] font-medium">Require Dual Approval</span>
//                         </label>
//                     </div>
//                     {formData.dualAuth && (
//                         <div className="grid grid-cols-2 gap-4">
//                             <div>
//                                 <label className="block text-[11px] text-[var(--text-secondary)] mb-1">Min. Approvers</label>
//                                 <input type="number" min="1" className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[6px] p-2 text-sm"
//                                     value={formData.minApprovers} onChange={e => handleChange('minApprovers', parseInt(e.target.value))} />
//                             </div>
//                             <div>
//                                 <label className="block text-[11px] text-[var(--text-secondary)] mb-1">Approval Timeout (Hours)</label>
//                                 <input type="number" className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[6px] p-2 text-sm"
//                                     value={formData.approvalTimeout} onChange={e => handleChange('approvalTimeout', parseInt(e.target.value))} />
//                             </div>
//                         </div>
//                     )}
//                 </section>
//             )}
//         </div>
//         {/* Footer Actions */}
//         <div className="p-5 border-t border-[var(--border-primary)] flex justify-end gap-3 bg-[var(--bg-secondary)] rounded-b-[12px]">
//             <button onClick={onClose} className="px-4 py-2 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[6px] text-sm hover:bg-[var(--bg-hover)]">Cancel</button>
//             <button onClick={() => onSave(formData)} className="px-4 py-2 bg-[var(--accent)] text-white rounded-[6px] text-sm hover:bg-[var(--accent-hover)]">Save Changes</button>
//         </div>
//       </div>
//     </div>
//   );
// };
'use client';
;
;
const defaultValues = {
    userVerification: 'required',
    uvCache: 0,
    txnSigning: false,
    knownDevice: false,
    minDeviceAge: 0,
    deviceTypes: 'all',
    requireStepUp: false,
    stepUpMethods: [],
    maxAttempts: 3,
    lockoutDuration: 900,
    lockoutAction: 'soft_lock',
    captchaAfter: 1,
    baseDelay: 5,
    progDelay: true,
    notifySecurity: true,
    totalTimeout: 120,
    fido2Timeout: 60,
    stepUpTimeout: 0,
    idleTimeout: 45,
    dualAuth: false,
    minApprovers: 2,
    approvalTimeout: 4
};
// Dictionary untuk label Step-Up
const STEP_UP_LABELS = {
    hardware_totp: 'Hardware TOTP',
    push_otp: 'Push OTP (Mobile App)',
    sms_otp: 'SMS OTP',
    email_otp: 'Email OTP',
    callback: 'Callback Verification'
};
// Komponen Reusable Switch Toggle (Mirip HTML Anda)
const ToggleSwitch = ({ label, desc, checked, onChange })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-between py-3 border-b border-[var(--border-primary)] last:border-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-0.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[13px] font-medium text-[var(--text-primary)]",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/components/policy/EditPolicyModal.tsx",
                        lineNumber: 301,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[11px] text-[var(--text-tertiary)]",
                        children: desc
                    }, void 0, false, {
                        fileName: "[project]/components/policy/EditPolicyModal.tsx",
                        lineNumber: 302,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/policy/EditPolicyModal.tsx",
                lineNumber: 300,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: ()=>onChange(!checked),
                className: `w-[44px] h-[24px] rounded-full relative cursor-pointer transition-all duration-200 shrink-0 ${checked ? 'bg-[var(--accent)]' : 'bg-[var(--bg-tertiary)]'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `absolute w-[18px] h-[18px] bg-white rounded-full top-[3px] transition-all duration-200 ${checked ? 'left-[23px]' : 'left-[3px]'}`
                }, void 0, false, {
                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                    lineNumber: 308,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/policy/EditPolicyModal.tsx",
                lineNumber: 304,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/policy/EditPolicyModal.tsx",
        lineNumber: 299,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const EditPolicyModal = ({ isOpen, onClose, policyName, initialData, isCorporate, onSave })=>{
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        ...defaultValues,
        ...initialData
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setFormData({
                ...defaultValues,
                ...initialData
            });
        }
    }, [
        isOpen,
        initialData
    ]);
    if (!isOpen) return null;
    const handleChange = (field, value)=>{
        setFormData((prev)=>({
                ...prev,
                [field]: value
            }));
    };
    const handleAddStepUp = (e)=>{
        const val = e.target.value;
        if (val && !formData.stepUpMethods.includes(val)) {
            handleChange('stepUpMethods', [
                ...formData.stepUpMethods,
                val
            ]);
        }
        e.target.value = ''; // Reset select
    };
    const handleRemoveStepUp = (methodToRemove)=>{
        handleChange('stepUpMethods', formData.stepUpMethods.filter((m)=>m !== methodToRemove));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/70 flex items-center justify-center z-[2000] p-4 opacity-100 transition-opacity",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[16px] w-full max-w-[720px] flex flex-col max-h-[90vh] shadow-2xl scale-100 transition-transform",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-6 py-5 border-b border-[var(--border-primary)] flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-base font-semibold text-[var(--text-primary)] capitalize",
                            children: [
                                "Edit Policy: ",
                                isCorporate ? 'Corporate' : 'Consumer',
                                " ",
                                policyName.replace(/_/g, ' '),
                                " Risk"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/policy/EditPolicyModal.tsx",
                            lineNumber: 347,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "w-8 h-8 rounded-md bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] flex items-center justify-center transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                className: "w-[18px] h-[18px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "18",
                                        y1: "6",
                                        x2: "6",
                                        y2: "18"
                                    }, void 0, false, {
                                        fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                        lineNumber: 351,
                                        columnNumber: 118
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "6",
                                        y1: "6",
                                        x2: "18",
                                        y2: "18"
                                    }, void 0, false, {
                                        fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                        lineNumber: 351,
                                        columnNumber: 155
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                lineNumber: 351,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/policy/EditPolicyModal.tsx",
                            lineNumber: 350,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                    lineNumber: 346,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 overflow-y-auto custom-scrollbar space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[13px] font-semibold text-[var(--text-primary)] mb-4 pb-2 border-b border-[var(--border-primary)] flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            className: "w-4 h-4 text-[var(--text-tertiary)]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: "3",
                                                    y: "11",
                                                    width: "18",
                                                    height: "11",
                                                    rx: "2",
                                                    ry: "2"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                    lineNumber: 361,
                                                    columnNumber: 144
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M7 11V7a5 5 0 0110 0v4"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                    lineNumber: 361,
                                                    columnNumber: 201
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                            lineNumber: 361,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "FIDO2 Authentication"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                    lineNumber: 360,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[12px] font-medium text-[var(--text-secondary)]",
                                                    children: "User Verification"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                    lineNumber: 366,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    className: "px-3 py-2.5 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-md text-[13px] text-[var(--text-primary)] outline-none focus:border-[var(--accent)]",
                                                    value: formData.userVerification,
                                                    onChange: (e)=>handleChange('userVerification', e.target.value),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "discouraged",
                                                            children: "Discouraged (UP only)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                            lineNumber: 369,
                                                            columnNumber: 29
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "preferred",
                                                            children: "Preferred (UV if available)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                            lineNumber: 370,
                                                            columnNumber: 29
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "required",
                                                            children: "Required (UV mandatory)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                            lineNumber: 371,
                                                            columnNumber: 29
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                    lineNumber: 367,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] text-[var(--text-tertiary)]",
                                                    children: "Whether biometric/PIN is required"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                    lineNumber: 373,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                            lineNumber: 365,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[12px] font-medium text-[var(--text-secondary)]",
                                                    children: "UV Cache Window"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                    lineNumber: 376,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            className: "flex-1 px-3 py-2.5 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-md text-[13px] text-[var(--text-primary)] outline-none focus:border-[var(--accent)]",
                                                            value: formData.uvCache,
                                                            onChange: (e)=>handleChange('uvCache', parseInt(e.target.value))
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                            lineNumber: 378,
                                                            columnNumber: 29
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[12px] text-[var(--text-tertiary)]",
                                                            children: "seconds"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                            lineNumber: 380,
                                                            columnNumber: 29
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                    lineNumber: 377,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] text-[var(--text-tertiary)]",
                                                    children: "0 = fresh UV required every time"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                    lineNumber: 382,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                            lineNumber: 375,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                    lineNumber: 364,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ToggleSwitch, {
                                            label: "Transaction Signing",
                                            desc: "Include transaction details in challenge for user to sign",
                                            checked: formData.txnSigning,
                                            onChange: (v)=>handleChange('txnSigning', v)
                                        }, void 0, false, {
                                            fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                            lineNumber: 387,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ToggleSwitch, {
                                            label: "Require Known Device",
                                            desc: "Only allow previously registered devices",
                                            checked: formData.knownDevice,
                                            onChange: (v)=>handleChange('knownDevice', v)
                                        }, void 0, false, {
                                            fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                            lineNumber: 388,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                    lineNumber: 386,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4 mt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[12px] font-medium text-[var(--text-secondary)]",
                                                    children: "Minimum Device Age"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                    lineNumber: 393,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            className: "flex-1 px-3 py-2.5 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-md text-[13px] text-[var(--text-primary)] outline-none focus:border-[var(--accent)]",
                                                            value: formData.minDeviceAge,
                                                            onChange: (e)=>handleChange('minDeviceAge', parseInt(e.target.value))
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                            lineNumber: 395,
                                                            columnNumber: 29
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[12px] text-[var(--text-tertiary)]",
                                                            children: "days"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                            lineNumber: 397,
                                                            columnNumber: 29
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                    lineNumber: 394,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                            lineNumber: 392,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[12px] font-medium text-[var(--text-secondary)]",
                                                    children: "Allowed Device Types"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                    lineNumber: 401,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    className: "px-3 py-2.5 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-md text-[13px] text-[var(--text-primary)] outline-none focus:border-[var(--accent)]",
                                                    value: formData.deviceTypes,
                                                    onChange: (e)=>handleChange('deviceTypes', e.target.value),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "all",
                                                            children: "All (Platform + Cross-platform)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                            lineNumber: 404,
                                                            columnNumber: 29
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "platform",
                                                            children: "Platform only (Built-in)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                            lineNumber: 405,
                                                            columnNumber: 29
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "cross-platform",
                                                            children: "Cross-platform only (USB/NFC)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                            lineNumber: 406,
                                                            columnNumber: 29
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                    lineNumber: 402,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                            lineNumber: 400,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                    lineNumber: 391,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/policy/EditPolicyModal.tsx",
                            lineNumber: 359,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[13px] font-semibold text-[var(--text-primary)] mb-4 pb-2 border-b border-[var(--border-primary)] flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            className: "w-4 h-4 text-[var(--text-tertiary)]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                                            }, void 0, false, {
                                                fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                lineNumber: 415,
                                                columnNumber: 144
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                            lineNumber: 415,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Step-Up Authentication"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                    lineNumber: 414,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ToggleSwitch, {
                                    label: "Require Step-Up Factor",
                                    desc: "Require additional verification beyond FIDO2",
                                    checked: formData.requireStepUp,
                                    onChange: (v)=>handleChange('requireStepUp', v)
                                }, void 0, false, {
                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                    lineNumber: 419,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                formData.requireStepUp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-[12px] font-medium text-[var(--text-secondary)]",
                                            children: "Allowed Step-Up Methods"
                                        }, void 0, false, {
                                            fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                            lineNumber: 423,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2 mt-2",
                                            children: formData.stepUpMethods.map((method)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-flex items-center gap-1 px-2.5 py-1 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-full text-[11px] text-[var(--text-secondary)]",
                                                    children: [
                                                        STEP_UP_LABELS[method] || method,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleRemoveStepUp(method),
                                                            className: "w-3.5 h-3.5 ml-1 bg-transparent hover:bg-[var(--error-muted)] hover:text-[var(--error)] rounded-full flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                viewBox: "0 0 24 24",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2",
                                                                className: "w-2.5 h-2.5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                        x1: "18",
                                                                        y1: "6",
                                                                        x2: "6",
                                                                        y2: "18"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                                        lineNumber: 429,
                                                                        columnNumber: 140
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                        x1: "6",
                                                                        y1: "6",
                                                                        x2: "18",
                                                                        y2: "18"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                                        lineNumber: 429,
                                                                        columnNumber: 177
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                                lineNumber: 429,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                            lineNumber: 428,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, method, true, {
                                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                    lineNumber: 426,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                            lineNumber: 424,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: "mt-3 w-full px-3 py-2.5 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-md text-[13px] text-[var(--text-secondary)] outline-none focus:border-[var(--accent)]",
                                            onChange: handleAddStepUp,
                                            defaultValue: "",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    disabled: true,
                                                    children: "+ Add method..."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                    lineNumber: 436,
                                                    columnNumber: 29
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                Object.entries(STEP_UP_LABELS).map(([key, label])=>!formData.stepUpMethods.includes(key) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: key,
                                                        children: label
                                                    }, key, false, {
                                                        fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                        lineNumber: 438,
                                                        columnNumber: 74
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                            lineNumber: 434,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                    lineNumber: 422,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/policy/EditPolicyModal.tsx",
                            lineNumber: 413,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[13px] font-semibold text-[var(--text-primary)] mb-4 pb-2 border-b border-[var(--border-primary)] flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            className: "w-4 h-4 text-[var(--text-tertiary)]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                    points: "23 4 23 10 17 10"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                    lineNumber: 448,
                                                    columnNumber: 144
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M20.49 15a9 9 0 11-2.12-9.36L23 10"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                    lineNumber: 448,
                                                    columnNumber: 181
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                            lineNumber: 448,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Retry & Lockout Settings"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                    lineNumber: 447,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-3 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[12px] font-medium text-[var(--text-secondary)]",
                                                    children: "Max Attempts"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                    lineNumber: 453,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    className: "px-3 py-2.5 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-md text-[13px] outline-none focus:border-[var(--accent)] text-[var(--text-primary)]",
                                                    value: formData.maxAttempts,
                                                    onChange: (e)=>handleChange('maxAttempts', parseInt(e.target.value))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                    lineNumber: 454,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                            lineNumber: 452,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[12px] font-medium text-[var(--text-secondary)]",
                                                    children: "Lockout Duration"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                    lineNumber: 458,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            className: "flex-1 px-3 py-2.5 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-md text-[13px] outline-none focus:border-[var(--accent)] text-[var(--text-primary)]",
                                                            value: formData.lockoutDuration,
                                                            onChange: (e)=>handleChange('lockoutDuration', parseInt(e.target.value))
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                            lineNumber: 460,
                                                            columnNumber: 29
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[12px] text-[var(--text-tertiary)]",
                                                            children: "sec"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                            lineNumber: 462,
                                                            columnNumber: 29
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                    lineNumber: 459,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                            lineNumber: 457,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[12px] font-medium text-[var(--text-secondary)]",
                                                    children: "Lockout Action"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                    lineNumber: 466,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    className: "px-3 py-2.5 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-md text-[13px] outline-none focus:border-[var(--accent)] text-[var(--text-primary)]",
                                                    value: formData.lockoutAction,
                                                    onChange: (e)=>handleChange('lockoutAction', e.target.value),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "soft_lock",
                                                            children: "Soft Lock"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                            lineNumber: 469,
                                                            columnNumber: 29
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "hard_lock",
                                                            children: "Hard Lock"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                            lineNumber: 470,
                                                            columnNumber: 29
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "device_suspend",
                                                            children: "Suspend Device"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                            lineNumber: 471,
                                                            columnNumber: 29
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "account_freeze",
                                                            children: "Freeze Account"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                            lineNumber: 472,
                                                            columnNumber: 29
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                    lineNumber: 467,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                            lineNumber: 465,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                    lineNumber: 451,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4 mt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[12px] font-medium text-[var(--text-secondary)]",
                                                    children: "CAPTCHA After Failures"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                    lineNumber: 479,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    className: "px-3 py-2.5 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-md text-[13px] outline-none focus:border-[var(--accent)] text-[var(--text-primary)]",
                                                    value: formData.captchaAfter,
                                                    onChange: (e)=>handleChange('captchaAfter', parseInt(e.target.value))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                    lineNumber: 480,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] text-[var(--text-tertiary)]",
                                                    children: "0 = always require CAPTCHA"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                    lineNumber: 482,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                            lineNumber: 478,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[12px] font-medium text-[var(--text-secondary)]",
                                                    children: "Base Delay"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                    lineNumber: 485,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            className: "flex-1 px-3 py-2.5 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-md text-[13px] outline-none focus:border-[var(--accent)] text-[var(--text-primary)]",
                                                            value: formData.baseDelay,
                                                            onChange: (e)=>handleChange('baseDelay', parseInt(e.target.value))
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                            lineNumber: 487,
                                                            columnNumber: 29
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[12px] text-[var(--text-tertiary)]",
                                                            children: "sec"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                            lineNumber: 489,
                                                            columnNumber: 29
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                    lineNumber: 486,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                            lineNumber: 484,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                    lineNumber: 477,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ToggleSwitch, {
                                            label: "Progressive Delay",
                                            desc: "Exponentially increase delay between retry attempts",
                                            checked: formData.progDelay,
                                            onChange: (v)=>handleChange('progDelay', v)
                                        }, void 0, false, {
                                            fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                            lineNumber: 495,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ToggleSwitch, {
                                            label: "Notify Security Team",
                                            desc: "Alert security team when lockout is triggered",
                                            checked: formData.notifySecurity,
                                            onChange: (v)=>handleChange('notifySecurity', v)
                                        }, void 0, false, {
                                            fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                            lineNumber: 496,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                    lineNumber: 494,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/policy/EditPolicyModal.tsx",
                            lineNumber: 446,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[13px] font-semibold text-[var(--text-primary)] mb-4 pb-2 border-b border-[var(--border-primary)] flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            className: "w-4 h-4 text-[var(--text-tertiary)]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "12",
                                                    cy: "12",
                                                    r: "10"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                    lineNumber: 503,
                                                    columnNumber: 144
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                    points: "12 6 12 12 16 14"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                    lineNumber: 503,
                                                    columnNumber: 176
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                            lineNumber: 503,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Timeout Settings (Seconds)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                    lineNumber: 502,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[12px] font-medium text-[var(--text-secondary)]",
                                                    children: "Total Timeout"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                    lineNumber: 508,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    className: "px-3 py-2.5 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-md text-[13px] outline-none text-[var(--text-primary)]",
                                                    value: formData.totalTimeout,
                                                    onChange: (e)=>handleChange('totalTimeout', parseInt(e.target.value))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                    lineNumber: 509,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                            lineNumber: 507,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[12px] font-medium text-[var(--text-secondary)]",
                                                    children: "FIDO2 Timeout"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                    lineNumber: 513,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    className: "px-3 py-2.5 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-md text-[13px] outline-none text-[var(--text-primary)]",
                                                    value: formData.fido2Timeout,
                                                    onChange: (e)=>handleChange('fido2Timeout', parseInt(e.target.value))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                    lineNumber: 514,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                            lineNumber: 512,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[12px] font-medium text-[var(--text-secondary)]",
                                                    children: "Step-Up Timeout"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                    lineNumber: 518,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    className: "px-3 py-2.5 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-md text-[13px] outline-none text-[var(--text-primary)]",
                                                    value: formData.stepUpTimeout,
                                                    onChange: (e)=>handleChange('stepUpTimeout', parseInt(e.target.value))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                    lineNumber: 519,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                            lineNumber: 517,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[12px] font-medium text-[var(--text-secondary)]",
                                                    children: "Idle Timeout"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                    lineNumber: 523,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    className: "px-3 py-2.5 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-md text-[13px] outline-none text-[var(--text-primary)]",
                                                    value: formData.idleTimeout,
                                                    onChange: (e)=>handleChange('idleTimeout', parseInt(e.target.value))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                    lineNumber: 524,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                            lineNumber: 522,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                    lineNumber: 506,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/policy/EditPolicyModal.tsx",
                            lineNumber: 501,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        isCorporate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[13px] font-semibold text-[var(--text-primary)] mb-4 pb-2 border-b border-[var(--border-primary)] flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            className: "w-4 h-4 text-[var(--text-tertiary)]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                    lineNumber: 534,
                                                    columnNumber: 148
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "9",
                                                    cy: "7",
                                                    r: "4"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                    lineNumber: 534,
                                                    columnNumber: 199
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M23 21v-2a4 4 0 00-3-3.87"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                    lineNumber: 534,
                                                    columnNumber: 228
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M16 3.13a4 4 0 010 7.75"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                    lineNumber: 534,
                                                    columnNumber: 265
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                            lineNumber: 534,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Dual Authorization (Corporate)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                    lineNumber: 533,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ToggleSwitch, {
                                    label: "Require Dual Authorization",
                                    desc: "Transaction must be approved by multiple users",
                                    checked: !!formData.dualAuth,
                                    onChange: (v)=>handleChange('dualAuth', v)
                                }, void 0, false, {
                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                    lineNumber: 538,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                formData.dualAuth && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4 mt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[12px] font-medium text-[var(--text-secondary)]",
                                                    children: "Minimum Approvers"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                    lineNumber: 543,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    min: "1",
                                                    className: "px-3 py-2.5 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-md text-[13px] outline-none text-[var(--text-primary)]",
                                                    value: formData.minApprovers,
                                                    onChange: (e)=>handleChange('minApprovers', parseInt(e.target.value))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                    lineNumber: 544,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                            lineNumber: 542,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[12px] font-medium text-[var(--text-secondary)]",
                                                    children: "Approval Timeout (Hours)"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                    lineNumber: 548,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    className: "px-3 py-2.5 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-md text-[13px] outline-none text-[var(--text-primary)]",
                                                    value: formData.approvalTimeout,
                                                    onChange: (e)=>handleChange('approvalTimeout', parseInt(e.target.value))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                                    lineNumber: 549,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                            lineNumber: 547,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                    lineNumber: 541,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/policy/EditPolicyModal.tsx",
                            lineNumber: 532,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                    lineNumber: 356,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-6 py-4 border-t border-[var(--border-primary)] flex justify-end gap-2.5 bg-[var(--bg-tertiary)] rounded-b-[16px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "px-4 py-2 bg-[var(--bg-tertiary)] border border-[var(--border-secondary)] text-[var(--text-primary)] rounded-md text-[13px] font-medium hover:bg-[var(--bg-hover)] transition-colors",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/components/policy/EditPolicyModal.tsx",
                            lineNumber: 561,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onSave(formData),
                            className: "px-4 py-2 flex items-center gap-1.5 bg-[var(--accent)] text-white rounded-md text-[13px] font-medium hover:bg-[var(--accent-hover)] transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    className: "w-4 h-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"
                                        }, void 0, false, {
                                            fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                            lineNumber: 565,
                                            columnNumber: 112
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                            points: "17 21 17 13 7 13 7 21"
                                        }, void 0, false, {
                                            fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                            lineNumber: 565,
                                            columnNumber: 183
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                            points: "7 3 7 8 15 8"
                                        }, void 0, false, {
                                            fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                            lineNumber: 565,
                                            columnNumber: 225
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                                    lineNumber: 565,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Save Policy"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/policy/EditPolicyModal.tsx",
                            lineNumber: 564,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/policy/EditPolicyModal.tsx",
                    lineNumber: 560,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/policy/EditPolicyModal.tsx",
            lineNumber: 343,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/policy/EditPolicyModal.tsx",
        lineNumber: 342,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/app/(admin)/auth-policies/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AuthPoliciesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$policy$2f$ChannelTabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/policy/ChannelTabs.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$policy$2f$PolicyCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/policy/PolicyCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$policy$2f$ComparisonTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/policy/ComparisonTable.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$policy$2f$AuditLog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/policy/AuditLog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$policy$2f$EditPolicyModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/policy/EditPolicyModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$adminService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/adminService.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
const initialPolicies = {
    consumer: {
        web: {
            low: {},
            medium: {},
            high: {}
        },
        mobile: {
            low: {},
            medium: {},
            high: {}
        }
    },
    corporate: {
        web: {
            low: {},
            medium: {},
            high: {}
        },
        mobile: {
            low: {},
            medium: {},
            high: {}
        }
    }
};
function AuthPoliciesPage() {
    const [policies, setPolicies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialPolicies);
    const [segment, setSegment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('consumer');
    const [channel, setChannel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('web');
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingRisk, setEditingRisk] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [activeCount, setActiveCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [refreshLogKey, setRefreshLogKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    // --- Logic User Session & Sync (Sama seperti sebelumnya) ---
    const syncWithDatabase = async ()=>{
        try {
            setLoading(true);
            const apiData = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$adminService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminService"].getPolicies();
            if (Array.isArray(apiData)) setActiveCount(apiData.length);
            const newStructure = JSON.parse(JSON.stringify(initialPolicies));
            if (Array.isArray(apiData)) {
                apiData.forEach((item)=>{
                    const s = item.segment?.toLowerCase();
                    const c = item.channel?.toLowerCase();
                    const r = item.riskLevel?.toLowerCase();
                    if (newStructure[s] && newStructure[s][c] && newStructure[s][c][r]) {
                        try {
                            newStructure[s][c][r] = {
                                ...JSON.parse(item.condition),
                                id: item.id
                            };
                        } catch (e) {}
                    }
                });
            }
            setPolicies(newStructure);
        } catch (err) {
            console.error(err);
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        syncWithDatabase();
    }, []);
    const handleSavePolicy = async (updatedData)=>{
        if (!editingRisk) return;
        const currentUserEmail = localStorage.getItem('paykey_last_user_email');
        console.log("Saving policy with data:", {
            segment,
            channel,
            riskLevel: editingRisk,
            condition: updatedData,
            adminEmail: currentUserEmail
        });
        try {
            const cleanData = {
                ...updatedData
            };
            delete cleanData.id;
            await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$adminService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminService"].upsertPolicy({
                segment: segment.toUpperCase(),
                channel: channel.toUpperCase(),
                riskLevel: editingRisk.toUpperCase(),
                condition: JSON.stringify(cleanData),
                adminEmail: currentUserEmail
            });
            setToast("Policy saved successfully");
            await syncWithDatabase();
            setRefreshLogKey((prev)=>prev + 1);
            setIsModalOpen(false);
            setTimeout(()=>setToast(null), 3000);
        } catch (err) {
            alert("Failed to save.");
        }
    };
    const currentPolicySet = policies[segment][channel];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 flex flex-col h-screen overflow-hidden min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "px-6 py-4 bg-[var(--bg-secondary)] border-b border-[var(--border-primary)] flex justify-between items-center shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-[18px] font-semibold text-[var(--text-primary)]",
                                        children: "Authentication Policies"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/auth-policies/page.tsx",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-2.5 py-1 bg-[var(--bg-tertiary)] rounded-[20px] text-[11px] text-[var(--text-secondary)] font-medium",
                                        children: loading ? 'Syncing...' : `${activeCount} Active Policies`
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/auth-policies/page.tsx",
                                        lineNumber: 85,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/auth-policies/page.tsx",
                                lineNumber: 83,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "flex items-center gap-1.5 px-3.5 py-2 bg-[var(--bg-tertiary)] border border-[var(--border-secondary)] rounded-[6px] text-[13px] font-medium text-[var(--text-primary)] hover:bg-[var(--bg-hover)] transition-all",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                className: "w-4 h-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/auth-policies/page.tsx",
                                                        lineNumber: 91,
                                                        columnNumber: 112
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                        points: "7 10 12 15 17 10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/auth-policies/page.tsx",
                                                        lineNumber: 91,
                                                        columnNumber: 165
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "12",
                                                        y1: "15",
                                                        x2: "12",
                                                        y2: "3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/auth-policies/page.tsx",
                                                        lineNumber: 91,
                                                        columnNumber: 202
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/auth-policies/page.tsx",
                                                lineNumber: 91,
                                                columnNumber: 17
                                            }, this),
                                            "Export"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/auth-policies/page.tsx",
                                        lineNumber: 90,
                                        columnNumber: 14
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>alert('Data is auto-saved'),
                                        className: "flex items-center gap-1.5 px-3.5 py-2 bg-[var(--accent)] text-white rounded-[6px] text-[13px] font-medium hover:bg-[var(--accent-hover)] transition-all",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                className: "w-4 h-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "12",
                                                        y1: "5",
                                                        x2: "12",
                                                        y2: "19"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/auth-policies/page.tsx",
                                                        lineNumber: 95,
                                                        columnNumber: 112
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "5",
                                                        y1: "12",
                                                        x2: "19",
                                                        y2: "12"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/auth-policies/page.tsx",
                                                        lineNumber: 95,
                                                        columnNumber: 150
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/auth-policies/page.tsx",
                                                lineNumber: 95,
                                                columnNumber: 17
                                            }, this),
                                            "Save Policy"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/auth-policies/page.tsx",
                                        lineNumber: 94,
                                        columnNumber: 14
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/auth-policies/page.tsx",
                                lineNumber: 89,
                                columnNumber: 12
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/auth-policies/page.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-auto p-6 custom-scrollbar relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `w-full mx-auto transition-opacity ${loading ? 'opacity-50' : 'opacity-100'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-1 bg-[var(--bg-tertiary)] p-1 rounded-[10px] w-fit mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setSegment('consumer'),
                                            className: `flex items-center gap-2 px-5 py-2.5 rounded-[8px] text-[13px] font-medium transition-all ${segment === 'consumer' ? 'bg-[var(--bg-secondary)] text-[var(--text-primary)] shadow-sm' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    className: "w-4 h-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(admin)/auth-policies/page.tsx",
                                                            lineNumber: 108,
                                                            columnNumber: 120
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            cx: "12",
                                                            cy: "7",
                                                            r: "4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(admin)/auth-policies/page.tsx",
                                                            lineNumber: 108,
                                                            columnNumber: 173
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(admin)/auth-policies/page.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 25
                                                }, this),
                                                "Consumer Banking"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(admin)/auth-policies/page.tsx",
                                            lineNumber: 107,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setSegment('corporate'),
                                            className: `flex items-center gap-2 px-5 py-2.5 rounded-[8px] text-[13px] font-medium transition-all ${segment === 'corporate' ? 'bg-[var(--bg-secondary)] text-[var(--text-primary)] shadow-sm' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    className: "w-4 h-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/auth-policies/page.tsx",
                                                        lineNumber: 112,
                                                        columnNumber: 120
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/auth-policies/page.tsx",
                                                    lineNumber: 112,
                                                    columnNumber: 25
                                                }, this),
                                                "Corporate Banking"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(admin)/auth-policies/page.tsx",
                                            lineNumber: 111,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(admin)/auth-policies/page.tsx",
                                    lineNumber: 106,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-3 p-3 bg-[var(--accent-muted)] border border-[rgba(59,130,246,0.3)] rounded-[8px] mb-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            className: "w-[18px] h-[18px] text-[var(--accent)] mt-0.5 shrink-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "12",
                                                    cy: "12",
                                                    r: "10"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/auth-policies/page.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 163
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M12 16v-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/auth-policies/page.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 195
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M12 8h.01"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/auth-policies/page.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 216
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(admin)/auth-policies/page.tsx",
                                            lineNumber: 119,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[12px] text-[var(--text-secondary)] leading-relaxed",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-[var(--text-primary)]",
                                                    children: "Policy Configuration:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/auth-policies/page.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 25
                                                }, this),
                                                " Authentication requirements are determined by risk level and channel. Higher risk transactions require stronger authentication (fresh UV, step-up factors) and have stricter retry limits and shorter timeouts."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(admin)/auth-policies/page.tsx",
                                            lineNumber: 120,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(admin)/auth-policies/page.tsx",
                                    lineNumber: 118,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$policy$2f$ChannelTabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChannelTabs"], {
                                    current: channel,
                                    onChange: setChannel
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/auth-policies/page.tsx",
                                    lineNumber: 126,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-3 gap-4 mb-8",
                                    children: [
                                        'low',
                                        'medium',
                                        'high'
                                    ].map((risk)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$policy$2f$PolicyCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PolicyCard"], {
                                            risk: risk,
                                            data: currentPolicySet?.[risk] || {},
                                            onEdit: ()=>{
                                                setEditingRisk(risk);
                                                setIsModalOpen(true);
                                            },
                                            isCorporate: segment === 'corporate'
                                        }, risk, false, {
                                            fileName: "[project]/app/(admin)/auth-policies/page.tsx",
                                            lineNumber: 132,
                                            columnNumber: 25
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/auth-policies/page.tsx",
                                    lineNumber: 130,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$policy$2f$ComparisonTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ComparisonTable"], {
                                    segment: segment,
                                    channel: channel,
                                    policies: policies
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/auth-policies/page.tsx",
                                    lineNumber: 142,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$policy$2f$AuditLog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuditLog"], {
                                    refreshKey: refreshLogKey
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/auth-policies/page.tsx",
                                    lineNumber: 145,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(admin)/auth-policies/page.tsx",
                            lineNumber: 103,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/auth-policies/page.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/auth-policies/page.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            isModalOpen && editingRisk && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$policy$2f$EditPolicyModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditPolicyModal"], {
                isOpen: isModalOpen,
                onClose: ()=>setIsModalOpen(false),
                policyName: `${segment} ${channel} ${editingRisk}`,
                initialData: currentPolicySet?.[editingRisk],
                isCorporate: segment === 'corporate',
                onSave: handleSavePolicy
            }, void 0, false, {
                fileName: "[project]/app/(admin)/auth-policies/page.tsx",
                lineNumber: 151,
                columnNumber: 9
            }, this),
            toast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-6 right-6 bg-[var(--bg-elevated)] border border-[var(--border-secondary)] rounded-[10px] p-4 flex items-center gap-3 shadow-2xl z-[2000] animate-[slideIn_0.3s]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-6 h-6 rounded-[6px] bg-[var(--success-muted)] text-[var(--success)] flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            className: "w-3.5 h-3.5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                points: "20 6 9 17 4 12"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/auth-policies/page.tsx",
                                lineNumber: 161,
                                columnNumber: 116
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/auth-policies/page.tsx",
                            lineNumber: 161,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/auth-policies/page.tsx",
                        lineNumber: 160,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[13px] font-semibold text-[var(--text-primary)]",
                                children: "Success"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/auth-policies/page.tsx",
                                lineNumber: 164,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[12px] text-[var(--text-tertiary)]",
                                children: toast
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/auth-policies/page.tsx",
                                lineNumber: 165,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/auth-policies/page.tsx",
                        lineNumber: 163,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/auth-policies/page.tsx",
                lineNumber: 159,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/auth-policies/page.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__96551d4b._.js.map