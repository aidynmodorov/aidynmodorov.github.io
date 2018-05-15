$(document).ready(function() {

	$("#phone").mask("+7 (999) 999-9999");

	$('.callback-btn').on('click', function(event) {
		event.preventDefault();
	 	$('.popup').fadeIn();
	});

	$('.popup-close').on('click', function(event) {
	 	event.preventDefault();
	 	$('.popup').fadeOut();
	});

  $(document).mouseup(function (e){
    var div = $('.popup-content');
    if (!div.is(e.target)
      && div.has(e.target).length === 0) {
      $('.popup').fadeOut();
  }
  });

	$('.diploms-forum').equalHeights();

	$('.diploms-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slider-btn slider-btn-prev">предыдущее фото<div class="play-left"><img src="../img/arrow-slider.png" alt=""/></div></button>',
		nextArrow: '<button type="button" class="slider-btn slider-btn-next"><div class="play-right"><img src="../img/arrow-slider.png" alt=""/></div>следующее фото</button>',
		responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
      }
    }
  ]
	});

	$(document).on("click", ".naccs .menu div", function() {
    var numberIndex = $(this).index();

    if (!$(this).is("active")) {
        $(".naccs .menu div").removeClass("active");
        $(".naccs ul li").removeClass("active");

        $(this).addClass("active");
        $(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");

        var listItemHeight = $(".naccs ul")
            .find("li:eq(" + numberIndex + ")")
            .innerHeight();
        $(".naccs ul").height(listItemHeight + "px");
    }
	});

	$('.reviews-slider').slick({
		prevArrow: '<button type="button" class="reviews-btn slider-btn reviews-btn-prev"><div class="play-left"><img src="../img/arrow-slider.png" alt=""/></div></button>',
		nextArrow: '<button type="button" class="reviews-btn slider-btn reviews-btn-next"><div class="play-right"><img src="../img/arrow-slider.png" alt=""/></div></button>',
		dots: true,
		arrows: true,
		adaptiveHeight: true,
		responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false
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
        window.location.href = "../order.html";
      setTimeout(function() {
        $('.popup').fadeOut();
        th.trigger("reset");
      }, 3000);
    });
    return false;
  });

});
