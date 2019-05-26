$(document).ready(function(){
	$('.navbar-collapse ul li:nth-child(1) a').click(function(event){
		event.preventDefault();
		$('body,html').animate({scrollTop: $(".about").offset().top}, 1000,"easeOutCubic");
	});
	$('.navbar-collapse ul li:nth-child(2) a').click(function(event){
		event.preventDefault();
		$('body,html').animate({scrollTop: $(".experience").offset().top}, 1000,"easeOutElastic");
	});
	$('.navbar-collapse ul li:nth-child(3) a').click(function(event){
		event.preventDefault();
		$('body,html').animate({scrollTop: $(".work").offset().top}, 1000,"easeOutExpo");
	});
	$('.navbar-collapse ul li:nth-child(4) a').click(function(event){
		event.preventDefault();
		$('body,html').animate({scrollTop: $(".contact").offset().top}, 1000,"easeOutBounce");
	});

	$('i.fas.fa-chevron-circle-up').click(function(event){
		event.preventDefault();
		$('body,html').animate({scrollTop: 0}, 1000,"easeOutBounce");
	});
	TweenMax.staggerFrom($('li.nav-item a'),1,{y:-100,opacity:0,ease: Bounce.easeOut},0.5);


    //if( $('.body,html').scrollTop() ===  $(".about").offset().top){
    TweenMax.from($('.about p'),4,{y:-150,opacity:0,ease: Bounce.easeOut});
	TweenMax.from($('.about h1'),5,{x:-150,opacity:0,ease: Bounce.easeOutElastic});
	TweenMax.from($('.about h5'),6,{y:150,opacity:0,ease: Bounce.easeOutExpo});
	
	console.log($(".contact").offset().top);

	$( window ).scroll(function() {
		var x =$('.body,html').scrollTop() ;
		
		 if( x>400) {
		 	console.log("ahihi");

		  	
   }
});

})