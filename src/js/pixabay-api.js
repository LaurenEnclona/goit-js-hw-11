export const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '41557325-840b2bbbfa1fa78b1e92e7430';

export const options = {
  params: {
    key: API_KEY,
    q: '',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: 1,
    per_page: 40,
  },
};
