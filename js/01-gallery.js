import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const container = document.querySelector('.gallery');

function createMarcup(arr) {
    return arr.map(({ preview, original, description }) =>
        `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </li>`
    ).join('');
};

container.insertAdjacentHTML('beforeend', createMarcup(galleryItems));

container.addEventListener('click', findOriginalImage);

function findOriginalImage(evt) {
    evt.preventDefault();
    const instance = basicLightbox.create(`<img src=${evt.target.dataset.source}>`);
    instance.show();
};