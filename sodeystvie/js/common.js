$(document).ready(function() {

	$('.main-advantages-item').equalHeights();

	$('.services-item').equalHeights();

	$('.rates-list').equalHeights();

	$("#phone").mask("+7 (999) 999-9999");
  $("#phone1").mask("+7 (999) 999-9999");
  $("#phone2").mask("+7 (999) 999-9999");
  $("#phone3").mask("+7 (999) 999-9999");
  $("#phone4").mask("+7 (999) 999-9999");
  $("#phone5").mask("+7 (999) 999-9999");
  $("#phone6").mask("+7 (999) 999-9999");
  $("#phone7").mask("+7 (999) 999-9999");

  $('.nav').click(function() {
  	$('.menu-two').slideToggle();
  	$('.nav').toggleClass('nav__active')
  });

  $('.menu-two a').click(function(){
  	$('.menu-two').slideToggle();
  });

  $(window).scroll(function() {
  	if($(this).scrollTop() > 125) {
  		$('.main-small').addClass('sticky');
  	} else {
  		$('.main-small').removeClass('sticky');
  	}
  });

	var scroll = new SmoothScroll('a[href*="#"]', {
		speed: 800
	});

	$(window).resize(function() {
			if($(window).width() > 992) {
				$('.nav ul').removeAttr('style');
			}
	});

	$(window).scroll(function() {
  	if($(this).scrollTop() > 125) {
  		$('.main-nav').addClass('sticky');
  	} else {
  		$('.main-nav').removeClass('sticky');
  	}
  });

  // $('.hover').bind('touchstart touchend', function(e) {
  //       e.preventDefault();
  //       $(this).toggleClass('hover_effect');
  // });

	$('.price-slider').slick({
		slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slider-btn slider-btn-prev"><img src="../img/icons/left-arrow.svg" alt="Вперед" /></button>',
        nextArrow: '<button type="button" class="slider-btn slider-btn-next"><img src="../img/icons/right-arrow.svg" alt="Назад" /></button>',
        responsive: [
        {
        	breakpoint: 768,
        	settings: {
        		dots: true,
        		arrows: false
        	}
        }
        ]
	});

	$('.reviews-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		adaptiveHeight: true,
		prevArrow: '<button type="button" class="slider-btn slider-btn-prev"><img src="../img/icons/left-arrow.svg" alt="Вперед" /></button>',
		nextArrow: '<button type="button" class="slider-btn slider-btn-next"><img src="../img/icons/right-arrow.svg" alt="Назад" /></button>',
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				dots: true,
				arrows: false
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				dots: true,
				arrows: false
			}
		}
		]
	});

$('.popup-review').magnificPopup({
  type: 'image',
  mainClass: 'mfp-fade',
  fixedContentPos: true
});

$('.callback-popup').magnificPopup({
  type:'inline',
  mainClass: 'mfp-fade',
  fixedContentPos: true
});

$('.order-min').magnificPopup({
  type:'inline',
  mainClass: 'mfp-fade',
  fixedContentPos: true
});

$('.order-standart').magnificPopup({
  type:'inline',
  mainClass: 'mfp-fade',
  fixedContentPos: true
});

$('.order-max').magnificPopup({
  type:'inline',
  mainClass: 'mfp-fade',
  fixedContentPos: true
});

$('.popup-policy').magnificPopup({
  type:'inline',
  mainClass: 'mfp-fade',
  fixedContentPos: true
});

//E-mail Ajax Send
  $(".form-main").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
        $('.main-content-form form').find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
      setTimeout(function() {
        $('.main-content-form form').find('.success').removeClass('active').fadeOut();
        th.trigger("reset");
      }, 3000);
    });
    return false;
  });

  $(".callback-form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
        $('.callback').find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
      setTimeout(function() {
        $('.callback').find('.success').removeClass('active').fadeOut();
        $.magnificPopup.close();
        th.trigger("reset");
      }, 3000);
    });
    return false;
  });

});
