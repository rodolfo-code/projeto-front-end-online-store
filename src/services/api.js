import axios from 'axios';

const URL = 'https://api.mercadolibre.com/sites/MLB/categories';

export function getCategories() {
  return axios.get(URL);
}

export function getById(id) {
  return axios.get(
    `https://api.mercadolibre.com/sites/MLB/search?category=${id}`,
  );
}
