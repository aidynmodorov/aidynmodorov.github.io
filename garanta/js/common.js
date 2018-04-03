$(function() {

	$('.reviews-slider').slick({
    slidesToShow: 5,
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
		$(this).next().addClass('active').slideToggle();
		$('.faq-tab').not(this).next().stop(true,true).removeClass('active').slideUp();
	});

});
