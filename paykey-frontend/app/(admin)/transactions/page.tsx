"use client";

import { Fragment, useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
	AlertCircle,
	AlertTriangle,
	Check,
	Clock,
	CreditCard,
	Eye,
	History,
	MoreVertical,
	OctagonAlert,
	X,
} from "lucide-react";
import { adminService } from "@/services/adminService";
import { TransactionDetailModal } from "./TransactionModal";

type TxRow = {
	id: string;
	transactionNo: string;
	timestamp: string;
	segment: "individual" | "corporate";
	fromAccount: { name: string; detail: string; bank?: string };
	toAccount: { name: string; number: string; bank?: string };
	amount: number;
	currency: string;
	riskLevel: string;
	riskScore: number;
	status: string;
	approvers: { id: string; name: string; status: string; level: number }[];
	approverCount: number;
};

type Metrics = {
	pendingApproval: number;
	approvedToday: number;
	rejectedToday: number;
	highRiskFlagged: number;
	totalVolume24h: number;
	currency: string;
};

function statusLabel(s: string) {
	const m: Record<string, string> = {
		pending: "Pending",
		completed: "Completed",
		approved: "Approved",
		rejected: "Rejected",
		skipped: "Skipped",
	};
	return m[s] || s;
}

function statusClass(s: string) {
	if (s === "completed" || s === "approved")
		return "bg-[var(--success-muted)] text-[var(--success)]";
	if (s === "rejected") return "bg-[var(--error-muted)] text-[var(--error)]";
	if (s === "pending")
		return "bg-[var(--warning-muted)] text-[var(--warning)]";
	return "bg-[var(--bg-tertiary)] text-[var(--text-secondary)]";
}

function riskClass(level: string) {
	const l = level.toLowerCase();
	if (l === "critical" || l === "high")
		return "bg-[var(--error-muted)] text-[var(--error)]";
	if (l === "medium") return "bg-[var(--warning-muted)] text-[var(--warning)]";
	return "bg-[var(--success-muted)] text-[var(--success)]";
}

function normalizeApproverStatus(
	raw: string,
): "approved" | "pending" | "rejected" | "skipped" {
	const s = (raw || "").toLowerCase();
	if (["approved", "done", "complete", "completed", "success"].includes(s))
		return "approved";
	if (["rejected", "denied", "failed"].includes(s)) return "rejected";
	if (s === "skipped") return s
	return "pending";
}

function formatTxnDate(iso: string) {
	const d = new Date(iso);
	return d.toLocaleDateString("en-MY", {
		day: "2-digit",
		month: "short",
		year: "numeric",
	});
}

function formatTxnTime(iso: string) {
	return new Date(iso).toLocaleTimeString("en-MY", {
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		hour12: false,
	});
}

