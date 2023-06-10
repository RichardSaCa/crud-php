<?php
//INCLUIR LIBRERIAS DE FUNCIONAMIENTO
include_once "cors.php";
include('conexion_db.php');
//CABECERAS PARA RECONCER JSON
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$data = json_decode(file_get_contents("php://input"));
$Rocket_id = $data->rocket_id;
$Name = $data->name;
$Type = $data->type;
$Active = $data->active;
$Country = $data->country;
$Company = $data->company;
$Cost = $data->cost_per_launch;

$empQuery=" 
        INSERT INTO rockets
            SET rocket_id='".$Rocket_id."', name='".$Name."', type='".$Type."', active='".$Active."', country='".$Country."', 
            company='".$Company."', cost_per_launch='".$Cost."'";

if( mysqli_query($conn, $empQuery)) {
    $messgae = "Rocket created Successfully.";
    $status = 1;			
} else {
    $messgae = "Rocket creation failed.";
    $status = 0;			
}
$empResponse = array(
    'status' => $status,
    'status_message' => $messgae
);
header('Content-Type: application/json');
echo json_encode($empResponse);

?>