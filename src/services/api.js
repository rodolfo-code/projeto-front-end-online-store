import axios from 'axios';

export function getCategories() {
  axios
    .get('https://api.mercadolibre.com/sites/MLB/categories')
    .then(response => console.log(response.data));
}

getCategories();
