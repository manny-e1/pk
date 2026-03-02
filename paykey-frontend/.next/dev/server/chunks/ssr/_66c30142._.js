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
// 'use client';
// import React, { useEffect } from 'react';
// // --- HELPER COMPONENTS ---
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
//         <button 
//             key={val} 
//             type="button" // PENTING: agar tidak submit form
//             onClick={() => onChange(val)} 
//             className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[20px] text-[12px] font-medium border transition-all ${selected === val ? 'bg-[var(--accent)] border-[var(--accent)] text-white' : 'bg-[var(--bg-tertiary)] border-[var(--border-primary)] text-[var(--text-primary)] hover:border-[var(--accent)]'}`}
//         >
//           <span className="font-mono">+{val}</span>
//         </button>
//       ))}
//     </div>
//   );
// };
// // --- MAIN COMPONENT ---
// interface StepUpRulesProps {
//   rules: any[];
//   onChange: (updatedRules: any[]) => void;
// }
// export function StepUpRules({ rules = [], onChange }: StepUpRulesProps) {
//   // Debugging: Pastikan data masuk
//   useEffect(() => {
//     console.log("StepUpRules Rendered with:", rules);
//   }, [rules]);
//   // Fungsi Update Data
//   const updateRule = (type: string, field: string, value: any) => {
//     const newRules = JSON.parse(JSON.stringify(rules)); 
//     const index = newRules.findIndex((r: any) => r.ruleType === type);
//     if (index === -1) {
//         const newRule = { ruleType: type, isActive: false, weight: 20, parameters: {} };
//         if (field === 'isActive' || field === 'weight') (newRule as any)[field] = value;
//         else (newRule as any).parameters = { [field]: value };
//         newRules.push(newRule);
//     } else {
//         if (field === 'isActive' || field === 'weight') {
//             newRules[index][field] = value;
//         } else {
//             newRules[index].parameters = { ...newRules[index].parameters, [field]: value };
//         }
//     }
//     onChange(newRules);
//   };
//   const getRule = (type: string) => {
//     return rules.find(r => r.ruleType?.trim().toUpperCase() === type) || { isActive: false, parameters: {}, weight: 20 };
//   };
//   // Helper Profesional untuk mencegah bug Arrow Down (Jangan sampai kurang dari 1)
//   const handleNumberInput = (type: string, paramKey: string, rawValue: string) => {
//     if (rawValue === '') {
//         updateRule(type, paramKey, ''); 
//         return;
//     }
//     const val = parseInt(rawValue);
//     if (!isNaN(val)) updateRule(type, paramKey, Math.max(1, val)); 
//   };
//   // Renderer Kartu
//   const renderRuleCard = (type: string, label: string, desc: string, icon: any, children: any) => {
//     const rule = getRule(type);
//     const isActive = rule.isActive || false;
//     const weight = rule.weight || 20;
//     return (
//         <div className={`bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-lg)] p-4 transition-all mb-3 ${isActive ? 'hover:border-[var(--accent)]' : 'opacity-60'}`}>
//             <div className="flex items-start justify-between mb-3">
//                 <div>
//                     <div className="text-[14px] font-semibold text-[var(--text-primary)] flex items-center gap-2 mb-1">
//                         {icon}
//                         {label}
//                         {rule.id && <span className="w-2 h-2 rounded-full bg-green-500" title="Sync with DB"></span>}
//                     </div>
//                     <div className="text-[12px] text-[var(--text-tertiary)]">{desc}</div>
//                 </div>
//                 <Toggle active={isActive} onClick={() => updateRule(type, 'isActive', !isActive)} />
//             </div>
//             {isActive && (
//                 <div className="mt-3 pt-3 border-t border-[var(--border-secondary)] space-y-3">
//                     <div className="flex items-center gap-3">
//                         <span className="text-[12px] text-[var(--text-tertiary)] min-w-[120px]">Risk Score Weight</span>
//                         <WeightPills selected={weight} onChange={(v) => updateRule(type, 'weight', v)} />
//                     </div>
//                     {children}
//                 </div>
//             )}
//             {/* BAGIAN GEO ANOMALY & VPN/PROXY DIKEMBALIKAN */}
//             {isActive && type === 'GEO_ANOMALY' && (
//               <div className="mt-3 pt-3 border-t border-[var(--border-secondary)] space-y-3">
//                 <div className="flex items-center gap-3">
//                         <span className="text-[12px] text-[var(--text-tertiary)] min-w-[120px]">VPN/Proxy Detection</span>
//                         <Toggle active={getRule('GEO_ANOMALY').parameters?.detectVPN || false} onClick={() => updateRule('GEO_ANOMALY', 'detectVPN', !getRule('GEO_ANOMALY').parameters?.detectVPN)} />
//                         <span className="text-[12px] text-[var(--text-tertiary)]">Add +15 for VPN/Proxy</span>
//                     </div>
//               </div>
//             )}
//         </div>
//     );
//   };
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
//         {/* RULE 1: AMOUNT */}
//         {renderRuleCard('AMOUNT', 'Payment Amount Threshold', 'Trigger step-up when payment amount exceeds threshold', 
//             <span>💰</span>,
//             <div className="flex items-center gap-3">
//                 <span className="text-[12px] text-[var(--text-tertiary)] min-w-[120px]">Threshold Amount</span>
//                 <div className="flex items-center bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] overflow-hidden max-w-[200px]">
//                   <input type="number" 
//                     className="w-full bg-transparent text-[var(--text-primary)] text-[13px] font-mono px-3 py-1.5 outline-none" 
//                     value={getRule('AMOUNT').parameters?.amountThreshold || 0}
//                     onChange={(e) => handleNumberInput('AMOUNT', 'amountThreshold', e.target.value)}
//                   />
//                   <span className="px-3 py-1.5 bg-[var(--bg-hover)] text-[var(--text-tertiary)] text-[12px] border-l border-[var(--border-primary)]">USD</span>
//                 </div>
//             </div>
//         )}
//         {/* RULE 2: NEW DEVICE */}
//         {renderRuleCard('NEW_DEVICE', 'First Payment from Device', 'Trigger step-up for first payment from unrecognized device',
//             <span>📱</span>,
//             <div className="flex items-center gap-3">
//                 <span className="text-[12px] text-[var(--text-tertiary)] min-w-[120px]">Trust Period</span>
//                 <div className="flex items-center bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] overflow-hidden max-w-[200px]">
//                   <input type="number" 
//                      className="w-full bg-transparent text-[var(--text-primary)] text-[13px] font-mono px-3 py-1.5 outline-none" 
//                      value={getRule('NEW_DEVICE').parameters?.days || 90}
//                      onChange={(e) => handleNumberInput('NEW_DEVICE', 'days', e.target.value)}
//                   />
//                   <span className="px-3 py-1.5 bg-[var(--bg-hover)] text-[var(--text-tertiary)] text-[12px] border-l border-[var(--border-primary)]">days</span>
//                 </div>
//             </div>
//         )}
//         {/* RULE 3: VELOCITY LIMIT */}
//         {renderRuleCard('VELOCITY_LIMIT', 'High Frequency', 'Detect if user makes too many transactions in a short time window.',
//             <span>⚡</span>,
//             <div className="flex flex-col gap-3">
//                 <div className="flex items-center gap-3">
//                     <span className="text-[12px] text-[var(--text-tertiary)] min-w-[120px]">Max Transactions</span>
//                     <div className="flex items-center bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] overflow-hidden w-[200px] focus-within:border-[var(--accent)] transition-colors">
//                         <input type="number"
//                             className="w-full bg-transparent text-[var(--text-primary)] text-[13px] font-mono px-3 py-1.5 outline-none"
//                             value={getRule('VELOCITY_LIMIT').parameters?.maxCount || 5}
//                             onChange={(e) => handleNumberInput('VELOCITY_LIMIT', 'maxCount', e.target.value)}
//                         />
//                         <span className="px-3 py-1.5 bg-[var(--bg-hover)] text-[var(--text-tertiary)] text-[11px] font-medium border-l border-[var(--border-primary)]">count</span>
//                     </div>
//                 </div>
//                 <div className="flex items-center gap-3">
//                     <span className="text-[12px] text-[var(--text-tertiary)] min-w-[120px]">Time Window</span>
//                     <div className="flex items-center bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] overflow-hidden w-[200px] focus-within:border-[var(--accent)] transition-colors">
//                         <input type="number"
//                             className="w-full bg-transparent text-[var(--text-primary)] text-[13px] font-mono px-3 py-1.5 outline-none"
//                             value={getRule('VELOCITY_LIMIT').parameters?.windowMinutes || 10}
//                             onChange={(e) => handleNumberInput('VELOCITY_LIMIT', 'windowMinutes', e.target.value)}
//                         />
//                         <span className="px-3 py-1.5 bg-[var(--bg-hover)] text-[var(--text-tertiary)] text-[11px] font-medium border-l border-[var(--border-primary)]">minutes</span>
//                     </div>
//                 </div>
//                 <p className="text-[11px] text-[var(--text-tertiary)] italic ml-[132px]">
//                    Example: Allow max 5 transactions every 10 minutes.
//                 </p>
//             </div>
//         )}
//         {/* RULE 4: GEO ANOMALY */}
//         {renderRuleCard('GEO_ANOMALY', 'Geographic Anomaly', 'Trigger step-up when payment originates from unexpected location',
//             <span>🌍</span>,
//             <div className="flex items-center gap-3">
//                 <span className="text-[12px] text-[var(--text-tertiary)] min-w-[120px]">Detection Level</span>
//                 <select 
//                     className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] text-[var(--text-primary)] text-[12px] rounded-[var(--radius-md)] px-3 py-1.5 w-[200px] outline-none"
//                     value={getRule('GEO_ANOMALY').parameters?.level || 'country'}
//                     onChange={(e) => updateRule('GEO_ANOMALY', 'level', e.target.value)}
//                 >
//                     <option value="country">Country change</option>
//                     <option value="region">Region change</option>
//                 </select>
//             </div>
//         )}
//         {/* RULE 5: BENEFICIARY */}
//         {renderRuleCard('BENEFICIARY', 'New Beneficiary', 'Trigger step-up for payments to new recipients',
//             <span>👤</span>,
//             <div className="flex items-center gap-3">
//                 <span className="text-[12px] text-[var(--text-tertiary)] min-w-[120px]">Trust After</span>
//                 <div className="flex items-center bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] overflow-hidden max-w-[200px]">
//                   <input type="number" 
//                     className="w-full bg-transparent text-[var(--text-primary)] text-[13px] font-mono px-3 py-1.5 outline-none" 
//                     value={getRule('BENEFICIARY').parameters?.trustCount || 3}
//                     onChange={(e) => handleNumberInput('BENEFICIARY', 'trustCount', e.target.value)}
//                   />
//                   <span className="px-3 py-1.5 bg-[var(--bg-hover)] text-[var(--text-tertiary)] text-[12px] border-l border-[var(--border-primary)]">transactions</span>
//                 </div>
//             </div>
//         )}
//         {/* RULE 6: DORMANT */}
//         {renderRuleCard('DORMANT', 'Dormant Account', 'Trigger step-up for inactive accounts',
//             <span>💤</span>,
//             <div className="flex items-center gap-3">
//                 <span className="text-[12px] text-[var(--text-tertiary)] min-w-[120px]">Inactivity Days</span>
//                 <div className="flex items-center bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] overflow-hidden max-w-[200px]">
//                   <input type="number" 
//                     className="w-full bg-transparent text-[var(--text-primary)] text-[13px] font-mono px-3 py-1.5 outline-none" 
//                     value={getRule('DORMANT').parameters?.days || 180}
//                     onChange={(e) => handleNumberInput('DORMANT', 'days', e.target.value)}
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
// --- HELPER COMPONENTS ---
const Toggle = ({ active, onClick })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: onClick,
        className: `relative w-11 h-6 rounded-full cursor-pointer transition-colors border border-[var(--border-primary)] ${active ? 'bg-[var(--accent)] border-[var(--accent)]' : 'bg-[var(--bg-tertiary)]'}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `absolute top-[1px] left-[1px] w-[20px] h-[20px] bg-[var(--text-primary)] rounded-full transition-all ${active ? 'translate-x-[20px]' : ''}`
        }, void 0, false, {
            fileName: "[project]/components/risk/StepUpRules.tsx",
            lineNumber: 262,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/risk/StepUpRules.tsx",
        lineNumber: 261,
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
                    lineNumber: 272,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, val, false, {
                fileName: "[project]/components/risk/StepUpRules.tsx",
                lineNumber: 271,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/components/risk/StepUpRules.tsx",
        lineNumber: 269,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
function StepUpRules({ rules = [], onChange }) {
    const updateRule = (type, field, value)=>{
        const newRules = JSON.parse(JSON.stringify(rules));
        const index = newRules.findIndex((r)=>r.ruleType === type);
        if (index === -1) {
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
            if (field === 'isActive' || field === 'weight') newRules[index][field] = value;
            else newRules[index].parameters = {
                ...newRules[index].parameters,
                [field]: value
            };
        }
        onChange(newRules);
    };
    const getRule = (type)=>rules.find((r)=>r.ruleType?.trim().toUpperCase() === type) || {
            isActive: false,
            parameters: {},
            weight: 20
        };
    const handleNumberInput = (type, paramKey, rawValue)=>{
        if (rawValue === '') {
            updateRule(type, paramKey, '');
            return;
        }
        const val = parseInt(rawValue);
        if (!isNaN(val)) updateRule(type, paramKey, Math.max(1, val));
    };
    const renderRuleCard = (type, label, desc, icon, children, hidePills = false)=>{
        const rule = getRule(type);
        const isActive = rule.isActive || false;
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
                                            lineNumber: 317,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/risk/StepUpRules.tsx",
                                    lineNumber: 315,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[12px] text-[var(--text-tertiary)]",
                                    children: desc
                                }, void 0, false, {
                                    fileName: "[project]/components/risk/StepUpRules.tsx",
                                    lineNumber: 319,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/risk/StepUpRules.tsx",
                            lineNumber: 314,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Toggle, {
                            active: isActive,
                            onClick: ()=>updateRule(type, 'isActive', !isActive)
                        }, void 0, false, {
                            fileName: "[project]/components/risk/StepUpRules.tsx",
                            lineNumber: 321,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/risk/StepUpRules.tsx",
                    lineNumber: 313,
                    columnNumber: 13
                }, this),
                isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-3 pt-3 border-t border-[var(--border-secondary)] space-y-4",
                    children: [
                        !hidePills && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[12px] text-[var(--text-tertiary)] min-w-[120px]",
                                    children: "Risk Score Weight"
                                }, void 0, false, {
                                    fileName: "[project]/components/risk/StepUpRules.tsx",
                                    lineNumber: 327,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(WeightPills, {
                                    selected: rule.weight || 20,
                                    onChange: (v)=>updateRule(type, 'weight', v)
                                }, void 0, false, {
                                    fileName: "[project]/components/risk/StepUpRules.tsx",
                                    lineNumber: 328,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/risk/StepUpRules.tsx",
                            lineNumber: 326,
                            columnNumber: 25
                        }, this),
                        children
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/risk/StepUpRules.tsx",
                    lineNumber: 324,
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
                                lineNumber: 339,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Toggle, {
                                active: getRule('GEO_ANOMALY').parameters?.detectVPN || false,
                                onClick: ()=>updateRule('GEO_ANOMALY', 'detectVPN', !getRule('GEO_ANOMALY').parameters?.detectVPN)
                            }, void 0, false, {
                                fileName: "[project]/components/risk/StepUpRules.tsx",
                                lineNumber: 340,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[12px] text-[var(--text-tertiary)]",
                                children: "Add +15 for VPN/Proxy"
                            }, void 0, false, {
                                fileName: "[project]/components/risk/StepUpRules.tsx",
                                lineNumber: 341,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/risk/StepUpRules.tsx",
                        lineNumber: 338,
                        columnNumber: 17
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/risk/StepUpRules.tsx",
                    lineNumber: 337,
                    columnNumber: 15
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/risk/StepUpRules.tsx",
            lineNumber: 312,
            columnNumber: 9
        }, this);
    };
    // --- LOGIKA KHUSUS AMOUNT TIERS (HANYA 3 ITEMS & SLIDER NYATA) ---
    const amountRule = getRule('AMOUNT');
    const tiers = amountRule.parameters?.tiers || [
        {
            min: 0,
            max: 1000,
            score: 10
        },
        {
            min: 1001,
            max: 5000,
            score: 30
        },
        {
            min: 5001,
            max: 10000,
            score: 50
        }
    ];
    const updateTier = (idx, field, val)=>{
        const newTiers = [
            ...tiers
        ];
        newTiers[idx][field] = parseInt(val) || 0;
        updateRule('AMOUNT', 'tiers', newTiers);
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
                                        lineNumber: 368,
                                        columnNumber: 129
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/risk/StepUpRules.tsx",
                                    lineNumber: 368,
                                    columnNumber: 13
                                }, this),
                                "Step-up Authentication Rules"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/risk/StepUpRules.tsx",
                            lineNumber: 367,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[12px] text-[var(--text-tertiary)] mt-0.5",
                            children: "Configure conditions that trigger elevated authentication"
                        }, void 0, false, {
                            fileName: "[project]/components/risk/StepUpRules.tsx",
                            lineNumber: 371,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/risk/StepUpRules.tsx",
                    lineNumber: 366,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/risk/StepUpRules.tsx",
                lineNumber: 365,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5 flex flex-col gap-3",
                children: [
                    renderRuleCard('AMOUNT', 'Payment Amount Threshold', 'Trigger step-up when payment amount exceeds threshold', /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "💰"
                    }, void 0, false, {
                        fileName: "[project]/components/risk/StepUpRules.tsx",
                        lineNumber: 379,
                        columnNumber: 13
                    }, this), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: tiers.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                className: "w-[80px] bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[6px] px-3 py-1.5 text-[13px] font-mono outline-none focus:border-[var(--accent)] transition-colors",
                                                value: t.min,
                                                onChange: (e)=>updateTier(i, 'min', e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/components/risk/StepUpRules.tsx",
                                                lineNumber: 384,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[12px] text-[var(--text-tertiary)]",
                                                children: "to"
                                            }, void 0, false, {
                                                fileName: "[project]/components/risk/StepUpRules.tsx",
                                                lineNumber: 385,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                className: "w-[80px] bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[6px] px-3 py-1.5 text-[13px] font-mono outline-none focus:border-[var(--accent)] transition-colors",
                                                value: t.max,
                                                onChange: (e)=>updateTier(i, 'max', e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/components/risk/StepUpRules.tsx",
                                                lineNumber: 386,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/risk/StepUpRules.tsx",
                                        lineNumber: 383,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 flex items-center px-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "range",
                                            className: "slider w-full",
                                            min: "0",
                                            max: "100",
                                            value: t.score,
                                            onChange: (e)=>updateTier(i, 'score', e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/components/risk/StepUpRules.tsx",
                                            lineNumber: 391,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/risk/StepUpRules.tsx",
                                        lineNumber: 390,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[6px] px-3 py-1.5 focus-within:border-[var(--accent)] transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[13px] font-mono text-[var(--text-tertiary)]",
                                                children: "+"
                                            }, void 0, false, {
                                                fileName: "[project]/components/risk/StepUpRules.tsx",
                                                lineNumber: 402,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                className: "w-[40px] bg-transparent text-[13px] font-mono outline-none",
                                                value: t.score,
                                                onChange: (e)=>updateTier(i, 'score', e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/components/risk/StepUpRules.tsx",
                                                lineNumber: 403,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/risk/StepUpRules.tsx",
                                        lineNumber: 401,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/components/risk/StepUpRules.tsx",
                                lineNumber: 382,
                                columnNumber: 21
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/risk/StepUpRules.tsx",
                        lineNumber: 380,
                        columnNumber: 13
                    }, this), true // Hide generic weight pills
                    ),
                    renderRuleCard('NEW_DEVICE', 'First Payment from Device', 'Trigger step-up for first payment from unrecognized device', /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "📱"
                    }, void 0, false, {
                        fileName: "[project]/components/risk/StepUpRules.tsx",
                        lineNumber: 412,
                        columnNumber: 130
                    }, this), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[12px] text-[var(--text-tertiary)] min-w-[120px]",
                                children: "Trust Period"
                            }, void 0, false, {
                                fileName: "[project]/components/risk/StepUpRules.tsx",
                                lineNumber: 414,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] overflow-hidden max-w-[200px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        min: "1",
                                        className: "w-full bg-transparent px-3 py-1.5 text-[13px] font-mono outline-none",
                                        value: getRule('NEW_DEVICE').parameters?.days ?? 90,
                                        onChange: (e)=>handleNumberInput('NEW_DEVICE', 'days', e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/components/risk/StepUpRules.tsx",
                                        lineNumber: 416,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-3 py-1.5 bg-[var(--bg-hover)] text-[var(--text-tertiary)] text-[12px] border-l border-[var(--border-primary)]",
                                        children: "days"
                                    }, void 0, false, {
                                        fileName: "[project]/components/risk/StepUpRules.tsx",
                                        lineNumber: 419,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/risk/StepUpRules.tsx",
                                lineNumber: 415,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/risk/StepUpRules.tsx",
                        lineNumber: 413,
                        columnNumber: 13
                    }, this)),
                    renderRuleCard('VELOCITY_LIMIT', 'High Frequency', 'Detect if user makes too many transactions in a short time window.', /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "⚡"
                    }, void 0, false, {
                        fileName: "[project]/components/risk/StepUpRules.tsx",
                        lineNumber: 425,
                        columnNumber: 131
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
                                        lineNumber: 428,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] overflow-hidden w-[200px] focus-within:border-[var(--accent)] transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                min: "1",
                                                className: "w-full bg-transparent px-3 py-1.5 text-[13px] font-mono outline-none",
                                                value: getRule('VELOCITY_LIMIT').parameters?.maxCount ?? 5,
                                                onChange: (e)=>handleNumberInput('VELOCITY_LIMIT', 'maxCount', e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/components/risk/StepUpRules.tsx",
                                                lineNumber: 430,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-3 py-1.5 bg-[var(--bg-hover)] text-[var(--text-tertiary)] text-[11px] font-medium border-l border-[var(--border-primary)]",
                                                children: "count"
                                            }, void 0, false, {
                                                fileName: "[project]/components/risk/StepUpRules.tsx",
                                                lineNumber: 433,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/risk/StepUpRules.tsx",
                                        lineNumber: 429,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/risk/StepUpRules.tsx",
                                lineNumber: 427,
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
                                        lineNumber: 437,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] overflow-hidden w-[200px] focus-within:border-[var(--accent)] transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                min: "1",
                                                className: "w-full bg-transparent px-3 py-1.5 text-[13px] font-mono outline-none",
                                                value: getRule('VELOCITY_LIMIT').parameters?.windowMinutes ?? 10,
                                                onChange: (e)=>handleNumberInput('VELOCITY_LIMIT', 'windowMinutes', e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/components/risk/StepUpRules.tsx",
                                                lineNumber: 439,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-3 py-1.5 bg-[var(--bg-hover)] text-[var(--text-tertiary)] text-[11px] font-medium border-l border-[var(--border-primary)]",
                                                children: "minutes"
                                            }, void 0, false, {
                                                fileName: "[project]/components/risk/StepUpRules.tsx",
                                                lineNumber: 442,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/risk/StepUpRules.tsx",
                                        lineNumber: 438,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/risk/StepUpRules.tsx",
                                lineNumber: 436,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/risk/StepUpRules.tsx",
                        lineNumber: 426,
                        columnNumber: 13
                    }, this)),
                    renderRuleCard('GEO_ANOMALY', 'Geographic Anomaly', 'Trigger step-up when payment originates from unexpected location', /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "🌍"
                    }, void 0, false, {
                        fileName: "[project]/components/risk/StepUpRules.tsx",
                        lineNumber: 449,
                        columnNumber: 130
                    }, this), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[12px] text-[var(--text-tertiary)] min-w-[120px]",
                                children: "Detection Level"
                            }, void 0, false, {
                                fileName: "[project]/components/risk/StepUpRules.tsx",
                                lineNumber: 451,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "bg-[var(--bg-secondary)] border border-[var(--border-primary)] text-[var(--text-primary)] text-[12px] rounded-[var(--radius-md)] px-3 py-1.5 w-[200px] outline-none focus:border-[var(--accent)] transition-colors",
                                value: getRule('GEO_ANOMALY').parameters?.level || 'country',
                                onChange: (e)=>updateRule('GEO_ANOMALY', 'level', e.target.value),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "country",
                                        children: "Country change"
                                    }, void 0, false, {
                                        fileName: "[project]/components/risk/StepUpRules.tsx",
                                        lineNumber: 457,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "region",
                                        children: "Region change"
                                    }, void 0, false, {
                                        fileName: "[project]/components/risk/StepUpRules.tsx",
                                        lineNumber: 458,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/risk/StepUpRules.tsx",
                                lineNumber: 452,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/risk/StepUpRules.tsx",
                        lineNumber: 450,
                        columnNumber: 13
                    }, this)),
                    renderRuleCard('BENEFICIARY', 'New Beneficiary', 'Trigger step-up for payments to new recipients', /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "👤"
                    }, void 0, false, {
                        fileName: "[project]/components/risk/StepUpRules.tsx",
                        lineNumber: 464,
                        columnNumber: 109
                    }, this), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[12px] text-[var(--text-tertiary)] min-w-[120px]",
                                children: "Trust After"
                            }, void 0, false, {
                                fileName: "[project]/components/risk/StepUpRules.tsx",
                                lineNumber: 466,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] overflow-hidden max-w-[200px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        min: "1",
                                        className: "w-full bg-transparent px-3 py-1.5 text-[13px] font-mono outline-none",
                                        value: getRule('BENEFICIARY').parameters?.trustCount ?? 3,
                                        onChange: (e)=>handleNumberInput('BENEFICIARY', 'trustCount', e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/components/risk/StepUpRules.tsx",
                                        lineNumber: 468,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-3 py-1.5 bg-[var(--bg-hover)] text-[var(--text-tertiary)] text-[12px] border-l border-[var(--border-primary)]",
                                        children: "transactions"
                                    }, void 0, false, {
                                        fileName: "[project]/components/risk/StepUpRules.tsx",
                                        lineNumber: 471,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/risk/StepUpRules.tsx",
                                lineNumber: 467,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/risk/StepUpRules.tsx",
                        lineNumber: 465,
                        columnNumber: 13
                    }, this)),
                    renderRuleCard('DORMANT', 'Dormant Account', 'Trigger step-up for inactive accounts', /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "💤"
                    }, void 0, false, {
                        fileName: "[project]/components/risk/StepUpRules.tsx",
                        lineNumber: 477,
                        columnNumber: 96
                    }, this), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[12px] text-[var(--text-tertiary)] min-w-[120px]",
                                children: "Inactivity Days"
                            }, void 0, false, {
                                fileName: "[project]/components/risk/StepUpRules.tsx",
                                lineNumber: 479,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] overflow-hidden max-w-[200px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        min: "1",
                                        className: "w-full bg-transparent px-3 py-1.5 text-[13px] font-mono outline-none",
                                        value: getRule('DORMANT').parameters?.days ?? 180,
                                        onChange: (e)=>handleNumberInput('DORMANT', 'days', e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/components/risk/StepUpRules.tsx",
                                        lineNumber: 481,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-3 py-1.5 bg-[var(--bg-hover)] text-[var(--text-tertiary)] text-[12px] border-l border-[var(--border-primary)]",
                                        children: "days"
                                    }, void 0, false, {
                                        fileName: "[project]/components/risk/StepUpRules.tsx",
                                        lineNumber: 484,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/risk/StepUpRules.tsx",
                                lineNumber: 480,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/risk/StepUpRules.tsx",
                        lineNumber: 478,
                        columnNumber: 13
                    }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/components/risk/StepUpRules.tsx",
                lineNumber: 375,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/risk/StepUpRules.tsx",
        lineNumber: 364,
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
// 'use client';
// import { useState } from 'react';
// // Props: Terima konfigurasi live dari parent agar hasil simulasi AKURAT
// interface RiskSimulatorProps {
//   lowThreshold: number;
//   highThreshold: number;
//   activeRules: any[]; 
// }
// interface RiskResult {
//   score: number;
//   level: string;
//   style: string;
//   action: string;
//   breakdown: Array<{ label: string; val: string }>;
// }
// export function RiskSimulator({ lowThreshold, highThreshold, activeRules }: RiskSimulatorProps) {
//   // Input State
//   const [amount, setAmount] = useState('750');
//   const [flags, setFlags] = useState({ 
//     newBen: true, 
//     newDev: false, 
//     geo: false, 
//     dormant: false, 
//     vpn: false 
//   });
//   // Output State
//   const [result, setResult] = useState<RiskResult | null>(null);
//   const toggleFlag = (key: keyof typeof flags) => setFlags(p => ({ ...p, [key]: !p[key] }));
//   // --- LOGIC ENGINE SIMULASI (Manual Run) ---
//   const runSimulation = () => {
//     let currentScore = 0;
//     const breakdown: Array<{ label: string; val: string }> = [];
//     // Helper untuk mencari rule aktif
//     const getRule = (type: string) => activeRules.find(r => r.ruleType === type);
//     // 1. Evaluasi Rule: Amount
//     // Kita gunakan input user (amount) dibandingkan dengan rule 'AMOUNT'
//     const amountRule = getRule('AMOUNT');
//     const inputAmount = parseInt(amount) || 0;
//     if (amountRule && amountRule.isActive) {
//         const threshold = amountRule.parameters?.amountThreshold || 0;
//         if (inputAmount > threshold) {
//             currentScore += (amountRule.weight || 0);
//             breakdown.push({ label: `Amount > ${threshold}`, val: `+${amountRule.weight}` });
//         }
//     }
//     // 2. Evaluasi Flags Manual
//     // Kita cocokkan flag input user dengan Rule yang relevan di database
//     // New Beneficiary
//     const benRule = getRule('BENEFICIARY');
//     if (flags.newBen && benRule && benRule.isActive) {
//         currentScore += (benRule.weight || 0);
//         breakdown.push({ label: 'New beneficiary', val: `+${benRule.weight}` });
//     }
//     // New Device
//     const devRule = getRule('NEW_DEVICE');
//     if (flags.newDev && devRule && devRule.isActive) {
//         currentScore += (devRule.weight || 0);
//         breakdown.push({ label: 'New device', val: `+${devRule.weight}` });
//     }
//     // Geo Anomaly
//     const geoRule = getRule('GEO_ANOMALY');
//     if (flags.geo && geoRule && geoRule.isActive) {
//         currentScore += (geoRule.weight || 0);
//         breakdown.push({ label: 'Geographic anomaly', val: `+${geoRule.weight}` });
//     }
//     // Dormant Account
//     const dormantRule = getRule('DORMANT');
//     if (flags.dormant && dormantRule && dormantRule.isActive) {
//         currentScore += (dormantRule.weight || 0);
//         breakdown.push({ label: 'Dormant account', val: `+${dormantRule.weight}` });
//     }
//     // Batasi skor maksimal 100
//     currentScore = Math.min(currentScore, 100);
//     // Tentukan Level & Action
//     let level = 'Low Risk';
//     let style = 'low';
//     let action = 'Auto-approved';
//     if (currentScore >= highThreshold) {
//         level = 'High Risk';
//         style = 'high';
//         action = 'Block / Critical Auth';
//     } else if (currentScore >= lowThreshold) {
//         level = 'Medium Risk';
//         style = 'medium';
//         action = 'Step-Up Required (FIDO2/OTP)';
//     }
//     setResult({ score: currentScore, level, style, action, breakdown });
//   };
//   return (
//     <div className="w-[380px] flex flex-col gap-6 sticky h-fit">
//       {/* SIMULATOR CARD */}
//       <div className="bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-[12px] overflow-hidden shadow-sm">
//         <div className="p-5 border-b border-[var(--border-secondary)]">
//           <div className="text-[14px] font-semibold text-[var(--text-primary)] flex items-center gap-2">
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[var(--text-tertiary)]"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
//             Risk Simulator
//           </div>
//           <div className="text-[12px] text-[var(--text-tertiary)] mt-0.5">Test your configuration</div>
//         </div>
//         <div className="p-5">
//           {/* Input Amount */}
//           <div className="mb-4">
//             <label className="block text-[12px] font-medium text-[var(--text-secondary)] mb-1.5 uppercase tracking-wide">Payment Amount</label>
//             <div className="flex items-center bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[6px] overflow-hidden focus-within:border-[var(--accent)] transition-colors">
//               <input 
//                 type="number" 
//                 className="w-full bg-transparent text-[var(--text-primary)] text-[13px] font-mono px-3 py-2.5 outline-none placeholder-[var(--text-tertiary)]" 
//                 value={amount} 
//                 onChange={e => setAmount(e.target.value)} 
//               />
//               <span className="px-3 py-2.5 bg-[var(--bg-hover)] text-[var(--text-tertiary)] text-[12px] border-l border-[var(--border-primary)]">USD</span>
//             </div>
//           </div>
//           {/* Scenario Flags */}
//           <div className="mb-5">
//             <label className="block text-[12px] font-medium text-[var(--text-secondary)] mb-2 uppercase tracking-wide">Scenario Flags</label>
//             <div className="flex flex-col gap-2">
//               {[
//                 { k: 'newBen' as const, l: 'New beneficiary' },
//                 { k: 'newDev' as const, l: 'New device' },
//                 { k: 'geo' as const, l: 'Geographic anomaly' },
//                 { k: 'dormant' as const, l: 'Dormant account' },
//                 { k: 'vpn' as const, l: 'VPN/Proxy detected' },
//               ].map((item) => (
//                 <div 
//                     key={item.k} 
//                     onClick={() => toggleFlag(item.k as keyof typeof flags)} 
//                     className="flex items-center gap-2.5 p-2.5 bg-[var(--bg-tertiary)] rounded-[6px] cursor-pointer hover:bg-[var(--bg-hover)] transition-all border border-transparent hover:border-[var(--border-primary)]"
//                 >
//                   <div className={`w-[18px] h-[18px] border rounded-[4px] flex items-center justify-center transition-all ${flags[item.k as keyof typeof flags] ? 'bg-[var(--accent)] border-[var(--accent)]' : 'border-[var(--border-primary)] bg-[var(--bg-secondary)]'}`}>
//                     {flags[item.k as keyof typeof flags] && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-3 h-3 text-white"><polyline points="20 6 9 17 4 12"/></svg>}
//                   </div>
//                   <span className="text-[13px] text-[var(--text-primary)]">{item.l}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//           {/* Action Button */}
//           <button 
//             onClick={runSimulation} 
//             className="w-full flex items-center justify-center gap-2 py-2.5 bg-[var(--accent)] text-white rounded-[6px] text-[13px] font-medium hover:bg-[var(--accent-hover)] transition-all shadow-md active:scale-[0.98]"
//           >
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><polygon points="5 3 19 12 5 21 5 3"/></svg>
//             Run Simulation
//           </button>
//           {/* Result Card */}
//           {result && (
//             <div className={`mt-5 p-4 rounded-[8px] border animate-[slideIn_0.3s_ease-out] ${
//                 result.style === 'low' ? 'bg-[var(--success-bg)] border-[var(--success-border)]' : 
//                 result.style === 'medium' ? 'bg-[var(--warning-bg)] border-[var(--warning-border)]' : 
//                 'bg-[var(--error-bg)] border-[var(--error-border)]'
//             }`}>
//                 {/* Result Header */}
//                 <div className="flex items-center justify-between mb-3 border-b border-[rgba(0,0,0,0.05)] pb-2">
//                     <span className={`text-[28px] font-bold font-mono leading-none ${
//                         result.style === 'low' ? 'text-[var(--success)]' : 
//                         result.style === 'medium' ? 'text-[var(--warning)]' : 'text-[var(--error)]'
//                     }`}>{result.score}</span>
//                     <span className={`text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-[20px] ${
//                         result.style === 'low' ? 'bg-[var(--success)] text-black' : 
//                         result.style === 'medium' ? 'bg-[var(--warning)] text-black' : 'bg-[var(--error)] text-white'
//                     }`}>{result.level}</span>
//                 </div>
//                 {/* Breakdown List */}
//                 <div className="space-y-1.5 mb-3 pb-3 border-b border-[rgba(0,0,0,0.05)]">
//                     <div className="flex justify-between text-[12px]">
//                         <span className="text-[var(--text-secondary)]">Base score</span>
//                         <span className="font-mono font-semibold text-[var(--text-primary)]">0</span>
//                     </div>
//                     {result.breakdown.length > 0 ? (
//                         result.breakdown.map((b, i) => (
//                             <div key={i} className="flex justify-between text-[12px]">
//                                 <span className="text-[var(--text-secondary)]">{b.label}</span>
//                                 <span className="font-mono font-semibold text-[var(--error)]">{b.val}</span>
//                             </div>
//                         ))
//                     ) : (
//                         <div className="text-[12px] text-[var(--text-tertiary)] italic">No risk factors triggered</div>
//                     )}
//                 </div>
//                 {/* Required Action */}
//                 <div className="text-[13px] text-[var(--text-primary)]">
//                     <strong className="block mb-1.5 text-[11px] uppercase tracking-wide opacity-70">Required Action</strong>
//                     <div className="flex items-center gap-2 text-[12px] font-medium">
//                         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
//                         {result.action}
//                     </div>
//                 </div>
//             </div>
//           )}
//         </div>
//       </div>
//       {/* CONFIG IMPACT CARD (Statistik Dummy / Historical) */}
//       <div className="bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-[12px] overflow-hidden shadow-sm">
//         <div className="p-5 border-b border-[var(--border-secondary)]">
//           <div className="text-[14px] font-semibold text-[var(--text-primary)] flex items-center gap-2">
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[var(--text-tertiary)]"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>
//             Configuration Impact
//           </div>
//           <div className="text-[12px] text-[var(--text-tertiary)] mt-0.5">Based on last 7 days</div>
//         </div>
//         <div className="p-5 space-y-0">
//             {[
//                 { l: 'Low risk transactions', v: '68%', c: 'text-[var(--success)]' },
//                 { l: 'Medium risk (FIDO2)', v: '24%', c: 'text-[var(--warning)]' },
//                 { l: 'High risk (Step-up)', v: '8%', c: 'text-[var(--error)]' },
//                 { l: 'Avg. approval time', v: '2.4s', c: 'text-[var(--text-primary)]' },
//                 { l: 'Step-up success rate', v: '94.2%', c: 'text-[var(--success)]' }
//             ].map((s, i) => (
//                 <div key={i} className="flex justify-between items-center text-[12px] py-2.5 border-b border-[var(--border-secondary)] last:border-0 last:pb-0">
//                     <span className="text-[var(--text-secondary)]">{s.l}</span>
//                     <span className={`font-mono font-semibold ${s.c}`}>{s.v}</span>
//                 </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// }
'use client';
;
;
function RiskSimulator({ lowThreshold, highThreshold, activeRules, historicalTxns = [], realMetrics = {
    avgTime: '0.00s',
    successRate: '0.0%'
} }) {
    // Input State
    const [amount, setAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('750');
    const [flags, setFlags] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        newBen: true,
        newDev: false,
        geo: false,
        dormant: false,
        vpn: false
    });
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [impactStats, setImpactStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        low: '68.0%',
        mid: '24.0%',
        high: '8.0%'
    });
    const toggleFlag = (key)=>setFlags((p)=>({
                ...p,
                [key]: !p[key]
            }));
    // --- LOGIC ENGINE SIMULASI ---
    const runSimulation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        let currentScore = 0;
        const breakdown = [];
        const getRule = (type)=>activeRules.find((r)=>r.ruleType === type);
        // 1. Evaluasi Rule: Amount (MENDUKUNG TIERS / RANGES)
        const amountRule = getRule('AMOUNT');
        const inputAmount = parseInt(amount) || 0;
        if (amountRule && amountRule.isActive) {
            if (amountRule.parameters?.tiers) {
                // Logika baru: Mencari tier yang sesuai
                const tiers = amountRule.parameters.tiers;
                const matchedTier = tiers.find((t)=>inputAmount >= t.min && inputAmount <= t.max);
                if (matchedTier) {
                    currentScore += matchedTier.score;
                    breakdown.push({
                        label: `Amount Tier ($${matchedTier.min}-$${matchedTier.max})`,
                        val: `+${matchedTier.score}`
                    });
                } else if (tiers.length > 0 && inputAmount > tiers[tiers.length - 1].max) {
                    const topScore = tiers[tiers.length - 1].score;
                    currentScore += topScore;
                    breakdown.push({
                        label: `Amount Tier (> $${tiers[tiers.length - 1].max})`,
                        val: `+${topScore}`
                    });
                }
            } else {
                // Logika Fallback (jika DB masih menyimpan versi lama)
                const threshold = amountRule.parameters?.amountThreshold || 0;
                if (inputAmount > threshold) {
                    currentScore += amountRule.weight || 0;
                    breakdown.push({
                        label: `Amount > $${threshold}`,
                        val: `+${amountRule.weight}`
                    });
                }
            }
        }
        // 2. Evaluasi Flags
        const benRule = getRule('BENEFICIARY');
        if (flags.newBen && benRule && benRule.isActive) {
            currentScore += benRule.weight || 0;
            breakdown.push({
                label: 'New beneficiary',
                val: `+${benRule.weight}`
            });
        }
        const devRule = getRule('NEW_DEVICE');
        if (flags.newDev && devRule && devRule.isActive) {
            currentScore += devRule.weight || 0;
            breakdown.push({
                label: 'New device',
                val: `+${devRule.weight}`
            });
        }
        const geoRule = getRule('GEO_ANOMALY');
        if (flags.geo && geoRule && geoRule.isActive) {
            currentScore += geoRule.weight || 0;
            breakdown.push({
                label: 'Geographic anomaly',
                val: `+${geoRule.weight}`
            });
        }
        if (flags.vpn && geoRule && geoRule.isActive && geoRule.parameters?.detectVPN) {
            currentScore += 15;
            breakdown.push({
                label: 'VPN/Proxy detected',
                val: '+15'
            });
        }
        const dormantRule = getRule('DORMANT');
        if (flags.dormant && dormantRule && dormantRule.isActive) {
            currentScore += dormantRule.weight || 0;
            breakdown.push({
                label: 'Dormant account',
                val: `+${dormantRule.weight}`
            });
        }
        currentScore = Math.min(currentScore, 100);
        let level = 'Low Risk';
        let style = 'low';
        let actions = [
            'Auto-approved, no additional verification'
        ];
        if (currentScore >= highThreshold) {
            level = 'High Risk';
            style = 'high';
            actions = [
                'FIDO2 authentication required',
                'Cooldown period enforced',
                'Out-of-band notification sent'
            ];
        } else if (currentScore >= lowThreshold) {
            level = 'Medium Risk';
            style = 'medium';
            actions = [
                'FIDO2 authentication required'
            ];
        }
        setResult({
            score: currentScore,
            level,
            style,
            actions,
            breakdown
        });
    }, [
        amount,
        flags,
        activeRules,
        lowThreshold,
        highThreshold
    ]);
    // Hanya jalankan simulasi sekali pada mount awal
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        runSimulation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // --- LIVE IMPACT CALCULATION DENGAN DUKUNGAN TIERS ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!historicalTxns || historicalTxns.length === 0) return;
        let lowCount = 0, midCount = 0, highCount = 0;
        const getRule = (type)=>activeRules.find((r)=>r.ruleType === type);
        historicalTxns.forEach((tx)=>{
            let score = 0;
            const amtRule = getRule('AMOUNT');
            if (amtRule && amtRule.isActive) {
                if (amtRule.parameters?.tiers) {
                    const tiers = amtRule.parameters.tiers;
                    const t = tiers.find((tier)=>tx.amount >= tier.min && tx.amount <= tier.max);
                    if (t) score += t.score;
                    else if (tiers.length > 0 && tx.amount > tiers[tiers.length - 1].max) score += tiers[tiers.length - 1].score;
                } else {
                    if (tx.amount > (amtRule.parameters?.amountThreshold || 0)) score += amtRule.weight || 0;
                }
            }
            if (tx.isNewDevice && getRule('NEW_DEVICE')?.isActive) score += getRule('NEW_DEVICE').weight || 0;
            if (tx.isNewBen && getRule('BENEFICIARY')?.isActive) score += getRule('BENEFICIARY').weight || 0;
            if (tx.isGeoAnomaly && getRule('GEO_ANOMALY')?.isActive) score += getRule('GEO_ANOMALY').weight || 0;
            if (score >= highThreshold) highCount++;
            else if (score >= lowThreshold) midCount++;
            else lowCount++;
        });
        const total = historicalTxns.length;
        setImpactStats({
            low: (lowCount / total * 100).toFixed(1) + '%',
            mid: (midCount / total * 100).toFixed(1) + '%',
            high: (highCount / total * 100).toFixed(1) + '%'
        });
    }, [
        historicalTxns,
        activeRules,
        lowThreshold,
        highThreshold
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-[380px] flex flex-col gap-6 sticky top-6 h-fit",
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
                                            lineNumber: 418,
                                            columnNumber: 136
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/risk/RiskSimulation.tsx",
                                        lineNumber: 418,
                                        columnNumber: 13
                                    }, this),
                                    "Risk Simulator"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/risk/RiskSimulation.tsx",
                                lineNumber: 417,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[12px] text-[var(--text-tertiary)] mt-0.5",
                                children: "Test your configuration"
                            }, void 0, false, {
                                fileName: "[project]/components/risk/RiskSimulation.tsx",
                                lineNumber: 421,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/risk/RiskSimulation.tsx",
                        lineNumber: 416,
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
                                        lineNumber: 426,
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
                                                lineNumber: 428,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-3 py-2.5 bg-[var(--bg-hover)] text-[var(--text-tertiary)] text-[12px] border-l border-[var(--border-primary)]",
                                                children: "USD"
                                            }, void 0, false, {
                                                fileName: "[project]/components/risk/RiskSimulation.tsx",
                                                lineNumber: 434,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/risk/RiskSimulation.tsx",
                                        lineNumber: 427,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/risk/RiskSimulation.tsx",
                                lineNumber: 425,
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
                                        lineNumber: 439,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-2.5",
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
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "3",
                                                            className: `w-3 h-3 text-white transition-opacity ${flags[item.k] ? 'opacity-100' : 'opacity-0'}`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                points: "20 6 9 17 4 12"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/risk/RiskSimulation.tsx",
                                                                lineNumber: 454,
                                                                columnNumber: 217
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/risk/RiskSimulation.tsx",
                                                            lineNumber: 454,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/risk/RiskSimulation.tsx",
                                                        lineNumber: 453,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[13px] text-[var(--text-primary)]",
                                                        children: item.l
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/risk/RiskSimulation.tsx",
                                                        lineNumber: 456,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, item.k, true, {
                                                fileName: "[project]/components/risk/RiskSimulation.tsx",
                                                lineNumber: 448,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/risk/RiskSimulation.tsx",
                                        lineNumber: 440,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/risk/RiskSimulation.tsx",
                                lineNumber: 438,
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
                                            lineNumber: 466,
                                            columnNumber: 108
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/risk/RiskSimulation.tsx",
                                        lineNumber: 466,
                                        columnNumber: 13
                                    }, this),
                                    "Run Simulation"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/risk/RiskSimulation.tsx",
                                lineNumber: 462,
                                columnNumber: 11
                            }, this),
                            result && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `mt-4 p-4 rounded-[8px] border animate-[slideIn_0.3s_ease-out] ${result.style === 'low' ? 'bg-[var(--success-bg)] border-[var(--success-border)]' : result.style === 'medium' ? 'bg-[var(--warning-bg)] border-[var(--warning-border)]' : 'bg-[var(--error-bg)] border-[var(--error-border)]'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-3 border-b border-[rgba(0,0,0,0.05)] pb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-[24px] font-bold font-mono leading-none ${result.style === 'low' ? 'text-[var(--success)]' : result.style === 'medium' ? 'text-[var(--warning)]' : 'text-[var(--error)]'}`,
                                                children: result.score
                                            }, void 0, false, {
                                                fileName: "[project]/components/risk/RiskSimulation.tsx",
                                                lineNumber: 477,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-[12px] font-bold px-2.5 py-1 rounded-[20px] ${result.style === 'low' ? 'bg-[var(--success)] text-black' : result.style === 'medium' ? 'bg-[var(--warning)] text-black' : 'bg-[var(--error)] text-white'}`,
                                                children: result.level
                                            }, void 0, false, {
                                                fileName: "[project]/components/risk/RiskSimulation.tsx",
                                                lineNumber: 481,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/risk/RiskSimulation.tsx",
                                        lineNumber: 476,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2 mb-3 pb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-[12px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[var(--text-secondary)]",
                                                        children: "Base score"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/risk/RiskSimulation.tsx",
                                                        lineNumber: 489,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono font-semibold text-[var(--text-primary)]",
                                                        children: "0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/risk/RiskSimulation.tsx",
                                                        lineNumber: 490,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/risk/RiskSimulation.tsx",
                                                lineNumber: 488,
                                                columnNumber: 21
                                            }, this),
                                            result.breakdown.length > 0 && result.breakdown.map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-[12px]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[var(--text-secondary)]",
                                                            children: b.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/risk/RiskSimulation.tsx",
                                                            lineNumber: 494,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono font-semibold text-[var(--error)]",
                                                            children: b.val
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/risk/RiskSimulation.tsx",
                                                            lineNumber: 495,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/components/risk/RiskSimulation.tsx",
                                                    lineNumber: 493,
                                                    columnNumber: 25
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/risk/RiskSimulation.tsx",
                                        lineNumber: 487,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[13px] text-[var(--text-primary)] border-t border-[rgba(0,0,0,0.1)] pt-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "block mb-2 text-[12px] font-bold text-[var(--text-primary)]",
                                                children: "Required Actions:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/risk/RiskSimulation.tsx",
                                                lineNumber: 501,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-1.5",
                                                children: result.actions.map((act, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1.5 text-[12px] text-[var(--text-secondary)]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                viewBox: "0 0 24 24",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2",
                                                                className: "w-[14px] h-[14px] text-[var(--text-primary)]",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                    points: "20 6 9 17 4 12"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/risk/RiskSimulation.tsx",
                                                                    lineNumber: 505,
                                                                    columnNumber: 165
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/risk/RiskSimulation.tsx",
                                                                lineNumber: 505,
                                                                columnNumber: 33
                                                            }, this),
                                                            act
                                                        ]
                                                    }, index, true, {
                                                        fileName: "[project]/components/risk/RiskSimulation.tsx",
                                                        lineNumber: 504,
                                                        columnNumber: 29
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/risk/RiskSimulation.tsx",
                                                lineNumber: 502,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/risk/RiskSimulation.tsx",
                                        lineNumber: 500,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/risk/RiskSimulation.tsx",
                                lineNumber: 471,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/risk/RiskSimulation.tsx",
                        lineNumber: 424,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/risk/RiskSimulation.tsx",
                lineNumber: 415,
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
                                                lineNumber: 520,
                                                columnNumber: 136
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M18 20V4"
                                            }, void 0, false, {
                                                fileName: "[project]/components/risk/RiskSimulation.tsx",
                                                lineNumber: 520,
                                                columnNumber: 157
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M6 20v-4"
                                            }, void 0, false, {
                                                fileName: "[project]/components/risk/RiskSimulation.tsx",
                                                lineNumber: 520,
                                                columnNumber: 177
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/risk/RiskSimulation.tsx",
                                        lineNumber: 520,
                                        columnNumber: 13
                                    }, this),
                                    "Configuration Impact"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/risk/RiskSimulation.tsx",
                                lineNumber: 519,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[12px] text-[var(--text-tertiary)] mt-0.5",
                                children: "Based on Live DB Rules Evaluation"
                            }, void 0, false, {
                                fileName: "[project]/components/risk/RiskSimulation.tsx",
                                lineNumber: 523,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/risk/RiskSimulation.tsx",
                        lineNumber: 518,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-5 space-y-0",
                        children: [
                            {
                                l: 'Low risk transactions',
                                v: impactStats.low,
                                c: 'text-[var(--success)]'
                            },
                            {
                                l: 'Medium risk (FIDO2)',
                                v: impactStats.mid,
                                c: 'text-[var(--warning)]'
                            },
                            {
                                l: 'High risk (Step-up)',
                                v: impactStats.high,
                                c: 'text-[var(--error)]'
                            },
                            {
                                l: 'Avg. approval time',
                                v: realMetrics.avgTime,
                                c: 'text-[var(--text-primary)]'
                            },
                            {
                                l: 'Step-up success rate',
                                v: realMetrics.successRate,
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
                                        lineNumber: 534,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `font-mono font-semibold ${s.c}`,
                                        children: s.v
                                    }, void 0, false, {
                                        fileName: "[project]/components/risk/RiskSimulation.tsx",
                                        lineNumber: 535,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/components/risk/RiskSimulation.tsx",
                                lineNumber: 533,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/risk/RiskSimulation.tsx",
                        lineNumber: 525,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/risk/RiskSimulation.tsx",
                lineNumber: 517,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/risk/RiskSimulation.tsx",
        lineNumber: 413,
        columnNumber: 5
    }, this);
}
}),
"[project]/services/adminService.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/apiClient.ts [app-ssr] (ecmascript)");
;
const adminService = {
    // --- 1. AMOUNT THRESHOLDS ---
    getAmountLimits: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/admin/limits`);
        return res.data;
    },
    updateAmountLimit: async (id, data)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].put(`/api/admin/limits/${id}`, data);
        return res.data;
    },
    createAmountLimit: async (data)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`/api/admin/limits`, data);
        return res.data;
    },
    deleteAmountLimit: async (id)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].delete(`/api/admin/limits/${id}`);
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
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/admin/risk-rules`);
        return res.data;
    },
    getRiskConfig: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/admin/risk-config`);
        return res.data;
    },
    saveRiskConfigBatch: async (rulesPayload)=>{
        // Cukup kirimkan object { rules: rulesPayload } langsung sebagai parameter kedua
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post('/api/admin/risk-rules', {
            rules: rulesPayload
        });
        return res.data;
    },
    updateRiskConfig: async (payload)=>{
        // Cukup kirimkan variable payload langsung sebagai parameter kedua
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post('/api/admin/risk-config', payload);
        return res.data;
    },
    // --- 3. AUTH POLICIES ---
    getPolicies: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/admin/policies`);
        return res.data;
    },
    upsertPolicy: async (payload)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`/api/admin/policies`, payload);
        return res.data;
    },
    getPolicyAuditLogs: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/admin/policies/audit`);
        return res.data;
    },
    // --- 4. INVESTIGATION & LOGS ---
    getTransactions: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/admin/transactions`);
        return res.data;
    },
    getTransactionDetail: async (id)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/admin/transactions/${id}`);
        return res.data;
    },
    getAuthLogs: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/admin/logs`);
        return res.data;
    },
    getDashboardStats: async (range)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/admin/dashboard`, {
            params: {
                timeRange: range
            }
        });
        return res.data;
    },
    getTransactionEvidence: async (id)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/admin/transactions/${id}/evidence`);
        return res.data;
    },
    getInvestigationReport: async (id)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/admin/transactions/${id}/investigate`);
        return res.data;
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
// import { rule } from 'postcss';
// // Default rules agar UI tidak blank saat loading atau jika DB kosong
// const defaultRules = [
//   { ruleType: 'AMOUNT', ruleName: 'Payment Amount Threshold', isActive: true, weight: 20, parameters: { amountThreshold: 500 } },
//   { ruleType: 'NEW_DEVICE', ruleName: 'First Payment from Device', isActive: false, weight: 30, parameters: { days: 90 } },
//   { ruleType: 'GEO_ANOMALY', ruleName: 'Geographic Anomaly', isActive: false, weight: 25, parameters: { level: 'country' } },
//   { ruleType: 'BENEFICIARY', ruleName: 'New Beneficiary', isActive: false, weight: 15, parameters: { trustCount: 3 } },
//   { ruleType: 'DORMANT', ruleName: 'Dormant Account', isActive: false, weight: 40, parameters: { days: 180 } },
//   { ruleType: 'VELOCITY_LIMIT', ruleName: 'High Frequency Transactions', isActive: false, weight: 35, parameters: { maxTransactions: 5, timeWindowMinutes: 10 } },
// ];
// export default function RiskConfigPage() {
//   const [lowThreshold, setLowThreshold] = useState(30);
//   const [highThreshold, setHighThreshold] = useState(60);
//   // Mulai dengan defaultRules agar UI langsung tampil (Skeleton effect)
//   const [rules, setRules] = useState<any[]>(defaultRules);
//   const [toast, setToast] = useState<string | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
//   // 1. LOAD DATA DARI DB SAAT MOUNT
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         // Fetch Parallel: Rules & Thresholds
//         const [apiRules, config] = await Promise.all([
//             adminService.getRiskRules(),
//             adminService.getRiskConfig()
//         ]);
//         console.log("API Rules Loaded:", apiRules);
//         // MAPPING DATA: API (riskScore) -> UI (weight)
//         if (Array.isArray(apiRules) && apiRules.length > 0) {
//              const uiRules = apiRules.map((r: any) => ({
//                 id: r.id,
//                 ruleType: r.ruleType,
//                 ruleName: r.ruleName,
//                 isActive: r.isActive,
//                 // UI pakai 'weight', DB pakai 'riskScore'
//                 weight: r.riskScore ?? r.weight ?? 0,
//                 // Pastikan parameters adalah object
//                 parameters: typeof r.parameters === 'string' ? JSON.parse(r.parameters) : (r.parameters || {})
//             }));
//             // Merge dengan defaultRules untuk memastikan urutan dan rule yang mungkin belum ada di DB tetap tampil
//             const mergedRules = defaultRules.map(def => {
//                 const found = uiRules.find(r => r.ruleType === def.ruleType);
//                 return found ? { ...def, ...found } : def;
//             });
//             setRules(mergedRules);
//         }
//         // Set Thresholds
//         if (config) {
//              setLowThreshold(config.lowScore ?? 30);
//              setHighThreshold(config.highScore ?? 60);
//         }
//       } catch (err) {
//         console.error("Failed to load risk config:", err);
//         showToast("Failed to connect to server. Using default configuration.");
//       } finally {
//         setIsLoading(false);
//       }
//     }
//     fetchData();
//   }, []);
//   // Helper Toast
//   const showToast = (msg: string) => {
//     setToast(msg);
//     setTimeout(() => setToast(null), 3000);
//   };
//   // 2. HANDLE LOCAL CHANGES (Update State UI)
//   const handleRulesChange = (updatedRules: any[]) => {
//     setRules(updatedRules);
//   };
//   const handleLowChange = (val: number) => setLowThreshold(val);
//   const handleHighChange = (val: number) => setHighThreshold(val);
//   // 3. SAVE DATA KE DB (Batch Update)
//   const handleSave = async () => {
//     try {
//         // Mapping Balik: UI (weight) -> Backend (riskScore)
//         const dbPayload = rules.map(r => ({
//             id: r.id, 
//             ruleType: r.ruleType,
//             ruleName: r.ruleName || r.ruleType,
//             riskScore: r.weight,  // Kembalikan ke format DB
//             isActive: r.isActive,
//             parameters: r.parameters
//         }));
//         // Simpan Rules
//         await adminService.saveRiskConfigBatch(dbPayload);
//         // Simpan Thresholds (Opsional: buat endpoint terpisah jika perlu)
//         await adminService.updateRiskConfig({ lowScore: lowThreshold, highScore: highThreshold });
//         showToast('Configuration saved successfully!');
//         console.log("Configuration saved to DB");
//     } catch (e) {
//         console.error("Save failed:", e);
//         showToast('Failed to save configuration');
//     }
//   };
//   return (
//     <div className="flex flex-col h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-[family-name:var(--font-inter)] overflow-hidden">
//       {/* Header (Fixed Top) */}
//       <header className="px-6 py-3 border-b border-[var(--border-secondary)] bg-[var(--bg-secondary)] flex justify-between items-center shrink-0 h-[60px]">
//            <div className="flex items-center gap-4">
//              <div className="flex items-center gap-2 text-sm">
//                 <span className="text-[var(--text-tertiary)]">Security</span>
//                 <span className="text-[var(--text-muted)]">/</span>
//                 <span className="font-medium text-[var(--text-primary)]">Risk Configuration</span>
//              </div>
//              {isLoading && <span className="text-xs text-[var(--text-tertiary)] animate-pulse ml-2">Syncing...</span>}
//            </div>
//            <div className="flex items-center gap-3">
//              <button 
//                 onClick={() => { setRules(defaultRules); showToast('Defaults restored (unsaved)'); }} 
//                 className="flex items-center gap-1.5 px-3.5 py-2 rounded-[var(--radius-md)] text-[13px] font-medium bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-primary)] hover:bg-[var(--bg-hover)] transition-all"
//              >
//                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M1 4v6h6"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
//                 Reset to Defaults
//              </button>
//              {/* Tombol Save memanggil handleSave API */}
//              <button 
//                 onClick={handleSave} 
//                 className="flex items-center gap-1.5 px-3.5 py-2 rounded-[var(--radius-md)] text-[13px] font-medium bg-[var(--success)] text-black hover:bg-[#22c55e] transition-all shadow-sm"
//              >
//                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
//                 Save Configuration
//              </button>
//            </div>
//       </header>
//       {/* Content Layout (Scrollable Area) */}
//       <div className="flex-1 overflow-auto p-6 custom-scrollbar">
//           <div className="flex gap-6  mx-auto h-full">
//               {/* Left Column (Main Config) */}
//               <div className="flex-1 min-w-0 space-y-6">
//                   {/* Thresholds Component */}
//                   <RiskThresholds 
//                       lowThreshold={lowThreshold} 
//                       highThreshold={highThreshold}
//                       onLowChange={handleLowChange}
//                       onHighChange={handleHighChange}
//                   />
//                   {/* Rules Component (Editable) */}
//                   <StepUpRules 
//                       rules={rules} 
//                       onChange={handleRulesChange} 
//                   />
//               </div>
//               {/* Right Column (Simulator - Sticky) */}
//               <div className="w-[400px] xl:w-[450px] shrink-0">
//                   <div className="sticky top-0">
//                       <RiskSimulator 
//                           lowThreshold={lowThreshold} 
//                           highThreshold={highThreshold} 
//                           activeRules={rules}
//                       />
//                   </div>
//               </div>
//           </div>
//       </div>
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
    // --- PENAMBAHAN STATE UNTUK TAB ---
    const [segment, setSegment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('consumer');
    const [historicalTxns, setHistoricalTxns] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [realMetrics, setRealMetrics] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        avgTime: '0.00s',
        successRate: '0.0%'
    });
    // --- STATE UNTUK MENAMPUNG SEMUA DATA DARI DB ---
    const [allRulesData, setAllRulesData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [allConfigsData, setAllConfigsData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [lowThreshold, setLowThreshold] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(30);
    const [highThreshold, setHighThreshold] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(60);
    const [rules, setRules] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultRules);
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // 1. FUNGSI FETCH DATA GLOBAL
    // const fetchAllData = async () => {
    //   setIsLoading(true);
    //   try {
    //     // Ambil seluruh data sekaligus (Tanpa Segment di URL)
    //     const [apiRules, apiConfigs] = await Promise.all([
    //         adminService.getRiskRules(),
    //         adminService.getRiskConfig()
    //     ]);
    //     if (Array.isArray(apiRules)) setAllRulesData(apiRules);
    //     if (Array.isArray(apiConfigs)) setAllConfigsData(apiConfigs);
    //   } catch (err) {
    //     console.error("Failed to load risk config:", err);
    //     showToast("Failed to connect to server. Using default configuration.");
    //   } finally {
    //     setIsLoading(false);
    //   }
    // };
    const fetchAllData = async ()=>{
        setIsLoading(true);
        try {
            const [apiRules, apiConfigs, dashboardStats] = await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$adminService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminService"].getRiskRules(),
                __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$adminService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminService"].getRiskConfig(),
                // Ambil data dashboard asli
                __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$adminService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminService"].getDashboardStats ? __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$adminService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminService"].getDashboardStats('7d').catch(()=>null) : Promise.resolve(null)
            ]);
            if (Array.isArray(apiRules)) setAllRulesData(apiRules);
            if (Array.isArray(apiConfigs)) setAllConfigsData(apiConfigs);
            // --- BACA DATA ASLI DARI JSON BACKEND ---
            if (dashboardStats && dashboardStats.metrics) {
                // Gunakan 'totalTx' persis seperti di JSON Anda
                const totalRealTx = dashboardStats.metrics.totalTx || 0;
                // Simpan metrik asli untuk ditampilkan di UI
                setRealMetrics({
                    avgTime: dashboardStats.metrics.avgTime || '0.00s',
                    successRate: (dashboardStats.metrics.successRate || '0') + '%'
                });
                // Buat data sampel berdasarkan JUMLAH ASLI transaksi (24 transaksi)
                // Ini diperlukan agar slider bisa menghitung % Low/Mid/High secara interaktif
                const sampleTxns = Array.from({
                    length: totalRealTx
                }, (_, i)=>({
                        amount: Math.floor(Math.random() * 3000) + 10,
                        isNewDevice: i % 15 === 0,
                        isNewBen: i % 10 === 0,
                        isGeoAnomaly: i % 40 === 0
                    }));
                setHistoricalTxns(sampleTxns);
            }
        } catch (err) {
            console.error("Failed to load risk config:", err);
            showToast("Failed to connect to server. Using default configuration.");
        } finally{
            setIsLoading(false);
        }
    };
    // 2. LOAD DATA SEKALI SAAT KOMPONEN MOUNT
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchAllData();
    }, []);
    // 3. FILTER DATA SAAT TAB SEGMENT BERUBAH
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const currentSegment = segment.toUpperCase();
        // Filter Thresholds
        const configForSegment = allConfigsData.find((c)=>(c.segment || '').toUpperCase() === currentSegment);
        if (configForSegment) {
            setLowThreshold(configForSegment.lowScore ?? 30);
            setHighThreshold(configForSegment.highScore ?? 60);
        } else {
            setLowThreshold(30);
            setHighThreshold(60);
        }
        // Filter Rules
        const rulesForSegment = allRulesData.filter((r)=>(r.segment || '').toUpperCase() === currentSegment);
        if (rulesForSegment.length > 0) {
            const mergedRules = defaultRules.map((def)=>{
                const found = rulesForSegment.find((r)=>r.ruleType === def.ruleType);
                const mergedParams = found?.parameters && Object.keys(found.parameters).length > 0 ? found.parameters : def.parameters;
                // [PERBAIKAN KRITIS]: Pastikan `riskScore` dari DB dipetakan menjadi `weight` untuk UI
                if (found) {
                    return {
                        ...def,
                        ...found,
                        weight: found.riskScore ?? def.weight,
                        parameters: mergedParams
                    };
                }
                return def;
            });
            setRules(mergedRules);
        } else {
            setRules(defaultRules);
        }
    }, [
        segment,
        allRulesData,
        allConfigsData
    ]);
    // Helper Toast
    const showToast = (msg)=>{
        setToast(msg);
        setTimeout(()=>setToast(null), 3000);
    };
    // 4. HANDLE LOCAL CHANGES (Update State UI)
    const handleRulesChange = (updatedRules)=>{
        setRules(updatedRules);
    };
    const handleLowChange = (val)=>setLowThreshold(val);
    const handleHighChange = (val)=>setHighThreshold(val);
    // 5. SAVE DATA KE DB
    const handleSave = async ()=>{
        try {
            // Mapping Balik: UI (weight) -> Backend (riskScore)
            const dbPayload = rules.map((r)=>({
                    // CATATAN: 'id' sengaja dihilangkan agar DB tidak bingung dan bergantung pada ruleType
                    ruleType: r.ruleType,
                    ruleName: r.ruleName || r.ruleType,
                    riskScore: r.weight,
                    isActive: r.isActive,
                    parameters: r.parameters,
                    segment: segment.toUpperCase() // Menyisipkan segment agar backend tahu ini milik siapa
                }));
            // Simpan Rules
            await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$adminService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminService"].saveRiskConfigBatch(dbPayload);
            // Simpan Thresholds
            await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$adminService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminService"].updateRiskConfig({
                lowScore: lowThreshold,
                highScore: highThreshold,
                segment: segment.toUpperCase()
            });
            showToast('Configuration saved successfully!');
            // CATATAN: Tarik data terbaru setelah sukses menyimpan!
            await fetchAllData();
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
                                        lineNumber: 398,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[var(--text-muted)]",
                                        children: "/"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/risk-config/page.tsx",
                                        lineNumber: 399,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium text-[var(--text-primary)]",
                                        children: "Risk Configuration"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/risk-config/page.tsx",
                                        lineNumber: 400,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/risk-config/page.tsx",
                                lineNumber: 397,
                                columnNumber: 14
                            }, this),
                            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-[var(--text-tertiary)] animate-pulse ml-2",
                                children: "Syncing..."
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/risk-config/page.tsx",
                                lineNumber: 402,
                                columnNumber: 28
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/risk-config/page.tsx",
                        lineNumber: 396,
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
                                                lineNumber: 410,
                                                columnNumber: 112
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/risk-config/page.tsx",
                                                lineNumber: 410,
                                                columnNumber: 132
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/risk-config/page.tsx",
                                        lineNumber: 410,
                                        columnNumber: 17
                                    }, this),
                                    "Reset to Defaults"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/risk-config/page.tsx",
                                lineNumber: 406,
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
                                                lineNumber: 418,
                                                columnNumber: 112
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                points: "17 21 17 13 7 13 7 21"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/risk-config/page.tsx",
                                                lineNumber: 418,
                                                columnNumber: 187
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                points: "7 3 7 8 15 8"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/risk-config/page.tsx",
                                                lineNumber: 418,
                                                columnNumber: 229
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/risk-config/page.tsx",
                                        lineNumber: 418,
                                        columnNumber: 17
                                    }, this),
                                    "Save Configuration"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/risk-config/page.tsx",
                                lineNumber: 414,
                                columnNumber: 14
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/risk-config/page.tsx",
                        lineNumber: 405,
                        columnNumber: 12
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/risk-config/page.tsx",
                lineNumber: 395,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-auto p-6 custom-scrollbar",
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
                                                fileName: "[project]/app/(admin)/risk-config/page.tsx",
                                                lineNumber: 433,
                                                columnNumber: 114
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "12",
                                                cy: "7",
                                                r: "4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/risk-config/page.tsx",
                                                lineNumber: 433,
                                                columnNumber: 167
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/risk-config/page.tsx",
                                        lineNumber: 433,
                                        columnNumber: 19
                                    }, this),
                                    "Consumer Banking"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/risk-config/page.tsx",
                                lineNumber: 429,
                                columnNumber: 15
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
                                            fileName: "[project]/app/(admin)/risk-config/page.tsx",
                                            lineNumber: 440,
                                            columnNumber: 114
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/risk-config/page.tsx",
                                        lineNumber: 440,
                                        columnNumber: 19
                                    }, this),
                                    "Corporate Banking"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/risk-config/page.tsx",
                                lineNumber: 436,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/risk-config/page.tsx",
                        lineNumber: 428,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    }, `thresh-${segment}`, false, {
                                        fileName: "[project]/app/(admin)/risk-config/page.tsx",
                                        lineNumber: 451,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$risk$2f$StepUpRules$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StepUpRules"], {
                                        rules: rules,
                                        onChange: handleRulesChange
                                    }, `rules-${segment}`, false, {
                                        fileName: "[project]/app/(admin)/risk-config/page.tsx",
                                        lineNumber: 460,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/risk-config/page.tsx",
                                lineNumber: 449,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[400px] xl:w-[450px] shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sticky top-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$risk$2f$RiskSimulation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RiskSimulator"], {
                                        lowThreshold: lowThreshold,
                                        highThreshold: highThreshold,
                                        activeRules: rules,
                                        historicalTxns: historicalTxns,
                                        realMetrics: realMetrics
                                    }, `sim-${segment}`, false, {
                                        fileName: "[project]/app/(admin)/risk-config/page.tsx",
                                        lineNumber: 471,
                                        columnNumber: 23
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/risk-config/page.tsx",
                                    lineNumber: 469,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/risk-config/page.tsx",
                                lineNumber: 468,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/risk-config/page.tsx",
                        lineNumber: 446,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/risk-config/page.tsx",
                lineNumber: 425,
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
                                lineNumber: 488,
                                columnNumber: 114
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/risk-config/page.tsx",
                            lineNumber: 488,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/risk-config/page.tsx",
                        lineNumber: 487,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[13px] font-medium",
                        children: toast
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/risk-config/page.tsx",
                        lineNumber: 490,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/risk-config/page.tsx",
                lineNumber: 486,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/risk-config/page.tsx",
        lineNumber: 392,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_66c30142._.js.map