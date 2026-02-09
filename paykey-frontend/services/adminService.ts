import axios from 'axios';

// Sesuaikan URL dengan backend Express Anda
const API_URL = 'https://api.authkey.my/api/admin';

export const adminService = {
  // --- 1. AMOUNT THRESHOLDS ---
    getAmountLimits: async () => {
        const res = await axios.get(`${API_URL}/limits`);
        return res.data;
    },
    
    updateAmountLimit: async (id: string, data: any) => {
        const res = await axios.put(`${API_URL}/limits/${id}`, data);
        return res.data;
    },

    createAmountLimit: async (data: any) => {
        const res = await axios.post(`${API_URL}/limits`, data);
        return res.data;
    },

    deleteAmountLimit: async (id: string) => {
        const res = await axios.delete(`${API_URL}/limits/${id}`);
        return res.data;
    },

    getRiskRules: async () => {
        const res = await axios.get(`${API_URL}/risk-rules`);
        return res.data;
    },

    // [POST] Simpan Rules (Batch Update) - INI YANG BARU
    saveRiskConfigBatch: async (rules: any[]) => {
        const res = await axios.post(`${API_URL}/risk-rules/batch-update`, { rules });
        return res.data;
    },

    // [GET] Thresholds
    getRiskConfig: async () => {
        const res = await axios.get(`${API_URL}/risk-config`);
        return res.data;
    },

    // [PUT] Update Thresholds
    updateRiskConfig: async (data: any) => {
        const res = await axios.put(`${API_URL}/risk-config`, data);
        return res.data;
    },
    // --- 3. AUTH POLICIES ---
    getPolicies: async () => {
        const res = await axios.get(`${API_URL}/policies`);
        return res.data;
    },

    upsertPolicy: async (payload: any) => {
        const res = await axios.post(`${API_URL}/policies`, payload);
        return res.data;
    },

    getPolicyAuditLogs: async () => {
        const res = await axios.get(`${API_URL}/policies/audit`);
        return res.data;
    },

    // --- 4. INVESTIGATION & LOGS ---
    getTransactions: async () => {
        const res = await axios.get(`${API_URL}/transactions`);
        return res.data;
    },

    getTransactionDetail: async (id: string) => {
        const res = await axios.get(`${API_URL}/transactions/${id}`);
        return res.data;
    }
    ,
    getAuthLogs: async () => {
        const res = await axios.get(`${API_URL}/logs`);
        return res.data;
    },
    getDashboardStats: async (range: string) => {
    const res = await axios.get(`${API_URL}/dashboard`, { 
        params: { timeRange: range } 
    });
    return res.data;
    },
    // 1. Fetch Evidence (Cepat)    
    async getTransactionEvidence(id: string) {
        const res = await fetch(`${API_URL}/transactions/${id}/evidence`);
        if (!res.ok) throw new Error('Failed to load evidence');
        return res.json();
    },

    // 2. Fetch Analysis (Lambat)
    async getInvestigationReport(id: string) {
        const res = await fetch(`${API_URL}/transactions/${id}/investigate`);
        if (!res.ok) throw new Error('Failed to load analysis');
        return res.json();
    }
};