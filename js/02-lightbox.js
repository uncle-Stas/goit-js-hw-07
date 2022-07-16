import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

function createItems(array) {
  return array.reduce((akum, item) => {
    return (
      akum +
      `<a class="gallery__item" href=${item.original}>
        <img
          class="gallery__image"
          src=${item.preview}
          alt=${item.description}
        />
      </a>`
    );
  }, '');
}

const galleryItemsHtml = createItems(galleryItems);
gallery.insertAdjacentHTML('afterbegin', galleryItemsHtml);

const lightbox = new SimpleLightbox('.gallery a', {
  /* options */
  captionsData: 'alt',
  captionDelay: 250,
});
