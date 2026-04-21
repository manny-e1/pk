const bcrypt = require("bcrypt");
const prisma = require("../../config/db");
const { sendTokenCookie } = require("../../utils/jwt");
const { createRichAuthLog } = require("../../utils/richLogger");
const javaClient = require("../../services/JavaAuthClient");
const PolicyEngine = require("../../utils/authPolicies");
const RiskEngine = require("../../utils/riskEngine");
const { generateUserId } = require("../../utils/idGenerator");

exports.registerUser = async (req, res) => {
	const { email, password, fullName, mobile, companyName, cifNumber } =
		req.body;

	try {
		const existing = await prisma.user.findUnique({ where: { email } });
		if (existing?.cifNumber)
			return res.status(400).json({ error: "Email already exists" });

		const hashedPassword = await bcrypt.hash(password, 10);
		const user = await prisma.user.upsert({
			where: { email},
			update: {
				cifNumber,
					role: 'USER',
					balance: 0,
					status: 'active',
					passwordHash: hashedPassword
			},
			create: {
				id: generateUserId(),
				email,
				passwordHash: hashedPassword,
				fullName,
				mobile,
				cifNumber,
				companyName,
				role: "USER",
				balance: 0,
				status: "active",
			},
		});

		sendTokenCookie(res, user);

		res.json({
			status: "success",
			userId: user.id,
			message: "Registration successful. Please setup authentication.",
		});
	} catch (err) {
		console.error("Register Error:", err);
		res.status(500).json({ error: "Registration failed" });
	}
};

exports.loginStep1 = async (req, res) => {
	const { mobile, cifNumber, deviceId, telemetry, companyId } = req.body;
	const channel = req.apiClient ? req.apiClient.channel : "MOBILE";

	try {
		const user = await prisma.user.findUnique({ where: { mobile, cifNumber } });

		if (!user || !user.cifNumber) {
			return res.status(401).json({ error: "Invalid credentials" });
		}

		let loginCompanyId = null;
		let workflows = [];
		if (companyId) {
			const company = await prisma.company.findFirst({
				where: {
					OR: [
						{ id: companyId },
						{ registrationNo: companyId },
						{ name: companyId },
					],
				},
			});
			if (!company) {
				return res.status(401).json({ error: "Invalid Company ID" });
			}
			if (user.companyId !== company.id) {
				return res
					.status(401)
					.json({ error: "User is not linked to this company" });
			}
			loginCompanyId = company.id;
			workflows = await prisma.approvalWorkflow.findMany({
				where: { companyId: company.id },
				select: { id: true, name: true },
				orderBy: { updatedAt: "desc" },
			});
		}

		const segment =
			loginCompanyId || user.companyName || user.role === "ADMIN"
				? "CORPORATE"
				: "CONSUMER";

		const policyResult = await PolicyEngine.evaluateAuthPolicy({
			segment: segment,
			channel: channel,
			action: "LOGIN",
			riskScore: 10,
		});

		const decision = policyResult.decision;

		if (decision.status === "APPROVED") {
			sendTokenCookie(res, user);
			return res.json({
				status: "complete",
				userId: user.id,
				fullName: user.fullName,
				email: user.email,
				companyId: loginCompanyId,
				workflows,
			});
		}if (decision.status === "CHALLENGED") {
			const challengeRes = await javaClient.getUnifiedChallenge();
			return res.json({
				status: "challenge_required",
				userId: user.id,
				fullName: user.fullName,
				companyId: loginCompanyId,
				email: user.email,
				workflows,
				challenge: challengeRes.challenge || challengeRes,
				allowedMethods: decision.allowedMethods,
				// allowedMethods: ["PIN"],
				requirements: decision.requirements,
				message:
					"Additional verification required based on current security policy",
			});
		}
			await createRichAuthLog(req, user, {
				eventType: "LOGIN_BLOCKED",
				status: "BLOCKED",
				riskScore: riskResult.score,
			});
			return res.status(403).json({ error: "Login Denied by Policy" });
	} catch (err) {
		res.status(500).json({ error: "System Error" });
	}
};

exports.verifyMfa = async (req, res) => {
	const { userId, authType, challenge, signature, otp, deviceId } = req.body;

	try {
		const user = await prisma.user.findUnique({ where: { id: userId } });
		if (!user) return res.status(404).json({ error: "User not found" });

		const result = await javaClient.verifyUnifiedAuth({
			userId,
			deviceId,
			authType,
			challenge,
			signature,
			otp,
		});

		if (result.status !== "success") throw new Error("Invalid Signature/OTP");

		sendTokenCookie(res, user);

		res.json({ status: "success" });
	} catch (err) {
		res.status(401).json({ error: "Verification Failed" });
	}
};

exports.getChallenge = async (req, res) => {
	try {
		const result = await javaClient.getChallenge();
		res.json(result);
	} catch (err) {
		res.status(500).json({ error: "Failed" });
	}
};

exports.getAvailableEnrollmentMethods = async (req, res) => {
	try {
		const channel = req.apiClient.channel.toUpperCase();
		const segment = req.apiClient.consumerType.toUpperCase();

		const policies = await prisma.authPolicy.findMany({
			where: {
				channel: channel,
				segment: segment,
			},
		});

		console.log(
			`[Policy Fetch] Channel: ${channel}, Segment: ${segment}, Policies Found: ${policies.length}`,
		);

		console.log(
			"Policies Detail:",
			policies.map((p) => ({
				id: p.id,
				channel: p.channel,
				segment: p.segment,
				action: p.action,
				condition: JSON.stringify(p.condition),
				metadata: JSON.stringify(p.metadata),
			})),
		);

		const methodSet = new Set();

		for (const policy of policies) {
			let conditions = {};

			try {
				if (policy.condition) {
					conditions =
						typeof policy.condition === "string"
							? JSON.parse(policy.condition)
							: policy.condition;
					if (typeof conditions === "string")
						conditions = JSON.parse(conditions);
				} else if (policy.metadata) {
					conditions =
						typeof policy.metadata === "string"
							? JSON.parse(policy.metadata)
							: policy.metadata;
					if (typeof conditions === "string")
						conditions = JSON.parse(conditions);
				}
			} catch (err) {
				console.error("Gagal parsing JSON condition:", err);
			}

			const stepUpMethods =
				conditions.stepUpMethods || conditions.allowedMethods || [];

			for ( const method of stepUpMethods){ methodSet.add(method.toLowerCase())}
		}

		let availableMethods = Array.from(methodSet);

		if (availableMethods.length === 0) {
			availableMethods = ["fido2", "email_otp", "totp_soft", "pin"];
		}

		res.json({
			success: true,
			clientApp: req.apiClient.name,
			channelDetected: channel,
			data: availableMethods,
		});
	} catch (error) {
		console.error("Fetch Available Methods Error:", error);
		res.status(500).json({ error: "Failed to fetch enrollment methods" });
	}
};

exports.getPinKeystore = async (req, res) => {
  try {
    const { userId } = req.body;
    
    if (!userId) {
        return res.status(400).json({ error: "Missing userId parameter" });
    }

    const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { pinKeystore: true }
    });

    if (!user || !user.pinKeystore) {
        return res.status(404).json({ error: "Secure Keystore not found for this user." });
    }

    res.json({ success: true, keystoreData: user.pinKeystore });
  } catch (err) {
    console.error("Get Keystore Error:", err);
    res.status(500).json({ error: "Failed to fetch keystore" });
  }
};