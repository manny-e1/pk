const prisma = require("../../config/db");
const { generateUserId } = require("../../utils/idGenerator");

const normalizeEmail = (e) => (e || "").trim().toLowerCase();
const normalizePhone = (p) => (p || "").replace(/\s+/g, " ").trim();

const ALLOWED_COMPANY_STATUS = new Set(["active", "pending", "suspended"]);

function normalizeCompanyStatus(s) {
	const v = String(s || "active")
		.trim()
		.toLowerCase();
	return ALLOWED_COMPANY_STATUS.has(v) ? v : "active";
}

async function syncCompanyPersonnel(companyId, personnel, companyName) {
	if (!Array.isArray(personnel)) return;

	const seenEmails = new Set();
	for (const row of personnel) {
		const email = normalizeEmail(row.email);
		if (!email) continue;
		if (seenEmails.has(email)) continue;
		seenEmails.add(email);

		const fullName =
			(row.fullName || row.name || "").trim() || email.split("@")[0];
		const mobile = normalizePhone(row.mobile || row.phone);

		const existing = await prisma.user.findUnique({ where: { email } });
		if (existing) {
			if (existing.companyId && existing.companyId !== companyId) {
				const err = new Error(
					`Email ${email} is already linked to another company`,
				);
				err.statusCode = 400;
				throw err;
			}
			await prisma.user.update({
				where: { id: existing.id },
				data: {
					companyId,
					fullName: fullName || existing.fullName,
					mobile: mobile || existing.mobile,
					companyName: companyName || existing.companyName,
				},
			});
		} else {
			await prisma.user.create({
				data: {
					id: generateUserId(),
					email,
					fullName,
					mobile: mobile || null,
					companyId,
					companyName: companyName || null,
					role: "USER",
				},
			});
		}
	}
}

exports.listCompanies = async (req, res) => {
	try {
		const {
			search = "",
			industry = "",
			status: statusFilter = "",
			page = "1",
			pageSize = "50",
		} = req.query;
		const p = Math.max(1, parseInt(page, 10) || 1);
		const ps = Math.min(100, Math.max(1, parseInt(pageSize, 10) || 50));
		const skip = (p - 1) * ps;

		const where = {};
		if (industry) where.industry = industry;
		if (
			statusFilter &&
			ALLOWED_COMPANY_STATUS.has(String(statusFilter).toLowerCase())
		) {
			where.status = String(statusFilter).toLowerCase();
		}
		if (search) {
			where.OR = [
				{ name: { contains: search } },
				{ registrationNo: { contains: search } },
			];
		}

		const [total, rows] = await Promise.all([
			prisma.company.count({ where }),
			prisma.company.findMany({
				where,
				orderBy: { createdAt: "desc" },
				skip,
				take: ps,
				include: {
					_count: { select: { users: true, workflows: true } },
				},
			}),
		]);

		res.json({
			items: rows.map((c) => ({
				id: c.id,
				name: c.name,
				registrationNo: c.registrationNo,
				address: c.address,
				industry: c.industry,
				createdAt: c.createdAt,
				personnelCount: c._count.users,
				workflowCount: c._count.workflows,
				status: c.status,
			})),
			total,
			page: p,
			pageSize: ps,
		});
	} catch (err) {
		console.error("[listCompanies]", err);
		res.status(500).json({ error: err.message });
	}
};

exports.getCompany = async (req, res) => {
	try {
		const { companyId } = req.params;
		const company = await prisma.company.findUnique({
			where: { id: companyId },
			include: {
				users: {
					orderBy: { createdAt: "asc" },
					select: {
						id: true,
						email: true,
						fullName: true,
						mobile: true,
						status: true,
						createdAt: true,
						passwordHash: true,
					},
				},
				workflows: {
					orderBy: { updatedAt: "desc" },
					select: { id: true, name: true, updatedAt: true },
				},
			},
		});
		if (!company) return res.status(404).json({ error: "Company not found" });

		res.json({
			id: company.id,
			name: company.name,
			registrationNo: company.registrationNo,
			address: company.address,
			industry: company.industry,
			createdAt: company.createdAt,
			status: company.status,
			personnel: company.users.map((u) => ({
				id: u.id,
				fullName: u.fullName,
				email: u.email,
				mobile: u.mobile,
				status: u.status,
				createdAt: u.createdAt,
				hasRegistered: !!u.passwordHash,
			})),
			workflows: company.workflows,
		});
	} catch (err) {
		console.error("[getCompany]", err);
		res.status(500).json({ error: err.message });
	}
};

