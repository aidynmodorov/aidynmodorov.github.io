$(document).ready(function() {

	$("#phone").mask("+7 (999) 999-9999");
	$("#phone1").mask("+7 (999) 999-9999");
	$("#phone2").mask("+7 (999) 999-9999");
	$("#phone3").mask("+7 (999) 999-9999");
	$("#phone4").mask("+7 (999) 999-9999");

	$(window).scroll(function() {
		if ($(this).scrollTop() > $(this). height()) {
			$('.main-sticky_nav').fadeIn();
		} else {
			$('.main-sticky_nav').fadeOut();
		}
	});

	setInterval(function(){$('.button').toggleClass('active');}, 2000);

	var menuBtn = $('.hamburger');
	var menu = $('.main-mobnav');
	menuBtn.on('click', function(event) {
  	event.preventDefault();
  	menu.toggleClass('main-mobnav__active');
  	menuBtn.toggleClass('hamburger is-active');
  });

  $('.mobmenu a').click(function() {
  	menuBtn.toggleClass('hamburger is-active');
  	menu.toggleClass('main-mobnav__active');
  })

  $('.packages-item p').equalHeights();

  $("#services").viewportChecker({
		callbackFunction:function(){
		$('.services-item').each(function(i) {
	  	$(this).delay((i++) * 700).fadeTo(1000, 1);
	  });
		}
	});

	$("#steps").viewportChecker({
		callbackFunction:function(){
		$('.steps-item').each(function(i) {
	  	$(this).delay((i++) * 700).fadeTo(1000, 1);
	  });
		}
	});

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
		        adaptiveHeight: true
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

	$(document).mouseup(function (e){
		var div = $('.popup-content');
		if (!div.is(e.target)
			&& div.has(e.target).length === 0) {
			$('.popup').fadeOut();
	}
	});

	$('.popup-close').on('click', function(event) {
	 	event.preventDefault();
	 	$('.popup').fadeOut();
	});

	$('.policy-popup').on('click', function(event) {
		event.preventDefault();
	 	$('.policy').fadeIn();
	});

	$('.policy-close').on('click', function(event) {
	 	event.preventDefault();
	 	$('.policy').fadeOut();
	});

	$(document).mouseup(function (e){
		var div = $('.policy-content');
		if (!div.is(e.target)
			&& div.has(e.target).length === 0) {
			$('.policy').fadeOut();
	}
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
				$('.popup-content').find('.popup-success').removeClass('active').fadeOut();
				$('.popup').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

});
