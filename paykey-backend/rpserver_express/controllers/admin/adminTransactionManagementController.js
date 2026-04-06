const prisma = require("../../config/db");

function mapDisplayStatus(t) {
	if (t.isCorporate) {
		const cs = (t.corporateStatus || "").toUpperCase();
		if (cs === "PENDING_APPROVAL") return "pending";
		if (cs === "APPROVED") return "approved";
		if (cs === "REJECTED") return "rejected";
	}
	const s = (t.status || "").toUpperCase();
	const ar = (t.authResult || "").toUpperCase();
	if (s === "PENDING" || ar === "PENDING") return "pending";
	if (s === "SUCCESS" || ar === "SUCCESS" || ar === "APPROVED")
		return "completed";
	if (s === "FAILED" || ar === "REJECTED" || ar === "FAILED") return "rejected";
	if (ar === "CHALLENGED" || s === "CHALLENGED") return "processing";
	return "processing";
}

function riskBucket(level) {
	const l = (level || "LOW").toLowerCase();
	if (l === "critical") return "critical";
	if (l === "high") return "high";
	if (l === "medium") return "medium";
	return "low";
}

function parseChain(approvalChain) {
	if (!approvalChain) return [];
	if (Array.isArray(approvalChain)) return approvalChain;
	return [];
}

exports.getTransactionMetrics = async (_req, res) => {
	try {
		const since = new Date(Date.now() - 24 * 60 * 60 * 1000);
		const rows = await prisma.transaction.findMany({
			where: { timestamp: { gte: since } },
			select: {
				id: true,
				amount: true,
				status: true,
				authResult: true,
				isCorporate: true,
				corporateStatus: true,
				riskLevel: true,
				riskScore: true,
			},
		});

		let pending = 0;
		let approvedToday = 0;
		let rejectedToday = 0;
		let flagged = 0;
		let volume = 0;

		for (const t of rows) {
			const amt = Number(t.amount || 0);
			volume += amt;
			const ds = mapDisplayStatus(t);
			if (ds === "pending" || ds === "processing") pending += 1;
			if (ds === "completed" || ds === "approved") approvedToday += 1;
			if (ds === "rejected") rejectedToday += 1;
			const rs = t.riskScore ?? 0;
			const rl = (t.riskLevel || "").toUpperCase();
			if (rs >= 70 || rl === "HIGH" || rl === "CRITICAL") flagged += 1;
		}

		res.json({
			pendingApproval: pending,
			approvedToday: approvedToday,
			rejectedToday: rejectedToday,
			highRiskFlagged: flagged,
			totalVolume24h: volume,
			currency: "MYR",
		});
	} catch (err) {
		console.error("[getTransactionMetrics]", err);
		res.status(500).json({ error: err.message });
	}
};

function buildWhereClause(query) {
	const { search = "", segment = "", dateRange = "" } = query;

	const parts = [];

	if (segment === "individual") parts.push({ isCorporate: false });
	if (segment === "corporate") parts.push({ isCorporate: true });

	const now = new Date();
	if (dateRange === "today") {
		const start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
		parts.push({ timestamp: { gte: start } });
	} else if (dateRange === "yesterday") {
		const y = new Date(now);
		y.setDate(y.getDate() - 1);
		const start = new Date(y.getFullYear(), y.getMonth(), y.getDate());
		const end = new Date(y.getFullYear(), y.getMonth(), y.getDate() + 1);
		parts.push({ timestamp: { gte: start, lt: end } });
	} else if (dateRange === "week") {
		const start = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
		parts.push({ timestamp: { gte: start } });
	} else if (dateRange === "month") {
		const start = new Date(now.getFullYear(), now.getMonth(), 1);
		parts.push({ timestamp: { gte: start } });
	}

	if (search && String(search).trim()) {
		const q = String(search).trim();
		parts.push({
			OR: [
				{ id: { contains: q } },
				{ transactionNo: { contains: q } },
				{ merchantName: { contains: q } },
				{ toAccount: { contains: q } },
				{ user: { fullName: { contains: q } } },
				{ user: { email: { contains: q } } },
			],
		});
	}

	if (parts.length === 0) return {};
	if (parts.length === 1) return parts[0];
	return { AND: parts };
}

