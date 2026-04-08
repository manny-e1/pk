import { apiClient } from "@/lib/apiClient";

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
		const res = await apiClient.post("/api/admin/risk-rules", {
			rules: rulesPayload,
		});
		return res.data;
	},

	updateRiskConfig: async (payload: {
		segment: string;
		lowScore: number;
		highScore: number;
	}) => {
		const res = await apiClient.post("/api/admin/risk-config", payload);
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

	getTransactions: async (params?: {
		search?: string;
		status?: string;
		risk?: string;
		segment?: string;
		dateRange?: string;
		page?: number;
		pageSize?: number;
	}) => {
		const res = await apiClient.get(`/api/admin/transactions`, { params });
		return res.data;
	},

	getTransactionMetrics: async () => {
		const res = await apiClient.get(`/api/admin/transactions/metrics`);
		return res.data;
	},

	getTransactionDetail: async (id: string) => {
		const res = await apiClient.get(`/api/admin/transactions/${id}`);
		return res.data;
	},

	getAuthLogs: async (eventType?: string, transactionId?: string) => {
		const res = await apiClient.get(`/api/admin/logs`, {
			params: { eventType, transactionId },
		});
		return res.data;
	},

	getDashboardStats: async (range: string) => {
		const res = await apiClient.get(`/api/admin/dashboard`, {
			params: { timeRange: range },
		});
		return res.data;
	},

	getTransactionEvidence: async (id: string) => {
		const res = await apiClient.get(`/api/admin/transactions/${id}/evidence`);
		return res.data;
	},

	getInvestigationReport: async (id: string) => {
		const res = await apiClient.get(
			`/api/admin/transactions/${id}/investigate`,
		);
		return res.data;
	},

	getTotpInventory: async () => {
		const res = await apiClient.get(`/api/admin/totp-inventory`);
		return res.data;
	},

	importTotpBatch: async (formData: FormData) => {
		const res = await apiClient.post(
			`/api/admin/totp-inventory/import`,
			formData,
			{
				headers: {
					"Content-Type": "multipart/form-data",
				},
			},
		);
		return res.data;
	},
	updateTotpStatus: async (serial: string, status: string) => {
		const res = await apiClient.put(
			`/api/admin/totp-inventory/${serial}/status`,
			{ status },
		);
		return res.data;
	},
	assignTotpToken: async (
		serial: string,
		userId: string,
		verificationCode: string,
	) => {
		const res = await apiClient.post(
			`/api/admin/totp-inventory/${serial}/assign`,
			{
				userId,
				verificationCode, // <-- Kirimkan ke Backend
			},
		);
		return res.data;
	},
	unassignTotpToken: async (serial: string) => {
		const res = await apiClient.post(
			`/api/admin/totp-inventory/${serial}/unassign`,
		);
		return res.data;
	},
	searchUsers: async (query: string) => {
		const res = await apiClient.get(`/api/users`, {
			params: { search: query },
		});
		return res.data;
	},

	getCompanies: async (params?: {
		search?: string;
		industry?: string;
		status?: string;
		page?: number;
		pageSize?: number;
	}) => {
		const res = await apiClient.get(`/api/admin/companies`, { params });
		return res.data;
	},

	getCompany: async (companyId: string) => {
		const res = await apiClient.get(`/api/admin/companies/${companyId}`);
		return res.data;
	},

	listCompanyUsers: async (companyId: string) => {
		const res = await apiClient.get(`/api/admin/companies/${companyId}/users`);
		return res.data;
	},

	getCompanyStats: async () => {
		const res = await apiClient.get(`/api/admin/companies/stats`);
		return res.data;
	},

	createCompany: async (data: {
		name: string;
		registrationNo: string;
		address: string;
		industry: string;
		status?: string;
		personnel?: {
			fullName?: string;
			name?: string;
			email: string;
			mobile?: string;
			phone?: string;
		}[];
	}) => {
		const res = await apiClient.post(`/api/admin/companies`, data);
		return res.data;
	},

	updateCompany: async (
		companyId: string,
		data: Partial<{
			name: string;
			registrationNo: string;
			address: string;
			industry: string;
			status: string;
			personnel: {
				fullName?: string;
				name?: string;
				email: string;
				mobile?: string;
				phone?: string;
			}[];
		}>,
	) => {
		const res = await apiClient.put(`/api/admin/companies/${companyId}`, data);
		return res.data;
	},

	deleteCompany: async (companyId: string) => {
		const res = await apiClient.delete(`/api/admin/companies/${companyId}`);
		return res.data;
	},

	listCompanyWorkflows: async (companyId: string) => {
		const res = await apiClient.get(`/api/admin/companies/${companyId}/workflows`);
		return res.data;
	},

	createWorkflow: async (
		companyId: string,
		payload: {
			name: string;
			levels: {
				mode: string;
				nOfM?: number | null;
				levelOrder?: number;
				userIds: string[];
			}[];
		},
	) => {
		const res = await apiClient.post(
			`/api/admin/companies/${companyId}/workflows`,
			payload,
		);
		return res.data;
	},

	getWorkflow: async (workflowId: string) => {
		const res = await apiClient.get(`/api/admin/workflows/${workflowId}`);
		return res.data;
	},

	updateWorkflow: async (
		workflowId: string,
		payload: {
			name?: string;
			levels: {
				mode: string;
				nOfM?: number | null;
				levelOrder?: number;
				userIds: string[];
			}[];
		},
	) => {
		const res = await apiClient.put(
			`/api/admin/workflows/${workflowId}`,
			payload,
		);
		return res.data;
	},

	deleteWorkflow: async (workflowId: string) => {
		const res = await apiClient.delete(`/api/admin/workflows/${workflowId}`);
		return res.data;
	},
};
