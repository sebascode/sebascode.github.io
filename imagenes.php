<div id="img">
<?php
// cadena que indica el directorio de las im&aacute;genes
$dir = "includes/images/dem/"; 
// abrimos el directorio
$dr = opendir($dir); 
 // si hay algún error, interrumpimos
if (!$dr){
    echo "Error"; 
    exit();
}
//sino, seguimos la secuencia
else { 
 // leemos todo archivo del directorio hasta que no quede ninguno
    while (($archivo = readdir($dr)) !== false) {
 // menos los que sean sub-directorios
        if(filetype($dir . $archivo)!="dir"){
            //si no tienen estas extensiones, mostramos
            if(($archivo != "Thumbs.db") && ($archivo != ".htaccess")){ 
                // en el primer archivo
                if ($i == 0)
                // le asignamos la clase CSS "active", clase de la hoja de estilos
                    $active = " class=\"active\""; 
                else
                 // al resto, nada
                    $active = "";
                // obtenemos el tama&ntilde;o de cada imagen
                $tam = round(filesize($dir . $archivo)/1024, 0); 
                //llenamos la lista, mostramos las im&aacute;genes, y su peso
                echo "<div".$active."><img src=\"".$dir.$archivo."\" alt=\"Archivo: ".$archivo."\" title=\"Archivo: ".$archivo." Tama&ntilde;o: ".$tam." Kb\"></div>"; 
                ++$i;
            }
        }
    }
     // cerramos el directorio le&iacute;do
    closedir($dr);
}
?>
</div>