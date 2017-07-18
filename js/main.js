$(document).ready(function() { 

	new WOW().init();

	$("a.transicion").transicion();

	$(".button-collapse").sideNav();
	$('.slider').slider({
		interval: 4500
	});

	$('.collapsible').collapsible();
	$('.carousel_companies').owlCarousel({
  		autoplay:true,
	    autoplayTimeout:3000,
  		autoplaySpeed:1500,
	    rewind:true,
	    margin:10,
	    dots:false,
	    responsive:{
	        0:{
	            items:2
	        },
	        450:{
	        	items:3
	        },
	        600:{
	            items:4
	        }
	    }
	});

	$('.button-collapse').sideNav({
      	closeOnClick: true
    });

	$(window).scroll(function(){
		var cambio=($(window).scrollTop()>0)?true:false;
		if (cambio){
			$("header").addClass('cont_header');	
			$(".btn_top").css({
				'display':'block'
			});
		}else{
			$("header").removeClass('cont_header');
			$(".btn_top").css({
				'display':'none'
			});

		};
	});


	/*funcion del menu:hover boton arriba*/
	$(".btn_top").on("click",function(){
		$("body,html").animate({
			scrollTop:0
		},1000)
	});


});