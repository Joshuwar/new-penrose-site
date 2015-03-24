
$(document).ready(function() {
	$('.gramble-item .excerpt').matchHeight();
	$('.sticky-header').stickThis();

	// using: https://github.com/callmenick/Animating-Hamburger-Icons/blob/master/js/demo/demo.js
	$(".cmn-toggle-switch").click(function(e) {
		e.preventDefault();
		(this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
	});
});



