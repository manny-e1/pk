"use client";
import React, { useState } from 'react';
import { adminService } from '@/services/adminService'; // Pastikan path import sesuai

// === IMPORT MODAL ===
export function ImportModal({ isOpen, onClose, onImportSuccess, showToast }: any) {
    const [importFile, setImportFile] = useState<File | null>(null);
    const [importVendor, setImportVendor] = useState('');
    const [importBatchId, setImportBatchId] = useState('');
    const [decryptionKey, setDecryptionKey] = useState('');
    const [progress, setProgress] = useState({ active: false, percent: 0, text: '' });

    if (!isOpen) return null;

    const handleImportSubmit = async () => {
        if (!importVendor || !importBatchId || !decryptionKey || !importFile) {
            return showToast('warning', 'Incomplete Form', 'Mohon lengkapi semua data import.');
        }

        setProgress({ active: true, percent: 30, text: 'Uploading & Decrypting file...' });

        const formData = new FormData();
        formData.append('seedFile', importFile);
        formData.append('vendor', importVendor);
        formData.append('batchId', importBatchId);
        formData.append('decryptionKey', decryptionKey);

        try {
            // Memanggil Service API Backend
            const result = await adminService.importTotpBatch(formData);

            setProgress({ active: true, percent: 100, text: 'Import complete!' });

            setTimeout(() => {
                setProgress({ active: false, percent: 0, text: '' });
                if (result.success || result.message) {
                    showToast('success', 'Import Successful', result.message || 'Token berhasil diimport');
                    onImportSuccess(); // Refresh Data Table
                } else {
                    showToast('error', 'Import Failed', result.error || 'Terjadi kesalahan sistem');
                }
                onClose();
            }, 1000);
        } catch (err: any) {
            const errorMsg = err.response?.data?.error || err.message;
            showToast('error', 'Import Error', errorMsg);
            setProgress({ active: false, percent: 0, text: '' });
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 transition-all">
            <div className="bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-2xl w-full max-w-lg shadow-2xl animate-in zoom-in-95">
                <div className="p-6 border-b border-[var(--border-secondary)] flex justify-between items-center">
                    <h3 className="text-base font-semibold text-[var(--text-primary)] m-0">Import Token Batch</h3>
                    <button className="p-1.5 rounded-md text-[var(--text-tertiary)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)] transition-colors" onClick={onClose}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    </button>
                </div>
                <div className="p-6 max-h-[60vh] overflow-y-auto custom-scrollbar">
                    <div className="bg-[var(--warning-bg)] border border-[var(--warning)]/30 p-3 rounded-lg mb-5 flex gap-3 text-sm text-[var(--text-secondary)]">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-[var(--warning)] shrink-0 mt-0.5"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                        <div className="leading-relaxed">
                            <strong className="text-[var(--warning)]">Security Notice:</strong> Seed files contain sensitive cryptographic material. Ensure your connection is secure. All seeds are encrypted at rest using AES-256.
                        </div>
                    </div>
                    
                    <div className="mb-5">
                        <label className="block text-[13px] font-medium text-[var(--text-secondary)] mb-2">Vendor</label>
                        <select className="w-full py-2.5 px-3 bg-[var(--bg-tertiary)] border border-[var(--border-secondary)] rounded-lg text-sm outline-none focus:border-blue-500 text-[var(--text-primary)]" value={importVendor} onChange={(e) => setImportVendor(e.target.value)}>
                            <option value="">Select vendor...</option><option value="yubico">Yubico</option><option value="feitian">Feitian</option><option value="safenet">SafeNet / Thales</option>
                        </select>
                    </div>

                    <div className="mb-5">
                        <label className="block text-[13px] font-medium text-[var(--text-secondary)] mb-2">Batch ID</label>
                        <input type="text" className="w-full py-2.5 px-3 bg-[var(--bg-tertiary)] border border-[var(--border-secondary)] rounded-lg text-sm outline-none focus:border-blue-500 text-[var(--text-primary)]" value={importBatchId} onChange={(e) => setImportBatchId(e.target.value)} placeholder="e.g., BATCH-2024-004" />
                    </div>

                    <div className="mb-5">
                        <label className="block text-[13px] font-medium text-[var(--text-secondary)] mb-2">Seed File</label>
                        <div className="border-2 border-dashed border-[var(--border-secondary)] hover:border-blue-500 rounded-xl p-10 text-center cursor-pointer transition-colors bg-[var(--bg-tertiary)]/50 hover:bg-blue-500/5" onClick={() => document.getElementById('seedFile')?.click()}>
                            <input type="file" id="seedFile" className="hidden" onChange={(e) => { if(e.target.files) setImportFile(e.target.files[0]) }} accept=".xlsx,.csv,.xml,.pskc" />
                            <div className="w-12 h-12 bg-[var(--bg-secondary)] rounded-xl flex items-center justify-center mx-auto mb-4">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-blue-500"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                            </div>
                            <div className="text-sm text-[var(--text-secondary)] mb-1">
                                {importFile ? <span className="text-[var(--success)]">{importFile.name}</span> : <><span className="text-blue-500 font-medium">Click to upload</span> or drag and drop</>}
                            </div>
                        </div>
                    </div>

                    <div className="mb-5">
                        <label className="block text-[13px] font-medium text-[var(--text-secondary)] mb-2">Decryption Key</label>
                        <input type="password" className="w-full py-2.5 px-3 bg-[var(--bg-tertiary)] border border-[var(--border-secondary)] rounded-lg text-sm outline-none focus:border-blue-500 text-[var(--text-primary)]" value={decryptionKey} onChange={(e) => setDecryptionKey(e.target.value)} placeholder="Enter decryption key for seed file" />
                    </div>
                    
                    {progress.active && (
                        <div className="mt-5">
                            <div className="h-2 bg-[var(--bg-tertiary)] rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300" style={{ width: `${progress.percent}%` }}></div>
                            </div>
                            <div className="flex justify-between text-xs text-[var(--text-tertiary)] mt-2">
                                <span>{progress.text}</span><span>{progress.percent}%</span>
                            </div>
                        </div>
                    )}
                </div>
                <div className="p-4 border-t border-[var(--border-secondary)] flex justify-end gap-3 bg-[var(--bg-secondary)] rounded-b-2xl">
                    <button className="px-4 py-2 rounded-lg text-sm font-medium bg-[var(--bg-tertiary)] border border-[var(--border-secondary)] text-[var(--text-primary)] hover:bg-[var(--bg-hover)]" onClick={onClose}>Cancel</button>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white" onClick={handleImportSubmit}>
                        Import Tokens
                    </button>
                </div>
            </div>
        </div>
    );
}

// === DETAIL MODAL ===
export function DetailModal({ isOpen, onClose, token, showToast, onSuccess }: any) {
    if (!isOpen || !token) return null;
    const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

    const handleRevoke = async () => {
        try {
            await adminService.updateTotpStatus(token.serial, 'revoked');
            showToast('success', 'Token Revoked', `${token.serial} has been permanently disabled`);
            onSuccess();
            onClose();
        } catch (err: any) {
            showToast('error', 'Action Failed', err.response?.data?.error || err.message);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 transition-all">
            <div className="bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-2xl w-full max-w-2xl shadow-2xl animate-in zoom-in-95">
                <div className="p-6 border-b border-[var(--border-secondary)] flex justify-between items-center">
                    <h3 className="text-base font-semibold text-[var(--text-primary)] m-0">Token Details</h3>
                    <button className="p-1.5 rounded-md text-[var(--text-tertiary)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)] transition-colors" onClick={onClose}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    </button>
                </div>
                <div className="p-6">
                    <div className="mb-6">
                        <div className="text-[11px] font-semibold uppercase tracking-wider text-[var(--text-tertiary)] mb-3 pb-2 border-b border-[var(--border-secondary)]">Token Information</div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1"><span className="text-xs text-[var(--text-tertiary)]">Serial Number</span><span className="text-sm text-[var(--text-primary)] font-mono font-medium">{token.serial}</span></div>
                            <div className="flex flex-col gap-1"><span className="text-xs text-[var(--text-tertiary)]">Status</span><span className="text-sm text-[var(--text-primary)]">{capitalize(token.status)}</span></div>
                            <div className="flex flex-col gap-1"><span className="text-xs text-[var(--text-tertiary)]">Vendor</span><span className="text-sm text-[var(--text-primary)]">{capitalize(token.vendor)}</span></div>
                            <div className="flex flex-col gap-1"><span className="text-xs text-[var(--text-tertiary)]">Batch ID</span><span className="text-sm text-[var(--text-primary)] font-mono">{token.batch}</span></div>
                        </div>
                    </div>
                </div>
                <div className="p-4 border-t border-[var(--border-secondary)] flex justify-end gap-3 bg-[var(--bg-secondary)] rounded-b-2xl">
                    <button className="px-4 py-2 rounded-lg text-sm font-medium bg-[var(--bg-tertiary)] border border-[var(--border-secondary)] text-[var(--text-primary)] hover:bg-[var(--bg-hover)]" onClick={onClose}>Close</button>
                    {token.status !== 'revoked' && (
                        <button className="px-4 py-2 rounded-lg text-sm font-medium bg-[var(--error-bg)] text-[var(--error)] hover:bg-[var(--error)] hover:text-white transition-colors" onClick={handleRevoke}>Revoke Token</button>
                    )}
                </div>
            </div>
        </div>
    );
}

// === ASSIGN MODAL ===
export function AssignModal({ isOpen, onClose, tokenSerial, showToast, onAssignSuccess }: any) {
    const [userId, setUserId] = useState('');

    if (!isOpen) return null;

    const handleAssign = async () => {
        if (!userId) return showToast('warning', 'Empty Input', 'Mohon masukkan User ID');
        try {
            await adminService.assignTotpToken(tokenSerial, userId);
            showToast('success', 'Token Assigned', `${tokenSerial} has been assigned to ${userId}`);
            onAssignSuccess();
            onClose();
            setUserId('');
        } catch (err: any) {
            showToast('error', 'Assign Failed', err.response?.data?.error || err.message);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 transition-all">
            <div className="bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-2xl w-full max-w-md shadow-2xl animate-in zoom-in-95">
                <div className="p-6 border-b border-[var(--border-secondary)] flex justify-between items-center">
                    <h3 className="text-base font-semibold text-[var(--text-primary)] m-0">Assign Token to User</h3>
                    <button className="p-1.5 rounded-md text-[var(--text-tertiary)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)] transition-colors" onClick={onClose}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    </button>
                </div>
                <div className="p-6">
                    <div className="mb-5">
                        <label className="block text-[13px] font-medium text-[var(--text-secondary)] mb-2">Serial Number</label>
                        <input type="text" className="w-full py-2.5 px-3 bg-[var(--bg-tertiary)] border border-[var(--border-secondary)] rounded-lg text-sm font-mono text-[var(--text-tertiary)]" value={tokenSerial} readOnly />
                    </div>
                    <div className="mb-5">
                        <label className="block text-[13px] font-medium text-[var(--text-secondary)] mb-2">User ID (UUID)</label>
                        <input type="text" className="w-full py-2.5 px-3 bg-[var(--bg-tertiary)] border border-[var(--border-secondary)] rounded-lg text-sm outline-none focus:border-blue-500 text-[var(--text-primary)]" placeholder="Enter exact User ID..." value={userId} onChange={(e) => setUserId(e.target.value)} />
                    </div>
                </div>
                <div className="p-4 border-t border-[var(--border-secondary)] flex justify-end gap-3 bg-[var(--bg-secondary)] rounded-b-2xl">
                    <button className="px-4 py-2 rounded-lg text-sm font-medium bg-[var(--bg-tertiary)] border border-[var(--border-secondary)] text-[var(--text-primary)] hover:bg-[var(--bg-hover)]" onClick={onClose}>Cancel</button>
                    <button className="px-4 py-2 rounded-lg text-sm font-medium bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white transition-colors" onClick={handleAssign}>Assign Token</button>
                </div>
            </div>
        </div>
    );
}