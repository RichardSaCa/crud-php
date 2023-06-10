<?php
//Antes que todo hay que incluir la conexión para que esté disponible en la página
include('conexion_db.php') // include no es obligatorio que el archivo exista
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <title>TaskManager CRUD con PHP y MySQL</title>
</head>

<body class="container">

    <div class="py-2">
        <table class="table" border="1" cellpadding="2">
            <thead>
                <tr>
                    <th scope="col">rocket id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Type</th>
                    <th scope="col">Active</th>
                    <th scope="col">Country</th>
                    <th scope="col">Company</th>
                    <th scope="col">Cost_per_Launch</th>
                </tr>
            </thead>
            <tbody>
                <?php
                $query = "SELECT * FROM rockets";
                $resultado = mysqli_query($conn, $query);

                while ($fila = mysqli_fetch_array($resultado)) { 
                    $array[] = $fila;
                    ?>
                    <!-- <tr>
                        <td><?php echo $fila['rocket_id'] ?></td>
                        <td><?php echo $fila['name'] ?></td>
                        <td><?php echo $fila['type'] ?></td>
                        <td><?php echo $fila['active'] ?></td>
                        <td><?php echo $fila['country'] ?></td>
                        <td><?php echo $fila['company'] ?></td>
                        <td><?php echo $fila['cost_per_launch'] ?></td>
                        
                    </tr> -->
                <?php } 
                echo json_encode($array);
                ?>
            </tbody>
        </table>

    </div>

</body>

</html>