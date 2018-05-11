$(document).ready(function() {

	var menuBtn = $('.hamburger');
	var menu = $('.mobile-nav');
	menuBtn.on('click', function(event) {
		event.preventDefault();
		menu.toggleClass('mobile-nav__active');
		menuBtn.toggleClass('hamburger is-active');
  });

   $('.mobile-nav a').click(function() {
  	menuBtn.toggleClass('hamburger is-active');
  	menu.toggleClass('mobile-nav__active');
  });

  $('.services-item').equalHeights();

  $('.callback-btn').on('click', function(){
  	event.preventDefault();
  	$('#callback').fadeIn();
  });

  $('.services-btn').on('click', function(){
  	event.preventDefault();
  	$('#sale-moto').fadeIn();
  });

   $('.popup-close').on('click', function(){
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
        window.location.href = "thanks.html";
      setTimeout(function() {
        th.trigger("reset");
        $('.popup').fadeOut();
      }, 3000);
    });
    return false;
  });

});
