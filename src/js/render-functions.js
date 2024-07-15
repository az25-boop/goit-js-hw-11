// render-functions.js
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const gallery = document.querySelector('.gallery');

export function clearGallery() {
    gallery.innerHTML = '';
}

export function renderImages(images) {
    const markup = images.map(image => `
        <a href="${image.largeImageURL}" class="gallery__item">
            <img src="${image.webformatURL}" alt="${image.tags}" class="gallery__image"/>
            <div class="info">
                <p class="info-item"><b>Likes:</b> ${image.likes}</p>
                <p class="info-item"><b>Views:</b> ${image.views}</p>
                <p class="info-item"><b>Comments:</b> ${image.comments}</p>
                <p class="info-item"><b>Downloads:</b> ${image.downloads}</p>
            </div>
        </a>
    `).join('');

    gallery.insertAdjacentHTML('beforeend', markup);
    const lightbox = new SimpleLightbox('.gallery a', { /* options */ });
    lightbox.refresh();
}

export function showNotification(message) {
    iziToast.info({ message, position: 'topRight' });
}

export function showLoader() {
    document.querySelector('.loader').classList.remove('hidden');
}

export function hideLoader() {
    document.querySelector('.loader').classList.add('hidden');
}
