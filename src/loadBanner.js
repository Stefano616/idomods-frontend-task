import "./banner-style.css";

export default function loadBanner() {
  const bannerDiv = document.createElement("div");

  bannerDiv.classList.add("product-list--banner");
  const bannerDivContent = document.createElement("div");
  bannerDivContent.className = "product-list__banner-content";

  const bannerDivInfo = document.createElement("div");
  bannerDivInfo.className = "product-list__banner-content-info";

  const bannerInfoBrandTxt = document.createElement("p");
  bannerInfoBrandTxt.className = "product-list__banner-brand";
  bannerInfoBrandTxt.textContent = "Forma’sint.";

  const bannerInfoTitleTxt = document.createElement("p");
  bannerInfoTitleTxt.className = "product-list__banner-title";
  bannerInfoTitleTxt.textContent = "You'll look and fell like the champion.";

  bannerDivInfo.append(bannerInfoBrandTxt, bannerInfoTitleTxt);

  const bannerBtn = document.createElement("button");
  bannerBtn.className = "product-list__banner-btn";
  bannerBtn.textContent = "check this out";

  let bannerIcon = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg",
  );
  let iconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
  bannerIcon.setAttribute("width", "24");
  bannerIcon.setAttribute("height", "24");
  bannerIcon.setAttribute("fill", "none");
  bannerIcon.setAttribute("viewBox", "0 0 24 24");
  iconPath.setAttribute(
    "d",
    "M12.9462 12.0022L8.34619 7.40219L9.39994 6.34843L15.0537 12.0022L9.39994 17.6559L8.34619 16.6022L12.9462 12.0022Z",
  );
  iconPath.setAttribute("fill", "#1D1D1D");
  bannerIcon.appendChild(iconPath);

  bannerBtn.appendChild(bannerIcon);

  bannerDivContent.append(bannerDivInfo, bannerBtn);
  bannerDiv.appendChild(bannerDivContent);

  return bannerDiv;
}

{
  /* <div class="product-list product-list--banner">
  <div class="product-list__banner-content">
        <div class="product-list__banner-content-info">
            <p class="product-list__banner-brand">Forma’sint.</p>
            <p class="product-list__banner-title">
                You'll look and fell like the champion.
            </p>
        </div>
        <button class="product-list__banner-btn">
            check this out
            <i>
                <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M12.9462 12.0022L8.34619 7.40219L9.39994 6.34843L15.0537 12.0022L9.39994 17.6559L8.34619 16.6022L12.9462 12.0022Z"
                    fill="#1D1D1D"
                />
                </svg>
            </i>
        </button>
  </div>
</div>; */
}
