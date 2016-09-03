$(document).ready(function(){
	$('html').removeClass('no-js');
	toggleElement('#nav-toggle', "#main-nav");
});

$(window).load(function(){
    $('#loader').fadeOut(618);
});


// Show/hide for single triggle/target pairs and add appropriate ARIA markup
	var toggleElement = function (trigger, target) {
			var $trigger = $(trigger);
			var $target = $(target);

			$trigger.click(function(e){
				//e.preventDefault();
				var $this = $(this);
				var $state = $this.attr('aria-selected') === 'true' ? false : true;
				$target.toggleClass('is-active');
				$this.attr('aria-selected', $state);
				$target.attr('aria-hidden', !$state);
			});
	}
