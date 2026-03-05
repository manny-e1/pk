const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'kunci_rahasia_kita_bersama_123';

exports.sendTokenCookie = (res, user) => {
    const token = jwt.sign(
        { id: user.id, email: user.email, role: user.role },
        JWT_SECRET,
        { expiresIn: '1d' }
    );

    const isProduction = process.env.NODE_ENV === 'production';

    res.cookie('auth_token', token, {
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
        httpOnly: true,
        
        secure: isProduction, 

        domain: isProduction ? '.authkey.my' : 'localhost',
        
        sameSite: 'lax' 
    });
};