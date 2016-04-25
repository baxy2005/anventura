
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

$('.owl-news').owlCarousel({
    loop:true,
	autoplay: false,
	nav:false,
		 responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        550:{
            items:2,
            nav:false
        },
		        767:{
            items:2,
            nav:false
        },

        992:{
            items:1,
            nav:true,
        },
		        1200:{
            items:1,
            nav:true,
        }

    }

});
$('.owl-packages').owlCarousel({
    items:1,
    loop:true,
	autoplay: false,
	nav:false,
		 responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        550:{
            items:2,
            nav:false
        },

        992:{
            items:3,
            nav:false,
        },

    }

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

	
	
	


var tween = TweenMax.fromTo('.main-bar', 0.3,
    {
        top: 0,
		height: 628
    },
    {
		 top: 15,
		 height: 430
     }
);
	 var scene = new ScrollScene({
			   offset: 600
	
  })
     .setClassToggle('.budapest', 'off')
    .setTween(tween)
    .addTo(scrollMagicController);
	
		 var scene2 = new ScrollScene({
			   offset: 600
	
  })
  .setClassToggle('.aventura-brand', 'aventura-brand-small')
	   .setClassToggle('.aventura-tube', 'budapest-off')
    .addTo(scrollMagicController);

			 var scene3 = new ScrollScene({
			   offset: 600
	
  })
  .setClassToggle('.aventura-brand', 'aventura-brand-small')
    .addTo(scrollMagicController);

			 var scene4 = new ScrollScene({
			   offset: 600
	
  })
  .setClassToggle('.main-bar', 'main-bar-moving')
    .addTo(scrollMagicController);

				 var scene5 = new ScrollScene({
			   offset: 600
	
  })
  .setClassToggle('.navbar-fixed-top', 'navbar-fixed-top-moving')
    .addTo(scrollMagicController);

				 var scene6 = new ScrollScene({
			   offset: 600
	
  })
  .setClassToggle('.form-opening', 'form-opening-moving')
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


