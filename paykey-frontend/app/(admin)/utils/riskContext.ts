export type RiskFactorLike = {
	label?: string;
	rule?: string;
};

export type RiskContextTag = {
	label: string;
	cls: string;
};

type BuildRiskContextInput = {
	amountLabel?: string;
	riskLevel?: string;
	factors?: RiskFactorLike[];
	stepUpRequired?: boolean;
	extraLabels?: string[];
};

function normalizeRiskLevel(level?: string): "low" | "medium" | "high" | "critical" {
	const l = String(level || "low").toLowerCase();
	if (l === "critical" || l === "high" || l === "medium" || l === "low") return l;
	return "low";
}

function hasAny(texts: string[], needles: string[]) {
	return needles.some((needle) => texts.some((t) => t.includes(needle)));
}

export function buildRiskContextTags(input: BuildRiskContextInput): RiskContextTag[] {
	const riskLevel = normalizeRiskLevel(input.riskLevel);
	const amountClass =
		riskLevel === "high" || riskLevel === "critical"
			? "bg-red-500/15 text-red-400"
			: riskLevel === "medium"
				? "bg-amber-500/15 text-amber-400"
				: "bg-emerald-500/15 text-emerald-400";

	const texts = [
		...(input.factors || []).flatMap((f) => [f.label || "", f.rule || ""]),
		...(input.extraLabels || []),
	]
		.map((v) => String(v).toLowerCase())
		.filter(Boolean);

	const tags: RiskContextTag[] = [
		{
			label: input.amountLabel || "",
			cls: amountClass,
		},
	];

	if (input.stepUpRequired || hasAny(texts, ["step up", "step-up", "challenge"])) {
		tags.push({ label: "step up", cls: "bg-blue-500/15 text-blue-400" });
	}
	if (hasAny(texts, ["beneficiary new", "new beneficiary"])) {
		tags.push({ label: "new", cls: "bg-amber-500/15 text-amber-400" });
	} else if (hasAny(texts, ["beneficiary known", "trusted beneficiary"])) {
		tags.push({
			label: "existing",
			cls: "bg-emerald-500/15 text-emerald-400",
		});
	}
	if (hasAny(texts, ["new device"])) {
		tags.push({ label: "new_device", cls: "bg-amber-500/15 text-amber-400" });
	} else if (hasAny(texts, ["known device", "existing device"])) {
		tags.push({ label: "existing_device", cls: "bg-emerald-500/15 text-emerald-400" });
	}
	if (hasAny(texts, ["geo anomaly", "geolocation anomaly"])) {
		tags.push({ label: "geo_anomaly", cls: "bg-red-500/15 text-red-400" });
	}
	if (hasAny(texts, ["vpn", "proxy"])) {
		tags.push({ label: "VPN/Proxy", cls: "bg-red-500/15 text-red-400" });
	}
	if (hasAny(texts, ["dormant"])) {
		tags.push({ label: "dormant_reactivated", cls: "bg-red-500/15 text-red-400" });
	}

	return tags;
}

