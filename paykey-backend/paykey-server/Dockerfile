# Tahap 1: Build (Menggunakan Gradle 6.8 + Java 11)
FROM gradle:6.8.3-jdk11 AS builder
WORKDIR /app

# Copy seluruh source code project (Parent folder: common, core, server)
COPY . .

# Masuk ke folder server dan build
# Kita skip test agar build lebih cepat & menghindari error unit test lama
WORKDIR /app/paykey-server
RUN gradle clean build -x test --no-daemon

# Tahap 2: Runtime (GANTI DARI openjdk KE eclipse-temurin)
FROM eclipse-temurin:11-jre
WORKDIR /app

# Copy file .jar hasil build dari tahap sebelumnya
# Pastikan path ini sesuai dengan output build gradle
COPY --from=builder /app/paykey-server/build/libs/*.jar app.jar

# Expose port aplikasi
EXPOSE 8080

# Command untuk menjalankan aplikasi
ENTRYPOINT ["java", "-jar", "app.jar"]