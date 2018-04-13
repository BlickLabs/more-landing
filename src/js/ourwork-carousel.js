var ourworkCarousel = $('.ourwork-carousel');

ourworkCarousel.owlCarousel ({
  loop: false,
  nav: true,
  navText: ['<img class="ourwork-navigation-arrows" src="img/icons/arrow-left.png" />', '<img class="ourwork-navigation-arrows" src="img/icons/arrow-right.png" />'],
  dots: true,
  margin: 36,
  responsive:{
    0: {
      items: 1,
      loop: true,
      center: true,
      autoWidth: true,
    },
    600: {
      items: 1,
      loop: true,
      center: true,
      autoWidth: true,
    },
    1000: {
      items: 3,
    }
  }
});

ourworkCarousel.each(function(index) {
  $(this).find('.owl-nav, .owl-dots').wrapAll("<div class='ourwork-navigation-controls'></div>");
});
