import "./pop-up-style.css";

export default function loadPopUp(product, popUp) {
  const popUpContainer = document.createElement("div");

  const txtContainer = document.createElement("div");
  const txtId = document.createElement("p");
  const btnClose = document.createElement("button");
  let closeIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  let iconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
  const btnTxt = document.createElement("span");

  popUp.id = "pop-up-product";

  popUpContainer.className = "pop-up-container";
  popUpContainer.style.backgroundImage = `url(${product.image})`;

  txtContainer.className = "pop-up-txt-container";
  txtId.className = "pop-up-txt-id";
  txtId.textContent = `ID: ${product.id}`;

  btnClose.className = "pop-up-btn-close";
  closeIcon.setAttribute("width", "24");
  closeIcon.setAttribute("height", "24");
  closeIcon.setAttribute("fill", "none");
  closeIcon.setAttribute("viewBox", "0 0 24 24");
  iconPath.setAttribute(
    "d",
    "M6.39994 18.6537L5.34619 17.5999L10.9462 11.9999L5.34619 6.39994L6.39994 5.34619L11.9999 10.9462L17.5999 5.34619L18.6537 6.39994L13.0537 11.9999L18.6537 17.5999L17.5999 18.6537L11.9999 13.0537L6.39994 18.6537Z",
  );
  iconPath.setAttribute("fill", "#1D1D1D");
  closeIcon.appendChild(iconPath);
  btnTxt.textContent = "close";
  btnClose.append(closeIcon, btnTxt);
  btnClose.addEventListener("click", () => {
    popUp.textContent = "";
    popUp.close();
  });

  txtContainer.append(txtId, btnClose);
  popUpContainer.appendChild(txtContainer);
  popUp.appendChild(popUpContainer);
}

{
  /* <dialog >
    <div class="pop-up-container">
      <img src="" alt="an image" />
    </div>
    <div class="pop-up-txt-container">
      <p class="pop-up-id">ID: 01</p>
      <button class="pop-up-btn-close">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.39994 18.6537L5.34619 17.5999L10.9462 11.9999L5.34619 6.39994L6.39994 5.34619L11.9999 10.9462L17.5999 5.34619L18.6537 6.39994L13.0537 11.9999L18.6537 17.5999L17.5999 18.6537L11.9999 13.0537L6.39994 18.6537Z"
            fill="#1D1D1D"
          />
        </svg>
        <span>close</span>
      </button>
    </div>
  </dialog>; */
}
