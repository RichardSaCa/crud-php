<?php
//--configuracion del cors--
//https://parzibyte.me/blog/2019/11/10/configurar-cors-php/

//--metodo crud
//https://webdamn.com/create-simple-rest-api-with-php-mysql/

//Antes que todo hay que incluir la conexión para que esté disponible en la página
include('conexion_db.php'); // include no es obligatorio que el archivo exista
include_once "cors.php";
$query = "SELECT * FROM rockets";
$resultado = mysqli_query($conn, $query);

while ($fila = mysqli_fetch_array($resultado)) {
    $array[] = $fila;
}

header('Content-Type: application/json');
echo json_encode($array);
