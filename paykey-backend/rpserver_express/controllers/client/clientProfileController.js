const prisma = require('../../config/db');

exports.getMe = async (req, res) => {
    try {
        // req.user diset oleh middleware JWT
        const user = await prisma.user.findUnique({
            where: { id: req.user.id },
            select: { 
                id: true, fullName: true, email: true, 
                companyName: true, role: true, mobile: true 
            }
        });
        res.json({ data: user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};