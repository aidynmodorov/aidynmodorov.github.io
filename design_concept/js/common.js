$(document).ready(function() {

	$('.projects-slider').slick({
		prevArrow: '<button type="button" class="projects-slider-btn projects-prev-btn"></button>',
		nextArrow: '<button type="button" class="projects-slider-btn projects-next-btn"></button>',
		adaptiveHeight: true
	});

	$('.projects-wrap').slick({
		prevArrow: '<button type="button" class="projects-wrap-btn wrap-prev-btn">Предыдущий проект</button>',
		nextArrow: '<button type="button" class="projects-wrap-btn wrap-next-btn">Следующий проект</button>',
		adaptiveHeight: true
	});

	$('.projects-slider-item').magnificPopup({
		type : 'image',
		gallery: {
    	enabled: true
  	}
	});

	$('.callback-btn').on('click', function(event) {
		event.preventDefault();
	 	$('.popup').fadeIn();
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
				$('.popup-content').find('.success-popup').removeClass('active').fadeOut();
				$('.popup').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

});
