$(function() {

	$('.mobil-menu').on('click', function() {
		$('.menu').toggleClass('is-active');
		$('.mobil-menu').toggleClass('mobile-menu_active');
	});
	$('.menu a').click(function() {
		$('.menu').toggleClass('is-active');
		$('.mobil-menu').toggleClass('mobile-menu_active');
	});

$('.photo-slider').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 3,
	prevArrow: '<button type="button" class="prev"></button>',
	nextArrow: '<button type="button" class="next"></button>',
	 responsive: [
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]

});

});
