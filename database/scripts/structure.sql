CREATE DATABASE euro_cities;

\c euro_cities;

CREATE TABLE country (
  country_id SERIAL PRIMARY KEY,
  country_name VARCHAR(200) NOT NULL
);

CREATE TABLE city (
  city_id SERIAL PRIMARY KEY,
  country_id INTEGER NOT NULL REFERENCES country(country_id),
  city_name VARCHAR(200) NOT NULL,
  city_population NUMERIC NOT NULL,
  city_latitude NUMERIC NOT NULL,
  city_longitude NUMERIC NOT NULL
);