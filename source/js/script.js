let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

let sliderToggle = document.querySelector('.slider-result__range-button');
let sliderImage = document.querySelector('.slider-result__image');

sliderToggle.addEventListener('click', function () {
  if (sliderToggle.classList.contains('slider-result__range-button--start')) {
    sliderToggle.classList.remove('slider-result__range-button--start');
    sliderToggle.classList.add('slider-result__range-button--finish');
    sliderImage.src = 'img/slider/after-mobile.png';
    sliderImage.width = '155';
    sliderImage.height = '232';
    sliderImage.alt = 'after';
    } else if (sliderToggle.classList.contains('slider-result__range-button--finish')) {
      sliderToggle.classList.remove('slider-result__range-button--finish');
      sliderToggle.classList.add('slider-result__range-button--start');
      sliderImage.src = 'img/slider/before-mobile.png';
      sliderImage.width = '280';
      sliderImage.height = '232';
      sliderImage.alt = 'before';
    }
  });
