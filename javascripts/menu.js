$(document).ready(function() {
	var menu = $('.menu');
	var menuIcon = $('.menu-icon');
  var subMenuToggleSelectors = $('.published-menu, .unpublished-menu');
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
      menuIcon.css('background-color' , 'rgba(0,0,0,0.5)')
    } else {
      menuIcon.css('background-color' , 'rgba(255,255,255,0.5)')
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
});