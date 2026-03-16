import { apiClient } from '@/lib/apiClient';

export const adminService = {

    getAmountLimits: async () => {
        const res = await apiClient.get(`/api/admin/limits`);
        return res.data;
    },
    
    updateAmountLimit: async (id: string, data: any) => {
        const res = await apiClient.put(`/api/admin/limits/${id}`, data);
        return res.data;
    },

    createAmountLimit: async (data: any) => {
        const res = await apiClient.post(`/api/admin/limits`, data);
        return res.data;
    },

    deleteAmountLimit: async (id: string) => {
        const res = await apiClient.delete(`/api/admin/limits/${id}`);
        return res.data;
    },

    getRiskRules: async () => {
        const res = await apiClient.get(`/api/admin/risk-rules`);
        return res.data;
    },

    getRiskConfig: async () => {
        const res = await apiClient.get(`/api/admin/risk-config`);
        return res.data;
    },

    saveRiskConfigBatch: async (rulesPayload: any[]) => {
        const res = await apiClient.post('/api/admin/risk-rules', { 
            rules: rulesPayload 
        });
        return res.data;
    },

    updateRiskConfig: async (payload: { segment: string, lowScore: number, highScore: number }) => {
        const res = await apiClient.post('/api/admin/risk-config', payload);
        return res.data;
    },
    
    getPolicies: async () => {
        const res = await apiClient.get(`/api/admin/policies`);
        return res.data;
    },

    upsertPolicy: async (payload: any) => {
        const res = await apiClient.post(`/api/admin/policies`, payload);
        return res.data;
    },

    getPolicyAuditLogs: async () => {
        const res = await apiClient.get(`/api/admin/policies/audit`);
        return res.data;
    },

    getTransactions: async () => {
        const res = await apiClient.get(`/api/admin/transactions`);
        return res.data;
    },

    getTransactionDetail: async (id: string) => {
        const res = await apiClient.get(`/api/admin/transactions/${id}`);
        return res.data;
    },

    getAuthLogs: async () => {
        const res = await apiClient.get(`/api/admin/logs`);
        return res.data;
    },

    getDashboardStats: async (range: string) => {
        const res = await apiClient.get(`/api/admin/dashboard`, { 
            params: { timeRange: range } 
        });
        return res.data;
    },

    getTransactionEvidence: async (id: string) => {
        const res = await apiClient.get(`/api/admin/transactions/${id}/evidence`);
        return res.data;
    },

    getInvestigationReport: async (id: string) => {
        const res = await apiClient.get(`/api/admin/transactions/${id}/investigate`);
        return res.data;
    },

    getTotpInventory: async () => {
        const res = await apiClient.get(`/api/admin/totp-inventory`);
        return res.data;
    },

    importTotpBatch: async (formData: FormData) => {
        const res = await apiClient.post(`/api/admin/totp-inventory/import`, formData);
        return res.data;
    },
    updateTotpStatus: async (serial: string, status: string) => {
        const res = await apiClient.put(`/api/admin/totp-inventory/${serial}/status`, { status });
        return res.data;
    },
    assignTotpToken: async (serial: string, userId: string) => {
        const res = await apiClient.post(`/api/admin/totp-inventory/${serial}/assign`, { userId });
        return res.data;
    },
    unassignTotpToken: async (serial: string) => {
        const res = await apiClient.post(`/api/admin/totp-inventory/${serial}/unassign`);
        return res.data;
    },
};