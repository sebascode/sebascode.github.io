const b = [ ];
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
 
$(function(){
   
    init();
	$(document).find('#load .img').stop(false,true,false).animate({opacity:1},j,function(){road = false;});
	function marco(){
		$(document).find('#load .img').stop(false,true,false).delay(1400).animate({opacity:0.1},j,function(){road = true;});
	}
	$('#logo a.none').click(function (e) {
		e.preventDefault();
	});
	
	$(document).on('click','#load .img a',function (e) {
		e.preventDefault();
	});
	
	
    $(document).on('mouseenter', '#load .img', function(){
	    if(road == true){
		    $(this).stop(false,true,false).animate({opacity:1},j);
    	}
	   	$('#mensaje').stop(false,true,false).fadeIn('fast');
	});
    $(document).on('mouseleave', '#load .img', function(){
		if(road == true){
		    $(this).stop(false,true,false).animate({opacity:0.1},j);
    	}
	    $('#mensaje').stop(false,true,false).fadeOut('slow');
	});
	
    $(document).on('click','#load .img',function(){
		$('#bg').fadeIn(200);
        const $imgDem = $('img', this);
		const dir = $imgDem.prop('src').replace('png', 'jpg').replace('soc', 'soc/originales');
        const $img = $("<img />", { "class": "laod", "src": dir, "style": "max-width:760px; max-height:560px;" });
		$('#biblio .alt').html($img);
		$('#biblio').fadeIn(250);
		const wid = $('.laod', document).width();
		const hei = $('.laod', document).height();
		const left = (wid+6)/2;
		const top = (hei+6)/2;
        console.log({wid,hei,left,top})
        console.log("width:", $img.width(), "height:", $img.height());
        //$img.css({'width':wid+'px'})
		$('#biblio').css({'margin-left': -left+'px', 'margin-top': -top+'px', 'top': '50%', 'left': '50%'});
		
	});

	$('#x , #bg').click(function(){
		$('#biblio').fadeOut(200);
		$('#bg').fadeOut(200);
	});
	
	var loop = true;
	$('#logo a#show').click(function(){
		if(m){
			$('#load .img', document).stop(false,true,false).animate({opacity:1},j);
			m=false;
			road=false;
			$(this).animate({'color':'#67f6ff'},j);
		}else{
			$('#load .img', document).stop(false,true,false).animate({opacity:0.1},j);
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
	});
	
});// fin jQuery
function init(){
    const $cont = $('#load', document);
    $.getJSON( "/images.json", function( data ) {
        $.each(data, (i, e) => {
            const $divImg = $('<div />', { "class": "img" });
            const $divCont = $('<div />', { "class": "image" });
            const $a = $('<a />', { "href": "/includes/images/soc/"+e });
            
            $a.append($("<img />", { "src": "/includes/images/soc/"+e  }));
            $a.append($("<img />", { "src": "/includes/images/soc/originales/"+(e.replace(".png", ".jpg")), "style": "display:none;" }));
            $divCont.append($a);
            $divImg.append($divCont);
            $cont.append($divImg);
            getClassData(i, $divImg);
        });
    })
    $cont.append('<div class="clear"></div>');
}
function getClassData(i, element) {
		if(i == 0){
		    element.addClass('r2 c5 even_row');
			++l;
	    }else{
		    if(i == b[n]){
			    $(this).addClass('col_ini');
			    switch(k){
			        case 2: l=4;
				        break;
                    case 3: l=2;
	    	        	break;
    	    	    case 4: l=3;
	    	    		break;
    			    case 5: l=2;
    				    break;
    			    case 6: l=3;
        				break;
		    		case 7: l=3;
	            		break;
    			    case 8: l=4
	    			    break;
        			case 9: l=5;
	        			break;
    	    		case 10: l=2;
	    	    		break;
    			    case 11: l=2;
	    			    break;
    		    	default: l=3;
	    		    	break;
			    };
    			k=k+1;
	    		++n;
		    }
    		element.addClass('r'+k).addClass('c'+l);
	    	l++;	
		    if(k%2 == 0){
			    element.addClass('even_row');
		    };
	    }
}
