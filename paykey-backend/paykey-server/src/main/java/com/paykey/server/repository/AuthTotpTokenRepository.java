package com.paykey.server.repository;

import com.paykey.server.entity.AuthTotpTokenEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.List;

@Repository
public interface AuthTotpTokenRepository extends JpaRepository<AuthTotpTokenEntity, String> {
    Optional<AuthTotpTokenEntity> findBySerialNumber(String serialNumber);
    // Mencari token aktif milik user (bisa punya lebih dari 1 token)
    List<AuthTotpTokenEntity> findByUserIdAndStatus(String userId, String status);
}