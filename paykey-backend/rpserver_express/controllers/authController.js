const bcrypt = require('bcrypt');
const prisma = require('../config/db');
const { sendTokenCookie } = require('../utils/jwt');
const { createRichAuthLog } = require('../utils/richLogger'); 
const {ge0tNetworkInfo} = require('../utils/geoIpService');
const { generateUserId } = require('../utils/idGenerator');

// ==================================================================
// CONTROLLERS
// ==================================================================

exports.registerPassword = async (req, res) => {
    let { fullName, email, password, companyName, mobile, role, telemetry } = req.body;
    
    try {
        if (!email) return res.status(400).json({ error: 'Email is required' });
        email = email.toLowerCase().trim();

        const hashedPassword = await bcrypt.hash(password, 10);
        
        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            await createRichAuthLog(req, { email, id: 'unknown' }, {
            eventType: 'Registration Failed',
            status: 'FAILED',
            authMethod: 'PASSWORD',
            data: {
                tags: [
                    { label: 'Registration Failed', class: 'error' }
                ],
                reason: 'Email already registered', 
                errorCode: 'REG_002'
            }
        });
            return res.status(400).json({ error: 'Email already registered' });
        }

        const newUser = await prisma.user.create({
            data: { 
                id: generateUserId(),
                email, fullName, passwordHash: hashedPassword,
                companyName: companyName || null, mobile: mobile || null,
                role: role === 'ADMIN' ? 'ADMIN' : 'USER'
            }
        });

        await createRichAuthLog(req, { email, id: 'unknown' }, {
            eventType: 'Registration Success',
            status: 'SUCCESS',
            authMethod: 'PASSWORD',
            data: {
                tags: [
                    { label: 'Registration Success', class: 'success' }
                ],
                telemetry: telemetry || null
            }
        });
        
        // 4. Send Token
        sendTokenCookie(res, newUser);
        res.json({ status: 'success', userId: newUser.id });

    } catch (err) {
        console.error("[Register] Error:", err);
        
        await createRichAuthLog(req, { email, id: 'unknown' }, {
            eventType: 'Registration Failed',
            status: 'FAILED',
            authMethod: 'PASSWORD',
            data: {
                tags: [
                    { label: 'Registration Failed', class: 'error' }
                ],
                reason: err.message, 
                errorCode: 'REG_001',
                telemetry: telemetry || null
            }
        });
        res.status(500).json({ error: 'Registration failed' });
    }
};

exports.loginPassword = async (req, res) => {
    const { email, password, telemetry } = req.body;
    
    try {
        const user = await prisma.user.findUnique({ where: { email } });
        
        // Cek User Existence
        if (!user || !user.passwordHash) {
            await createRichAuthLog(req, { email, id: 'unknown' }, {
                eventType: 'Login Failed',
                status: 'FAILED',
                authMethod: 'PASSWORD',
                data: {
                    tags: [
                        { label: 'User Not Found or No Password set', class: 'error' }
                    ],
                    telemetry: telemetry || null
                }
            });
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Cek Role (Sesuai kode lama Anda: Admin Only)
        // [OPSIONAL] Hapus blok ini jika User biasa boleh login password
        if (user.role !== 'ADMIN') {
            await createRichAuthLog(req, user, {
                eventType: 'Login Blocked - Role Mismatch',
                status: 'BLOCKED',
                authMethod: 'PASSWORD',
                data: {
                    tags: [
                        { label: 'Role Mismatch (Admin Only)', class: 'error' }
                    ],
                    telemetry: telemetry || null
                }
            });
            return res.status(403).json({ error: 'Access Denied', message: 'Admins only.' });
        }
        
        // Cek Status Akun
        if (user.status === 'suspended') {
            await createRichAuthLog(req, user, {
                eventType: 'Login Blocked - Account Suspended',
                status: 'BLOCKED',
                authMethod: 'PASSWORD',
                data: {
                    tags: [
                        { label: 'Account Suspended', class: 'error' }
                    ],
                    telemetry: telemetry || null
                }

            });
            return res.status(403).json({ error: 'Account Suspended' });
        }

        // Cek Password
        const match = await bcrypt.compare(password, user.passwordHash);
        if (!match) {
            await createRichAuthLog(req, user, {
                eventType: 'Login Failed - Wrong Password',
                status: 'FAILED',
                authMethod: 'PASSWORD',
                data: {
                    tags: [
                        { label: 'Wrong Password', class: 'error' }
                    ],
                    telemetry: telemetry || null
                }
            });
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Log Success (Modular)
        await createRichAuthLog(req, user, {
            eventType: 'Login Success',
            status: 'SUCCESS',
            authMethod: 'PASSWORD',
            message: 'Password Login Approved',
            data: {
                tags: [
                    { label: 'Login Success', class: 'success' }
                ],
                telemetry: telemetry || null
            }
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
    const isProduction = process.env.NODE_ENV === 'production';
    res.clearCookie('auth_token', {
        httpOnly: true,
        secure: isProduction,
        domain: isProduction ? '.authkey.my' : 'localhost',
        sameSite: 'lax',
        path: '/'
    });

    res.status(200).json({ message: 'Logged out successfully' });
};