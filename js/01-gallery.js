import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector(".gallery");
const galleryItem = galleryItems.map(
  ({ preview, original, description }) => {
    return `<li class ="gallery__item">
    <a class="gallery__link" 
    href="${original}"> 
    <img class ="gallery__image" 
    src="${preview}
    " data-source="${original}" 
    alt="${description}
    " width="340"/></a></li>`;
  }
);
galleryList.insertAdjacentHTML("beforeend", galleryItem.join(""));
galleryList.addEventListener("click", onImgOriginalCard);
function onImgOriginalCard(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG"){
    return
  }
  const linkSrc = event.target.dataset.source;
  const altSrc = event.target.alt;
  const onCloseModal = function (event) {
    if (event.code === "Escape") {
      instance.close();
    }
  };
  const markup = `
<img width="1280" src="${linkSrc}" alt="${altSrc}" >
`;
  const instance = basicLightbox.create(markup, {
    onShow: (instance) => window.addEventListener("keydown", onCloseModal),
    onClose: (instance) => window.removeEventListener("keydown", onCloseModal)
  });
  instance.show();
}