<?php
try {
  $db = new PDO($server . $database, $user, $password);
} catch (PDOException $e) {
    echo '<p>Failed to connect to database</p>';
    if(ini_get('display_errors')){
        echo '<br>' . $e->getMessage();
    }
    exit;
}
?>