$(document).ready (function() {

  $("#phone").mask("+7 (999) 999-9999");
  $("#phone1").mask("+7 (999) 999-9999");
  $("#phone2").mask("+7 (999) 999-9999");

  $("#menu").on("click","a", function(event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });

  $('.delivery-block-content').equalHeights();

	$('.main-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="main-slider-btn main-prev-btn"><img src="img/arrow_left.png" alt="Назад"/></button>',
		nextArrow: '<button type="button" class="main-slider-btn main-next-btn"><img src="img/arrow_right.png" alt="Вперед"/></button>'
	});

  $('.works-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="main-slider-btn main-prev-btn works-slider-btn"><img src="img/arrow_left.png" alt="Назад"/></button>',
    nextArrow: '<button type="button" class="main-slider-btn main-next-btn works-slider-btn"><img src="img/arrow_right.png" alt="Вперед"/></button>',
    responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });

	$('.colors-slider').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="main-slider-btn colors-prev-btn"><img src="img/arrow_left.png" alt="Назад"/></button>',
		nextArrow: '<button type="button" class="main-slider-btn colors-next-btn"><img src="img/arrow_right.png" alt="Вперед"/></button>',
		responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
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
        slidesToScroll: 1
      }
    }
  ]
	});


	$('.reviews-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		prevArrow: '<button type="button" class="main-slider-btn reviews-prev-btn"><img src="img/arrow_left.png" alt="Назад"/></button>',
		nextArrow: '<button type="button" class="main-slider-btn reviews-next-btn"><img src="img/arrow_right.png" alt="Вперед"/></button>',
		responsive: [
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        dots: true
      }
    }
  ]
	});

  $('.callback-btn').on('click', function(event) {
    event.preventDefault();
    $('#callback').fadeIn();
  });

  $('.order-btn').on('click', function(event) {
    event.preventDefault();
    $('#order').fadeIn();
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
        window.location.href = "thanks.html";
        th.trigger("reset");
      }, 3000);
    });
    return false;
  });

'use strict';

var $uiAccordion = $('.js-ui-accordion');

$uiAccordion.accordion({
  active: false,
  collapsible: true,
  heightStyle: 'content',

  activate: function activate(event, ui) {
    var newHeaderId = ui.newHeader.attr('id');

    if (newHeaderId) {
      history.pushState(null, null, '#' + newHeaderId);
    }
  },

  create: function create(event, ui) {
    var $this = $(event.target);
    var $activeAccordion = $(window.location.hash);

    if ($this.find($activeAccordion).length) {
      $this.accordion('option', 'active', $this.find($this.accordion('option', 'header')).index($activeAccordion));
    }
  }
});

$(window).on('hashchange', function (event) {
  var $activeAccordion = $(window.location.hash);
  var $parentAccordion = $activeAccordion.parents('.js-ui-accordion');

  if ($activeAccordion.length) {
    $parentAccordion.accordion('option', 'active', $parentAccordion.find($uiAccordion.accordion('option', 'header')).index($activeAccordion));
  }
});

});
