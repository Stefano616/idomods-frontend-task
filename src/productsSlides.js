import "./products-slides-style.css";
import blueJacketImg from "../assets/dark blue alpine climbing jacket.png";
import greyJacketImg from "../assets/grey alpine climbing jacket.png";
import helmetImg from "../assets/bright orange helmet.png";
import greenJacketImg from "../assets/green alpine jacket.png";

const productsArr = [
  {
    src: blueJacketImg,
    alt: "dark blue alpine climbing jacket",
    label: "bestseller",
  },
  { src: helmetImg, alt: "orange helmet for alpine TOUNDRA", label: "limited" },
  { src: greenJacketImg, alt: "green alpine jacket", label: "none" },
  {
    src: greyJacketImg,
    alt: "grey alpine climbing jacket",
    label: "bestseller",
  },
  {
    src: blueJacketImg,
    alt: "dark blue alpine climbing jacket",
    label: "bestseller",
  },
  { src: helmetImg, alt: "bright orange helmet", label: "limited" },
  { src: greenJacketImg, alt: "green alpine jacket", label: "none" },
  {
    src: greyJacketImg,
    alt: "grey alpine climbing jacket",
    label: "bestseller",
  },
];

export default function productsSlides(swiperWrapper) {
  productsArr.map((product) => {
    const productDiv = document.createElement("div");

    const productFrDiv = document.createElement("div");
    const productFrLblDiv = document.createElement("div");
    const productFrLblTxt = document.createElement("p");
    const productFrFavDiv = document.createElement("div");
    const productFrFavIcon = document.createElement("i");
    const productFrImgDiv = document.createElement("div");
    const productFrImg = document.createElement("img");

    const productTxtDiv = document.createElement("div");
    const productTxtTitle = document.createElement("p");
    const productTxtPrice = document.createElement("p");

    // Product slide

    productDiv.classList.add("swiper-slide", "product");

    // Product label
    productFrDiv.className = "product__frame";
    productFrLblDiv.className = "product__frame__label";
    // -- Check the product to add the proper label description and color
    if (product.label === "limited") {
      productFrLblDiv.classList.add("is-limited");
      productFrLblTxt.textContent = "limited edition";
    } else if (product.label === "bestseller") {
      productFrLblTxt.textContent = "bestseller";
    } else {
      productFrLblDiv.classList.add("is-not-labelled");
    }
    productFrLblDiv.appendChild(productFrLblTxt);
    productFrDiv.appendChild(productFrLblDiv);

    // Product fav icon
    // Fav icon SVG
    let favIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    let pathEmpty = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path",
    );
    favIcon.setAttribute("width", "24");
    favIcon.setAttribute("height", "24");
    favIcon.setAttribute("fill", "none");
    favIcon.setAttribute("viewBox", "0 0 24 24");
    pathEmpty.setAttribute(
      "d",
      "M12 20.3252L10.8963 19.3329C9.23858 17.8291 7.86775 16.5369 6.78375 15.4562C5.69975 14.3754 4.84075 13.4134 4.20675 12.5704C3.57275 11.7276 3.12983 10.9587 2.878 10.2637C2.626 9.56885 2.5 8.86377 2.5 8.14844C2.5 6.72927 2.9785 5.5411 3.9355 4.58394C4.89267 3.62694 6.08083 3.14844 7.5 3.14844C8.373 3.14844 9.198 3.3526 9.975 3.76094C10.752 4.16927 11.427 4.75485 12 5.51769C12.573 4.75485 13.248 4.16927 14.025 3.76094C14.802 3.3526 15.627 3.14844 16.5 3.14844C17.9192 3.14844 19.1073 3.62694 20.0645 4.58394C21.0215 5.5411 21.5 6.72927 21.5 8.14844C21.5 8.86377 21.374 9.56885 21.122 10.2637C20.8702 10.9587 20.4272 11.7276 19.7932 12.5704C19.1593 13.4134 18.3018 14.3754 17.221 15.4562C16.1403 16.5369 14.7679 17.8291 13.1038 19.3329L12 20.3252ZM12 18.2984C13.6 16.8588 14.9167 15.6248 15.95 14.5964C16.9833 13.5683 17.8 12.675 18.4 11.9167C19 11.1584 19.4167 10.4849 19.65 9.89644C19.8833 9.3081 20 8.72544 20 8.14844C20 7.14844 19.6667 6.3151 19 5.64844C18.3333 4.98177 17.5 4.64844 16.5 4.64844C15.7103 4.64844 14.9805 4.87244 14.3105 5.32044C13.6407 5.7686 13.1102 6.39202 12.7192 7.19069H11.2808C10.8833 6.38552 10.3512 5.76052 9.6845 5.31569C9.01783 4.87085 8.28967 4.64844 7.5 4.64844C6.50633 4.64844 5.67458 4.98177 5.00475 5.64844C4.33492 6.3151 4 7.14844 4 8.14844C4 8.72544 4.11667 9.3081 4.35 9.89644C4.58333 10.4849 5 11.1584 5.6 11.9167C6.2 12.675 7.01667 13.5667 8.05 14.5917C9.08333 15.6167 10.4 16.8523 12 18.2984Z",
    );
    pathEmpty.setAttribute("fill", "#1D1D1D");
    favIcon.appendChild(pathEmpty);
    productFrFavDiv.className = "product__frame__favorite";
    productFrFavIcon.className = "fav-icon";
    productFrFavIcon.appendChild(favIcon);
    // -- Toggle fav icon
    productFrFavIcon.addEventListener("click", () => {
      productFrFavIcon.classList.toggle("is-favorite");
    });

    productFrFavDiv.appendChild(productFrFavIcon);
    productFrDiv.appendChild(productFrFavDiv);

    // Product image
    productFrImgDiv.className = "product__frame__img-area";
    productFrImg.src = product.src;
    productFrImg.alt = product.alt;
    productFrImgDiv.appendChild(productFrImg);
    productFrDiv.appendChild(productFrImgDiv);

    // Product title and price
    productTxtDiv.className = "product__text";
    productTxtTitle.className = "product__text__title";
    productTxtTitle.textContent = product.alt;
    productTxtPrice.className = "product__text__price";
    productTxtPrice.textContent = "€300,00 EUR";
    productTxtDiv.append(productTxtTitle, productTxtPrice);

    productDiv.append(productFrDiv, productTxtDiv);

    swiperWrapper.appendChild(productDiv);
  });
}

