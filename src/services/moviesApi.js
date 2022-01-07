import axios from 'axios';

const getMovies = axios.create({
  baseURL: 'https://api.themoviedb.org/3/trending/all/week',
  params: {
    api_key: 'd5e39c76dc63e9de2d8ff6d36428eb68',
  },
});

export async function fetchWithErrorHandling(url = '', params = {}) {
  try {
    const { data } = await getMovies(url, params);
    console.log(data.results);
    return data.results;
  } catch {
    console.error('Not found');
  }
}

export function fetchPopulMovies() {
  return fetchWithErrorHandling('', {
    baseURL: 'https://api.themoviedb.org/3/trending/all/week',
  });
}

export function fetchPopulMoviesByPage() {
  return fetchWithErrorHandling('', {
    baseURL: 'https://api.themoviedb.org/3/trending/all/week',
    page: 'page',
  });
}

// export function fetchPopulMovies() {
//   return fetchWithErrorHandling('', {
//     baseURL: 'https://api.themoviedb.org/3/trending/all/week',
//   });
// }

// export function fetchPopulMovies() {
//   return fetchWithErrorHandling('', {
//     baseURL: 'https://api.themoviedb.org/3/trending/all/week',
//   });
// }
