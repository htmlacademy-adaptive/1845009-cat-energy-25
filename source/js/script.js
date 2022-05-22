
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
let sliderImageBefore = document.querySelector('.slider-result__image--before');
let sliderImageAfter = document.querySelector('.slider-result__image--after');
let sliderButtons = document.querySelectorAll('.slider-result__label');
let sliderButtonBefore = document.querySelector('.slider-result__label--before');
let sliderButtonAfter = document.querySelector('.slider-result__label--after');

let buttonClickHandler  = function (button) {
  button.addEventListener ('click',  function () {
    if (sliderToggle.classList.contains('slider-result__range-button--start')) {
      sliderButtonBefore.classList.remove('slider-result__label--active');
      sliderButtonAfter.classList.add('slider-result__label--active');
      sliderToggle.classList.remove('slider-result__range-button--start');
      sliderToggle.classList.add('slider-result__range-button--finish');
      sliderImageBefore.classList.remove('slider-result__image--opened');
      sliderImageAfter.classList.add('slider-result__image--opened');
      } else if (sliderToggle.classList.contains('slider-result__range-button--finish')) {
        sliderButtonAfter.classList.remove('slider-result__label--active');
        sliderButtonBefore.classList.add('slider-result__label--active');
        sliderToggle.classList.remove('slider-result__range-button--finish');
        sliderToggle.classList.add('slider-result__range-button--start');
        sliderImageAfter.classList.remove('slider-result__image--opened');
        sliderImageBefore.classList.add('slider-result__image--opened');
      }
  });
}

for (let i = 0; i < sliderButtons.length; i++) {
  buttonClickHandler(sliderButtons[i]);
};

buttonClickHandler(sliderToggle);

/*
sliderButton.addEventListener ('click', function () {
  if (sliderToggle.classList.contains('slider-result__range-button--start')) {
    sliderToggle.classList.remove('slider-result__range-button--start');
    sliderToggle.classList.add('slider-result__range-button--finish');
    sliderImageBefore.classList.remove('slider-result__image--opened');
    sliderImageAfter.classList.add('slider-result__image--opened');
    } else if (sliderToggle.classList.contains('slider-result__range-button--finish')) {
      sliderToggle.classList.remove('slider-result__range-button--finish');
      sliderToggle.classList.add('slider-result__range-button--start');
      sliderImageAfter.classList.remove('slider-result__image--opened');
      sliderImageBefore.classList.add('slider-result__image--opened');
    }
  });
*/
