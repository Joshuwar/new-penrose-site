
$(document).ready(function() {
	$('.gramble-item .excerpt').matchHeight();
	$('.sticky-header').stickThis();

	// using: https://github.com/callmenick/Animating-Hamburger-Icons/blob/master/js/demo/demo.js
	$(".cmn-toggle-switch").click(function(e) {
		e.preventDefault();
		(this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
	});

	// derived from http://codyhouse.co/gem/full-screen-pushing-navigation/

	var isLateralNavAnimating = false;
	
	//open/close lateral navigation

	// this needs changing so you can click the child links inside .nav-menu, whilst retaining the ability to close the overlay by clicking the background
	$('.cmn-toggle-switch, .nav-menu').on('click', function(event){
		event.preventDefault();
		//stop if nav animation is running 
		if( !isLateralNavAnimating ) {
			if($(this).parents('.csstransitions').length > 0 ) isLateralNavAnimating = true; 
			
			$('body').toggleClass('nav-menu-open');
			$('.nav-menu-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				//animation is over
				isLateralNavAnimating = false;
			});
		}
	});

	// fade hero image on scroll
	$(window).scroll(function(){
		var opacityFloor = 0.2;
		var scrollPos = (-$(window).scrollTop());
		var setOpacity = (scrollPos/800) + 1;
		if(setOpacity <= 0.2) {
			setOpacity = opacityFloor
		}
		$('.cover-image-container').css({'opacity':setOpacity});
	});
});



