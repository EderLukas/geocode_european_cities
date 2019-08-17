<?php

function getCityList($db) {
  try {

    $query = $db->prepare(
      'SELECT city_name, 
        country_name, 
        city_population, 
        city_latitude, 
        city_longitude FROM city
       JOIN country USING(country_id);');
    $query->execute();
    $res = $query->fetchAll(PDO::FETCH_ASSOC);

  } catch (PDOException $e) {
    $res = 'error';
    header("HTTP/1.1 500 Internal Server Error");

  }
  return $res;
}

function getBiggestPopulation($db) {
  try {

    $query = $db->prepare(
      'SELECT MAX(city_population) as max from city;'
    );
    $query->execute();
    $res = $query->fetch(PDO::FETCH_ASSOC)['max'];

  } catch (PDOException $e) {
    $res = 'error';
    header("HTTP/1.1 500 Internal Server Error");
  }
  return $res;
}