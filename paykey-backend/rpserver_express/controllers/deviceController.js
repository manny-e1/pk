const prisma = require('../config/db');
const axios = require('axios');

// Helper: Parse JSON aman
const safeJsonParse = (str) => {
    try { return str ? JSON.parse(str) : []; } 
    catch (e) { return []; }
};

// Helper: Geo Location Sederhana
async function getGeoInfo(ip) {
    if (!ip) return 'Unknown';
    if (ip === '::1' || ip === '127.0.0.1' || ip.startsWith('192.168.')) {
        return 'Localhost, Private Network';
    }
    try {
        // Timeout pendek agar tidak bikin loading lama
        const res = await axios.get(`http://ip-api.com/json/${ip}?fields=city,country`, { timeout: 800 });
        if (res.data && res.data.city) {
            return `${res.data.city}, ${res.data.country}`;
        }
    } catch (e) {
        // Ignore error
    }
    return 'Unknown Location';
}

/// 1. GET ALL DEVICES (GLOBAL ADMIN VIEW)
exports.getUserDevices = async (req, res) => {
    const { email } = req.query;

    try {
        // [FIX] Jika ada email, filter by email. Jika tidak, ambil SEMUA (Global).
        const whereClause = email ? { user: { email: email } } : {};

        const devices = await prisma.userKey.findMany({
            where: whereClause,
            include: { user: true }, // [FIX] Include data User (Table User) agar kita tahu siapa pemiliknya
            orderBy: { lastActive: 'desc' }
        });

        const formatted = await Promise.all(devices.map(async (d) => {
            const location = await getGeoInfo(d.lastUsedIp);

            // Filter log statistik
            const deviceNameFilter = d.deviceName ? { device: d.deviceName } : {};
            // Jika memfilter spesifik user, tambahkan filter email
            if (d.user && d.user.email) {
                deviceNameFilter.email = d.user.email;
            }

            const logStats = await prisma.authLog.aggregate({
                _count: { id: true },
                where: deviceNameFilter
            });

            const successCount = await prisma.authLog.count({
                where: { ...deviceNameFilter, status: 'SUCCESS' }
            });

            const totalLogs = logStats._count.id;
            const successRate = totalLogs > 0 ? Math.round((successCount / totalLogs) * 100) + '%' : '100%'; 
            
            let approvals = 0;
            const isJustActive = (new Date() - new Date(d.lastActive)) < 60000;

            if (d.signCounter && d.signCounter > 0n) {
                approvals = d.signCounter.toString();
            } else {
                approvals = successCount;
                if (approvals === 0 && isJustActive) approvals = 1;
                approvals = approvals.toString();
            }

            return {
                ...d,
                id: d.id.toString(),
                credentialId: d.credentialId,
                signCounter: approvals,
                transports: safeJsonParse(d.transports),
                location: location,
                successRate: successRate,
                // [FIX] Pastikan info pemilik device diambil dari relasi User
                ownerName: d.user ? d.user.fullName : (d.userDisplayName || 'Unknown User'),
                ownerEmail: d.user ? d.user.email : (d.username || 'No Email')
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