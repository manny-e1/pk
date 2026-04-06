const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'kunci_rahasia_kita_bersama_123';

exports.sendTokenCookie = (res, user) => {
    const token = jwt.sign(
        { id: user.id, email: user.email, role: user.role },
        JWT_SECRET,
        { expiresIn: '1d' }
    );

    const isProduction = process.env.NODE_ENV === 'production';
    const cookieOptions = {
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
        httpOnly: true,
        secure: isProduction,
        sameSite: 'lax'
    };

    // In local dev, don't set explicit domain; host-only cookies are more reliable on localhost.
    if (isProduction) cookieOptions.domain = '.authkey.my';

    res.cookie('auth_token', token, cookieOptions);
};