import "./styles.css";
import "./products-list-style.css";

import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import productsSlides from "./productsSlides";
import productsList from "./loadProducts";
import fetchData from "./fetchData";
import loadProducts from "./loadProducts";

const navOpen = document.querySelector(".header__menu-open");
const navClose = document.querySelector(".navigation__menu-close");
const nav = document.querySelector("nav");

navOpen.addEventListener("click", () => nav.classList.add("visible"));
navClose.addEventListener("click", () => nav.classList.remove("visible"));

const swiper = new Swiper(".swiper", {
  direction: "horizontal",

  modules: [Navigation, Pagination],
  navigation: {
    nextEl: ".swiper-arrow--next",
    prevEl: ".swiper-arrow--prev",
  },
  pagination: {
    el: ".swiper-pagination",
    // type: "progressbar",
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
});

const swiperWrapper = document.querySelector(".swiper-wrapper");
productsSlides(swiperWrapper);

// display data
// const galleryDiv = document.querySelector(".products__gallery");

// async function loadProducts() {
//   const productsData = await fetchData(17);
//   console.log(productsData);
//   productsList(galleryDiv, productsData);
//   // console.log(prodData);
//   // productsList(galleryDiv, prodData);
// }
loadProducts();
