function doSomething(a){"/index.html"!==window.location.pathname&&"/"!==window.location.pathname&&"/more-landing/index.html"!==window.location.pathname&&"/more-landing/"!==window.location.pathname||(a>30?(siteNavbar.classList.add("navbar-scroll"),contactCard.classList.add("card-contact-scroll")):(siteNavbar.classList.remove("navbar-scroll"),contactCard.classList.remove("card-contact-scroll")))}!function(){$.validator.setDefaults({invalidHandler:function(a,o){var n=$(this);n.find(".form-message").removeClass(n.hasClass("success")?"success":"error").html("")},submitHandler:function(a){var o=$(a).serialize(),n=$(a).find("select, input, textarea, button").not("[disabled]"),t=$(a).find(".form-message"),s=$('<i class="fa fa-check-circle"></i><span>Mensaje enviado exitosamente</span>'),r=$('<i class="fa fa-times-circle"></i><span>Ocurrió un error</span>'),e=function(a){var o=a?s:r;n.removeAttr("disabled"),t.removeClass(a?"error":"success"),t.addClass(a?"success":"error"),t.html(o)};n.attr("disabled","disabled"),t.html(""),$(a).find(".button-wrapper .loader").length||$(a).find(".button-wrapper").addClass("disabled"),$.ajax({url:$(a).attr("action"),method:"POST",data:o}).done(function(o){e(1===parseInt(o)),a.reset()}).fail(function(){e(!1)}).always(function(){n.removeAttr("disabled"),$(a).find(".button-wrapper").removeClass("disabled")})}})}();var clickHandler="ontouchstart"in document.documentElement?"touchstart":"click";$("a.go-section").bind(clickHandler,function(a){var o=$(this).attr("href");$("html, body").animate({scrollTop:$(o).offset().top-100},800)});var last_known_scroll_position=0,ticking=!1,siteNavbar=document.querySelector(".navbar"),contactCard=document.querySelector(".cover-card-contact");window.addEventListener("scroll",function(a){last_known_scroll_position=a.view?a.view.pageYOffset:window.scrollY,ticking||window.requestAnimationFrame(function(){doSomething(last_known_scroll_position),ticking=!1}),ticking=!0});var ourworkCarousel=$(".ourwork-carousel");ourworkCarousel.owlCarousel({loop:!1,responsiveClass:!0,nav:!0,navText:['<img class="ourwork-navigation-arrows" src="img/icons/arrow-left.png" />','<img class="ourwork-navigation-arrows" src="img/icons/arrow-right.png" />'],dots:!0,margin:36,responsive:{0:{items:3},600:{items:3},1e3:{items:3}}}),ourworkCarousel.each(function(a){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='ourwork-navigation-controls'></div>")});