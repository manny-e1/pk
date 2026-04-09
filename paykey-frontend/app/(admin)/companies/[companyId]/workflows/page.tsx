"use client";

import { useState } from "react";
import { useParams,  } from "next/navigation";
import { adminService } from "@/services/adminService";
import {
	Check,
	Plus,
	Search,
	Trash,
	Trash2,
	X,
} from "lucide-react";
import { useWorkflows } from "@/hooks/useWorkflows";
import { useQuery } from "@tanstack/react-query";
import { toast, ToastContainer} from 'react-toastify'

const MODE_OPTIONS = [
	{ value: "SINGLE", label: "Single" },
	{ value: "MULTIPLE_ALL", label: "Multiple (All)" },
	{ value: "MULTIPLE_ANY", label: "Multiple (Any)" },
	{ value: "MULTIPLE_N_OF_M", label: "Multiple (N of M)" },
];
export const BADGE_COLORS = ["lb-1", "lb-2", "lb-3", "lb-4", "lb-5", "lb-6"];
const AVATAR_COLORS = [
	"bg-blue-500/10 text-blue-500",
	"bg-green-500/10 text-green-500",
	"bg-violet-500/10 text-violet-500",
	"bg-amber-500/10 text-amber-500",
	"bg-cyan-500/10 text-cyan-500",
	"bg-pink-500/10 text-pink-500",
	"bg-red-500/10 text-red-500",
];

type Company = { id: string; name: string; personnelCount: number };
type CompanyUser = {
	id: string;
	fullName: string;
	email: string;
	mobile: string | null;
};
type LevelDraft = {
	label: string;
	mode: string;
	nOfM: number | "";
	userIds: string[];
};
type WorkflowListItem = {
	id: string;
	name: string;
	levels: {
		levelOrder: number;
		mode: string;
		nOfM?: number | null;
		userIds: string[];
	}[];
};

