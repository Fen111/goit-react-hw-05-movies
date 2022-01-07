import { useState, useEffect, Suspense, lazy } from 'react';

// import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import * as Api from '../services/moviesApi';

const MoviesList = lazy(() =>
  import('../components/MoviesList' /* webpackChunkName: "Movies-list"*/),
);

export default function HomeView() {
  // const location = useLocation();
  // const currentPage = new URLSearchParams(location.search).get('page') ?? 1;
  const [movies, setMovies] = useState([]);
  // const [page] = useState(currentPage);
  // const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const moviesList = await Api.fetchPopulMovies();
        if (moviesList.length < 1) {
          toast.error(`Movies not found`);
          return;
        }
        setMovies(moviesList);
      } catch (error) {
        console.error('error');
      }
    }
    fetchMovies();

    // Api.fetchPopulMovies().then(setMovies);
  }, []);

  // useEffect(() => {
  //   Api.fetchPopulMoviesByPage(page).then(setMovies);
  // }, [page]);

  // useEffect(() => {
  //   Api.fetchTrendingMoviesByPage(page)
  //     .then(data => {
  //       const { results, total_pages } = data;
  //       if (!results) {
  //         toast.error('No such results!');
  //         return;
  //       }
  //       setMovies(results);
  //       // setTotalPages(total_pages);
  //     })
  //     .catch(error => {
  //       toast.error('No images');
  //       console.log('error on catch: ', error);
  //     });
  // }, [page]);

  return (
    <div>
      <Suspense fallback={<h1>Загрузка...</h1>}>
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
