<?php
  include '../Model/cityListM.php';
  echo 'hello';
  $cityDatasets = getCityList();
  echo 'hello';

  header("HTTP/1.1 200 OK");
  header('Content-type: application/json');
  echo json_encode($cityDatasets);
  exit();
?>