exports.listTransactions = async (req, res) => {
	try {
		const { status = "", risk = "", page = "1", pageSize = "20" } = req.query;

		const take = Math.min(Number.parseInt(String(pageSize), 10) || 20, 100);
		const skip =
			(Math.max(Number.parseInt(String(page), 10) || 1, 1) - 1) * take;

		const where = buildWhereClause(req.query);

		const raw = await prisma.transaction.findMany({
			where,
			orderBy: { timestamp: "desc" },
			take: 2000,
			include: {
				user: {
					select: { id: true, fullName: true, email: true },
				},
			},
		});

		const companyIds = [
			...new Set(raw.map((t) => t.companyId).filter(Boolean)),
		];
		const companies =
			companyIds.length > 0
				? await prisma.company.findMany({
						where: { id: { in: companyIds } },
						select: { id: true, name: true, registrationNo: true },
					})
				: [];
		const companyById = Object.fromEntries(companies.map((c) => [c.id, c]));

		const mapped = [];
		for (const t of raw) {
			const displayStatus = mapDisplayStatus(t);
			const rb = riskBucket(t.riskLevel);
			if (status && displayStatus !== String(status).toLowerCase()) continue;
			if (risk && rb !== String(risk).toLowerCase()) continue;

			const chain = parseChain(t.approvalChain);
			const comp = t.companyId ? companyById[t.companyId] : null;

			const fromName = t.isCorporate
				? comp?.name || t.user?.fullName || "Corporate"
				: t.user?.fullName || "—";
			const fromDetail = t.isCorporate
				? comp?.registrationNo || "—"
				: t.user?.email || "—";
			const fromBank = t.payerBank || "—";

			const toBank = t.beneficiaryBank;

			mapped.push({
				id: t.id,
				transactionNo: t.transactionNo,
				timestamp: t.timestamp,
				segment: t.isCorporate ? "corporate" : "individual",
				fromAccount: {
					name: fromName,
					detail: fromDetail,
					bank: fromBank,
				},
				toAccount: {
					name: t.merchantName || "Beneficiary",
					number: t.toAccount,
					bank: toBank,
				},
				amount: Number(t.amount),
				currency: t.currency || "MYR",
				riskLevel: (t.riskLevel || "LOW").toLowerCase(),
				riskScore: t.riskScore ?? 0,
				status: displayStatus,
				approvers: chain.map((n) => ({
					id: n.id,
					name: n.name,
					status: n.status,
				})),
				approverCount: chain.length || (t.isCorporate ? 0 : 1),
			});
		}

		const total = mapped.length;
		const items = mapped.slice(skip, skip + take);

		res.json({
			items,
			total,
			page: Number.parseInt(String(page), 10) || 1,
			pageSize: take,
		});
	} catch (err) {
		console.error("[listTransactions]", err);
		res.status(500).json({ error: err.message });
	}
};

exports.getTransactionDetail = async (req, res) => {
	try {
		const { id } = req.params;
		const t = await prisma.transaction.findUnique({
			where: { id },
			include: {
				user: {
					select: { id: true, fullName: true, email: true, mobile: true },
				},
			},
		});
		if (!t) return res.status(404).json({ error: "Transaction not found" });

		let company = null;
		if (t.companyId) {
			company = await prisma.company.findUnique({
				where: { id: t.companyId },
				select: { id: true, name: true, registrationNo: true },
			});
		}

		const chain = parseChain(t.approvalChain);
		res.json({
			id: t.id,
			transactionNo: t.transactionNo,
			timestamp: t.timestamp,
			segment: t.isCorporate ? "corporate" : "individual",
			amount: Number(t.amount),
			currency: t.currency || "MYR",
			status: mapDisplayStatus(t),
			riskLevel: (t.riskLevel || "LOW").toLowerCase(),
			riskScore: t.riskScore ?? 0,
			riskReason: t.riskReason,
			description: t.description,
			type: t.type,
			toAccount: t.toAccount,
			merchantName: t.merchantName,
			payerBank: t.payerBank || null,
			beneficiaryBank: t.beneficiaryBank || null,
			authMethod: t.authMethod,
			authResult: t.authResult,
			isCorporate: t.isCorporate,
			workflowId: t.workflowId,
			corporateStatus: t.corporateStatus,
			currentLevel: t.currentLevel,
			nextApproverId: t.nextApproverId,
			user: t.user,
			company,
			approvers: chain,
		});
	} catch (err) {
		console.error("[getTransactionDetail]", err);
		res.status(500).json({ error: err.message });
	}
};
