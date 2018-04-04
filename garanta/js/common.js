$(function() {

	$('.reviews-slider').slick({
    slidesToShow: 5,
		slidesToScroll: 1,
		dots: true,
		responsive: [
		    {
		      breakpoint: 1201,
		      settings: {
		        slidesToShow: 4,
		        slidesToScroll: 1,
		        infinite: true,
		    	}
		    },
		    {
		      breakpoint: 993,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 769,
		      settings: {
		      	slidesToShow: 2,
		        slidesToScroll: 1,
		        arrows: false,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 540,
		      settings: {
		      	slidesToShow: 1,
		        slidesToScroll: 1,
		        arrows: false,
		        dots: true
		      }
		    }
		  ]
  });

  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      $('.tabs').closest('div').find('div.tabs__content').fadeOut('1000').eq($(this).index()).fadeIn('1000');
  });

	$('.clients-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
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
		        slidesToScroll: 1
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

	$('.faq-tab').next().hide();

	$('.faq-tab').click(function(){
		$(this).addClass('active').next().slideToggle();
		$('.faq-tab').not(this).removeClass('active').next().stop(true,true).slideUp();

	});

	$('.mob-tab').next().hide();

	$('.mob-tab').click(function(){
		$(this).addClass('active').next().slideToggle();
		$('.mob-tab').not(this).removeClass('active').next().stop(true,true).slideUp();
	});

	$('.reviews-slider-item').magnificPopup({
		type : 'image'
	});

	$('.popup-btn').on('click', function(event) {
		event.preventDefault();
		$('.popup').fadeIn();
	});

	$('.popup-close').on('click', function(event) {
		event.preventDefault();
		$('.popup').fadeOut();
	});

});

