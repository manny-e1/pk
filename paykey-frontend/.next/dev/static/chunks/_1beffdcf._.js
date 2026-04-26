(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/api/admin/risk-rules", {
            rules: rulesPayload
        });
        return res.data;
    },
    updateRiskConfig: async (payload)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/api/admin/risk-config", payload);
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
    getTransactions: async (params)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/admin/transactions`, {
            params
        });
        return res.data;
    },
    getTransactionMetrics: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/admin/transactions/metrics`);
        return res.data;
    },
    getTransactionDetail: async (id)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/admin/transactions/${id}`);
        return res.data;
    },
    getAuthLogs: async (eventType, transactionId)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/admin/logs`, {
            params: {
                eventType,
                transactionId
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
                "Content-Type": "multipart/form-data"
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
    },
    getCompanies: async (params)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/admin/companies`, {
            params
        });
        return res.data;
    },
    getCompany: async (companyId)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/admin/companies/${companyId}`);
        return res.data;
    },
    listCompanyUsers: async (companyId)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/admin/companies/${companyId}/users`);
        return res.data;
    },
    getCompanyStats: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/admin/companies/stats`);
        return res.data;
    },
    createCompany: async (data)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`/api/admin/companies`, data);
        return res.data;
    },
    updateCompany: async (companyId, data)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].put(`/api/admin/companies/${companyId}`, data);
        return res.data;
    },
    deleteCompany: async (companyId)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].delete(`/api/admin/companies/${companyId}`);
        return res.data;
    },
    listCompanyWorkflows: async (companyId)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/admin/companies/${companyId}/workflows`);
        return res.data;
    },
    createWorkflow: async (companyId, payload)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`/api/admin/companies/${companyId}/workflows`, payload);
        return res.data;
    },
    getWorkflow: async (workflowId)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/admin/workflows/${workflowId}`);
        return res.data;
    },
    updateWorkflow: async (workflowId, payload)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].put(`/api/admin/workflows/${workflowId}`, payload);
        return res.data;
    },
    deleteWorkflow: async (workflowId)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].delete(`/api/admin/workflows/${workflowId}`);
        return res.data;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useWorkflows.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useWorkflows",
    ()=>useWorkflows
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$adminService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/adminService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function useWorkflows(companyId) {
    _s();
    const { data, isLoading, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'workflows'
        ],
        queryFn: {
            "useWorkflows.useQuery": async ()=>await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$adminService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminService"].listCompanyWorkflows(companyId || '')
        }["useWorkflows.useQuery"]
    });
    return {
        data,
        isLoading,
        refetch
    };
}
_s(useWorkflows, "ZqyWWbDEfEkhPIJavseY165AHxc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ToastCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ToastCard",
    ()=>ToastCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
;
function ToastCard({ data }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex gap-2.5 items-center w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `p-1 ${data.error ? "bg-red-500/10" : "bg-green-500/10"} rounded`,
                children: data.error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                    className: "w-3 h-3 text-red-500"
                }, void 0, false, {
                    fileName: "[project]/components/ToastCard.tsx",
                    lineNumber: 7,
                    columnNumber: 18
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                    className: "w-3 h-3 text-green-500"
                }, void 0, false, {
                    fileName: "[project]/components/ToastCard.tsx",
                    lineNumber: 7,
                    columnNumber: 56
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ToastCard.tsx",
                lineNumber: 6,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-0.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-bold text-sm",
                        children: data.title
                    }, void 0, false, {
                        fileName: "[project]/components/ToastCard.tsx",
                        lineNumber: 10,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-slate-500",
                        children: data.content
                    }, void 0, false, {
                        fileName: "[project]/components/ToastCard.tsx",
                        lineNumber: 11,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ToastCard.tsx",
                lineNumber: 9,
                columnNumber: 3
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ToastCard.tsx",
        lineNumber: 5,
        columnNumber: 10
    }, this);
}
_c = ToastCard;
var _c;
__turbopack_context__.k.register(_c, "ToastCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(admin)/companies/[companyId]/workflows/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BADGE_COLORS",
    ()=>BADGE_COLORS,
    "default",
    ()=>WorkflowsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$adminService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/adminService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useWorkflows$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useWorkflows.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ToastCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ToastCard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const MODE_OPTIONS = [
    {
        value: "SINGLE",
        label: "Single"
    },
    {
        value: "MULTIPLE_ALL",
        label: "Multiple (All)"
    },
    {
        value: "MULTIPLE_ANY",
        label: "Multiple (Any)"
    },
    {
        value: "MULTIPLE_N_OF_M",
        label: "Multiple (N of M)"
    }
];
const BADGE_COLORS = [
    "lb-1",
    "lb-2",
    "lb-3",
    "lb-4",
    "lb-5",
    "lb-6"
];
const AVATAR_COLORS = [
    "bg-blue-500/10 text-blue-500",
    "bg-green-500/10 text-green-500",
    "bg-violet-500/10 text-violet-500",
    "bg-amber-500/10 text-amber-500",
    "bg-cyan-500/10 text-cyan-500",
    "bg-pink-500/10 text-pink-500",
    "bg-red-500/10 text-red-500"
];
function WorkflowsPage() {
    _s();
    const { companyId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const { data: workflows, isLoading, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useWorkflows$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkflows"])(companyId);
    const [selectedWorkflowId, setSelectedWorkflowId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const { data: users } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'company-users',
            companyId
        ],
        queryFn: {
            "WorkflowsPage.useQuery": async ()=>await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$adminService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminService"].listCompanyUsers(companyId)
        }["WorkflowsPage.useQuery"]
    });
    const [workflowName, setWorkflowName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [levels, setLevels] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Modal states
    const [showUserPicker, setShowUserPicker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentLevelIndex, setCurrentLevelIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [userSearchQuery, setUserSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedUsersForLevel, setSelectedUsersForLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showDeleteConfirm, setShowDeleteConfirm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const selectWorkflow = (id)=>{
        const wf = workflows?.find((wf)=>wf.id === id);
        if (!wf) return;
        setSelectedWorkflowId(wf.id);
        setWorkflowName(wf.name);
        setLevels(wf.levels.map((lv)=>({
                mode: lv.mode,
                label: MODE_OPTIONS.find((mode)=>mode.value === lv.mode)?.label || "",
                nOfM: lv.mode === "MULTIPLE_N_OF_M" ? lv.nOfM != null ? lv.nOfM : 1 : "",
                userIds: [
                    ...lv.userIds
                ]
            })));
    };
    const toggleUser = (levelIdx, userId)=>{
        setLevels((prev)=>{
            const next = [
                ...prev
            ];
            const mode = next[levelIdx].mode;
            if (mode === "SINGLE") {
                next[levelIdx] = {
                    ...next[levelIdx],
                    userIds: next[levelIdx].userIds.includes(userId) ? [] : [
                        userId
                    ]
                };
                return next;
            }
            const u = new Set(next[levelIdx].userIds);
            if (u.has(userId)) u.delete(userId);
            else u.add(userId);
            next[levelIdx] = {
                ...next[levelIdx],
                userIds: [
                    ...u
                ]
            };
            return next;
        });
    };
    const addLevel = ()=>{
        setLevels((prev)=>[
                ...prev,
                {
                    mode: "SINGLE",
                    label: "SINGLE",
                    nOfM: 1,
                    userIds: []
                }
            ]);
    };
    const removeLevel = (i)=>{
        setLevels((prev)=>prev.filter((_, j)=>j !== i));
    };
    const setMode = (i, mode, label)=>{
        setLevels((prev)=>{
            const next = [
                ...prev
            ];
            next[i] = {
                ...next[i],
                label,
                mode,
                nOfM: mode === "MULTIPLE_N_OF_M" ? 1 : ""
            };
            return next;
        });
    };
    const openUserPicker = (levelIndex)=>{
        setCurrentLevelIndex(levelIndex);
        setSelectedUsersForLevel([
            ...levels[levelIndex].userIds
        ]);
        setShowUserPicker(true);
    };
    const closeUserPicker = ()=>{
        setShowUserPicker(false);
        setCurrentLevelIndex(null);
        setSelectedUsersForLevel([]);
    };
    const toggleUserSelection = (userId)=>{
        setSelectedUsersForLevel((prev)=>prev.includes(userId) ? prev.filter((id)=>id !== userId) : [
                ...prev,
                userId
            ]);
    };
    const confirmUserSelection = ()=>{
        if (currentLevelIndex !== null) {
            setLevels((prev)=>{
                const next = [
                    ...prev
                ];
                next[currentLevelIndex] = {
                    ...next[currentLevelIndex],
                    userIds: selectedUsersForLevel
                };
                return next;
            });
        }
        closeUserPicker();
    };
    const getAvatarColor = (index)=>AVATAR_COLORS[index % AVATAR_COLORS.length];
    const save = async ()=>{
        if (!workflowName.trim()) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ToastCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastCard"], {
                data: {
                    title: "Validation Error",
                    content: "Workflow name is required",
                    error: true
                }
            });
            return;
        }
        for (const lv of levels){
            if (!lv.userIds.length) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ToastCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastCard"], {
                    data: {
                        title: "Validation Error",
                        content: "Each level needs at least one assignee",
                        error: true
                    }
                });
                return;
            }
            if (lv.mode === "MULTIPLE_N_OF_M") {
                const n = typeof lv.nOfM === "number" ? lv.nOfM : Number.parseInt(String(lv.nOfM), 10);
                if (Number.isNaN(n) || n < 1 || n > lv.userIds.length) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ToastCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastCard"], {
                        data: {
                            title: "Validation Error",
                            content: "N of M must be between 1 and number of assignees",
                            error: true
                        }
                    });
                    return;
                }
            }
        }
        setSaving(true);
        try {
            const payload = {
                name: workflowName.trim(),
                levels: levels.map((lv, idx)=>({
                        mode: lv.mode,
                        levelOrder: idx,
                        ...lv.mode === "MULTIPLE_N_OF_M" ? {
                            nOfM: typeof lv.nOfM === "number" ? lv.nOfM : Number.parseInt(String(lv.nOfM), 10)
                        } : {},
                        userIds: lv.userIds
                    }))
            };
            if (selectedWorkflowId === "new") {
                await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$adminService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminService"].createWorkflow(companyId, payload);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ToastCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastCard"], {
                    data: {
                        title: "Workflow Created",
                        content: `${workflowName} has been created successfully`
                    }
                });
                refetch();
            } else {
                await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$adminService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminService"].updateWorkflow(selectedWorkflowId, payload);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ToastCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastCard"], {
                    data: {
                        title: "Workflow Saved",
                        content: `${workflowName} has been updated successfully`
                    }
                });
                refetch();
            }
            setWorkflowName("");
            setLevels([]);
            setSelectedWorkflowId('');
        } catch (e) {
            const msg = e instanceof Error ? e.message : "Save failed";
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ToastCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastCard"], {
                data: {
                    title: "Workflow Error",
                    content: msg,
                    error: true
                }
            });
        } finally{
            setSaving(false);
        }
    };
    const handleDeleteConfirmed = async ()=>{
        if (selectedWorkflowId === "new") {
            setShowDeleteConfirm(false);
            return;
        }
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$adminService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminService"].deleteWorkflow(selectedWorkflowId);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ToastCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastCard"], {
                data: {
                    title: "Workflow Deleted",
                    content: `${workflowName} has been deleted successfully`
                }
            });
            setSelectedWorkflowId("new");
            setWorkflowName("");
            setLevels([]);
            refetch();
        } catch (e) {
            const msg = e instanceof Error ? e.message : "Delete failed";
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ToastCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastCard"], {
                data: {
                    title: "Workflow Error",
                    content: msg,
                    error: true
                }
            });
        } finally{
            setShowDeleteConfirm(false);
        }
    };
    const deleteWf = ()=>{
        if (selectedWorkflowId === "new") return;
        setShowDeleteConfirm(true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen bg-[#0a0c10] text-[#eef0f6]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex w-full flex-col overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "p-8 border-b border-[#252a36] bg-[#12151c] flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-xl font-bold",
                                        children: "Multi-Level Approval"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                        lineNumber: 332,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[13px] text-[#8a90a0]",
                                        children: "Configure approval levels and assignees. Authentication methods are defined by auth policies."
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                        lineNumber: 333,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                lineNumber: 331,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            setSelectedWorkflowId("new");
                                            setWorkflowName("");
                                            setLevels([]);
                                        },
                                        className: "px-4 py-2 bg-[#181c26] border border-[#252a36] rounded text-[13px] text-[#8a90a0] hover:bg-[#1e2330] hover:text-[#eef0f6] transition-all flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-4 h-4",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                                                        children: "Reset"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                        lineNumber: 355,
                                                        columnNumber: 9
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                        lineNumber: 356,
                                                        columnNumber: 9
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                lineNumber: 348,
                                                columnNumber: 8
                                            }, this),
                                            "Reset"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                        lineNumber: 339,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: save,
                                        disabled: saving,
                                        className: "px-4 py-2 bg-[#10b981] text-white rounded text-[13px] font-semibold hover:opacity-90 transition-all flex items-center gap-2 disabled:opacity-50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-4 h-4",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                                                        children: "Save"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                        lineNumber: 377,
                                                        columnNumber: 9
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        d: "M5 13l4 4L19 7"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                        lineNumber: 378,
                                                        columnNumber: 9
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                lineNumber: 370,
                                                columnNumber: 8
                                            }, this),
                                            saving ? "Saving..." : "Save Workflow"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                        lineNumber: 364,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                lineNumber: 338,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                        lineNumber: 330,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 p-8 overflow-y-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-[13px] font-semibold text-[#8a90a0]",
                                        children: "Workflow Name"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                        lineNumber: 391,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "mt-2 w-full max-w-md bg-[#181c26] border border-[#252a36] rounded-lg px-4 py-3 text-sm outline-none focus:border-[#3b82f6] transition-colors",
                                        value: workflowName,
                                        onChange: (e)=>setWorkflowName(e.target.value),
                                        placeholder: "Enter workflow name..."
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                        lineNumber: 394,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                lineNumber: 390,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WorkflowCard, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WorkflowCardHeader, {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WorkflowTitle, {
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "currentColor",
                                                    strokeWidth: "1.8",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                                                            children: "Workflow"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                            lineNumber: 412,
                                                            columnNumber: 11
                                                        }, void 0),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            d: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                            lineNumber: 413,
                                                            columnNumber: 11
                                                        }, void 0)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                    lineNumber: 406,
                                                    columnNumber: 10
                                                }, void 0),
                                                title: "Select Workflow"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                lineNumber: 404,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "flex items-center text-nowrap gap-2 text-[var(--t3)] font-[.78rem]          border justify-center w-64 py-2 border-dashed hover:border-[var(--ac)] border-[var(--bd)] rounded hover:text-[var(--ac)]",
                                                onClick: ()=>{
                                                    setSelectedWorkflowId("new");
                                                    setWorkflowName("");
                                                    setLevels([
                                                        {
                                                            mode: "SINGLE",
                                                            label: "SINGLE",
                                                            nOfM: 1,
                                                            userIds: []
                                                        }
                                                    ]);
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                        className: "w-3 h-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                        lineNumber: 431,
                                                        columnNumber: 19
                                                    }, this),
                                                    "New Workflow"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                lineNumber: 424,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                        lineNumber: 403,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WorkflowCardBody, {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3",
                                            children: workflows?.map((wf, index)=>{
                                                const isSelected = wf.id === selectedWorkflowId;
                                                const bg = isSelected ? "rgba(59,130,246,.04)" : "var(--bgi)";
                                                const border = isSelected ? "border-[var(--ac)]" : "border-[var(--bd)]";
                                                const hover = isSelected ? "" : "hover:bg-[#1e2330] hover:border-[#3a4255]";
                                                const boxShadow = isSelected ? "0 0 0 3px var(--acg)" : "none";
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>selectWorkflow(wf.id),
                                                    className: `flex items-center gap-3 p-4 bg-[${bg}]
                      border ${border} rounded-lg ${hover} transition-all text-left group shadow-${boxShadow}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold ${getAvatarColor(index)}`,
                                                            children: wf.name.slice(0, 2).toUpperCase()
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                            lineNumber: 457,
                                                            columnNumber: 13
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1 min-w-0",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-semibold text-sm truncate",
                                                                    children: wf.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                                    lineNumber: 465,
                                                                    columnNumber: 14
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[11px] text-[#555b6e]",
                                                                    children: [
                                                                        wf.levels.length,
                                                                        " ",
                                                                        wf.levels.length > 1 ? "levels" : "level"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                                    lineNumber: 468,
                                                                    columnNumber: 14
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                            lineNumber: 464,
                                                            columnNumber: 13
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-all",
                                                            style: {
                                                                border: `2px solid ${isSelected ? "var(--ac)" : "var(--bd)"}`,
                                                                background: isSelected ? "var(--ac)" : "transparent"
                                                            },
                                                            children: isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                className: "w-3 h-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                                lineNumber: 481,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                            lineNumber: 472,
                                                            columnNumber: 13
                                                        }, this)
                                                    ]
                                                }, wf.id, true, {
                                                    fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                    lineNumber: 450,
                                                    columnNumber: 12
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                            lineNumber: 436,
                                            columnNumber: 9
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                        lineNumber: 435,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                lineNumber: 402,
                                columnNumber: 6
                            }, this),
                            levels.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WorkflowCard, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WorkflowCardHeader, {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WorkflowTitle, {
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "currentColor",
                                                    strokeWidth: "1.8",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                                                            children: "Level"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                            lineNumber: 501,
                                                            columnNumber: 12
                                                        }, void 0),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                            lineNumber: 502,
                                                            columnNumber: 12
                                                        }, void 0)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                    lineNumber: 495,
                                                    columnNumber: 11
                                                }, void 0),
                                                title: "Approval Levels"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                lineNumber: 493,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-[.78rem] text-[var(--t3)] text-nowrap",
                                                children: [
                                                    levels.length,
                                                    " ",
                                                    levels.length > 1 ? "levels" : "level"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                lineNumber: 511,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                className: "ml-5 hover:text-red-500 w-4 h-4 cursor-pointer",
                                                onClick: deleteWf
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                lineNumber: 512,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                        lineNumber: 492,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WorkflowCardBody, {
                                        children: [
                                            levels.map((level, idx)=>{
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LevelCard, {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LevelCardHeader, {
                                                            level: idx,
                                                            mode: level.label,
                                                            onClick: removeLevel
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                            lineNumber: 519,
                                                            columnNumber: 12
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LevelCardBody, {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex gap-2 flex-wrap mb-[14px]",
                                                                    children: MODE_OPTIONS.map((mode)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            onClick: ()=>setMode(idx, mode.value, mode.label),
                                                                            className: `px-4 py-2 rounded-full text-[12px] font-semibold border transition-all ${level.mode === mode.value ? "border-[#3b82f6] bg-blue-500/10 text-[#3b82f6]" : "border-[#252a36] text-[#8a90a0] hover:border-[#3a4255] hover:text-[#eef0f6]"}`,
                                                                            children: mode.label
                                                                        }, mode.value, false, {
                                                                            fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                                            lineNumber: 527,
                                                                            columnNumber: 15
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                                    lineNumber: 525,
                                                                    columnNumber: 13
                                                                }, this),
                                                                level.mode === "MULTIPLE_N_OF_M" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mb-3",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "inline-flex items-center gap-[6px] ml-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[var(--t2)] font-[.78rem]",
                                                                                children: "Require"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                                                lineNumber: 546,
                                                                                columnNumber: 16
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "number",
                                                                                min: 1,
                                                                                max: level.userIds.length || 1,
                                                                                value: level.nOfM === "" ? "" : level.nOfM,
                                                                                onChange: (e)=>{
                                                                                    const v = e.target.value === "" ? "" : Number.parseInt(e.target.value, 10);
                                                                                    setLevels((prev)=>{
                                                                                        const next = [
                                                                                            ...prev
                                                                                        ];
                                                                                        next[idx] = {
                                                                                            ...next[idx],
                                                                                            nOfM: v === "" ? "" : v
                                                                                        };
                                                                                        return next;
                                                                                    });
                                                                                },
                                                                                className: "w-10 bg-[#12151c] border border-[#252a36] rounded px-2 py-1 text-center font-mono text-sm text-blue-500 outline-none focus:border-[#3b82f6]"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                                                lineNumber: 549,
                                                                                columnNumber: 16
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[var(--t3)] text-[.74rem]",
                                                                                children: [
                                                                                    "of ",
                                                                                    level.userIds.length,
                                                                                    " approvers"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                                                lineNumber: 570,
                                                                                columnNumber: 16
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                                        lineNumber: 545,
                                                                        columnNumber: 15
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                                    lineNumber: 544,
                                                                    columnNumber: 14
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-wrap min-h-10 gap-2 mb-3",
                                                                    children: [
                                                                        level.userIds.map((userId)=>{
                                                                            const user = users?.find((u)=>u.id === userId);
                                                                            if (!user) return null;
                                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center gap-2 pr-[10px] py-[6px] pl-[6px] bg-[var(--bgc)] border border-[var(--bd)] rounded-lg cursor-pointer transition-all duration-200 max-w-[200px]",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: `w-[26px] h-[26px] rounded-md flex items-center justify-center text-[11px] font-bold ${getAvatarColor(users?.findIndex((u)=>u.id === userId))}`,
                                                                                        children: user.fullName.split(" ").map((n)=>n[0]).join("").toUpperCase()
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                                                        lineNumber: 587,
                                                                                        columnNumber: 17
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex-1 min-w-0",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "text-[.78rem] font-semibold truncate overflow-hidden whitespace-nowrap",
                                                                                            children: user.fullName
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                                                            lineNumber: 599,
                                                                                            columnNumber: 18
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                                                        lineNumber: 598,
                                                                                        columnNumber: 17
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        type: "button",
                                                                                        onClick: ()=>toggleUser(idx, userId),
                                                                                        className: "w-[18px] h-[18px] rounded text-[var(--t3)] hover:bg-red-500/10 hover:text-red-500 transition-all flex items-center justify-center",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                                            className: "w-3 h-3"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                                                            lineNumber: 608,
                                                                                            columnNumber: 18
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                                                        lineNumber: 603,
                                                                                        columnNumber: 17
                                                                                    }, this)
                                                                                ]
                                                                            }, userId, true, {
                                                                                fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                                                lineNumber: 582,
                                                                                columnNumber: 16
                                                                            }, this);
                                                                        }),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex gap-2",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                onClick: ()=>openUserPicker(idx),
                                                                                className: "flex items-center gap-2 px-[14px] py-2 border  border-dashed border-[var(--bd)] rounded text-[var(--t3)]  hover:border-[var(--ac)] hover:text-[var(--ac)] hover:bg-[var(--acg)] transition-all duration-200",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                                        className: "w-3 h-3"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                                                        lineNumber: 621,
                                                                                        columnNumber: 16
                                                                                    }, this),
                                                                                    "Add User"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                                                lineNumber: 614,
                                                                                columnNumber: 15
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                                            lineNumber: 613,
                                                                            columnNumber: 14
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                                    lineNumber: 577,
                                                                    columnNumber: 13
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                            lineNumber: 524,
                                                            columnNumber: 12
                                                        }, this)
                                                    ]
                                                }, `${level.label}${idx}`, true, {
                                                    fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                    lineNumber: 518,
                                                    columnNumber: 11
                                                }, this);
                                            }),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: addLevel,
                                                    className: "flex items-center justify-center gap-2 p-[14px] border border-[var(--bd)] border-dashed bg-none text-[var(--t3)] font-semibold cursor-pointer transition-all duration-[.25s] w-full",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                            lineNumber: 638,
                                                            columnNumber: 11
                                                        }, this),
                                                        "Add Approval Level"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                    lineNumber: 632,
                                                    columnNumber: 10
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                lineNumber: 631,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                        lineNumber: 515,
                                        columnNumber: 8
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                lineNumber: 491,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                        lineNumber: 389,
                        columnNumber: 5
                    }, this),
                    showUserPicker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full max-w-md bg-[#181c26] border border-[#252a36] rounded-xl shadow-2xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-5 border-b border-[#252a36] flex justify-between items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold",
                                            children: "Select Users"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                            lineNumber: 652,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: closeUserPicker,
                                            className: "w-7 h-7 rounded bg-[#181c26] text-[#8a90a0] hover:text-[#eef0f6] transition-colors flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                lineNumber: 658,
                                                columnNumber: 10
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                            lineNumber: 653,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                    lineNumber: 651,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-5 max-h-[400px] overflow-y-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                    className: "w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--t3)]"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                    lineNumber: 663,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "Search users...",
                                                    value: userSearchQuery,
                                                    onChange: (e)=>setUserSearchQuery(e.target.value),
                                                    className: "w-full pl-10 pr-4 py-2 bg-[#181c26] border border-[#252a36] rounded-lg text-sm outline-none focus:border-[#3b82f6]"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                    lineNumber: 664,
                                                    columnNumber: 10
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                            lineNumber: 662,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-1",
                                            children: users?.filter((user)=>user.fullName.toLowerCase().includes(userSearchQuery.toLowerCase()) || user.email.toLowerCase().includes(userSearchQuery.toLowerCase())).map((user)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    onClick: ()=>toggleUserSelection(user.id),
                                                    className: `flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${selectedUsersForLevel.includes(user.id) ? "bg-blue-500/10" : "hover:bg-[#1e2330]"}`,
                                                    onKeyUp: ()=>toggleUserSelection(user.id),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `w-8 h-8 rounded-md flex items-center justify-center text-xs font-bold ${getAvatarColor(users?.findIndex((u)=>u.id === user.id))}`,
                                                            children: user.fullName.split(" ").map((n)=>n[0]).join("").toUpperCase()
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                            lineNumber: 694,
                                                            columnNumber: 13
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1 min-w-0",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm font-semibold truncate",
                                                                    children: user.fullName
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                                    lineNumber: 706,
                                                                    columnNumber: 14
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[11px] text-[#555b6e] truncate",
                                                                    children: user.email
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                                    lineNumber: 709,
                                                                    columnNumber: 14
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                            lineNumber: 705,
                                                            columnNumber: 13
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${selectedUsersForLevel.includes(user.id) ? "bg-[#3b82f6] border-[#3b82f6]" : "border-[#252a36]"}`,
                                                            children: selectedUsersForLevel.includes(user.id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                className: "w-3 h-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                                lineNumber: 721,
                                                                columnNumber: 15
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                            lineNumber: 713,
                                                            columnNumber: 13
                                                        }, this)
                                                    ]
                                                }, user.id, true, {
                                                    fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                    lineNumber: 684,
                                                    columnNumber: 12
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                            lineNumber: 672,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                    lineNumber: 661,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-5 border-t border-[#252a36] flex justify-end gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: closeUserPicker,
                                            className: "px-4 py-2 bg-[#181c26] border border-[#252a36] rounded text-[13px] text-[#8a90a0] hover:text-[#eef0f6] transition-colors",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                            lineNumber: 729,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: confirmUserSelection,
                                            className: "px-4 py-2 bg-[#3b82f6] text-white rounded text-[13px] font-semibold hover:bg-[#2563eb] transition-colors",
                                            children: "Add Selected"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                            lineNumber: 736,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                    lineNumber: 728,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                            lineNumber: 650,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                        lineNumber: 649,
                        columnNumber: 6
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                lineNumber: 329,
                columnNumber: 4
            }, this),
            showDeleteConfirm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "absolute inset-0 bg-transparent border-0 p-0 cursor-default",
                        "aria-label": "Close dialog",
                        onClick: ()=>setShowDeleteConfirm(false)
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                        lineNumber: 750,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 w-full max-w-[400px] overflow-hidden flex flex-col rounded-2xl border border-[#252a36] bg-[#181c26] shadow-2xl",
                        role: "alertdialog",
                        "aria-modal": "true",
                        "aria-labelledby": "delete-company-title",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-6 py-5 border-b border-[#252a36] flex items-center justify-between shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        id: "delete-company-title",
                                        className: "text-base font-semibold text-[#eef0f6]",
                                        children: "Confirm Deletion"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                        lineNumber: 763,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setShowDeleteConfirm(false),
                                        className: "w-8 h-8 bg-[#181c26] border-none rounded-md text-[#8a90a0] flex items-center justify-center hover:bg-[#1e2330] hover:text-[#eef0f6] transition-colors",
                                        "aria-label": "Close",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "18",
                                            height: "18",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            "aria-hidden": true,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                                                    children: "Close"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                    lineNumber: 784,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "18",
                                                    y1: "6",
                                                    x2: "6",
                                                    y2: "18"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                    lineNumber: 785,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "6",
                                                    y1: "6",
                                                    x2: "18",
                                                    y2: "18"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                    lineNumber: 786,
                                                    columnNumber: 10
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                            lineNumber: 775,
                                            columnNumber: 9
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                        lineNumber: 769,
                                        columnNumber: 8
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                lineNumber: 762,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-6 py-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-14 h-14 mx-auto mb-1 rounded-full bg-[var(--error-muted)] flex items-center justify-center text-[var(--error)]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "28",
                                            height: "28",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            "aria-hidden": true,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                                                    children: "Warning"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                    lineNumber: 801,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                    lineNumber: 802,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "12",
                                                    y1: "9",
                                                    x2: "12",
                                                    y2: "13"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                    lineNumber: 803,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "12",
                                                    y1: "17",
                                                    x2: "12.01",
                                                    y2: "17"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                    lineNumber: 804,
                                                    columnNumber: 10
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                            lineNumber: 792,
                                            columnNumber: 9
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                        lineNumber: 791,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-base font-semibold text-center text-[#eef0f6] mb-2",
                                        children: "Delete Workflow?"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                        lineNumber: 807,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[13px] text-[#8a90a0] text-center leading-relaxed",
                                        children: "This action cannot be undone."
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                        lineNumber: 810,
                                        columnNumber: 8
                                    }, this),
                                    selectedWorkflowId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 bg-[#12151c] rounded-lg px-3 py-3 text-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold text-[#eef0f6]",
                                            children: workflows.find((x)=>x.id === selectedWorkflowId)?.name ?? "—"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                            lineNumber: 815,
                                            columnNumber: 10
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                        lineNumber: 814,
                                        columnNumber: 9
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                lineNumber: 790,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-6 py-4 border-t border-[#252a36] flex justify-center gap-2.5 shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setShowDeleteConfirm(false),
                                        className: "inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-[13px] font-medium bg-[#12151c] text-[#eef0f6] border border-[#252a36] hover:bg-[#1e2330] hover:text-[#eef0f6] transition-colors",
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                        lineNumber: 822,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleDeleteConfirmed,
                                        className: "inline-flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] font-medium bg-[var(--error-muted)] text-[var(--error)] border border-transparent hover:bg-[var(--error)] hover:text-white transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "16",
                                                height: "16",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                "aria-hidden": true,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                                                        children: "Delete"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                        lineNumber: 843,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                        points: "3 6 5 6 21 6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                        lineNumber: 844,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                        lineNumber: 845,
                                                        columnNumber: 10
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                                lineNumber: 834,
                                                columnNumber: 9
                                            }, this),
                                            "Delete Workflow"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                        lineNumber: 829,
                                        columnNumber: 8
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                                lineNumber: 821,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                        lineNumber: 756,
                        columnNumber: 6
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                lineNumber: 749,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastContainer"], {
                position: "bottom-right",
                theme: "dark",
                hideProgressBar: true
            }, void 0, false, {
                fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                lineNumber: 853,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
        lineNumber: 327,
        columnNumber: 3
    }, this);
}
_s(WorkflowsPage, "QXln4ig96Le4Ayk1sPF/kRmp/7Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useWorkflows$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkflows"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
_c = WorkflowsPage;
function WorkflowCard({ children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `bg-[var(--bgc)] border border-[var(--bd)] rounded-2xl overflow-hidden mb-4 ${className ?? ''}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
        lineNumber: 863,
        columnNumber: 3
    }, this);
}
_c1 = WorkflowCard;
function WorkflowCardHeader({ children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `py-4 px-5 border-b border-[var(--bd)] flex items-center justify-between ${className ?? ''}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
        lineNumber: 876,
        columnNumber: 3
    }, this);
}
_c2 = WorkflowCardHeader;
function WorkflowCardBody({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-5",
        children: children
    }, void 0, false, {
        fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
        lineNumber: 885,
        columnNumber: 9
    }, this);
}
_c3 = WorkflowCardBody;
function WorkflowTitle({ icon, title }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex w-full items-center justify-between",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2.5 text-[0.92rem] font-[600]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-8 h-8 rounded-lg p-2 flex items-center justify-center text-[var(--ac)] bg-[var(--acg)]",
                    children: icon
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                    lineNumber: 895,
                    columnNumber: 9
                }, this),
                title
            ]
        }, void 0, true, {
            fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
            lineNumber: 894,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
        lineNumber: 893,
        columnNumber: 3
    }, this);
}
_c4 = WorkflowTitle;
function LevelCard({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WorkflowCard, {
        className: "transition-all duration-[.25s] animation-level-in",
        children: children
    }, void 0, false, {
        fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
        lineNumber: 906,
        columnNumber: 3
    }, this);
}
_c5 = LevelCard;
function LevelCardHeader({ level, mode, onClick }) {
    const badgeClass = BADGE_COLORS[level % BADGE_COLORS.length];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WorkflowCardHeader, {
        className: "gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `font-['JetBrains_Mono', _monospace] text-[.72rem] py-[3px] px-2 flex-shrink-0 tracking-[0.5pk] ${badgeClass}`,
                children: [
                    "LEVEL ",
                    level + 1
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                lineNumber: 920,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 text-[.85rem] font-semibold",
                children: mode
            }, void 0, false, {
                fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                lineNumber: 925,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: "w-7 h-7 rounded-md flex items-center justify-center cursor-pointer transition-all duration-150 text-[var(--t3)] bg-none border-none",
                    onClick: ()=>onClick(level),
                    title: "Delete",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                        lineNumber: 933,
                        columnNumber: 6
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                    lineNumber: 927,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
                lineNumber: 926,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
        lineNumber: 919,
        columnNumber: 3
    }, this);
}
_c6 = LevelCardHeader;
function LevelCardBody({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WorkflowCardBody, {
        children: children
    }, void 0, false, {
        fileName: "[project]/app/(admin)/companies/[companyId]/workflows/page.tsx",
        lineNumber: 940,
        columnNumber: 9
    }, this);
}
_c7 = LevelCardBody;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "WorkflowsPage");
__turbopack_context__.k.register(_c1, "WorkflowCard");
__turbopack_context__.k.register(_c2, "WorkflowCardHeader");
__turbopack_context__.k.register(_c3, "WorkflowCardBody");
__turbopack_context__.k.register(_c4, "WorkflowTitle");
__turbopack_context__.k.register(_c5, "LevelCard");
__turbopack_context__.k.register(_c6, "LevelCardHeader");
__turbopack_context__.k.register(_c7, "LevelCardBody");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_1beffdcf._.js.map