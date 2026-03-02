module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/services/authService.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authService",
    ()=>authService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$simplewebauthn$2f$browser$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@simplewebauthn/browser/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$simplewebauthn$2f$browser$2f$esm$2f$methods$2f$startRegistration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@simplewebauthn/browser/esm/methods/startRegistration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$simplewebauthn$2f$browser$2f$esm$2f$methods$2f$startAuthentication$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@simplewebauthn/browser/esm/methods/startAuthentication.js [app-ssr] (ecmascript)");
;
const API_URL = ("TURBOPACK compile-time value", "http://localhost:4000/admin") || 'https://api.authkey.my';
// --- Helper Request (Global) ---
async function apiRequest(endpoint, method, body) {
    const headers = {
        "Content-Type": "application/json"
    };
    const config = {
        method,
        headers,
        // [PENTING] Aktifkan ini agar Browser mau menyimpan Cookie Session dari Backend
        // (Terutama saat Login Password & Login Passkey sukses)
        credentials: 'include'
    };
    if (body) config.body = JSON.stringify(body);
    const res = await fetch(`${API_URL}${endpoint}`, config);
    const data = await res.json();
    if (!res.ok) {
        if (res.status === 401) throw new Error("UNAUTHORIZED");
        throw new Error(data.error || data.message || "API Request Failed");
    }
    return data;
}
const authService = {
    // [PRE-LOGIN] Cek User (Sesuai Logic Anda)
    checkUser: async (email)=>{
        return apiRequest("/auth/check", "POST", {
            email
        });
    },
    // [LOGIN] Password
    loginPassword: async (email, password, telemetry)=>{
        return apiRequest("/auth/login", "POST", {
            email,
            password,
            telemetry
        });
    },
    // [LOGIN] Passkey
    loginPasskey: async (email, telemetry)=>{
        try {
            // Step A: Minta Challenge
            const options = await apiRequest("/auth/start", "POST", {
                username: email,
                telemetry
            });
            // Step B: Scan Jari/Wajah
            //const asseResp = await startAuthentication(options);
            const asseResp = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$simplewebauthn$2f$browser$2f$esm$2f$methods$2f$startAuthentication$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startAuthentication"])({
                optionsJSON: options
            });
            // Step C: Verifikasi ke Backend
            const payload = {
                serverPublicKeyCredential: {
                    id: asseResp.id,
                    type: asseResp.type,
                    response: {
                        clientDataJSON: asseResp.response.clientDataJSON,
                        authenticatorData: asseResp.response.authenticatorData,
                        signature: asseResp.response.signature,
                        userHandle: asseResp.response.userHandle
                    }
                },
                sessionId: options.sessionId,
                origin: window.location.origin,
                rpId: "console.authkey.my",
                tokenBinding: null,
                telemetry: telemetry || null
            };
            // Backend akan set Cookie 'auth_token' jika ini sukses
            return apiRequest("/auth/complete", "POST", payload);
        } catch (error) {
            console.error("Passkey Login Error:", error);
            throw error;
        }
    },
    // [REGISTER] Password
    registerPassword: async (fullName, email, password, companyName, mobile, telemetry)=>{
        return apiRequest("/reg/password", "POST", {
            fullName,
            email,
            password,
            companyName,
            mobile,
            role: "ADMIN"
        });
    },
    // [REGISTER] Passkey
    registerPasskey: async (email, fullName, mobile, telemetry)=>{
        try {
            const options = await apiRequest("/reg/start", "POST", {
                username: email,
                fullName: fullName,
                mobile,
                telemetry
            });
            //const attResp = await startRegistration(options);
            const attResp = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$simplewebauthn$2f$browser$2f$esm$2f$methods$2f$startRegistration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startRegistration"])({
                optionsJSON: options
            });
            const payload = {
                serverPublicKeyCredential: {
                    id: attResp.id,
                    type: attResp.type,
                    response: {
                        clientDataJSON: attResp.response.clientDataJSON,
                        attestationObject: attResp.response.attestationObject
                    }
                },
                sessionId: options.sessionId,
                origin: window.location.origin,
                rpId: "console.authkey.my",
                tokenBinding: null,
                telemetry: telemetry || null
            };
            return apiRequest("/reg/complete", "POST", payload);
        } catch (error) {
            console.error("Passkey Reg Error:", error);
            throw error;
        }
    },
    logout: async ()=>{
        try {
            await apiRequest("/auth/logout", "POST");
        } catch (error) {
            console.warn("Logout API warning:", error);
        } finally{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        }
    },
    // [SESSION] Cek Token (Untuk Dashboard)
    me: async ()=>{
        return apiRequest("/auth/me", "GET");
    }
};
}),
"[project]/components/layout/Sidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$authService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/authService.ts [app-ssr] (ecmascript)");
// 'use client';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { authService } from '@/services/authService';
// export default function Sidebar() {
//   const pathname = usePathname();
//   const isActive = (path: string) => pathname === path || pathname.startsWith(`${path}/`);
//   const handleLogout = async () => {
//     await authService.logout();
//   };
//   return (
//     <aside className="w-[240px] bg-[var(--bg-secondary)] border-r border-[var(--border-secondary)] shrink-0 h-screen flex flex-col z-10 sticky top-0">
//       {/* Header / Logo */}
//       <div className="p-4 border-b border-[var(--border-secondary)]">
//         <div className="flex items-center gap-2.5">
//           <div className="w-7 h-7 rounded-[var(--radius-md)] flex items-center justify-center bg-gradient-to-br from-[var(--accent)] to-[#60a5fa]">
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 text-white">
//               <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
//             </svg>
//           </div>
//           <span className="font-semibold text-sm text-[var(--text-primary)]">Secure Paykey</span>
//           <span className="ml-auto text-[10px] bg-[var(--purple-bg)] text-[var(--purple)] px-1.5 py-0.5 rounded-[10px] font-medium">FIDO2</span>
//         </div>
//       </div>
//       {/* Navigation */}
//       <nav className="p-2 overflow-y-auto custom-scrollbar flex-1">
//         {/* Overview */}
//         <div className="mb-5">
//           <div className="text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-[0.5px] px-2 py-1.5">Overview</div>
//           <Link href="/dashboard" className={`flex items-center gap-2.5 px-2.5 py-2 rounded-[var(--radius-md)] text-[14px] cursor-pointer transition-all mb-0.5 ${isActive('/dashboard') ? 'bg-[var(--bg-tertiary)] text-[var(--text-primary)]' : 'text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]'}`}>
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px] opacity-70"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
//             Dashboard
//           </Link>
//           <Link href="/auth-logs" className={`flex items-center gap-2.5 px-2.5 py-2 rounded-[var(--radius-md)] text-[14px] cursor-pointer transition-all mb-0.5 ${isActive('/auth-logs') ? 'bg-[var(--bg-tertiary)] text-[var(--text-primary)]' : 'text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]'}`}>
//              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px] opacity-70"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
//              Auth Logs
//              <span className="ml-auto text-[11px] bg-[var(--error-bg)] text-[var(--error)] px-1.5 py-0.5 rounded-[10px] font-medium">12</span>
//           </Link>
//         </div>
//         {/* Security */}
//         <div className="mb-5">
//           <div className="text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-[0.5px] px-2 py-1.5">Security</div>
//           {/* MENU BARU: AUTH POLICIES */}
//           <Link href="/auth-policies" className={`flex items-center gap-2.5 px-2.5 py-2 rounded-[var(--radius-md)] text-[14px] cursor-pointer transition-all mb-0.5 ${isActive('/auth-policies') ? 'bg-[var(--bg-tertiary)] text-[var(--text-primary)]' : 'text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]'}`}>
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`w-[18px] h-[18px] ${isActive('/auth-policies') ? 'opacity-100' : 'opacity-70'}`}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="8" r="5"/></svg>
//             Auth Policies
//           </Link>
//           {/* ACTIVE MENU */}
//           <Link href="/risk-config" className={`flex items-center gap-2.5 px-2.5 py-2 rounded-[var(--radius-md)] text-[14px] cursor-pointer transition-all mb-0.5 ${isActive('/risk-config') ? 'bg-[var(--bg-tertiary)] text-[var(--text-primary)]' : 'text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]'}`}>
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`w-[18px] h-[18px] ${isActive('/risk-config') ? 'opacity-100' : 'opacity-70'}`}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
//             Risk Config
//           </Link>
//           {/* MENU BARU: AMOUNT THRESHOLDS */}
//           <Link href="/amount-thresholds" className={`flex items-center gap-2.5 px-2.5 py-2 rounded-[var(--radius-md)] text-[14px] cursor-pointer transition-all mb-0.5 ${isActive('/amount-thresholds') ? 'bg-[var(--accent-muted)] text-[var(--accent)]' : 'text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)]'}`}>
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`w-[18px] h-[18px] ${isActive('/amount-thresholds') ? 'opacity-100' : 'opacity-70'}`}><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
//             Amount Thresholds
//           </Link>
//           <Link href="/investigation" className={`flex items-center gap-2.5 px-2.5 py-2 rounded-[var(--radius-md)] text-[14px] cursor-pointer transition-all mb-0.5 ${isActive('/investigation') ? 'bg-[var(--bg-tertiary)] text-[var(--text-primary)]' : 'text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]'}`}>
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px] opacity-70"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
//             Investigation
//           </Link>
//         </div>
//         {/* Users */}
//         <div className="mb-5">
//           <div className="text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-[0.5px] px-2 py-1.5">Users</div>
//           <Link href="/users" className={`flex items-center gap-2.5 px-2.5 py-2 rounded-[var(--radius-md)] text-[14px] cursor-pointer transition-all mb-0.5 ${isActive('/users') ? 'bg-[var(--bg-tertiary)] text-[var(--text-primary)]' : 'text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]'}`}>
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px] opacity-70">
//     <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
//   </svg>
//   Users
// </Link>
//           <Link href="/devices" className={`flex items-center gap-2.5 px-2.5 py-2 rounded-[var(--radius-md)] text-[14px] cursor-pointer transition-all mb-0.5 ${isActive('/devices') ? 'bg-[var(--bg-tertiary)] text-[var(--text-primary)]' : 'text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]'}`}>
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px] opacity-70"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
//             Devices
//           </Link>
//         </div>
//       </nav>
//     </aside>
//   );
// }
'use client';
;
;
;
;
function Sidebar() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    // Helper untuk cek active state
    const isActive = (path)=>pathname === path || pathname.startsWith(`${path}/`);
    const handleLogout = async ()=>{
        await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$authService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].logout();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "w-[240px] bg-[var(--bg-secondary)] border-r border-[var(--border-secondary)] shrink-0 h-screen flex flex-col z-10 sticky top-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-b border-[var(--border-secondary)]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-7 h-7 rounded-[var(--radius-md)] flex items-center justify-center bg-gradient-to-br from-[var(--accent)] to-[#60a5fa]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2.5",
                                className: "w-4 h-4 text-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "3",
                                        y: "11",
                                        width: "18",
                                        height: "11",
                                        rx: "2",
                                        ry: "2"
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Sidebar.tsx",
                                        lineNumber: 120,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M7 11V7a5 5 0 0 1 10 0v4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Sidebar.tsx",
                                        lineNumber: 120,
                                        columnNumber: 72
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/layout/Sidebar.tsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Sidebar.tsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-semibold text-sm text-[var(--text-primary)]",
                            children: "Secure Paykey"
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Sidebar.tsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "ml-auto text-[10px] bg-[var(--purple-bg)] text-[var(--purple)] px-1.5 py-0.5 rounded-[10px] font-medium",
                            children: "FIDO2"
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Sidebar.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layout/Sidebar.tsx",
                    lineNumber: 117,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/layout/Sidebar.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "p-2 overflow-y-auto custom-scrollbar flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-[0.5px] px-2 py-1.5",
                                children: "Overview"
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Sidebar.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/dashboard",
                                className: `flex items-center gap-2.5 px-2.5 py-2 rounded-[var(--radius-md)] text-[14px] cursor-pointer transition-all mb-0.5 ${isActive('/dashboard') ? 'bg-[var(--bg-tertiary)] text-[var(--text-primary)]' : 'text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        className: "w-[18px] h-[18px] opacity-70",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "3",
                                                y: "3",
                                                width: "7",
                                                height: "7"
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Sidebar.tsx",
                                                lineNumber: 136,
                                                columnNumber: 129
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "14",
                                                y: "3",
                                                width: "7",
                                                height: "7"
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Sidebar.tsx",
                                                lineNumber: 136,
                                                columnNumber: 169
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "14",
                                                y: "14",
                                                width: "7",
                                                height: "7"
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Sidebar.tsx",
                                                lineNumber: 136,
                                                columnNumber: 210
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "3",
                                                y: "14",
                                                width: "7",
                                                height: "7"
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Sidebar.tsx",
                                                lineNumber: 136,
                                                columnNumber: 252
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/layout/Sidebar.tsx",
                                        lineNumber: 136,
                                        columnNumber: 13
                                    }, this),
                                    "Dashboard"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/layout/Sidebar.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/auth-logs",
                                className: `flex items-center gap-2.5 px-2.5 py-2 rounded-[var(--radius-md)] text-[14px] cursor-pointer transition-all mb-0.5 ${isActive('/auth-logs') ? 'bg-[var(--bg-tertiary)] text-[var(--text-primary)]' : 'text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        className: "w-[18px] h-[18px] opacity-70",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Sidebar.tsx",
                                                lineNumber: 141,
                                                columnNumber: 130
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                points: "14,2 14,8 20,8"
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Sidebar.tsx",
                                                lineNumber: 141,
                                                columnNumber: 200
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "16",
                                                y1: "13",
                                                x2: "8",
                                                y2: "13"
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Sidebar.tsx",
                                                lineNumber: 141,
                                                columnNumber: 235
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "16",
                                                y1: "17",
                                                x2: "8",
                                                y2: "17"
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Sidebar.tsx",
                                                lineNumber: 141,
                                                columnNumber: 273
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/layout/Sidebar.tsx",
                                        lineNumber: 141,
                                        columnNumber: 14
                                    }, this),
                                    "Auth Logs",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-auto text-[11px] bg-[var(--error-bg)] text-[var(--error)] px-1.5 py-0.5 rounded-[10px] font-medium",
                                        children: "12"
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Sidebar.tsx",
                                        lineNumber: 143,
                                        columnNumber: 14
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/layout/Sidebar.tsx",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/layout/Sidebar.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-[0.5px] px-2 py-1.5",
                                children: "Security"
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Sidebar.tsx",
                                lineNumber: 149,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/auth-policies",
                                className: `flex items-center gap-2.5 px-2.5 py-2 rounded-[var(--radius-md)] text-[14px] cursor-pointer transition-all mb-0.5 ${isActive('/auth-policies') ? 'bg-[var(--bg-tertiary)] text-[var(--text-primary)]' : 'text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        className: `w-[18px] h-[18px] ${isActive('/auth-policies') ? 'opacity-100' : 'opacity-70'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Sidebar.tsx",
                                                lineNumber: 152,
                                                columnNumber: 181
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "12",
                                                cy: "8",
                                                r: "5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Sidebar.tsx",
                                                lineNumber: 152,
                                                columnNumber: 236
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/layout/Sidebar.tsx",
                                        lineNumber: 152,
                                        columnNumber: 13
                                    }, this),
                                    "Auth Policies"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/layout/Sidebar.tsx",
                                lineNumber: 151,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/risk-config",
                                className: `flex items-center gap-2.5 px-2.5 py-2 rounded-[var(--radius-md)] text-[14px] cursor-pointer transition-all mb-0.5 ${isActive('/risk-config') ? 'bg-[var(--bg-tertiary)] text-[var(--text-primary)]' : 'text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        className: `w-[18px] h-[18px] ${isActive('/risk-config') ? 'opacity-100' : 'opacity-70'}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/Sidebar.tsx",
                                            lineNumber: 157,
                                            columnNumber: 179
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Sidebar.tsx",
                                        lineNumber: 157,
                                        columnNumber: 13
                                    }, this),
                                    "Risk Config"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/layout/Sidebar.tsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/amount-thresholds",
                                className: `flex items-center gap-2.5 px-2.5 py-2 rounded-[var(--radius-md)] text-[14px] cursor-pointer transition-all mb-0.5 ${isActive('/amount-thresholds') ? 'bg-[var(--bg-tertiary)] text-[var(--text-primary)]' : 'text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        className: `w-[18px] h-[18px] ${isActive('/amount-thresholds') ? 'opacity-100' : 'opacity-70'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "12",
                                                y1: "1",
                                                x2: "12",
                                                y2: "23"
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Sidebar.tsx",
                                                lineNumber: 162,
                                                columnNumber: 185
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Sidebar.tsx",
                                                lineNumber: 162,
                                                columnNumber: 223
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/layout/Sidebar.tsx",
                                        lineNumber: 162,
                                        columnNumber: 13
                                    }, this),
                                    "Amount Thresholds"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/layout/Sidebar.tsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/layout/Sidebar.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-[0.5px] px-2 py-1.5",
                                children: "Users"
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Sidebar.tsx",
                                lineNumber: 174,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/users",
                                className: `flex items-center gap-2.5 px-2.5 py-2 rounded-[var(--radius-md)] text-[14px] cursor-pointer transition-all mb-0.5 ${isActive('/users') ? 'bg-[var(--bg-tertiary)] text-[var(--text-primary)]' : 'text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        className: "w-[18px] h-[18px] opacity-70",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Sidebar.tsx",
                                                lineNumber: 177,
                                                columnNumber: 129
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "9",
                                                cy: "7",
                                                r: "4"
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Sidebar.tsx",
                                                lineNumber: 177,
                                                columnNumber: 182
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/layout/Sidebar.tsx",
                                        lineNumber: 177,
                                        columnNumber: 13
                                    }, this),
                                    "Users"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/layout/Sidebar.tsx",
                                lineNumber: 176,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/devices",
                                className: `flex items-center gap-2.5 px-2.5 py-2 rounded-[var(--radius-md)] text-[14px] cursor-pointer transition-all mb-0.5 ${isActive('/devices') ? 'bg-[var(--bg-tertiary)] text-[var(--text-primary)]' : 'text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        className: "w-[18px] h-[18px] opacity-70",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "5",
                                                y: "2",
                                                width: "14",
                                                height: "20",
                                                rx: "2",
                                                ry: "2"
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Sidebar.tsx",
                                                lineNumber: 181,
                                                columnNumber: 129
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "12",
                                                y1: "18",
                                                x2: "12.01",
                                                y2: "18"
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Sidebar.tsx",
                                                lineNumber: 181,
                                                columnNumber: 185
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/layout/Sidebar.tsx",
                                        lineNumber: 181,
                                        columnNumber: 13
                                    }, this),
                                    "Devices"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/layout/Sidebar.tsx",
                                lineNumber: 180,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/layout/Sidebar.tsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/layout/Sidebar.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3 border-t border-[var(--border-secondary)] bg-[var(--bg-secondary)] mt-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleLogout,
                    className: "w-full flex items-center gap-2.5 px-2.5 py-2 rounded-[var(--radius-md)] text-[14px] font-medium text-[var(--text-secondary)] hover:bg-[var(--error-bg)] hover:text-[var(--error)] transition-all group cursor-pointer",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            className: "w-[18px] h-[18px] opacity-70 group-hover:opacity-100 transition-opacity",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Sidebar.tsx",
                                    lineNumber: 200,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                    points: "16 17 21 12 16 7"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Sidebar.tsx",
                                    lineNumber: 201,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "21",
                                    y1: "12",
                                    x2: "9",
                                    y2: "12"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Sidebar.tsx",
                                    lineNumber: 202,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/Sidebar.tsx",
                            lineNumber: 193,
                            columnNumber: 11
                        }, this),
                        "Sign Out"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layout/Sidebar.tsx",
                    lineNumber: 189,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/layout/Sidebar.tsx",
                lineNumber: 188,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/layout/Sidebar.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/(admin)/layout.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/Sidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$authService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/authService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
