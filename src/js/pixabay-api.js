import { handlerError } from './render-function';

const searchSettings = {
  key: '44443472-3b41bcc651e7d0b56b1888f38',
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 12,
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
