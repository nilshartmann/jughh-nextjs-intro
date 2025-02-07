# Using Oracle GraalVM for JDK 17
FROM container-registry.oracle.com/graalvm/native-image:23.0.1-ol9 AS builder

# Set the working directory to /home/app
WORKDIR /build

# Copy the source code into the image for building
COPY backend /build

COPY .mvn /build/.mvn

COPY mvnw /build

RUN ls -l /build


# Build
RUN ./mvnw --no-transfer-progress -Pnative -DskipTests native:compile


# The deployment Image
FROM debian:bookworm-slim

EXPOSE 20080

# Copy the native executable into the containers
COPY --from=builder /build/target/backend app
ENTRYPOINT ["/app"]