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

	// year
	var date = new Date().getFullYear();
	document.getElementById("year").innerHTML = date;


})(jQuery);

