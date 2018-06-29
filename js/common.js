$(function() {

	$('#my-menu').mmenu({
		extensions: [ 'theme-black', 'effect-menu-slide', 'pagedim-black' ],
		navbar: false,
		pageScroll: true,
		offCanvas: {
			position: 'right',
		}
	});

	var	api = $('#my-menu').data('mmenu');
	api.bind('open:finish', function() {
		$('.hamburger').addClass('is-active');
	});
	api.bind('close:finish', function() {
		$('.hamburger').removeClass('is-active');
	});

	$("#menu").on("click","a", function(event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 700);
	});



	$('.main-btn').click(function(){
    $('html, body').animate({scrollTop:$('#portfolio').position().top}, 700);
	});

	$(window).scroll(function() {
		if ($(this).scrollTop() > $(this). height()) {
			$('.top').addClass('active');
		} else {
			$('.top').removeClass('active');
		}
	});
	
	$('.top').click(function() {
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});

	$(window).on('load', function() {
		$('.preloader').delay(1000).fadeOut('slow');
	})

});
