(function($) {

	"use strict";

	var fullHeight = function() {
		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});
	};
	fullHeight();


	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// lightGallery
	lightGallery($('#lightgallery')[0], {
		selector: '.photo .gallery .icon',
		download: false
		//other options
	});

	// animate
	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {
			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {			
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){
					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							el.addClass('fadeInUp ftco-animated');

							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
				}, 100);	
			}
		} , { offset: '95%' } );
	};
	contentWayPoint();

	// year
	var date = new Date().getFullYear();
	document.getElementById("year").innerHTML = date;


})(jQuery);

