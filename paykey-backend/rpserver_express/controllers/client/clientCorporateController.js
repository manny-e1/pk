const jwt = require("jsonwebtoken");
const prisma = require("../../config/db");
const { createRichAuthLog } = require("../../utils/richLogger");
const javaClient = require("../../services/JavaAuthClient");
const RiskEngine = require("../../utils/riskEngine");
const PolicyEngine = require("../../utils/authPolicies");
const { getNetworkInfo } = require("../../utils/geoIpService");
const { deriveFromAccount } = require("../../utils/deriveFromAccount");
const { customAlphabet } = require("nanoid");
const { Prisma } = require("@prisma/client");

function corporateTxLogBase(tx) {
	return {
		transactionId: tx.id,
		transactionNo: tx.transactionNo,
		amount: Number(tx.amount),
		currency: tx.currency || "MYR",
		merchant: tx.merchantName || tx.toAccount || "Unknown",
		isCorporate: true,
	};
}

const JWT_SECRET = process.env.JWT_SECRET || "kunci_rahasia_kita_bersama_123";

function pickUserId(req) {
	if (req.body?.userId) return req.body.userId;
	if (req.query?.userId) return String(req.query.userId);
	if (req.cookies?.auth_token) {
		try {
			return jwt.verify(req.cookies.auth_token, JWT_SECRET).id;
		} catch (_e) {}
	}
	const auth = req.headers.authorization || "";
	if (auth.startsWith("Bearer ")) {
		try {
			return jwt.verify(auth.slice(7), JWT_SECRET).id;
		} catch (_e) {}
	}
	return null;
}

function normalizeMode(mode) {
	const m = (mode || "").toUpperCase();
	if (m === "SINGLE") return "SINGLE";
	if (m === "MULTIPLE_ALL") return "MULTIPLE_ALL";
	if (m === "MULTIPLE_ANY") return "MULTIPLE_ANY";
	if (m === "MULTIPLE_N_OF_M") return "MULTIPLE_N_OF_M";
	return "SINGLE";
}

function isLevelComplete(nodes, mode, nOfM) {
	const total = nodes.length;
	const done = nodes.filter((n) => n.status === "done").length;
	if (mode === "SINGLE") return done >= 1;
	if (mode === "MULTIPLE_ALL") return done >= total;
	if (mode === "MULTIPLE_ANY") return done >= 1;
	if (mode === "MULTIPLE_N_OF_M") return done >= Math.max(1, nOfM || 1);
	return false;
}

/** After a level completes, move the next pending level to "current". */
function promoteNextPendingLevel(chain) {
	const pending = chain.filter((n) => n.status === "pending");
	if (!pending.length) return;
	const nextLevel = Math.min(...pending.map((n) => n.level));
	if (!Number.isFinite(nextLevel)) return;
	for (const n of chain) {
		if (n.level === nextLevel && n.status === "pending") n.status = "current";
	}
}

/**
 * Mutates `chain` in place: marks the user's current node done and promotes the level if complete.
 * @returns {{ ok: true, idx: number, finalApproved: boolean, hasCurrent: boolean } | { ok: false }}
 */
function mutateCorporateApprovalChain(chain, userId, methods) {
	const idx = chain.findIndex((n) => n.id === userId && n.status === "current");
	if (idx < 0) return { ok: false };
	chain[idx].status = "done";
	chain[idx].time = new Date().toISOString();
	chain[idx].method = methods != null ? methods : "STEP_UP_OK";
	const level = chain[idx].level;
	const levelNodes = chain.filter((n) => n.level === level);
	const mode = normalizeMode(chain[idx].levelMode);
	const nOfM = chain[idx].nOfM || null;
	if (isLevelComplete(levelNodes, mode, nOfM)) {
		// When a level completes early (ANY / N-of-M), mark remaining approvers as skipped
		// so they don't block completion and can be dimmed in UI.
		if (mode === "MULTIPLE_ANY" || mode === "MULTIPLE_N_OF_M") {
			for (const n of chain) {
				if (n.level !== level) continue;
				if (n.status === "done" || n.status === "rejected") continue;
				if (n.id === userId) continue;
				if (n.status === "current" || n.status === "pending") {
					n.status = "skipped";
					n.time = n.time || new Date().toISOString();
				}
			}
		}
		promoteNextPendingLevel(chain);
	}
	const hasCurrent = chain.some((n) => n.status === "current");
	const hasPending = chain.some((n) => n.status === "pending");
	const finalApproved = !hasCurrent && !hasPending;
	return { ok: true, idx, finalApproved, hasCurrent };
}

function markOutstandingAsSkipped(chain) {
	for (const n of chain) {
		if (n.status === "current" || n.status === "pending") {
			n.status = "skipped";
			n.time = n.time || new Date().toISOString();
		}
	}
}

