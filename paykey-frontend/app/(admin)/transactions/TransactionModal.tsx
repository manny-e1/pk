"use client";

import { useCallback, useEffect, useState } from "react";
import { adminService } from "@/services/adminService";

type ApiApprover = {
	id: string;
	name: string;
	role?: string;
	status: string;
	time?: string | null;
};

/** From transaction detail when risk engine persisted factors (4 keys = no description, 5 = with desc). */
type ApiRiskFactor = {
	rule: string;
	class: string;
	label: string;
	score: number;
	desc?: string;
	description?: string;
};

type ApiDetail = {
	id: string;
	transactionNo: string;
	timestamp: string;
	segment: string;
	amount: number;
	currency: string;
	status: string;
	riskLevel: string;
	riskScore: number;
	level: number;
	riskReason: string | null;
	riskFactors?: ApiRiskFactor[] | null;
	description: string | null;
	toAccount: string | null;
	fromAccount?: { name?: string | null; number?: string | null; bank?: string | null } | null;
	merchantName: string | null;
	payerBank?: string | null;
	beneficiaryBank?: string | null;
	authMethod?: string | null;
	authResult?: string | null;
	user: {
		fullName: string;
		email: string | null;
		mobile: string | null;
	} | null;
	company: { name: string; registrationNo: string } | null;
	approvers: ApiApprover[];
	approverRiskAssessments?: Array<{
		approverId?: string | null;
		approverName?: string | null;
		email?: string | null;
		timestamp?: string | null;
		riskScore?: number;
		riskLevel?: string;
		riskFactors?: ApiRiskFactor[];
		level?: number | null;
	}> | null;
};

type RiskAlertRow = {
	level: "low" | "medium" | "high" | "critical";
	title: string;
	description: string;
	score: number;
	rule?: string;
};

type UiApprover = {
	name: string;
	role: string;
	initials: string;
	status: "approved" | "pending" | "rejected"|"skipped";
	time: string | null;
};

type TimelineItem = {
	event: string;
	time: string;
	type: "success" | "warning" | "error" | "info";
};

const riskColors = {
	low: {
		badge: "bg-emerald-500/15 text-emerald-400",
		alert: "bg-emerald-500/10 border border-emerald-500/20",
		icon: "bg-emerald-500/20 text-emerald-400",
		score: "text-emerald-400",
	},
	medium: {
		badge: "bg-amber-500/15 text-amber-400",
		alert: "bg-amber-500/10 border border-amber-500/20",
		icon: "bg-amber-500/20 text-amber-400",
		score: "text-amber-400",
	},
	high: {
		badge: "bg-orange-500/15 text-orange-400",
		alert: "bg-orange-500/10 border border-orange-500/20",
		icon: "bg-orange-500/20 text-orange-400",
		score: "text-orange-400",
	},
	critical: {
		badge: "bg-red-500/15 text-red-400",
		alert: "bg-red-500/10 border border-red-500/20",
		icon: "bg-red-500/20 text-red-400",
		score: "text-red-400",
	},
};

const statusUi: Record<
	string,
	{ label: string; class: string }
> = {
	pending: {
		label: "Pending",
		class: "bg-amber-500/15 text-amber-400",
	},
	approved: {
		label: "Approved",
		class: "bg-emerald-500/15 text-emerald-400",
	},
	completed: {
		label: "Completed",
		class: "bg-emerald-500/15 text-emerald-400",
	},
	rejected: {
		label: "Rejected",
		class: "bg-red-500/15 text-red-400",
	},
	processing: {
		label: "Processing",
		class: "bg-blue-500/15 text-blue-400",
	},
};

const approverAvatarColors = {
	approved: "bg-emerald-500 text-white",
	pending:
		"bg-[var(--bg-elevated)] text-[var(--text-tertiary)]  border-2 border-[var(--border-default)] border-dotted",
	rejected: "bg-red-500 text-white",
	skipped: '"bg-[var(--bg-elevated)] text-[var(--text-tertiary)]  border-2 border-[var(--border-default)] border-dotted"'
};

const approverBadgeColors = {
	approved: "bg-emerald-500/15 text-emerald-400",
	pending: "bg-amber-500/15 text-amber-400",
	skipped: "bg-slate-500/15 text-slate-400",
	rejected: "bg-red-500/15 text-red-400",
};

