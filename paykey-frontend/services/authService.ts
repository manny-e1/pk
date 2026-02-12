import {
  startRegistration,
  startAuthentication,
} from "@simplewebauthn/browser";
import { DeviceTelemetry } from "./systemDevice";

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.authkey.my';

// --- Helper Request (Global) ---
async function apiRequest(
  endpoint: string,
  method: "POST" | "GET",
  body?: unknown,
) {
  const headers = { "Content-Type": "application/json" };
  
  const config: RequestInit = { 
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

export const authService = {
  // [PRE-LOGIN] Cek User (Sesuai Logic Anda)
  checkUser: async (email: string) => {
    return apiRequest("/auth/check", "POST", { email });
  },

  // [LOGIN] Password
  loginPassword: async (email: string, password: string, telemetry?: DeviceTelemetry) => {
    return apiRequest("/auth/login", "POST", { email, password, telemetry });
  },

  // [LOGIN] Passkey
  loginPasskey: async (email: string, telemetry?: DeviceTelemetry) => {
    try {
      // Step A: Minta Challenge
      const options = await apiRequest("/auth/start", "POST", { username: email, telemetry });

      // Step B: Scan Jari/Wajah
      //const asseResp = await startAuthentication(options);
      const asseResp = await startAuthentication({ optionsJSON: options });

      // Step C: Verifikasi ke Backend
      const payload = {
        serverPublicKeyCredential: {
          id: asseResp.id,
          type: asseResp.type,
          response: {
            clientDataJSON: asseResp.response.clientDataJSON,
            authenticatorData: asseResp.response.authenticatorData,
            signature: asseResp.response.signature,
            userHandle: asseResp.response.userHandle,
          },
        },
        sessionId: options.sessionId,
        origin: window.location.origin,
        rpId: "console.authkey.my",
        tokenBinding: null,
      };

      // Backend akan set Cookie 'auth_token' jika ini sukses
      return apiRequest("/auth/complete", "POST", payload);
    } catch (error) {
      console.error("Passkey Login Error:", error);
      throw error;
    }
  },

  // [REGISTER] Password
  registerPassword: async (fullName: string, email: string, password: string, companyName?: string, mobile?: string, telemetry?: DeviceTelemetry) => {
    return apiRequest("/reg/password", "POST", { fullName, email, password, companyName, mobile, role: "ADMIN" });
  },

  // [REGISTER] Passkey
  registerPasskey: async (email: string, fullName: string, mobile?: string, telemetry?: DeviceTelemetry) => {
    try {
      const options = await apiRequest("/reg/start", "POST", { username: email, fullName: fullName, mobile ,telemetry });
      //const attResp = await startRegistration(options);
      const attResp = await startRegistration({ optionsJSON: options });
      
      const payload = {
        serverPublicKeyCredential: {
          id: attResp.id,
          type: attResp.type,
          response: {
            clientDataJSON: attResp.response.clientDataJSON,
            attestationObject: attResp.response.attestationObject,
          },
        },
        sessionId: options.sessionId,
        origin: window.location.origin,
        rpId: "console.authkey.my",
        tokenBinding: null,
      };
      return apiRequest("/reg/complete", "POST", payload);
    } catch (error) {
      console.error("Passkey Reg Error:", error);
      throw error;
    }
  },

  logout: async () => {
    try {
      await apiRequest("/auth/logout", "POST");
    } catch (error) {
      console.warn("Logout API warning:", error);
    } finally {
      if (typeof window !== 'undefined') {
        window.location.href = "/login";
      }
    }
  },

  // [SESSION] Cek Token (Untuk Dashboard)
  me: async () => {
    return apiRequest("/auth/me", "GET");
  },
};