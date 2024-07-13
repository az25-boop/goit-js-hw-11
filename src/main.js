import { fetchImages } from './pixabay-api.js';
import {
  clearGallery,
  renderImages,
  showNotification,
  showLoader,
  hideLoader,
} from './render-functions.js';
import './styles.css';

document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.querySelector('#search-form');
  const searchInput = document.querySelector('#search-input');

  searchForm.addEventListener('submit', async event => {
    event.preventDefault();

    const query = searchInput.value.trim();
    if (!query) {
      showNotification('Please enter a search term!');
      return;
    }

    clearGallery();
    showLoader();

    try {
      const images = await fetchImages(query);
      if (images.length === 0) {
        showNotification(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      } else {
        renderImages(images);
      }
    } catch (error) {
      showNotification(
        'An error occurred while fetching images. Please try again later.'
      );
    } finally {
      hideLoader();
    }
  });
});
