const prisma = require("../../config/db");
const { createClient } = require("redis");
const { sendTokenCookie } = require("../../utils/jwt");
const fidoService = require("../../services/fidoService");
const { createRichAuthLog } = require("../../utils/richLogger");
const { evaluateAuthPolicy } = require("../../utils/authPolicies/index");
const { generateUserId } = require("../../utils/idGenerator");

const RP_ID = process.env.RP_ID || "localhost";
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

const normalizeCredential = (body) => {
	return body.serverPublicKeyCredential || body;
};

const parseClientData = (body) => {
	try {
		const cred = normalizeCredential(body);
		const buffer = Buffer.from(cred.response.clientDataJSON, "base64");
		return JSON.parse(buffer.toString("utf-8"));
	} catch (e) {
		return {};
	}
};

exports.determineAuthenticatorType = (transports, telemetry) => {
	// If it's a hardware key, it typically uses USB, NFC, or BLE
	if (transports.some((t) => ["usb", "nfc", "ble"].includes(t))) {
		return "Hardware Security Key";
	}

	if (transports.includes("internal")) {
		const os = (telemetry?.os_name || "").toLowerCase();
		const device = (telemetry?.device_model || "").toLowerCase();

		if (os.includes("mac") || os.includes("ios")) {
			if (device.includes("iphone")) {
				// iPhone 8 and earlier including se models use touch id.
				if (/iphone\s*(x[rs]?|1[0-9]|[2-9][0-9])\b/i.test(device) && !/iphone\s*se/i.test(device)) {
					return "Face ID";
				}
				return "Touch ID";
			}
			return "Touch ID"; 
		}

		if (os.includes("windows")) {
			return "Hello";
		}

		if (os.includes("android")) {
			return "Fingerprint";
		}

		return "Platform";
	}

	if (transports.includes("hybrid")) {
		return "Cross-Platform";
	}

	return "Unknown";
};


exports.registerStart = async (req, res) => {
	try {
		const { username, fullName, displayName, mobile, telemetry } = req.body;
		if (!username) {
			return res.status(400).json({ error: "Email is required" });
		}

		const normalizedEmail = username.toLowerCase().trim();

		let user = await prisma.user.findUnique({
			where: { email: normalizedEmail },
		});

		if (user) {
			return res.status(400).json({
				error: "Email already registered. Please login instead.",
			});
		}

		user = await prisma.user.create({
			data: {
				id: generateUserId(),
				email: normalizedEmail,
				fullName: fullName || displayName || normalizedEmail,
				mobile: mobile || null,
			},
		});

		const result = await fidoService.initiateChallenge(
			"REGISTRATION",
			user,
			RP_ID,
		);
		if (result.status === 200) {
			await saveContext(result.data.challenge, result.data.sessionId, {
				purpose: "REG",
				userId: user.id,
				telemetry,
			});
		}
		res.status(result.status).json(result.data);
	} catch (err) {
		console.log(err);
		console.error("[Passkey Register Start] Error:", err);
		res.status(500).json({ error: err.message });
	}
};

exports.registerComplete = async (req, res) => {
	try {
		console.log("RegComplete Payload:", req.body);

		const credential = normalizeCredential(req.body);
		const clientData = parseClientData(req.body);
		const challenge = clientData.challenge;

		const context = await getContext(challenge);
		if (!context || context.purpose !== "REG")
			return res.status(400).json({ error: "Sesi register expired" });

		const javaPayload = {
			serverPublicKeyCredential: {
				id: credential.id,
				type: credential.type,
				response: credential.response,
				extensions: credential.extensions,
				transports: credential.transports,
			},
			sessionId: context.sessionId,
			rpId: RP_ID,
			origin: clientData.origin,
			tokenBinding: null,
		};

		const result = await fidoService.verifyResponse(
			"REGISTRATION",
			javaPayload,
		);

		if (result.status === 200) {
			await redisClient.del(`ctx:${challenge}`);

			const user = await prisma.user.findUnique({
				where: { id: context.userId },
			});

			const deviceName =
				req.body.telemetry.device_model ||
				req.body.telemetry.device_type ||
				"Unnamed Device";

			const existingKey = await prisma.userKey.findUnique({
				where: { credentialId: credential.id },
			});
			if (existingKey) {
				const transports = credential.transports || [];
				const transportStr = JSON.stringify(transports);

				await prisma.userKey.update({
					where: { credentialId: credential.id },
					data: { 
						deviceName: deviceName, 
						deviceTelemetry: req.body.telemetry,
						transports: transportStr
					},
				});
			}

			await createRichAuthLog(req, user, {
				eventType: "Passkey Registered",
				status: "SUCCESS",
				authMethod: "FIDO2_PASSKEY",
				data: {
					telemetry: req.body.telemetry,
					tags: [
						{
							label:
								context.telemetry && context.telemetry.device_type === "mobile"
									? "Platform"
									: "FIDO2 Key",
							class: "success",
						},
					],
				},
			});
		}

		res.status(result.status).json(result.data);
	} catch (err) {
		console.error("RegComplete Error:", err);
		res.status(500).json({ error: err.message });
	}
};

