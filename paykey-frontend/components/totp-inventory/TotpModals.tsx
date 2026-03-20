// "use client";
// import React, { useState } from 'react';
// import { adminService } from '@/services/adminService'; // Pastikan path import sesuai

// // === IMPORT MODAL ===
// export function ImportModal({ isOpen, onClose, onImportSuccess, showToast }: any) {
//     const [importFile, setImportFile] = useState<File | null>(null);
//     const [importVendor, setImportVendor] = useState('');
//     const [importBatchId, setImportBatchId] = useState('');
//     const [decryptionKey, setDecryptionKey] = useState('');
//     const [progress, setProgress] = useState({ active: false, percent: 0, text: '' });

//     if (!isOpen) return null;

//     const handleImportSubmit = async () => {
//         if (!importVendor || !importBatchId || !decryptionKey || !importFile) {
//             return showToast('warning', 'Incomplete Form', 'Mohon lengkapi semua data import.');
//         }

//         setProgress({ active: true, percent: 30, text: 'Uploading & Decrypting file...' });

//         const formData = new FormData();
//         formData.append('seedFile', importFile);
//         formData.append('vendor', importVendor);
//         formData.append('batchId', importBatchId);
//         formData.append('decryptionKey', decryptionKey);

//         try {
//             // Memanggil Service API Backend
//             const result = await adminService.importTotpBatch(formData);

//             setProgress({ active: true, percent: 100, text: 'Import complete!' });

//             setTimeout(() => {
//                 setProgress({ active: false, percent: 0, text: '' });
//                 if (result.success || result.message) {
//                     showToast('success', 'Import Successful', result.message || 'Token berhasil diimport');
//                     onImportSuccess(); // Refresh Data Table
//                 } else {
//                     showToast('error', 'Import Failed', result.error || 'Terjadi kesalahan sistem');
//                 }
//                 onClose();
//             }, 1000);
//         } catch (err: any) {
//             const errorMsg = err.response?.data?.error || err.message;
//             showToast('error', 'Import Error', errorMsg);
//             setProgress({ active: false, percent: 0, text: '' });
//             onClose();
//         }
//     };

//     return (
//         <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 transition-all">
//             <div className="bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-2xl w-full max-w-lg shadow-2xl animate-in zoom-in-95">
//                 <div className="p-6 border-b border-[var(--border-secondary)] flex justify-between items-center">
//                     <h3 className="text-base font-semibold text-[var(--text-primary)] m-0">Import Token Batch</h3>
//                     <button className="p-1.5 rounded-md text-[var(--text-tertiary)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)] transition-colors" onClick={onClose}>
//                         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
//                     </button>
//                 </div>
//                 <div className="p-6 max-h-[60vh] overflow-y-auto custom-scrollbar">
//                     <div className="bg-[var(--warning-bg)] border border-[var(--warning)]/30 p-3 rounded-lg mb-5 flex gap-3 text-sm text-[var(--text-secondary)]">
//                         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-[var(--warning)] shrink-0 mt-0.5"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
//                         <div className="leading-relaxed">
//                             <strong className="text-[var(--warning)]">Security Notice:</strong> Seed files contain sensitive cryptographic material. Ensure your connection is secure. All seeds are encrypted at rest using AES-256.
//                         </div>
//                     </div>
                    
//                     <div className="mb-5">
//                         <label className="block text-[13px] font-medium text-[var(--text-secondary)] mb-2">Vendor</label>
//                         <select className="w-full py-2.5 px-3 bg-[var(--bg-tertiary)] border border-[var(--border-secondary)] rounded-lg text-sm outline-none focus:border-blue-500 text-[var(--text-primary)]" value={importVendor} onChange={(e) => setImportVendor(e.target.value)}>
//                             <option value="">Select vendor...</option><option value="yubico">Yubico</option><option value="feitian">Feitian</option><option value="safenet">SafeNet / Thales</option>
//                         </select>
//                     </div>

//                     <div className="mb-5">
//                         <label className="block text-[13px] font-medium text-[var(--text-secondary)] mb-2">Batch ID</label>
//                         <input type="text" className="w-full py-2.5 px-3 bg-[var(--bg-tertiary)] border border-[var(--border-secondary)] rounded-lg text-sm outline-none focus:border-blue-500 text-[var(--text-primary)]" value={importBatchId} onChange={(e) => setImportBatchId(e.target.value)} placeholder="e.g., BATCH-2024-004" />
//                     </div>

