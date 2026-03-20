package com.paykey.server.service;

import com.paykey.server.entity.AuthDeviceKeyEntity;
import com.paykey.server.entity.AuthTotpTokenEntity;
import com.paykey.server.repository.AuthDeviceKeyRepository;
import com.paykey.server.repository.AuthTotpTokenRepository;
import com.paykey.server.util.EncryptionUtil;
import com.paykey.server.util.UnifiedCryptoUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Slf4j
@Service
public class UnifiedAuthService {

    @Autowired
    private AuthDeviceKeyRepository deviceKeyRepo;

    @Autowired
    private AuthTotpTokenRepository totpRepo;

    // --- 1. MANAJEMEN KUNCI DIGITAL (PIN/BIO - Client Setup) ---

    // @Transactional
    // public void registerDeviceKey(String userId, String deviceId, String publicKey, String authType) {
    //     // Bersihkan key lama jika user setup ulang di device yang sama
    //     deviceKeyRepo.findByUserIdAndDeviceIdAndAuthType(userId, deviceId, authType)
    //             .ifPresent(existing -> {
    //                 log.info("Overwriting existing {} key for user {}", authType, userId);
    //                 deviceKeyRepo.delete(existing);
    //             });

    //     AuthDeviceKeyEntity key = AuthDeviceKeyEntity.builder()
    //             .userId(userId)
    //             .deviceId(deviceId)
    //             .publicKey(publicKey) // PEM format dari Mobile
    //             .authType(authType)   // "PIN" atau "BIO_LEGACY"
    //             .algorithm("RSA")     // Default RSA, Mobile App harus generate RSA Keypair
    //             .status("ACTIVE")
    //             .build();

    //     deviceKeyRepo.save(key);
    //     log.info("Registered new {} key for User: {}", authType, userId);
    // }

    @Transactional
public void registerDeviceKey(String userId, String deviceId, String publicKey, String authType) {
    // 1. CEK: Jika tipe adalah TOTP, simpan ke tabel auth_totp_tokens
    if (authType != null && authType.contains("TOTP")) {
        log.info("Processing TOTP Registration for User: {}", userId);
        
        // Hapus data lama dengan serial yang sama jika ada
        totpRepo.findBySerialNumber(deviceId).ifPresent(totpRepo::delete);

        AuthTotpTokenEntity totp = AuthTotpTokenEntity.builder()
                .serialNumber(deviceId)
                .userId(userId)
                .tokenType(authType.contains("HARDWARE") ? "HARDWARE" : "SOFT")
                // WAJIB: Enkripsi seed (publicKey) sebelum simpan ke DB Java
                .encryptedSeed(EncryptionUtil.encrypt(publicKey)) 
                .status("ASSIGNED")
                .timeStep(60) // Gunakan 60 untuk Hardware Token
                .digits(6)
                .assignedAt(LocalDateTime.now())
                .build();
        
        totpRepo.save(totp);
        log.info("Successfully registered & encrypted TOTP in Security Vault for User: {}", userId);
        
    } else {
        // 2. Jika tipe PIN/BIO, gunakan logika asli Anda (simpan ke auth_device_keys)
        deviceKeyRepo.findByUserIdAndDeviceIdAndAuthType(userId, deviceId, authType)
                .ifPresent(deviceKeyRepo::delete);

        AuthDeviceKeyEntity key = AuthDeviceKeyEntity.builder()
                .userId(userId)
                .deviceId(deviceId)
                .publicKey(publicKey) // PEM format
                .authType(authType)
                .algorithm("RSA")
                .status("ACTIVE")
                .build();

        deviceKeyRepo.save(key);
        log.info("Registered new {} key in Device Vault for User: {}", authType, userId);
    }
}

    // --- 2. MANAJEMEN HARDWARE TOKEN (Admin Import) ---

    @Transactional
    public void importHardwareTokens(List<AuthTotpTokenEntity> tokens) {
        int count = 0;
        for (AuthTotpTokenEntity token : tokens) {
            // Cek duplikasi Serial Number
            if (totpRepo.findBySerialNumber(token.getSerialNumber()).isPresent()) {
                log.warn("Skipping duplicate serial: {}", token.getSerialNumber());
                continue;
            }

            // ENKRIPSI SEED SEBELUM SIMPAN (Crucial for Security)
            // Seed mentah dari CSV dienkripsi agar aman di DB
            String rawSeed = token.getEncryptedSeed(); 
            token.setEncryptedSeed(EncryptionUtil.encrypt(rawSeed));
            
            token.setStatus("AVAILABLE");
            token.setImportedAt(LocalDateTime.now());
            
            totpRepo.save(token);
            count++;
        }
        log.info("Successfully imported {} new tokens.", count);
    }

