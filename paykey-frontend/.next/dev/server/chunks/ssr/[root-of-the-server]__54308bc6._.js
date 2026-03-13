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
"[project]/lib/apiClient.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiClient",
    ()=>apiClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
const apiClient = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: ("TURBOPACK compile-time value", "http://localhost:4000/admin") || 'https://api.authkey.my',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});
apiClient.interceptors.response.use((response)=>{
    return response;
}, (error)=>{
    if (error.response && error.response.status === 401) {
        console.warn("Session expired or unauthorized. Redirecting to login...");
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
    return Promise.reject(error);
});
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/apiClient.ts [app-ssr] (ecmascript)");
;
;
async function apiRequest(endpoint, method, body) {
    try {
        const config = body ? {
            data: body
        } : {};
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"])({
            url: endpoint,
            method,
            ...config
        });
        return response.data;
    } catch (error) {
        if (error.response) {
            if (error.response.status === 401) throw new Error("UNAUTHORIZED");
            throw new Error(error.response.data?.error || error.response.data?.message || "API Request Failed");
        }
        throw error;
    }
}
const authService = {
    checkUser: async (email)=>{
        return apiRequest("/auth/check", "POST", {
            email
        });
    },
    loginPassword: async (email, password, telemetry)=>{
        return apiRequest("/auth/login", "POST", {
            email,
            password,
            telemetry
        });
    },
    loginPasskey: async (email, telemetry)=>{
        try {
            const options = await apiRequest("/auth/start", "POST", {
                username: email,
                telemetry
            });
            const asseResp = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$simplewebauthn$2f$browser$2f$esm$2f$methods$2f$startAuthentication$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startAuthentication"])({
                optionsJSON: options
            });
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
            return apiRequest("/auth/complete", "POST", payload);
        } catch (error) {
            console.error("Passkey Login Error:", error);
            throw error;
        }
    },
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
    registerPasskey: async (email, fullName, mobile, telemetry)=>{
        try {
            const options = await apiRequest("/reg/start", "POST", {
                username: email,
                fullName,
                mobile,
                telemetry
            });
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
    me: async ()=>{
        return apiRequest("/auth/me", "GET");
    }
};
}),
"[project]/hooks/useIdleTimeout.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useIdleTimeout",
    ()=>useIdleTimeout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$authService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/authService.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const IDLE_TIMEOUT_MS = 30 * 60 * 1000;
function useIdleTimeout() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const timeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleLogout = async ()=>{
        if (pathname === '/login') return;
        console.warn("User has been idle for 30 minutes. Logging out...");
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$authService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].logout();
        } catch (error) {
            console.error("Error during logout:", error);
        } finally{
            localStorage.removeItem('paykey_last_user_email');
            sessionStorage.clear();
            router.push('/login');
        }
    };
    const resetTimer = ()=>{
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(handleLogout, IDLE_TIMEOUT_MS);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (pathname === '/login') {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            return;
        }
        const activeEvents = [
            'mousemove',
            'mousedown',
            'keydown',
            'scroll',
            'touchstart',
            'wheel'
        ];
        activeEvents.forEach((event)=>{
            window.addEventListener(event, resetTimer, {
                passive: true
            });
        });
        resetTimer();
        return ()=>{
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            activeEvents.forEach((event)=>{
                window.removeEventListener(event, resetTimer);
            });
        };
    }, [
        pathname
    ]);
}
}),
"[project]/components/IdleTimerWrapper.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IdleTimerWrapper",
    ()=>IdleTimerWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useIdleTimeout$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useIdleTimeout.ts [app-ssr] (ecmascript)");
'use client';
;
;
function IdleTimerWrapper({ children }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useIdleTimeout$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIdleTimeout"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__54308bc6._.js.map