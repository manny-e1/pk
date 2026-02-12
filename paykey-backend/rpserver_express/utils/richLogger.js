const prisma = require('../config/db'); 
const { getNetworkInfo } = require('./geoIpService');
const UAParser = require('ua-parser-js');
const { customAlphabet } = require('nanoid');

// --- HELPER VALIDASI IP ---
const isIPv4 = (ip) => /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/.test(ip);
// Regex IPv6 (Support standar, compressed, dan ::1)
const isIPv6 = (ip) => /^(?:[A-F0-9]{1,4}:){7}[A-F0-9]{1,4}$|^[A-F0-9]*:[A-F0-9:]+$/i.test(ip);

const generateEventID = () => `evt__${customAlphabet('0123456789ABCDEF', 10)()}`;

async function createRichAuthLog(req, user, context) {
    try {
        const rawIpHeader = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '';
        
        let detectedIPv4 = null;
        let detectedIPv6 = null;
        let finalIp = ''; // IP Utama yang akan disimpan & dipakai GeoIP

        // 1. EKTRAKSI DUAL STACK (IPv6 PRIORITAS UTAMA)
        if (typeof rawIpHeader === 'string') {
            const ipList = rawIpHeader.split(',').map(s => s.trim());
            
            // Cari IPv6 (Identitas Paling Unik & Akurat)
            let rawIPv6 = ipList.find(ip => isIPv6(ip));
            if (rawIPv6) {
                // Bersihkan prefix ::ffff: (jika ada format hybrid)
                detectedIPv6 = rawIPv6.replace(/^::ffff:/, '');
            }

            // Cari IPv4 (Sebagai cadangan/metadata)
            detectedIPv4 = ipList.find(ip => isIPv4(ip));
            
            // [LOGIKA UTAMA] Prioritaskan IPv6 -> Jika tidak ada, baru IPv4 -> Fallback ke array pertama
            finalIp = detectedIPv6 || detectedIPv4 || ipList[0];

        } else {
            finalIp = rawIpHeader;
        }

        const userAgentString = req.headers['user-agent'] || '';

        // 2. Parse User Agent
        const parser = new UAParser(userAgentString);
        const uaResult = parser.getResult();
        const telemetry = context.data?.telemetry || {};
        
        const deviceModel = telemetry.device_model || 
                            `${uaResult.device.vendor || ''} ${uaResult.device.model || ''}`.trim() || 
                            'Desktop/Unknown';

        // 3. Parse Network & Location (Menggunakan IPv6 Prioritas)
        // Library MaxMind GeoIP2 sangat menyukai IPv6 karena databasenya lebih presisi
        const netInfo = getNetworkInfo(finalIp);
        
        const locationStr = context.data?.location || 
                            (netInfo.city !== 'Unknown City' ? `${netInfo.city}, ${netInfo.country}` : 'Unknown Location');

        let finalCountryCode = netInfo.country || 'UN';
        if (locationStr && locationStr.includes(',')) {
            const parts = locationStr.split(',');
            const extractedCountry = parts[parts.length - 1].trim();
            if (extractedCountry.length === 2) {
                finalCountryCode = extractedCountry;
            }
        }

        // 4. SIMPAN KEDUA IP DI METADATA (Untuk Audit Forensik)
        const richMetadata = {
            ...context.data, 
            network: {
                ip: finalIp,           // IP Utama (IPv6 jika ada)
                ipv6: detectedIPv6,    // Rekam eksplisit IPv6
                ipv4: detectedIPv4,    // Rekam eksplisit IPv4
                isp: netInfo.isp,
                asn: netInfo.asn,
                country: finalCountryCode,
                raw_header: rawIpHeader // Header mentah untuk debug
            },
            device_info: {
                browser: uaResult.browser.name,
                os: `${uaResult.os.name} ${uaResult.os.version}`,
                type: uaResult.device.type || 'mobile'
            },
            timestamp: new Date().toISOString()
        };

        // 5. Simpan ke Database
        await prisma.authLog.create({
            data: {
                id: generateEventID(),
                email: user.email,
                eventType: context.eventType || 'AUTH_EVENT',
                authMethod: context.authMethod || 'UNKNOWN',
                status: context.status || 'INFO',
                
                // Di sini akan tersimpan IPv6 (misal: 2404:c0:...)
                ipAddress: finalIp, 
                userAgent: userAgentString,
                
                location: locationStr, 
                countryCode: finalCountryCode, 
                
                device: deviceModel,
                isVpn: telemetry.is_vpn_active || false,
                riskScore: context.data?.riskScore || 0,
                
                riskTags: richMetadata, 
            }
        });

        console.log(`[RichLog] ${context.eventType} | User: ${user.email}`);
        console.log(`          > IP Used: ${finalIp} (v6 Priority)`);

    } catch (error) {
        console.error("[RichLog] Failed to create log:", error.message);
    }
}

module.exports = { createRichAuthLog };