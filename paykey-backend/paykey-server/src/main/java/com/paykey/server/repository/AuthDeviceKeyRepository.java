package com.paykey.server.repository;

import com.paykey.server.entity.AuthDeviceKeyEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.List;

@Repository
public interface AuthDeviceKeyRepository extends JpaRepository<AuthDeviceKeyEntity, String> {
    Optional<AuthDeviceKeyEntity> findByUserIdAndDeviceIdAndAuthType(String userId, String deviceId, String authType);
    List<AuthDeviceKeyEntity> findByUserId(String userId);
}