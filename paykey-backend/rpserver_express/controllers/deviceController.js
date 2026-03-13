// // const prisma = require('../config/db');
// // const axios = require('axios');

// // const safeJsonParse = (str) => {
// //     try { return str ? JSON.parse(str) : []; } 
// //     catch (e) { return []; }
// // };

// // exports.getUserDevices = async (req, res) => {
// //     const { email } = req.query;

// //     try {
// //         const whereClause = email ? { user: { email: email } } : {};

// //         const devices = await prisma.userKey.findMany({
// //             where: whereClause,
// //             include: { user: true },
// //             orderBy: { lastActive: 'desc' }
// //         });

// //         const formatted = await Promise.all(devices.map(async (d) => {
            
// //             const logFilter = {};
            
// //             if (d.user && d.user.email) {
// //                 logFilter.email = d.user.email;
// //             }

// //             if (d.deviceName) {
// //                 logFilter.device = d.deviceName; 
// //             }

// //             const [totalLogs, successCount, recentLogs] = await Promise.all([
// //                 prisma.authLog.count({ where: logFilter }),
                
// //                 prisma.authLog.count({ where: { ...logFilter, status: 'SUCCESS' } }),

// //                 prisma.authLog.findMany({
// //                     where: logFilter,
// //                     orderBy: { createdAt: 'desc' },
// //                     take: 3,
// //                     select: {
// //                         id: true,
// //                         eventType: true,
// //                         status: true,
// //                         ipAddress: true,
// //                         location: true,
// //                         createdAt: true
// //                     }
// //                 })
// //             ]);

// //             const successRate = totalLogs > 0 ? Math.round((successCount / totalLogs) * 100) + '%' : '100%'; 
            
// //             let approvals = 0;
// //             const isJustActive = (new Date() - new Date(d.lastActive)) < 60000;

// //             if (d.signCounter && d.signCounter > 0n) {
// //                 approvals = d.signCounter.toString();
// //             } else {
// //                 approvals = successCount;
// //                 if (approvals == 0 && isJustActive) approvals = 1;
// //                 approvals = approvals.toString();
// //             }

// //             const lastIpFromLog = recentLogs.length > 0 ? recentLogs[0].ipAddress : null;
// //             const finalLastIp = lastIpFromLog || d.lastUsedIp || 'Unknown IP';

// //             const formattedRecent = recentLogs.map(log => ({
// //                 event: log.eventType,
// //                 status: log.status,
// //                 ip: log.ipAddress,
// //                 location: log.location,
// //                 time: log.createdAt
// //             }));

// //             return {
// //                 ...d,
// //                 id: d.id.toString(),
// //                 credentialId: d.credentialId,
// //                 signCounter: approvals,
// //                 transports: safeJsonParse(d.transports),
// //                 userId: d.user.id ? d.user.id.toString() : 'Unknown',
// //                 email: d.user.email ? d.user.email : 'Unknown',
                
// //                 location: d.deviceTelemetry?.device_address || d.deviceTelemetry?.timezone || 'Unknown Location',
// //                 osName: d.deviceTelemetry?.os_name || 'Unknown OS',
// //                 deviceModel: d.deviceTelemetry?.device_model || 'Unknown Model',
// //                 osVersion: d.deviceTelemetry?.os_version || 'Unknown Version',
                
// //                 successRate: successRate,
                
// //                 ownerName: d.user ? d.user.fullName : (d.userDisplayName || 'Unknown User'),
// //                 ownerEmail: d.user ? d.user.email : (d.username || 'No Email'),

// //                 lastIp: finalLastIp,
// //                 recentActivity: formattedRecent
// //             };
// //         }));

// //         res.json(formatted);

// //     } catch (err) {
// //         console.error("[GetDevices] Error:", err);
// //         res.status(500).json({ error: "Failed to fetch devices" });
// //     }
// // };

// // exports.renameDevice = async (req, res) => {
// //     const { id } = req.params;
// //     const { newName } = req.body;
// //     try {
// //         await prisma.userKey.update({ where: { credentialId: id }, data: { deviceName: newName } });
// //         res.json({ success: true });
// //     } catch (err) { res.status(500).json({ error: err.message }); }
// // };

// // exports.toggleDeviceStatus = async (req, res) => {
// //     const { id } = req.params;
// //     const { status } = req.body;
// //     try {
// //         await prisma.userKey.update({ where: { credentialId: id }, data: { status: status, lastStatusChange: new Date() } });
// //         res.json({ success: true });
// //     } catch (err) { res.status(500).json({ error: err.message }); }
// // };

