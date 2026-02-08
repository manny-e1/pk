const prisma = require('../../../config/db');

/**
 * Evaluasi Dormant Account (Akun Tidur)
 * Mengecek kapan terakhir kali user melakukan aktivitas login.
 */
async function evaluateDormant(context, config) {
    const { email } = context; // Kita pakai Email untuk cari log
    const { rules } = config;

    let score = 0;
    let tags = [];
    let breakdown = [];

    // 1. Ambil Rule DORMANT dari Config (Database)
    const dormantRule = rules.find(r => r.ruleType === 'DORMANT');
    
    // Jika rule tidak ada atau dimatikan, skip
    if (!dormantRule || !dormantRule.isActive) {
        return { score, tags, breakdown };
    }

    // Default 180 Hari (6 Bulan) jika parameter tidak ada di DB
    const maxInactiveDays = dormantRule.parameters?.days || 180;

    // 2. Cari Log Terakhir User ini (Selain Log saat ini)
    const lastActivity = await prisma.authLog.findFirst({
        where: {
            email: email,
            // Cari yang sukses saja
            status: { in: ['SUCCESS', 'APPROVED', 'INFO'] },
            // Filter: Waktu harus SEBELUM transaksi yang sedang berlangsung sekarang
            createdAt: { lt: new Date() } 
        },
        orderBy: { createdAt: 'desc' }
    });

    // Jika tidak ada log history (User Baru), dianggap Aman/Aktif
    if (!lastActivity) {
        return { score, tags, breakdown };
    }

    // 3. Hitung Selisih Hari
    const lastSeenTime = new Date(lastActivity.createdAt).getTime();
    const nowTime = Date.now();
    const diffMs = nowTime - lastSeenTime;
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    console.log(`[DormantCheck] User '${email}' last seen: ${diffDays} days ago.`);

    // 4. Bandingkan dengan Batas Waktu
    if (diffDays > maxInactiveDays) {
        // KENA RULE DORMANT
        score += dormantRule.weight; 
        
        tags.push({ 
            label: `Dormant User (> ${maxInactiveDays}d)`, 
            class: 'warning' // Kuning
        });
        
        breakdown.push({ 
            rule: 'DORMANT', 
            score: dormantRule.weight, 
            desc: `Inactive for ${diffDays} days (Threshold: ${maxInactiveDays})` 
        });

        console.log(`[DormantCheck] 💤 ALERT: Dormant Account Reactivated!`);
    }

    return { score, tags, breakdown };
}

module.exports = { evaluateDormant };