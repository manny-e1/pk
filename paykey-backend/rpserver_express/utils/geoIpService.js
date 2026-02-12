const Reader = require('@maxmind/geoip2-node').Reader;
const path = require('path');
const fs = require('fs');

let cityReader = null;
let asnReader = null;

const DB_PATH_CITY = path.join(__dirname, '../data/GeoLite2-City.mmdb');
const DB_PATH_ASN = path.join(__dirname, '../data/GeoLite2-ASN.mmdb');

async function initGeoDb() {
    console.log("🌐 [GeoIP] Initializing databases...");

    // Load City DB
    if (fs.existsSync(DB_PATH_CITY)) {
        try {
            cityReader = await Reader.open(DB_PATH_CITY);
            console.log("   ✅ City/Country Database Loaded");
        } catch (e) {
            console.error("   ❌ Error loading City DB:", e.message);
        }
    } else {
        console.warn("   ⚠️ City Database not found at:", DB_PATH_CITY);
    }

    // Load ASN DB
    if (fs.existsSync(DB_PATH_ASN)) {
        try {
            asnReader = await Reader.open(DB_PATH_ASN);
            console.log("   ✅ ASN/ISP Database Loaded");
        } catch (e) {
            console.error("   ❌ Error loading ASN DB:", e.message);
        }
    } else {
        console.warn("   ⚠️ ASN Database not found at:", DB_PATH_ASN);
    }
}

/**
 * @param {string} ip
 * @returns {object} 
 */
function getNetworkInfo(ip) {
    // 1. [PERBAIKAN UTAMA] Sanitasi IP
    // Jika IP berisi koma (misal: "180.x.x.x, 10.x.x.x"), ambil yang pertama saja.
    if (ip && typeof ip === 'string' && ip.includes(',')) {
        ip = ip.split(',')[0].trim();
    }

    // 2. Bersihkan prefix IPv6 ::ffff: jika ada
    if (ip && typeof ip === 'string') {
        ip = ip.replace(/^::ffff:/, '');
    }

    // Default Response (Fallback)
    const result = {
        ip: ip || '0.0.0.0',
        city: 'Unknown City',
        country: 'UN',
        countryName: 'Unknown Country',
        asn: 'AS-UNKNOWN',
        isp: 'Unknown ISP',
        org: 'Unknown Organization',
        isLocal: false
    };

    if (!ip) return result;

    // 3. Cek Localhost / Private Network
    if (ip === '::1' || ip === '127.0.0.1' || ip.startsWith('192.168.') || ip.startsWith('10.') || ip.startsWith('172.16.')) {
        result.isLocal = true;
        result.city = 'Local Network';
        result.countryName = 'Localhost';
        result.isp = 'Private Network';
        return result;
    }

    try {
        // 4. Lookup City
        if (cityReader) {
            // Library maxmind melempar error jika IP formatnya salah, jadi kita bungkus try-catch
            try {
                const resp = cityReader.city(ip);
                
                if (resp.city && resp.city.names) {
                    result.city = resp.city.names.en || 'Unknown City';
                }
                
                if (resp.country) {
                    result.country = resp.country.isoCode || 'UN'; 
                    result.countryName = resp.country.names ? resp.country.names.en : 'Unknown Country';
                }
            } catch (innerErr) {
                // Jangan log error jika IP-nya memang private/bogon yang lolos filter
                if (!innerErr.message.includes('The address')) {
                     console.warn(`   ⚠️ City lookup warning for ${ip}: ${innerErr.message}`);
                }
            }
        }

        // 5. Lookup ASN
        if (asnReader) {
            try {
                const resp = asnReader.asn(ip);
                if (resp) {
                    result.asn = resp.autonomousSystemNumber ? `AS${resp.autonomousSystemNumber}` : 'AS-UNKNOWN';
                    result.isp = resp.autonomousSystemOrganization || 'Unknown ISP';
                    result.org = resp.autonomousSystemOrganization || 'Unknown Org';
                }
            } catch (innerErr) {
                // Ignore specific parsing errors
            }
        }

    } catch (error) {
        console.error(`   ❌ GeoIP critical failure for IP ${ip}:`, error.message);
    }

    return result;
}

module.exports = { initGeoDb, getNetworkInfo };