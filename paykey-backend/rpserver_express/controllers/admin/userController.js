// // const prisma = require('../config/db');

// // // exports.getAllUsers = async (req, res) => {
// // //     try {
// // //         const users = await prisma.user.findMany({
// // //             include: { keys: true },
// // //             orderBy: { createdAt: 'desc' }
// // //         });

// // //         const formattedUsers = users.map(user => ({
// // //             id: user.id,
// // //             name: user.fullName,
// // //             initials: user.fullName ? user.fullName.match(/\b\w/g || []).shift() + (user.fullName.split(' ').length > 1 ? user.fullName.split(' ').pop()[0] : '') : 'U',
// // //             email: user.email,
// // //             mobile: user.mobile || 'N/A', 
            
// // //             status: user.status || 'active', 

// // //             joined: new Date(user.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
// // //             lastActive: user.lastLogin ? new Date(user.lastLogin).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Never',
// // //             devices: user.keys.map(key => ({
// // //                 id: key.id.toString(),
// // //                 name: key.deviceName || 'Unknown Device',
// // //                 model: key.credentialId,
// // //                 type: (key.deviceName && key.deviceName.toLowerCase().includes('phone')) ? 'mobile' : 'desktop',
// // //                 status: key.status ? key.status.toLowerCase() : 'active',
// // //                 lastUsed: new Date(key.lastActive).toLocaleDateString()
// // //             }))
// // //         }));

// // //         res.json(formattedUsers);
// // //     } catch (err) {
// // //         console.error(err);
// // //         res.status(500).json({ error: err.message });
// // //     }
// // // };

// // exports.getAllUsers = async (req, res) => {
// //     try {
// //         // Ambil data user beserta tabel AuthDeviceKey (tempat FIDO2, PIN, BIO_LEGACY tersimpan)
// //         const users = await prisma.user.findMany({
// //             include: { authDeviceKeys: true }, 
// //             orderBy: { createdAt: 'desc' }
// //         });

// //         const formattedUsers = users.map(user => {
// //             const deviceMap = {};
            
// //             // Lakukan Grouping berdasarkan Hardware ID
// //             if (user.authDeviceKeys && user.authDeviceKeys.length > 0) {
// //                 user.authDeviceKeys.forEach(key => {
// //                     const hwId = key.deviceId; // Contoh: "SAMSUNG S23 (A1B2C3)"
                    
// //                     if (!deviceMap[hwId]) {
// //                         deviceMap[hwId] = {
// //                             id: key.id.toString(),
// //                             name: hwId,
// //                             type: hwId.toLowerCase().includes('iphone') || hwId.toLowerCase().includes('ipad') ? 'ios' : 'android',
// //                             status: key.status ? key.status.toLowerCase() : 'active',
// //                             lastUsed: new Date(key.createdAt).toLocaleDateString(),
// //                             methods: [] // Keranjang metode autentikasi
// //                         };
// //                     }
                    
// //                     // Masukkan metode ke dalam keranjang
// //                     if (!deviceMap[hwId].methods.includes(key.authType)) {
// //                         deviceMap[hwId].methods.push(key.authType);
// //                     }
// //                 });
// //             }

// //             return {
// //                 id: user.id,
// //                 name: user.fullName,
// //                 initials: user.fullName ? user.fullName.match(/\b\w/g || []).shift() + (user.fullName.split(' ').length > 1 ? user.fullName.split(' ').pop()[0] : '') : 'U',
// //                 email: user.email,
// //                 mobile: user.mobile || 'N/A', 
// //                 status: user.status || 'active', 
// //                 joined: new Date(user.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
// //                 lastActive: user.lastLogin ? new Date(user.lastLogin).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Never',
                
// //                 devices: Object.values(deviceMap) // Ubah map menjadi list array
// //             };
// //         });

// //         res.json(formattedUsers);
// //     } catch (err) {
// //         res.status(500).json({ error: err.message });
// //     }
// // };

// // exports.updateUserStatus = async (req, res) => {
// //     const { id } = req.params;
// //     const { status, reason, note } = req.body;

// //     console.log(`[UPDATE] User ${id} -> ${status} (Reason: ${reason})`);

// //     try {
// //         const updatedUser = await prisma.user.update({
// //             where: { id: id },
// //             data: { 
// //                 status: status,
// //                 suspendReason: status === 'suspended' ? reason : null,
// //                 suspendNote: status === 'suspended' ? note : null
// //             }
// //         });

