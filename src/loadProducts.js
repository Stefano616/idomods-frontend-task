import "./products-list-style.css";
import fetchProducts from "./fetchProducts";
import loadBanner from "./loadBanner";
import loadPopUp from "./loadPopUp";

const observerTarget = document.querySelector("#observer-target");
let observerOptions = {
  // rootMargin: "200px",
};
const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    loadProducts();
  }
}, observerOptions);
observer.observe(observerTarget);

let isLoading = false;
let isBannerActive = false;

const gallery = document.querySelector(".products__gallery");
const batchSelect = document.querySelector("select");

let currentPage = 1;
let productsBatchSize = parseInt(batchSelect.value);

batchSelect.addEventListener("change", () => {
  currentPage = 1;
  productsBatchSize = parseInt(batchSelect.value, 10);
  gallery.textContent = "";
  isBannerActive = false;
  loadProducts();
});

const productPopUpDialog = document.querySelector("#product-pop-up-dialog");

export default async function loadProducts() {
  if (isLoading) {
    return;
  }

  isLoading = true;
  try {
    const productsData = await fetchProducts(productsBatchSize, currentPage);

    productsData.map((product, index) => {
      const productDiv = document.createElement("div");
      const productImgDiv = document.createElement("div");
      const productImg = document.createElement("img");
      const productIdDiv = document.createElement("div");
      const productIdTxt = document.createElement("p");

      productDiv.className = "product-list";
      productDiv.addEventListener("click", () => {
        loadPopUp(product, productPopUpDialog);
        productPopUpDialog.showModal();
      });
      productImgDiv.className = "product-list__img-area";

      productIdDiv.className = "product-list__product-id";
      productIdTxt.className = "product-list__product-id-txt";

      productImg.src = product.image;
      productImg.alt = product.text;
      productImgDiv.appendChild(productImg);

      productIdTxt.textContent = `id: ${product.id}`;
      productIdDiv.appendChild(productIdTxt);

      productDiv.append(productImgDiv, productIdDiv);

      const banner = !isBannerActive && loadBanner();

      if (index === 4 && banner) {
        gallery.append(banner, productDiv);
        isBannerActive = true;
      } else {
        gallery.appendChild(productDiv);
      }
    });
  } catch (err) {
    alert(`Error in loading products:
      ${err}`);
  } finally {
    isLoading = false;
  }
  currentPage++;
}

{
  /* <div class="product-list">
        <div class="product-list__img-area">
          <img src="https://brandstestowy.smallhost.pl/KURTKA_04.png" alt="" />
        </div>
        <div class="product-list__product-id">
          <p class="product-list__product-id-txt">ID: 01</p>
        </div>
      </div>; */
}
