const javaClient = require("../../services/JavaAuthClient");
const prisma = require("../../config/db");
const { sendTokenCookie } = require("../../utils/jwt");
const { createRichAuthLog, appendToLatestChallengeTimeline } = require("../../utils/richLogger");
const fidoService = require("../../services/fidoService");
const { createClient } = require("redis");
const fcmService = require("../../services/fcmService");

const redisClient = createClient({
	url: process.env.REDIS_URL || "redis://:redispass@localhost:6379",
});
(async () => {
	try {
		await redisClient.connect();
	} catch (e) {
		console.error("[Redis] Error:", e.message);
	}
})();

const RP_ID = process.env.RP_ID_WEB || "demo.authkey.my";

const saveContext = async (challenge, sessionId, context) => {
	await redisClient.set(
		`ctx:${challenge}`,
		JSON.stringify({ sessionId, ...context }),
		{ EX: 300 },
	);
};
const getContext = async (challenge) => {
	const data = await redisClient.get(`ctx:${challenge}`);
	return data ? JSON.parse(data) : null;
};

const parseClientData = (body) => {
	try {
		const buffer = Buffer.from(body.response.clientDataJSON, "base64");
		return JSON.parse(buffer.toString("utf-8"));
	} catch (e) {
		return {};
	}
};

exports.getUnifiedChallenge = async (req, res) => {
	try {
		const challengeData = await javaClient.getUnifiedChallenge();
		res.json({
			success: true,
			challenge: challengeData.challenge || challengeData,
		});
	} catch (err) {
		console.error("[Step-Up] Get Challenge Error:", err);
		res.status(500).json({ error: "Failed to generate security challenge" });
	}
};

exports.verifyStepUp = async (req, res) => {
	const { method, payload, deviceId, userId } = req.body;

	const finalUserId = userId || (req.user ? req.user.id : null);

	if (!finalUserId)
		return res.status(400).json({ error: "User ID is required" });
	let user = null;
	try {
		user = await prisma.user.findUnique({ where: { id: finalUserId } });
		if (!user) return res.status(404).json({ error: "User not found" });

		if (method === "FIDO2" || method === "BIOMETRIC") {
			await javaClient.fidoVerifyResponse("AUTHENTICATION", payload);

			if (!req.user) sendTokenCookie(res, user);
			await appendToLatestChallengeTimeline(user, method, true, payload?.txId);
			return res.json({ success: true, message: "FIDO2 Verified" });
		}

		// else if (['PIN', 'BIO_LEGACY', 'PUSH_APPROVAL'].includes(method)) {
		//     const { challenge, signature } = payload;

		//     if (!challenge || !signature || !deviceId) {
		//         return res.status(400).json({ error: 'Challenge, signature, and deviceId are required' });
		//     }

		//     await javaClient.verifyUnifiedAuth({
		//         userId: finalUserId,
		//         deviceId: deviceId,
		//         authType: method,
		//         challenge: challenge,
		//         signature: signature
		//     });

		//     if (!req.user) sendTokenCookie(res, user);
		//     return res.json({ success: true, message: `${method} Verified via PKI Signature` });
		// }

		if (["PIN", "BIO_LEGACY", "PUSH_APPROVAL"].includes(method)) {
			const { challenge, signature, txId } = payload;

			if (!challenge || !signature || !deviceId) {
				return res
					.status(400)
					.json({ error: "Challenge, signature, and deviceId are required" });
			}

			// Java Server menggunakan kunci BIO_LEGACY untuk memvalidasi Push Approval
			const javaAuthType = method === "PUSH_APPROVAL" ? "BIO_LEGACY" : method;

			await javaClient.verifyUnifiedAuth({
				userId: finalUserId,
				deviceId: deviceId,
				authType: javaAuthType,
				challenge,
				signature,
			});

			// JIKA INI BALASAN PUSH APPROVAL DARI HP
			if (method === "PUSH_APPROVAL" && txId) {
				const sessionStr = await redisClient.get(`push_tx:${txId}`);
				if (sessionStr) {
					const sessionData = JSON.parse(sessionStr);
					sessionData.status = "APPROVED"; // Ubah state untuk Web
					await redisClient.set(
						`push_tx:${txId}`,
						JSON.stringify(sessionData),
						{ EX: 60 },
					);
				}
				return res.json({
					success: true,
					message: "Approval sent to Web Browser",
				});
			}

			if (!req.user) sendTokenCookie(res, user);
			await appendToLatestChallengeTimeline(user, method, true, payload?.txId);

			return res.json({ success: true, message: `${method} Verified` });
		} 
		 if (method === "HARDWARE_TOTP" || method === "TOTP_SOFT") {
			if (!payload || !payload.code) {
				return res.status(400).json({ error: "OTP code is required" });
			}

			const javaAuthType =
				method === "HARDWARE_TOTP" ? "TOTP_HARDWARE" : "TOTP_SOFT";

			await javaClient.verifyUnifiedAuth({
				userId: finalUserId,
				authType: javaAuthType,
				otp: payload.code,
			});

			if (!req.user) sendTokenCookie(res, user);
			await appendToLatestChallengeTimeline(user, method, true, payload?.txId);

			return res.json({ success: true, message: "TOTP Verified successfully" });
		} 
		 if (method === "EMAIL_OTP") {
			if (!payload.code)
				return res.status(400).json({ error: "Email code is required" });

			const tokenRecord = await prisma.authTotpToken.findFirst({
				where: {
					userId: finalUserId,
					tokenType: "EMAIL_OTP",
					status: "PENDING",
				},
				orderBy: { assignedAt: "desc" },
			});

			if (!tokenRecord || tokenRecord.encryptedSeed !== payload.code) {
				return res.status(400).json({ error: "Invalid or Expired OTP" });
			}

			await prisma.authTotpToken.delete({ where: { id: tokenRecord.id } });
			if (!req.user) sendTokenCookie(res, user);
			
			await appendToLatestChallengeTimeline(user, method, true, payload?.txId);
			return res.json({ success: true, message: "Email OTP Verified" });
		}

		return res.status(400).json({ error: "Unsupported authentication method" });
	} catch (err) {
		await appendToLatestChallengeTimeline(user, method, false, payload?.txId);
		console.error(
			`[Step-Up] Verification Error for method ${method}:`,
			err.message || err,
		);
		res
			.status(err.status || 500)
			.json({ error: err.message || "Verification failed" });
	}
};

