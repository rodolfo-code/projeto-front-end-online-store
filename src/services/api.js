import axios from 'axios';

const getCategories = axios.create({
  baseURL: 'https://api.mercadolibre.com/sites/MLB/categories',
})

export default getCategories;