<?php
  // Allow requests from any origin, CORS (Cross-Origin Resource Sharing)
  header('Access-Control-Allow-Origin: *'); // Permitir solicitudes desde cualquier origen
  header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE'); // Permitir los métodos HTTP necesarios
  header('Access-Control-Allow-Headers: Content-Type'); // Permitir los encabezados necesarios

  // Database connection file
  require_once('connection.php');

  // Obtener id del cohete seleccionado en el frontend
  $id = isset($_GET['id']) ? $_GET['id'] : '5e9d0d95eda69955f709d1eb';

  // Consulta para obtener el costo total de los lanzamientos de todos los cohetes
  $sql= "SELECT Launches.name as LaunchName,Rockets.name as RocketName,
    SUM(Rockets.cost_per_launch) as SUMA, LaunchPads.name as LaunchPadName, LaunchPads.region
    FROM Launches
    INNER JOIN Rockets ON Launches.rocket_id = Rockets.rocket_id
    INNER JOIN LaunchPads ON Launches.launchpad_id =
    LaunchPads.launchpad_id
    WHERE Rockets.rocket_id = '$id'";

  // try catch para intentar realizar la consulta
  try {
    $result = mysqli_query($conn, $sql);
    if(!$result){
      printf("Error: %s\n", mysqli_error($conn));
    }

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
  } catch (Exception $e) {
    // Imprimir error en caso de no poder realizar la consulta
    echo json_encode(array("error" => "Failed to execute the query: " . $e->getMessage()));
  }
  // Cerrar conexión
  mysqli_close($conn);
?>
