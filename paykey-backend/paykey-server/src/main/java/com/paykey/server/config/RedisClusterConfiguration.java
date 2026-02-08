/*
 * Copyright 2024 LY Corporation
 *
 * LY Corporation licenses this file to you under the Apache License,
 * version 2.0 (the "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at:
 *
 *   https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

package com.paykey.server.config;

import com.paykey.server.redis.RedisProps;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.connection.RedisPassword;
import org.springframework.data.redis.connection.jedis.JedisConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.serializer.GenericJackson2JsonRedisSerializer;

@Configuration
@Profile("prod")
@RequiredArgsConstructor
@EnableConfigurationProperties(value = {RedisProps.class})
public class RedisClusterConfiguration {

    @Autowired
    private RedisProps redisProps;

    @Value("${spring.redis.password}")
    private String redisPassword;

    @Value("${spring.redis.host:localhost}")
    private String redisHost;

    @Value("${spring.redis.port:6379}")
    private int redisPort;

    @Bean
    public RedisConnectionFactory redisConnectionFactory() {
        if (redisProps.getNodes() == null || redisProps.getNodes().isEmpty()) {
            org.springframework.data.redis.connection.RedisStandaloneConfiguration standalone = new org.springframework.data.redis.connection.RedisStandaloneConfiguration();
            standalone.setHostName(redisHost);
            standalone.setPort(redisPort);
            standalone.setPassword(RedisPassword.of(redisPassword));
            return new JedisConnectionFactory(standalone);
        }

        org.springframework.data.redis.connection.RedisClusterConfiguration redisConfig = new org.springframework.data.redis.connection.RedisClusterConfiguration(redisProps.getNodes());
        redisConfig.setMaxRedirects(redisProps.getMaxRedirects());
        redisConfig.setPassword(RedisPassword.of(redisPassword));

        return new JedisConnectionFactory(redisConfig);
    }

    @Bean
    public RedisTemplate<String, Object> redisTemplate() {
        RedisTemplate<String, Object> redisTemplate = new RedisTemplate<>();
        redisTemplate.setConnectionFactory(redisConnectionFactory());
        redisTemplate.setValueSerializer(new GenericJackson2JsonRedisSerializer());
        return redisTemplate;
    }
}
