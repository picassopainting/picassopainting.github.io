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

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});

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

	// year
	var date = new Date().getFullYear();
	document.getElementById("year").innerHTML = date;


})(jQuery);

