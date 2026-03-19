import { apiClient } from '@/lib/apiClient';
import { Device } from '@/lib/types';

export const getRelativeTime = (dateString: string | Date | undefined) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  let interval = seconds / 31536000;
  if (interval > 1) return Math.floor(interval) + " years ago";
  interval = seconds / 2592000;
  if (interval > 1) return Math.floor(interval) + " months ago";
  interval = seconds / 86400;
  if (interval > 1) return Math.floor(interval) + " days ago";
  interval = seconds / 3600;
  if (interval > 1) return Math.floor(interval) + " hours ago";
  interval = seconds / 60;
  if (interval > 1) return Math.floor(interval) + " min ago";
  return "Just now";
};

export function formatIp(ip: string) {
  const parts = ip.split('.');
  if (parts.length === 4) {
    return `${parts[0]}.${parts[1]}.${parts[2]}.***`;
  }
  return ip;
}

export const deviceService = {
  getAll: async (userEmail: string): Promise<Device[]> => {
    const { data } = await apiClient.get(`/api/devices?email=${userEmail}`);

    return data.map((d: any) => ({
      id: d.credentialId || d.id || Math.random().toString(),
      dbId: d.dbId || d.id,
      name: d.deviceName || d.name || 'Unknown Device',
      type: d.deviceTelemetry?.device_type || d.type || 'desktop',
      model: d.deviceModel || d.model || 'Unknown',
      modelAndOnboardingAuth: d.modelAndOnboardingAuth,
      initials: (d.email || 'U').substring(0, 2).toUpperCase(),
      status: (d.status || 'active').toLowerCase(),
      lastActive: getRelativeTime(d.lastActive),
      lastActiveClass: new Date(d.lastActive).getTime() > Date.now() - 86400000 ? 'recent' : 'default',
      registered: d.registeredTimestamp || d.registered || '-',
      location: d.location || 'Indonesia',
      ip: formatIp(d.lastUsedIp || d.lastIp || d.ip || '-'),
      approvals: d.signCounter || d.approvals || 0,
      rate: d.successRate || d.rate || '100%',
      credential: d.credentialId || d.credential || '-',
      user: d.ownerName || d.user || 'Unknown User',
      email: d.email || 'No Email',
      userId: d.userId || '',
      osName: d.osName,
      osVersion: d.osVersion,
      recentActivity: d.recentActivity || [],
      methods: d.methods || [],
      authKeys: d.authKeys || []
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