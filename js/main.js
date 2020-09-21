$(document).ready(function () {

    //lozad
    const observer = lozad('.lozad', {
        rootMargin: '10px 0px' // syntax similar to that of CSS Margin
    });
    observer.observe();
    
    var prevarrow = "<a href='#' class='icon-slider icon-left'><span class='icon icon-chevron-thin-left'></span></a>";
    var nextarrow = "<a href='#' class='icon-slider icon-right'><span class='icon icon-chevron-thin-right'></span></a>";
    //popup overlay
    $('.page__overlay--slider').slick({
        dots: true,
        infinite: !0,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: 1,
        autoplaySpeed: 4000,
        fade: true,
        lazyLoad: 'ondemand',
        prevArrow: prevarrow,
        nextArrow: nextarrow
    });

    $('.page__overlay--close').click(function () {
        $('.page__overlay').fadeOut();
    });

    // slider tagline
    setTimeout(function () {
        $('#tagline-slider').hide().css('visibility', 'visible').fadeIn('fast');
    }, 200);
    $('#tagline-slider').slick({
        infinite: !0,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: 1,
        autoplaySpeed: 2500,
        fade: true,
        lazyLoad: 'ondemand',
        dots: true
    });

    //Tabs to accordion
    var lnk = $(".tabs__content");
    let activeContent = lnk.find("li").hasClass("d_active");
    /* if in tab mode */
    $(".js-tabs-chooser").click(function () {
        lnk.find("> li").hide().fadeOut();
        lnk.find('> li').removeClass("d_active");

        var activeTab = $(this).attr("rel");
        $("#" + activeTab).addClass("d_active");

        let activeTabHeight = lnk.find(".d_active").outerHeight();
        lnk.stop().delay(50).animate({
            height: activeTabHeight
        }, 500, function () {
            // Fade in active tab
            lnk.find(".d_active").delay(50).fadeIn(250);
            $('html, body').animate({
                scrollTop: $(lnk).offset().top - 105
            }, 1500);
        });

        $(".tabs__list").removeClass("active");
        $(this).addClass("active");

    });
    /* if in drawer mode */
    $(".js-acc-chooser").click(function (e) {
        e.preventDefault();
        lnk.find(".d_active").fadeOut();
        lnk.find(".d_active").find("li").removeClass("d_active");
        $(".js-acc-chooser").removeClass("active");
        $(this).addClass("active");
        $(this).next().fadeIn(250);
        $(this).next().addClass("d_active");

        let activeTabHeightAcc = $(this).next().outerHeight() + 500;

        lnk.stop().delay(50).animate({
            height: activeTabHeightAcc
        }, 500, function () {
            $('html, body').animate({
                scrollTop: $(lnk).offset().top + 100
            }, 500);
        });
    });
    
    //tabs business
    var tabsContent = $(".hexa__gate__contents");

    $('[data-type="tabs"]').each(function () {
        var $active, $content, $links = $(this).find('a');
        $active = $($links.filter('[href="' + location.hash + '"]')[0] || $links[0]);
        //$active = $active.parent();
        var $activeNameClass = $active.attr('class');
        $active.addClass($activeNameClass + ' active');
        $content = $($active.attr('href'));
        $active.removeClass($activeNameClass + ' active');
        $links.each(function () {
            $($(this).attr('href')).hide();
        });
        $(this).on('click', 'a', function (e) {
            // Animate height of wrapper to new tab height
            tabsContent.height('auto');
            $(".hexa__gate__contents").height('auto');
            $(".hexa__gate__content").height('auto');
            $('html, body').animate({
                scrollTop: tabsContent.offset().top
            }, 1500);
            $active.removeClass($activeNameClass + ' active');
            $content.hide();

            $active = $(this);
            $content = $($(this).attr('href'));

            $active.addClass($activeNameClass + ' active');
            $content.show();

            e.preventDefault();
        });
    });

    //load jquery first
    // click event and function
    $('.open-popup').on('click', function () {
        // save data-atribute in variable
        var popupData = $(this).data("popup");
        // save data-atribute in variable as class with dot
        var popupClass = $("." + popupData);
        //show popup and bg
        popupClass.fadeIn(200).parent().fadeIn(200);
        // close popup
        $(popupClass).find('.popup-close').on('click', function () {
            //hide popup and bg
            popupClass.fadeOut(200).parent().fadeOut(200);
        });


        $('.popup-bg').click(function (event) {
            //if click event was on popup div- dont hide
            if ($(event.target).closest(popupClass).length) return;
            //if click event was on something else- hide
            popupClass.fadeOut(200).parent().fadeOut(200);
        });

    });

    // scroll
    $(window).scroll(function () {
        var scrollpos = $(window).scrollTop();
        var headerHeight = $('.header').outerHeight();
        var panelHeight = $('#panel').outerHeight();
        // back to top
        if (scrollpos > headerHeight - 50) {
            $(".header").addClass("header--solid");
        } else {
            $(".header").removeClass("header--solid");
        }

    });
    // Scroll to Top
    $('.js-backtop').click(function (e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 'slow');
    });

    // scrollbar
    $('.scrollbar-inner').scrollbar();

    // accordion only
    $(document).ready(function () {
        $('.collapse.in').prev('.accordion__heading').addClass('active');
        $('#accordion, #bs-collapse')
            .on('show.bs.collapse', function (a) {
                $(a.target).prev('.accordion__heading').addClass('active');
            })
            .on('hide.bs.collapse', function (a) {
                $(a.target).prev('.accordion__heading').removeClass('active');
            });
    });

    $(document).ready(function () {
        $('.history__img__title.hidden').fadeIn(1000).removeClass('hidden');
    });
    $(document).ready(function () {
        $('.ceo__img__title.hidden').fadeIn(1000).removeClass('hidden');
    });

    //close popup
    $('.cd-popup').on('click', function (event) {
        if ($(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup')) {
            event.preventDefault();
            $(this).removeClass('is-visible');
            $(".login__input").val("");
        }
    });

    //close popup when clicking the esc keyboard button
    $(document).keyup(function (event) {
        if (event.which == '27') {
            $('.cd-popup').removeClass('is-visible');
            $(".login__input").val("");
        }
    });

    //mobile menu
    $("#overlay-input").click(function () {
        $(".header").toggleClass("swiped");
        if ($(".header").hasClass("swiped")) {
            $("body").css("overflow", "hidden")
        } else {
            $("body").css("overflow", "auto")
        }
    });
    if ($(window).width() < 769) {
        $(".menu__list__parent > a").on("click", function () {
            if ($(this).hasClass("active")) {
                $(this).removeClass("active");
                $(this)
                    .siblings(".content")
                    .slideUp(200);
            } else {
                $(".menu__list__parent > a").removeClass("active");
                $(this).addClass("active");
            }
        });

        $(".zonk").remove();

        let hexaCount = $(".hexa-align").find("li").length;
        if (hexaCount % 2 === 1) {
            $(".hexa-align").find("li:last").before('<li class="hexa__brand__item dummy"></li>');
        }
    }

    //mobile management
    $('.js__directors').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: 0
    });
});

(function () {

    'use strict';

    // define variables
    var items = document.querySelectorAll(".timeline li");

    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
                items[i].classList.add("in-view");
            }
        }
    }

    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);

})();