import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const pictureMarkap = createGallery(galleryItems);

gallery.insertAdjacentHTML("beforeend", pictureMarkap);
gallery.addEventListener("click", onPictureClick);

function createGallery(picture) {
  return picture
    .map(({ preview, original, description }) => {
      return ` <div class="gallery__item">
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
}
const instance = basicLightbox.create(
  `
    <img class ='modal-img' src= "" >
`,
  {
    onShow: () => {
      window.addEventListener("keydown", onEscClick);
    },
  },
  {
    onClose: () => {
      window.removeEventListener("keydown", onEscClick);
    },
  }
);

function onPictureClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  instance.element().querySelector(".modal-img").src =
    event.target.dataset.source;

  instance.show();
}

function onEscClick(e) {
  if (e.keyCode == 27) {
    instance.close();
    return;
  }
}
