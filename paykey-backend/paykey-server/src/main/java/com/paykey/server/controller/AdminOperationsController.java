package com.paykey.server.controller;

import com.paykey.server.entity.AuthTotpTokenEntity;
import com.paykey.server.service.UnifiedAuthService;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/admin/tokens")
public class AdminOperationsController {

    @Autowired
    private UnifiedAuthService authService;

    // DTO untuk Import
    @Data
    public static class ImportRequest {
        private String serialNumber;
        private String seed;
    }

    @Data
    public static class BatchImportRequest {
        private List<ImportRequest> tokens;
    }

    @Data
    public static class AssignRequest {
        private String serialNumber;
        private String userId;
    }

    @PostMapping("/import")
    public ResponseEntity<?> importTokens(@RequestBody BatchImportRequest request) {
        try {
            List<AuthTotpTokenEntity> entities = request.getTokens().stream().map(dto -> 
                AuthTotpTokenEntity.builder()
                        .serialNumber(dto.getSerialNumber())
                        .encryptedSeed(dto.getSeed())
                        .tokenType("HARDWARE")
                        .build()
            ).collect(Collectors.toList());

            authService.importHardwareTokens(entities);
            return ResponseEntity.ok(Map.of("status", "success", "message", "Tokens imported"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }

    @PostMapping("/assign")
    public ResponseEntity<?> assignToken(@RequestBody AssignRequest request) {
        try {
            authService.assignTokenToUser(request.getSerialNumber(), request.getUserId());
            return ResponseEntity.ok(Map.of("status", "success", "message", "Token assigned"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }
}