exports.createCompany = async (req, res) => {
	try {
		const { name, registrationNo, address, industry, personnel, status } =
			req.body;
		if (!name || !registrationNo || !address || !industry) {
			return res.status(400).json({
				error: "name, registrationNo, address, and industry are required",
			});
		}

		const company = await prisma.company.create({
			data: {
				name: name.trim(),
				registrationNo: registrationNo.trim(),
				address: address.trim(),
				industry: industry.trim(),
				status: normalizeCompanyStatus(status),
			},
		});

		try {
			await syncCompanyPersonnel(company.id, personnel, company.name);
		} catch (e) {
			await prisma.company.delete({ where: { id: company.id } });
			const code = e.statusCode || 500;
			return res.status(code).json({ error: e.message });
		}

		const full = await prisma.company.findUnique({
			where: { id: company.id },
			include: { users: true, workflows: true },
		});

		res.status(201).json({
			id: full.id,
			name: full.name,
			registrationNo: full.registrationNo,
			address: full.address,
			industry: full.industry,
			status: full.status,
			createdAt: full.createdAt,
			personnelCount: full.users.length,
		});
	} catch (err) {
		console.error("[createCompany]", err);
		res.status(500).json({ error: err.message });
	}
};

exports.updateCompany = async (req, res) => {
	try {
		const { companyId } = req.params;
		const { name, registrationNo, address, industry, personnel, status } =
			req.body;

		const existing = await prisma.company.findUnique({
			where: { id: companyId },
		});
		if (!existing) return res.status(404).json({ error: "Company not found" });

		const company = await prisma.company.update({
			where: { id: companyId },
			data: {
				...(name != null && { name: name.trim() }),
				...(registrationNo != null && {
					registrationNo: registrationNo.trim(),
				}),
				...(address != null && { address: address.trim() }),
				...(industry != null && { industry: industry.trim() }),
				...(status != null && { status: normalizeCompanyStatus(status) }),
			},
		});

		if (personnel !== undefined) {
			const nextEmails = new Set(
				(personnel || []).map((r) => normalizeEmail(r.email)).filter(Boolean),
			);

			const currentUsers = await prisma.user.findMany({
				where: { companyId },
				select: { id: true, email: true },
			});

			for (const u of currentUsers) {
				const em = normalizeEmail(u.email);
				if (!nextEmails.has(em)) {
					await prisma.user.update({
						where: { id: u.id },
						data: { companyId: null },
					});
				}
			}

			try {
				await syncCompanyPersonnel(companyId, personnel, company.name);
			} catch (e) {
				const code = e.statusCode || 500;
				return res.status(code).json({ error: e.message });
			}
		}

		res.json({ success: true, id: company.id });
	} catch (err) {
		console.error("[updateCompany]", err);
		res.status(500).json({ error: err.message });
	}
};

exports.deleteCompany = async (req, res) => {
	try {
		const { companyId } = req.params;
		const company = await prisma.company.findUnique({
			where: { id: companyId },
		});
		if (!company) return res.status(404).json({ error: "Company not found" });

		await prisma.$transaction([
			prisma.user.updateMany({
				where: { companyId },
				data: { companyId: null },
			}),
			prisma.company.delete({ where: { id: companyId } }),
		]);

		res.json({ success: true });
	} catch (err) {
		console.error("[deleteCompany]", err);
		res.status(500).json({ error: err.message });
	}
};

exports.listCompanyUsers = async (req, res) => {
	try {
		const { companyId } = req.params;
		const users = await prisma.user.findMany({
			where: { companyId },
			orderBy: { fullName: "asc" },
			select: {
				id: true,
				email: true,
				fullName: true,
				mobile: true,
				status: true,
			},
		});
		res.json(users);
	} catch (err) {
		console.error("[listCompanyUsers]", err);
		res.status(500).json({ error: err.message });
	}
};
