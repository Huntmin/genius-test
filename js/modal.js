const modal = document.querySelector(".backdrop");
const modalBtnOpen = document.querySelector(".modal-btn-open");
const modalBtnClose = document.querySelector(".modal-btn-close");

const toggLemodal = () => modal.classList.toggle("is-hidden");

modalBtnOpen.addEventListener("click", toggLemodal);
modalBtnClose.addEventListener("click", toggLemodal);
