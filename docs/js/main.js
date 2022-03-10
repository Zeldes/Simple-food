$(function(){
  
  $('.menu__btn, .menu__list, .contact--menu a').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active')
    $('.contact--menu').toggleClass('contact--menu--active')
    $('.menu__btn').toggleClass('menu__btn--active')
  });

  $('.catalog__filter-btn').on('click', function(){
    $('.catalog__filters').toggleClass('catalog__filters--active');
    $('.catalog__filter-btn').toggleClass('catalog__filter-btn--active')
  });

  var mixer = mixitup('.product');

  const nav = $('.header');  
  $(window).scroll(function() {     
    if ($(window).scrollTop() > 40) {
       nav.addClass('header__show');
     } 
     else {
       nav.removeClass('header__show');
     }
   });


  $('.menu__list-link').each(function() {
    if (this.href == window.location.href) {
      $(this).addClass('menu__list-link--active');
    }
  });


  $('.select-style').styler();

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to)
    },
  })

  if (window.matchMedia("screen and (max-width: 576px)").matches) {
    $('.best__list').addClass('best__list--slider');
    } else {
    }

  $('.slider__inner').slick({
    prevArrow: '<button type="button" class="slider__btn--prev slick-prev"><img src="images/icons/prevArrow.svg"></button>',
    nextArrow: '<button type="button" class="slider__btn--next slick-next"><img src="images/icons/nextArrow.svg"></button>',
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          dots: false,
          fade: false,
          autoplay: false
        }
    
      }]
  });

  $('.best__list--slider').slick({
    dots: true,
    arrows: false,
    fade: false,
    autoplay: false,
    infinite: true
  });

});