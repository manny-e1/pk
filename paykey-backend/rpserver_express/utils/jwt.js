const jwt = require('jsonwebtoken');

// Gunakan key yang sama dengan middleware
const JWT_SECRET = process.env.JWT_SECRET || 'kunci_rahasia_kita_bersama_123';

exports.sendTokenCookie = (res, user) => {
    // 1. Buat Token
    const token = jwt.sign(
        { id: user.id, email: user.email, role: user.role },
        JWT_SECRET,
        { expiresIn: '1d' }
    );

    // 2. Tentukan Mode (Production vs Development)
    // Jika di localhost, kita harus 'false' agar cookie mau tersimpan via HTTP biasa
    const isProduction = process.env.NODE_ENV === 'production';

    // 3. Kirim Cookie
    res.cookie('auth_token', token, {
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 1 Hari
        httpOnly: true, // Wajib true (Anti XSS)
        
        // [FIX PENTING] 
        // Jangan true di localhost! Browser akan menolak cookie-nya.
        secure: isProduction, 

        domain: isProduction ? '.authkey.my' : 'localhost',
        
        // 'lax' paling aman untuk navigasi normal
        sameSite: 'lax' 
    });
};