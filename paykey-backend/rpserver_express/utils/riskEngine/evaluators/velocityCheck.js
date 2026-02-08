const prisma = require('../../../config/db');

async function evaluateVelocity(context, config) {
    const { userId } = context;
    const { rules } = config;

    let score = 0;
    let tags = [];
    let breakdown = [];

    // [FIX] GUNAKAN 'ruleType' BUKAN 'ruleName'
    // ruleType selalu 'VELOCITY_LIMIT', sedangkan ruleName bisa 'High Velocity Transaction'
    const velocityRule = rules.find(r => r.ruleType === 'VELOCITY_LIMIT');

    // Cek parameter kosong (untuk jaga-jaga)
    const params = velocityRule?.parameters || {};
    const maxCount = params.maxCount || 5; 
    const minutes = params.windowMinutes || 10;
    
    // Pastikan Rule Ada, Aktif, dan User ID tersedia
    if (velocityRule && velocityRule.isActive && userId) {
        
        // Hitung batas waktu mundur (misal: 10 menit yang lalu)
        const timeWindow = new Date(Date.now() - (minutes * 60 * 1000));
        
        // Hitung jumlah transaksi user ini sejak waktu tersebut
        const txCount = await prisma.transaction.count({
            where: {
                userId: userId,
                timestamp: { gte: timeWindow }
            }
        });

        console.log(`[VelocityCheck] Count: ${txCount}/${maxCount} in last ${minutes}m`);

        if (txCount >= maxCount) {
            score += velocityRule.weight || velocityRule.riskScore || 50;
            
            tags.push({ label: 'High Velocity', class: 'high' }); // Merah
            
            breakdown.push({ 
                rule: 'VELOCITY', 
                score: score,
                desc: `${txCount} txns in ${minutes}m (Limit: ${maxCount})`
            });

            console.log(`[VelocityCheck] 🚨 LIMIT EXCEEDED!`);
        }
    }

    return { score, tags, breakdown };
}

module.exports = { evaluateVelocity };