import "./styles.css";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import productsSlides from "./productsSlides";

const swiper = new Swiper(".swiper", {
  direction: "horizontal",

  modules: [Navigation, Pagination],
  navigation: {
    nextEl: ".swiper-arrow--next",
    prevEl: ".swiper-arrow--prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  slidesPerView: "auto",
  spaceBetween: 16,
  breakpoints: {
    // // when window width is >= 640px
    // 640: {
    //   slidesPerView: 2,
    //   spaceBetween: 24,
    // },
  },
});

const swiperWrapper = document.querySelector(".swiper-wrapper");
productsSlides(swiperWrapper);

const baseUrl = "https://brandstestowy.smallhost.pl/api/random";

async function getProducts() {
  const url = `${baseUrl}?pageNumber=${"10"}&pageSize=${"14"}`;
  const response = await fetch(url);
  const productsData = await response.json();
  console.log(productsData);
  return productsData;
}
// getProducts();

const navOpen = document.querySelector(".header__menu-open");
const navClose = document.querySelector(".navigation__menu-close");
const nav = document.querySelector("nav");

navOpen.addEventListener("click", () => nav.classList.add("visible"));
navClose.addEventListener("click", () => nav.classList.remove("visible"));
