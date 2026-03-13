import { apiClient } from '@/lib/apiClient';
import { Device } from '@/lib/types';

const getRelativeTime = (dateInput: string | Date) => {
  if (!dateInput || dateInput === '-') return '-';
  const date = new Date(dateInput);
  
  if (isNaN(date.getTime())) return dateInput as string; 

  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
  
  if (seconds < 60) return "Just now";
  
  let interval = seconds / 31536000;
  if (interval >= 1) return Math.floor(interval) + (Math.floor(interval) > 1 ? " years ago" : " year ago");
  
  interval = seconds / 2592000;
  if (interval >= 1) return Math.floor(interval) + (Math.floor(interval) > 1 ? " months ago" : " month ago");
  
  interval = seconds / 86400;
  if (interval >= 1) return Math.floor(interval) + (Math.floor(interval) > 1 ? " days ago" : " day ago");
  
  interval = seconds / 3600;
  if (interval >= 1) return Math.floor(interval) + (Math.floor(interval) > 1 ? " hours ago" : " hour ago");
  
  interval = seconds / 60;
  if (interval >= 1) return Math.floor(interval) + (Math.floor(interval) > 1 ? " mins ago" : " min ago");
  
  return "Just now";
};

export const deviceService = {
  getAll: async (userEmail: string): Promise<Device[]> => {
    const { data } = await apiClient.get(`/api/devices?email=${userEmail}`);
    
    return data.map((d: any) => ({
      id: d.id || Math.random().toString(),
      dbId: d.dbId,
      
      name: d.name || 'Generic Device',
      model: d.model || 'Unknown Method',
      
      type: d.type || 'desktop',
      initials: d.initials || 'U',
      status: d.status || 'active',
      lastActive: getRelativeTime(d.lastActive),
      lastActiveClass: d.lastActiveClass || 'default',
      registered: d.registered || '-',
      location: d.location || 'Indonesia', 
      ip: d.ip || '-',
      approvals: d.approvals || 0,
      rate: d.rate || '100%', 
      credential: d.credential || '-',
      user: d.user || 'Unknown User',
      email: d.email || 'No Email', 
      userId: d.userId || '',
      
      methods: d.methods || [],
      authKeys: d.authKeys || [],
      recentActivity: d.recentActivity || []
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