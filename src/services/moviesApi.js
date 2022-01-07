import axios from 'axios';

// const getMovies = axios.create({
//   baseURL: 'https://api.themoviedb.org/3/',
//   params: {
//     api_key: 'd5e39c76dc63e9de2d8ff6d36428eb68',
//   },
// });

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'f6f92051b45422d9426f457ad6610127';

// async function fetchWithErrorHandling(url = '', params = {}) {
//   try {
//     const { data } = await axios.get(url, params);
//     console.log(data.results);
//     return data.results;
//   } catch {
//     console.error('Not found');
//   }
// }

async function fetchWithErrorHandling(url = '', config = {}) {
  if (config.hasQuery) {
    const response = await axios.get(url, config);
    return response.status === 200 && response.data.results.length !== 0
      ? response.data
      : console.error('Not found by query');
  }
  const response = await axios.get(url, config);
  return response.status === 200 ? response.data : console.error('Not found');
}

export function fetchPopulMovies() {
  return fetchWithErrorHandling(
    `${BASE_URL}trending/all/week?api_key=${API_KEY}`,
  );
  // return fetchWithErrorHandling('', {
  //   baseURL: 'https://api.themoviedb.org/3/trending/all/week',
  // });
}

// export function fetchPopulMoviesByPage() {
//   return fetchWithErrorHandling('', {
//     baseURL: 'https://api.themoviedb.org/3/trending/all/week',
//     page: 'page',
//   });
// }

export function fetchMoviesDetails(id) {
  const url = `${BASE_URL}movie/${id}?api_key=${API_KEY}`;
  console.log(url);

  return fetchWithErrorHandling(url);
  // return fetchWithErrorHandling('', {
  //   baseURL: `https://api.themoviedb.org/3/movie/${id}`,
  // });
}
