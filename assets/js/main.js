
(function ($) {
	"use strict";

    // data - background
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });

    // WOW active
    var wow = new WOW({
        boxClass:     'wow',      
        animateClass: 'animated', 
        offset:       0,         
        mobile:       true,       
        live:         true,  
    });
    wow.init();
    //  End Wow 

    // counter
    $('.counter').counterUp({
            delay: 10,
            time: 3000
    });
    // End Counter

    // Magnific Popup
    $(".video-play").magnificPopup({
        type: 'iframe',
    });
    //   End  Magnific Popup

    // One Page Nav
  var top_offset = $('.header-area').height() - 10;
  $('.main-menu').onePageNav({
    currentClass: 'active',
    scrollOffset: top_offset,
  });




// Sticky Menu
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 300) {
      $(".header-area").removeClass("sticky");
    } else {
      $(".header-area").addClass("sticky");
    }
  });

    // Testimonial Carousel
    $('.testimonial-active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.testimonial-img-active',
    });
    $('.testimonial-img-active').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.testimonial-active',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '0px',
        arrows: false,
        autoplay: true
    });

    //   Brand Carousel
    $('.brands-active').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            }
            },
            {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
            },
            {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
            },
            {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
    });

// Start Slick Nav
   $('#mobile-menu').slicknav({
    prependTo: '.show-mobile-menu',
    allowParentLinks: true
 });
 // End Slick Nav

      
//  Scroll Up
$.scrollUp({
    scrollName: 'scrollUp',
    topDistance: '300',
    topSpeed: 300, 
    animation: 'fade', 
    animationInSpeed: 200, 
    animationOutSpeed: 200, 
    scrollText: '<i class="fa fa-arrow-up"></i>', 
    activeOverlay: false, 
  });
//   Scroll Up

// Smooth Scroll for IE/ EDGE/ SAFARI
$('a').on('click', function(event){
    if (this.hash !==''){
        event.preventDefault();

        var hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 800, function(){
            window.location.hash = hash;
        });
    }
});
// End Smooth Scroll for IE/ EDGE/ SAFARI

})(jQuery);
