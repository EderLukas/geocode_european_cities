<?php
include 'inc/db_param.php';
include 'inc/db_connection.php';

function getCityList() {
  try {
  $res = $db->query(
    'SELECT * FROM city
      JOIN country USING(country_id)');
  } catch (PDOException $e) {
    return 'error';
  }
  return $res;
}