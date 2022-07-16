import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

function createItems(array) {
  return array.reduce((akum, item) => {
    return (
      akum +
      `<div class="gallery__item">
        <a class="gallery__link" href=${item.original}>
          <img
            class="gallery__image"
            src=${item.preview}
            data-source=${item.original}
            alt=${item.description}
          />
        </a>
      </div>`
    );
  }, '');
}

const galleryItemsHtml = createItems(galleryItems);
gallery.insertAdjacentHTML('afterbegin', galleryItemsHtml);

gallery.addEventListener('click', showOriginalImage);

function showOriginalImage(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return;
  }

  const imageUrl = event.target.dataset.source;

  const instance = basicLightbox.create(`<img src=${imageUrl}>`);

  instance.show();

  if (instance.visible()) {
    window.addEventListener('keydown', closeModalEsc);
  }

  function closeModalEsc(event) {
    if (event.code === 'Escape') {
      instance.close();
      window.removeEventListener('keydown', closeModalEsc);
    }
  }
}
