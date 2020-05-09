const btnNextRead = document.querySelector(".service__btn-next");
const textSecond = document.querySelector(".service__text-second");
let isNext = true;

btnNextRead.addEventListener("click", function() {
  if (isNext) {
    textSecond.style.display = "block";
    btnNextRead.textContent = "Скрыть"
    isNext = false
  } else {
    textSecond.style.display = "none";
    btnNextRead.textContent = "Читать далее"
    isNext = true
  }
});
