// example --  //= ../../../node_modules/slick-carousel/slick/slick.js

$(function () {
  // Accordeon questions section

  $(".questions__accordeon-content").hide();

  $(".questions__accordeon-title").click(function () {
    // $(this).parent().toggleClass("active").siblings().removeClass("active");
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
});
