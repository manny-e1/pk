'use client';

import { useState, useEffect, useCallback } from 'react';
import { Device } from '@/lib/types';
import { deviceService } from '@/services/deviceService';

export function useDevices(userEmail?: string) {
  const [devices, setDevices] = useState<Device[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchDevices = useCallback(async () => {
    try {
      setLoading(true);
      const data = await deviceService.getAll(userEmail || '');

      console.log("Fetched devices:", data);
      
      setDevices(data);
    } catch (err) {
      console.error("Failed to fetch devices:", err);
    } finally {
      setLoading(false);
    }
  }, [userEmail]);

  useEffect(() => {
    fetchDevices();
  }, [fetchDevices]);

  const suspendDevice = async (id: string) => {
    await deviceService.toggleStatus(id, 'SUSPENDED');
    await fetchDevices();
  };

  const reactivateDevice = async (id: string) => {
    await deviceService.toggleStatus(id, 'ACTIVE');
    await fetchDevices();
  };

  const revokeDevice = async (id: string) => {
    await deviceService.revoke(id, 'Revoked by user');
    await fetchDevices();
  };

  const renameDevice = async (id: string, newName: string) => {
    await deviceService.rename(id, newName);
    await fetchDevices();
  };

  return {
    devices,
    loading,
    refresh: fetchDevices,
    actions: {
      suspend: suspendDevice,
      reactivate: reactivateDevice,
      revoke: revokeDevice,
      rename: renameDevice
    }
  };
}