// /**
//  * @file controllers/deviceController.js
//  */
// const prisma = require('../config/db');

// // Fungsi bantuan untuk parsing JSON transports yang aman
// const safeJsonParse = (str) => {
//     try { return str ? JSON.parse(str) : []; } 
//     catch (e) { return []; }
// };

// /**
//  * MENGAMBIL DAFTAR DEVICE 
//  * Diperbaiki: Grouping berdasarkan User + Device (Composite Key)
//  */
// exports.getUserDevices = async (req, res) => {
//     const { email } = req.query;

//     try {
//         const whereClause = email ? { user: { email: email } } : {};

//         // 1. Ambil semua kunci (FIDO2, PIN, BIO) dari database
//         const keys = await prisma.userKey.findMany({
//             where: whereClause,
//             include: { user: true },
//             orderBy: { lastActive: 'desc' }
//         });

//         // 2. Lakukan Grouping berdasarkan `UserID` + `DeviceName`
//         const deviceMap = {};

//         keys.forEach(k => {
//             const dName = k.customName || k.deviceTelemetry?.device_model || k.deviceTelemetry?.device_vendor || 'Unknown Device';
//             const uId = k.userId || (k.user ? k.user.id : 'Unknown');
            
//             // KUNCI PERBAIKAN: Gunakan kombinasi ID agar HP yang sama 
//             // yang dipakai oleh akun berbeda tidak saling menimpa!
//             const groupKey = `${uId}:::${dName}`; 
            
//             // Deteksi tipe autentikasi berdasarkan transports
//             let authType = 'FIDO2';
//             const transports = safeJsonParse(k.transports);
//             if (transports.includes('PIN')) authType = 'PIN';
//             else if (transports.includes('BIO_LEGACY')) authType = 'BIO_LEGACY';
//             else if (transports.includes('EMAIL_OTP')) authType = 'EMAIL_OTP';
            

//             // Jika kombinasi User+Device ini belum ada di Map, buat kerangkanya
//             if (!deviceMap[groupKey]) {
//                 deviceMap[groupKey] = {
//                     id: groupKey, // Gunakan groupKey agar UI bisa membedakan perangkat ini milik siapa
//                     credentialId: k.credentialId, 
//                     deviceName: dName,
//                     userId: uId.toString(),
//                     email: k.user?.email || 'Unknown',
//                     ownerName: k.user?.fullName || k.userDisplayName || 'Unknown User',
//                     status: k.status, 
//                     lastActive: k.lastActive || k.createdAt,
                    
//                     // Ekstrak Telemetri Dinamis
//                     location: k.deviceTelemetry?.device_address || k.deviceTelemetry?.timezone || 'Unknown Location',
//                     osName: k.deviceTelemetry?.os_name || (dName.toLowerCase().includes('iphone') ? 'iOS' : 'Android'),
//                     deviceModel: k.deviceTelemetry?.device_model || dName,
//                     osVersion: k.deviceTelemetry?.os_version || 'Unknown Version',
                    
//                     registeredMethods: [], 
//                     rawKeys: []            
//                 };
//             }

//             // Masukkan metode autentikasi tanpa duplikasi
//             if (!deviceMap[groupKey].registeredMethods.includes(authType)) {
//                 deviceMap[groupKey].registeredMethods.push(authType);
//             }
//             deviceMap[groupKey].rawKeys.push(k.credentialId);
//         });

//         // 3. Hitung Statistik per Kombinasi User & Device
//         const formatted = await Promise.all(Object.values(deviceMap).map(async (deviceObj) => {
            
//             const logFilter = {
//                 email: deviceObj.email,
//                 device: deviceObj.deviceName
//             };

//             const [totalLogs, successCount, recentLogs] = await Promise.all([
//                 prisma.authLog.count({ where: logFilter }),
//                 prisma.authLog.count({ where: { ...logFilter, status: 'SUCCESS' } }),
//                 prisma.authLog.findMany({
//                     where: logFilter,
//                     orderBy: { createdAt: 'desc' },
//                     take: 3,
//                     select: {
//                         id: true,
//                         eventType: true,
//                         status: true,
//                         ipAddress: true,
//                         location: true,
//                         createdAt: true
//                     }
//                 })
//             ]);