{
  /* <div class="swiper-slide product">
  <div class="product__frame">
    <div class="product__frame__label">
      <p class="label-description">bestseller</p>
    </div>
    <div class="product__frame__favorite">
      <i class="fav-icon">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 20.3252L10.8963 19.3329C9.23858 17.8291 7.86775 16.5369 6.78375 15.4562C5.69975 14.3754 4.84075 13.4134 4.20675 12.5704C3.57275 11.7276 3.12983 10.9587 2.878 10.2637C2.626 9.56885 2.5 8.86377 2.5 8.14844C2.5 6.72927 2.9785 5.5411 3.9355 4.58394C4.89267 3.62694 6.08083 3.14844 7.5 3.14844C8.373 3.14844 9.198 3.3526 9.975 3.76094C10.752 4.16927 11.427 4.75485 12 5.51769C12.573 4.75485 13.248 4.16927 14.025 3.76094C14.802 3.3526 15.627 3.14844 16.5 3.14844C17.9192 3.14844 19.1073 3.62694 20.0645 4.58394C21.0215 5.5411 21.5 6.72927 21.5 8.14844C21.5 8.86377 21.374 9.56885 21.122 10.2637C20.8702 10.9587 20.4272 11.7276 19.7932 12.5704C19.1593 13.4134 18.3018 14.3754 17.221 15.4562C16.1403 16.5369 14.7679 17.8291 13.1038 19.3329L12 20.3252ZM12 18.2984C13.6 16.8588 14.9167 15.6248 15.95 14.5964C16.9833 13.5683 17.8 12.675 18.4 11.9167C19 11.1584 19.4167 10.4849 19.65 9.89644C19.8833 9.3081 20 8.72544 20 8.14844C20 7.14844 19.6667 6.3151 19 5.64844C18.3333 4.98177 17.5 4.64844 16.5 4.64844C15.7103 4.64844 14.9805 4.87244 14.3105 5.32044C13.6407 5.7686 13.1102 6.39202 12.7192 7.19069H11.2808C10.8833 6.38552 10.3512 5.76052 9.6845 5.31569C9.01783 4.87085 8.28967 4.64844 7.5 4.64844C6.50633 4.64844 5.67458 4.98177 5.00475 5.64844C4.33492 6.3151 4 7.14844 4 8.14844C4 8.72544 4.11667 9.3081 4.35 9.89644C4.58333 10.4849 5 11.1584 5.6 11.9167C6.2 12.675 7.01667 13.5667 8.05 14.5917C9.08333 15.6167 10.4 16.8523 12 18.2984Z"
            fill="#1D1D1D"
          />
        </svg>
      </i>
    </div>
    <div class="product__frame__img-area">
      <img src="#" alt="-" />
    </div>
  </div>
  <div class="product__text">
    <p class="product__text__title">Dark blue alpine climbing jacket</p>
    <p class="product__text__price">€300,00 EUR</p>
  </div>
</div>; */
}
