$(function(){
	var b = [ ];
	b[1] = 1;
	b[2] = b[1]+4;
	b[3] = b[2]+7;
	b[4] = b[3]+7;
	b[5] = b[4]+7;
	b[6] = b[5]+6;
	b[7] = b[6]+5;
	b[8] = b[7]+6; // limit
	b[9] = b[8]+6; // last
	b[10] = b[9]+5;
	b[11] = b[10]+4;
	
	road = true;
	j = 300; // <-- timer
	k = 2; // <-- contador de rows
	l = 1; // <-- contador de cols
	n = 1; 
	m = true;
    
    init();

	$('#load .img').stop(false,true,false).animate({opacity:1},j,function(){road = false;});
	function marco(){
		$('#load .img').stop(false,true,false).delay(1400).animate({opacity:0.1},j,function(){road = true;});
	}
	$('#logo a.none').click(function (e) {
		e.preventDefault();
	});
	
	$('#load .img a').click(function (e) {
		e.preventDefault();
	});
	
	$('#load .img').hover(function(){
		if(road == true){
			$(this).stop(false,true,false).animate({opacity:1},j);
		}
		$('#mensaje').stop(false,true,false).fadeIn('fast');
	},function(){
		if(road == true){
			$(this).stop(false,true,false).animate({opacity:0.1},j);
		}
		$('#mensaje').stop(false,true,false).fadeOut('slow');
	});
	
	$('#load .img').each(function(i, e) {
		if(i == 0){
			$(this).addClass('r2 c5 even_row');
			++l;
		}else{
			if(i == b[n]){
				$(this).addClass('col_ini');
				switch(k){
					case 2: l=4
						break;
					case 3: l=2
						break;
					case 4: l=3
						break;
					case 5: l=2
						break;
					case 6: l=3
						break;
					case 7: l=3
						break;
					case 8: l=4
						break;
					case 9: l=5 // last
						break;
					case 10: l=2
						break;
					case 11: l=2
						break;
					default: l=3
						break;
				}; // fin switch
				//alert(l);
				k=k+1;
				++n;
			} // fin if
			
			$(this).addClass('r'+k).addClass('c'+l);
			l++;
			
			if(k%2 == 0){
				$(this).addClass('even_row');
			}else{
			};
		}//fin If
    }).click(function(){
		$('#bg').fadeIn(200);
		var dir = $('img', this).attr('alt');
		dir = dir.replace('png', 'jpg');
		var i = 0;
		
		$('#biblio .alt').html('<img class="laod" src='+dir+' style="max-width:760px; max-height:560px;" />');
		$('#biblio').fadeIn(250);
		var wid = $('.laod').width();
		var hei = $('.laod').height();
		var left = wid+6;
		left = left/2;
		var top = hei+6;
		top = top/2;
		$('.laod').css({'width':wid+'px'})
		$('#biblio').css({'margin-left': -left+'px', 'margin-top': -top+'px', 'top': '50%', 'left': '50%'});
		
	});//fin each & img.selection
	$('#x , #bg').click(function(){
		$('#biblio').fadeOut(200);
		$('#bg').fadeOut(200);
	});
	
	var loop = true;
	$('#logo a#show').click(function(){
		if(m){
			$('#load .img').stop(false,true,false).animate({opacity:1},j);
			m=false;
			road=false;
			$(this).animate({'color':'#67f6ff'},j);
		}else{
			$('#load .img').stop(false,true,false).animate({opacity:0.1},j);
			m=true;
			road=true;
			$(this).animate({'color':'#ba9763'},j);
		}
		
		if(loop){
			$('#logo a').removeClass('active');
			$(this).addClass('active');
			loop = false;
		}else{
			$('#logo a').removeClass('active');
			loop = true;
		}
	})
	
	$('#logo a').hover(function(){
		$(this).css({'color':'#67f6ff'});	
	},function(){
		$(this).css({'color':'#ba9763'});
	}); // fin show
	
});// fin jQuery

function init(){
/*
 *<?php
  1                 $dir = "includes/images/soc/";
  2                 $dir2 = "includes/images/soc/Originales/";
  3                 // abrimos el directorio
  4                 $dr = opendir($dir);
  5                  // si hay algún error, interrumpimos
  6                 if (!$dr){
  7                     echo "Error";
  8                     exit();
  9                 }
 10                 //sino, seguimos la secuencia
 11                 else {
 12                  // leemos todo archivo del directorio hasta que no quede ninguno
 13                     while (($archivo = readdir($dr)) !== false) {
 14                  // menos los que sean sub-directorios
 15                         if(filetype($dir . $archivo)!="dir"){
 16                             //si no tienen estas extensiones, mostramos
 17                             if(($archivo != "Thumbs.db") && ($archivo != ".htaccess")){
 18                                 // en el primer archivo
 19                                 if ($i == 0)
 20                                 // le asignamos la clase CSS "active", clase de la hoja de estilos
 21                                     $active = " class=\"img\"";
 22                                 else
 23                                  // al resto, nada
 24                                     $active = " class=\"img\"";
 25                                 // obtenemos el tama&ntilde;o de cada imagen
 26                                 $tam = round(filesize($dir . $archivo)/1024, 0);
 27                                 //llenamos la lista, mostramos las im&aacute;genes, y su peso
 28                                 echo "<div".$active.">
 29                                 <div class=\"image\">
 30                                 <a href=\"".$dir2.$archivo."\"><img src=\"".$dir.$archivo."\" alt=\"".$dir2.$archivo    ."\" ><!-- tamaño: $tam kb --></a></div></div>";
 31                                 ++$i; // contador inicial  para agregar title=\"Archivo: ".$archivo."
 32                             }
 33                         }
 34                     }
 35                      // cerramos el directorio le&iacute;do
 36                     closedir($dr);
 37                 }
 38              ?>
 * */

    $.getJSON( "/images.json", function( data ) {
        console.log(data);
        container.append($("<img />", { "src": data }));
    });

    $.each(arrImg, function(i, img){
        const dir = "includes/images/soc/";
        const container = $('#images_soc', document);
    
        var img = new Image();
        img.src = dir+img+'.png';
            
        img.onerror = function() {
            img.src = dir+img+'.jpg';
            img.onerror = function(){
                alert("error, no se encuentra ni como jpg ni como png.");
            };
        };
        img.onload = function() {
            container.append(img);
        }
    });
}
