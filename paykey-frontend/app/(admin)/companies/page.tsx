'use client';

import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { DataTable } from '@/components/ui/DataTable';
import { Modal } from '@/components/ui/Modal';
import { SlideOver } from '@/components/ui/SlideOver';
import { adminService } from '@/services/adminService';

const INDUSTRIES = [
  { value: '', label: 'All industries' },
  { value: 'fintech', label: 'Fintech' },
  { value: 'banking', label: 'Banking' },
  { value: 'ecommerce', label: 'E-Commerce' },
  { value: 'technology', label: 'Technology' },
  { value: 'retail', label: 'Retail' },
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'manufacturing', label: 'Manufacturing' },
  { value: 'other', label: 'Other' },
];

const STATUSES = [
  { value: 'active', label: 'Active', color: 'bg-[var(--success-muted)] text-[var(--success)]' },
  { value: 'pending', label: 'Pending', color: 'bg-[var(--warning-muted)] text-[var(--warning)]' },
  { value: 'suspended', label: 'Suspended', color: 'bg-[var(--error-muted)] text-[var(--error)]' },
];

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
  const [items, setItems] = useState<CompanyRow[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [industry, setIndustry] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [modal, setModal] = useState<'add' | 'edit' | 'delete' | null>(null);
  const [viewing, setViewing] = useState<CompanyRow | null>(null);
  const [detail, setDetail] = useState<{
    personnel: { id: string; fullName: string; email: string; mobile: string | null; hasRegistered: boolean }[];
  } | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const [formName, setFormName] = useState('');
  const [formReg, setFormReg] = useState('');
  const [formAddress, setFormAddress] = useState('');
  const [formIndustry, setFormIndustry] = useState('fintech');
  const [formStatus, setFormStatus] = useState('active');
  const [personnel, setPersonnel] = useState<PersonnelRow[]>([]);

  const [toast, setToast] = useState<{ type: 'ok' | 'err'; msg: string } | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await adminService.getCompanies({
        search: search || undefined,
        industry: industry || undefined,
        page: currentPage,
        pageSize: itemsPerPage,
      });
      setItems(res.items || []);
      setTotal(res.total ?? 0);
    } catch (e) {
      console.error(e);
      setToast({ type: 'err', msg: 'Failed to load companies' });
    } finally {
      setLoading(false);
    }
  }, [search, industry, currentPage]);

  useEffect(() => {
    load();
  }, [load]);

  const totalPages = Math.max(1, Math.ceil(total / itemsPerPage) || 1);

  const openAdd = () => {
    setModal('add');
    setFormName('');
    setFormReg('');
    setFormAddress('');
    setFormIndustry('fintech');
    setFormStatus('active');
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
      setFormStatus(c.status || 'active');
      setPersonnel(
        (c.personnel || []).map((p: { fullName: string; email: string; mobile: string | null }) => ({
          fullName: p.fullName,
          email: p.email,
          mobile: p.mobile || '',
        })),
      );
      setModal('edit');
    } catch {
      setToast({ type: 'err', msg: 'Failed to load company' });
    }
  };

  const openView = async (row: CompanyRow) => {
    setViewing(row);
    setDetail(null);
    try {
      const c = await adminService.getCompany(row.id);
      setDetail({
        personnel: c.personnel || [],
      });
    } catch {
      setToast({ type: 'err', msg: 'Failed to load details' });
    }
  };

  const saveCompany = async () => {
    if (!formName.trim() || !formReg.trim() || !formAddress.trim() || !formIndustry) {
      setToast({ type: 'err', msg: 'Fill all required fields' });
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
      if (modal === 'add') {
        await adminService.createCompany(payload);
        setToast({ type: 'ok', msg: 'Company created' });
      } else if (modal === 'edit' && selectedId) {
        await adminService.updateCompany(selectedId, payload);
        setToast({ type: 'ok', msg: 'Company updated' });
      }
      setModal(null);
      load();
    } catch (e: unknown) {
      const msg = e && typeof e === 'object' && 'response' in e ? (e as { response?: { data?: { error?: string } } }).response?.data?.error : null;
      setToast({ type: 'err', msg: msg || 'Save failed' });
    }
  };

  const confirmDelete = async () => {
    if (!selectedId) return;
    try {
      await adminService.deleteCompany(selectedId);
      setToast({ type: 'ok', msg: 'Company deleted' });
      setModal(null);
      setViewing(null);
      load();
    } catch {
      setToast({ type: 'err', msg: 'Delete failed' });
    }
  };

  const addPersonRow = () => setPersonnel([...personnel, { fullName: '', email: '', mobile: '' }]);
  const updatePerson = (i: number, field: keyof PersonnelRow, v: string) => {
    const next = [...personnel];
    next[i] = { ...next[i], [field]: v };
    setPersonnel(next);
  };
  const removePerson = (i: number) => setPersonnel(personnel.filter((_, j) => j !== i));

  return (
    <div className="flex flex-col h-full overflow-hidden bg-[var(--bg-primary)]">
      <header className="px-6 py-3 border-b border-[var(--border-secondary)] bg-[var(--bg-secondary)] flex justify-between items-center shrink-0 h-[60px]">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-[var(--text-tertiary)]">Management</span>
          <span className="text-[var(--text-muted)]">/</span>
          <span className="font-medium text-[var(--text-primary)]">Companies</span>
        </div>
        <button
          type="button"
          onClick={openAdd}
          className="flex items-center gap-2 px-3.5 py-2 rounded-[var(--radius-md)] text-[13px] font-medium bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-all"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <title>Add</title>
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          Add company
        </button>
      </header>

      <div className="flex-1 overflow-auto p-6 flex flex-col gap-5">
        {toast && (
          <div
            className={`text-sm px-4 py-2 rounded-[var(--radius-md)] border ${toast.type === 'ok'
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

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] px-3 py-2 min-w-[280px] flex-1 max-w-md">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--text-tertiary)] shrink-0" aria-hidden>
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
              <option key={o.value || 'all'} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          <button
            type="button"
            onClick={() => load()}
            className="px-3.5 py-2 rounded-[var(--radius-md)] text-[13px] font-medium bg-[var(--bg-tertiary)] border border-[var(--border-primary)] text-[var(--text-primary)] hover:bg-[var(--bg-hover)]"
          >
            Refresh
          </button>
        </div>

        <DataTable
          columns={[
            { header: 'Company', className: 'pl-5' },
            { header: 'Industry' },
            { header: 'Address' },
            { header: 'Personnel' },
            { header: 'Status' },
            { header: 'Created' },
            { header: '', className: 'text-right pr-5' },
          ]}
          data={items.map((c) => ({ ...c, id: c.id }))}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          totalItems={total}
          itemsPerPage={itemsPerPage}
          isLoading={loading}
          renderRow={(row) => (
            <tr key={row.id} className="border-b border-[var(--border-secondary)] hover:bg-[var(--bg-hover)]/50">
              <td className="px-4 py-3 pl-5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-[var(--radius-md)] bg-[var(--bg-tertiary)] flex items-center justify-center text-[12px] font-semibold text-[var(--text-secondary)]">
                    {row.name
                      .split(' ')
                      .slice(0, 2)
                      .map((w) => w[0])
                      .join('')
                      .toUpperCase()}
                  </div>
                  <div>
                    <div className="text-[13px] font-medium text-[var(--text-primary)]">{row.name}</div>
                    <div className="text-[11px] font-mono text-[var(--text-tertiary)]">{row.registrationNo}</div>
                  </div>
                </div>
              </td>
              <td className="px-4 py-3">
                <span className="text-[12px] px-2.5 py-1 rounded-full bg-[var(--bg-tertiary)] text-[var(--text-secondary)]">
                  {formatIndustry(row.industry)}
                </span>
              </td>
              <td className="px-4 py-3">
                <span className="text-[12px] text-[var(--text-secondary)] line-clamp-2 max-w-[220px]">{row.address}</span>
              </td>
              <td className="px-4 py-3 text-[13px] text-[var(--text-primary)]">{row.personnelCount}</td>
              <td className="px-4 py-3">
                <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${STATUSES.find(s => s.value === row.status)?.color || 'bg-[var(--bg-tertiary)] text-[var(--text-tertiary)]'}`}>
                  {formatStatus(row.status)}
                </span>
              </td>
              <td className="px-4 py-3 text-[12px] text-[var(--text-tertiary)]">
                {new Date(row.createdAt).toLocaleDateString('en-MY', { year: 'numeric', month: 'short', day: 'numeric' })}
              </td>
              <td className="px-4 py-3 pr-5 text-right">
                <div className="inline-flex items-center gap-1 justify-end">
                  <button
                    type="button"
                    title="View"
                    onClick={() => openView(row)}
                    className="w-8 h-8 rounded-[var(--radius-sm)] bg-[var(--bg-tertiary)] border border-[var(--border-primary)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)]"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                      <title>View</title>
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    title="Edit"
                    onClick={() => openEdit(row)}
                    className="w-8 h-8 rounded-[var(--radius-sm)] bg-[var(--bg-tertiary)] border border-[var(--border-primary)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] hover:bg-[var(--bg-hover)]"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                      <title>Edit</title>
                      <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                      <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    title="Workflows"
                    onClick={() => router.push(`/workflows?companyId=${row.id}`)}
                    className="w-8 h-8 rounded-[var(--radius-sm)] bg-[var(--bg-tertiary)] border border-[var(--border-primary)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)]"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                      <title>Workflow</title>
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    title="Delete"
                    onClick={() => {
                      setSelectedId(row.id);
                      setModal('delete');
                    }}
                    className="w-8 h-8 rounded-[var(--radius-sm)] bg-[var(--bg-tertiary)] border border-[var(--border-primary)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--error)] hover:border-[var(--error)]"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
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

      <SlideOver
        isOpen={!!viewing}
        onClose={() => {
          setViewing(null);
          setDetail(null);
        }}
        title="Company details"
        footer={
          <div className="flex gap-2 w-full justify-end">
            <button
              type="button"
              onClick={() => {
                setViewing(null);
                setDetail(null);
              }}
              className="px-4 py-2 rounded-[var(--radius-md)] border border-[var(--border-primary)] text-[13px] text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)]"
            >
              Close
            </button>
            {viewing && (
              <button
                type="button"
                onClick={() => {
                  const r = viewing;
                  setViewing(null);
                  openEdit(r);
                }}
                className="px-4 py-2 rounded-[var(--radius-md)] bg-[var(--accent)] text-white text-[13px] hover:bg-[var(--accent-hover)]"
              >
                Edit company
              </button>
            )}
          </div>
        }
      >
        {viewing && (
          <div className="space-y-6">
            <div>
              <div className="text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wide mb-3">Company</div>
              <div className="space-y-2 text-[13px]">
                <div className="flex justify-between gap-4">
                  <span className="text-[var(--text-tertiary)]">Name</span>
                  <span className="text-[var(--text-primary)] font-medium text-right">{viewing.name}</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-[var(--text-tertiary)]">Registration</span>
                  <span className="font-mono text-[var(--text-primary)] text-right">{viewing.registrationNo}</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-[var(--text-tertiary)]">Industry</span>
                  <span className="text-[var(--text-primary)] text-right">{formatIndustry(viewing.industry)}</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-[var(--text-tertiary)]">Status</span>
                  <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${STATUSES.find(s => s.value === viewing.status)?.color || 'bg-[var(--bg-tertiary)] text-[var(--text-tertiary)]'}`}>
                    {formatStatus(viewing.status)}
                  </span>
                </div>
                <div className="pt-2">
                  <span className="text-[var(--text-tertiary)] block mb-1">Address</span>
                  <span className="text-[var(--text-primary)]">{viewing.address}</span>
                </div>
              </div>
            </div>
            <div>
              <div className="text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wide mb-3">
                Personnel ({detail?.personnel?.length ?? '…'})
              </div>
              {!detail ? (
                <div className="text-[var(--text-tertiary)] text-sm">Loading…</div>
              ) : detail.personnel.length === 0 ? (
                <div className="text-[var(--text-tertiary)] text-sm">No users linked yet.</div>
              ) : (
                <div className="space-y-2">
                  {detail.personnel.map((p) => (
                    <div key={p.id} className="p-3 rounded-[var(--radius-md)] bg-[var(--bg-tertiary)] border border-[var(--border-primary)]">
                      <div className="text-[13px] font-medium text-[var(--text-primary)]">{p.fullName}</div>
                      <div className="text-[12px] text-[var(--text-secondary)]">{p.email}</div>
                      <div className="text-[12px] text-[var(--text-tertiary)]">{p.mobile || '—'}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </SlideOver>

      {(modal === 'add' || modal === 'edit') && (
        <div className="fixed inset-0 z-[1001] flex items-center justify-center font-sans p-4">
          <button
            type="button"
            className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-default border-0 p-0"
            aria-label="Close dialog"
            onClick={() => setModal(null)}
          />
          <div className="relative bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-lg)] w-full max-w-lg max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
            <div className="p-5 border-b border-[var(--border-secondary)] flex justify-between items-center shrink-0">
              <h3 className="text-base font-semibold text-[var(--text-primary)]">{modal === 'add' ? 'Add company' : 'Edit company'}</h3>
              <button type="button" onClick={() => setModal(null)} className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <title>Close</title>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <div className="p-5 overflow-y-auto flex-1 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label className="flex flex-col gap-1">
                  <span className="text-[12px] text-[var(--text-secondary)]">Company name *</span>
                  <input
                    className="bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] px-3 py-2 text-[13px] outline-none focus:border-[var(--accent)]"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                  />
                </label>
                <label className="flex flex-col gap-1">
                  <span className="text-[12px] text-[var(--text-secondary)]">Registration no *</span>
                  <input
                    className="bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] px-3 py-2 text-[13px] outline-none focus:border-[var(--accent)] font-mono"
                    value={formReg}
                    onChange={(e) => setFormReg(e.target.value)}
                  />
                </label>
              </div>
              <label className="flex flex-col gap-1">
                <span className="text-[12px] text-[var(--text-secondary)]">Registered address *</span>
                <textarea
                  rows={3}
                  className="bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] px-3 py-2 text-[13px] outline-none focus:border-[var(--accent)] resize-y"
                  value={formAddress}
                  onChange={(e) => setFormAddress(e.target.value)}
                />
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label className="flex flex-col gap-1">
                  <span className="text-[12px] text-[var(--text-secondary)]">Industry *</span>
                  <select
                    className="bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] px-3 py-2 text-[13px] outline-none"
                    value={formIndustry}
                    onChange={(e) => setFormIndustry(e.target.value)}
                  >
                    {INDUSTRIES.filter((o) => o.value).map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="flex flex-col gap-1">
                  <span className="text-[12px] text-[var(--text-secondary)]">Status</span>
                  <select
                    className="bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] px-3 py-2 text-[13px] outline-none"
                    value={formStatus}
                    onChange={(e) => setFormStatus(e.target.value)}
                  >
                    {STATUSES.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[12px] font-medium text-[var(--text-secondary)]">Company users (linked via email)</span>
                  <button type="button" onClick={addPersonRow} className="text-[12px] text-[var(--accent)] hover:underline">
                    + Add person
                  </button>
                </div>
                <p className="text-[11px] text-[var(--text-tertiary)] mb-2">
                  Creates or links user records with this company. They can complete registration later with the same email.
                </p>
                <div className="space-y-2">
                  {personnel.map((p, i) => (
                    <div key={`${p.email || 'row'}-${i}`} className="grid grid-cols-5 gap-2 items-end">
                      <input
                        placeholder="Name"
                        className="col-span-2 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] px-2 py-1.5 text-[12px]"
                        value={p.fullName}
                        onChange={(e) => updatePerson(i, 'fullName', e.target.value)}
                      />
                      <input
                        placeholder="Email"
                        className="col-span-2 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] px-2 py-1.5 text-[12px]"
                        value={p.email}
                        onChange={(e) => updatePerson(i, 'email', e.target.value)}
                      />
                      <div className="flex gap-1">
                        <input
                          placeholder="Phone"
                          className="flex-1 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] px-2 py-1.5 text-[12px]"
                          value={p.mobile}
                          onChange={(e) => updatePerson(i, 'mobile', e.target.value)}
                        />
                        <button type="button" onClick={() => removePerson(i)} className="text-[var(--error)] px-1.5 text-lg leading-none">
                          ×
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-[var(--border-secondary)] flex justify-end gap-2 bg-[var(--bg-elevated)]">
              <button type="button" onClick={() => setModal(null)} className="px-4 py-2 rounded-[var(--radius-md)] border border-[var(--border-primary)] text-[13px]">
                Cancel
              </button>
              <button type="button" onClick={saveCompany} className="px-4 py-2 rounded-[var(--radius-md)] bg-[var(--accent)] text-white text-[13px] hover:bg-[var(--accent-hover)]">
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      <Modal
        isOpen={modal === 'delete'}
        onClose={() => setModal(null)}
        title="Delete company?"
        type="danger"
        footer={
          <>
            <button type="button" onClick={() => setModal(null)} className="px-4 py-2 rounded-[var(--radius-md)] border border-[var(--border-primary)] text-[13px]">
              Cancel
            </button>
            <button type="button" onClick={confirmDelete} className="px-4 py-2 rounded-[var(--radius-md)] bg-[var(--error)] text-white text-[13px]">
              Delete
            </button>
          </>
        }
      >
        <p>This removes the company and its approval workflows. Users stay in the system; their company link is cleared.</p>
      </Modal>
    </div>
  );
}
