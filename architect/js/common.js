$(document).ready(function() {

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
  $("#phone10").mask("+7 (999) 999-9999");

  $(window).scroll(function() {
    if ($(this).scrollTop() > $(this). height()) {
      $('.main-top').addClass('active');
    } else {
      $('.main-top').removeClass('active');
    }
  });

  var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 700
  });

  $('.menu a').click(function() {
    $('input.hamburger').prop('checked', false);
    $('input.hamburger').removeAttr('checked');
  });

  $('.offers-item p').equalHeights();

  function showOrHide(room, counter) {
    room = document.getElementById(room);
    counter = document.getElementById(counter);
    if (room.checked) counter.style.display = 'block';
    else counter.style.display = 'none';
  }

	$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	});

	$('ul.tabs__caption2').on('click', 'li:not(.active)', function() {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.tabs_two').find('div.tabs__content2').removeClass('active').eq($(this).index()).addClass('active');
	});

  $('.callback-button').on('click', function(event) {
    event.preventDefault();
    $('#callback').fadeIn();
  });

  $('.more-projects-btn').on('click', function(event) {
    event.preventDefault();
    $('#more-projects').fadeIn();
  });

  $('.order-offer').on('click', function(event) {
    event.preventDefault();
    $('#order-offer').fadeIn();
  });

  $('.order-offer1').on('click', function(event) {
    event.preventDefault();
    $('#order-offer1').fadeIn();
  });

  $('.order-offer2').on('click', function(event) {
    event.preventDefault();
    $('#order-offer2').fadeIn();
  });

  $('.order-btn').on('click', function(event) {
    event.preventDefault();
    $('#order').fadeIn();
  });

  $('.order-btn1').on('click', function(event) {
    event.preventDefault();
    $('#order1').fadeIn();
  });

  $('.order-btn2').on('click', function(event) {
    event.preventDefault();
    $('#order2').fadeIn();
  });

  $('.order-btn3').on('click', function(event) {
    event.preventDefault();
    $('#order3').fadeIn();
  });

  $('#bathhouse-btn').on('click', function(event) {
    event.preventDefault();
    $('#bathhouse').fadeIn();
  });

  $('#summer_kitchens-btn').on('click', function(event) {
    event.preventDefault();
    $('#summer_kitchens').fadeIn();
  });

  $('#terrace-btn').on('click', function(event) {
    event.preventDefault();
    $('#terrace').fadeIn();
  });

  $('#garages-btn').on('click', function(event) {
    event.preventDefault();
    $('#garages').fadeIn();
  });

  $('#extensions-btn').on('click', function(event) {
    event.preventDefault();
    $('#extensions').fadeIn();
  });

  $('#swimming_pools-btn').on('click', function(event) {
    event.preventDefault();
    $('#swimming_pools').fadeIn();
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

	$('body').on('click', '.minus', function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });

  $('body').on('click', '.plus', function () {
      var $input = $(this).parent().find('input');
      $input.val(parseInt($input.val()) + 1);
      $input.change();
      return false;
  });

  $('.open-popup-link').magnificPopup({
      type:'image',
      midClick: true,
      showCloseBtn: true,
      fixedContentPos: true,
      removalDelay: 300,
      mainClass: 'mfp-fade'
    });

    $('.open-popup-link2').magnificPopup({
      type:'inline',
      midClick: true,
      showCloseBtn: true,
      fixedContentPos: true,
      removalDelay: 300,
      mainClass: 'mfp-fade'
    });

    $('.open-popup-link3').magnificPopup({
      type:'inline',
      midClick: true,
      showCloseBtn: true,
      fixedContentPos: true,
      removalDelay: 300,
      mainClass: 'mfp-fade'
    });

    $('.open-popup-link4').magnificPopup({
      type:'inline',
      midClick: true,
      showCloseBtn: true,
      fixedContentPos: true,
      removalDelay: 300,
      mainClass: 'mfp-fade'
    });

   $('.advantages-slider').slick({
      centerMode: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: true,
      prevArrow: '<button type="button" class="slider-btn slider-btn-prev"><div class="play-left"></div></button>',
      nextArrow: '<button type="button" class="slider-btn slider-btn-next"><div class="play-right"></div></button>',
      responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          dots: true,
          arrows: false,
          adaptiveHeight: true
        }
      }
    ]
   });

   $('.cases-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      }
    ]
   });

   $('.chk').on('change', function() {
    var checkboxName = $(this).attr('name');
    if ($(this).prop("checked")) {
      $(this).parents(".calculation-item-check").append('<div class="number">\
        <span class="minus">-</span>\
        <input type="text" value="1" name="Количество ' + checkboxName + '"/>\
        <span class="plus">+</span>\
        </div>');
    } else {
     $(this).parents(".calculation-item-check").find(".number").remove();
   }
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
        $('.projection-submit').find('.popup-success').addClass('active').css('display', 'flex').hide().fadeIn();
        $('.callback-form').find('.popup-success').addClass('active').css('display', 'flex').hide().fadeIn();
      setTimeout(function() {
        $('.number').remove();
        $('.popup-content').find('.popup-success').removeClass('active').fadeOut();
        $('.projection-submit').find('.popup-success').removeClass('active').fadeOut();
        $('.callback-form').find('.popup-success').removeClass('active').fadeOut();
        $('.popup').fadeOut();
        th.trigger("reset");
      }, 3000);
    });
    return false;
  });

  // Flipbook

  function loadApp() {

  $('#canvas').fadeIn(1000);

  var flipbook = $('.magazine');

  // Check if the CSS was already loaded
  
  if (flipbook.width()==0 || flipbook.height()==0) {
    setTimeout(loadApp, 10);
    return;
  }
  
  // Create the flipbook

  flipbook.turn({
      
      // Magazine width

      width: 900,

      // Magazine height

      height: 300,

      // Duration in millisecond

      duration: 1000,

      acceleration: !isChrome(),

      // Enables gradients

      gradients: true,
      
      // Auto center this flipbook

      autoCenter: true,

      // Elevation from the edge of the flipbook when turning a page

      elevation: 50,

      // The number of pages

      pages: 26,

      // Events

      when: {
        turning: function(event, page, view) {
          
          var book = $(this),
          currentPage = book.turn('page'),
          pages = book.turn('pages');
      

          // Show and hide navigation buttons

          disableControls(page);

        },

        turned: function(event, page, view) {

          disableControls(page);

          $(this).turn('center');

          $('#slider').slider('value', getViewNumber($(this), page));

          if (page==1) { 
            $(this).turn('peel', 'br');
          }

        },

        missing: function (event, pages) {

          // Add pages that aren't in the magazine

          for (var i = 0; i < pages.length; i++)
            addPage(pages[i], $(this));

        }
      }

  });

  // Zoom.js

  $('.magazine-viewport').zoom({
    flipbook: $('.magazine'),

    max: function() { 
      
      return largeMagazineWidth()/$('.magazine').width();

    }, 

    when: {
      swipeLeft: function() {

        $(this).zoom('flipbook').turn('next');

      },

      swipeRight: function() {
        
        $(this).zoom('flipbook').turn('previous');

      },

      resize: function(event, scale, page, pageElement) {

        if (scale==1)
          loadSmallPage(page, pageElement);
        else
          loadLargePage(page, pageElement);

      },

      zoomIn: function () {

        $('#slider-bar').hide();
        $('.made').hide();
        $('.magazine').removeClass('animated').addClass('zoom-in');
        $('.zoom-icon').removeClass('zoom-icon-in').addClass('zoom-icon-out');
        
        if (!window.escTip && !$.isTouch) {
          escTip = true;

          $('<div />', {'class': 'exit-message'}).
            html('<div>Press ESC to exit</div>').
              appendTo($('body')).
              delay(2000).
              animate({opacity:0}, 500, function() {
                $(this).remove();
              });
        }
      },

      zoomOut: function () {

        $('#slider-bar').fadeIn();
        $('.exit-message').hide();
        $('.made').fadeIn();
        $('.zoom-icon').removeClass('zoom-icon-out').addClass('zoom-icon-in');

        setTimeout(function(){
          $('.magazine').addClass('animated').removeClass('zoom-in');
          resizeViewport();
        }, 0);

      }
    }
  });

  // Zoom event

  // if ($.isTouch)
  //   $('.magazine-viewport').bind('zoom.doubleTap', zoomTo);
  // else
  //   $('.magazine-viewport').bind('zoom.tap', zoomTo);


  // Using arrow keys to turn the page

  $(document).keydown(function(e){

    var previous = 37, next = 39, esc = 27;

    switch (e.keyCode) {
      case previous:

        // left arrow
        $('.magazine').turn('previous');
        e.preventDefault();

      break;
      case next:

        //right arrow
        $('.magazine').turn('next');
        e.preventDefault();

      break;
      case esc:
        
        $('.magazine-viewport').zoom('zoomOut');  
        e.preventDefault();

      break;
    }
  });

  // URIs - Format #/page/1 

  Hash.on('^page\/([0-9]*)$', {
    yep: function(path, parts) {
      var page = parts[1];

      if (page!==undefined) {
        if ($('.magazine').turn('is'))
          $('.magazine').turn('page', page);
      }

    },
    nop: function(path) {

      if ($('.magazine').turn('is'))
        $('.magazine').turn('page', 1);
    }
  });


  $(window).resize(function() {
    resizeViewport();
  }).bind('orientationchange', function() {
    resizeViewport();
  });

  // Regions

  if ($.isTouch) {
    $('.magazine').bind('touchstart', regionClick);
  } else {
    $('.magazine').click(regionClick);
  }

  // Events for the next button

  $('.next-button').bind($.mouseEvents.over, function() {
    
    $(this).addClass('next-button-hover');

  }).bind($.mouseEvents.out, function() {
    
    $(this).removeClass('next-button-hover');

  }).bind($.mouseEvents.down, function() {
    
    $(this).addClass('next-button-down');

  }).bind($.mouseEvents.up, function() {
    
    $(this).removeClass('next-button-down');

  }).click(function() {
    
    $('.magazine').turn('next');

  });

  // Events for the next button
  
  $('.previous-button').bind($.mouseEvents.over, function() {
    
    $(this).addClass('previous-button-hover');

  }).bind($.mouseEvents.out, function() {
    
    $(this).removeClass('previous-button-hover');

  }).bind($.mouseEvents.down, function() {
    
    $(this).addClass('previous-button-down');

  }).bind($.mouseEvents.up, function() {
    
    $(this).removeClass('previous-button-down');

  }).click(function() {
    
    $('.magazine').turn('previous');

  });


  // Slider

  $( "#slider" ).slider({
    min: 1,
    max: numberOfViews(flipbook),

    start: function(event, ui) {

      if (!window._thumbPreview) {
        _thumbPreview = $('<div />', {'class': 'thumbnail'}).html('<div></div>');
        setPreview(ui.value);
        _thumbPreview.appendTo($(ui.handle));
      } else
        setPreview(ui.value);

      moveBar(false);

    },

    slide: function(event, ui) {

      setPreview(ui.value);

    },

    stop: function() {

      if (window._thumbPreview)
        _thumbPreview.removeClass('show');
      
      $('.magazine').turn('page', Math.max(1, $(this).slider('value')*2 - 2));

    }
  });

  resizeViewport();

  $('.magazine').addClass('animated');

}