exports.loginStart = async (req, res) => {
	try {
		const { username, telemetry } = req.body;
		console.log("LoginStart Telemetry:", telemetry);

		const user = await prisma.user.findUnique({ where: { email: username } });

		if (user.status === "suspended") {
			// Allow login but maybe log a warning if needed
			// return res.status(403).json({ error: "Account Suspended" });
		}

		const result = await fidoService.initiateChallenge(
			"AUTH",
			user || { id: null },
			RP_ID,
		);

		if (result.status === 200) {
			await saveContext(result.data.challenge, result.data.sessionId, {
				purpose: "LOGIN",
				userId: user?.id,
				telemetry,
			});
		}
		res.status(result.status).json(result.data);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

exports.loginComplete = async (req, res) => {
	try {
		console.log("LoginComplete Payload:", req.body);

		const credential = normalizeCredential(req.body);
		const clientData = parseClientData(req.body);
		const challenge = clientData.challenge;

		const context = await getContext(challenge);
		if (!context || context.purpose !== "LOGIN")
			return res.status(400).json({ error: "Sesi login tidak valid" });

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
		if (result.status !== 200)
			return res.status(401).json({ error: "Biometrik salah" });

		const userKey = await prisma.userKey.findUnique({
			where: { credentialId: credential.id },
			include: { user: true },
		});

		if (!userKey || !userKey.user)
			return res.status(401).json({ error: "Key not registered" });

		const deviceStatus = (userKey.status || "").toLowerCase();

		if (deviceStatus === "suspended" || deviceStatus === "revoked") {
			createRichAuthLog(req, userKey.user, {
				eventType: `Device ${deviceStatus} (Login Allowed)`,
				status: "SUCCESS",
				authMethod: "FIDO2_PASSKEY",
				data: {
					tags: [{ label: `Device ${deviceStatus}`, class: "warning" }],
					telemetry: context.telemetry || req.body.telemetry || null,
				},
			});
			// Allow login even if suspended/revoked (but block transaction)
			// return res.status(403).json({
			// 	error: `This device has been ${deviceStatus}. Please contact support.`,
			// });
		}

		await redisClient.del(`ctx:${challenge}`);
		sendTokenCookie(res, userKey.user);

		const telemetry = context.telemetry || req.body.telemetry || userKey.deviceTelemetry || null;

		await createRichAuthLog(req, userKey.user, {
			eventType: "Passkey Logged In",
			status: "SUCCESS",
			authMethod: "FIDO2_PASSKEY",
			data: {
				telemetry: telemetry,
				tags: [
					{
						label:
							req.headers["x-client-type"] === "MOBILE"
								? "Platform"
								: "Platform",
						class: "success",
					},
				],
			},
		});

		res.json({ status: "SUCCESS", user: { email: userKey.user.email } });
	} catch (err) {
		console.error("LoginComplete Error:", err);
		res.status(500).json({ error: err.message });
	}
};

exports.transactionStepUpStart = async (req, res) => {
	try {
		const { username, transactionId } = req.body;
		const user = await prisma.user.findUnique({ where: { email: username } });
		const result = await fidoService.initiateChallenge("AUTH", user, RP_ID);

		if (result.status === 200) {
			await saveContext(result.data.challenge, result.data.sessionId, {
				purpose: "TX_STEPUP",
				userId: user.id,
				transactionId,
			});
		}
		res.status(result.status).json(result.data);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

exports.transactionStepUpComplete = async (req, res) => {
	try {
		const startTime = Date.now();
		const credential = normalizeCredential(req.body);
		const clientData = parseClientData(req.body);

		const context = await getContext(clientData.challenge);

		if (!context || context.purpose !== "TX_STEPUP") {
			return res.status(408).json({
				error: "Sesi transaksi habis (Timeout).",
				code: "TRANSACTION_TIMEOUT",
			});
		}

		const user = await prisma.user.findUnique({
			where: { id: context.userId },
		});
		if (!user) return res.status(401).json({ error: "User tidak ditemukan" });

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

		if (result.status !== 200)
			return res.status(401).json({ error: "Biometrik salah" });

		const userKey = await prisma.userKey.findUnique({
			where: { credentialId: credential.id },
			include: { user: true },
		});

		if (!userKey || !userKey.user)
			return res.status(401).json({ error: "Key not registered" });

		const deviceStatus = (userKey.status || "").toLowerCase();

		if (deviceStatus === "suspended" || deviceStatus === "revoked") {
			createRichAuthLog(req, userKey.user, {
				eventType: `Device ${deviceStatus}`,
				status: "BLOCKED",
				authMethod: "FIDO2_PASSKEY",
				data: {
					tags: [{ label: `Device ${deviceStatus}`, class: "error" }],
					telemetry: context.telemetry || req.body.telemetry || null,
				},
			});
			return res.status(403).json({
				error: `This device has been ${deviceStatus}. Please contact support.`,
			});
		}

		const updateExistingLog = async (finalStatus, finalEvent, extraTags) => {
			try {
				const recentLogs = await prisma.authLog.findMany({
					where: { email: user.email },
					orderBy: { createdAt: "desc" },
					take: 20,
				});

				const targetLog = recentLogs.find((log) => {
					const data = log.riskTags || {};
					return (
						data.paymentId === context.transactionId ||
						data.transactionId === context.transactionId
					);
				});

				if (targetLog) {
					const oldData = targetLog.riskTags || {};
					const oldTags = oldData.tags || [];

					const newTagsFiltered = extraTags.filter(
						(nt) => !oldTags.some((ot) => ot.label === nt.label),
					);
					const mergedTags = [...oldTags, ...newTagsFiltered];

					const duration = Date.now() - startTime;

					await prisma.authLog.update({
						where: { id: targetLog.id },
						data: {
							status: finalStatus,
							eventType: finalEvent,
							duration: finalStatus === "SUCCESS" ? duration : null,
							riskTags: {
								...oldData,
								tags: mergedTags,
								updatedAt: new Date().toISOString(),
							},
						},
					});
					console.log(
						`[RichLog] Log #${targetLog.id} UPDATED -> ${finalStatus}`,
					);
				} else {
					console.warn(
						`[RichLog] Warning: Log for TX ${context.transactionId} NOT FOUND.`,
					);
				}
			} catch (logErr) {
				console.error("[RichLog] Error updating log:", logErr.message);
			}
		};

		const existingTx = await prisma.transaction.findUnique({
			where: { id: context.transactionId },
		});

		let riskHistory = [];
		try {
			if (existingTx && existingTx.riskReason) {
				riskHistory = existingTx.riskReason.startsWith("[")
					? JSON.parse(existingTx.riskReason)
					: [{ note: existingTx.riskReason }];
			}
		} catch (e) {}

		if (result.status !== 200) {
			riskHistory.push({
				event: "AUTH_FAILED",
				timestamp: new Date().toISOString(),
			});

			await prisma.transaction.update({
				where: { id: context.transactionId },
				data: { authResult: "FAILED", riskReason: JSON.stringify(riskHistory) },
			});

			await updateExistingLog("FAILED", "Payment Denied", [
				{ label: "Biometric Failed", class: "danger" },
			]);

			await redisClient.del(`ctx:${clientData.challenge}`);
			return res.status(401).json({ error: "Verifikasi Biometrik Gagal" });
		}

		riskHistory.push({
			event: "AUTH_SUCCESS",
			timestamp: new Date().toISOString(),
		});

		await prisma.transaction.update({
			where: { id: context.transactionId },
			data: { authResult: "SUCCESS", riskReason: JSON.stringify(riskHistory) },
		});

		await updateExistingLog("SUCCESS", "Payment Approved", [
			{ label: "Payment Approved", class: "success" },
			{ label: "Biometric Verified", class: "success" },
		]);

		await redisClient.del(`ctx:${clientData.challenge}`);
		res.json({ status: "SUCCESS", message: "Pembayaran disetujui" });
	} catch (err) {
		console.error("StepUp Error:", err);
		res.status(500).json({ error: err.message });
	}
};
