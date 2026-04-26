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
"[project]/app/(admin)/transactions/TransactionModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TransactionDetailModal",
    ()=>TransactionDetailModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$adminService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/adminService.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const riskColors = {
    low: {
        badge: "bg-emerald-500/15 text-emerald-400",
        alert: "bg-emerald-500/10 border border-emerald-500/20",
        icon: "bg-emerald-500/20 text-emerald-400",
        score: "text-emerald-400"
    },
    medium: {
        badge: "bg-amber-500/15 text-amber-400",
        alert: "bg-amber-500/10 border border-amber-500/20",
        icon: "bg-amber-500/20 text-amber-400",
        score: "text-amber-400"
    },
    high: {
        badge: "bg-orange-500/15 text-orange-400",
        alert: "bg-orange-500/10 border border-orange-500/20",
        icon: "bg-orange-500/20 text-orange-400",
        score: "text-orange-400"
    },
    critical: {
        badge: "bg-red-500/15 text-red-400",
        alert: "bg-red-500/10 border border-red-500/20",
        icon: "bg-red-500/20 text-red-400",
        score: "text-red-400"
    }
};
const statusUi = {
    pending: {
        label: "Pending",
        class: "bg-amber-500/15 text-amber-400"
    },
    approved: {
        label: "Approved",
        class: "bg-emerald-500/15 text-emerald-400"
    },
    completed: {
        label: "Completed",
        class: "bg-emerald-500/15 text-emerald-400"
    },
    rejected: {
        label: "Rejected",
        class: "bg-red-500/15 text-red-400"
    },
    processing: {
        label: "Processing",
        class: "bg-blue-500/15 text-blue-400"
    }
};
const approverAvatarColors = {
    approved: "bg-emerald-500 text-white",
    pending: "bg-[var(--bg-elevated)] text-[var(--text-tertiary)]  border-2 border-[var(--border-default)] border-dotted",
    rejected: "bg-red-500 text-white",
    skipped: '"bg-[var(--bg-elevated)] text-[var(--text-tertiary)]  border-2 border-[var(--border-default)] border-dotted"'
};
const approverBadgeColors = {
    approved: "bg-emerald-500/15 text-emerald-400",
    pending: "bg-amber-500/15 text-amber-400",
    skipped: "bg-slate-500/15 text-slate-400",
    rejected: "bg-red-500/15 text-red-400"
};
const timelineDotColors = {
    success: "bg-emerald-500",
    warning: "bg-amber-500",
    error: "bg-red-500",
    info: "bg-blue-500"
};
function initialsFromName(name) {
    return name.split(" ").map((w)=>w[0]).join("").slice(0, 2).toUpperCase();
}
function mapApproverStatus(raw) {
    const s = (raw || "").toLowerCase();
    if ([
        "approved",
        "done",
        "complete",
        "completed",
        "success"
    ].includes(s)) return "approved";
    if ([
        "rejected",
        "denied",
        "failed"
    ].includes(s)) return "rejected";
    if (s === 'skipped') return "skipped";
    return "pending";
}
function mapFactorClassToLevel(factorClass) {
    const c = (factorClass || "").toLowerCase();
    if (c === "critical" || c === "error") return "critical";
    if (c === "high") return "high";
    if (c === "warning") return "medium";
    return "low";
}
function normalizeRiskLevel(level) {
    const l = String(level || "low").toLowerCase();
    if (l === "critical" || l === "high" || l === "medium" || l === "low") return l;
    return "low";
}
function highestRiskLevel(a, b) {
    const order = {
        low: 0,
        medium: 1,
        high: 2,
        critical: 3
    };
    return order[b] > order[a] ? b : a;
}
function riskRowsFromFactors(factors) {
    return factors.filter((f)=>f && typeof f === "object").map((f)=>{
        const desc = f.desc !== undefined && f.desc !== null && String(f.desc).trim() !== "" ? String(f.desc) : f.description !== undefined && f.description !== null && String(f.description).trim() !== "" ? String(f.description) : "";
        return {
            level: mapFactorClassToLevel(f.class),
            title: String(f.label || "Risk factor"),
            description: desc,
            score: Number(f.score) || 0,
            rule: f.rule ? String(f.rule) : undefined
        };
    });
}
function parseRiskAlerts(riskLevel, riskScore, riskReason) {
    if (!riskReason?.trim()) {
        const lvl = (riskLevel || "low").toLowerCase();
        const safe = lvl === "medium" || lvl === "high" || lvl === "critical" ? lvl : "low";
        return [
            {
                level: safe,
                title: "Risk summary",
                description: `Overall ${riskLevel} risk (score ${riskScore}).`,
                score: riskScore
            }
        ];
    }
    try {
        const parsed = JSON.parse(riskReason);
        if (Array.isArray(parsed)) {
            return parsed.filter((x)=>x && typeof x === "object").map((x)=>{
                const level = String(x.level || riskLevel || "low").toLowerCase();
                const L = level === "medium" || level === "high" || level === "critical" || level === "low" ? level : "low";
                return {
                    level: L,
                    title: String(x.title || x.rule || "Factor"),
                    description: String(x.description || x.desc || ""),
                    score: Number(x.score) || 0
                };
            });
        }
    } catch  {
    /* fall through */ }
    const lvl = (riskLevel || "low").toLowerCase();
    const safe = lvl === "medium" || lvl === "high" || lvl === "critical" ? lvl : "low";
    return [
        {
            level: safe,
            title: "Risk analysis",
            description: riskReason,
            score: riskScore
        }
    ];
}
function buildRiskAssessmentRows(detail) {
    const factors = detail.riskFactors;
    if (Array.isArray(factors) && factors.length > 0) {
        return riskRowsFromFactors(factors);
    }
    return parseRiskAlerts(detail.riskLevel, detail.riskScore, detail.riskReason);
}
function buildFromTo(d) {
    const isCorp = d.segment === "corporate";
    const fromName = isCorp ? d.fromAccount?.name || '-' : d.user?.fullName || "—";
    const fromNumber = isCorp ? d.fromAccount?.number || d.company?.registrationNo || "—" : d.fromAccount?.number || d.user?.email || d.user?.mobile || "—";
    const fromBank = isCorp ? d.payerBank || "—" : d.payerBank || "Retail banking";
    return {
        from: {
            name: fromName,
            number: fromNumber,
            bank: fromBank
        },
        to: {
            name: d.merchantName || "Beneficiary",
            number: d.toAccount || "—",
            bank: d.beneficiaryBank || (isCorp ? "—" : "DuitNow / IBG")
        }
    };
}
function buildTimeline(d, dateStr) {
    const items = [
        {
            event: "Transaction Initiated",
            time: new Date(d.timestamp).toLocaleTimeString("en-MY", {
                hour12: false
            }),
            type: "success"
        },
        {
            event: `Risk Assessment Completed (score: ${d.riskScore})`,
            time: new Date(d.timestamp).toLocaleTimeString("en-MY", {
                hour12: false
            }),
            type: "success"
        }
    ];
    for (const a of d.approvers || []){
        const st = (a.status || "").toLowerCase();
        if (st === "done" || st === "approved") {
            items.push({
                event: `Approved by ${a.name}`,
                time: a.time ? new Date(a.time).toLocaleTimeString("en-MY", {
                    hour12: false
                }) : "—",
                type: "success"
            });
        } else if (st === "rejected") {
            items.push({
                event: `Rejected by ${a.name}`,
                time: a.time ? new Date(a.time).toLocaleTimeString("en-MY", {
                    hour12: false
                }) : "—",
                type: "error"
            });
        }
    }
    if (d.description) {
        items.push({
            event: d.description.slice(0, 120) + (d.description.length > 120 ? "…" : ""),
            time: dateStr,
            type: "info"
        });
    }
    return items;
}
function RiskIcon({ level }) {
    if (level === "low") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-3.5 h-3.5",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                children: "Low risk"
            }, void 0, false, {
                fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                lineNumber: 377,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "20 6 9 17 4 12"
            }, void 0, false, {
                fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                lineNumber: 378,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
        lineNumber: 369,
        columnNumber: 4
    }, this);
    if (level === "critical") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-3.5 h-3.5",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                children: "Critical risk"
            }, void 0, false, {
                fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                lineNumber: 391,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
            }, void 0, false, {
                fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                lineNumber: 392,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "9",
                x2: "12",
                y2: "13"
            }, void 0, false, {
                fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                lineNumber: 393,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "17",
                x2: "12.01",
                y2: "17"
            }, void 0, false, {
                fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                lineNumber: 394,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
        lineNumber: 383,
        columnNumber: 4
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-3.5 h-3.5",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                children: "Risk warning"
            }, void 0, false, {
                fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                lineNumber: 406,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }, void 0, false, {
                fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                lineNumber: 407,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "8",
                x2: "12",
                y2: "12"
            }, void 0, false, {
                fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                lineNumber: 408,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "16",
                x2: "12.01",
                y2: "16"
            }, void 0, false, {
                fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                lineNumber: 409,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
        lineNumber: 398,
        columnNumber: 3
    }, this);
}
_c = RiskIcon;
function TransactionDetailModal({ isOpen, transactionId, onClose, onAuditLog }) {
    _s();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [detail, setDetail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const load = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TransactionDetailModal.useCallback[load]": async (id)=>{
            setLoading(true);
            setError(null);
            setDetail(null);
            try {
                const d = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$adminService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminService"].getTransactionDetail(id);
                setDetail(d);
            } catch (e) {
                console.error(e);
                setError("Failed to load transaction details.");
            } finally{
                setLoading(false);
            }
        }
    }["TransactionDetailModal.useCallback[load]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TransactionDetailModal.useEffect": ()=>{
            if (!isOpen || !transactionId) {
                setDetail(null);
                setError(null);
                return;
            }
            load(transactionId);
        }
    }["TransactionDetailModal.useEffect"], [
        isOpen,
        transactionId,
        load
    ]);
    if (!isOpen || !transactionId) return null;
    const fmtMoney = (n, cur)=>`${cur} ${n.toLocaleString("en-MY", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })}`;
    const dateLabel = detail ? new Date(detail.timestamp).toLocaleDateString("en-MY", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    }) : "";
    const timeLabel = detail ? new Date(detail.timestamp).toLocaleTimeString("en-MY", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
    }) : "";
    const riskKey = (riskLevelKey)=>riskLevelKey in riskColors ? riskLevelKey : "low";
    const statusKey = (detail?.status || "pending").toLowerCase();
    const statusInfo = statusUi[statusKey] || {
        label: detail?.status || "—",
        class: "bg-[var(--bg-tertiary)] text-[var(--text-secondary)]"
    };
    const uiApprovers = (detail?.approvers?.length ? detail.approvers : [
        {
            id: "self",
            name: "Payer",
            status: "done"
        }
    ]).map((a)=>({
            name: a.name,
            role: a.role || "Approver",
            initials: initialsFromName(a.name),
            status: mapApproverStatus(a.status),
            time: a.time ? new Date(a.time).toLocaleString("en-MY", {
                hour12: false
            }) : null
        }));
    const approvedCount = uiApprovers.filter((a)=>a.status === "approved").length;
    const approvedWithSkippedCount = uiApprovers.filter((a)=>a.status === "approved" || a.status === 'skipped').length;
    const rejectedCount = uiApprovers.filter((a)=>a.status === "rejected").length;
    const pendingCount = uiApprovers.filter((a)=>a.status === "pending").length;
    const totalApprovers = Math.max(uiApprovers.length, 1);
    const requiredApprovals = totalApprovers;
    const approverRiskAssessments = detail?.approverRiskAssessments || [];
    const groupedApproverRiskAssessments = approverRiskAssessments.reduce((acc, assessment)=>{
        const key = String(assessment?.approverId || "").trim() || String(assessment?.approverName || "unknown").trim();
        const existing = acc.get(key);
        const curScore = Number(assessment?.riskScore ?? 0);
        const curLevel = normalizeRiskLevel(assessment?.riskLevel);
        const curFactors = Array.isArray(assessment?.riskFactors) ? assessment.riskFactors : [];
        if (!existing) {
            acc.set(key, {
                approverName: assessment?.approverName || "Unknown approver",
                timestamp: assessment?.timestamp || null,
                riskScore: curScore,
                riskLevel: curLevel,
                riskFactors: curFactors,
                level: assessment?.level || null,
                approverId: assessment.approverId || null
            });
            return acc;
        }
        existing.riskScore = Math.max(Number(existing.riskScore || 0), curScore);
        existing.riskLevel = highestRiskLevel(normalizeRiskLevel(existing.riskLevel), curLevel);
        if (assessment?.timestamp) {
            const prevTs = existing.timestamp ? new Date(existing.timestamp).getTime() : 0;
            const nextTs = new Date(assessment.timestamp).getTime();
            if (nextTs > prevTs) existing.timestamp = assessment.timestamp;
        }
        const dedupe = new Set((existing.riskFactors || []).map((f)=>`${f.rule || ""}|${f.label || ""}|${f.desc || f.description || ""}|${f.score || 0}`));
        for (const f of curFactors){
            const sig = `${f.rule || ""}|${f.label || ""}|${f.desc || f.description || ""}|${f.score || 0}`;
            if (!dedupe.has(sig)) {
                dedupe.add(sig);
                existing.riskFactors.push(f);
            }
        }
        return acc;
    }, new Map());
    const { from, to } = detail ? buildFromTo(detail) : {
        from: null,
        to: null
    };
    const timeline = detail ? buildTimeline(detail, dateLabel) : [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[1002] flex items-center justify-center p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "absolute inset-0 bg-black/70 transition-all duration-200",
                "aria-label": "Close dialog",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                lineNumber: 572,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl",
                role: "dialog",
                "aria-labelledby": "tx-modal-title",
                "aria-modal": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6 py-5 border-b border-[var(--border-secondary)] flex items-center justify-between shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                id: "tx-modal-title",
                                className: "text-base font-semibold flex flex-wrap items-center gap-3 text-[var(--text-primary)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Transaction details"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                        lineNumber: 589,
                                        columnNumber: 7
                                    }, this),
                                    detail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-sm text-[var(--accent)]",
                                        children: detail.transactionNo || detail.id
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                        lineNumber: 591,
                                        columnNumber: 8
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                lineNumber: 585,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onClose,
                                className: "p-1.5 rounded-md text-[var(--text-tertiary)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)] transition-all",
                                "aria-label": "Close",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    "aria-hidden": true,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                                            children: "Close"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                            lineNumber: 611,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "18",
                                            y1: "6",
                                            x2: "6",
                                            y2: "18"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                            lineNumber: 612,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "6",
                                            y1: "6",
                                            x2: "18",
                                            y2: "18"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                            lineNumber: 613,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                    lineNumber: 602,
                                    columnNumber: 7
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                lineNumber: 596,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                        lineNumber: 584,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6 py-6 overflow-y-auto flex-1 space-y-6 custom-scrollbar",
                        children: [
                            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-[var(--text-tertiary)]",
                                children: "Loading…"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                lineNumber: 620,
                                columnNumber: 7
                            }, this),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-[var(--error)] border border-[var(--error)]/30 rounded-lg px-4 py-3 bg-[var(--error-bg)]",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                lineNumber: 623,
                                columnNumber: 7
                            }, this),
                            !loading && !error && detail && from && to && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row items-stretch gap-4 p-5 bg-[var(--bg-tertiary)] rounded-xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 p-4 bg-[var(--bg-secondary)] rounded-lg border border-[var(--border-secondary)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[11px] font-semibold uppercase tracking-widest text-[var(--text-tertiary)] mb-2",
                                                        children: "From Account"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                        lineNumber: 631,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-base font-semibold text-[var(--text-primary)] mb-1 text-nowrap",
                                                        children: from.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                        lineNumber: 634,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-mono text-[13px] text-[var(--text-secondary)]",
                                                        children: from.number
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                        lineNumber: 637,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-[var(--text-tertiary)] mt-1",
                                                        children: from.bank
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                        lineNumber: 640,
                                                        columnNumber: 10
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                lineNumber: 630,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-row sm:flex-col items-center justify-center gap-2 shrink-0 py-2 sm:py-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-12 h-12 rounded-full bg-[var(--accent)] flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-6 h-6 text-white",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            "aria-hidden": true,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                                                                    children: "Transfer"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                                    lineNumber: 655,
                                                                    columnNumber: 12
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                    x1: "5",
                                                                    y1: "12",
                                                                    x2: "19",
                                                                    y2: "12"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                                    lineNumber: 656,
                                                                    columnNumber: 12
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                    points: "12 5 19 12 12 19"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                                    lineNumber: 657,
                                                                    columnNumber: 12
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                            lineNumber: 647,
                                                            columnNumber: 11
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                        lineNumber: 646,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono text-lg font-bold text-[var(--text-primary)]",
                                                        children: fmtMoney(detail.amount, detail.currency)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                        lineNumber: 660,
                                                        columnNumber: 10
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                lineNumber: 645,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 p-4 bg-[var(--bg-secondary)] rounded-lg border border-[var(--border-secondary)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[11px] font-semibold uppercase tracking-widest text-[var(--text-tertiary)] mb-2",
                                                        children: "To Account"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                        lineNumber: 666,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-base font-semibold text-[var(--text-primary)] mb-1",
                                                        children: to.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                        lineNumber: 669,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-mono text-[13px] text-[var(--text-secondary)]",
                                                        children: to.number
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                        lineNumber: 672,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-[var(--text-tertiary)] mt-1",
                                                        children: to.bank
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                        lineNumber: 675,
                                                        columnNumber: 10
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                lineNumber: 665,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                        lineNumber: 629,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[11px] font-semibold uppercase tracking-widest text-[var(--text-tertiary)] mb-3 pb-2 border-b border-[var(--border-secondary)]",
                                                children: "Transaction information"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                lineNumber: 682,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-[var(--text-tertiary)]",
                                                                children: "Transaction ID"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                                lineNumber: 687,
                                                                columnNumber: 11
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-mono text-[13px] text-[var(--text-primary)] font-medium",
                                                                children: detail.id
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                                lineNumber: 690,
                                                                columnNumber: 11
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                        lineNumber: 686,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-[var(--text-tertiary)]",
                                                                children: "Date & time"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                                lineNumber: 695,
                                                                columnNumber: 11
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[14px] text-[var(--text-primary)] font-medium",
                                                                children: [
                                                                    dateLabel,
                                                                    " ",
                                                                    timeLabel
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                                lineNumber: 698,
                                                                columnNumber: 11
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                        lineNumber: 694,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-[var(--text-tertiary)]",
                                                                children: "Status"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                                lineNumber: 703,
                                                                columnNumber: 11
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `flex w-full items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${statusInfo.class}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "w-1.5 h-1.5 rounded-full bg-current opacity-80"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                                        lineNumber: 709,
                                                                        columnNumber: 12
                                                                    }, this),
                                                                    statusInfo.label
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                                lineNumber: 706,
                                                                columnNumber: 11
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                        lineNumber: 702,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-[var(--text-tertiary)]",
                                                                children: "Risk level"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                                lineNumber: 714,
                                                                columnNumber: 11
                                                            }, this),
                                                            Array.from(groupedApproverRiskAssessments.values()).map((assessment, idx)=>{
                                                                const score = Number(assessment.riskScore ?? 0);
                                                                const safeLvl = normalizeRiskLevel(assessment.riskLevel);
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-col gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-[var(--text-tertiary)]",
                                                                            children: [
                                                                                assessment.approverName,
                                                                                " (Level ",
                                                                                assessment.level,
                                                                                " approver)"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                                            lineNumber: 722,
                                                                            columnNumber: 11
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `flex w-full items-center gap-1 px-2 py-1 rounded text-[11px] font-semibold ${riskColors[riskKey(safeLvl).toLowerCase()].badge}`,
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RiskIcon, {
                                                                                    level: riskKey(safeLvl).toLowerCase()
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                                                    lineNumber: 727,
                                                                                    columnNumber: 12
                                                                                }, this),
                                                                                safeLvl.charAt(0).toUpperCase() + safeLvl.slice(1),
                                                                                " (score: ",
                                                                                score,
                                                                                "/100)"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                                            lineNumber: 723,
                                                                            columnNumber: 11
                                                                        }, this)
                                                                    ]
                                                                }, `${assessment.approverId}-${assessment.level}`, true, {
                                                                    fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                                    lineNumber: 721,
                                                                    columnNumber: 18
                                                                }, this);
                                                            })
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                        lineNumber: 713,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col gap-1 col-span-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-[var(--text-tertiary)]",
                                                                children: "Notes / Reference"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                                lineNumber: 735,
                                                                columnNumber: 11
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-[var(--bg-tertiary)] rounded-lg px-4 py-3 text-[13px] text-[var(--text-secondary)] leading-relaxed border border-[var(--border-secondary)]",
                                                                children: detail.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                                lineNumber: 738,
                                                                columnNumber: 11
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                        lineNumber: 734,
                                                        columnNumber: 10
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                lineNumber: 685,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                        lineNumber: 681,
                                        columnNumber: 8
                                    }, this),
                                    groupedApproverRiskAssessments.size > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[11px] font-semibold uppercase tracking-widest text-[var(--text-tertiary)] mb-3 pb-2 border-b border-[var(--border-secondary)]",
                                                children: "Risk assessment by approver"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                lineNumber: 747,
                                                columnNumber: 10
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-4",
                                                children: Array.from(groupedApproverRiskAssessments.values()).map((assessment, idx)=>{
                                                    const score = Number(assessment.riskScore ?? 0);
                                                    const safeLvl = normalizeRiskLevel(assessment.riskLevel);
                                                    const alerts = riskRowsFromFactors(Array.isArray(assessment.riskFactors) ? assessment.riskFactors : []);
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-lg border border-[var(--border-secondary)] p-3 bg-[var(--bg-tertiary)]/40",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between mb-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-sm font-semibold text-[var(--text-primary)]",
                                                                        children: [
                                                                            assessment.approverName || "Unknown approver",
                                                                            " (Level ",
                                                                            assessment.level,
                                                                            " approver)"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                                        lineNumber: 766,
                                                                        columnNumber: 15
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `text-xs font-semibold px-2 py-0.5 rounded ${riskColors[safeLvl].badge}`,
                                                                        children: [
                                                                            String(safeLvl).toUpperCase(),
                                                                            " (",
                                                                            score,
                                                                            ")"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                                        lineNumber: 769,
                                                                        columnNumber: 15
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                                lineNumber: 765,
                                                                columnNumber: 14
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-col gap-2",
                                                                children: alerts.length > 0 ? alerts.map((alert, i)=>{
                                                                    const rk = alert.level in riskColors ? alert.level : "low";
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `flex items-center gap-3 p-2 rounded-lg ${riskColors[rk].alert}`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: `w-6 h-6 rounded-md flex items-center justify-center shrink-0 ${riskColors[rk].icon}`,
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RiskIcon, {
                                                                                    level: rk
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                                                    lineNumber: 788,
                                                                                    columnNumber: 20
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                                                lineNumber: 785,
                                                                                columnNumber: 19
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex-1 min-w-0",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "text-[13px] font-medium text-[var(--text-primary)]",
                                                                                        children: alert.title
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                                                        lineNumber: 791,
                                                                                        columnNumber: 20
                                                                                    }, this),
                                                                                    alert.description.trim() !== "" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "text-xs text-[var(--text-secondary)] mt-0.5",
                                                                                        children: alert.description
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                                                        lineNumber: 795,
                                                                                        columnNumber: 21
                                                                                    }, this) : null
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                                                lineNumber: 790,
                                                                                columnNumber: 19
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: `text-xs font-semibold font-mono shrink-0 ${riskColors[rk].score}`,
                                                                                children: [
                                                                                    "+",
                                                                                    alert.score
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                                                lineNumber: 800,
                                                                                columnNumber: 19
                                                                            }, this)
                                                                        ]
                                                                    }, `${assessment.approverName || "a"}-${i}`, true, {
                                                                        fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                                        lineNumber: 781,
                                                                        columnNumber: 18
                                                                    }, this);
                                                                }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-[var(--text-tertiary)]",
                                                                    children: "No detailed risk factors captured."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                                    lineNumber: 809,
                                                                    columnNumber: 16
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                                lineNumber: 775,
                                                                columnNumber: 14
                                                            }, this)
                                                        ]
                                                    }, `${assessment.approverId || assessment.approverName || "risk"}-${idx}`, true, {
                                                        fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                        lineNumber: 761,
                                                        columnNumber: 13
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                lineNumber: 750,
                                                columnNumber: 10
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                        lineNumber: 746,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[11px] font-semibold uppercase tracking-widest text-[var(--text-tertiary)] mb-3 pb-2 border-b border-[var(--border-secondary)]",
                                                children: [
                                                    "Approval status (",
                                                    approvedCount,
                                                    "/",
                                                    requiredApprovals,
                                                    " tracked)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                lineNumber: 822,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-2 bg-[var(--bg-tertiary)] rounded-full overflow-hidden flex",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-full bg-emerald-500 transition-all",
                                                                style: {
                                                                    width: `${approvedWithSkippedCount / totalApprovers * 100}%`
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                                lineNumber: 827,
                                                                columnNumber: 11
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-full bg-red-500 transition-all",
                                                                style: {
                                                                    width: `${rejectedCount / totalApprovers * 100}%`
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                                lineNumber: 833,
                                                                columnNumber: 11
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-full bg-[var(--bg-secondary)] transition-all",
                                                                style: {
                                                                    width: `${pendingCount / totalApprovers * 100}%`
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                                lineNumber: 839,
                                                                columnNumber: 11
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                        lineNumber: 826,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between mt-2 text-xs text-[var(--text-tertiary)]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    approvedCount,
                                                                    " approved"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                                lineNumber: 847,
                                                                columnNumber: 11
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    pendingCount,
                                                                    " pending"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                                lineNumber: 848,
                                                                columnNumber: 11
                                                            }, this),
                                                            rejectedCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    rejectedCount,
                                                                    " rejected"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                                lineNumber: 850,
                                                                columnNumber: 12
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                        lineNumber: 846,
                                                        columnNumber: 10
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                lineNumber: 825,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-3",
                                                children: uiApprovers.map((approver, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3 px-4 py-3 bg-[var(--bg-tertiary)] rounded-lg border border-[var(--border-secondary)]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `w-10 h-10 rounded-[10px] flex items-center justify-center text-sm font-semibold shrink-0 ${approverAvatarColors[approver.status]}`,
                                                                children: approver.initials
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                                lineNumber: 860,
                                                                columnNumber: 12
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1 min-w-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-[14px] font-medium text-[var(--text-primary)] truncate",
                                                                        children: approver.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                                        lineNumber: 866,
                                                                        columnNumber: 13
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-xs text-[var(--text-tertiary)]",
                                                                        children: approver.role
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                                        lineNumber: 869,
                                                                        columnNumber: 13
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                                lineNumber: 865,
                                                                columnNumber: 12
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-right shrink-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `text-xs font-medium px-2.5 py-1 rounded-full ${approverBadgeColors[approver.status]}`,
                                                                        children: approver.status.charAt(0).toUpperCase() + approver.status.slice(1)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                                        lineNumber: 874,
                                                                        columnNumber: 13
                                                                    }, this),
                                                                    approver.time && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-[11px] text-[var(--text-tertiary)] mt-1",
                                                                        children: approver.time
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                                        lineNumber: 881,
                                                                        columnNumber: 14
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                                lineNumber: 873,
                                                                columnNumber: 12
                                                            }, this)
                                                        ]
                                                    }, `${approver.name}-${i}`, true, {
                                                        fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                        lineNumber: 856,
                                                        columnNumber: 11
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                lineNumber: 854,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                        lineNumber: 821,
                                        columnNumber: 8
                                    }, this),
                                    timeline.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[11px] font-semibold uppercase tracking-widest text-[var(--text-tertiary)] mb-3 pb-2 border-b border-[var(--border-secondary)]",
                                                children: "Activity timeline"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                lineNumber: 893,
                                                columnNumber: 10
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative pl-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute left-[7px] top-2 bottom-2 w-0.5 bg-[var(--border-secondary)]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                        lineNumber: 897,
                                                        columnNumber: 11
                                                    }, this),
                                                    timeline.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative pb-4 last:pb-0",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `absolute -left-6 top-1 w-4 h-4 rounded-full flex items-center justify-center ${timelineDotColors[item.type]}`,
                                                                    children: [
                                                                        item.type === "success" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            className: "w-2.5 h-2.5 text-white",
                                                                            viewBox: "0 0 24 24",
                                                                            fill: "none",
                                                                            stroke: "currentColor",
                                                                            strokeWidth: "3",
                                                                            "aria-hidden": true,
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                                                                                    children: "Completed"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                                                    lineNumber: 912,
                                                                                    columnNumber: 16
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                                    points: "20 6 9 17 4 12"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                                                    lineNumber: 913,
                                                                                    columnNumber: 16
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                                            lineNumber: 904,
                                                                            columnNumber: 15
                                                                        }, this),
                                                                        item.type === "error" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            className: "w-2.5 h-2.5 text-white",
                                                                            viewBox: "0 0 24 24",
                                                                            fill: "none",
                                                                            stroke: "currentColor",
                                                                            strokeWidth: "3",
                                                                            "aria-hidden": true,
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                                                                                    children: "Failed"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                                                    lineNumber: 925,
                                                                                    columnNumber: 16
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                                    x1: "18",
                                                                                    y1: "6",
                                                                                    x2: "6",
                                                                                    y2: "18"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                                                    lineNumber: 926,
                                                                                    columnNumber: 16
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                                    x1: "6",
                                                                                    y1: "6",
                                                                                    x2: "18",
                                                                                    y2: "18"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                                                    lineNumber: 927,
                                                                                    columnNumber: 16
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                                            lineNumber: 917,
                                                                            columnNumber: 15
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                                    lineNumber: 900,
                                                                    columnNumber: 13
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "pl-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-[13px] font-medium text-[var(--text-primary)]",
                                                                            children: item.event
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                                            lineNumber: 932,
                                                                            columnNumber: 14
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-[11px] text-[var(--text-tertiary)] mt-0.5",
                                                                            children: [
                                                                                dateLabel,
                                                                                " ",
                                                                                item.time
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                                            lineNumber: 935,
                                                                            columnNumber: 14
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                                    lineNumber: 931,
                                                                    columnNumber: 13
                                                                }, this)
                                                            ]
                                                        }, `${item.event}-${i}`, true, {
                                                            fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                            lineNumber: 899,
                                                            columnNumber: 12
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                                lineNumber: 896,
                                                columnNumber: 10
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                        lineNumber: 892,
                                        columnNumber: 9
                                    }, this)
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                        lineNumber: 618,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6 py-4 border-t border-[var(--border-secondary)] flex flex-wrap justify-end gap-3 shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onClose,
                                className: "inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-secondary)] hover:bg-[var(--bg-hover)] transition-all",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                lineNumber: 949,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    onAuditLog(transactionId);
                                    onClose();
                                },
                                className: "inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-all",
                                children: "Open audit log"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                                lineNumber: 956,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                        lineNumber: 948,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
                lineNumber: 578,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/transactions/TransactionModal.tsx",
        lineNumber: 571,
        columnNumber: 3
    }, this);
}
_s(TransactionDetailModal, "xHY60ceD5io52qg+TZ14q+0D04k=");
_c1 = TransactionDetailModal;
var _c, _c1;
__turbopack_context__.k.register(_c, "RiskIcon");
__turbopack_context__.k.register(_c1, "TransactionDetailModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(admin)/utils/riskContext.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(admin)/transactions/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TransactionsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-client] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/history.js [app-client] (ecmascript) <export default as History>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js [app-client] (ecmascript) <export default as MoreVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$octagon$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__OctagonAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/octagon-alert.js [app-client] (ecmascript) <export default as OctagonAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$adminService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/adminService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$transactions$2f$TransactionModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/transactions/TransactionModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$utils$2f$riskContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/utils/riskContext.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function statusLabel(s) {
    const m = {
        pending: "Pending",
        completed: "Completed",
        approved: "Approved",
        rejected: "Rejected",
        skipped: "Skipped"
    };
    return m[s] || s;
}
function statusClass(s) {
    if (s === "completed" || s === "approved") return "bg-[var(--success-muted)] text-[var(--success)]";
    if (s === "rejected") return "bg-[var(--error-muted)] text-[var(--error)]";
    if (s === "pending") return "bg-[var(--warning-muted)] text-[var(--warning)]";
    return "bg-[var(--bg-tertiary)] text-[var(--text-secondary)]";
}
function riskClass(level) {
    const l = level.toLowerCase();
    if (l === "critical" || l === "high") return "bg-[var(--error-muted)] text-[var(--error)]";
    if (l === "medium") return "bg-[var(--warning-muted)] text-[var(--warning)]";
    return "bg-[var(--success-muted)] text-[var(--success)]";
}
function normalizeApproverStatus(raw) {
    const s = (raw || "").toLowerCase();
    if ([
        "approved",
        "done",
        "complete",
        "completed",
        "success"
    ].includes(s)) return "approved";
    if ([
        "rejected",
        "denied",
        "failed"
    ].includes(s)) return "rejected";
    if (s === "skipped") return s;
    return "pending";
}
function formatTxnDate(iso) {
    const d = new Date(iso);
    return d.toLocaleDateString("en-MY", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });
}
function formatTxnTime(iso) {
    return new Date(iso).toLocaleTimeString("en-MY", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
    });
}
function RiskLevelBadge({ level, score }) {
    const l = level.toLowerCase();
    const label = l.charAt(0).toUpperCase() + l.slice(1);
    let icon = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
        className: "w-3 h-3 shrink-0",
        strokeWidth: 2.5
    }, void 0, false, {
        fileName: "[project]/app/(admin)/transactions/page.tsx",
        lineNumber: 119,
        columnNumber: 13
    }, this);
    let wrap = "bg-emerald-500/15 text-emerald-400 border border-emerald-500/25";
    if (l === "medium") {
        icon = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
            className: "w-3 h-3 shrink-0",
            strokeWidth: 2
        }, void 0, false, {
            fileName: "[project]/app/(admin)/transactions/page.tsx",
            lineNumber: 122,
            columnNumber: 10
        }, this);
        wrap = "bg-amber-500/15 text-amber-400 border border-amber-500/25";
    }
    if (l === "high") {
        icon = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
            className: "w-3 h-3 shrink-0",
            strokeWidth: 2
        }, void 0, false, {
            fileName: "[project]/app/(admin)/transactions/page.tsx",
            lineNumber: 126,
            columnNumber: 10
        }, this);
        wrap = "bg-orange-500/15 text-orange-400 border border-orange-500/25";
    }
    if (l === "critical") {
        icon = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$octagon$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__OctagonAlert$3e$__["OctagonAlert"], {
            className: "w-3 h-3 shrink-0",
            strokeWidth: 2
        }, void 0, false, {
            fileName: "[project]/app/(admin)/transactions/page.tsx",
            lineNumber: 130,
            columnNumber: 10
        }, this);
        wrap = "bg-red-500/15 text-red-400 border border-red-500/25";
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold ${wrap}`,
        children: [
            icon,
            label,
            " (",
            score,
            ")"
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/transactions/page.tsx",
        lineNumber: 134,
        columnNumber: 3
    }, this);
}
_c = RiskLevelBadge;
function TransactionStatusPill({ status }) {
    const s = status.toLowerCase();
    const label = statusLabel(s);
    let dot = "bg-amber-500";
    let wrap = "bg-amber-500/15 text-amber-400";
    if (s === "approved" || s === "completed") {
        dot = "bg-emerald-500";
        wrap = "bg-emerald-500/15 text-emerald-400";
    }
    if (s === "rejected") {
        dot = "bg-red-500";
        wrap = "bg-red-500/15 text-red-400";
    }
    if (s === "processing") {
        dot = "bg-blue-500";
        wrap = "bg-blue-500/15 text-blue-400";
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `inline-flex items-center gap-1.5 pl-2.5 pr-3 py-1 rounded-full text-[12px] font-medium ${wrap}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `w-1.5 h-1.5 rounded-full shrink-0 ${dot}`
            }, void 0, false, {
                fileName: "[project]/app/(admin)/transactions/page.tsx",
                lineNumber: 164,
                columnNumber: 4
            }, this),
            label
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/transactions/page.tsx",
        lineNumber: 161,
        columnNumber: 3
    }, this);
}
_c1 = TransactionStatusPill;
function ApproverChip({ name, status }) {
    const st = normalizeApproverStatus(status);
    const initials = name.split(" ").map((w)=>w[0]).join("").slice(0, 2).toUpperCase();
    let chip = "border border-[var(--border-default)] bg-transparent";
    let avatar = "bg-amber-500 text-white";
    let iconWrap = "text-amber-400";
    if (st === "approved") {
        chip = "border border-emerald-500/30 bg-emerald-500/10";
        avatar = "bg-emerald-500 text-white";
        iconWrap = "text-emerald-400";
    }
    if (st === "rejected") {
        chip = "border border-red-500/30 bg-red-500/10";
        avatar = "bg-red-500 text-white";
        iconWrap = "text-red-400";
    }
    if (st === "skipped") {
        chip = "border border-slate-500/30 bg-slate-500/10";
        avatar = "bg-slate-500 text-white";
        iconWrap = "text-slate-400";
    }
    const endIcon = st === "approved" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
        className: "w-4 h-4",
        strokeWidth: 2.5
    }, void 0, false, {
        fileName: "[project]/app/(admin)/transactions/page.tsx",
        lineNumber: 204,
        columnNumber: 4
    }, this) : st === "rejected" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
        className: "w-4 h-4",
        strokeWidth: 2.5
    }, void 0, false, {
        fileName: "[project]/app/(admin)/transactions/page.tsx",
        lineNumber: 206,
        columnNumber: 4
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
        className: "w-4 h-4",
        strokeWidth: 2
    }, void 0, false, {
        fileName: "[project]/app/(admin)/transactions/page.tsx",
        lineNumber: 208,
        columnNumber: 4
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `inline-flex items-center gap-2 pl-1.5 pr-3 py-1.5 rounded-full text-[13px] font-medium ${chip}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-semibold shrink-0 ${avatar}`,
                children: initials
            }, void 0, false, {
                fileName: "[project]/app/(admin)/transactions/page.tsx",
                lineNumber: 214,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[var(--text-primary)]",
                children: name
            }, void 0, false, {
                fileName: "[project]/app/(admin)/transactions/page.tsx",
                lineNumber: 219,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `flex items-center justify-center shrink-0 ${iconWrap}`,
                children: endIcon
            }, void 0, false, {
                fileName: "[project]/app/(admin)/transactions/page.tsx",
                lineNumber: 220,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/transactions/page.tsx",
        lineNumber: 211,
        columnNumber: 3
    }, this);
}
_c2 = ApproverChip;
function TransactionsPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [total, setTotal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [metrics, setMetrics] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [statusFilter, setStatusFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [riskFilter, setRiskFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [segmentFilter, setSegmentFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [dateRange, setDateRange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const pageSize = 20;
    const [detailTransactionId, setDetailTransactionId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [actionMenuId, setActionMenuId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TransactionsPage.useEffect": ()=>{
            if (!actionMenuId) return;
            const close = {
                "TransactionsPage.useEffect.close": (e)=>{
                    const t = e.target;
                    if (!t.closest(`[data-tx-menu="${actionMenuId}"]`)) setActionMenuId(null);
                }
            }["TransactionsPage.useEffect.close"];
            document.addEventListener("mousedown", close);
            return ({
                "TransactionsPage.useEffect": ()=>document.removeEventListener("mousedown", close)
            })["TransactionsPage.useEffect"];
        }
    }["TransactionsPage.useEffect"], [
        actionMenuId
    ]);
    const loadMetrics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TransactionsPage.useCallback[loadMetrics]": async ()=>{
            try {
                const m = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$adminService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminService"].getTransactionMetrics();
                setMetrics(m);
            } catch (e) {
                console.error(e);
            }
        }
    }["TransactionsPage.useCallback[loadMetrics]"], []);
    const load = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TransactionsPage.useCallback[load]": async ()=>{
            setLoading(true);
            try {
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$adminService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminService"].getTransactions({
                    search: search || undefined,
                    status: statusFilter || undefined,
                    risk: riskFilter || undefined,
                    segment: segmentFilter || undefined,
                    dateRange: dateRange || undefined,
                    page: currentPage,
                    pageSize
                });
                setItems(res.items || []);
                setTotal(res.total ?? 0);
            } catch (e) {
                console.error(e);
                setToast({
                    type: "err",
                    msg: "Failed to load transactions"
                });
            } finally{
                setLoading(false);
            }
        }
    }["TransactionsPage.useCallback[load]"], [
        search,
        statusFilter,
        riskFilter,
        segmentFilter,
        dateRange,
        currentPage
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TransactionsPage.useEffect": ()=>{
            loadMetrics();
        }
    }["TransactionsPage.useEffect"], [
        loadMetrics
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TransactionsPage.useEffect": ()=>{
            load();
        }
    }["TransactionsPage.useEffect"], [
        load
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TransactionsPage.useEffect": ()=>{
            if (!toast) return;
            const t = setTimeout({
                "TransactionsPage.useEffect.t": ()=>setToast(null)
            }["TransactionsPage.useEffect.t"], 3000);
            return ({
                "TransactionsPage.useEffect": ()=>clearTimeout(t)
            })["TransactionsPage.useEffect"];
        }
    }["TransactionsPage.useEffect"], [
        toast
    ]);
    const openDetail = (id)=>{
        setDetailTransactionId(id);
    };
    const totalPages = Math.max(1, Math.ceil(total / pageSize) || 1);
    const fmtMoney = (n, cur)=>`${cur} ${n.toLocaleString("en-MY", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full overflow-hidden bg-[var(--bg-primary)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "px-6 py-3 border-b border-[var(--border-secondary)] bg-[var(--bg-secondary)] flex justify-between items-center shrink-0 h-[60px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[var(--text-tertiary)]",
                                children: "Overview"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/transactions/page.tsx",
                                lineNumber: 318,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[var(--text-muted)]",
                                children: "/"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/transactions/page.tsx",
                                lineNumber: 319,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium text-[var(--text-primary)]",
                                children: "Transactions"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/transactions/page.tsx",
                                lineNumber: 320,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/transactions/page.tsx",
                        lineNumber: 317,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setToast({
                                        type: "ok",
                                        msg: "Export is not wired in this build."
                                    }),
                                className: "flex items-center gap-1.5 px-3.5 py-2 rounded-[var(--radius-md)] text-[13px] font-medium bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-primary)] hover:bg-[var(--bg-hover)] transition-all",
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
                                                children: "Export"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                lineNumber: 344,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                lineNumber: 345,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                points: "7 10 12 15 17 10"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                lineNumber: 346,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "12",
                                                y1: "15",
                                                x2: "12",
                                                y2: "3"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                lineNumber: 347,
                                                columnNumber: 8
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/transactions/page.tsx",
                                        lineNumber: 335,
                                        columnNumber: 7
                                    }, this),
                                    "Export"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/transactions/page.tsx",
                                lineNumber: 325,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    loadMetrics();
                                    load();
                                },
                                className: "flex items-center gap-1.5 px-3.5 py-2 rounded-[var(--radius-md)] text-[13px] font-medium bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-all",
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
                                                children: "Refresh"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                lineNumber: 368,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                points: "23 4 23 10 17 10"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                lineNumber: 369,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M20.49 15a9 9 0 1 1-2.12-9.36L23 10"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                lineNumber: 370,
                                                columnNumber: 8
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/transactions/page.tsx",
                                        lineNumber: 359,
                                        columnNumber: 7
                                    }, this),
                                    "Refresh"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/transactions/page.tsx",
                                lineNumber: 351,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/transactions/page.tsx",
                        lineNumber: 324,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/transactions/page.tsx",
                lineNumber: 316,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-auto p-6 flex flex-col gap-5",
                children: [
                    toast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `text-sm px-4 py-2 rounded-[var(--radius-md)] border shrink-0 ${toast.type === "ok" ? "border-[var(--success)]/30 bg-[var(--success-bg)] text-[var(--success)]" : "border-[var(--error)]/30 bg-[var(--error-bg)] text-[var(--error)]"}`,
                        children: [
                            toast.msg,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "ml-2 underline",
                                onClick: ()=>setToast(null),
                                children: "Dismiss"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/transactions/page.tsx",
                                lineNumber: 387,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/transactions/page.tsx",
                        lineNumber: 379,
                        columnNumber: 6
                    }, this),
                    metrics && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-[var(--radius-lg)] border border-[var(--border-secondary)] bg-[var(--bg-secondary)] p-4 border-t-[3px] border-t-amber-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[11px] font-medium uppercase tracking-wide text-[var(--text-tertiary)]",
                                        children: "Pending approval"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/transactions/page.tsx",
                                        lineNumber: 400,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl font-bold font-mono text-amber-500 mt-1",
                                        children: metrics.pendingApproval
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/transactions/page.tsx",
                                        lineNumber: 403,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-[var(--text-tertiary)] mt-1",
                                        children: "Last 24h"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/transactions/page.tsx",
                                        lineNumber: 406,
                                        columnNumber: 8
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/transactions/page.tsx",
                                lineNumber: 399,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-[var(--radius-lg)] border border-[var(--border-secondary)] bg-[var(--bg-secondary)] p-4 border-t-[3px] border-t-emerald-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[11px] font-medium uppercase tracking-wide text-[var(--text-tertiary)]",
                                        children: "Approved / completed"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/transactions/page.tsx",
                                        lineNumber: 411,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl font-bold font-mono text-emerald-500 mt-1",
                                        children: metrics.approvedToday
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/transactions/page.tsx",
                                        lineNumber: 414,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-[var(--text-tertiary)] mt-1",
                                        children: "Last 24h"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/transactions/page.tsx",
                                        lineNumber: 417,
                                        columnNumber: 8
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/transactions/page.tsx",
                                lineNumber: 410,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-[var(--radius-lg)] border border-[var(--border-secondary)] bg-[var(--bg-secondary)] p-4 border-t-[3px] border-t-red-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[11px] font-medium uppercase tracking-wide text-[var(--text-tertiary)]",
                                        children: "Rejected"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/transactions/page.tsx",
                                        lineNumber: 422,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl font-bold font-mono text-red-500 mt-1",
                                        children: metrics.rejectedToday
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/transactions/page.tsx",
                                        lineNumber: 425,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-[var(--text-tertiary)] mt-1",
                                        children: "Last 24h"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/transactions/page.tsx",
                                        lineNumber: 428,
                                        columnNumber: 8
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/transactions/page.tsx",
                                lineNumber: 421,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-[var(--radius-lg)] border border-[var(--border-secondary)] bg-[var(--bg-secondary)] p-4 border-t-[3px] border-t-orange-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[11px] font-medium uppercase tracking-wide text-[var(--text-tertiary)]",
                                        children: "High risk flagged"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/transactions/page.tsx",
                                        lineNumber: 433,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl font-bold font-mono text-orange-500 mt-1",
                                        children: metrics.highRiskFlagged
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/transactions/page.tsx",
                                        lineNumber: 436,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-[var(--text-tertiary)] mt-1",
                                        children: "Last 24h"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/transactions/page.tsx",
                                        lineNumber: 439,
                                        columnNumber: 8
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/transactions/page.tsx",
                                lineNumber: 432,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-[var(--radius-lg)] border border-[var(--border-secondary)] bg-[var(--bg-secondary)] p-4 border-t-[3px] border-t-blue-500 col-span-2 sm:col-span-1 lg:col-span-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[11px] font-medium uppercase tracking-wide text-[var(--text-tertiary)]",
                                        children: "Total volume (24h)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/transactions/page.tsx",
                                        lineNumber: 444,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xl font-bold font-mono text-blue-400 mt-1 truncate",
                                        children: fmtMoney(metrics.totalVolume24h, metrics.currency)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/transactions/page.tsx",
                                        lineNumber: 447,
                                        columnNumber: 8
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/transactions/page.tsx",
                                lineNumber: 443,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/transactions/page.tsx",
                        lineNumber: 398,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-[12px] border border-[var(--border-secondary)] bg-[var(--bg-secondary)] ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 py-3 border-b border-[var(--border-secondary)] flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
                                        className: "w-[18px] h-[18px] text-[var(--text-tertiary)] shrink-0",
                                        strokeWidth: 2,
                                        "aria-hidden": true
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/transactions/page.tsx",
                                        lineNumber: 456,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-semibold text-[var(--text-primary)]",
                                        children: "Transaction records"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/transactions/page.tsx",
                                        lineNumber: 461,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/transactions/page.tsx",
                                lineNumber: 455,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 flex flex-wrap gap-3 border-b border-[var(--border-secondary)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] px-3 py-2 min-w-[220px] flex-1 max-w-xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "16",
                                                height: "16",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                className: "text-[var(--text-tertiary)] shrink-0",
                                                "aria-hidden": true,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                                                        children: "Search"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                        lineNumber: 478,
                                                        columnNumber: 9
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "11",
                                                        cy: "11",
                                                        r: "8"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                        lineNumber: 479,
                                                        columnNumber: 9
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "21",
                                                        y1: "21",
                                                        x2: "16.65",
                                                        y2: "16.65"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                        lineNumber: 480,
                                                        columnNumber: 9
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                lineNumber: 468,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "search",
                                                placeholder: "Search by transaction ID, account, or name…",
                                                value: search,
                                                onChange: (e)=>{
                                                    setSearch(e.target.value);
                                                    setCurrentPage(1);
                                                },
                                                className: "w-full bg-transparent border-none outline-none text-[13px] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                lineNumber: 482,
                                                columnNumber: 8
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/transactions/page.tsx",
                                        lineNumber: 467,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: segmentFilter,
                                        onChange: (e)=>{
                                            setSegmentFilter(e.target.value);
                                            setCurrentPage(1);
                                        },
                                        className: "bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] px-3 py-2 text-[13px] text-[var(--text-primary)] outline-none min-w-[140px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "All segments"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                lineNumber: 501,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "individual",
                                                children: "Individual"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                lineNumber: 502,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "corporate",
                                                children: "Corporate"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                lineNumber: 503,
                                                columnNumber: 8
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/transactions/page.tsx",
                                        lineNumber: 493,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: statusFilter,
                                        onChange: (e)=>{
                                            setStatusFilter(e.target.value);
                                            setCurrentPage(1);
                                        },
                                        className: "bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] px-3 py-2 text-[13px] text-[var(--text-primary)] outline-none min-w-[130px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "All status"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                lineNumber: 513,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "pending",
                                                children: "Pending"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                lineNumber: 514,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "approved",
                                                children: "Approved"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                lineNumber: 515,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "rejected",
                                                children: "Rejected"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                lineNumber: 516,
                                                columnNumber: 8
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/transactions/page.tsx",
                                        lineNumber: 505,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: riskFilter,
                                        onChange: (e)=>{
                                            setRiskFilter(e.target.value);
                                            setCurrentPage(1);
                                        },
                                        className: "bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] px-3 py-2 text-[13px] text-[var(--text-primary)] outline-none min-w-[130px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "All risk levels"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                lineNumber: 526,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "low",
                                                children: "Low"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                lineNumber: 527,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "medium",
                                                children: "Medium"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                lineNumber: 528,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "high",
                                                children: "High"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                lineNumber: 529,
                                                columnNumber: 8
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/transactions/page.tsx",
                                        lineNumber: 518,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: dateRange,
                                        onChange: (e)=>{
                                            setDateRange(e.target.value);
                                            setCurrentPage(1);
                                        },
                                        className: "bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] px-3 py-2 text-[13px] text-[var(--text-primary)] outline-none min-w-[120px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "All time"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                lineNumber: 539,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "today",
                                                children: "Today"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                lineNumber: 540,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "yesterday",
                                                children: "Yesterday"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                lineNumber: 541,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "week",
                                                children: "This week"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                lineNumber: 542,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "month",
                                                children: "This month"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                lineNumber: 543,
                                                columnNumber: 8
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/transactions/page.tsx",
                                        lineNumber: 531,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/transactions/page.tsx",
                                lineNumber: 466,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-x-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "w-full text-left text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "border-b border-[var(--border-secondary)] bg-[var(--bg-tertiary)] text-[11px] uppercase tracking-wide text-[var(--text-tertiary)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-4 py-3 pl-5",
                                                        children: "Transaction ID"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                        lineNumber: 551,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-4 py-3",
                                                        children: "Date / time"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                        lineNumber: 552,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-4 py-3",
                                                        children: "From account"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                        lineNumber: 553,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-4 py-3",
                                                        children: "To account"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                        lineNumber: 554,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-4 py-3 text-right",
                                                        children: "Amount"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                        lineNumber: 555,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-4 py-3",
                                                        children: "Risk context"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                        lineNumber: 556,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-4 py-3",
                                                        children: "Status"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                        lineNumber: 557,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-4 py-3 w-12 text-right pr-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                        lineNumber: 558,
                                                        columnNumber: 10
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                lineNumber: 550,
                                                columnNumber: 9
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/transactions/page.tsx",
                                            lineNumber: 549,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: [
                                                loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        colSpan: 8,
                                                        className: "px-4 py-12 text-center text-[var(--text-tertiary)]",
                                                        children: "Loading…"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                        lineNumber: 564,
                                                        columnNumber: 11
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                    lineNumber: 563,
                                                    columnNumber: 10
                                                }, this),
                                                !loading && items.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        colSpan: 8,
                                                        className: "px-4 py-12 text-center text-[var(--text-tertiary)]",
                                                        children: "No transactions match your filters."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                        lineNumber: 574,
                                                        columnNumber: 11
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                    lineNumber: 573,
                                                    columnNumber: 10
                                                }, this),
                                                !loading && items.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                className: "peer border-b-0 border-[var(--border-secondary)] hover:bg-[var(--bg-hover)]/35 [&>td]:border-b-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-4 py-3 pl-5 align-top",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                onClick: ()=>openDetail(row.id),
                                                                                className: "font-mono text-[13px] text-[var(--accent)] hover:underline text-left",
                                                                                children: row.transactionNo || row.id
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                                                lineNumber: 587,
                                                                                columnNumber: 14
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-[10px] text-[var(--text-tertiary)] mt-0.5",
                                                                                children: row.segment === "corporate" ? "Corporate" : "Individual"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                                                lineNumber: 594,
                                                                                columnNumber: 14
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                                        lineNumber: 586,
                                                                        columnNumber: 13
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-4 py-3 align-top",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex flex-col gap-0.5",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-[13px] font-medium text-[var(--text-primary)]",
                                                                                    children: formatTxnDate(row.timestamp)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                                                    lineNumber: 602,
                                                                                    columnNumber: 15
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-[11px] font-mono text-[var(--text-tertiary)]",
                                                                                    children: formatTxnTime(row.timestamp)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                                                    lineNumber: 605,
                                                                                    columnNumber: 15
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                                            lineNumber: 601,
                                                                            columnNumber: 14
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                                        lineNumber: 600,
                                                                        columnNumber: 13
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-4 py-3 align-top",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex flex-col gap-0.5",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-[13px] font-medium text-[var(--text-primary)]",
                                                                                    children: row.fromAccount.name
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                                                    lineNumber: 612,
                                                                                    columnNumber: 15
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "font-mono text-[11px] text-[var(--text-tertiary)]",
                                                                                    children: row.fromAccount.detail
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                                                    lineNumber: 615,
                                                                                    columnNumber: 15
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-[11px] text-[var(--text-tertiary)]",
                                                                                    children: row.fromAccount.bank || "—"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                                                    lineNumber: 618,
                                                                                    columnNumber: 15
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                                            lineNumber: 611,
                                                                            columnNumber: 14
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                                        lineNumber: 610,
                                                                        columnNumber: 13
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-4 py-3 align-top",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex flex-col gap-0.5",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-[13px] font-medium text-[var(--text-primary)]",
                                                                                    children: row.toAccount.name
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                                                    lineNumber: 625,
                                                                                    columnNumber: 15
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "font-mono text-[11px] text-[var(--text-tertiary)]",
                                                                                    children: row.toAccount.number
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                                                    lineNumber: 628,
                                                                                    columnNumber: 15
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-[11px] text-[var(--text-tertiary)]",
                                                                                    children: row.toAccount.bank || "—"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                                                    lineNumber: 631,
                                                                                    columnNumber: 15
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                                            lineNumber: 624,
                                                                            columnNumber: 14
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                                        lineNumber: 623,
                                                                        columnNumber: 13
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-4 py-3 align-top text-right",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "inline-flex flex-col items-end gap-0.5",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-mono text-sm font-semibold text-[var(--text-primary)] tabular-nums",
                                                                                children: [
                                                                                    row.amount.toLocaleString("en-MY", {
                                                                                        minimumFractionDigits: 2,
                                                                                        maximumFractionDigits: 2
                                                                                    }),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-[11px] text-[var(--text-tertiary)] pl-0.5",
                                                                                        children: row.currency
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                                                        lineNumber: 643,
                                                                                        columnNumber: 16
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                                                lineNumber: 638,
                                                                                columnNumber: 15
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                                            lineNumber: 637,
                                                                            columnNumber: 14
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                                        lineNumber: 636,
                                                                        columnNumber: 13
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-4 py-3 align-top",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex flex-wrap gap-1.5 max-w-[280px]",
                                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$utils$2f$riskContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildRiskContextTags"])({
                                                                                amountLabel: `${row.amount.toLocaleString("en-MY", {
                                                                                    minimumFractionDigits: 2,
                                                                                    maximumFractionDigits: 2
                                                                                })} ${row.currency}`,
                                                                                riskLevel: row.riskLevel,
                                                                                factors: row.riskFactors
                                                                            }).map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: `px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wide ${tag.cls}`,
                                                                                    children: tag.label
                                                                                }, `${row.id}-${tag.label}`, false, {
                                                                                    fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                                                    lineNumber: 659,
                                                                                    columnNumber: 16
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                                            lineNumber: 650,
                                                                            columnNumber: 14
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                                        lineNumber: 649,
                                                                        columnNumber: 13
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-4 py-3 align-top",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TransactionStatusPill, {
                                                                            status: row.status
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                                            lineNumber: 669,
                                                                            columnNumber: 14
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                                        lineNumber: 668,
                                                                        columnNumber: 13
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-4 py-3 align-top text-right pr-5",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "relative inline-flex justify-end",
                                                                            "data-tx-menu": row.id,
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    type: "button",
                                                                                    "aria-label": "Row actions",
                                                                                    onClick: (e)=>{
                                                                                        e.stopPropagation();
                                                                                        setActionMenuId((id)=>id === row.id ? null : row.id);
                                                                                    },
                                                                                    className: "p-1.5 rounded-[var(--radius-md)] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)] transition-colors",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__["MoreVertical"], {
                                                                                        className: "w-[18px] h-[18px]",
                                                                                        strokeWidth: 2
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                                                        lineNumber: 687,
                                                                                        columnNumber: 16
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                                                    lineNumber: 676,
                                                                                    columnNumber: 15
                                                                                }, this),
                                                                                actionMenuId === row.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "absolute right-0 top-full z-30 mt-1 w-52 rounded-[var(--radius-md)] border border-[var(--border-secondary)] bg-[var(--bg-secondary)] py-1 shadow-xl",
                                                                                    "data-tx-menu": row.id,
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                            type: "button",
                                                                                            className: "flex w-full items-center gap-2 px-3 py-2 text-left text-[13px] text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)]",
                                                                                            onClick: ()=>{
                                                                                                setActionMenuId(null);
                                                                                                openDetail(row.id);
                                                                                            },
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                                                    className: "w-4 h-4 opacity-70"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                                                                    lineNumber: 705,
                                                                                                    columnNumber: 18
                                                                                                }, this),
                                                                                                "View details"
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                                                            lineNumber: 697,
                                                                                            columnNumber: 17
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                            type: "button",
                                                                                            className: "flex w-full items-center gap-2 px-3 py-2 text-left text-[13px] text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)]",
                                                                                            onClick: ()=>{
                                                                                                setActionMenuId(null);
                                                                                                router.push(`/auth-logs?transactionId=${encodeURIComponent(row.id)}`);
                                                                                            },
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"], {
                                                                                                    className: "w-4 h-4 opacity-70"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                                                                    lineNumber: 718,
                                                                                                    columnNumber: 18
                                                                                                }, this),
                                                                                                "Audit log"
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                                                            lineNumber: 708,
                                                                                            columnNumber: 17
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                                                    lineNumber: 693,
                                                                                    columnNumber: 16
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                                            lineNumber: 672,
                                                                            columnNumber: 14
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                                        lineNumber: 671,
                                                                        columnNumber: 13
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                                lineNumber: 585,
                                                                columnNumber: 12
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                className: "border-b border-[var(--border-secondary)] bg-[var(--bg-tertiary)]/50 peer-hover:bg-[var(--bg-tertiary)]/75 hover:bg-[var(--bg-tertiary)]/75",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    colSpan: 8,
                                                                    className: "px-5 py-3 bg-[#2d2d2d]/75",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-wrap gap-2 items-center",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[10px] font-semibold uppercase tracking-wide text-[var(--text-tertiary)] mr-1",
                                                                                children: [
                                                                                    "Approvers (",
                                                                                    row.approverCount || row.approvers?.length || 1,
                                                                                    ")"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                                                lineNumber: 729,
                                                                                columnNumber: 15
                                                                            }, this),
                                                                            (row.approvers?.length ? row.approvers : [
                                                                                {
                                                                                    id: "self",
                                                                                    name: "Payer",
                                                                                    status: "done",
                                                                                    level: 0
                                                                                }
                                                                            ]).map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ApproverChip, {
                                                                                    name: a.name,
                                                                                    status: a.status
                                                                                }, `${row.id}-${a.id}-${a.name}-${a.level}`, false, {
                                                                                    fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                                                    lineNumber: 737,
                                                                                    columnNumber: 16
                                                                                }, this))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                                        lineNumber: 728,
                                                                        columnNumber: 14
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                                    lineNumber: 727,
                                                                    columnNumber: 13
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                                lineNumber: 726,
                                                                columnNumber: 12
                                                            }, this)
                                                        ]
                                                    }, row.id, true, {
                                                        fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                        lineNumber: 584,
                                                        columnNumber: 11
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(admin)/transactions/page.tsx",
                                            lineNumber: 561,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(admin)/transactions/page.tsx",
                                    lineNumber: 548,
                                    columnNumber: 7
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/transactions/page.tsx",
                                lineNumber: 547,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 py-3 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border-secondary)] text-[13px] text-[var(--text-tertiary)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "Showing ",
                                            (currentPage - 1) * pageSize + 1,
                                            "–",
                                            Math.min(currentPage * pageSize, total),
                                            " of ",
                                            total
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/transactions/page.tsx",
                                        lineNumber: 753,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                disabled: currentPage <= 1,
                                                onClick: ()=>setCurrentPage((p)=>Math.max(1, p - 1)),
                                                className: "px-3.5 py-2 rounded-[var(--radius-md)] text-[13px] font-medium bg-[var(--bg-tertiary)] border border-[var(--border-primary)] text-[var(--text-primary)] hover:bg-[var(--bg-hover)] disabled:opacity-40 transition-all",
                                                children: "Prev"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                lineNumber: 758,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                disabled: currentPage >= totalPages,
                                                onClick: ()=>setCurrentPage((p)=>p + 1),
                                                className: "px-3.5 py-2 rounded-[var(--radius-md)] text-[13px] font-medium bg-[var(--bg-tertiary)] border border-[var(--border-primary)] text-[var(--text-primary)] hover:bg-[var(--bg-hover)] disabled:opacity-40 transition-all",
                                                children: "Next"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/transactions/page.tsx",
                                                lineNumber: 766,
                                                columnNumber: 8
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/transactions/page.tsx",
                                        lineNumber: 757,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/transactions/page.tsx",
                                lineNumber: 752,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/transactions/page.tsx",
                        lineNumber: 454,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/transactions/page.tsx",
                lineNumber: 377,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$transactions$2f$TransactionModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionDetailModal"], {
                isOpen: detailTransactionId !== null,
                transactionId: detailTransactionId,
                onClose: ()=>setDetailTransactionId(null),
                onAuditLog: (id)=>router.push(`/auth-logs?transactionId=${encodeURIComponent(id)}`)
            }, void 0, false, {
                fileName: "[project]/app/(admin)/transactions/page.tsx",
                lineNumber: 779,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/transactions/page.tsx",
        lineNumber: 315,
        columnNumber: 3
    }, this);
}
_s(TransactionsPage, "WW4GhW8GYBmvHEDNdU+dpYF0xB4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c3 = TransactionsPage;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "RiskLevelBadge");
__turbopack_context__.k.register(_c1, "TransactionStatusPill");
__turbopack_context__.k.register(_c2, "ApproverChip");
__turbopack_context__.k.register(_c3, "TransactionsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_3ec01b8f._.js.map