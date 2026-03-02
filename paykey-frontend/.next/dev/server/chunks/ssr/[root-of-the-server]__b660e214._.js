module.exports = [
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/services/userService.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "userService",
    ()=>userService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
// Setup Axios dengan Base URL dan Credentials
const API_URL = ("TURBOPACK compile-time value", "http://localhost:4000/admin") || 'https://api.authkey.my';
const apiClient = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: API_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});
const userService = {
    // 1. GET ALL USERS
    getAll: async ()=>{
        try {
            // Backend route: GET /api/users
            // Jika endpoint backend anda adalah /users (tanpa /api), sesuaikan di sini
            const { data } = await apiClient.get('/api/users');
            return data;
        } catch (error) {
            console.error("Failed to fetch users:", error);
            throw error;
        }
    },
    // 2. UPDATE STATUS (Suspend/Reactivate)
    updateStatus: async (userId, status, reason, note)=>{
        try {
            const payload = {
                status,
                reason,
                note
            };
            // Backend route: PUT /api/users/:id/status
            const { data } = await apiClient.put(`/api/users/${userId}/status`, payload);
            return data;
        } catch (error) {
            console.error("Failed to update user status:", error);
            throw error;
        }
    }
};
}),
"[project]/app/(admin)/users/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UsersPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// Import Service dan Type dari file yang baru dibuat
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$userService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/userService.ts [app-ssr] (ecmascript)");
// 'use client';
// import { useState, useEffect, useMemo, Fragment } from 'react';
// // --- TYPES ---
// interface Device {
//   id: string;
//   name: string;
//   model: string;
//   type: 'mobile' | 'desktop' | 'hardware';
//   status: 'active' | 'suspended' | 'revoked';
//   lastUsed: string;
// }
// interface User {
//   id: string;
//   name: string;
//   initials: string;
//   email: string;
//   mobile: string;
//   status: 'active' | 'suspended';
//   joined: string;
//   lastActive: string;
//   devices: Device[];
// }
// export default function UsersPage() {
//   // --- STATE ---
//   const [users, setUsers] = useState<User[]>([]);
//   const [loading, setLoading] = useState(true);
//   // Filter & Pagination State
//   const [searchQuery, setSearchQuery] = useState('');
//   const [statusFilter, setStatusFilter] = useState('');
//   const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10;
//   // Modal & Drawer State
//   const [selectedUser, setSelectedUser] = useState<User | null>(null); // Drawer
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [modalAction, setModalAction] = useState<'suspend' | 'reactivate' | null>(null);
//   const [actionUser, setActionUser] = useState<User | null>(null);
//   // Form State (Suspend)
//   const [suspendReason, setSuspendReason] = useState('');
//   const [suspendNote, setSuspendNote] = useState('');
//   // --- ICONS (SVG PATHS ONLY) ---
//   // Object ini berisi "isi" dari SVG (path/rect) untuk digunakan DI DALAM tag <svg> pada tabel
//   const icons = {
//     mobile: <path d="M5 2h14a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm7 16h.01"/>,
//     desktop: <><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></>,
//     hardware: <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>
//   };
//   // --- API FETCH ---
//   useEffect(() => {
//     fetch('https://api.authkey.my/api/users')
//       .then(res => res.json())
//       .then(data => {
//         setUsers(data);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error("Gagal load users:", err);
//         setLoading(false);
//       });
//   }, []);
//   // --- LOGIC: Filter & Pagination ---
//   const filteredUsers = useMemo(() => {
//     return users.filter(user => {
//       const matchesSearch = 
//         user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         user.mobile.includes(searchQuery);
//       const matchesFilter = statusFilter ? user.status === statusFilter : true;
//       return matchesSearch && matchesFilter;
//     });
//   }, [users, searchQuery, statusFilter]);
//   // Reset pagination saat filter berubah
//   useEffect(() => {
//     // eslint-disable-next-line react-hooks/set-state-in-effect
//     setCurrentPage(1);
//   }, [searchQuery, statusFilter]);
//   const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
//   const paginatedUsers = filteredUsers.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );
//   // --- ACTIONS ---
//   const handleStatusChange = async () => {
//     if (!actionUser || !modalAction) return;
//     const newStatus = modalAction === 'suspend' ? 'suspended' : 'active';
//     const payload = {
//         status: newStatus,
//         reason: modalAction === 'suspend' ? suspendReason : null,
//         note: modalAction === 'suspend' ? suspendNote : null
//     };
//     try {
//         const res = await fetch(`https://api.authkey.my/api/users/${actionUser.id}/status`, {
//             method: 'PUT',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(payload)
//         });
//         if (res.ok) {
//             setUsers(prev => prev.map(u => 
//                 u.id === actionUser.id ? { ...u, status: newStatus } : u
//             ));
//             // Update drawer jika sedang terbuka
//             if (selectedUser?.id === actionUser.id) {
//                 setSelectedUser(prev => prev ? { ...prev, status: newStatus } : null);
//             }
//             closeModal();
//         }
//     } catch (error) {
//         console.error("Failed to update status", error);
//     }
//   };
//   const toggleExpand = (id: string) => {
//     const newRows = new Set(expandedRows);
//     if (newRows.has(id)) newRows.delete(id);
//     else newRows.add(id);
//     setExpandedRows(newRows);
//   };
//   const openModal = (action: 'suspend' | 'reactivate', user: User) => {
//     setActionUser(user);
//     setModalAction(action);
//     setSuspendReason('');
//     setSuspendNote('');
//     setIsModalOpen(true);
//   };
//   const closeModal = () => {
//     setIsModalOpen(false);
//     setModalAction(null);
//     setActionUser(null);
//   };
//   // --- RENDER ---
//   return (
//     <div className="flex min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans text-[14px]">
//       <main className="flex-1 flex flex-col overflow-hidden relative">
//         {/* HEADER */}
//         <header className="p-[12px_24px] border-b border-[var(--border-secondary)] flex items-center justify-between bg-[var(--bg-secondary)]">
//           <div className="flex items-center gap-2 text-sm">
//             <span className="text-[var(--text-tertiary)]">Management</span>
//             <span className="text-[var(--text-tertiary)]">/</span>
//             <span className="font-medium text-[var(--text-primary)]">Users</span>
//           </div>
//           <div className="flex gap-3">
//             <button className="flex items-center gap-1.5 px-[14px] py-[8px] bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[6px] text-[13px] font-medium text-[var(--text-primary)] hover:bg-[var(--bg-hover)] transition-all">
//               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
//               Export
//             </button>
//             <button className="flex items-center gap-1.5 px-[14px] py-[8px] bg-[var(--accent)] rounded-[6px] text-[13px] font-medium text-white hover:bg-[#0f70d4] transition-all">
//               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>
//               Add User
//             </button>
//           </div>
//         </header>
//         {/* CONTENT AREA */}
//         <div className="flex-1 overflow-auto p-6">
//           {/* STATS BAR - PERBAIKAN: Menggunakan <svg> wrapper untuk setiap icon */}
//           <div className="grid grid-cols-4 gap-3 mb-5">
//             <StatCard 
//               label="Total Users" 
//               value={users.length} 
//               icon={
//                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                   <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
//                 </svg>
//               } 
//             />
//             <StatCard 
//               label="Active" 
//               value={users.filter(u => u.status === 'active').length} 
//               color="text-[var(--success)]" 
//               icon={
//                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                   <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
//                 </svg>
//               } 
//             />
//             <StatCard 
//               label="Suspended" 
//               value={users.filter(u => u.status === 'suspended').length} 
//               color="text-[var(--warning)]" 
//               icon={
//                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                   <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
//                 </svg>
//               } 
//             />
//             <StatCard 
//               label="Total Devices" 
//               value={users.reduce((acc, u) => acc + u.devices.length, 0)} 
//               icon={
//                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                   <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
//                 </svg>
//               } 
//             />
//           </div>
//           {/* TOOLBAR */}
//           <div className="flex items-center gap-3 mb-4 flex-wrap">
//             <div className="flex items-center gap-2 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[6px] px-[12px] py-[8px] min-w-[300px]">
//               <svg className="w-4 h-4 text-[var(--text-tertiary)] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
//               <input 
//                 type="text" 
//                 placeholder="Search by name, email, or mobile..." 
//                 className="flex-1 bg-transparent border-none outline-none text-[13px] text-[var(--text-primary)] placeholder-[var(--text-tertiary)] font-sans"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />
//             </div>
//             <select 
//               className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[6px] px-[12px] py-[8px] text-[13px] text-[var(--text-primary)] cursor-pointer outline-none font-sans"
//               value={statusFilter}
//               onChange={(e) => setStatusFilter(e.target.value)}
//             >
//               <option value="">All Status</option>
//               <option value="active">Active</option>
//               <option value="suspended">Suspended</option>
//             </select>
//           </div>
//           {/* TABLE */}
//           <div className="bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-[8px] overflow-hidden">
//             <table className="w-full border-collapse">
//               <thead className="bg-[var(--bg-tertiary)] border-b border-[var(--border-secondary)]">
//                 <tr>
//                   <th className="p-[12px_16px] text-left text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-[0.5px] w-[44px]"></th>
//                   <th className="p-[12px_16px] text-left text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-[0.5px]">User</th>
//                   <th className="p-[12px_16px] text-left text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-[0.5px]">Mobile</th>
//                   <th className="p-[12px_16px] text-left text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-[0.5px]">Email</th>
//                   <th className="p-[12px_16px] text-left text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-[0.5px]">Devices</th>
//                   <th className="p-[12px_16px] text-left text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-[0.5px]">Status</th>
//                   <th className="p-[12px_16px] text-right text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-[0.5px]">Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="bg-[var(--bg-secondary)]">
//                 {paginatedUsers.map(user => (
//                   <Fragment key={user.id}>
//                     <tr 
//                       className={`border-b border-[var(--border-secondary)] transition-colors hover:bg-[var(--bg-tertiary)] cursor-pointer 
//                         ${expandedRows.has(user.id) ? 'bg-[var(--bg-tertiary)]' : ''} 
//                         ${user.status === 'suspended' ? 'opacity-70' : ''}`}
//                       onClick={() => toggleExpand(user.id)}
//                     >
//                       <td className="p-0 border-b border-[var(--border-secondary)]">
//                         <div className="flex items-center justify-center h-full py-[14px]">
//                            <button className="w-7 h-7 flex items-center justify-center rounded-[4px] text-[var(--text-tertiary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] transition-colors bg-transparent border-none cursor-pointer">
//                               <svg className={`w-4 h-4 transition-transform duration-200 ${expandedRows.has(user.id) ? 'rotate-90' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
//                            </button>
//                         </div>
//                       </td>
//                       <td className="p-[0] border-b border-[var(--border-secondary)]">
//                         <div className="p-[14px_16px] grid grid-cols-[44px_1fr] items-center gap-0">
//                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--purple)] flex items-center justify-center text-[14px] font-bold text-white shrink-0 mr-3">
//                               {user.initials}
//                            </div>
//                            <div className="min-w-0">
//                               <div className={`font-medium mb-[2px] ${user.status === 'suspended' ? 'line-through' : ''}`}>{user.name}</div>
//                               <div className="text-[11px] text-[var(--text-tertiary)] font-mono">{user.id}</div>
//                            </div>
//                         </div>
//                       </td>
//                       <td className="p-[14px_16px] border-b border-[var(--border-secondary)] align-top">
//                          <div className="text-[13px] text-[var(--text-secondary)] flex items-center gap-1.5 mt-2">
//                             <svg className="w-3 h-3 text-[var(--text-tertiary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
//                             {user.mobile}
//                          </div>
//                       </td>
//                       <td className="p-[14px_16px] border-b border-[var(--border-secondary)] text-[12px] text-[var(--text-tertiary)] align-top pt-[22px]">{user.email}</td>
//                       <td className="p-[14px_16px] border-b border-[var(--border-secondary)] align-top pt-[18px]">
//                         <span className="inline-flex items-center gap-[6px] p-[4px_10px] bg-[var(--bg-tertiary)] rounded-[12px] text-[12px] font-medium text-[var(--text-primary)]">
//                           <svg className="w-[14px] h-[14px] text-[var(--text-tertiary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/></svg>
//                           {user.devices.length} {user.devices.length !== 1 ? 'devices' : 'device'}
//                         </span>
//                       </td>
//                       <td className="p-[14px_16px] border-b border-[var(--border-secondary)] align-top pt-[18px]">
//                         <span className={`inline-flex items-center p-[5px_12px] rounded-[12px] text-[12px] font-medium whitespace-nowrap 
//                           ${user.status === 'active' ? 'bg-[var(--success-bg)] text-[var(--success)]' : 'bg-[var(--warning-bg)] text-[var(--warning)]'}`}>
//                           {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
//                         </span>
//                       </td>
//                       <td className="p-[14px_16px] border-b border-[var(--border-secondary)] text-right align-top pt-[16px]">
//                         <div className="flex items-center justify-end gap-[6px]" onClick={(e) => e.stopPropagation()}>
//                            {user.status === 'active' ? (
//                                <button 
//                                  className="inline-flex items-center gap-[6px] p-[8px_14px] rounded-[6px] text-[13px] font-medium border border-none bg-[var(--warning)] text-black cursor-pointer transition-all hover:opacity-90 btn-sm"
//                                  onClick={() => openModal('suspend', user)}
//                                  style={{ fontSize: '12px', padding: '5px 10px' }}
//                                >
//                                  Suspend
//                                </button>
//                            ) : (
//                                <button 
//                                  className="inline-flex items-center gap-[6px] p-[8px_14px] rounded-[6px] text-[13px] font-medium border border-none bg-[var(--accent)] text-white cursor-pointer transition-all hover:bg-[var(--accent-hover)] btn-sm"
//                                  onClick={() => openModal('reactivate', user)}
//                                  style={{ fontSize: '12px', padding: '5px 10px' }}
//                                >
//                                  Reactivate
//                                </button>
//                            )}
//                            <button 
//                              className="inline-flex items-center gap-[6px] p-[8px_14px] rounded-[6px] text-[13px] font-medium border border-[var(--border-primary)] bg-[var(--bg-tertiary)] text-[var(--text-primary)] cursor-pointer transition-all hover:bg-[var(--bg-hover)] btn-sm"
//                              onClick={() => setSelectedUser(user)}
//                              style={{ fontSize: '12px', padding: '5px 10px' }}
//                            >
//                              View
//                            </button>
//                         </div>
//                       </td>
//                     </tr>
//                     {/* EXPANDED ROW (DEVICES) */}
//                     {expandedRows.has(user.id) && (
//                       <tr className="devices-row">
//                         <td colSpan={7} className="p-0 border-b border-[var(--border-secondary)]">
//                           <div className="bg-[var(--bg-primary)] border-t border-[var(--border-secondary)] p-[16px_16px_16px_72px]">
//                             <div className="flex items-center justify-between mb-[12px]">
//                               <span className="text-[12px] font-semibold text-[var(--text-tertiary)] uppercase tracking-[0.5px] flex items-center gap-[8px]">
//                                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/></svg>
//                                 Registered Devices ({user.devices.length})
//                               </span>
//                               <button 
//                                 className="p-[5px_10px] text-[12px] font-medium border border-[var(--border-primary)] bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:bg-[var(--bg-hover)] rounded-[6px] cursor-pointer"
//                                 onClick={() => setSelectedUser(user)}
//                               >
//                                 Manage Devices
//                               </button>
//                             </div>
//                             <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-[12px]">
//                               {user.devices.map(dev => (
//                                 <div key={dev.id} className={`bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-[6px] p-[14px] flex gap-[12px] transition-all hover:border-[var(--border-primary)] ${dev.status === 'revoked' ? 'opacity-50' : ''}`}>
//                                   <div className={`w-[36px] h-[36px] rounded-[6px] flex items-center justify-center shrink-0 
//                                     ${dev.type === 'mobile' ? 'bg-[var(--info-bg)] text-[var(--info)]' : dev.type === 'desktop' ? 'bg-[var(--purple-bg)] text-[var(--purple)]' : 'bg-[var(--warning-bg)] text-[var(--warning)]'}`}>
//                                     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                                       {icons[dev.type] || icons.mobile}
//                                     </svg>
//                                   </div>
//                                   <div className="flex-1 min-w-0">
//                                     <div className={`text-[13px] font-medium mb-[2px] ${dev.status === 'revoked' ? 'line-through' : ''}`}>{dev.name}</div>
//                                     <div className="text-[11px] text-[var(--text-tertiary)] mb-[6px]">{dev.model}</div>
//                                     <div className="flex items-center gap-[12px] text-[11px] text-[var(--text-tertiary)]">
//                                       <span className={`p-[2px_8px] rounded-[10px] text-[10px] font-medium 
//                                         ${dev.status === 'active' ? 'bg-[var(--success-bg)] text-[var(--success)]' : 
//                                           dev.status === 'suspended' ? 'bg-[var(--warning-bg)] text-[var(--warning)]' : 
//                                           'bg-[var(--error-bg)] text-[var(--error)]'}`}>
//                                         {dev.status.charAt(0).toUpperCase() + dev.status.slice(1)}
//                                       </span>
//                                       <span>Last: {dev.lastUsed}</span>
//                                     </div>
//                                   </div>
//                                 </div>
//                               ))}
//                             </div>
//                           </div>
//                         </td>
//                       </tr>
//                     )}
//                   </Fragment>
//                 ))}
//               </tbody>
//             </table>
//             {/* PAGINATION */}
//             <div className="flex items-center justify-between p-[12px_16px] border-t border-[var(--border-secondary)] bg-[var(--bg-tertiary)]">
//               <div className="text-[12px] text-[var(--text-tertiary)]">
//                  Showing {(currentPage - 1) * itemsPerPage + 1}-{Math.min(currentPage * itemsPerPage, filteredUsers.length)} of {filteredUsers.length} users
//               </div>
//               <div className="flex gap-[4px]">
//                  <button 
//                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
//                    disabled={currentPage === 1}
//                    className="w-[32px] h-[32px] flex items-center justify-center border border-[var(--border-primary)] rounded-[4px] bg-transparent text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] cursor-pointer text-[13px] disabled:opacity-50 disabled:cursor-not-allowed"
//                  >
//                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
//                  </button>
//                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
//                      let pageNum = i + 1;
//                      if (totalPages > 5 && currentPage > 3) pageNum = currentPage - 2 + i;
//                      if (pageNum > totalPages) return null;
//                      return (
//                         <button 
//                            key={pageNum}
//                            onClick={() => setCurrentPage(pageNum)}
//                            className={`w-[32px] h-[32px] flex items-center justify-center border rounded-[4px] cursor-pointer text-[13px]
//                               ${currentPage === pageNum 
//                                 ? 'bg-[var(--accent)] border-[var(--accent)] text-white' 
//                                 : 'border-[var(--border-primary)] bg-transparent text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]'}`}
//                         >
//                            {pageNum}
//                         </button>
//                      );
//                  })}
//                  <button 
//                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
//                    disabled={currentPage === totalPages}
//                    className="w-[32px] h-[32px] flex items-center justify-center border border-[var(--border-primary)] rounded-[4px] bg-transparent text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] cursor-pointer text-[13px] disabled:opacity-50 disabled:cursor-not-allowed"
//                  >
//                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
//                  </button>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* --- DRAWER (DETAIL PANEL) --- */}
//         <div className={`fixed inset-0 bg-[rgba(0,0,0,0.5)] z-[999] transition-all duration-300 ${selectedUser ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={() => setSelectedUser(null)} />
//         <div className={`fixed top-0 right-0 w-[520px] h-screen bg-[var(--bg-secondary)] border-l border-[var(--border-primary)] z-[1000] flex flex-col transform transition-transform duration-300 ease-out ${selectedUser ? 'translate-x-0' : 'translate-x-full'}`}>
//            {selectedUser && (
//              <>
//                <div className="p-[20px_24px] border-b border-[var(--border-secondary)] flex items-center justify-between shrink-0">
//                  <span className="text-[16px] font-semibold">User Details</span>
//                  <button className="w-[32px] h-[32px] bg-[var(--bg-tertiary)] border-none rounded-[6px] text-[var(--text-secondary)] cursor-pointer flex items-center justify-center hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]" onClick={() => setSelectedUser(null)}>
//                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
//                  </button>
//                </div>
//                <div className="flex-1 overflow-y-auto p-[24px]">
//                  <div className="flex items-center gap-[16px] p-[20px] bg-[var(--bg-tertiary)] rounded-[8px] mb-[24px]">
//                    <div className="w-[64px] h-[64px] rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--purple)] flex items-center justify-center text-[20px] font-bold text-white">
//                      {selectedUser.initials}
//                    </div>
//                    <div>
//                      <div className="text-[18px] font-semibold mb-[4px]">{selectedUser.name}</div>
//                      <div className="text-[12px] text-[var(--text-tertiary)] font-mono">{selectedUser.id}</div>
//                    </div>
//                  </div>
//                  <div className="mb-[24px]">
//                     <div className="text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-[0.5px] mb-[12px] flex items-center gap-[8px]">
//                       <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
//                       Account Information
//                     </div>
//                     <div className="grid grid-cols-2 gap-[16px]">
//                       <div><div className="text-[11px] text-[var(--text-tertiary)] mb-[4px]">Status</div><span className={`inline-block p-[2px_10px] rounded-[10px] text-[12px] font-medium ${selectedUser.status === 'active' ? 'bg-[var(--success-bg)] text-[var(--success)]' : 'bg-[var(--warning-bg)] text-[var(--warning)]'}`} style={{marginTop:'4px'}}>{selectedUser.status.charAt(0).toUpperCase() + selectedUser.status.slice(1)}</span></div>
//                       <div><div className="text-[11px] text-[var(--text-tertiary)] mb-[4px]">Joined</div><div className="text-[13px] text-[var(--text-primary)]">{selectedUser.joined}</div></div>
//                       <div><div className="text-[11px] text-[var(--text-tertiary)] mb-[4px]">Email</div><div className="text-[13px] text-[var(--text-primary)]">{selectedUser.email}</div></div>
//                       <div><div className="text-[11px] text-[var(--text-tertiary)] mb-[4px]">Mobile</div><div className="text-[13px] text-[var(--text-primary)]">{selectedUser.mobile}</div></div>
//                       <div><div className="text-[11px] text-[var(--text-tertiary)] mb-[4px]">Last Active</div><div className="text-[13px] text-[var(--text-primary)]">{selectedUser.lastActive}</div></div>
//                       <div><div className="text-[11px] text-[var(--text-tertiary)] mb-[4px]">Total Devices</div><div className="text-[13px] text-[var(--text-primary)]">{selectedUser.devices.length}</div></div>
//                     </div>
//                  </div>
//                  <div>
//                    <div className="text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-[0.5px] mb-[12px] flex items-center gap-[8px]">
//                       <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/></svg>
//                       Registered Devices
//                    </div>
//                    <div className="flex flex-col gap-[10px]">
//                      {selectedUser.devices.map(dev => (
//                        <div key={dev.id} className={`bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-[6px] p-[14px] flex gap-[12px] ${dev.status === 'revoked' ? 'opacity-50' : ''}`}>
//                           <div className={`w-[36px] h-[36px] rounded-[6px] flex items-center justify-center shrink-0 
//                               ${dev.type === 'mobile' ? 'bg-[var(--info-bg)] text-[var(--info)]' : dev.type === 'desktop' ? 'bg-[var(--purple-bg)] text-[var(--purple)]' : 'bg-[var(--warning-bg)] text-[var(--warning)]'}`}>
//                               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{icons[dev.type] || icons.mobile}</svg>
//                           </div>
//                           <div className="flex-1 min-w-0">
//                             <div className="flex justify-between">
//                                <div className={`text-[13px] font-medium mb-[2px] ${dev.status === 'revoked' ? 'line-through' : ''}`}>{dev.name}</div>
//                                <span className={`text-[10px] font-medium p-[2px_8px] rounded-[10px] ${dev.status === 'active' ? 'bg-[var(--success-bg)] text-[var(--success)]' : dev.status === 'suspended' ? 'bg-[var(--warning-bg)] text-[var(--warning)]' : 'bg-[var(--error-bg)] text-[var(--error)]'}`}>
//                                  {dev.status}
//                                </span>
//                             </div>
//                             <div className="text-[11px] text-[var(--text-tertiary)] mb-[6px]">{dev.model}</div>
//                             <div className="text-[10px] text-[var(--text-tertiary)] mt-[1px]">Last used: {dev.lastUsed}</div>
//                           </div>
//                        </div>
//                      ))}
//                    </div>
//                  </div>
//                </div>
//                <div className="p-[16px_24px] border-t border-[var(--border-secondary)] flex justify-end gap-[12px] shrink-0">
//                  {selectedUser.status === 'active' ? (
//                    <button className="p-[8px_14px] rounded-[6px] text-[13px] font-medium border-none bg-[var(--warning)] text-black cursor-pointer" onClick={() => openModal('suspend', selectedUser)}>Suspend Account</button>
//                  ) : (
//                    <button className="p-[8px_14px] rounded-[6px] text-[13px] font-medium border-none bg-[var(--accent)] text-white cursor-pointer" onClick={() => openModal('reactivate', selectedUser)}>Reactivate Account</button>
//                  )}
//                </div>
//              </>
//            )}
//         </div>
//         {/* --- MODAL SUSPEND/REACTIVATE --- */}
//         <div className={`fixed inset-0 bg-[rgba(0,0,0,0.7)] flex items-center justify-center z-[1001] transition-all duration-200 ${isModalOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={closeModal}>
//             <div className={`bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[12px] w-full max-w-[440px] transform transition-transform duration-200 ${isModalOpen ? 'scale-100' : 'scale-95'}`} onClick={e => e.stopPropagation()}>
//                {actionUser && (
//                   <>
//                     <div className="p-[20px_24px] border-b border-[var(--border-secondary)] flex items-center justify-between">
//                         <div className={`text-[16px] font-semibold flex items-center gap-[10px] ${modalAction === 'suspend' ? 'text-[var(--warning)]' : 'text-[var(--success)]'}`}>
//                             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                                 {modalAction === 'suspend' ? (
//                                     <><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></>
//                                 ) : (
//                                     <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></>
//                                 )}
//                             </svg>
//                             {modalAction === 'suspend' ? 'Suspend User Account' : 'Reactivate User Account'}
//                         </div>
//                         <button className="w-[32px] h-[32px] bg-[var(--bg-tertiary)] border-none rounded-[6px] text-[var(--text-secondary)] cursor-pointer flex items-center justify-center" onClick={closeModal}>
//                             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
//                         </button>
//                     </div>
//                     <div className="p-[24px]">
//                         <div className={`flex gap-[12px] p-[14px_16px] rounded-[6px] mb-[16px] border ${modalAction === 'suspend' ? 'bg-[var(--warning-bg)] border-[rgba(251,191,36,0.3)]' : 'bg-[var(--success-bg)] border-[rgba(74,222,128,0.3)]'}`}>
//                              <div className={`shrink-0 ${modalAction === 'suspend' ? 'text-[var(--warning)]' : 'text-[var(--success)]'}`}>
//                                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                                     {modalAction === 'suspend' ? <><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/></> : <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></>}
//                                 </svg>
//                              </div>
//                              <div>
//                                  <div className={`text-[13px] font-bold mb-[2px] ${modalAction === 'suspend' ? 'text-[var(--warning)]' : 'text-[var(--success)]'}`}>
//                                      {modalAction === 'suspend' ? 'This will disable all user access' : 'Restore user access'}
//                                  </div>
//                                  <div className="text-[12px] text-[var(--text-secondary)]">
//                                      {modalAction === 'suspend' ? 'The user will not be able to authenticate or approve any transactions until reactivated.' : 'The user will regain access to authenticate and approve transactions.'}
//                                  </div>
//                              </div>
//                         </div>
//                         <div className="flex items-center gap-[12px] p-[12px] bg-[var(--bg-tertiary)] rounded-[6px] mb-[16px]">
//                             <div className="w-[40px] h-[40px] rounded-full bg-[var(--accent)] flex items-center justify-center text-[14px] font-bold text-white">
//                                 {actionUser.initials}
//                             </div>
//                             <div>
//                                 <div className="text-[14px] font-medium">{actionUser.name}</div>
//                                 <div className="text-[12px] text-[var(--text-tertiary)]">{actionUser.email}</div>
//                             </div>
//                         </div>
//                         {modalAction === 'suspend' && (
//                             <>
//                                 <div className="mb-[16px]">
//                                     <label className="block text-[12px] font-medium text-[var(--text-secondary)] mb-[6px]">Reason for Suspension</label>
//                                     <select 
//                                         className="w-full p-[10px_12px] bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[6px] text-[13px] text-[var(--text-primary)] font-sans outline-none"
//                                         value={suspendReason}
//                                         onChange={(e) => setSuspendReason(e.target.value)}
//                                     >
//                                         <option value="">Select reason...</option>
//                                         <option value="Security concern">Security concern</option>
//                                         <option value="Fraudulent activity">Fraudulent activity</option>
//                                         <option value="User request">User request</option>
//                                         <option value="Policy violation">Policy violation</option>
//                                         <option value="Other">Other</option>
//                                     </select>
//                                 </div>
//                                 <div className="mb-[16px]">
//                                     <label className="block text-[12px] font-medium text-[var(--text-secondary)] mb-[6px]">Notes (Optional)</label>
//                                     <textarea 
//                                         className="w-full p-[10px_12px] bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[6px] text-[13px] text-[var(--text-primary)] font-sans outline-none min-h-[80px] resize-y"
//                                         placeholder="Additional details..."
//                                         value={suspendNote}
//                                         onChange={(e) => setSuspendNote(e.target.value)}
//                                     ></textarea>
//                                 </div>
//                             </>
//                         )}
//                     </div>
//                     <div className="p-[16px_24px] border-t border-[var(--border-secondary)] flex justify-end gap-[12px]">
//                         <button className="p-[8px_14px] bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[6px] text-[13px] font-medium text-[var(--text-primary)] cursor-pointer hover:bg-[var(--bg-hover)]" onClick={closeModal}>Cancel</button>
//                         <button 
//                             className={`p-[8px_14px] rounded-[6px] text-[13px] font-medium text-white cursor-pointer border-none
//                                 ${modalAction === 'suspend' ? 'bg-[var(--warning)] text-black' : 'bg-[var(--accent)]'}`}
//                             onClick={handleStatusChange}
//                         >
//                             {modalAction === 'suspend' ? 'Suspend Account' : 'Reactivate Account'}
//                         </button>
//                     </div>
//                   </>
//                )}
//             </div>
//         </div>
//       </main>
//     </div>
//   );
// }
// // --- STATS CARD (Inline Component for matching style) ---
// function StatCard({ label, value, color, icon }: { label: string, value: number, color?: string, icon?: React.ReactNode }) {
//   const colorClass = color || 'text-[var(--text-primary)]';
//   return (
//     <div className="bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-[8px] p-[14px_18px]">
//       <div className="text-[12px] text-[var(--text-tertiary)] mb-[4px] flex items-center gap-[6px]">
//         {icon && <span style={{width:'14px', height:'14px', display:'inline-block'}} className="opacity-70">{icon}</span>}
//         {label}
//       </div>
//       <div className={`text-[22px] font-semibold ${colorClass}`}>{value.toLocaleString()}</div>
//     </div>
//   );
// }
'use client';
;
;
;
function UsersPage() {
    // --- STATE ---
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // Filter & Pagination State
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [statusFilter, setStatusFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [expandedRows, setExpandedRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const itemsPerPage = 10;
    // Modal & Drawer State
    const [selectedUser, setSelectedUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null); // Drawer
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [modalAction, setModalAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [actionUser, setActionUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Form State (Suspend)
    const [suspendReason, setSuspendReason] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [suspendNote, setSuspendNote] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    // --- ICONS ---
    const icons = {
        mobile: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M5 2h14a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm7 16h.01"
        }, void 0, false, {
            fileName: "[project]/app/(admin)/users/page.tsx",
            lineNumber: 645,
            columnNumber: 13
        }, this),
        desktop: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "2",
                    y: "3",
                    width: "20",
                    height: "14",
                    rx: "2",
                    ry: "2"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/users/page.tsx",
                    lineNumber: 646,
                    columnNumber: 16
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "8",
                    y1: "21",
                    x2: "16",
                    y2: "21"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/users/page.tsx",
                    lineNumber: 646,
                    columnNumber: 72
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "12",
                    y1: "17",
                    x2: "12",
                    y2: "21"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/users/page.tsx",
                    lineNumber: 646,
                    columnNumber: 110
                }, this)
            ]
        }, void 0, true),
        hardware: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"
        }, void 0, false, {
            fileName: "[project]/app/(admin)/users/page.tsx",
            lineNumber: 647,
            columnNumber: 15
        }, this)
    };
    // --- API FETCH (MENGGUNAKAN SERVICE) ---
    const loadUsers = async ()=>{
        setLoading(true);
        try {
            const data = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$userService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["userService"].getAll();
            console.log('Fetched users:', data); // Debugging
            setUsers(data);
        } catch (err) {
        // Error handling sudah dicatat di console oleh service
        // Anda bisa menambahkan toast notification disini
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        loadUsers();
    }, []);
    // --- LOGIC: Filter & Pagination ---
    const filteredUsers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return users.filter((user)=>{
            const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) || user.email.toLowerCase().includes(searchQuery.toLowerCase()) || user.mobile.includes(searchQuery);
            const matchesFilter = statusFilter ? user.status === statusFilter : true;
            return matchesSearch && matchesFilter;
        });
    }, [
        users,
        searchQuery,
        statusFilter
    ]);
    // Reset pagination saat filter berubah
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setCurrentPage(1);
    }, [
        searchQuery,
        statusFilter
    ]);
    const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
    const paginatedUsers = filteredUsers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    // --- ACTIONS (MENGGUNAKAN SERVICE) ---
    const handleStatusChange = async ()=>{
        if (!actionUser || !modalAction) return;
        const newStatus = modalAction === 'suspend' ? 'suspended' : 'active';
        const reason = modalAction === 'suspend' ? suspendReason : null;
        const note = modalAction === 'suspend' ? suspendNote : null;
        try {
            // Panggil Service
            await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$userService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["userService"].updateStatus(actionUser.id, newStatus, reason, note);
            // Update State Lokal (Optimistic UI)
            setUsers((prev)=>prev.map((u)=>u.id === actionUser.id ? {
                        ...u,
                        status: newStatus
                    } : u));
            // Update drawer jika sedang terbuka
            if (selectedUser?.id === actionUser.id) {
                setSelectedUser((prev)=>prev ? {
                        ...prev,
                        status: newStatus
                    } : null);
            }
            closeModal();
        } catch (error) {
            alert("Gagal mengubah status user. Silakan coba lagi.");
        }
    };
    const toggleExpand = (id)=>{
        const newRows = new Set(expandedRows);
        if (newRows.has(id)) newRows.delete(id);
        else newRows.add(id);
        setExpandedRows(newRows);
    };
    const openModal = (action, user)=>{
        setActionUser(user);
        setModalAction(action);
        setSuspendReason('');
        setSuspendNote('');
        setIsModalOpen(true);
    };
    const closeModal = ()=>{
        setIsModalOpen(false);
        setModalAction(null);
        setActionUser(null);
    };
    // --- RENDER (Sama seperti sebelumnya) ---
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans text-[14px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "flex-1 flex flex-col overflow-hidden relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "p-[12px_24px] border-b border-[var(--border-secondary)] flex items-center justify-between bg-[var(--bg-secondary)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[var(--text-tertiary)]",
                                    children: "Management"
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                    lineNumber: 750,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[var(--text-tertiary)]",
                                    children: "/"
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                    lineNumber: 751,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium text-[var(--text-primary)]",
                                    children: "Users"
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                    lineNumber: 752,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(admin)/users/page.tsx",
                            lineNumber: 749,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "flex items-center gap-1.5 px-[14px] py-[8px] bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[6px] text-[13px] font-medium text-[var(--text-primary)] hover:bg-[var(--bg-hover)] transition-all cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                                    lineNumber: 756,
                                                    columnNumber: 113
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                    points: "7,10 12,15 17,10"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                                    lineNumber: 756,
                                                    columnNumber: 166
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "12",
                                                    y1: "15",
                                                    x2: "12",
                                                    y2: "3"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                                    lineNumber: 756,
                                                    columnNumber: 203
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(admin)/users/page.tsx",
                                            lineNumber: 756,
                                            columnNumber: 15
                                        }, this),
                                        "Export"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                    lineNumber: 755,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "flex items-center gap-1.5 px-[14px] py-[8px] bg-[var(--accent)] rounded-[6px] text-[13px] font-medium text-white hover:bg-[#0f70d4] transition-all cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                                    lineNumber: 760,
                                                    columnNumber: 113
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "8.5",
                                                    cy: "7",
                                                    r: "4"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                                    lineNumber: 760,
                                                    columnNumber: 166
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "20",
                                                    y1: "8",
                                                    x2: "20",
                                                    y2: "14"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                                    lineNumber: 760,
                                                    columnNumber: 197
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "23",
                                                    y1: "11",
                                                    x2: "17",
                                                    y2: "11"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                                    lineNumber: 760,
                                                    columnNumber: 235
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(admin)/users/page.tsx",
                                            lineNumber: 760,
                                            columnNumber: 15
                                        }, this),
                                        "Add User"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                    lineNumber: 759,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(admin)/users/page.tsx",
                            lineNumber: 754,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(admin)/users/page.tsx",
                    lineNumber: 748,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-auto p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-4 gap-3 mb-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                    label: "Total Users",
                                    value: users.length,
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "14",
                                        height: "14",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/users/page.tsx",
                                                lineNumber: 775,
                                                columnNumber: 19
                                            }, void 0),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "9",
                                                cy: "7",
                                                r: "4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/users/page.tsx",
                                                lineNumber: 775,
                                                columnNumber: 72
                                            }, void 0)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/users/page.tsx",
                                        lineNumber: 774,
                                        columnNumber: 17
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                    lineNumber: 770,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                    label: "Active",
                                    value: users.filter((u)=>u.status === 'active').length,
                                    color: "text-[var(--success)]",
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "14",
                                        height: "14",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/users/page.tsx",
                                                lineNumber: 785,
                                                columnNumber: 19
                                            }, void 0),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                points: "22 4 12 14.01 9 11.01"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/users/page.tsx",
                                                lineNumber: 785,
                                                columnNumber: 65
                                            }, void 0)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/users/page.tsx",
                                        lineNumber: 784,
                                        columnNumber: 17
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                    lineNumber: 779,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                    label: "Suspended",
                                    value: users.filter((u)=>u.status === 'suspended').length,
                                    color: "text-[var(--warning)]",
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "14",
                                        height: "14",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "12",
                                                cy: "12",
                                                r: "10"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/users/page.tsx",
                                                lineNumber: 795,
                                                columnNumber: 19
                                            }, void 0),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "12",
                                                y1: "8",
                                                x2: "12",
                                                y2: "12"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/users/page.tsx",
                                                lineNumber: 795,
                                                columnNumber: 51
                                            }, void 0),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "12",
                                                y1: "16",
                                                x2: "12.01",
                                                y2: "16"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/users/page.tsx",
                                                lineNumber: 795,
                                                columnNumber: 89
                                            }, void 0)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/users/page.tsx",
                                        lineNumber: 794,
                                        columnNumber: 17
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                    lineNumber: 789,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                    label: "Total Devices",
                                    value: users.reduce((acc, u)=>acc + u.devices.length, 0),
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "14",
                                        height: "14",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "5",
                                            y: "2",
                                            width: "14",
                                            height: "20",
                                            rx: "2",
                                            ry: "2"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/users/page.tsx",
                                            lineNumber: 804,
                                            columnNumber: 19
                                        }, void 0)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/users/page.tsx",
                                        lineNumber: 803,
                                        columnNumber: 17
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                    lineNumber: 799,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(admin)/users/page.tsx",
                            lineNumber: 769,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 mb-4 flex-wrap",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[6px] px-[12px] py-[8px] min-w-[300px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-4 h-4 text-[var(--text-tertiary)] shrink-0",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "11",
                                                    cy: "11",
                                                    r: "8"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                                    lineNumber: 813,
                                                    columnNumber: 147
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "21",
                                                    y1: "21",
                                                    x2: "16.65",
                                                    y2: "16.65"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                                    lineNumber: 813,
                                                    columnNumber: 178
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(admin)/users/page.tsx",
                                            lineNumber: 813,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Search by name, email, or mobile...",
                                            className: "flex-1 bg-transparent border-none outline-none text-[13px] text-[var(--text-primary)] placeholder-[var(--text-tertiary)] font-sans",
                                            value: searchQuery,
                                            onChange: (e)=>setSearchQuery(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/users/page.tsx",
                                            lineNumber: 814,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                    lineNumber: 812,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    className: "bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[6px] px-[12px] py-[8px] text-[13px] text-[var(--text-primary)] cursor-pointer outline-none font-sans",
                                    value: statusFilter,
                                    onChange: (e)=>setStatusFilter(e.target.value),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "All Status"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/users/page.tsx",
                                            lineNumber: 827,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "active",
                                            children: "Active"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/users/page.tsx",
                                            lineNumber: 828,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "suspended",
                                            children: "Suspended"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/users/page.tsx",
                                            lineNumber: 829,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                    lineNumber: 822,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(admin)/users/page.tsx",
                            lineNumber: 811,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-[8px] overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "w-full border-collapse",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            className: "bg-[var(--bg-tertiary)] border-b border-[var(--border-secondary)]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-[12px_16px] text-left text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-[0.5px] w-[44px]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/users/page.tsx",
                                                        lineNumber: 838,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-[12px_16px] text-left text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-[0.5px]",
                                                        children: "User"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/users/page.tsx",
                                                        lineNumber: 839,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-[12px_16px] text-left text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-[0.5px]",
                                                        children: "Mobile"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/users/page.tsx",
                                                        lineNumber: 840,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-[12px_16px] text-left text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-[0.5px]",
                                                        children: "Email"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/users/page.tsx",
                                                        lineNumber: 841,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-[12px_16px] text-left text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-[0.5px]",
                                                        children: "Devices"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/users/page.tsx",
                                                        lineNumber: 842,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-[12px_16px] text-left text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-[0.5px]",
                                                        children: "Status"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/users/page.tsx",
                                                        lineNumber: 843,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-[12px_16px] text-right text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-[0.5px]",
                                                        children: "Actions"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/users/page.tsx",
                                                        lineNumber: 844,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/users/page.tsx",
                                                lineNumber: 837,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/users/page.tsx",
                                            lineNumber: 836,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            className: "bg-[var(--bg-secondary)]",
                                            children: paginatedUsers.map((user)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: `border-b border-[var(--border-secondary)] transition-colors hover:bg-[var(--bg-tertiary)] cursor-pointer 
                        ${expandedRows.has(user.id) ? 'bg-[var(--bg-tertiary)]' : ''} 
                        ${user.status === 'suspended' ? 'opacity-70' : ''}`,
                                                            onClick: ()=>toggleExpand(user.id),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "p-0 border-b border-[var(--border-secondary)]",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center justify-center h-full py-[14px]",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            className: "w-7 h-7 flex items-center justify-center rounded-[4px] text-[var(--text-tertiary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] transition-colors bg-transparent border-none cursor-pointer",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                className: `w-4 h-4 transition-transform duration-200 ${expandedRows.has(user.id) ? 'rotate-90' : ''}`,
                                                                                viewBox: "0 0 24 24",
                                                                                fill: "none",
                                                                                stroke: "currentColor",
                                                                                strokeWidth: "2",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                                    points: "9 18 15 12 9 6"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                                                                    lineNumber: 859,
                                                                                    columnNumber: 210
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/(admin)/users/page.tsx",
                                                                                lineNumber: 859,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/(admin)/users/page.tsx",
                                                                            lineNumber: 858,
                                                                            columnNumber: 28
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(admin)/users/page.tsx",
                                                                        lineNumber: 857,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                                                    lineNumber: 856,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "p-[0] border-b border-[var(--border-secondary)]",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "p-[14px_16px] grid grid-cols-[44px_1fr] items-center gap-0",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "w-10 h-10 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--purple)] flex items-center justify-center text-[14px] font-bold text-white shrink-0 mr-3",
                                                                                children: user.initials
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/(admin)/users/page.tsx",
                                                                                lineNumber: 865,
                                                                                columnNumber: 28
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "min-w-0",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: `font-medium mb-[2px] ${user.status === 'suspended' ? 'line-through' : ''}`,
                                                                                        children: user.name
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/(admin)/users/page.tsx",
                                                                                        lineNumber: 869,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "text-[11px] text-[var(--text-tertiary)] font-mono",
                                                                                        children: user.id
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/(admin)/users/page.tsx",
                                                                                        lineNumber: 870,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/(admin)/users/page.tsx",
                                                                                lineNumber: 868,
                                                                                columnNumber: 28
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/(admin)/users/page.tsx",
                                                                        lineNumber: 864,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                                                    lineNumber: 863,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "p-[14px_16px] border-b border-[var(--border-secondary)] align-top",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-[13px] text-[var(--text-secondary)] flex items-center gap-1.5 mt-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                className: "w-3 h-3 text-[var(--text-tertiary)]",
                                                                                viewBox: "0 0 24 24",
                                                                                fill: "none",
                                                                                stroke: "currentColor",
                                                                                strokeWidth: "2",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                                                                    lineNumber: 876,
                                                                                    columnNumber: 152
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/(admin)/users/page.tsx",
                                                                                lineNumber: 876,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            user.mobile
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/(admin)/users/page.tsx",
                                                                        lineNumber: 875,
                                                                        columnNumber: 26
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                                                    lineNumber: 874,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "p-[14px_16px] border-b border-[var(--border-secondary)] text-[12px] text-[var(--text-tertiary)] align-top pt-[22px]",
                                                                    children: user.email
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                                                    lineNumber: 880,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "p-[14px_16px] border-b border-[var(--border-secondary)] align-top pt-[18px]",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "inline-flex items-center gap-[6px] p-[4px_10px] bg-[var(--bg-tertiary)] rounded-[12px] text-[12px] font-medium text-[var(--text-primary)]",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                className: "w-[14px] h-[14px] text-[var(--text-tertiary)]",
                                                                                viewBox: "0 0 24 24",
                                                                                fill: "none",
                                                                                stroke: "currentColor",
                                                                                strokeWidth: "2",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                                    x: "5",
                                                                                    y: "2",
                                                                                    width: "14",
                                                                                    height: "20",
                                                                                    rx: "2",
                                                                                    ry: "2"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                                                                    lineNumber: 883,
                                                                                    columnNumber: 160
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/(admin)/users/page.tsx",
                                                                                lineNumber: 883,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            user.devices.length,
                                                                            " ",
                                                                            user.devices.length !== 1 ? 'devices' : 'device'
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/(admin)/users/page.tsx",
                                                                        lineNumber: 882,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                                                    lineNumber: 881,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "p-[14px_16px] border-b border-[var(--border-secondary)] align-top pt-[18px]",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `inline-flex items-center p-[5px_12px] rounded-[12px] text-[12px] font-medium whitespace-nowrap 
                          ${user.status === 'active' ? 'bg-[var(--success-bg)] text-[var(--success)]' : 'bg-[var(--warning-bg)] text-[var(--warning)]'}`,
                                                                        children: user.status.charAt(0).toUpperCase() + user.status.slice(1)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(admin)/users/page.tsx",
                                                                        lineNumber: 888,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                                                    lineNumber: 887,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "p-[14px_16px] border-b border-[var(--border-secondary)] text-right align-top pt-[16px]",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center justify-end gap-[6px]",
                                                                        onClick: (e)=>e.stopPropagation(),
                                                                        children: [
                                                                            user.status === 'active' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                className: "inline-flex items-center gap-[6px] p-[8px_14px] rounded-[6px] text-[13px] font-medium border border-none bg-[var(--warning)] text-black cursor-pointer transition-all hover:opacity-90 btn-sm",
                                                                                onClick: ()=>openModal('suspend', user),
                                                                                style: {
                                                                                    fontSize: '12px',
                                                                                    padding: '5px 10px'
                                                                                },
                                                                                children: "Suspend"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/(admin)/users/page.tsx",
                                                                                lineNumber: 896,
                                                                                columnNumber: 32
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                className: "inline-flex items-center gap-[6px] p-[8px_14px] rounded-[6px] text-[13px] font-medium border border-none bg-[var(--accent)] text-white cursor-pointer transition-all hover:bg-[var(--accent-hover)] btn-sm",
                                                                                onClick: ()=>openModal('reactivate', user),
                                                                                style: {
                                                                                    fontSize: '12px',
                                                                                    padding: '5px 10px'
                                                                                },
                                                                                children: "Reactivate"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/(admin)/users/page.tsx",
                                                                                lineNumber: 904,
                                                                                columnNumber: 32
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                className: "inline-flex items-center gap-[6px] p-[8px_14px] rounded-[6px] text-[13px] font-medium border border-[var(--border-primary)] bg-[var(--bg-tertiary)] text-[var(--text-primary)] cursor-pointer transition-all hover:bg-[var(--bg-hover)] btn-sm",
                                                                                onClick: ()=>setSelectedUser(user),
                                                                                style: {
                                                                                    fontSize: '12px',
                                                                                    padding: '5px 10px'
                                                                                },
                                                                                children: "View"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/(admin)/users/page.tsx",
                                                                                lineNumber: 912,
                                                                                columnNumber: 28
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/(admin)/users/page.tsx",
                                                                        lineNumber: 894,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                                                    lineNumber: 893,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/(admin)/users/page.tsx",
                                                            lineNumber: 850,
                                                            columnNumber: 21
                                                        }, this),
                                                        expandedRows.has(user.id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: "devices-row",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                colSpan: 7,
                                                                className: "p-0 border-b border-[var(--border-secondary)]",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "bg-[var(--bg-primary)] border-t border-[var(--border-secondary)] p-[16px_16px_16px_72px]",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center justify-between mb-[12px]",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-[12px] font-semibold text-[var(--text-tertiary)] uppercase tracking-[0.5px] flex items-center gap-[8px]",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                            width: "14",
                                                                                            height: "14",
                                                                                            viewBox: "0 0 24 24",
                                                                                            fill: "none",
                                                                                            stroke: "currentColor",
                                                                                            strokeWidth: "2",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                                                x: "5",
                                                                                                y: "2",
                                                                                                width: "14",
                                                                                                height: "20",
                                                                                                rx: "2",
                                                                                                ry: "2"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/(admin)/users/page.tsx",
                                                                                                lineNumber: 930,
                                                                                                columnNumber: 131
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/(admin)/users/page.tsx",
                                                                                            lineNumber: 930,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        "Registered Devices (",
                                                                                        user.devices.length,
                                                                                        ")"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                                                                    lineNumber: 929,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    className: "p-[5px_10px] text-[12px] font-medium border border-[var(--border-primary)] bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:bg-[var(--bg-hover)] rounded-[6px] cursor-pointer",
                                                                                    onClick: ()=>setSelectedUser(user),
                                                                                    children: "Manage Devices"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                                                                    lineNumber: 933,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/(admin)/users/page.tsx",
                                                                            lineNumber: 928,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-[12px]",
                                                                            children: user.devices.map((dev)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: `bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-[6px] p-[14px] flex gap-[12px] transition-all hover:border-[var(--border-primary)] ${dev.status === 'revoked' ? 'opacity-50' : ''}`,
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: `w-[36px] h-[36px] rounded-[6px] flex items-center justify-center shrink-0 
                                    ${dev.type === 'mobile' ? 'bg-[var(--info-bg)] text-[var(--info)]' : dev.type === 'desktop' ? 'bg-[var(--purple-bg)] text-[var(--purple)]' : 'bg-[var(--warning-bg)] text-[var(--warning)]'}`,
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                                width: "18",
                                                                                                height: "18",
                                                                                                viewBox: "0 0 24 24",
                                                                                                fill: "none",
                                                                                                stroke: "currentColor",
                                                                                                strokeWidth: "2",
                                                                                                children: icons[dev.type] || icons.mobile
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/(admin)/users/page.tsx",
                                                                                                lineNumber: 945,
                                                                                                columnNumber: 37
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/(admin)/users/page.tsx",
                                                                                            lineNumber: 943,
                                                                                            columnNumber: 35
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex-1 min-w-0",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: `text-[13px] font-medium mb-[2px] ${dev.status === 'revoked' ? 'line-through' : ''}`,
                                                                                                    children: dev.name
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                                                                                    lineNumber: 950,
                                                                                                    columnNumber: 37
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "text-[11px] text-[var(--text-tertiary)] mb-[6px]",
                                                                                                    children: dev.model
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                                                                                    lineNumber: 951,
                                                                                                    columnNumber: 37
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "flex items-center gap-[12px] text-[11px] text-[var(--text-tertiary)]",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                            className: `p-[2px_8px] rounded-[10px] text-[10px] font-medium 
                                        ${dev.status === 'active' ? 'bg-[var(--success-bg)] text-[var(--success)]' : dev.status === 'suspended' ? 'bg-[var(--warning-bg)] text-[var(--warning)]' : 'bg-[var(--error-bg)] text-[var(--error)]'}`,
                                                                                                            children: dev.status.charAt(0).toUpperCase() + dev.status.slice(1)
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/app/(admin)/users/page.tsx",
                                                                                                            lineNumber: 953,
                                                                                                            columnNumber: 39
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                            children: [
                                                                                                                "Last: ",
                                                                                                                dev.lastUsed
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "[project]/app/(admin)/users/page.tsx",
                                                                                                            lineNumber: 959,
                                                                                                            columnNumber: 39
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                                                                                    lineNumber: 952,
                                                                                                    columnNumber: 37
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/app/(admin)/users/page.tsx",
                                                                                            lineNumber: 949,
                                                                                            columnNumber: 35
                                                                                        }, this)
                                                                                    ]
                                                                                }, dev.id, true, {
                                                                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                                                                    lineNumber: 942,
                                                                                    columnNumber: 33
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/(admin)/users/page.tsx",
                                                                            lineNumber: 940,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                                                    lineNumber: 927,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/users/page.tsx",
                                                                lineNumber: 926,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(admin)/users/page.tsx",
                                                            lineNumber: 925,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, user.id, true, {
                                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                                    lineNumber: 849,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/users/page.tsx",
                                            lineNumber: 847,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                    lineNumber: 835,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between p-[12px_16px] border-t border-[var(--border-secondary)] bg-[var(--bg-tertiary)]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[12px] text-[var(--text-tertiary)]",
                                            children: [
                                                "Showing ",
                                                (currentPage - 1) * itemsPerPage + 1,
                                                "-",
                                                Math.min(currentPage * itemsPerPage, filteredUsers.length),
                                                " of ",
                                                filteredUsers.length,
                                                " users"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(admin)/users/page.tsx",
                                            lineNumber: 976,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-[4px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setCurrentPage((p)=>Math.max(1, p - 1)),
                                                    disabled: currentPage === 1,
                                                    className: "w-[32px] h-[32px] flex items-center justify-center border border-[var(--border-primary)] rounded-[4px] bg-transparent text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] cursor-pointer text-[13px] disabled:opacity-50 disabled:cursor-not-allowed",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "16",
                                                        height: "16",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                            points: "15 18 9 12 15 6"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(admin)/users/page.tsx",
                                                            lineNumber: 985,
                                                            columnNumber: 118
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/users/page.tsx",
                                                        lineNumber: 985,
                                                        columnNumber: 20
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                                    lineNumber: 980,
                                                    columnNumber: 18
                                                }, this),
                                                Array.from({
                                                    length: Math.min(5, totalPages)
                                                }, (_, i)=>{
                                                    let pageNum = i + 1;
                                                    if (totalPages > 5 && currentPage > 3) pageNum = currentPage - 2 + i;
                                                    if (pageNum > totalPages) return null;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setCurrentPage(pageNum),
                                                        className: `w-[32px] h-[32px] flex items-center justify-center border rounded-[4px] cursor-pointer text-[13px]
                              ${currentPage === pageNum ? 'bg-[var(--accent)] border-[var(--accent)] text-white' : 'border-[var(--border-primary)] bg-transparent text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]'}`,
                                                        children: pageNum
                                                    }, pageNum, false, {
                                                        fileName: "[project]/app/(admin)/users/page.tsx",
                                                        lineNumber: 994,
                                                        columnNumber: 25
                                                    }, this);
                                                }),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setCurrentPage((p)=>Math.min(totalPages, p + 1)),
                                                    disabled: currentPage === totalPages,
                                                    className: "w-[32px] h-[32px] flex items-center justify-center border border-[var(--border-primary)] rounded-[4px] bg-transparent text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] cursor-pointer text-[13px] disabled:opacity-50 disabled:cursor-not-allowed",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "16",
                                                        height: "16",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                            points: "9 18 15 12 9 6"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(admin)/users/page.tsx",
                                                            lineNumber: 1012,
                                                            columnNumber: 118
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/users/page.tsx",
                                                        lineNumber: 1012,
                                                        columnNumber: 20
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                                    lineNumber: 1007,
                                                    columnNumber: 18
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(admin)/users/page.tsx",
                                            lineNumber: 979,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                    lineNumber: 975,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(admin)/users/page.tsx",
                            lineNumber: 834,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(admin)/users/page.tsx",
                    lineNumber: 767,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `fixed inset-0 bg-[rgba(0,0,0,0.5)] z-[999] transition-all duration-300 ${selectedUser ? 'opacity-100 visible' : 'opacity-0 invisible'}`,
                    onClick: ()=>setSelectedUser(null)
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/users/page.tsx",
                    lineNumber: 1021,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `fixed top-0 right-0 w-[520px] h-screen bg-[var(--bg-secondary)] border-l border-[var(--border-primary)] z-[1000] flex flex-col transform transition-transform duration-300 ease-out ${selectedUser ? 'translate-x-0' : 'translate-x-full'}`,
                    children: selectedUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-[20px_24px] border-b border-[var(--border-secondary)] flex items-center justify-between shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[16px] font-semibold",
                                        children: "User Details"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/users/page.tsx",
                                        lineNumber: 1026,
                                        columnNumber: 18
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "w-[32px] h-[32px] bg-[var(--bg-tertiary)] border-none rounded-[6px] text-[var(--text-secondary)] cursor-pointer flex items-center justify-center hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]",
                                        onClick: ()=>setSelectedUser(null),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "18",
                                                    y1: "6",
                                                    x2: "6",
                                                    y2: "18"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                                    lineNumber: 1028,
                                                    columnNumber: 118
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "6",
                                                    y1: "6",
                                                    x2: "18",
                                                    y2: "18"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                                    lineNumber: 1028,
                                                    columnNumber: 155
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(admin)/users/page.tsx",
                                            lineNumber: 1028,
                                            columnNumber: 20
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/users/page.tsx",
                                        lineNumber: 1027,
                                        columnNumber: 18
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/users/page.tsx",
                                lineNumber: 1025,
                                columnNumber: 16
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 overflow-y-auto p-[24px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-[16px] p-[20px] bg-[var(--bg-tertiary)] rounded-[8px] mb-[24px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-[64px] h-[64px] rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--purple)] flex items-center justify-center text-[20px] font-bold text-white",
                                                children: selectedUser.initials
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/users/page.tsx",
                                                lineNumber: 1033,
                                                columnNumber: 20
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[18px] font-semibold mb-[4px]",
                                                        children: selectedUser.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/users/page.tsx",
                                                        lineNumber: 1037,
                                                        columnNumber: 22
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[12px] text-[var(--text-tertiary)] font-mono",
                                                        children: selectedUser.id
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/users/page.tsx",
                                                        lineNumber: 1038,
                                                        columnNumber: 22
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/users/page.tsx",
                                                lineNumber: 1036,
                                                columnNumber: 20
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/users/page.tsx",
                                        lineNumber: 1032,
                                        columnNumber: 18
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-[24px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-[0.5px] mb-[12px] flex items-center gap-[8px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "14",
                                                        height: "14",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/users/page.tsx",
                                                                lineNumber: 1044,
                                                                columnNumber: 121
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: "12",
                                                                cy: "7",
                                                                r: "4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/users/page.tsx",
                                                                lineNumber: 1044,
                                                                columnNumber: 174
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(admin)/users/page.tsx",
                                                        lineNumber: 1044,
                                                        columnNumber: 23
                                                    }, this),
                                                    "Account Information"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/users/page.tsx",
                                                lineNumber: 1043,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-[16px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[11px] text-[var(--text-tertiary)] mb-[4px]",
                                                                children: "Status"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/users/page.tsx",
                                                                lineNumber: 1048,
                                                                columnNumber: 28
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `inline-block p-[2px_10px] rounded-[10px] text-[12px] font-medium ${selectedUser.status === 'active' ? 'bg-[var(--success-bg)] text-[var(--success)]' : 'bg-[var(--warning-bg)] text-[var(--warning)]'}`,
                                                                style: {
                                                                    marginTop: '4px'
                                                                },
                                                                children: selectedUser.status.charAt(0).toUpperCase() + selectedUser.status.slice(1)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/users/page.tsx",
                                                                lineNumber: 1048,
                                                                columnNumber: 106
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(admin)/users/page.tsx",
                                                        lineNumber: 1048,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[11px] text-[var(--text-tertiary)] mb-[4px]",
                                                                children: "Joined"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/users/page.tsx",
                                                                lineNumber: 1049,
                                                                columnNumber: 28
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[13px] text-[var(--text-primary)]",
                                                                children: selectedUser.joined
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/users/page.tsx",
                                                                lineNumber: 1049,
                                                                columnNumber: 106
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(admin)/users/page.tsx",
                                                        lineNumber: 1049,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[11px] text-[var(--text-tertiary)] mb-[4px]",
                                                                children: "Email"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/users/page.tsx",
                                                                lineNumber: 1050,
                                                                columnNumber: 28
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[13px] text-[var(--text-primary)]",
                                                                children: selectedUser.email
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/users/page.tsx",
                                                                lineNumber: 1050,
                                                                columnNumber: 105
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(admin)/users/page.tsx",
                                                        lineNumber: 1050,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[11px] text-[var(--text-tertiary)] mb-[4px]",
                                                                children: "Mobile"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/users/page.tsx",
                                                                lineNumber: 1051,
                                                                columnNumber: 28
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[13px] text-[var(--text-primary)]",
                                                                children: selectedUser.mobile
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/users/page.tsx",
                                                                lineNumber: 1051,
                                                                columnNumber: 106
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(admin)/users/page.tsx",
                                                        lineNumber: 1051,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[11px] text-[var(--text-tertiary)] mb-[4px]",
                                                                children: "Last Active"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/users/page.tsx",
                                                                lineNumber: 1052,
                                                                columnNumber: 28
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[13px] text-[var(--text-primary)]",
                                                                children: selectedUser.lastActive
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/users/page.tsx",
                                                                lineNumber: 1052,
                                                                columnNumber: 111
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(admin)/users/page.tsx",
                                                        lineNumber: 1052,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[11px] text-[var(--text-tertiary)] mb-[4px]",
                                                                children: "Total Devices"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/users/page.tsx",
                                                                lineNumber: 1053,
                                                                columnNumber: 28
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[13px] text-[var(--text-primary)]",
                                                                children: selectedUser.devices.length
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/users/page.tsx",
                                                                lineNumber: 1053,
                                                                columnNumber: 113
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(admin)/users/page.tsx",
                                                        lineNumber: 1053,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/users/page.tsx",
                                                lineNumber: 1047,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/users/page.tsx",
                                        lineNumber: 1042,
                                        columnNumber: 18
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-[0.5px] mb-[12px] flex items-center gap-[8px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "14",
                                                        height: "14",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                            x: "5",
                                                            y: "2",
                                                            width: "14",
                                                            height: "20",
                                                            rx: "2",
                                                            ry: "2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(admin)/users/page.tsx",
                                                            lineNumber: 1059,
                                                            columnNumber: 121
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/users/page.tsx",
                                                        lineNumber: 1059,
                                                        columnNumber: 23
                                                    }, this),
                                                    "Registered Devices"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/users/page.tsx",
                                                lineNumber: 1058,
                                                columnNumber: 20
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-[10px]",
                                                children: selectedUser.devices.map((dev)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-[6px] p-[14px] flex gap-[12px] ${dev.status === 'revoked' ? 'opacity-50' : ''}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `w-[36px] h-[36px] rounded-[6px] flex items-center justify-center shrink-0 
                              ${dev.type === 'mobile' ? 'bg-[var(--info-bg)] text-[var(--info)]' : dev.type === 'desktop' ? 'bg-[var(--purple-bg)] text-[var(--purple)]' : 'bg-[var(--warning-bg)] text-[var(--warning)]'}`,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    width: "18",
                                                                    height: "18",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "2",
                                                                    children: icons[dev.type] || icons.mobile
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                                                    lineNumber: 1067,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/users/page.tsx",
                                                                lineNumber: 1065,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1 min-w-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex justify-between",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: `text-[13px] font-medium mb-[2px] ${dev.status === 'revoked' ? 'line-through' : ''}`,
                                                                                children: dev.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/(admin)/users/page.tsx",
                                                                                lineNumber: 1071,
                                                                                columnNumber: 32
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: `text-[10px] font-medium p-[2px_8px] rounded-[10px] ${dev.status === 'active' ? 'bg-[var(--success-bg)] text-[var(--success)]' : dev.status === 'suspended' ? 'bg-[var(--warning-bg)] text-[var(--warning)]' : 'bg-[var(--error-bg)] text-[var(--error)]'}`,
                                                                                children: dev.status
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/(admin)/users/page.tsx",
                                                                                lineNumber: 1072,
                                                                                columnNumber: 32
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/(admin)/users/page.tsx",
                                                                        lineNumber: 1070,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-[11px] text-[var(--text-tertiary)] mb-[6px]",
                                                                        children: dev.model
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(admin)/users/page.tsx",
                                                                        lineNumber: 1076,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-[10px] text-[var(--text-tertiary)] mt-[1px]",
                                                                        children: [
                                                                            "Last used: ",
                                                                            dev.lastUsed
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/(admin)/users/page.tsx",
                                                                        lineNumber: 1077,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(admin)/users/page.tsx",
                                                                lineNumber: 1069,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, dev.id, true, {
                                                        fileName: "[project]/app/(admin)/users/page.tsx",
                                                        lineNumber: 1064,
                                                        columnNumber: 24
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/users/page.tsx",
                                                lineNumber: 1062,
                                                columnNumber: 20
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/users/page.tsx",
                                        lineNumber: 1057,
                                        columnNumber: 18
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/users/page.tsx",
                                lineNumber: 1031,
                                columnNumber: 16
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-[16px_24px] border-t border-[var(--border-secondary)] flex justify-end gap-[12px] shrink-0",
                                children: selectedUser.status === 'active' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "p-[8px_14px] rounded-[6px] text-[13px] font-medium border-none bg-[var(--warning)] text-black cursor-pointer",
                                    onClick: ()=>openModal('suspend', selectedUser),
                                    children: "Suspend Account"
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                    lineNumber: 1086,
                                    columnNumber: 20
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "p-[8px_14px] rounded-[6px] text-[13px] font-medium border-none bg-[var(--accent)] text-white cursor-pointer",
                                    onClick: ()=>openModal('reactivate', selectedUser),
                                    children: "Reactivate Account"
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                    lineNumber: 1088,
                                    columnNumber: 20
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/users/page.tsx",
                                lineNumber: 1084,
                                columnNumber: 16
                            }, this)
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/users/page.tsx",
                    lineNumber: 1022,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `fixed inset-0 bg-[rgba(0,0,0,0.7)] flex items-center justify-center z-[1001] transition-all duration-200 ${isModalOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`,
                    onClick: closeModal,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[12px] w-full max-w-[440px] transform transition-transform duration-200 ${isModalOpen ? 'scale-100' : 'scale-95'}`,
                        onClick: (e)=>e.stopPropagation(),
                        children: actionUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-[20px_24px] border-b border-[var(--border-secondary)] flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `text-[16px] font-semibold flex items-center gap-[10px] ${modalAction === 'suspend' ? 'text-[var(--warning)]' : 'text-[var(--success)]'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "20",
                                                    height: "20",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    children: modalAction === 'suspend' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: "12",
                                                                cy: "12",
                                                                r: "10"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/users/page.tsx",
                                                                lineNumber: 1104,
                                                                columnNumber: 39
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "12",
                                                                y1: "8",
                                                                x2: "12",
                                                                y2: "12"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/users/page.tsx",
                                                                lineNumber: 1104,
                                                                columnNumber: 71
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "12",
                                                                y1: "16",
                                                                x2: "12.01",
                                                                y2: "16"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/users/page.tsx",
                                                                lineNumber: 1104,
                                                                columnNumber: 109
                                                            }, this)
                                                        ]
                                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/users/page.tsx",
                                                                lineNumber: 1106,
                                                                columnNumber: 39
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                points: "22 4 12 14.01 9 11.01"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/users/page.tsx",
                                                                lineNumber: 1106,
                                                                columnNumber: 85
                                                            }, this)
                                                        ]
                                                    }, void 0, true)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                                    lineNumber: 1102,
                                                    columnNumber: 29
                                                }, this),
                                                modalAction === 'suspend' ? 'Suspend User Account' : 'Reactivate User Account'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(admin)/users/page.tsx",
                                            lineNumber: 1101,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "w-[32px] h-[32px] bg-[var(--bg-tertiary)] border-none rounded-[6px] text-[var(--text-secondary)] cursor-pointer flex items-center justify-center",
                                            onClick: closeModal,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "16",
                                                height: "16",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "18",
                                                        y1: "6",
                                                        x2: "6",
                                                        y2: "18"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/users/page.tsx",
                                                        lineNumber: 1112,
                                                        columnNumber: 127
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "6",
                                                        y1: "6",
                                                        x2: "18",
                                                        y2: "18"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/users/page.tsx",
                                                        lineNumber: 1112,
                                                        columnNumber: 164
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(admin)/users/page.tsx",
                                                lineNumber: 1112,
                                                columnNumber: 29
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/users/page.tsx",
                                            lineNumber: 1111,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                    lineNumber: 1100,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-[24px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `flex gap-[12px] p-[14px_16px] rounded-[6px] mb-[16px] border ${modalAction === 'suspend' ? 'bg-[var(--warning-bg)] border-[rgba(251,191,36,0.3)]' : 'bg-[var(--success-bg)] border-[rgba(74,222,128,0.3)]'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `shrink-0 ${modalAction === 'suspend' ? 'text-[var(--warning)]' : 'text-[var(--success)]'}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "20",
                                                        height: "20",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        children: modalAction === 'suspend' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                    cx: "12",
                                                                    cy: "12",
                                                                    r: "10"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                                                    lineNumber: 1120,
                                                                    columnNumber: 68
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                    x1: "12",
                                                                    y1: "8",
                                                                    x2: "12",
                                                                    y2: "12"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                                                    lineNumber: 1120,
                                                                    columnNumber: 100
                                                                }, this)
                                                            ]
                                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                                                    lineNumber: 1120,
                                                                    columnNumber: 146
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                    points: "22 4 12 14.01 9 11.01"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                                                    lineNumber: 1120,
                                                                    columnNumber: 192
                                                                }, this)
                                                            ]
                                                        }, void 0, true)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(admin)/users/page.tsx",
                                                        lineNumber: 1119,
                                                        columnNumber: 33
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                                    lineNumber: 1118,
                                                    columnNumber: 30
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `text-[13px] font-bold mb-[2px] ${modalAction === 'suspend' ? 'text-[var(--warning)]' : 'text-[var(--success)]'}`,
                                                            children: modalAction === 'suspend' ? 'This will disable all user access' : 'Restore user access'
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(admin)/users/page.tsx",
                                                            lineNumber: 1124,
                                                            columnNumber: 34
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[12px] text-[var(--text-secondary)]",
                                                            children: modalAction === 'suspend' ? 'The user will not be able to authenticate or approve any transactions until reactivated.' : 'The user will regain access to authenticate and approve transactions.'
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(admin)/users/page.tsx",
                                                            lineNumber: 1127,
                                                            columnNumber: 34
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                                    lineNumber: 1123,
                                                    columnNumber: 30
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(admin)/users/page.tsx",
                                            lineNumber: 1117,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-[12px] p-[12px] bg-[var(--bg-tertiary)] rounded-[6px] mb-[16px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-[40px] h-[40px] rounded-full bg-[var(--accent)] flex items-center justify-center text-[14px] font-bold text-white",
                                                    children: actionUser.initials
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                                    lineNumber: 1134,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[14px] font-medium",
                                                            children: actionUser.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(admin)/users/page.tsx",
                                                            lineNumber: 1138,
                                                            columnNumber: 33
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[12px] text-[var(--text-tertiary)]",
                                                            children: actionUser.email
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(admin)/users/page.tsx",
                                                            lineNumber: 1139,
                                                            columnNumber: 33
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                                    lineNumber: 1137,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(admin)/users/page.tsx",
                                            lineNumber: 1133,
                                            columnNumber: 25
                                        }, this),
                                        modalAction === 'suspend' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-[16px]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-[12px] font-medium text-[var(--text-secondary)] mb-[6px]",
                                                            children: "Reason for Suspension"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(admin)/users/page.tsx",
                                                            lineNumber: 1146,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            className: "w-full p-[10px_12px] bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[6px] text-[13px] text-[var(--text-primary)] font-sans outline-none",
                                                            value: suspendReason,
                                                            onChange: (e)=>setSuspendReason(e.target.value),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "",
                                                                    children: "Select reason..."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                                                    lineNumber: 1152,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "Security concern",
                                                                    children: "Security concern"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                                                    lineNumber: 1153,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "Fraudulent activity",
                                                                    children: "Fraudulent activity"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                                                    lineNumber: 1154,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "User request",
                                                                    children: "User request"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                                                    lineNumber: 1155,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "Policy violation",
                                                                    children: "Policy violation"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                                                    lineNumber: 1156,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "Other",
                                                                    children: "Other"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                                                    lineNumber: 1157,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/(admin)/users/page.tsx",
                                                            lineNumber: 1147,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                                    lineNumber: 1145,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-[16px]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-[12px] font-medium text-[var(--text-secondary)] mb-[6px]",
                                                            children: "Notes (Optional)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(admin)/users/page.tsx",
                                                            lineNumber: 1161,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            className: "w-full p-[10px_12px] bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[6px] text-[13px] text-[var(--text-primary)] font-sans outline-none min-h-[80px] resize-y",
                                                            placeholder: "Additional details...",
                                                            value: suspendNote,
                                                            onChange: (e)=>setSuspendNote(e.target.value)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(admin)/users/page.tsx",
                                                            lineNumber: 1162,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                                    lineNumber: 1160,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                    lineNumber: 1116,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-[16px_24px] border-t border-[var(--border-secondary)] flex justify-end gap-[12px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "p-[8px_14px] bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[6px] text-[13px] font-medium text-[var(--text-primary)] cursor-pointer hover:bg-[var(--bg-hover)]",
                                            onClick: closeModal,
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/users/page.tsx",
                                            lineNumber: 1174,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: `p-[8px_14px] rounded-[6px] text-[13px] font-medium text-white cursor-pointer border-none
                                ${modalAction === 'suspend' ? 'bg-[var(--warning)] text-black' : 'bg-[var(--accent)]'}`,
                                            onClick: handleStatusChange,
                                            children: modalAction === 'suspend' ? 'Suspend Account' : 'Reactivate Account'
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/users/page.tsx",
                                            lineNumber: 1175,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(admin)/users/page.tsx",
                                    lineNumber: 1173,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/users/page.tsx",
                        lineNumber: 1097,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/users/page.tsx",
                    lineNumber: 1096,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(admin)/users/page.tsx",
            lineNumber: 746,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(admin)/users/page.tsx",
        lineNumber: 744,
        columnNumber: 5
    }, this);
}
// --- STATS CARD ---
function StatCard({ label, value, color, icon }) {
    const colorClass = color || 'text-[var(--text-primary)]';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-[8px] p-[14px_18px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-[12px] text-[var(--text-tertiary)] mb-[4px] flex items-center gap-[6px]",
                children: [
                    icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            width: '14px',
                            height: '14px',
                            display: 'inline-block'
                        },
                        className: "opacity-70",
                        children: icon
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/users/page.tsx",
                        lineNumber: 1199,
                        columnNumber: 18
                    }, this),
                    label
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/users/page.tsx",
                lineNumber: 1198,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `text-[22px] font-semibold ${colorClass}`,
                children: value.toLocaleString()
            }, void 0, false, {
                fileName: "[project]/app/(admin)/users/page.tsx",
                lineNumber: 1202,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/users/page.tsx",
        lineNumber: 1197,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b660e214._.js.map