//             const successRate = totalLogs > 0 ? Math.round((successCount / totalLogs) * 100) + '%' : '100%'; 
            
//             let approvals = successCount;
//             const isJustActive = (new Date() - new Date(deviceObj.lastActive)) < 60000;
//             if (approvals === 0 && isJustActive) approvals = 1;

//             const lastIpFromLog = recentLogs.length > 0 ? recentLogs[0].ipAddress : null;

//             const formattedRecent = recentLogs.map(log => ({
//                 event: log.eventType,
//                 status: log.status,
//                 ip: log.ipAddress,
//                 location: log.location,
//                 time: log.createdAt
//             }));

//             return {
//                 ...deviceObj,
//                 signCounter: approvals.toString(),
//                 successRate: successRate,
//                 lastIp: lastIpFromLog || 'Unknown IP',
//                 recentActivity: formattedRecent
//             };
//         }));

//         res.json(formatted);

//     } catch (err) {
//         console.error("[GetDevices] Error:", err);
//         res.status(500).json({ error: "Failed to fetch devices" });
//     }
// };

// /**
//  * UBAH NAMA DEVICE
//  */
// exports.renameDevice = async (req, res) => {
//     const { id } = req.params; // ID sekarang adalah format `userId:::deviceName`
//     const { newName } = req.body;
    
//     try {
//         if (id.includes(':::')) {
//             const [uId, dName] = id.split(':::');
//             await prisma.userKey.updateMany({ 
//                 where: { userId: uId, deviceName: dName }, 
//                 data: { deviceName: newName } 
//             });
//         } else {
//             // Fallback jika UI Frontend masih mengirim credentialId lama
//             await prisma.userKey.updateMany({ 
//                 where: { credentialId: id }, 
//                 data: { deviceName: newName } 
//             });
//         }
//         res.json({ success: true });
//     } catch (err) { 
//         res.status(500).json({ error: err.message }); 
//     }
// };

// /**
//  * BLOKIR / AKTIFKAN DEVICE
//  * Memblokir device secara spesifik HANYA untuk user yang bersangkutan
//  */
// exports.toggleDeviceStatus = async (req, res) => {
//     const { id } = req.params; // ID sekarang adalah format `userId:::deviceName`
//     const { status } = req.body;
    
//     try {
//         if (id.includes(':::')) {
//             const [uId, dName] = id.split(':::');
//             // Hanya blokir device tersebut untuk User tersebut. 
//             // Jika akun lain punya device yang sama (misal HP pinjaman), akun lain tidak kena blokir.
//             await prisma.userKey.updateMany({ 
//                 where: { userId: uId, deviceName: dName }, 
//                 data: { status: status, lastStatusChange: new Date() } 
//             });
//         } else {
//             // Fallback jika UI Frontend masih mengirim credentialId lama
//             await prisma.userKey.update({ 
//                 where: { credentialId: id }, 
//                 data: { status: status, lastStatusChange: new Date() } 
//             });
//         }
//         res.json({ success: true });
//     } catch (err) { 
//         res.status(500).json({ error: err.message }); 
//     }
// };

/**
 * @file controllers/deviceController.js
 */
const prisma = require('../config/db');

const formatMethods = (methods) => {
    const map = { 'FIDO2': 'Passkey', 'BIO_LEGACY': 'Biometrics', 'PIN': 'App PIN', 'EMAIL_OTP': 'Email OTP' };
    return methods.map(m => map[m] || m).join(', ');
};

const safeJsonParse = (str) => {
    try { return str ? JSON.parse(str) : {}; } catch (e) { return {}; }
};

