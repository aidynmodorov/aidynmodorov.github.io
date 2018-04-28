$(document).ready(function() {

  $("#phone").mask("+7 (999) 999-9999");
  $("#phone1").mask("+7 (999) 999-9999");
  $("#phone2").mask("+7 (999) 999-9999");
  $("#phone3").mask("+7 (999) 999-9999");

	var menuBtn = $('.mobile-nav-btn');
	var menu = $('.main-nav');
	menuBtn.on('click', function(event) {
  	event.preventDefault();
  	menu.toggleClass('main-nav__active');
  });

	$('.events-slider').slick({
		speed: 1000,
		responsive: [
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        dots: true
      }
   	}
  	],
		prevArrow: '<button type="button" class="events-slider-btn events-prev-btn"><img src="img/icons/arrow-to-left.svg" alt=""/></button>',
		nextArrow: '<button type="button" class="events-slider-btn events-next-btn"><img src="img/icons/arrow-to-right.svg" alt=""/></button>'
	});

	$('.reviews-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		speed: 1000,
		prevArrow: '<button type="button" class="events-slider-btn events-prev-btn"><img src="img/icons/arrow-to-left.svg" alt=""/></button>',
		nextArrow: '<button type="button" class="events-slider-btn events-next-btn"><img src="img/icons/arrow-to-right.svg" alt=""/></button>',
		responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
      }
    }
  ]
	});

	$('.clients-slider').slick({
		speed: 1000,
		arrows: true,
		autoplay: true,
		responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    }
  ]
	});

	$('.reviews-slider-item').magnificPopup({
  	type : 'image'
  });

  $('.callback-btn').on('click', function(event) {
		event.preventDefault();
	 	$('.popup').fadeIn();
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
      $('.success').hide().fadeIn();
      setTimeout(function() {
        $('.success').fadeOut();
        th.trigger("reset");
        $('.popup').fadeOut();
      }, 3000);
    });
    return false;
  });

});

