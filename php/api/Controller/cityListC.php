<?php
  include '../Model/cityListM.php';
  include '../Model/inc/db_param.php';
  include '../Model/inc/db_connection.php';

  $dataSets = [];
  $biggestPopulation = getBiggestPopulation($db);
  
  // DB-Request
  $rawCityDataSets = getCityList($db);
  foreach ($rawCityDataSets as $dataSet) {
    $dataSet['radius'] = (100 * $dataSet['city_population'] / $biggestPopulation) * 1000;

    $dataSets[] = $dataSet;
  }

  // Response
  header("HTTP/1.1 200 OK");
  header('Content-type: application/json');
  echo json_encode($dataSets);
  exit();
?>