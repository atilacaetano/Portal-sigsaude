(function ($) {

  "use strict";
    $(document).ready(function () {
    

/*START MENU JS*/
		$(window).on('scroll', function() {
			if ($(".navbar").offset().top > 50) {
				$(".fixed-top").addClass("top-nav-collapse");
			} else {
				$(".fixed-top").removeClass("top-nav-collapse");
			}
		});
		
		     jQuery('a.page-scroll').on('click', function(event) {
        var $anchor = $(this);
          $('html, body').stop().animate({
              scrollTop: $($anchor.attr('href')).offset().top-50
            }, 1500, 'easeInOutExpo');
        event.preventDefault();
    }); 


    //---------------------------------------------------------------- 

    // Highlight top nav as scrolling occurs

        jQuery('body').scrollspy({
           target: '.fixed-top'
    })

		/* Closes the Responsive Menu on Menu Item Click*/
		$('.navbar-collapse ul li a').on('click', function() {
			$('.navbar-toggle:visible').click();
		});
		/*END MENU JS*/ 

   /*
 * ----------------------------------------------------------------------------------------
         *  COUNTER UP JS
         * ----------------------------------------------------------------------------------------
         */

        $('.counter-num').counterUp();

    });
})(jQuery);
