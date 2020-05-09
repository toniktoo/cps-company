if (document.documentElement.clientWidth < 768) {
  var swiper = new Swiper(".price__nav", {
    breakpoints: {
      // when window width is <= 320px
      500: { slidesPerView: 1, spaceBetween: 10 },
      // when window width is <= 480px
      740: { slidesPerView: 2, spaceBetween: 24 },

      767: { slidesPerView: 3, spaceBetween: 24 },
    },
    pagination: {
      el: ".swiper-pagination-price",
      clickable: true
    }
  });
}
