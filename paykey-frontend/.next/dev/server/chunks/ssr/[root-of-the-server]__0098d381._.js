module.exports = [
"[project]/components/risk/RiskThresholds.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RiskThresholds",
    ()=>RiskThresholds
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
function RiskThresholds({ lowThreshold, highThreshold, onLowChange, onHighChange }) {
    // ... (Icons tetap sama) ...
    const Icons = {
        check: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "20 6 9 17 4 12"
            }, void 0, false, {
                fileName: "[project]/components/risk/RiskThresholds.tsx",
                lineNumber: 14,
                columnNumber: 87
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/risk/RiskThresholds.tsx",
            lineNumber: 14,
            columnNumber: 12
        }, this),
        clock: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }, void 0, false, {
                    fileName: "[project]/components/risk/RiskThresholds.tsx",
                    lineNumber: 15,
                    columnNumber: 87
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "12 6 12 12 16 14"
                }, void 0, false, {
                    fileName: "[project]/components/risk/RiskThresholds.tsx",
                    lineNumber: 15,
                    columnNumber: 119
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/risk/RiskThresholds.tsx",
            lineNumber: 15,
            columnNumber: 12
        }, this),
        shield: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
            }, void 0, false, {
                fileName: "[project]/components/risk/RiskThresholds.tsx",
                lineNumber: 16,
                columnNumber: 88
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/risk/RiskThresholds.tsx",
            lineNumber: 16,
            columnNumber: 13
        }, this),
        zap: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
                }, void 0, false, {
                    fileName: "[project]/components/risk/RiskThresholds.tsx",
                    lineNumber: 17,
                    columnNumber: 85
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "22 4 12 14.01 9 11.01"
                }, void 0, false, {
                    fileName: "[project]/components/risk/RiskThresholds.tsx",
                    lineNumber: 17,
                    columnNumber: 131
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/risk/RiskThresholds.tsx",
            lineNumber: 17,
            columnNumber: 10
        }, this),
        alert: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
            }, void 0, false, {
                fileName: "[project]/components/risk/RiskThresholds.tsx",
                lineNumber: 18,
                columnNumber: 87
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/risk/RiskThresholds.tsx",
            lineNumber: 18,
            columnNumber: 12
        }, this),
        passkey: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "3",
                    y: "11",
                    width: "18",
                    height: "11",
                    rx: "2",
                    ry: "2"
                }, void 0, false, {
                    fileName: "[project]/components/risk/RiskThresholds.tsx",
                    lineNumber: 19,
                    columnNumber: 89
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M7 11V7a5 5 0 0 1 10 0v4"
                }, void 0, false, {
                    fileName: "[project]/components/risk/RiskThresholds.tsx",
                    lineNumber: 19,
                    columnNumber: 146
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/risk/RiskThresholds.tsx",
            lineNumber: 19,
            columnNumber: 14
        }, this),
        fingerprint: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                }, void 0, false, {
                    fileName: "[project]/components/risk/RiskThresholds.tsx",
                    lineNumber: 20,
                    columnNumber: 93
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "3"
                }, void 0, false, {
                    fileName: "[project]/components/risk/RiskThresholds.tsx",
                    lineNumber: 20,
                    columnNumber: 149
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/risk/RiskThresholds.tsx",
            lineNumber: 20,
            columnNumber: 18
        }, this),
        stop: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }, void 0, false, {
                    fileName: "[project]/components/risk/RiskThresholds.tsx",
                    lineNumber: 21,
                    columnNumber: 86
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "15",
                    y1: "9",
                    x2: "9",
                    y2: "15"
                }, void 0, false, {
                    fileName: "[project]/components/risk/RiskThresholds.tsx",
                    lineNumber: 21,
                    columnNumber: 118
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "9",
                    y1: "9",
                    x2: "15",
                    y2: "15"
                }, void 0, false, {
                    fileName: "[project]/components/risk/RiskThresholds.tsx",
                    lineNumber: 21,
                    columnNumber: 155
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/risk/RiskThresholds.tsx",
            lineNumber: 21,
            columnNumber: 11
        }, this),
        eye: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                }, void 0, false, {
                    fileName: "[project]/components/risk/RiskThresholds.tsx",
                    lineNumber: 22,
                    columnNumber: 85
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "9",
                    cy: "7",
                    r: "4"
                }, void 0, false, {
                    fileName: "[project]/components/risk/RiskThresholds.tsx",
                    lineNumber: 22,
                    columnNumber: 138
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M23 21v-2a4 4 0 0 0-3-3.87"
                }, void 0, false, {
                    fileName: "[project]/components/risk/RiskThresholds.tsx",
                    lineNumber: 22,
                    columnNumber: 167
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M16 3.13a4 4 0 0 1 0 7.75"
                }, void 0, false, {
                    fileName: "[project]/components/risk/RiskThresholds.tsx",
                    lineNumber: 22,
                    columnNumber: 205
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/risk/RiskThresholds.tsx",
            lineNumber: 22,
            columnNumber: 10
        }, this),
        bell: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
            }, void 0, false, {
                fileName: "[project]/components/risk/RiskThresholds.tsx",
                lineNumber: 23,
                columnNumber: 86
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/risk/RiskThresholds.tsx",
            lineNumber: 23,
            columnNumber: 11
        }, this),
        info: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }, void 0, false, {
                    fileName: "[project]/components/risk/RiskThresholds.tsx",
                    lineNumber: 24,
                    columnNumber: 86
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "12",
                    y1: "16",
                    x2: "12",
                    y2: "12"
                }, void 0, false, {
                    fileName: "[project]/components/risk/RiskThresholds.tsx",
                    lineNumber: 24,
                    columnNumber: 118
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "12",
                    y1: "8",
                    x2: "12.01",
                    y2: "8"
                }, void 0, false, {
                    fileName: "[project]/components/risk/RiskThresholds.tsx",
                    lineNumber: 24,
                    columnNumber: 157
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/risk/RiskThresholds.tsx",
            lineNumber: 24,
            columnNumber: 11
        }, this)
    };
    // Logic aman agar slider tidak tumpang tindih
    const handleLowSlider = (e)=>{
        const val = parseInt(e.target.value);
        // Low tidak boleh melebihi High - 5
        if (val < highThreshold - 5) {
            onLowChange(val);
        }
    };
    const handleHighSlider = (e)=>{
        const val = parseInt(e.target.value);
        // High tidak boleh kurang dari Low + 5
        if (val > lowThreshold + 5) {
            onHighChange(val);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-[var(--radius-lg)] overflow-hidden mb-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5 border-b border-[var(--border-secondary)] flex items-center justify-between",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[14px] font-semibold flex items-center gap-2 text-[var(--text-primary)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[var(--text-tertiary)] w-4 h-4",
                                    children: Icons.shield
                                }, void 0, false, {
                                    fileName: "[project]/components/risk/RiskThresholds.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this),
                                "Risk Thresholds"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/risk/RiskThresholds.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[12px] text-[var(--text-tertiary)] mt-0.5",
                            children: "Configure score ranges for each risk level"
                        }, void 0, false, {
                            fileName: "[project]/components/risk/RiskThresholds.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/risk/RiskThresholds.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/risk/RiskThresholds.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3 p-4 bg-[var(--info-bg)] border border-[var(--info-border)] rounded-[var(--radius-md)] mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-5 h-5 text-[var(--info)] shrink-0",
                                children: Icons.info
                            }, void 0, false, {
                                fileName: "[project]/components/risk/RiskThresholds.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[13px] font-semibold text-[var(--info)] mb-0.5",
                                        children: "How Risk Scoring Works"
                                    }, void 0, false, {
                                        fileName: "[project]/components/risk/RiskThresholds.tsx",
                                        lineNumber: 62,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[12px] text-[var(--text-secondary)]",
                                        children: "Each transaction is assigned a score from 0-100 based on configured rules. The score determines which authentication flow is triggered."
                                    }, void 0, false, {
                                        fileName: "[project]/components/risk/RiskThresholds.tsx",
                                        lineNumber: 63,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/risk/RiskThresholds.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/risk/RiskThresholds.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative h-2 bg-gradient-to-r from-[var(--success)] via-[var(--warning)] to-[var(--error)] rounded-full mb-8 mt-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-[-6px] w-1 h-5 bg-[var(--text-primary)] rounded-[2px] shadow-sm transition-all",
                                style: {
                                    left: `${lowThreshold}%`
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/risk/RiskThresholds.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-5 text-[11px] text-[var(--text-tertiary)] -translate-x-1/2 font-mono transition-all",
                                style: {
                                    left: `${lowThreshold}%`
                                },
                                children: lowThreshold
                            }, void 0, false, {
                                fileName: "[project]/components/risk/RiskThresholds.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-[-6px] w-1 h-5 bg-[var(--text-primary)] rounded-[2px] shadow-sm transition-all",
                                style: {
                                    left: `${highThreshold}%`
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/risk/RiskThresholds.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-5 text-[11px] text-[var(--text-tertiary)] -translate-x-1/2 font-mono transition-all",
                                style: {
                                    left: `${highThreshold}%`
                                },
                                children: highThreshold
                            }, void 0, false, {
                                fileName: "[project]/components/risk/RiskThresholds.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/risk/RiskThresholds.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-4 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[var(--success-bg)] border border-[var(--success-border)] rounded-[var(--radius-lg)] p-5 relative overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[12px] font-semibold bg-[var(--success)] text-black",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-3.5 h-3.5",
                                                        children: Icons.zap
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/risk/RiskThresholds.tsx",
                                                        lineNumber: 83,
                                                        columnNumber: 17
                                                    }, this),
                                                    " Low Risk"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/risk/RiskThresholds.tsx",
                                                lineNumber: 82,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[12px] text-[var(--text-secondary)] font-mono",
                                                children: [
                                                    "Score: 0 – ",
                                                    lowThreshold
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/risk/RiskThresholds.tsx",
                                                lineNumber: 85,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/risk/RiskThresholds.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[15px] font-semibold text-[var(--text-primary)] mb-1",
                                        children: "No Extra Friction"
                                    }, void 0, false, {
                                        fileName: "[project]/components/risk/RiskThresholds.tsx",
                                        lineNumber: 87,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[13px] text-[var(--text-secondary)] mb-4",
                                        children: "Standard payment flow with minimal verification. User experience is optimized for speed."
                                    }, void 0, false, {
                                        fileName: "[project]/components/risk/RiskThresholds.tsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[var(--radius-md)] text-[12px] font-medium bg-black/20 text-[var(--text-primary)]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-3.5 h-3.5",
                                                    children: Icons.check
                                                }, void 0, false, {
                                                    fileName: "[project]/components/risk/RiskThresholds.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 17
                                                }, this),
                                                " Auto-approve"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/risk/RiskThresholds.tsx",
                                            lineNumber: 91,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/risk/RiskThresholds.tsx",
                                        lineNumber: 90,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/risk/RiskThresholds.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[var(--warning-bg)] border border-[var(--warning-border)] rounded-[var(--radius-lg)] p-5 relative overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[12px] font-semibold bg-[var(--warning)] text-black",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-3.5 h-3.5",
                                                        children: Icons.alert
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/risk/RiskThresholds.tsx",
                                                        lineNumber: 100,
                                                        columnNumber: 17
                                                    }, this),
                                                    " Medium Risk"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/risk/RiskThresholds.tsx",
                                                lineNumber: 99,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[12px] text-[var(--text-secondary)] font-mono",
                                                children: [
                                                    "Score: ",
                                                    lowThreshold,
                                                    " – ",
                                                    highThreshold
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/risk/RiskThresholds.tsx",
                                                lineNumber: 102,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/risk/RiskThresholds.tsx",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[15px] font-semibold text-[var(--text-primary)] mb-1",
                                        children: "Require FIDO2 Approval"
                                    }, void 0, false, {
                                        fileName: "[project]/components/risk/RiskThresholds.tsx",
                                        lineNumber: 104,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[13px] text-[var(--text-secondary)] mb-4",
                                        children: "User must authenticate with registered passkey before payment can proceed."
                                    }, void 0, false, {
                                        fileName: "[project]/components/risk/RiskThresholds.tsx",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[var(--radius-md)] text-[12px] font-medium bg-black/20 text-[var(--text-primary)]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-3.5 h-3.5",
                                                    children: Icons.passkey
                                                }, void 0, false, {
                                                    fileName: "[project]/components/risk/RiskThresholds.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 17
                                                }, this),
                                                " FIDO2 Required"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/risk/RiskThresholds.tsx",
                                            lineNumber: 108,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/risk/RiskThresholds.tsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/risk/RiskThresholds.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[var(--error-bg)] border border-[var(--error-border)] rounded-[var(--radius-lg)] p-5 relative overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[12px] font-semibold bg-[var(--error)] text-white",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-3.5 h-3.5",
                                                        children: Icons.stop
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/risk/RiskThresholds.tsx",
                                                        lineNumber: 117,
                                                        columnNumber: 17
                                                    }, this),
                                                    " High Risk"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/risk/RiskThresholds.tsx",
                                                lineNumber: 116,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[12px] text-[var(--text-secondary)] font-mono",
                                                children: [
                                                    "Score: ",
                                                    highThreshold,
                                                    " – 100"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/risk/RiskThresholds.tsx",
                                                lineNumber: 119,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/risk/RiskThresholds.tsx",
                                        lineNumber: 115,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[15px] font-semibold text-[var(--text-primary)] mb-1",
                                        children: "FIDO2 + Cooldown / Additional Checks"
                                    }, void 0, false, {
                                        fileName: "[project]/components/risk/RiskThresholds.tsx",
                                        lineNumber: 121,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[13px] text-[var(--text-secondary)] mb-4",
                                        children: "Enhanced verification with mandatory waiting period and additional security measures."
                                    }, void 0, false, {
                                        fileName: "[project]/components/risk/RiskThresholds.tsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[var(--radius-md)] text-[12px] font-medium bg-black/20 text-[var(--text-primary)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-3.5 h-3.5",
                                                        children: Icons.passkey
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/risk/RiskThresholds.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 17
                                                    }, this),
                                                    " FIDO2 Required"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/risk/RiskThresholds.tsx",
                                                lineNumber: 125,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[var(--radius-md)] text-[12px] font-medium bg-black/20 text-[var(--text-primary)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-3.5 h-3.5",
                                                        children: Icons.clock
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/risk/RiskThresholds.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 17
                                                    }, this),
                                                    " Cooldown"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/risk/RiskThresholds.tsx",
                                                lineNumber: 128,
                                                columnNumber: 16
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/risk/RiskThresholds.tsx",
                                        lineNumber: 124,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/risk/RiskThresholds.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/risk/RiskThresholds.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-5 mt-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[12px] text-[var(--text-tertiary)]",
                                                children: "Low → Medium Threshold"
                                            }, void 0, false, {
                                                fileName: "[project]/components/risk/RiskThresholds.tsx",
                                                lineNumber: 139,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[13px] font-semibold text-[var(--text-primary)] font-mono",
                                                children: lowThreshold
                                            }, void 0, false, {
                                                fileName: "[project]/components/risk/RiskThresholds.tsx",
                                                lineNumber: 140,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/risk/RiskThresholds.tsx",
                                        lineNumber: 138,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "range",
                                        className: "w-full h-1.5 bg-[var(--bg-tertiary)] rounded-full appearance-none cursor-pointer accent-[var(--accent)]",
                                        min: "10",
                                        max: "50",
                                        value: lowThreshold,
                                        onChange: handleLowSlider
                                    }, void 0, false, {
                                        fileName: "[project]/components/risk/RiskThresholds.tsx",
                                        lineNumber: 142,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/risk/RiskThresholds.tsx",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[12px] text-[var(--text-tertiary)]",
                                                children: "Medium → High Threshold"
                                            }, void 0, false, {
                                                fileName: "[project]/components/risk/RiskThresholds.tsx",
                                                lineNumber: 149,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[13px] font-semibold text-[var(--text-primary)] font-mono",
                                                children: highThreshold
                                            }, void 0, false, {
                                                fileName: "[project]/components/risk/RiskThresholds.tsx",
                                                lineNumber: 150,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/risk/RiskThresholds.tsx",
                                        lineNumber: 148,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "range",
                                        className: "w-full h-1.5 bg-[var(--bg-tertiary)] rounded-full appearance-none cursor-pointer accent-[var(--accent)]",
                                        min: "50",
                                        max: "95",
                                        value: highThreshold,
                                        onChange: handleHighSlider
                                    }, void 0, false, {
                                        fileName: "[project]/components/risk/RiskThresholds.tsx",
                                        lineNumber: 152,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/risk/RiskThresholds.tsx",
                                lineNumber: 147,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/risk/RiskThresholds.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/risk/RiskThresholds.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/risk/RiskThresholds.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/risk/StepUpRules.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StepUpRules",
    ()=>StepUpRules
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// 'use client';
// // Helper Components (Sama persis)
// const Toggle = ({ active, onClick }: { active: boolean, onClick: () => void }) => (
//   <div onClick={onClick} className={`relative w-11 h-6 rounded-full cursor-pointer transition-colors border border-[var(--border-primary)] ${active ? 'bg-[var(--accent)] border-[var(--accent)]' : 'bg-[var(--bg-tertiary)]'}`}>
//     <div className={`absolute top-[1px] left-[1px] w-[20px] h-[20px] bg-[var(--text-primary)] rounded-full transition-all ${active ? 'translate-x-[20px]' : ''}`}></div>
//   </div>
// );
// const WeightPills = ({ selected, onChange }: { selected: number, onChange: (v: number) => void }) => {
//   const options = [10, 20, 30, 40, 50];
//   return (
//     <div className="flex gap-2 flex-wrap">
//       {options.map(val => (
//         <button key={val} onClick={() => onChange(val)} className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[20px] text-[12px] font-medium border transition-all ${selected === val ? 'bg-[var(--accent)] border-[var(--accent)] text-white' : 'bg-[var(--bg-tertiary)] border-[var(--border-primary)] text-[var(--text-primary)] hover:border-[var(--accent)]'}`}>
//           +<span className="font-mono bg-black/20 px-1.5 rounded-[10px]">{val}</span>
//         </button>
//       ))}
//     </div>
//   );
// };
// // Interface Props Baru (Logic Injection)
// interface StepUpRulesProps {
//   rules?: any[];
//   onChange?: (updatedRules: any[]) => void;
// }
// export function StepUpRules({ rules = [], onChange }: StepUpRulesProps) {
//   // Logic Update (Hanya bekerja jika onChange tersedia)
//   const updateRule = (type: string, field: string, value: any) => {
//     if (!onChange) return;
//     const newRules = rules.map(r => {
//       if (r.ruleType === type) {
//         if (field === 'isActive' || field === 'weight') return { ...r, [field]: value };
//         return { ...r, parameters: { ...r.parameters, [field]: value } };
//       }
//       return r;
//     });
//     onChange(newRules);
//   };
//   const getRule = (type: string) => rules.find(r => r.ruleType === type) || { isActive: false, parameters: {}, weight: 0 };
//   const renderRuleCard = (type: string, label: string, desc: string, icon: any, children: any) => {
//     const rule = getRule(type);
//     return (
//         <div className={`bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-lg)] p-4 transition-all mb-3 ${rule.isActive ? 'hover:border-[var(--accent)]' : 'opacity-60'}`}>
//             <div className="flex items-start justify-between mb-3">
//                 <div>
//                     <div className="text-[14px] font-semibold text-[var(--text-primary)] flex items-center gap-2 mb-1">
//                         {icon}
//                         {label}
//                     </div>
//                     <div className="text-[12px] text-[var(--text-tertiary)]">{desc}</div>
//                 </div>
//                 <Toggle active={rule.isActive} onClick={() => updateRule(type, 'isActive', !rule.isActive)} />
//             </div>
//             {rule.isActive && (
//                 <div className="mt-3 pt-3 border-t border-[var(--border-secondary)] space-y-3">
//                     <div className="flex items-center gap-3">
//                         <span className="text-[12px] text-[var(--text-tertiary)] min-w-[120px]">Risk Score Weight</span>
//                         <WeightPills selected={rule.weight} onChange={(v) => updateRule(type, 'weight', v)} />
//                     </div>
//                     {children}
//                 </div>
//             )}
//         </div>
//     );
//   };
//   // UI JSX TETAP SAMA 100%
//   return (
//     <div className="bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-[var(--radius-lg)] overflow-hidden mb-6">
//       <div className="p-5 border-b border-[var(--border-secondary)] flex items-center justify-between">
//         <div>
//           <div className="text-[14px] font-semibold flex items-center gap-2 text-[var(--text-primary)]">
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[var(--accent)]"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
//             Step-up Authentication Rules
//           </div>
//           <div className="text-[12px] text-[var(--text-tertiary)] mt-0.5">Configure conditions that trigger elevated authentication</div>
//         </div>
//       </div>
//       <div className="p-5 flex flex-col gap-3">
//         {renderRuleCard('AMOUNT', 'Payment Amount Threshold', 'Trigger step-up when payment amount exceeds configured threshold', 
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px] text-[var(--accent)]"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
//             <>
//               <div className="flex items-center gap-3">
//                 <span className="text-[12px] text-[var(--text-tertiary)] min-w-[120px]">Threshold Amount</span>
//                 <div className="flex items-center bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] overflow-hidden max-w-[200px]">
//                   <input type="number" 
//                     className="w-full bg-transparent text-[var(--text-primary)] text-[13px] font-mono px-3 py-1.5 outline-none" 
//                     value={getRule('AMOUNT').parameters?.amountThreshold || 0}
//                     onChange={(e) => updateRule('AMOUNT', 'amountThreshold', parseInt(e.target.value))}
//                   />
//                   <span className="px-3 py-1.5 bg-[var(--bg-hover)] text-[var(--text-tertiary)] text-[12px] border-l border-[var(--border-primary)]">USD</span>
//                 </div>
//               </div>
//               <div className="flex items-center gap-3">
//                 <span className="text-[12px] text-[var(--text-tertiary)] min-w-[120px]">Tiered Scoring</span>
//                 <div className="flex items-center gap-3">
//                     <Toggle active={true} onClick={()=>{}} />
//                     <span className="text-[12px] text-[var(--text-tertiary)]">Scale weight by amount</span>
//                 </div>
//               </div>
//             </>
//         )}
//         {renderRuleCard('BENEFICIARY', 'New Beneficiary', 'Trigger step-up for payments to recipients not seen before',
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px] text-[var(--accent)]"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>,
//             <div className="flex items-center gap-3">
//                 <span className="text-[12px] text-[var(--text-tertiary)] min-w-[120px]">Trust After</span>
//                 <div className="flex items-center bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] overflow-hidden max-w-[200px]">
//                   <input type="number" 
//                     className="w-full bg-transparent text-[var(--text-primary)] text-[13px] font-mono px-3 py-1.5 outline-none" 
//                     value={getRule('BENEFICIARY').parameters?.trustCount || 3}
//                     onChange={(e) => updateRule('BENEFICIARY', 'trustCount', parseInt(e.target.value))}
//                   />
//                   <span className="px-3 py-1.5 bg-[var(--bg-hover)] text-[var(--text-tertiary)] text-[12px] border-l border-[var(--border-primary)]">transactions</span>
//                 </div>
//             </div>
//         )}
//         {renderRuleCard('NEW_DEVICE', 'First Payment from Device', 'Trigger step-up for the first payment attempt from an unrecognized device',
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px] text-[var(--accent)]"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>,
//             <div className="flex items-center gap-3">
//                 <span className="text-[12px] text-[var(--text-tertiary)] min-w-[120px]">Device Trust Period</span>
//                 <div className="flex items-center bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] overflow-hidden max-w-[200px]">
//                   <input type="number" 
//                      className="w-full bg-transparent text-[var(--text-primary)] text-[13px] font-mono px-3 py-1.5 outline-none" 
//                      value={getRule('NEW_DEVICE').parameters?.days || 90}
//                      onChange={(e) => updateRule('NEW_DEVICE', 'days', parseInt(e.target.value))}
//                   />
//                   <span className="px-3 py-1.5 bg-[var(--bg-hover)] text-[var(--text-tertiary)] text-[12px] border-l border-[var(--border-primary)]">days</span>
//                 </div>
//             </div>
//         )}
//         {renderRuleCard('GEO_ANOMALY', 'Geographic Anomaly', 'Trigger step-up when payment originates from unexpected country or region',
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px] text-[var(--accent)]"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
//             <>
//                 <div className="flex items-center gap-3">
//                     <span className="text-[12px] text-[var(--text-tertiary)] min-w-[120px]">Detection Level</span>
//                     <select 
//                         className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] text-[var(--text-primary)] text-[12px] rounded-[var(--radius-md)] px-3 py-1.5 w-[200px] outline-none"
//                         value={getRule('GEO_ANOMALY').parameters?.level || 'country'}
//                         onChange={(e) => updateRule('GEO_ANOMALY', 'level', e.target.value)}
//                     >
//                         <option value="country">Country change</option>
//                         <option value="region">Region change</option>
//                         <option value="city">City change</option>
//                     </select>
//                 </div>
//                 <div className="flex items-center gap-3">
//                     <span className="text-[12px] text-[var(--text-tertiary)] min-w-[120px]">VPN/Proxy</span>
//                     <div className="flex items-center gap-3">
//                         <Toggle active={false} onClick={()=>{}} />
//                         <span className="text-[12px] text-[var(--text-tertiary)]">Add +15 for VPN/Proxy</span>
//                     </div>
//                 </div>
//             </>
//         )}
//         {renderRuleCard('DORMANT', 'Dormant Account Reactivation', 'Trigger step-up when an inactive account suddenly becomes active',
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px] text-[var(--accent)]"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
//             <div className="flex items-center gap-3">
//                 <span className="text-[12px] text-[var(--text-tertiary)] min-w-[120px]">Inactivity Threshold</span>
//                 <div className="flex items-center bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] overflow-hidden max-w-[200px]">
//                   <input type="number" 
//                     className="w-full bg-transparent text-[var(--text-primary)] text-[13px] font-mono px-3 py-1.5 outline-none" 
//                     value={getRule('DORMANT').parameters?.days || 180}
//                     onChange={(e) => updateRule('DORMANT', 'days', parseInt(e.target.value))}
//                   />
//                   <span className="px-3 py-1.5 bg-[var(--bg-hover)] text-[var(--text-tertiary)] text-[12px] border-l border-[var(--border-primary)]">days</span>
//                 </div>
//             </div>
//         )}
//       </div>
//     </div>
//   );
// }
'use client';
;
;
// --- HELPER COMPONENTS (Ditaruh disini agar tidak error import) ---
const Toggle = ({ active, onClick })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: onClick,
        className: `relative w-11 h-6 rounded-full cursor-pointer transition-colors border border-[var(--border-primary)] ${active ? 'bg-[var(--accent)] border-[var(--accent)]' : 'bg-[var(--bg-tertiary)]'}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `absolute top-[1px] left-[1px] w-[20px] h-[20px] bg-[var(--text-primary)] rounded-full transition-all ${active ? 'translate-x-[20px]' : ''}`
        }, void 0, false, {
            fileName: "[project]/components/risk/StepUpRules.tsx",
            lineNumber: 195,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/risk/StepUpRules.tsx",
        lineNumber: 194,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const WeightPills = ({ selected, onChange })=>{
    const options = [
        10,
        20,
        30,
        40,
        50
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex gap-2 flex-wrap",
        children: options.map((val)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>onChange(val),
                className: `inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[20px] text-[12px] font-medium border transition-all ${selected === val ? 'bg-[var(--accent)] border-[var(--accent)] text-white' : 'bg-[var(--bg-tertiary)] border-[var(--border-primary)] text-[var(--text-primary)] hover:border-[var(--accent)]'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-mono",
                    children: [
                        "+",
                        val
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/risk/StepUpRules.tsx",
                    lineNumber: 210,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, val, false, {
                fileName: "[project]/components/risk/StepUpRules.tsx",
                lineNumber: 204,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/components/risk/StepUpRules.tsx",
        lineNumber: 202,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
function StepUpRules({ rules = [], onChange }) {
    // Debugging: Pastikan data masuk
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        console.log("StepUpRules Rendered with:", rules);
    }, [
        rules
    ]);
    // Fungsi Update Data
    const updateRule = (type, field, value)=>{
        // Clone array agar state React terdeteksi berubah
        const newRules = JSON.parse(JSON.stringify(rules));
        const index = newRules.findIndex((r)=>r.ruleType === type);
        if (index === -1) {
            // Jika rule belum ada, buat baru
            const newRule = {
                ruleType: type,
                isActive: false,
                weight: 20,
                parameters: {}
            };
            if (field === 'isActive' || field === 'weight') newRule[field] = value;
            else newRule.parameters = {
                [field]: value
            };
            newRules.push(newRule);
        } else {
            // Update existing
            if (field === 'isActive' || field === 'weight') {
                newRules[index][field] = value;
            } else {
                newRules[index].parameters = {
                    ...newRules[index].parameters,
                    [field]: value
                };
            }
        }
        onChange(newRules);
    };
    // Helper Get Rule (Aman dari crash)
    const getRule = (type)=>{
        // Trim dan UpperCase untuk memastikan cocok dengan DB
        return rules.find((r)=>r.ruleType?.trim().toUpperCase() === type) || {
            isActive: false,
            parameters: {},
            weight: 20
        };
    };
    // Renderer Kartu
    const renderRuleCard = (type, label, desc, icon, children)=>{
        const rule = getRule(type);
        const isActive = rule.isActive || false;
        const weight = rule.weight || 20;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-lg)] p-4 transition-all mb-3 ${isActive ? 'hover:border-[var(--accent)]' : 'opacity-60'}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start justify-between mb-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[14px] font-semibold text-[var(--text-primary)] flex items-center gap-2 mb-1",
                                    children: [
                                        icon,
                                        label,
                                        rule.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-2 h-2 rounded-full bg-green-500",
                                            title: "Sync with DB"
                                        }, void 0, false, {
                                            fileName: "[project]/components/risk/StepUpRules.tsx",
                                            lineNumber: 275,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/risk/StepUpRules.tsx",
                                    lineNumber: 271,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[12px] text-[var(--text-tertiary)]",
                                    children: desc
                                }, void 0, false, {
                                    fileName: "[project]/components/risk/StepUpRules.tsx",
                                    lineNumber: 277,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/risk/StepUpRules.tsx",
                            lineNumber: 270,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Toggle, {
                            active: isActive,
                            onClick: ()=>updateRule(type, 'isActive', !isActive)
                        }, void 0, false, {
                            fileName: "[project]/components/risk/StepUpRules.tsx",
                            lineNumber: 279,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/risk/StepUpRules.tsx",
                    lineNumber: 269,
                    columnNumber: 13
                }, this),
                isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-3 pt-3 border-t border-[var(--border-secondary)] space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[12px] text-[var(--text-tertiary)] min-w-[120px]",
                                    children: "Risk Score Weight"
                                }, void 0, false, {
                                    fileName: "[project]/components/risk/StepUpRules.tsx",
                                    lineNumber: 284,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(WeightPills, {
                                    selected: weight,
                                    onChange: (v)=>updateRule(type, 'weight', v)
                                }, void 0, false, {
                                    fileName: "[project]/components/risk/StepUpRules.tsx",
                                    lineNumber: 285,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/risk/StepUpRules.tsx",
                            lineNumber: 283,
                            columnNumber: 21
                        }, this),
                        children
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/risk/StepUpRules.tsx",
                    lineNumber: 282,
                    columnNumber: 17
                }, this),
                isActive && type === 'GEO_ANOMALY' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-3 pt-3 border-t border-[var(--border-secondary)] space-y-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[12px] text-[var(--text-tertiary)] min-w-[120px]",
                                children: "VPN/Proxy Detection"
                            }, void 0, false, {
                                fileName: "[project]/components/risk/StepUpRules.tsx",
                                lineNumber: 293,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Toggle, {
                                active: getRule('GEO_ANOMALY').parameters?.detectVPN || false,
                                onClick: ()=>updateRule('GEO_ANOMALY', 'detectVPN', !getRule('GEO_ANOMALY').parameters?.detectVPN)
                            }, void 0, false, {
                                fileName: "[project]/components/risk/StepUpRules.tsx",
                                lineNumber: 294,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[12px] text-[var(--text-tertiary)]",
                                children: "Add +15 for VPN/Proxy"
                            }, void 0, false, {
                                fileName: "[project]/components/risk/StepUpRules.tsx",
                                lineNumber: 295,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/risk/StepUpRules.tsx",
                        lineNumber: 292,
                        columnNumber: 17
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/risk/StepUpRules.tsx",
                    lineNumber: 291,
                    columnNumber: 15
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/risk/StepUpRules.tsx",
            lineNumber: 268,
            columnNumber: 9
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-[var(--radius-lg)] overflow-hidden mb-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5 border-b border-[var(--border-secondary)] flex items-center justify-between",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[14px] font-semibold flex items-center gap-2 text-[var(--text-primary)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    className: "w-4 h-4 text-[var(--accent)]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                        points: "22 12 18 12 15 21 9 3 6 12 2 12"
                                    }, void 0, false, {
                                        fileName: "[project]/components/risk/StepUpRules.tsx",
                                        lineNumber: 309,
                                        columnNumber: 129
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/risk/StepUpRules.tsx",
                                    lineNumber: 309,
                                    columnNumber: 13
                                }, this),
                                "Step-up Authentication Rules"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/risk/StepUpRules.tsx",
                            lineNumber: 308,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[12px] text-[var(--text-tertiary)] mt-0.5",
                            children: "Configure conditions that trigger elevated authentication"
                        }, void 0, false, {
                            fileName: "[project]/components/risk/StepUpRules.tsx",
                            lineNumber: 312,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/risk/StepUpRules.tsx",
                    lineNumber: 307,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/risk/StepUpRules.tsx",
                lineNumber: 306,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5 flex flex-col gap-3",
                children: [
                    renderRuleCard('AMOUNT', 'Payment Amount Threshold', 'Trigger step-up when payment amount exceeds threshold', /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "💰"
                    }, void 0, false, {
                        fileName: "[project]/components/risk/StepUpRules.tsx",
                        lineNumber: 320,
                        columnNumber: 13
                    }, this), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[12px] text-[var(--text-tertiary)] min-w-[120px]",
                                children: "Threshold Amount"
                            }, void 0, false, {
                                fileName: "[project]/components/risk/StepUpRules.tsx",
                                lineNumber: 322,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] overflow-hidden max-w-[200px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        className: "w-full bg-transparent text-[var(--text-primary)] text-[13px] font-mono px-3 py-1.5 outline-none",
                                        value: getRule('AMOUNT').parameters?.amountThreshold || 0,
                                        onChange: (e)=>updateRule('AMOUNT', 'amountThreshold', parseInt(e.target.value))
                                    }, void 0, false, {
                                        fileName: "[project]/components/risk/StepUpRules.tsx",
                                        lineNumber: 324,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-3 py-1.5 bg-[var(--bg-hover)] text-[var(--text-tertiary)] text-[12px] border-l border-[var(--border-primary)]",
                                        children: "MYR"
                                    }, void 0, false, {
                                        fileName: "[project]/components/risk/StepUpRules.tsx",
                                        lineNumber: 329,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/risk/StepUpRules.tsx",
                                lineNumber: 323,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/risk/StepUpRules.tsx",
                        lineNumber: 321,
                        columnNumber: 13
                    }, this)),
                    renderRuleCard('NEW_DEVICE', 'First Payment from Device', 'Trigger step-up for first payment from unrecognized device', /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "📱"
                    }, void 0, false, {
                        fileName: "[project]/components/risk/StepUpRules.tsx",
                        lineNumber: 336,
                        columnNumber: 13
                    }, this), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[12px] text-[var(--text-tertiary)] min-w-[120px]",
                                children: "Trust Period"
                            }, void 0, false, {
                                fileName: "[project]/components/risk/StepUpRules.tsx",
                                lineNumber: 338,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] overflow-hidden max-w-[200px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        className: "w-full bg-transparent text-[var(--text-primary)] text-[13px] font-mono px-3 py-1.5 outline-none",
                                        value: getRule('NEW_DEVICE').parameters?.days || 90,
                                        onChange: (e)=>updateRule('NEW_DEVICE', 'days', parseInt(e.target.value))
                                    }, void 0, false, {
                                        fileName: "[project]/components/risk/StepUpRules.tsx",
                                        lineNumber: 340,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-3 py-1.5 bg-[var(--bg-hover)] text-[var(--text-tertiary)] text-[12px] border-l border-[var(--border-primary)]",
                                        children: "days"
                                    }, void 0, false, {
                                        fileName: "[project]/components/risk/StepUpRules.tsx",
                                        lineNumber: 345,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/risk/StepUpRules.tsx",
                                lineNumber: 339,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/risk/StepUpRules.tsx",
                        lineNumber: 337,
                        columnNumber: 13
                    }, this)),
                    renderRuleCard('VELOCITY_LIMIT', 'High Frequency', 'Detect if user makes too many transactions in a short time window.', /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "⚡"
                    }, void 0, false, {
                        fileName: "[project]/components/risk/StepUpRules.tsx",
                        lineNumber: 352,
                        columnNumber: 13
                    }, this), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[12px] text-[var(--text-tertiary)] min-w-[120px]",
                                        children: "Max Transactions"
                                    }, void 0, false, {
                                        fileName: "[project]/components/risk/StepUpRules.tsx",
                                        lineNumber: 355,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] overflow-hidden w-[200px] focus-within:border-[var(--accent)] transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                className: "w-full bg-transparent text-[var(--text-primary)] text-[13px] font-mono px-3 py-1.5 outline-none",
                                                value: getRule('VELOCITY_LIMIT').parameters?.maxCount || 5,
                                                onChange: (e)=>updateRule('VELOCITY_LIMIT', 'maxCount', parseInt(e.target.value))
                                            }, void 0, false, {
                                                fileName: "[project]/components/risk/StepUpRules.tsx",
                                                lineNumber: 357,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-3 py-1.5 bg-[var(--bg-hover)] text-[var(--text-tertiary)] text-[11px] font-medium border-l border-[var(--border-primary)]",
                                                children: "count"
                                            }, void 0, false, {
                                                fileName: "[project]/components/risk/StepUpRules.tsx",
                                                lineNumber: 362,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/risk/StepUpRules.tsx",
                                        lineNumber: 356,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/risk/StepUpRules.tsx",
                                lineNumber: 354,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[12px] text-[var(--text-tertiary)] min-w-[120px]",
                                        children: "Time Window"
                                    }, void 0, false, {
                                        fileName: "[project]/components/risk/StepUpRules.tsx",
                                        lineNumber: 366,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] overflow-hidden w-[200px] focus-within:border-[var(--accent)] transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                className: "w-full bg-transparent text-[var(--text-primary)] text-[13px] font-mono px-3 py-1.5 outline-none",
                                                value: getRule('VELOCITY_LIMIT').parameters?.windowMinutes || 10,
                                                onChange: (e)=>updateRule('VELOCITY_LIMIT', 'windowMinutes', parseInt(e.target.value))
                                            }, void 0, false, {
                                                fileName: "[project]/components/risk/StepUpRules.tsx",
                                                lineNumber: 368,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-3 py-1.5 bg-[var(--bg-hover)] text-[var(--text-tertiary)] text-[11px] font-medium border-l border-[var(--border-primary)]",
                                                children: "minutes"
                                            }, void 0, false, {
                                                fileName: "[project]/components/risk/StepUpRules.tsx",
                                                lineNumber: 373,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/risk/StepUpRules.tsx",
                                        lineNumber: 367,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/risk/StepUpRules.tsx",
                                lineNumber: 365,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-[var(--text-tertiary)] italic ml-[132px]",
                                children: "Example: Allow max 5 transactions every 10 minutes."
                            }, void 0, false, {
                                fileName: "[project]/components/risk/StepUpRules.tsx",
                                lineNumber: 376,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/risk/StepUpRules.tsx",
                        lineNumber: 353,
                        columnNumber: 13
                    }, this)),
                    renderRuleCard('GEO_ANOMALY', 'Geographic Anomaly', 'Trigger step-up when payment originates from unexpected location', /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "🌍"
                    }, void 0, false, {
                        fileName: "[project]/components/risk/StepUpRules.tsx",
                        lineNumber: 384,
                        columnNumber: 13
                    }, this), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[12px] text-[var(--text-tertiary)] min-w-[120px]",
                                children: "Detection Level"
                            }, void 0, false, {
                                fileName: "[project]/components/risk/StepUpRules.tsx",
                                lineNumber: 386,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "bg-[var(--bg-secondary)] border border-[var(--border-primary)] text-[var(--text-primary)] text-[12px] rounded-[var(--radius-md)] px-3 py-1.5 w-[200px] outline-none",
                                value: getRule('GEO_ANOMALY').parameters?.level || 'country',
                                onChange: (e)=>updateRule('GEO_ANOMALY', 'level', e.target.value),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "country",
                                        children: "Country change"
                                    }, void 0, false, {
                                        fileName: "[project]/components/risk/StepUpRules.tsx",
                                        lineNumber: 392,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "region",
                                        children: "Region change"
                                    }, void 0, false, {
                                        fileName: "[project]/components/risk/StepUpRules.tsx",
                                        lineNumber: 393,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/risk/StepUpRules.tsx",
                                lineNumber: 387,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/risk/StepUpRules.tsx",
                        lineNumber: 385,
                        columnNumber: 13
                    }, this)),
                    renderRuleCard('BENEFICIARY', 'New Beneficiary', 'Trigger step-up for payments to new recipients', /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "👤"
                    }, void 0, false, {
                        fileName: "[project]/components/risk/StepUpRules.tsx",
                        lineNumber: 400,
                        columnNumber: 13
                    }, this), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[12px] text-[var(--text-tertiary)] min-w-[120px]",
                                children: "Trust After"
                            }, void 0, false, {
                                fileName: "[project]/components/risk/StepUpRules.tsx",
                                lineNumber: 402,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] overflow-hidden max-w-[200px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        className: "w-full bg-transparent text-[var(--text-primary)] text-[13px] font-mono px-3 py-1.5 outline-none",
                                        value: getRule('BENEFICIARY').parameters?.trustCount || 3,
                                        onChange: (e)=>updateRule('BENEFICIARY', 'trustCount', parseInt(e.target.value))
                                    }, void 0, false, {
                                        fileName: "[project]/components/risk/StepUpRules.tsx",
                                        lineNumber: 404,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-3 py-1.5 bg-[var(--bg-hover)] text-[var(--text-tertiary)] text-[12px] border-l border-[var(--border-primary)]",
                                        children: "transactions"
                                    }, void 0, false, {
                                        fileName: "[project]/components/risk/StepUpRules.tsx",
                                        lineNumber: 409,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/risk/StepUpRules.tsx",
                                lineNumber: 403,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/risk/StepUpRules.tsx",
                        lineNumber: 401,
                        columnNumber: 13
                    }, this)),
                    renderRuleCard('DORMANT', 'Dormant Account', 'Trigger step-up for inactive accounts', /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "💤"
                    }, void 0, false, {
                        fileName: "[project]/components/risk/StepUpRules.tsx",
                        lineNumber: 416,
                        columnNumber: 13
                    }, this), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[12px] text-[var(--text-tertiary)] min-w-[120px]",
                                children: "Inactivity Days"
                            }, void 0, false, {
                                fileName: "[project]/components/risk/StepUpRules.tsx",
                                lineNumber: 418,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] overflow-hidden max-w-[200px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        className: "w-full bg-transparent text-[var(--text-primary)] text-[13px] font-mono px-3 py-1.5 outline-none",
                                        value: getRule('DORMANT').parameters?.days || 180,
                                        onChange: (e)=>updateRule('DORMANT', 'days', parseInt(e.target.value))
                                    }, void 0, false, {
                                        fileName: "[project]/components/risk/StepUpRules.tsx",
                                        lineNumber: 420,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-3 py-1.5 bg-[var(--bg-hover)] text-[var(--text-tertiary)] text-[12px] border-l border-[var(--border-primary)]",
                                        children: "days"
                                    }, void 0, false, {
                                        fileName: "[project]/components/risk/StepUpRules.tsx",
                                        lineNumber: 425,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/risk/StepUpRules.tsx",
                                lineNumber: 419,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/risk/StepUpRules.tsx",
                        lineNumber: 417,
                        columnNumber: 13
                    }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/components/risk/StepUpRules.tsx",
                lineNumber: 316,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/risk/StepUpRules.tsx",
        lineNumber: 305,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/risk/RiskSimulation.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RiskSimulator",
    ()=>RiskSimulator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function RiskSimulator({ lowThreshold, highThreshold, activeRules }) {
    // Input State
    const [amount, setAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('750');
    const [flags, setFlags] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        newBen: true,
        newDev: false,
        geo: false,
        dormant: false,
        vpn: false
    });
    // Output State
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const toggleFlag = (key)=>setFlags((p)=>({
                ...p,
                [key]: !p[key]
            }));
    // --- LOGIC ENGINE SIMULASI (Manual Run) ---
    const runSimulation = ()=>{
        let currentScore = 0;
        const breakdown = [];
        // Helper untuk mencari rule aktif
        const getRule = (type)=>activeRules.find((r)=>r.ruleType === type);
        // 1. Evaluasi Rule: Amount
        // Kita gunakan input user (amount) dibandingkan dengan rule 'AMOUNT'
        const amountRule = getRule('AMOUNT');
        const inputAmount = parseInt(amount) || 0;
        if (amountRule && amountRule.isActive) {
            const threshold = amountRule.parameters?.amountThreshold || 0;
            if (inputAmount > threshold) {
                currentScore += amountRule.weight || 0;
                breakdown.push({
                    label: `Amount > ${threshold}`,
                    val: `+${amountRule.weight}`
                });
            }
        }
        // 2. Evaluasi Flags Manual
        // Kita cocokkan flag input user dengan Rule yang relevan di database
        // New Beneficiary
        const benRule = getRule('BENEFICIARY');
        if (flags.newBen && benRule && benRule.isActive) {
            currentScore += benRule.weight || 0;
            breakdown.push({
                label: 'New beneficiary',
                val: `+${benRule.weight}`
            });
        }
        // New Device
        const devRule = getRule('NEW_DEVICE');
        if (flags.newDev && devRule && devRule.isActive) {
            currentScore += devRule.weight || 0;
            breakdown.push({
                label: 'New device',
                val: `+${devRule.weight}`
            });
        }
        // Geo Anomaly
        const geoRule = getRule('GEO_ANOMALY');
        if (flags.geo && geoRule && geoRule.isActive) {
            currentScore += geoRule.weight || 0;
            breakdown.push({
                label: 'Geographic anomaly',
                val: `+${geoRule.weight}`
            });
        }
        // Dormant Account
        const dormantRule = getRule('DORMANT');
        if (flags.dormant && dormantRule && dormantRule.isActive) {
            currentScore += dormantRule.weight || 0;
            breakdown.push({
                label: 'Dormant account',
                val: `+${dormantRule.weight}`
            });
        }
        // Batasi skor maksimal 100
        currentScore = Math.min(currentScore, 100);
        // Tentukan Level & Action
        let level = 'Low Risk';
        let style = 'low';
        let action = 'Auto-approved';
        if (currentScore >= highThreshold) {
            level = 'High Risk';
            style = 'high';
            action = 'Block / Critical Auth';
        } else if (currentScore >= lowThreshold) {
            level = 'Medium Risk';
            style = 'medium';
            action = 'Step-Up Required (FIDO2/OTP)';
        }
        setResult({
            score: currentScore,
            level,
            style,
            action,
            breakdown
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-[380px] flex flex-col gap-6 sticky h-fit",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-[12px] overflow-hidden shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-5 border-b border-[var(--border-secondary)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[14px] font-semibold text-[var(--text-primary)] flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        className: "w-4 h-4 text-[var(--text-tertiary)]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                            points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2"
                                        }, void 0, false, {
                                            fileName: "[project]/components/risk/RiskSimulation.tsx",
                                            lineNumber: 115,
                                            columnNumber: 136
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/risk/RiskSimulation.tsx",
                                        lineNumber: 115,
                                        columnNumber: 13
                                    }, this),
                                    "Risk Simulator"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/risk/RiskSimulation.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[12px] text-[var(--text-tertiary)] mt-0.5",
                                children: "Test your configuration"
                            }, void 0, false, {
                                fileName: "[project]/components/risk/RiskSimulation.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/risk/RiskSimulation.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-[12px] font-medium text-[var(--text-secondary)] mb-1.5 uppercase tracking-wide",
                                        children: "Payment Amount"
                                    }, void 0, false, {
                                        fileName: "[project]/components/risk/RiskSimulation.tsx",
                                        lineNumber: 124,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[6px] overflow-hidden focus-within:border-[var(--accent)] transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                className: "w-full bg-transparent text-[var(--text-primary)] text-[13px] font-mono px-3 py-2.5 outline-none placeholder-[var(--text-tertiary)]",
                                                value: amount,
                                                onChange: (e)=>setAmount(e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/components/risk/RiskSimulation.tsx",
                                                lineNumber: 126,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-3 py-2.5 bg-[var(--bg-hover)] text-[var(--text-tertiary)] text-[12px] border-l border-[var(--border-primary)]",
                                                children: "USD"
                                            }, void 0, false, {
                                                fileName: "[project]/components/risk/RiskSimulation.tsx",
                                                lineNumber: 132,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/risk/RiskSimulation.tsx",
                                        lineNumber: 125,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/risk/RiskSimulation.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-[12px] font-medium text-[var(--text-secondary)] mb-2 uppercase tracking-wide",
                                        children: "Scenario Flags"
                                    }, void 0, false, {
                                        fileName: "[project]/components/risk/RiskSimulation.tsx",
                                        lineNumber: 138,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-2",
                                        children: [
                                            {
                                                k: 'newBen',
                                                l: 'New beneficiary'
                                            },
                                            {
                                                k: 'newDev',
                                                l: 'New device'
                                            },
                                            {
                                                k: 'geo',
                                                l: 'Geographic anomaly'
                                            },
                                            {
                                                k: 'dormant',
                                                l: 'Dormant account'
                                            },
                                            {
                                                k: 'vpn',
                                                l: 'VPN/Proxy detected'
                                            }
                                        ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: ()=>toggleFlag(item.k),
                                                className: "flex items-center gap-2.5 p-2.5 bg-[var(--bg-tertiary)] rounded-[6px] cursor-pointer hover:bg-[var(--bg-hover)] transition-all border border-transparent hover:border-[var(--border-primary)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `w-[18px] h-[18px] border rounded-[4px] flex items-center justify-center transition-all ${flags[item.k] ? 'bg-[var(--accent)] border-[var(--accent)]' : 'border-[var(--border-primary)] bg-[var(--bg-secondary)]'}`,
                                                        children: flags[item.k] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "3",
                                                            className: "w-3 h-3 text-white",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                points: "20 6 9 17 4 12"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/risk/RiskSimulation.tsx",
                                                                lineNumber: 153,
                                                                columnNumber: 167
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/risk/RiskSimulation.tsx",
                                                            lineNumber: 153,
                                                            columnNumber: 61
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/risk/RiskSimulation.tsx",
                                                        lineNumber: 152,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[13px] text-[var(--text-primary)]",
                                                        children: item.l
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/risk/RiskSimulation.tsx",
                                                        lineNumber: 155,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, item.k, true, {
                                                fileName: "[project]/components/risk/RiskSimulation.tsx",
                                                lineNumber: 147,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/risk/RiskSimulation.tsx",
                                        lineNumber: 139,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/risk/RiskSimulation.tsx",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: runSimulation,
                                className: "w-full flex items-center justify-center gap-2 py-2.5 bg-[var(--accent)] text-white rounded-[6px] text-[13px] font-medium hover:bg-[var(--accent-hover)] transition-all shadow-md active:scale-[0.98]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        className: "w-4 h-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                            points: "5 3 19 12 5 21 5 3"
                                        }, void 0, false, {
                                            fileName: "[project]/components/risk/RiskSimulation.tsx",
                                            lineNumber: 166,
                                            columnNumber: 108
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/risk/RiskSimulation.tsx",
                                        lineNumber: 166,
                                        columnNumber: 13
                                    }, this),
                                    "Run Simulation"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/risk/RiskSimulation.tsx",
                                lineNumber: 162,
                                columnNumber: 11
                            }, this),
                            result && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `mt-5 p-4 rounded-[8px] border animate-[slideIn_0.3s_ease-out] ${result.style === 'low' ? 'bg-[var(--success-bg)] border-[var(--success-border)]' : result.style === 'medium' ? 'bg-[var(--warning-bg)] border-[var(--warning-border)]' : 'bg-[var(--error-bg)] border-[var(--error-border)]'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-3 border-b border-[rgba(0,0,0,0.05)] pb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-[28px] font-bold font-mono leading-none ${result.style === 'low' ? 'text-[var(--success)]' : result.style === 'medium' ? 'text-[var(--warning)]' : 'text-[var(--error)]'}`,
                                                children: result.score
                                            }, void 0, false, {
                                                fileName: "[project]/components/risk/RiskSimulation.tsx",
                                                lineNumber: 179,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-[20px] ${result.style === 'low' ? 'bg-[var(--success)] text-black' : result.style === 'medium' ? 'bg-[var(--warning)] text-black' : 'bg-[var(--error)] text-white'}`,
                                                children: result.level
                                            }, void 0, false, {
                                                fileName: "[project]/components/risk/RiskSimulation.tsx",
                                                lineNumber: 183,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/risk/RiskSimulation.tsx",
                                        lineNumber: 178,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1.5 mb-3 pb-3 border-b border-[rgba(0,0,0,0.05)]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-[12px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[var(--text-secondary)]",
                                                        children: "Base score"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/risk/RiskSimulation.tsx",
                                                        lineNumber: 192,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono font-semibold text-[var(--text-primary)]",
                                                        children: "0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/risk/RiskSimulation.tsx",
                                                        lineNumber: 193,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/risk/RiskSimulation.tsx",
                                                lineNumber: 191,
                                                columnNumber: 21
                                            }, this),
                                            result.breakdown.length > 0 ? result.breakdown.map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-[12px]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[var(--text-secondary)]",
                                                            children: b.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/risk/RiskSimulation.tsx",
                                                            lineNumber: 198,
                                                            columnNumber: 33
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono font-semibold text-[var(--error)]",
                                                            children: b.val
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/risk/RiskSimulation.tsx",
                                                            lineNumber: 199,
                                                            columnNumber: 33
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/components/risk/RiskSimulation.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 29
                                                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[12px] text-[var(--text-tertiary)] italic",
                                                children: "No risk factors triggered"
                                            }, void 0, false, {
                                                fileName: "[project]/components/risk/RiskSimulation.tsx",
                                                lineNumber: 203,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/risk/RiskSimulation.tsx",
                                        lineNumber: 190,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[13px] text-[var(--text-primary)]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "block mb-1.5 text-[11px] uppercase tracking-wide opacity-70",
                                                children: "Required Action"
                                            }, void 0, false, {
                                                fileName: "[project]/components/risk/RiskSimulation.tsx",
                                                lineNumber: 209,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 text-[12px] font-medium",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        className: "w-4 h-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                x: "3",
                                                                y: "11",
                                                                width: "18",
                                                                height: "11",
                                                                rx: "2",
                                                                ry: "2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/risk/RiskSimulation.tsx",
                                                                lineNumber: 211,
                                                                columnNumber: 120
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M7 11V7a5 5 0 0 1 10 0v4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/risk/RiskSimulation.tsx",
                                                                lineNumber: 211,
                                                                columnNumber: 177
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/risk/RiskSimulation.tsx",
                                                        lineNumber: 211,
                                                        columnNumber: 25
                                                    }, this),
                                                    result.action
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/risk/RiskSimulation.tsx",
                                                lineNumber: 210,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/risk/RiskSimulation.tsx",
                                        lineNumber: 208,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/risk/RiskSimulation.tsx",
                                lineNumber: 172,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/risk/RiskSimulation.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/risk/RiskSimulation.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-[12px] overflow-hidden shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-5 border-b border-[var(--border-secondary)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[14px] font-semibold text-[var(--text-primary)] flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        className: "w-4 h-4 text-[var(--text-tertiary)]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M12 20V10"
                                            }, void 0, false, {
                                                fileName: "[project]/components/risk/RiskSimulation.tsx",
                                                lineNumber: 224,
                                                columnNumber: 136
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M18 20V4"
                                            }, void 0, false, {
                                                fileName: "[project]/components/risk/RiskSimulation.tsx",
                                                lineNumber: 224,
                                                columnNumber: 157
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M6 20v-4"
                                            }, void 0, false, {
                                                fileName: "[project]/components/risk/RiskSimulation.tsx",
                                                lineNumber: 224,
                                                columnNumber: 177
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/risk/RiskSimulation.tsx",
                                        lineNumber: 224,
                                        columnNumber: 13
                                    }, this),
                                    "Configuration Impact"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/risk/RiskSimulation.tsx",
                                lineNumber: 223,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[12px] text-[var(--text-tertiary)] mt-0.5",
                                children: "Based on last 7 days"
                            }, void 0, false, {
                                fileName: "[project]/components/risk/RiskSimulation.tsx",
                                lineNumber: 227,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/risk/RiskSimulation.tsx",
                        lineNumber: 222,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-5 space-y-0",
                        children: [
                            {
                                l: 'Low risk transactions',
                                v: '68%',
                                c: 'text-[var(--success)]'
                            },
                            {
                                l: 'Medium risk (FIDO2)',
                                v: '24%',
                                c: 'text-[var(--warning)]'
                            },
                            {
                                l: 'High risk (Step-up)',
                                v: '8%',
                                c: 'text-[var(--error)]'
                            },
                            {
                                l: 'Avg. approval time',
                                v: '2.4s',
                                c: 'text-[var(--text-primary)]'
                            },
                            {
                                l: 'Step-up success rate',
                                v: '94.2%',
                                c: 'text-[var(--success)]'
                            }
                        ].map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center text-[12px] py-2.5 border-b border-[var(--border-secondary)] last:border-0 last:pb-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[var(--text-secondary)]",
                                        children: s.l
                                    }, void 0, false, {
                                        fileName: "[project]/components/risk/RiskSimulation.tsx",
                                        lineNumber: 238,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `font-mono font-semibold ${s.c}`,
                                        children: s.v
                                    }, void 0, false, {
                                        fileName: "[project]/components/risk/RiskSimulation.tsx",
                                        lineNumber: 239,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/components/risk/RiskSimulation.tsx",
                                lineNumber: 237,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/risk/RiskSimulation.tsx",
                        lineNumber: 229,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/risk/RiskSimulation.tsx",
                lineNumber: 221,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/risk/RiskSimulation.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
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
const API_URL = ("TURBOPACK compile-time value", "http://localhost:4000") || 'https://api.authkey.my';
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
"[project]/app/(admin)/risk-config/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RiskConfigPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$risk$2f$RiskThresholds$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/risk/RiskThresholds.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$risk$2f$StepUpRules$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/risk/StepUpRules.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$risk$2f$RiskSimulation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/risk/RiskSimulation.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$adminService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/adminService.ts [app-ssr] (ecmascript)");
// 'use client';
// import { useState, useEffect } from 'react';
// import { RiskThresholds } from '@/components/risk/RiskThresholds';
// import { StepUpRules } from '@/components/risk/StepUpRules';
// import { RiskSimulator } from '@/components/risk/RiskSimulation';
// import { adminService } from '@/services/adminService';
// // Default rules agar UI tidak blank saat loading
// const defaultRules = [
//   { ruleType: 'AMOUNT', isActive: true, weight: 20, parameters: { amountThreshold: 500 } },
//   { ruleType: 'NEW_DEVICE', isActive: false, weight: 30, parameters: { days: 90 } },
//   { ruleType: 'GEO_ANOMALY', isActive: false, weight: 25, parameters: { level: 'country' } },
//   { ruleType: 'BENEFICIARY', isActive: false, weight: 15, parameters: { trustCount: 3 } },
//   { ruleType: 'DORMANT', isActive: false, weight: 40, parameters: { days: 180 } },
// ];
// export default function RiskConfigPage() {
//   const [lowThreshold, setLowThreshold] = useState(30);
//   const [highThreshold, setHighThreshold] = useState(60);
//   const [rules, setRules] = useState<any[]>(defaultRules);
//   const [toast, setToast] = useState<string | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
//   // 1. LOAD DATA DARI DB
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const data = await adminService.getRiskConfig();
//         // Update Thresholds
//         if (data.threshold) {
//           setLowThreshold(data.threshold.lowScore);
//           setHighThreshold(data.threshold.highScore);
//         }
//         // Update Rules (Merge dengan default agar UI aman)
//         if (data.rules && Array.isArray(data.rules)) {
//            const merged = defaultRules.map(def => {
//              const found = data.rules.find((r: any) => r.ruleType === def.ruleType);
//              // Parse JSON parameters dari backend
//              const params = found && typeof found.parameters === 'string' 
//                 ? JSON.parse(found.parameters) 
//                 : (found?.parameters || def.parameters);
//              return found ? { ...def, ...found, parameters: params } : def;
//            });
//            setRules(merged);
//         }
//       } catch (e) {
//         console.error("Failed to load config", e);
//       } finally {
//         setIsLoading(false);
//       }
//     }
//     fetchData();
//   }, []);
//   const showToast = (msg: string) => {
//     setToast(msg);
//     setTimeout(() => setToast(null), 3000);
//   };
//   // 2. SAVE DATA KE DB
//   const handleSave = async () => {
//     try {
//       // Tampilkan indikator loading atau toast proses jika perlu
//       await adminService.updateRiskConfig({
//         lowThreshold,
//         highThreshold,
//         rules,
//         adminEmail: 'admin@paykey.com' // Ganti dengan user session nanti
//       });
//       showToast('Configuration saved successfully!');
//     } catch (e) {
//       showToast('Failed to save configuration');
//     }
//   };
//   const handleLowChange = (val: number) => {
//     setLowThreshold(val);
//     if (val >= highThreshold) setHighThreshold(val + 10);
//   };
//   const handleHighChange = (val: number) => {
//     setHighThreshold(val);
//     if (val <= lowThreshold) setLowThreshold(val - 10);
//   };
//   return (
//     <div className="flex min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-[family-name:var(--font-inter)]">
//       <main className="flex-1 flex flex-col h-screen overflow-hidden">
//         {/* Header */}
//         <header className="px-6 py-3 border-b border-[var(--border-secondary)] bg-[var(--bg-secondary)] flex justify-between items-center shrink-0 h-[60px]">
//            <div className="flex items-center gap-4">
//              <div className="flex items-center gap-2 text-sm">
//                 <span className="text-[var(--text-tertiary)]">Security</span>
//                 <span className="text-[var(--text-muted)]">/</span>
//                 <span className="font-medium text-[var(--text-primary)]">Risk Configuration</span>
//              </div>
//              {isLoading && <span className="text-xs text-[var(--text-tertiary)] animate-pulse ml-2">Syncing...</span>}
//            </div>
//            <div className="flex items-center gap-3">
//              <button onClick={() => { setRules(defaultRules); showToast('Defaults restored'); }} className="flex items-center gap-1.5 px-3.5 py-2 rounded-[var(--radius-md)] text-[13px] font-medium bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-primary)] hover:bg-[var(--bg-hover)] transition-all">
//                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M1 4v6h6"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
//                 Reset to Defaults
//              </button>
//              {/* Tombol Save sekarang memanggil handleSave (API) */}
//              <button onClick={handleSave} className="flex items-center gap-1.5 px-3.5 py-2 rounded-[var(--radius-md)] text-[13px] font-medium bg-[var(--success)] text-black hover:bg-[#22c55e] transition-all">
//                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
//                 Save Configuration
//              </button>
//            </div>
//         </header>
//         {/* Content Layout */}
//         <div className="flex-1 overflow-auto p-6 custom-scrollbar">
//             <div className="flex gap-6 max-w-[1400px]">
//                 {/* Left Column (Main Config) */}
//                 <div className="flex-1 min-w-0">
//                     <RiskThresholds 
//                         lowThreshold={lowThreshold} 
//                         highThreshold={highThreshold}
//                         onLowChange={handleLowChange}
//                         onHighChange={handleHighChange}
//                     />
//                     {/* Mengirimkan state rules ke komponen ini agar bisa diedit */}
//                     <StepUpRules rules={rules} onChange={setRules} />
//                 </div>
//                 {/* Right Column (Simulator) */}
//                 {/* Simulator mengambil data live dari state */}
//                 <RiskSimulator 
//                     lowThreshold={lowThreshold} 
//                     highThreshold={highThreshold} 
//                     activeRules={rules}
//                 />
//             </div>
//         </div>
//       </main>
//       {/* Toast Notification */}
//       {toast && (
//         <div className="fixed bottom-6 right-6 bg-[var(--success-bg)] border border-[var(--success-border)] text-[var(--text-primary)] px-4 py-3 rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.5)] z-50 flex items-center gap-3 animate-[slideIn_0.3s_ease-out]">
//             <div className="w-5 h-5 rounded-full bg-[var(--success)] text-black flex items-center justify-center">
//                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3"><polyline points="20 6 9 17 4 12"/></svg>
//             </div>
//             <span className="text-[13px] font-medium">{toast}</span>
//         </div>
//       )}
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
// Default rules agar UI tidak blank saat loading atau jika DB kosong
const defaultRules = [
    {
        ruleType: 'AMOUNT',
        ruleName: 'Payment Amount Threshold',
        isActive: true,
        weight: 20,
        parameters: {
            amountThreshold: 500
        }
    },
    {
        ruleType: 'NEW_DEVICE',
        ruleName: 'First Payment from Device',
        isActive: false,
        weight: 30,
        parameters: {
            days: 90
        }
    },
    {
        ruleType: 'GEO_ANOMALY',
        ruleName: 'Geographic Anomaly',
        isActive: false,
        weight: 25,
        parameters: {
            level: 'country'
        }
    },
    {
        ruleType: 'BENEFICIARY',
        ruleName: 'New Beneficiary',
        isActive: false,
        weight: 15,
        parameters: {
            trustCount: 3
        }
    },
    {
        ruleType: 'DORMANT',
        ruleName: 'Dormant Account',
        isActive: false,
        weight: 40,
        parameters: {
            days: 180
        }
    },
    {
        ruleType: 'VELOCITY_LIMIT',
        ruleName: 'High Frequency Transactions',
        isActive: false,
        weight: 35,
        parameters: {
            maxTransactions: 5,
            timeWindowMinutes: 10
        }
    }
];
function RiskConfigPage() {
    const [lowThreshold, setLowThreshold] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(30);
    const [highThreshold, setHighThreshold] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(60);
    // Mulai dengan defaultRules agar UI langsung tampil (Skeleton effect)
    const [rules, setRules] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultRules);
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // 1. LOAD DATA DARI DB SAAT MOUNT
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function fetchData() {
            try {
                // Fetch Parallel: Rules & Thresholds
                const [apiRules, config] = await Promise.all([
                    __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$adminService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminService"].getRiskRules(),
                    __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$adminService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminService"].getRiskConfig()
                ]);
                console.log("API Rules Loaded:", apiRules);
                // MAPPING DATA: API (riskScore) -> UI (weight)
                if (Array.isArray(apiRules) && apiRules.length > 0) {
                    const uiRules = apiRules.map((r)=>({
                            id: r.id,
                            ruleType: r.ruleType,
                            ruleName: r.ruleName,
                            isActive: r.isActive,
                            // UI pakai 'weight', DB pakai 'riskScore'
                            weight: r.riskScore ?? r.weight ?? 0,
                            // Pastikan parameters adalah object
                            parameters: typeof r.parameters === 'string' ? JSON.parse(r.parameters) : r.parameters || {}
                        }));
                    // Merge dengan defaultRules untuk memastikan urutan dan rule yang mungkin belum ada di DB tetap tampil
                    const mergedRules = defaultRules.map((def)=>{
                        const found = uiRules.find((r)=>r.ruleType === def.ruleType);
                        return found ? {
                            ...def,
                            ...found
                        } : def;
                    });
                    setRules(mergedRules);
                }
                // Set Thresholds
                if (config) {
                    setLowThreshold(config.lowScore ?? 30);
                    setHighThreshold(config.highScore ?? 60);
                }
            } catch (err) {
                console.error("Failed to load risk config:", err);
                showToast("Failed to connect to server. Using default configuration.");
            } finally{
                setIsLoading(false);
            }
        }
        fetchData();
    }, []);
    // Helper Toast
    const showToast = (msg)=>{
        setToast(msg);
        setTimeout(()=>setToast(null), 3000);
    };
    // 2. HANDLE LOCAL CHANGES (Update State UI)
    const handleRulesChange = (updatedRules)=>{
        setRules(updatedRules);
    };
    const handleLowChange = (val)=>setLowThreshold(val);
    const handleHighChange = (val)=>setHighThreshold(val);
    // 3. SAVE DATA KE DB (Batch Update)
    const handleSave = async ()=>{
        try {
            // Mapping Balik: UI (weight) -> Backend (riskScore)
            const dbPayload = rules.map((r)=>({
                    id: r.id,
                    ruleType: r.ruleType,
                    ruleName: r.ruleName || r.ruleType,
                    riskScore: r.weight,
                    isActive: r.isActive,
                    parameters: r.parameters
                }));
            // Simpan Rules
            await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$adminService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminService"].saveRiskConfigBatch(dbPayload);
            // Simpan Thresholds (Opsional: buat endpoint terpisah jika perlu)
            await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$adminService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminService"].updateRiskConfig({
                lowScore: lowThreshold,
                highScore: highThreshold
            });
            showToast('Configuration saved successfully!');
            console.log("Configuration saved to DB");
        } catch (e) {
            console.error("Save failed:", e);
            showToast('Failed to save configuration');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-[family-name:var(--font-inter)] overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "px-6 py-3 border-b border-[var(--border-secondary)] bg-[var(--bg-secondary)] flex justify-between items-center shrink-0 h-[60px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[var(--text-tertiary)]",
                                        children: "Security"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/risk-config/page.tsx",
                                        lineNumber: 282,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[var(--text-muted)]",
                                        children: "/"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/risk-config/page.tsx",
                                        lineNumber: 283,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium text-[var(--text-primary)]",
                                        children: "Risk Configuration"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/risk-config/page.tsx",
                                        lineNumber: 284,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/risk-config/page.tsx",
                                lineNumber: 281,
                                columnNumber: 14
                            }, this),
                            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-[var(--text-tertiary)] animate-pulse ml-2",
                                children: "Syncing..."
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/risk-config/page.tsx",
                                lineNumber: 286,
                                columnNumber: 28
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/risk-config/page.tsx",
                        lineNumber: 280,
                        columnNumber: 12
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setRules(defaultRules);
                                    showToast('Defaults restored (unsaved)');
                                },
                                className: "flex items-center gap-1.5 px-3.5 py-2 rounded-[var(--radius-md)] text-[13px] font-medium bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-primary)] hover:bg-[var(--bg-hover)] transition-all",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        className: "w-4 h-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M1 4v6h6"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/risk-config/page.tsx",
                                                lineNumber: 294,
                                                columnNumber: 112
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/risk-config/page.tsx",
                                                lineNumber: 294,
                                                columnNumber: 132
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/risk-config/page.tsx",
                                        lineNumber: 294,
                                        columnNumber: 17
                                    }, this),
                                    "Reset to Defaults"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/risk-config/page.tsx",
                                lineNumber: 290,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSave,
                                className: "flex items-center gap-1.5 px-3.5 py-2 rounded-[var(--radius-md)] text-[13px] font-medium bg-[var(--success)] text-black hover:bg-[#22c55e] transition-all shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        className: "w-4 h-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/risk-config/page.tsx",
                                                lineNumber: 302,
                                                columnNumber: 112
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                points: "17 21 17 13 7 13 7 21"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/risk-config/page.tsx",
                                                lineNumber: 302,
                                                columnNumber: 187
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                points: "7 3 7 8 15 8"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/risk-config/page.tsx",
                                                lineNumber: 302,
                                                columnNumber: 229
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/risk-config/page.tsx",
                                        lineNumber: 302,
                                        columnNumber: 17
                                    }, this),
                                    "Save Configuration"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/risk-config/page.tsx",
                                lineNumber: 298,
                                columnNumber: 14
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/risk-config/page.tsx",
                        lineNumber: 289,
                        columnNumber: 12
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/risk-config/page.tsx",
                lineNumber: 279,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-auto p-6 custom-scrollbar",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-6  mx-auto h-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 min-w-0 space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$risk$2f$RiskThresholds$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RiskThresholds"], {
                                    lowThreshold: lowThreshold,
                                    highThreshold: highThreshold,
                                    onLowChange: handleLowChange,
                                    onHighChange: handleHighChange
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/risk-config/page.tsx",
                                    lineNumber: 315,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$risk$2f$StepUpRules$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StepUpRules"], {
                                    rules: rules,
                                    onChange: handleRulesChange
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/risk-config/page.tsx",
                                    lineNumber: 323,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(admin)/risk-config/page.tsx",
                            lineNumber: 313,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-[400px] xl:w-[450px] shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sticky top-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$risk$2f$RiskSimulation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RiskSimulator"], {
                                    lowThreshold: lowThreshold,
                                    highThreshold: highThreshold,
                                    activeRules: rules
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/risk-config/page.tsx",
                                    lineNumber: 332,
                                    columnNumber: 23
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/risk-config/page.tsx",
                                lineNumber: 331,
                                columnNumber: 19
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/risk-config/page.tsx",
                            lineNumber: 330,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(admin)/risk-config/page.tsx",
                    lineNumber: 310,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(admin)/risk-config/page.tsx",
                lineNumber: 309,
                columnNumber: 7
            }, this),
            toast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-6 right-6 bg-[var(--success-bg)] border border-[var(--success-border)] text-[var(--text-primary)] px-4 py-3 rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.5)] z-50 flex items-center gap-3 animate-[slideIn_0.3s_ease-out]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-5 h-5 rounded-full bg-[var(--success)] text-black flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2.5",
                            className: "w-3 h-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                points: "20 6 9 17 4 12"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/risk-config/page.tsx",
                                lineNumber: 346,
                                columnNumber: 114
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/risk-config/page.tsx",
                            lineNumber: 346,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/risk-config/page.tsx",
                        lineNumber: 345,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[13px] font-medium",
                        children: toast
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/risk-config/page.tsx",
                        lineNumber: 348,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/risk-config/page.tsx",
                lineNumber: 344,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/risk-config/page.tsx",
        lineNumber: 276,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0098d381._.js.map