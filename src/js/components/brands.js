if (document.documentElement.clientWidth < 768) {
  var swiper = new Swiper(".brands__nav", {
    breakpoints: {
      // when window width is <= 320px
      500: { slidesPerView: 1, spaceBetween: 10 },
      // when window width is <= 480px
      740: { slidesPerView: 2, spaceBetween: 24 },

      767: { slidesPerView: 3, spaceBetween: 24 },
    },
    pagination: {
      el: ".swiper-pagination-brands",
      clickable: true
    }
  });
}

let brandsList = document.querySelectorAll(".brands__item");

let isCheck = true;

let brandsClose = () => {
  for (let i = 0; i <= brandsList.length - 1; i++) {
    brandsList[i].style.display = "";
  }
  isCheck = true;
};
let brandsOpen = () => {
  for (let i = 0; i <= brandsList.length - 1; i++) {
    brandsList[i].style.display = "block";
  }
  isCheck = false;
};

let btnNext = document.querySelector(".brands__btn-next");
btnNext.addEventListener("click", function() {
  if (isCheck) {
    brandsOpen();
    btnNext.textContent = "Скрыть";
  } else {
    brandsClose();
    btnNext.textContent = "Показать все";
  }
});
