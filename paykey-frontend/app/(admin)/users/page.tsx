
'use client';

import { useState, useEffect, useMemo, Fragment } from 'react';
import { userService, User, Device } from '@/services/userService';
import { useSearchParams } from 'next/navigation';
import { getRelativeTime } from '@/services/deviceService';

export default function UsersPage() {

  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const paramUserId = searchParams.get('userId');

  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalAction, setModalAction] = useState<'suspend' | 'reactivate' | null>(null);
  const [actionUser, setActionUser] = useState<User | null>(null);

  const [suspendReason, setSuspendReason] = useState('');
  const [suspendNote, setSuspendNote] = useState('');

  const icons = {
    mobile: (
      <>
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </>
    ),
    desktop: (
      <>
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </>
    ),
    hardware: (
      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
    )
  };

  const loadUsers = async () => {
    setLoading(true);
    try {
      const data = await userService.getAll();
      setUsers(data);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const filteredUsers = useMemo(() => {
    return users.filter(user => {
      const matchesSearch =
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.mobile.includes(searchQuery);

      const matchesFilter = statusFilter ? user.status === statusFilter : true;

      return matchesSearch && matchesFilter;
    });
  }, [users, searchQuery, statusFilter]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, statusFilter]);

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleStatusChange = async () => {
    if (!actionUser || !modalAction) return;

    const newStatus = modalAction === 'suspend' ? 'suspended' : 'active';
    const reason = modalAction === 'suspend' ? suspendReason : null;
    const note = modalAction === 'suspend' ? suspendNote : null;

    try {
      await userService.updateStatus(actionUser.id, newStatus, reason, note);
      setUsers(prev => prev.map(u =>
        u.id === actionUser.id ? { ...u, status: newStatus } : u
      ));

      if (selectedUser?.id === actionUser.id) {
        setSelectedUser(prev => prev ? { ...prev, status: newStatus } : null);
      }
      closeModal();
    } catch (error) {
      alert("Gagal mengubah status user. Silakan coba lagi.");
    }
  };

  const toggleExpand = (id: string) => {
    const newRows = new Set(expandedRows);
    if (newRows.has(id)) newRows.delete(id);
    else newRows.add(id);
    setExpandedRows(newRows);
  };

  const openModal = (action: 'suspend' | 'reactivate', user: User) => {
    setActionUser(user);
    setModalAction(action);
    setSuspendReason('');
    setSuspendNote('');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalAction(null);
    setActionUser(null);
  };

  useEffect(() => {
    if (paramUserId && users.length > 0) {
      setSelectedUser(users.find(user => user.id === paramUserId) || null);
    }
  }, [paramUserId, users])

  return (
    <div className="flex min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans text-[14px]">

      <main className="flex-1 flex flex-col overflow-hidden relative">
        {/* HEADER */}
        <header className="p-[12px_24px] border-b border-[var(--border-secondary)] flex items-center justify-between bg-[var(--bg-secondary)]">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-[var(--text-tertiary)]">Management</span>
            <span className="text-[var(--text-tertiary)]">/</span>
            <span className="font-medium text-[var(--text-primary)]">Users</span>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-1.5 px-[14px] py-[8px] bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[6px] text-[13px] font-medium text-[var(--text-primary)] hover:bg-[var(--bg-hover)] transition-all cursor-pointer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7,10 12,15 17,10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
              Export
            </button>
            <button className="flex items-center gap-1.5 px-[14px] py-[8px] bg-[var(--accent)] rounded-[6px] text-[13px] font-medium text-white hover:bg-[#0f70d4] transition-all cursor-pointer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line x1="20" y1="8" x2="20" y2="14" /><line x1="23" y1="11" x2="17" y2="11" /></svg>
              Add User
            </button>
          </div>
        </header>

        {/* CONTENT AREA */}
        <div className="flex-1 overflow-auto p-6">
          {/* STATS BAR */}
          <div className="grid grid-cols-4 gap-3 mb-5">
            <StatCard
              label="Total Users"
              value={users.length}
              icon={
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
                </svg>
              }
            />
            <StatCard
              label="Active"
              value={users.filter(u => u.status === 'active').length}
              color="text-[var(--success)]"
              icon={
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              }
            />
            <StatCard
              label="Suspended"
              value={users.filter(u => u.status === 'suspended').length}
              color="text-[var(--warning)]"
              icon={
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              }
            />
            <StatCard
              label="Total Devices"
              value={users.reduce((acc, u) => acc + u.devices.length, 0)}
              icon={
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                </svg>
              }
            />
          </div>

          {/* TOOLBAR */}
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <div className="flex items-center gap-2 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[6px] px-[12px] py-[8px] min-w-[300px]">
              <svg className="w-4 h-4 text-[var(--text-tertiary)] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
              <input
                type="text"
                placeholder="Search by name, email, or mobile..."
                className="flex-1 bg-transparent border-none outline-none text-[13px] text-[var(--text-primary)] placeholder-[var(--text-tertiary)] font-sans"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <select
              className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[6px] px-[12px] py-[8px] text-[13px] text-[var(--text-primary)] cursor-pointer outline-none font-sans"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="">All Status</option>
              <option value="active">Active</option>
              <option value="suspended">Suspended</option>
            </select>
          </div>

          {/* TABLE */}
          <div className="bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-[8px] overflow-hidden">
            <table className="w-full border-collapse">
              <thead className="bg-[var(--bg-tertiary)] border-b border-[var(--border-secondary)]">
                <tr>
                  <th className="p-[12px_16px] text-left text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-[0.5px] w-[44px]"></th>
                  <th className="p-[12px_16px] text-left text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-[0.5px]">User</th>
                  <th className="p-[12px_16px] text-left text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-[0.5px]">Mobile</th>
                  <th className="p-[12px_16px] text-left text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-[0.5px]">Email</th>
                  <th className="p-[12px_16px] text-left text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-[0.5px]">Devices</th>
                  <th className="p-[12px_16px] text-left text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-[0.5px]">Status</th>
                  <th className="p-[12px_16px] text-right text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-[0.5px]">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-[var(--bg-secondary)]">
                {paginatedUsers.map(user => (
                  <Fragment key={user.id}>
                    <tr
                      className={`border-b border-[var(--border-secondary)] transition-colors hover:bg-[var(--bg-tertiary)] cursor-pointer 
                        ${expandedRows.has(user.id) ? 'bg-[var(--bg-tertiary)]' : ''} 
                        ${user.status === 'suspended' ? 'opacity-70' : ''}`}
                      onClick={() => toggleExpand(user.id)}
                    >
                      <td className="p-0 border-b border-[var(--border-secondary)]">
                        <div className="flex items-center justify-center h-full py-[14px]">
                          <button className="w-7 h-7 flex items-center justify-center rounded-[4px] text-[var(--text-tertiary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] transition-colors bg-transparent border-none cursor-pointer">
                            <svg className={`w-4 h-4 transition-transform duration-200 ${expandedRows.has(user.id) ? 'rotate-90' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
                          </button>
                        </div>
                      </td>
                      <td className="p-[0] border-b border-[var(--border-secondary)]">
                        <div className="p-[14px_16px] grid grid-cols-[44px_1fr] items-center gap-0">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--purple)] flex items-center justify-center text-[14px] font-bold text-white shrink-0 mr-3">
                            {user.initials}
                          </div>
                          <div className="min-w-0">
                            <div className={`font-medium mb-[2px] ${user.status === 'suspended' ? 'line-through' : ''}`}>{user.email}</div>
                            <div className="text-[11px] text-[var(--text-tertiary)] font-mono">{user.id}</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-[14px_16px] border-b border-[var(--border-secondary)] align-top">
                        <div className="text-[13px] text-[var(--text-secondary)] flex items-center gap-1.5 mt-2">
                          <svg className="w-3 h-3 text-[var(--text-tertiary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                          {user.mobile}
                        </div>
                      </td>
                      <td className="p-[14px_16px] border-b border-[var(--border-secondary)] text-[12px] text-[var(--text-tertiary)] align-top pt-[22px]">{user.email}</td>
                      <td className="p-[14px_16px] border-b border-[var(--border-secondary)] align-top pt-[18px]">
                        <span className="inline-flex items-center gap-[6px] p-[4px_10px] bg-[var(--bg-tertiary)] rounded-[12px] text-[12px] font-medium text-[var(--text-primary)]">
                          <svg className="w-[14px] h-[14px] text-[var(--text-tertiary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /></svg>
                          {user.devices.length} {user.devices.length !== 1 ? 'devices' : 'device'}
                        </span>
                      </td>
                      <td className="p-[14px_16px] border-b border-[var(--border-secondary)] align-top pt-[18px]">
                        <span className={`inline-flex items-center p-[5px_12px] rounded-[12px] text-[12px] font-medium whitespace-nowrap 
                          ${user.status === 'active' ? 'bg-[var(--success-bg)] text-[var(--success)]' : 'bg-[var(--warning-bg)] text-[var(--warning)]'}`}>
                          {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                        </span>
                      </td>
                      <td className="p-[14px_16px] border-b border-[var(--border-secondary)] text-right align-top pt-[16px]">
                        <div className="flex items-center justify-end gap-[6px]" onClick={(e) => e.stopPropagation()}>
                          {user.status === 'active' ? (
                            <button
                              className="inline-flex items-center gap-[6px] p-[8px_14px] rounded-[6px] text-[13px] font-medium border border-none bg-[var(--warning)] text-black cursor-pointer transition-all hover:opacity-90 btn-sm"
                              onClick={() => openModal('suspend', user)}
                              style={{ fontSize: '12px', padding: '5px 10px' }}
                            >
                              Suspend
                            </button>
                          ) : (
                            <button
                              className="inline-flex items-center gap-[6px] p-[8px_14px] rounded-[6px] text-[13px] font-medium border border-none bg-[var(--accent)] text-white cursor-pointer transition-all hover:bg-[var(--accent-hover)] btn-sm"
                              onClick={() => openModal('reactivate', user)}
                              style={{ fontSize: '12px', padding: '5px 10px' }}
                            >
                              Reactivate
                            </button>
                          )}
                          <button
                            className="inline-flex items-center gap-[6px] p-[8px_14px] rounded-[6px] text-[13px] font-medium border border-[var(--border-primary)] bg-[var(--bg-tertiary)] text-[var(--text-primary)] cursor-pointer transition-all hover:bg-[var(--bg-hover)] btn-sm"
                            onClick={() => setSelectedUser(user)}
                            style={{ fontSize: '12px', padding: '5px 10px' }}
                          >
                            View
                          </button>
                        </div>
                      </td>
                    </tr>

                    {/* EXPANDED ROW (DEVICES) */}
                    {expandedRows.has(user.id) && (
                      <tr className="devices-row">
                        <td colSpan={7} className="p-0 border-b border-[var(--border-secondary)]">
                          <div className="bg-[var(--bg-primary)] border-t border-[var(--border-secondary)] p-[16px_16px_16px_72px]">
                            <div className="flex items-center justify-between mb-[12px]">
                              <span className="text-[12px] font-semibold text-[var(--text-tertiary)] uppercase tracking-[0.5px] flex items-center gap-[8px]">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /></svg>
                                Registered Devices ({user.devices.length})
                              </span>
                              <button
                                className="p-[5px_10px] text-[12px] font-medium border border-[var(--border-primary)] bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:bg-[var(--bg-hover)] rounded-[6px] cursor-pointer"
                                onClick={() => setSelectedUser(user)}
                              >
                                Manage Devices
                              </button>
                            </div>
                            <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-[12px]">
                              {user.devices.map(dev => (
                                <div key={dev.id} className={`bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-[6px] p-[14px] flex gap-[12px] transition-all hover:border-[var(--border-primary)] ${dev.status === 'revoked' ? 'opacity-50' : ''}`}>
                                  <div className={`w-[36px] h-[36px] rounded-[6px] flex items-center justify-center shrink-0 
                                    ${dev.type === 'mobile' ? 'bg-[var(--info-bg)] text-[var(--info)]' : dev.type === 'desktop' ? 'bg-[var(--purple-bg)] text-[var(--purple)]' : 'bg-[var(--warning-bg)] text-[var(--warning)]'}`}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                      {icons[dev.type] || icons.mobile}
                                    </svg>
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className={`text-[13px] font-medium mb-[2px] ${dev.status === 'revoked' ? 'line-through' : ''}`}>{dev.name}</div>
                                    <div className="text-[11px] text-[var(--text-tertiary)] mb-[6px]">{dev.model}</div>
                                    <div className="flex items-center gap-[12px] text-[11px] text-[var(--text-tertiary)]">
                                      <span className={`p-[2px_8px] rounded-[10px] text-[10px] font-medium 
                                        ${dev.status === 'active' ? 'bg-[var(--success-bg)] text-[var(--success)]' :
                                          dev.status === 'suspended' ? 'bg-[var(--warning-bg)] text-[var(--warning)]' :
                                            'bg-[var(--error-bg)] text-[var(--error)]'}`}>
                                        {dev.status.charAt(0).toUpperCase() + dev.status.slice(1)}
                                      </span>
                                      <span>Last: {getRelativeTime(dev.lastUsed)}</span>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </Fragment>
                ))}
              </tbody>
            </table>

            {/* PAGINATION */}
            <div className="flex items-center justify-between p-[12px_16px] border-t border-[var(--border-secondary)] bg-[var(--bg-tertiary)]">
              <div className="text-[12px] text-[var(--text-tertiary)]">
                Showing {(currentPage - 1) * itemsPerPage + 1}-{Math.min(currentPage * itemsPerPage, filteredUsers.length)} of {filteredUsers.length} users
              </div>
              <div className="flex gap-[4px]">
                <button
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="w-[32px] h-[32px] flex items-center justify-center border border-[var(--border-primary)] rounded-[4px] bg-transparent text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] cursor-pointer text-[13px] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
                </button>

                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum = i + 1;
                  if (totalPages > 5 && currentPage > 3) pageNum = currentPage - 2 + i;
                  if (pageNum > totalPages) return null;

                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`w-[32px] h-[32px] flex items-center justify-center border rounded-[4px] cursor-pointer text-[13px]
                              ${currentPage === pageNum
                          ? 'bg-[var(--accent)] border-[var(--accent)] text-white'
                          : 'border-[var(--border-primary)] bg-transparent text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]'}`}
                    >
                      {pageNum}
                    </button>
                  );
                })}

                <button
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="w-[32px] h-[32px] flex items-center justify-center border border-[var(--border-primary)] rounded-[4px] bg-transparent text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] cursor-pointer text-[13px] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={`fixed inset-0 bg-[rgba(0,0,0,0.5)] z-[999] transition-all duration-300 ${selectedUser ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={() => setSelectedUser(null)} />
        <div className={`fixed top-0 right-0 w-[520px] h-screen bg-[var(--bg-secondary)] border-l border-[var(--border-primary)] z-[1000] flex flex-col transform transition-transform duration-300 ease-out ${selectedUser ? 'translate-x-0' : 'translate-x-full'}`}>
          {selectedUser && (
            <>
              <div className="p-[20px_24px] border-b border-[var(--border-secondary)] flex items-center justify-between shrink-0">
                <span className="text-[16px] font-semibold">User Details</span>
                <button className="w-[32px] h-[32px] bg-[var(--bg-tertiary)] border-none rounded-[6px] text-[var(--text-secondary)] cursor-pointer flex items-center justify-center hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]" onClick={() => setSelectedUser(null)}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-[24px]">
                <div className="flex items-center gap-[16px] p-[20px] bg-[var(--bg-tertiary)] rounded-[8px] mb-[24px]">
                  <div className="w-[64px] h-[64px] rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--purple)] flex items-center justify-center text-[20px] font-bold text-white">
                    {selectedUser.initials}
                  </div>
                  <div>
                    <div className="text-[18px] font-semibold mb-[4px]">{selectedUser.name}</div>
                    <div className="text-[12px] text-[var(--text-tertiary)] font-mono">{selectedUser.id}</div>
                  </div>
                </div>

                <div className="mb-[24px]">
                  <div className="text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-[0.5px] mb-[12px] flex items-center gap-[8px]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                    Account Information
                  </div>
                  <div className="grid grid-cols-2 gap-[16px]">
                    <div><div className="text-[11px] text-[var(--text-tertiary)] mb-[4px]">Status</div><span className={`inline-block p-[2px_10px] rounded-[10px] text-[12px] font-medium ${selectedUser.status === 'active' ? 'bg-[var(--success-bg)] text-[var(--success)]' : 'bg-[var(--warning-bg)] text-[var(--warning)]'}`} style={{ marginTop: '4px' }}>{selectedUser.status.charAt(0).toUpperCase() + selectedUser.status.slice(1)}</span></div>
                    <div><div className="text-[11px] text-[var(--text-tertiary)] mb-[4px]">Joined</div><div className="text-[13px] text-[var(--text-primary)]">{selectedUser.joined}</div></div>
                    <div><div className="text-[11px] text-[var(--text-tertiary)] mb-[4px]">Email</div><div className="text-[13px] text-[var(--text-primary)]">{selectedUser.email}</div></div>
                    <div><div className="text-[11px] text-[var(--text-tertiary)] mb-[4px]">Mobile</div><div className="text-[13px] text-[var(--text-primary)]">{selectedUser.mobile}</div></div>
                    <div><div className="text-[11px] text-[var(--text-tertiary)] mb-[4px]">Last Active</div><div className="text-[13px] text-[var(--text-primary)]">{getRelativeTime(selectedUser.lastActive)}</div></div>
                    <div><div className="text-[11px] text-[var(--text-tertiary)] mb-[4px]">Total Devices</div><div className="text-[13px] text-[var(--text-primary)]">{selectedUser.devices.length}</div></div>
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-[0.5px] mb-[12px] flex items-center gap-[8px]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                    </svg>
                    Registered Devices
                  </div>

                  {/* PERBAIKAN: Ubah 'flex flex-col' menjadi 'grid grid-cols-2' (atau lebih) agar menyamping */}
                  <div className="grid grid-cols-1 md:grid-cols-2  gap-[10px]">
                    {selectedUser.devices.map(dev => (
                      <div key={dev.id} className={`bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-[6px] p-[14px] flex gap-[12px] ${dev.status === 'revoked' ? 'opacity-50' : ''}`}>

                        {/* Icon Container */}
                        <div className={`w-[36px] h-[36px] rounded-[6px] flex items-center justify-center shrink-0 
                            ${dev.type === 'mobile' ? 'bg-[var(--info-bg)] text-[var(--info)]' :
                            dev.type === 'desktop' ? 'bg-[var(--purple-bg)] text-[var(--purple)]' :
                              'bg-[var(--warning-bg)] text-[var(--warning)]'}`}>

                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            {icons[dev.type as keyof typeof icons] || icons.mobile}
                          </svg>
                        </div>

                        {/* Device Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between">
                            <div className={`text-[13px] font-medium mb-[2px] truncate pr-2 ${dev.status === 'revoked' ? 'line-through' : ''}`}>
                              {dev.name}
                            </div>
                            <span className={`text-[10px] font-medium p-[2px_8px] rounded-[10px] shrink-0 ${dev.status === 'active' ? 'bg-[var(--success-bg)] text-[var(--success)]' : dev.status === 'suspended' ? 'bg-[var(--warning-bg)] text-[var(--warning)]' : 'bg-[var(--error-bg)] text-[var(--error)]'}`}>
                              {dev.status}
                            </span>
                          </div>
                          <div className="text-[11px] text-[var(--text-tertiary)] mb-[6px] truncate">
                            {dev.model}
                          </div>
                          <div className="text-[10px] text-[var(--text-tertiary)] mt-[1px]">
                            Last used: {getRelativeTime(dev.lastUsed)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-[16px_24px] border-t border-[var(--border-secondary)] flex justify-end gap-[12px] shrink-0">
                {selectedUser.status === 'active' ? (
                  <button className="p-[8px_14px] rounded-[6px] text-[13px] font-medium border-none bg-[var(--warning)] text-black cursor-pointer" onClick={() => openModal('suspend', selectedUser)}>Suspend Account</button>
                ) : (
                  <button className="p-[8px_14px] rounded-[6px] text-[13px] font-medium border-none bg-[var(--accent)] text-white cursor-pointer" onClick={() => openModal('reactivate', selectedUser)}>Reactivate Account</button>
                )}
              </div>
            </>
          )}
        </div>

        {/* --- MODAL SUSPEND/REACTIVATE (SAMA) --- */}
        <div className={`fixed inset-0 bg-[rgba(0,0,0,0.7)] flex items-center justify-center z-[1001] transition-all duration-200 ${isModalOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={closeModal}>
          <div className={`bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[12px] w-full max-w-[440px] transform transition-transform duration-200 ${isModalOpen ? 'scale-100' : 'scale-95'}`} onClick={e => e.stopPropagation()}>
            {actionUser && (
              <>
                <div className="p-[20px_24px] border-b border-[var(--border-secondary)] flex items-center justify-between">
                  <div className={`text-[16px] font-semibold flex items-center gap-[10px] ${modalAction === 'suspend' ? 'text-[var(--warning)]' : 'text-[var(--success)]'}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      {modalAction === 'suspend' ? (
                        <><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></>
                      ) : (
                        <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></>
                      )}
                    </svg>
                    {modalAction === 'suspend' ? 'Suspend User Account' : 'Reactivate User Account'}
                  </div>
                  <button className="w-[32px] h-[32px] bg-[var(--bg-tertiary)] border-none rounded-[6px] text-[var(--text-secondary)] cursor-pointer flex items-center justify-center" onClick={closeModal}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                  </button>
                </div>

                <div className="p-[24px]">
                  <div className={`flex gap-[12px] p-[14px_16px] rounded-[6px] mb-[16px] border ${modalAction === 'suspend' ? 'bg-[var(--warning-bg)] border-[rgba(251,191,36,0.3)]' : 'bg-[var(--success-bg)] border-[rgba(74,222,128,0.3)]'}`}>
                    <div className={`shrink-0 ${modalAction === 'suspend' ? 'text-[var(--warning)]' : 'text-[var(--success)]'}`}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        {modalAction === 'suspend' ? <><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /></> : <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></>}
                      </svg>
                    </div>
                    <div>
                      <div className={`text-[13px] font-bold mb-[2px] ${modalAction === 'suspend' ? 'text-[var(--warning)]' : 'text-[var(--success)]'}`}>
                        {modalAction === 'suspend' ? 'This will disable all user access' : 'Restore user access'}
                      </div>
                      <div className="text-[12px] text-[var(--text-secondary)]">
                        {modalAction === 'suspend' ? 'The user will not be able to authenticate or approve any transactions until reactivated.' : 'The user will regain access to authenticate and approve transactions.'}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-[12px] p-[12px] bg-[var(--bg-tertiary)] rounded-[6px] mb-[16px]">
                    <div className="w-[40px] h-[40px] rounded-full bg-[var(--accent)] flex items-center justify-center text-[14px] font-bold text-white">
                      {actionUser.initials}
                    </div>
                    <div>
                      <div className="text-[14px] font-medium">{actionUser.name}</div>
                      <div className="text-[12px] text-[var(--text-tertiary)]">{actionUser.email}</div>
                    </div>
                  </div>

                  {modalAction === 'suspend' && (
                    <>
                      <div className="mb-[16px]">
                        <label className="block text-[12px] font-medium text-[var(--text-secondary)] mb-[6px]">Reason for Suspension</label>
                        <select
                          className="w-full p-[10px_12px] bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[6px] text-[13px] text-[var(--text-primary)] font-sans outline-none"
                          value={suspendReason}
                          onChange={(e) => setSuspendReason(e.target.value)}
                        >
                          <option value="">Select reason...</option>
                          <option value="Security concern">Security concern</option>
                          <option value="Fraudulent activity">Fraudulent activity</option>
                          <option value="User request">User request</option>
                          <option value="Policy violation">Policy violation</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div className="mb-[16px]">
                        <label className="block text-[12px] font-medium text-[var(--text-secondary)] mb-[6px]">Notes (Optional)</label>
                        <textarea
                          className="w-full p-[10px_12px] bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[6px] text-[13px] text-[var(--text-primary)] font-sans outline-none min-h-[80px] resize-y"
                          placeholder="Additional details..."
                          value={suspendNote}
                          onChange={(e) => setSuspendNote(e.target.value)}
                        ></textarea>
                      </div>
                    </>
                  )}
                </div>

                <div className="p-[16px_24px] border-t border-[var(--border-secondary)] flex justify-end gap-[12px]">
                  <button className="p-[8px_14px] bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[6px] text-[13px] font-medium text-[var(--text-primary)] cursor-pointer hover:bg-[var(--bg-hover)]" onClick={closeModal}>Cancel</button>
                  <button
                    className={`p-[8px_14px] rounded-[6px] text-[13px] font-medium text-white cursor-pointer border-none
                                ${modalAction === 'suspend' ? 'bg-[var(--warning)] text-black' : 'bg-[var(--accent)]'}`}
                    onClick={handleStatusChange}
                  >
                    {modalAction === 'suspend' ? 'Suspend Account' : 'Reactivate Account'}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

      </main>
    </div>
  );
}

// --- STATS CARD ---
function StatCard({ label, value, color, icon }: { label: string, value: number, color?: string, icon?: React.ReactNode }) {
  const colorClass = color || 'text-[var(--text-primary)]';
  return (
    <div className="bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-[8px] p-[14px_18px]">
      <div className="text-[12px] text-[var(--text-tertiary)] mb-[4px] flex items-center gap-[6px]">
        {icon && <span style={{ width: '14px', height: '14px', display: 'inline-block' }} className="opacity-70">{icon}</span>}
        {label}
      </div>
      <div className={`text-[22px] font-semibold ${colorClass}`}>{value.toLocaleString()}</div>
    </div>
  );
}