function RiskLevelBadge({
	level,
	score,
}: {
	level: string;
	score: number;
}) {
	const l = level.toLowerCase();
	const label = l.charAt(0).toUpperCase() + l.slice(1);
	let icon = <Check className="w-3 h-3 shrink-0" strokeWidth={2.5} />;
	let wrap = "bg-emerald-500/15 text-emerald-400 border border-emerald-500/25";
	if (l === "medium") {
		icon = <AlertCircle className="w-3 h-3 shrink-0" strokeWidth={2} />;
		wrap = "bg-amber-500/15 text-amber-400 border border-amber-500/25";
	}
	if (l === "high") {
		icon = <AlertTriangle className="w-3 h-3 shrink-0" strokeWidth={2} />;
		wrap = "bg-orange-500/15 text-orange-400 border border-orange-500/25";
	}
	if (l === "critical") {
		icon = <OctagonAlert className="w-3 h-3 shrink-0" strokeWidth={2} />;
		wrap = "bg-red-500/15 text-red-400 border border-red-500/25";
	}
	return (
		<span
			className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold ${wrap}`}
		>
			{icon}
			{label} ({score})
		</span>
	);
}

function TransactionStatusPill({ status }: { status: string }) {
	const s = status.toLowerCase();
	const label = statusLabel(s);
	let dot = "bg-amber-500";
	let wrap = "bg-amber-500/15 text-amber-400";
	if (s === "approved" || s === "completed") {
		dot = "bg-emerald-500";
		wrap = "bg-emerald-500/15 text-emerald-400";
	}
	if (s === "rejected") {
		dot = "bg-red-500";
		wrap = "bg-red-500/15 text-red-400";
	}
	if (s === "processing") {
		dot = "bg-blue-500";
		wrap = "bg-blue-500/15 text-blue-400";
	}
	return (
		<span
			className={`inline-flex items-center gap-1.5 pl-2.5 pr-3 py-1 rounded-full text-[12px] font-medium ${wrap}`}
		>
			<span className={`w-1.5 h-1.5 rounded-full shrink-0 ${dot}`} />
			{label}
		</span>
	);
}

function ApproverChip({
	name,
	status,
}: {
	name: string;
	status: string;
}) {
	const st = normalizeApproverStatus(status);
	const initials = name
		.split(" ")
		.map((w) => w[0])
		.join("")
		.slice(0, 2)
		.toUpperCase();
	let chip = "border border-[var(--border-default)] bg-transparent";
	let avatar = "bg-amber-500 text-white";
	let iconWrap = "text-amber-400";
	if (st === "approved") {
		chip = "border border-emerald-500/30 bg-emerald-500/10";
		avatar = "bg-emerald-500 text-white";
		iconWrap = "text-emerald-400";
	}
	if (st === "rejected") {
		chip = "border border-red-500/30 bg-red-500/10";
		avatar = "bg-red-500 text-white";
		iconWrap = "text-red-400";
	}
	if (st === "skipped") {
		chip = "border border-slate-500/30 bg-slate-500/10";
		avatar = "bg-slate-500 text-white";
		iconWrap = "text-slate-400";
	}
	const endIcon =
		st === "approved" ? (
			<Check className="w-4 h-4" strokeWidth={2.5} />
		) : st === "rejected" ? (
			<X className="w-4 h-4" strokeWidth={2.5} />
		) : (
			<Clock className="w-4 h-4" strokeWidth={2} />
		);
	return (
		<span
			className={`inline-flex items-center gap-2 pl-1.5 pr-3 py-1.5 rounded-full text-[13px] font-medium ${chip}`}
		>
			<span
				className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-semibold shrink-0 ${avatar}`}
			>
				{initials}
			</span>
			<span className="text-[var(--text-primary)]">{name}</span>
			<span className={`flex items-center justify-center shrink-0 ${iconWrap}`}>
				{endIcon}
			</span>
		</span>
	);
}

