package com.paykey.server.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "auth_totp_tokens", indexes = {
        @Index(name = "idx_totp_serial", columnList = "serial_number", unique = true),
        @Index(name = "idx_totp_user", columnList = "user_id")
})
public class AuthTotpTokenEntity {

    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(length = 36)
    private String id;

    @Column(name = "serial_number", nullable = false, unique = true, length = 100)
    private String serialNumber;

    @Column(name = "encrypted_seed", nullable = false, length = 512)
    private String encryptedSeed; // SEED WAJIB DIENKRIPSI

    @Column(name = "user_id", length = 64)
    private String userId; // Nullable (jika belum di-assign)

    @Column(name = "token_type", length = 20)
    private String tokenType; // "HARDWARE", "SOFT"

    @Column(name = "status", length = 20)
    private String status; // "AVAILABLE", "ASSIGNED", "SUSPENDED"

    @Column(name = "time_step")
    private int timeStep = 30; // Default 30s (RFC 6238)

    @Column(name = "digits")
    private int digits = 6;

    @Column(name = "imported_at")
    private LocalDateTime importedAt;

    @Column(name = "assigned_at")
    private LocalDateTime assignedAt;

    @Column(name = "last_used_at")
    private LocalDateTime lastUsedAt;
    
    @PrePersist
    protected void onCreate() {
        if (this.importedAt == null) this.importedAt = LocalDateTime.now();
        if (this.status == null) this.status = "AVAILABLE";
    }
}