    @Transactional
    public void assignTokenToUser(String serialNumber, String userId) {
        AuthTotpTokenEntity token = totpRepo.findBySerialNumber(serialNumber)
                .orElseThrow(() -> new IllegalArgumentException("Token not found: " + serialNumber));

        if (!"AVAILABLE".equals(token.getStatus())) {
            throw new IllegalStateException("Token status is " + token.getStatus() + ", cannot assign.");
        }

        token.setUserId(userId);
        token.setStatus("ASSIGNED");
        token.setAssignedAt(LocalDateTime.now());
        totpRepo.save(token);
        log.info("Assigned token {} to user {}", serialNumber, userId);
    }

    // --- 3. VERIFIKASI (Verification Core) ---

    // Untuk PIN, Biometrik, Push Approval (Signature Based)
    @Transactional
    public boolean verifySignatureAuth(String userId, String deviceId, String authType, String challenge, String signature) {
        AuthDeviceKeyEntity key = deviceKeyRepo.findByUserIdAndDeviceIdAndAuthType(userId, deviceId, authType)
                .orElseThrow(() -> new IllegalArgumentException("Key not setup for " + authType));

        if (!"ACTIVE".equals(key.getStatus())) throw new SecurityException("Key is blocked/inactive");

        // Verifikasi Kriptografi (UnifiedCryptoUtil)
        boolean isValid = UnifiedCryptoUtil.verifySignature(key.getPublicKey(), key.getAlgorithm(), challenge, signature);
        
        if (isValid) {
            key.setLastUsedAt(LocalDateTime.now());
            deviceKeyRepo.save(key);
        } else {
            log.warn("Invalid signature attempt for user {} device {}", userId, deviceId);
        }
        return isValid;
    }

    // // Untuk Hardware Token & Soft Token (OTP Based)
    // @Transactional
    // public boolean verifyTotp(String userId, String inputOtp) {
    //     // Cari semua token yang ASSIGNED ke user ini
    //     List<AuthTotpTokenEntity> tokens = totpRepo.findByUserIdAndStatus(userId, "ASSIGNED");
        
    //     for (AuthTotpTokenEntity token : tokens) {
    //         try {
    //             // DEKRIPSI SEED
    //             String plainSeed = EncryptionUtil.decrypt(token.getEncryptedSeed());
                
    //             // Validasi (Window=1 artinya toleransi +/- 30 detik)
    //             boolean isValid = UnifiedCryptoUtil.validateTotp(plainSeed, inputOtp, token.getTimeStep(), token.getDigits(), 1);
                
    //             if (isValid) {
    //                 token.setLastUsedAt(LocalDateTime.now());
    //                 totpRepo.save(token);
    //                 return true; 
    //             }
    //         } catch (Exception e) {
    //             log.error("Error verifying token {}: {}", token.getSerialNumber(), e.getMessage());
    //         }
    //     }
    //     return false;
    // }

    @Transactional
public boolean verifyTotp(String userId, String inputOtp) {
    List<AuthTotpTokenEntity> tokens = totpRepo.findByUserIdAndStatus(userId, "ASSIGNED");
    
    for (AuthTotpTokenEntity token : tokens) {
        try {
            String plainSeed = EncryptionUtil.decrypt(token.getEncryptedSeed());
            
            // PERBAIKAN: Gunakan Window=2 agar lebih toleran terhadap perbedaan waktu
            // Sertakan juga token.getAlgorithm() yang sudah disimpan saat Assign
            String algo = (token.getTokenType() != null) ? "SHA1" : "SHA1"; // Bisa ambil dari field entity jika ada
            
            boolean isValid = UnifiedCryptoUtil.validateTotp(
                plainSeed, 
                inputOtp, 
                token.getTimeStep(), 
                token.getDigits(), 
                2, // Window disamakan dengan Node.js
                "SHA1" // Pastikan entity AuthTotpTokenEntity punya field algorithm jika ingin dinamis
            );
            
            if (isValid) {
                token.setLastUsedAt(LocalDateTime.now());
                totpRepo.save(token);
                return true; 
            }
        } catch (Exception e) {
            log.error("Error verifying token {}: {}", token.getSerialNumber(), e.getMessage());
        }
    }
    return false;
}
}