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
import { apiClient } from '@/lib/apiClient';

export const adminService = {
  // --- 1. AMOUNT THRESHOLDS ---
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

    getRiskRules: async () => {
        const res = await apiClient.get(`/api/admin/risk-rules`);
        return res.data;
    },

    getRiskConfig: async () => {
        const res = await apiClient.get(`/api/admin/risk-config`);
        return res.data;
    },

    saveRiskConfigBatch: async (rulesPayload: any[]) => {
        // Cukup kirimkan object { rules: rulesPayload } langsung sebagai parameter kedua
        const res = await apiClient.post('/api/admin/risk-rules', { 
            rules: rulesPayload 
        });
        return res.data;
    },

    updateRiskConfig: async (payload: { segment: string, lowScore: number, highScore: number }) => {
        // Cukup kirimkan variable payload langsung sebagai parameter kedua
        const res = await apiClient.post('/api/admin/risk-config', payload);
        return res.data;
    },
    
    // --- 3. AUTH POLICIES ---
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

    // --- 4. INVESTIGATION & LOGS ---
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
    }
};