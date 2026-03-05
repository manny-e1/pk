const prisma = require('../config/db'); 
const { getNetworkInfo } = require('./geoIpService');
const UAParser = require('ua-parser-js');
const { customAlphabet } = require('nanoid');

const isIPv4 = (ip) => /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/.test(ip);
const isIPv6 = (ip) => /^(?:[A-F0-9]{1,4}:){7}[A-F0-9]{1,4}$|^[A-F0-9]*:[A-F0-9:]+$/i.test(ip);

const generateEventID = () => `evt__${customAlphabet('0123456789ABCDEF', 10)()}`;

async function createRichAuthLog(req, user, context) {
    try {
        const rawIpHeader = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '';
        
        let detectedIPv4 = null;
        let detectedIPv6 = null;
        let finalIp = '';

        if (typeof rawIpHeader === 'string') {
            const ipList = rawIpHeader.split(',').map(s => s.trim());
            
            let rawIPv6 = ipList.find(ip => isIPv6(ip));
            if (rawIPv6) {
                detectedIPv6 = rawIPv6.replace(/^::ffff:/, '');
            }

            detectedIPv4 = ipList.find(ip => isIPv4(ip));
            
            finalIp = detectedIPv6 || detectedIPv4 || ipList[0];

        } else {
            finalIp = rawIpHeader;
        }

        const userAgentString = req.headers['user-agent'] || '';

        const parser = new UAParser(userAgentString);
        const uaResult = parser.getResult();
        const telemetry = context.data?.telemetry || {};
        
        const deviceModel = telemetry.device_model || 
                            `${uaResult.device.vendor || ''} ${uaResult.device.model || ''}`.trim() || 
                            'Desktop/Unknown';

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

        const richMetadata = {
            ...context.data, 
            network: {
                ip: finalIp,
                ipv6: detectedIPv6,
                ipv4: detectedIPv4,
                isp: netInfo.isp,
                asn: netInfo.asn,
                country: finalCountryCode,
                raw_header: rawIpHeader
            },
            device_info: {
                browser: telemetry.browser_name || uaResult.browser.name || 'App',
                os: telemetry.os_name 
                    ? `${telemetry.os_name} ${telemetry.os_version}` 
                    : `${uaResult.os.name} ${uaResult.os.version}`,
                type: telemetry.device_type || uaResult.device.type || 'mobile' || 'desktop',
            },
            timestamp: new Date().toISOString()
        };

        await prisma.authLog.create({
            data: {
                id: generateEventID(),
                email: user.email,
                eventType: context.eventType || 'AUTH_EVENT',
                authMethod: context.authMethod || 'UNKNOWN',
                status: context.status || 'INFO',
                duration: context.duration || 0,
                
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