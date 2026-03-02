// const prisma = require('../config/db');

// exports.getDashboardStats = async (req, res) => {
//     try {
//         const { timeRange } = req.query;
        
//         // ==========================================
//         // 1. SETUP TIME RANGE (LOGIKA WAKTU)
//         // ==========================================
//         const now = new Date();
//         const startDate = new Date();
        
//         // Tentukan rentang waktu mundur
//         if (timeRange === '24h') startDate.setDate(now.getDate() - 1);
//         else if (timeRange === '30d') startDate.setDate(now.getDate() - 30);
//         else if (timeRange === '90d') startDate.setDate(now.getDate() - 90);
//         else startDate.setDate(now.getDate() - 7); // Default 7 hari

//         const diffTime = Math.abs(now - startDate);
//         const prevStartDate = new Date(startDate.getTime() - diffTime);

//         // ==========================================
//         // 2. FETCH DATA DARI DATABASE (PARALLEL)
//         // ==========================================
//         const [
//             authLogs, 
//             transactions, 
//             prevAuthCount, 
//             prevTxCount,
//             currentDurationAgg, // [BARU] Agregasi Durasi Periode Ini
//             prevDurationAgg     // [BARU] Agregasi Durasi Periode Lalu
//         ] = await Promise.all([
//             // A. Ambil Log Autentikasi
//             prisma.authLog.findMany({
//                 where: { createdAt: { gte: startDate } },
//                 select: { 
//                     id: true, 
//                     createdAt: true, 
//                     status: true, 
//                     email: true, 
//                     userAgent: true, 
//                     countryCode: true 
//                 }
//             }),
//             // B. Ambil Transaksi
//             prisma.transaction.findMany({
//                 where: { timestamp: { gte: startDate } },
//                 select: { 
//                     id: true, 
//                     timestamp: true, 
//                     authResult: true, 
//                     userId: true, 
//                     deviceInfo: true, 
//                     amount: true 
//                 } 
//             }),
//             // C. Hitung Total Periode Sebelumnya (Untuk Tren Login/Tx)
//             prisma.authLog.count({ where: { createdAt: { gte: prevStartDate, lt: startDate } } }),
//             prisma.transaction.count({ where: { timestamp: { gte: prevStartDate, lt: startDate } } }),

//             // D. [BARU] Hitung Rata-Rata Waktu (Avg Duration)
//             prisma.authLog.aggregate({
//                 _avg: { duration: true },
//                 where: { 
//                     createdAt: { gte: startDate },
//                     duration: { gt: 0 } // Hanya hitung yg datanya valid
//                 }
//             }),
//             prisma.authLog.aggregate({
//                 _avg: { duration: true },
//                 where: { 
//                     createdAt: { gte: prevStartDate, lt: startDate },
//                     duration: { gt: 0 }
//                 }
//             })
//         ]);

//         // ==========================================
//         // 3. UNIFICATION (GABUNG DATA)
//         // ==========================================
//         const unifiedEvents = [
//             ...authLogs.map(l => ({
//                 source: 'auth',
//                 timestamp: l.createdAt,
//                 status: normalizeStatus(l.status),
//                 device: (l.userAgent || "").toLowerCase(),
//                 country: l.countryCode || "Unknown",
//                 amount: 0,
//                 userId: l.email
//             })),
//             ...transactions.map(t => {
//                 let deviceStr = "";
//                 try {
//                     // Handle jika deviceInfo bentuknya JSON object atau string
//                     if (t.deviceInfo) deviceStr = typeof t.deviceInfo === 'string' ? t.deviceInfo : JSON.stringify(t.deviceInfo);
//                 } catch (e) {}

//                 return {
//                     source: 'tx',
//                     timestamp: t.timestamp,
//                     status: normalizeStatus(t.authResult),
//                     device: deviceStr.toLowerCase(),
//                     country: "Unknown", 
//                     amount: t.amount || 0,
//                     userId: t.userId
//                 };
//             })
//         ];

//         // ==========================================
//         // 4. CORE METRICS CALCULATION
//         // ==========================================
        
//         // A. Total & Success Rate Global
//         const totalEvents = unifiedEvents.length;
//         const approved = unifiedEvents.filter(e => e.status === 'APPROVED').length;
//         const prevTotal = prevAuthCount + prevTxCount;
        
//         // B. Unique Users
//         const userSet = new Set();
//         unifiedEvents.forEach(e => { if(e.userId) userSet.add(e.userId); });

//         // C. [BARU] Avg Time Logic (Real dari DB)
//         const currentAvgMs = currentDurationAgg._avg.duration || 0;
//         const prevAvgMs = prevDurationAgg._avg.duration || 0;
        
