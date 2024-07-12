import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

document
  .getElementById('search-form')
  .addEventListener('submit', async function (e) {
    e.preventDefault();

    const query = document.getElementById('search-query').value.trim();

    if (!query) {
      iziToast.error({
        title: 'Error',
        message: 'Search query cannot be empty!',
      });
      return;
    }

    const gallery = document.getElementById('gallery');
    gallery.innerHTML = ''; // Очищуємо галерею перед новим пошуком

    const loader = document.getElementById('loader');
    loader.style.display = 'block'; // Показуємо індикатор завантаження

    try {
      const response = await fetch(
        `https://pixabay.com/api/?key=44852213-a2483cc0047435af0fdb3dda4&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
      );
      const data = await response.json();

      loader.style.display = 'none'; // Сховати індикатор завантаження

      if (data.hits.length === 0) {
        iziToast.info({
          title: 'No Results',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }

      data.hits.forEach(hit => {
        const item = document.createElement('a');
        item.href = hit.largeImageURL;
        item.classList.add('gallery-item');
        item.innerHTML = `
              <img src="${hit.webformatURL}" alt="${hit.tags}">
              <div class="info">
                  <p>Likes: ${hit.likes}</p>
                  <p>Views: ${hit.views}</p>
                  <p>Comments: ${hit.comments}</p>
                  <p>Downloads: ${hit.downloads}</p>
              </div>
          `;
        gallery.appendChild(item);
      });

      const lightbox = new SimpleLightbox('.gallery-item', {
        /* options */
      });
      lightbox.refresh();
    } catch (error) {
      loader.style.display = 'none'; // Сховати індикатор завантаження
      iziToast.error({
        title: 'Error',
        message:
          'An error occurred while fetching the images. Please try again later!',
      });
    }
  });
