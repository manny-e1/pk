// 'use client';

// import { useState, useEffect, useCallback } from 'react';
// import axios from 'axios';
// import { Device } from '@/lib/types';

// const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.authkey.my';

// // [FIX] Parameter userEmail sekarang opsional (tanda tanya ?)
// export function useDevices(userEmail?: string) {
//   const [devices, setDevices] = useState<Device[]>([]);
//   const [loading, setLoading] = useState(true);

//   const fetchDevices = useCallback(async () => {
//     try {
//       setLoading(true);
//       // [FIX] Jika userEmail ada, pakai query ?email=... jika tidak, kosongkan (Get All)
//       const query = userEmail ? `?email=${userEmail}` : '';
//       const res = await axios.get(`${API_URL}/api/devices${query}`);
      
//       const mappedData: Device[] = res.data.map((d: any) => ({
//         id: d.credentialId,
//         dbId: d.id,
//         name: d.deviceName || 'Unknown Device',
//         type: (d.deviceName || '').toLowerCase().includes('mobile') ? 'mobile' : 'desktop',
//         model: d.deviceName || 'Unknown Model',
//         deviceModel: d.deviceModel || 'Unknown Model',
//         osName: d.osName || 'Unknown OS',
//         osVersion: d.osVersion || 'Unknown Version',
        
//         // [FIX] Gunakan data owner yang dikirim backend
//         user: d.ownerName || d.userDisplayName || 'Unknown',
//         userId: d.ownerEmail || 'No Email',
//         initials: (d.ownerName || 'U').charAt(0).toUpperCase(),
        
//         status: (d.status || 'active').toLowerCase(),
//         lastActive: new Date(d.lastActive).toLocaleString('en-US', {
//             month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'
//         }),
//         lastActiveClass: 'default',
//         registered: new Date(d.registeredTimestamp).toLocaleDateString(),
//         credential: d.credentialId,
//         approvals: parseInt(d.signCounter) || 0,
//         ip: d.lastIp || '-',
//         location: d.location || 'Unknown',
//         rate: d.successRate || '-',
//         recentActivity: d.recentActivity || '-',
        
//       }));

//       setDevices(mappedData);
//     } catch (err) {
//       console.error("Failed to fetch devices:", err);
//     } finally {
//       setLoading(false);
//     }
//   }, [userEmail]);

//   useEffect(() => {
//     fetchDevices();
//   }, [fetchDevices]);

//   const toggleStatus = async (id: string, status: 'ACTIVE' | 'SUSPENDED' | 'REVOKED') => {
//     await axios.put(`${API_URL}/api/devices/${id}/status`, { status });
//     await fetchDevices();
//   };

//   const renameDevice = async (id: string, newName: string) => {
//     await axios.put(`${API_URL}/api/devices/${id}/rename`, { newName });
//     await fetchDevices();
//   };

//   return {
//     devices,
//     loading,
//     refresh: fetchDevices,
//     actions: {
//       suspend: (id: string) => toggleStatus(id, 'SUSPENDED'),
//       reactivate: (id: string) => toggleStatus(id, 'ACTIVE'),
//       revoke: (id: string) => toggleStatus(id, 'REVOKED'),
//       rename: renameDevice
//     }
//   };
// }

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
      // Panggil Service secara terpusat!
      const data = await deviceService.getAll(userEmail || '');

      console.log("Fetched devices:", data);
      
      // Jika Backend Anda di service sudah melakukan mapping, 
      // Anda bisa langsung set array data tanpa perlu re-mapping lagi di sini.
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

  // Bungkus fungsi dari service untuk di-export ke komponen UI
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