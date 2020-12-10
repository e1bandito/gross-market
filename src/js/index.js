import $ from 'jquery';
import slick from 'slick-carousel/slick/slick.min';
import init from '../blocks/map/map';
import picturefill from 'picturefill';
import svgxuse from 'svgxuse';

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
});

$('.header__phone-btn').on('click', function () {
  $('.header__nav').toggleClass('header__nav--open');
});

$(document).on('scroll', window, function () {
  if ($(window).scrollTop() > 200) {
    $('.header__nav').addClass('header__nav--fixed');
  } else {
    $('.header__nav').removeClass('header__nav--fixed');
  }
});

ymaps.ready(init);