export default function WorkflowsPage() {
  const { companyId } = useParams();
  const {data: workflows, isLoading, refetch } = useWorkflows(companyId as string);

	const [selectedWorkflowId, setSelectedWorkflowId] = useState<string | "new">(
		''
	);
  const {data: users} = useQuery({
    queryKey: ['company-users',companyId],
    queryFn: async() => await adminService.listCompanyUsers(companyId as string),
  });
	const [workflowName, setWorkflowName] = useState("");

	const [levels, setLevels] = useState<LevelDraft[]>([]);

	const [saving, setSaving] = useState(false);

	// Modal states
	const [showUserPicker, setShowUserPicker] = useState(false);
	const [currentLevelIndex, setCurrentLevelIndex] = useState<number | null>(
		null,
	);
	const [userSearchQuery, setUserSearchQuery] = useState("");
	const [selectedUsersForLevel, setSelectedUsersForLevel] = useState<string[]>(
		[],
	);


	const selectWorkflow = (id: string) => {
    const wf = workflows?.find((wf: WorkflowListItem) => wf.id === id);
    if (!wf) return;
    setSelectedWorkflowId(wf.id);
    setWorkflowName(wf.name);
		setLevels(
      wf.levels.map(
        (lv: { mode: string; nOfM: number | null; userIds: string[] }) => ({
          mode: lv.mode,
          label:
            MODE_OPTIONS.find((mode) => mode.value === lv.mode)?.label || "",
          nOfM:
            lv.mode === "MULTIPLE_N_OF_M"
              ? lv.nOfM != null
                ? lv.nOfM
                : 1
              : "",
          userIds: [...lv.userIds],
        }),
      ),
    );
	};

	const toggleUser = (levelIdx: number, userId: string) => {
		setLevels((prev) => {
			const next = [...prev];
			const mode = next[levelIdx].mode;
			if (mode === "SINGLE") {
				next[levelIdx] = {
					...next[levelIdx],
					userIds: next[levelIdx].userIds.includes(userId) ? [] : [userId],
				};
				return next;
			}
			const u = new Set(next[levelIdx].userIds);
			if (u.has(userId)) u.delete(userId);
			else u.add(userId);
			next[levelIdx] = { ...next[levelIdx], userIds: [...u] };
			return next;
		});
	};

	const addLevel = () => {
		setLevels((prev) => [
			...prev,
			{ mode: "SINGLE", label: "SINGLE", nOfM: 1, userIds: [] },
		]);
	};

	const removeLevel = (i: number) => {
		setLevels((prev) => prev.filter((_, j) => j !== i));
	};

	const setMode = (i: number, mode: string, label: string) => {
		setLevels((prev) => {
			const next = [...prev];
			next[i] = {
				...next[i],
				label,
				mode,
				nOfM: mode === "MULTIPLE_N_OF_M" ? 1 : "",
			};
			return next;
		});
	};

	const openUserPicker = (levelIndex: number) => {
		setCurrentLevelIndex(levelIndex);
		setSelectedUsersForLevel([...levels[levelIndex].userIds]);
		setShowUserPicker(true);
	};

	const closeUserPicker = () => {
		setShowUserPicker(false);
		setCurrentLevelIndex(null);
		setSelectedUsersForLevel([]);
	};

	const toggleUserSelection = (userId: string) => {
		setSelectedUsersForLevel((prev) =>
			prev.includes(userId)
				? prev.filter((id) => id !== userId)
				: [...prev, userId],
		);
	};

	const confirmUserSelection = () => {
		if (currentLevelIndex !== null) {
			setLevels((prev) => {
				const next = [...prev];
				next[currentLevelIndex] = {
					...next[currentLevelIndex],
					userIds: selectedUsersForLevel,
				};
				return next;
			});
		}
		closeUserPicker();
	};

	const getAvatarColor = (index: number) =>
		AVATAR_COLORS[index % AVATAR_COLORS.length];

	const save = async () => {
		if (!workflowName.trim()) {
			toast("Workflow name is required", {style:{color:'red'}});
			return;
		}
		for (const lv of levels) {
			if (!lv.userIds.length) {
				toast(
					"Each level needs at least one assignee",
          {style:{color:'red'}});
				return;
			}
			if (lv.mode === "MULTIPLE_N_OF_M") {
				const n =
					typeof lv.nOfM === "number"
						? lv.nOfM
						: Number.parseInt(String(lv.nOfM), 10);
				if (Number.isNaN(n) || n < 1 || n > lv.userIds.length) {
					toast("N of M must be between 1 and number of assignees",{style:{color:'red'}});
					return;
				}
			}
		}
		setSaving(true);
		try {
			const payload = {
				name: workflowName.trim(),
				levels: levels.map((lv, idx) => ({
					mode: lv.mode,
					levelOrder: idx,
					...(lv.mode === "MULTIPLE_N_OF_M"
						? {
								nOfM:
									typeof lv.nOfM === "number"
										? lv.nOfM
										: Number.parseInt(String(lv.nOfM), 10),
							}
						: {}),
					userIds: lv.userIds,
				})),
			};
			if (selectedWorkflowId === "new") {
				await adminService.createWorkflow(
					companyId as string,
					payload,
				);
				toast("Workflow created");
				refetch();
			} else {
				await adminService.updateWorkflow(selectedWorkflowId, payload);
				toast("Workflow saved");
				refetch()
			}
      setWorkflowName("")
      setLevels([])
      setSelectedWorkflowId('')
		} catch (e) {
			const msg = e instanceof Error ? e.message : "Save failed";
			toast(msg,{style:{color:'red'}});
		} finally {
			setSaving(false);
		}
	};

	const deleteWf = async () => {
		if (selectedWorkflowId === "new") return;
		if (!confirm("Delete this workflow?")) return;
		try {
			await adminService.deleteWorkflow(selectedWorkflowId);
			toast("Workflow deleted");
			setSelectedWorkflowId("new");
      setWorkflowName("");
			setLevels([]);
      refetch();
		} catch {
			toast("Delete failed", {style:{color:'red'}});
		}
	};

	return (
		<div className="flex h-screen bg-[#0a0c10] text-[#eef0f6]">
			{/* Main Content */}
			<main className="flex w-full flex-col overflow-hidden">
				<header className="p-8 border-b border-[#252a36] bg-[#12151c] flex justify-between items-center">
					<div>
						<h1 className="text-xl font-bold">Multi-Level Approval</h1>
						<div className="text-[13px] text-[#8a90a0]">
							Configure approval levels and assignees. Authentication methods
							are defined by auth policies.
						</div>
					</div>
					<div className="flex gap-2">
						<button
							type="button"
							onClick={() => {
								setSelectedWorkflowId("new");
								setWorkflowName("");
								setLevels([]);
							}}
							className="px-4 py-2 bg-[#181c26] border border-[#252a36] rounded text-[13px] text-[#8a90a0] hover:bg-[#1e2330] hover:text-[#eef0f6] transition-all flex items-center gap-2"
						>
							<svg
								className="w-4 h-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth="2"
							>
								<title>Reset</title>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
								/>
							</svg>
							Reset
						</button>
						<button
							type="button"
							onClick={save}
							disabled={saving}
							className="px-4 py-2 bg-[#10b981] text-white rounded text-[13px] font-semibold hover:opacity-90 transition-all flex items-center gap-2 disabled:opacity-50"
						>
							<svg
								className="w-4 h-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth="2"
							>
								<title>Save</title>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M5 13l4 4L19 7"
								/>
							</svg>
							{saving ? "Saving..." : "Save Workflow"}
						</button>
					</div>
				</header>

				<div className="flex-1 p-8 overflow-y-auto">
					<div className="mb-6">
						<label className="block text-[13px] font-semibold text-[#8a90a0]">
							Workflow Name
						</label>
						<input
							className="mt-2 w-full max-w-md bg-[#181c26] border border-[#252a36] rounded-lg px-4 py-3 text-sm outline-none focus:border-[#3b82f6] transition-colors"
							value={workflowName}
							onChange={(e) => setWorkflowName(e.target.value)}
							placeholder="Enter workflow name..."
						/>
					</div>

					<WorkflowCard>
						<WorkflowCardHeader>
							<WorkflowTitle
								icon={
									<svg
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth="1.8"
									>
										<title>Company</title>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
										/>
									</svg>
								}
								title="Select Workflow"
							>
								
							</WorkflowTitle>
              <button type="button" className="flex items-center text-nowrap gap-2 text-[var(--t3)] font-[.78rem]" onClick={() => {
                    setSelectedWorkflowId("new");
                    setWorkflowName("");
                    setLevels([{ mode: "SINGLE", label: "SINGLE", nOfM: 1, userIds: [] }]);
                  }}>
                  <Plus className="w-3 h-3" />
                    Add Workflow
									</button>
						</WorkflowCardHeader>
						<WorkflowCardBody>
								<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
									{workflows?.map((wf: WorkflowListItem, index:number) => {
										const isSelected = wf.id === selectedWorkflowId;
										const bg = isSelected
											? "rgba(59,130,246,.04)"
											: "var(--bgi)";
										const border = isSelected ? "var(--ac)" : "var(--bd)";
										const hover = isSelected
											? ""
											: "hover:bg-[#1e2330] hover:border-[#3a4255]";
										const boxShadow = isSelected
											? "0 0 0 3px var(--acg)"
											: "none";
										return (
											<button
												type="button"
												key={wf.id}
												onClick={() => selectWorkflow(wf.id)}
												className={`flex relative items-center gap-3 p-4 bg-[${bg}]
                      border border-[${border}] rounded-lg ${hover} transition-all text-left group shadow-${boxShadow}`}
											>
                        <Trash className="top-2 right-2" />
												<div
													className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold ${getAvatarColor(
														index,
													)}`}
												>
													{wf.name.slice(0, 2).toUpperCase()}
												</div>
												<div className="flex-1 min-w-0">
													<div className="font-semibold text-sm truncate">
														{wf.name}
													</div>
													{/* <div className="text-[11px] text-[#555b6e]">
														{wf.personnelCount} users
													</div> */}
												</div>
												<div
													className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-all"
													style={{
														border: `2px solid ${isSelected ? "var(--ac)" : "var(--bd)"}`,
														background: isSelected
															? "var(--ac)"
															: "transparent",
													}}
												>
													{isSelected && <Check className="w-3 h-3" />}
												</div>
											</button>
										);
									})}
								</div>
						</WorkflowCardBody>
					</WorkflowCard>

					{levels.length>0 && (
						<WorkflowCard>
							<WorkflowCardHeader>
								<WorkflowTitle
									icon={
										<svg
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											strokeWidth="1.8"
										>
											<title>Level</title>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
											/>
										</svg>
									}
									title="Approval Levels"
								/>
								<div className="font-[.78rem] text-[var(--t3)] text-nowrap">{levels.length} {levels.length >1 ? "levels" :"level"}</div>
							</WorkflowCardHeader>
							<WorkflowCardBody>
								{levels.map((level, idx) => {
									return (
										<LevelCard key={`${level.label}${idx}`}>
											<LevelCardHeader
												level={idx}
												mode={level.label}
												onClick={removeLevel}
											/>
											<LevelCardBody>
												<div className="flex gap-2 flex-wrap mb-[14px]">
													{MODE_OPTIONS.map((mode) => (
														<button
															type="button"
															key={mode.value}
															onClick={() =>
																setMode(idx, mode.value, mode.label)
															}
															className={`px-4 py-2 rounded-full text-[12px] font-semibold border transition-all ${
																level.mode === mode.value
																	? "border-[#3b82f6] bg-blue-500/10 text-[#3b82f6]"
																	: "border-[#252a36] text-[#8a90a0] hover:border-[#3a4255] hover:text-[#eef0f6]"
															}`}
														>
															{mode.label}
														</button>
													))}
												</div>
												{level.mode === "MULTIPLE_N_OF_M" && (
													<div className="mb-3">
														<div className="inline-flex items-center gap-[6px] ml-2">
															<span className="text-[var(--t2)] font-[.78rem]">
																Require
															</span>
															<input
																type="number"
																min={1}
																max={level.userIds.length || 1}
																value={level.nOfM === "" ? "" : level.nOfM}
																onChange={(e) => {
																	const v =
																		e.target.value === ""
																			? ""
																			: Number.parseInt(e.target.value, 10);
																	setLevels((prev) => {
																		const next = [...prev];
																		next[idx] = {
																			...next[idx],
																			nOfM: v === "" ? "" : v,
																		};
																		return next;
																	});
																}}
																className="w-10 bg-[#12151c] border border-[#252a36] rounded px-2 py-1 text-center font-mono text-sm text-blue-500 outline-none focus:border-[#3b82f6]"
															/>
															<span className="text-[var(--t3)] text-[.74rem]">
																of {level.userIds.length} approvers
															</span>
														</div>
													</div>
												)}

												<div className="flex flex-wrap min-h-10 gap-2 mb-3">
													{level.userIds.map((userId) => {
														const user = users?.find((u: CompanyUser) => u.id === userId);
														if (!user) return null;
														return (
															<div
																key={userId}
																className="flex items-center gap-2 pr-[10px] py-[6px] pl-[6px] bg-[var(--bgc)] border
                                border-[var(--bd)] rounded-lg cursor-pointer transition-all duration-200 max-w-[200px]"
															>
																<div
																	className={`w-[26px] h-[26px] rounded-md flex items-center justify-center text-[11px] font-bold ${getAvatarColor(
																		users?.findIndex((u: CompanyUser) => u.id === userId),
																	)}`}
																>
																	{user.fullName
																		.split(" ")
																		.map((n: string) => n[0])
																		.join("")
																		.toUpperCase()}
																</div>
																<div className="flex-1 min-w-0">
																	<div className="text-[.78rem] font-semibold truncate overflow-hidden whitespace-nowrap">
																		{user.fullName}
																	</div>
																</div>
																<button
																	type="button"
																	onClick={() => toggleUser(idx, userId)}
																	className="w-[18px] h-[18px] rounded text-[var(--t3)] hover:bg-red-500/10 hover:text-red-500 transition-all flex items-center justify-center"
																>
																	<X className="w-3 h-3" />
																</button>
															</div>
														);
													})}
													<div className="flex gap-2">
														<button
															type="button"
															onClick={() => openUserPicker(idx)}
															className="flex items-center gap-2 px-[14px] py-2 border 
                              border-dashed border-[var(--bd)] rounded text-[var(--t3)] 
                              hover:border-[var(--ac)] hover:text-[var(--ac)] hover:bg-[var(--acg)] transition-all duration-200"
														>
															<Plus className="w-3 h-3" />
															Add User
														</button>
													</div>
												</div>
											</LevelCardBody>
										</LevelCard>
									);
								})}

								<div className="flex flex-col">
									<button
										type="button"
										onClick={addLevel}
										className="flex items-center justify-center gap-2 p-[14px] border border-[var(--bd)] border-dashed bg-none text-[var(--t3)]
                  font-semibold cursor-pointer transition-all duration-[.25s] w-full"
									>
										<Plus className="w-4 h-4" />
										Add Approval Level
									</button>
								</div>
							</WorkflowCardBody>
						</WorkflowCard>
					)}
				</div>

				{/* User Picker Modal */}
				{showUserPicker && (
					<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm">
						<div className="w-full max-w-md bg-[#12151c] border border-[#252a36] rounded-xl shadow-2xl">
							<div className="p-5 border-b border-[#252a36] flex justify-between items-center">
								<h3 className="font-semibold">Select Users</h3>
								<button
									type="button"
									onClick={closeUserPicker}
									className="w-7 h-7 rounded bg-[#181c26] text-[#8a90a0] hover:text-[#eef0f6] transition-colors flex items-center justify-center"
								>
									<X className="w-4 h-4" />
								</button>
							</div>
							<div className="p-5 max-h-[400px] overflow-y-auto">
								<div className="relative mb-4">
									<Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--t3)]" />
									<input
										type="text"
										placeholder="Search users..."
										value={userSearchQuery}
										onChange={(e) => setUserSearchQuery(e.target.value)}
										className="w-full pl-10 pr-4 py-2 bg-[#181c26] border border-[#252a36] rounded-lg text-sm outline-none focus:border-[#3b82f6]"
									/>
								</div>
								<div className="space-y-1">
									{users
										?.filter(
											(user: CompanyUser) =>
												user.fullName
													.toLowerCase()
													.includes(userSearchQuery.toLowerCase()) ||
												user.email
													.toLowerCase()
													.includes(userSearchQuery.toLowerCase()),
										)
										.map((user: CompanyUser) => (
											<div
												key={user.id}
												onClick={() => toggleUserSelection(user.id)}
												className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${
													selectedUsersForLevel.includes(user.id)
														? "bg-blue-500/10"
														: "hover:bg-[#1e2330]"
												}`}
												onKeyUp={() => toggleUserSelection(user.id)}
											>
												<div
													className={`w-8 h-8 rounded-md flex items-center justify-center text-xs font-bold ${getAvatarColor(
														users?.findIndex((u: CompanyUser) => u.id === user.id),
													)}`}
												>
													{user.fullName
														.split(" ")
														.map((n) => n[0])
														.join("")
														.toUpperCase()}
												</div>
												<div className="flex-1 min-w-0">
													<div className="text-sm font-semibold truncate">
														{user.fullName}
													</div>
													<div className="text-[11px] text-[#555b6e] truncate">
														{user.email}
													</div>
												</div>
												<div
													className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
														selectedUsersForLevel.includes(user.id)
															? "bg-[#3b82f6] border-[#3b82f6]"
															: "border-[#252a36]"
													}`}
												>
													{selectedUsersForLevel.includes(user.id) && (
														<Check className="w-3 h-3" />
													)}
												</div>
											</div>
										))}
								</div>
							</div>
							<div className="p-5 border-t border-[#252a36] flex justify-end gap-2">
								<button
									type="button"
									onClick={closeUserPicker}
									className="px-4 py-2 bg-[#181c26] border border-[#252a36] rounded text-[13px] text-[#8a90a0] hover:text-[#eef0f6] transition-colors"
								>
									Cancel
								</button>
								<button
									type="button"
									onClick={confirmUserSelection}
									className="px-4 py-2 bg-[#3b82f6] text-white rounded text-[13px] font-semibold hover:bg-[#2563eb] transition-colors"
								>
									Add Selected
								</button>
							</div>
						</div>
					</div>
				)}
			</main>
      <ToastContainer position="bottom-right" theme="dark" hideProgressBar />
		</div>
	);
}

function WorkflowCard({
	children,
	className,
}: { children: React.ReactNode; className?: string | undefined }) {
	return (
		<div
			className={`bg-[var(--bgc)] border border-[var(--bd)] rounded-2xl overflow-hidden mb-4 ${className ?? ''}`}
		>
			{children}
		</div>
	);
}

function WorkflowCardHeader({
	children,
	className,
}: { children: React.ReactNode; className?: string | undefined }) {
	return (
		<div
			className={`py-4 px-5 border-b border-[var(--bd)] flex items-center justify-between ${className ?? ''}`}
		>
			{children}
		</div>
	);
}

function WorkflowCardBody({ children }: { children: React.ReactNode }) {
	return <div className="p-5">{children}</div>;
}

function WorkflowTitle({
	icon,
	title,
}: { icon: React.ReactNode; title: string;  }) {
	return (
		<div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-2.5 text-[0.92rem] font-[600]">
        <div className="w-8 h-8 rounded-lg p-2 flex items-center justify-center text-[var(--ac)] bg-[var(--acg)]">
          {icon}
        </div>
        {title}
      </div>
		</div>
	);
}

function LevelCard({ children }: { children: React.ReactNode }) {
	return (
		<WorkflowCard className="transition-all duration-[.25s] animation-level-in">
			{children}
		</WorkflowCard>
	);
}

function LevelCardHeader({
	level,
	mode,
	onClick,
}: { level: number; mode: string; onClick: (l: number) => void }) {
	const badgeClass = BADGE_COLORS[level % BADGE_COLORS.length];
	return (
		<WorkflowCardHeader className="gap-3">
			<div
				className={`font-['JetBrains_Mono', _monospace] text-[.72rem] py-[3px] px-2 flex-shrink-0 tracking-[0.5pk] ${badgeClass}`}
			>
				LEVEL {level + 1}
			</div>
			<div className="flex-1 text-[.85rem] font-semibold">{mode}</div>
			<div className="flex gap-4">
				<button
					type="button"
					className="w-7 h-7 rounded-md flex items-center justify-center cursor-pointer transition-all duration-150 text-[var(--t3)] bg-none border-none"
					onClick={() => onClick(level)}
					title="Delete"
				>
					<Trash2 className="w-4 h-4" />
				</button>
			</div>
		</WorkflowCardHeader>
	);
}
function LevelCardBody({ children }: { children: React.ReactNode }) {
	return <WorkflowCardBody>{children}</WorkflowCardBody>;
}
