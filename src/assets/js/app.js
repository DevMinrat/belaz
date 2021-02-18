//= ../../../node_modules/swiper/swiper-bundle.js
//= ../../../node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js

$(function () {
  // Accordeon questions section

  $(".questions__accordeon-content").hide();

  $(".questions__accordeon-title").click(function () {
    $(this).parent().toggleClass("active").siblings().removeClass("active");
    $(".questions__accordeon-content").slideUp();

    if (!$(this).next().is(":visible")) {
      $(this).next().slideDown();
    }
  });

  $(".question__button-more").click(function () {
    $(".hidden-item").toggleClass("accordeon-item--hidden");
    $(".show-more").toggleClass("show-more--hidden");
    $(".show-less").toggleClass("show-less--hidden");
  });

  // to top arrow

  var arrow = $("#top-arrow"),
    introH = $("#intro").innerHeight(),
    scrollOffset = $(window).scrollTop();

  checkScroll(scrollOffset);

  $(window).on("scroll", function () {
    scrollOffset = $(this).scrollTop();

    checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset) {
    if (scrollOffset >= introH) {
      arrow.addClass("top-arrow--visible");
    } else {
      arrow.removeClass("top-arrow--visible");
    }
  }

  //burger-menu

  $(".burger-menu").click(function () {
    $(this).toggleClass("menu-on");
    $("#nav").toggleClass("nav-mobile");
    $(".header-info").toggleClass("info-mobile");
  });

  $(window).scroll(function () {
    $(".burger-menu").removeClass("menu-on");
    $("#nav").removeClass("nav-mobile");
    $(".header-info").removeClass("info-mobile");
  });

  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    var $this = $(this),
      blockId = $this.data("scroll"),
      blockOffset = $(blockId).offset().top;

    $("#nav a").removeClass("active");
    $this.addClass("active");

    $("html, body").animate(
      {
        scrollTop: blockOffset,
      },
      500
    );
  });

  //= components/swiper.js
});
