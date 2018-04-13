var last_known_scroll_position = 0;
var ticking = false;

var siteNavbar = document.querySelector('.navbar');
var contactCard = document.querySelector('#contact-card');

//navbar-fixed-top
function doSomething(scroll_pos) {
  if (window.location.pathname === '/index.html' || window.location.pathname === '/' || window.location.pathname === '/more-landing/index.html' || window.location.pathname === '/more-landing/') {
    if (scroll_pos > 30) {
      siteNavbar.classList.add('navbar-scroll');
      contactCard.classList.add('card-contact-scroll');

    } else {
      siteNavbar.classList.remove('navbar-scroll');
      contactCard.classList.remove('card-contact-scroll');
    }
  }
}

window.addEventListener('scroll', function(e) {
  if (e.view) {
    last_known_scroll_position = e.view.pageYOffset;
  }
  else {
    last_known_scroll_position = window.scrollY;
  }
  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false
    });
  }
  ticking = true;
});
