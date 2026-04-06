const jwt = require("jsonwebtoken");
const prisma = require("../../config/db");
const { createRichAuthLog } = require("../../utils/richLogger");

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
			amount,
			toAccount,
			merchantName,
			description,
			workflowId,
			payerBank,
			beneficiaryBank,
		} = req.body;
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
									select: { id: true, fullName: true, email: true },
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
						status = "done";
						time = nowIso;
					} else {
						status = "current";
					}
				} else {
					status = "pending";
				}
				chain.push({
					id: a.user.id,
					name: a.user.fullName,
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

		const hasCurrent = chain.some((n) => n.status === "current");
		const hasPending = chain.some((n) => n.status === "pending");
		const workflowComplete = !hasCurrent && !hasPending;

		const txId = `CORP_TX_${Date.now()}`;
		const created = await prisma.transaction.create({
			data: {
				id: txId,
				transactionNo: txId,
				userId: user.id,
				amount: Number(amount),
				currency: "MYR",
				toAccount,
				merchantName,
				description: description || `Corporate transfer to ${merchantName}`,
				type: "TRANSFER",
				status: workflowComplete ? "SUCCESS" : "PENDING",
				authResult: workflowComplete ? "APPROVED" : "PENDING",
				riskLevel: "LOW",
				riskScore: 25,
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
			},
		});

		await createRichAuthLog(req, user, {
			eventType: workflowComplete
				? "Corporate Transfer Initiated (Complete)"
				: "Corporate Transfer Initiated",
			status: workflowComplete ? "SUCCESS" : "PENDING",
			authMethod: "CORPORATE_TRANSFER",
			data: {
				...corporateTxLogBase(created),
				workflowId: workflow.id,
				workflowComplete,
				tags: [
					{
						label: `${Number(amount)} MYR → ${merchantName || toAccount}`,
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

		return res.json({
			success: true,
			transactionId: created.id,
			workflowComplete,
			redirectToSuccess: workflowComplete,
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
				chain,
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
		const chain = Array.isArray(tx.approvalChain) ? tx.approvalChain : [];
		const idx = chain.findIndex(
			(n) => n.id === userId && n.status === "current",
		);
		if (idx < 0) {
			return res.status(403).json({ error: "Not your turn to reject" });
		}

		chain[idx].status = "rejected";
		chain[idx].time = new Date().toISOString();

		await prisma.transaction.update({
			where: { id: txId },
			data: {
				status: "FAILED",
				authResult: "REJECTED",
				corporateStatus: "REJECTED",
				approvalChain: chain,
				nextApproverId: null,
			},
		});

		const actor = await prisma.user.findUnique({ where: { id: userId } });
		if (actor) {
			await createRichAuthLog(req, actor, {
				eventType: "Corporate Transfer Rejected",
				status: "FAILED",
				authMethod: "CORPORATE_APPROVAL",
				data: {
					...corporateTxLogBase(tx),
					approvalAction: "reject",
					level: chain[idx]?.level,
					tags: [
						{
							label: `${Number(tx.amount)} ${tx.currency || "MYR"}`,
							class: "info",
						},
						{ label: "Rejected by approver", class: "error" },
					],
				},
			});
		}

		return res.json({ success: true, status: "REJECTED", chain });
	} catch (err) {
		console.error("[rejectCorporateTransaction]", err);
		return res.status(500).json({ error: err.message });
	}
};

exports.approveCorporateTransaction = async (req, res) => {
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
		const chain = Array.isArray(tx.approvalChain) ? tx.approvalChain : [];
		const idx = chain.findIndex(
			(n) => n.id === userId && n.status === "current",
		);
		if (idx < 0) {
			return res.status(403).json({ error: "Not your turn to approve" });
		}

		chain[idx].status = "done";
		chain[idx].time = new Date().toISOString();

		const level = chain[idx].level;
		const levelNodes = chain.filter((n) => n.level === level);
		const mode = normalizeMode(chain[idx].levelMode);
		const nOfM = chain[idx].nOfM || null;

		if (isLevelComplete(levelNodes, mode, nOfM)) {
			promoteNextPendingLevel(chain);
		}

		const hasCurrent = chain.some((n) => n.status === "current");
		const hasPending = chain.some((n) => n.status === "pending");
		const finalApproved = !hasCurrent && !hasPending;

		const updated = await prisma.transaction.update({
			where: { id: txId },
			data: {
				status: finalApproved ? "SUCCESS" : "PENDING",
				authResult: finalApproved ? "APPROVED" : "PENDING",
				corporateStatus: finalApproved ? "APPROVED" : "PENDING_APPROVAL",
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
			},
		});

		const actor = await prisma.user.findUnique({ where: { id: userId } });
		if (actor) {
			await createRichAuthLog(req, actor, {
				eventType: finalApproved
					? "Corporate Transfer Fully Approved"
					: "Corporate Approval Step Completed",
				status: finalApproved ? "SUCCESS" : "APPROVED",
				authMethod: "CORPORATE_APPROVAL",
				data: {
					...corporateTxLogBase(updated),
					approvalAction: "approve",
					level: chain[idx]?.level,
					levelMode: chain[idx]?.levelMode,
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
								: `Level ${chain[idx]?.level ?? "?"} approved — pending next`,
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