//         // Format ke string (e.g., "1.25s")
//         const avgTimeVal = currentAvgMs > 0 ? (currentAvgMs / 1000).toFixed(2) + 's' : '0.00s';
        
//         // Hitung Perubahan (Trend Panah)
//         let avgTimeChange = "0.0s";
//         const diffMs = currentAvgMs - prevAvgMs;

//         if (prevAvgMs === 0 && currentAvgMs > 0) {
//             avgTimeChange = "-"; // Data baru ada sekarang
//         } else if (prevAvgMs > 0) {
//             const diffSec = Math.abs(diffMs / 1000).toFixed(2);
//             if (diffMs < 0) avgTimeChange = `↓ -${diffSec}s`; // Lebih Cepat (Bagus)
//             else if (diffMs > 0) avgTimeChange = `↑ +${diffSec}s`; // Lebih Lambat (Buruk)
//         }

//         // ==========================================
//         // 5. DETAILED STATS (LOOPING)
//         // ==========================================
        
//         // Init Containers
//         const chartMap = {};
        
//         // [FIX] Struktur Platform Real
//         const platformStats = {
//             ios: { total: 0, success: 0 },
//             android: { total: 0, success: 0 },
//             web: { total: 0, success: 0 }
//         };

//         const deviceStats = { mobile: 0, desktop: 0, tablet: 0 };
//         const amountTiers = { low: { total: 0, success: 0 }, mid: { total: 0, success: 0 }, high: { total: 0, success: 0 } };
//         const geoMap = {};

//         // --- SINGLE MAIN LOOP ---
//         unifiedEvents.forEach(evt => {
            
//             // 1. Chart Data Grouping (By Date)
//             const dateObj = new Date(evt.timestamp);
//             if (!isNaN(dateObj)) {
//                 const dateKey = dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
                
//                 if (!chartMap[dateKey]) {
//                     chartMap[dateKey] = { approved: 0, denied: 0, timeout: 0, failed: 0, retry: 0 };
//                 }

//                 if (evt.status === 'APPROVED') chartMap[dateKey].approved++;
//                 else if (evt.status === 'DENIED') { chartMap[dateKey].denied++; chartMap[dateKey].failed++; }
//                 else { chartMap[dateKey].timeout++; chartMap[dateKey].retry++; }
//             }

//             // 2. Platform & Device Logic
//             const d = evt.device;
//             let pKey = 'web'; // Default

//             if (d.includes('iphone') || d.includes('ipad') || d.includes('ios') || d.includes('macintosh')) {
//                 pKey = 'ios';
//                 if (d.includes('ipad')) deviceStats.tablet++;
//                 else deviceStats.mobile++; 
//             } else if (d.includes('android')) {
//                 pKey = 'android';
//                 deviceStats.mobile++;
//             } else {
//                 pKey = 'web';
//                 deviceStats.desktop++;
//             }

//             // [FIX] Update Counter Platform
//             if (platformStats[pKey]) {
//                 platformStats[pKey].total++;
//                 if (evt.status === 'APPROVED') {
//                     platformStats[pKey].success++;
//                 }
//             }

//             // 3. Amount Tiers (Khusus Transaksi)
//             if (evt.source === 'tx') {
//                 let cat = 'low';
//                 if (evt.amount > 1000) cat = 'high';
//                 else if (evt.amount >= 100) cat = 'mid';
                
//                 amountTiers[cat].total++;
//                 if (evt.status === 'APPROVED') amountTiers[cat].success++;
//             }

//             // 4. Geo Stats
//             if (evt.country && evt.country !== "Unknown") {
//                 geoMap[evt.country] = (geoMap[evt.country] || 0) + 1;
//             }
//         });

//         // ==========================================
//         // 6. FORMATTING & RESPONSE
//         // ==========================================

//         // Sort Chart Data by Date
//         const sortedDates = Object.keys(chartMap).sort((a, b) => new Date(a) - new Date(b));

//         // Sort Top Regions
//         const topRegions = Object.keys(geoMap)
//             .map(k => ({ code: k, count: geoMap[k], pct: ((geoMap[k]/totalEvents)*100).toFixed(1)+'%' }))
//             .sort((a, b) => b.count - a.count).slice(0, 5);

