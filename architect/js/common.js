$(document).ready(function() {

  $("#phone").mask("+7 (999) 999-9999");
  $("#phone1").mask("+7 (999) 999-9999");
  $("#phone2").mask("+7 (999) 999-9999");
  $("#phone3").mask("+7 (999) 999-9999");
  $("#phone4").mask("+7 (999) 999-9999");
  $("#phone5").mask("+7 (999) 999-9999");
  $("#phone6").mask("+7 (999) 999-9999");
  $("#phone7").mask("+7 (999) 999-9999");
  $("#phone8").mask("+7 (999) 999-9999");
  $("#phone9").mask("+7 (999) 999-9999");
  $("#phone10").mask("+7 (999) 999-9999");

  $(window).scroll(function() {
    if ($(this).scrollTop() > $(this). height()) {
      $('.main-top').addClass('active');
    } else {
      $('.main-top').removeClass('active');
    }
  });

  var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 700
  });

  $('.menu a').click(function() {
    $('input.hamburger').prop('checked', false);
    $('input.hamburger').removeAttr('checked');
  });

  $('.offers-item p').equalHeights();

  function showOrHide(room, counter) {
    room = document.getElementById(room);
    counter = document.getElementById(counter);
    if (room.checked) counter.style.display = 'block';
    else counter.style.display = 'none';
  }

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

  $('.more-projects-btn').on('click', function(event) {
    event.preventDefault();
    $('#more-projects').fadeIn();
  });

  $('.order-offer').on('click', function(event) {
    event.preventDefault();
    $('#order-offer').fadeIn();
  });

  $('.order-offer1').on('click', function(event) {
    event.preventDefault();
    $('#order-offer1').fadeIn();
  });

  $('.order-offer2').on('click', function(event) {
    event.preventDefault();
    $('#order-offer2').fadeIn();
  });

  $('.order-btn').on('click', function(event) {
    event.preventDefault();
    $('#order').fadeIn();
  });

  $('.order-btn1').on('click', function(event) {
    event.preventDefault();
    $('#order1').fadeIn();
  });

  $('.order-btn2').on('click', function(event) {
    event.preventDefault();
    $('#order2').fadeIn();
  });

  $('.order-btn3').on('click', function(event) {
    event.preventDefault();
    $('#order3').fadeIn();
  });

  $('#bathhouse-btn').on('click', function(event) {
    event.preventDefault();
    $('#bathhouse').fadeIn();
  });

  $('#summer_kitchens-btn').on('click', function(event) {
    event.preventDefault();
    $('#summer_kitchens').fadeIn();
  });

  $('#terrace-btn').on('click', function(event) {
    event.preventDefault();
    $('#terrace').fadeIn();
  });

  $('#garages-btn').on('click', function(event) {
    event.preventDefault();
    $('#garages').fadeIn();
  });

  $('#extensions-btn').on('click', function(event) {
    event.preventDefault();
    $('#extensions').fadeIn();
  });

  $('#swimming_pools-btn').on('click', function(event) {
    event.preventDefault();
    $('#swimming_pools').fadeIn();
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

    $('.open-popup-link').magnificPopup({
      type:'inline',
      midClick: true,
      showCloseBtn: true,
      fixedContentPos: true,
      removalDelay: 300,
      mainClass: 'mfp-fade'
    });
    $('.open-popup-link').click(function(){
      $('.case-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slider-btn slider-btn-prev cases-btn"><img src="img/left-arrow.svg" alt="Предыдущее" /></button>',
        nextArrow: '<button type="button" class="slider-btn slider-btn-next cases-btn"><img src="img/right-arrow.svg" alt="Следующее" /></button>'
      });
    });

    $('.open-popup-link2').magnificPopup({
      type:'inline',
      midClick: true,
      showCloseBtn: true,
      fixedContentPos: true,
      removalDelay: 300,
      mainClass: 'mfp-fade'
    });
    $('.open-popup-link2').click(function(){
      $('.case-slider2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slider-btn slider-btn-prev cases-btn"><img src="img/left-arrow.svg" alt="Предыдущее" /></button>',
        nextArrow: '<button type="button" class="slider-btn slider-btn-next cases-btn"><img src="img/right-arrow.svg" alt="Следующее" /></button>'
      });
    });

    $('.open-popup-link3').magnificPopup({
      type:'inline',
      midClick: true,
      showCloseBtn: true,
      fixedContentPos: true,
      removalDelay: 300,
      mainClass: 'mfp-fade'
    });
    $('.open-popup-link3').click(function(){
      $('.case-slider3').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slider-btn slider-btn-prev cases-btn"><img src="img/left-arrow.svg" alt="Предыдущее" /></button>',
        nextArrow: '<button type="button" class="slider-btn slider-btn-next cases-btn"><img src="img/right-arrow.svg" alt="Следующее" /></button>'
      });
    });

    $('.open-popup-link4').magnificPopup({
      type:'inline',
      midClick: true,
      showCloseBtn: true,
      fixedContentPos: true,
      removalDelay: 300,
      mainClass: 'mfp-fade'
    });
    $('.open-popup-link4').click(function(){
      $('.case-slider4').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slider-btn slider-btn-prev cases-btn"><img src="img/left-arrow.svg" alt="Предыдущее" /></button>',
        nextArrow: '<button type="button" class="slider-btn slider-btn-next cases-btn"><img src="img/right-arrow.svg" alt="Следующее" /></button>'
      });
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
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      }
    ]
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
        $('.projection-submit').find('.popup-success').addClass('active').css('display', 'flex').hide().fadeIn();
        $('.callback-form').find('.popup-success').addClass('active').css('display', 'flex').hide().fadeIn();
      setTimeout(function() {
        $('.popup-content').find('.popup-success').removeClass('active').fadeOut();
        $('.projection-submit').find('.popup-success').removeClass('active').fadeOut();
        $('.callback-form').find('.popup-success').removeClass('active').fadeOut();
        $('.popup').fadeOut();
        th.trigger("reset");
      }, 3000);
    });
    return false;
  });

});
