const prisma = require("../config/db");
const { getNetworkInfo } = require("./geoIpService");
const UAParser = require("ua-parser-js");
const { customAlphabet } = require("nanoid");

const isIPv4 = (ip) => /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/.test(ip);
const isIPv6 = (ip) =>
	/^(?:[A-F0-9]{1,4}:){7}[A-F0-9]{1,4}$|^[A-F0-9]*:[A-F0-9:]+$/i.test(ip);

const generateEventID = () =>
	`evt__${customAlphabet("0123456789ABCDEF", 10)()}`;

const AUTH_METHOD_ALIASES = {
	FIDO2: 'FIDO2_PASSKEY',
	HARDWARE_KEY: 'FIDO2_SECURITY_KEY',
	EMAIL_OTP: 'EMAIL_OTP',
	TOTP_SOFT: 'TOTP_AUTHENTICATOR',
	HARDWARE_TOTP: 'HARDWARE_OTP',
	PIN: 'PIN',
	PUSH_APPROVAL: 'PUSH',
	BIOMETRIC: 'BIOMETRICS',
	BIO_LEGACY: 'BIOMETRICS'
};

const normalizeLoggedMethod = (method) => {
	const normalized = String(method || '').trim().toUpperCase();
	return AUTH_METHOD_ALIASES[normalized] || null;
};

const METHOD_LOG_MAP = {
	FIDO2: {
			label: 'Fido2 Passkey',
			authMethod: 'FIDO2_PASSKEY',
			flow: ['Display Passkey Prompt'],
			success: ['Passkey verification successful'],
			failed: ['Passkey verification failed']
	},
	HARDWARE_KEY: {
			label: 'Fido2 Security Key',
			authMethod: 'FIDO2_SECURITY_KEY',
			flow: ['Display Passkey Prompt'],
			success: ['Passkey verification successful'],
			failed: ['Passkey verification failed']
	},
	EMAIL_OTP: {
			label: 'Email OTP',
			authMethod: 'EMAIL_OTP',
			flow: ['Display OTP Prompt'],
			success: ['Email OTP Verification Successful'],
			failed: ['Email OTP Verification Failed']
	},
	TOTP_SOFT: {
			label: 'TOTP Authenticator',
			authMethod: 'TOTP_AUTHENTICATOR',
			flow: ['Display OTP Prompt'],
			success: ['OTP Verification Successful'],
			failed: ['OTP Verification Failed']
	},
	HARDWARE_TOTP: {
			label: 'Hardware OTP',
			authMethod: 'HARDWARE_OTP',
			flow: ['Display OTP Prompt'],
			success: ['OTP Verification Successful'],
			failed: ['OTP Verification Failed']
	},
	PIN: {
			label: 'PIN',
			authMethod: 'PIN',
			flow: ['Display PIN Prompt'],
			success: ['PIN Verification Successful'],
			failed: ['PIN Verification Failed']
	},
	PUSH_APPROVAL: {
			label: 'Push',
			authMethod: 'PUSH',
			flow: ['Send Push Approval'],
			success: ['Biometrics Verification Successful', 'Approved By User'],
			failed: ['Rejected By User']
	},
	BIOMETRIC: {
			label: 'Biometrics',
			authMethod: 'BIOMETRICS',
			flow: ['Display Biometric Prompt'],
			success: ['Biometrics Verification Successful'],
			failed: ['Biometrics Verification Failed']
	},
	BIO_LEGACY: {
			label: 'Biometrics',
			authMethod: 'BIOMETRICS',
			flow: ['Display Biometric Prompt'],
			success: ['Biometrics Verification Successful'],
			failed: ['Biometrics Verification Failed']
	}
};

function buildTimeline(method, success) {
	const cfg = METHOD_LOG_MAP[method] || {
			label: method || 'Authentication',
			authMethod: normalizeLoggedMethod(method),
			flow: ['Display Authentication Prompt'],
			success: ['Verification Successful'],
			failed: ['Verification Failed']
	};
	return {
			label: cfg.label,
			authMethod: cfg.authMethod,
			timeline: [...cfg.flow, ...(success ? cfg.success : cfg.failed)]
	};
}

