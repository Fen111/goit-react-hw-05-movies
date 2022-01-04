// d5e39c76dc63e9de2d8ff6d36428eb68;
// https://api.themoviedb.org/3/movie/550?api_key=d5e39c76dc63e9de2d8ff6d36428eb68

import axios from 'axios';

// axios.defaults.baseURL = 'https://pixabay.com/api/';
// axios.defaults.params = {
//   key: 'd5e39c76dc63e9de2d8ff6d36428eb68',
// };

// const getMovies = axios.create({
//   baseURL: 'https://api.themoviedb.org/3/',

//   params: {
//     key: 'd5e39c76dc63e9de2d8ff6d36428eb68',
//   },
// });
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'd5e39c76dc63e9de2d8ff6d36428eb68';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await axios.get('', config);
  console.log(response.data);
  return response.data;
}

export function fetchPopulMovies() {
  return fetchWithErrorHandling(
    `${BASE_URL}trending/all/week?api_key=${API_KEY}`,
  );
}

// async function fetchMovies() {
//   try {
//     const { data } = await getMovies('', {});
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.error('error');
//   }
// }
