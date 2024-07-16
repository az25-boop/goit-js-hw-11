// Для організації коду використовуй модульність та синтаксис export/import:

//     У файлі pixabay-api.js зберігай функції для HTTP-запитів.
// pixabay-api.js
const API_KEY = '44852213-a2483cc0047435af0fdb3dda4';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query) {
  const response = await fetch(
    `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch images');
  }
  const data = await response.json();
  return data.hits;
}
page = 1;
q = null;
per_page = 40;
