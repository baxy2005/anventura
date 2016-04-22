
$('#main-carousel').owlCarousel({
	animateOut: 'fadeOut',
    items:1,
    lazyLoad:true,
    loop:true,
	autoplay: true,
	nav:false,
	margin:30,
});


$('.owl-rooms-aps').owlCarousel({
	animateOut: 'fadeOut',
    items:1,
    lazyLoad:true,
    loop:true,
	autoplay: true,
	nav:false,
	margin:30,
});


$('.owl-carousel-awards').owlCarousel({
    lazyLoad:true,
    loop:true,
	autoplay: false,
	nav:true,
	 responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav:true
        },
        440:{
            items:3,
            nav:true
        },
		        767:{
            items:3,
            nav:true
        },

        992:{
            items:4,
            nav:true,
        },
		        1200:{
            items:6,
            nav:true,
        }

    }
});

  
$(function() {
  
  // Init ScrollMagic Controller
  var scrollMagicController = new ScrollMagic({
    globalSceneOptions: {
      triggerHook: "onLeave"
    }
  });

  //pin the navigation
  var pin = new ScrollScene({
    triggerElement: '#nav-trigger',
	offset: 5  /*offset the trigger 150px below #scene's top */
  })
  .setPin('.secondary-nav')
  .addTo(scrollMagicController);
 
    var scene3 = new ScrollScene({
	triggerElement: '#nav-trigger',
  	offset: 6  /*offset the trigger 150px below #scene's top */

  })
    .setClassToggle('.secondary-nav', 'secondary-nav-top')
   .addTo(scrollMagicController);

	 var scene6 = new ScrollScene({
	triggerElement: '#nav-trigger',
  	offset: 120  /*offset the trigger 150px below #scene's top */
	
  })
    .setClassToggle('.secondary-nav', 'fade-secondary-nav-bg')
    .addTo(scrollMagicController);
	

    var scene = new ScrollScene({
    offset: 60 /* offset the trigger 150px below #scene's top */
	
  })
    .setClassToggle('.navmenu', 'navmenu-fixed')
    .addTo(scrollMagicController);
	
	
	
	
	//var tween = TweenMax.from('.brand-on', 0.2, {
//    opacity: 0,
//  });
//		 var scene7 = new ScrollScene({
//			  triggerElement: '#brand-switch',
//			   offset: -15
//	
//  })
//    .setTween(tween)
//    .addTo(scrollMagicController);
	
	
	 var scene4 = new ScrollScene({
    offset: 60 /* offset the trigger 150px below #scene's top */
	
  })
    .setClassToggle('.form-inline-opening', 'form-inline-opening-fixed')
    .addTo(scrollMagicController);
	
	  var scene8 = new ScrollScene({
    offset: 60 /* offset the trigger 150px below #scene's top */
	
  })
    .setClassToggle('.secondary-nav-subpage', 'secondary-nav-top')
    .addTo(scrollMagicController);
	
		 var scene9 = new ScrollScene({
    offset: 90 /* offset the trigger 150px below #scene's top */
	
  })
    .setClassToggle('.secondary-nav-subpage', 'fade-secondary-nav-bg')
    .addTo(scrollMagicController);
	
	
  // Add debug indicators fixed on right side
   scene.addIndicators();
   
 
});


			  $(".navbar-toggle").on("click", function () {
				    $(this).toggleClass("active");
			  });


$('.secondary-nav ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(0).fadeIn(170);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(0).fadeOut(170);
});

$('.secondary-nav-subpage ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(0).fadeIn(170);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(0).fadeOut(170);
});

/*
$('.navmenu-default ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(0).fadeIn(170);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(0).fadeOut(170);
});*/




