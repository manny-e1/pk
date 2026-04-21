const prisma = require('../../config/db');

const SECONDS_IN_THIRTY_DAYS = 30 * 24 * 60 * 60;
const FAIL_COUNT_TTL = 900;

const getLockKeys = (userId, deviceId) => {
    const safeDeviceId = deviceId || 'UNKNOWN_DEVICE';
    return {
        globalLockKey: `lock:${userId}:GLOBAL`,
        lockKey: `lock:${userId}:${safeDeviceId}`,
        failCountKey: `fails:${userId}:${safeDeviceId}`
    };
};

exports.checkLockout = async (redisClient, userId, deviceId) => {
    const { globalLockKey, lockKey } = getLockKeys(userId, deviceId);

    const isGlobalLocked = await redisClient.get(globalLockKey);
    if (isGlobalLocked) {
        const ttl = await redisClient.ttl(globalLockKey);
        return {
            locked: true,
            status: 403,
            payload: {
                error: "Your account has been frozen due to suspicious activity. Please contact support.",
                retryAfter: ttl 
            }
        };
    }

    const isLocked = await redisClient.get(lockKey);
    if (isLocked) {
        const ttl = await redisClient.ttl(lockKey);
        let errorMessage = 'Access restricted. Please try again later.';

        switch (isLocked) {
            case 'DEVICE_SUSPENDED':
                errorMessage = "This device has been permanently suspended for security reasons.";
                break;
            case 'SOFT_LOCKED':
                errorMessage = `Temporary lockout for ${ttl} seconds.`;
                break;
            case 'PROG_DELAY':
                errorMessage = `Please wait ${ttl} seconds before trying again.`;
                break;
        }

        return {
            locked: true,
            status: 429,
            payload: { error: errorMessage, retryAfter: ttl }
        };
    }
    
    return { locked: false };
};


exports.clearFailures = async (redisClient, userId, deviceId) => {
    const { lockKey, failCountKey } = getLockKeys(userId, deviceId);
    await Promise.all([
        redisClient.del(failCountKey),
        redisClient.del(lockKey)
    ]);
};


exports.processFailedAttempt = async (redisClient, params) => {
    const { userId, deviceId, targetCredId, method, policyMetadata, defaultErrorMsg } = params;
    const { lockKey, failCountKey, globalLockKey } = getLockKeys(userId, deviceId);

    let policy = policyMetadata || {};
    if (typeof policy === 'string') {
        try {
            policy = JSON.parse(policy);
        } catch (e) {
            console.error("[LockoutManager] Error parsing policyMetadata:", e.message);
            policy = {};
        }
    }

    const maxAttempts = policy.maxAttempts !== undefined ? Number(policy.maxAttempts) : 5;
    const baseDelay = Number(policy.baseDelay) || 3;
    const progDelay = String(policy.progDelay).toLowerCase() === 'true'; 
    let lockoutAction = policy.lockoutAction || 'soft_lock';
    const lockoutDuration = Number(policy.lockoutDuration) || 100;

    const fails = await redisClient.incr(failCountKey);
    if (fails === 1) await redisClient.expire(failCountKey, FAIL_COUNT_TTL);

    const attemptsLeft = Math.max(0, maxAttempts - fails);
    
    console.warn(`[SECURITY] Failed attempt (${fails}/${maxAttempts}) | User: ${userId} | Device: ${deviceId} | Method: ${method || 'UNKNOWN'}`);

    if (fails >= maxAttempts) {
        await redisClient.del(failCountKey);

        if (lockoutAction === 'soft_lock') {
            await redisClient.set(lockKey, 'SOFT_LOCKED', { EX: lockoutDuration });
            return { 
                status: 403, 
                payload: { error: `Access blocked for ${lockoutDuration} seconds.`, lockoutAction: 'soft_lock' } 
            };
        } 
        
        if (['device_suspend', 'suspend_device', 'hard_lock'].includes(lockoutAction)) {
            let suspendCount = 0;

            try {
                if (deviceId && deviceId !== 'UNKNOWN_DEVICE') {
                    const resDevice = await prisma.userKey.updateMany({
                        where: { userId, OR: [{ credentialId: { contains: deviceId } }, { deviceName: { contains: deviceId } }] },
                        data: { status: 'SUSPENDED', lastStatusChange: new Date() }
                    });
                    suspendCount += resDevice.count;
                }

                if (suspendCount === 0 && targetCredId) {
                    const resFido = await prisma.userKey.updateMany({
                        where: { userId, credentialId: targetCredId },
                        data: { status: 'SUSPENDED', lastStatusChange: new Date() }
                    });
                    suspendCount += resFido.count;
                }

                if (suspendCount === 0 && method) {
                    const resMethod = await prisma.userKey.updateMany({
                        where: { userId, transports: { contains: method } },
                        data: { status: 'SUSPENDED', lastStatusChange: new Date() }
                    });
                    suspendCount += resMethod.count;
                }

                if (suspendCount > 0) {
                    console.log(`[SUSPEND ACTION] DB Updated: ${suspendCount} method(s) suspended for user ${userId}`);
                } else {
                    console.warn(`[SUSPEND ACTION] Warning: No keys found in DB to suspend for user ${userId}. Device lockout active in Redis only.`);
                }

            } catch (err) {
                console.error(`[SECURITY] CRITICAL: DB Update Failed for device_suspend!`, err.message);
            }

            await redisClient.set(lockKey, 'DEVICE_SUSPENDED', { EX: SECONDS_IN_THIRTY_DAYS });
            return { 
                status: 403, 
                payload: { error: `This authenticator has been permanently suspended due to security reasons.`, lockoutAction: 'device_suspend' } 
            };
        }
        
        if (['account_freeze', 'freeze_account'].includes(lockoutAction)) {
            try {
                await prisma.user.update({ 
                    where: { id: userId }, 
                    data: { status: 'SUSPENDED' } 
                });
                console.log(`[SECURITY] Account ${userId} successfully frozen in Database.`);
            } catch (dbError) {
                console.error(`[SECURITY] CRITICAL: DB Update Failed for account_freeze!`, dbError.message);
            }

            await redisClient.set(globalLockKey, 'ACCOUNT_FROZEN', { EX: SECONDS_IN_THIRTY_DAYS });
            return { 
                status: 403, 
                payload: { error: `Your account has been frozen due to multiple failed attempts.`, lockoutAction: 'account_freeze' } 
            };
        }
    } 
    
    if (baseDelay > 0) {
        const penaltyTime = progDelay ? (fails * baseDelay) : baseDelay;
        await redisClient.set(lockKey, 'PROG_DELAY', { EX: penaltyTime });

        return { 
            status: 401, 
            payload: { 
                error: defaultErrorMsg || `Verification failed.`, 
                retryAfter: penaltyTime, 
                attemptsLeft 
            } 
        };
    }

    return { 
        status: 401, 
        payload: { error: defaultErrorMsg || 'Verification failed.', attemptsLeft } 
    };
};