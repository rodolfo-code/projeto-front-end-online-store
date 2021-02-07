import axios from 'axios';

export const getCategories = axios.create({
  baseURL: 'https://api.mercadolibre.com/sites/MLB/categories',
});

export default getCategories;

// export default async function getCategories() {
//   try {
//     const response = await axios.get(
//       `https://api.mercadolibre.com/sites/MLB/categories`,
//     );
//     return response.data;
//   } catch (e) {
//     return null;
//   }
// }
