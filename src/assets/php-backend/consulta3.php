<?php
  // Allow requests from any origin, CORS (Cross-Origin Resource Sharing)
  header('Access-Control-Allow-Origin: *'); // Permitir solicitudes desde cualquier origen
  header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE'); // Permitir los métodos HTTP necesarios
  header('Access-Control-Allow-Headers: Content-Type'); // Permitir los encabezados necesarios

  // Database connectin file
  require_once('connection.php');

  // Consulta para obtener las misiones de un cohete y payloads
  $sql= "SELECT missions.name as MissionName, missions.launch_status as LaunchStatus,
                rockets.name as RocketName, payloads.payload_id as PayloadId, payloads.name as PayloadName, payloads.type as PayloadType, payloads.orbit as PayloadOrbit
        FROM missions
        INNER JOIN rockets ON missions.rocket_id = rockets.rocket_id
        INNER JOIN payloads ON missions.payload_id = payloads.payload_id
        WHERE missions.rocket_id = '5e9d0d95eda69955f709d1eb'";
  $result = mysqli_query($conn, $sql);

  // If there are results, return them
  if (mysqli_num_rows($result) > 0) {
    $rows = array();
    while ($row = mysqli_fetch_assoc($result)) {
      $rows[] = $row;
    }
    echo json_encode($rows);
  } else {
    echo "No results";
  }
?>
