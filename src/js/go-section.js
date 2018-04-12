var clickHandler = ('ontouchstart' in document.documentElement ? "touchstart" : "click");
$("a.go-section").bind(clickHandler, function(e) {
  var targetDiv = $(this).attr('href');
  $('html, body').animate({
      scrollTop: $(targetDiv).offset().top - 100
  }, 800);
});
