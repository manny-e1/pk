const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.mailtrap.io',
    port: process.env.SMTP_PORT || 2525,
    auth: {
        user: process.env.SMTP_USER || 'user',
        pass: process.env.SMTP_PASS || 'pass'
    },
});

exports.sendOtpEmail = async (toEmail, otpCode) => {
    if (process.env.NODE_ENV === 'development' && !process.env.SMTP_HOST) {
        console.log(`\n[DEV-EMAIL] To: ${toEmail} | OTP: ${otpCode}\n`);
        return true;
    }

    const mailOptions = {
        from: '"Secure PayKey" <no-reply@paykey.com>',
        to: toEmail,
        subject: 'Authentication Code',
        html: `
            <div style="font-family: Arial, sans-serif; padding: 20px;">
                <h2>Login Verification</h2>
                <p>Your authentication code is:</p>
                <h1 style="color: #2563EB; letter-spacing: 5px;">${otpCode}</h1>
                <p>This code expires in 5 minutes.</p>
                <p style="color: gray; font-size: 12px;">If you did not request this, please ignore this email.</p>
            </div>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        return true;
    } catch (error) {
        console.error('[EmailService] Failed to send email:', error);
        throw new Error('Failed to send OTP email');
    }
};