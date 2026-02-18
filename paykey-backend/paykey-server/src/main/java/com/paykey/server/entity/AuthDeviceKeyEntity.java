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
@Table(name = "auth_device_keys", indexes = {
        @Index(name = "idx_device_user", columnList = "user_id, device_id"),
        @Index(name = "idx_public_key_hash", columnList = "public_key_hash") // Untuk lookup cepat
})
public class AuthDeviceKeyEntity {

    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(length = 36)
    private String id;

    @Column(name = "user_id", nullable = false, length = 64)
    private String userId;

    @Column(name = "device_id", nullable = false, length = 255)
    private String deviceId;

    @Lob
    @Column(name = "public_key", nullable = false)
    private String publicKey; // Format PEM

    @Column(name = "public_key_hash", length = 64)
    private String publicKeyHash; // SHA-256 hash dari public key untuk integritas

    @Column(name = "auth_type", nullable = false, length = 20)
    private String authType; // "PIN", "BIO_LEGACY"

    @Column(name = "algorithm", length = 20)
    private String algorithm; // "RSA", "EC"

    @Column(name = "status", length = 20)
    private String status; // "ACTIVE", "BLOCKED", "REVOKED"

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "last_used_at")
    private LocalDateTime lastUsedAt;

    @PrePersist
    protected void onCreate() {
        if (this.createdAt == null) this.createdAt = LocalDateTime.now();
        if (this.status == null) this.status = "ACTIVE";
    }
}