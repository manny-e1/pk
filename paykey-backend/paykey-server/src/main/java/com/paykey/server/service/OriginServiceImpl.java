package com.paykey.server.service;

import com.linecorp.line.auth.fido.fido2.server.service.OriginService;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@ConfigurationProperties(prefix = "app")
@Service
@RequiredArgsConstructor
@Getter
@Setter
@Slf4j
public class OriginServiceImpl implements OriginService {
    private List<String> origins = new ArrayList<>();

    @Override
    public List<String> getOrigins(String rpId) {
        log.debug("Mengecek origin untuk rpId: {}. Allowed origins di config: {}", rpId, origins);
        return origins;
    }
}