(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/apiClient.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiClient",
    ()=>apiClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const apiClient = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: `${("TURBOPACK compile-time value", "http://localhost:4000")}/admin` || 'https://api.authkey.my',
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
        if ("TURBOPACK compile-time truthy", 1) {
            localStorage.removeItem('paykey_last_user_email');
            sessionStorage.clear();
            if (window.location.pathname !== '/login') {
                window.location.href = '/login';
            }
        }
    }
    return Promise.reject(error);
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/services/authService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authService",
    ()=>authService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$simplewebauthn$2f$browser$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@simplewebauthn/browser/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$simplewebauthn$2f$browser$2f$esm$2f$methods$2f$startRegistration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@simplewebauthn/browser/esm/methods/startRegistration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$simplewebauthn$2f$browser$2f$esm$2f$methods$2f$startAuthentication$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@simplewebauthn/browser/esm/methods/startAuthentication.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/apiClient.ts [app-client] (ecmascript)");
;
;
async function apiRequest(endpoint, method, body) {
    try {
        const config = body ? {
            data: body
        } : {};
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"])({
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
            const asseResp = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$simplewebauthn$2f$browser$2f$esm$2f$methods$2f$startAuthentication$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startAuthentication"])({
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
            const attResp = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$simplewebauthn$2f$browser$2f$esm$2f$methods$2f$startRegistration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startRegistration"])({
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
            if ("TURBOPACK compile-time truthy", 1) {
                localStorage.removeItem('paykey_last_user_email');
                sessionStorage.clear();
                window.location.href = "/login";
            }
        }
    },
    me: async ()=>{
        return apiRequest("/auth/me", "GET");
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useIdleTimeout.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useIdleTimeout",
    ()=>useIdleTimeout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$authService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/authService.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const IDLE_TIMEOUT_MS = 30 * 60 * 1000;
function useIdleTimeout() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const timeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleLogout = async ()=>{
        if (pathname === '/login') return;
        console.warn("User has been idle for 30 minutes. Logging out...");
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$authService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authService"].logout();
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useIdleTimeout.useEffect": ()=>{
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
            activeEvents.forEach({
                "useIdleTimeout.useEffect": (event)=>{
                    window.addEventListener(event, resetTimer, {
                        passive: true
                    });
                }
            }["useIdleTimeout.useEffect"]);
            resetTimer();
            return ({
                "useIdleTimeout.useEffect": ()=>{
                    if (timeoutRef.current) clearTimeout(timeoutRef.current);
                    activeEvents.forEach({
                        "useIdleTimeout.useEffect": (event)=>{
                            window.removeEventListener(event, resetTimer);
                        }
                    }["useIdleTimeout.useEffect"]);
                }
            })["useIdleTimeout.useEffect"];
        }
    }["useIdleTimeout.useEffect"], [
        pathname
    ]);
}
_s(useIdleTimeout, "s3v7cpMlt2NwNdU+0PYCns4RcZ0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/IdleTimerWrapper.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IdleTimerWrapper",
    ()=>IdleTimerWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useIdleTimeout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useIdleTimeout.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function IdleTimerWrapper({ children }) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useIdleTimeout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIdleTimeout"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
_s(IdleTimerWrapper, "KFgz4UqKt4krhaJ7nns3OZ6JEIo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useIdleTimeout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIdleTimeout"]
    ];
});
_c = IdleTimerWrapper;
var _c;
__turbopack_context__.k.register(_c, "IdleTimerWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_b2c1aa8c._.js.map