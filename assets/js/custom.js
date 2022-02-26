(function($){
	"use strict";

    // Responsive Menubar Js
    $('.menu').meanmenu();

	// Sticky Menu
	$(window).on('scroll', function() {
        if ($(this).scrollTop() > 10){
        $('.header_area').addClass('menu-shrink animated slideInDown');
        } else {
        $('.header_area').removeClass('menu-shrink animated slideInUp');
        }
    });
    // data-background
    $("[data-background]").each(function(){
        $(this).css("background-image", "url("+ $(this).attr("data-background") + ")")
        });
    // Aos Animation js
    AOS.init({
        offset: 100,
        duration:1000,
      });
    	//   TO-TOP
	$('.to-top').toTop({
		//options with default values
		autohide: true,  //boolean 'true' or 'false'
		offset: 420,     //numeric value (as pixels) for scrolling length from top to hide automatically
		speed: 400,      //numeric value (as mili-seconds) for duration
		position:true,   //boolean 'true' or 'false'. Set this 'false' if you want to add custom position with your own css
		left: 15,       //numeric value (as pixels) for position from right. It will work only if the 'position' is set 'true'
		bottom: 40       //numeric value (as pixels) for position from bottom. It will work only if the 'position' is set 'true'
	});
  $(".hero_slider").slick({
    autoplay:true,
    autoplaySpeed:5000,
    speed:600,
    slidesToShow:1,
    slidesToScroll:1,
    pauseOnHover:false,
    dots:true,
    pauseOnDotsHover:true,
    cssEase:'linear',
   // fade:true,
    draggable:false,
    prevArrow:'<button class="PrevArrow"></button>',
    nextArrow:'<button class="NextArrow"></button>', 
  });
          
  
      // Factory  Image PopUp JS
      $(".factory_item").magnificPopup({
        delegate: 'a',
        type:"image",
        gallery:{
            enabled:true
          },
    });
    // Factory image HOVER EFFECT
  $(".snake").snakeify({
    speed: 200
  });

  var $st = $(".pagination_client");
  var $slickEl = $(".center_client");
  
  $slickEl.on(
    "init reInit afterChange",
    function (event, slick, currentSlide, nextSlide) {
      var i = (currentSlide ? currentSlide : 0) + 1;
      $st.text(i + " of " + slick.slideCount);
    }
  );
  
  $slickEl.slick({
    centerMode: true,
    centerPadding: "200px",
    slidesToShow: 1,
    focusOnSelect: true,
    dots: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1
        }
      }
    ]
  });
  

})(jQuery);