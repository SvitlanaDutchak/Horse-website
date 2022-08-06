$(function(){
  $('.slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    autoplay: false,
    slidesToScroll: 1,
    cssEase: 'linear',
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

const callButton = document.getElementsByClassName('call-button')[0];
const modalWindow = document.getElementsByClassName('modal')[0];
const closeButton = document.getElementsByClassName('close-btn')[0];
const orderCall = document.getElementById('order-call');

callButton.addEventListener('click', function() {
  modalWindow.style.display = "block";
  document.body.style.overflow = 'hidden';
}); 

function closeModal()  {
  modalWindow.style.display = "none";
  document.body.style.overflow = '';
};

closeButton.addEventListener('click', closeModal);
orderCall.addEventListener('click', closeModal);


const modalImage = document.getElementsByClassName('slider__item');



for (let item of modalImage ) {
  item.addEventListener('click', function() {
    document.body.classList.toggle("look-scroll")
    item.classList.toggle("is-active");
  }); 
}



