$(document).ready(function(){
	$('html').removeClass('no-js');
	
	$('.contact').click(function(){
		$("#main-nav").toggleClass('is-active');
	});
});

$(window).load(function(){
    $('#loader').fadeOut(618);
})



