// JavaScript Document
jQuery(function(){
	jQuery = jQuery.noConflict();
	var w = jQuery(window).width();
	var h2 = jQuery(window).height();
	if(h2 < 800 ){
		h2 = 800;
		jQuery('#contacto').css({height: '400px'})
	}
	jQuery('.b').css({height: h2+'px'})
	jQuery('#contacto').css({height: '700px'})
	if(h2 < 800 ){
		jQuery('#contacto').css({height: '480px'})
	}
	var h = jQuery(document).height();
	var n = true;
	
	jQuery('#bg').css({width:w+"px", height: h-30+"px"});
	
	jQuery(window).resize(function(e) {
		w = jQuery(window).width();
		h2 = jQuery(window).height();
		if(h2 < 800 ){
			h2 = 800;
		}
		jQuery('.b').css({height: h2+'px'})
		jQuery('#contacto').css({height: '700px'})
		if(h2 < 800 ){
			jQuery('#contacto').css({height: '480px'})
		}
		h = jQuery(document).height();
		//alert(h);
		
		jQuery('#bg').css({width:w+"px", height: h-30+"px"});
		jQuery('.b').css({height: h2+"px"});
    });
	
	var me = true;
	jQuery('a.check').click(function name(e){
		e.preventDefault();
		//alert(me);
		jQuery('a.check').css({'background-position': '0px 0px','color':'#525252'});
		jQuery(this).css({'background-position': '0px -23px','color':'#ea3839'});
		jQuery('ul#submenu').slideUp(400);
	})
	jQuery('a.sm').click(function name(e){
		e.preventDefault();
		//alert(me);
		jQuery('a.sm').css({'background-position': '0px 0px','color':'#525252'});
		jQuery(this).css({'color':'#ea3839'});
	})
	jQuery('a.check').css({'background-position': '0px 0px','color':'#525252'});
	jQuery('a.check:first').css({'background-position': '0px -23px','color':'#ea3839'});
	
	var c = new Array(10);
	
	jQuery('menu a').click(function(){
		var r = jQuery(this).attr('alt');
		var t = height(r);
		//alert(r);
		n = false;
		jQuery('body').scrollTo( t+'px', 600, function(){n = true;});
	});
	
	function moveMenu(n) {
			var p = jQuery('#'+n);
			var position = p.position();
			var b = position.top+50
			jQuery('menu').animate({top: b+'px' },300);
	};
	function height(id){
			var p = jQuery('#'+id);
			var position = p.position();
			var b = position.top
			b-100;
			
			if(b < 0){
				b = 0;
			}
			return(b);
	}
	
	jQuery(window).on('scroll',function(){
		vHeight(jQuery(window).scrollTop());
	});
	var position = new Array();
	jQuery('.b').each(function(i) {
        position[i] = jQuery(this).position().top-200;
    });
	
	jQuery('a.last').click(function(){
		jQuery('ul#submenu').slideDown(400);
	});
	//alert(position[8]);
	function vHeight(p){
		if(n == true){
		//alert(h);
			if(p > position[0] && p < position[1]){
				jQuery('a.check').css({'background-position': '0px 0px','color':'#525252'});
				jQuery('a.check:nth(0)').css({'background-position': '0px -23px','color':'#ea3839'});
				jQuery('a.sm').css({'background-position': '0px 0px','color':'#525252'});
				jQuery('#submenu').slideUp(400);
			}else if(p >  position[1] && p < position[2]){
				jQuery('a.check').css({'background-position': '0px 0px','color':'#525252'});
				jQuery('a.check:nth(1)').css({'background-position': '0px -23px','color':'#ea3839'});
				jQuery('a.sm').css({'background-position': '0px 0px','color':'#525252'});
				jQuery('#submenu').slideUp(400);
			}else if(p >  position[2] && p < position[3]){
				jQuery('a.check').css({'background-position': '0px 0px','color':'#525252'});
				jQuery('a.check:nth(2)').css({'background-position': '0px -23px','color':'#ea3839'});
				jQuery('a.sm').css({'background-position': '0px 0px','color':'#525252'});
				jQuery('#submenu').slideUp(400);
			}else if(p >  position[3] && p < position[4]){
				jQuery('a.check').css({'background-position': '0px 0px','color':'#525252'});
				jQuery('a.check:nth(3)').css({'background-position': '0px -23px','color':'#ea3839'});
				jQuery('a.sm').css({'background-position': '0px 0px','color':'#525252'});
				jQuery('#submenu').slideUp(400);
			}else if(p >  position[4] && p < position[5]){
				jQuery('a.check').css({'background-position': '0px 0px','color':'#525252'});
				jQuery('a.check:nth(4)').css({'background-position': '0px -23px','color':'#ea3839'});
				jQuery('a.sm').css({'background-position': '0px 0px','color':'#525252'});
				jQuery('#submenu').slideUp(400);
			}else if(p >  position[5] && p <  position[8]){ // dptos
				jQuery('a.check').css({'background-position': '0px 0px','color':'#525252'});
				jQuery('a.check:nth(5)').css({'background-position': '0px -23px','color':'#ea3839'});
				jQuery('#submenu').slideDown(400);
				
				if(p >  position[5] && p <  position[6]){ //submenu
					jQuery('a.sm').css({'background-position': '0px 0px','color':'#525252'});
					jQuery('a.sm:nth(0)').css({'background-position': '0px -23px','color':'#ea3839'});
					jQuery('#submenu').slideDown(400);
				}else if(p >  position[6] && p <  position[7]){ //submenu
					jQuery('a.sm').css({'background-position': '0px 0px','color':'#525252'});
					jQuery('a.sm:nth(1)').css({'background-position': '0px -23px','color':'#ea3839'});
					jQuery('#submenu').slideDown(400);
				}else if(p >=  position[7] && p <  position[8]){ //submenu
					jQuery('a.sm').css({'background-position': '0px 0px','color':'#525252'});
					jQuery('a.sm:nth(2)').css({'background-position': '0px -23px','color':'#ea3839'});
					jQuery('#submenu').slideDown(400);
				}
			}else if(p > position[8]){
				jQuery('a.check').css({'background-position': '0px 0px','color':'#525252'});
				jQuery('a.check:nth(6)').css({'background-position': '0px -23px','color':'#ea3839'});
				jQuery('a.sm').css({'background-position': '0px 0px','color':'#525252'});
				jQuery('#submenu').slideUp(400);
			}
		}
	}
});