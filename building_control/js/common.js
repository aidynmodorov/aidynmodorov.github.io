$(document).ready(function() {

	$(window).scroll(function() {
		if ($(this).scrollTop() > $(this). height()) {
			$('.main-sticky_nav').fadeIn(400);
		} else {
			$('.main-sticky_nav').fadeOut(400);
		}
	});

	var menuBtn = $('.hamburger');
	var menu = $('.main-mobnav');
	menuBtn.on('click', function(event) {
  	event.preventDefault();
  	menu.toggleClass('main-mobnav__active');
  	menuBtn.toggleClass('hamburger is-active');
  });

  $('.packages-item p').equalHeights();

  $('.reviews-slider').slick({
  	slidesToShow: 3,
  	slidesToScroll: 1,
  	prevArrow: '<button type="button" class="reviews-slider-btn reviews-prev-btn"><img src="img/icons/left-arrow.svg" alt=""/></button>',
		nextArrow: '<button type="button" class="reviews-slider-btn reviews-next-btn"><img src="img/icons/left-arrow.svg" alt=""/></button>',
		responsive: [
		    {
		      breakpoint: 992,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1,
		        infinite: true,
		    	}
		    },
		    {
		      breakpoint: 768,
		      settings: {
		      	slidesToShow: 1,
		        slidesToScroll: 1,
		      }
		    }
		  ]
  });

	$('.callback-btn').on('click', function(event) {
		event.preventDefault();
	 	$('.popup').fadeIn();
	});

	$('.popup-close').on('click', function(event) {
	 	event.preventDefault();
	 	$('.popup').fadeOut();
	});

	$('.success-content-close').on('click', function(event) {
	 	event.preventDefault();
	 	$('.success').fadeOut();
	});

});
