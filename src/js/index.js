import $ from 'jquery';
import slick from 'slick-carousel/slick/slick.min';

$('.hero__slider').slick({
  prevArrow: '.hero__slider-button--prev',
  nextArrow: '.hero__slider-button--next',
  infinite: false,
  adaptiveHeight: true,
});

$('.vacancy__slider').slick({
  prevArrow: '.vacancy__slider-button--prev',
  nextArrow: '.vacancy__slider-button--next',
  infinite: false,
  variableWidth: true,
  centerMode: true,
  initialSlide: 1,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        centerMode: false,
        initialSlide: 0
      }
    },
    {
      breakpoint: 576,
      settings: {
        centerMode: true,
        infinite: true
      }
    }
  ]
});

$('.photo__btn').on('click', function () {
  $('.photo__item').slideDown();
})
