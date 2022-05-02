<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Sebas C.ode</title>
<link rel="icon" href="www.sebascode.cl/favicon.ico" />
<link rel="shortcut icon" href="http://www.sebascode.cl/favicon.ico" />
<link rel="apple-touch-icon image_src" href="http://www.sebascode.cl/includes/images/logo-2.png">
<link href="includes/css/reset.css" rel="stylesheet" type="text/css">
<link href="includes/css/css_original.css" rel="stylesheet" type="text/css">
<link href="includes/css/queryLoader.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="includes/library/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="includes/js/jquery.queryloader2.js"></script>
<script type="text/javascript" src="includes/library/main.js"></script>

<!-- META TAGS -->
<meta property="og:title" content="Sebas C.ode - Web Design" />
<meta property="og:url" content="http://www.sebascode.cl"/>
<meta property="og:site_name" content="Sebas C.ode Produccion y desarrollo web"/>
<meta property="og:image" content="http://www.sebascode.cl/includes/images/logo-2.png" />
<meta property="og:type" content="website"/>
<meta property="og:description" content="Actualizaciones tecnológicas, desarrollo y producción de sitios webs, intranets y modificaciones en producción a medida, para empresas y particulares, diseño web, SEO & SMO"/>
<meta name="content-type" content="Desarrollo Web" />
<meta name="keywords" content="Actualizaciones tecnológicas, desarrollo web, web, diseño, produccion, jquery, SMO, SEO" />
<meta name="Description" content="Desarrollo y producción de sitios webs, intranets y modificaciones en producción a medida, para empresas y particulares, diseño web, SEO & SMO" />
<meta name="robots" content="nofollow" />

</head>

<body>
<div id="content">
<div style="display:none">

<?php
                $dir = "includes/images/soc/Originales/";
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
                                    $active = " class=\"img\""; 
                                else
                                 // al resto, nada
                                    $active = " class=\"img\"";
                                // obtenemos el tama&ntilde;o de cada imagen
                                $tam = round(filesize($dir . $archivo)/1024, 0); 
                                //llenamos la lista, mostramos las im&aacute;genes, y su peso
                                echo "<div".$active.">
								<div class=\"image\">
								<a href=\"".$dir2.$archivo."\"><img src=\"".$dir.$archivo."\" alt=\"".$dir2.$archivo."\" ><!-- tamaño: $tam kb --></a></div></div>"; 
                                ++$i; // contador inicial  para agregar title=\"Archivo: ".$archivo."
                            }
                        }
                    }
                     // cerramos el directorio le&iacute;do
                    closedir($dr);
                }
             ?>

</div>
  <div id="page">
  	<div id="logo">
    	<ul>
        	<li><a class="none" href="#" id="show">Iluminar</a></li>
        	<li><a class="none" href="#">Contacto</a></li>
        	<li><a href="timeline/">Timeline</a></li>
        </ul>
    </div>
    <div id="data_wrapper">
        <div id="load">
            <?php
                $dir = "includes/images/soc/";
				$dir2 = "includes/images/soc/Originales/";
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
                                    $active = " class=\"img\""; 
                                else
                                 // al resto, nada
                                    $active = " class=\"img\"";
                                // obtenemos el tama&ntilde;o de cada imagen
                                $tam = round(filesize($dir . $archivo)/1024, 0); 
                                //llenamos la lista, mostramos las im&aacute;genes, y su peso
                                echo "<div".$active.">
								<div class=\"image\">
								<a href=\"".$dir2.$archivo."\"><img src=\"".$dir.$archivo."\" alt=\"".$dir2.$archivo."\" ><!-- tamaño: $tam kb --></a></div></div>"; 
                                ++$i; // contador inicial  para agregar title=\"Archivo: ".$archivo."
                            }
                        }
                    }
                     // cerramos el directorio le&iacute;do
                    closedir($dr);
                }
             ?>
             <div class="clear"></div>
        </div>
    </div>
    
    <div id="footer">
    <div id="mensaje">¡Haz click para Agrandar!</div>
    <div class="clear"></div>
    	<dl style="float:left; margin:0px;">
        	<dd><img src="includes/images/logo-2.png" alt="Logo Sebas C.ode" width="200" style="position:relative; top:-30px;"></dd>
        </dl>
        <dl style="float:left; margin:0px 10px 0px 10px; padding: 0px 0px 0px 40px; background:url(includes/images/contacts.png) no-repeat; background-size: 30px;">
        	<dt><h3>Contacto:</h3></dt>
            <dd itemprop="email">e-Mail: <a href="mailto:contacto@sebascode.cl">contacto@sebascode.cl</a></dd>
            <dd itemprop="telephone">Celular: <a href="tel:+56956071375">+56 9 560 713 75</a></dd>
            <dd itemprop="Location">Macul, Santiago de Chile</dd>
        </dl>
        <dl style="float:left; margin:0px 10px 0px 0px; padding: 0px 0px 0px 40px; background:url(includes/images/profiles.png) no-repeat; background-size: 30px;">
        	<dt><h3>Presencia:</h3></dt>
            <dd itemprop="pinterest"><a href="http://www.pinterest.com/locodesigner" target="_blank">Pinterest/LocoDesigner</a></dd>
            <dd itemprop="twitter"><a href="http://www.twitter.com/sebascodes" target="_blank">Twitter @SebasCodes</a></dd>
            <dd itemprop="facebook"><a href="https://www.facebook.com/contreras.sebas" target="_blank">Facebook.com/Contreras.Sebas</a></dd>
        </dl>
        <dl style="float:left; width:215px; margin:0px 10px 0px 0px; padding: 0px 0px 0px 40px; background:url(includes/images/works.png) no-repeat; background-size: 30px;">
        	<dt>Sobre mi</dt>
            <dd>Hola! Soy <b itemprop="name">Sebastian Contreras</b> de <b itemprop="city">Santiago de Chile</b>, Diseñador Web desde hace 4 años y con cursos de perfeccionamiento sobre mi, entre ellos "jQuery Avanzado" y "Optimización para moteres de búsqueda". <a href="timeline/">Quiero saber más...</a></dd>
        </dl>
		<div class="clear"></div>
    </div>
  </div>
</div>
<!-- BIBLIO -->
<div id="biblio" style="display:none;">
	<a href="javascript:void(0);" id="x">X</a>
    <div class="alt"> </div>
</div>
<div id="bg" style="display:none;"> </div>
<!-- FIN #BIBLIO -->

</body>
</html>