//                     <div className="mb-5">
//                         <label className="block text-[13px] font-medium text-[var(--text-secondary)] mb-2">Seed File</label>
//                         <div className="border-2 border-dashed border-[var(--border-secondary)] hover:border-blue-500 rounded-xl p-10 text-center cursor-pointer transition-colors bg-[var(--bg-tertiary)]/50 hover:bg-blue-500/5" onClick={() => document.getElementById('seedFile')?.click()}>
//                             <input type="file" id="seedFile" className="hidden" onChange={(e) => { if(e.target.files) setImportFile(e.target.files[0]) }} accept=".xlsx,.csv,.xml,.pskc" />
//                             <div className="w-12 h-12 bg-[var(--bg-secondary)] rounded-xl flex items-center justify-center mx-auto mb-4">
//                                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-blue-500"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
//                             </div>
//                             <div className="text-sm text-[var(--text-secondary)] mb-1">
//                                 {importFile ? <span className="text-[var(--success)]">{importFile.name}</span> : <><span className="text-blue-500 font-medium">Click to upload</span> or drag and drop</>}
//                             </div>
//                         </div>
//                     </div>

//                     <div className="mb-5">
//                         <label className="block text-[13px] font-medium text-[var(--text-secondary)] mb-2">Decryption Key</label>
//                         <input type="password" className="w-full py-2.5 px-3 bg-[var(--bg-tertiary)] border border-[var(--border-secondary)] rounded-lg text-sm outline-none focus:border-blue-500 text-[var(--text-primary)]" value={decryptionKey} onChange={(e) => setDecryptionKey(e.target.value)} placeholder="Enter decryption key for seed file" />
//                     </div>
                    
//                     {progress.active && (
//                         <div className="mt-5">
//                             <div className="h-2 bg-[var(--bg-tertiary)] rounded-full overflow-hidden">
//                                 <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300" style={{ width: `${progress.percent}%` }}></div>
//                             </div>
//                             <div className="flex justify-between text-xs text-[var(--text-tertiary)] mt-2">
//                                 <span>{progress.text}</span><span>{progress.percent}%</span>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//                 <div className="p-4 border-t border-[var(--border-secondary)] flex justify-end gap-3 bg-[var(--bg-secondary)] rounded-b-2xl">
//                     <button className="px-4 py-2 rounded-lg text-sm font-medium bg-[var(--bg-tertiary)] border border-[var(--border-secondary)] text-[var(--text-primary)] hover:bg-[var(--bg-hover)]" onClick={onClose}>Cancel</button>
//                     <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white" onClick={handleImportSubmit}>
//                         Import Tokens
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// // === DETAIL MODAL ===
// export function DetailModal({ isOpen, onClose, token, showToast, onSuccess }: any) {
//     if (!isOpen || !token) return null;
//     const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

//     const handleRevoke = async () => {
//         try {
//             await adminService.updateTotpStatus(token.serial, 'revoked');
//             showToast('success', 'Token Revoked', `${token.serial} has been permanently disabled`);
//             onSuccess();
//             onClose();
//         } catch (err: any) {
//             showToast('error', 'Action Failed', err.response?.data?.error || err.message);
//         }
//     };

