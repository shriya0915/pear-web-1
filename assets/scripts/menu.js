$(function() {

  if (!$('#menu-toggle-indicator')[0]) {
    return;
  }

  var controller = new ScrollMagic.Controller();
  controller.scrollTo(function (newScrollPos) {
    $("html, body").animate({scrollTop: newScrollPos});
});

  console.log($(window).innerHeight()/2);
	// build scenes
	new ScrollMagic.Scene({triggerElement: "#menu-toggle-indicator", offset: ($(window).innerHeight())/2 - 64})
					.setClassToggle("#top-nav", "white") // add class toggle
          .addIndicators()
					.addTo(controller);

  new ScrollMagic.Scene({triggerElement: "#nav-home-trigger", duration: $(".landing-home").height() + 32})
					.setClassToggle("#nav-home", "active") // add class toggle
          .addIndicators()
					.addTo(controller);


  //SHOULD BE THE SAME AS IN mobile.js (MAKE COMMON)
  var viewVisible = 200;
  var viewTransition = 150;
  var baseOffset = 260;


  new ScrollMagic.Scene({triggerElement: "#nav-about-trigger", duration: $(".landing-about").height() + viewVisible * 6 + viewTransition * 5 + baseOffset - 60 })
					.setClassToggle("#nav-about", "active") // add class toggle
          .addIndicators()
					.addTo(controller);

  new ScrollMagic.Scene({triggerElement: "#nav-blog-trigger", duration: $(".landing-blog").height() + $(".blog").height() + 98})
					.setClassToggle("#nav-blog", "active") // add class toggle
          .addIndicators()
					.addTo(controller);

  new ScrollMagic.Scene({triggerElement: "#nav-media-trigger", duration: $(".landing-press").height()})
  				.setClassToggle("#nav-media", "active") // add class toggle
          .addIndicators()
  				.addTo(controller);

  $(document).on("click", ".nav-item", function (e) {
		var id = $(this).attr("id");
    console.log('click', id);
    var triggerId = id + "-trigger";
			// trigger scroll
		controller.scrollTo("#" + triggerId);
	});
});