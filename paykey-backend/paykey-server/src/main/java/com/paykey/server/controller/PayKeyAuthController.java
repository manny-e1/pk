package com.paykey.server.controller;

// 1. Import DTO dari Common Library
import com.linecorp.line.auth.fido.fido2.common.server.*;

// 2. IMPORT SERVICE DARI LIBRARY ASLI (com.linecorp...)
// Ini kunci agar method getChallenge/processResponse dikenali
import com.linecorp.line.auth.fido.fido2.server.service.ChallengeService;
import com.linecorp.line.auth.fido.fido2.server.service.ResponseService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/paykey")
@Tag(name = "PayKey Authentication", description = "Endpoints untuk Registrasi & Login PayKey")
public class PayKeyAuthController {

    @Autowired
    private ChallengeService challengeService;
    
    @Autowired
    private ResponseService responseService;

    // --- REGISTRATION FLOW ---

    @Operation(summary = "1. Get Registration Challenge")
    @PostMapping("/reg/challenge")
    public RegOptionResponse getRegChallenge(@RequestBody RegOptionRequest request) {
        return challengeService.getRegChallenge(request);
    }

    @Operation(summary = "2. Verify Registration")
    @PostMapping("/reg/verify")
    public com.linecorp.line.auth.fido.fido2.common.server.RegisterCredentialResult verifyReg(@RequestBody com.linecorp.line.auth.fido.fido2.common.server.RegisterCredential registerCredential) {
        return responseService.handleAttestation(registerCredential.getServerPublicKeyCredential(), registerCredential.getSessionId(),
                registerCredential.getOrigin(), registerCredential.getRpId(), registerCredential.getTokenBinding());
    }

    // --- AUTHENTICATION FLOW ---

    @Operation(summary = "3. Get Auth Challenge")
    @PostMapping("/auth/challenge")
    public AuthOptionResponse getAuthChallenge(@RequestBody AuthOptionRequest request) {
        return challengeService.getAuthChallenge(request);
    }

    @Operation(summary = "4. Verify Auth")
    @PostMapping("/auth/verify")
    public com.linecorp.line.auth.fido.fido2.common.server.VerifyCredentialResult verifyAuth(@RequestBody com.linecorp.line.auth.fido.fido2.common.server.VerifyCredential verifyCredential) {
        return responseService.handleAssertion(verifyCredential.getServerPublicKeyCredential(), verifyCredential.getSessionId(),
                verifyCredential.getOrigin(), verifyCredential.getRpId(), verifyCredential.getTokenBinding());
    }
}