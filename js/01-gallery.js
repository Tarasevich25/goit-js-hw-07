import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const imgCard = createImgCard(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", imgCard);

galleryEl.addEventListener("click", onImgOriginalCard);

function createImgCard(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class ="gallery__item">
    <a class="gallery__link"
    href ="${original}">
    <img class="gallery__image"
    src="${preview}"
    data-sourse = "${original}"
    alt = "${description}"
    width = 100%>
    </a>
    </div>`;
    })
    .join("");
}

function onImgOriginalCard(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  //   console.log(event.target);

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`
  );
  {
    onShow: () => document.addEventListener("keydown", onCloseModal);
    onClose: () => document.removeEventListener("keydown", onCloseModal);
  }

  instance.show();

  function onCloseModal(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}
