import { apiClient } from '@/lib/apiClient';
import { Device } from '@/lib/types';

const formatDate = (dateString: string) => {
  if (!dateString) return '-';
  return new Date(dateString).toLocaleString('en-US', { 
    month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' 
  });
};

const parseDeviceType = (name: string): string => {
  const lower = name.toLowerCase();
  if (lower.includes('mobile') || lower.includes('iphone') || lower.includes('android')) return 'mobile';
  return 'desktop';
};

export const deviceService = {
  getAll: async (userEmail: string): Promise<Device[]> => {
    const { data } = await apiClient.get(`/api/devices?email=${userEmail}`);
    
    return data.map((d: any) => ({
      id: d.credentialId,
      dbId: d.id,
      name: d.deviceName || 'Unknown Device',
      type: parseDeviceType(d.deviceName || ''),
      model: d.deviceName || 'Unknown',
      // user: d.user?.fullName || 'User',
      // userId: userEmail,
      initials: (d.email || 'U').substring(0, 2).toUpperCase(),
      status: d.status.toLowerCase(),
      lastActive: formatDate(d.lastActive),
      lastActiveClass: new Date(d.lastActive).getTime() > Date.now() - 86400000 ? 'recent' : 'default',
      registered: formatDate(d.registeredTimestamp),
      location: 'Indonesia', 
      ip: d.lastUsedIp || '-',
      approvals: d.signCounter || 0,
      rate: d.successRate || '100%', 
      credential: d.credentialId,
      user: d.ownerName || 'Unknown User',
      email: d.email || 'No Email', 
      userId: d.userId || '',
    }));
  },

  toggleStatus: async (credentialId: string, newStatus: 'ACTIVE' | 'SUSPENDED') => {
    return await apiClient.put(`/api/devices/${credentialId}/status`, { status: newStatus });
  },

  revoke: async (credentialId: string, reason: string) => {
    return await apiClient.put(`/api/devices/${credentialId}/status`, { status: 'REVOKED' });
  },
  
  rename: async (credentialId: string, newName: string) => {
    return await apiClient.put(`/api/devices/${credentialId}/rename`, { newName });
  }
};