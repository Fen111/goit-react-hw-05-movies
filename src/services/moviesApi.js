import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'f6f92051b45422d9426f457ad6610127';

async function fetchWithErrorHandling(url = '', params = {}) {
  if (params.HasQuery) {
    const { data } = await axios.get(url, params);
    if (data.results.length === 0) {
      console.error('Not found by query');
    }
    console.log(data);
    return data;
  }
  const { data, status } = await axios.get(url, params);
  if (status === 200) {
    return data;
  }
  console.error('Not found');
}

export function fetchPopulMovies() {
  return fetchWithErrorHandling(
    `${BASE_URL}trending/all/week?api_key=${API_KEY}`,
  );
}

export function fetchMoviesDetails(id) {
  const url = `${BASE_URL}movie/${id}?api_key=${API_KEY}`;

  return fetchWithErrorHandling(url);
}

export function fetchMoviesSearch(page, query) {
  const url = `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&page=${page}&include_adult=false`;
  return fetchWithErrorHandling(url, { hasQuery: true });
}

export function fetchMovieActors(id) {
  return fetchWithErrorHandling(
    `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`,
  );
}

export function fetchMovieReviews(id) {
  const url = `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`;
  return fetchWithErrorHandling(url);
}
