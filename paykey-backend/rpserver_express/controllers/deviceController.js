const prisma = require('../config/db');
const axios = require('axios');
const { determineAuthenticatorType } = require('./passkeyController');

const safeJsonParse = (str) => {
    try { return str ? JSON.parse(str) : []; } 
    catch (e) { return []; }
};

exports.getUserDevices = async (req, res) => {
    const { email } = req.query;

    try {
        const whereClause = email ? { user: { email: email } } : {};

        const devices = await prisma.userKey.findMany({
            where: whereClause,
            include: { user: true },
            orderBy: { lastActive: 'desc' }
        });

        const formatted = await Promise.all(devices.map(async (d) => {
            
            const logFilter = {};
            
            if (d.user && d.user.email) {
                logFilter.email = d.user.email;
            }

            if (d.deviceName) {
                logFilter.device = d.deviceName; 
            }

            const [totalLogs, successCount, recentLogs] = await Promise.all([
                prisma.authLog.count({ where: logFilter }),
                
                prisma.authLog.count({ where: { ...logFilter, status: 'SUCCESS' } }),

                prisma.authLog.findMany({
                    where: logFilter,
                    orderBy: { createdAt: 'desc' },
                    take: 3,
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

            const successRate = totalLogs > 0 ? Math.round((successCount / totalLogs) * 100) + '%' : '100%'; 
            
            let approvals = 0;
            const isJustActive = (new Date() - new Date(d.lastActive)) < 60000;

            if (d.signCounter && d.signCounter > 0n) {
                approvals = d.signCounter.toString();
            } else {
                approvals = successCount;
                if (approvals == 0 && isJustActive) approvals = 1;
                approvals = approvals.toString();
            }

            const lastIpFromLog = recentLogs.length > 0 ? recentLogs[0].ipAddress : null;
            const finalLastIp = lastIpFromLog || d.lastUsedIp || 'Unknown IP';

            const formattedRecent = recentLogs.map(log => ({
                event: log.eventType,
                status: log.status,
                ip: log.ipAddress,
                location: log.location,
                time: log.createdAt
            }));

            return {
                ...d,
                id: d.id.toString(),
                credentialId: d.credentialId,
                signCounter: approvals,
                transports: safeJsonParse(d.transports),
                onboardingAuth: determineAuthenticatorType(safeJsonParse(d.transports), d.deviceTelemetry),
                userId: d.user.id ? d.user.id.toString() : 'Unknown',
                email: d.user.email ? d.user.email : 'Unknown',
                
                location: d.deviceTelemetry?.device_address || d.deviceTelemetry?.timezone || 'Unknown Location',
                osName: d.deviceTelemetry?.os_name || 'Unknown OS',
                deviceModel: d.deviceTelemetry?.device_model || 'Unknown Model',
                osVersion: d.deviceTelemetry?.os_version || 'Unknown Version',
                
                successRate: successRate,
                
                ownerName: d.user ? d.user.fullName : (d.userDisplayName || 'Unknown User'),
                ownerEmail: d.user ? d.user.email : (d.username || 'No Email'),

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

exports.renameDevice = async (req, res) => {
    const { id } = req.params;
    const { newName } = req.body;
    try {
        await prisma.userKey.update({ where: { credentialId: id }, data: { deviceName: newName } });
        res.json({ success: true });
    } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.toggleDeviceStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    try {
        await prisma.userKey.update({ where: { credentialId: id }, data: { status: status, lastStatusChange: new Date() } });
        res.json({ success: true });
    } catch (err) { res.status(500).json({ error: err.message }); }
};