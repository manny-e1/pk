const { RateLimiterMemory } = require('rate-limiter-flexible');

const otpRequestLimiter = new RateLimiterMemory({
    points: 3, 
    duration: 5 * 60, 
    blockDuration: 60 * 10 // Blokir 10 menit jika melanggar
});

const otpVerifyLimiter = new RateLimiterMemory({
    points: 5,
    duration: 10 * 60,
    blockDuration: 60 * 30 
});

const loginLimiter = new RateLimiterMemory({
    points: 10,
    duration: 15 * 60,
    blockDuration: 60 * 60 
});


exports.rateLimitRequestOtp = (req, res, next) => {
    // Gunakan kombinasi IP dan Email jika ada di body untuk key yang lebih unik
    const key = req.body.email ? `${req.ip}_${req.body.email}` : req.ip;

    otpRequestLimiter.consume(key)
        .then(() => {
            next();
        })
        .catch((rejRes) => {
            const secs = Math.round(rejRes.msBeforeNext / 1000) || 1;
            res.set('Retry-After', String(secs));
            res.status(429).json({ 
                error: 'Too many OTP requests', 
                message: `Please try again in ${Math.round(secs / 60)} minutes` 
            });
        });
};

exports.rateLimitVerifyOtp = (req, res, next) => {
    const key = req.body.email ? `${req.ip}_${req.body.email}` : req.ip;

    otpVerifyLimiter.consume(key)
        .then(() => {
            next();
        })
        .catch((rejRes) => {
            const secs = Math.round(rejRes.msBeforeNext / 1000) || 1;
            res.set('Retry-After', String(secs));
            res.status(429).json({ 
                error: 'Too many failed attempts', 
                message: 'Account temporarily locked for security. Try again later.' 
            });
        });
};

exports.rateLimitLogin = (req, res, next) => {
    loginLimiter.consume(req.ip)
        .then(() => {
            next();
        })
        .catch((rejRes) => {
            res.status(429).json({ 
                error: 'Too many login attempts', 
                message: 'Your IP is blocked due to suspicious activity.' 
            });
        });
};