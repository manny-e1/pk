const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'kunci_rahasia_kita_bersama_123';

exports.protect = (req, res, next) => {
    let token;

    if (req.cookies && req.cookies.auth_token) {
        token = req.cookies.auth_token;
    }

    if (!token) {
        return res.status(401).json({ 
            success: false, 
            message: 'Not authorized, no token' 
        });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded; 
        
        next(); 
    } catch (err) {
        return res.status(401).json({ 
            success: false, 
            message: 'Not authorized, token failed' 
        });
    }
};

exports.enrollProtect = async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
        return res.status(401).json({ success: false, message: "Registration session expired" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await prisma.user.findUnique({ where: { id: decoded.id } });
        next();
    } catch (err) {
        return res.status(401).json({ success: false, message: "Invalid registration session" });
    }
};