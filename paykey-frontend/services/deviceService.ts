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

export const getRelativeTime = (dateString: string | undefined) => {
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
      id: d.credentialId,
      dbId: d.id,
      name: d.deviceName || 'Unknown Device',
      type: d.deviceTelemetry.device_type,
      model: d.deviceModel || 'Unknown',
      onboardingAuth: d.onboardingAuth || 'Unknown',
      // user: d.user?.fullName || 'User',
      // userId: userEmail,
      initials: (d.email || 'U').substring(0, 2).toUpperCase(),
      status: d.status.toLowerCase(),
      lastActive: getRelativeTime(d.lastActive),
      lastActiveClass: new Date(d.lastActive).getTime() > Date.now() - 86400000 ? 'recent' : 'default',
      registered: d.registeredTimestamp,
      location: 'Indonesia',
      ip: formatIp(d.lastUsedIp || d.lastIp || '-'),
      approvals: d.signCounter || 0,
      rate: d.successRate || '100%',
      credential: d.credentialId,
      user: d.ownerName || 'Unknown User',
      email: d.email || 'No Email',
      userId: d.userId || '',
      osName: d.osName,
      osVersion: d.osVersion,
      recentActivity: d.recentActivity
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