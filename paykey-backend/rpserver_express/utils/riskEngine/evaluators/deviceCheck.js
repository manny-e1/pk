const prisma = require('../../../config/db');

/**
 * EVALUASI DEVICE (FOKUS: NEW DEVICE DETECTION)
 * Hanya mendeteksi jika user menggunakan perangkat yang belum pernah
 * tercatat sukses melakukan login/transaksi sebelumnya.
 */
async function evaluateDevice(context, config) {
    const { telemetry, userId, email } = context;
    const { rules } = config; 
    
    let score = 0;
    let tags = [];
    let breakdown = [];

    // Validasi dasar: Jika tidak ada telemetry atau user, skip
    if (!telemetry || !userId) {
        return { score, tags, breakdown };
    }

    // ====================================================
    // CEK NEW DEVICE (FIRST PAYMENT / LOGIN)
    // ====================================================

    // Cari Rule dengan tipe 'NEW_DEVICE'
    const newDeviceRule = rules.find(r => r.ruleType === 'NEW_DEVICE');
    
    if (newDeviceRule && newDeviceRule.isActive) {
        
        // IDENTIFIER: Prioritaskan device_id (unik dari App), fallback ke Model HP
        const deviceIdentifier = telemetry.device_id || telemetry.device_model || 'Unknown Device';

        // QUERY: Cek History Database
        // "Apakah User ini (email) pernah SUKSES memakai Device ini (deviceIdentifier)?"
        const knownDeviceLog = await prisma.authLog.findFirst({
            where: {
                email: email, 
                status: { in: ['SUCCESS', 'APPROVED'] }, // Hanya hitung yang sukses
                OR: [
                    { device: deviceIdentifier },                 // Cocok persis
                    { userAgent: { contains: deviceIdentifier } } // Cocok parsial (jika pakai browser)
                ]
            },
            // Kita hanya butuh tahu "ada atau tidak", jadi urutan tidak terlalu penting,
            // tapi ambil yang terbaru biar cepat.
            orderBy: { createdAt: 'desc' }
        });

        // LOGIKA PENILAIAN
        if (!knownDeviceLog) {
            
            const riskWeight = newDeviceRule.weight || 30; // Default score 30
            score += riskWeight;
            
            tags.push({ label: 'New Device', class: 'warning' });
            
            breakdown.push({ 
                rule: 'NEW_DEVICE', 
                score: riskWeight, 
                desc: `First time transaction from device: ${deviceIdentifier}` 
            });

            console.log(`[DeviceCheck] 📱 New Device Detected: ${deviceIdentifier}`);
        } 
        else {
            
            console.log(`[DeviceCheck] ✅ Known Device: ${deviceIdentifier}`);
        }
    }

    return { score, tags, breakdown };
}

module.exports = { evaluateDevice };