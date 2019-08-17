<?php
try {
  $db = new PDO($server . $port . $database . $user . $password);
} catch (PDOException $e) {
    echo '<p>Failed to connect to database</p>';
    error_log(json_encode($e->getMessage()));
    exit;
}
?>