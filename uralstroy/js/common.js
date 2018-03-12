$(function() {

	$('.project-blocks').slick({
  	infinite: true,
  	slidesToShow: 5,
  	slidesToScroll: 2,
  	arrow: true,
  	responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
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
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
	});

	$('button').on('click', function(){
  	$('body').toggleClass('open');
	});

});
