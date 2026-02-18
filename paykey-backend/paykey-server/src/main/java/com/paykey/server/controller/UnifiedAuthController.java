package com.paykey.server.controller;

import com.paykey.server.service.UnifiedAuthService;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api/unified")
public class UnifiedAuthController {

    @Autowired
    private UnifiedAuthService authService;

    @Data
    public static class KeyRegisterRequest {
        private String userId;
        private String deviceId;
        private String publicKey;
        private String type; // PIN, BIO_LEGACY
    }

    @Data
    public static class AuthRequest {
        private String userId;
        private String deviceId;
        private String authType; // PIN, BIO, TOTP_HARDWARE, TOTP_SOFT
        private String challenge;
        private String signature; // Used for PIN/BIO
        private String otp;       // Used for TOTP
    }

    // 1. GENERATE CHALLENGE (Nonce)
    @PostMapping("/challenge")
    public ResponseEntity<?> getChallenge() {
        // Return UUID simpel. Untuk production grade, simpan di Redis dengan TTL 60 detik
        // dan validasi saat verify.
        return ResponseEntity.ok(Map.of("challenge", UUID.randomUUID().toString()));
    }

    // 2. REGISTER DEVICE KEY (Setup PIN/Bio)
    @PostMapping("/keys/register")
    public ResponseEntity<?> registerKey(@RequestBody KeyRegisterRequest req) {
        try {
            authService.registerDeviceKey(req.getUserId(), req.getDeviceId(), req.getPublicKey(), req.getType());
            return ResponseEntity.ok(Map.of("status", "success"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }

    // 3. VERIFY AUTHENTICATION (The Main Gate)
    @PostMapping("/verify")
    public ResponseEntity<?> verify(@RequestBody AuthRequest req) {
        boolean isValid = false;

        try {
            if (req.getAuthType().contains("TOTP")) {
                isValid = authService.verifyTotp(req.getUserId(), req.getOtp());
            } else {
                // PIN, BIO, PUSH_APPROVAL (All signature based)
                isValid = authService.verifySignatureAuth(
                        req.getUserId(),
                        req.getDeviceId(),
                        req.getAuthType(),
                        req.getChallenge(),
                        req.getSignature()
                );
            }

            if (isValid) {
                return ResponseEntity.ok(Map.of("status", "success"));
            } else {
                return ResponseEntity.status(401).body(Map.of("status", "failed", "message", "Invalid credentials"));
            }
        } catch (SecurityException e) {
            return ResponseEntity.status(403).body(Map.of("status", "blocked", "message", e.getMessage()));
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(Map.of("error", "System error"));
        }
    }
}