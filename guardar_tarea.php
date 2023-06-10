<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Guardar Tarea</title>
</head>
<body>
    <?php 
        include("conexion_db.php"); 

        //Verifica si llegó a la página presionando el botón guardar
        if(isset($_POST['bt_guardar_tarea'])){
            //Captura el título y la descripción enviados por el método POST
            $titulo = $_POST['titulo'];
            $descripcion = $_POST['descripcion'];

            //Realiza la insersión del nuevo dato (nótese el uso de \' para poder colocar las comillas simples necesarias en la sentencia SQL)
            $query = 'INSERT INTO tarea (titulo, descripcion, fecha) VALUES (\''.$titulo.'\',\''.$descripcion.'\','.'NOW())'; 
            //Ejecuta la consulta
            mysqli_query($conn, $query);         
            //Con este comando retorna a la página principal y muestra los datos actualizados de la nueva tarea
            header("Location: index.php");
        }
    ?>
</body>
</html>