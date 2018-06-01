$(document).ready(function() {

  // $("#phone").mask("+7 (999) 999-9999");
  // $("#phone1").mask("+7 (999) 999-9999");

  $('.scroll').click(function(){
    $('html, body').animate({scrollTop:$('#home').position().top}, 1000);
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > $(this). height()) {
      $('.main-top').addClass('active');
    } else {
      $('.main-top').removeClass('active');
    }
  });

  $('.offers-item').equalHeights();

	$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	});

	$('ul.tabs__caption2').on('click', 'li:not(.active)', function() {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.tabs_two').find('div.tabs__content2').removeClass('active').eq($(this).index()).addClass('active');
	});

  $('.callback-button').on('click', function(event) {
    event.preventDefault();
    $('#callback').fadeIn();
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

	$('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

   $('.advantages-slider').slick({
      centerMode: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: true,
      prevArrow: '<button type="button" class="slider-btn slider-btn-prev"><div class="play-left"></div></button>',
      nextArrow: '<button type="button" class="slider-btn slider-btn-next"><div class="play-right"></div></button>',
      responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          dots: true,
          arrows: false,
          adaptiveHeight: true
        }
      }
    ]
   });

   $('.cases-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1
        }
      }
    ]
   });

});
