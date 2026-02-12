-- CreateTable
CREATE TABLE `users` (
    `id` VARCHAR(128) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `full_name` VARCHAR(191) NOT NULL,
    `password_hash` VARCHAR(191) NULL,
    `role` ENUM('ADMIN', 'USER') NOT NULL DEFAULT 'USER',
    `company_name` VARCHAR(191) NULL,
    `mobile` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `status` VARCHAR(191) NOT NULL DEFAULT 'active',
    `suspend_note` TEXT NULL,
    `suspend_reason` TEXT NULL,

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `config_amount_limits` (
    `id` VARCHAR(191) NOT NULL,
    `segment` VARCHAR(191) NOT NULL,
    `currency` VARCHAR(191) NOT NULL DEFAULT 'MYR',
    `minAmount` DOUBLE NOT NULL DEFAULT 0,
    `maxAmount` DOUBLE NULL,
    `weight` INTEGER NOT NULL DEFAULT 0,
    `label` VARCHAR(191) NOT NULL DEFAULT 'low',
    `stepUp` BOOLEAN NOT NULL DEFAULT false,
    `methods` JSON NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `config_risk_thresholds` (
    `id` VARCHAR(191) NOT NULL,
    `lowScore` INTEGER NOT NULL DEFAULT 30,
    `highScore` INTEGER NOT NULL DEFAULT 70,
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `config_risk_rules` (
    `id` VARCHAR(191) NOT NULL,
    `ruleType` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT false,
    `weight` INTEGER NOT NULL DEFAULT 0,
    `parameters` LONGTEXT NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `config_risk_rules_ruleType_key`(`ruleType`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `config_auth_policies` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `segment` VARCHAR(191) NOT NULL,
    `channel` VARCHAR(191) NOT NULL,
    `riskLevel` VARCHAR(191) NOT NULL,
    `condition` LONGTEXT NOT NULL,
    `priority` INTEGER NOT NULL DEFAULT 1,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `updatedAt` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `config_auth_policies_segment_channel_riskLevel_key`(`segment`, `channel`, `riskLevel`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `policy_audit_logs` (
    `id` VARCHAR(191) NOT NULL,
    `policyName` VARCHAR(191) NOT NULL,
    `action` VARCHAR(191) NOT NULL,
    `adminEmail` VARCHAR(191) NOT NULL,
    `changes` LONGTEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `transactions` (
    `id` VARCHAR(191) NOT NULL,
    `timestamp` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `amount` DOUBLE NOT NULL,
    `currency` VARCHAR(191) NOT NULL DEFAULT 'MYR',
    `merchantName` VARCHAR(191) NULL DEFAULT 'Unknown Merchant',
    `merchantCategory` VARCHAR(191) NULL,
    `merchantCountry` VARCHAR(191) NULL,
    `authMethod` VARCHAR(191) NULL,
    `authResult` VARCHAR(191) NULL,
    `ipAddress` VARCHAR(191) NULL,
    `locationCity` VARCHAR(191) NULL,
    `locationCountry` VARCHAR(191) NULL,
    `userId` VARCHAR(191) NOT NULL,
    `deviceInfo` JSON NULL,
    `riskLevel` VARCHAR(191) NOT NULL DEFAULT 'LOW',
    `riskScore` INTEGER NULL DEFAULT 0,
    `riskReason` TEXT NULL,
    `appliedPolicyId` VARCHAR(191) NULL,
    `appliedLimitId` VARCHAR(191) NULL,

    INDEX `transactions_userId_idx`(`userId`),
    INDEX `transactions_timestamp_idx`(`timestamp`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `transaction_analysis_logs` (
    `id` VARCHAR(191) NOT NULL,
    `transactionId` VARCHAR(191) NOT NULL,
    `ruleCode` VARCHAR(191) NOT NULL,
    `scoreContributed` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_key` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `aaguid` VARCHAR(36) NOT NULL,
    `attestation_type` INTEGER NULL,
    `credential_id` VARCHAR(256) NOT NULL,
    `public_key` TEXT NOT NULL,
    `registered_timestamp` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `sign_counter` BIGINT NULL,
    `signature_algorithm` INTEGER NULL,
    `user_display_name` VARCHAR(64) NULL,
    `user_id` VARCHAR(128) NOT NULL,
    `username` VARCHAR(64) NULL,
    `device_name` VARCHAR(191) NULL,
    `last_active` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `last_status_change` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `last_used_ip` VARCHAR(191) NULL,
    `status` ENUM('ACTIVE', 'SUSPENDED', 'REVOKED') NOT NULL DEFAULT 'ACTIVE',
    `transports` VARCHAR(191) NULL,
    `rp_entity_id` VARCHAR(255) NULL,
    `authenticated_timestamp` DATETIME(6) NULL,
    `cred_protect` INTEGER NULL,
    `rk` BIT(1) NULL,
    `user_icon` VARCHAR(128) NULL,

    UNIQUE INDEX `user_key_credential_id_key`(`credential_id`),
    INDEX `user_key_user_id_idx`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `auth_logs` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `event_type` VARCHAR(191) NOT NULL,
    `auth_method` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `failure_reason` VARCHAR(191) NULL,
    `ip_address` VARCHAR(191) NULL,
    `user_agent` VARCHAR(191) NULL,
    `location` VARCHAR(191) NULL,
    `country_code` VARCHAR(191) NULL,
    `device` VARCHAR(191) NULL,
    `is_vpn` BOOLEAN NOT NULL DEFAULT false,
    `risk_score` INTEGER NOT NULL DEFAULT 0,
    `risk_tags` JSON NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `auth_logs_email_idx`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_known_devices` (
    `user_id` VARCHAR(128) NOT NULL,
    `device_hash` VARCHAR(191) NOT NULL,
    `last_seen` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `user_known_devices_user_id_idx`(`user_id`),
    PRIMARY KEY (`user_id`, `device_hash`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_known_locations` (
    `user_id` VARCHAR(128) NOT NULL,
    `country_code` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `last_seen` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `user_known_locations_user_id_idx`(`user_id`),
    PRIMARY KEY (`user_id`, `country_code`, `city`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `authenticator_transport` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `transport` VARCHAR(255) NOT NULL,
    `user_key_id` BIGINT NOT NULL,

    INDEX `FKr5ng3evn4q5h581vo2ndet463`(`user_key_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `metadata` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `aaguid` VARCHAR(255) NULL,
    `biometric_status_reports` LONGTEXT NULL,
    `content` TEXT NOT NULL,
    `status_reports` LONGTEXT NULL,
    `time_of_last_status_change` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `metadata_toc` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `encoded_metadata_toc_payload` LONGTEXT NOT NULL,
    `legal_header` TEXT NULL,
    `metadata_source` TEXT NOT NULL,
    `next_update` VARCHAR(255) NOT NULL,
    `no` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `metadata_yubico` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `content` LONGTEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rp` (
    `id` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NULL,
    `icon` VARCHAR(255) NULL,
    `name` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
