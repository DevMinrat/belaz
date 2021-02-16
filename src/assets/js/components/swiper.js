const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
