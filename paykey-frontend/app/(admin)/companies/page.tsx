"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { DataTable } from "@/components/ui/DataTable";
import { adminService } from "@/services/adminService";
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import { useQuery } from "@tanstack/react-query";
import { ToastCard } from "@/components/ToastCard";

const INDUSTRIES = [
	{ value: "", label: "All industries" },
	{ value: "fintech", label: "Fintech" },
	{ value: "banking", label: "Banking" },
	{ value: "ecommerce", label: "E-Commerce" },
	{ value: "technology", label: "Technology" },
	{ value: "retail", label: "Retail" },
	{ value: "healthcare", label: "Healthcare" },
	{ value: "manufacturing", label: "Manufacturing" },
	{ value: "other", label: "Other" },
];

const STATUSES = [
	{
		value: "active",
		label: "Active",
		color: "bg-[var(--success-muted)] text-[var(--success)]",
	},
	{
		value: "pending",
		label: "Pending",
		color: "bg-[var(--warning-bg)] text-[var(--warning)]",
	},
	{
		value: "suspended",
		label: "Suspended",
		color: "bg-[var(--error-bg)] text-[var(--error)]",
	},
];

/** Labels for add/edit form status dropdown (matches company management mock) */
const FORM_STATUS_OPTIONS = [
	{ value: "active", label: "Active" },
	{ value: "pending", label: "Pending" },
	{ value: "suspended", label: "Suspended" },
];

const formFieldClass =
	"w-full px-3 py-2.5 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-lg text-[13px] text-[var(--text-primary)] font-[inherit] transition-all outline-none placeholder:text-[var(--text-tertiary)] focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_var(--accent-muted)]";

const personnelInputClass =
	"w-full px-3 py-2 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-md text-[12px] text-[var(--text-primary)] font-[inherit] outline-none placeholder:text-[var(--text-tertiary)] focus:border-[var(--accent)]";

type CompanyRow = {
	id: string;
	name: string;
	registrationNo: string;
	address: string;
	industry: string;
	status: string;
	createdAt: string;
	personnelCount: number;
};

type PersonnelRow = {
	fullName: string;
	email: string;
	mobile: string;
};

function formatIndustry(v: string) {
	const m = INDUSTRIES.find((x) => x.value === v);
	return m?.label || v;
}

function formatStatus(v: string) {
	const m = STATUSES.find((x) => x.value === v);
	return m?.label || v;
}

