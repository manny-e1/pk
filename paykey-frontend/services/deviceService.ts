// services/deviceService.ts
import axios from 'axios';
import { Device } from '@/lib/types';

const API_URL = 'https://api.authkey.my/api'; // Sesuaikan port backend

// Helper untuk format tanggal
const formatDate = (dateString: string) => {
  if (!dateString) return '-';
  return new Date(dateString).toLocaleString('en-US', { 
    month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' 
  });
};

// Helper parse User Agent sederhana (jika backend mengirim raw string)
const parseDeviceType = (name: string): string => {
  const lower = name.toLowerCase();
  if (lower.includes('mobile') || lower.includes('iphone') || lower.includes('android')) return 'mobile';
  return 'desktop';
};

export const deviceService = {
  // 1. GET ALL DEVICES
  getAll: async (userEmail: string): Promise<Device[]> => {
    const { data } = await axios.get(`${API_URL}/devices?email=${userEmail}`);
    
    // MAPPING DATA BACKEND -> FRONTEND
    // Backend mengirim field: deviceName, credentialId, status, lastActive, dll.
    return data.map((d: any) => ({
      id: d.credentialId,
      dbId: d.id,
      name: d.deviceName || 'Unknown Device',
      type: parseDeviceType(d.deviceName || ''),
      model: d.deviceName || 'Unknown',
      user: d.user?.fullName || 'User', // Perlu join di backend atau kirim dari frontend
      userId: userEmail,
      initials: (d.user?.fullName || 'U').substring(0, 2).toUpperCase(),
      status: d.status.toLowerCase(),
      lastActive: formatDate(d.lastActive),
      lastActiveClass: new Date(d.lastActive).getTime() > Date.now() - 86400000 ? 'recent' : 'default',
      registered: formatDate(d.registeredTimestamp),
      location: 'Indonesia', // Bisa integrasi API GeoIP di backend
      ip: d.lastUsedIp || '-',
      approvals: d.signCounter || 0,
      rate: '100%', // Placeholder logic
      credential: d.credentialId,
    }));
  },

  // 2. SUSPEND / REACTIVATE
  toggleStatus: async (credentialId: string, newStatus: 'ACTIVE' | 'SUSPENDED') => {
    return await axios.put(`${API_URL}/devices/${credentialId}/status`, { status: newStatus });
  },

  // 3. REVOKE (HAPUS/BLOCK PERMANEN)
  revoke: async (credentialId: string, reason: string) => {
    // Revoke biasanya sama dengan status REVOKED di backend
    return await axios.put(`${API_URL}/devices/${credentialId}/status`, { status: 'REVOKED' });
  },
  
  // 4. RENAME
  rename: async (credentialId: string, newName: string) => {
    return await axios.put(`${API_URL}/devices/${credentialId}/rename`, { newName });
  }
};