import "./styles.css";
import "./products-list-style.css";

import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import productsSlides from "./productsSlides";
import loadProducts from "./loadProducts";

const navOpen = document.querySelector(".header__menu-open");
const navClose = document.querySelector(".navigation__menu-close");
const nav = document.querySelector("nav");
const overlayBg = document.querySelector("#overlay");

navOpen.addEventListener("click", () => nav.classList.add("visible"));
navClose.addEventListener("click", () => nav.classList.remove("visible"));
overlayBg.addEventListener("click", () => nav.classList.remove("visible"));

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

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  rewind: true,
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: ".swiper-arrow--next",
    prevEl: ".swiper-arrow--prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "custom",
    renderCustom: (swiper, current, total) => {
      const ratio = current / total;
      const progressBarStyle =
        "style='transform: translate3d(0px, 0px, 0px) scaleX(" +
        ratio +
        ") scaleY(1); transition-duration: 300ms;'";
      const progressBar =
        "<span class='swiper-pagination-progressbar-fill' " +
        progressBarStyle +
        "></span>";

      let progressBarContainer =
        "<div class='swiper-pagination-progressbar' style='height: 1px; top: 6px; width: 100%;'>";
      progressBarContainer += progressBar;
      progressBarContainer += "</span></div>";

      return progressBarContainer;
    },
  },
  slidesPerView: "auto",
  spaceBetween: 16,
  breakpoints: {
    940: {
      slidesPerView: "auto",
      spaceBetween: 165,
    },
  },
});

const swiperWrapper = document.querySelector(".swiper-wrapper");
productsSlides(swiperWrapper);
loadProducts();
