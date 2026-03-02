const prisma = require('../config/db');
const axios = require('axios');

// Helper: Parse JSON aman
const safeJsonParse = (str) => {
    try { return str ? JSON.parse(str) : []; } 
    catch (e) { return []; }
};

exports.getUserDevices = async (req, res) => {
    const { email } = req.query;

    try {
        // 1. Filter User Key berdasarkan Email (jika ada)
        const whereClause = email ? { user: { email: email } } : {};

        const devices = await prisma.userKey.findMany({
            where: whereClause,
            include: { user: true },
            orderBy: { lastActive: 'desc' }
        });

        const formatted = await Promise.all(devices.map(async (d) => {
            
            // 2. Siapkan Filter untuk AuthLog (Match by Email & Device Name)
            const logFilter = {};
            
            // Filter by Email User pemilik device
            if (d.user && d.user.email) {
                logFilter.email = d.user.email;
            }

            // Filter by Device Name (Pastikan device name ada)
            if (d.deviceName) {
                // Kita gunakan exact match. 
                // Jika ingin lebih loose (misal nama browser berubah versi), bisa pakai 'contains'
                logFilter.device = d.deviceName; 
            }

            // 3. AMBIL STATISTIK (Count Total & Success)
            // Kita jalankan parallel agar cepat
            const [totalLogs, successCount, recentLogs] = await Promise.all([
                // A. Hitung Total Log Device ini
                prisma.authLog.count({ where: logFilter }),
                
                // B. Hitung Success Log Device ini
                prisma.authLog.count({ where: { ...logFilter, status: 'SUCCESS' } }),

                // C. [BARU] Ambil 3 Aktivitas Terakhir untuk Device ini
                prisma.authLog.findMany({
                    where: logFilter,
                    orderBy: { createdAt: 'desc' },
                    take: 3, // Ambil 3 saja
                    select: {
                        id: true,
                        eventType: true,
                        status: true,
                        ipAddress: true,
                        location: true,
                        createdAt: true
                    }
                })
            ]);

            // 4. Hitung Success Rate
            const successRate = totalLogs > 0 ? Math.round((successCount / totalLogs) * 100) + '%' : '100%'; 
            
            // 5. Logika Sign Counter (Approvals)
            let approvals = 0;
            const isJustActive = (new Date() - new Date(d.lastActive)) < 60000;

            if (d.signCounter && d.signCounter > 0n) {
                approvals = d.signCounter.toString();
            } else {
                approvals = successCount;
                if (approvals == 0 && isJustActive) approvals = 1;
                approvals = approvals.toString();
            }

            // 6. [BARU] Tentukan Last IP
            // Prioritas: IP dari Log terakhir > IP dari tabel UserKey > Unknown
            const lastIpFromLog = recentLogs.length > 0 ? recentLogs[0].ipAddress : null;
            const finalLastIp = lastIpFromLog || d.lastUsedIp || 'Unknown IP';

            // 7. [BARU] Format Recent Activity
            const formattedRecent = recentLogs.map(log => ({
                event: log.eventType,
                status: log.status,
                ip: log.ipAddress,
                location: log.location,
                time: log.createdAt // Frontend bisa format tanggalnya
            }));

            // 8. Return Data Lengkap
            return {
                ...d,
                id: d.id.toString(),
                credentialId: d.credentialId,
                signCounter: approvals,
                transports: safeJsonParse(d.transports),
                userId: d.user.id ? d.user.id.toString() : 'Unknown',
                email: d.user.email ? d.user.email : 'Unknown',
                
                // Location & Telemetry
                location: d.deviceTelemetry?.device_address || d.deviceTelemetry?.timezone || 'Unknown Location',
                osName: d.deviceTelemetry?.os_name || 'Unknown OS',
                deviceModel: d.deviceTelemetry?.device_model || 'Unknown Model',
                osVersion: d.deviceTelemetry?.os_version || 'Unknown Version',
                
                // Statistik
                successRate: successRate,
                
                // Owner Info
                ownerName: d.user ? d.user.fullName : (d.userDisplayName || 'Unknown User'),
                ownerEmail: d.user ? d.user.email : (d.username || 'No Email'),

                // [BARU] Data Tambahan
                lastIp: finalLastIp,
                recentActivity: formattedRecent
            };
        }));

        res.json(formatted);

    } catch (err) {
        console.error("[GetDevices] Error:", err);
        res.status(500).json({ error: "Failed to fetch devices" });
    }
};

// 2. RENAME DEVICE
exports.renameDevice = async (req, res) => {
    const { id } = req.params;
    const { newName } = req.body;
    try {
        await prisma.userKey.update({ where: { credentialId: id }, data: { deviceName: newName } });
        res.json({ success: true });
    } catch (err) { res.status(500).json({ error: err.message }); }
};

// 3. TOGGLE STATUS
exports.toggleDeviceStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    try {
        await prisma.userKey.update({ where: { credentialId: id }, data: { status: status, lastStatusChange: new Date() } });
        res.json({ success: true });
    } catch (err) { res.status(500).json({ error: err.message }); }
};