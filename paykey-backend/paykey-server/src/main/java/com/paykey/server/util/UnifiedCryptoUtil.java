package com.paykey.server.util;

import org.apache.commons.codec.binary.Base32;
import org.apache.commons.codec.binary.Hex;
import lombok.extern.slf4j.Slf4j;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.nio.ByteBuffer;
import java.security.KeyFactory;
import java.security.PublicKey;
import java.security.Signature;
import java.security.spec.X509EncodedKeySpec;
import java.util.Base64;

@Slf4j
public class UnifiedCryptoUtil {

    /**
     * Verifikasi Tanda Tangan Digital (RSA/ECDSA)
     * Digunakan untuk PIN, Biometrik, dan Push Approval
     */
    public static boolean verifySignature(String publicKeyPem, String algorithm, String data, String signatureBase64) {
        try {
            // 1. Bersihkan Header PEM
            String cleanKey = publicKeyPem
                    .replace("-----BEGIN PUBLIC KEY-----", "")
                    .replace("-----END PUBLIC KEY-----", "")
                    .replaceAll("\\s", "");

            byte[] keyBytes = Base64.getDecoder().decode(cleanKey);
            X509EncodedKeySpec spec = new X509EncodedKeySpec(keyBytes);

            // 2. Load Public Key
            String keyAlgo = algorithm.toUpperCase().contains("EC") ? "EC" : "RSA";
            KeyFactory kf = KeyFactory.getInstance(keyAlgo);
            PublicKey pubKey = kf.generatePublic(spec);

            // 3. Init Signature (Default ke SHA256)
            String sigAlgo = algorithm.equalsIgnoreCase("EC") ? "SHA256withECDSA" : "SHA256withRSA";
            Signature sig = Signature.getInstance(sigAlgo);
            sig.initVerify(pubKey);
            
            // 4. Verify
            sig.update(data.getBytes());
            return sig.verify(Base64.getDecoder().decode(signatureBase64));

        } catch (Exception e) {
            log.error("Signature verification failed: {}", e.getMessage());
            return false;
        }
    }

    /**
     * Validasi TOTP (RFC 6238)
     * Mendukung Seed dalam format Base32 (Google Auth) atau Hex (Hardware Token China/Generic)
     */
    // public static boolean validateTotp(String seed, String inputOtp, int timeStep, int digits, int window) {
    //     try {
    //         byte[] secretBytes;
    //         // Deteksi format seed (Base32 vs Hex) - Hardware token sering pakai Hex
    //         if (isHex(seed)) {
    //             secretBytes = Hex.decodeHex(seed);
    //         } else {
    //             secretBytes = new Base32().decode(seed);
    //         }

    //         long currentTime = System.currentTimeMillis() / 1000;
    //         long currentT = currentTime / timeStep;

    //         // Cek Window (Toleransi waktu server vs device)
    //         for (int i = -window; i <= window; i++) {
    //             String generatedOtp = generateTotp(secretBytes, currentT + i, digits);
    //             if (generatedOtp.equals(inputOtp)) {
    //                 return true;
    //             }
    //         }
    //         return false;
    //     } catch (Exception e) {
    //         log.error("TOTP validation error: {}", e.getMessage());
    //         return false;
    //     }
    // }

    public static boolean validateTotp(String seed, String inputOtp, int timeStep, int digits, int window, String algorithm) {
    try {
        byte[] secretBytes = isHex(seed) ? Hex.decodeHex(seed) : new Base32().decode(seed);
        long currentT = (System.currentTimeMillis() / 1000) / timeStep;

        // PERBAIKAN: Gunakan window yang lebih luas (sama dengan Node.js yaitu 2)
        for (int i = -window; i <= window; i++) {
            String generatedOtp = generateTotp(secretBytes, currentT + i, digits, algorithm);
            if (generatedOtp.equals(inputOtp)) return true;
        }
        return false;
    } catch (Exception e) {
        log.error("TOTP validation error: {}", e.getMessage());
        return false;
    }
}

    // private static String generateTotp(byte[] key, long t, int digits) throws Exception {
    //     byte[] data = ByteBuffer.allocate(8).putLong(t).array();
    //     Mac mac = Mac.getInstance("HmacSHA1"); // Standard TOTP RFC pakainya SHA1
    //     mac.init(new SecretKeySpec(key, "HmacSHA1"));
    //     byte[] hash = mac.doFinal(data);

    //     int offset = hash[hash.length - 1] & 0xF;
    //     long binary = ((hash[offset] & 0x7f) << 24) |
    //                   ((hash[offset + 1] & 0xff) << 16) |
    //                   ((hash[offset + 2] & 0xff) << 8) |
    //                   (hash[offset + 3] & 0xff);

    //     long otp = binary % (long) Math.pow(10, digits);
    //     String result = Long.toString(otp);
    //     while (result.length() < digits) result = "0" + result; // Padding
    //     return result;
    // }

    private static String generateTotp(byte[] key, long t, int digits, String algorithm) throws Exception {
    byte[] data = ByteBuffer.allocate(8).putLong(t).array();
    // PERBAIKAN: Algoritma dinamis (HmacSHA1, HmacSHA256, dll)
    String hmacAlgo = "Hmac" + algorithm.toUpperCase(); 
    Mac mac = Mac.getInstance(hmacAlgo);
    mac.init(new SecretKeySpec(key, hmacAlgo));
    byte[] hash = mac.doFinal(data);

    int offset = hash[hash.length - 1] & 0xF;
    long binary = ((hash[offset] & 0x7f) << 24) |
                  ((hash[offset + 1] & 0xff) << 16) |
                  ((hash[offset + 2] & 0xff) << 8) |
                  (hash[offset + 3] & 0xff);

    long otp = binary % (long) Math.pow(10, digits);
    return String.format("%0" + digits + "d", otp);
}
    
    private static boolean isHex(String str) {
        return str.matches("^[0-9a-fA-F]+$");
    }
}