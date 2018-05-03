$(document).ready(function() {

	$(window).scroll(function() {
		if ($(this).scrollTop() > $(this). height()) {
			$('.main-sticky_nav').fadeIn();
		} else {
			$('.main-sticky_nav').fadeOut();
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
	 	$('#callback').fadeIn();
	});

	$('.control-order-btn').on('click', function(event) {
		event.preventDefault();
	 	$('#control-order').fadeIn();
	});

	$('.standart-btn').on('click', function(event) {
		event.preventDefault();
	 	$('#standart-order').fadeIn();
	});

	$('.prestige-btn').on('click', function(event) {
		event.preventDefault();
	 	$('#prestige-order').fadeIn();
	});

	$('.premium-btn').on('click', function(event) {
		event.preventDefault();
	 	$('#premium-order').fadeIn();
	});

	$('.popup-close').on('click', function(event) {
	 	event.preventDefault();
	 	$('.popup').fadeOut();
	});

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
				$('.popup-content').find('.popup-success').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				$('.popup-content').find('.success-popup').removeClass('active').fadeOut();
				$('.popup').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

});
