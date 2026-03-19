"use client";

import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import TotpCharts from '@/components/totp-inventory/TotpCharts';
import { ImportModal, DetailModal, AssignModal } from '@/components/totp-inventory/TotpModals';
import { adminService } from '@/services/adminService'; // Import Service API

// Helpers UI
const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
const getVendorName = (vendor: string) => { const v: any = { yubico: 'Yubico', feitian: 'Feitian', safenet: 'SafeNet' }; return v[vendor] || vendor; };
const getInitials = (name: string) => name.split(' ').map(n => n[0]).join('').toUpperCase();
const formatDate = (dateStr: string) => new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
const getExpiryClass = (dateStr: string) => {
    const days = Math.floor((new Date(dateStr).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
    if (days < 0) return 'text-[var(--error)]';
    if (days < 90) return 'text-[var(--warning)]';
    return 'text-[var(--text-tertiary)]';
};
const getExpiryText = (dateStr: string) => {
    const days = Math.floor((new Date(dateStr).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
    if (days < 0) return 'Expired';
    if (days < 30) return `${days} days left`;
    if (days < 365) return `${Math.floor(days / 30)} months left`;
    return `${Math.floor(days / 365)} years left`;
};

export default function TotpInventoryPage() {
    const [tokens, setTokens] = useState<any[]>([]);
    const [stats, setStats] = useState({ available: 0, assigned: 0, suspended: 0, revoked: 0, expiringSoon: 0 });
    const [selectedTokens, setSelectedTokens] = useState<Set<string>>(new Set());
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    
    // Filters
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [vendorFilter, setVendorFilter] = useState('');

    // Modals & Toasts
    const [isImportOpen, setImportOpen] = useState(false);
    const [isDetailOpen, setDetailOpen] = useState(false);
    const [isAssignOpen, setAssignOpen] = useState(false);
    const [activeToken, setActiveToken] = useState<any>(null);
    const [toasts, setToasts] = useState<any[]>([]);

    // --- FETCH DATA MENGGUNAKAN SERVICE ---
    const fetchInventoryData = async () => {
        setIsLoading(true);
        try {
            const result = await adminService.getTotpInventory();
            if (result.success || result.tokens) {
                const mappedTokens = result.tokens.map((t: any) => ({
                    serial: t.serialNumber, status: t.status, vendor: t.vendor, batch: t.batchId,
                    user: t.user ? { name: t.user.fullName, id: t.user.id } : null,
                    expiry: t.expiryDate, lastUsed: t.lastUsedAt ? new Date(t.lastUsedAt).toLocaleString('en-US') : null
                }));
                setTokens(mappedTokens);
                if (result.stats) setStats(result.stats);
            }
        } catch (err: any) {
            showToast('error', 'Connection Error', err.response?.data?.error || 'Gagal memuat data');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchInventoryData();
        const handleClickOutside = () => setActiveMenu(null);
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    // --- LOGIKA AKSI TUNGGAL (CONTEXT MENU) ---
    const handleAction = async (serial: string, action: string) => {
        try {
            if (action === 'unassign') {
                await adminService.unassignTotpToken(serial);
                showToast('success', 'Unassigned', `Token ${serial} telah dilepas`);
            } else {
                await adminService.updateTotpStatus(serial, action);
                showToast('success', 'Status Updated', `Token ${serial} diubah menjadi ${action}`);
            }
            fetchInventoryData();
        } catch (err: any) {
            showToast('error', 'Action Failed', err.response?.data?.error || 'Terjadi kesalahan sistem');
        }
    };

    // --- LOGIKA AKSI MASSAL (BATCH ACTIONS) ---
    const handleBatchAction = async (action: string) => {
        try {
            const serials = Array.from(selectedTokens);
            // Eksekusi API secara paralel untuk semua token yang dipilih
            await Promise.all(serials.map(serial => adminService.updateTotpStatus(serial, action)));
            
            showToast('success', 'Batch Update Success', `${serials.length} token diubah menjadi ${action}`);
            setSelectedTokens(new Set()); // Bersihkan pilihan
            fetchInventoryData();
        } catch (err: any) {
            showToast('error', 'Batch Update Failed', err.response?.data?.error || 'Gagal memperbarui beberapa token');
        }
    };

    const filteredTokens = tokens.filter(t => {
        const s = searchQuery.toLowerCase();
        return (!s || t.serial.toLowerCase().includes(s) || (t.user && t.user.name.toLowerCase().includes(s)) || t.batch.toLowerCase().includes(s)) &&
               (!statusFilter || t.status === statusFilter) &&
               (!vendorFilter || t.vendor === vendorFilter);
    });

    const toggleSelection = (serial: string) => {
        const newSet = new Set(selectedTokens);
        if (newSet.has(serial)) newSet.delete(serial); else newSet.add(serial);
        setSelectedTokens(newSet);
    };

    const toggleAllSelection = () => {
        if (selectedTokens.size === filteredTokens.length) setSelectedTokens(new Set());
        else setSelectedTokens(new Set(filteredTokens.map(t => t.serial)));
    };

    const handleExport = () => {
        if (tokens.length === 0) return showToast('warning', 'Empty Data', 'Tidak ada data untuk diekspor');
        const exportData = tokens.map(t => ({ 'Serial Number': t.serial, 'Status': t.status, 'Vendor': t.vendor, 'Batch ID': t.batch, 'Assigned User': t.user ? t.user.name : 'N/A', 'Expiry Date': new Date(t.expiry).toLocaleDateString() }));
        const worksheet = XLSX.utils.json_to_sheet(exportData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "TOTP_Inventory");
        XLSX.writeFile(workbook, `TOTP_Inventory_${new Date().toISOString().slice(0,10)}.xlsx`);
        showToast('success', 'Export Started', 'File Excel berhasil diunduh');
    };

    const showToast = (type: string, title: string, message: string) => {
        const id = Date.now();
        setToasts(prev => [...prev, { id, type, title, message }]);
        setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 4000);
    };

    return (
        <div className="flex-1 flex flex-col h-full bg-[var(--bg-primary)] overflow-hidden">
            {/* HEADER */}
            <header className="px-6 py-3 border-b border-[var(--border-secondary)] flex items-center justify-between bg-[var(--bg-secondary)] shrink-0 h-[60px]">
                <div className="flex items-center gap-2 text-sm">
                    <span className="text-[var(--text-tertiary)]">Inventory</span>
                    <span className="text-[var(--text-muted)]">/</span>
                    <span className="text-[var(--text-primary)] font-medium">TOTP Tokens</span>
                    <span className="ml-2 bg-[var(--bg-tertiary)] px-2.5 py-0.5 border border-[var(--border-primary)] rounded-[var(--radius-sm)] text-[11px] text-[var(--text-secondary)] font-medium">Hardware</span>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-1.5 px-3.5 py-2 rounded-[var(--radius-md)] text-[13px] font-medium bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-primary)] hover:bg-[var(--bg-hover)] transition-all" onClick={handleExport}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7,10 12,15 17,10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                        Export
                    </button>
                    <button className="flex items-center gap-1.5 px-3.5 py-2 rounded-[var(--radius-md)] text-[13px] font-medium bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-all" onClick={() => setImportOpen(true)}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                        Import Batch
                    </button>
                </div>
            </header>

            {/* MAIN CONTENT */}
            <div className="flex-1 overflow-auto p-6 flex flex-col">
                <div className="grid grid-cols-5 gap-4 mb-6 shrink-0">
                    {[
                        { label: 'Available', value: stats.available, sub: 'Ready to assign', color: 'bg-[var(--success)]', textColor: 'text-[var(--success)]' },
                        { label: 'Assigned', value: stats.assigned, sub: 'Active users', color: 'bg-[var(--accent)]', textColor: 'text-[var(--accent)]' },
                        { label: 'Suspended', value: stats.suspended, sub: 'Temp disabled', color: 'bg-[var(--warning)]', textColor: 'text-[var(--warning)]' },
                        { label: 'Revoked', value: stats.revoked, sub: 'Permanently disabled', color: 'bg-[var(--error)]', textColor: 'text-[var(--error)]' },
                        { label: 'Expiring Soon', value: stats.expiringSoon, sub: 'Within 90 days', color: 'bg-[var(--text-tertiary)]', textColor: 'text-[var(--text-tertiary)]' },
                    ].map((stat, i) => (
                        <div key={i} className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] p-4 relative overflow-hidden">
                            <div className={`absolute top-0 left-0 right-0 h-[3px] ${stat.color}`}></div>
                            <div className="text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-2">{stat.label}</div>
                            <div className={`text-2xl font-bold font-mono ${stat.textColor}`}>{stat.value}</div>
                            <div className="text-xs text-[var(--text-tertiary)] mt-1">{stat.sub}</div>
                        </div>
                    ))}
                </div>

                <TotpCharts tokens={tokens} />

                {/* TABLE PANEL */}
                <div className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-lg)] mb-6 flex-1 flex flex-col">
                    <div className="px-5 py-3 border-b border-[var(--border-secondary)] flex justify-between items-center">
                        <div className="text-[13px] font-semibold flex items-center gap-2.5 text-[var(--text-primary)]">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[16px] h-[16px] text-[var(--text-tertiary)]"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
                            Token Inventory
                        </div>
                        <button className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[var(--bg-tertiary)] hover:bg-[var(--bg-hover)] border border-[var(--border-primary)] rounded-[var(--radius-sm)] text-[12px] font-medium transition-all text-[var(--text-primary)]" onClick={fetchInventoryData}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`}><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/></svg>
                            {isLoading ? 'Loading...' : 'Refresh'}
                        </button>
                    </div>

                    <div className="p-5 flex-1 flex flex-col">
                        <div className="flex gap-3 mb-5 flex-wrap shrink-0">
                            <div className="flex-1 min-w-[280px] flex items-center gap-2 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] px-3 py-2">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[var(--text-tertiary)]"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                                <input type="text" placeholder="Search by serial number or user..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full bg-transparent border-none outline-none text-[13px] text-[var(--text-primary)] placeholder-[var(--text-tertiary)]" />
                            </div>
                            <select className="bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] px-3 py-2 text-[13px] text-[var(--text-primary)] outline-none focus:border-[var(--accent)] cursor-pointer" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                                <option value="">All Status</option><option value="available">Available</option><option value="assigned">Assigned</option><option value="suspended">Suspended</option><option value="revoked">Revoked</option>
                            </select>
                            <select className="bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] px-3 py-2 text-[13px] text-[var(--text-primary)] outline-none focus:border-[var(--accent)] cursor-pointer" value={vendorFilter} onChange={(e) => setVendorFilter(e.target.value)}>
                                <option value="">All Vendors</option><option value="yubico">Yubico</option><option value="feitian">Feitian</option><option value="safenet">SafeNet</option>
                            </select>
                        </div>

                        {/* BATCH ACTIONS (Sekarang Berfungsi!) */}
                        {selectedTokens.size > 0 && (
                            <div className="bg-[rgba(35,131,226,0.1)] border border-[rgba(35,131,226,0.3)] rounded-[var(--radius-md)] p-3 mb-4 flex items-center justify-between shrink-0">
                                <div className="flex items-center gap-3 text-[13px]">
                                    <div className="w-[18px] h-[18px] rounded-[var(--radius-sm)] border-2 border-[var(--accent)] bg-[var(--accent)] flex items-center justify-center cursor-pointer" onClick={() => setSelectedTokens(new Set())}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" className="w-3 h-3"><polyline points="20 6 9 17 4 12"/></svg>
                                    </div>
                                    <span><strong className="text-[var(--text-primary)]">{selectedTokens.size}</strong> tokens selected</span>
                                </div>
                                <div className="flex gap-2">
                                    <button className="px-3 py-1.5 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-sm)] text-[12px] font-medium hover:bg-[var(--bg-hover)]" onClick={() => handleBatchAction('suspended')}>Suspend</button>
                                    <button className="px-3 py-1.5 bg-[var(--error-bg)] text-[var(--error)] border border-transparent rounded-[var(--radius-sm)] text-[12px] font-medium hover:bg-[var(--error)] hover:text-white transition-colors" onClick={() => handleBatchAction('revoked')}>Revoke</button>
                                </div>
                            </div>
                        )}

                        <div className="overflow-x-auto flex-1">
                            <table className="w-full border-collapse text-left">
                                <thead>
                                    <tr>
                                        <th className="px-3 py-3 border-b border-[var(--border-secondary)] w-10">
                                            <div className={`w-[18px] h-[18px] rounded-[var(--radius-sm)] border-2 flex items-center justify-center cursor-pointer transition-colors ${selectedTokens.size === filteredTokens.length && filteredTokens.length > 0 ? 'border-[var(--accent)] bg-[var(--accent)]' : 'border-[var(--border-primary)] hover:border-[var(--accent)]'}`} onClick={toggleAllSelection}>
                                                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" className={`w-3 h-3 ${selectedTokens.size === filteredTokens.length && filteredTokens.length > 0 ? 'opacity-100' : 'opacity-0'}`}><polyline points="20 6 9 17 4 12"/></svg>
                                            </div>
                                        </th>
                                        <th className="px-3 py-3 border-b border-[var(--border-secondary)] text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider">Serial Number</th>
                                        <th className="px-3 py-3 border-b border-[var(--border-secondary)] text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider">Status</th>
                                        <th className="px-3 py-3 border-b border-[var(--border-secondary)] text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider">Vendor</th>
                                        <th className="px-3 py-3 border-b border-[var(--border-secondary)] text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider">Batch ID</th>
                                        <th className="px-3 py-3 border-b border-[var(--border-secondary)] text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider">Assigned To</th>
                                        <th className="px-3 py-3 border-b border-[var(--border-secondary)] text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider">Expiry</th>
                                        <th className="px-3 py-3 border-b border-[var(--border-secondary)]"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredTokens.length === 0 ? (
                                        <tr><td colSpan={8} className="px-3 py-8 text-center text-[13px] text-[var(--text-tertiary)]">No tokens found</td></tr>
                                    ) : (
                                        filteredTokens.map((token) => (
                                            <tr key={token.serial} className={`group cursor-pointer transition-colors hover:bg-[var(--bg-tertiary)] border-b border-[var(--border-secondary)] last:border-0 ${selectedTokens.has(token.serial) ? 'bg-[rgba(35,131,226,0.1)]' : ''}`}>
                                                <td className="px-3 py-3" onClick={(e) => { e.stopPropagation(); toggleSelection(token.serial); }}>
                                                    <div className={`w-[18px] h-[18px] rounded-[var(--radius-sm)] border-2 flex items-center justify-center cursor-pointer transition-colors ${selectedTokens.has(token.serial) ? 'border-[var(--accent)] bg-[var(--accent)]' : 'border-[var(--border-primary)] group-hover:border-[var(--accent)]'}`}>
                                                        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" className={`w-3 h-3 ${selectedTokens.has(token.serial) ? 'opacity-100' : 'opacity-0'}`}><polyline points="20 6 9 17 4 12"/></svg>
                                                    </div>
                                                </td>
                                                <td className="px-3 py-3 font-mono font-medium text-[13px]">{token.serial}</td>
                                                <td className="px-3 py-3">
                                                    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-[var(--radius-sm)] text-[11px] font-medium border
                                                        ${token.status === 'available' ? 'bg-[var(--success-bg)] text-[var(--success)] border-[var(--success-border)]' : ''}
                                                        ${token.status === 'assigned' ? 'bg-[rgba(35,131,226,0.15)] text-[var(--accent)] border-[rgba(35,131,226,0.3)]' : ''}
                                                        ${token.status === 'suspended' ? 'bg-[var(--warning-bg)] text-[var(--warning)] border-[rgba(251,191,36,0.3)]' : ''}
                                                        ${token.status === 'revoked' ? 'bg-[var(--error-bg)] text-[var(--error)] border-[rgba(248,113,113,0.3)]' : ''}
                                                    `}>
                                                        {capitalize(token.status)}
                                                    </span>
                                                </td>
                                                <td className="px-3 py-3">
                                                    <span className="px-2 py-1 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-sm)] text-[11px] text-[var(--text-secondary)]">{getVendorName(token.vendor)}</span>
                                                </td>
                                                <td className="px-3 py-3 font-mono text-[11px] text-[var(--text-tertiary)]">{token.batch}</td>
                                                <td className="px-3 py-3">
                                                    {token.user ? (
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[var(--accent)] to-purple-500 flex items-center justify-center text-[10px] font-semibold text-white">{getInitials(token.user.name)}</div>
                                                            <div className="flex flex-col">
                                                                <span className="font-medium text-[13px]">{token.user.name}</span>
                                                                <span className="text-[11px] font-mono text-[var(--text-tertiary)]">{token.user.id}</span>
                                                            </div>
                                                        </div>
                                                    ) : <span className="text-[var(--text-tertiary)]">—</span>}
                                                </td>
                                                <td className="px-3 py-3">
                                                    <div className="flex flex-col gap-0.5">
                                                        <span className="text-[13px]">{formatDate(token.expiry)}</span>
                                                        <span className={`text-[11px] ${getExpiryClass(token.expiry)}`}>{getExpiryText(token.expiry)}</span>
                                                    </div>
                                                </td>
                                                
                                                <td className="px-3 py-3 relative text-right">
                                                    <button className="p-1.5 rounded-[var(--radius-md)] text-[var(--text-tertiary)] border border-transparent hover:border-[var(--border-primary)] hover:bg-[var(--bg-tertiary)] transition-colors" onClick={(e) => { e.stopPropagation(); setActiveMenu(activeMenu === token.serial ? null : token.serial); }}>
                                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
                                                    </button>
                                                    
                                                    {activeMenu === token.serial && (
                                                        <div className="absolute right-6 top-8 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] w-48 shadow-2xl z-10 py-1 text-left animate-in fade-in slide-in-from-top-2">
                                                            <div className="flex items-center gap-2.5 px-3 py-2 text-[13px] text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] cursor-pointer" onClick={() => { setActiveToken(token); setDetailOpen(true); setActiveMenu(null); }}>
                                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[15px] h-[15px]"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg> View Details
                                                            </div>
                                                            {token.status === 'available' && (
                                                                <div className="flex items-center gap-2.5 px-3 py-2 text-[13px] text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] cursor-pointer" onClick={() => { setActiveToken(token); setAssignOpen(true); setActiveMenu(null); }}>
                                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[15px] h-[15px]"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg> Assign to User
                                                                </div>
                                                            )}
                                                            {token.status === 'assigned' && (
                                                                <>
                                                                    <div className="flex items-center gap-2.5 px-3 py-2 text-[13px] text-[var(--warning)] hover:bg-[var(--warning-bg)] cursor-pointer" onClick={() => { handleAction(token.serial, 'suspended'); setActiveMenu(null); }}>
                                                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[15px] h-[15px]"><circle cx="12" cy="12" r="10"/><line x1="10" y1="15" x2="10" y2="9"/><line x1="14" y1="15" x2="14" y2="9"/></svg> Suspend Token
                                                                    </div>
                                                                    <div className="flex items-center gap-2.5 px-3 py-2 text-[13px] text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] cursor-pointer" onClick={() => { handleAction(token.serial, 'unassign'); setActiveMenu(null); }}>
                                                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[15px] h-[15px]"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="23" y1="11" x2="17" y2="11"/></svg> Unassign
                                                                    </div>
                                                                </>
                                                            )}
                                                            {token.status === 'suspended' && (
                                                                <div className="flex items-center gap-2.5 px-3 py-2 text-[13px] text-[var(--success)] hover:bg-[var(--success-bg)] cursor-pointer" onClick={() => { handleAction(token.serial, 'available'); setActiveMenu(null); }}>
                                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[15px] h-[15px]"><polygon points="5 3 19 12 5 21 5 3"/></svg> Reactivate
                                                                </div>
                                                            )}
                                                            <div className="h-px bg-[var(--border-primary)] my-1"></div>
                                                            <div className="flex items-center gap-2.5 px-3 py-2 text-[13px] text-[var(--error)] hover:bg-[var(--error-bg)] cursor-pointer" onClick={() => { handleAction(token.serial, 'revoked'); setActiveMenu(null); }}>
                                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[15px] h-[15px]"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg> Revoke Token
                                                            </div>
                                                        </div>
                                                    )}
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <ImportModal isOpen={isImportOpen} onClose={() => setImportOpen(false)} onImportSuccess={fetchInventoryData} showToast={showToast} />
            <DetailModal isOpen={isDetailOpen} onClose={() => setDetailOpen(false)} token={activeToken} showToast={showToast} onSuccess={fetchInventoryData} />
            <AssignModal isOpen={isAssignOpen} onClose={() => setAssignOpen(false)} tokenSerial={activeToken?.serial} showToast={showToast} onAssignSuccess={fetchInventoryData} />

            <div className="fixed bottom-6 right-6 z-[2000] flex flex-col gap-3 pointer-events-none">
                {toasts.map(toast => (
                    <div key={toast.id} className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-lg)] px-4 py-3 flex items-center gap-3 shadow-[0_8px_24px_rgba(0,0,0,0.4)] animate-[shake_0.4s_ease]">
                        <div className={`w-8 h-8 rounded-[var(--radius-md)] flex items-center justify-center 
                            ${toast.type === 'success' ? 'bg-[var(--success-bg)] text-[var(--success)]' : ''}
                            ${toast.type === 'error' ? 'bg-[var(--error-bg)] text-[var(--error)]' : ''}
                            ${toast.type === 'warning' ? 'bg-[var(--warning-bg)] text-[var(--warning)]' : ''}
                        `}>
                            {toast.type === 'success' && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px]"><polyline points="20 6 9 17 4 12"/></svg>}
                            {toast.type === 'error' && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px]"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>}
                            {toast.type === 'warning' && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px]"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>}
                        </div>
                        <div>
                            <div className="text-[13px] font-semibold text-[var(--text-primary)]">{toast.title}</div>
                            <div className="text-[12px] text-[var(--text-tertiary)] mt-0.5">{toast.message}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}