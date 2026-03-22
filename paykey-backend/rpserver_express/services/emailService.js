const nodemailer = require('nodemailer');

exports.sendOtpEmail = async (toEmail, otpCode) => {
    console.log(`[EmailService] Preparing to send OTP via Gmail to ${toEmail} , otpCode: ${otpCode}`);
    
    // Bypass untuk environment dev tanpa email
    if (process.env.NODE_ENV === 'development' && !process.env.GMAIL_USER) {
        console.log(`\n[DEV-EMAIL] To: ${toEmail} | OTP: ${otpCode}\n`);
        return true;
    }

    const htmlContent = `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
            <h2>Login Verification</h2>
            <p>Your authentication code is:</p>
            <h1 style="color: #2563EB; letter-spacing: 5px;">${otpCode}</h1>
            <p>This code expires in 5 minutes.</p>
            <p style="color: gray; font-size: 12px;">If you did not request this, please ignore this email.</p>
        </div>
    `;

    try {
        // Setup Transporter menggunakan Gmail
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD
            }
        });

        // Kirim Email
        const info = await transporter.sendMail({
            from: `"Secure PayKey" <${process.env.GMAIL_USER}>`,
            to: toEmail,
            subject: "Authentication Code - PayKey",
            html: htmlContent,
        });

        console.log(`[EmailService] OTP sent successfully to ${toEmail} (Message ID: ${info.messageId})`);
        return true;

    } catch (error) {
        console.error('[EmailService] Failed to send email via Gmail:', error.message);
        throw new Error('Failed to send OTP email');
    }
};

// const axios = require('axios');

// exports.sendOtpEmail = async (toEmail, otpCode) => {
//     console.log(`[EmailService] Preparing to send OTP email to ${toEmail} , otpCode: ${otpCode}`);
//     if (process.env.NODE_ENV === 'development' && !process.env.MAILTRAP_API_TOKEN) {
//         console.log(`\n[DEV-EMAIL] To: ${toEmail} | OTP: ${otpCode}\n`);
//         return true;
//     }

//     const htmlContent = `
//         <div style="font-family: Arial, sans-serif; padding: 20px;">
//             <h2>Login Verification</h2>
//             <p>Your authentication code is:</p>
//             <h1 style="color: #2563EB; letter-spacing: 5px;">${otpCode}</h1>
//             <p>This code expires in 5 minutes.</p>
//             <p style="color: gray; font-size: 12px;">If you did not request this, please ignore this email.</p>
//         </div>
//     `;

//     try {
//         const response = await axios.post(
//             'https://send.api.mailtrap.io/api/send',
//             {
//                 from: {
//                     email: process.env.MAILTRAP_SENDER_EMAIL || "hello@demomailtrap.co",
//                     name: "Secure PayKey"
//                 },
//                 to: [
//                     { email: toEmail }
//                 ],
//                 subject: "Authentication Code",
//                 html: htmlContent,
//                 category: "OTP Verification" 
//             },
//             {
//                 headers: {
//                     'Authorization': `Bearer ${process.env.MAILTRAP_API_TOKEN}`,
//                     'Content-Type': 'application/json'
//                 }
//             }
//         );

//         console.log(`[EmailService] OTP sent to ${toEmail} via Mailtrap API (Message ID: ${response.data.message_ids[0]})`);
//         return true;

//     } catch (error) {
//         const errorMessage = error.response ? error.response.data : error.message;
//         console.error('[EmailService] Failed to send email via Mailtrap API:', errorMessage);
//         throw new Error('Failed to send OTP email');
//     }
// };