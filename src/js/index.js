import $ from 'jquery';
import slick from 'slick-carousel/slick/slick.min';

$('.hero__slider').slick({
  prevArrow: '.hero__slider-button--prev',
  nextArrow: '.hero__slider-button--next',
  infinite: false
});

$('.vacancy__slider').slick({
  prevArrow: '.vacancy__slider-button--prev',
  nextArrow: '.vacancy__slider-button--next',
  infinite: false,
  variableWidth: true,
  centerMode: true,
  centerPadding: '165px',
  initialSlide: 1
});
