$(document).ready(function(){
	$('html').removeClass('no-js');
	

});

$(window).load(function(){
    $('#loader').fadeOut(618);
})


$('.contact').click(function(e){
	e.preventDefault();
	var $this = $(this);
	var $state = $this.attr('aria-selected') === 'true' ? false : true;
	$("#main-nav").toggleClass('is-active');
	$this.attr('aria-selected', $state);
	$('#main-nav').attr('aria-hidden', !$state);
});