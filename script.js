"use strict";
// MENU TOGGLER

const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const navUl = document.querySelector(".nav-ul");
const header = document.querySelector("header");

hamburger.addEventListener("click", function () {
  navUl.classList.toggle("show");
  hamburger.classList.toggle("hide");
});

close.addEventListener("click", function () {
  navUl.classList.toggle("show");
  hamburger.classList.toggle("hide");
});

// Modal Section

const btn = document.querySelector(".searching");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");

btn.addEventListener("click", openPopup);
closeModal.addEventListener("click", closePopup);

function openPopup() {
  modal.style.display = "block";
}
function closePopup() {
  modal.style.display = "none";
}

AOS.init({
  duration: 1000,
});

const nav = document.querySelector(".nav");
const navHeight = nav.getBoundingClientRect().height - 100;

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);
