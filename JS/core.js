

$(document).ready(function(){

$(document).on("scroll", function(){
    if
  ($(document).scrollTop() > 100){
      $("header").addClass("shrink");
      
      
      
    }
    else
    {
        $("header").removeClass("shrink");
        
       
    }
});


$('.carousel').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
        pauseOnHover: false,
        responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 4
        }
    }, {
        breakpoint: 520,
        settings: {
            slidesToShow: 3
        }
    }]
});

});