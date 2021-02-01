var rooms = $(".rooms__slider");

rooms.slick({
  dots: true,
  arrows: false,
});

$("#rooms-arrow-prev").on("click", function (event) {
  event.preventDefault();

  rooms.slick("slickPrev");
});

$("#rooms-arrow-next").on("click", function (event) {
  event.preventDefault();

  rooms.slick("slickNext");
});

var reviews = $(".reviews__slider");

reviews.slick({
  dots: true,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 2,

  variableWidth: true,
});

$("#reviews-arrow-prev").on("click", function (event) {
  event.preventDefault();

  reviews.slick("slickPrev");
});

$("#reviews-arrow-next").on("click", function (event) {
  event.preventDefault();

  reviews.slick("slickNext");
});