//         res.json({
//             metrics: {
//                 totalTx: totalEvents,
//                 uniqueUsers: userSet.size,
//                 successRate: totalEvents > 0 ? ((approved/totalEvents)*100).toFixed(1) : "0.0",
//                 txChange: totalEvents - prevTotal,
//                 // [BARU] Data Real
//                 avgTime: avgTimeVal,
//                 avgTimeChange: avgTimeChange
//             },
//             funnel: { total: totalEvents, requested: totalEvents, approved },
            
//             trendChart: {
//                 labels: sortedDates,
//                 approved: sortedDates.map(k => chartMap[k].approved),
//                 denied: sortedDates.map(k => chartMap[k].denied),
//                 timeout: sortedDates.map(k => chartMap[k].timeout)
//             },
//             securityChart: {
//                 labels: sortedDates,
//                 failed: sortedDates.map(k => chartMap[k].failed),
//                 retry: sortedDates.map(k => chartMap[k].retry)
//             },
            
//             deviceStats,
            
//             // [FIX] Output Platform Real (Hitung Persentase di sini)
//             platformStats: [
//                 { name: 'iOS', total: platformStats.ios.total, successRate: calcRate(platformStats.ios) },
//                 { name: 'Android', total: platformStats.android.total, successRate: calcRate(platformStats.android) },
//                 { name: 'Web', total: platformStats.web.total, successRate: calcRate(platformStats.web) }
//             ],
            
//             amountStats: [
//                 { tier: 'Under $100', tx: `${amountTiers.low.total} txns`, rate: calcRate(amountTiers.low) },
//                 { tier: '$100 - $1,000', tx: `${amountTiers.mid.total} txns`, rate: calcRate(amountTiers.mid) },
//                 { tier: 'Over $1,000', tx: `${amountTiers.high.total} txns`, rate: calcRate(amountTiers.high) }
//             ],
//             geoStats: topRegions
//         });

//     } catch (err) {
//         console.error("Dashboard Stats Error:", err);
//         res.status(500).json({ error: "Failed to fetch stats", details: err.message });
//     }
// };

// // ==========================================
// // HELPERS
// // ==========================================

// function normalizeStatus(status) {
//     if (!status) return 'DENIED';
//     const s = status.toUpperCase();
    
//     // Group SUKSES
//     if (s === 'SUCCESS' || s === 'APPROVED') return 'APPROVED';
    
//     // Group GAGAL (Merah)
//     if (s === 'FAILED' || s === 'BLOCKED' || s === 'REJECTED' || s === 'DENIED') return 'DENIED';
    
//     // Group WARNING (Kuning)
//     return 'TIMEOUT'; 
// }

// function calcRate(obj) {
//     // Menghindari pembagian dengan nol (NaN)
//     if (!obj || obj.total === 0) return '0.0%';
//     return ((obj.success / obj.total) * 100).toFixed(1) + '%';
// }

const prisma = require('../config/db');

