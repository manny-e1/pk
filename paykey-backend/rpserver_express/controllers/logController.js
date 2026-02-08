const prisma = require('../config/db');

exports.getAuthLogs = async (req, res) => {
    try {
        const logs = await prisma.authLog.findMany({
            take: 100,
            orderBy: { createdAt: 'desc' },
            // Include user relation jika ingin menampilkan nama user di tabel log
            include: {
                user: {
                    select: { fullName: true }
                }
            }
        });

        // DATA TRANSFORMATION
        // Kita perlu memastikan 'riskTags' dikirim dalam format yang benar (Array)
        const formattedLogs = logs.map(log => {
            let parsedTags = [];
            
            // Cek apakah riskTags ada isinya
            if (log.riskTags) {
                // Jika sudah berupa object/array (karena tipe Json di Prisma), pakai langsung
                if (typeof log.riskTags === 'object') {
                    parsedTags = log.riskTags;
                } 
                // Jika tersimpan sebagai string, coba parse
                else if (typeof log.riskTags === 'string') {
                    try {
                        parsedTags = JSON.parse(log.riskTags);
                    } catch (e) {
                        // Jika gagal parse, anggap string biasa dan masukkan ke array
                        parsedTags = [log.riskTags];
                    }
                }
            }

            return {
                ...log,
                riskTags: parsedTags, // Pastikan frontend menerima Array
                userName: log.user?.fullName || 'Unknown User' // Tambahan info nama
            };
        });

        res.json(formattedLogs);
    } catch (err) {
        console.error("Get Auth Logs Error:", err);
        res.status(500).json({ error: err.message });
    }
};