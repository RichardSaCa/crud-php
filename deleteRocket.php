<?php

include_once "cors.php";
include('conexion_db.php');

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$data = json_decode(file_get_contents("php://input"));
$Rocket_id = $data->rocket_id;

if ($Rocket_id) {
    $empQuery = "
    DELETE FROM rockets
    WHERE rocket_id = '".$Rocket_id."'";
    if (mysqli_query($conn, $empQuery)) {
        $messgae = "Employee delete Successfully.";
        $status = 1;
    } else {
        $messgae = "Employee delete failed.";
        $status = 0;
    }
} else {
    $messgae = "Invalid request.";
    $status = 0;
}
$empResponse = array(
    'status' => $status,
    'status_message' => $messgae
);
header('Content-Type: application/json');
echo json_encode($empResponse);
