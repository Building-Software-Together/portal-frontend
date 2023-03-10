

<?php
$user = '' $pass = ''
var_dump($POST);
$servername = "localhost"
$database = "test";
$username = "root";
$password = "";

/* try {
    $dbh = new PDO('sqlite:host=localhost;dbname=test', $user, $pass);

} catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die(); // Cerramos la conexión
}

$sql = "INSERT INTO Usuario(usuario, Password) VALUES('".$POST["usuario"]."'
echo $sql;
 */
$sql = "INSERT INTO Usuario(usuario, Password) VALUES('".$POST["usuario"]."', '".$POST["clave"]."')";

$respuesta = array();



$respuesta["error"] = false;
$respuesta["descripcion"] = " New record created succesfully";
echo json_encode($respuesta);


echo $sql;

?>