const timelineDotColors = {
	success: "bg-emerald-500",
	warning: "bg-amber-500",
	error: "bg-red-500",
	info: "bg-blue-500",
};

function initialsFromName(name: string) {
	return name
		.split(" ")
		.map((w) => w[0])
		.join("")
		.slice(0, 2)
		.toUpperCase();
}

function mapApproverStatus(
	raw: string,
): "approved" | "pending" | "rejected" | "skipped" {
	const s = (raw || "").toLowerCase();
	if (["approved", "done", "complete", "completed", "success"].includes(s))
		return "approved";
	if (["rejected", "denied", "failed"].includes(s)) return "rejected";
	if (s === 'skipped') return "skipped";
	return "pending";
}

function mapFactorClassToLevel(
	factorClass: string,
): RiskAlertRow["level"] {
	const c = (factorClass || "").toLowerCase();
	if (c === "critical" || c === "error") return "critical";
	if (c === "high") return "high";
	if (c === "warning") return "medium";
	return "low";
}

function normalizeRiskLevel(level?: string | null): keyof typeof riskColors {
	const l = String(level || "low").toLowerCase();
	if (l === "critical" || l === "high" || l === "medium" || l === "low") return l;
	return "low";
}

function highestRiskLevel(
	a: keyof typeof riskColors,
	b: keyof typeof riskColors,
): keyof typeof riskColors {
	const order = { low: 0, medium: 1, high: 2, critical: 3 } as const;
	return order[b] > order[a] ? b : a;
}

function riskRowsFromFactors(factors: ApiRiskFactor[]): RiskAlertRow[] {
	return factors
		.filter((f) => f && typeof f === "object")
		.map((f) => {
			const desc =
				f.desc !== undefined && f.desc !== null && String(f.desc).trim() !== ""
					? String(f.desc)
					: f.description !== undefined &&
							f.description !== null &&
							String(f.description).trim() !== ""
						? String(f.description)
						: "";
			return {
				level: mapFactorClassToLevel(f.class),
				title: String(f.label || "Risk factor"),
				description: desc,
				score: Number(f.score) || 0,
				rule: f.rule ? String(f.rule) : undefined,
			};
		});
}

function parseRiskAlerts(
	riskLevel: string,
	riskScore: number,
	riskReason: string | null,
): RiskAlertRow[] {
	if (!riskReason?.trim()) {
		const lvl = (riskLevel || "low").toLowerCase() as RiskAlertRow["level"];
		const safe =
			lvl === "medium" || lvl === "high" || lvl === "critical"
				? lvl
				: "low";
		return [
			{
				level: safe,
				title: "Risk summary",
				description: `Overall ${riskLevel} risk (score ${riskScore}).`,
				score: riskScore,
			},
		];
	}
	try {
		const parsed = JSON.parse(riskReason);
		if (Array.isArray(parsed)) {
			return parsed
				.filter((x) => x && typeof x === "object")
				.map((x: Record<string, unknown>) => {
					const level = String(x.level || riskLevel || "low").toLowerCase();
					const L =
						level === "medium" ||
						level === "high" ||
						level === "critical" ||
						level === "low"
							? level
							: "low";
					return {
						level: L as RiskAlertRow["level"],
						title: String(x.title || x.rule || "Factor"),
						description: String(x.description || x.desc || ""),
						score: Number(x.score) || 0,
					};
				});
		}
	} catch {
		/* fall through */
	}
	const lvl = (riskLevel || "low").toLowerCase() as RiskAlertRow["level"];
	const safe =
		lvl === "medium" || lvl === "high" || lvl === "critical" ? lvl : "low";
	return [
		{
			level: safe,
			title: "Risk analysis",
			description: riskReason,
			score: riskScore,
		},
	];
}

function buildRiskAssessmentRows(detail: ApiDetail): RiskAlertRow[] {
	const factors = detail.riskFactors;
	if (Array.isArray(factors) && factors.length > 0) {
		return riskRowsFromFactors(factors);
	}
	return parseRiskAlerts(detail.riskLevel, detail.riskScore, detail.riskReason);
}

