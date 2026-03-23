const fs = require('fs');
const path = require('path');

/**
 * Load dan render template HTML email OTP
 * @param {string} otpCode  - 6 digit OTP, contoh: "847293"
 * @param {object} options  - optional overrides { dateTime, ipAddress }
 * @returns {string} HTML string yang siap dikirim
 */


exports.renderOtpEmailHtml = (otpCode, options = {}) => {
    const templatePath = path.join(__dirname, '../templates/otp-email.html');
    let html = fs.readFileSync(templatePath, 'utf8');

    // Pisah OTP menjadi digit individual
    const digits = otpCode.toString().padStart(6, '0').split('');

    digits.forEach((digit, index) => {
        // Ganti semua placeholder {{DIGIT_1}} s/d {{DIGIT_6}}
        html = html.replace(`{{DIGIT_${index + 1}}}`, digit);
    });

    // Replace datetime dan IP jika ada
    const dateTime = options.dateTime || new Date().toLocaleString('en-GB', {
        day: '2-digit', month: 'short', year: 'numeric',
        hour: '2-digit', minute: '2-digit', hour12: true
    });
    html = html.replace('{{DATE_TIME}}', dateTime);
    html = html.replace('{{IP_ADDRESS}}', options.ipAddress || '—');
    html = html.replace('{{ACCOUNT}}', options.account || '—');

    return html;
};