// //         res.json({ 
// //             success: true, 
// //             message: "Status updated successfully",
// //             data: updatedUser 
// //         });
// //     } catch (err) {
// //         console.error("Gagal update status:", err);
// //         res.status(500).json({ error: "Gagal menyimpan status ke database." });
// //     }
// // };

// const prisma = require('../config/db');

// exports.getAllUsers = async (req, res) => {
//     try {
//         // PERBAIKAN: Gunakan 'deviceKeys' sesuai dengan saran dari error Prisma
//         const users = await prisma.user.findMany({
//             include: { deviceKeys: true }, 
//             orderBy: { createdAt: 'desc' }
//         });

//         const formattedUsers = users.map(user => {
//             const deviceMap = {};
            
//             // PERBAIKAN: Looping menggunakan user.deviceKeys
//             if (user.deviceKeys && user.deviceKeys.length > 0) {
//                 user.deviceKeys.forEach(key => {
//                     const hwId = key.deviceId; // Mengambil Hardware ID, misal: "SAMSUNG S23 (A1B2C3)"
                    
//                     if (!deviceMap[hwId]) {
//                         deviceMap[hwId] = {
//                             id: key.id.toString(),
//                             name: hwId,
//                             type: hwId.toLowerCase().includes('iphone') || hwId.toLowerCase().includes('ipad') ? 'ios' : 'android',
//                             status: key.status ? key.status.toLowerCase() : 'active',
//                             lastUsed: new Date(key.createdAt).toLocaleDateString(),
//                             methods: [] // Keranjang metode autentikasi
//                         };
//                     }
                    
//                     // Masukkan metode (FIDO2, PIN, BIO_LEGACY) ke dalam keranjang
//                     if (!deviceMap[hwId].methods.includes(key.authType)) {
//                         deviceMap[hwId].methods.push(key.authType);
//                     }
//                 });
//             }

//             return {
//                 id: user.id,
//                 name: user.fullName,
//                 // Membuat inisial nama secara otomatis
//                 initials: user.fullName ? user.fullName.match(/\b\w/g || []).shift() + (user.fullName.split(' ').length > 1 ? user.fullName.split(' ').pop()[0] : '') : 'U',
//                 email: user.email,
//                 mobile: user.mobile || 'N/A', 
//                 status: user.status || 'active', 
//                 joined: new Date(user.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
//                 lastActive: user.lastLogin ? new Date(user.lastLogin).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Never',
                
//                 // Ubah objek map menjadi array untuk Frontend
//                 devices: Object.values(deviceMap) 
//             };
//         });

//         res.json(formattedUsers);
//     } catch (err) {
//         console.error("User Controller Error:", err);
//         res.status(500).json({ error: err.message });
//     }
// };

// exports.updateUserStatus = async (req, res) => {
//     const { id } = req.params;
//     const { status, reason, note } = req.body;

//     console.log(`[UPDATE] User ${id} -> ${status} (Reason: ${reason})`);

//     try {
//         const updatedUser = await prisma.user.update({
//             where: { id: id },
//             data: { 
//                 status: status,
//                 suspendReason: status === 'suspended' ? reason : null,
//                 suspendNote: status === 'suspended' ? note : null
//             }
//         });

//         res.json({ 
//             success: true, 
//             message: "Status updated successfully",
//             data: updatedUser 
//         });
//     } catch (err) {
//         console.error("Gagal update status:", err);
//         res.status(500).json({ error: "Gagal menyimpan status ke database." });
//     }
// };

const prisma = require('../../config/db');

const formatMethods = (methods) => {
    const map = { 'FIDO2': 'Passkey', 'BIO_LEGACY': 'Biometrics', 'PIN': 'App PIN', 'EMAIL_OTP': 'Email OTP' };
    return methods.map(m => map[m] || m).join(', ');
};

