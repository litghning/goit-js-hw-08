// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

console.log(galleryItems);
const refs = document.querySelector('.gallery')
const addGalleryMerkup = createGalleryMarkup(galleryItems); 

function createGalleryMarkup(elements) {
    return elements
        .map(
        (element) => `<div class="gallery__item">
                    <a class="gallery__link" href="${element.original}">
                        <img 
                            class="gallery__image"
                            src="${element.preview}"
                            data-source="${element.original}"
                            alt="${element.description}"
                />
                </a>
                </div>`
        )
        .join("");
}
refs.insertAdjacentHTML('beforeend', addGalleryMerkup);

   const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });