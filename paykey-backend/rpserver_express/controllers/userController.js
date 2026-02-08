const prisma = require('../config/db');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany({
            include: { keys: true },
            orderBy: { createdAt: 'desc' }
        });

        const formattedUsers = users.map(user => ({
            id: user.id,
            name: user.fullName,
            // Logic initials
            initials: user.fullName ? user.fullName.match(/\b\w/g || []).shift() + (user.fullName.split(' ').length > 1 ? user.fullName.split(' ').pop()[0] : '') : 'U',
            email: user.email,
            mobile: "+62 812 3456 7890", 
            
            // PENTING: Ambil status asli dari DB
            status: user.status || 'active', 

            joined: new Date(user.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
            lastActive: 'Now',
            devices: user.keys.map(key => ({
                id: key.id.toString(),
                name: key.deviceName || 'Unknown Device',
                model: 'FIDO2 Token',
                type: (key.deviceName && key.deviceName.toLowerCase().includes('phone')) ? 'mobile' : 'desktop',
                status: key.status ? key.status.toLowerCase() : 'active',
                lastUsed: new Date(key.lastActive).toLocaleDateString()
            }))
        }));

        res.json(formattedUsers);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};

// PUT: Update Status (LOGIKA SIMPAN PERMANEN)
exports.updateUserStatus = async (req, res) => {
    const { id } = req.params;
    const { status, reason, note } = req.body;

    console.log(`[UPDATE] User ${id} -> ${status} (Reason: ${reason})`);

    try {
        // Update ke Database MySQL via Prisma
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