function mutateCorporateRejectionChain(chain, userId) {
	const idx = chain.findIndex((n) => n.id === userId && n.status === "current");
	if (idx < 0) return { ok: false };

	chain[idx].status = "rejected";
	chain[idx].time = new Date().toISOString();

	const level = chain[idx].level;
	const levelNodes = chain.filter((n) => n.level === level);
	const mode = normalizeMode(chain[idx].levelMode);
	const nOfM = Math.max(1, chain[idx].nOfM || 1);

	const done = levelNodes.filter((n) => n.status === "done").length;
	const rejected = levelNodes.filter((n) => n.status === "rejected").length;
	const total = levelNodes.length;
	const maxPossibleApprovals = total - rejected;

	let finalRejected = false;
	if (mode === "SINGLE" || mode === "MULTIPLE_ALL") {
		finalRejected = rejected >= 1;
	} else if (mode === "MULTIPLE_ANY") {
		finalRejected = rejected >= total;
	} else if (mode === "MULTIPLE_N_OF_M") {
		finalRejected = done + (maxPossibleApprovals - done) < nOfM;
	}

	if (finalRejected) {
		markOutstandingAsSkipped(chain);
	}

	const hasCurrent = chain.some((n) => n.status === "current");
	return { ok: true, idx, finalRejected, hasCurrent };
}

function normalizeRiskLevel(level) {
	const l = String(level || "LOW").toUpperCase();
	if (["LOW", "MEDIUM", "HIGH", "CRITICAL"].includes(l)) return l;
	return "LOW";
}

function maxRiskLevel(a, b) {
	const order = { LOW: 0, MEDIUM: 1, HIGH: 2, CRITICAL: 3 };
	const A = normalizeRiskLevel(a);
	const B = normalizeRiskLevel(b);
	return order[B] > order[A] ? B : A;
}

function getEventDescription(status) {
	switch (status) {
		case "APPROVED":
			return "Payment Approved";
		case "BLOCKED":
			return "Payment Denied";
		case "CHALLENGED":
			return "Approval Requested";
		default:
			return "Payment Initiated";
	}
}

exports.getCorporateWorkflows = async (req, res) => {
	try {
		const userId = pickUserId(req);
		if (!userId) return res.status(401).json({ error: "User not identified" });

		const user = await prisma.user.findUnique({ where: { id: userId } });
		if (!user || !user.companyId) {
			return res.status(400).json({ error: "User is not linked to a company" });
		}

		const workflows = await prisma.approvalWorkflow.findMany({
			where: { companyId: user.companyId },
			orderBy: { updatedAt: "desc" },
			include: {
				levels: {
					orderBy: { levelOrder: "asc" },
					include: {
						assignees: {
							include: {
								user: {
									select: {
										id: true,
										fullName: true,
										email: true,
									},
								},
							},
						},
					},
				},
			},
		});

		return res.json({
			success: true,
			workflows: workflows.map((w) => ({
				id: w.id,
				name: w.name,
				levels: w.levels.map((l) => ({
					levelOrder: l.levelOrder,
					mode: l.mode,
					nOfM: l.nOfM,
					users: l.assignees.map((a) => ({
						id: a.user.id,
						name: a.user.fullName,
						email: a.user.email,
					})),
				})),
			})),
		});
	} catch (err) {
		console.error("[getCorporateWorkflows]", err);
		return res.status(500).json({ error: err.message });
	}
};