export default function TransactionsPage() {
	const router = useRouter();
	const [items, setItems] = useState<TxRow[]>([]);
	const [total, setTotal] = useState(0);
	const [metrics, setMetrics] = useState<Metrics | null>(null);
	const [loading, setLoading] = useState(true);
	const [search, setSearch] = useState("");
	const [statusFilter, setStatusFilter] = useState("");
	const [riskFilter, setRiskFilter] = useState("");
	const [segmentFilter, setSegmentFilter] = useState("");
	const [dateRange, setDateRange] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const pageSize = 20;

	const [detailTransactionId, setDetailTransactionId] = useState<string | null>(
		null,
	);
	const [toast, setToast] = useState<{
		type: "ok" | "err";
		msg: string;
	} | null>(null);
	const [actionMenuId, setActionMenuId] = useState<string | null>(null);

	useEffect(() => {
		if (!actionMenuId) return;
		const close = (e: MouseEvent) => {
			const t = e.target as HTMLElement;
			if (!t.closest(`[data-tx-menu="${actionMenuId}"]`)) setActionMenuId(null);
		};
		document.addEventListener("mousedown", close);
		return () => document.removeEventListener("mousedown", close);
	}, [actionMenuId]);

	const loadMetrics = useCallback(async () => {
		try {
			const m = await adminService.getTransactionMetrics();
			setMetrics(m);
		} catch (e) {
			console.error(e);
		}
	}, []);

	const load = useCallback(async () => {
		setLoading(true);
		try {
			const res = await adminService.getTransactions({
				search: search || undefined,
				status: statusFilter || undefined,
				risk: riskFilter || undefined,
				segment: segmentFilter || undefined,
				dateRange: dateRange || undefined,
				page: currentPage,
				pageSize,
			});
			setItems(res.items || []);
			setTotal(res.total ?? 0);
		} catch (e) {
			console.error(e);
			setToast({ type: "err", msg: "Failed to load transactions" });
		} finally {
			setLoading(false);
		}
	}, [search, statusFilter, riskFilter, segmentFilter, dateRange, currentPage]);

	useEffect(() => {
		loadMetrics();
	}, [loadMetrics]);

	useEffect(() => {
		load();
	}, [load]);

	useEffect(() => {
		if (!toast) return;
		const t = setTimeout(() => setToast(null), 3000);
		return () => clearTimeout(t);
	}, [toast]);

	const openDetail = (id: string) => {
		setDetailTransactionId(id);
	};

	const totalPages = Math.max(1, Math.ceil(total / pageSize) || 1);

	const fmtMoney = (n: number, cur: string) =>
		`${cur} ${n.toLocaleString("en-MY", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

	return (
		<div className="flex flex-col h-full overflow-hidden bg-[var(--bg-primary)]">
			<header className="px-6 py-3 border-b border-[var(--border-secondary)] bg-[var(--bg-secondary)] flex justify-between items-center shrink-0 h-[60px]">
				<div className="flex items-center gap-2 text-sm">
					<span className="text-[var(--text-tertiary)]">Overview</span>
					<span className="text-[var(--text-muted)]">/</span>
					<span className="font-medium text-[var(--text-primary)]">
						Transactions
					</span>
				</div>
				<div className="flex items-center gap-2">
					<button
						type="button"
						onClick={() =>
							setToast({
								type: "ok",
								msg: "Export is not wired in this build.",
							})
						}
						className="flex items-center gap-1.5 px-3.5 py-2 rounded-[var(--radius-md)] text-[13px] font-medium bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-primary)] hover:bg-[var(--bg-hover)] transition-all"
					>
						<svg
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							aria-hidden
						>
							<title>Export</title>
							<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
							<polyline points="7 10 12 15 17 10" />
							<line x1="12" y1="15" x2="12" y2="3" />
						</svg>
						Export
					</button>
					<button
						type="button"
						onClick={() => {
							loadMetrics();
							load();
						}}
						className="flex items-center gap-1.5 px-3.5 py-2 rounded-[var(--radius-md)] text-[13px] font-medium bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-all"
					>
						<svg
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							aria-hidden
						>
							<title>Refresh</title>
							<polyline points="23 4 23 10 17 10" />
							<path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
						</svg>
						Refresh
					</button>
				</div>
			</header>

			<div className="flex-1 overflow-auto p-6 flex flex-col gap-5">
				{toast && (
					<div
						className={`text-sm px-4 py-2 rounded-[var(--radius-md)] border shrink-0 ${
							toast.type === "ok"
								? "border-[var(--success)]/30 bg-[var(--success-bg)] text-[var(--success)]"
								: "border-[var(--error)]/30 bg-[var(--error-bg)] text-[var(--error)]"
						}`}
					>
						{toast.msg}
						<button
							type="button"
							className="ml-2 underline"
							onClick={() => setToast(null)}
						>
							Dismiss
						</button>
					</div>
				)}

				{metrics && (
					<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 shrink-0">
						<div className="rounded-[var(--radius-lg)] border border-[var(--border-secondary)] bg-[var(--bg-secondary)] p-4 border-t-[3px] border-t-amber-500">
							<div className="text-[11px] font-medium uppercase tracking-wide text-[var(--text-tertiary)]">
								Pending approval
							</div>
							<div className="text-2xl font-bold font-mono text-amber-500 mt-1">
								{metrics.pendingApproval}
							</div>
							<div className="text-xs text-[var(--text-tertiary)] mt-1">
								Last 24h
							</div>
						</div>
						<div className="rounded-[var(--radius-lg)] border border-[var(--border-secondary)] bg-[var(--bg-secondary)] p-4 border-t-[3px] border-t-emerald-500">
							<div className="text-[11px] font-medium uppercase tracking-wide text-[var(--text-tertiary)]">
								Approved / completed
							</div>
							<div className="text-2xl font-bold font-mono text-emerald-500 mt-1">
								{metrics.approvedToday}
							</div>
							<div className="text-xs text-[var(--text-tertiary)] mt-1">
								Last 24h
							</div>
						</div>
						<div className="rounded-[var(--radius-lg)] border border-[var(--border-secondary)] bg-[var(--bg-secondary)] p-4 border-t-[3px] border-t-red-500">
							<div className="text-[11px] font-medium uppercase tracking-wide text-[var(--text-tertiary)]">
								Rejected
							</div>
							<div className="text-2xl font-bold font-mono text-red-500 mt-1">
								{metrics.rejectedToday}
							</div>
							<div className="text-xs text-[var(--text-tertiary)] mt-1">
								Last 24h
							</div>
						</div>
						<div className="rounded-[var(--radius-lg)] border border-[var(--border-secondary)] bg-[var(--bg-secondary)] p-4 border-t-[3px] border-t-orange-500">
							<div className="text-[11px] font-medium uppercase tracking-wide text-[var(--text-tertiary)]">
								High risk flagged
							</div>
							<div className="text-2xl font-bold font-mono text-orange-500 mt-1">
								{metrics.highRiskFlagged}
							</div>
							<div className="text-xs text-[var(--text-tertiary)] mt-1">
								Last 24h
							</div>
						</div>
						<div className="rounded-[var(--radius-lg)] border border-[var(--border-secondary)] bg-[var(--bg-secondary)] p-4 border-t-[3px] border-t-blue-500 col-span-2 sm:col-span-1 lg:col-span-1">
							<div className="text-[11px] font-medium uppercase tracking-wide text-[var(--text-tertiary)]">
								Total volume (24h)
							</div>
							<div className="text-xl font-bold font-mono text-blue-400 mt-1 truncate">
								{fmtMoney(metrics.totalVolume24h, metrics.currency)}
							</div>
						</div>
					</div>
				)}

				<div className="rounded-[12px] border border-[var(--border-secondary)] bg-[var(--bg-secondary)] ">
					<div className="px-4 py-3 border-b border-[var(--border-secondary)] flex items-center gap-2">
						<CreditCard
							className="w-[18px] h-[18px] text-[var(--text-tertiary)] shrink-0"
							strokeWidth={2}
							aria-hidden
						/>
						<span className="text-sm font-semibold text-[var(--text-primary)]">
							Transaction records
						</span>
					</div>

					<div className="p-4 flex flex-wrap gap-3 border-b border-[var(--border-secondary)]">
						<div className="flex items-center gap-2 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] px-3 py-2 min-w-[220px] flex-1 max-w-xl">
							<svg
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								className="text-[var(--text-tertiary)] shrink-0"
								aria-hidden
							>
								<title>Search</title>
								<circle cx="11" cy="11" r="8" />
								<line x1="21" y1="21" x2="16.65" y2="16.65" />
							</svg>
							<input
								type="search"
								placeholder="Search by transaction ID, account, or name…"
								value={search}
								onChange={(e) => {
									setSearch(e.target.value);
									setCurrentPage(1);
								}}
								className="w-full bg-transparent border-none outline-none text-[13px] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)]"
							/>
						</div>
						<select
							value={segmentFilter}
							onChange={(e) => {
								setSegmentFilter(e.target.value);
								setCurrentPage(1);
							}}
							className="bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] px-3 py-2 text-[13px] text-[var(--text-primary)] outline-none min-w-[140px]"
						>
							<option value="">All segments</option>
							<option value="individual">Individual</option>
							<option value="corporate">Corporate</option>
						</select>
						<select
							value={statusFilter}
							onChange={(e) => {
								setStatusFilter(e.target.value);
								setCurrentPage(1);
							}}
							className="bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] px-3 py-2 text-[13px] text-[var(--text-primary)] outline-none min-w-[130px]"
						>
							<option value="">All status</option>
							<option value="pending">Pending</option>
							<option value="approved">Approved</option>
							<option value="rejected">Rejected</option>
						</select>
						<select
							value={riskFilter}
							onChange={(e) => {
								setRiskFilter(e.target.value);
								setCurrentPage(1);
							}}
							className="bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] px-3 py-2 text-[13px] text-[var(--text-primary)] outline-none min-w-[130px]"
						>
							<option value="">All risk levels</option>
							<option value="low">Low</option>
							<option value="medium">Medium</option>
							<option value="high">High</option>
						</select>
						<select
							value={dateRange}
							onChange={(e) => {
								setDateRange(e.target.value);
								setCurrentPage(1);
							}}
							className="bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] px-3 py-2 text-[13px] text-[var(--text-primary)] outline-none min-w-[120px]"
						>
							<option value="">All time</option>
							<option value="today">Today</option>
							<option value="yesterday">Yesterday</option>
							<option value="week">This week</option>
							<option value="month">This month</option>
						</select>
					</div>

					<div className="overflow-x-auto">
						<table className="w-full text-left text-sm">
							<thead>
								<tr className="border-b border-[var(--border-secondary)] bg-[var(--bg-tertiary)] text-[11px] uppercase tracking-wide text-[var(--text-tertiary)]">
									<th className="px-4 py-3 pl-5">Transaction ID</th>
									<th className="px-4 py-3">Date / time</th>
									<th className="px-4 py-3">From account</th>
									<th className="px-4 py-3">To account</th>
									<th className="px-4 py-3 text-right">Amount</th>
									<th className="px-4 py-3">Risk level</th>
									<th className="px-4 py-3">Status</th>
									<th className="px-4 py-3 w-12 text-right pr-5" />
								</tr>
							</thead>
							<tbody>
								{loading && (
									<tr>
										<td
											colSpan={8}
											className="px-4 py-12 text-center text-[var(--text-tertiary)]"
										>
											Loading…
										</td>
									</tr>
								)}
								{!loading && items.length === 0 && (
									<tr>
										<td
											colSpan={8}
											className="px-4 py-12 text-center text-[var(--text-tertiary)]"
										>
											No transactions match your filters.
										</td>
									</tr>
								)}
								{!loading &&
									items.map((row) => (
										<Fragment key={row.id}>
											<tr className="peer border-b-0 border-[var(--border-secondary)] hover:bg-[var(--bg-hover)]/35 [&>td]:border-b-0">
												<td className="px-4 py-3 pl-5 align-top">
													<button
														type="button"
														onClick={() => openDetail(row.id)}
														className="font-mono text-[13px] text-[var(--accent)] hover:underline text-left"
													>
														{row.transactionNo || row.id}
													</button>
													<div className="text-[10px] text-[var(--text-tertiary)] mt-0.5">
														{row.segment === "corporate"
															? "Corporate"
															: "Individual"}
													</div>
												</td>
												<td className="px-4 py-3 align-top">
													<div className="flex flex-col gap-0.5">
														<span className="text-[13px] font-medium text-[var(--text-primary)]">
															{formatTxnDate(row.timestamp)}
														</span>
														<span className="text-[11px] font-mono text-[var(--text-tertiary)]">
															{formatTxnTime(row.timestamp)}
														</span>
													</div>
												</td>
												<td className="px-4 py-3 align-top">
													<div className="flex flex-col gap-0.5">
														<span className="text-[13px] font-medium text-[var(--text-primary)]">
															{row.fromAccount.name}
														</span>
														<span className="font-mono text-[11px] text-[var(--text-tertiary)]">
															{row.fromAccount.detail}
														</span>
														<span className="text-[11px] text-[var(--text-tertiary)]">
															{row.fromAccount.bank || "—"}
														</span>
													</div>
												</td>
												<td className="px-4 py-3 align-top">
													<div className="flex flex-col gap-0.5">
														<span className="text-[13px] font-medium text-[var(--text-primary)]">
															{row.toAccount.name}
														</span>
														<span className="font-mono text-[11px] text-[var(--text-tertiary)]">
															{row.toAccount.number}
														</span>
														<span className="text-[11px] text-[var(--text-tertiary)]">
															{row.toAccount.bank || "—"}
														</span>
													</div>
												</td>
												<td className="px-4 py-3 align-top text-right">
													<div className="inline-flex flex-col items-end gap-0.5">
														<span className="font-mono text-sm font-semibold text-[var(--text-primary)] tabular-nums">
															{row.amount.toLocaleString("en-MY", {
																minimumFractionDigits: 2,
																maximumFractionDigits: 2,
															})}
															<span className="text-[11px] text-[var(--text-tertiary)] pl-0.5">
																{row.currency}
															</span>
														</span>
													</div>
												</td>
												<td className="px-4 py-3 align-top">
													<RiskLevelBadge
														level={row.riskLevel}
														score={row.riskScore}
													/>
												</td>
												<td className="px-4 py-3 align-top">
													<TransactionStatusPill status={row.status} />
												</td>
												<td className="px-4 py-3 align-top text-right pr-5">
													<div
														className="relative inline-flex justify-end"
														data-tx-menu={row.id}
													>
														<button
															type="button"
															aria-label="Row actions"
															onClick={(e) => {
																e.stopPropagation();
																setActionMenuId((id) =>
																	id === row.id ? null : row.id,
																);
															}}
															className="p-1.5 rounded-[var(--radius-md)] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)] transition-colors"
														>
															<MoreVertical
																className="w-[18px] h-[18px]"
																strokeWidth={2}
															/>
														</button>
														{actionMenuId === row.id && (
															<div
																className="absolute right-0 top-full z-30 mt-1 w-52 rounded-[var(--radius-md)] border border-[var(--border-secondary)] bg-[var(--bg-secondary)] py-1 shadow-xl"
																data-tx-menu={row.id}
															>
																<button
																	type="button"
																	className="flex w-full items-center gap-2 px-3 py-2 text-left text-[13px] text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)]"
																	onClick={() => {
																		setActionMenuId(null);
																		openDetail(row.id);
																	}}
																>
																	<Eye className="w-4 h-4 opacity-70" />
																	View details
																</button>
																<button
																	type="button"
																	className="flex w-full items-center gap-2 px-3 py-2 text-left text-[13px] text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)]"
																	onClick={() => {
																		setActionMenuId(null);
																		router.push(
																			`/auth-logs?transactionId=${encodeURIComponent(row.id)}`,
																		);
																	}}
																>
																	<History className="w-4 h-4 opacity-70" />
																	Audit log
																</button>
															</div>
														)}
													</div>
												</td>
											</tr>
											<tr className="border-b border-[var(--border-secondary)] bg-[var(--bg-tertiary)]/50 peer-hover:bg-[var(--bg-tertiary)]/75 hover:bg-[var(--bg-tertiary)]/75">
												<td colSpan={8} className="px-5 py-3 bg-[#2d2d2d]/75">
													<div className="flex flex-wrap gap-2 items-center">
														<span className="text-[10px] font-semibold uppercase tracking-wide text-[var(--text-tertiary)] mr-1">
															Approvers (
															{row.approverCount || row.approvers?.length || 1})
														</span>
														{(row.approvers?.length
															? row.approvers
															: [{ id: "self", name: "Payer", status: "done", level: 0 }]
														).map((a) => (
															<ApproverChip
																key={`${row.id}-${a.id}-${a.name}-${a.level}`}
																name={a.name}
																status={a.status}
															/>
														))}
													</div>
												</td>
											</tr>
										</Fragment>
									))}
							</tbody>
						</table>
					</div>

					<div className="px-4 py-3 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border-secondary)] text-[13px] text-[var(--text-tertiary)]">
						<span>
							Showing {(currentPage - 1) * pageSize + 1}–
							{Math.min(currentPage * pageSize, total)} of {total}
						</span>
						<div className="flex gap-2">
							<button
								type="button"
								disabled={currentPage <= 1}
								onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
								className="px-3.5 py-2 rounded-[var(--radius-md)] text-[13px] font-medium bg-[var(--bg-tertiary)] border border-[var(--border-primary)] text-[var(--text-primary)] hover:bg-[var(--bg-hover)] disabled:opacity-40 transition-all"
							>
								Prev
							</button>
							<button
								type="button"
								disabled={currentPage >= totalPages}
								onClick={() => setCurrentPage((p) => p + 1)}
								className="px-3.5 py-2 rounded-[var(--radius-md)] text-[13px] font-medium bg-[var(--bg-tertiary)] border border-[var(--border-primary)] text-[var(--text-primary)] hover:bg-[var(--bg-hover)] disabled:opacity-40 transition-all"
							>
								Next
							</button>
						</div>
					</div>
				</div>
			</div>

			<TransactionDetailModal
				isOpen={detailTransactionId !== null}
				transactionId={detailTransactionId}
				onClose={() => setDetailTransactionId(null)}
				onAuditLog={(id) =>
					router.push(`/auth-logs?transactionId=${encodeURIComponent(id)}`)
				}
			/>
		</div>
	);
}
