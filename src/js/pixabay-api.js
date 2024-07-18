import { handlerError } from './render-function';

const searchSettings = {
  key: '44852213-a2483cc0047435af0fdb3dda4',
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 40,
};

export function generateSearchString(searchText) {
  searchSettings.q = searchText;
  const urls = new URLSearchParams(searchSettings);
  return `https://pixabay.com/api/?${urls}`;
}
export function fetchImage(qveryURL) {
  return fetch(qveryURL).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
