CREATE DATABASE cities_db;

CREATE TABLE cities(
    city_id serial NOT NULL,
    city_name varchar(50) NOT NULL,
    continent varchar(50) NOT NULL,
    PRIMARY KEY(city_id)    
);