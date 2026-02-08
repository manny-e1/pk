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
    // Default Response (Fallback)
    const result = {
        ip: ip,
        city: 'Unknown City',
        country: 'UN',
        countryName: 'Unknown Country',
        asn: 'AS-UNKNOWN',
        isp: 'Unknown ISP',
        org: 'Unknown Organization',
        isLocal: false
    };

    if (!ip) return result;


    if (ip === '::1' || ip === '127.0.0.1' || ip.includes('192.168.') || ip.startsWith('10.')) {
        result.isLocal = true;
        result.city = 'Local Network';
        result.countryName = 'Localhost';
        result.isp = 'Private Network';
        return result;
    }

    const cleanIp = ip.replace('::ffff:', '');
    result.ip = cleanIp;

    try {
        if (cityReader) {
            const resp = cityReader.city(cleanIp);
            
            if (resp.city && resp.city.names) {
                result.city = resp.city.names.en || 'Unknown City';
            }
            
            if (resp.country) {
                result.country = resp.country.isoCode || 'UN'; 
                result.countryName = resp.country.names ? resp.country.names.en : 'Unknown Country';
            }
        }

        if (asnReader) {
            const resp = asnReader.asn(cleanIp);
            if (resp) {
                result.asn = resp.autonomousSystemNumber ? `AS${resp.autonomousSystemNumber}` : 'AS-UNKNOWN';
                result.isp = resp.autonomousSystemOrganization || 'Unknown ISP';
                result.org = resp.autonomousSystemOrganization || 'Unknown Org';
            }
        }

    } catch (error) {
        console.error(`   ❌ GeoIP lookup failed for IP ${cleanIp}:`, error.message);
    }

    return result;
}

module.exports = { initGeoDb, getNetworkInfo };