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