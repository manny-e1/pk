(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/amount/SegmentSelector.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SegmentSelector",
    ()=>SegmentSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function SegmentSelector({ activeSegment, onSelect }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex gap-2 mb-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onSelect('consumer'),
                className: `flex items-center gap-1.5 px-4 py-2 rounded-[6px] text-[12px] font-medium border transition-all ${activeSegment === 'consumer' ? 'bg-[var(--accent-muted)] border-[var(--accent)] text-[var(--accent)]' : 'bg-[var(--bg-tertiary)] border-[var(--border-primary)] text-[var(--text-secondary)] hover:border-[var(--text-tertiary)] hover:text-[var(--text-primary)]'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        className: "w-3.5 h-3.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"
                            }, void 0, false, {
                                fileName: "[project]/components/amount/SegmentSelector.tsx",
                                lineNumber: 19,
                                columnNumber: 108
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "12",
                                cy: "7",
                                r: "4"
                            }, void 0, false, {
                                fileName: "[project]/components/amount/SegmentSelector.tsx",
                                lineNumber: 19,
                                columnNumber: 159
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/amount/SegmentSelector.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    "Consumer Banking"
                ]
            }, void 0, true, {
                fileName: "[project]/components/amount/SegmentSelector.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onSelect('corporate'),
                className: `flex items-center gap-1.5 px-4 py-2 rounded-[6px] text-[12px] font-medium border transition-all ${activeSegment === 'corporate' ? 'bg-[var(--accent-muted)] border-[var(--accent)] text-[var(--accent)]' : 'bg-[var(--bg-tertiary)] border-[var(--border-primary)] text-[var(--text-secondary)] hover:border-[var(--text-tertiary)] hover:text-[var(--text-primary)]'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        className: "w-3.5 h-3.5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11"
                        }, void 0, false, {
                            fileName: "[project]/components/amount/SegmentSelector.tsx",
                            lineNumber: 30,
                            columnNumber: 108
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/amount/SegmentSelector.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    "Corporate Banking"
                ]
            }, void 0, true, {
                fileName: "[project]/components/amount/SegmentSelector.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/amount/SegmentSelector.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = SegmentSelector;
var _c;
__turbopack_context__.k.register(_c, "SegmentSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/Toggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toggle",
    ()=>Toggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function Toggle({ active, onChange, className = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative w-10 h-[22px] rounded-full cursor-pointer transition-colors ${active ? 'bg-[var(--accent)]' : 'bg-[var(--bg-tertiary)]'} ${className}`,
        onClick: ()=>onChange(!active),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `absolute top-[3px] left-[3px] w-4 h-4 bg-white rounded-full transition-transform shadow-sm ${active ? 'translate-x-[18px]' : ''}`
        }, void 0, false, {
            fileName: "[project]/components/ui/Toggle.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/Toggle.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = Toggle;
var _c;
__turbopack_context__.k.register(_c, "Toggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/amount/ThresholdTable.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThresholdTable",
    ()=>ThresholdTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Toggle.tsx [app-client] (ecmascript)");
'use client';
;
;
function ThresholdTable({ data, onUpdate, onEdit, onDelete, onAdd }) {
    const formatMethod = (m)=>{
        const map = {
            hardware_totp: 'HW Token',
            push_otp: 'Push',
            sms_otp: 'SMS',
            email_otp: 'Email',
            callback: 'Callback'
        };
        return map[m] || m;
    };
    const getLabelClass = (l)=>{
        // Pastikan input di-lowercase agar case-insensitive
        switch(l?.toLowerCase()){
            case 'low':
                // Menggunakan --success-bg (hijau transparan)
                return 'bg-[var(--success-bg)] text-[var(--success)]';
            case 'medium':
                // Menggunakan --warning-bg (kuning transparan)
                return 'bg-[var(--warning-bg)] text-[var(--warning)]';
            case 'high':
                // Menggunakan --error-bg (merah transparan)
                return 'bg-[var(--error-bg)] text-[var(--error)]';
            case 'critical':
                // Menggunakan --purple-bg (ungu transparan) yang ada di globals.css
                return 'bg-[var(--purple-bg)] text-[var(--purple)]';
            default:
                // Fallback warna abu-abu jika tidak cocok
                return 'bg-[var(--bg-tertiary)] text-[var(--text-secondary)]';
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[10px] overflow-hidden mb-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-b border-[var(--border-primary)] flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2.5 text-[14px] font-semibold text-[var(--text-primary)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                className: "w-[18px] h-[18px] text-[var(--text-tertiary)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "3",
                                        y: "3",
                                        width: "18",
                                        height: "18",
                                        rx: "2"
                                    }, void 0, false, {
                                        fileName: "[project]/components/amount/ThresholdTable.tsx",
                                        lineNumber: 62,
                                        columnNumber: 144
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "3",
                                        y1: "9",
                                        x2: "21",
                                        y2: "9"
                                    }, void 0, false, {
                                        fileName: "[project]/components/amount/ThresholdTable.tsx",
                                        lineNumber: 62,
                                        columnNumber: 194
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "9",
                                        y1: "21",
                                        x2: "9",
                                        y2: "9"
                                    }, void 0, false, {
                                        fileName: "[project]/components/amount/ThresholdTable.tsx",
                                        lineNumber: 62,
                                        columnNumber: 231
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/amount/ThresholdTable.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            "Amount Thresholds"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/amount/ThresholdTable.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onAdd,
                        className: "flex items-center gap-1.5 px-2.5 py-1.5 rounded-[6px] text-[11px] font-medium bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-primary)] hover:bg-[var(--bg-hover)] transition-all",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                className: "w-3.5 h-3.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "12",
                                        y1: "5",
                                        x2: "12",
                                        y2: "19"
                                    }, void 0, false, {
                                        fileName: "[project]/components/amount/ThresholdTable.tsx",
                                        lineNumber: 66,
                                        columnNumber: 110
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "5",
                                        y1: "12",
                                        x2: "19",
                                        y2: "12"
                                    }, void 0, false, {
                                        fileName: "[project]/components/amount/ThresholdTable.tsx",
                                        lineNumber: 66,
                                        columnNumber: 149
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/amount/ThresholdTable.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            " Add Threshold"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/amount/ThresholdTable.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/amount/ThresholdTable.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "w-full text-left border-collapse",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            className: "bg-[var(--bg-tertiary)] border-b border-[var(--border-primary)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "p-3 pl-4 text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider rounded-tl-[6px]",
                                    children: "Amount Range (MYR)"
                                }, void 0, false, {
                                    fileName: "[project]/components/amount/ThresholdTable.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "p-3 text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider",
                                    children: "Risk Weight"
                                }, void 0, false, {
                                    fileName: "[project]/components/amount/ThresholdTable.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "p-3 text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider",
                                    children: "Label"
                                }, void 0, false, {
                                    fileName: "[project]/components/amount/ThresholdTable.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "p-3 text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider",
                                    children: "Step-Up"
                                }, void 0, false, {
                                    fileName: "[project]/components/amount/ThresholdTable.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "p-3 text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider",
                                    children: "Methods"
                                }, void 0, false, {
                                    fileName: "[project]/components/amount/ThresholdTable.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "p-3 text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider rounded-tr-[6px]"
                                }, void 0, false, {
                                    fileName: "[project]/components/amount/ThresholdTable.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/amount/ThresholdTable.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/amount/ThresholdTable.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        className: "divide-y divide-[var(--border-primary)]",
                        children: data.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "hover:bg-[var(--bg-tertiary)] transition-colors group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "p-3.5 pl-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    className: "w-[100px] bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[6px] px-2.5 py-1.5 text-[13px] font-mono text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors",
                                                    value: t.min,
                                                    onChange: (e)=>onUpdate(t.id, 'min', parseFloat(e.target.value) || 0)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/amount/ThresholdTable.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[12px] text-[var(--text-tertiary)]",
                                                    children: "to"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/amount/ThresholdTable.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    className: "w-[100px] bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[6px] px-2.5 py-1.5 text-[13px] font-mono text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors placeholder-[var(--text-tertiary)]",
                                                    value: t.max || '',
                                                    placeholder: "∞",
                                                    onChange: (e)=>onUpdate(t.id, 'max', e.target.value ? parseFloat(e.target.value) : null)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/amount/ThresholdTable.tsx",
                                                    lineNumber: 93,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/amount/ThresholdTable.tsx",
                                            lineNumber: 85,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/amount/ThresholdTable.tsx",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "p-3.5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "range",
                                                    min: "0",
                                                    max: "100",
                                                    className: "w-full max-w-[120px] h-1.5 bg-[var(--bg-tertiary)] rounded-full appearance-none cursor-pointer accent-[var(--accent)]",
                                                    value: t.weight,
                                                    onChange: (e)=>onUpdate(t.id, 'weight', parseInt(e.target.value) || 0)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/amount/ThresholdTable.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-[40px] px-1.5 py-1 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[4px] text-center text-[12px] font-mono text-[var(--text-primary)]",
                                                    children: t.weight
                                                }, void 0, false, {
                                                    fileName: "[project]/components/amount/ThresholdTable.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/amount/ThresholdTable.tsx",
                                            lineNumber: 103,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/amount/ThresholdTable.tsx",
                                        lineNumber: 102,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "p-3.5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `px-2.5 py-1 rounded-[4px] text-[11px] font-bold uppercase ${getLabelClass(t.label)}`,
                                            children: t.label
                                        }, void 0, false, {
                                            fileName: "[project]/components/amount/ThresholdTable.tsx",
                                            lineNumber: 117,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/amount/ThresholdTable.tsx",
                                        lineNumber: 116,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "p-3.5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toggle"], {
                                                active: t.stepUp,
                                                onChange: (val)=>onUpdate(t.id, 'stepUp', val)
                                            }, void 0, false, {
                                                fileName: "[project]/components/amount/ThresholdTable.tsx",
                                                lineNumber: 123,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/amount/ThresholdTable.tsx",
                                            lineNumber: 122,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/amount/ThresholdTable.tsx",
                                        lineNumber: 121,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "p-3.5",
                                        children: t.methods.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-1",
                                            children: t.methods.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-2 py-0.5 bg-[var(--bg-tertiary)] rounded-[4px] text-[10px] text-[var(--text-secondary)]",
                                                    children: formatMethod(m)
                                                }, m, false, {
                                                    fileName: "[project]/components/amount/ThresholdTable.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/amount/ThresholdTable.tsx",
                                            lineNumber: 128,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[var(--text-tertiary)] text-[12px]",
                                            children: "—"
                                        }, void 0, false, {
                                            fileName: "[project]/components/amount/ThresholdTable.tsx",
                                            lineNumber: 136,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/amount/ThresholdTable.tsx",
                                        lineNumber: 126,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "p-3.5 text-right",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-end gap-1.5 transition-opacity",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>onEdit(t.id),
                                                    className: "w-7 h-7 flex items-center justify-center rounded-[4px] bg-[var(--bg-tertiary)] border border-[var(--border-primary)] text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        className: "w-3.5 h-3.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/amount/ThresholdTable.tsx",
                                                                lineNumber: 142,
                                                                columnNumber: 120
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/amount/ThresholdTable.tsx",
                                                                lineNumber: 142,
                                                                columnNumber: 191
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/amount/ThresholdTable.tsx",
                                                        lineNumber: 142,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/amount/ThresholdTable.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>onDelete(t.id),
                                                    className: "w-7 h-7 flex items-center justify-center rounded-[4px] bg-[var(--bg-tertiary)] border border-[var(--border-primary)] text-[var(--text-secondary)] hover:bg-[var(--error-muted)] hover:text-[var(--error)] hover:border-[var(--error-muted)] transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        className: "w-3.5 h-3.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                points: "3 6 5 6 21 6"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/amount/ThresholdTable.tsx",
                                                                lineNumber: 145,
                                                                columnNumber: 120
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/amount/ThresholdTable.tsx",
                                                                lineNumber: 145,
                                                                columnNumber: 154
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/amount/ThresholdTable.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/amount/ThresholdTable.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/amount/ThresholdTable.tsx",
                                            lineNumber: 140,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/amount/ThresholdTable.tsx",
                                        lineNumber: 139,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, t.id, true, {
                                fileName: "[project]/components/amount/ThresholdTable.tsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/amount/ThresholdTable.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/amount/ThresholdTable.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/amount/ThresholdTable.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_c = ThresholdTable;
var _c;
__turbopack_context__.k.register(_c, "ThresholdTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/amount/ThresholdModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThresholdModal",
    ()=>ThresholdModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Toggle.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function ThresholdModal({ isOpen, onClose, onSave, initialData }) {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        min: 0,
        max: null,
        weight: 25,
        label: 'low',
        stepUp: false,
        methods: []
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThresholdModal.useEffect": ()=>{
            if (initialData) {
                // eslint-disable-next-line react-hooks/set-state-in-effect
                setFormData(initialData);
            } else {
                setFormData({
                    min: 0,
                    max: null,
                    weight: 25,
                    label: 'low',
                    stepUp: false,
                    methods: []
                });
            }
        }
    }["ThresholdModal.useEffect"], [
        initialData,
        isOpen
    ]);
    const toggleMethod = (method)=>{
        const currentMethods = formData.methods || [];
        if (currentMethods.includes(method)) {
            setFormData({
                ...formData,
                methods: currentMethods.filter((m)=>m !== method)
            });
        } else {
            setFormData({
                ...formData,
                methods: [
                    ...currentMethods,
                    method
                ]
            });
        }
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/70 flex items-center justify-center z-[1000] opacity-100 transition-opacity",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[12px] w-full max-w-[500px] shadow-2xl transform scale-100 transition-transform",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-5 border-b border-[var(--border-primary)] flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-[15px] font-semibold text-[var(--text-primary)]",
                            children: initialData ? 'Edit Threshold' : 'Add Threshold'
                        }, void 0, false, {
                            fileName: "[project]/components/amount/ThresholdModal.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "w-7 h-7 flex items-center justify-center rounded-[6px] bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                className: "w-4 h-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "18",
                                        y1: "6",
                                        x2: "6",
                                        y2: "18"
                                    }, void 0, false, {
                                        fileName: "[project]/components/amount/ThresholdModal.tsx",
                                        lineNumber: 54,
                                        columnNumber: 108
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "6",
                                        y1: "6",
                                        x2: "18",
                                        y2: "18"
                                    }, void 0, false, {
                                        fileName: "[project]/components/amount/ThresholdModal.tsx",
                                        lineNumber: 54,
                                        columnNumber: 145
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/amount/ThresholdModal.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/amount/ThresholdModal.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/amount/ThresholdModal.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-4 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-[12px] font-medium text-[var(--text-secondary)]",
                                            children: "Minimum Amount (MYR)"
                                        }, void 0, false, {
                                            fileName: "[project]/components/amount/ThresholdModal.tsx",
                                            lineNumber: 61,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            className: "w-full bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[6px] px-3 py-2.5 text-[13px] text-[var(--text-primary)] outline-none focus:border-[var(--accent)]",
                                            value: formData.min,
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    min: parseFloat(e.target.value)
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/components/amount/ThresholdModal.tsx",
                                            lineNumber: 62,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/amount/ThresholdModal.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-[12px] font-medium text-[var(--text-secondary)]",
                                            children: "Maximum Amount (MYR)"
                                        }, void 0, false, {
                                            fileName: "[project]/components/amount/ThresholdModal.tsx",
                                            lineNumber: 65,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            className: "w-full bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[6px] px-3 py-2.5 text-[13px] text-[var(--text-primary)] outline-none focus:border-[var(--accent)]",
                                            value: formData.max || '',
                                            placeholder: "Unlimited",
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    max: e.target.value ? parseFloat(e.target.value) : null
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/components/amount/ThresholdModal.tsx",
                                            lineNumber: 66,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/amount/ThresholdModal.tsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/amount/ThresholdModal.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-[12px] font-medium text-[var(--text-secondary)] block mb-2",
                                    children: "Risk Weight (0-100)"
                                }, void 0, false, {
                                    fileName: "[project]/components/amount/ThresholdModal.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "range",
                                            min: "0",
                                            max: "100",
                                            className: "flex-1 h-1.5 bg-[var(--bg-tertiary)] rounded-full appearance-none cursor-pointer accent-[var(--accent)]",
                                            value: formData.weight,
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    weight: parseInt(e.target.value)
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/components/amount/ThresholdModal.tsx",
                                            lineNumber: 73,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            className: "w-[50px] bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[4px] px-2 py-1.5 text-center text-[12px] font-mono text-[var(--text-primary)] outline-none",
                                            value: formData.weight,
                                            readOnly: true
                                        }, void 0, false, {
                                            fileName: "[project]/components/amount/ThresholdModal.tsx",
                                            lineNumber: 74,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/amount/ThresholdModal.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/amount/ThresholdModal.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-[12px] font-medium text-[var(--text-secondary)] block mb-1.5",
                                    children: "Risk Label"
                                }, void 0, false, {
                                    fileName: "[project]/components/amount/ThresholdModal.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    className: "w-full bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[6px] px-3 py-2.5 text-[13px] text-[var(--text-primary)] outline-none focus:border-[var(--accent)]",
                                    value: formData.label,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            label: e.target.value
                                        }),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "low",
                                            children: "Low"
                                        }, void 0, false, {
                                            fileName: "[project]/components/amount/ThresholdModal.tsx",
                                            lineNumber: 85,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "medium",
                                            children: "Medium"
                                        }, void 0, false, {
                                            fileName: "[project]/components/amount/ThresholdModal.tsx",
                                            lineNumber: 86,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "high",
                                            children: "High"
                                        }, void 0, false, {
                                            fileName: "[project]/components/amount/ThresholdModal.tsx",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "critical",
                                            children: "Critical"
                                        }, void 0, false, {
                                            fileName: "[project]/components/amount/ThresholdModal.tsx",
                                            lineNumber: 88,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/amount/ThresholdModal.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/amount/ThresholdModal.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between py-3 border-t border-b border-[var(--border-primary)] mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[13px] font-medium text-[var(--text-primary)]",
                                            children: "Require Step-Up Authentication"
                                        }, void 0, false, {
                                            fileName: "[project]/components/amount/ThresholdModal.tsx",
                                            lineNumber: 94,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[11px] text-[var(--text-tertiary)]",
                                            children: "Require additional verification for this range"
                                        }, void 0, false, {
                                            fileName: "[project]/components/amount/ThresholdModal.tsx",
                                            lineNumber: 95,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/amount/ThresholdModal.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toggle"], {
                                    active: formData.stepUp || false,
                                    onChange: (val)=>setFormData({
                                            ...formData,
                                            stepUp: val
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/components/amount/ThresholdModal.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/amount/ThresholdModal.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this),
                        formData.stepUp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-in fade-in slide-in-from-top-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-[12px] font-medium text-[var(--text-secondary)] block mb-2",
                                    children: "Allowed Step-Up Methods"
                                }, void 0, false, {
                                    fileName: "[project]/components/amount/ThresholdModal.tsx",
                                    lineNumber: 102,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: [
                                        {
                                            k: 'hardware_totp',
                                            l: 'Hardware TOTP'
                                        },
                                        {
                                            k: 'push_otp',
                                            l: 'Push OTP'
                                        },
                                        {
                                            k: 'sms_otp',
                                            l: 'SMS OTP'
                                        },
                                        {
                                            k: 'email_otp',
                                            l: 'Email OTP'
                                        },
                                        {
                                            k: 'callback',
                                            l: 'Callback'
                                        }
                                    ].map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: ()=>toggleMethod(m.k),
                                            className: `flex items-center gap-1.5 px-2.5 py-1.5 rounded-[6px] border text-[11px] cursor-pointer transition-all ${formData.methods?.includes(m.k) ? 'bg-[var(--accent-muted)] border-[var(--accent)] text-[var(--accent)]' : 'bg-[var(--bg-secondary)] border-[var(--border-primary)] text-[var(--text-secondary)] hover:border-[var(--text-tertiary)]'}`,
                                            children: [
                                                formData.methods?.includes(m.k) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "3",
                                                    className: "w-3 h-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                        points: "20 6 9 17 4 12"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/amount/ThresholdModal.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 152
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/amount/ThresholdModal.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 57
                                                }, this),
                                                m.l
                                            ]
                                        }, m.k, true, {
                                            fileName: "[project]/components/amount/ThresholdModal.tsx",
                                            lineNumber: 111,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/amount/ThresholdModal.tsx",
                                    lineNumber: 103,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/amount/ThresholdModal.tsx",
                            lineNumber: 101,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/amount/ThresholdModal.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-5 border-t border-[var(--border-primary)] flex justify-end gap-2.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "px-4 py-2 rounded-[6px] bg-[var(--bg-tertiary)] border border-[var(--border-primary)] text-[var(--text-primary)] text-[12px] font-medium hover:bg-[var(--bg-hover)] transition-colors",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/components/amount/ThresholdModal.tsx",
                            lineNumber: 130,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onSave(formData),
                            className: "px-4 py-2 rounded-[6px] bg-[var(--accent)] text-white text-[12px] font-medium hover:bg-[var(--accent-hover)] transition-colors",
                            children: "Save Threshold"
                        }, void 0, false, {
                            fileName: "[project]/components/amount/ThresholdModal.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/amount/ThresholdModal.tsx",
                    lineNumber: 129,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/amount/ThresholdModal.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/amount/ThresholdModal.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_s(ThresholdModal, "RMWLnXjhSu0+AwQ+WAUPVkbUi7c=");
_c = ThresholdModal;
var _c;
__turbopack_context__.k.register(_c, "ThresholdModal");
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
    },
    getTotpInventory: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/admin/totp-inventory`);
        return res.data;
    },
    importTotpBatch: async (formData)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`/api/admin/totp-inventory/import`, formData);
        return res.data;
    },
    updateTotpStatus: async (serial, status)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].put(`/api/admin/totp-inventory/${serial}/status`, {
            status
        });
        return res.data;
    },
    assignTotpToken: async (serial, userId)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`/api/admin/totp-inventory/${serial}/assign`, {
            userId
        });
        return res.data;
    },
    unassignTotpToken: async (serial)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`/api/admin/totp-inventory/${serial}/unassign`);
        return res.data;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(admin)/amount-thresholds/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AmountThresholdsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$amount$2f$SegmentSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/amount/SegmentSelector.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$amount$2f$ThresholdTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/amount/ThresholdTable.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$amount$2f$ThresholdModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/amount/ThresholdModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$adminService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/adminService.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function AmountThresholdsPage() {
    _s();
    const [segment, setSegment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('consumer');
    const [modalOpen, setModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingItem, setEditingItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        consumer: [],
        corporate: []
    });
    const currentData = data[segment] || [];
    const fetchData = async ()=>{
        try {
            setLoading(true);
            const apiData = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$adminService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminService"].getAmountLimits();
            const grouped = {
                consumer: [],
                corporate: []
            };
            apiData.forEach((item)=>{
                const segKey = item.segment.toLowerCase();
                if (grouped[segKey]) {
                    grouped[segKey].push({
                        id: item.id,
                        min: item.minAmount,
                        max: item.maxAmount,
                        weight: item.weight,
                        label: item.label,
                        stepUp: item.stepUp,
                        methods: item.methods || []
                    });
                }
            });
            grouped.consumer.sort((a, b)=>a.min - b.min);
            grouped.corporate.sort((a, b)=>a.min - b.min);
            setData(grouped);
        } catch (err) {
            console.error("Gagal mengambil data:", err);
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AmountThresholdsPage.useEffect": ()=>{
            fetchData();
        }
    }["AmountThresholdsPage.useEffect"], []);
    const handleUpdate = async (id, field, val)=>{
        const prevData = {
            ...data
        };
        const updatedList = currentData.map((t)=>{
            if (t.id === id) {
                const newItem = {
                    ...t,
                    [field]: val
                };
                if (field === 'weight' && typeof val === 'number') {
                    if (val <= 25) newItem.label = 'low';
                    else if (val <= 50) newItem.label = 'medium';
                    else if (val <= 80) newItem.label = 'high';
                    else newItem.label = 'critical';
                }
                return newItem;
            }
            return t;
        });
        setData({
            ...data,
            [segment]: updatedList
        });
        try {
            const itemToUpdate = updatedList.find((t)=>t.id === id);
            if (itemToUpdate) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$adminService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminService"].updateAmountLimit(id.toString(), {
                    minAmount: itemToUpdate.min,
                    maxAmount: itemToUpdate.max,
                    weight: itemToUpdate.weight,
                    label: itemToUpdate.label,
                    stepUp: itemToUpdate.stepUp,
                    methods: itemToUpdate.methods
                });
            }
        } catch (err) {
            console.error("Update gagal:", err);
            setData(prevData);
            alert("Gagal menyimpan perubahan ke server.");
        }
    };
    const handleDelete = async (id)=>{
        if (confirm('Hapus aturan limit ini?')) {
            const prevData = {
                ...data
            };
            const updatedList = currentData.filter((t)=>t.id !== id);
            setData({
                ...data,
                [segment]: updatedList
            });
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$adminService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminService"].deleteAmountLimit(id.toString());
            } catch (err) {
                console.error("Delete gagal:", err);
                setData(prevData);
                alert("Gagal menghapus data.");
            }
        }
    };
    const handleEdit = (id)=>{
        const item = currentData.find((t)=>t.id === id);
        if (item) {
            setEditingItem(item);
            setModalOpen(true);
        }
    };
    const handleAdd = ()=>{
        setEditingItem(null);
        setModalOpen(true);
    };
    const handleSaveModal = async (formData)=>{
        const isEdit = !!editingItem;
        const payload = {
            segment: segment.toUpperCase(),
            minAmount: formData.min,
            maxAmount: formData.max,
            weight: formData.weight,
            label: formData.label,
            stepUp: formData.stepUp,
            methods: formData.methods
        };
        try {
            if (isEdit && editingItem) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$adminService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminService"].updateAmountLimit(editingItem.id.toString(), payload);
            } else {
                await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$adminService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminService"].createAmountLimit(payload);
            }
            await fetchData();
            setModalOpen(false);
        } catch (err) {
            console.error("Save failed:", err);
            alert("Gagal menyimpan data. Pastikan Backend berjalan.");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-[family-name:var(--font-inter)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 flex flex-col h-screen overflow-hidden min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "px-6 py-4 border-b border-[var(--border-primary)] bg-[var(--bg-secondary)] flex justify-between items-center shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-[16px] font-semibold text-[var(--text-primary)]",
                                            children: "Amount Risk Thresholds"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/amount-thresholds/page.tsx",
                                            lineNumber: 165,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[12px] text-[var(--text-tertiary)] mt-0.5",
                                            children: "Configure risk weights based on transaction amounts"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/amount-thresholds/page.tsx",
                                            lineNumber: 166,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(admin)/amount-thresholds/page.tsx",
                                    lineNumber: 164,
                                    columnNumber: 14
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/amount-thresholds/page.tsx",
                                lineNumber: 163,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2.5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: fetchData,
                                    disabled: loading,
                                    className: "flex items-center gap-1.5 px-3.5 py-2 rounded-[6px] text-[12px] font-medium bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-primary)] hover:bg-[var(--bg-hover)] transition-all",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            className: `w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M23 4v6h-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/amount-thresholds/page.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 151
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M1 20v-6h6"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/amount-thresholds/page.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 173
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/amount-thresholds/page.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 195
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(admin)/amount-thresholds/page.tsx",
                                            lineNumber: 172,
                                            columnNumber: 17
                                        }, this),
                                        loading ? 'Syncing...' : 'Refresh Data'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(admin)/amount-thresholds/page.tsx",
                                    lineNumber: 171,
                                    columnNumber: 14
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/amount-thresholds/page.tsx",
                                lineNumber: 170,
                                columnNumber: 12
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/amount-thresholds/page.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-auto p-6 custom-scrollbar",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full mx-auto flex flex-col gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$amount$2f$SegmentSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SegmentSelector"], {
                                    activeSegment: segment,
                                    onSelect: setSegment
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/amount-thresholds/page.tsx",
                                    lineNumber: 180,
                                    columnNumber: 17
                                }, this),
                                loading && currentData.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center justify-center py-20 text-[var(--text-tertiary)]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-6 h-6 border-2 border-[var(--accent)] border-t-transparent rounded-full animate-spin mb-3"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/amount-thresholds/page.tsx",
                                            lineNumber: 184,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm",
                                            children: "Loading data from server..."
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/amount-thresholds/page.tsx",
                                            lineNumber: 185,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(admin)/amount-thresholds/page.tsx",
                                    lineNumber: 183,
                                    columnNumber: 21
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$amount$2f$ThresholdTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThresholdTable"], {
                                    data: currentData,
                                    onUpdate: handleUpdate,
                                    onEdit: handleEdit,
                                    onDelete: handleDelete,
                                    onAdd: handleAdd
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/amount-thresholds/page.tsx",
                                    lineNumber: 188,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(admin)/amount-thresholds/page.tsx",
                            lineNumber: 179,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/amount-thresholds/page.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/amount-thresholds/page.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$amount$2f$ThresholdModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThresholdModal"], {
                isOpen: modalOpen,
                onClose: ()=>setModalOpen(false),
                onSave: handleSaveModal,
                initialData: editingItem
            }, void 0, false, {
                fileName: "[project]/app/(admin)/amount-thresholds/page.tsx",
                lineNumber: 200,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/amount-thresholds/page.tsx",
        lineNumber: 158,
        columnNumber: 5
    }, this);
}
_s(AmountThresholdsPage, "6rbBqGVIVmA6q2tB+ym1EnZZR/k=");
_c = AmountThresholdsPage;
var _c;
__turbopack_context__.k.register(_c, "AmountThresholdsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_1e979acd._.js.map