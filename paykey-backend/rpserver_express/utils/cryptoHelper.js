const crypto = require('crypto');

// Pastikan variabel lingkungan ini SAMA PERSIS dengan 
// paykey.security.aes-secret di file application.yml milik Java Spring Boot Anda.
const APP_SECRET = process.env.PAYKEY_SECURITY_AES_SECRET || 'PayKeySuperSecretMasterKey2026';

/**
 * Meniru persis fungsi generateKey di EncryptionUtil.java
 * Menggunakan SHA-256 untuk memastikan panjang kunci pas 32 bytes (256-bit)
 */
function getEncryptionKey(secret) {
    const hash = crypto.createHash('sha256');
    hash.update(secret, 'utf8');
    return hash.digest(); // Menghasilkan Buffer 32 bytes
}

/**
 * Meniru persis fungsi encrypt() di EncryptionUtil.java
 * Algoritma: AES/ECB/PKCS5Padding (Di Node.js PKCS7 identik dengan PKCS5 untuk blok AES)
 */
exports.encryptSeedForJava = (text) => {
    try {
        const key = getEncryptionKey(APP_SECRET);
        
        // Mode ECB tidak menggunakan Initialization Vector (IV), jadi parameter ke-3 adalah null
        const cipher = crypto.createCipheriv('aes-256-ecb', key, null);
        
        // Enkripsi dan konversi langsung ke Base64
        let encrypted = cipher.update(text, 'utf8', 'base64');
        encrypted += cipher.final('base64');
        
        return encrypted;
    } catch (err) {
        throw new Error("Error encrypting seed for Java: " + err.message);
    }
};

// Opsional: Untuk keperluan testing apakah bisa dibaca balik
exports.decryptSeedFromJava = (encryptedBase64) => {
    try {
        const key = getEncryptionKey(APP_SECRET);
        const decipher = crypto.createDecipheriv('aes-256-ecb', key, null);
        let decrypted = decipher.update(encryptedBase64, 'base64', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    } catch (err) {
        throw new Error("Error decrypting seed: " + err.message);
    }
};