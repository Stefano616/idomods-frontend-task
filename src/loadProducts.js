import fetchData from "./fetchData";
import loadBanner from "./loadBanner";
import "./products-list-style.css";

// const end = Math.min(loadedCount + productsBatch, products.length);

const gallery = document.querySelector(".products__gallery");
const batchSelect = document.querySelector("select");

let productsBatchSize = batchSelect.value;

batchSelect.addEventListener("change", () => {
  productsBatchSize = batchSelect.value;
  loadProducts();
});

let isBannerActive = false;

export default async function loadProducts() {
  const productsData = await fetchData(productsBatchSize);
  console.log(productsData);
  productsData.map((product, index) => {
    const productDiv = document.createElement("div");
    const productImgDiv = document.createElement("div");
    const productImg = document.createElement("img");
    const productIdDiv = document.createElement("div");
    const productIdTxt = document.createElement("p");

    productDiv.className = "product-list";
    productImgDiv.className = "product-list__img-area";

    productIdDiv.className = "product-list__product-id";
    productIdTxt.className = "product-list__product-id-txt";

    productImg.src = product.image;
    productImg.alt = product.text;
    productImgDiv.appendChild(productImg);

    productIdTxt.textContent = product.id;
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