// // app/(admin)/layout.tsx
// 'use client';
// import { useEffect, useState } from 'react';
// import Sidebar from '@/components/layout/Sidebar'; // Pastikan path ini benar
// import { authService } from '@/services/authService';
// import { useRouter } from 'next/navigation';
// export default function AdminLayout({ children }: { children: React.ReactNode }) {
//   const [isAuthorized, setIsAuthorized] = useState(false);
//   const router = useRouter();
//   useEffect(() => {
//     // Cek apakah user punya sesi valid
//     const verifySession = async () => {
//       try {
//         await authService.me();
//         setIsAuthorized(true);
//       } catch (err) {
//         // Jika sesi mati/invalid, lempar ke login
//         router.push('/login');
//       }
//     };
//     verifySession();
//   }, [router]);
//   if (!isAuthorized) {
//     // Loading Screen saat cek sesi
//     return (
//       <div className="h-screen w-full flex items-center justify-center bg-[var(--bg-primary)]">
//         <div className="flex flex-col items-center gap-3">
//             <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[var(--accent)]"></div>
//             <span className="text-[var(--text-secondary)] text-sm">Please wait while we verify your session...</span>
//         </div>
//       </div>
//     );
//   }
//   return (
//     <div className="flex min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans">
//       {/* Sidebar hanya muncul di halaman-halaman dalam folder (admin) */}
//       <Sidebar />
//       <main className="flex-1 flex flex-col h-screen overflow-hidden">
//         {children}
//       </main>
//     </div>
//   );
// }
'use client';
;
;
;
;
;
function AdminLayout({ children }) {
    const [isAuthorized, setIsAuthorized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let isMounted = true;
        const verifySession = async ()=>{
            try {
                // Cek sesi ke backend
                await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$authService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].me();
                // Jika sukses dan komponen masih aktif, set authorized
                if (isMounted) setIsAuthorized(true);
            } catch (err) {
                // Jika gagal (401), langsung ganti URL ke login (replace history)
                if (isMounted) router.replace('/login');
            }
        };
        verifySession();
        // Cleanup function mencegah update state jika komponen sudah unmount
        return ()=>{
            isMounted = false;
        };
    }, [
        router
    ]); // Router sebagai dependency aman
    if (!isAuthorized) {
        // Tampilan Loading
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-screen w-full flex items-center justify-center bg-[var(--bg-primary)]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-10 w-10 border-[3px] border-[var(--border-secondary)] border-t-[var(--accent)]"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/layout.tsx",
                        lineNumber: 88,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[var(--text-primary)] text-sm font-medium",
                                children: "Verifying Session"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/layout.tsx",
                                lineNumber: 92,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[var(--text-tertiary)] text-xs",
                                children: "Please wait..."
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/layout.tsx",
                                lineNumber: 93,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/layout.tsx",
                        lineNumber: 91,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/layout.tsx",
                lineNumber: 86,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/(admin)/layout.tsx",
            lineNumber: 85,
            columnNumber: 7
        }, this);
    }
    // Jika Authorized, render Layout
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/(admin)/layout.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 flex flex-col h-screen overflow-hidden relative",
                children: children
            }, void 0, false, {
                fileName: "[project]/app/(admin)/layout.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/layout.tsx",
        lineNumber: 102,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__34bb8fb7._.js.map