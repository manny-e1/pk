const prisma = require("../../config/db");

const MODES = ["SINGLE", "MULTIPLE_ALL", "MULTIPLE_ANY", "MULTIPLE_N_OF_M"];

async function assertUsersBelongToCompany(companyId, userIds) {
	if (!userIds.length) return;
	const users = await prisma.user.findMany({
		where: { id: { in: userIds } },
		select: { id: true, companyId: true },
	});
	const bad = users.filter((u) => u.companyId !== companyId);
	if (bad.length) {
		const err = new Error(
			"All assignees must be users linked to this company (companyId)",
		);
		err.statusCode = 400;
		throw err;
	}
	const found = new Set(users.map((u) => u.id));
	for (const id of userIds) {
		if (!found.has(id)) {
			const e = new Error(`User not found: ${id}`);
			e.statusCode = 400;
			throw e;
		}
	}
}

exports.listWorkflows = async (req, res) => {
	try {
		// const { companyId } = req.params;
		// const company = await prisma.company.findUnique({ where: { id: companyId } });
		// if (!company) return res.status(404).json({ error: 'Company not found' });

		const workflows = await prisma.approvalWorkflow.findMany({
			// where: { companyId },
			orderBy: { updatedAt: "desc" },
			include: {
				levels: {
					orderBy: { levelOrder: "asc" },
					include: {
						assignees: { select: { userId: true } },
					},
				},
			},
		});

		res.json(
			workflows.map((w) => ({
				id: w.id,
				companyId: w.companyId,
				name: w.name,
				createdAt: w.createdAt,
				updatedAt: w.updatedAt,
				levels: w.levels.map((lv) => ({
					id: lv.id,
					levelOrder: lv.levelOrder,
					mode: lv.mode,
					nOfM: lv.nOfM,
					userIds: lv.assignees.map((a) => a.userId),
				})),
			})),
		);
	} catch (err) {
		console.error("[listWorkflows]", err);
		res.status(500).json({ error: err.message });
	}
};

exports.getWorkflow = async (req, res) => {
	try {
		const { workflowId } = req.params;
		const w = await prisma.approvalWorkflow.findUnique({
			where: { id: workflowId },
			include: {
				levels: {
					orderBy: { levelOrder: "asc" },
					include: {
						assignees: { select: { userId: true } },
					},
				},
			},
		});
		if (!w) return res.status(404).json({ error: "Workflow not found" });
		const c = await prisma.company.findUnique({
			where: { id: w.companyId },
			include: {
				users: {
					select: { id: true, fullName: true, email: true, mobile: true },
				},
			},
		});
		res.json({
			id: w.id,
			companyId: w.companyId,
			companyUsers: c.users,
			name: w.name,
			createdAt: w.createdAt,
			updatedAt: w.updatedAt,
			levels: w.levels.map((lv) => ({
				id: lv.id,
				levelOrder: lv.levelOrder,
				mode: lv.mode,
				nOfM: lv.nOfM,
				userIds: lv.assignees.map((a) => a.userId),
			})),
		});
	} catch (err) {
		console.error("[getWorkflow]", err);
		res.status(500).json({ error: err.message });
	}
};

exports.createWorkflow = async (req, res) => {
	try {
		const { companyId } = req.params;
		const { name, levels } = req.body;
		if (!name || !String(name).trim()) {
			return res.status(400).json({ error: "name is required" });
		}

		const company = await prisma.company.findUnique({
			where: { id: companyId },
		});
		if (!company) return res.status(404).json({ error: "Company not found" });

		if (!Array.isArray(levels) || levels.length === 0) {
			return res.status(400).json({ error: "At least one level is required" });
		}

		const allUserIds = [];
		levels.forEach((lv) => {
			if (!MODES.includes(lv.mode)) {
				throw Object.assign(new Error(`Invalid mode: ${lv.mode}`), {
					statusCode: 400,
				});
			}
			const uids = lv.userIds || [];
			if (!uids.length) {
				throw Object.assign(
					new Error("Each level needs at least one assignee"),
					{ statusCode: 400 },
				);
			}
			if (lv.mode === "MULTIPLE_N_OF_M") {
				const n = lv.nOfM != null ? parseInt(lv.nOfM, 10) : NaN;
				if (Number.isNaN(n) || n < 1 || n > uids.length) {
					throw Object.assign(
						new Error("nOfM must be between 1 and number of assignees"),
						{ statusCode: 400 },
					);
				}
			}
			allUserIds.push(...uids);
		});

		await assertUsersBelongToCompany(companyId, [...new Set(allUserIds)]);

		const workflow = await prisma.$transaction(async (tx) => {
			const w = await tx.approvalWorkflow.create({
				data: {
					companyId,
					name: name.trim(),
				},
			});

			for (let i = 0; i < levels.length; i++) {
				const lv = levels[i];
				const level = await tx.workflowLevel.create({
					data: {
						workflowId: w.id,
						levelOrder: lv.levelOrder != null ? lv.levelOrder : i,
						mode: lv.mode,
						nOfM:
							lv.mode === "MULTIPLE_N_OF_M" && lv.nOfM != null
								? parseInt(lv.nOfM, 10)
								: null,
					},
				});
				const uids = lv.userIds || [];
				await tx.workflowLevelAssignee.createMany({
					data: uids.map((userId) => ({
						levelId: level.id,
						userId,
						authMethod: null,
					})),
				});
			}

			return tx.approvalWorkflow.findUnique({
				where: { id: w.id },
				include: {
					levels: {
						orderBy: { levelOrder: "asc" },
						include: { assignees: { select: { userId: true } } },
					},
				},
			});
		});

		res.status(201).json({
			id: workflow.id,
			companyId: workflow.companyId,
			name: workflow.name,
			levels: workflow.levels.map((lv) => ({
				id: lv.id,
				levelOrder: lv.levelOrder,
				mode: lv.mode,
				nOfM: lv.nOfM,
				userIds: lv.assignees.map((a) => a.userId),
			})),
		});
	} catch (err) {
		const code = err.statusCode || 500;
		console.error("[createWorkflow]", err);
		res.status(code).json({ error: err.message });
	}
};

