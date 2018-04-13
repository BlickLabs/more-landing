var coverCardsCarousel = $('.cover-cards-carousel');

coverCardsCarousel.owlCarousel ({
  loop: false,
  nav: true,
  navText: ['<img class="ourwork-navigation-arrows" src="img/icons/arrow-left.png" />', '<img class="ourwork-navigation-arrows" src="img/icons/arrow-right.png" />'],
  dots: true,
  margin: 40,
  responsive:{
    0:{
      items:1,
      center: true,
      autoWidth: true
    },
    600:{
      items:1,
      center: true,
      autoWidth: true
    },
    1000:{
      items:1,
    }
  }
});

coverCardsCarousel.each(function(index) {
  $(this).find('.owl-nav, .owl-dots').wrapAll("<div class='cover-cards-navigation-controls'></div>");
});