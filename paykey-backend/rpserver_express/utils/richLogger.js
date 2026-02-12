const prisma = require('../config/db'); 
const { getNetworkInfo } = require('./geoIpService');
const UAParser = require('ua-parser-js');
const { customAlphabet } = require('nanoid');

const generateEventID = () => `evt__${customAlphabet('0123456789ABCDEF', 10)()}`;

const isIPv4 = (ip) => /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/.test(ip);

async function createRichAuthLog(req, user, context) {
    try {
        
        let rawIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '';
        let ip = '';

        // [LOGIKA BARU: CARI IPv4 DULU]
        if (typeof rawIp === 'string') {
            const ipList = rawIp.split(',').map(s => s.trim());
            
            // 1. Coba cari IPv4 di dalam list
            const ipv4 = ipList.find(i => isIPv4(i));
            
            // 2. Jika ada IPv4, pakai itu. Jika tidak ada, pakai IP pertama (walaupun IPv6)
            ip = ipv4 || ipList[0];
        } else {
            ip = rawIp;
        }

        const userAgentString = req.headers['user-agent'] || '';

        // 1. Parse User Agent
        const parser = new UAParser(userAgentString);
        const uaResult = parser.getResult();
        const telemetry = context.data?.telemetry || {};
        
        const deviceModel = telemetry.device_model || 
                            `${uaResult.device.vendor || ''} ${uaResult.device.model || ''}`.trim() || 
                            'Desktop/Unknown';

        // 2. Parse Network & Location
        const netInfo = getNetworkInfo(ip);
        
        // Prioritas lokasi: dari Controller (sudah hitung telemetry) -> GeoIP
        const locationStr = context.data?.location || 
                            (netInfo.city !== 'Unknown City' ? `${netInfo.city}, ${netInfo.country}` : 'Unknown Location');

        let finalCountryCode = netInfo.country || 'UN';
        if (locationStr.includes(',')) {
            const parts = locationStr.split(',');
            const extractedCountry = parts[parts.length - 1].trim();
            if (extractedCountry.length === 2) {
                finalCountryCode = extractedCountry;
            }
        }

        // 3. [FIX] DEFINISIKAN RICH METADATA SEBELUM DISIMPAN
        // Ini menggabungkan data dari Controller (tags, telemetry, amount) 
        // dengan data Network/Device yang baru diparse.
        const richMetadata = {
            ...context.data, // <--- PENTING: Membawa { telemetry: { gps... } } dari controller
            network: {
                ip: ip,
                isp: netInfo.isp,
                asn: netInfo.asn,
                country: finalCountryCode
            },
            device_info: {
                browser: uaResult.browser.name,
                os: `${uaResult.os.name} ${uaResult.os.version}`,
                type: uaResult.device.type || 'mobile'
            },
            timestamp: new Date().toISOString()
        };

        // 4. Simpan ke Database
        await prisma.authLog.create({
            data: {
                id: generateEventID(),
                email: user.email,
                eventType: context.eventType || 'AUTH_EVENT',
                authMethod: context.authMethod || 'UNKNOWN',
                status: context.status || 'INFO',
                
                ipAddress: ip,
                userAgent: userAgentString,
                
                location: locationStr, 
                countryCode: finalCountryCode, 
                
                device: deviceModel,
                isVpn: telemetry.is_vpn_active || false,
                riskScore: context.data?.riskScore || 0,
                
                // [FIX] Sekarang variabel ini sudah ada isinya
                riskTags: richMetadata, 
            }
        });

        console.log(`[RichLog] ${context.eventType} logged for ${user.email} | Loc: ${locationStr} (${finalCountryCode})`);
        if (richMetadata.tags && richMetadata.tags.length > 0) {
            const tagLabels = richMetadata.tags
                .map(t => t.label)
                .join(', ');
            console.log(`          > Risk Tags: [ ${tagLabels} ]`);
        }

    } catch (error) {
        console.error("[RichLog] Failed to create log:", error.message);
    }
}

module.exports = { createRichAuthLog };