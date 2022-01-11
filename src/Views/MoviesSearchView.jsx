import { useState, useEffect, lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import LoaderContainer from 'components/LoaderContainer';

import * as Api from '../services/moviesApi';

import SearchMoviesForm from '../components/SearchMoviesForm/SearchMoviesForm';

const MoviesList = lazy(() =>
  import('../components/MoviesList' /* webpackChunkName: "Movies-list"*/),
);

export default function MoviesSearchView() {
  const location = useLocation();
  const currentPage = new URLSearchParams(location.search).get('page') ?? 1;
  const [page] = useState(currentPage);
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  //   const isFirstRender = useRef(true);

  //   useEffect(() => {
  //     if (!query) return;
  //     async function fetchMovies() {
  //       try {
  //         const movies = await Api.fetchMoviesSearch(query, currentPage);
  //         if (movies.length < 1) {
  //           toast.error(`Image ${query} not found`);
  //           return;
  //         }
  //         setMovies(state => [...state, ...movies]);
  //       } catch (e) {
  //         console.error(e);
  //       }
  //     }
  //     fetchMovies();
  //   }, [query, currentPage]);

  useEffect(() => {
    Api.fetchMoviesSearch(page, query)
      .then(({ results }) => {
        if (!results) return;
        if (results.length > 1) setMovies(results);
      })
      .catch(error => {
        console.error('error on catch: ', error);
      });
  }, [page, query]);

  const handleFormSubmit = input => {
    setQuery(input);
  };

  return (
    <div>
      <SearchMoviesForm onSubmit={handleFormSubmit} />
      <Suspense fallback={<p>Download...</p>}>
        <MoviesList movies={movies} />
      </Suspense>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        draggable
        draggablePercent={60}
      />
    </div>
  );
}
