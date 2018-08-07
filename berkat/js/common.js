$(document).ready(function() {

	$("#phone").mask("+7 (999) 999-9999");
  $("#phone1").mask("+7 (999) 999-9999");

  var scroll = new SmoothScroll('a[href*="#"]', {
		speed: 800
	});

	new WOW().init();

	$("#main-number").viewportChecker({
		callbackFunction:function(){
			$('#num1').animate({ num: 42000 - 5000}, {
				duration: 3000,
				step: function (num){
					this.innerHTML = (num).toFixed(0)
				}
			});
			$('#num2').animate({ num: 11 - 1/* - начало */ }, {
				duration: 3000,
				step: function (num){
					this.innerHTML = (num).toFixed(0)
				}
			});
			$('#num3').animate({ num: 7100 - 100/* - начало */ }, {
				duration: 3000,
				step: function (num){
					this.innerHTML = (num).toFixed(0)
				}
			});
		}
	});

	$('.services-popup').on('click', function() {
			var serviceCaption = $(this).data('caption');
			$('input.caption').val(serviceCaption);
	});

	$('.table-price').stacktable();

	$('.callback-popup').magnificPopup({
		type:'inline',
		mainClass: 'mfp-fade',
		fixedContentPos: true
	});

	$('.license-popup').magnificPopup({
		type:'image'
	});

	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$('.callback').find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				// Done Functions
				$('.callback').find('.success').removeClass('active').fadeOut();
				$.magnificPopup.close();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

});
