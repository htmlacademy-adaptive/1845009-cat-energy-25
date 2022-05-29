mapJs = document.querySelector('.map');
mapJs.classList.add('map--js');

let mapImage = document.querySelector('.map__image');
mapImage.classList.remove('map__image--nojs');


// navigation-button
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

// slider

let sliderToggle = document.querySelector('.slider-result__range-button');
let sliderImageBefore = document.querySelector('.slider-result__image-container--before');
let sliderImageAfter = document.querySelector('.slider-result__image-container--after');
let sliderButtons = document.querySelectorAll('.slider-result__label');
let sliderButtonBefore = document.querySelector('.slider-result__label--before');
let sliderButtonAfter = document.querySelector('.slider-result__label--after');

let buttonClickHandler  = function (button) {
  button.addEventListener ('click',  function () {
    if (sliderToggle.classList.contains('slider-result__range-button--start')) {
      if (sliderImageBefore.classList.contains('slider-result__image-container--middle-fat')) {
        sliderImageBefore.classList.remove('slider-result__image-container--middle-fat');
        sliderImageAfter.classList.remove('slider-result__image-container--middle-slim');
        sliderToggle.classList.remove('slider-result__range-button--middle');
        sliderImageBefore.classList.add('slider-result__image-container--opened');
      } else {
        sliderButtonBefore.classList.remove('slider-result__label--active');
        sliderButtonAfter.classList.add('slider-result__label--active');
        sliderToggle.classList.remove('slider-result__range-button--start');
        sliderToggle.classList.add('slider-result__range-button--finish');
        sliderImageBefore.classList.remove('slider-result__image-container--opened');
        sliderImageAfter.classList.add('slider-result__image-container--opened');
      }

      } else if (sliderToggle.classList.contains('slider-result__range-button--finish')) {
        if (sliderImageAfter.classList.contains('slider-result__image-container--middle-slim')) {
          sliderImageBefore.classList.remove('slider-result__image-container--middle-fat');
          sliderImageAfter.classList.remove('slider-result__image-container--middle-slim');
          sliderToggle.classList.remove('slider-result__range-button--middle');
          sliderImageAfter.classList.remove('slider-result__image-container--opened');
          sliderImageAfter.classList.add('slider-result__image-container--opened');
        } else {
          sliderButtonAfter.classList.remove('slider-result__label--active');
          sliderButtonBefore.classList.add('slider-result__label--active');
          sliderToggle.classList.remove('slider-result__range-button--finish');
          sliderToggle.classList.add('slider-result__range-button--start');
          sliderImageAfter.classList.remove('slider-result__image-container--opened');
          sliderImageBefore.classList.add('slider-result__image-container--opened');
        }
      }
  });
}

for (let i = 0; i < sliderButtons.length; i++) {
  buttonClickHandler(sliderButtons[i]);
};

buttonClickHandler(sliderToggle);
