<?php
  // Database connectin file
  $user = "root";
  $password = "";
  $host = "localhost";
  $db = "spacex-db";

  // Create connection, if error, display error
  $conn = mysqli_connect($host, $user, $password, $db) or die("Connection failed: " . mysqli_connect_error());
?>