function buildFromTo(d: ApiDetail) {
	const isCorp = d.segment === "corporate";
	const fromName = isCorp
		? d.fromAccount?.name || '-'
		: d.user?.fullName || "—";
	const fromNumber = isCorp
		? d.fromAccount?.number ||
			d.company?.registrationNo ||
			"—"
		: d.fromAccount?.number ||
			d.user?.email ||
			d.user?.mobile ||
			"—";
	const fromBank = isCorp
		? d.payerBank || "—"
		: d.payerBank || "Retail banking";
	return {
		from: { name: fromName, number: fromNumber, bank: fromBank },
		to: {
			name: d.merchantName || "Beneficiary",
			number: d.toAccount || "—",
			bank: d.beneficiaryBank || (isCorp ? "—" : "DuitNow / IBG"),
		},
	};
}

function buildTimeline(d: ApiDetail, dateStr: string): TimelineItem[] {
	const items: TimelineItem[] = [
		{
			event: "Transaction Initiated",
			time: new Date(d.timestamp).toLocaleTimeString("en-MY", {
				hour12: false,
			}),
			type: "success",
		},
		{
			event: `Risk Assessment Completed (score: ${d.riskScore})`,
			time: new Date(d.timestamp).toLocaleTimeString("en-MY", {
				hour12: false,
			}),
			type: "success",
		},
	];
	for (const a of d.approvers || []) {
		const st = (a.status || "").toLowerCase();
		if (st === "done" || st === "approved") {
			items.push({
				event: `Approved by ${a.name}`,
				time: a.time
					? new Date(a.time).toLocaleTimeString("en-MY", { hour12: false })
					: "—",
				type: "success",
			});
		} else if (st === "rejected") {
			items.push({
				event: `Rejected by ${a.name}`,
				time: a.time
					? new Date(a.time).toLocaleTimeString("en-MY", { hour12: false })
					: "—",
				type: "error",
			});
		}
	}
	if (d.description) {
		items.push({
			event: d.description.slice(0, 120) + (d.description.length > 120 ? "…" : ""),
			time: dateStr,
			type: "info",
		});
	}
	return items;
}

function RiskIcon({ level }: { level: string }) {
	if (level === "low")
		return (
			<svg
				className="w-3.5 h-3.5"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				aria-hidden
			>
				<title>Low risk</title>
				<polyline points="20 6 9 17 4 12" />
			</svg>
		);
	if (level === "critical")
		return (
			<svg
				className="w-3.5 h-3.5"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				aria-hidden
			>
				<title>Critical risk</title>
				<path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
				<line x1="12" y1="9" x2="12" y2="13" />
				<line x1="12" y1="17" x2="12.01" y2="17" />
			</svg>
		);
	return (
		<svg
			className="w-3.5 h-3.5"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			aria-hidden
		>
			<title>Risk warning</title>
			<circle cx="12" cy="12" r="10" />
			<line x1="12" y1="8" x2="12" y2="12" />
			<line x1="12" y1="16" x2="12.01" y2="16" />
		</svg>
	);
}

