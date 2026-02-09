'use client';

import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Device } from '@/lib/types';

const API_URL = 'https://api.authkey.my/api';

// [FIX] Parameter userEmail sekarang opsional (tanda tanya ?)
export function useDevices(userEmail?: string) {
  const [devices, setDevices] = useState<Device[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchDevices = useCallback(async () => {
    try {
      setLoading(true);
      // [FIX] Jika userEmail ada, pakai query ?email=... jika tidak, kosongkan (Get All)
      const query = userEmail ? `?email=${userEmail}` : '';
      const res = await axios.get(`${API_URL}/devices${query}`);
      
      const mappedData: Device[] = res.data.map((d: any) => ({
        id: d.credentialId,
        dbId: d.id,
        name: d.deviceName || 'Unknown Device',
        type: (d.deviceName || '').toLowerCase().includes('mobile') ? 'mobile' : 'desktop',
        model: d.deviceName || 'Unknown Model',
        
        // [FIX] Gunakan data owner yang dikirim backend
        user: d.ownerName || d.userDisplayName || 'Unknown',
        userId: d.ownerEmail || 'No Email',
        initials: (d.ownerName || 'U').charAt(0).toUpperCase(),
        
        status: (d.status || 'active').toLowerCase(),
        lastActive: new Date(d.lastActive).toLocaleString('en-US', {
            month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'
        }),
        lastActiveClass: 'default',
        registered: new Date(d.registeredTimestamp).toLocaleDateString(),
        credential: d.credentialId,
        approvals: parseInt(d.signCounter) || 0,
        ip: d.lastUsedIp || '-',
        location: d.location || 'Unknown',
        rate: d.successRate || '-'
      }));

      setDevices(mappedData);
    } catch (err) {
      console.error("Failed to fetch devices:", err);
    } finally {
      setLoading(false);
    }
  }, [userEmail]);

  useEffect(() => {
    fetchDevices();
  }, [fetchDevices]);

  const toggleStatus = async (id: string, status: 'ACTIVE' | 'SUSPENDED' | 'REVOKED') => {
    await axios.put(`${API_URL}/devices/${id}/status`, { status });
    await fetchDevices();
  };

  const renameDevice = async (id: string, newName: string) => {
    await axios.put(`${API_URL}/devices/${id}/rename`, { newName });
    await fetchDevices();
  };

  return {
    devices,
    loading,
    refresh: fetchDevices,
    actions: {
      suspend: (id: string) => toggleStatus(id, 'SUSPENDED'),
      reactivate: (id: string) => toggleStatus(id, 'ACTIVE'),
      revoke: (id: string) => toggleStatus(id, 'REVOKED'),
      rename: renameDevice
    }
  };
}