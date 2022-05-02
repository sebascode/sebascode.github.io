<?php 
session_start(); 
include_once "conexion.php"; 

//primero tengo que ver si el usuario está memorizado en una cookie
if (isset($_COOKIE["id_usuario_dw"]) && isset($_COOKIE["marca_aleatoria_usuario_dw"])){
   //Tengo cookies memorizadas
   //además voy a comprobar que esas variables no estén vacías
   if ($_COOKIE["id_usuario_dw"]!="" || $_COOKIE["marca_aleatoria_usuario_dw"]!=""){
      //Voy a ver si corresponden con algún usuario
      $ssql = "select * from usuario where id_usuario=" . $_COOKIE["id_usuario_dw"] . " and cookie='" . $_COOKIE["marca_aleatoria_usuario_dw"] . "' and cookie<>''";
      $rs = mysql_query($ssql);
      if (mysql_num_rows($rs)==1){
         echo "<b>Tengo un usuario correcto en una cookie</b>";
         $usuario_encontrado = mysql_fetch_object($rs);
         echo "<br>Eres el usuario número " . $usuario_encontrado->id_usuario . ", de nombre " . $usuario_encontrado->usuario;
         //header ("Location: contenidos_protegidos_cookie.php");
      }
   }
}

if ($_POST){
   //es que estamos recibiendo datos por el formulario de autenticación (recibo de $_POST)

   //debería comprobar si el usuario es correcto
   $ssql = "select * from usuario where usuario = '" . $_POST["usuario"] . "' and clave='" . $_POST["clave"] . "'";
   //echo $ssql;
   $rs = mysql_query($ssql);
   if (mysql_num_rows($rs)==1){
      //TODO CORRECTO!! He detectado un usuario
      $usuario_encontrado = mysql_fetch_object($rs);
      //ahora debo de ver si el usuario quería memorizar su cuenta en este ordenador
      if ($_POST["guardar_clave"]=="1"){
         //es que pidió memorizar el usuario
         //1) creo una marca aleatoria en el registro de este usuario
         //alimentamos el generador de aleatorios
         mt_srand (time());
         //generamos un número aleatorio
         $numero_aleatorio = mt_rand(1000000,999999999);
         //2) meto la marca aleatoria en la tabla de usuario
         $ssql = "update usuario set cookie='$numero_aleatorio' where id_usuario=" . $usuario_encontrado->id_usuario;
         mysql_query($ssql);
         //3) ahora meto una cookie en el ordenador del usuario con el identificador del usuario y la cookie aleatoria
         setcookie("id_usuario_dw", $usuario_encontrado->id_usuario , time()+(60*60*24*365));
         setcookie("marca_aleatoria_usuario_dw", $numero_aleatorio, time()+(60*60*24*365));
      }
      echo "Autenticado correctamente";
      //header ("Location: contenidos_protegidos_cookie.php");
      
   }else{
      echo "Fallo de autenticación!";
      echo "<p><a href='index.php'>Volver</a>";
   }
   
}else{
?>
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Sebas C.ode || Login</title>
    <link rel="stylesheet" type="text/css" href="../includes/css/reset.css">
    <link rel="stylesheet" type="text/css" href="includes/css/style.css">
  </head>
  
  <body>
  	<div id="bg">
      <div id="login-bg">
   	  <form action="" method="post" class="login"> 
            <div class="inpt"><img src="includes/images/login-left1.png" width="33" height="33">
        <input value="usuario" name="user" type="text" ></div> 
            <div class="inpt"><img src="includes/images/login-left2.png" width="33" height="33"><input value="contraseña" name="password" type="password"></div> 
            <div id="recordar"><input name="guardar_clave" type="checkbox" value="1"> Recordar</div>
            <div id="subm"><input name="login" type="submit" value=" "></div> 
      </form>
    </div>
   </div>
  </body>
</html>
<?
}
?>