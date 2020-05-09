if (document.documentElement.clientWidth < 768) {
  var swiper2 = new Swiper(".technics__nav", {
    breakpoints: {
      // when window width is <= 320px
      500: { slidesPerView: 1, spaceBetween: 10 },
      // when window width is <= 480px
      740: { slidesPerView: 2, spaceBetween: 24 },

      767: { slidesPerView: 3, spaceBetween: 24 },
    },
    pagination: {
      el: ".swiper-pagination-technics",
      clickable: true,
    }
  });
}

let technicsList = document.querySelectorAll(".technics__item");

let isCheck = true;

let technicsClose = () => {
  for (let i = 0; i <= technicsList.length - 1; i++) {
    technicsList[i].style.display = "";
  }
  isCheck = true;
};
let technicsOpen = () => {
  for (let i = 0; i <= technicsList.length - 1; i++) {
    technicsList[i].style.display = "block";
  }
  isCheck = false;
};

let btnNext = document.querySelector(".technics__btn-next");
btnNext.addEventListener("click", function() {
  if (isCheck) {
    technicsOpen();
    btnNext.textContent = "Скрыть";
  } else {
    technicsClose();
    btnNext.textContent = "Показать все";
  }
});