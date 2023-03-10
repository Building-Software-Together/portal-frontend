 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <script>
        window.onload = init;

        function init() {
            btn_enviar = document.getElementById("btnEnviar");
            btn_enviar.addEventListener("subimit", enviarDatos);

            function enviarDatos(e) {
                var frm = new FormData(document.getElementById("login"))
                console.log("Submitted")
                e.preventDefault();

            }
        }

    </script>
</head>
<body>

<form id="login" action="grabar.php" method="post">
    <label for="usuario">
        <input type="text" name="usuario" id="usuario">
    </label>
    <label for="clave">
        <input type="password" name="clave" id="clave">
    </label>
    <input type="submit" value="Enviar" id="btnEnviar">
</form>
    
</body>
</html>