exports.initiateCorporateTransaction = async (req, res) => {
	try {
		const userId = pickUserId(req);
		if (!userId) return res.status(401).json({ error: "User not identified" });

		const user = await prisma.user.findUnique({ where: { id: userId } });
		if (!user || !user.companyId) {
			return res.status(400).json({ error: "User is not linked to a company" });
		}

		const {
			telemetry,
			beneficiaryAccount,
			amount,
			toAccount,
			merchantName,
			description,
			workflowId,
			payerBank,
			beneficiaryBank,
		} = req.body;
		const currency = String(req.body.currency || "MYR").toUpperCase();

		if (!amount || !toAccount || !merchantName || !workflowId) {
			return res.status(400).json({ error: "Missing required fields" });
		}

		const workflow = await prisma.approvalWorkflow.findUnique({
			where: { id: workflowId },
			include: {
				levels: {
					orderBy: { levelOrder: "asc" },
					include: {
						assignees: {
							include: {
								user: {
									select: { id: true, fullName: true, email: true, mobile: true },
								},
							},
						},
					},
				},
			},
		});
		if (!workflow || workflow.companyId !== user.companyId) {
			return res
				.status(404)
				.json({ error: "Workflow not found for this company" });
		}
		if (!workflow.levels.length) {
			return res.status(400).json({ error: "Workflow has no levels" });
		}

		const sortedLevels = [...workflow.levels].sort(
			(a, b) => a.levelOrder - b.levelOrder,
		);
		const firstLevel = sortedLevels[0];

		if (
			!firstLevel.assignees.some((assignee) => assignee.user.id === user.id)
		) {
			return res.status(403).json({
				error:
					"Only assignees on the first approval level can initiate this transfer.",
			});
		}

		// --- Risk + policy (aligned with clientTransactionController.initiateTransaction) ---
		const channel = req.apiClient ? req.apiClient.channel : "MOBILE";
		const rawIp =
			req.headers["cf-connecting-ip"] ||
			req.headers["x-forwarded-for"] ||
			req.socket.remoteAddress ||
			req.ip;
		const ipAddress = rawIp ? rawIp.split(",")[0].trim() : "127.0.0.1";

		const segment =
			user.companyName || user.role === "ADMIN" ? "CORPORATE" : "CONSUMER";
		const netInfo = getNetworkInfo(ipAddress);
		const countryCode = netInfo.country || "UN";
		const deviceIdentifier =
			telemetry?.device_model || req.body.deviceId || "unknown";

		const riskContext = {
			userId: user.id,
			email: user.email,
			userSegment: segment,
			channel,
			amount: Number(amount),
			currency,
			ipAddress,
			countryCode,
			deviceId: deviceIdentifier,
			beneficiaryAccount: beneficiaryAccount || toAccount || null,
			merchantName: merchantName || null,
			fromAccount: deriveFromAccount(req.body),
			telemetry: telemetry || {},
		};

		const riskResult = await RiskEngine.calculateRisk(riskContext);
		const riskFactors = riskResult.factors.map((f,i) => {
			const breakdown = riskResult.breakdown[i]
			return {
				label: f.label,
				class: f.class,
				rule: breakdown?.rule,
				score: breakdown?.score,
				desc: breakdown?.desc
			}
		})
		const policyResult = await PolicyEngine.evaluateAuthPolicy({
			segment,
			channel,
			action: "TRANSACTION",
			riskScore: riskResult.score,
		});

		const policyDecision = policyResult.decision;
		const txId = `CORP_TX_${customAlphabet("0123456789ABCDEF", 10)()}`;
		let responseMessage = "Transaction Auto-Approved";

		const lockoutTime = new Date(
			Date.now() - policyDecision.metadata.lockoutDuration * 1000,
		);
		const failedAttempts = await prisma.authLog.count({
			where: {
				email: user.email,
				status: "FAILED",
				createdAt: { gte: lockoutTime },
			},
		});
		if (failedAttempts >= policyDecision.metadata.maxAttempts) {
			policyDecision.status = "BLOCKED";
			responseMessage = 'Security Lockout: Too many failed attempts. Please try again later.';
			riskResult.score = 100;
			riskResult.factors.push({
				label: "Brute-Force Lockout",
				class: "critical",
			});
		}

		const isNewDevice = riskResult.factors.some(
			(f) =>
				(typeof f === "object" && f.label === "New Device") ||
				f === "New Device",
		);
		if (
			policyDecision.status !== "BLOCKED" &&
			policyDecision.metadata.knownDeviceRequired &&
			isNewDevice
		) {
			policyDecision.status = "BLOCKED";
			responseMessage = 'Security Policy Block: Transactions are not allowed from unrecognized devices.';
			riskResult.score = 100;
			riskResult.factors.push({
				label: "Untrusted Device Blocked",
				class: "critical",
			});
		}

		if (policyDecision.status !== "BLOCKED") {
			if (
				riskResult.score >= 100 ||
				riskResult.isBlockedByAmount ||
				policyDecision.status === "REJECTED"
			) {
				policyDecision.status = "BLOCKED";
			} else {
				const policyMethods = policyDecision.allowedMethods || [];
				const amountMethods = riskResult.amountMandatedMethods || [];
				const chainedMethods = [];
				if (amountMethods.length > 0) chainedMethods.push(...amountMethods);
				if (policyMethods.length > 0) chainedMethods.push(...policyMethods);
				if (chainedMethods.length > 0) {
					policyDecision.status = "CHALLENGED";
					responseMessage = "Multi-Step Authentication Required";
					policyDecision.allowedMethods = chainedMethods;
				}
			}
		}

		const factorTags = (riskResult.factors || []).map((f) => {
			if (typeof f === "object" && f.label)
				return { label: String(f.label), class: f.class || "warning" };
			return { label: String(f), class: "warning" };
		});

		const policyTags = (policyDecision.tags || []).map((t) => {
			if (typeof t === "object" && t.label)
				return { label: String(t.label), class: t.class || "info" };
			return { label: String(t), class: "info" };
		});
		const levelColor =
			riskResult.level === "CRITICAL" || riskResult.level === "HIGH"
				? "critical"
				: riskResult.level === "MEDIUM"
					? "warning"
					: "success";

		const scoreColor =
			riskResult.score >= 70
				? "critical"
				: riskResult.score >= 30
					? "warning"
					: "success";

		const combinedTags = [
			{ label: `${amount} ${currency.toUpperCase()}`, class: "info" },
			{ label: `Level: ${riskResult.level}`, class: levelColor },
			{ label: `Score: ${riskResult.score}`, class: scoreColor },
			...factorTags,
			...policyTags,
		];

		const baseLogData = {
			paymentId: txId,
			telemetry: telemetry || {},
			amount: Number(amount),
			currency: currency.toUpperCase(),
			merchant: merchantName || beneficiaryAccount || "Unknown",
			tags: combinedTags,
			factors: riskResult.breakdown,
			riskScore: riskResult.score,
			riskLevel: riskResult.level,
			level: 1
		};
		const finalEventType = getEventDescription(policyDecision.status);
		if (policyDecision.status === "BLOCKED") {
			await createRichAuthLog(req, user, {
				eventType: finalEventType,
				status: "BLOCKED",
				message: responseMessage,
				data: baseLogData,
			});
			return res.status(403).json({
				error: responseMessage,
				riskScore: riskResult.score,
				riskLevel: riskResult.level,
				riskFactors,
			});
		}

		// --- Build approval chain (only after policy allows submission) ---
		const initiatorSoleOnFirstLevel =
			firstLevel.assignees.length === 1 &&
			firstLevel.assignees[0].user.id === user.id;

		const nowIso = new Date().toISOString();
		const chain = [];
		for (const lv of sortedLevels) {
			for (const a of lv.assignees) {
				const onFirst = lv.levelOrder === firstLevel.levelOrder;
				const isInitiator = a.user.id === user.id;
				let status;
				let time = null;
				if (onFirst) {
					if (isInitiator) {
						if (initiatorSoleOnFirstLevel) {
							status = "current";
							time = null;
						} else {
							status = "done";
							time = nowIso;
						}
					} else {
						status = "current";
					}
				} else {
					status = "pending";
				}
				chain.push({
					id: a.user.id,
					name: a.user.fullName,
					email: a.user.email,
					mobile: a.user.mobile,
					role: `Level ${lv.levelOrder + 1} Approver`,
					method: null,
					level: lv.levelOrder,
					levelMode: lv.mode,
					nOfM: lv.nOfM || null,
					status,
					time,
				});
			}
		}

		const level0Nodes = chain.filter((n) => n.level === firstLevel.levelOrder);
		const mode0 = normalizeMode(level0Nodes[0]?.levelMode);
		const nOf0 = level0Nodes[0]?.nOfM ?? null;
		if (isLevelComplete(level0Nodes, mode0, nOf0)) {
			promoteNextPendingLevel(chain);
		}

		let hasCurrent = chain.some((n) => n.status === "current");
		let hasPending = chain.some((n) => n.status === "pending");
		let workflowComplete = !hasCurrent && !hasPending;

		const created = await prisma.transaction.create({
			data: {
				id: txId,
				transactionNo: txId,
				userId: user.id,
				amount: Number(amount),
				currency: currency || "MYR",
				toAccount,
				merchantName,
				description,
				type: "TRANSFER",
				status: workflowComplete ? "SUCCESS" : "PENDING",
				authResult: workflowComplete ? "APPROVED" : "PENDING",
				riskLevel: riskResult.level || "LOW",
				riskScore: riskResult.score ?? 0,
				isCorporate: true,
				companyId: user.companyId,
				workflowId: workflow.id,
				corporateStatus: workflowComplete ? "APPROVED" : "PENDING_APPROVAL",
				approvalChain: chain,
				currentLevel: hasCurrent
					? Math.min(
							...chain
								.filter((n) => n.status === "current")
								.map((n) => n.level),
						)
					: null,
				nextApproverId: hasCurrent
					? chain.find((n) => n.status === "current")?.id || null
					: null,
				payerBank: payerBank ? String(payerBank).slice(0, 128) : null,
				beneficiaryBank: beneficiaryBank
					? String(beneficiaryBank).slice(0, 128)
					: null,
				fromAccount: deriveFromAccount(req.body),
			},
		});

		await createRichAuthLog(req, user, {
			eventType: getEventDescription("INITIATED"),
			status: workflowComplete ? "SUCCESS" : "PENDING",
			message: responseMessage,
			data: {
				...corporateTxLogBase(created),
				workflowId: workflow.id,
				workflowComplete,
				riskScore: riskResult.score,
				riskLevel: riskResult.level,
				riskFactors,
				level: 1,
				tags: [
					{
						label: `${Number(amount)} ${currency} → ${merchantName || toAccount}`,
						class: "info",
					},
					{
						label: workflowComplete
							? "No further approvers required"
							: "Awaiting approval chain",
						class: workflowComplete ? "success" : "warning",
					},
				],
			},
		});

		if (policyDecision.status === "CHALLENGED") {
			const challengeRes = await javaClient.getUnifiedChallenge();
			await createRichAuthLog(req, user, {
				eventType: finalEventType,
				status: "CHALLENGED",
				authMethod: "CORPORATE_TRANSFER",
				data: {
					transactionId: created.id,
					riskScore: riskResult.score,
					riskFactors,
					riskLevel: riskResult.level,
					level: 1,
					tags: [{ label: "Awaiting strong authentication", class: "warning" }],
				},
			});
			return res.json({
				success: true,
				status: "challenge_required",
				transactionId: created.id,
				workflowComplete: false,
				challenge: challengeRes.challenge || challengeRes,
				requirements: policyDecision.requirements,
				amountMandatedMethods: policyDecision.allowedMethods || [],
				riskScore: riskResult.score,
				riskLevel: riskResult.level,
				policySettings: {
					userVerification:
						policyDecision.metadata?.userVerification || "preferred",
					txnSigning: policyDecision.metadata?.txnSigning || false,
					knownDeviceRequired: policyDecision.metadata?.knownDevice || false,
					maxAttempts: policyDecision.metadata?.maxAttempts || 3,
					lockoutDuration: policyDecision.metadata?.lockoutDuration || 60,
					totalTimeout: policyDecision.metadata?.totalTimeout || 120,
				},
				chain: created.approvalChain,
				amount: Number(amount),
				beneficiary: merchantName || toAccount,
				ref: created.transactionNo,
				beneficiaryBank: beneficiaryBank || null,
			});
		}

		// APPROVED: auto-apply initiator approval (same as Approvals → Approve) when they hold the current slot
		const chainWorking = JSON.parse(JSON.stringify(created.approvalChain || []));
		const auto = mutateCorporateApprovalChain(
			chainWorking,
			user.id,
			"POLICY_AUTO",
		);
		let finalDoc = created;
		if (auto.ok) {
			hasCurrent = chainWorking.some((n) => n.status === "current");
			hasPending = chainWorking.some((n) => n.status === "pending");
			workflowComplete = !hasCurrent && !hasPending;
			finalDoc = await prisma.transaction.update({
				where: { id: created.id },
				data: {
					status: workflowComplete ? "SUCCESS" : "PENDING",
					authResult: workflowComplete ? "APPROVED" : "PENDING",
					corporateStatus: workflowComplete ? "APPROVED" : "PENDING_APPROVAL",
					approvalChain: chainWorking,
					currentLevel: hasCurrent
						? Math.min(
								...chainWorking
									.filter((n) => n.status === "current")
									.map((n) => n.level),
							)
						: null,
					nextApproverId: hasCurrent
						? chainWorking.find((n) => n.status === "current")?.id || null
						: null,
				},
			});
			await createRichAuthLog(req, user, {
				eventType: finalEventType,
				status: workflowComplete ? "SUCCESS" : "APPROVED",
				authMethod: "CORPORATE_APPROVAL",
				data: {
					...corporateTxLogBase(finalDoc),
					approvalAction: "auto_initiator",
					level: chainWorking[auto.idx]?.level+1, 
					workflowComplete,
					riskScore: riskResult.score,
					riskLevel: riskResult.level,
					riskFactors,
					tags: [
						{
							label: `${Number(amount)} ${currency}`,
							class: "info",
						},
						{
							label: workflowComplete
								? "All approvers completed"
								: "Initiator step completed — pending next approver",
							class: workflowComplete ? "success" : "warning",
						},
					],
				},
			});
		}

		return res.json({
			success: true,
			status: "complete",
			transactionId: finalDoc.id,
			workflowComplete,
			redirectToSuccess: workflowComplete,
			chain: finalDoc.approvalChain,
			riskScore: riskResult.score,
			riskLevel: riskResult.level,
			autoApprovalApplied: auto.ok,
		});
	} catch (err) {
		console.error("[initiateCorporateTransaction]", err);
		return res.status(500).json({ error: err.message });
	}
};

