import $ from 'jquery';
import slick from 'slick-carousel/slick/slick.min';

$('.hero__slider').slick({
  prevArrow: '.hero__slider-button--prev',
  nextArrow: '.hero__slider-button--next',
  infinite: false
});