export function TransactionDetailModal({
	isOpen,
	transactionId,
	onClose,
	onAuditLog,
}: {
	isOpen: boolean;
	transactionId: string | null;
	onClose: () => void;
	onAuditLog: (id: string) => void;
}) {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [detail, setDetail] = useState<ApiDetail | null>(null);

	const load = useCallback(async (id: string) => {
		setLoading(true);
		setError(null);
		setDetail(null);
		try {
			const d = await adminService.getTransactionDetail(id);
			setDetail(d as ApiDetail);
		} catch (e) {
			console.error(e);
			setError("Failed to load transaction details.");
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		if (!isOpen || !transactionId) {
			setDetail(null);
			setError(null);
			return;
		}
		load(transactionId);
	}, [isOpen, transactionId, load]);

	if (!isOpen || !transactionId) return null;

	const fmtMoney = (n: number, cur: string) =>
		`${cur} ${n.toLocaleString("en-MY", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

	const dateLabel = detail
		? new Date(detail.timestamp).toLocaleDateString("en-MY", {
				day: "2-digit",
				month: "short",
				year: "numeric",
			})
		: "";
	const timeLabel = detail
		? new Date(detail.timestamp).toLocaleTimeString("en-MY", {
				hour: "2-digit",
				minute: "2-digit",
				second: "2-digit",
				hour12: false,
			})
		: "";

	const riskLevelKey = (
		detail?.riskLevel || "low"
	).toLowerCase() as keyof typeof riskColors;
	const riskKey =
		riskLevelKey in riskColors ? riskLevelKey : ("low" as const);

	const statusKey = (detail?.status || "pending").toLowerCase();
	const statusInfo =
		statusUi[statusKey] ||
		({
			label: detail?.status || "—",
			class: "bg-[var(--bg-tertiary)] text-[var(--text-secondary)]",
		} as const);

	const uiApprovers: UiApprover[] = (detail?.approvers?.length
		? detail.approvers
		: [{ id: "self", name: "Payer", status: "done"}]
	).map((a) => ({
		name: a.name,
		role: a.role || "Approver",
		initials: initialsFromName(a.name),
		status: mapApproverStatus(a.status),
		time: a.time
			? new Date(a.time).toLocaleString("en-MY", { hour12: false })
			: null,
	}));

	const approvedCount = uiApprovers.filter((a) => a.status === "approved").length;
	const approvedWithSkippedCount = uiApprovers.filter((a) => a.status === "approved"|| a.status === 'skipped').length;
	const rejectedCount = uiApprovers.filter((a) => a.status === "rejected").length;
	const pendingCount = uiApprovers.filter((a) => a.status === "pending").length;
	const totalApprovers = Math.max(uiApprovers.length, 1);
	const requiredApprovals = totalApprovers;

	const approverRiskAssessments =
		detail?.approverRiskAssessments || [];
	const groupedApproverRiskAssessments = approverRiskAssessments.reduce(
		(acc, assessment) => {
			const key =
				String(assessment?.approverId || "").trim() ||
				String(assessment?.approverName || "unknown").trim();
			const existing = acc.get(key);
			const curScore = Number(assessment?.riskScore ?? 0);
			const curLevel = normalizeRiskLevel(assessment?.riskLevel);
			const curFactors = Array.isArray(assessment?.riskFactors)
				? assessment.riskFactors
				: [];
			if (!existing) {
				acc.set(key, {
					approverName: assessment?.approverName || "Unknown approver",
					timestamp: assessment?.timestamp || null,
					riskScore: curScore,
					riskLevel: curLevel,
					riskFactors: curFactors,
					level: assessment?.level || null,
					approverId: assessment.approverId || null,
				});
				return acc;
			}
			existing.riskScore = Math.max(Number(existing.riskScore || 0), curScore);
			existing.riskLevel = highestRiskLevel(
				normalizeRiskLevel(existing.riskLevel),
				curLevel,
			);
			if (assessment?.timestamp) {
				const prevTs = existing.timestamp ? new Date(existing.timestamp).getTime() : 0;
				const nextTs = new Date(assessment.timestamp).getTime();
				if (nextTs > prevTs) existing.timestamp = assessment.timestamp;
			}
			const dedupe = new Set(
				(existing.riskFactors || []).map(
					(f) => `${f.rule || ""}|${f.label || ""}|${f.desc || f.description || ""}|${f.score || 0}`,
				),
			);
			for (const f of curFactors) {
				const sig = `${f.rule || ""}|${f.label || ""}|${f.desc || f.description || ""}|${f.score || 0}`;
				if (!dedupe.has(sig)) {
					dedupe.add(sig);
					existing.riskFactors.push(f);
				}
			}
			return acc;
		},
		new Map<
			string,
			{
				approverId: string | null;
				approverName: string;
				timestamp: string | null;
				riskScore: number;
				riskLevel: keyof typeof riskColors;
				riskFactors: ApiRiskFactor[];
				level: number | null;
			}
		>(),
	);
	const { from, to } = detail ? buildFromTo(detail) : { from: null, to: null };
	const timeline = detail ? buildTimeline(detail, dateLabel) : [];

	return (
		<div className="fixed inset-0 z-[1002] flex items-center justify-center p-4">
			<button
				type="button"
				className="absolute inset-0 bg-black/70 transition-all duration-200"
				aria-label="Close dialog"
				onClick={onClose}
			/>
			<div
				className="relative z-10 bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl"
				role="dialog"
				aria-labelledby="tx-modal-title"
				aria-modal="true"
			>
				<div className="px-6 py-5 border-b border-[var(--border-secondary)] flex items-center justify-between shrink-0">
					<h3
						id="tx-modal-title"
						className="text-base font-semibold flex flex-wrap items-center gap-3 text-[var(--text-primary)]"
					>
						<span>Transaction details</span>
						{detail && (
							<span className="font-mono text-sm text-[var(--accent)]">
								{detail.transactionNo || detail.id}
							</span>
						)}
					</h3>
					<button
						type="button"
						onClick={onClose}
						className="p-1.5 rounded-md text-[var(--text-tertiary)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)] transition-all"
						aria-label="Close"
					>
						<svg
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							aria-hidden
						>
							<title>Close</title>
							<line x1="18" y1="6" x2="6" y2="18" />
							<line x1="6" y1="6" x2="18" y2="18" />
						</svg>
					</button>
				</div>

				<div className="px-6 py-6 overflow-y-auto flex-1 space-y-6 custom-scrollbar">
					{loading && (
						<p className="text-sm text-[var(--text-tertiary)]">Loading…</p>
					)}
					{error && (
						<div className="text-sm text-[var(--error)] border border-[var(--error)]/30 rounded-lg px-4 py-3 bg-[var(--error-bg)]">
							{error}
						</div>
					)}
					{!loading && !error && detail && from && to && (
						<>
							<div className="flex flex-col sm:flex-row items-stretch gap-4 p-5 bg-[var(--bg-tertiary)] rounded-xl">
								<div className="flex-1 p-4 bg-[var(--bg-secondary)] rounded-lg border border-[var(--border-secondary)]">
									<div className="text-[11px] font-semibold uppercase tracking-widest text-[var(--text-tertiary)] mb-2">
										From Account
									</div>
									<div className="text-base font-semibold text-[var(--text-primary)] mb-1 text-nowrap">
										{from.name}
									</div>
									<div className="font-mono text-[13px] text-[var(--text-secondary)]">
										{from.number}
									</div>
									<div className="text-xs text-[var(--text-tertiary)] mt-1">
										{from.bank}
									</div>
								</div>

								<div className="flex flex-row sm:flex-col items-center justify-center gap-2 shrink-0 py-2 sm:py-0">
									<div className="w-12 h-12 rounded-full bg-[var(--accent)] flex items-center justify-center">
										<svg
											className="w-6 h-6 text-white"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											aria-hidden
										>
											<title>Transfer</title>
											<line x1="5" y1="12" x2="19" y2="12" />
											<polyline points="12 5 19 12 12 19" />
										</svg>
									</div>
									<span className="font-mono text-lg font-bold text-[var(--text-primary)]">
										{fmtMoney(detail.amount, detail.currency)}
									</span>
								</div>

								<div className="flex-1 p-4 bg-[var(--bg-secondary)] rounded-lg border border-[var(--border-secondary)]">
									<div className="text-[11px] font-semibold uppercase tracking-widest text-[var(--text-tertiary)] mb-2">
										To Account
									</div>
									<div className="text-base font-semibold text-[var(--text-primary)] mb-1">
										{to.name}
									</div>
									<div className="font-mono text-[13px] text-[var(--text-secondary)]">
										{to.number}
									</div>
									<div className="text-xs text-[var(--text-tertiary)] mt-1">
										{to.bank}
									</div>
								</div>
							</div>

							<div>
								<div className="text-[11px] font-semibold uppercase tracking-widest text-[var(--text-tertiary)] mb-3 pb-2 border-b border-[var(--border-secondary)]">
									Transaction information
								</div>
								<div className="grid grid-cols-2 gap-4">
									<div className="flex flex-col gap-1">
										<span className="text-xs text-[var(--text-tertiary)]">
											Transaction ID
										</span>
										<span className="font-mono text-[13px] text-[var(--text-primary)] font-medium">
											{detail.id}
										</span>
									</div>
									<div className="flex flex-col gap-1">
										<span className="text-xs text-[var(--text-tertiary)]">
											Date &amp; time
										</span>
										<span className="text-[14px] text-[var(--text-primary)] font-medium">
											{dateLabel} {timeLabel}
										</span>
									</div>
									<div className="flex flex-col gap-1">
										<span className="text-xs text-[var(--text-tertiary)]">
											Status
										</span>
										<span
											className={`flex w-full items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${statusInfo.class}`}
										>
											<span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
											{statusInfo.label}
										</span>
									</div>
									<div className="flex flex-col gap-1">
										<span className="text-xs text-[var(--text-tertiary)]">
											Risk level
										</span>
										<span
											className={`flex w-full items-center gap-1 px-2 py-1 rounded text-[11px] font-semibold ${riskColors[riskKey].badge}`}
										>
											<RiskIcon level={riskKey} />
											{detail.riskLevel.charAt(0).toUpperCase() + detail.riskLevel.slice(1)} (score: {detail.riskScore}/100)
						
										</span>
									</div>
									<div className="flex flex-col gap-1 col-span-2">
										<span className="text-xs text-[var(--text-tertiary)]">
											Notes / Reference
										</span>
										<div className="bg-[var(--bg-tertiary)] rounded-lg px-4 py-3 text-[13px] text-[var(--text-secondary)] leading-relaxed border border-[var(--border-secondary)]">
											{detail.description}
										</div>
									</div>
								</div>
							</div>

							{groupedApproverRiskAssessments.size > 0 && (
								<div>
									<div className="text-[11px] font-semibold uppercase tracking-widest text-[var(--text-tertiary)] mb-3 pb-2 border-b border-[var(--border-secondary)]">
										Risk assessment by approver
									</div>
									<div className="flex flex-col gap-4">
										{Array.from(groupedApproverRiskAssessments.values()).map(
											(assessment, idx) => {
											const score = Number(assessment.riskScore ?? 0);
											const safeLvl = normalizeRiskLevel(assessment.riskLevel);
											const alerts = riskRowsFromFactors(
												Array.isArray(assessment.riskFactors)
													? assessment.riskFactors
													: [],
											);
											return (
												<div
													key={`${assessment.approverId || assessment.approverName || "risk"}-${idx}`}
													className="rounded-lg border border-[var(--border-secondary)] p-3 bg-[var(--bg-tertiary)]/40"
												>
													<div className="flex items-center justify-between mb-2">
														<div className="text-sm font-semibold text-[var(--text-primary)]">
															{assessment.approverName || "Unknown approver"} (Level {assessment.level} approver)
														</div>
														<div
															className={`text-xs font-semibold px-2 py-0.5 rounded ${riskColors[safeLvl].badge}`}
														>
															{String(safeLvl).toUpperCase()} ({score})
														</div>
													</div>
													<div className="flex flex-col gap-2">
														{alerts.length > 0 ? (
															alerts.map((alert, i) => {
																const rk =
																	alert.level in riskColors ? alert.level : "low";
																return (
																	<div
																		key={`${assessment.approverName || "a"}-${i}`}
																		className={`flex items-center gap-3 p-2 rounded-lg ${riskColors[rk].alert}`}
																	>
																		<div
																			className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 ${riskColors[rk].icon}`}
																		>
																			<RiskIcon level={rk} />
																		</div>
																		<div className="flex-1 min-w-0">
																			<div className="text-[13px] font-medium text-[var(--text-primary)]">
																				{alert.title}
																			</div>
																			{alert.description.trim() !== "" ? (
																				<div className="text-xs text-[var(--text-secondary)] mt-0.5">
																					{alert.description}
																				</div>
																			) : null}
																		</div>
																		<div
																			className={`text-xs font-semibold font-mono shrink-0 ${riskColors[rk].score}`}
																		>
																			+{alert.score}
																		</div>
																	</div>
																);
															})
														) : (
															<div className="text-xs text-[var(--text-tertiary)]">
																No detailed risk factors captured.
															</div>
														)}
													</div>
												</div>
											);
										})}
									</div>
								</div>
							)}

							<div>
								<div className="text-[11px] font-semibold uppercase tracking-widest text-[var(--text-tertiary)] mb-3 pb-2 border-b border-[var(--border-secondary)]">
									Approval status ({approvedCount}/{requiredApprovals} tracked)
								</div>
								<div className="mb-4">
									<div className="h-2 bg-[var(--bg-tertiary)] rounded-full overflow-hidden flex">
										<div
											className="h-full bg-emerald-500 transition-all"
											style={{
												width: `${(approvedWithSkippedCount / totalApprovers) * 100}%`,
											}}
										/>
										<div
											className="h-full bg-red-500 transition-all"
											style={{
												width: `${(rejectedCount / totalApprovers) * 100}%`,
											}}
										/>
										<div
											className="h-full bg-[var(--bg-secondary)] transition-all"
											style={{
												width: `${(pendingCount / totalApprovers) * 100}%`,
											}}
										/>
									</div>
									<div className="flex justify-between mt-2 text-xs text-[var(--text-tertiary)]">
										<span>{approvedCount} approved</span>
										<span>{pendingCount} pending</span>
										{rejectedCount > 0 && (
											<span>{rejectedCount} rejected</span>
										)}
									</div>
								</div>
								<div className="flex flex-col gap-3">
									{uiApprovers.map((approver, i) => (
										<div
											key={`${approver.name}-${i}`}
											className="flex items-center gap-3 px-4 py-3 bg-[var(--bg-tertiary)] rounded-lg border border-[var(--border-secondary)]"
										>
											<div
												className={`w-10 h-10 rounded-[10px] flex items-center justify-center text-sm font-semibold shrink-0 ${approverAvatarColors[approver.status]}`}
											>
												{approver.initials}
											</div>
											<div className="flex-1 min-w-0">
												<div className="text-[14px] font-medium text-[var(--text-primary)] truncate">
													{approver.name}
												</div>
												<div className="text-xs text-[var(--text-tertiary)]">
													{approver.role}
												</div>
											</div>
											<div className="text-right shrink-0">
												<span
													className={`text-xs font-medium px-2.5 py-1 rounded-full ${approverBadgeColors[approver.status]}`}
												>
													{approver.status.charAt(0).toUpperCase() + 
														approver.status.slice(1)}
												</span>
												{approver.time && (
													<div className="text-[11px] text-[var(--text-tertiary)] mt-1">
														{approver.time}
													</div>
												)}
											</div>
										</div>
									))}
								</div>
							</div>

							{timeline.length > 0 && (
								<div>
									<div className="text-[11px] font-semibold uppercase tracking-widest text-[var(--text-tertiary)] mb-3 pb-2 border-b border-[var(--border-secondary)]">
										Activity timeline
									</div>
									<div className="relative pl-6">
										<div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-[var(--border-secondary)]" />
										{timeline.map((item, i) => (
											<div key={`${item.event}-${i}`} className="relative pb-4 last:pb-0">
												<div
													className={`absolute -left-6 top-1 w-4 h-4 rounded-full flex items-center justify-center ${timelineDotColors[item.type]}`}
												>
													{item.type === "success" && (
														<svg
															className="w-2.5 h-2.5 text-white"
															viewBox="0 0 24 24"
															fill="none"
															stroke="currentColor"
															strokeWidth="3"
															aria-hidden
														>
															<title>Completed</title>
															<polyline points="20 6 9 17 4 12" />
														</svg>
													)}
													{item.type === "error" && (
														<svg
															className="w-2.5 h-2.5 text-white"
															viewBox="0 0 24 24"
															fill="none"
															stroke="currentColor"
															strokeWidth="3"
															aria-hidden
														>
															<title>Failed</title>
															<line x1="18" y1="6" x2="6" y2="18" />
															<line x1="6" y1="6" x2="18" y2="18" />
														</svg>
													)}
												</div>
												<div className="pl-2">
													<div className="text-[13px] font-medium text-[var(--text-primary)]">
														{item.event}
													</div>
													<div className="text-[11px] text-[var(--text-tertiary)] mt-0.5">
														{dateLabel} {item.time}
													</div>
												</div>
											</div>
										))}
									</div>
								</div>
							)}
						</>
					)}
				</div>

				<div className="px-6 py-4 border-t border-[var(--border-secondary)] flex flex-wrap justify-end gap-3 shrink-0">
					<button
						type="button"
						onClick={onClose}
						className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-secondary)] hover:bg-[var(--bg-hover)] transition-all"
					>
						Close
					</button>
					<button
						type="button"
						onClick={() => {
							onAuditLog(transactionId);
							onClose();
						}}
						className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-all"
					>
						Open audit log
					</button>
				</div>
			</div>
		</div>
	);
}
