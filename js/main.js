(function($) {

	"use strict";

	$(window).stellar({
    	responsive: true,
    	parallaxBackgrounds: true,
    	parallaxElements: true,
    	horizontalScrolling: false,
    	hideDistantElements: false,
    	scrollProperty: 'scroll'
	  });
	  
	//WebP Support
	Modernizr.on('webp', function (result) {
		if (result) { 
			console.log("Has WebP Support");
			$('.hero-wrap').css('background-image', 'url("images/bg_0.webp")');
			$('#about-image').css('background-image', 'url("images/services_3.webp")');

			var array = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", 
				"m", "n", "o", "p" ];
			
			$.each( array, function( i, val ) {
				// console.log("val:" + val);
				$('#gallery-'+val+'1').css('background-image', 'url("images/'+val+'1.webp")');
				$('#gallery-'+val+'1 > a').attr('href','images/'+val+'1.webp');	
			});

			$('#map').css('background-image', 'url("images/map-bg.webp")');

		} else {
			console.log("No WebP Support");

			$('.hero-wrap').css('background-image', 'url("images/bg_0.jpg")');
			$('#about-image').css('background-image', 'url("images/services_3.jpg")');

			var array = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", 
				"m", "n", "o", "p" ];
			
			$.each( array, function( i, val ) {
				// console.log("val:" + val);
				$('#gallery-'+val+'1').css('background-image', 'url("images/'+val+'1.jpg")');
				$('#gallery-'+val+'1 > a').attr('href','images/'+val+'1.jpg');	
			});

			$('#map').css('background-image', 'url("images/map-bg.png")');
			
		}
	});

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

	// Scrollax
   	$.Scrollax();

	// magnific popup
	$('.image-popup').magnificPopup({
    	type: 'image',
   		closeOnContentClick: true,
    	closeBtnInside: false,
    	fixedContentPos: true,
    	mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     	gallery: {
      		enabled: true,
      		navigateByImgClick: true,
      		preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    	},
    	image: {
      		verticalFit: true
		},
		zoom: {
      		enabled: true,
      		duration: 300 // don't foget to change the duration also in CSS
    	}
  	});


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
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	$('a[href*=#]').bind('click', function(e) {
		// prevent hard jump, the default behavior
		e.preventDefault(); 

		var target = $(this).attr("href"); // set the target as variable
		// perform animated scrolling by getting top-position of target-element and set it as scroll target
		$('html, body').stop().animate({
			scrollTop: $(target).offset().top
		}, 600, function() {
			// attach the hash (#jumptarget) to the pageurl
			location.hash = target; 
		});
		return false;
	});

})(jQuery);

