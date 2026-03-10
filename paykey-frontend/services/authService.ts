import { startRegistration, startAuthentication } from "@simplewebauthn/browser";
import { DeviceTelemetry } from "./systemDevice";
import { apiClient } from "@/lib/apiClient";

async function apiRequest(endpoint: string, method: "POST" | "GET", body?: unknown) {
  try {
    const config = body ? { data: body } : {};
    const response = await apiClient({
      url: endpoint,
      method,
      ...config,
    });
    return response.data;
  } catch (error: any) {
    if (error.response) {
      if (error.response.status === 401) throw new Error("UNAUTHORIZED");
      throw new Error(error.response.data?.error || error.response.data?.message || "API Request Failed");
    }
    throw error;
  }
}

export const authService = {
  checkUser: async (email: string) => {
    return apiRequest("/auth/check", "POST", { email });
  },

  loginPassword: async (email: string, password: string, telemetry?: DeviceTelemetry) => {
    return apiRequest("/auth/login", "POST", { email, password, telemetry });
  },

  loginPasskey: async (email: string, telemetry?: DeviceTelemetry) => {
    try {
      const options = await apiRequest("/auth/start", "POST", { username: email, telemetry });
      const asseResp = await startAuthentication({ optionsJSON: options });

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
        telemetry: telemetry || null,
      };

      return apiRequest("/auth/complete", "POST", payload);
    } catch (error) {
      console.error("Passkey Login Error:", error);
      throw error;
    }
  },

  registerPassword: async (fullName: string, email: string, password: string, companyName?: string, mobile?: string, telemetry?: DeviceTelemetry) => {
    return apiRequest("/reg/password", "POST", { fullName, email, password, companyName, mobile, role: "ADMIN" });
  },

  registerPasskey: async (email: string, fullName: string, mobile?: string, telemetry?: DeviceTelemetry) => {
    try {
      const options = await apiRequest("/reg/start", "POST", { username: email, fullName, mobile, telemetry });
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
        telemetry: telemetry || null,
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

        localStorage.removeItem('paykey_last_user_email');
        sessionStorage.clear();
        window.location.href = "/login";
      }
    }
  },

  me: async () => {
    return apiRequest("/auth/me", "GET");
  },
};