exports.listPendingCorporateTransactions = async (req, res) => {
	try {
		const userId = pickUserId(req);
		if (!userId) return res.status(401).json({ error: "User not identified" });

		const user = await prisma.user.findUnique({ where: { id: userId } });
		if (!user || !user.companyId) {
			return res.status(400).json({ error: "User is not linked to a company" });
		}

		const rows = await prisma.transaction.findMany({
			where: {
				isCorporate: true,
				companyId: user.companyId,
				corporateStatus: "PENDING_APPROVAL",
			},
			orderBy: { timestamp: "desc" },
			take: 100,
		});

		const data = rows.map((t) => {
			const chain = Array.isArray(t.approvalChain) ? t.approvalChain : [];
			return {
				id: t.id,
				beneficiary: t.merchantName || t.toAccount || "Unknown",
				bank: "Corporate Bank",
				ref: t.transactionNo,
				amount: Number(t.amount),
				priority: Number(t.amount) >= 100000 ? "high" : "normal",
				beneficiaryBank: t.beneficiaryBank,
				submittedDate: t.timestamp,
				chain,
				fromAccount: t.fromAccount,
			};
		});

		return res.json({ success: true, data });
	} catch (err) {
		console.error("[listPendingCorporateTransactions]", err);
		return res.status(500).json({ error: err.message });
	}
};

