import "./styles.css";

import { swiper } from "./sliderFeaturedProducts";
import loadProducts from "./loadProducts";

const navOpen = document.querySelector(".header__menu-open");
const navClose = document.querySelector(".navigation__menu-close");
const nav = document.querySelector("nav");
const overlayBg = document.querySelector("#overlay");

navOpen.addEventListener("click", () => {
  nav.classList.add("visible");
  navClose.focus({ focusVisible: false });
});
navClose.addEventListener("click", () => {
  nav.classList.remove("visible");
});
overlayBg.addEventListener("click", (e) => {
  nav.classList.remove("visible");
});
["wheel", "touchmove", "keyup", "keydown"].forEach((e) => {
  nav.addEventListener(e, preventScroll);
  overlayBg.addEventListener(e, preventScroll);
});
function preventScroll(e) {
  // if Tab is pressed the event is not stopped.
  if (e.keyCode === 9) {
    return false;
  }
  e.preventDefault();
  e.stopPropagation();
}

const links = document.querySelectorAll(".nav__link");

if (links.length) {
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      links.forEach((link) => {
        link.classList.remove("active");
      });
      link.classList.add("active");
      nav.classList.remove("visible");
    });
  });
}

loadProducts();
