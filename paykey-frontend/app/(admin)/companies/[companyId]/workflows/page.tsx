'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { adminService } from '@/services/adminService';

const MODE_OPTIONS = [
  { value: 'SINGLE', label: 'Single' },
  { value: 'MULTIPLE_ALL', label: 'Multiple (All)' },
  { value: 'MULTIPLE_ANY', label: 'Multiple (Any)' },
  { value: 'MULTIPLE_N_OF_M', label: 'Multiple (N of M)' },
];

type CompanyUser = { id: string; fullName: string; email: string; mobile: string | null };
type LevelDraft = { mode: string; nOfM: number | ''; userIds: string[] };
type WorkflowListItem = {
  id: string;
  name: string;
  levels: { levelOrder: number; mode: string; nOfM?: number | null; userIds: string[] }[];
};

export default function CompanyWorkflowsPage() {
  const params = useParams();
  const router = useRouter();
  const companyId = params.companyId as string;

  const [companyName, setCompanyName] = useState('');
  const [users, setUsers] = useState<CompanyUser[]>([]);
  const [workflows, setWorkflows] = useState<WorkflowListItem[]>([]);
  const [selectedWorkflowId, setSelectedWorkflowId] = useState<string | 'new'>('new');
  const [workflowName, setWorkflowName] = useState('');
  const [levels, setLevels] = useState<LevelDraft[]>([{ mode: 'SINGLE', nOfM: 1, userIds: [] }]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<{ type: 'ok' | 'err'; msg: string } | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const [c, wfs] = await Promise.all([
        adminService.getCompany(companyId),
        adminService.listCompanyWorkflows(companyId),
      ]);
      setCompanyName(c.name);
      setUsers(
        (c.personnel || []).map((p: { id: string; fullName: string; email: string; mobile: string | null }) => ({
          id: p.id,
          fullName: p.fullName,
          email: p.email,
          mobile: p.mobile,
        })),
      );
      setWorkflows(wfs);
    } catch (e) {
      console.error(e);
      setToast({ type: 'err', msg: 'Failed to load workflows' });
    } finally {
      setLoading(false);
    }
  }, [companyId]);

  useEffect(() => {
    load();
  }, [load]);

  useEffect(() => {
    if (selectedWorkflowId === 'new') {
      setWorkflowName('');
      setLevels([{ mode: 'SINGLE', nOfM: 1, userIds: [] }]);
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
      })),
    );
  }, [selectedWorkflowId, workflows]);

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
    setLevels((prev) => [...prev, { mode: 'SINGLE', nOfM: 1, userIds: [] }]);
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

  const save = async () => {
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
        })),
      };
      if (selectedWorkflowId === 'new') {
        const created = await adminService.createWorkflow(companyId, payload);
        setToast({ type: 'ok', msg: 'Workflow created' });
        setSelectedWorkflowId(created.id);
        await load();
      } else {
        await adminService.updateWorkflow(selectedWorkflowId, payload);
        setToast({ type: 'ok', msg: 'Workflow saved' });
        await load();
      }
    } catch (e: unknown) {
      const msg =
        e && typeof e === 'object' && 'response' in e
          ? (e as { response?: { data?: { error?: string } } }).response?.data?.error
          : null;
      setToast({ type: 'err', msg: msg || 'Save failed' });
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
      await load();
    } catch {
      setToast({ type: 'err', msg: 'Delete failed' });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full text-[var(--text-tertiary)] text-sm">
        Loading…
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full overflow-hidden bg-[var(--bg-primary)]">
      <header className="px-6 py-3 border-b border-[var(--border-secondary)] bg-[var(--bg-secondary)] flex justify-between items-center shrink-0 h-[60px]">
        <div className="flex items-center gap-3 text-sm">
          <Link href="/companies" className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)]">
            Companies
          </Link>
          <span className="text-[var(--text-muted)]">/</span>
          <span className="font-medium text-[var(--text-primary)] truncate max-w-[200px]">{companyName}</span>
          <span className="text-[var(--text-muted)]">/</span>
          <span className="text-[var(--text-tertiary)]">Workflows</span>
        </div>
        <button
          type="button"
          onClick={() => router.push('/companies')}
          className="text-[13px] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
        >
          Back to list
        </button>
      </header>

      <div className="flex-1 overflow-auto p-6 max-w-3xl mx-auto w-full space-y-6">
        {toast && (
          <div
            className={`text-sm px-4 py-2 rounded-[var(--radius-md)] border ${
              toast.type === 'ok'
                ? 'border-[var(--success)]/30 bg-[var(--success-bg)] text-[var(--success)]'
                : 'border-[var(--error)]/30 bg-[var(--error-bg)] text-[var(--error)]'
            }`}
          >
            {toast.msg}
            <button type="button" className="ml-2 underline" onClick={() => setToast(null)}>
              Dismiss
            </button>
          </div>
        )}

        <div className="bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-[var(--radius-lg)] p-5 space-y-4">
          <div className="text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wide">Select workflow</div>
          <div className="flex flex-wrap gap-2 items-center">
            <select
              className="flex-1 min-w-[200px] bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] px-3 py-2 text-[13px]"
              value={selectedWorkflowId}
              onChange={(e) => setSelectedWorkflowId(e.target.value === 'new' ? 'new' : e.target.value)}
            >
              <option value="new">+ New workflow</option>
              {workflows.map((w) => (
                <option key={w.id} value={w.id}>
                  {w.name} ({w.id.slice(0, 8)}…)
                </option>
              ))}
            </select>
            {selectedWorkflowId !== 'new' && (
              <button
                type="button"
                onClick={deleteWf}
                className="px-3 py-2 text-[13px] rounded-[var(--radius-md)] border border-[var(--error)]/40 text-[var(--error)] hover:bg-[var(--error-bg)]"
              >
                Delete
              </button>
            )}
          </div>
          <p className="text-[12px] text-[var(--text-tertiary)]">
            Workflow ID for integration:{' '}
            <code className="font-mono text-[var(--accent)]">
              {selectedWorkflowId === 'new' ? '(save to generate)' : selectedWorkflowId}
            </code>
          </p>
        </div>

        <div className="bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-[var(--radius-lg)] p-5 space-y-4">
          <label className="block">
            <span className="text-[12px] text-[var(--text-secondary)]">Workflow name</span>
            <input
              className="mt-1 w-full bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] px-3 py-2 text-[13px] outline-none focus:border-[var(--accent)]"
              value={workflowName}
              onChange={(e) => setWorkflowName(e.target.value)}
              placeholder="e.g. High-value transfer approval"
            />
          </label>

          <div className="flex justify-between items-center">
            <span className="text-[var(--text-primary)] font-medium text-[14px]">Approval levels</span>
            <button type="button" onClick={addLevel} className="text-[12px] text-[var(--accent)] hover:underline">
              + Add level
            </button>
          </div>

          {users.length === 0 && (
            <div className="text-[13px] text-[var(--warning)] border border-[var(--warning)]/30 rounded-[var(--radius-md)] p-3 bg-[var(--warning-bg)]/20">
              Add company users (email) on the company screen first. Assignees must be users linked to this company.
            </div>
          )}

          <div className="space-y-4">
            {levels.map((lv, li) => (
              <div
                key={`${selectedWorkflowId}-lvl-${li}-${lv.mode}-${lv.userIds.join(',')}`}
                className="border border-[var(--border-primary)] rounded-[var(--radius-md)] p-4 bg-[var(--bg-tertiary)]/50"
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[12px] font-semibold text-[var(--text-secondary)]">Level {li + 1}</span>
                  {levels.length > 1 && (
                    <button type="button" onClick={() => removeLevel(li)} className="text-[12px] text-[var(--error)]">
                      Remove
                    </button>
                  )}
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {MODE_OPTIONS.map((m) => (
                    <button
                      key={m.value}
                      type="button"
                      onClick={() => setMode(li, m.value)}
                      className={`px-3 py-1.5 rounded-full text-[12px] font-medium border transition-colors ${
                        lv.mode === m.value
                          ? 'border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)]'
                          : 'border-[var(--border-primary)] text-[var(--text-tertiary)] hover:border-[var(--border-secondary)]'
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
                {lv.mode === 'MULTIPLE_N_OF_M' && (
                  <div className="mb-3 flex items-center gap-2 text-[13px]">
                    <span className="text-[var(--text-secondary)]">Require</span>
                    <input
                      type="number"
                      min={1}
                      max={lv.userIds.length || 99}
                      className="w-14 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] px-2 py-1 text-center font-mono text-[12px]"
                      value={lv.nOfM === '' ? '' : lv.nOfM}
                      onChange={(e) => {
                        const v = e.target.value === '' ? '' : Number.parseInt(e.target.value, 10);
                        setLevels((prev) => {
                          const next = [...prev];
                          next[li] = { ...next[li], nOfM: v === '' ? '' : v };
                          return next;
                        });
                      }}
                    />
                    <span className="text-[var(--text-tertiary)]">of {lv.userIds.length} selected</span>
                  </div>
                )}
                <div className="text-[11px] text-[var(--text-tertiary)] mb-2">Assignees (company users)</div>
                <div className="flex flex-wrap gap-2">
                  {users.map((u) => (
                    <button
                      key={u.id}
                      type="button"
                      onClick={() => toggleUser(li, u.id)}
                      className={`px-3 py-1.5 rounded-[var(--radius-md)] text-[12px] border ${
                        lv.userIds.includes(u.id)
                          ? 'border-[var(--accent)] bg-[var(--accent)]/15 text-[var(--text-primary)]'
                          : 'border-[var(--border-primary)] text-[var(--text-secondary)] hover:bg-[var(--bg-hover)]'
                      }`}
                    >
                      {u.fullName}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            disabled={saving}
            onClick={save}
            className="w-full sm:w-auto px-5 py-2.5 rounded-[var(--radius-md)] bg-[var(--accent)] text-white text-[13px] font-medium hover:bg-[var(--accent-hover)] disabled:opacity-50"
          >
            {saving ? 'Saving…' : 'Save workflow'}
          </button>
        </div>
      </div>
    </div>
  );
}