exports.rejectCorporateTransaction = async (req, res) => {
	try {
		const userId = pickUserId(req);
		const { txId } = req.body;
		if (!userId || !txId) {
			return res.status(400).json({ error: "userId and txId are required" });
		}
		const tx = await prisma.transaction.findUnique({ where: { id: txId } });
		if (!tx || !tx.isCorporate) {
			return res.status(404).json({ error: "Corporate transaction not found" });
		}
		const chain = Array.isArray(tx.approvalChain)
			? JSON.parse(JSON.stringify(tx.approvalChain))
			: [];
		const mut = mutateCorporateRejectionChain(chain, userId);
		if (!mut.ok) {
			return res.status(403).json({ error: "Not your turn to reject" });
		}
		const updated = await prisma.transaction.update({
			where: { id: txId },
			data: {
				status: mut.finalRejected ? "FAILED" : "PENDING",
				authResult: mut.finalRejected ? "REJECTED" : "PENDING",
				corporateStatus: mut.finalRejected ? "REJECTED" : "PENDING_APPROVAL",
				approvalChain: chain,
				currentLevel: mut.hasCurrent
					? Math.min(
							...chain
								.filter((n) => n.status === "current")
								.map((n) => n.level),
						)
					: null,
				nextApproverId: mut.hasCurrent
					? chain.find((n) => n.status === "current")?.id || null
					: null,
			},
		});

		const actor = await prisma.user.findUnique({ where: { id: userId } });
		if (actor) {
			await createRichAuthLog(req, actor, {
				eventType: "Payment Rejected",
				status: mut.finalRejected ? "FAILED" : "REJECTED",
				authMethod: "CORPORATE_APPROVAL",
				data: {
					...corporateTxLogBase(tx),
					approvalAction: "reject",
					level: chain[mut.idx]?.level+1,
					levelMode: chain[mut.idx]?.levelMode,
					transactionRejected: mut.finalRejected,
					tags: [
						{
							label: `${Number(tx.amount)} ${tx.currency || "MYR"}`,
							class: "info",
						},
						{
							label: mut.finalRejected
								? "Transaction fully rejected"
								: "Rejection vote recorded",
							class: mut.finalRejected ? "error" : "warning",
						},
					],
				},
			});
		}

		return res.json({
			success: true,
			status: updated.corporateStatus,
			transactionRejected: mut.finalRejected,
			chain,
			failedReceipt: {
				id: tx.id,
				transactionNo: tx.transactionNo,
				timestamp: tx.timestamp,
				description: tx.description,
				amount: Number(tx.amount),
				currency: tx.currency || "MYR",
				merchantName: tx.merchantName || tx.toAccount || "Unknown",
				toAccount: tx.toAccount || null,
				fromAccount: tx.fromAccount || null,
				payerBank: tx.payerBank || null,
				approvers: chain,
				rejector: chain[mut.idx] || null,
			},
		});
	} catch (err) {
		console.error("[rejectCorporateTransaction]", err);
		return res.status(500).json({ error: err.message });
	}
};

