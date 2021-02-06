import axios from 'axios';

export function getCategories() {
  axios
    .get('https://api.mercadolibre.com/sites/MLB/categories')
    .then(response => response.data);
}