async function appendToLatestChallengeTimeline(user, method, success, txId) {
	if (!user?.email) return;
	const flow = buildTimeline(method, success);
	const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
	const challengedLog = await prisma.authLog.findFirst({
			where: {
					userId: user.id,
					status: 'CHALLENGED',
					createdAt: { gte: fiveMinutesAgo },
					riskTags: {
						path: "$.paymentId",
						equals: txId
					}
			},
			orderBy: { createdAt: 'desc' }
	});
	if (!challengedLog) return;

	let jsonColumn = 'metadata';
	if (challengedLog.riskTags !== undefined) jsonColumn = 'riskTags';
	else if (challengedLog.metadata !== undefined) jsonColumn = 'metadata';

	const existingJson = (challengedLog[jsonColumn] && typeof challengedLog[jsonColumn] === 'object')
			? challengedLog[jsonColumn]
			: {};
	const existingTimeline = Array.isArray(existingJson.timeline) ? existingJson.timeline : [];

	await prisma.authLog.update({
			where: { id: challengedLog.id },
			data: {
					[jsonColumn]: {
							...existingJson,
							selectedMethod: normalizeLoggedMethod(method) || existingJson.selectedMethod || null,
							txId: txId || existingJson.txId || null,
							timeline: [...existingTimeline, ...flow.timeline]
					}
			}
	});
}

async function createRichAuthLog(req, user, context) {
	try {
		const rawIpHeader =
			req.headers["x-forwarded-for"] || req.socket.remoteAddress || "";

		let detectedIPv4 = null;
		let detectedIPv6 = null;
		let finalIp = "";

		if (typeof rawIpHeader === "string") {
			const ipList = rawIpHeader.split(",").map((s) => s.trim());

			let rawIPv6 = ipList.find((ip) => isIPv6(ip));
			if (rawIPv6) {
				detectedIPv6 = rawIPv6.replace(/^::ffff:/, "");
			}

			detectedIPv4 = ipList.find((ip) => isIPv4(ip));

			finalIp = detectedIPv6 || detectedIPv4 || ipList[0];
		} else {
			finalIp = rawIpHeader;
		}

		const userAgentString = req.headers["user-agent"] || "";

		const parser = new UAParser(userAgentString);
		const uaResult = parser.getResult();
		const telemetry = context.data?.telemetry || {};

		const deviceModel =
			telemetry.device_model ||
			`${uaResult.device.vendor || ""} ${uaResult.device.model || ""}`.trim() ||
			"Desktop/Unknown";

		const netInfo = getNetworkInfo(finalIp);

		const locationStr =
			context.data?.location ||
			(netInfo.city !== "Unknown City"
				? `${netInfo.city}, ${netInfo.country}`
				: "Unknown Location");

		let finalCountryCode = netInfo.country || "UN";
		if (locationStr && locationStr.includes(",")) {
			const parts = locationStr.split(",");
			const extractedCountry = parts[parts.length - 1].trim();
			if (extractedCountry.length === 2) {
				finalCountryCode = extractedCountry;
			}
		}
		const normalizedRiskScore = Number(
			context.data?.riskScore ?? context.data?.score ?? context.riskScore ?? 0 
		) ;
		const normalizedRiskLevel = String(
			context.data?.riskLevel ?? context.riskLevel ?? ''
		).toUpperCase() || undefined;

		const richMetadata = {
			...context.data,
			riskScore: normalizedRiskScore,
			riskLevel: normalizedRiskLevel,
			network: {
				ip: finalIp,
				ipv6: detectedIPv6,
				ipv4: detectedIPv4,
				isp: netInfo.isp,
				asn: netInfo.asn,
				country: finalCountryCode,
				raw_header: rawIpHeader,
			},
			device_info: {
				browser: telemetry.browser_name || uaResult.browser.name || "App",
				os: telemetry.os_name
					? `${telemetry.os_name} ${telemetry.os_version}`
					: `${uaResult.os.name} ${uaResult.os.version}`,
				type:
					telemetry.device_type ||
					uaResult.device.type ||
					"mobile" ||
					"desktop",
			},
			timestamp: new Date().toISOString(),
		};

		await prisma.authLog.create({
			data: {
				id: generateEventID(),
				email: user.email,
				eventType: context.eventType || "AUTH_EVENT",
				authMethod: context.authMethod || "UNKNOWN",
				status: context.status || "INFO",
				duration: context.duration || 0,
				userId: user.id,
				ipAddress: finalIp,
				userAgent: userAgentString,

				location: locationStr,
				countryCode: finalCountryCode,

				device: deviceModel,
				isVpn: telemetry.is_vpn_active || false,
				riskScore: normalizedRiskScore,

				riskTags: richMetadata,
			},
		});
		console.log(`[RichLog] ${context.eventType} | User: ${user.email} ${user.id}`);
		console.log(`          > IP Used: ${finalIp} (v6 Priority)`);
	} catch (error) {
		console.error("[RichLog] Failed to create log:", error.message);
	}
}

module.exports = { createRichAuthLog, appendToLatestChallengeTimeline  };
