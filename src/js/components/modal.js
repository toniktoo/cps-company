const btnCall = document.querySelector(".header__btn-call");
const btnChat = document.querySelector(".header__btn-chat");
const btnMenu = document.querySelector(".btn-circle--back-menu");
const btnCallMenu = document.querySelector(".menu-footer__btn-call");
const btnChatMenu = document.querySelector(".menu-footer__btn-chat");
const btnExitChat = document.querySelector(".modal__btn-exit--click-chat");
const btnExitCall = document.querySelector(".modal__btn-exit--clicked-call");
const btnExitMenu = document.querySelector(".menu__btn-exit--clicked-exit");
const modalCall = document.querySelector(".call");
const modalFeedback = document.querySelector(".feedback");
const menu = document.querySelector(".menu");
const hidden = document.querySelector(".hidden-effect");
const bodyContainer = document.querySelector(".body-container");

window.onclick = function(evt) {
  if (evt.target == hidden || evt.target == btnExitMenu) {
    bodyContainer.style.position = "static";
    menu.classList.remove("menu--open-on");
    modalCall.classList.remove("modal--open-on");
    modalFeedback.classList.remove("modal--open-on");
    hidden.classList.remove("hidden-effect--mod-active");
    hidden.classList.add("hidden-effect--mod-disabled");
  }
};

btnChat.addEventListener("click", function() {
  bodyContainer.style.position = "fixed";
  modalFeedback.classList.add("modal--open-on");
  hidden.classList.remove("hidden-effect--mod-disabled");
  hidden.classList.add("hidden-effect--mod-active");
});
btnCall.addEventListener("click", function() {
  bodyContainer.style.position = "fixed";
  modalCall.classList.add("modal--open-on");
  hidden.classList.remove("hidden-effect--mod-disabled");
  hidden.classList.add("hidden-effect--mod-active");
});
btnExitChat.addEventListener("click", function() {
  bodyContainer.style.position = "static";
  modalFeedback.classList.remove("modal--open-on");
  hidden.classList.remove("hidden-effect--mod-active");
  hidden.classList.add("hidden-effect--mod-disabled");
});
btnExitCall.addEventListener("click", function() {
  bodyContainer.style.position = "static";
  modalCall.classList.remove("modal--open-on");
  hidden.classList.remove("hidden-effect--mod-active");
  hidden.classList.add("hidden-effect--mod-disabled");
});

btnMenu.addEventListener("click", function() {
  menu.classList.add("menu--open-on");
  hidden.classList.remove("hidden-effect--mod-disabled");
  hidden.classList.add("hidden-effect--mod-active");
  bodyContainer.style.position = "fixed";
});

btnCallMenu.addEventListener("click", function() {
  bodyContainer.style.position = "fixed";
  menu.classList.remove("menu--open-on");
  modalCall.classList.add("modal--open-on");
  hidden.classList.remove("hidden-effect--mod-disabled");
  hidden.classList.add("hidden-effect--mod-active");
});
btnChatMenu.addEventListener("click", function() {
  bodyContainer.style.position = "fixed";
  menu.classList.remove("menu--open-on");
  modalFeedback.classList.add("modal--open-on");
  hidden.classList.remove("hidden-effect--mod-disabled");
  hidden.classList.add("hidden-effect--mod-active");
});