exports.fidoStartProxy = async (req, res) => {
	try {
		const { username } = req.body;
		const user = await prisma.user.findUnique({ where: { email: username } });

		const result = await fidoService.initiateChallenge(
			"AUTH",
			user || { id: null },
			RP_ID,
		);

		if (result.status === 200) {
			await saveContext(result.data.challenge, result.data.sessionId, {
				userId: user?.id,
			});
		}

		res.status(result.status || 200).json(result.data || result);
	} catch (error) {
		console.error("FIDO2 Start Error:", error.message);
		res.status(500).json({ error: error.message });
	}
};

exports.fidoVerifyProxy = async (req, res) => {
	try {
		const credential = req.body;

		const clientData = parseClientData(credential);
		const challenge = clientData.challenge;

		const context = await getContext(challenge);
		if (!context || !context.sessionId) {
			return res
				.status(400)
				.json({ error: "Sesi FIDO2 expired atau tidak valid" });
		}

		const javaPayload = {
			serverPublicKeyCredential: {
				id: credential.id,
				type: credential.type,
				response: credential.response,
				extensions: credential.extensions || {},
			},
			sessionId: context.sessionId,
			rpId: RP_ID,
			origin: clientData.origin,
			tokenBinding: null,
		};

		const result = await fidoService.verifyResponse("AUTH", javaPayload);

		if (result.status === 200) {
			await redisClient.del(`ctx:${challenge}`);
		}

		res.status(result.status || 200).json(result.data || result);
	} catch (error) {
		console.error("FIDO2 Verify Error:", error.message);
		res.status(500).json({ error: error.message });
	}
};

exports.startPushApproval = async (req, res) => {
	try {
		const { userId } = req.body;
		console.log("Start Push Approval for userId:", userId);
		const user = await prisma.user.findUnique({ where: { id: userId } });
		if (!user) return res.status(404).json({ error: "User not found" });

		const challengeData = await javaClient.getUnifiedChallenge();
		const challenge = challengeData.challenge || challengeData;

		const txId = require("crypto").randomUUID();

		const sessionData = { status: "PENDING", userId: user.id, challenge };
		await redisClient.set(`push_tx:${txId}`, JSON.stringify(sessionData), {
			EX: 120,
		});

		const device = await prisma.userDevice.findFirst({
			where: { userId: user.id, fcmToken: { not: "" } },
			orderBy: { lastActive: "desc" },
		});

		if (device) {
			await fcmService.sendPushNotification(
				device.fcmToken,
				"Approval Request",
				"Tap for approval",
				{
					authType: "PUSH_APPROVAL",
					challenge: challenge,
					txId: txId,
				},
			);
		} else {
			console.warn(
				`[Push Approval] No device with FCM token found for user ${user.id}`,
			);
		}

		res.json({ success: true, txId: txId });
	} catch (err) {
		res.status(500).json({ error: "Failed to start Push Approval" });
	}
};

exports.checkPushStatus = async (req, res) => {
	try {
		const txId = req.query.txId || req.body.txId;
		const dataStr = await redisClient.get(`push_tx:${txId}`);
		if (!dataStr) return res.status(400).json({ status: "EXPIRED" });

		const sessionData = JSON.parse(dataStr);

		if (sessionData.status === "APPROVED") {
			const user = await prisma.user.findUnique({
				where: { id: sessionData.userId },
			});
			sendTokenCookie(res, user);
			await redisClient.del(`push_tx:${txId}`);
			return res.json({ success: true, status: "APPROVED" });
		}
		res.json({ success: true, status: "PENDING" });
	} catch (err) {
		res.status(500).json({ error: "Status check failed" });
	}
};