//     return (
//         <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 transition-all">
//             <div className="bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-2xl w-full max-w-2xl shadow-2xl animate-in zoom-in-95">
//                 <div className="p-6 border-b border-[var(--border-secondary)] flex justify-between items-center">
//                     <h3 className="text-base font-semibold text-[var(--text-primary)] m-0">Token Details</h3>
//                     <button className="p-1.5 rounded-md text-[var(--text-tertiary)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)] transition-colors" onClick={onClose}>
//                         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
//                     </button>
//                 </div>
//                 <div className="p-6">
//                     <div className="mb-6">
//                         <div className="text-[11px] font-semibold uppercase tracking-wider text-[var(--text-tertiary)] mb-3 pb-2 border-b border-[var(--border-secondary)]">Token Information</div>
//                         <div className="grid grid-cols-2 gap-4">
//                             <div className="flex flex-col gap-1"><span className="text-xs text-[var(--text-tertiary)]">Serial Number</span><span className="text-sm text-[var(--text-primary)] font-mono font-medium">{token.serial}</span></div>
//                             <div className="flex flex-col gap-1"><span className="text-xs text-[var(--text-tertiary)]">Status</span><span className="text-sm text-[var(--text-primary)]">{capitalize(token.status)}</span></div>
//                             <div className="flex flex-col gap-1"><span className="text-xs text-[var(--text-tertiary)]">Vendor</span><span className="text-sm text-[var(--text-primary)]">{capitalize(token.vendor)}</span></div>
//                             <div className="flex flex-col gap-1"><span className="text-xs text-[var(--text-tertiary)]">Batch ID</span><span className="text-sm text-[var(--text-primary)] font-mono">{token.batch}</span></div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="p-4 border-t border-[var(--border-secondary)] flex justify-end gap-3 bg-[var(--bg-secondary)] rounded-b-2xl">
//                     <button className="px-4 py-2 rounded-lg text-sm font-medium bg-[var(--bg-tertiary)] border border-[var(--border-secondary)] text-[var(--text-primary)] hover:bg-[var(--bg-hover)]" onClick={onClose}>Close</button>
//                     {token.status !== 'revoked' && (
//                         <button className="px-4 py-2 rounded-lg text-sm font-medium bg-[var(--error-bg)] text-[var(--error)] hover:bg-[var(--error)] hover:text-white transition-colors" onClick={handleRevoke}>Revoke Token</button>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }

// // === ASSIGN MODAL ===
// export function AssignModal({ isOpen, onClose, tokenSerial, showToast, onAssignSuccess }: any) {
//     const [userId, setUserId] = useState('');

//     if (!isOpen) return null;

//     const handleAssign = async () => {
//         if (!userId) return showToast('warning', 'Empty Input', 'Mohon masukkan User ID');
//         try {
//             await adminService.assignTotpToken(tokenSerial, userId);
//             showToast('success', 'Token Assigned', `${tokenSerial} has been assigned to ${userId}`);
//             onAssignSuccess();
//             onClose();
//             setUserId('');
//         } catch (err: any) {
//             showToast('error', 'Assign Failed', err.response?.data?.error || err.message);
//         }
//     };

//     return (
//         <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 transition-all">
//             <div className="bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-2xl w-full max-w-md shadow-2xl animate-in zoom-in-95">
//                 <div className="p-6 border-b border-[var(--border-secondary)] flex justify-between items-center">
//                     <h3 className="text-base font-semibold text-[var(--text-primary)] m-0">Assign Token to User</h3>
//                     <button className="p-1.5 rounded-md text-[var(--text-tertiary)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)] transition-colors" onClick={onClose}>
//                         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
//                     </button>
//                 </div>
//                 <div className="p-6">
//                     <div className="mb-5">
//                         <label className="block text-[13px] font-medium text-[var(--text-secondary)] mb-2">Serial Number</label>
//                         <input type="text" className="w-full py-2.5 px-3 bg-[var(--bg-tertiary)] border border-[var(--border-secondary)] rounded-lg text-sm font-mono text-[var(--text-tertiary)]" value={tokenSerial} readOnly />
//                     </div>
//                     <div className="mb-5">
//                         <label className="block text-[13px] font-medium text-[var(--text-secondary)] mb-2">User ID (UUID)</label>
//                         <input type="text" className="w-full py-2.5 px-3 bg-[var(--bg-tertiary)] border border-[var(--border-secondary)] rounded-lg text-sm outline-none focus:border-blue-500 text-[var(--text-primary)]" placeholder="Enter exact User ID..." value={userId} onChange={(e) => setUserId(e.target.value)} />
//                     </div>
//                 </div>
//                 <div className="p-4 border-t border-[var(--border-secondary)] flex justify-end gap-3 bg-[var(--bg-secondary)] rounded-b-2xl">
//                     <button className="px-4 py-2 rounded-lg text-sm font-medium bg-[var(--bg-tertiary)] border border-[var(--border-secondary)] text-[var(--text-primary)] hover:bg-[var(--bg-hover)]" onClick={onClose}>Cancel</button>
//                     <button className="px-4 py-2 rounded-lg text-sm font-medium bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white transition-colors" onClick={handleAssign}>Assign Token</button>
//                 </div>
//             </div>
//         </div>
//     );
// }