exports.getUserDevices = async (req, res) => {
    const { email } = req.query;
    try {
        const whereClause = email ? { user: { email: email } } : {};
        const keys = await prisma.userKey.findMany({ where: whereClause, include: { user: true }, orderBy: { lastActive: 'desc' } });
        const deviceMap = {};

        keys.forEach(k => {
            const uId = k.userId || (k.user ? k.user.id : 'Unknown');
            let tel = typeof k.deviceTelemetry === 'string' ? safeJsonParse(k.deviceTelemetry) : (k.deviceTelemetry || {});
            
            let dName = tel.device_model || k.deviceName;
            if (!dName || dName === 'Unknown Device' || dName === 'Unnamed Device') dName = 'Generic Device';
            const groupKey = `${uId}:::${dName}`;
            
            let authType = 'FIDO2';
            const transportsStr = typeof k.transports === 'string' ? k.transports : JSON.stringify(k.transports || []);
            if (transportsStr.includes('PIN')) authType = 'PIN';
            else if (transportsStr.includes('BIO_LEGACY')) authType = 'BIO_LEGACY';
            else if (transportsStr.includes('EMAIL_OTP')) authType = 'EMAIL_OTP';

            let osBase = '';
            if (tel.os_name) {
                osBase = tel.os_name.replace('sdk_gphone64_arm64', 'Android').trim();
                if (osBase.toLowerCase().includes('ios')) osBase = 'iOS';
                if (tel.os_version) osBase += ` ${tel.os_version}`;
            } else {
                if (dName.toLowerCase().includes('iphone') || dName.toLowerCase().includes('ipad')) osBase = 'iOS';
                else if (dName.toLowerCase().includes('mac')) osBase = 'macOS';
                else if (dName.toLowerCase().includes('android') || dName.toLowerCase().includes('emulator')) osBase = 'Android';
                else if (dName.toLowerCase().includes('windows')) osBase = 'Windows';
            }

            let deviceType = 'desktop'; 
            const dNameLow = dName.toLowerCase();
            const osLow = (osBase || tel.os_name || '').toLowerCase();
            const telTypeLow = (tel.device_type || '').toLowerCase();
            const transLow = transportsStr.toLowerCase();

            if (transLow.includes('usb') || transLow.includes('nfc') || transLow.includes('ble') || dNameLow.includes('yubikey') || dNameLow.includes('security key') || dNameLow.includes('token')) {
                deviceType = 'hardware';
            } else if (osLow.includes('android') || osLow.includes('ios') || dNameLow.includes('iphone') || dNameLow.includes('ipad') || dNameLow.includes('emulator') || telTypeLow === 'mobile' || telTypeLow === 'android') {
                deviceType = 'mobile';
            }

            if (!deviceMap[groupKey]) {
                deviceMap[groupKey] = {
                    dbId: groupKey, credentialId: k.credentialId || `DEV_${Date.now()}`, 
                    deviceName: dName, osBase: osBase, deviceType: deviceType, userId: uId.toString(),
                    email: k.user?.email || 'Unknown', ownerName: k.user?.fullName || k.userDisplayName || 'Unknown User',
                    status: k.status || 'ACTIVE', 
                    // Simpan sementara tanggal registrasi sebagai default
                    lastActive: k.lastActive || k.createdAt || new Date(), 
                    location: tel.device_address || tel.timezone || 'Unknown Location', osName: osBase ? osBase.split(' ')[0] : 'desktop',
                    registeredMethods: [], keysDetail: []
                };
            } else {
                if (k.status && k.status.toUpperCase() === 'ACTIVE') deviceMap[groupKey].status = 'ACTIVE';
            }

            if (!deviceMap[groupKey].registeredMethods.includes(authType)) deviceMap[groupKey].registeredMethods.push(authType);
            
            deviceMap[groupKey].keysDetail.push({
                authType: authType, credentialId: k.credentialId || "-", publicKey: k.publicKey || 'N/A', status: k.status || 'ACTIVE', createdAt: k.createdAt || new Date()
            });
        });

        const formatted = await Promise.all(Object.values(deviceMap).map(async (d) => {
            const logFilter = { email: d.email, device: d.deviceName };
            
            // ==============================================================
            // PERBAIKAN: Ambil createdAt dari authLog untuk mengetahui waktu 
            // penggunaan ("Last Active") yang SEBENARNYA!
            // ==============================================================
            const [totalLogs, successCount, recentLogs] = await Promise.all([
                prisma.authLog.count({ where: logFilter }), 
                prisma.authLog.count({ where: { ...logFilter, status: 'SUCCESS' } }),
                prisma.authLog.findMany({ 
                    where: logFilter, orderBy: { createdAt: 'desc' }, take: 1, 
                    select: { ipAddress: true, createdAt: true } // <-- Tambahkan createdAt disini
                })
            ]);

            const successRate = totalLogs > 0 ? Math.round((successCount / totalLogs) * 100) : 100;
            const lastIpFromLog = recentLogs.length > 0 ? (recentLogs[0].ipAddress || "-") : '-';
            
            // PERBAIKAN: Gunakan waktu dari log terakhir. Jika belum pernah dipakai, gunakan waktu daftar.
            const realLastActive = recentLogs.length > 0 ? recentLogs[0].createdAt : d.lastActive;

            const methodString = formatMethods(d.registeredMethods);
            const deviceDetailsText = d.osBase ? `${d.osBase} • ${methodString}` : methodString;
            
            let initials = 'U';
            if (d.ownerName && d.ownerName !== 'Unknown User') {
                const parts = d.ownerName.trim().split(' ');
                initials = parts.length > 1 ? (parts[0][0] + parts[parts.length-1][0]).toUpperCase() : parts[0].substring(0, Math.min(2, parts[0].length)).toUpperCase();
            }

            const formattedAuthKeys = d.keysDetail.map(keyObj => ({
                methodName: formatMethods([keyObj.authType]), originalAuthType: keyObj.authType, credentialId: keyObj.credentialId,
                shortCredentialId: keyObj.credentialId.length > 15 ? keyObj.credentialId.substring(0, 15) + "..." : keyObj.credentialId, 
                publicKey: keyObj.publicKey, shortPublicKey: keyObj.publicKey.length > 15 && keyObj.publicKey !== "N/A" ? keyObj.publicKey.substring(0, 15) + "..." : keyObj.publicKey,
                status: (keyObj.status || "").toUpperCase(), addedDate: new Date(keyObj.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
            }));

            return {
                id: d.credentialId, dbId: d.dbId, name: d.deviceName, type: d.deviceType, model: deviceDetailsText, initials: initials,
                status: (d.status || "active").toLowerCase(), 
                
                // PERBAIKAN: Kirim waktu real (mentah) dari log ke Frontend
                lastActive: realLastActive, 
                
                location: d.location || "Indonesia", ip: lastIpFromLog, approvals: successCount, rate: `${successRate}%`, credential: d.credentialId || "-",
                user: d.ownerName || "-", email: d.email || "-", userId: d.userId || "-", methods: d.registeredMethods, authKeys: formattedAuthKeys
            };
        }));
        res.json(formatted);
    } catch (err) { res.status(500).json({ error: "Failed to fetch devices" }); }
};

exports.toggleDeviceStatus = async (req, res) => {
    const { id } = req.params; const { status } = req.body;
    try {
        const targetKey = await prisma.userKey.findUnique({ where: { credentialId: id } });
        if (!targetKey) return res.status(404).json({ error: "Device not found" });

        let tel = typeof targetKey.deviceTelemetry === 'string' ? safeJsonParse(targetKey.deviceTelemetry) : {};
        let dName = tel.device_model || targetKey.deviceName || 'Unknown Device';

        const allKeys = await prisma.userKey.findMany({ where: { userId: targetKey.userId } });
        const idsToUpdate = allKeys.filter(k => {
            let t = typeof k.deviceTelemetry === 'string' ? safeJsonParse(k.deviceTelemetry) : {};
            let name = t.device_model || k.deviceName || 'Unknown Device';
            return name === dName;
        }).map(k => k.id);

        await prisma.userKey.updateMany({
            where: { id: { in: idsToUpdate } },
            data: { status: status, lastStatusChange: new Date() }
        });
        res.json({ success: true });
    } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.renameDevice = async (req, res) => {
    const { id } = req.params; const { newName } = req.body;
    try {
        const targetKey = await prisma.userKey.findUnique({ where: { credentialId: id } });
        if (!targetKey) return res.status(404).json({ error: "Device not found" });

        let tel = typeof targetKey.deviceTelemetry === 'string' ? safeJsonParse(targetKey.deviceTelemetry) : {};
        let dName = tel.device_model || targetKey.deviceName || 'Unknown Device';

        const allKeys = await prisma.userKey.findMany({ where: { userId: targetKey.userId } });
        const keysToUpdate = allKeys.filter(k => {
            let t = typeof k.deviceTelemetry === 'string' ? safeJsonParse(k.deviceTelemetry) : {};
            let name = t.device_model || k.deviceName || 'Unknown Device';
            return name === dName;
        });

        for (let k of keysToUpdate) {
            let t = typeof k.deviceTelemetry === 'string' ? safeJsonParse(k.deviceTelemetry) : {};
            t.device_model = newName; 
            await prisma.userKey.update({
                where: { id: k.id },
                data: { deviceName: newName, deviceTelemetry: JSON.stringify(t) }
            });
        }
        res.json({ success: true });
    } catch (err) { res.status(500).json({ error: err.message }); }
};