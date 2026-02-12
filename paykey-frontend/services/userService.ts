import axios from 'axios';

// --- TYPES (Dipindahkan ke sini agar bisa dipakai ulang) ---
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

// Setup Axios dengan Base URL dan Credentials
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.authkey.my';

const apiClient = axios.create({
  baseURL: API_URL,
  withCredentials: true, // WAJIB: Agar cookie auth_token terkirim ke backend
  headers: {
    'Content-Type': 'application/json',
  },
});

export const userService = {
  // 1. GET ALL USERS
  getAll: async (): Promise<User[]> => {
    try {
      // Backend route: GET /api/users
      // Jika endpoint backend anda adalah /users (tanpa /api), sesuaikan di sini
      const { data } = await apiClient.get('/api/users');
      return data;
    } catch (error) {
      console.error("Failed to fetch users:", error);
      throw error;
    }
  },

  // 2. UPDATE STATUS (Suspend/Reactivate)
  updateStatus: async (userId: string, status: 'active' | 'suspended', reason?: string | null, note?: string | null) => {
    try {
      const payload = {
        status,
        reason,
        note
      };
      
      // Backend route: PUT /api/users/:id/status
      const { data } = await apiClient.put(`/api/users/${userId}/status`, payload);
      return data;
    } catch (error) {
      console.error("Failed to update user status:", error);
      throw error;
    }
  }
};