"use client";
import React, { useState } from 'react';
import { adminService } from '@/services/adminService';

// === HELPERS UNTUK MODAL ===
const capitalize = (s: string) => s ? s.charAt(0).toUpperCase() + s.slice(1) : '';
const getVendorName = (vendor: string) => { const v: any = { yubico: 'Yubico', feitian: 'Feitian', safenet: 'SafeNet' }; return v[vendor] || vendor; };
const formatDate = (dateStr: string) => dateStr ? new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : '-';

// === IMPORT MODAL (DENGAN PERIODE & ALGORITMA) ===
export function ImportModal({ isOpen, onClose, onImportSuccess, showToast }: any) {
    const [importFile, setImportFile] = useState<File | null>(null);
    const [importVendor, setImportVendor] = useState('');
    const [importBatchId, setImportBatchId] = useState('');
    const [decryptionKey, setDecryptionKey] = useState('');
    
    // Konfigurasi Kriptografi Baru
    const [importPeriod, setImportPeriod] = useState('30');
    const [importAlgorithm, setImportAlgorithm] = useState('SHA1');
    
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
        // Kirim konfigurasi ke Backend
        formData.append('period', importPeriod);
        formData.append('algorithm', importAlgorithm);

        try {
            const result = await adminService.importTotpBatch(formData);
            setProgress({ active: true, percent: 100, text: 'Import complete!' });
            setTimeout(() => {
                setProgress({ active: false, percent: 0, text: '' });
                if (result.success || result.message) {
                    showToast('success', 'Import Successful', result.message || 'Token berhasil diimport');
                    onImportSuccess(); 
                } else {
                    showToast('error', 'Import Failed', result.error || 'Terjadi kesalahan sistem');
                }
                onClose();
            }, 1000);
        } catch (err: any) {
            showToast('error', 'Import Error', err.response?.data?.error || err.message);
            setProgress({ active: false, percent: 0, text: '' });
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[1000] transition-all">
            <div className="bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-2xl w-full max-w-lg shadow-2xl animate-in zoom-in-95">
                <div className="p-5 border-b border-[var(--border-secondary)] flex justify-between items-center">
                    <h3 className="text-base font-semibold text-[var(--text-primary)] m-0">Import Token Batch</h3>
                    <button className="p-1.5 rounded-md text-[var(--text-tertiary)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)] transition-colors" onClick={onClose}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    </button>
                </div>
                <div className="p-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
                    
                    <div className="grid grid-cols-2 gap-4 mb-5">
                        <div>
                            <label className="block text-[13px] font-medium text-[var(--text-secondary)] mb-2">Vendor</label>
                            <select className="w-full py-2.5 px-3 bg-[var(--bg-tertiary)] border border-[var(--border-secondary)] rounded-lg text-sm outline-none focus:border-[var(--accent)] text-[var(--text-primary)]" value={importVendor} onChange={(e) => setImportVendor(e.target.value)}>
                                <option value="">Select vendor...</option><option value="yubico">Yubico</option><option value="feitian">Feitian</option><option value="safenet">SafeNet / Thales</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-[13px] font-medium text-[var(--text-secondary)] mb-2">Batch ID</label>
                            <input type="text" className="w-full py-2.5 px-3 bg-[var(--bg-tertiary)] border border-[var(--border-secondary)] rounded-lg text-sm outline-none focus:border-[var(--accent)] text-[var(--text-primary)]" value={importBatchId} onChange={(e) => setImportBatchId(e.target.value)} placeholder="e.g., BATCH-001" />
                        </div>
                    </div>

                    {/* KONFIGURASI KRIPTOGRAFI */}
                    <div className="grid grid-cols-2 gap-4 mb-5 p-4 border border-[var(--border-secondary)] rounded-xl bg-[rgba(35,131,226,0.03)]">
                        <div>
                            <label className="block text-[12px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-2">Algorithm</label>
                            <select className="w-full py-2 px-3 bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-lg text-sm outline-none focus:border-[var(--accent)] text-[var(--text-primary)]" value={importAlgorithm} onChange={(e) => setImportAlgorithm(e.target.value)}>
                                <option value="SHA1">HMAC-SHA1</option>
                                <option value="SHA256">HMAC-SHA256</option>
                                <option value="SHA512">HMAC-SHA512</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-[12px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-2">Period</label>
                            <select className="w-full py-2 px-3 bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-lg text-sm outline-none focus:border-[var(--accent)] text-[var(--text-primary)]" value={importPeriod} onChange={(e) => setImportPeriod(e.target.value)}>
                                <option value="30">30 Seconds</option>
                                <option value="60">60 Seconds</option>
                            </select>
                        </div>
                    </div>

                    <div className="mb-5">
                        <label className="block text-[13px] font-medium text-[var(--text-secondary)] mb-2">Seed File</label>
                        <div className="border-2 border-dashed border-[var(--border-secondary)] hover:border-[var(--accent)] rounded-xl p-8 text-center cursor-pointer transition-colors hover:bg-[rgba(35,131,226,0.05)]" onClick={() => document.getElementById('seedFile')?.click()}>
                            <input type="file" id="seedFile" className="hidden" onChange={(e) => { if(e.target.files) setImportFile(e.target.files[0]) }} accept=".xlsx,.csv,.xml,.pskc" />
                            <div className="w-10 h-10 bg-[var(--bg-tertiary)] rounded-full flex items-center justify-center mx-auto mb-3">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-[var(--accent)]"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                            </div>
                            <div className="text-sm text-[var(--text-secondary)]">
                                {importFile ? <span className="text-[var(--success)]">{importFile.name}</span> : <>Click to upload CSV/Excel</>}
                            </div>
                        </div>
                    </div>

                    <div className="mb-2">
                        <label className="block text-[13px] font-medium text-[var(--text-secondary)] mb-2">Master Decryption Key</label>
                        <input type="password" className="w-full py-2.5 px-3 bg-[var(--bg-tertiary)] border border-[var(--border-secondary)] rounded-lg text-sm outline-none focus:border-[var(--accent)] text-[var(--text-primary)]" value={decryptionKey} onChange={(e) => setDecryptionKey(e.target.value)} placeholder="Enter key to decrypt factory seeds" />
                    </div>
                </div>
                <div className="p-4 border-t border-[var(--border-secondary)] flex justify-end gap-3 rounded-b-2xl bg-[var(--bg-secondary)]">
                    <button className="px-4 py-2 rounded-lg text-sm font-medium bg-[var(--bg-tertiary)] border border-[var(--border-secondary)] text-[var(--text-primary)] hover:bg-[var(--bg-hover)] transition-colors" onClick={onClose}>Cancel</button>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white transition-colors" onClick={handleImportSubmit}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
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
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[1000] transition-all">
            <div className="bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-2xl w-full max-w-2xl shadow-2xl animate-in zoom-in-95">
                <div className="p-5 border-b border-[var(--border-secondary)] flex justify-between items-center">
                    <h3 className="text-base font-semibold text-[var(--text-primary)] m-0">Token Details</h3>
                    <button className="p-1.5 rounded-md text-[var(--text-tertiary)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)] transition-colors" onClick={onClose}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    </button>
                </div>
                
                <div className="p-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
                    
                    {/* SECTION 1: TOKEN INFORMATION */}
                    <div className="mb-6">
                        <div className="text-[11px] font-semibold uppercase tracking-wider text-[var(--text-tertiary)] mb-3 pb-2 border-b border-[var(--border-secondary)]">Token Information</div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1">
                                <span className="text-xs text-[var(--text-tertiary)]">Serial Number</span>
                                <span className="text-sm text-[var(--text-primary)] font-mono font-medium">{token.serial}</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-xs text-[var(--text-tertiary)]">Status</span>
                                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium w-fit border
                                    ${token.status === 'available' ? 'bg-[var(--success-bg)] text-[var(--success)] border-[var(--success-border)]' : ''}
                                    ${token.status === 'assigned' ? 'bg-[rgba(35,131,226,0.15)] text-[var(--accent)] border-[rgba(35,131,226,0.3)]' : ''}
                                    ${token.status === 'suspended' ? 'bg-[var(--warning-bg)] text-[var(--warning)] border-[rgba(251,191,36,0.3)]' : ''}
                                    ${token.status === 'revoked' ? 'bg-[var(--error-bg)] text-[var(--error)] border-[rgba(248,113,113,0.3)]' : ''}
                                `}>
                                    {capitalize(token.status)}
                                </span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-xs text-[var(--text-tertiary)]">Vendor</span>
                                <span className="text-sm text-[var(--text-primary)] font-medium">{getVendorName(token.vendor)}</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-xs text-[var(--text-tertiary)]">Batch ID</span>
                                <span className="text-sm text-[var(--text-primary)] font-mono font-medium">{token.batch}</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-xs text-[var(--text-tertiary)]">Algorithm</span>
                                <span className="text-sm text-[var(--text-primary)] font-medium">TOTP-SHA1</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-xs text-[var(--text-tertiary)]">Period</span>
                                <span className="text-sm text-[var(--text-primary)] font-medium">30 seconds</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-xs text-[var(--text-tertiary)]">Expiry Date</span>
                                <span className="text-sm text-[var(--text-primary)] font-medium">{formatDate(token.expiry)}</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-xs text-[var(--text-tertiary)]">Last Used</span>
                                <span className="text-sm text-[var(--text-primary)] font-medium">{token.lastUsed || 'Never'}</span>
                            </div>
                        </div>
                    </div>

                    {/* SECTION 2: ASSIGNED USER (JIKA ADA) */}
                    {token.user && (
                        <div className="mb-6">
                            <div className="text-[11px] font-semibold uppercase tracking-wider text-[var(--text-tertiary)] mb-3 pb-2 border-b border-[var(--border-secondary)]">Assigned User</div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col gap-1">
                                    <span className="text-xs text-[var(--text-tertiary)]">Name</span>
                                    <span className="text-sm text-[var(--text-primary)] font-medium">{token.user.name}</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-xs text-[var(--text-tertiary)]">User ID</span>
                                    <span className="text-sm text-[var(--text-primary)] font-mono font-medium">{token.user.id}</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* SECTION 3: AUDIT LOG */}
                    <div className="mb-2">
                        <div className="text-[11px] font-semibold uppercase tracking-wider text-[var(--text-tertiary)] mb-3 pb-2 border-b border-[var(--border-secondary)]">Audit Log</div>
                        <div className="flex flex-col">
                            {token.user && (
                                <div className="flex gap-3 py-2.5 border-b border-[var(--border-secondary)]">
                                    <div className="w-7 h-7 rounded-md bg-[rgba(35,131,226,0.15)] text-[var(--accent)] flex items-center justify-center shrink-0">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>
                                    </div>
                                    <div>
                                        <div className="text-[13px] text-[var(--text-primary)]">Assigned to {token.user.name}</div>
                                        <div className="text-[11px] text-[var(--text-tertiary)] mt-0.5">Assigned automatically via system</div>
                                    </div>
                                </div>
                            )}
                            <div className="flex gap-3 py-2.5">
                                <div className="w-7 h-7 rounded-md bg-[var(--success-bg)] text-[var(--success)] flex items-center justify-center shrink-0">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                                </div>
                                <div>
                                    <div className="text-[13px] text-[var(--text-primary)]">Imported from batch {token.batch}</div>
                                    <div className="text-[11px] text-[var(--text-tertiary)] mt-0.5">System Administrator</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                
                <div className="p-4 border-t border-[var(--border-secondary)] flex justify-end gap-3 rounded-b-2xl bg-[var(--bg-secondary)]">
                    <button className="px-4 py-2 rounded-lg text-sm font-medium bg-[var(--bg-tertiary)] border border-[var(--border-secondary)] text-[var(--text-primary)] hover:bg-[var(--bg-hover)] transition-colors" onClick={onClose}>Close</button>
                    {token.status !== 'revoked' && (
                        <button className="px-4 py-2 rounded-lg text-sm font-medium bg-[var(--error-bg)] text-[var(--error)] hover:bg-[var(--error)] hover:text-white transition-colors" onClick={handleRevoke}>Revoke Token</button>
                    )}
                </div>
            </div>
        </div>
    );
}

// === ASSIGN MODAL (DENGAN DROPDOWN UI YANG RAPI) ===
export function AssignModal({ isOpen, onClose, tokenSerial, showToast, onAssignSuccess }: any) {
    const [userId, setUserId] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<any[]>([]);
    const [isSearching, setIsSearching] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    
    const [verificationCode, setVerificationCode] = useState('');
    const [isAssigning, setIsAssigning] = useState(false);

    React.useEffect(() => {
        const fetchUsers = async () => {
            if (searchQuery.trim().length < 2) {
                setSearchResults([]);
                setShowDropdown(false);
                return;
            }
            if (userId && searchQuery.includes(' - ')) return;

            setIsSearching(true);
            try {
                const response = await adminService.searchUsers(searchQuery);
                let users = [];
                if (Array.isArray(response)) {
                    users = response;
                } else if (response && Array.isArray(response.data)) {
                    users = response.data;
                } else if (response && Array.isArray(response.users)) {
                    users = response.users;
                }

                const lowerQuery = searchQuery.toLowerCase();
                const filteredUsers = users.filter((u: any) => 
                    (u.name && u.name.toLowerCase().includes(lowerQuery)) || 
                    (u.email && u.email.toLowerCase().includes(lowerQuery))
                );

                setSearchResults(filteredUsers);
                setShowDropdown(true);
            } catch (error) {
                console.error("Search failed", error);
            } finally {
                setIsSearching(false);
            }
        };

        const timeoutId = setTimeout(fetchUsers, 400);
        return () => clearTimeout(timeoutId);
    }, [searchQuery, userId]);

    if (!isOpen) return null;

    const handleSelectUser = (user: any) => {
        setUserId(user.id);
        setSearchQuery(`${user.name} - ${user.email}`);
        setShowDropdown(false);
    };

    const handleAssign = async () => {
        if (!userId) return showToast('warning', 'Validasi', 'Mohon pilih User terlebih dahulu');
        if (!verificationCode || verificationCode.length < 6) return showToast('warning', 'Validasi', 'Kode Verifikasi 6 digit wajib diisi');
        
        setIsAssigning(true);
        try {
            await adminService.assignTotpToken(tokenSerial, userId, verificationCode);
            showToast('success', 'Token Assigned', `${tokenSerial} berhasil ditautkan`);
            onAssignSuccess();
            onClose();
            setUserId('');
            setSearchQuery('');
            setVerificationCode('');
        } catch (err: any) {
            showToast('error', 'Assign Failed', err.response?.data?.error || err.message);
        } finally {
            setIsAssigning(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[1000] transition-all">
            
            {showDropdown && (
                <div className="fixed inset-0 z-[1001]" onClick={() => setShowDropdown(false)} />
            )}

            <div className="bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-2xl w-full max-w-md shadow-2xl animate-in zoom-in-95 relative z-[1002]">
                <div className="p-5 border-b border-[var(--border-secondary)] flex justify-between items-center bg-[var(--bg-secondary)] rounded-t-2xl">
                    <h3 className="text-base font-semibold text-[var(--text-primary)] m-0">Assign Token to User</h3>
                    <button className="p-1.5 rounded-md text-[var(--text-tertiary)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)] transition-colors" onClick={onClose} disabled={isAssigning}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    </button>
                </div>
                
                <div className="p-6">
                    <div className="mb-5">
                        <label className="block text-[13px] font-medium text-[var(--text-secondary)] mb-2">Serial Number</label>
                        <input type="text" className="w-full py-2.5 px-3 bg-[var(--bg-tertiary)] border border-[var(--border-secondary)] rounded-lg text-sm font-mono text-[var(--text-tertiary)] opacity-70 cursor-not-allowed" value={tokenSerial} readOnly />
                    </div>
                    
                    <div className="mb-5 relative">
                        <label className="block text-[13px] font-medium text-[var(--text-secondary)] mb-2">Search User</label>
                        <div className="relative flex items-center">
                            <input 
                                type="text" 
                                className={`w-full py-2.5 pl-10 pr-4 bg-[var(--bg-tertiary)] border ${userId ? 'border-[var(--success)] shadow-[0_0_0_1px_var(--success)]' : 'border-[var(--border-secondary)] focus:border-[var(--accent)]'} rounded-lg text-sm outline-none text-[var(--text-primary)] placeholder-[var(--text-tertiary)] transition-all`}
                                placeholder="Ketik nama atau email..." 
                                value={searchQuery} 
                                onChange={(e) => {
                                    setSearchQuery(e.target.value);
                                    if (userId) setUserId('');
                                    if (e.target.value.length > 1) setShowDropdown(true);
                                }} 
                                disabled={isAssigning} 
                            />
                            
                            <div className="absolute left-3 flex items-center justify-center">
                                {userId ? (
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 text-[var(--success)]"><polyline points="20 6 9 17 4 12"/></svg>
                                ) : (
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[var(--text-tertiary)]"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                                )}
                            </div>

                            {isSearching && !userId && (
                                <div className="absolute right-3 flex items-center justify-center">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[var(--accent)] animate-spin"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
                                </div>
                            )}
                        </div>

                        {showDropdown && (
                            <div className="absolute top-[100%] left-0 w-full mt-2 bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] z-[1003] max-h-[220px] overflow-y-auto custom-scrollbar overflow-hidden animate-in fade-in slide-in-from-top-2">
                                {searchResults.length === 0 && !isSearching ? (
                                    <div className="p-4 text-[13px] text-[var(--text-tertiary)] text-center flex flex-col items-center gap-2">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                                        User tidak ditemukan
                                    </div>
                                ) : (
                                    <div className="py-1">
                                        {searchResults.map((user: any) => (
                                            <div 
                                                key={user.id} 
                                                className="px-4 py-2.5 hover:bg-[var(--bg-tertiary)] cursor-pointer border-b border-[var(--border-secondary)] last:border-0 transition-colors flex items-center gap-3"
                                                onClick={() => handleSelectUser(user)}
                                            >
                                                <div className="w-8 h-8 rounded-full bg-[rgba(35,131,226,0.15)] text-[var(--accent)] flex items-center justify-center text-xs font-bold uppercase shrink-0">
                                                    {user.initials || user.name.charAt(0)}
                                                </div>
                                                <div className="flex flex-col overflow-hidden w-full">
                                                    <div className="text-[13px] font-medium text-[var(--text-primary)] truncate">{user.name}</div>
                                                    <div className="text-[11px] text-[var(--text-tertiary)] truncate">{user.email}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                    
                    <div className="mb-2">
                        <label className="block text-[13px] font-medium text-[var(--text-secondary)] mb-2">Verification Code</label>
                        <input type="text" className="w-full py-2.5 px-3 bg-[var(--bg-tertiary)] border border-[var(--border-secondary)] rounded-lg text-sm font-mono tracking-[0.25em] outline-none focus:border-[var(--accent)] text-[var(--text-primary)] placeholder-[var(--text-tertiary)]" placeholder="123456" maxLength={6} value={verificationCode} onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, ''))} disabled={isAssigning} />
                        <div className="text-[11px] text-[var(--text-tertiary)] mt-2 flex items-start gap-1.5">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 shrink-0 mt-0.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                            Validasi fisik token dengan memasukkan 6 angka yang tampil di layar token nasabah saat ini.
                        </div>
                    </div>
                </div>
                
                <div className="p-4 border-t border-[var(--border-secondary)] flex justify-end gap-3 bg-[var(--bg-secondary)] rounded-b-2xl">
                    <button className="px-4 py-2 rounded-lg text-sm font-medium bg-[var(--bg-tertiary)] border border-[var(--border-secondary)] text-[var(--text-primary)] hover:bg-[var(--bg-hover)] transition-colors disabled:opacity-50" onClick={onClose} disabled={isAssigning}>Cancel</button>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white transition-colors disabled:opacity-50 disabled:bg-[var(--bg-tertiary)] disabled:text-[var(--text-tertiary)]" onClick={handleAssign} disabled={isAssigning || !userId || verificationCode.length < 6}>
                        {isAssigning ? 'Assigning...' : 'Assign Token'}
                    </button>
                </div>
            </div>
        </div>
    );
}