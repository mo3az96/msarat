$(window).on('load', function () {
    $('.pre-loader').fadeOut("500", function () {
        $(this).remove();
        $("body").removeClass("overflow");
    });
});
$(document).ready(function () {

    ////menu////
    if ($(window).width() <= 991) {
        $('.mo-menu-icon').click(function () {
            $("nav").fadeIn(400);
            $(".nav-cont").addClass("nav-in");
            $("body").toggleClass("overflow");
            $('.lang').addClass("lang-in");
        });

        $('nav').click(function () {
            $("nav").fadeOut(400);
            $(".nav-cont").removeClass("nav-in");
            $(".lang").removeClass("lang-in");
            $("body").toggleClass("overflow");
        });
        $('.nav-cont').click(function (e) {
            e.stopPropagation();
        });
        $('.mo-menu-close').click(function () {
            $("nav").fadeOut(400);
            $(".nav-cont").removeClass("nav-in");
            $("body").toggleClass("overflow");
        });



        $('.mo-search-icon').click(function () {
            $(".search-form").fadeIn(400);
            $("body").addClass("overflow");
            $(".search-cont").addClass("open");
            $('.search-input').focus();
        });
        $('.search-form').click(function () {
            $("body").removeClass("overflow");
            $(".search-form").fadeOut(500);
            $(".search-cont").removeClass("open");
            $('.search-input').focusOut();
        });
        $('.search-cont').click(function (e) {
            e.stopPropagation();
        });
    }
    ///////// **footer ** /////////
    if ($(window).width() <= 991) {
        $(".drop-li .nav-a").addClass("mo-accordion");
        $(".drop-li .sub-ul").addClass("mo-panel");
    }
    if ($(window).width() <= 767) {
        $(".nav-foot-header").addClass("mo-accordion");
        $(".nav-foot").addClass("mo-panel");
    }
    ///////// **collapse** /////////
    $('.mo-accordion').click(function () {
        var x = $(this).siblings().prop('scrollHeight') + 12 + "px";
        $(".mo-accordion").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('max-height') == '0px') {
            $(this).siblings().css('max-height', x);
            $(this).siblings('.nav-foot').css('padding-top', "15px");
        } else {
            $(this).siblings().css('max-height', '0');
            $(this).siblings('.nav-foot').css('padding-top', "0");
        }

        $(".mo-accordion").not(this).siblings().css('max-height', '0');
        $(".mo-accordion").not(this).siblings('.nav-foot').css('padding-top', "0");
    })



    /////////Main Slider/////////
    $('.main-slider').owlCarousel({
        items: 1,
        margin: 30,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        dots: true,
        nav: true,
        navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
    });
    /////////products Slider/////////
    $('.products-slider').owlCarousel({
        margin: 31,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        dots: true,
        nav: true,
        navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
            },
        }
    });
    /////////cats Slider/////////
    if ($(window).width() <= 991) {
        $('.cats').addClass("owl-carousel")
        $('.cats').owlCarousel({
            margin: 26,
            rtl: document.dir == 'rtl' ? true : false,
            loop: true,
            dots: true,
            nav: false,
            responsive: {
                0: {
                    items: 1,
                },
                500: {
                    items: 3,
                },
                992: {
                    items: 4,
                },
            }
        });
    }
    /////////Brands Slider/////////
    $('.brands-slider').owlCarousel({
        items: 7,
        margin: 31,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        rewind: true,
        autoplay: false,
        nav: true,
        navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
        dots: true,
        responsive: {
            0: {
                items: 2,
                margin: 10,
            },
            500: {
                items: 5,
            },
            992: {
                items: 6,
            },
            1200: {
                items: 7
            }
        }
    });

});