const bcrypt = require('bcrypt');
const prisma = require('../config/db');
const { sendTokenCookie } = require('../utils/jwt');
const { createRichAuthLog } = require('../utils/richLogger'); 

// ==================================================================
// CONTROLLERS
// ==================================================================

exports.registerPassword = async (req, res) => {
    const { fullName, email, password, companyName, mobile, role, device_telemetry } = req.body;
    
    try {
        // 1. Hash Password
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // 2. Create User
        // Cek duplikasi manual agar bisa log error spesifik (opsional, prisma throw error juga bisa)
        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            await createRichAuthLog(req, { email, id: 'unknown' }, {
                eventType: 'REGISTRATION_FAILED',
                status: 'FAILED',
                authMethod: 'PASSWORD',
                message: 'Email already exists'
            });
            return res.status(400).json({ error: 'Email already registered' });
        }

        const newUser = await prisma.user.create({
            data: { 
                email, fullName, passwordHash: hashedPassword,
                companyName: companyName || null, mobile: mobile || null,
                role: role === 'ADMIN' ? 'ADMIN' : 'USER'
            }
        });

        // 3. Log Success (Modular)
        await createRichAuthLog(req, newUser, {
            eventType: 'REGISTRATION_SUCCESS',
            status: 'SUCCESS',
            authMethod: 'PASSWORD',
            message: 'User registered via Password',
            data: { telemetry: device_telemetry } // Sertakan telemetry di metadata log
        });
        
        // 4. Send Token
        sendTokenCookie(res, newUser);
        res.json({ status: 'success', userId: newUser.id });

    } catch (err) {
        console.error("[Register] Error:", err);
        // 5. Log Failed
        await createRichAuthLog(req, { email, id: 'unknown' }, {
            eventType: 'REGISTRATION_FAILED',
            status: 'FAILED',
            authMethod: 'PASSWORD',
            message: err.message
        });
        res.status(500).json({ error: 'Registration failed' });
    }
};

exports.loginPassword = async (req, res) => {
    const { email, password, device_telemetry } = req.body;
    
    try {
        const user = await prisma.user.findUnique({ where: { email } });
        
        // Cek User Existence
        if (!user || !user.passwordHash) {
            await createRichAuthLog(req, { email, id: 'unknown' }, {
                eventType: 'LOGIN_FAILED',
                status: 'FAILED',
                authMethod: 'PASSWORD',
                message: 'User Not Found or No Password set'
            });
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Cek Role (Sesuai kode lama Anda: Admin Only)
        // [OPSIONAL] Hapus blok ini jika User biasa boleh login password
        if (user.role !== 'ADMIN') {
            await createRichAuthLog(req, user, {
                eventType: 'LOGIN_BLOCKED',
                status: 'BLOCKED',
                authMethod: 'PASSWORD',
                message: 'Role Mismatch (Admin Only)'
            });
            return res.status(403).json({ error: 'Access Denied', message: 'Admins only.' });
        }
        
        // Cek Status Akun
        if (user.status === 'suspended') {
            await createRichAuthLog(req, user, {
                eventType: 'LOGIN_BLOCKED',
                status: 'BLOCKED',
                authMethod: 'PASSWORD',
                message: 'Account Suspended'
            });
            return res.status(403).json({ error: 'Account Suspended' });
        }

        // Cek Password
        const match = await bcrypt.compare(password, user.passwordHash);
        if (!match) {
            await createRichAuthLog(req, user, {
                eventType: 'LOGIN_FAILED',
                status: 'FAILED',
                authMethod: 'PASSWORD',
                message: 'Wrong Password'
            });
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Log Success (Modular)
        await createRichAuthLog(req, user, {
            eventType: 'LOGIN_SUCCESS',
            status: 'SUCCESS',
            authMethod: 'PASSWORD',
            message: 'Password Login Approved',
            data: { telemetry: device_telemetry }
        });
        
        sendTokenCookie(res, user);
        res.json({ status: 'success', user: { id: user.id, email: user.email, name: user.fullName, role: user.role } });

    } catch (err) {
        console.error("[Login] Error:", err);
        res.status(500).json({ error: err.message });
    }
};

exports.checkUser = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await prisma.user.findUnique({ where: { email }, include: { keys: true } });
        if (!user) return res.json({ exists: false });
        res.json({ 
            exists: true, 
            hasPassword: !!user.passwordHash, 
            hasPasskey: user.keys.length > 0, 
            name: user.fullName, 
            role: user.role, 
            userId: user.id 
        });
    } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.logout = (req, res) => {
    res.cookie('auth_token', 'none', { expires: new Date(Date.now() + 1000), httpOnly: true, path: '/' });
    res.clearCookie('auth_token');
    res.status(200).json({ success: true });
};