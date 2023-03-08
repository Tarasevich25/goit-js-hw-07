import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const imageList = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
    />
    </a>
    </div>`;
  })
  .join("");
gallery.insertAdjacentHTML("afterbegin", imageList);
let lightbox = new SimpleLightbox(".gallery a", {
  captionsType: "attr",
  captionsData: "alt",
  captionsDelay: 250,
});
