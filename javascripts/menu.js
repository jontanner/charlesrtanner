$(document).ready(function() {
	var menu = $('.menu');
	var menuIcon = $('.menu-icon');
  var subMenuToggleSelectors = $('.published-menu, .unpublished-menu');
  var stickyMenuSelector = $('.sticky-bottom-menu');
  var menuSpeed = 300

	menuIcon.click(function() {
		var menuPos = $('.menu').css('right');

		if(menuPos == "-250px") {
			$(this).animate({
				right: "85px"
			}, menuSpeed)
			menu.animate({
				right: "0px"
			}, menuSpeed)
		} else if(menuPos == "0px") {
			$(this).animate({
				right: "16px"
			}, menuSpeed)
			menu.animate({
				right: "-250px"
			}, menuSpeed)
		}
	});

  $(document).scroll(function(){
    if($(document).scrollTop() > $('header').outerHeight()) {
      menuIcon.css('background-color' , 'rgba(0,0,0,0.5)'),
      stickyMenuSelector.css('bottom' , '0px')
    } else {
      menuIcon.css('background-color' , 'rgba(255,255,255,0.5)')
      stickyMenuSelector.css('bottom' , '-100px')
    }
  })

  $('.published').click(function() {
    $('.published-menu').animate({
      right: "0px"
    }, menuSpeed)
  })

  $('.unpublished').click(function() {
    $('.unpublished-menu').animate({
      right: "0px"
    }, menuSpeed)
  })

  $('.back-icon').click(function() {
    subMenuToggleSelectors.animate({
      right: "-250px"
    }, menuSpeed)
  })

  $('.about').click(function() {
    $('html, body').animate({
      scrollTop: $('#about').offset().top 
    }, 800);
  })

  $('.authors-note').click(function() {
    $('html, body').animate({
      scrollTop: $('#authors-note').offset().top 
    }, 800);
  })

  $('.contact').click(function() {
    $('html, body').animate({
      scrollTop: $('#contact').offset().top 
    }, 800);
  })
});