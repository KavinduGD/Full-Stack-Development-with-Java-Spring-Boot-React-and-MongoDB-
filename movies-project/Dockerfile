FROM eclipse-temurin:17-jdk-alpine
VOLUME /tmp
COPY target/*.jar movies-project.jar
ENTRYPOINT ["java","-jar","/movies-project.jar"]
EXPOSE 8080