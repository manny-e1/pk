package com.paykey.server.util;

import org.apache.commons.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.Cipher;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.util.Arrays;

@Component // 1. Jadikan Component agar bisa di-scan Spring
public class EncryptionUtil {

    private static SecretKeySpec secretKey;

    // 2. Gunakan Setter Injection untuk mengisi static field
    @Value("${paykey.security.aes-secret}")
    public void setAppSecret(String secret) {
        // Inisialisasi kunci HANYA SEKALI saat startup untuk performa & thread-safety
        generateKey(secret);
    }

    private static void generateKey(String myKey) {
        try {
            byte[] key = myKey.getBytes(StandardCharsets.UTF_8);
            MessageDigest sha = MessageDigest.getInstance("SHA-256");
            key = sha.digest(key);
            key = Arrays.copyOf(key, 32); // AES-256 uses 32 bytes
            secretKey = new SecretKeySpec(key, "AES");
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Error initializing encryption key", e);
        }
    }

    public static String encrypt(String strToEncrypt) {
        try {
            if (secretKey == null) throw new IllegalStateException("Encryption key not initialized");
            
            Cipher cipher = Cipher.getInstance("AES/ECB/PKCS5Padding");
            cipher.init(Cipher.ENCRYPT_MODE, secretKey);
            return Base64.encodeBase64String(cipher.doFinal(strToEncrypt.getBytes(StandardCharsets.UTF_8)));
        } catch (Exception e) {
            throw new RuntimeException("Error while encrypting: " + e.toString(), e);
        }
    }

    public static String decrypt(String strToDecrypt) {
        try {
            if (secretKey == null) throw new IllegalStateException("Encryption key not initialized");

            Cipher cipher = Cipher.getInstance("AES/ECB/PKCS5PADDING");
            cipher.init(Cipher.DECRYPT_MODE, secretKey);
            return new String(cipher.doFinal(Base64.decodeBase64(strToDecrypt)));
        } catch (Exception e) {
            throw new RuntimeException("Error while decrypting: " + e.toString(), e);
        }
    }
}