export default function CompaniesPage() {
	const router = useRouter();
	const [search, setSearch] = useState("");
	const [industry, setIndustry] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 10;

	const [modal, setModal] = useState<"add" | "edit" | "view" | "delete" | null>(
		null,
	);
	/** Row snapshot when modal is view (table fields + load target) */
	const [viewRow, setViewRow] = useState<CompanyRow | null>(null);
	const [detail, setDetail] = useState<{
		personnel: {
			id: string;
			fullName: string;
			email: string;
			mobile: string | null;
			hasRegistered: boolean;
		}[];
	} | null>(null);
	const [selectedId, setSelectedId] = useState<string | null>(null);

	const [formName, setFormName] = useState("");
	const [formReg, setFormReg] = useState("");
	const [formAddress, setFormAddress] = useState("");
	const [formIndustry, setFormIndustry] = useState("fintech");
	const [formStatus, setFormStatus] = useState("active");
	const [personnel, setPersonnel] = useState<PersonnelRow[]>([]);

  const {data,isLoading, refetch} = useQuery({
    queryKey: ['companies', currentPage, itemsPerPage, search, industry],
    queryFn: async () => await adminService.getCompanies({
      search: search || undefined,
      industry: industry || undefined,
      page: currentPage,
      pageSize: itemsPerPage,
    }),
  })
  const items = data?.items || [];
  const total = data?.total || 0;
	// const load = useCallback(async () => {
	// 	setLoading(true);
	// 	try {
	// 		const res = 
	// 		setItems(res.items || []);
	// 		setTotal(res.total ?? 0);
	// 	} catch (e) {
	// 		console.error(e);
  //     toast('Failed to load companies', {
  //       position: "bottom-right",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: false,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //       transition: Bounce,
  //       });
	// 		toast({ type: "err", msg: "Failed to load companies" });
	// 	} finally {
	// 		setLoading(false);
	// 	}
	// }, [search, industry, currentPage]);

	// useEffect(() => {
	// 	load();
	// }, [load]);

	const totalPages = Math.max(1, Math.ceil(total / itemsPerPage) || 1);

	const closeCompanyModal = () => {
		setModal(null);
		setViewRow(null);
		setDetail(null);
	};

	const openAdd = () => {
		setViewRow(null);
		setDetail(null);
		setModal("add");
		setFormName("");
		setFormReg("");
		setFormAddress("");
		setFormIndustry("fintech");
		setFormStatus("active");
		setPersonnel([]);
	};

	const openEdit = async (row: CompanyRow) => {
		setSelectedId(row.id);
		try {
			const c = await adminService.getCompany(row.id);
			setFormName(c.name);
			setFormReg(c.registrationNo);
			setFormAddress(c.address);
			setFormIndustry(c.industry);
			setFormStatus(c.status || "active");
			setPersonnel(
				(c.personnel || []).map(
					(p: { fullName: string; email: string; mobile: string | null }) => ({
						fullName: p.fullName,
						email: p.email,
						mobile: p.mobile || "",
					}),
				),
			);
			setViewRow(null);
			setDetail(null);
			setModal("edit");
		} catch {
			toast("Failed to load company", {position: 'bottom-right'});
		}
	};

	const openView = async (row: CompanyRow) => {
		setSelectedId(row.id);
		setViewRow(row);
		setDetail(null);
		setModal("view");
		try {
			const c = await adminService.getCompany(row.id);
			setDetail({
				personnel: c.personnel || [],
			});
		} catch {
			toast("Failed to load details", {position: 'bottom-right'});
		}
	};

	const saveCompany = async () => {
		if (
			!formName.trim() ||
			!formReg.trim() ||
			!formAddress.trim() ||
			!formIndustry
		) {
			toast("Fill all required fields");
			return;
		}
		const payload = {
			name: formName.trim(),
			registrationNo: formReg.trim(),
			address: formAddress.trim(),
			industry: formIndustry,
			status: formStatus,
			personnel: personnel.filter((p) => p.email.trim()),
		};
		try {
			if (modal === "add") {
				await adminService.createCompany(payload);
				toast(ToastCard, {data:{title: "Company Added", content: `${formName} has been added successfully`}});
			} else if (modal === "edit" && selectedId) {
				await adminService.updateCompany(selectedId, payload);
				toast(ToastCard,{data:{title: "Company Updated", content: `${formName} has been updated successfully`}});
			}
			closeCompanyModal();
			refetch();
		} catch (e: unknown) {
			const msg =
				e && typeof e === "object" && "response" in e
					? (e as { response?: { data?: { error?: string } } }).response?.data
							?.error
					: null;
			toast( msg || "Save failed");
		}
	};

	const confirmDelete = async () => {
		if (!selectedId) return;
		try {
			await adminService.deleteCompany(selectedId);
			toast("Company deleted");
			setModal(null);
			setViewRow(null);
			refetch()
		} catch {
			toast( "Delete failed");
		}
	};

	const addPersonRow = () =>
		setPersonnel([...personnel, { fullName: "", email: "", mobile: "" }]);
	const updatePerson = (i: number, field: keyof PersonnelRow, v: string) => {
		const next = [...personnel];
		next[i] = { ...next[i], [field]: v };
		setPersonnel(next);
	};
	const removePerson = (i: number) =>
		setPersonnel(personnel.filter((_, j) => j !== i));

	return (
		<div className="flex flex-col h-full overflow-hidden bg-[var(--bg-primary)]">
			<header className="px-6 py-3 border-b border-[var(--border-secondary)] bg-[var(--bg-secondary)] flex justify-between items-center shrink-0 h-[60px]">
				<div className="flex items-center gap-2 text-sm">
					<span className="text-[var(--text-tertiary)]">Management</span>
					<span className="text-[var(--text-muted)]">/</span>
					<span className="font-medium text-[var(--text-primary)]">
						Companies
					</span>
				</div>
				<button
					type="button"
					onClick={openAdd}
					className="flex items-center gap-2 px-3.5 py-2 rounded-[var(--radius-md)] text-[13px] font-medium bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-all"
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
						<title>Add</title>
						<line x1="12" y1="5" x2="12" y2="19" />
						<line x1="5" y1="12" x2="19" y2="12" />
					</svg>
					Add company
				</button>
			</header>

			<div className="flex-1 overflow-auto p-6 flex flex-col gap-5">

				<div className="flex flex-wrap items-center gap-3">
					<div className="flex items-center gap-2 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] px-3 py-2 min-w-[280px] flex-1 max-w-md">
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
							type="text"
							placeholder="Search by name or registration no..."
							className="bg-transparent border-none outline-none text-[13px] text-[var(--text-primary)] placeholder-[var(--text-tertiary)] flex-1"
							value={search}
							onChange={(e) => {
								setSearch(e.target.value);
								setCurrentPage(1);
							}}
						/>
					</div>
					<select
						className="bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] px-3 py-2 text-[13px] text-[var(--text-primary)] outline-none min-w-[180px]"
						value={industry}
						onChange={(e) => {
							setIndustry(e.target.value);
							setCurrentPage(1);
						}}
					>
						{INDUSTRIES.map((o) => (
							<option key={o.value || "all"} value={o.value}>
								{o.label}
							</option>
						))}
					</select>
					<button
						type="button"
						onClick={() => refetch()}
						className="px-3.5 py-2 rounded-[var(--radius-md)] text-[13px] font-medium bg-[var(--bg-tertiary)] border border-[var(--border-primary)] text-[var(--text-primary)] hover:bg-[var(--bg-hover)]"
					>
						Refresh
					</button>
				</div>

				<DataTable
					columns={[
						{ header: "Company", className: "pl-5" },
						{ header: "Industry" },
						{ header: "Address" },
						{ header: "Personnel" },
						{ header: "Status" },
						{ header: "Created" },
						{ header: "", className: "text-right pr-5" },
					]}
					data={(items as CompanyRow[])?.map((c) => ({ ...c, id: c.id }))}
					currentPage={currentPage}
					totalPages={totalPages}
					onPageChange={setCurrentPage}
					totalItems={total}
					itemsPerPage={itemsPerPage}
					isLoading={isLoading}
					renderRow={(row) => (
						<tr
							key={row.id}
							className="border-b border-[var(--border-secondary)] hover:bg-[var(--bg-hover)]/50"
						>
							<td className="px-4 py-3 pl-5">
								<div className="flex items-center gap-3">
									<div className="w-9 h-9 rounded-[var(--radius-md)] bg-[var(--bg-tertiary)] flex items-center justify-center text-[12px] font-semibold text-[var(--text-secondary)]">
										{row.name
											.split(" ")
											.slice(0, 2)
											.map((w) => w[0])
											.join("")
											.toUpperCase()}
									</div>
									<div>
										<div className="text-[13px] font-medium text-[var(--text-primary)]">
											{row.name}
										</div>
										<div className="text-[11px] font-mono text-[var(--text-tertiary)]">
											{row.registrationNo}
										</div>
									</div>
								</div>
							</td>
							<td className="px-4 py-3">
								<span className="text-[12px] px-2.5 py-1 rounded-full bg-[var(--bg-tertiary)] text-[var(--text-secondary)]">
									{formatIndustry(row.industry)}
								</span>
							</td>
							<td className="px-4 py-3">
								<span className="text-[12px] text-[var(--text-secondary)] line-clamp-2 max-w-[220px]">
									{row.address}
								</span>
							</td>
							<td className="px-4 py-3 text-[13px] text-[var(--text-primary)]">
								{row.personnelCount}
							</td>
							<td className="px-4 py-3">
								<span
									className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${STATUSES.find((s) => s.value === row.status)?.color || "bg-[var(--bg-tertiary)] text-[var(--text-tertiary)]"}`}
								>
									{formatStatus(row.status)}
								</span>
							</td>
							<td className="px-4 py-3 text-[12px] text-[var(--text-tertiary)]">
								{new Date(row.createdAt).toLocaleDateString("en-MY", {
									year: "numeric",
									month: "short",
									day: "numeric",
								})}
							</td>
							<td className="px-4 py-3 pr-5 text-right">
								<div className="inline-flex items-center gap-1 justify-end">
									<button
										type="button"
										title="View"
										onClick={() => openView(row)}
										className="w-8 h-8 rounded-[var(--radius-sm)] bg-[var(--bg-tertiary)] border border-[var(--border-primary)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)]"
									>
										<svg
											width="14"
											height="14"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											aria-hidden
										>
											<title>View</title>
											<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
											<circle cx="12" cy="12" r="3" />
										</svg>
									</button>
									<Link
										type="button"
										title="Edit"
										href={`/companies/${row.id}/workflows`}
										className="w-8 h-8 rounded-[var(--radius-sm)] bg-[var(--bg-tertiary)] border border-[var(--border-primary)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] hover:bg-[var(--bg-hover)]"
									>
										<svg
											width="14"
											height="14"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											aria-hidden
										>
											<title>Edit</title>
											<path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
											<path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
										</svg>
									</Link>
									<button
										type="button"
										title="Delete"
										onClick={() => {
											setSelectedId(row.id);
											setModal("delete");
										}}
										className="w-8 h-8 rounded-[var(--radius-sm)] bg-[var(--bg-tertiary)] border border-[var(--border-primary)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--error)] hover:border-[var(--error)]"
									>
										<svg
											width="14"
											height="14"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											aria-hidden
										>
											<title>Delete</title>
											<polyline points="3 6 5 6 21 6" />
											<path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
										</svg>
									</button>
								</div>
							</td>
						</tr>
					)}
				/>
			</div>

			{/* Company modal: view / add / edit — same shell as companyModal + viewModal in mock */}
			{(modal === "add" ||
				modal === "edit" ||
				(modal === "view" && viewRow)) && (
				<div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
					<button
						type="button"
						className="absolute inset-0 bg-black/80 border-0 p-0 cursor-default"
						aria-label="Close dialog"
						onClick={closeCompanyModal}
					/>
					<div
						className="relative z-10 w-full max-w-[700px] max-h-[90vh] overflow-hidden flex flex-col rounded-2xl border border-[var(--border-primary)] bg-[var(--bg-secondary)] shadow-2xl"
						role="dialog"
						aria-modal="true"
						aria-labelledby="company-modal-title"
					>
						<div className="px-6 py-5 border-b border-[var(--border-primary)] flex items-center justify-between shrink-0">
							<h3
								id="company-modal-title"
								className="text-base font-semibold text-[var(--text-primary)]"
							>
								{modal === "view"
									? "Company Details"
									: modal === "add"
										? "Add New Company"
										: "Edit Company"}
							</h3>
							<button
								type="button"
								onClick={closeCompanyModal}
								className="w-8 h-8 bg-[var(--bg-tertiary)] border-none rounded-md text-[var(--text-secondary)] flex items-center justify-center hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] transition-colors"
								aria-label="Close"
							>
								<svg
									width="18"
									height="18"
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
						<div className="px-6 py-6 overflow-y-auto max-h-[calc(90vh-160px)] space-y-6">
							{modal === "view" && viewRow ? (
								<>
									<div className="mb-5">
										<div className="text-[11px] font-semibold uppercase tracking-wider text-[var(--text-tertiary)] mb-3">
											Company information
										</div>
										<div className="grid grid-cols-1 gap-3">
											<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
												<div className="flex flex-col gap-1">
													<span className="text-[11px] text-[var(--text-tertiary)]">
														Company name
													</span>
													<span className="text-[13px] font-medium text-[var(--text-primary)]">
														{viewRow.name}
													</span>
												</div>
												<div className="flex flex-col gap-1">
													<span className="text-[11px] text-[var(--text-tertiary)]">
														Registration no
													</span>
													<span className="text-[13px] font-medium text-[var(--text-primary)] font-mono">
														{viewRow.registrationNo}
													</span>
												</div>
											</div>
											<div className="flex flex-col gap-1">
												<span className="text-[11px] text-[var(--text-tertiary)]">
													Registered business address
												</span>
												<span className="text-[13px] font-medium text-[var(--text-primary)] leading-relaxed">
													{viewRow.address}
												</span>
											</div>
											<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
												<div className="flex flex-col gap-1">
													<span className="text-[11px] text-[var(--text-tertiary)]">
														Industry
													</span>
													<span className="text-[13px] font-medium text-[var(--text-primary)]">
														{formatIndustry(viewRow.industry)}
													</span>
												</div>
												<div className="flex flex-col gap-1">
													<span className="text-[11px] text-[var(--text-tertiary)]">
														Status
													</span>
													<span
														className={`inline-flex w-full text-[11px] font-semibold px-2.5 py-1 rounded-full ${
															viewRow.status === "active"
																? "bg-green-900/50 text-green-600"
																: viewRow.status === "suspended"
																	? "bg-red-900/50 text-red-600"
																	: viewRow.status === "pending"
																		? "bg-orange-900/50 text-orange-600"
																		: "bg-[var(--bg-tertiary)] text-[var(--text-tertiary)]"
														}`}
													>
														{formatStatus(viewRow.status)}
													</span>
												</div>
											</div>
										</div>
									</div>
									<div>
										<div className="text-[11px] font-semibold uppercase tracking-wider text-[var(--text-tertiary)] mb-3">
											Personnel ({detail?.personnel?.length ?? "…"})
										</div>
										{!detail ? (
											<div className="text-[var(--text-tertiary)] text-sm py-6 text-center">
												Loading…
											</div>
										) : detail.personnel.length === 0 ? (
											<div className="text-center py-8 text-[var(--text-tertiary)] text-[13px]">
												<p>No users linked yet.</p>
											</div>
										) : (
											<div className="flex flex-col gap-2.5">
												{detail.personnel.map((p) => (
													<div
														key={p.id}
														className="bg-[var(--bg-tertiary)] rounded-lg p-3 grid grid-cols-1 sm:grid-cols-3 gap-3"
													>
														<div className="flex flex-col gap-1">
															<span className="text-[10px] text-[var(--text-tertiary)]">
																Name
															</span>
															<span className="text-[12px] font-medium text-[var(--text-primary)]">
																{p.fullName}
															</span>
														</div>
														<div className="flex flex-col gap-1">
															<span className="text-[10px] text-[var(--text-tertiary)]">
																Email
															</span>
															<span className="text-[12px] text-[var(--text-primary)] break-all">
																{p.email}
															</span>
														</div>
														<div className="flex flex-col gap-1">
															<span className="text-[10px] text-[var(--text-tertiary)]">
																Phone
															</span>
															<span className="text-[12px] text-[var(--text-primary)]">
																{p.mobile || "—"}
															</span>
														</div>
													</div>
												))}
											</div>
										)}
									</div>
								</>
							) : (
								<>
									<div>
										<div className="text-[12px] font-semibold text-[var(--text-secondary)] mb-4 pb-2 border-b border-[var(--border-primary)] flex items-center gap-2">
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
												<title>Building</title>
												<path d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11" />
											</svg>
											Company Information
										</div>
										<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
											<div className="flex flex-col gap-1.5">
												<label
													className="text-[12px] font-medium text-[var(--text-secondary)]"
													htmlFor="company-name-input"
												>
													Company Name{" "}
													<span className="text-[var(--error)] ml-0.5">*</span>
												</label>
												<input
													id="company-name-input"
													type="text"
													className={formFieldClass}
													placeholder="Enter company name"
													value={formName}
													onChange={(e) => setFormName(e.target.value)}
												/>
											</div>
											<div className="flex flex-col gap-1.5">
												<label
													className="text-[12px] font-medium text-[var(--text-secondary)]"
													htmlFor="company-reg-input"
												>
													Registration No{" "}
													<span className="text-[var(--error)] ml-0.5">*</span>
												</label>
												<input
													id="company-reg-input"
													type="text"
													className={`${formFieldClass} font-mono`}
													placeholder="e.g., 202301012345"
													value={formReg}
													onChange={(e) => setFormReg(e.target.value)}
												/>
											</div>
											<div className="sm:col-span-2 flex flex-col gap-1.5">
												<label
													className="text-[12px] font-medium text-[var(--text-secondary)]"
													htmlFor="company-address-input"
												>
													Registered Business Address{" "}
													<span className="text-[var(--error)] ml-0.5">*</span>
												</label>
												<textarea
													id="company-address-input"
													rows={4}
													className={`${formFieldClass} resize-y min-h-[80px]`}
													placeholder="Enter full registered address"
													value={formAddress}
													onChange={(e) => setFormAddress(e.target.value)}
												/>
											</div>
											<div className="flex flex-col gap-1.5">
												<label
													className="text-[12px] font-medium text-[var(--text-secondary)]"
													htmlFor="company-industry-input"
												>
													Industry / Business Sector{" "}
													<span className="text-[var(--error)] ml-0.5">*</span>
												</label>
												<select
													id="company-industry-input"
													className={formFieldClass}
													value={formIndustry}
													onChange={(e) => setFormIndustry(e.target.value)}
												>
													<option value="">Select industry...</option>
													{INDUSTRIES.filter((o) => o.value).map((o) => (
														<option key={o.value} value={o.value}>
															{o.label}
														</option>
													))}
												</select>
											</div>
											<div className="flex flex-col gap-1.5">
												<label
													className="text-[12px] font-medium text-[var(--text-secondary)]"
													htmlFor="company-status-input"
												>
													Status
												</label>
												<select
													id="company-status-input"
													className={formFieldClass}
													value={formStatus}
													onChange={(e) => setFormStatus(e.target.value)}
												>
													{FORM_STATUS_OPTIONS.map((o) => (
														<option key={o.value} value={o.value}>
															{o.label}
														</option>
													))}
												</select>
											</div>
										</div>
									</div>

									<div className="mt-6 pt-6 border-t border-[var(--border-primary)]">
										<div className="flex items-center justify-between mb-4">
											<div className="text-[12px] font-semibold text-[var(--text-secondary)] flex items-center gap-2">
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
													<title>Users</title>
													<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
													<circle cx="9" cy="7" r="4" />
													<path d="M23 21v-2a4 4 0 00-3-3.87" />
													<path d="M16 3.13a4 4 0 010 7.75" />
												</svg>
												Company Personnel
											</div>
											<button
												type="button"
												onClick={addPersonRow}
												className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-medium bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-secondary)] hover:bg-[var(--bg-hover)] transition-colors"
											>
												<svg
													width="14"
													height="14"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth="2"
													aria-hidden
												>
													<title>Add</title>
													<line x1="12" y1="5" x2="12" y2="19" />
													<line x1="5" y1="12" x2="19" y2="12" />
												</svg>
												Add Person
											</button>
										</div>
										<p className="text-[11px] text-[var(--text-tertiary)] mb-3">
											Creates or links user records with this company. They can
											complete registration later with the same email.
										</p>
										<div className="flex flex-col gap-3">
											{personnel.map((p, i) => (
												<div
													key={`${i}`}
													className="bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[10px] p-4"
												>
													<div className="flex items-center justify-between mb-3">
														<span className="text-[12px] font-semibold text-[var(--text-secondary)]">
															Person {i + 1}
														</span>
														<button
															type="button"
															onClick={() => removePerson(i)}
															className="text-[12px] font-medium text-[var(--error)] hover:underline"
														>
															Remove
														</button>
													</div>
													<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
														<div className="flex flex-col gap-1.5">
															<span className="text-[11px] text-[var(--text-tertiary)]">
																Full name
															</span>
															<input
																type="text"
																className={personnelInputClass}
																placeholder="Name"
																value={p.fullName}
																onChange={(e) =>
																	updatePerson(i, "fullName", e.target.value)
																}
															/>
														</div>
														<div className="flex flex-col gap-1.5">
															<span className="text-[11px] text-[var(--text-tertiary)]">
																Email
															</span>
															<input
																type="email"
																className={personnelInputClass}
																placeholder="email@company.com"
																value={p.email}
																onChange={(e) =>
																	updatePerson(i, "email", e.target.value)
																}
															/>
														</div>
														<div className="flex flex-col gap-1.5">
															<span className="text-[11px] text-[var(--text-tertiary)]">
																Phone
															</span>
															<input
																type="text"
																className={personnelInputClass}
																placeholder="+60 …"
																value={p.mobile}
																onChange={(e) =>
																	updatePerson(i, "mobile", e.target.value)
																}
															/>
														</div>
													</div>
												</div>
											))}
										</div>
										<button
											type="button"
											onClick={addPersonRow}
											className="mt-3 w-full flex items-center justify-center gap-2 py-3.5 bg-[var(--bg-tertiary)] border-2 border-dashed border-[var(--border-secondary)] rounded-[10px] text-[13px] font-medium text-[var(--text-tertiary)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--accent-muted)] transition-all"
										>
											<svg
												width="18"
												height="18"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												aria-hidden
											>
												<title>Add personnel</title>
												<line x1="12" y1="5" x2="12" y2="19" />
												<line x1="5" y1="12" x2="19" y2="12" />
											</svg>
											Add Personnel
										</button>
									</div>
								</>
							)}
						</div>
						<div className="px-6 py-4 border-t border-[var(--border-primary)] flex justify-end gap-2.5 shrink-0">
							{modal === "view" ? (
								<>
									<button
										type="button"
										onClick={closeCompanyModal}
										className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-[13px] font-medium bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-secondary)] hover:bg-[var(--bg-hover)] transition-colors"
									>
										Close
									</button>
									<button
										type="button"
										onClick={() => viewRow && void openEdit(viewRow)}
										className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] font-medium bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-colors"
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
											<title>Edit</title>
											<path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
											<path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
										</svg>
										Edit Company
									</button>
								</>
							) : (
								<>
									<button
										type="button"
										onClick={closeCompanyModal}
										className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-[13px] font-medium bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-secondary)] hover:bg-[var(--bg-hover)] transition-colors"
									>
										Cancel
									</button>
									<button
										type="button"
										onClick={saveCompany}
										className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] font-medium bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-colors"
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
											<title>Save</title>
											<path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" />
											<polyline points="17 21 17 13 7 13 7 21" />
										</svg>
										{modal === "add" ? "Save Company" : "Save Changes"}
									</button>
								</>
							)}
						</div>
					</div>
				</div>
			)}

			{/* Delete confirm — matches deleteModal / confirm-modal in mock */}
			{modal === "delete" && (
				<div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
					<button
						type="button"
						className="absolute inset-0 bg-black/80 border-0 p-0 cursor-default"
						aria-label="Close dialog"
						onClick={() => setModal(null)}
					/>
					<div
						className="relative z-10 w-full max-w-[400px] overflow-hidden flex flex-col rounded-2xl border border-[var(--border-primary)] bg-[var(--bg-secondary)] shadow-2xl"
						role="alertdialog"
						aria-modal="true"
						aria-labelledby="delete-company-title"
					>
						<div className="px-6 py-5 border-b border-[var(--border-primary)] flex items-center justify-between shrink-0">
							<h3
								id="delete-company-title"
								className="text-base font-semibold text-[var(--text-primary)]"
							>
								Confirm Deletion
							</h3>
							<button
								type="button"
								onClick={() => setModal(null)}
								className="w-8 h-8 bg-[var(--bg-tertiary)] border-none rounded-md text-[var(--text-secondary)] flex items-center justify-center hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] transition-colors"
								aria-label="Close"
							>
								<svg
									width="18"
									height="18"
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
						<div className="px-6 py-6">
							<div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[var(--error-muted)] flex items-center justify-center text-[var(--error)]">
								<svg
									width="28"
									height="28"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									aria-hidden
								>
									<title>Warning</title>
									<path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
									<line x1="12" y1="9" x2="12" y2="13" />
									<line x1="12" y1="17" x2="12.01" y2="17" />
								</svg>
							</div>
							<div className="text-base font-semibold text-center text-[var(--text-primary)] mb-2">
								Delete Company?
							</div>
							<p className="text-[13px] text-[var(--text-secondary)] text-center leading-relaxed">
								This action cannot be undone. All company data and approval
								workflows for this company will be removed. Users stay in the
								system; their company link is cleared.
							</p>
							{selectedId && (
								<div className="mt-4 bg-[var(--bg-tertiary)] rounded-lg px-3 py-3 text-center">
									<div className="font-semibold text-[var(--text-primary)]">
										{items.find((x:CompanyRow) => x.id === selectedId)?.name ?? "—"}
									</div>
									<div className="text-[12px] text-[var(--text-tertiary)] font-mono mt-1">
										{items.find((x:CompanyRow) => x.id === selectedId)?.registrationNo ??
											""}
									</div>
								</div>
							)}
						</div>
						<div className="px-6 py-4 border-t border-[var(--border-primary)] flex justify-end gap-2.5 shrink-0">
							<button
								type="button"
								onClick={() => setModal(null)}
								className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-[13px] font-medium bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-secondary)] hover:bg-[var(--bg-hover)] transition-colors"
							>
								Cancel
							</button>
							<button
								type="button"
								onClick={confirmDelete}
								className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] font-medium bg-[var(--error-muted)] text-[var(--error)] border border-transparent hover:bg-[var(--error)] hover:text-white transition-colors"
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
									<title>Delete</title>
									<polyline points="3 6 5 6 21 6" />
									<path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
								</svg>
								Delete Company
							</button>
						</div>
					</div>
				</div>
			)}
      <ToastContainer position="bottom-right" theme="dark" hideProgressBar/>
		</div>
	);
}
