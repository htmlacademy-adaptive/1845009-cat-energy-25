// slider

const sliderElement = document.querySelector('.slider-result__range-bar');
const imageBeforeElement = document.querySelector('.slider-result__image-container--before');
const imageAfterElement = document.querySelector('.slider-result__image-container--after');
const buttonBeforeElement = document.querySelector('.slider-result__label--before');
const buttonAfterElement = document.querySelector('.slider-result__label--after');
const mobileButtonElement = document.querySelector('.slider-result__mobile-button');
const mobileInnerButtonElement = document.querySelector('.slider-result__mobile-inner-button');


if (window.innerWidth > 767) {
  imageBeforeElement.style.width = '50%';
}

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 50,
  step: 1
})

sliderElement.noUiSlider.on('update', () => {
  if (window.innerWidth > 767) {
    imageBeforeElement.style.width = `${50 + (50 - sliderElement.noUiSlider.get())}%`;
  if (sliderElement.noUiSlider.get() == 100) {
    buttonBeforeElement.classList.remove('slider-result__label--active');
    buttonAfterElement.classList.add('slider-result__label--active');
  } else if (sliderElement.noUiSlider.get() == 0) {
    buttonBeforeElement.classList.add('slider-result__label--active');
    buttonAfterElement.classList.remove('slider-result__label--active');
  }
  }
})

mobileButtonElement.addEventListener('click', () => {
  if (window.innerWidth < 768) {
    imageBeforeElement.classList.toggle('slider-result__image-container--mobile-closed');
    imageAfterElement.classList.toggle('slider-result__image-container--mobile-closed');
    mobileInnerButtonElement.classList.toggle('slider-result__mobile-inner-button--after');
  }
})

buttonBeforeElement.addEventListener('click', () => {
  sliderElement.noUiSlider.set(0);
  buttonBeforeElement.classList.add('slider-result__label--active');
  buttonAfterElement.classList.remove('slider-result__label--active');
  if (window.innerWidth < 768) {
    imageBeforeElement.classList.toggle('slider-result__image-container--mobile-closed');
    imageAfterElement.classList.toggle('slider-result__image-container--mobile-closed');
    mobileInnerButtonElement.classList.toggle('slider-result__mobile-inner-button--after');
  }
})

buttonAfterElement.addEventListener('click', () => {
  sliderElement.noUiSlider.set(100);
  buttonBeforeElement.classList.remove('slider-result__label--active');
  buttonAfterElement.classList.add('slider-result__label--active');
  if (window.innerWidth < 768) {
    imageBeforeElement.classList.toggle('slider-result__image-container--mobile-closed');
    imageAfterElement.classList.toggle('slider-result__image-container--mobile-closed');
    mobileInnerButtonElement.classList.toggle('slider-result__mobile-inner-button--after');
  }
})
