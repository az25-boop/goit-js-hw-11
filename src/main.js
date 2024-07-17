import { renderCard, refs, handlerError } from './js/render-function';
import { fetchImage, generateSearchString } from './js/paxabay-api';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

refs.searchForm.addEventListener('submit', handlerSearchButton);

function handlerSearchButton(event) {
  event.preventDefault();
  const searchText = event.target.searchtext.value;
  if (!searchText) {
    handlerError('outdata');
    return;
  }
  refs.gallery.innerHTML = '';
  refs.loader.classList.add('loader');
  fetchImage(generateSearchString(searchText))
    .then(image => {
      refs.loader.classList.remove('loader');
      if (image.totalHits === 0) {
        handlerError('nodata');
        return;
      }
      refs.gallery.insertAdjacentHTML('beforeend', renderCard(image.hits));
      galleryBigImage.refresh();
    })
    .catch(error => {
      refs.loader.classList.remove('loader');
      handlerError(error);
    })
    .finally(refs.searchForm.reset());
}
const galleryBigImage = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  overlayOpacity: 0.8,
  scrollZoom: false,
});
galleryBigImage.on('show.simplelightbox', function () {});
