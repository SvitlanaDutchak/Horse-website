// let sliderBox = document.querySelector(".our-horses__cards");
// let sliderItem = document.querySelectorAll(".our-horses__card");

// let btnLeft = document.querySelector(".slider-button-left");
// let btnRight = document.querySelector(".slider-button-right");

// let statusSlider = document.querySelector(".status-position");

// let cards = [];
// let count = 0;
// let position = 100 / sliderItem.length;

// btnLeft.addEventListener("click", () => {
//     count--;
//     if (count < 0) {
//         count = --sliderItem.length;
//     }
// });

// btnRight.addEventListener("click", () => {
//     count++;
//     if (count > sliderItem.length) {
//         count = 0;
//     }
// });

// setInterval(() => {
//     count++;
//     if (count >= sliderItem.length) {
//         count = 0;
//     }
// }, 3000);

// let widthCard = document.querySelectorAll('.our-horses__card')[0].offsetWidth;


// setInterval(() => {
//     // sliderItem[count].classList.add("display-flex");
//     // if (sliderItem[`${count--}`].classList.contains("display-flex") == true) {
//     //     sliderItem[count--].classList.remove("display-flex");
//     // };

//     if (window.innerWidth < 480) {
//         sliderBox.style.left = `calc(50vw - (${widthCard}px / 2) - ${count * (widthCard + 10)}px)`;
//     }
//     else if (window.innerWidth >= 480 && window.innerWidth < 768) {
//         sliderBox.style.left = `calc(50vw - ${widthCard}px - ${count * (widthCard + 10)}px)`;
//     }
//     else if (window.innerWidth >= 768 && window.innerWidth < 1920) {
//         sliderBox.style.left = `calc(20px - ${count * (widthCard + 10)}px)`;
//     }
//     statusSlider.style.left = `${count * position}%`;
// }, 100)



$(document).ready(function () { //все що буде написано всередині працюватиме після завантаження jquery
    $('.our-horses__cards').slick({
        infinite: true,
        arrows: true,
        dots: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: 'linear',
        mobileFirst: true,
        pauseOnHover: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    variableWidth: true,
                }
            }
        ]
    });
});




$(document).ready(function () { //все що буде написано всередині працюватиме після завантаження jquery
    $('.response__slider').slick({
        infinite: true,
        arrows: true,
        dots: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: 'linear',
        mobileFirst: true,
        pauseOnHover: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    variableWidth: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    variableWidth: true,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    variableWidth: true,
                    autoplay: true,
                }
            }
        ]
    });
});

