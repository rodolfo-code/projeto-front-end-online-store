import axios from 'axios';

export async function getCategories() {
  try {
    const req = await axios.get('https://api.mercadolibre.com/sites/MLB/categories')
    const json = await req.json();

    return json;
  } catch (error) {
    console.log(`(From async function) Error ${error}`)
  }
}

export function getCategories() {
  axios.get('https://api.mercadolibre.com/sites/MLB/categories')
    .then((resolve) => resolve.json())
}