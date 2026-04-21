const prisma = require('../../../config/db');

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    if (lat1 == null || lon1 == null || lat2 == null || lon2 == null) return 0;
    var R = 6371; 
    var dLat = deg2rad(lat2 - lat1);
    var dLon = deg2rad(lon2 - lon1); 
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon/2) * Math.sin(dLon/2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    return R * c;
}

function deg2rad(deg) { return deg * (Math.PI/180); }

async function evaluateGeo(context, config) {
    const { telemetry, userId, email, countryCode, userSegment } = context;
    const { rules } = config;
    
    let score = 0;
    let tags = [];
    let breakdown = [];

    const geoRule = rules.find(r => r.ruleType === 'GEO_ANOMALY' && r.segment === userSegment);

    if (!geoRule || !geoRule.isActive) {
        console.log(`[GeoCheck] ⏹️ Rule INACTIVE or NOT FOUND for ${userSegment}. Skipping.`);
        return { score, tags, breakdown };
    }

    const lastLog = await prisma.authLog.findFirst({
        where: {
            email: email, 
            status: { in: ['SUCCESS', 'CHALLENGED'] }, 
            createdAt: { lt: new Date() } 
        },
        orderBy: { createdAt: 'desc' }
    });

    if (!lastLog) return { score, tags, breakdown };

    let lastLat = null; 
    let lastLng = null;
    let lastCountry = lastLog.countryCode || 'UN';
    let meta = lastLog.riskTags;

    if (typeof meta === 'string') { try { meta = JSON.parse(meta); } catch (e) {} }

    if (meta && typeof meta === 'object') {
        if (meta.telemetry) {
            lastLat = meta.telemetry.gps_latitude;
            lastLng = meta.telemetry.gps_longitude;
        } else if (meta.gps_latitude) { 
            lastLat = meta.gps_latitude;
            lastLng = meta.gps_longitude;
        }
    }

    const currentLat = telemetry?.gps_latitude;
    const currentLng = telemetry?.gps_longitude;
    const currentCountry = countryCode || 'UN';

    let distanceKm = 0;
    let speedKmh = 0;

    if (currentLat && currentLng && lastLat && lastLng) {
        distanceKm = getDistanceFromLatLonInKm(currentLat, currentLng, lastLat, lastLng);
        const timeDiffHours = Math.max((new Date() - new Date(lastLog.createdAt)) / (1000 * 60 * 60), 0.001);
        speedKmh = distanceKm / timeDiffHours;
    }

    if (lastCountry !== 'UN' && currentCountry !== 'UN' && lastCountry !== currentCountry) {
        if (speedKmh > 800) {
            const finalScore = Math.min(geoRule.weight * 2.5, 100); 
            score += finalScore;
            tags.push({ label: `GEO_ANOMALY: ${lastCountry} -> ${currentCountry}`, class: 'critical' });
            breakdown.push({ rule: 'GEO_ANOMALY', score: finalScore });
            console.log(`[GeoCheck] 🚨 IMPOSSIBLE COUNTRY HOP Detected`);
        } else {
            score += geoRule.weight;
            tags.push({ label: `GEO_ANOMALY: ${currentCountry}`, class: 'warning' });
            breakdown.push({ rule: 'GEO_ANOMALY', score: geoRule.weight });
            console.log(`[GeoCheck] ⚠️ New Country Detected`);
        }
    }
    else if (distanceKm > 200 && speedKmh > 800) {
        const finalScore = Math.min(geoRule.weight * 2, 100);
        score += finalScore;
        tags.push({ label: `GEO_ANOMALY (${Math.round(distanceKm)}km)`, class: 'critical' });
        breakdown.push({ rule: 'GEO_ANOMALY', score: finalScore });
        console.log(`[GeoCheck] 🚨 IMPOSSIBLE REGION HOP Detected`);
    }

    return { score, tags, breakdown };
}

module.exports = { evaluateGeo };