$(document).ready(function() {

	$("#phone").mask("+7 (999) 999-9999");
	$("#phone1").mask("+7 (999) 999-9999");
	$("#phone2").mask("+7 (999) 999-9999");
	$("#phone3").mask("+7 (999) 999-9999");
	$("#phone4").mask("+7 (999) 999-9999");

	$('[data-fancybox]').fancybox({
    youtube : {
        controls : 0,
        showinfo : 0
    },
    clickOutside: "close"
	});

	// $("#v_desktop")[0].play();
	// $("#v_mobile")[0].play();

	$('.select-item ul').equalHeights();

	$('.select-special').click(function(){
		event.preventDefault();
		$(this).addClass('active');
	});

	$('.select-standart').click(function(){
		event.preventDefault();
		$(this).addClass('active');
	});

	$('.select-smart').click(function(){
		event.preventDefault();
		$(this).addClass('active');
	});

	$('.callback-btn').on('click', function(event) {
		event.preventDefault();
	 	$('#callback').fadeIn();
	});

	$('.free-sample-btn').on('click', function(event) {
		event.preventDefault();
	 	$('#free-sample').fadeIn();
	});

	$('.special-btn').on('click', function(event) {
		event.preventDefault();
		$('#special').fadeIn();
	});

	$('.standard-btn').on('click', function(event) {
		event.preventDefault();
		$('#standard').fadeIn();
	});

	$('.button_smart').on('click', function(event) {
		event.preventDefault();
		$('#smart').fadeIn();
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

	$('.reviews-slider').slick({
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	adaptiveHeight: true,
  	prevArrow: '<button type="button" class="reviews-slider-btn reviews-prev-btn"><i class="demo-icon icon-left-circle"></i></button>',
		nextArrow: '<button type="button" class="reviews-slider-btn reviews-next-btn"><i class="demo-icon icon-right-circle"></i></button>',
		// responsive: [
		//     {
		//       breakpoint: 992,
		//       settings: {
		//         slidesToShow: 2,
		//         slidesToScroll: 1,
		//         infinite: true,
		//     	}
		//     },
		//     {
		//       breakpoint: 768,
		//       settings: {
		//       	slidesToShow: 1,
		//         slidesToScroll: 1,
		//         adaptiveHeight: true
		//       }
		//     }
		//   ]
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
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

});
