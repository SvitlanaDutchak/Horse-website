$(function(){
  $('.slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    autoplay: false,
    slidesToScroll: 1,
    cssEase: 'linear',
  });
  // $('.horse-slider').slick({
  //   dots: true,
  //   infinite: false,
  //   arrows:true,
  //   speed: 300,
  //   slidesToShow: 3,
  //   autoplay: false,
  //   slidesToScroll: 1,
  //   cssEase: 'linear',
  // });
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




