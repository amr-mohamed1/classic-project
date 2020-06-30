$("document").ready(function () {
    "use strict";
    // nice scroll
    $("body").niceScroll({
        cursorcolor: "#1abc9c",
        cursorwidth: "8px",
        cursorborder: "1px solid #1abc9c"
    });
    //header
    $(".header").height($(window).height());
    
    $(window).resize(function () {
        $(".header").height($(window).height());
        $(".header .bx-viewport").each(function () {
            $(this).css('paddingTop', ($(window).height() - $(".header .slider div").height()) / 2 - 30);
        });
    });
    $(".header .navbar .list li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });
    $('.slider').bxSlider({
        pager: false,
        speed: 800
    });
    
    $(".header .bx-viewport").each(function () {
        $(this).css('paddingTop', ($(window).height() - $(".header .slider div").height()) / 2 - 28);
    });

    //start services
    
    $(".nav-About").click(function () {
        $("html ,body").animate({
            scrollTop: $(".services").offset().top - 50
        }, 2000);
    });
    
        $(".nav-Portofolio").click(function () {
        $("html ,body").animate({
            scrollTop: $(".proto").offset().top - 20
        }, 2000);
    });
    
         $(".nav-Testimonials").click(function () {
        $("html ,body").animate({
            scrollTop: $(".testi").offset().top - 150
        }, 2000);
    });
             $(".nav-Contact").click(function () {
        $("html ,body").animate({
            scrollTop: $(".our-team").offset().top +40
        }, 2000);
    });
    // testimonial
    
    (function autoslider() {

        $(".testi .active").each(function () {
            if (!$(this).is(":last-child")) {
                $(this).delay(2000).fadeOut(1000, function () { $(this).removeClass("active").next().addClass("active").fadeIn();
                    autoslider();
                                                              });
            } else {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass("active");
                    $(".testi .client").eq(0).addClass("active").fadeIn();
                    autoslider();
                });
            }
        });
    }());
        var mixer = mixitup(".gallary");
    
    // projects
    
$(".proto .list li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
})
    
    
    
    $(".scroll").click(function() {
  window.scrollTo({ top: 0, behavior: 'smooth'});
});
$(window).scroll(function() {
    if ($(this).scrollTop() >= 600) {
        $('.scroll').fadeIn(200);
    } else {
        $('.scroll').fadeOut(200);
    }
});
});