exports.updateWorkflow = async (req, res) => {
	try {
		const { workflowId } = req.params;
		const { name, levels } = req.body;

		const existing = await prisma.approvalWorkflow.findUnique({
			where: { id: workflowId },
		});
		if (!existing) return res.status(404).json({ error: "Workflow not found" });

		const companyId = existing.companyId;

		if (name != null) {
			await prisma.approvalWorkflow.update({
				where: { id: workflowId },
				data: { name: String(name).trim() },
			});
		}

		if (levels !== undefined) {
			if (!Array.isArray(levels) || levels.length === 0) {
				return res
					.status(400)
					.json({ error: "At least one level is required" });
			}

			const allUserIds = [];
			levels.forEach((lv) => {
				if (!MODES.includes(lv.mode)) {
					throw Object.assign(new Error(`Invalid mode: ${lv.mode}`), {
						statusCode: 400,
					});
				}
				const uids = lv.userIds || [];
				if (!uids.length) {
					throw Object.assign(
						new Error("Each level needs at least one assignee"),
						{ statusCode: 400 },
					);
				}
				if (lv.mode === "MULTIPLE_N_OF_M") {
					const n = lv.nOfM != null ? parseInt(lv.nOfM, 10) : NaN;
					if (Number.isNaN(n) || n < 1 || n > uids.length) {
						throw Object.assign(
							new Error("nOfM must be between 1 and number of assignees"),
							{ statusCode: 400 },
						);
					}
				}
				allUserIds.push(...uids);
			});

			await assertUsersBelongToCompany(companyId, [...new Set(allUserIds)]);

			await prisma.$transaction(async (tx) => {
				await tx.workflowLevel.deleteMany({ where: { workflowId } });

				for (let i = 0; i < levels.length; i++) {
					const lv = levels[i];
					const level = await tx.workflowLevel.create({
						data: {
							workflowId,
							levelOrder: lv.levelOrder != null ? lv.levelOrder : i,
							mode: lv.mode,
							nOfM:
								lv.mode === "MULTIPLE_N_OF_M" && lv.nOfM != null
									? parseInt(lv.nOfM, 10)
									: null,
						},
					});
					const uids = lv.userIds || [];
					await tx.workflowLevelAssignee.createMany({
						data: uids.map((userId) => ({
							levelId: level.id,
							userId,
							authMethod: null,
						})),
					});
				}
			});
		}

		const workflow = await prisma.approvalWorkflow.findUnique({
			where: { id: workflowId },
			include: {
				levels: {
					orderBy: { levelOrder: "asc" },
					include: { assignees: { select: { userId: true } } },
				},
			},
		});

		res.json({
			id: workflow.id,
			companyId: workflow.companyId,
			name: workflow.name,
			levels: workflow.levels.map((lv) => ({
				id: lv.id,
				levelOrder: lv.levelOrder,
				mode: lv.mode,
				nOfM: lv.nOfM,
				userIds: lv.assignees.map((a) => a.userId),
			})),
		});
	} catch (err) {
		const code = err.statusCode || 500;
		console.error("[updateWorkflow]", err);
		res.status(code).json({ error: err.message });
	}
};

exports.deleteWorkflow = async (req, res) => {
	try {
		const { workflowId } = req.params;
		await prisma.approvalWorkflow.delete({ where: { id: workflowId } });
		res.json({ success: true });
	} catch (err) {
		if (err.code === "P2025")
			return res.status(404).json({ error: "Workflow not found" });
		console.error("[deleteWorkflow]", err);
		res.status(500).json({ error: err.message });
	}
};
