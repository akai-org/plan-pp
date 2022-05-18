FROM postgres:14.2

# Set Polish locales
RUN localedef -i pl_PL -c -f UTF-8 -A /usr/share/locale/locale.alias pl_PL.UTF-8
ENV LANG pl_PL.utf8

# Create tables
COPY init.sql /docker-entrypoint-initdb.d/