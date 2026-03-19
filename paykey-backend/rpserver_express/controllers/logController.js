const prisma = require("../config/db");

exports.getAuthLogs = async (req, res) => {
	try {
		const { eventType } = req.query;
		const whereClause = {};

		if (eventType) {
			if (Array.isArray(eventType)) {
				whereClause.eventType = { in: eventType };
			} else {
				whereClause.eventType = eventType;
			}
		}

		const logs = await prisma.authLog.findMany({
			where: whereClause,
			take: 100,
			orderBy: { createdAt: "desc" },
			include: {
				user: {
					select: { fullName: true, role: true,  keys: { select: { deviceName: true, status: true, registeredTimestamp: true } } },
				},
				
			},
		});
		const formattedLogs = logs.map((log) => {
			let parsedTags = [];

			if (log.riskTags) {
				if (typeof log.riskTags === "object") {
					parsedTags = log.riskTags;
				} else if (typeof log.riskTags === "string") {
					try {
						parsedTags = JSON.parse(log.riskTags);
					} catch (e) {
						parsedTags = [log.riskTags];
					}
				}
			}

			return {
				...log,
				riskTags: parsedTags,
				userName: log.user?.fullName || "Unknown User",
			};
		});

		res.json(formattedLogs);
	} catch (err) {
		console.error("Get Auth Logs Error:", err);
		res.status(500).json({ error: err.message });
	}
};
