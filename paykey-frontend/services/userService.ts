import { apiClient } from '@/lib/apiClient';

export interface Device {
  id: string;
  name: string;
  model: string;
  type: 'mobile' | 'desktop' | 'hardware';
  status: 'active' | 'suspended' | 'revoked';
  lastUsed: string;
}

export interface User {
  id: string;
  name: string;
  initials: string;
  email: string;
  mobile: string;
  status: 'active' | 'suspended';
  joined: string;
  lastActive: string;
  devices: Device[];
}

export const userService = {
  getAll: async (): Promise<User[]> => {
    try {
      const { data } = await apiClient.get('/api/users');
      return data;
    } catch (error) {
      console.error("Failed to fetch users:", error);
      throw error;
    }
  },

  updateStatus: async (userId: string, status: 'active' | 'suspended', reason?: string | null, note?: string | null) => {
    try {
      const payload = { status, reason, note };
      const { data } = await apiClient.put(`/api/users/${userId}/status`, payload);
      return data;
    } catch (error) {
      console.error("Failed to update user status:", error);
      throw error;
    }
  }
};