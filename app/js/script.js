$(document).ready(function(){
	$('html').removeClass('no-js');
	$('.contact').click(function(e){
		e.preventDefault();
		var $this = $(this);
		var $state = $this.attr('aria-selected') === 'true' ? false : true;
		$("#main-nav").toggleClass('is-active');
		$this.attr('aria-selected', $state);
		$('#main-nav').attr('aria-hidden', !$state);
	});
});

$(window).load(function(){
    $('#loader').fadeOut(618);
})
