
# # Etapa 1: Construcción de la aplicación
FROM maven:3.8.7-eclipse-temurin-17 AS build

# # Establece el directorio de trabajo
WORKDIR /app

# # Copia el archivo pom.xml y descarga las dependencias
COPY pom.xml ./
RUN mvn dependency:go-offline

# # Copia el resto del código de la aplicación
COPY src ./src

# # Construye la aplicación
RUN mvn clean install -DskipTests -X

# # Etapa 2: Ejecutar la aplicación
FROM eclipse-temurin:17-jre

# # Establece el directorio de trabajo
WORKDIR /app

# # Copia el archivo JAR desde la etapa de construcción
COPY --from=build /app/target/*.jar app.jar

# # Copia el script wait-for-it.sh
COPY wait-for-it.sh /app/wait-for-it.sh
RUN chmod +x /app/wait-for-it.sh

# # Exponer el puerto
EXPOSE 8080

# # Comando por defecto para ejecutar la aplicación
# ENTRYPOINT ["tail"]
# CMD ["-f","/dev/null"]

# # CMD mvn spring-boot:run
CMD ["./wait-for-it.sh", "mysql:5012", "--", "java", "-jar", "app.jar"]

# #CMD mvn spring-boot:run
