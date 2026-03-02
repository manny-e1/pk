module.exports = [
"[project]/components/ui/DataTable.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DataTable",
    ()=>DataTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
function DataTable({ columns, data, renderRow, currentPage, totalPages, onPageChange, totalItems, itemsPerPage, selectedIds, isLoading }) {
    const getPageNumbers = ()=>{
        const pages = [];
        if (totalPages <= 7) {
            for(let i = 1; i <= totalPages; i++)pages.push(i);
        } else {
            if (currentPage <= 3) {
                pages.push(1, 2, 3, 4, '...', totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            } else {
                pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
            }
        }
        return pages;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-[var(--radius-lg)] flex flex-col h-full overflow-hidden shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-auto flex-1 custom-scrollbar",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full border-collapse",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            className: "sticky top-0 z-10 bg-[var(--bg-secondary)] shadow-sm",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: columns.map((col, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: `px-4 py-3 text-left text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider border-b border-[var(--border-secondary)] whitespace-nowrap ${col.className || ''}`,
                                        children: col.header
                                    }, idx, false, {
                                        fileName: "[project]/components/ui/DataTable.tsx",
                                        lineNumber: 42,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/ui/DataTable.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ui/DataTable.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    colSpan: columns.length,
                                    className: "p-8 text-center text-[var(--text-tertiary)]",
                                    children: "Loading..."
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/DataTable.tsx",
                                    lineNumber: 50,
                                    columnNumber: 20
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ui/DataTable.tsx",
                                lineNumber: 50,
                                columnNumber: 16
                            }, this) : data.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    colSpan: columns.length,
                                    className: "p-8 text-center text-[var(--text-tertiary)]",
                                    children: "No data found"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/DataTable.tsx",
                                    lineNumber: 52,
                                    columnNumber: 20
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ui/DataTable.tsx",
                                lineNumber: 52,
                                columnNumber: 16
                            }, this) : data.map((item)=>renderRow(item, selectedIds ? selectedIds.has(item.id) : false))
                        }, void 0, false, {
                            fileName: "[project]/components/ui/DataTable.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/DataTable.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/DataTable.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-3 border-t border-[var(--border-secondary)] bg-[var(--bg-elevated)] flex items-center justify-between shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-[var(--text-tertiary)]",
                        children: [
                            "Showing ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                className: "text-[var(--text-primary)]",
                                children: totalItems > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0
                            }, void 0, false, {
                                fileName: "[project]/components/ui/DataTable.tsx",
                                lineNumber: 61,
                                columnNumber: 19
                            }, this),
                            " to ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                className: "text-[var(--text-primary)]",
                                children: Math.min(currentPage * itemsPerPage, totalItems)
                            }, void 0, false, {
                                fileName: "[project]/components/ui/DataTable.tsx",
                                lineNumber: 61,
                                columnNumber: 138
                            }, this),
                            " of ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: totalItems
                            }, void 0, false, {
                                fileName: "[project]/components/ui/DataTable.tsx",
                                lineNumber: 61,
                                columnNumber: 248
                            }, this),
                            " entries"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/DataTable.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onPageChange(currentPage - 1),
                                disabled: currentPage === 1,
                                className: "w-8 h-8 flex items-center justify-center border border-[var(--border-primary)] rounded-[var(--radius-sm)] hover:bg-[var(--bg-hover)] disabled:opacity-50 text-[var(--text-secondary)]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "16",
                                    height: "16",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                        points: "15 18 9 12 15 6"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/DataTable.tsx",
                                        lineNumber: 65,
                                        columnNumber: 111
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/DataTable.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ui/DataTable.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            getPageNumbers().map((p, i)=>typeof p === 'number' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>onPageChange(p),
                                    className: `w-8 h-8 flex items-center justify-center rounded-[var(--radius-sm)] text-[12px] font-medium transition-colors ${p === currentPage ? 'bg-[var(--accent)] text-white' : 'hover:bg-[var(--bg-hover)] text-[var(--text-secondary)]'}`,
                                    children: p
                                }, i, false, {
                                    fileName: "[project]/components/ui/DataTable.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-8 h-8 flex items-center justify-center text-[var(--text-tertiary)] text-xs",
                                    children: "..."
                                }, i, false, {
                                    fileName: "[project]/components/ui/DataTable.tsx",
                                    lineNumber: 69,
                                    columnNumber: 16
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onPageChange(currentPage + 1),
                                disabled: currentPage === totalPages,
                                className: "w-8 h-8 flex items-center justify-center border border-[var(--border-primary)] rounded-[var(--radius-sm)] hover:bg-[var(--bg-hover)] disabled:opacity-50 text-[var(--text-secondary)]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "16",
                                    height: "16",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                        points: "9 18 15 12 9 6"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/DataTable.tsx",
                                        lineNumber: 71,
                                        columnNumber: 111
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/DataTable.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ui/DataTable.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/DataTable.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/DataTable.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/DataTable.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ui/SlideOver.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SlideOver",
    ()=>SlideOver
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const SlideOver = ({ isOpen, onClose, title, children, footer })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `fixed inset-0 z-[1000] pointer-events-none ${isOpen ? 'pointer-events-auto' : ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute inset-0 bg-black/50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`,
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/components/ui/SlideOver.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute top-0 right-0 w-[480px] h-full bg-[var(--bg-secondary)] border-l border-[var(--border-primary)] shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-5 border-b border-[var(--border-secondary)] flex items-center justify-between shrink-0 bg-[var(--bg-secondary)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-base font-semibold text-[var(--text-primary)]",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/components/ui/SlideOver.tsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "w-8 h-8 rounded-[var(--radius-md)] bg-[var(--bg-tertiary)] flex items-center justify-center hover:bg-[var(--bg-hover)] transition-colors text-[var(--text-secondary)] hover:text-[var(--text-primary)]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "16",
                                    height: "16",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "18",
                                            y1: "6",
                                            x2: "6",
                                            y2: "18"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/SlideOver.tsx",
                                            lineNumber: 23,
                                            columnNumber: 111
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "6",
                                            y1: "6",
                                            x2: "18",
                                            y2: "18"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/SlideOver.tsx",
                                            lineNumber: 23,
                                            columnNumber: 148
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ui/SlideOver.tsx",
                                    lineNumber: 23,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/ui/SlideOver.tsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/SlideOver.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto p-6 custom-scrollbar bg-[var(--bg-secondary)]",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/components/ui/SlideOver.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    footer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 border-t border-[var(--border-secondary)] bg-[var(--bg-elevated)] shrink-0",
                        children: footer
                    }, void 0, false, {
                        fileName: "[project]/components/ui/SlideOver.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/SlideOver.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/SlideOver.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/components/ui/Modal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Modal",
    ()=>Modal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const Modal = ({ isOpen, onClose, title, children, footer, type = 'default' })=>{
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[1001] flex items-center justify-center font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/components/ui/Modal.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-lg)] w-full max-w-md shadow-2xl p-6 animate-in fade-in zoom-in-95 duration-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: `text-lg font-semibold ${type === 'danger' ? 'text-[var(--error)]' : 'text-[var(--text-primary)]'}`,
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/components/ui/Modal.tsx",
                                lineNumber: 20,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "18",
                                            y1: "6",
                                            x2: "6",
                                            y2: "18"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/Modal.tsx",
                                            lineNumber: 24,
                                            columnNumber: 111
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "6",
                                            y1: "6",
                                            x2: "18",
                                            y2: "18"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/Modal.tsx",
                                            lineNumber: 24,
                                            columnNumber: 148
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ui/Modal.tsx",
                                    lineNumber: 24,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/ui/Modal.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/Modal.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[13px] text-[var(--text-secondary)] leading-relaxed mb-6",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/components/ui/Modal.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    footer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end gap-3 pt-2 border-t border-[var(--border-secondary)]",
                        children: footer
                    }, void 0, false, {
                        fileName: "[project]/components/ui/Modal.tsx",
                        lineNumber: 30,
                        columnNumber: 20
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/Modal.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/Modal.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/components/ui/SimpleStatCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/ui/SimpleStatCard.tsx
__turbopack_context__.s([
    "SimpleStatCard",
    ()=>SimpleStatCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function SimpleStatCard({ label, value, icon, valueColor = 'text-[var(--text-primary)]' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-[var(--radius-lg)] p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xs text-[var(--text-tertiary)] mb-1.5 flex items-center gap-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[var(--text-secondary)]",
                        children: icon
                    }, void 0, false, {
                        fileName: "[project]/components/ui/SimpleStatCard.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    label
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/SimpleStatCard.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `text-2xl font-semibold ${valueColor}`,
                children: value
            }, void 0, false, {
                fileName: "[project]/components/ui/SimpleStatCard.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/SimpleStatCard.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ui/DeviceIcon.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/ui/DeviceIcon.tsx
__turbopack_context__.s([
    "DeviceIcon",
    ()=>DeviceIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function DeviceIcon({ type }) {
    const styles = {
        mobile: 'bg-[var(--info-bg)] text-[var(--info)]',
        desktop: 'bg-[var(--purple-bg)] text-[var(--purple)]',
        hardware: 'bg-[var(--warning-bg)] text-[var(--warning)]'
    };
    const getIcon = ()=>{
        switch(type){
            case 'mobile':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "5",
                            y: "2",
                            width: "14",
                            height: "20",
                            rx: "2",
                            ry: "2"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/DeviceIcon.tsx",
                            lineNumber: 16,
                            columnNumber: 18
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "12",
                            y1: "18",
                            x2: "12.01",
                            y2: "18"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/DeviceIcon.tsx",
                            lineNumber: 16,
                            columnNumber: 74
                        }, this)
                    ]
                }, void 0, true);
            case 'desktop':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "2",
                            y: "3",
                            width: "20",
                            height: "14",
                            rx: "2",
                            ry: "2"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/DeviceIcon.tsx",
                            lineNumber: 18,
                            columnNumber: 18
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "8",
                            y1: "21",
                            x2: "16",
                            y2: "21"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/DeviceIcon.tsx",
                            lineNumber: 18,
                            columnNumber: 74
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "12",
                            y1: "17",
                            x2: "12",
                            y2: "21"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/DeviceIcon.tsx",
                            lineNumber: 18,
                            columnNumber: 112
                        }, this)
                    ]
                }, void 0, true);
            case 'hardware':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"
                }, void 0, false, {
                    fileName: "[project]/components/ui/DeviceIcon.tsx",
                    lineNumber: 20,
                    columnNumber: 16
                }, this);
            default:
                return null;
        }
    };
    // Default to mobile if type matches none (safety)
    const styleClass = styles[type] || styles.mobile;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `w-8 h-8 rounded-[var(--radius-md)] flex items-center justify-center shrink-0 ${styleClass}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            className: "w-4 h-4",
            children: getIcon()
        }, void 0, false, {
            fileName: "[project]/components/ui/DeviceIcon.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/DeviceIcon.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ui/StatusBadge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatusBadge",
    ()=>StatusBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function StatusBadge({ status, className = '' }) {
    const normalizedStatus = (status || '').toString().toLowerCase();
    const styles = {
        active: 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/20',
        suspended: 'bg-amber-500/10 text-amber-600 border border-amber-500/20',
        revoked: 'bg-red-500/10 text-red-600 border border-red-500/20'
    };
    // Fallback untuk status lain (misal: unknown)
    const defaultStyle = 'bg-gray-500/10 text-gray-600 border border-gray-500/20';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[12px] text-[11px] font-medium capitalize tracking-wide ${styles[normalizedStatus] || defaultStyle} ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `w-1.5 h-1.5 rounded-full ${normalizedStatus === 'active' ? 'bg-emerald-500' : normalizedStatus === 'suspended' ? 'bg-amber-500' : normalizedStatus === 'revoked' ? 'bg-red-500' : 'bg-gray-400'}`
            }, void 0, false, {
                fileName: "[project]/components/ui/StatusBadge.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            status
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/StatusBadge.tsx",
        lineNumber: 17,
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
"[project]/hooks/useDevices.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDevices",
    ()=>useDevices
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
'use client';
;
;
const API_URL = ("TURBOPACK compile-time value", "http://localhost:4000/admin") || 'https://api.authkey.my';
function useDevices(userEmail) {
    const [devices, setDevices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const fetchDevices = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            setLoading(true);
            // [FIX] Jika userEmail ada, pakai query ?email=... jika tidak, kosongkan (Get All)
            const query = userEmail ? `?email=${userEmail}` : '';
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`${API_URL}/api/devices${query}`);
            const mappedData = res.data.map((d)=>({
                    id: d.credentialId,
                    dbId: d.id,
                    name: d.deviceName || 'Unknown Device',
                    type: (d.deviceName || '').toLowerCase().includes('mobile') ? 'mobile' : 'desktop',
                    model: d.deviceName || 'Unknown Model',
                    deviceModel: d.deviceModel || 'Unknown Model',
                    osName: d.osName || 'Unknown OS',
                    osVersion: d.osVersion || 'Unknown Version',
                    // [FIX] Gunakan data owner yang dikirim backend
                    user: d.ownerName || d.userDisplayName || 'Unknown',
                    userId: d.ownerEmail || 'No Email',
                    initials: (d.ownerName || 'U').charAt(0).toUpperCase(),
                    status: (d.status || 'active').toLowerCase(),
                    lastActive: new Date(d.lastActive).toLocaleString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        hour: 'numeric',
                        minute: 'numeric'
                    }),
                    lastActiveClass: 'default',
                    registered: new Date(d.registeredTimestamp).toLocaleDateString(),
                    credential: d.credentialId,
                    approvals: parseInt(d.signCounter) || 0,
                    ip: d.lastIp || '-',
                    location: d.location || 'Unknown',
                    rate: d.successRate || '-',
                    recentActivity: d.recentActivity || '-'
                }));
            setDevices(mappedData);
        } catch (err) {
            console.error("Failed to fetch devices:", err);
        } finally{
            setLoading(false);
        }
    }, [
        userEmail
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchDevices();
    }, [
        fetchDevices
    ]);
    const toggleStatus = async (id, status)=>{
        await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].put(`${API_URL}/api/devices/${id}/status`, {
            status
        });
        await fetchDevices();
    };
    const renameDevice = async (id, newName)=>{
        await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].put(`${API_URL}/api/devices/${id}/rename`, {
            newName
        });
        await fetchDevices();
    };
    return {
        devices,
        loading,
        refresh: fetchDevices,
        actions: {
            suspend: (id)=>toggleStatus(id, 'SUSPENDED'),
            reactivate: (id)=>toggleStatus(id, 'ACTIVE'),
            revoke: (id)=>toggleStatus(id, 'REVOKED'),
            rename: renameDevice
        }
    };
}
}),
"[project]/app/(admin)/devices/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DevicesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$DataTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/DataTable.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$SlideOver$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/SlideOver.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Modal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$SimpleStatCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/SimpleStatCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$DeviceIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/DeviceIcon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$StatusBadge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/StatusBadge.tsx [app-ssr] (ecmascript)");
// [TAMBAH] Hook untuk koneksi ke Backend
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDevices$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useDevices.ts [app-ssr] (ecmascript)");
// 'use client';
// import { useState, useMemo } from 'react';
// import Sidebar from '@/components/layout/Sidebar';
// import { DataTable } from '@/components/ui/DataTable';
// import { SlideOver } from '@/components/ui/SlideOver';
// import { Modal } from '@/components/ui/Modal';
// import { SimpleStatCard } from '@/components/ui/SimpleStatCard';
// import { DeviceIcon } from '@/components/ui/DeviceIcon';
// import { StatusBadge } from '@/components/ui/StatusBadge';
// import { devicesData } from '@/lib/data'; // Menggunakan data dari lib/data.ts
// import { Device } from '@/lib/types';
// export default function DevicesPage() {
//   // --- States ---
//   const [activeTab, setActiveTab] = useState<'all' | 'active' | 'suspended' | 'revoked'>('all');
//   const [typeFilter, setTypeFilter] = useState('');
//   const [statusFilter, setStatusFilter] = useState('');
//   const [searchQuery, setSearchQuery] = useState('');
//   // Table & Selection
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedDevices, setSelectedDevices] = useState<Set<string>>(new Set());
//   // Detail & Modals
//   const [currentDevice, setCurrentDevice] = useState<Device | null>(null);
//   const [modalType, setModalType] = useState<'suspend' | 'revoke' | null>(null);
//   const [revokeReason, setRevokeReason] = useState('Device Lost');
//   const [toast, setToast] = useState<{title: string, msg: string} | null>(null);
//   // --- Logic Filtering ---
//   const filteredData = useMemo(() => {
//     return devicesData.filter(d => {
//       const matchTab = activeTab === 'all' || d.status === activeTab;
//       const matchType = typeFilter === '' || d.type === typeFilter;
//       const matchStatus = statusFilter === '' || d.status === statusFilter;
//       const matchSearch = d.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
//                           d.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                           d.userId.toLowerCase().includes(searchQuery.toLowerCase());
//       return matchTab && matchType && matchStatus && matchSearch;
//     });
//   }, [activeTab, typeFilter, statusFilter, searchQuery]);
//   // --- Pagination Config ---
//   const itemsPerPage = 10;
//   const totalPages = Math.ceil(filteredData.length / itemsPerPage);
//   const paginatedData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
//   // --- Handlers ---
//   const toggleRow = (id: string) => {
//     const newSet = new Set(selectedDevices);
//     if (newSet.has(id)) newSet.delete(id); else newSet.add(id);
//     setSelectedDevices(newSet);
//   };
//   const toggleSelectAll = () => {
//     if (selectedDevices.size === filteredData.length) setSelectedDevices(new Set());
//     else setSelectedDevices(new Set(filteredData.map(d => d.id)));
//   };
//   const openDetail = (device: Device) => {
//     setCurrentDevice(device);
//   };
//   const handleAction = () => {
//     setModalType(null);
//     setCurrentDevice(null); // Close panel if open (optional UI choice)
//     setToast({
//         title: modalType === 'revoke' ? 'Credential Revoked' : 'Device Suspended',
//         msg: modalType === 'revoke' ? 'Device credential has been permanently revoked.' : 'Device has been temporarily suspended.'
//     });
//     setTimeout(() => setToast(null), 4000);
//   };
//   // --- Table Columns Definition ---
//   const columns = [
//     { 
//       header: (
//         <div onClick={toggleSelectAll} className={`w-[18px] h-[18px] border-2 rounded-[var(--radius-sm)] flex items-center justify-center cursor-pointer transition-colors ${selectedDevices.size > 0 && selectedDevices.size === filteredData.length ? 'bg-[var(--accent)] border-[var(--accent)]' : 'border-[var(--border-primary)] hover:border-[var(--accent)]'}`}>
//              {selectedDevices.size > 0 && selectedDevices.size === filteredData.length && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-3 h-3 text-white"><polyline points="20 6 9 17 4 12"/></svg>}
//         </div>
//       ), 
//       className: 'w-10 pl-3' 
//     },
//     { header: 'Device', className: 'min-w-[200px]' },
//     { header: 'User', className: 'min-w-[160px]' },
//     { header: 'Status', className: 'w-[100px]' },
//     { header: 'Last Active', className: 'w-[110px]' },
//     { header: 'Approvals', className: 'w-[100px]' },
//     { header: 'Credential ID', className: 'w-[140px]' },
//     { header: 'Actions', className: 'text-right w-[130px]' },
//   ];
//   return (
//     <div className="flex min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-[family-name:var(--font-inter)]">
//       <Sidebar />
//       <main className="flex-1 flex flex-col overflow-hidden h-screen">
//         {/* HEADER */}
//         <header className="px-6 py-3 border-b border-[var(--border-secondary)] flex items-center justify-between bg-[var(--bg-secondary)] shrink-0 h-[60px]">
//             <div className="flex items-center gap-2 text-sm">
//                 <span className="text-[var(--text-tertiary)]">Users</span>
//                 <span className="text-[var(--text-muted)]">/</span>
//                 <span className="text-[var(--text-primary)] font-medium">Device Management</span>
//             </div>
//             <div className="flex gap-3">
//                 <button className="flex items-center gap-1.5 px-3.5 py-2 rounded-[var(--radius-md)] text-[13px] font-medium bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-primary)] hover:bg-[var(--bg-hover)] transition-all">
//                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
//                     Export
//                 </button>
//                 <button onClick={() => window.location.reload()} className="flex items-center gap-1.5 px-3.5 py-2 rounded-[var(--radius-md)] text-[13px] font-medium bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-all">
//                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><polyline points="23,4 23,10 17,10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
//                     Refresh
//                 </button>
//             </div>
//         </header>
//         {/* CONTENT AREA */}
//         <div className="flex-1 overflow-auto p-6 flex flex-col">
//             {/* STATS BAR */}
//             <div className="grid grid-cols-4 gap-4 mb-6 shrink-0">
//                 <SimpleStatCard 
//                     label="Total Devices" value="4,892" 
//                     icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/></svg>} 
//                 />
//                 <SimpleStatCard 
//                     label="Active" value="4,521" valueColor="text-[var(--success)]"
//                     icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>} 
//                 />
//                 <SimpleStatCard 
//                     label="Suspended" value="127" valueColor="text-[var(--warning)]"
//                     icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>} 
//                 />
//                 <SimpleStatCard 
//                     label="Revoked" value="244" valueColor="text-[var(--error)]"
//                     icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>} 
//                 />
//             </div>
//             {/* TOOLBAR */}
//             <div className="flex items-center gap-3 mb-4 shrink-0">
//                 <div className="flex items-center gap-2 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] px-3 py-2 min-w-[300px]">
//                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[var(--text-tertiary)]"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
//                     <input 
//                       type="text" placeholder="Search devices, users, credentials..." 
//                       className="flex-1 bg-transparent border-none outline-none text-[13px] text-[var(--text-primary)] placeholder-[var(--text-tertiary)]"
//                       value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
//                     />
//                 </div>
//                 <select className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] px-3 py-2 text-[13px] text-[var(--text-primary)] outline-none cursor-pointer min-w-[120px]" value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
//                     <option value="">All Types</option><option value="mobile">Mobile</option><option value="desktop">Desktop</option><option value="hardware">Hardware Key</option>
//                 </select>
//                 <select className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] px-3 py-2 text-[13px] text-[var(--text-primary)] outline-none cursor-pointer min-w-[120px]" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
//                     <option value="">All Status</option><option value="active">Active</option><option value="suspended">Suspended</option><option value="revoked">Revoked</option>
//                 </select>
//                 <div className="flex-1"></div>
//                 <div className="inline-flex gap-1 bg-[var(--bg-secondary)] p-1 rounded-[var(--radius-md)] border border-[var(--border-secondary)]">
//                   {(['all', 'active', 'suspended', 'revoked'] as const).map((tab) => (
//                     <button 
//                         key={tab} onClick={() => setActiveTab(tab)}
//                         className={`px-3 py-1.5 text-[13px] font-medium rounded-[var(--radius-sm)] flex items-center gap-1.5 capitalize transition-all ${activeTab === tab ? 'bg-[var(--bg-tertiary)] text-[var(--text-primary)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
//                     >
//                         {tab} <span className="text-[11px] px-1.5 bg-[var(--bg-tertiary)] rounded-full font-mono text-[var(--text-tertiary)]">
//                           {tab === 'all' ? '4,892' : tab === 'active' ? '4,521' : tab === 'suspended' ? '127' : '244'}
//                         </span>
//                     </button>
//                   ))}
//                 </div>
//             </div>
//             {/* MAIN TABLE */}
//             <DataTable 
//                 columns={columns}
//                 data={paginatedData}
//                 currentPage={currentPage}
//                 totalPages={totalPages}
//                 totalItems={filteredData.length}
//                 itemsPerPage={itemsPerPage}
//                 onPageChange={setCurrentPage}
//                 renderRow={(d) => (
//                     <tr 
//                         key={d.id} 
//                         onClick={() => openDetail(d)}
//                         className={`group cursor-pointer transition-colors hover:bg-[var(--bg-tertiary)] border-b border-[var(--border-secondary)] last:border-0 ${d.status === 'revoked' ? 'opacity-60' : ''} ${selectedDevices.has(d.id) ? 'bg-[rgba(35,131,226,0.15)]' : ''}`}
//                     >
//                         <td className="p-3 pl-3" onClick={(e) => {e.stopPropagation(); toggleRow(d.id);}}>
//                             <div className={`w-[18px] h-[18px] border-2 rounded-[var(--radius-sm)] flex items-center justify-center ${selectedDevices.has(d.id) ? 'bg-[var(--accent)] border-[var(--accent)]' : 'border-[var(--border-primary)] group-hover:border-[var(--accent)]'}`}>
//                                 {selectedDevices.has(d.id) && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-3 h-3 text-white"><polyline points="20 6 9 17 4 12"/></svg>}
//                             </div>
//                         </td>
//                         <td className="p-3">
//                             <div className="flex items-center gap-3">
//                                 <DeviceIcon type={d.type} />
//                                 <div>
//                                     <div className="font-medium text-[13px]">{d.name}</div>
//                                     <div className="text-[11px] text-[var(--text-tertiary)]">{d.model}</div>
//                                 </div>
//                             </div>
//                         </td>
//                         <td className="p-3">
//                             <div className="flex items-center gap-2">
//                                 <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--purple)] flex items-center justify-center text-[10px] font-semibold text-white">{d.initials}</div>
//                                 <div>
//                                     <div className="text-[13px]">{d.user}</div>
//                                     <div className="text-[11px] text-[var(--text-tertiary)] font-mono">{d.userId}</div>
//                                 </div>
//                             </div>
//                         </td>
//                         <td className="p-3"><StatusBadge status={d.status} /></td>
//                         <td className={`p-3 text-xs ${d.lastActiveClass === 'recent' ? 'text-[var(--success)]' : d.lastActiveClass === 'warning' ? 'text-[var(--warning)]' : 'text-[var(--text-tertiary)]'}`}>{d.lastActive}</td>
//                         <td className="p-3 text-[13px]">
//                             {d.approvals}
//                             {d.rate !== '-' && <span className="text-[var(--success)] text-[11px] ml-1">({d.rate})</span>}
//                         </td>
//                         <td className={`p-3 text-[11px] font-mono text-[var(--text-secondary)] ${d.status === 'revoked' ? 'line-through' : ''}`}>
//                             {d.credential.substring(0, 16)}...
//                         </td>
//                         <td className="p-3 text-right" onClick={(e) => e.stopPropagation()}>
//                             <div className="flex justify-end gap-1">
//                                 {d.status === 'active' ? (
//                                     <>
//                                         <button onClick={() => {setCurrentDevice(d); setModalType('suspend');}} className="px-2 py-1 text-xs bg-[var(--warning)] text-black rounded-[var(--radius-md)] font-medium hover:bg-[#f59e0b] transition-colors">Suspend</button>
//                                         <button onClick={() => {setCurrentDevice(d); setModalType('revoke');}} className="px-2 py-1 text-xs bg-[var(--error)] text-white rounded-[var(--radius-md)] font-medium hover:bg-[#ef4444] transition-colors">Revoke</button>
//                                     </>
//                                 ) : d.status === 'suspended' ? (
//                                     <>
//                                         <button onClick={handleAction} className="px-2 py-1 text-xs bg-[var(--accent)] text-white rounded-[var(--radius-md)] font-medium hover:bg-[var(--accent-hover)] transition-colors">Reactivate</button>
//                                         <button onClick={() => {setCurrentDevice(d); setModalType('revoke');}} className="px-2 py-1 text-xs bg-[var(--error)] text-white rounded-[var(--radius-md)] font-medium hover:bg-[#ef4444] transition-colors">Revoke</button>
//                                     </>
//                                 ) : (
//                                     <button onClick={() => openDetail(d)} className="px-2 py-1 text-xs border border-[var(--border-primary)] rounded-[var(--radius-md)] bg-[var(--bg-tertiary)] hover:bg-[var(--bg-hover)] transition-colors">History</button>
//                                 )}
//                             </div>
//                         </td>
//                     </tr>
//                 )}
//             />
//             {/* BULK ACTIONS BAR */}
//             <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-lg)] p-3 flex items-center gap-4 shadow-2xl z-50 transition-all duration-300 ${selectedDevices.size > 0 ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}>
//                 <div className="text-[13px] flex items-center gap-2">
//                     <strong className="bg-[var(--accent)] text-white px-2 py-0.5 rounded-[10px] text-xs">{selectedDevices.size}</strong> selected
//                 </div>
//                 <div className="w-px h-6 bg-[var(--border-primary)]"></div>
//                 <button onClick={() => setSelectedDevices(new Set())} className="text-xs px-2 py-1 bg-[var(--bg-tertiary)] rounded-[var(--radius-sm)] border border-[var(--border-primary)] hover:bg-[var(--bg-hover)] transition-colors text-[var(--text-primary)]">Clear</button>
//                 <button className="text-xs px-2 py-1 bg-[var(--warning)] text-black font-medium rounded-[var(--radius-sm)] hover:bg-[#f59e0b] transition-colors">Suspend All</button>
//                 <button className="text-xs px-2 py-1 bg-[var(--error)] text-white font-medium rounded-[var(--radius-sm)] hover:bg-[#ef4444] transition-colors">Revoke All</button>
//             </div>
//         </div>
//       </main>
//       {/* DETAIL SLIDE OVER */}
//       <SlideOver 
//         isOpen={!!currentDevice} 
//         onClose={() => setCurrentDevice(null)} 
//         title="Device Details"
//         footer={currentDevice && currentDevice.status !== 'revoked' ? (
//             <div className="flex gap-2 w-full justify-end">
//                 {currentDevice.status === 'active' ? (
//                     <>
//                         <button onClick={() => setModalType('suspend')} className="px-3 py-2 bg-[var(--warning)] text-black text-[13px] font-medium rounded-[var(--radius-md)] hover:bg-[#f59e0b]">Suspend Device</button>
//                         <button onClick={() => setModalType('revoke')} className="px-3 py-2 bg-[var(--error)] text-white text-[13px] font-medium rounded-[var(--radius-md)] hover:bg-[#ef4444]">Revoke Credential</button>
//                     </>
//                 ) : (
//                     <>
//                         <button onClick={handleAction} className="px-3 py-2 bg-[var(--accent)] text-white text-[13px] font-medium rounded-[var(--radius-md)] hover:bg-[#var(--accent-hover)]">Reactivate</button>
//                         <button onClick={() => setModalType('revoke')} className="px-3 py-2 bg-[var(--error)] text-white text-[13px] font-medium rounded-[var(--radius-md)] hover:bg-[#ef4444]">Revoke Credential</button>
//                     </>
//                 )}
//             </div>
//         ) : undefined}
//       >
//         {currentDevice && (
//             <div className="space-y-6">
//                 {/* Header */}
//                 <div className="flex items-center gap-4 p-4 bg-[var(--bg-tertiary)] rounded-[var(--radius-lg)]">
//                     <div className="scale-125 origin-center"><DeviceIcon type={currentDevice.type} /></div>
//                     <div>
//                         <div className="text-lg font-semibold">{currentDevice.name}</div>
//                         <div className="text-[13px] text-[var(--text-tertiary)]">{currentDevice.model}</div>
//                     </div>
//                 </div>
//                 {/* Status */}
//                 <div>
//                     <div className="text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-3">Status</div>
//                     <StatusBadge status={currentDevice.status} className="px-3 py-1.5 text-[13px]" />
//                     {currentDevice.reason && <span className="ml-2 text-xs text-[var(--text-tertiary)]">• {currentDevice.reason}</span>}
//                     {currentDevice.revokedOn && <div className="mt-2 text-xs text-[var(--error)]">Revoked on {currentDevice.revokedOn}</div>}
//                 </div>
//                 {/* User */}
//                 <div>
//                     <div className="text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-3">User</div>
//                     <div className="flex items-center gap-2">
//                         <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--purple)] flex items-center justify-center text-xs font-semibold text-white">{currentDevice.initials}</div>
//                         <div>
//                             <div className="text-sm">{currentDevice.user}</div>
//                             <div className="text-xs text-[var(--text-tertiary)] font-mono">{currentDevice.userId}</div>
//                         </div>
//                     </div>
//                 </div>
//                 {/* Grid */}
//                 <div>
//                     <div className="text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-3">Device Information</div>
//                     <div className="grid grid-cols-2 gap-4">
//                         <div><div className="text-[11px] text-[var(--text-tertiary)] mb-1">Registered</div><div className="text-[13px]">{currentDevice.registered}</div></div>
//                         <div><div className="text-[11px] text-[var(--text-tertiary)] mb-1">Last Active</div><div className={`text-[13px] ${currentDevice.lastActiveClass === 'recent' ? 'text-[var(--success)]' : currentDevice.lastActiveClass === 'warning' ? 'text-[var(--warning)]' : 'text-[var(--text-tertiary)]'}`}>{currentDevice.lastActive}</div></div>
//                         <div><div className="text-[11px] text-[var(--text-tertiary)] mb-1">Location</div><div className="text-[13px]">{currentDevice.location}</div></div>
//                         <div><div className="text-[11px] text-[var(--text-tertiary)] mb-1">Last IP</div><div className="text-[12px] font-mono">{currentDevice.ip}</div></div>
//                         <div><div className="text-[11px] text-[var(--text-tertiary)] mb-1">Total Approvals</div><div className="text-[13px]">{currentDevice.approvals}</div></div>
//                         <div><div className="text-[11px] text-[var(--text-tertiary)] mb-1">Success Rate</div><div className={`text-[13px] ${currentDevice.rate !== '-' ? 'text-[var(--success)]' : ''}`}>{currentDevice.rate}</div></div>
//                     </div>
//                 </div>
//                 {/* Credential */}
//                 <div>
//                     <div className="text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-3">FIDO2 Credential</div>
//                     <div className={`bg-[var(--bg-primary)] p-3 rounded-[var(--radius-md)] font-mono text-[11px] text-[var(--text-secondary)] break-all ${currentDevice.status === 'revoked' ? 'line-through opacity-60' : ''}`}>
//                         {currentDevice.credential}8b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e
//                     </div>
//                 </div>
//                 {/* Recent Activity Timeline */}
//                 <div>
//                     <div className="text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-3">Recent Activity</div>
//                     <div className="flex flex-col">
//                         <div className="flex items-start gap-3 py-3 border-b border-[var(--border-secondary)]">
//                             <div className="w-2 h-2 rounded-full bg-[var(--success)] mt-1.5 shrink-0"></div>
//                             <div className="flex-1"><div className="text-[13px]">Payment approved - $245.00</div><div className="text-[11px] text-[var(--text-tertiary)]">2 min ago</div></div>
//                         </div>
//                         <div className="flex items-start gap-3 py-3 border-b border-[var(--border-secondary)]">
//                             <div className="w-2 h-2 rounded-full bg-[var(--success)] mt-1.5 shrink-0"></div>
//                             <div className="flex-1"><div className="text-[13px]">Payment approved - $89.50</div><div className="text-[11px] text-[var(--text-tertiary)]">1 hour ago</div></div>
//                         </div>
//                         <div className="flex items-start gap-3 py-3 border-b border-[var(--border-secondary)] last:border-0">
//                             <div className="w-2 h-2 rounded-full bg-[var(--info)] mt-1.5 shrink-0"></div>
//                             <div className="flex-1"><div className="text-[13px]">Authentication successful</div><div className="text-[11px] text-[var(--text-tertiary)]">3 hours ago</div></div>
//                         </div>
//                         {currentDevice.status === 'revoked' && (
//                             <div className="flex items-start gap-3 py-3 border-b border-[var(--border-secondary)]">
//                                 <div className="w-2 h-2 rounded-full bg-[var(--error)] mt-1.5 shrink-0"></div>
//                                 <div className="flex-1"><div className="text-[13px]">Credential revoked - {currentDevice.reason}</div><div className="text-[11px] text-[var(--text-tertiary)]">{currentDevice.revokedOn}</div></div>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         )}
//       </SlideOver>
//       {/* MODALS */}
//       <Modal 
//         isOpen={!!modalType} 
//         onClose={() => setModalType(null)} 
//         title={modalType === 'revoke' ? 'Revoke Device Credential' : 'Suspend Device'}
//         type={modalType === 'revoke' ? 'danger' : 'default'} // Warning handled by default style + icon override below
//         footer={
//             <>
//                 <button onClick={() => setModalType(null)} className="px-4 py-2 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] text-[var(--text-primary)] text-[13px] font-medium hover:bg-[var(--bg-hover)]">Cancel</button>
//                 <button onClick={handleAction} className={`px-4 py-2 text-white rounded-[var(--radius-md)] text-[13px] font-medium ${modalType === 'revoke' ? 'bg-[var(--error)] hover:bg-[#ef4444]' : 'bg-[var(--warning)] text-black hover:bg-[#f59e0b]'}`}>
//                     {modalType === 'revoke' ? 'Revoke Credential' : 'Suspend Device'}
//                 </button>
//             </>
//         }
//       >
//         <div className={`flex gap-3 p-3.5 rounded-[var(--radius-md)] border mb-4 ${modalType === 'revoke' ? 'bg-[var(--error-bg)] border-[rgba(248,113,113,0.3)]' : 'bg-[var(--warning-bg)] border-[rgba(251,191,36,0.3)]'}`}>
//             <div className={`shrink-0 ${modalType === 'revoke' ? 'text-[var(--error)]' : 'text-[var(--warning)]'}`}>
//                 {modalType === 'revoke' ? (
//                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
//                 ) : (
//                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
//                 )}
//             </div>
//             <div>
//                 <div className={`text-[13px] font-semibold ${modalType === 'revoke' ? 'text-[var(--error)]' : 'text-[var(--warning)]'}`}>
//                     {modalType === 'revoke' ? 'This action is permanent' : 'Temporary suspension'}
//                 </div>
//                 <div className="text-xs text-[var(--text-secondary)]">
//                     {modalType === 'revoke' ? 'Revoking will immediately disable all payment approvals from this device.' : 'You can reactivate this device later.'}
//                 </div>
//             </div>
//         </div>
//         <div className="mb-4">
//             <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1.5">Reason for {modalType === 'revoke' ? 'Revocation' : 'Suspension'}</label>
//             {modalType === 'revoke' ? (
//                 <div className="flex flex-col gap-2">
//                     {['Device Lost', 'Device Stolen', 'Security Concern', 'User Request'].map(r => (
//                         <div key={r} onClick={() => setRevokeReason(r)} className={`flex items-center gap-2.5 p-3 bg-[var(--bg-tertiary)] border rounded-[var(--radius-md)] cursor-pointer transition-all ${revokeReason === r ? 'border-[var(--accent)] bg-[var(--info-bg)]' : 'border-[var(--border-primary)] hover:border-[var(--text-tertiary)]'}`}>
//                             <div className={`w-[18px] h-[18px] border-2 rounded-full flex items-center justify-center ${revokeReason === r ? 'border-[var(--accent)]' : 'border-[var(--border-primary)]'}`}>
//                                 {revokeReason === r && <div className="w-2.5 h-2.5 bg-[var(--accent)] rounded-full"></div>}
//                             </div>
//                             <div>
//                                 <div className="text-[13px] font-medium">{r}</div>
//                                 {r === 'Device Lost' && <div className="text-[11px] text-[var(--text-tertiary)]">User reported device as lost</div>}
//                                 {r === 'Device Stolen' && <div className="text-[11px] text-[var(--text-tertiary)]">User reported device as stolen</div>}
//                                 {r === 'Security Concern' && <div className="text-[11px] text-[var(--text-tertiary)]">Suspicious activity detected</div>}
//                                 {r === 'User Request' && <div className="text-[11px] text-[var(--text-tertiary)]">User requested removal</div>}
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             ) : (
//                 <select className="w-full p-2.5 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] text-[13px] text-[var(--text-primary)] outline-none focus:border-[var(--accent)] transition-colors">
//                     <option>Suspicious activity</option>
//                     <option>Pending review</option>
//                     <option>User request</option>
//                     <option>Other</option>
//                 </select>
//             )}
//         </div>
//         <div>
//             <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1.5">Notes (Optional)</label>
//             <textarea className="w-full p-2.5 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] text-[13px] text-[var(--text-primary)] outline-none min-h-[80px] focus:border-[var(--accent)] transition-colors" placeholder="Additional details..."></textarea>
//         </div>
//       </Modal>
//       {/* TOAST */}
//       {toast && (
//         <div className="fixed bottom-6 right-6 bg-[var(--bg-secondary)] border border-[rgba(74,222,128,0.3)] rounded-[var(--radius-lg)] p-4 flex items-center gap-3 shadow-[0_8px_24px_rgba(0,0,0,0.4)] z-[2000] animate-[shake_0.4s_ease]">
//             <div className="w-8 h-8 rounded-[var(--radius-md)] bg-[var(--success-bg)] text-[var(--success)] flex items-center justify-center">
//                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px]"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
//             </div>
//             <div>
//                 <div className="text-[13px] font-semibold">{toast.title}</div>
//                 <div className="text-xs text-[var(--text-tertiary)]">{toast.msg}</div>
//             </div>
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
;
;
;
function DevicesPage() {
    // --- INTEGRASI REAL DATA ---\
    const { devices, loading, refresh, actions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDevices$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDevices"])();
    // --- States ---
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('all');
    const [typeFilter, setTypeFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [statusFilter, setStatusFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    // Table & Selection
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [selectedDevices, setSelectedDevices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    // Detail & Modals
    const [currentDevice, setCurrentDevice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [modalType, setModalType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [revokeReason, setRevokeReason] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('Device Lost');
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // --- Logic Filtering (Menggunakan data 'devices' dari API) ---
    const filteredData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return devices.filter((d)=>{
            const matchTab = activeTab === 'all' || d.status === activeTab;
            const matchType = typeFilter === '' || d.type === typeFilter;
            const matchStatus = statusFilter === '' || d.status === statusFilter;
            const matchSearch = d.name.toLowerCase().includes(searchQuery.toLowerCase()) || d.user.toLowerCase().includes(searchQuery.toLowerCase()) || d.userId.toLowerCase().includes(searchQuery.toLowerCase());
            return matchTab && matchType && matchStatus && matchSearch;
        });
    }, [
        activeTab,
        typeFilter,
        statusFilter,
        searchQuery,
        devices
    ]);
    // --- Pagination Config ---
    const itemsPerPage = 10;
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const paginatedData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    // --- Handlers ---
    const toggleRow = (id)=>{
        const newSet = new Set(selectedDevices);
        if (newSet.has(id)) newSet.delete(id);
        else newSet.add(id);
        setSelectedDevices(newSet);
    };
    const toggleSelectAll = ()=>{
        if (selectedDevices.size === filteredData.length) setSelectedDevices(new Set());
        else setSelectedDevices(new Set(filteredData.map((d)=>d.id)));
    };
    const openDetail = (device)=>{
        setCurrentDevice(device);
    };
    // [UPDATE] Handler Aksi Tunggal (Suspend/Revoke via API)
    const handleAction = async ()=>{
        if (!currentDevice) return;
        try {
            if (modalType === 'suspend') {
                await actions.suspend(currentDevice.id);
                setToast({
                    title: 'Device Suspended',
                    msg: 'Device has been temporarily suspended.'
                });
            } else if (modalType === 'revoke') {
                await actions.revoke(currentDevice.id);
                setToast({
                    title: 'Credential Revoked',
                    msg: 'Device credential has been permanently revoked.'
                });
            }
        } catch (error) {
            setToast({
                title: 'Action Failed',
                msg: 'Could not update device status.'
            });
        }
        setModalType(null);
        setCurrentDevice(null);
        setTimeout(()=>setToast(null), 4000);
    };
    // [TAMBAH] Handler Reactivate
    const handleReactivate = async (device)=>{
        try {
            await actions.reactivate(device.id);
            setToast({
                title: 'Device Reactivated',
                msg: 'Device is now active.'
            });
            if (currentDevice?.id === device.id) setCurrentDevice(null); // Tutup slideover jika sedang dibuka
            setTimeout(()=>setToast(null), 4000);
        } catch (e) {
            setToast({
                title: 'Error',
                msg: 'Failed to reactivate device.'
            });
        }
    };
    // 1. Helper Warna Status
    const getStatusColorClass = (status)=>{
        const s = status?.toUpperCase();
        if (s === 'SUCCESS' || s === 'APPROVED' || s === 'ACTIVE') return 'bg-[var(--success)]'; // Hijau
        if (s === 'FAILED' || s === 'BLOCKED' || s === 'REVOKED' || s === 'SUSPENDED') return 'bg-[var(--error)]'; // Merah
        return 'bg-[var(--info)]'; // Biru (Info/Pending/Warning)
    };
    // 2. Helper Waktu Relative (e.g., "2 min ago")
    const getRelativeTime = (dateString)=>{
        if (!dateString) return '';
        const date = new Date(dateString);
        const now = new Date();
        const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
        let interval = seconds / 31536000;
        if (interval > 1) return Math.floor(interval) + " years ago";
        interval = seconds / 2592000;
        if (interval > 1) return Math.floor(interval) + " months ago";
        interval = seconds / 86400;
        if (interval > 1) return Math.floor(interval) + " days ago";
        interval = seconds / 3600;
        if (interval > 1) return Math.floor(interval) + " hours ago";
        interval = seconds / 60;
        if (interval > 1) return Math.floor(interval) + " min ago";
        return "Just now";
    };
    // 3. Helper Format Teks (e.g., "LOGIN_SUCCESS" -> "Login Success")
    const formatEventName = (eventString)=>{
        if (!eventString) return 'Unknown Activity';
        return eventString.replace(/_/g, ' ').replace(/\b\w/g, (l)=>l.toUpperCase());
    };
    // [TAMBAH] Handler Bulk Actions (Suspend All / Revoke All)
    const handleBulkAction = async (actionType)=>{
        if (selectedDevices.size === 0) return;
        // Konfirmasi sederhana browser (opsional, bisa dibuat modal juga)
        if (!confirm(`Are you sure you want to ${actionType} ${selectedDevices.size} devices?`)) return;
        try {
            // Jalankan aksi secara paralel
            const promises = Array.from(selectedDevices).map((id)=>actionType === 'suspend' ? actions.suspend(id) : actions.revoke(id));
            await Promise.all(promises);
            setToast({
                title: 'Bulk Action Success',
                msg: `Successfully ${actionType}ed ${selectedDevices.size} devices.`
            });
            setSelectedDevices(new Set()); // Reset seleksi
            refresh(); // Refresh data
        } catch (e) {
            setToast({
                title: 'Bulk Error',
                msg: 'Some devices could not be updated.'
            });
        }
    };
    // --- Table Columns Definition ---
    const columns = [
        {
            header: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: toggleSelectAll,
                className: `w-[18px] h-[18px] border-2 rounded-[var(--radius-sm)] flex items-center justify-center cursor-pointer transition-colors ${selectedDevices.size > 0 && selectedDevices.size === filteredData.length ? 'bg-[var(--accent)] border-[var(--accent)]' : 'border-[var(--border-primary)] hover:border-[var(--accent)]'}`,
                children: selectedDevices.size > 0 && selectedDevices.size === filteredData.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "3",
                    className: "w-3 h-3 text-white",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                        points: "20 6 9 17 4 12"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/devices/page.tsx",
                        lineNumber: 609,
                        columnNumber: 204
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/devices/page.tsx",
                    lineNumber: 609,
                    columnNumber: 98
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(admin)/devices/page.tsx",
                lineNumber: 608,
                columnNumber: 17
            }, this),
            className: 'w-10 pl-3'
        },
        {
            header: 'Device',
            className: 'min-w-[200px]'
        },
        {
            header: 'User',
            className: 'min-w-[160px]'
        },
        {
            header: 'Status',
            className: 'w-[100px]'
        },
        {
            header: 'Last Active',
            className: 'w-[110px]'
        },
        {
            header: 'Approvals',
            className: 'w-[100px]'
        },
        {
            header: 'Credential ID',
            className: 'w-[140px]'
        },
        {
            header: 'Actions',
            className: 'text-right w-[130px]'
        }
    ];
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen items-center justify-center bg-[var(--bg-primary)] text-[var(--text-secondary)]",
        children: "Loading Data..."
    }, void 0, false, {
        fileName: "[project]/app/(admin)/devices/page.tsx",
        lineNumber: 623,
        columnNumber: 25
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-[family-name:var(--font-inter)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 flex flex-col overflow-hidden h-screen",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "px-6 py-3 border-b border-[var(--border-secondary)] flex items-center justify-between bg-[var(--bg-secondary)] shrink-0 h-[60px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[var(--text-tertiary)]",
                                        children: "Users"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/devices/page.tsx",
                                        lineNumber: 633,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[var(--text-muted)]",
                                        children: "/"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/devices/page.tsx",
                                        lineNumber: 634,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[var(--text-primary)] font-medium",
                                        children: "Device Management"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/devices/page.tsx",
                                        lineNumber: 635,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/devices/page.tsx",
                                lineNumber: 632,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                        d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/devices/page.tsx",
                                                        lineNumber: 639,
                                                        columnNumber: 124
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                        points: "7,10 12,15 17,10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/devices/page.tsx",
                                                        lineNumber: 639,
                                                        columnNumber: 178
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "12",
                                                        y1: "15",
                                                        x2: "12",
                                                        y2: "3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/devices/page.tsx",
                                                        lineNumber: 639,
                                                        columnNumber: 216
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/devices/page.tsx",
                                                lineNumber: 639,
                                                columnNumber: 29
                                            }, this),
                                            "Export"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/devices/page.tsx",
                                        lineNumber: 638,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: refresh,
                                        className: "flex items-center gap-1.5 px-3.5 py-2 rounded-[var(--radius-md)] text-[13px] font-medium bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-all",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                className: "w-4 h-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                        points: "23,4 23,10 17,10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/devices/page.tsx",
                                                        lineNumber: 644,
                                                        columnNumber: 124
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M20.49 15a9 9 0 1 1-2.12-9.36L23 10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/devices/page.tsx",
                                                        lineNumber: 644,
                                                        columnNumber: 162
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/devices/page.tsx",
                                                lineNumber: 644,
                                                columnNumber: 29
                                            }, this),
                                            "Refresh"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/devices/page.tsx",
                                        lineNumber: 643,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/devices/page.tsx",
                                lineNumber: 637,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/devices/page.tsx",
                        lineNumber: 631,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-auto p-6 flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-4 gap-4 mb-6 shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$SimpleStatCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SimpleStatCard"], {
                                        label: "Total Devices",
                                        value: devices.length.toString(),
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            className: "w-3.5 h-3.5",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "5",
                                                y: "2",
                                                width: "14",
                                                height: "20",
                                                rx: "2",
                                                ry: "2"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/devices/page.tsx",
                                                lineNumber: 657,
                                                columnNumber: 134
                                            }, void 0)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/devices/page.tsx",
                                            lineNumber: 657,
                                            columnNumber: 35
                                        }, void 0)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/devices/page.tsx",
                                        lineNumber: 655,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$SimpleStatCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SimpleStatCard"], {
                                        label: "Active",
                                        value: devices.filter((d)=>d.status === 'active').length.toString(),
                                        valueColor: "text-[var(--success)]",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            className: "w-3.5 h-3.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/devices/page.tsx",
                                                    lineNumber: 661,
                                                    columnNumber: 134
                                                }, void 0),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                    points: "22 4 12 14.01 9 11.01"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/devices/page.tsx",
                                                    lineNumber: 661,
                                                    columnNumber: 181
                                                }, void 0)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(admin)/devices/page.tsx",
                                            lineNumber: 661,
                                            columnNumber: 35
                                        }, void 0)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/devices/page.tsx",
                                        lineNumber: 659,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$SimpleStatCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SimpleStatCard"], {
                                        label: "Suspended",
                                        value: devices.filter((d)=>d.status === 'suspended').length.toString(),
                                        valueColor: "text-[var(--warning)]",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            className: "w-3.5 h-3.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "12",
                                                    cy: "12",
                                                    r: "10"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/devices/page.tsx",
                                                    lineNumber: 665,
                                                    columnNumber: 134
                                                }, void 0),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "12",
                                                    y1: "8",
                                                    x2: "12",
                                                    y2: "12"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/devices/page.tsx",
                                                    lineNumber: 665,
                                                    columnNumber: 167
                                                }, void 0),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "12",
                                                    y1: "16",
                                                    x2: "12.01",
                                                    y2: "16"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/devices/page.tsx",
                                                    lineNumber: 665,
                                                    columnNumber: 206
                                                }, void 0)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(admin)/devices/page.tsx",
                                            lineNumber: 665,
                                            columnNumber: 35
                                        }, void 0)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/devices/page.tsx",
                                        lineNumber: 663,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$SimpleStatCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SimpleStatCard"], {
                                        label: "Revoked",
                                        value: devices.filter((d)=>d.status === 'revoked').length.toString(),
                                        valueColor: "text-[var(--error)]",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            className: "w-3.5 h-3.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "12",
                                                    cy: "12",
                                                    r: "10"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/devices/page.tsx",
                                                    lineNumber: 669,
                                                    columnNumber: 134
                                                }, void 0),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "15",
                                                    y1: "9",
                                                    x2: "9",
                                                    y2: "15"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/devices/page.tsx",
                                                    lineNumber: 669,
                                                    columnNumber: 167
                                                }, void 0),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "9",
                                                    y1: "9",
                                                    x2: "15",
                                                    y2: "15"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/devices/page.tsx",
                                                    lineNumber: 669,
                                                    columnNumber: 205
                                                }, void 0)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(admin)/devices/page.tsx",
                                            lineNumber: 669,
                                            columnNumber: 35
                                        }, void 0)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/devices/page.tsx",
                                        lineNumber: 667,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/devices/page.tsx",
                                lineNumber: 654,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-4 shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] px-3 py-2 min-w-[300px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                className: "w-4 h-4 text-[var(--text-tertiary)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "11",
                                                        cy: "11",
                                                        r: "8"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/devices/page.tsx",
                                                        lineNumber: 676,
                                                        columnNumber: 152
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "21",
                                                        y1: "21",
                                                        x2: "16.65",
                                                        y2: "16.65"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/devices/page.tsx",
                                                        lineNumber: 676,
                                                        columnNumber: 184
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/devices/page.tsx",
                                                lineNumber: 676,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                placeholder: "Search devices, users, credentials...",
                                                className: "flex-1 bg-transparent border-none outline-none text-[13px] text-[var(--text-primary)] placeholder-[var(--text-tertiary)]",
                                                value: searchQuery,
                                                onChange: (e)=>setSearchQuery(e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/devices/page.tsx",
                                                lineNumber: 677,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/devices/page.tsx",
                                        lineNumber: 675,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] px-3 py-2 text-[13px] text-[var(--text-primary)] outline-none cursor-pointer min-w-[120px]",
                                        value: typeFilter,
                                        onChange: (e)=>setTypeFilter(e.target.value),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "All Types"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/devices/page.tsx",
                                                lineNumber: 685,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "mobile",
                                                children: "Mobile"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/devices/page.tsx",
                                                lineNumber: 685,
                                                columnNumber: 64
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "desktop",
                                                children: "Desktop"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/devices/page.tsx",
                                                lineNumber: 685,
                                                columnNumber: 102
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "hardware",
                                                children: "Hardware Key"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/devices/page.tsx",
                                                lineNumber: 685,
                                                columnNumber: 142
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/devices/page.tsx",
                                        lineNumber: 684,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] px-3 py-2 text-[13px] text-[var(--text-primary)] outline-none cursor-pointer min-w-[120px]",
                                        value: statusFilter,
                                        onChange: (e)=>setStatusFilter(e.target.value),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "All Status"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/devices/page.tsx",
                                                lineNumber: 689,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "active",
                                                children: "Active"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/devices/page.tsx",
                                                lineNumber: 689,
                                                columnNumber: 65
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "suspended",
                                                children: "Suspended"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/devices/page.tsx",
                                                lineNumber: 689,
                                                columnNumber: 103
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "revoked",
                                                children: "Revoked"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/devices/page.tsx",
                                                lineNumber: 689,
                                                columnNumber: 147
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/devices/page.tsx",
                                        lineNumber: 688,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/devices/page.tsx",
                                        lineNumber: 692,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "inline-flex gap-1 bg-[var(--bg-secondary)] p-1 rounded-[var(--radius-md)] border border-[var(--border-secondary)]",
                                        children: [
                                            'all',
                                            'active',
                                            'suspended',
                                            'revoked'
                                        ].map((tab)=>{
                                            // [UPDATE] Hitung data asli
                                            const count = tab === 'all' ? devices.length : devices.filter((d)=>d.status === tab).length;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setActiveTab(tab),
                                                className: `px-3 py-1.5 text-[13px] font-medium rounded-[var(--radius-sm)] flex items-center gap-1.5 capitalize transition-all ${activeTab === tab ? 'bg-[var(--bg-tertiary)] text-[var(--text-primary)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`,
                                                children: [
                                                    tab,
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[11px] px-1.5 bg-[var(--bg-tertiary)] rounded-full font-mono text-[var(--text-tertiary)]",
                                                        children: count
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/devices/page.tsx",
                                                        lineNumber: 706,
                                                        columnNumber: 47
                                                    }, this)
                                                ]
                                            }, tab, true, {
                                                fileName: "[project]/app/(admin)/devices/page.tsx",
                                                lineNumber: 702,
                                                columnNumber: 37
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/devices/page.tsx",
                                        lineNumber: 694,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/devices/page.tsx",
                                lineNumber: 674,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$DataTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DataTable"], {
                                columns: columns,
                                data: paginatedData,
                                currentPage: currentPage,
                                totalPages: totalPages,
                                totalItems: filteredData.length,
                                itemsPerPage: itemsPerPage,
                                onPageChange: setCurrentPage,
                                renderRow: (d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        onClick: ()=>openDetail(d),
                                        className: `group cursor-pointer transition-colors hover:bg-[var(--bg-tertiary)] border-b border-[var(--border-secondary)] last:border-0 ${d.status === 'revoked' ? 'opacity-60' : ''} ${selectedDevices.has(d.id) ? 'bg-[rgba(35,131,226,0.15)]' : ''}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-3 pl-3",
                                                onClick: (e)=>{
                                                    e.stopPropagation();
                                                    toggleRow(d.id);
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `w-[18px] h-[18px] border-2 rounded-[var(--radius-sm)] flex items-center justify-center ${selectedDevices.has(d.id) ? 'bg-[var(--accent)] border-[var(--accent)]' : 'border-[var(--border-primary)] group-hover:border-[var(--accent)]'}`,
                                                    children: selectedDevices.has(d.id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "3",
                                                        className: "w-3 h-3 text-white",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                            points: "20 6 9 17 4 12"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(admin)/devices/page.tsx",
                                                            lineNumber: 732,
                                                            columnNumber: 177
                                                        }, void 0)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/devices/page.tsx",
                                                        lineNumber: 732,
                                                        columnNumber: 71
                                                    }, void 0)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/devices/page.tsx",
                                                    lineNumber: 731,
                                                    columnNumber: 37
                                                }, void 0)
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/devices/page.tsx",
                                                lineNumber: 730,
                                                columnNumber: 33
                                            }, void 0),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$DeviceIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceIcon"], {
                                                            type: d.type
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(admin)/devices/page.tsx",
                                                            lineNumber: 737,
                                                            columnNumber: 41
                                                        }, void 0),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-medium text-[13px]",
                                                                    children: d.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(admin)/devices/page.tsx",
                                                                    lineNumber: 739,
                                                                    columnNumber: 45
                                                                }, void 0),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[11px] text-[var(--text-tertiary)]",
                                                                    children: [
                                                                        d.osName,
                                                                        " ",
                                                                        d.osVersion
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/(admin)/devices/page.tsx",
                                                                    lineNumber: 740,
                                                                    columnNumber: 45
                                                                }, void 0)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/(admin)/devices/page.tsx",
                                                            lineNumber: 738,
                                                            columnNumber: 41
                                                        }, void 0)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(admin)/devices/page.tsx",
                                                    lineNumber: 736,
                                                    columnNumber: 37
                                                }, void 0)
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/devices/page.tsx",
                                                lineNumber: 735,
                                                columnNumber: 33
                                            }, void 0),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-6 h-6 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--purple)] flex items-center justify-center text-[10px] font-semibold text-white",
                                                            children: d.initials
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(admin)/devices/page.tsx",
                                                            lineNumber: 746,
                                                            columnNumber: 41
                                                        }, void 0),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[13px]",
                                                                    children: d.user
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(admin)/devices/page.tsx",
                                                                    lineNumber: 748,
                                                                    columnNumber: 45
                                                                }, void 0),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[11px] text-[var(--text-tertiary)] font-mono",
                                                                    children: d.userId
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(admin)/devices/page.tsx",
                                                                    lineNumber: 749,
                                                                    columnNumber: 45
                                                                }, void 0)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/(admin)/devices/page.tsx",
                                                            lineNumber: 747,
                                                            columnNumber: 41
                                                        }, void 0)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(admin)/devices/page.tsx",
                                                    lineNumber: 745,
                                                    columnNumber: 37
                                                }, void 0)
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/devices/page.tsx",
                                                lineNumber: 744,
                                                columnNumber: 33
                                            }, void 0),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$StatusBadge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StatusBadge"], {
                                                    status: d.status
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/devices/page.tsx",
                                                    lineNumber: 753,
                                                    columnNumber: 53
                                                }, void 0)
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/devices/page.tsx",
                                                lineNumber: 753,
                                                columnNumber: 33
                                            }, void 0),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: `p-3 text-xs ${d.lastActiveClass === 'recent' ? 'text-[var(--success)]' : d.lastActiveClass === 'warning' ? 'text-[var(--warning)]' : 'text-[var(--text-tertiary)]'}`,
                                                children: d.lastActive
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/devices/page.tsx",
                                                lineNumber: 754,
                                                columnNumber: 33
                                            }, void 0),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-3 text-[13px]",
                                                children: [
                                                    d.approvals,
                                                    d.rate !== '-' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[var(--success)] text-[11px] ml-1",
                                                        children: [
                                                            "(",
                                                            d.rate,
                                                            ")"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(admin)/devices/page.tsx",
                                                        lineNumber: 757,
                                                        columnNumber: 56
                                                    }, void 0)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/devices/page.tsx",
                                                lineNumber: 755,
                                                columnNumber: 33
                                            }, void 0),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: `p-3 text-[11px] font-mono text-[var(--text-secondary)] ${d.status === 'revoked' ? 'line-through' : ''}`,
                                                children: [
                                                    d.credential.substring(0, 16),
                                                    "..."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/devices/page.tsx",
                                                lineNumber: 759,
                                                columnNumber: 33
                                            }, void 0),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-3 text-right",
                                                onClick: (e)=>e.stopPropagation(),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-end gap-1",
                                                    children: d.status === 'active' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>{
                                                                    setCurrentDevice(d);
                                                                    setModalType('suspend');
                                                                },
                                                                className: "px-2 py-1 text-xs bg-[var(--warning)] text-black rounded-[var(--radius-md)] font-medium hover:bg-[#f59e0b] transition-colors",
                                                                children: "Suspend"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/devices/page.tsx",
                                                                lineNumber: 766,
                                                                columnNumber: 49
                                                            }, void 0),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>{
                                                                    setCurrentDevice(d);
                                                                    setModalType('revoke');
                                                                },
                                                                className: "px-2 py-1 text-xs bg-[var(--error)] text-white rounded-[var(--radius-md)] font-medium hover:bg-[#ef4444] transition-colors",
                                                                children: "Revoke"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/devices/page.tsx",
                                                                lineNumber: 767,
                                                                columnNumber: 49
                                                            }, void 0)
                                                        ]
                                                    }, void 0, true) : d.status === 'suspended' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleReactivate(d),
                                                                className: "px-2 py-1 text-xs bg-[var(--accent)] text-white rounded-[var(--radius-md)] font-medium hover:bg-[var(--accent-hover)] transition-colors",
                                                                children: "Reactivate"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/devices/page.tsx",
                                                                lineNumber: 772,
                                                                columnNumber: 49
                                                            }, void 0),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>{
                                                                    setCurrentDevice(d);
                                                                    setModalType('revoke');
                                                                },
                                                                className: "px-2 py-1 text-xs bg-[var(--error)] text-white rounded-[var(--radius-md)] font-medium hover:bg-[#ef4444] transition-colors",
                                                                children: "Revoke"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/devices/page.tsx",
                                                                lineNumber: 773,
                                                                columnNumber: 49
                                                            }, void 0)
                                                        ]
                                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>openDetail(d),
                                                        className: "px-2 py-1 text-xs border border-[var(--border-primary)] rounded-[var(--radius-md)] bg-[var(--bg-tertiary)] hover:bg-[var(--bg-hover)] transition-colors",
                                                        children: "History"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/devices/page.tsx",
                                                        lineNumber: 776,
                                                        columnNumber: 45
                                                    }, void 0)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/devices/page.tsx",
                                                    lineNumber: 763,
                                                    columnNumber: 37
                                                }, void 0)
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/devices/page.tsx",
                                                lineNumber: 762,
                                                columnNumber: 33
                                            }, void 0)
                                        ]
                                    }, d.id, true, {
                                        fileName: "[project]/app/(admin)/devices/page.tsx",
                                        lineNumber: 725,
                                        columnNumber: 29
                                    }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/devices/page.tsx",
                                lineNumber: 716,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `fixed bottom-6 left-1/2 -translate-x-1/2 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-lg)] p-3 flex items-center gap-4 shadow-2xl z-50 transition-all duration-300 ${selectedDevices.size > 0 ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[13px] flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "bg-[var(--accent)] text-white px-2 py-0.5 rounded-[10px] text-xs",
                                                children: selectedDevices.size
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/devices/page.tsx",
                                                lineNumber: 787,
                                                columnNumber: 29
                                            }, this),
                                            " selected"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/devices/page.tsx",
                                        lineNumber: 786,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-px h-6 bg-[var(--border-primary)]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/devices/page.tsx",
                                        lineNumber: 789,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSelectedDevices(new Set()),
                                        className: "text-xs px-2 py-1 bg-[var(--bg-tertiary)] rounded-[var(--radius-sm)] border border-[var(--border-primary)] hover:bg-[var(--bg-hover)] transition-colors text-[var(--text-primary)]",
                                        children: "Clear"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/devices/page.tsx",
                                        lineNumber: 790,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleBulkAction('suspend'),
                                        className: "text-xs px-2 py-1 bg-[var(--warning)] text-black font-medium rounded-[var(--radius-sm)] hover:bg-[#f59e0b] transition-colors",
                                        children: "Suspend All"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/devices/page.tsx",
                                        lineNumber: 792,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleBulkAction('revoke'),
                                        className: "text-xs px-2 py-1 bg-[var(--error)] text-white font-medium rounded-[var(--radius-sm)] hover:bg-[#ef4444] transition-colors",
                                        children: "Revoke All"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/devices/page.tsx",
                                        lineNumber: 793,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/devices/page.tsx",
                                lineNumber: 785,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/devices/page.tsx",
                        lineNumber: 651,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/devices/page.tsx",
                lineNumber: 628,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$SlideOver$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SlideOver"], {
                isOpen: !!currentDevice,
                onClose: ()=>setCurrentDevice(null),
                title: "Device Details",
                footer: currentDevice && currentDevice.status !== 'revoked' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2 w-full justify-end",
                    children: currentDevice.status === 'active' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setModalType('suspend'),
                                className: "px-3 py-2 bg-[var(--warning)] text-black text-[13px] font-medium rounded-[var(--radius-md)] hover:bg-[#f59e0b]",
                                children: "Suspend Device"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/devices/page.tsx",
                                lineNumber: 807,
                                columnNumber: 33
                            }, void 0),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setModalType('revoke'),
                                className: "px-3 py-2 bg-[var(--error)] text-white text-[13px] font-medium rounded-[var(--radius-md)] hover:bg-[#ef4444]",
                                children: "Revoke Credential"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/devices/page.tsx",
                                lineNumber: 808,
                                columnNumber: 33
                            }, void 0)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleReactivate(currentDevice),
                                className: "px-3 py-2 bg-[var(--accent)] text-white text-[13px] font-medium rounded-[var(--radius-md)] hover:bg-[#var(--accent-hover)]",
                                children: "Reactivate"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/devices/page.tsx",
                                lineNumber: 813,
                                columnNumber: 33
                            }, void 0),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setModalType('revoke'),
                                className: "px-3 py-2 bg-[var(--error)] text-white text-[13px] font-medium rounded-[var(--radius-md)] hover:bg-[#ef4444]",
                                children: "Revoke Credential"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/devices/page.tsx",
                                lineNumber: 814,
                                columnNumber: 33
                            }, void 0)
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/devices/page.tsx",
                    lineNumber: 804,
                    columnNumber: 21
                }, void 0) : undefined,
                children: currentDevice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4 p-4 bg-[var(--bg-tertiary)] rounded-[var(--radius-lg)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "scale-125 origin-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$DeviceIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceIcon"], {
                                        type: currentDevice.type
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/devices/page.tsx",
                                        lineNumber: 824,
                                        columnNumber: 70
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/devices/page.tsx",
                                    lineNumber: 824,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-lg font-semibold",
                                            children: currentDevice.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/devices/page.tsx",
                                            lineNumber: 826,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[13px] text-[var(--text-tertiary)]",
                                            children: currentDevice.model
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/devices/page.tsx",
                                            lineNumber: 827,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(admin)/devices/page.tsx",
                                    lineNumber: 825,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(admin)/devices/page.tsx",
                            lineNumber: 823,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-3",
                                    children: "Status"
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/devices/page.tsx",
                                    lineNumber: 833,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$StatusBadge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StatusBadge"], {
                                    status: currentDevice.status,
                                    className: "px-3 py-1.5 text-[13px]"
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/devices/page.tsx",
                                    lineNumber: 834,
                                    columnNumber: 29
                                }, this),
                                currentDevice.reason && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "ml-2 text-xs text-[var(--text-tertiary)]",
                                    children: [
                                        "• ",
                                        currentDevice.reason
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(admin)/devices/page.tsx",
                                    lineNumber: 835,
                                    columnNumber: 54
                                }, this),
                                currentDevice.revokedOn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 text-xs text-[var(--error)]",
                                    children: [
                                        "Revoked on ",
                                        currentDevice.revokedOn
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(admin)/devices/page.tsx",
                                    lineNumber: 836,
                                    columnNumber: 57
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(admin)/devices/page.tsx",
                            lineNumber: 832,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-3",
                                    children: "User"
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/devices/page.tsx",
                                    lineNumber: 841,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--purple)] flex items-center justify-center text-xs font-semibold text-white",
                                            children: currentDevice.initials
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/devices/page.tsx",
                                            lineNumber: 843,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm",
                                                    children: currentDevice.user
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/devices/page.tsx",
                                                    lineNumber: 845,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-[var(--text-tertiary)] font-mono",
                                                    children: currentDevice.userId
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/devices/page.tsx",
                                                    lineNumber: 846,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(admin)/devices/page.tsx",
                                            lineNumber: 844,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(admin)/devices/page.tsx",
                                    lineNumber: 842,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(admin)/devices/page.tsx",
                            lineNumber: 840,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-3",
                                    children: "Device Information"
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/devices/page.tsx",
                                    lineNumber: 853,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[11px] text-[var(--text-tertiary)] mb-1",
                                                    children: "Registered"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/devices/page.tsx",
                                                    lineNumber: 855,
                                                    columnNumber: 38
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[13px]",
                                                    children: currentDevice.registered
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/devices/page.tsx",
                                                    lineNumber: 855,
                                                    columnNumber: 116
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(admin)/devices/page.tsx",
                                            lineNumber: 855,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[11px] text-[var(--text-tertiary)] mb-1",
                                                    children: "Last Active"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/devices/page.tsx",
                                                    lineNumber: 856,
                                                    columnNumber: 38
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `text-[13px] ${currentDevice.lastActiveClass === 'recent' ? 'text-[var(--success)]' : currentDevice.lastActiveClass === 'warning' ? 'text-[var(--warning)]' : 'text-[var(--text-tertiary)]'}`,
                                                    children: currentDevice.lastActive
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/devices/page.tsx",
                                                    lineNumber: 856,
                                                    columnNumber: 117
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(admin)/devices/page.tsx",
                                            lineNumber: 856,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[11px] text-[var(--text-tertiary)] mb-1",
                                                    children: "Location"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/devices/page.tsx",
                                                    lineNumber: 857,
                                                    columnNumber: 38
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[13px]",
                                                    children: currentDevice.location
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/devices/page.tsx",
                                                    lineNumber: 857,
                                                    columnNumber: 114
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(admin)/devices/page.tsx",
                                            lineNumber: 857,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[11px] text-[var(--text-tertiary)] mb-1",
                                                    children: "Last IP"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/devices/page.tsx",
                                                    lineNumber: 858,
                                                    columnNumber: 38
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[12px] font-mono",
                                                    children: currentDevice.ip
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/devices/page.tsx",
                                                    lineNumber: 858,
                                                    columnNumber: 113
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(admin)/devices/page.tsx",
                                            lineNumber: 858,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[11px] text-[var(--text-tertiary)] mb-1",
                                                    children: "Total Approvals"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/devices/page.tsx",
                                                    lineNumber: 859,
                                                    columnNumber: 38
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[13px]",
                                                    children: currentDevice.approvals
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/devices/page.tsx",
                                                    lineNumber: 859,
                                                    columnNumber: 121
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(admin)/devices/page.tsx",
                                            lineNumber: 859,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[11px] text-[var(--text-tertiary)] mb-1",
                                                    children: "Success Rate"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/devices/page.tsx",
                                                    lineNumber: 860,
                                                    columnNumber: 38
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `text-[13px] ${currentDevice.rate !== '-' ? 'text-[var(--success)]' : ''}`,
                                                    children: currentDevice.rate
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/devices/page.tsx",
                                                    lineNumber: 860,
                                                    columnNumber: 118
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(admin)/devices/page.tsx",
                                            lineNumber: 860,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(admin)/devices/page.tsx",
                                    lineNumber: 854,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(admin)/devices/page.tsx",
                            lineNumber: 852,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-3",
                                    children: "FIDO2 Credential"
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/devices/page.tsx",
                                    lineNumber: 866,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `bg-[var(--bg-primary)] p-3 rounded-[var(--radius-md)] font-mono text-[11px] text-[var(--text-secondary)] break-all ${currentDevice.status === 'revoked' ? 'line-through opacity-60' : ''}`,
                                    children: currentDevice.credential
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/devices/page.tsx",
                                    lineNumber: 867,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(admin)/devices/page.tsx",
                            lineNumber: 865,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-3",
                                    children: "Recent Activity"
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/devices/page.tsx",
                                    lineNumber: 874,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col",
                                    children: currentDevice.recentActivity && currentDevice.recentActivity.length > 0 ? currentDevice.recentActivity.map((activity, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-3 py-3 border-b border-[var(--border-secondary)] last:border-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `w-2 h-2 rounded-full mt-1.5 shrink-0 ${getStatusColorClass(activity.status)}`
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/devices/page.tsx",
                                                    lineNumber: 884,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[13px] text-[var(--text-primary)]",
                                                            children: [
                                                                formatEventName(activity.event),
                                                                activity.location && activity.location !== 'Unknown Location' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[var(--text-tertiary)] text-[11px] ml-1",
                                                                    children: [
                                                                        "• ",
                                                                        activity.location
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/(admin)/devices/page.tsx",
                                                                    lineNumber: 892,
                                                                    columnNumber: 57
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/(admin)/devices/page.tsx",
                                                            lineNumber: 888,
                                                            columnNumber: 49
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[11px] text-[var(--text-tertiary)] flex gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: getRelativeTime(activity.time)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(admin)/devices/page.tsx",
                                                                    lineNumber: 900,
                                                                    columnNumber: 53
                                                                }, this),
                                                                activity.ip && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: [
                                                                        "• IP: ",
                                                                        activity.ip
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/(admin)/devices/page.tsx",
                                                                    lineNumber: 901,
                                                                    columnNumber: 69
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/(admin)/devices/page.tsx",
                                                            lineNumber: 899,
                                                            columnNumber: 49
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(admin)/devices/page.tsx",
                                                    lineNumber: 886,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/app/(admin)/devices/page.tsx",
                                            lineNumber: 882,
                                            columnNumber: 41
                                        }, this)) : // Fallback jika tidak ada activity
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "py-3 text-[13px] text-[var(--text-tertiary)] italic",
                                        children: "No recent activity recorded."
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/devices/page.tsx",
                                        lineNumber: 908,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/devices/page.tsx",
                                    lineNumber: 878,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(admin)/devices/page.tsx",
                            lineNumber: 873,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(admin)/devices/page.tsx",
                    lineNumber: 821,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(admin)/devices/page.tsx",
                lineNumber: 799,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Modal"], {
                isOpen: !!modalType,
                onClose: ()=>setModalType(null),
                title: modalType === 'revoke' ? 'Revoke Device Credential' : 'Suspend Device',
                type: modalType === 'revoke' ? 'danger' : 'default',
                footer: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setModalType(null),
                            className: "px-4 py-2 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] text-[var(--text-primary)] text-[13px] font-medium hover:bg-[var(--bg-hover)]",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/devices/page.tsx",
                            lineNumber: 928,
                            columnNumber: 25
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleAction,
                            className: `px-4 py-2 text-white rounded-[var(--radius-md)] text-[13px] font-medium ${modalType === 'revoke' ? 'bg-[var(--error)] hover:bg-[#ef4444]' : 'bg-[var(--warning)] text-black hover:bg-[#f59e0b]'}`,
                            children: modalType === 'revoke' ? 'Revoke Credential' : 'Suspend Device'
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/devices/page.tsx",
                            lineNumber: 930,
                            columnNumber: 25
                        }, void 0)
                    ]
                }, void 0, true),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex gap-3 p-3.5 rounded-[var(--radius-md)] border mb-4 ${modalType === 'revoke' ? 'bg-[var(--error-bg)] border-[rgba(248,113,113,0.3)]' : 'bg-[var(--warning-bg)] border-[rgba(251,191,36,0.3)]'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `shrink-0 ${modalType === 'revoke' ? 'text-[var(--error)]' : 'text-[var(--warning)]'}`,
                                children: modalType === 'revoke' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    className: "w-5 h-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/devices/page.tsx",
                                            lineNumber: 939,
                                            columnNumber: 124
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "12",
                                            y1: "9",
                                            x2: "12",
                                            y2: "13"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/devices/page.tsx",
                                            lineNumber: 939,
                                            columnNumber: 225
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "12",
                                            y1: "17",
                                            x2: "12.01",
                                            y2: "17"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/devices/page.tsx",
                                            lineNumber: 939,
                                            columnNumber: 264
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(admin)/devices/page.tsx",
                                    lineNumber: 939,
                                    columnNumber: 29
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    className: "w-5 h-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "12",
                                            cy: "12",
                                            r: "10"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/devices/page.tsx",
                                            lineNumber: 941,
                                            columnNumber: 124
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "12",
                                            y1: "8",
                                            x2: "12",
                                            y2: "12"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/devices/page.tsx",
                                            lineNumber: 941,
                                            columnNumber: 157
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "12",
                                            y1: "16",
                                            x2: "12.01",
                                            y2: "16"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/devices/page.tsx",
                                            lineNumber: 941,
                                            columnNumber: 196
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(admin)/devices/page.tsx",
                                    lineNumber: 941,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/devices/page.tsx",
                                lineNumber: 937,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `text-[13px] font-semibold ${modalType === 'revoke' ? 'text-[var(--error)]' : 'text-[var(--warning)]'}`,
                                        children: modalType === 'revoke' ? 'This action is permanent' : 'Temporary suspension'
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/devices/page.tsx",
                                        lineNumber: 945,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-[var(--text-secondary)]",
                                        children: modalType === 'revoke' ? 'Revoking will immediately disable all payment approvals from this device.' : 'You can reactivate this device later.'
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/devices/page.tsx",
                                        lineNumber: 948,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/devices/page.tsx",
                                lineNumber: 944,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/devices/page.tsx",
                        lineNumber: 936,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-xs font-medium text-[var(--text-secondary)] mb-1.5",
                                children: [
                                    "Reason for ",
                                    modalType === 'revoke' ? 'Revocation' : 'Suspension'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/devices/page.tsx",
                                lineNumber: 955,
                                columnNumber: 21
                            }, this),
                            modalType === 'revoke' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-2",
                                children: [
                                    'Device Lost',
                                    'Device Stolen',
                                    'Security Concern',
                                    'User Request'
                                ].map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>setRevokeReason(r),
                                        className: `flex items-center gap-2.5 p-3 bg-[var(--bg-tertiary)] border rounded-[var(--radius-md)] cursor-pointer transition-all ${revokeReason === r ? 'border-[var(--accent)] bg-[var(--info-bg)]' : 'border-[var(--border-primary)] hover:border-[var(--text-tertiary)]'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-[18px] h-[18px] border-2 rounded-full flex items-center justify-center ${revokeReason === r ? 'border-[var(--accent)]' : 'border-[var(--border-primary)]'}`,
                                                children: revokeReason === r && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-2.5 h-2.5 bg-[var(--accent)] rounded-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/devices/page.tsx",
                                                    lineNumber: 961,
                                                    columnNumber: 64
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/devices/page.tsx",
                                                lineNumber: 960,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[13px] font-medium",
                                                        children: r
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/devices/page.tsx",
                                                        lineNumber: 964,
                                                        columnNumber: 41
                                                    }, this),
                                                    r === 'Device Lost' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[11px] text-[var(--text-tertiary)]",
                                                        children: "User reported device as lost"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/devices/page.tsx",
                                                        lineNumber: 965,
                                                        columnNumber: 65
                                                    }, this),
                                                    r === 'Device Stolen' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[11px] text-[var(--text-tertiary)]",
                                                        children: "User reported device as stolen"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/devices/page.tsx",
                                                        lineNumber: 966,
                                                        columnNumber: 67
                                                    }, this),
                                                    r === 'Security Concern' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[11px] text-[var(--text-tertiary)]",
                                                        children: "Suspicious activity detected"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/devices/page.tsx",
                                                        lineNumber: 967,
                                                        columnNumber: 70
                                                    }, this),
                                                    r === 'User Request' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[11px] text-[var(--text-tertiary)]",
                                                        children: "User requested removal"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/devices/page.tsx",
                                                        lineNumber: 968,
                                                        columnNumber: 66
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/devices/page.tsx",
                                                lineNumber: 963,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, r, true, {
                                        fileName: "[project]/app/(admin)/devices/page.tsx",
                                        lineNumber: 959,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/devices/page.tsx",
                                lineNumber: 957,
                                columnNumber: 25
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "w-full p-2.5 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] text-[13px] text-[var(--text-primary)] outline-none focus:border-[var(--accent)] transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        children: "Suspicious activity"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/devices/page.tsx",
                                        lineNumber: 975,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        children: "Pending review"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/devices/page.tsx",
                                        lineNumber: 976,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        children: "User request"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/devices/page.tsx",
                                        lineNumber: 977,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        children: "Other"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/devices/page.tsx",
                                        lineNumber: 978,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/devices/page.tsx",
                                lineNumber: 974,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/devices/page.tsx",
                        lineNumber: 954,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-xs font-medium text-[var(--text-secondary)] mb-1.5",
                                children: "Notes (Optional)"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/devices/page.tsx",
                                lineNumber: 984,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                className: "w-full p-2.5 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] text-[13px] text-[var(--text-primary)] outline-none min-h-[80px] focus:border-[var(--accent)] transition-colors",
                                placeholder: "Additional details..."
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/devices/page.tsx",
                                lineNumber: 985,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/devices/page.tsx",
                        lineNumber: 983,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/devices/page.tsx",
                lineNumber: 921,
                columnNumber: 13
            }, this),
            toast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-6 right-6 bg-[var(--bg-secondary)] border border-[rgba(74,222,128,0.3)] rounded-[var(--radius-lg)] p-4 flex items-center gap-3 shadow-[0_8px_24px_rgba(0,0,0,0.4)] z-[2000] animate-[shake_0.4s_ease]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-8 h-8 rounded-[var(--radius-md)] bg-[var(--success-bg)] text-[var(--success)] flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            className: "w-[18px] h-[18px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/devices/page.tsx",
                                    lineNumber: 993,
                                    columnNumber: 130
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                    points: "22 4 12 14.01 9 11.01"
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/devices/page.tsx",
                                    lineNumber: 993,
                                    columnNumber: 177
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(admin)/devices/page.tsx",
                            lineNumber: 993,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/devices/page.tsx",
                        lineNumber: 992,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[13px] font-semibold",
                                children: toast.title
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/devices/page.tsx",
                                lineNumber: 996,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-[var(--text-tertiary)]",
                                children: toast.msg
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/devices/page.tsx",
                                lineNumber: 997,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/devices/page.tsx",
                        lineNumber: 995,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/devices/page.tsx",
                lineNumber: 991,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/devices/page.tsx",
        lineNumber: 626,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a4d0cc63._.js.map