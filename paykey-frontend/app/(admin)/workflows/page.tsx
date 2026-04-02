'use client';

import { useCallback, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { adminService } from '@/services/adminService';

const MODE_OPTIONS = [
  { value: 'SINGLE', label: 'Single' },
  { value: 'MULTIPLE_ALL', label: 'Multiple (All)' },
  { value: 'MULTIPLE_ANY', label: 'Multiple (Any)' },
  { value: 'MULTIPLE_N_OF_M', label: 'Multiple (N of M)' },
];

const AUTH_METHODS = [
  { value: 'FIDO2', label: 'FIDO2/WebAuthn', icon: '🔐', color: 'bg-blue-500/10 text-blue-500' },
  { value: 'PIN', label: 'PIN Code', icon: '📱', color: 'bg-lime-500/10 text-lime-500' },
  { value: 'PUSH', label: 'Push Notification', icon: '📲', color: 'bg-cyan-500/10 text-cyan-500' },
  { value: 'TOTP', label: 'TOTP', icon: '⏱️', color: 'bg-amber-500/10 text-amber-500' },
  { value: 'BIOMETRIC', label: 'Biometric', icon: '👤', color: 'bg-pink-500/10 text-pink-500' },
];

const AVATAR_COLORS = ['bg-blue-500/10 text-blue-500', 'bg-green-500/10 text-green-500', 'bg-violet-500/10 text-violet-500', 'bg-amber-500/10 text-amber-500', 'bg-cyan-500/10 text-cyan-500', 'bg-pink-500/10 text-pink-500', 'bg-red-500/10 text-red-500'];

type Company = { id: string; name: string; personnelCount: number };
type CompanyUser = { id: string; fullName: string; email: string; mobile: string | null };
type LevelDraft = {
  mode: string;
  nOfM: number | '';
  userIds: string[];
  authMethod?: string;
};
type WorkflowListItem = {
  id: string;
  name: string;
  levels: { levelOrder: number; mode: string; nOfM?: number | null; userIds: string[]; authMethods?: string[] }[];
};

export default function WorkflowsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialCompanyId = searchParams.get('companyId');

  const [companies, setCompanies] = useState<Company[]>([]);
  const [selectedCompanyId, setSelectedCompanyId] = useState<string | null>(null);
  const [selectedCompanyName, setSelectedCompanyName] = useState('');

  const [users, setUsers] = useState<CompanyUser[]>([]);
  const [workflows, setWorkflows] = useState<WorkflowListItem[]>([]);
  const [selectedWorkflowId, setSelectedWorkflowId] = useState<string | 'new'>('new');
  const [workflowName, setWorkflowName] = useState('');
  const [levels, setLevels] = useState<LevelDraft[]>([{ mode: 'SINGLE', nOfM: 1, userIds: [], authMethod: 'FIDO2' }]);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<{ type: 'ok' | 'err'; msg: string } | null>(null);

  // Modal states
  const [showUserPicker, setShowUserPicker] = useState(false);
  const [showAuthPicker, setShowAuthPicker] = useState(false);
  const [currentLevelIndex, setCurrentLevelIndex] = useState<number | null>(null);
  const [userSearchQuery, setUserSearchQuery] = useState('');
  const [selectedUsersForLevel, setSelectedUsersForLevel] = useState<string[]>([]);

  const loadCompanies = useCallback(async () => {
    setLoading(true);
    try {
      const res = await adminService.getCompanies({ pageSize: 100 });
      setCompanies(res.items || []);
    } catch (e) {
      console.error(e);
      setToast({ type: 'err', msg: 'Failed to load companies' });
    } finally {
      setLoading(false);
    }
  }, []);

  const loadWorkflows = useCallback(async (companyId: string) => {
    setLoading(true);
    try {
      const [c, wfs] = await Promise.all([
        adminService.getCompany(companyId),
        adminService.listCompanyWorkflows(),
      ]);
      setSelectedCompanyName(c.name);
      setUsers(
        (c.personnel || []).map((p: { id: string; fullName: string; email: string; mobile: string | null }) => ({
          id: p.id,
          fullName: p.fullName,
          email: p.email,
          mobile: p.mobile,
        })),
      );
      setWorkflows(wfs);
      setSelectedWorkflowId('new');
    } catch (e) {
      console.error(e);
      setToast({ type: 'err', msg: 'Failed to load workflows' });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadCompanies();
  }, [loadCompanies]);

  useEffect(() => {
    if (initialCompanyId && !selectedCompanyId) {
      setSelectedCompanyId(initialCompanyId);
      loadWorkflows(initialCompanyId);
    }
  }, [initialCompanyId, selectedCompanyId, loadWorkflows]);

  useEffect(() => {
    if (selectedWorkflowId === 'new') {
      setWorkflowName('');
      setLevels([{ mode: 'SINGLE', nOfM: 1, userIds: [], authMethod: 'FIDO2' }]);
      return;
    }
    const w = workflows.find((x) => x.id === selectedWorkflowId);
    if (!w) return;
    setWorkflowName(w.name);
    setLevels(
      w.levels.map((lv) => ({
        mode: lv.mode,
        nOfM: lv.mode === 'MULTIPLE_N_OF_M' ? (lv.nOfM != null ? lv.nOfM : 1) : '',
        userIds: [...lv.userIds],
        authMethod: lv.authMethods && lv.authMethods.length > 0 ? lv.authMethods[0] : 'FIDO2',
      })),
    );
  }, [selectedWorkflowId, workflows]);

  const selectCompany = (id: string) => {
    setSelectedCompanyId(id);
    loadWorkflows(id);
  };

  const toggleUser = (levelIdx: number, userId: string) => {
    setLevels((prev) => {
      const next = [...prev];
      const mode = next[levelIdx].mode;
      if (mode === 'SINGLE') {
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
    setLevels((prev) => [...prev, { mode: 'SINGLE', nOfM: 1, userIds: [], authMethod: 'FIDO2' }]);
  };

  const removeLevel = (i: number) => {
    setLevels((prev) => prev.filter((_, j) => j !== i));
  };

  const setMode = (i: number, mode: string) => {
    setLevels((prev) => {
      const next = [...prev];
      next[i] = { ...next[i], mode, nOfM: mode === 'MULTIPLE_N_OF_M' ? 1 : '' };
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

  const openAuthPicker = (levelIndex: number) => {
    setCurrentLevelIndex(levelIndex);
    setShowAuthPicker(true);
  };

  const closeAuthPicker = () => {
    setShowAuthPicker(false);
    setCurrentLevelIndex(null);
  };

  const toggleUserSelection = (userId: string) => {
    setSelectedUsersForLevel(prev =>
      prev.includes(userId)
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  const confirmUserSelection = () => {
    if (currentLevelIndex !== null) {
      setLevels(prev => {
        const next = [...prev];
        next[currentLevelIndex] = { ...next[currentLevelIndex], userIds: selectedUsersForLevel };
        return next;
      });
    }
    closeUserPicker();
  };

  const setAuthMethod = (authMethod: string) => {
    if (currentLevelIndex !== null) {
      setLevels(prev => {
        const next = [...prev];
        next[currentLevelIndex] = { ...next[currentLevelIndex], authMethod };
        return next;
      });
    }
    closeAuthPicker();
  };

  const getAvatarColor = (index: number) => AVATAR_COLORS[index % AVATAR_COLORS.length];

  const getAuthMethodInfo = (method: string) => AUTH_METHODS.find(m => m.value === method) || AUTH_METHODS[0];

  const save = async () => {
    if (!selectedCompanyId) return;
    if (!workflowName.trim()) {
      setToast({ type: 'err', msg: 'Workflow name is required' });
      return;
    }
    for (const lv of levels) {
      if (!lv.userIds.length) {
        setToast({ type: 'err', msg: 'Each level needs at least one assignee' });
        return;
      }
      if (lv.mode === 'MULTIPLE_N_OF_M') {
        const n = typeof lv.nOfM === 'number' ? lv.nOfM : Number.parseInt(String(lv.nOfM), 10);
        if (Number.isNaN(n) || n < 1 || n > lv.userIds.length) {
          setToast({ type: 'err', msg: 'N of M must be between 1 and number of assignees' });
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
          ...(lv.mode === 'MULTIPLE_N_OF_M'
            ? { nOfM: typeof lv.nOfM === 'number' ? lv.nOfM : Number.parseInt(String(lv.nOfM), 10) }
            : {}),
          userIds: lv.userIds,
          authMethods: lv.userIds.map(() => lv.authMethod || 'FIDO2'),
        })),
      };
      if (selectedWorkflowId === 'new') {
        const created = await adminService.createWorkflow(selectedCompanyId, payload);
        setToast({ type: 'ok', msg: 'Workflow created' });
        await loadWorkflows(selectedCompanyId);
        setSelectedWorkflowId(created.id);
      } else {
        await adminService.updateWorkflow(selectedWorkflowId, payload);
        setToast({ type: 'ok', msg: 'Workflow saved' });
        await loadWorkflows(selectedCompanyId);
      }
    } catch (e: any) {
      const msg = e.response?.data?.error || 'Save failed';
      setToast({ type: 'err', msg });
    } finally {
      setSaving(false);
    }
  };

  const deleteWf = async () => {
    if (selectedWorkflowId === 'new') return;
    if (!confirm('Delete this workflow?')) return;
    try {
      await adminService.deleteWorkflow(selectedWorkflowId);
      setToast({ type: 'ok', msg: 'Workflow deleted' });
      setSelectedWorkflowId('new');
      if (selectedCompanyId) await loadWorkflows(selectedCompanyId);
    } catch {
      setToast({ type: 'err', msg: 'Delete failed' });
    }
  };

  return (
    <div className="flex h-screen bg-[#0a0c10] text-[#eef0f6]">
      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="p-8 border-b border-[#252a36] bg-[#12151c] flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold">Multi-Level Approval</h1>
            <div className="text-[13px] text-[#8a90a0]">Configure approval workflows with multiple levels and methods</div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => {
                setSelectedWorkflowId('new');
                setWorkflowName('');
                setLevels([{ mode: 'SINGLE', nOfM: 1, userIds: [], authMethod: 'FIDO2' }]);
              }}
              className="px-4 py-2 bg-[#181c26] border border-[#252a36] rounded text-[13px] text-[#8a90a0] hover:bg-[#1e2330] hover:text-[#eef0f6] transition-all flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Reset
            </button>
            <button
              onClick={save}
              disabled={saving}
              className="px-4 py-2 bg-[#10b981] text-white rounded text-[13px] font-semibold hover:opacity-90 transition-all flex items-center gap-2 disabled:opacity-50"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {saving ? 'Saving...' : 'Save Workflow'}
            </button>
          </div>
        </header>

        <div className="flex-1 p-8 overflow-y-auto">
          {toast && (
            <div className={`mb-6 text-sm px-4 py-3 rounded border flex justify-between items-center ${toast.type === 'ok'
              ? 'border-green-500/30 bg-green-500/10 text-green-500'
              : 'border-red-500/30 bg-red-500/10 text-red-500'
              }`}>
              <span>{toast.msg}</span>
              <button type="button" className="underline text-xs" onClick={() => setToast(null)}>Dismiss</button>
            </div>
          )}

          {!selectedCompanyId ? (
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Select Company</h2>
                <p className="text-[#8a90a0]">Choose a company to configure approval workflows</p>
              </div>

              {loading ? (
                <div className="text-center py-20 text-[#8a90a0]">Loading companies...</div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {companies.map((c, index) => (
                    <button
                      key={c.id}
                      onClick={() => selectCompany(c.id)}
                      className="flex items-center gap-3 p-4 bg-[#181c26] border border-[#252a36] rounded-lg hover:bg-[#1e2330] hover:border-[#3a4255] transition-all text-left group"
                    >
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold ${getAvatarColor(index)
                        }`}>
                        {c.name.slice(0, 2).toUpperCase()}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm truncate">{c.name}</div>
                        <div className="text-[11px] text-[#555b6e]">{c.personnelCount} users</div>
                      </div>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${'border-[#252a36] group-hover:border-[#3b82f6]'
                        }`}>
                        <svg className="w-3 h-3 text-[#3b82f6] opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="max-w-4xl mx-auto">
              {/* Workflow Name */}
              <div className="mb-6">
                <label className="block mb-2">
                  <span className="text-[13px] font-semibold text-[#8a90a0]">Workflow Name</span>
                  <input
                    className="mt-2 w-full max-w-md bg-[#181c26] border border-[#252a36] rounded-lg px-4 py-3 text-sm outline-none focus:border-[#3b82f6] transition-colors"
                    value={workflowName}
                    onChange={(e) => setWorkflowName(e.target.value)}
                    placeholder="Enter workflow name..."
                  />
                </label>
              </div>

              {/* Approval Levels */}
              <div className="space-y-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Approval Levels</h3>
                  <button
                    onClick={addLevel}
                    className="px-3 py-2 bg-[#181c26] border border-[#252a36] rounded text-[13px] text-[#8a90a0] hover:text-[#3b82f6] hover:border-[#3b82f6] transition-all flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                    Add Level
                  </button>
                </div>

                {users.length === 0 && (
                  <div className="text-center py-12 text-[#8a90a0]">
                    <svg className="w-12 h-12 mx-auto mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    <p>No users available for this company</p>
                  </div>
                )}

                <div className="space-y-3">
                  {levels.map((level, index) => (
                    <div key={index} className="bg-[#181c26] border border-[#252a36] rounded-lg overflow-hidden">
                      <div className="flex items-center gap-4 p-4 border-b border-[#252a36]">
                        <div className={`px-3 py-1 rounded-full text-[11px] font-bold font-mono tracking-wide ${index === 0 ? 'bg-blue-500/10 text-blue-500' :
                          index === 1 ? 'bg-green-500/10 text-green-500' :
                            index === 2 ? 'bg-violet-500/10 text-violet-500' :
                              index === 3 ? 'bg-amber-500/10 text-amber-500' :
                                index === 4 ? 'bg-cyan-500/10 text-cyan-500' :
                                  'bg-pink-500/10 text-pink-500'
                          }`}>
                          LEVEL {index + 1}
                        </div>
                        <div className="flex-1 font-semibold text-sm">Approval Level {index + 1}</div>
                        {levels.length > 1 && (
                          <button
                            onClick={() => removeLevel(index)}
                            className="p-2 text-[#555b6e] hover:text-red-500 transition-colors"
                          >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <polyline points="3 6 5 6 21 6" />
                              <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                            </svg>
                          </button>
                        )}
                      </div>

                      <div className="p-4 space-y-4">
                        {/* Mode Selector */}
                        <div>
                          <div className="flex gap-2 flex-wrap mb-3">
                            {MODE_OPTIONS.map((mode) => (
                              <button
                                key={mode.value}
                                onClick={() => setMode(index, mode.value)}
                                className={`px-4 py-2 rounded-full text-[12px] font-semibold border transition-all ${level.mode === mode.value
                                  ? 'border-[#3b82f6] bg-blue-500/10 text-[#3b82f6]'
                                  : 'border-[#252a36] text-[#8a90a0] hover:border-[#3a4255] hover:text-[#eef0f6]'
                                  }`}
                              >
                                {mode.label}
                              </button>
                            ))}
                          </div>

                          {level.mode === 'MULTIPLE_N_OF_M' && (
                            <div className="inline-flex items-center gap-3 text-[13px]">
                              <span className="text-[#8a90a0]">Require</span>
                              <input
                                type="number"
                                min={1}
                                max={level.userIds.length || 1}
                                value={level.nOfM === '' ? '' : level.nOfM}
                                onChange={(e) => {
                                  const v = e.target.value === '' ? '' : Number.parseInt(e.target.value, 10);
                                  setLevels(prev => {
                                    const next = [...prev];
                                    next[index] = { ...next[index], nOfM: v === '' ? '' : v };
                                    return next;
                                  });
                                }}
                                className="w-10 bg-[#12151c] border border-[#252a36] rounded px-2 py-1 text-center font-mono text-sm text-blue-500 outline-none focus:border-[#3b82f6]"
                              />
                              <span className="text-[#555b6e]">approvers</span>
                            </div>
                          )}
                        </div>

                        {/* User Chips */}
                        <div>
                          <div className="flex flex-wrap gap-2 min-h-[40px] mb-3">
                            {level.userIds.map((userId) => {
                              const user = users.find(u => u.id === userId);
                              if (!user) return null;
                              return (
                                <div key={userId} className="flex items-center gap-3 px-3 py-2 bg-[#12151c] border border-[#252a36] rounded-lg">
                                  <div className={`w-7 h-7 rounded-md flex items-center justify-center text-[11px] font-bold ${getAvatarColor(users.findIndex(u => u.id === userId))
                                    }`}>
                                    {user.fullName.split(' ').map(n => n[0]).join('').toUpperCase()}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="text-[13px] font-semibold truncate">{user.fullName}</div>
                                    <div className="text-[10px] text-[#555b6e] flex items-center gap-1">
                                      <span className={`inline-flex items-center gap-1 px-1 py-0.5 rounded text-[9px] font-semibold ${getAuthMethodInfo(level.authMethod || 'FIDO2').color
                                        }`}>
                                        {getAuthMethodInfo(level.authMethod || 'FIDO2').icon}
                                        {getAuthMethodInfo(level.authMethod || 'FIDO2').label}
                                      </span>
                                    </div>
                                  </div>
                                  <button
                                    onClick={() => toggleUser(index, userId)}
                                    className="w-5 h-5 rounded text-[#555b6e] hover:bg-red-500/10 hover:text-red-500 transition-all flex items-center justify-center"
                                  >
                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                      <line x1="18" y1="6" x2="6" y2="18" />
                                      <line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                  </button>
                                </div>
                              );
                            })}
                          </div>

                          <div className="flex gap-2">
                            <button
                              onClick={() => openUserPicker(index)}
                              className="flex items-center gap-2 px-3 py-2 border border-dashed border-[#252a36] rounded text-[12px] text-[#8a90a0] hover:border-[#3b82f6] hover:text-[#3b82f6] transition-all"
                            >
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <line x1="12" y1="5" x2="12" y2="19" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                              </svg>
                              Add User
                            </button>
                            <button
                              onClick={() => openAuthPicker(index)}
                              className="flex items-center gap-2 px-3 py-2 bg-[#12151c] border border-[#252a36] rounded text-[12px] text-[#8a90a0] hover:border-[#3b82f6] hover:text-[#3b82f6] transition-all"
                            >
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                              </svg>
                              Auth Method
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Add Level Button */}
              <button
                onClick={addLevel}
                className="w-full p-4 border-2 border-dashed border-[#252a36] rounded-lg text-[14px] text-[#8a90a0] hover:border-[#3b82f6] hover:text-[#3b82f6] transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                Add Approval Level
              </button>
            </div>
          )}
        </div>

        {/* User Picker Modal */}
        {showUserPicker && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm">
            <div className="w-full max-w-md bg-[#12151c] border border-[#252a36] rounded-xl shadow-2xl">
              <div className="p-5 border-b border-[#252a36] flex justify-between items-center">
                <h3 className="font-semibold">Select Users</h3>
                <button
                  onClick={closeUserPicker}
                  className="w-7 h-7 rounded bg-[#181c26] text-[#8a90a0] hover:text-[#eef0f6] transition-colors flex items-center justify-center"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-5 max-h-[400px] overflow-y-auto">
                <div className="relative mb-4">
                  <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#555b6e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
                  </svg>
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
                    .filter(user =>
                      user.fullName.toLowerCase().includes(userSearchQuery.toLowerCase()) ||
                      user.email.toLowerCase().includes(userSearchQuery.toLowerCase())
                    )
                    .map((user) => (
                      <div
                        key={user.id}
                        onClick={() => toggleUserSelection(user.id)}
                        className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${selectedUsersForLevel.includes(user.id)
                          ? 'bg-blue-500/10'
                          : 'hover:bg-[#1e2330]'
                          }`}
                      >
                        <div className={`w-8 h-8 rounded-md flex items-center justify-center text-xs font-bold ${getAvatarColor(users.findIndex(u => u.id === user.id))
                          }`}>
                          {user.fullName.split(' ').map(n => n[0]).join('').toUpperCase()}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold truncate">{user.fullName}</div>
                          <div className="text-[11px] text-[#555b6e] truncate">{user.email}</div>
                        </div>
                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${selectedUsersForLevel.includes(user.id)
                          ? 'bg-[#3b82f6] border-[#3b82f6]'
                          : 'border-[#252a36]'
                          }`}>
                          {selectedUsersForLevel.includes(user.id) && (
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <div className="p-5 border-t border-[#252a36] flex justify-end gap-2">
                <button
                  onClick={closeUserPicker}
                  className="px-4 py-2 bg-[#181c26] border border-[#252a36] rounded text-[13px] text-[#8a90a0] hover:text-[#eef0f6] transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmUserSelection}
                  className="px-4 py-2 bg-[#3b82f6] text-white rounded text-[13px] font-semibold hover:bg-[#2563eb] transition-colors"
                >
                  Add Selected
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Auth Method Picker Modal */}
        {showAuthPicker && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm">
            <div className="w-full max-w-sm bg-[#12151c] border border-[#252a36] rounded-xl shadow-2xl">
              <div className="p-5 border-b border-[#252a36] flex justify-between items-center">
                <h3 className="font-semibold">Authentication Method</h3>
                <button
                  onClick={closeAuthPicker}
                  className="w-7 h-7 rounded bg-[#181c26] text-[#8a90a0] hover:text-[#eef0f6] transition-colors flex items-center justify-center"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-5">
                <div className="space-y-1">
                  {AUTH_METHODS.map((method) => (
                    <div
                      key={method.value}
                      onClick={() => setAuthMethod(method.value)}
                      className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${(currentLevelIndex !== null && levels[currentLevelIndex]?.authMethod === method.value)
                        ? 'bg-blue-500/10'
                        : 'hover:bg-[#1e2330]'
                        }`}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm ${method.color}`}>
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold">{method.label}</div>
                      </div>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${(currentLevelIndex !== null && levels[currentLevelIndex]?.authMethod === method.value)
                        ? 'border-[#3b82f6] bg-[#3b82f6]'
                        : 'border-[#252a36]'
                        }`}>
                        {(currentLevelIndex !== null && levels[currentLevelIndex]?.authMethod === method.value) && (
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-5 border-t border-[#252a36] flex justify-end">
                <button
                  onClick={closeAuthPicker}
                  className="px-4 py-2 bg-[#3b82f6] text-white rounded text-[13px] font-semibold hover:bg-[#2563eb] transition-colors"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}