exports.approveCorporateTransaction = async (req, res) => {
	try {
		const userId = pickUserId(req);
		const { txId, methods } = req.body;
		if (!userId || !txId) {
			return res.status(400).json({ error: "userId and txId are required" });
		}
		const tx = await prisma.transaction.findUnique({ where: { id: txId } });
		if (!tx || !tx.isCorporate) {
			return res.status(404).json({ error: "Corporate transaction not found" });
		}
		const chain = Array.isArray(tx.approvalChain)
			? JSON.parse(JSON.stringify(tx.approvalChain))
			: [];
		const mut = mutateCorporateApprovalChain(chain, userId, methods);
		if (!mut.ok) {
			return res.status(403).json({ error: "Not your turn to approve" });
		}

		const actor = await prisma.user.findUnique({ where: { id: userId } });
		let nextRiskScore = tx.riskScore ?? 0;
		let nextRiskLevel = normalizeRiskLevel(tx.riskLevel || "LOW");
		if (actor?.email) {
			const actorAuthLog = await prisma.authLog.findFirst({
				where: {
					email: actor.email,
					AND: [
						{
							riskTags: {
								path: "$.transactionId",
								equals: txId,
							},
						},
						{
							riskTags: {
								path: "$.riskScore",
								not: Prisma.AnyNull,
							},
						},
					],
				},
				orderBy: { createdAt: "desc" },
			});
			const logScore = Number(actorAuthLog?.riskTags?.riskScore ?? 0);
			const logLevel = normalizeRiskLevel(
				actorAuthLog?.riskTags?.riskLevel || "LOW",
			);
			nextRiskScore = Math.max(nextRiskScore, logScore);
			nextRiskLevel = maxRiskLevel(nextRiskLevel, logLevel);
		}

		const { finalApproved, hasCurrent } = mut;
		const updated = await prisma.transaction.update({
			where: { id: txId },
			data: {
				status: finalApproved ? "SUCCESS" : "PENDING",
				authResult: finalApproved ? "APPROVED" : "PENDING",
				corporateStatus: finalApproved ? "APPROVED" : "PENDING_APPROVAL",
				approvalChain: chain,
				riskScore: nextRiskScore,
				riskLevel: nextRiskLevel,
				currentLevel: hasCurrent
					? Math.min(
							...chain
								.filter((n) => n.status === "current")
								.map((n) => n.level),
						)
					: null,
				nextApproverId: hasCurrent
					? chain.find((n) => n.status === "current")?.id || null
					: null,
			},
		});

		if (actor) {
			await createRichAuthLog(req, actor, {
				eventType: "Payment Approved",
				status: "SUCCESS",
				authMethod: "CORPORATE_APPROVAL",
				data: {
					...corporateTxLogBase(updated),
					approvalAction: "approve",
					level: chain[mut.idx]?.level+1,
					levelMode: chain[mut.idx]?.levelMode,
					workflowComplete: finalApproved,
					nextApproverId: updated.nextApproverId,
					tags: [
						{
							label: `${Number(tx.amount)} ${tx.currency || "MYR"}`,
							class: "info",
						},
						{
							label: finalApproved
								? "All approvers completed"
								: `Level ${chain[mut.idx]?.level ?? "?"} approved — pending next`,
							class: finalApproved ? "success" : "warning",
						},
					],
				},
			});
		}

		return res.json({
			success: true,
			status: updated.corporateStatus,
			chain,
		});
	} catch (err) {
		console.error("[approveCorporateTransaction]", err);
		return res.status(500).json({ error: err.message });
	}
};