exports.getDashboardStats = async (req, res) => {
    try {
        const { timeRange } = req.query;
        
        // ==========================================
        // 1. SETUP TIME RANGE (LOGIKA WAKTU)
        // ==========================================
        const now = new Date();
        const startDate = new Date();
        
        if (timeRange === '24h') startDate.setDate(now.getDate() - 1);
        else if (timeRange === '30d') startDate.setDate(now.getDate() - 30);
        else if (timeRange === '90d') startDate.setDate(now.getDate() - 90);
        else startDate.setDate(now.getDate() - 7); // Default 7 hari

        const diffTime = now.getTime() - startDate.getTime();
        const prevStartDate = new Date(startDate.getTime() - diffTime);

        // ==========================================
        // 2. FETCH DATA DARI DATABASE (PARALLEL)
        // ==========================================
        const [
            authLogs, 
            transactions, 
            prevAuthCount, 
            prevTxCount,
            currentDurationAgg, 
            prevDurationAgg     
        ] = await Promise.all([
            // A. Ambil Log Autentikasi
            prisma.authLog.findMany({
                where: { createdAt: { gte: startDate } },
                select: { 
                    id: true, 
                    createdAt: true, 
                    status: true, 
                    email: true, 
                    userAgent: true, 
                    countryCode: true,
                    eventType: true // PENTING: Untuk memfilter registrasi admin
                }
            }),
            // B. Ambil Transaksi
            prisma.transaction.findMany({
                where: { timestamp: { gte: startDate } },
                select: { 
                    id: true, 
                    timestamp: true, 
                    authResult: true, 
                    userId: true, 
                    deviceInfo: true, 
                    amount: true 
                } 
            }),
            // C. Hitung Total Periode Sebelumnya (Exclude Registrations)
            prisma.authLog.count({ 
                where: { 
                    createdAt: { gte: prevStartDate, lt: startDate },
                    NOT: [
                        { eventType: { contains: 'Register' } },
                        { eventType: { contains: 'Registered' } }
                    ]
                } 
            }),
            prisma.transaction.count({ where: { timestamp: { gte: prevStartDate, lt: startDate } } }),

            // D. Hitung Rata-Rata Waktu
            prisma.authLog.aggregate({
                _avg: { duration: true },
                where: { createdAt: { gte: startDate }, duration: { gt: 0 } }
            }),
            prisma.authLog.aggregate({
                _avg: { duration: true },
                where: { createdAt: { gte: prevStartDate, lt: startDate }, duration: { gt: 0 } }
            })
        ]);

        // ==========================================
        // 3. UNIFICATION & FILTERING (GABUNG DATA)
        // ==========================================
        const unifiedEvents = [];

        // Proses AuthLogs (Filter Admin Registrations)
        authLogs.forEach(l => {
            const eventTypeStr = (l.eventType || '').toLowerCase();
            
            // KLIEN REQUEST: Exclude Admin Portal Signup/Registration
            if (eventTypeStr.includes('register') || eventTypeStr.includes('signup')) {
                return; // Lewati event ini
            }

            unifiedEvents.push({
                source: 'auth',
                timestamp: l.createdAt,
                status: normalizeStatus(l.status),
                device: (l.userAgent || "").toLowerCase(),
                country: l.countryCode || "Unknown",
                amount: 0,
                userId: l.email || 'unknown_user'
            });
        });

        // Proses Transactions
        transactions.forEach(t => {
            let deviceStr = "";
            try {
                if (t.deviceInfo) deviceStr = typeof t.deviceInfo === 'string' ? t.deviceInfo : JSON.stringify(t.deviceInfo);
            } catch (e) {}

            unifiedEvents.push({
                source: 'tx',
                timestamp: t.timestamp,
                status: normalizeStatus(t.authResult),
                device: deviceStr.toLowerCase(),
                country: "Unknown", 
                amount: t.amount || 0,
                userId: t.userId || 'unknown_user'
            });
        });

        // ==========================================
        // 4. CORE METRICS CALCULATION
        // ==========================================
        
        const totalEvents = unifiedEvents.length;
        const approved = unifiedEvents.filter(e => e.status === 'APPROVED').length;
        const prevTotal = prevAuthCount + prevTxCount;
        
        const userSet = new Set();
        unifiedEvents.forEach(e => { if(e.userId && e.userId !== 'unknown_user') userSet.add(e.userId); });

        const currentAvgMs = currentDurationAgg._avg.duration || 0;
        const prevAvgMs = prevDurationAgg._avg.duration || 0;
        
        const avgTimeVal = currentAvgMs > 0 ? (currentAvgMs / 1000).toFixed(2) + 's' : '0.00s';
        
        let avgTimeChange = "0.0s";
        const diffMs = currentAvgMs - prevAvgMs;

        if (prevAvgMs === 0 && currentAvgMs > 0) {
            avgTimeChange = "-"; 
        } else if (prevAvgMs > 0) {
            const diffSec = Math.abs(diffMs / 1000).toFixed(2);
            if (diffMs < 0) avgTimeChange = `↓ -${diffSec}s`; 
            else if (diffMs > 0) avgTimeChange = `↑ +${diffSec}s`; 
        }

        // ==========================================
        // 5. DETAILED STATS (LOOPING)
        // ==========================================
        
        const chartMap = {};
        
        const platformStats = {
            ios: { total: 0, success: 0 },
            android: { total: 0, success: 0 },
            web: { total: 0, success: 0 }
        };

        const deviceStats = { mobile: 0, desktop: 0, tablet: 0 };
        const amountTiers = { low: { total: 0, success: 0 }, mid: { total: 0, success: 0 }, high: { total: 0, success: 0 } };
        const geoMap = {};

        unifiedEvents.forEach(evt => {
            
            // 1. Chart Data Grouping
            const dateObj = new Date(evt.timestamp);
            if (!isNaN(dateObj)) {
                const dateKey = dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
                
                if (!chartMap[dateKey]) {
                    chartMap[dateKey] = { 
                        approved: 0, denied: 0, timeout: 0, 
                        failedUsers: new Set(), // [FIX] Menggunakan Set untuk menghitung PER USER
                        retry: 0 
                    };
                }

                if (evt.status === 'APPROVED') {
                    chartMap[dateKey].approved++;
                } else if (evt.status === 'DENIED') { 
                    chartMap[dateKey].denied++; 
                    chartMap[dateKey].failedUsers.add(evt.userId); // Simpan ID User yang gagal
                } else { 
                    chartMap[dateKey].timeout++; chartMap[dateKey].retry++; 
                }
            }

            // 2. Platform & Device Logic (FIXED)
            const d = evt.device;
            let pKey = 'web';

            // [FIX] Perbaikan Regex Deteksi Perangkat Android Tiongkok & Samsung
            if (d.includes('android') || d.match(/vivo|samsung|oppo|xiaomi|redmi|poco|realme/)) {
                pKey = 'android';
                deviceStats.mobile++;
            } else if (d.includes('iphone') || d.includes('ipad') || d.includes('ios')) {
                // Macintosh dihapus dari sini karena Macintosh adalah Mac OS (Web/Desktop)
                pKey = 'ios';
                if (d.includes('ipad')) deviceStats.tablet++;
                else deviceStats.mobile++; 
            } else {
                pKey = 'web';
                deviceStats.desktop++;
            }

            if (platformStats[pKey]) {
                platformStats[pKey].total++;
                if (evt.status === 'APPROVED') {
                    platformStats[pKey].success++;
                }
            }

            // 3. Amount Tiers 
            if (evt.source === 'tx') {
                let cat = 'low';
                if (evt.amount > 1000) cat = 'high';
                else if (evt.amount >= 100) cat = 'mid';
                
                amountTiers[cat].total++;
                if (evt.status === 'APPROVED') amountTiers[cat].success++;
            }

            // 4. Geo Stats
            if (evt.country && evt.country !== "Unknown") {
                geoMap[evt.country] = (geoMap[evt.country] || 0) + 1;
            }
        });

        // ==========================================
        // 6. FORMATTING & RESPONSE
        // ==========================================

        const sortedDates = Object.keys(chartMap).sort((a, b) => new Date(a) - new Date(b));

        const topRegions = Object.keys(geoMap)
            .map(k => ({ code: k, count: geoMap[k], pct: ((geoMap[k]/totalEvents)*100).toFixed(1)+'%' }))
            .sort((a, b) => b.count - a.count).slice(0, 5);

        res.json({
            metrics: {
                totalTx: totalEvents,
                uniqueUsers: userSet.size,
                successRate: totalEvents > 0 ? ((approved/totalEvents)*100).toFixed(1) : "0.0",
                txChange: totalEvents - prevTotal,
                avgTime: avgTimeVal,
                avgTimeChange: avgTimeChange
            },
            funnel: { total: totalEvents, requested: totalEvents, approved },
            
            trendChart: {
                labels: sortedDates,
                approved: sortedDates.map(k => chartMap[k].approved),
                denied: sortedDates.map(k => chartMap[k].denied),
                timeout: sortedDates.map(k => chartMap[k].timeout)
            },
            securityChart: {
                labels: sortedDates,
                // [FIX] Kita hitung panjang Set-nya (Jumlah User unik yang gagal)
                failed: sortedDates.map(k => chartMap[k].failedUsers.size),
                retry: sortedDates.map(k => chartMap[k].retry)
            },
            
            deviceStats,
            
            platformStats: [
                { name: 'iOS', total: platformStats.ios.total, successRate: calcRate(platformStats.ios) },
                { name: 'Android', total: platformStats.android.total, successRate: calcRate(platformStats.android) },
                { name: 'Web', total: platformStats.web.total, successRate: calcRate(platformStats.web) }
            ],
            
            amountStats: [
                { tier: 'Under $100', tx: `${amountTiers.low.total} txns`, rate: calcRate(amountTiers.low) },
                { tier: '$100 - $1,000', tx: `${amountTiers.mid.total} txns`, rate: calcRate(amountTiers.mid) },
                { tier: 'Over $1,000', tx: `${amountTiers.high.total} txns`, rate: calcRate(amountTiers.high) }
            ],
            geoStats: topRegions
        });

    } catch (err) {
        console.error("Dashboard Stats Error:", err);
        res.status(500).json({ error: "Failed to fetch stats", details: err.message });
    }
};

// ==========================================
// HELPERS
// ==========================================

function normalizeStatus(status) {
    if (!status) return 'DENIED';
    const s = status.toUpperCase();
    if (s === 'SUCCESS' || s === 'APPROVED') return 'APPROVED';
    if (s === 'FAILED' || s === 'BLOCKED' || s === 'REJECTED' || s === 'DENIED') return 'DENIED';
    return 'TIMEOUT'; 
}

function calcRate(obj) {
    if (!obj || obj.total === 0) return '0.0%';
    return ((obj.success / obj.total) * 100).toFixed(1) + '%';
}