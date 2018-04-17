$(function() {

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

	$('.cars-slider').slick({
		slidesToShow: 6,
		autoplay: true,
		prevArrow: '<button type="button" class="cars-slider-btn cars-prev-btn"><img src="img/left-arrow.svg" alt=""/></button>',
		nextArrow: '<button type="button" class="cars-slider-btn cars-next-btn"><img src="img/right-arrow.svg" alt=""/></button>',
		responsive: [
		    {
		      breakpoint: 1100,
		      settings: {
		        slidesToShow: 5,
		        slidesToScroll: 1,
		        infinite: true,
		    	}
		    },
		    {
		      breakpoint: 992,
		      settings: {
		        slidesToShow: 4,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		      	slidesToShow: 3,
		        slidesToScroll: 1,
		      }
		    }
		  ]
	});

	var showChar = 90;
	var ellipsestext = "";
	var moretext = "...читать далее";
	var lesstext = "свернуть";
	$('.more').each(function() {
		var content = $(this).html();

		if(content.length > showChar) {

			var c = content.substr(0, showChar);
			var h = content.substr(showChar-1, content.length - showChar);

			var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';

			$(this).html(html);
		}

	});

	$(".morelink").click(function(){
		if($(this).hasClass("less")) {
			$(this).removeClass("less");
			$(this).html(moretext);
		} else {
			$(this).addClass("less");
			$(this).html(lesstext);
		}
		$(this).parent().prev().toggle();
		$(this).prev().toggle();
		return false;
	});

	$('.schemework-item').equalHeights();

	$('.favorably-text').equalHeights();

	$('.reviews-slider').slick({
		slidesToShow: 1,
		prevArrow: '<button type="button" class="review-slider-btn review-prev-btn"></button>',
		nextArrow: '<button type="button" class="review-slider-btn review-next-btn"></button>',
		responsive: [
		    {
		      breakpoint: 992,
		      settings: {
		        arrows: false,
		        dots: true,
		        infinite: true,
		        adaptiveHeight: true
		    	}
		    }
		  ]
	});

	$('.callback-btn').on('click', function(event) {
		event.preventDefault();
	 	$('.popup').fadeIn();
	});

	$('.popup-close').on('click', function(event) {
	 	event.preventDefault();
	 	$('.popup').fadeOut();
	});

		$("#menu-mobile").on("click","a", function(event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

	$("#menu").on("click","a", function(event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$('.success').hide().fadeIn();
			setTimeout(function() {
			$('.success').fadeOut();
				th.trigger("reset");
				$('.popup').fadeOut();
			}, 3000);
		});
		return false;
	});

	$('.diagnostic').mouseenter(function(event) {
		event.preventDefault();
	 	$('#diagnostic').fadeIn();
	});

	$('.modal-close').on('click', function(event) {
	 	event.preventDefault();
	 	$('#diagnostic').fadeOut();
	});

	$('.rebuilding').mouseenter(function(event) {
		event.preventDefault();
		$('#rebuilding').fadeIn();
	});

	$('.modal-close').on('click', function(event) {
	 	event.preventDefault();
	 	$('#rebuilding').fadeOut();
	});

	$('.change').mouseenter(function(event) {
		event.preventDefault();
		$('#change').fadeIn();
	});

	$('.modal-close').on('click', function(event) {
	 	event.preventDefault();
	 	$('#change').fadeOut();
	});

	$('.service').mouseenter(function(event) {
		event.preventDefault();
		$('#service').fadeIn();
	});

	$('.modal-close').on('click', function(event) {
	 	event.preventDefault();
	 	$('#service').fadeOut();
	});

	$('.repairs').mouseenter(function(event) {
		event.preventDefault();
		$('#repairs').fadeIn();
	});

	$('.modal-close').on('click', function(event) {
	 	event.preventDefault();
	 	$('#repairs').fadeOut();
	});

});





			
				

		


		

