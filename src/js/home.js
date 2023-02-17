var swiper = new Swiper(".mySwiper3", {
  slidesPerView: "auto",
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  breakpoints: {
    768: {
      spaceBetween: 90,
    },
    300: {
      spaceBetween: 30,
    },
  },
});
