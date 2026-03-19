'use client';

import { useState, useMemo, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useEffect } from 'react';
import { DataTable } from '@/components/ui/DataTable';
import { SlideOver } from '@/components/ui/SlideOver';
import { Modal } from '@/components/ui/Modal';
import { SimpleStatCard } from '@/components/ui/SimpleStatCard';
import { DeviceIcon } from '@/components/ui/DeviceIcon';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { Device } from '@/lib/types';
import { useDevices } from '@/hooks/useDevices';
import { getRelativeTime } from '@/services/deviceService';
import { useSearchParams } from 'next/navigation';

export default function DevicesPage() {
    const searchParams = useSearchParams();
    const paramEmail = searchParams.get('email') || undefined;
    const { devices, loading, refresh, actions } = useDevices(paramEmail);
    const [activeTab, setActiveTab] = useState<'all' | 'active' | 'suspended' | 'revoked'>('all');
    const [typeFilter, setTypeFilter] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const [currentPage, setCurrentPage] = useState(1);
    const [selectedDevices, setSelectedDevices] = useState<Set<string>>(new Set());

    const [currentDevice, setCurrentDevice] = useState<Device | null>(null);
    const [openSlider, setOpenSlider] = useState<boolean>(false);
    const [modalType, setModalType] = useState<'suspend' | 'revoke' | null>(null);
    const [revokeReason, setRevokeReason] = useState('Device Lost');
    const [toast, setToast] = useState<{ title: string, msg: string } | null>(null);

    const filteredData = useMemo(() => {
        return devices.filter(d => {
            const matchTab = activeTab === 'all' || d.status === activeTab;
            const matchType = typeFilter === '' || d.type === typeFilter;
            const matchStatus = statusFilter === '' || d.status === statusFilter;
            const matchSearch = d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                d.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
                d.userId.toLowerCase().includes(searchQuery.toLowerCase());
            return matchTab && matchType && matchStatus && matchSearch;
        });
    }, [activeTab, typeFilter, statusFilter, searchQuery, devices]);

    const itemsPerPage = 10;
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const paginatedData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const toggleRow = (id: string) => {
        const newSet = new Set(selectedDevices);
        if (newSet.has(id)) newSet.delete(id); else newSet.add(id);
        setSelectedDevices(newSet);
    };

    const toggleSelectAll = () => {
        if (selectedDevices.size === filteredData.length) setSelectedDevices(new Set());
        else setSelectedDevices(new Set(filteredData.map(d => d.id)));
    };

    const openDetail = (device: Device) => {
        setOpenSlider(true)
        setCurrentDevice(device);
    };

    const handleAction = async () => {
        if (!currentDevice) return;

        try {
            if (modalType === 'suspend') {
                await actions.suspend(currentDevice.id);
                setToast({ title: 'Device Suspended', msg: 'Device has been temporarily suspended.' });
            } else if (modalType === 'revoke') {
                await actions.revoke(currentDevice.id);
                setToast({ title: 'Credential Revoked', msg: 'Device credential has been permanently revoked.' });
            }
        } catch (error) {
            setToast({ title: 'Action Failed', msg: 'Could not update device status.' });
        }

        setModalType(null);
        setCurrentDevice(null);
        setTimeout(() => setToast(null), 4000);
    };

    const handleReactivate = async (device: Device) => {
        try {
            await actions.reactivate(device.id);
            setToast({ title: 'Device Reactivated', msg: 'Device is now active.' });
            if (currentDevice?.id === device.id) setCurrentDevice(null);
            setTimeout(() => setToast(null), 4000);
        } catch (e) {
            setToast({ title: 'Error', msg: 'Failed to reactivate device.' });
        }
    };

    const getStatusColorClass = (status: string | undefined) => {
        const s = status?.toUpperCase();
        if (s === 'SUCCESS' || s === 'APPROVED' || s === 'ACTIVE') return 'bg-[var(--success)]';
        if (s === 'FAILED' || s === 'BLOCKED' || s === 'REVOKED' || s === 'SUSPENDED') return 'bg-[var(--error)]';
        return 'bg-[var(--info)]';
    };



    const formatEventName = (eventString: string | undefined) => {
        if (!eventString) return 'Unknown Activity';
        return eventString.replace(/_/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
    };

    const handleBulkAction = async (actionType: 'suspend' | 'revoke') => {
        if (selectedDevices.size === 0) return;

        if (!confirm(`Are you sure you want to ${actionType} ${selectedDevices.size} devices?`)) return;

        try {
            const promises = Array.from(selectedDevices).map(id =>
                actionType === 'suspend' ? actions.suspend(id) : actions.revoke(id)
            );
            await Promise.all(promises);

            setToast({
                title: 'Bulk Action Success',
                msg: `Successfully ${actionType}ed ${selectedDevices.size} devices.`
            });
            setSelectedDevices(new Set());
            refresh();
        } catch (e) {
            setToast({ title: 'Bulk Error', msg: 'Some devices could not be updated.' });
        }
    };

    useEffect(() => {
        if (paramEmail && devices.length > 0) {
            const foundDevice = devices.find(device => device.email === paramEmail);
            queueMicrotask(() => {
                if (foundDevice) {
                    setCurrentDevice(foundDevice || null)
                    setOpenSlider(true)
                }
            });
        }
    }, [paramEmail, devices])


    const columns = [
        {
            header: (
                <div onClick={toggleSelectAll} className={`w-[18px] h-[18px] border-2 rounded-[var(--radius-sm)] flex items-center justify-center cursor-pointer transition-colors ${selectedDevices.size > 0 && selectedDevices.size === filteredData.length ? 'bg-[var(--accent)] border-[var(--accent)]' : 'border-[var(--border-primary)] hover:border-[var(--accent)]'}`}>
                    {selectedDevices.size > 0 && selectedDevices.size === filteredData.length && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-3 h-3 text-white"><polyline points="20 6 9 17 4 12" /></svg>}
                </div>
            ),
            className: 'w-10 pl-3'
        },
        { header: 'Device', className: 'min-w-[50px] xl:min-w-[100px]' },
        { header: 'User', className: 'min-w-[50px] xl:min-w-[100px]' },
        { header: 'Status', className: 'min-w-[50-px] xl:min-w-[100px]' },
        { header: 'Last Active', className: 'min-w-[50px] xl:min-w-[110px]' },
        { header: 'Approvals', className: 'min-w-[50px] xl:min-w-[100px]' },
        { header: 'Credential ID', className: 'min-w-[140px] hidden xl:block' },
        { header: 'Actions', className: 'text-center min-w-[130px]' },
    ];

    if (loading) return <div className="flex h-screen items-center justify-center bg-[var(--bg-primary)] text-[var(--text-secondary)]">Loading Data...</div>;

    return (
        <div className="flex min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-[family-name:var(--font-inter)]">

            <main className="flex-1 flex flex-col overflow-hidden h-screen">

                <header className="px-6 py-3 border-b border-[var(--border-secondary)] flex items-center justify-between bg-[var(--bg-secondary)] shrink-0 h-[60px]">
                    <div className="flex items-center gap-2 text-sm">
                        <span className="text-[var(--text-tertiary)]">Users</span>
                        <span className="text-[var(--text-muted)]">/</span>
                        <span className="text-[var(--text-primary)] font-medium">Device Management</span>
                    </div>
                    <div className="flex gap-3">
                        <button className="flex items-center gap-1.5 px-3.5 py-2 rounded-[var(--radius-md)] text-[13px] font-medium bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-primary)] hover:bg-[var(--bg-hover)] transition-all">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7,10 12,15 17,10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                            Export
                        </button>
                        <button onClick={refresh} className="flex items-center gap-1.5 px-3.5 py-2 rounded-[var(--radius-md)] text-[13px] font-medium bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-all">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><polyline points="23,4 23,10 17,10" /><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" /></svg>
                            Refresh
                        </button>
                    </div>
                </header>

                <div className="flex-1 overflow-auto p-6 flex flex-col">

                    <div className="grid grid-cols-4 gap-4 mb-6 shrink-0">
                        <SimpleStatCard
                            label="Total Devices" value={devices.length.toString()}
                            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /></svg>}
                        />
                        <SimpleStatCard
                            label="Active" value={devices.filter(d => d.status === 'active').length.toString()} valueColor="text-[var(--success)]"
                            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>}
                        />
                        <SimpleStatCard
                            label="Suspended" value={devices.filter(d => d.status === 'suspended').length.toString()} valueColor="text-[var(--warning)]"
                            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>}
                        />
                        <SimpleStatCard
                            label="Revoked" value={devices.filter(d => d.status === 'revoked').length.toString()} valueColor="text-[var(--error)]"
                            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" /></svg>}
                        />
                    </div>

                    <div className="flex items-center gap-3 mb-4 shrink-0">
                        <div className="flex items-center gap-2 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] px-3 py-2 min-w-[300px]">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[var(--text-tertiary)]"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                            <input
                                type="text" placeholder="Search devices, users, credentials..."
                                className="flex-1 bg-transparent border-none outline-none text-[13px] text-[var(--text-primary)] placeholder-[var(--text-tertiary)]"
                                value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        <select className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] px-3 py-2 text-[13px] text-[var(--text-primary)] outline-none cursor-pointer min-w-[120px]" value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
                            <option value="">All Types</option><option value="mobile">Mobile</option><option value="desktop">Desktop</option><option value="hardware">Hardware Key</option>
                        </select>

                        <select className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] px-3 py-2 text-[13px] text-[var(--text-primary)] outline-none cursor-pointer min-w-[120px]" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                            <option value="">All Status</option><option value="active">Active</option><option value="suspended">Suspended</option><option value="revoked">Revoked</option>
                        </select>

                        <div className="flex-1"></div>

                        <div className="inline-flex gap-1 bg-[var(--bg-secondary)] p-1 rounded-[var(--radius-md)] border border-[var(--border-secondary)]">
                            {(['all', 'active', 'suspended', 'revoked'] as const).map((tab) => {
                                const count = tab === 'all'
                                    ? devices.length
                                    : devices.filter(d => d.status === tab).length;

                                return (
                                    <button
                                        key={tab} onClick={() => setActiveTab(tab)}
                                        className={`px-3 py-1.5 text-[13px] font-medium rounded-[var(--radius-sm)] flex items-center gap-1.5 capitalize transition-all ${activeTab === tab ? 'bg-[var(--bg-tertiary)] text-[var(--text-primary)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
                                    >
                                        {tab} <span className="text-[11px] px-1.5 bg-[var(--bg-tertiary)] rounded-full font-mono text-[var(--text-tertiary)]">
                                            {count}
                                        </span>
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                    <DataTable
                        columns={columns}
                        data={paginatedData}
                        currentPage={currentPage}
                        totalPages={totalPages}
                        totalItems={filteredData.length}
                        itemsPerPage={itemsPerPage}
                        onPageChange={setCurrentPage}
                        renderRow={(d) => (
                            <tr
                                key={d.id}
                                onClick={() => openDetail(d)}
                                className={`group cursor-pointer transition-colors hover:bg-[var(--bg-tertiary)] border-b border-[var(--border-secondary)] last:border-0 ${d.status === 'revoked' ? 'opacity-60' : ''} ${selectedDevices.has(d.id) ? 'bg-[rgba(35,131,226,0.15)]' : ''}`}
                            >
                                <td className="p-3 pl-3" onClick={(e) => { e.stopPropagation(); toggleRow(d.id); }}>
                                    <div className={`w-[18px] h-[18px] border-2 rounded-[var(--radius-sm)] flex items-center justify-center ${selectedDevices.has(d.id) ? 'bg-[var(--accent)] border-[var(--accent)]' : 'border-[var(--border-primary)] group-hover:border-[var(--accent)]'}`}>
                                        {selectedDevices.has(d.id) && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-3 h-3 text-white"><polyline points="20 6 9 17 4 12" /></svg>}
                                    </div>
                                </td>
                                <td className="p-3">
                                    <div className="flex items-center gap-3">
                                        <DeviceIcon type={d.type} />
                                        <div>
                                            <div className="font-medium text-[13px]">{d.name}</div>
                                            <div className="text-[11px] text-[var(--text-tertiary)]">{d.modelAndOnboardingAuth.toLocaleLowerCase().includes('unknown') ? d.model : d.modelAndOnboardingAuth}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-3">
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--purple)] flex items-center justify-center text-[10px] font-semibold text-white">{d.initials}</div>
                                        <div>
                                            <div className="text-[13px]">{d.user}</div>
                                            <div className="text-[11px] text-[var(--text-tertiary)] font-mono">{d.userId}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-3"><StatusBadge status={d.status} /></td>
                                <td className={`p-3 text-xs ${d.lastActiveClass === 'recent' ? 'text-[var(--success)]' : d.lastActiveClass === 'warning' ? 'text-[var(--warning)]' : 'text-[var(--text-tertiary)]'}`}>{d.lastActive}</td>
                                <td className="p-3 text-[13px]">
                                    {d.approvals}
                                    {d.rate !== '-' && <span className="text-[var(--success)] text-[11px] ml-1">({d.rate})</span>}
                                </td>
                                <td className={`p-3 text-[11px] font-mono text-[var(--text-secondary)] ${d.status === 'revoked' ? 'line-through' : ''} hidden xl:block`}>
                                    {d.credential ? `${d.credential.substring(0, 16)}...` : '-'}
                                </td>

                                <td className="p-3 text-right" onClick={(e) => e.stopPropagation()}>
                                    <div className="flex justify-end gap-1">
                                        {d.status === 'active' ? (
                                            <>
                                                <button onClick={() => { setCurrentDevice(d); setModalType('suspend'); }} className="px-2 py-1 text-xs bg-[var(--warning)] text-black rounded-[var(--radius-md)] font-medium hover:bg-[#f59e0b] transition-colors">Suspend</button>
                                                <button onClick={() => { setCurrentDevice(d); setModalType('revoke'); }} className="px-2 py-1 text-xs bg-[var(--error)] text-white rounded-[var(--radius-md)] font-medium hover:bg-[#ef4444] transition-colors">Revoke</button>
                                            </>
                                        ) : d.status === 'suspended' ? (
                                            <>
                                                <button onClick={() => handleReactivate(d)} className="px-2 py-1 text-xs bg-[var(--accent)] text-white rounded-[var(--radius-md)] font-medium hover:bg-[var(--accent-hover)] transition-colors">Reactivate</button>
                                                <button onClick={() => { setCurrentDevice(d); setModalType('revoke'); }} className="px-2 py-1 text-xs bg-[var(--error)] text-white rounded-[var(--radius-md)] font-medium hover:bg-[#ef4444] transition-colors">Revoke</button>
                                            </>
                                        ) : (
                                            <button onClick={() => openDetail(d)} className="px-2 py-1 text-xs border border-[var(--border-primary)] rounded-[var(--radius-md)] bg-[var(--bg-tertiary)] hover:bg-[var(--bg-hover)] transition-colors">History</button>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        )
                        }
                    />

                    < div className={`fixed bottom-6 left-1/2 -translate-x-1/2 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-lg)] p-3 flex items-center gap-4 shadow-2xl z-50 transition-all duration-300 ${selectedDevices.size > 0 ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}>
                        <div className="text-[13px] flex items-center gap-2">
                            <strong className="bg-[var(--accent)] text-white px-2 py-0.5 rounded-[10px] text-xs">{selectedDevices.size}</strong> selected
                        </div>
                        <div className="w-px h-6 bg-[var(--border-primary)]"></div>
                        <button onClick={() => setSelectedDevices(new Set())} className="text-xs px-2 py-1 bg-[var(--bg-tertiary)] rounded-[var(--radius-sm)] border border-[var(--border-primary)] hover:bg-[var(--bg-hover)] transition-colors text-[var(--text-primary)]">Clear</button>
                        <button onClick={() => handleBulkAction('suspend')} className="text-xs px-2 py-1 bg-[var(--warning)] text-black font-medium rounded-[var(--radius-sm)] hover:bg-[#f59e0b] transition-colors">Suspend All</button>
                        <button onClick={() => handleBulkAction('revoke')} className="text-xs px-2 py-1 bg-[var(--error)] text-white font-medium rounded-[var(--radius-sm)] hover:bg-[#ef4444] transition-colors">Revoke All</button>
                    </div >
                </div >
            </main >

            <SlideOver
                isOpen={openSlider}
                onClose={() => { setOpenSlider(false); setCurrentDevice(null) }}
                title="Device Details"
                footer={currentDevice && currentDevice.status !== 'revoked' ? (
                    <div className="flex gap-2 w-full justify-end">
                        {currentDevice.status === 'active' ? (
                            <>
                                <button onClick={() => setModalType('suspend')} className="px-3 py-2 bg-[var(--warning)] text-black text-[13px] font-medium rounded-[var(--radius-md)] hover:bg-[#f59e0b]">Suspend Device</button>
                                <button onClick={() => setModalType('revoke')} className="px-3 py-2 bg-[var(--error)] text-white text-[13px] font-medium rounded-[var(--radius-md)] hover:bg-[#ef4444]">Revoke Credential</button>
                            </>
                        ) : (
                            <>
                                <button onClick={() => handleReactivate(currentDevice)} className="px-3 py-2 bg-[var(--accent)] text-white text-[13px] font-medium rounded-[var(--radius-md)] hover:bg-[#var(--accent-hover)]">Reactivate</button>
                                <button onClick={() => setModalType('revoke')} className="px-3 py-2 bg-[var(--error)] text-white text-[13px] font-medium rounded-[var(--radius-md)] hover:bg-[#ef4444]">Revoke Credential</button>
                            </>
                        )}
                    </div>
                ) : undefined}
            >
                {currentDevice && (
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 p-4 bg-[var(--bg-tertiary)] rounded-[var(--radius-lg)]">
                            <div className="scale-125 origin-center"><DeviceIcon type={currentDevice.type} /></div>
                            <div>
                                <div className="text-lg font-semibold">{currentDevice.name}</div>
                                <div className="text-[13px] text-[var(--text-tertiary)]">{currentDevice.model}</div>
                            </div>
                        </div>

                        <div>
                            <div className="text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-3">Status</div>
                            <StatusBadge status={currentDevice.status} className="px-3 py-1.5 text-[13px]" />
                            {currentDevice.reason && <span className="ml-2 text-xs text-[var(--text-tertiary)]">• {currentDevice.reason}</span>}
                            {currentDevice.revokedOn && <div className="mt-2 text-xs text-[var(--error)]">Revoked on {currentDevice.revokedOn}</div>}
                        </div>

                        <div>
                            <div className="text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-3">User</div>
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--purple)] flex items-center justify-center text-xs font-semibold text-white">{currentDevice.initials}</div>
                                <div>
                                    <div className="text-sm">{currentDevice.user}</div>
                                    <div className="text-xs text-[var(--text-tertiary)] font-mono">{currentDevice.userId}</div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-3">Device Information</div>
                            <div className="grid grid-cols-2 gap-4">
                                <div><div className="text-[11px] text-[var(--text-tertiary)] mb-1">Registered</div><div className="text-[13px]">{new Date(currentDevice.registered).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</div></div>
                                <div><div className="text-[11px] text-[var(--text-tertiary)] mb-1">Last Active</div><div className={`text-[13px] ${currentDevice.lastActiveClass === 'recent' ? 'text-[var(--success)]' : currentDevice.lastActiveClass === 'warning' ? 'text-[var(--warning)]' : 'text-[var(--text-tertiary)]'}`}>{currentDevice.lastActive}</div></div>
                                <div><div className="text-[11px] text-[var(--text-tertiary)] mb-1">Location</div><div className="text-[13px]">{currentDevice.location}</div></div>
                                <div><div className="text-[11px] text-[var(--text-tertiary)] mb-1">Last IP</div><div className="text-[12px] font-mono">{currentDevice.ip}</div></div>
                                <div><div className="text-[11px] text-[var(--text-tertiary)] mb-1">Total Approvals</div><div className="text-[13px]">{currentDevice.approvals}</div></div>
                                <div><div className="text-[11px] text-[var(--text-tertiary)] mb-1">Success Rate</div><div className={`text-[13px] ${currentDevice.rate !== '-' ? 'text-[var(--success)]' : ''}`}>{currentDevice.rate}</div></div>
                            </div>
                        </div>

                        <div>
                            <div className="text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-3">FIDO2 Credential</div>
                            <div className={`bg-[var(--bg-primary)] p-3 rounded-[var(--radius-md)] font-mono text-[11px] text-[var(--text-secondary)] break-all ${currentDevice.status === 'revoked' ? 'line-through opacity-60' : ''}`}>
                                {currentDevice.credential}
                            </div>
                        </div>

                        <div>
                            <div className="text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-3">
                                Recent Activity
                            </div>

                            <div className="flex flex-col">
                                {currentDevice.recentActivity && currentDevice.recentActivity.length > 0 ? (
                                    currentDevice.recentActivity.map((activity: { status: string | undefined; event: string | undefined; location: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; time: string | undefined; ip: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }, index: Key | null | undefined) => (
                                        <div key={index} className="flex items-start gap-3 py-3 border-b border-[var(--border-secondary)] last:border-0">
                                            <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${getStatusColorClass(activity.status)}`}></div>

                                            <div className="flex-1">
                                                <div className="text-[13px] text-[var(--text-primary)]">
                                                    {formatEventName(activity.event)}
                                                    {/* {activity.location && activity.location !== 'Unknown Location' && (
                                                        <span className="text-[var(--text-tertiary)] text-[11px] ml-1">
                                                            • {activity.location}
                                                        </span>
                                                    )} */}
                                                </div>

                                                <div className="text-[11px] text-[var(--text-tertiary)] flex gap-2">
                                                    <span>{getRelativeTime(activity.time)}</span>
                                                    {/* {activity.ip && <span>• IP: {activity.ip}</span>} */}
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="py-3 text-[13px] text-[var(--text-tertiary)] italic">
                                        No recent activity recorded.
                                    </div>
                                )}


                            </div>
                        </div>
                    </div>
                )}
            </SlideOver>

            <Modal
                isOpen={!!modalType}
                onClose={() => { setCurrentDevice(null); setModalType(null) }}
                title={modalType === 'revoke' ? 'Revoke Device Credential' : 'Suspend Device'}
                type={modalType === 'revoke' ? 'danger' : 'default'}
                footer={
                    <>
                        <button onClick={() => setModalType(null)} className="px-4 py-2 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] text-[var(--text-primary)] text-[13px] font-medium hover:bg-[var(--bg-hover)]">Cancel</button>
                        <button onClick={handleAction} className={`px-4 py-2 text-white rounded-[var(--radius-md)] text-[13px] font-medium ${modalType === 'revoke' ? 'bg-[var(--error)] hover:bg-[#ef4444]' : 'bg-[var(--warning)] text-black hover:bg-[#f59e0b]'}`}>
                            {modalType === 'revoke' ? 'Revoke Credential' : 'Suspend Device'}
                        </button>
                    </>
                }
            >
                <div className={`flex gap-3 p-3.5 rounded-[var(--radius-md)] border mb-4 ${modalType === 'revoke' ? 'bg-[var(--error-bg)] border-[rgba(248,113,113,0.3)]' : 'bg-[var(--warning-bg)] border-[rgba(251,191,36,0.3)]'}`}>
                    <div className={`shrink-0 ${modalType === 'revoke' ? 'text-[var(--error)]' : 'text-[var(--warning)]'}`}>
                        {modalType === 'revoke' ? (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
                        ) : (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                        )}
                    </div>
                    <div>
                        <div className={`text-[13px] font-semibold ${modalType === 'revoke' ? 'text-[var(--error)]' : 'text-[var(--warning)]'}`}>
                            {modalType === 'revoke' ? 'This action is permanent' : 'Temporary suspension'}
                        </div>
                        <div className="text-xs text-[var(--text-secondary)]">
                            {modalType === 'revoke' ? 'Revoking will immediately disable all payment approvals from this device.' : 'You can reactivate this device later.'}
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1.5">Reason for {modalType === 'revoke' ? 'Revocation' : 'Suspension'}</label>
                    {modalType === 'revoke' ? (
                        <div className="flex flex-col gap-2">
                            {['Device Lost', 'Device Stolen', 'Security Concern', 'User Request'].map(r => (
                                <div key={r} onClick={() => setRevokeReason(r)} className={`flex items-center gap-2.5 p-3 bg-[var(--bg-tertiary)] border rounded-[var(--radius-md)] cursor-pointer transition-all ${revokeReason === r ? 'border-[var(--accent)] bg-[var(--info-bg)]' : 'border-[var(--border-primary)] hover:border-[var(--text-tertiary)]'}`}>
                                    <div className={`w-[18px] h-[18px] border-2 rounded-full flex items-center justify-center ${revokeReason === r ? 'border-[var(--accent)]' : 'border-[var(--border-primary)]'}`}>
                                        {revokeReason === r && <div className="w-2.5 h-2.5 bg-[var(--accent)] rounded-full"></div>}
                                    </div>
                                    <div>
                                        <div className="text-[13px] font-medium">{r}</div>
                                        {r === 'Device Lost' && <div className="text-[11px] text-[var(--text-tertiary)]">User reported device as lost</div>}
                                        {r === 'Device Stolen' && <div className="text-[11px] text-[var(--text-tertiary)]">User reported device as stolen</div>}
                                        {r === 'Security Concern' && <div className="text-[11px] text-[var(--text-tertiary)]">Suspicious activity detected</div>}
                                        {r === 'User Request' && <div className="text-[11px] text-[var(--text-tertiary)]">User requested removal</div>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <select className="w-full p-2.5 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] text-[13px] text-[var(--text-primary)] outline-none focus:border-[var(--accent)] transition-colors">
                            <option>Suspicious activity</option>
                            <option>Pending review</option>
                            <option>User request</option>
                            <option>Other</option>
                        </select>
                    )}
                </div>

                <div>
                    <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1.5">Notes (Optional)</label>
                    <textarea className="w-full p-2.5 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] text-[13px] text-[var(--text-primary)] outline-none min-h-[80px] focus:border-[var(--accent)] transition-colors" placeholder="Additional details..."></textarea>
                </div>
            </Modal>

            {
                toast && (
                    <div className="fixed bottom-6 right-6 bg-[var(--bg-secondary)] border border-[rgba(74,222,128,0.3)] rounded-[var(--radius-lg)] p-4 flex items-center gap-3 shadow-[0_8px_24px_rgba(0,0,0,0.4)] z-[2000] animate-[shake_0.4s_ease]">
                        <div className="w-8 h-8 rounded-[var(--radius-md)] bg-[var(--success-bg)] text-[var(--success)] flex items-center justify-center">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px]"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                        </div>
                        <div>
                            <div className="text-[13px] font-semibold">{toast.title}</div>
                            <div className="text-xs text-[var(--text-tertiary)]">{toast.msg}</div>
                        </div>
                    </div>
                )
            }
        </div >
    );
}