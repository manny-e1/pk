module.exports = [
"[project]/services/adminService.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "adminService",
    ()=>adminService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/apiClient.ts [app-ssr] (ecmascript)");
;
const adminService = {
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
    getRiskRules: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/admin/risk-rules`);
        return res.data;
    },
    getRiskConfig: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/admin/risk-config`);
        return res.data;
    },
    saveRiskConfigBatch: async (rulesPayload)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post("/api/admin/risk-rules", {
            rules: rulesPayload
        });
        return res.data;
    },
    updateRiskConfig: async (payload)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post("/api/admin/risk-config", payload);
        return res.data;
    },
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
    getTransactions: async (params)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/admin/transactions`, {
            params
        });
        return res.data;
    },
    getTransactionMetrics: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/admin/transactions/metrics`);
        return res.data;
    },
    getTransactionDetail: async (id)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/admin/transactions/${id}`);
        return res.data;
    },
    getAuthLogs: async (eventType, transactionId)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/admin/logs`, {
            params: {
                eventType,
                transactionId
            }
        });
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
    },
    getTotpInventory: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/admin/totp-inventory`);
        return res.data;
    },
    importTotpBatch: async (formData)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`/api/admin/totp-inventory/import`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        return res.data;
    },
    updateTotpStatus: async (serial, status)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].put(`/api/admin/totp-inventory/${serial}/status`, {
            status
        });
        return res.data;
    },
    assignTotpToken: async (serial, userId, verificationCode)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`/api/admin/totp-inventory/${serial}/assign`, {
            userId,
            verificationCode
        });
        return res.data;
    },
    unassignTotpToken: async (serial)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`/api/admin/totp-inventory/${serial}/unassign`);
        return res.data;
    },
    searchUsers: async (query)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/users`, {
            params: {
                search: query
            }
        });
        return res.data;
    },
    getCompanies: async (params)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/admin/companies`, {
            params
        });
        return res.data;
    },
    getCompany: async (companyId)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/admin/companies/${companyId}`);
        return res.data;
    },
    listCompanyUsers: async (companyId)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/admin/companies/${companyId}/users`);
        return res.data;
    },
    getCompanyStats: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/admin/companies/stats`);
        return res.data;
    },
    createCompany: async (data)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`/api/admin/companies`, data);
        return res.data;
    },
    updateCompany: async (companyId, data)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].put(`/api/admin/companies/${companyId}`, data);
        return res.data;
    },
    deleteCompany: async (companyId)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].delete(`/api/admin/companies/${companyId}`);
        return res.data;
    },
    listCompanyWorkflows: async (companyId)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/admin/companies/${companyId}/workflows`);
        return res.data;
    },
    createWorkflow: async (companyId, payload)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`/api/admin/companies/${companyId}/workflows`, payload);
        return res.data;
    },
    getWorkflow: async (workflowId)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/admin/workflows/${workflowId}`);
        return res.data;
    },
    updateWorkflow: async (workflowId, payload)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].put(`/api/admin/workflows/${workflowId}`, payload);
        return res.data;
    },
    deleteWorkflow: async (workflowId)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].delete(`/api/admin/workflows/${workflowId}`);
        return res.data;
    }
};
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
"[project]/app/(admin)/utils/riskContext.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildRiskContextTags",
    ()=>buildRiskContextTags
]);
function normalizeRiskLevel(level) {
    const l = String(level || "low").toLowerCase();
    if (l === "critical" || l === "high" || l === "medium" || l === "low") return l;
    return "low";
}
function hasAny(texts, needles) {
    return needles.some((needle)=>texts.some((t)=>t.includes(needle)));
}
function buildRiskContextTags(input) {
    const riskLevel = normalizeRiskLevel(input.riskLevel);
    const amountClass = riskLevel === "high" || riskLevel === "critical" ? "bg-red-500/15 text-red-400" : riskLevel === "medium" ? "bg-amber-500/15 text-amber-400" : "bg-emerald-500/15 text-emerald-400";
    const texts = [
        ...(input.factors || []).flatMap((f)=>[
                f.label || "",
                f.rule || ""
            ]),
        ...input.extraLabels || []
    ].map((v)=>String(v).toLowerCase()).filter(Boolean);
    const tags = [
        {
            label: input.amountLabel || "",
            cls: amountClass
        }
    ];
    if (input.stepUpRequired || hasAny(texts, [
        "step up",
        "step-up",
        "challenge"
    ])) {
        tags.push({
            label: "step up",
            cls: "bg-blue-500/15 text-blue-400"
        });
    }
    if (hasAny(texts, [
        "beneficiary new",
        "new beneficiary"
    ])) {
        tags.push({
            label: "new",
            cls: "bg-amber-500/15 text-amber-400"
        });
    } else if (hasAny(texts, [
        "beneficiary known",
        "trusted beneficiary"
    ])) {
        tags.push({
            label: "existing",
            cls: "bg-emerald-500/15 text-emerald-400"
        });
    }
    if (hasAny(texts, [
        "new device"
    ])) {
        tags.push({
            label: "new_device",
            cls: "bg-amber-500/15 text-amber-400"
        });
    } else if (hasAny(texts, [
        "known device",
        "existing device"
    ])) {
        tags.push({
            label: "existing_device",
            cls: "bg-emerald-500/15 text-emerald-400"
        });
    }
    if (hasAny(texts, [
        "geo anomaly",
        "geolocation anomaly"
    ])) {
        tags.push({
            label: "geo_anomaly",
            cls: "bg-red-500/15 text-red-400"
        });
    }
    if (hasAny(texts, [
        "vpn",
        "proxy"
    ])) {
        tags.push({
            label: "VPN/Proxy",
            cls: "bg-red-500/15 text-red-400"
        });
    }
    if (hasAny(texts, [
        "dormant"
    ])) {
        tags.push({
            label: "dormant_reactivated",
            cls: "bg-red-500/15 text-red-400"
        });
    }
    return tags;
}
}),
"[project]/app/(admin)/auth-logs/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AuthLogsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$adminService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/adminService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$top$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelTop$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/panel-top.js [app-ssr] (ecmascript) <export default as PanelTop>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$StatusBadge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/StatusBadge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$utils$2f$riskContext$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/utils/riskContext.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const StatsCard = ({ label, value, change, trend, icon })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-[var(--radius-lg)] p-4 flex flex-col justify-between h-[110px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[12px] text-[var(--text-tertiary)] font-medium",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                        lineNumber: 71,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[var(--text-tertiary)] opacity-70",
                        children: icon
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                        lineNumber: 72,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                lineNumber: 70,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[24px] font-bold text-[var(--text-primary)] mb-1",
                        children: value
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                        lineNumber: 75,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `text-[11px] font-medium ${trend === 'positive' ? 'text-[var(--success)]' : trend === 'negative' ? 'text-[var(--error)]' : 'text-[var(--text-secondary)]'}`,
                        children: change
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                        lineNumber: 76,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                lineNumber: 74,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
        lineNumber: 69,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const DetailRow = ({ label, value, className = "", valueClass = "" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex justify-between py-2.5 border-b border-[var(--border-secondary)] last:border-0 ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[13px] text-[var(--text-tertiary)]",
                children: label
            }, void 0, false, {
                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                lineNumber: 85,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            label.toLowerCase().includes('status') && value !== '—' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$StatusBadge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StatusBadge"], {
                status: value
            }, void 0, false, {
                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `text-[13px] text-[var(--text-primary)] text-right max-w-[250px] break-words ${valueClass}`,
                children: value
            }, void 0, false, {
                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
        lineNumber: 84,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const SlideOver = ({ isOpen, onClose, title, children, footer })=>{
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex justify-end",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/50 ransition-opacity",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-[400px] bg-[var(--bg-secondary)] border-l border-[var(--border-secondary)] h-full shadow-2xl flex flex-col animate-[slideInRight_0.3s]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 border-b border-[var(--border-secondary)] flex justify-between items-center shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-[16px] font-semibold text-[var(--text-primary)]",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "text-[var(--text-tertiary)] hover:text-[var(--text-primary)]",
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
                                            fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                            lineNumber: 102,
                                            columnNumber: 111
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "6",
                                            y1: "6",
                                            x2: "18",
                                            y2: "18"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                            lineNumber: 102,
                                            columnNumber: 149
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto p-6 custom-scrollbar",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    footer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 border-t border-[var(--border-secondary)] bg-[var(--bg-tertiary)] shrink-0",
                        children: footer
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                        lineNumber: 106,
                        columnNumber: 20
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const DataTable = ({ columns, data, renderRow, currentPage, totalPages, itemsPerPage, onPageChange, totalItems })=>{
    const start = totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
    const end = Math.min(currentPage * itemsPerPage, totalItems);
    const getPageNumbers = ()=>{
        const pages = [];
        const maxVisiblePages = 5;
        if (totalPages <= maxVisiblePages) {
            for(let i = 1; i <= totalPages; i++)pages.push(i);
        } else {
            pages.push(1);
            let startPage = Math.max(2, currentPage - 1);
            let endPage = Math.min(totalPages - 1, currentPage + 1);
            if (currentPage <= 3) {
                startPage = 2;
                endPage = 4;
            } else if (currentPage >= totalPages - 2) {
                startPage = totalPages - 3;
                endPage = totalPages - 1;
            }
            if (startPage > 2) pages.push('...');
            for(let i = startPage; i <= endPage; i++)pages.push(i);
            if (endPage < totalPages - 1) pages.push('...');
            pages.push(totalPages);
        }
        return pages;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-[12px] flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between px-5 py-4 border-b border-[var(--border-secondary)] shrink-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[15px] font-semibold text-[var(--text-primary)]",
                                children: "Authentication Events"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[12px] text-[var(--text-tertiary)] ml-2",
                                children: [
                                    "Showing ",
                                    start,
                                    "-",
                                    end,
                                    " of ",
                                    totalItems.toLocaleString(),
                                    " events"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                lineNumber: 146,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                        lineNumber: 144,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                    lineNumber: 143,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-auto flex-1 no-scrollbar",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "w-full text-left border-collapse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                className: "sticky top-0 bg-[var(--bg-tertiary)] z-10 shadow-sm",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: columns.map((col, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: `p-3 text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider border-b border-[var(--border-secondary)] ${col.className || ''}`,
                                            children: col.header
                                        }, i, false, {
                                            fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                            lineNumber: 153,
                                            columnNumber: 57
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                    lineNumber: 153,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                lineNumber: 152,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: data.length > 0 ? data.map((item)=>renderRow(item)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        colSpan: columns.length,
                                        className: "p-10 text-center text-[var(--text-tertiary)] text-sm",
                                        children: "No events found matching your filters."
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                        lineNumber: 160,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                    lineNumber: 159,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                lineNumber: 155,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                        lineNumber: 151,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                    lineNumber: 150,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 border-t border-[var(--border-secondary)] flex justify-between items-center shrink-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[13px] text-[var(--text-tertiary)]",
                            children: [
                                "Showing ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    className: "text-[var(--text-primary)]",
                                    children: [
                                        start,
                                        "-",
                                        end
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                    lineNumber: 171,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                " of ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    className: "text-[var(--text-primary)]",
                                    children: totalItems.toLocaleString()
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                    lineNumber: 171,
                                    columnNumber: 94
                                }, ("TURBOPACK compile-time value", void 0)),
                                " events"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                            lineNumber: 170,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    disabled: currentPage === 1,
                                    onClick: ()=>onPageChange(currentPage - 1),
                                    className: "w-8 h-8 flex items-center justify-center rounded-[6px] bg-[var(--bg-tertiary)] border border-[var(--border-primary)] text-[var(--text-secondary)] disabled:opacity-50 hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] transition-all disabled:cursor-not-allowed",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "14",
                                        height: "14",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                            points: "15 18 9 12 15 6"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                            lineNumber: 176,
                                            columnNumber: 113
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                        lineNumber: 176,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                    lineNumber: 175,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                getPageNumbers().map((pageNum, idx)=>pageNum === '...' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-8 h-8 flex items-center justify-center text-[var(--text-tertiary)]",
                                        children: "..."
                                    }, `dots-${idx}`, false, {
                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                        lineNumber: 181,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onPageChange(Number(pageNum)),
                                        className: `w-8 h-8 flex items-center justify-center rounded-[6px] text-[13px] font-medium transition-all ${currentPage === pageNum ? 'bg-[var(--accent)] border border-[var(--accent)] text-white shadow-sm' : 'bg-[var(--bg-tertiary)] border border-[var(--border-primary)] text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]'}`,
                                        children: pageNum
                                    }, pageNum, false, {
                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                        lineNumber: 183,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    disabled: currentPage === totalPages || totalPages === 0,
                                    onClick: ()=>onPageChange(currentPage + 1),
                                    className: "w-8 h-8 flex items-center justify-center rounded-[6px] bg-[var(--bg-tertiary)] border border-[var(--border-primary)] text-[var(--text-secondary)] disabled:opacity-50 hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] transition-all disabled:cursor-not-allowed",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "14",
                                        height: "14",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                            points: "9 18 15 12 9 6"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                            lineNumber: 197,
                                            columnNumber: 113
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                        lineNumber: 197,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                    lineNumber: 196,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                            lineNumber: 174,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                    lineNumber: 169,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/(admin)/auth-logs/page.tsx",
            lineNumber: 141,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
        lineNumber: 140,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const formatType = (t)=>t ? t.replace(/_/g, ' ').replace(/\b\w/g, (l)=>l.toUpperCase()) : 'Unknown';
const AUTH_METHOD_LABELS = {
    FIDO2: 'Fido2 Passkey',
    FIDO2_PASSKEY: 'Fido2 Passkey',
    FIDO2_SECURITY_KEY: 'Fido2 Security Key',
    EMAIL_OTP: 'Email OTP',
    TOTP_SOFT: 'TOTP Authenticator',
    TOTP_AUTHENTICATOR: 'TOTP Authenticator',
    HARDWARE_TOTP: 'Hardware OTP',
    TOTP_HARDWARE: 'Hardware OTP',
    HARDWARE_OTP: 'Hardware OTP',
    HOTP: 'Hardware OTP',
    PIN: 'PIN',
    PUSH: 'Push',
    PUSH_APPROVAL: 'Push',
    BIOMETRICS: 'Biometrics',
    BIO_LEGACY: 'Biometrics',
    TRANSACTION: 'Transaction'
};
const inferAuthMethodFromEvent = (eventType)=>{
    const normalized = String(eventType || '').toLowerCase();
    if (normalized.includes('security key')) return 'FIDO2_SECURITY_KEY';
    if (normalized.includes('passkey')) return 'FIDO2_PASSKEY';
    if (normalized.includes('email')) return 'EMAIL_OTP';
    if (normalized.includes('totp')) return 'TOTP_AUTHENTICATOR';
    if (normalized.includes('hotp') || normalized.includes('hardware otp')) return 'HARDWARE_OTP';
    if (normalized.includes('push')) return 'PUSH';
    if (normalized.includes('biometric')) return 'BIOMETRICS';
    if (normalized.includes('pin')) return 'PIN';
    if (normalized.includes('payment')) return 'TRANSACTION';
    return '';
};
const resolveAuthType = (log, richData)=>{
    const candidates = [
        richData?.selectedMethod,
        log?.authMethod,
        richData?.authMethod,
        Array.isArray(richData?.requestedMethods) ? richData.requestedMethods[0] : '',
        inferAuthMethodFromEvent(log?.eventType)
    ];
    const resolved = candidates.find((candidate)=>{
        const normalized = String(candidate || '').trim().toUpperCase();
        return normalized && normalized !== 'UNKNOWN';
    });
    if (!resolved) return '—';
    const normalized = String(resolved).trim().toUpperCase();
    return AUTH_METHOD_LABELS[normalized] || formatType(resolved);
};
const getRiskLevelFromScore = (score)=>{
    if (score >= 60) return 'HIGH';
    if (score >= 30) return 'MEDIUM';
    return 'LOW';
};
const getAmountClass = (level, score)=>{
    if (level === 'HIGH' || level === 'CRITICAL' || score >= 70) return 'high';
    if (level === 'MEDIUM' || score >= 30) return 'medium';
    return 'low';
};
const getRiskTagStyle = (tag)=>{
    const cls = tag.class?.toLowerCase() || 'default';
    if (cls === 'high' || cls === 'critical') return 'bg-red-500/15 text-red-500';
    if (cls === 'medium' || cls === 'warning') return 'bg-yellow-500/15 text-yellow-600';
    if (cls === 'low' || cls === 'info') return 'bg-blue-500/15 text-blue-500';
    if (cls === 'success') return 'bg-emerald-500/15 text-emerald-500';
    return 'bg-gray-500/15 text-gray-500';
};
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
    } catch  {
        return code;
    }
};
const getTimelineDotColor = (label, fallbackResult)=>{
    const normalized = label.toLowerCase();
    console.log({
        normalized,
        fallbackResult
    });
    if (normalized.includes('failed') || normalized.includes('rejected') || normalized.includes('denied') || normalized.includes('blocked')) return 'bg-[var(--error)]';
    if (fallbackResult === 'SUCCESS' || fallbackResult === 'APPROVED') return 'bg-[var(--success)]';
    if (normalized.includes('successful') || normalized.includes('approved') || normalized.includes('verified')) return 'bg-[var(--success)]';
    if (normalized.includes('prompt') || normalized.includes('initiated') || normalized.includes('request') || normalized.includes('send') || normalized.includes('pending') || normalized.includes('step-up')) return 'bg-[var(--warning)]';
    if (fallbackResult === 'BLOCKED' || fallbackResult === 'FAILED' || fallbackResult === 'REJECTED') return 'bg-[var(--error)]';
    if (fallbackResult.includes('CHALLENGE') || fallbackResult === 'TIMEOUT') return 'bg-[var(--warning)]';
    if (fallbackResult === 'CANCELLED') return 'bg-[var(--text-tertiary)]';
    return 'bg-[var(--info)]';
};
const generateTimeline = (e)=>{
    const timeline = [];
    const t = new Date(e.timestamp);
    if (Array.isArray(e.risk.timeline) && e.risk.timeline.length > 0) {
        const totalSteps = e.risk.timeline.length;
        return e.risk.timeline.map((step, index)=>({
                label: step,
                time: new Date(t.getTime() - (totalSteps - 1 - index) * 1000).toLocaleTimeString('en-US', {
                    hour12: false
                }),
                dotColor: getTimelineDotColor(step, e.result)
            }));
    }
    const dotColor = getTimelineDotColor(`${formatType(e.type)} ${e.resultLabel}`, e.result);
    timeline.push({
        label: `${formatType(e.type)} ${e.resultLabel}`,
        time: t.toLocaleTimeString('en-US', {
            hour12: false
        }),
        dotColor: dotColor
    });
    if (e.risk.tags && e.risk.tags.length > 0) {
        e.risk.tags.forEach((tag, i)=>{
            timeline.push({
                label: `${tag.label.replace(/_/g, ' ')}`,
                time: new Date(t.getTime() - (3000 + i * 500)).toLocaleTimeString('en-US', {
                    hour12: false
                }),
                dotColor: `${getRiskTagStyle(tag).includes('red') ? 'bg-[var(--error)]' : getRiskTagStyle(tag).includes('yellow') ? 'bg-[var(--warning)]' : getRiskTagStyle(tag).includes('blue') ? 'bg-[var(--info)]' : getRiskTagStyle(tag).includes('emerald') ? 'bg-[var(--success)]' : 'bg-[var(--bg-tertiary)]'}`
            });
        });
    }
    timeline.push({
        label: 'Request initiated',
        time: new Date(t.getTime() - 5000).toLocaleTimeString('en-US', {
            hour12: false
        }),
        dotColor: 'bg-[var(--bg-tertiary)]'
    });
    return timeline;
};
function AuthLogsPage() {
    const [logs, setLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [paymentId, setPaymentId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(searchParams.get("transactionId") || "");
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        total: {
            value: 0,
            text: '—',
            trend: 'neutral'
        },
        success: {
            value: '0%',
            text: '—',
            trend: 'neutral'
        },
        failed: {
            value: 0,
            text: '—',
            trend: 'neutral'
        },
        risk: {
            value: 0,
            text: '—',
            trend: 'neutral'
        },
        passkey: {
            value: 0,
            text: '—',
            trend: 'neutral'
        }
    });
    const [eventType, setEventType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [resultFilter, setResultFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [startDate, setStartDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [endDate, setEndDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [activeChips, setActiveChips] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [selectedEvent, setSelectedEvent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchLogs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        setLoading(true);
        try {
            const rawLogs = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$adminService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminService"].getAuthLogs(eventType || undefined);
            const fltrdLogs = rawLogs.filter((log)=>!(log.user?.role === 'ADMIN' && (log.eventType.toLowerCase().includes("passkey") || log.eventType.toLowerCase().includes("registration") || log.eventType.toLowerCase().includes("login"))));
            const mappedData = fltrdLogs.map((log)=>{
                let richData = {};
                let tagsArray = [];
                if (typeof log.riskTags === 'string') {
                    try {
                        richData = JSON.parse(log.riskTags);
                    } catch  {
                        richData = {};
                    }
                } else if (typeof log.riskTags === 'object' && log.riskTags !== null) {
                    richData = log.riskTags;
                }
                if (Array.isArray(richData.tags)) {
                    tagsArray = richData.tags;
                } else if (Array.isArray(richData)) {
                    tagsArray = richData.map((t)=>typeof t === 'string' ? {
                            label: t,
                            class: 'default'
                        } : t);
                }
                const telemetry = richData.telemetry || {};
                const network = richData.network || {};
                const deviceInfo = richData.device_info || {};
                const riskScore = Number(richData.riskScore ?? log.riskScore ?? 0);
                const riskLevelRaw = String(richData.riskLevel || '').toUpperCase();
                const riskLevel = riskLevelRaw && riskLevelRaw !== 'UNKNOWN' ? riskLevelRaw : getRiskLevelFromScore(riskScore);
                const deviceOs = deviceInfo.os || [
                    telemetry.os_name,
                    telemetry.os_version
                ].filter(Boolean).join(' ') || log.userAgent || 'Unknown';
                const resolvedAuthType = resolveAuthType(log, richData);
                const statusRaw = log.status?.toUpperCase() || 'INFO';
                let statusLabel = 'Success';
                if (statusRaw === 'BLOCKED' || statusRaw === 'FAILED' || statusRaw === 'REJECTED') statusLabel = 'Blocked';
                else if (statusRaw.includes('CHALLENGE')) statusLabel = 'Challenged';
                else if (statusRaw === 'TIMEOUT') statusLabel = 'Timeout';
                else if (statusRaw === 'CANCELLED') statusLabel = 'Cancelled';
                return {
                    id: log.id.toString(),
                    type: log.eventType || 'unknown',
                    timestamp: log.createdAt,
                    result: statusRaw,
                    resultLabel: statusLabel,
                    email: log.email,
                    userName: log.userName,
                    userId: log.userId || log.userName || 'Unknown',
                    paymentId: richData.transactionNo || richData.transactionId || richData.paymentId || null,
                    isNewDevice: tagsArray.some((t)=>t.label.toLowerCase().includes('new device')),
                    authType: resolvedAuthType,
                    firstSeen: log.user?.keys?.[0]?.registeredTimestamp ? new Date(log.user.keys[0].registeredTimestamp).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                    }) : '—',
                    device: {
                        type: deviceInfo.type || (log.userAgent?.toLowerCase().includes('mobile') ? 'Mobile' : 'Desktop'),
                        os: deviceOs,
                        model: (()=>{
                            if (telemetry.device_model && !telemetry.device_model.toLowerCase().includes('unknown') || log.device && !log.device.toLowerCase().includes('unknown')) {
                                return telemetry.device_model || log.device;
                            }
                            if (deviceOs.toLowerCase().includes('mac')) {
                                return 'Macintosh';
                            }
                            if (deviceOs.toLowerCase().includes('windows')) {
                                return 'Windows PC';
                            }
                            if (deviceOs.toLowerCase().includes('ubuntu')) {
                                return 'Ubuntu Desktop';
                            }
                            return log.device || 'Generic Device';
                        })(),
                        browser: deviceInfo.browser || log.userAgent?.split('/')[0] || 'Unknown Browser'
                    },
                    location: {
                        country: network.country || log.countryCode || 'Unknown',
                        city: richData.location?.split(',')[0] || log.location?.split(',')[0] || 'Unknown',
                        ip: (()=>{
                            const raw = (network.ipv4 || network.ip || log.ipAddress || '0.0.0.0').split(",")[0];
                            const parts = raw.split('.');
                            if (parts.length === 4) {
                                return `${parts[0]}.***.***.${parts[3]}`;
                            }
                            return raw;
                        })(),
                        flag: (network.country || log.countryCode) === 'MY' ? '🇲🇾' : (network.country || log.countryCode) === 'ID' ? '🇮🇩' : (network.country || log.countryCode) === 'UK' || (network.country || log.countryCode) === 'GB' ? '🇬🇧' : '🌐',
                        asn: network.asn || 'AS-UNKNOWN',
                        isp: network.isp || 'Unknown ISP',
                        lat: telemetry.gps_latitude,
                        long: telemetry.gps_longitude
                    },
                    deviceStatus: log.user?.keys.length > 0 ? log.user.keys[0].status : '—',
                    risk: {
                        score: riskScore,
                        level: riskLevel,
                        amount: richData.amount ? `${richData.currency || '$'}${richData.amount}` : undefined,
                        amountClass: getAmountClass(riskLevel, riskScore),
                        network: telemetry.is_vpn_active ? 'vpn' : richData.isVpn ? 'vpn' : undefined,
                        tags: tagsArray,
                        reasons: richData.riskFactors || [],
                        beneficiary: richData.beneficiaryAccount,
                        timeline: Array.isArray(richData.timeline) ? richData.timeline.filter((s)=>typeof s === 'string' && s.trim() !== '') : [],
                        stepUpRequired: richData.stepUpRequired
                    }
                };
            });
            setLogs(mappedData);
            calculateStats(mappedData);
            console.log('Fetched Logs:', mappedData);
        } catch (err) {
            console.error('Failed to load logs', err);
        } finally{
            setLoading(false);
        }
    }, [
        eventType
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchLogs();
    }, [
        eventType
    ]);
    const calculateStats = (data)=>{
        const now = new Date();
        const startToday = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
        const startYesterday = startToday - 86400000;
        const todayLogs = data.filter((l)=>new Date(l.timestamp).getTime() >= startToday);
        const yesterdayLogs = data.filter((l)=>{
            const t = new Date(l.timestamp).getTime();
            return t >= startYesterday && t < startToday;
        });
        const getChange = (curr, prev)=>prev === 0 ? curr > 0 ? 100 : 0 : (curr - prev) / prev * 100;
        const formatChangeText = (pct)=>`${pct > 0 ? '↑' : pct < 0 ? '↓' : ''} ${pct > 0 ? '+' : ''}${pct.toFixed(1)}% from yesterday`;
        const totalToday = todayLogs.length;
        const totalYest = yesterdayLogs.length;
        const totalPct = getChange(totalToday, totalYest);
        const successToday = todayLogs.filter((l)=>l.result === 'SUCCESS' || l.result === 'APPROVED').length;
        const rateToday = totalToday ? successToday / totalToday * 100 : 0;
        const rateDiff = rateToday - (totalYest ? yesterdayLogs.filter((l)=>l.result === 'SUCCESS').length / totalYest * 100 : 0);
        const failToday = todayLogs.filter((l)=>l.result === 'BLOCKED' || l.result === 'FAILED' || l.result === 'REJECTED').length;
        const failPct = getChange(failToday, yesterdayLogs.filter((l)=>l.result === 'BLOCKED' || l.result === 'FAILED').length);
        const riskToday = todayLogs.filter((l)=>l.risk.amountClass === 'high' || l.risk.tags?.length > 0).length;
        const riskPct = getChange(riskToday, yesterdayLogs.filter((l)=>l.risk.amountClass === 'high' || l.risk.tags?.length > 0).length);
        const pkToday = todayLogs.filter((l)=>l.type.toLowerCase().includes('passkey')).length;
        const pkPct = getChange(pkToday, yesterdayLogs.filter((l)=>l.type.toLowerCase().includes('passkey')).length);
        setStats({
            total: {
                value: totalToday,
                text: formatChangeText(totalPct),
                trend: totalPct >= 0 ? 'positive' : 'negative'
            },
            success: {
                value: `${rateToday.toFixed(1)}%`,
                text: `${rateDiff >= 0 ? '↑ +' : '↓ '}${rateDiff.toFixed(1)}% from yesterday`,
                trend: rateDiff >= 0 ? 'positive' : 'negative'
            },
            failed: {
                value: failToday,
                text: formatChangeText(failPct),
                trend: failPct <= 0 ? 'positive' : 'negative'
            },
            risk: {
                value: riskToday,
                text: formatChangeText(riskPct),
                trend: riskPct <= 0 ? 'positive' : 'negative'
            },
            passkey: {
                value: pkToday,
                text: formatChangeText(pkPct),
                trend: 'positive'
            }
        });
    };
    const toggleChip = (chip)=>{
        const newSet = new Set(activeChips);
        if (newSet.has(chip)) newSet.delete(chip);
        else newSet.add(chip);
        setActiveChips(newSet);
        setCurrentPage(1);
    };
    const handleClearFilters = ()=>{
        setEventType('');
        setResultFilter('');
        setStartDate('');
        setEndDate('');
        setActiveChips(new Set());
        setCurrentPage(1);
    };
    const filteredData = logs.filter((e)=>{
        const matchType = paymentId === '' || e.paymentId?.toLowerCase().includes(paymentId.toLowerCase());
        const matchResult = resultFilter === '' || e.resultLabel.toLowerCase() === resultFilter.toLowerCase();
        let matchDate = true;
        if (startDate && endDate) {
            const d = new Date(e.timestamp);
            const start = new Date(startDate);
            const end = new Date(endDate);
            end.setHours(23, 59, 59);
            matchDate = d >= start && d <= end;
        }
        let matchChips = true;
        if (activeChips.has('new-device') && !e.isNewDevice) matchChips = false;
        if (activeChips.has('vpn') && e.risk.network !== 'vpn') matchChips = false;
        if (activeChips.has('high-risk') && e.risk.amountClass !== 'high' && !e.risk.tags?.some((t)=>t.class === 'high' || t.label.toLowerCase().includes('high'))) matchChips = false;
        return matchResult && matchDate && matchChips && matchType;
    });
    const itemsPerPage = 10;
    const totalPages = Math.ceil(filteredData.length / itemsPerPage) || 1;
    const paginatedData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-[family-name:var(--font-inter)]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "flex-1 flex flex-col h-screen overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "px-6 py-3 border-b border-[var(--border-secondary)] bg-[var(--bg-secondary)] flex justify-between items-center shrink-0 h-[60px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[var(--text-tertiary)]",
                                        children: "Security"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                        lineNumber: 603,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[var(--text-muted)]",
                                        children: "/"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                        lineNumber: 603,
                                        columnNumber: 76
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium text-[var(--text-primary)]",
                                        children: "Authentication Logs"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                        lineNumber: 603,
                                        columnNumber: 127
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                lineNumber: 602,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                            lineNumber: 601,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 text-xs text-[var(--success)] mr-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-2 h-2 rounded-full bg-[var(--success)] animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                            lineNumber: 607,
                                            columnNumber: 89
                                        }, this),
                                        " Live"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                    lineNumber: 607,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] px-3 py-2 min-w-[280px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            className: "text-[var(--text-tertiary)]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "11",
                                                    cy: "11",
                                                    r: "8"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                    lineNumber: 609,
                                                    columnNumber: 153
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "21",
                                                    y1: "21",
                                                    x2: "16.65",
                                                    y2: "16.65"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                    lineNumber: 609,
                                                    columnNumber: 185
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                            lineNumber: 609,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: paymentId,
                                            onChange: (e)=>setPaymentId(e.target.value),
                                            type: "text",
                                            placeholder: "Search by user, payment, or ID...",
                                            className: "bg-transparent border-none outline-none text-[13px] text-[var(--text-primary)] placeholder-[var(--text-tertiary)] flex-1"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                            lineNumber: 610,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] text-[var(--text-tertiary)] bg-[var(--bg-secondary)] px-1.5 py-0.5 rounded border border-[var(--border-secondary)] font-mono",
                                            children: "⌘K"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                            lineNumber: 611,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                    lineNumber: 608,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "flex items-center gap-1.5 px-3.5 py-2 rounded-[var(--radius-md)] text-[13px] font-medium bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-primary)] hover:bg-[var(--bg-hover)] transition-all",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                    lineNumber: 614,
                                                    columnNumber: 113
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                    points: "7,10 12,15 17,10"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                    lineNumber: 614,
                                                    columnNumber: 167
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "12",
                                                    y1: "15",
                                                    x2: "12",
                                                    y2: "3"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                    lineNumber: 614,
                                                    columnNumber: 205
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                            lineNumber: 614,
                                            columnNumber: 15
                                        }, this),
                                        " Export"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                    lineNumber: 613,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: fetchLogs,
                                    className: "flex items-center gap-1.5 px-3.5 py-2 rounded-[var(--radius-md)] text-[13px] font-medium bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-all",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            className: loading ? 'animate-spin' : '',
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                    points: "23,4 23,10 17,10"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                    lineNumber: 617,
                                                    columnNumber: 155
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M20.49 15a9 9 0 1 1-2.12-9.36L23 10"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                    lineNumber: 617,
                                                    columnNumber: 193
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                            lineNumber: 617,
                                            columnNumber: 15
                                        }, this),
                                        " Refresh"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                    lineNumber: 616,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                            lineNumber: 606,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                    lineNumber: 600,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-auto p-6 flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-5 gap-4 mb-6 shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatsCard, {
                                    label: "Total Events (24h)",
                                    value: stats.total.value,
                                    change: stats.total.text,
                                    trend: stats.total.trend,
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "14",
                                        height: "14",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                            points: "22 12 18 12 15 21 9 3 6 12 2 12"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                            lineNumber: 624,
                                            columnNumber: 233
                                        }, void 0)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                        lineNumber: 624,
                                        columnNumber: 135
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                    lineNumber: 624,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatsCard, {
                                    label: "Success Rate",
                                    value: stats.success.value,
                                    change: stats.success.text,
                                    trend: stats.success.trend,
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "14",
                                        height: "14",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                lineNumber: 625,
                                                columnNumber: 233
                                            }, void 0),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                points: "22 4 12 14.01 9 11.01"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                lineNumber: 625,
                                                columnNumber: 280
                                            }, void 0)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                        lineNumber: 625,
                                        columnNumber: 135
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                    lineNumber: 625,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatsCard, {
                                    label: "Failed Attempts",
                                    value: stats.failed.value,
                                    change: stats.failed.text,
                                    trend: stats.failed.trend,
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "14",
                                        height: "14",
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
                                                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                lineNumber: 626,
                                                columnNumber: 233
                                            }, void 0),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "12",
                                                y1: "8",
                                                x2: "12",
                                                y2: "12"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                lineNumber: 626,
                                                columnNumber: 266
                                            }, void 0),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "12",
                                                y1: "16",
                                                x2: "12.01",
                                                y2: "16"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                lineNumber: 626,
                                                columnNumber: 305
                                            }, void 0)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                        lineNumber: 626,
                                        columnNumber: 135
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                    lineNumber: 626,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatsCard, {
                                    label: "Risk Alerts",
                                    value: stats.risk.value,
                                    change: stats.risk.text,
                                    trend: stats.risk.trend,
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "14",
                                        height: "14",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                lineNumber: 627,
                                                columnNumber: 223
                                            }, void 0),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "12",
                                                y1: "9",
                                                x2: "12",
                                                y2: "13"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                lineNumber: 627,
                                                columnNumber: 324
                                            }, void 0),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "12",
                                                y1: "17",
                                                x2: "12.01",
                                                y2: "17"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                lineNumber: 627,
                                                columnNumber: 363
                                            }, void 0)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                        lineNumber: 627,
                                        columnNumber: 125
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                    lineNumber: 627,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatsCard, {
                                    label: "New Passkeys",
                                    value: stats.passkey.value,
                                    change: stats.passkey.text,
                                    trend: stats.passkey.trend,
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "14",
                                        height: "14",
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
                                                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                lineNumber: 628,
                                                columnNumber: 233
                                            }, void 0),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M7 11V7a5 5 0 0 1 10 0v4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                lineNumber: 628,
                                                columnNumber: 291
                                            }, void 0)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                        lineNumber: 628,
                                        columnNumber: 135
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                    lineNumber: 628,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                            lineNumber: 623,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 mb-5 shrink-0 flex-wrap",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs text-[var(--text-tertiary)]",
                                            children: "Event Type"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                            lineNumber: 633,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: "bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] px-2.5 py-1.5 text-[13px] text-[var(--text-primary)] outline-none min-w-[140px] cursor-pointer",
                                            value: eventType,
                                            onChange: (e)=>setEventType(e.target.value),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "All Events"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                    lineNumber: 635,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Passkey Registered",
                                                    children: "Passkey Registered"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                    lineNumber: 636,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Approval Requested",
                                                    children: "Approval Requested"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                    lineNumber: 637,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Payment Approved",
                                                    children: "Payment Approved"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                    lineNumber: 638,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Payment Denied",
                                                    children: "Payment Denied"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                    lineNumber: 639,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Payment Initiated",
                                                    children: "Payment Initiated"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                    lineNumber: 640,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                            lineNumber: 634,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                    lineNumber: 632,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs text-[var(--text-tertiary)]",
                                            children: "Result"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                            lineNumber: 643,
                                            columnNumber: 54
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: "bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] px-2.5 py-1.5 text-[13px] text-[var(--text-primary)] outline-none min-w-[120px] cursor-pointer",
                                            value: resultFilter,
                                            onChange: (e)=>setResultFilter(e.target.value),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "All Results"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                    lineNumber: 643,
                                                    columnNumber: 396
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "success",
                                                    children: "Success"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                    lineNumber: 643,
                                                    columnNumber: 433
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "blocked",
                                                    children: "Blocked/Failed"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                    lineNumber: 643,
                                                    columnNumber: 473
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "challenged",
                                                    children: "Challenged"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                    lineNumber: 643,
                                                    columnNumber: 520
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                            lineNumber: 643,
                                            columnNumber: 123
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                    lineNumber: 643,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs text-[var(--text-tertiary)]",
                                            children: "Date Range"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                            lineNumber: 644,
                                            columnNumber: 54
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] px-3 py-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    className: "bg-transparent border-none text-[13px] outline-none text-[var(--text-primary)] w-[110px] [color-scheme:dark]",
                                                    value: startDate,
                                                    onChange: (e)=>setStartDate(e.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                    lineNumber: 644,
                                                    columnNumber: 269
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[var(--text-tertiary)]",
                                                    children: "→"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                    lineNumber: 644,
                                                    columnNumber: 474
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    className: "bg-transparent border-none text-[13px] outline-none text-[var(--text-primary)] w-[110px] [color-scheme:dark]",
                                                    value: endDate,
                                                    onChange: (e)=>setEndDate(e.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                    lineNumber: 644,
                                                    columnNumber: 528
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                            lineNumber: 644,
                                            columnNumber: 127
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                    lineNumber: 644,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>toggleChip('new-device'),
                                    className: `flex items-center gap-1.5 px-2.5 py-1.5 rounded-[20px] border text-[12px] transition-all ${activeChips.has('new-device') ? 'bg-[var(--accent)] border-[var(--accent)] text-white' : 'bg-[var(--bg-tertiary)] border-[var(--border-primary)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--text-primary)]'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "14",
                                            height: "14",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: "5",
                                                    y: "2",
                                                    width: "14",
                                                    height: "20",
                                                    rx: "2",
                                                    ry: "2"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                    lineNumber: 645,
                                                    columnNumber: 503
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "12",
                                                    y1: "18",
                                                    x2: "12.01",
                                                    y2: "18"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                    lineNumber: 645,
                                                    columnNumber: 560
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                            lineNumber: 645,
                                            columnNumber: 405
                                        }, this),
                                        " New Device"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                    lineNumber: 645,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>toggleChip('vpn'),
                                    className: `flex items-center gap-1.5 px-2.5 py-1.5 rounded-[20px] border text-[12px] transition-all ${activeChips.has('vpn') ? 'bg-[var(--accent)] border-[var(--accent)] text-white' : 'bg-[var(--bg-tertiary)] border-[var(--border-primary)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--text-primary)]'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "14",
                                            height: "14",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                lineNumber: 646,
                                                columnNumber: 489
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                            lineNumber: 646,
                                            columnNumber: 391
                                        }, this),
                                        " VPN/Proxy"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                    lineNumber: 646,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>toggleChip('high-risk'),
                                    className: `flex items-center gap-1.5 px-2.5 py-1.5 rounded-[20px] border text-[12px] transition-all ${activeChips.has('high-risk') ? 'bg-[var(--accent)] border-[var(--accent)] text-white' : 'bg-[var(--bg-tertiary)] border-[var(--border-primary)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--text-primary)]'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "14",
                                            height: "14",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                    lineNumber: 647,
                                                    columnNumber: 501
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "12",
                                                    y1: "9",
                                                    x2: "12",
                                                    y2: "13"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                    lineNumber: 647,
                                                    columnNumber: 602
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "12",
                                                    y1: "17",
                                                    x2: "12.01",
                                                    y2: "17"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                    lineNumber: 647,
                                                    columnNumber: 641
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                            lineNumber: 647,
                                            columnNumber: 403
                                        }, this),
                                        " High Risk"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                    lineNumber: 647,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1"
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                    lineNumber: 648,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleClearFilters,
                                    className: "px-3.5 py-1.5 text-[13px] font-medium bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] text-[var(--text-primary)] hover:bg-[var(--bg-hover)] transition-all",
                                    children: "Clear Filters"
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                    lineNumber: 649,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                            lineNumber: 631,
                            columnNumber: 11
                        }, this),
                        loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[var(--text-tertiary)] text-center py-10 text-sm",
                            children: "Loading logs..."
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                            lineNumber: 652,
                            columnNumber: 22
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DataTable, {
                            columns: [
                                {
                                    header: 'Event Type',
                                    className: 'pl-5'
                                },
                                {
                                    header: 'Timestamp'
                                },
                                {
                                    header: 'User'
                                },
                                {
                                    header: 'Device'
                                },
                                {
                                    header: 'Location'
                                },
                                {
                                    header: 'Risk Context'
                                },
                                {
                                    header: 'Result',
                                    className: 'text-right'
                                }
                            ],
                            data: paginatedData,
                            currentPage: currentPage,
                            totalPages: totalPages,
                            itemsPerPage: itemsPerPage,
                            onPageChange: setCurrentPage,
                            totalItems: filteredData.length,
                            renderRow: (e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    onClick: ()=>setSelectedEvent(e),
                                    className: "group border-b border-[var(--border-secondary)] hover:bg-[var(--bg-hover)] cursor-pointer transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "p-3 pl-5",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[20px] text-xs font-medium 
                    ${e.resultLabel === 'Success' && [
                                                    'logged in',
                                                    'registered'
                                                ].some((word)=>e.type.toLowerCase().includes(word)) ? 'bg-[var(--info-bg)] text-[var(--info)]' : e.resultLabel === 'Success' ? 'bg-[var(--success-bg)] text-[var(--success)]' : e.resultLabel === 'Blocked' ? 'bg-[var(--error-bg)] text-[var(--error)]' : 'bg-[var(--warning-bg)] text-[var(--warning)]'} text-nowrap`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(EventIcon, {
                                                        type: e.type
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                        lineNumber: 677,
                                                        columnNumber: 23
                                                    }, void 0),
                                                    formatType(e.type)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                lineNumber: 672,
                                                columnNumber: 21
                                            }, void 0)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                            lineNumber: 671,
                                            columnNumber: 19
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "p-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-0.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[13px] text-[var(--text-primary)]",
                                                        children: new Date(e.timestamp).toLocaleDateString('en-US', {
                                                            month: 'short',
                                                            day: 'numeric',
                                                            year: 'numeric'
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                        lineNumber: 681,
                                                        columnNumber: 78
                                                    }, void 0),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[11px] text-[var(--text-tertiary)] font-mono",
                                                        children: [
                                                            new Date(e.timestamp).toLocaleTimeString('en-US', {
                                                                hour12: false
                                                            }),
                                                            " UTC"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                        lineNumber: 681,
                                                        columnNumber: 246
                                                    }, void 0)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                lineNumber: 681,
                                                columnNumber: 39
                                            }, void 0)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                            lineNumber: 681,
                                            columnNumber: 19
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "p-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-0.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[12px] font-mono text-[var(--text-secondary)]",
                                                        children: e.userName
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                        lineNumber: 682,
                                                        columnNumber: 78
                                                    }, void 0),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[11px] font-mono text-[var(--text-tertiary)]",
                                                        children: e.paymentId || '—'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                        lineNumber: 682,
                                                        columnNumber: 166
                                                    }, void 0)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                lineNumber: 682,
                                                columnNumber: 39
                                            }, void 0)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                            lineNumber: 682,
                                            columnNumber: 19
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "p-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-7 h-7 rounded-[var(--radius-md)] bg-[var(--bg-tertiary)] flex items-center justify-center shrink-0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            width: "14",
                                                            height: "14",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            className: "text-[var(--text-secondary)]",
                                                            children: e.device.type.toLowerCase().includes('mobile') || e.device.type.toLowerCase().includes('phone') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                        x: "5",
                                                                        y: "2",
                                                                        width: "14",
                                                                        height: "20",
                                                                        rx: "2",
                                                                        ry: "2"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                                        lineNumber: 687,
                                                                        columnNumber: 128
                                                                    }, void 0),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                        x1: "12",
                                                                        y1: "18",
                                                                        x2: "12.01",
                                                                        y2: "18"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                                        lineNumber: 687,
                                                                        columnNumber: 185
                                                                    }, void 0)
                                                                ]
                                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                        x: "2",
                                                                        y: "3",
                                                                        width: "20",
                                                                        height: "14",
                                                                        rx: "2",
                                                                        ry: "2"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                                        lineNumber: 687,
                                                                        columnNumber: 236
                                                                    }, void 0),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                        x1: "8",
                                                                        y1: "21",
                                                                        x2: "16",
                                                                        y2: "21"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                                        lineNumber: 687,
                                                                        columnNumber: 293
                                                                    }, void 0),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                        x1: "12",
                                                                        y1: "17",
                                                                        x2: "12",
                                                                        y2: "21"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                                        lineNumber: 687,
                                                                        columnNumber: 332
                                                                    }, void 0)
                                                                ]
                                                            }, void 0, true)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                            lineNumber: 686,
                                                            columnNumber: 25
                                                        }, void 0)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                        lineNumber: 685,
                                                        columnNumber: 23
                                                    }, void 0),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[13px] text-[var(--text-primary)]",
                                                                children: e.device.model
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                                lineNumber: 691,
                                                                columnNumber: 25
                                                            }, void 0),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-1.5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[11px] text-[var(--text-tertiary)] max-w-[120px] truncate",
                                                                        children: e.device.os
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                                        lineNumber: 693,
                                                                        columnNumber: 27
                                                                    }, void 0),
                                                                    e.isNewDevice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[9px] bg-[var(--purple-bg)] text-[var(--purple)] px-1.5 py-0.5 rounded font-bold uppercase tracking-wide",
                                                                        children: "New"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                                        lineNumber: 694,
                                                                        columnNumber: 45
                                                                    }, void 0)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                                lineNumber: 692,
                                                                columnNumber: 25
                                                            }, void 0)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                        lineNumber: 690,
                                                        columnNumber: 23
                                                    }, void 0)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                lineNumber: 684,
                                                columnNumber: 21
                                            }, void 0)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                            lineNumber: 683,
                                            columnNumber: 19
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "p-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-base",
                                                            children: countryCodeToEmoji(e.location.country)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                            lineNumber: 699,
                                                            columnNumber: 80
                                                        }, void 0),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[13px] text-[var(--text-primary)]",
                                                                    children: getCountryName(e.location.country)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                                    lineNumber: 699,
                                                                    columnNumber: 186
                                                                }, void 0),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[11px] text-[var(--text-tertiary)] font-mono",
                                                                    children: e.location.ip
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                                    lineNumber: 699,
                                                                    columnNumber: 286
                                                                }, void 0)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                            lineNumber: 699,
                                                            columnNumber: 155
                                                        }, void 0)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                    lineNumber: 699,
                                                    columnNumber: 39
                                                }, void 0),
                                                e.risk.network && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `mt-1 inline-block text-[9px] px-1.5 py-0.5 rounded font-bold uppercase ${e.risk.network === 'vpn' ? 'bg-[var(--warning-bg)] text-[var(--warning)]' : 'bg-[var(--info-bg)] text-[var(--info)]'}`,
                                                    children: e.risk.network
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                    lineNumber: 699,
                                                    columnNumber: 407
                                                }, void 0)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                            lineNumber: 699,
                                            columnNumber: 19
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "p-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-1.5 max-w-[220px]",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$utils$2f$riskContext$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildRiskContextTags"])({
                                                    amountLabel: e.risk.amount,
                                                    riskLevel: e.risk.level,
                                                    factors: [
                                                        ...e.risk.tags,
                                                        ...e.risk.reasons.map((r)=>({
                                                                label: r.label,
                                                                rule: r.rule
                                                            }))
                                                    ],
                                                    stepUpRequired: e.risk.stepUpRequired,
                                                    extraLabels: [
                                                        e.risk.network || '',
                                                        e.risk.beneficiary || ''
                                                    ]
                                                }).map((tag, i)=>{
                                                    if (tag.label) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `px-2.5 py-1 rounded-[6px] text-[11px] font-medium uppercase tracking-wide ${tag.cls}`,
                                                        children: tag.label
                                                    }, `${e.id}-risk-${i}-${tag.label}`, false, {
                                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                        lineNumber: 713,
                                                        columnNumber: 46
                                                    }, void 0);
                                                    return null;
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                lineNumber: 702,
                                                columnNumber: 21
                                            }, void 0)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                            lineNumber: 701,
                                            columnNumber: 19
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "p-3 text-right",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `inline-flex items-center gap-1 px-2 py-0.5 rounded-[var(--radius-sm)] text-[12px] font-medium capitalize ${e.resultLabel === 'Success' ? 'bg-[var(--success-bg)] text-[var(--success)]' : e.resultLabel === 'Blocked' ? 'bg-[var(--error-bg)] text-[var(--error)]' : 'bg-[var(--warning-bg)] text-[var(--warning)]' // Challenged
                                                }`,
                                                children: [
                                                    e.resultLabel === 'Success' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "12",
                                                        height: "12",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                            points: "20 6 9 17 4 12"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                            lineNumber: 729,
                                                            columnNumber: 153
                                                        }, void 0)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                        lineNumber: 729,
                                                        columnNumber: 55
                                                    }, void 0),
                                                    e.resultLabel === 'Blocked' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "12",
                                                        height: "12",
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
                                                                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                                lineNumber: 730,
                                                                columnNumber: 153
                                                            }, void 0),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "6",
                                                                y1: "6",
                                                                x2: "18",
                                                                y2: "18"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                                lineNumber: 730,
                                                                columnNumber: 191
                                                            }, void 0)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                        lineNumber: 730,
                                                        columnNumber: 55
                                                    }, void 0),
                                                    e.resultLabel
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                lineNumber: 725,
                                                columnNumber: 21
                                            }, void 0)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                            lineNumber: 724,
                                            columnNumber: 19
                                        }, void 0)
                                    ]
                                }, e.id, true, {
                                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                    lineNumber: 670,
                                    columnNumber: 17
                                }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                            lineNumber: 653,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                    lineNumber: 622,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SlideOver, {
                    isOpen: !!selectedEvent,
                    onClose: ()=>setSelectedEvent(null),
                    title: "Event Details",
                    footer: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>router.push(`/users?query=${encodeURIComponent(selectedEvent?.userId || '')}`),
                                className: "flex-1 py-2 border border-[var(--border-primary)] rounded-[6px] text-[13px] text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)] transition-all",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                            className: "w-3.5 h-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                            lineNumber: 748,
                                            columnNumber: 19
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "View User"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                            lineNumber: 749,
                                            columnNumber: 19
                                        }, void 0)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                    lineNumber: 747,
                                    columnNumber: 17
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                lineNumber: 746,
                                columnNumber: 15
                            }, void 0),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>router.push(`/devices?query=${encodeURIComponent(selectedEvent?.userId || '')}`),
                                className: "flex-1 py-2 border border-[var(--border-primary)] rounded-[6px] text-[13px] text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)] transition-all",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$top$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelTop$3e$__["PanelTop"], {
                                            className: "w-3.5 h-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                            lineNumber: 754,
                                            columnNumber: 19
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "View Device"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                            lineNumber: 755,
                                            columnNumber: 19
                                        }, void 0)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                    lineNumber: 753,
                                    columnNumber: 17
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                lineNumber: 752,
                                columnNumber: 15
                            }, void 0)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                        lineNumber: 745,
                        columnNumber: 13
                    }, void 0),
                    children: selectedEvent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-[0.5px] mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "14",
                                                height: "14",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                        lineNumber: 773,
                                                        columnNumber: 117
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                        points: "22 4 12 14.01 9 11.01"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                        lineNumber: 773,
                                                        columnNumber: 164
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                lineNumber: 773,
                                                columnNumber: 19
                                            }, this),
                                            " Authentication Event"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                        lineNumber: 772,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between py-2 border-b border-[var(--border-secondary)]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[13px] text-[var(--text-tertiary)]",
                                                children: "Event Type"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                lineNumber: 776,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `px-2 py-0.5 rounded-[20px] text-[11px] font-medium ${selectedEvent.type.includes('Approved') || selectedEvent.type.includes('Success') ? 'bg-[var(--success-bg)] text-[var(--success)]' : 'bg-[var(--error-bg)] text-[var(--error)]'}`,
                                                children: formatType(selectedEvent.type)
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                lineNumber: 777,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                        lineNumber: 775,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                        label: "Event ID",
                                        value: selectedEvent.id,
                                        valueClass: "font-mono text-[12px]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                        lineNumber: 779,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                        label: "Timestamp",
                                        value: new Date(selectedEvent.timestamp).toISOString(),
                                        valueClass: "font-mono text-[12px]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                        lineNumber: 780,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                        label: "User ID",
                                        value: selectedEvent.userId,
                                        valueClass: "font-mono text-[12px]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                        lineNumber: 781,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                        label: "Payment ID",
                                        value: selectedEvent.paymentId || '—',
                                        valueClass: "font-mono text-[12px]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                        lineNumber: 782,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between py-2.5 border-b border-[var(--border-secondary)]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[13px] text-[var(--text-tertiary)]",
                                                children: "Result"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                lineNumber: 784,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `inline-flex items-center gap-1 px-2 py-0.5 rounded-[4px] text-[12px] font-medium ${selectedEvent.resultLabel === 'Success' ? 'bg-[var(--success-bg)] text-[var(--success)]' : 'bg-[var(--error-bg)] text-[var(--error)]'}`,
                                                children: selectedEvent.resultLabel
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                lineNumber: 785,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                        lineNumber: 783,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                lineNumber: 771,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-[0.5px] mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "14",
                                                height: "14",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: "5",
                                                        y: "2",
                                                        width: "14",
                                                        height: "20",
                                                        rx: "2",
                                                        ry: "2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                        lineNumber: 791,
                                                        columnNumber: 117
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "12",
                                                        y1: "18",
                                                        x2: "12.01",
                                                        y2: "18"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                        lineNumber: 791,
                                                        columnNumber: 174
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                lineNumber: 791,
                                                columnNumber: 19
                                            }, this),
                                            " Device & Environment"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                        lineNumber: 790,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                        label: "Device Type",
                                        value: selectedEvent.device.type
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                        lineNumber: 793,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                        label: "Device Model",
                                        value: selectedEvent.device.model
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                        lineNumber: 794,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                        label: "OS & Version",
                                        value: selectedEvent.device.os
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                        lineNumber: 795,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                        label: "Browser / User Agent",
                                        value: selectedEvent.device.browser
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                        lineNumber: 796,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                        label: "Authenticator Type",
                                        value: selectedEvent.authType || '—'
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                        lineNumber: 797,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                        label: "Device Status",
                                        value: selectedEvent.deviceStatus
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                        lineNumber: 798,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                        label: "First Seen",
                                        value: selectedEvent.firstSeen
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                        lineNumber: 799,
                                        columnNumber: 17
                                    }, this),
                                    selectedEvent.isNewDevice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between py-2.5 border-b border-[var(--border-secondary)]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[13px] text-[var(--text-tertiary)]",
                                                children: "Flag"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                lineNumber: 802,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] bg-[var(--purple-bg)] text-[var(--purple)] px-2 py-0.5 rounded font-bold uppercase",
                                                children: "NEW DEVICE"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                lineNumber: 803,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                        lineNumber: 801,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                lineNumber: 789,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-[0.5px] mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "14",
                                                height: "14",
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
                                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                        lineNumber: 810,
                                                        columnNumber: 117
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "2",
                                                        y1: "12",
                                                        x2: "22",
                                                        y2: "12"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                        lineNumber: 810,
                                                        columnNumber: 150
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                        lineNumber: 810,
                                                        columnNumber: 189
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                lineNumber: 810,
                                                columnNumber: 19
                                            }, this),
                                            " Network & Location"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                        lineNumber: 809,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                        label: "IP Address",
                                        value: selectedEvent.location.ip,
                                        valueClass: "font-mono text-[12px]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                        lineNumber: 812,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between py-2.5 border-b border-[var(--border-secondary)]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[13px] text-[var(--text-tertiary)]",
                                                children: "Location"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                lineNumber: 814,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[13px] text-[var(--text-primary)] text-right",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "mr-1.5",
                                                        children: countryCodeToEmoji(selectedEvent.location.country)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                        lineNumber: 815,
                                                        columnNumber: 87
                                                    }, this),
                                                    selectedEvent.location.city,
                                                    ", ",
                                                    getCountryName(selectedEvent.location.country)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                lineNumber: 815,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                        lineNumber: 813,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                        label: "ASN / ISP",
                                        value: `${selectedEvent.location.asn} - ${selectedEvent.location.isp}`
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                        lineNumber: 817,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                        label: "Coordinates",
                                        value: selectedEvent.location.lat ? `${selectedEvent.location.lat}, ${selectedEvent.location.long}` : '—',
                                        valueClass: "font-mono text-[11px]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                        lineNumber: 818,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between py-2.5 border-b border-[var(--border-secondary)]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[13px] text-[var(--text-tertiary)]",
                                                children: "Network Signals"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                lineNumber: 820,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-[12px] font-medium ${selectedEvent.risk.network ? 'text-[var(--warning)]' : 'text-[var(--success)]'}`,
                                                children: selectedEvent.risk.network ? selectedEvent.risk.network.toUpperCase() + ' DETECTED' : 'Clean (No VPN/Proxy)'
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                lineNumber: 821,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                        lineNumber: 819,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                lineNumber: 808,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-[0.5px] mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "14",
                                                height: "14",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                        lineNumber: 829,
                                                        columnNumber: 117
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "12",
                                                        y1: "9",
                                                        x2: "12",
                                                        y2: "13"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                        lineNumber: 829,
                                                        columnNumber: 218
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "12",
                                                        y1: "17",
                                                        x2: "12.01",
                                                        y2: "17"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                        lineNumber: 829,
                                                        columnNumber: 257
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                lineNumber: 829,
                                                columnNumber: 19
                                            }, this),
                                            " Risk Context"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                        lineNumber: 828,
                                        columnNumber: 17
                                    }, this),
                                    selectedEvent.risk.amount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                        label: "Transaction Amount",
                                        value: selectedEvent.risk.amount,
                                        valueClass: `amount-badge ${selectedEvent.risk.amountClass || 'low'}`
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                        lineNumber: 831,
                                        columnNumber: 47
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                        label: "Beneficiary",
                                        value: selectedEvent.risk.beneficiary || '—',
                                        valueClass: "font-mono text-[12px]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                        lineNumber: 832,
                                        columnNumber: 17
                                    }, this),
                                    selectedEvent.risk.stepUpRequired !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                        label: "Step Up Required",
                                        value: selectedEvent.risk.stepUpRequired ? 'Yes' : 'No',
                                        valueClass: `stepup-badge ${selectedEvent.risk.stepUpRequired ? 'required' : 'not-required'}`
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                        lineNumber: 833,
                                        columnNumber: 69
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between py-2.5 border-b border-[var(--border-secondary)]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[13px] text-[var(--text-tertiary)]",
                                                children: "Risk Score"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                lineNumber: 835,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-[13px] font-bold ${selectedEvent.risk.level === 'LOW' ? 'text-var(--success)' : selectedEvent.risk.level === 'MEDIUM' ? 'text-[var(--warning)]' : 'text-[var(--error)]'}`,
                                                children: [
                                                    selectedEvent.risk.score,
                                                    " / 100 (",
                                                    selectedEvent.risk.level,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                lineNumber: 836,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                        lineNumber: 834,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `${selectedEvent.risk.reasons.length ? 'block' : 'flex justify-between'} py-2.5 border-b border-[var(--border-secondary)]`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block text-[11px] text-[var(--text-tertiary)] mb-2 uppercase font-semibold",
                                                children: "Reason Codes"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                lineNumber: 841,
                                                columnNumber: 19
                                            }, this),
                                            selectedEvent.risk.reasons.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-2 pl-2 py-1",
                                                children: selectedEvent.risk.reasons.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex justify-between items-start text-[12px]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[var(--text-secondary)]",
                                                                children: [
                                                                    r.label,
                                                                    " ",
                                                                    r.desc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[var(--text-tertiary)]",
                                                                        children: [
                                                                            "- ",
                                                                            r.desc
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                                        lineNumber: 846,
                                                                        columnNumber: 95
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                                lineNumber: 846,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-mono text-[var(--error)]",
                                                                children: [
                                                                    "+",
                                                                    r.score
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                                lineNumber: 847,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, r.rule, true, {
                                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                        lineNumber: 845,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                lineNumber: 843,
                                                columnNumber: 21
                                            }, this) : '—'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                        lineNumber: 840,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                lineNumber: 827,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-[0.5px] mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "14",
                                                height: "14",
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
                                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                        lineNumber: 858,
                                                        columnNumber: 117
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                        points: "12 6 12 12 16 14"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                        lineNumber: 858,
                                                        columnNumber: 150
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                lineNumber: 858,
                                                columnNumber: 19
                                            }, this),
                                            " Event Timeline"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                        lineNumber: 857,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative border-l-2 border-[var(--border-primary)] ml-2 pl-6 space-y-5 pb-2",
                                        children: generateTimeline(selectedEvent).map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `absolute -left-[31px] top-1 w-4 h-4 rounded-full border-2 border-[var(--bg-secondary)] ${t.dotColor}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                        lineNumber: 863,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[13px] text-[var(--text-primary)]",
                                                        children: t.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                        lineNumber: 864,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[11px] text-[var(--text-tertiary)] font-mono mt-0.5",
                                                        children: t.time
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                        lineNumber: 865,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                                lineNumber: 862,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                        lineNumber: 860,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                                lineNumber: 856,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                        lineNumber: 769,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                    lineNumber: 740,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(admin)/auth-logs/page.tsx",
            lineNumber: 598,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(admin)/auth-logs/page.tsx",
        lineNumber: 597,
        columnNumber: 5
    }, this);
}
function EventIcon({ type }) {
    if ([
        'passkey',
        'login',
        'pin'
    ].some((word)=>type.toLocaleLowerCase().includes(word))) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                    children: "title"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                    lineNumber: 882,
                    columnNumber: 4
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "3",
                    y: "11",
                    width: "18",
                    height: "11",
                    rx: "2",
                    ry: "2"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                    lineNumber: 883,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M7 11V7a5 5 0 0 1 10 0v4"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                    lineNumber: 883,
                    columnNumber: 65
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(admin)/auth-logs/page.tsx",
            lineNumber: 881,
            columnNumber: 12
        }, this);
    }
    if ([
        'approval',
        'requested'
    ].some((word)=>type.toLocaleLowerCase().includes(word))) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                    children: "title"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                    lineNumber: 888,
                    columnNumber: 4
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                    lineNumber: 889,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "12 6 12 12 16 14"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                    lineNumber: 889,
                    columnNumber: 40
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(admin)/auth-logs/page.tsx",
            lineNumber: 887,
            columnNumber: 12
        }, this);
    }
    if (type.toLocaleLowerCase().includes('approved')) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                    children: "title"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                    lineNumber: 894,
                    columnNumber: 4
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                    lineNumber: 895,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "22 4 12 14.01 9 11.01"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                    lineNumber: 895,
                    columnNumber: 54
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(admin)/auth-logs/page.tsx",
            lineNumber: 893,
            columnNumber: 12
        }, this);
    }
    if ([
        'denied',
        'blocked'
    ].some((word)=>type.toLocaleLowerCase().includes(word))) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                    children: "title"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                    lineNumber: 900,
                    columnNumber: 4
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                    lineNumber: 901,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "15",
                    y1: "9",
                    x2: "9",
                    y2: "15"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                    lineNumber: 901,
                    columnNumber: 40
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "9",
                    y1: "9",
                    x2: "15",
                    y2: "15"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                    lineNumber: 901,
                    columnNumber: 78
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(admin)/auth-logs/page.tsx",
            lineNumber: 899,
            columnNumber: 12
        }, this);
    }
    if ([
        'device',
        'revoked'
    ].some((word)=>type.toLocaleLowerCase().includes(word))) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                    children: "title"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                    lineNumber: 906,
                    columnNumber: 4
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                    lineNumber: 907,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "15",
                    y1: "9",
                    x2: "9",
                    y2: "15"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                    lineNumber: 907,
                    columnNumber: 40
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "9",
                    y1: "9",
                    x2: "15",
                    y2: "15"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                    lineNumber: 907,
                    columnNumber: 78
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(admin)/auth-logs/page.tsx",
            lineNumber: 905,
            columnNumber: 12
        }, this);
    }
    if ([
        'payment',
        'timeout'
    ].some((word)=>type.toLocaleLowerCase().includes(word))) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                    children: "title"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                    lineNumber: 912,
                    columnNumber: 4
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                    lineNumber: 913,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "12",
                    y1: "8",
                    x2: "12",
                    y2: "12"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                    lineNumber: 913,
                    columnNumber: 40
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "12",
                    y1: "16",
                    x2: "12.01",
                    y2: "16"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/auth-logs/page.tsx",
                    lineNumber: 913,
                    columnNumber: 79
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(admin)/auth-logs/page.tsx",
            lineNumber: 911,
            columnNumber: 12
        }, this);
    }
    return null;
}
}),
];

//# sourceMappingURL=_4d43de4c._.js.map