// Zoom icon

 $('.zoom-icon').bind('mouseover', function() { 
  
  if ($(this).hasClass('zoom-icon-in'))
    $(this).addClass('zoom-icon-in-hover');

  if ($(this).hasClass('zoom-icon-out'))
    $(this).addClass('zoom-icon-out-hover');
 
 }).bind('mouseout', function() { 
  
   if ($(this).hasClass('zoom-icon-in'))
    $(this).removeClass('zoom-icon-in-hover');
  
  if ($(this).hasClass('zoom-icon-out'))
    $(this).removeClass('zoom-icon-out-hover');

 }).bind('click', function() {

  if ($(this).hasClass('zoom-icon-in'))
    $('.magazine-viewport').zoom('zoomIn');
  else if ($(this).hasClass('zoom-icon-out')) 
    $('.magazine-viewport').zoom('zoomOut');

 });

 $('#canvas').hide();


  // Load the HTML4 version if there's not CSS transform

yepnope({
  test : Modernizr.csstransforms,
  yep: ['../assets/turn.min.js'],
  nope: ['../assets/turn.html4.min.js', '../css/jquery.ui.html4.css'],
  both: ['../assets/zoom.min.js', '../css/jquery.ui.css', '../js/magazine.js', '../css/magazine.css'],
  complete: loadApp
});

});
