FROM postgres:latest
ENV POSTGRES_DB = employee-management
ENV POSTGRES_USER = postgres
ENV POSTGRES_PASSWORD = employee123
COPY ./init.sql /docker-entrypoint-initdb.d/
EXPOSE 5432
