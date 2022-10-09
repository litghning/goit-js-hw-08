// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

console.log(galleryItems);
const refs = document.querySelector('.gallery')
const addGalleryMerkup = createGalleryMarkup(galleryItems);

pushMarkupOnHtml();

refs.addEventListener("click", onImageClick);

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

function onImageClick(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== "IMG")
    { return; }
}
onOpenModalWindow();
function onOpenModalWindow() {
  return new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}

function pushMarkupOnHtml() {
  refs.insertAdjacentHTML('beforeend', addGalleryMerkup);
}