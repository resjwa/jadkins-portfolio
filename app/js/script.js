$(document).ready(function(){
	$('html').removeClass('no-js');
	
	$('.contact').click(function(){
		$("#main-nav").toggleClass('is-active');
	});
});

$(window).load(function(){
    $('#loader').fadeOut(618);
})


// $trigger.click(function(e) {
//     e.preventDefault();

//     var $this = $(this);
//     var state = $this.attr('aria-selected') === 'true' ? false : true;
    
//     $this.next($target).toggleClass('is-active');
//     $this.attr('aria-selected', state);
//     $target.attr('aria-hidden', !state);
// });
