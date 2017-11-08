$(document).ready(function(){
  $('.carousel').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 2000,
    infinite: true,
    speed: 700
  });

$('.carousel-testimonials').slick({
  dots: true,
  arrows: false,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    }
  ]
});
});


$('nav a').on('click', function(event) {
 event.preventDefault();
 var id = $(this).attr('href')
 $('html, body')
   .stop()
   .animate({
     scrollTop: $(id).offset().top
   });
});