const safeJsonParse = (str) => {
    try { return str ? JSON.parse(str) : {}; } 
    catch (e) { return {}; }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany({
            include: { keys: true }, 
            orderBy: { createdAt: 'desc' }
        });

        const formattedUsers = users.map(user => {
            const deviceMap = {};
            
            if (user.keys && user.keys.length > 0) {
                user.keys.forEach(k => {
                    let tel = typeof k.deviceTelemetry === 'string' ? safeJsonParse(k.deviceTelemetry) : (k.deviceTelemetry || {});
                    
                    // 1. Tentukan Nama Device dengan Fallback yang rapi
                    let rawDeviceName = tel.device_model || k.deviceName;
                    const dName = rawDeviceName && rawDeviceName !== 'Unknown Device' ? rawDeviceName : 'Generic Device';
                    
                    // Deteksi Auth Type
                    let authType = 'FIDO2';
                    const transportsStr = typeof k.transports === 'string' ? k.transports : JSON.stringify(k.transports || []);
                    if (transportsStr.includes('PIN')) authType = 'PIN';
                    else if (transportsStr.includes('BIO_LEGACY')) authType = 'BIO_LEGACY';
                    else if (transportsStr.includes('EMAIL_OTP')) authType = 'EMAIL_OTP';

                    // 2. Format OS
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

                    // ==============================================================
                    // PERBAIKAN: SMART DEVICE TYPE DETECTION (Disamakan dengan DeviceController)
                    // ==============================================================
                    let deviceType = 'desktop'; // Default
                    
                    const dNameLow = dName.toLowerCase();
                    const osLow = (osBase || tel.os_name || '').toLowerCase();
                    const telTypeLow = (tel.device_type || '').toLowerCase();
                    const transLow = transportsStr.toLowerCase();

                    // A. Hardware Key
                    if (transLow.includes('usb') || transLow.includes('nfc') || transLow.includes('ble') || dNameLow.includes('yubikey') || dNameLow.includes('security key') || dNameLow.includes('token')) {
                        deviceType = 'hardware';
                    } 
                    // B. Mobile
                    else if (osLow.includes('android') || osLow.includes('ios') || dNameLow.includes('iphone') || dNameLow.includes('ipad') || dNameLow.includes('emulator') || telTypeLow === 'mobile' || telTypeLow === 'android') {
                        deviceType = 'mobile';
                    }

                    // 3. Masukkan ke Keranjang (Grouping)
                    if (!deviceMap[dName]) {
                        deviceMap[dName] = {
                            id: k.id.toString(),
                            name: dName,
                            osBase: osBase.trim(),
                            type: deviceType, // <-- Menggunakan deteksi pintar yang baru
                            status: k.status ? k.status.toLowerCase() : 'active',
                            lastUsed: new Date(k.lastActive || k.createdAt).toLocaleDateString(),
                            methods: []
                        };
                    }
                    if (!deviceMap[dName].methods.includes(authType)) {
                        deviceMap[dName].methods.push(authType);
                    }
                });
            }

            const deviceCards = Object.values(deviceMap).map(d => ({
                id: d.id,
                name: d.name,
                model: d.osBase ? `${d.osBase} • ${formatMethods(d.methods)}` : formatMethods(d.methods), 
                type: d.type, // 'mobile', 'desktop', atau 'hardware'
                status: d.status,
                lastUsed: d.lastUsed
            }));

            return {
                id: user.id,
                name: user.fullName,
                initials: user.fullName ? user.fullName.match(/\b\w/g || []).shift() + (user.fullName.split(' ').length > 1 ? user.fullName.split(' ').pop()[0] : '') : 'U',
                email: user.email,
                mobile: user.mobile || 'N/A', 
                status: user.status || 'active', 
                joined: new Date(user.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
                lastActive: user.lastLogin ? new Date(user.lastLogin).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Never',
                devices: deviceCards 
            };
        });

        res.json(formattedUsers);
    } catch (err) {
        console.error("User Controller Error:", err);
        res.status(500).json({ error: err.message });
    }
};

exports.updateUserStatus = async (req, res) => {
    const { id } = req.params;
    const { status, reason, note } = req.body;

    console.log(`[UPDATE] User ${id} -> ${status} (Reason: ${reason})`);

    try {
        const updatedUser = await prisma.user.update({
            where: { id: id },
            data: { 
                status: status,
                suspendReason: status === 'suspended' ? reason : null,
                suspendNote: status === 'suspended' ? note : null
            }
        });

        res.json({ 
            success: true, 
            message: "Status updated successfully",
            data: updatedUser 
        });
    } catch (err) {
        console.error("Gagal update status:", err);
        res.status(500).json({ error: "Gagal menyimpan status ke database." });
    }
};
