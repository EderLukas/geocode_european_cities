FROM postgres:12.0
RUN mkdir /postgres
WORKDIR /postgres
COPY scripts/ .
EXPOSE 5432
RUN psql -f ./structure.sql && psql -f ./insert_countries.sql euro_cities && psql -f ./insert_cities.sql euro_cities