exports.initiateApproval = async (req,res) => {
	try {
		const userId = pickUserId(req);
		if (!userId) return res.status(401).json({ error: "User not identified" });

		const user = await prisma.user.findUnique({ where: { id: userId } });
		if (!user || !user.companyId) {
			return res.status(400).json({ error: "User is not linked to a company" });
		}

		const { txId, telemetry } = req.body;
		if (!txId) return res.status(400).json({ error: "txId is required" });

		const tx = await prisma.transaction.findUnique({ where: { id: txId } });
		if (!tx || !tx.isCorporate || tx.companyId !== user.companyId) {
			return res.status(404).json({ error: "Corporate transaction not found" });
		}
		if ((tx.corporateStatus || "").toUpperCase() !== "PENDING_APPROVAL") {
			return res.status(400).json({ error: "Transaction is not pending approval" });
		}

		const chain = Array.isArray(tx.approvalChain) ? tx.approvalChain : [];
		const myNode = chain.find((n) => n.id === user.id && n.status === "current");
		if (!myNode) {
			return res.status(403).json({ error: "Not your turn to approve" });
		}

		const amount = Number(tx.amount || 0);
		const currency = String(tx.currency || "MYR").toUpperCase();
		const channel = req.apiClient ? req.apiClient.channel : "MOBILE";
		const rawIp =
			req.headers["cf-connecting-ip"] ||
			req.headers["x-forwarded-for"] ||
			req.socket.remoteAddress ||
			req.ip;
		const ipAddress = rawIp ? rawIp.split(",")[0].trim() : "127.0.0.1";

		const segment =
			user.companyName || user.role === "ADMIN" ? "CORPORATE" : "CONSUMER";
		const netInfo = getNetworkInfo(ipAddress);
		const countryCode = netInfo.country || "UN";
		const deviceIdentifier =
			telemetry?.device_model || req.body.deviceId || "unknown";

		const riskContext = {
			userId: user.id,
			email: user.email,
			userSegment: segment,
			channel,
			amount,
			currency,
			ipAddress,
			countryCode,
			deviceId: deviceIdentifier,
			beneficiaryAccount: tx.toAccount || null,
			merchantName: tx.merchantName || null,
			fromAccount: tx.fromAccount || null,
			telemetry: telemetry || {},
		};

		const riskResult = await RiskEngine.calculateRisk(riskContext);
		console.log(riskResult);
		const riskFactors = riskResult.factors.map((f,i) => {
			const breakdown = riskResult.breakdown[i]
			return {
				label: f.label,
				class: f.class,
				rule: breakdown.rule,
				score: breakdown.score,
				desc: breakdown.desc
			}
		})
		const policyResult = await PolicyEngine.evaluateAuthPolicy({
			segment,
			channel,
			action: "TRANSACTION",
			riskScore: riskResult.score,
		});

		const policyDecision = policyResult.decision;

		const lockoutTime = new Date(
			Date.now() - policyDecision.metadata.lockoutDuration * 1000,
		);
		const failedAttempts = await prisma.authLog.count({
			where: {
				email: user.email,
				status: "FAILED",
				createdAt: { gte: lockoutTime },
			},
		});
		if (failedAttempts >= policyDecision.metadata.maxAttempts) {
			policyDecision.status = "BLOCKED";
		}

		const isNewDevice = riskResult.factors.some(
			(f) =>
				(typeof f === "object" && f.label === "New Device") ||
				f === "New Device",
		);
		if (
			policyDecision.status !== "BLOCKED" &&
			policyDecision.metadata.knownDeviceRequired &&
			isNewDevice
		) {
			policyDecision.status = "BLOCKED";
		}

		if (policyDecision.status !== "BLOCKED") {
			if (
				riskResult.score >= 100 ||
				riskResult.isBlockedByAmount ||
				policyDecision.status === "REJECTED"
			) {
				policyDecision.status = "BLOCKED";
			} else {
				const policyMethods = policyDecision.allowedMethods || [];
				const amountMethods = riskResult.amountMandatedMethods || [];
				const chainedMethods = [];
				if (amountMethods.length > 0) chainedMethods.push(...amountMethods);
				if (policyMethods.length > 0) chainedMethods.push(...policyMethods);
				if (chainedMethods.length > 0) {
					policyDecision.status = "CHALLENGED";
					policyDecision.allowedMethods = chainedMethods;
				}
			}
		}

		if (policyDecision.status === "BLOCKED") {
			await createRichAuthLog(req, user, {
				eventType: getEventDescription(policyDecision.status),
				status: "BLOCKED",
				authMethod: policyDecision.allowedMethods.join(","),
				data: {
					...corporateTxLogBase(tx),
					amount,
					currency,
					riskScore: riskResult.score,
					riskLevel: riskResult.level,
					riskFactors,
					tags: [{ label: "Blocked by risk or policy", class: "error" }],
				},
			});
			return res.status(403).json({
				error: "Transaction blocked by risk or policy",
				status: "blocked",
				riskScore: riskResult.score,
				riskLevel: riskResult.level,
			});
		}

		const challengeRes = await javaClient.getUnifiedChallenge();
		const challenge = challengeRes.challenge || challengeRes;
		const amountMandatedMethods = policyDecision.allowedMethods || [];
		const assigneeAuthHint = myNode?.method || "FIDO2";

		await createRichAuthLog(req, user, {
			eventType: getEventDescription(policyDecision.status),
			status: "CHALLENGED",
			authMethod: policyDecision.allowedMethods.join(","),
			data: {
				...corporateTxLogBase(tx),
				approvalAction: "initiate",
				level: myNode?.level+1,
				riskScore: riskResult.score,
				riskLevel: riskResult.level,
				riskFactors,
				amountMandatedMethods,
				tags: [{ label: "Awaiting strong authentication", class: "warning" }],
			},
		});

		return res.json({
			success: true,
			status: "challenge_required",
			transactionId: tx.id,
			challenge,
			assigneeAuthHint,
			requirements: policyDecision.requirements || [],
			amountMandatedMethods,
			riskScore: riskResult.score,
			riskLevel: riskResult.level,
			policySettings: {
				userVerification: policyDecision.metadata?.userVerification || "required",
				txnSigning: policyDecision.metadata?.txnSigning || false,
				knownDeviceRequired: policyDecision.metadata?.knownDevice || false,
				maxAttempts: policyDecision.metadata?.maxAttempts || 3,
				lockoutDuration: policyDecision.metadata?.lockoutDuration || 60,
				totalTimeout: policyDecision.metadata?.totalTimeout || 120,
			},
		});
	}catch (e) {
		console.error("[initiateApproval]", e);
		return res.status(500).json({ error: e.message || "Failed to initiate approval" });
	}
};