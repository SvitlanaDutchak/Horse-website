$(function(){
  $('.slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    autoplay: false,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          arrows: false
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
  });
  

})
