import { useState, useEffect, Suspense, lazy } from 'react';
import { ToastContainer } from 'react-toastify';

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
    Api.fetchPopulMovies()
      .then(data => {
        if (!data.results) {
          console.error('error');
          return;
        }
        setMovies(data.results);
      })
      .catch(error => console.log(error));
    // async function fetchMovies() {
    //   try {
    //     const moviesList = await Api.fetchPopulMovies();
    //     if (moviesList.length < 1) {
    //       toast.error(`Movies not found`);
    //       return;
    //     }
    //     setMovies(moviesList);
    //   } catch (error) {
    //     console.error('error');
    //   }
    // }
    // fetchMovies();
  }, []);

  return (
    <div>
      <Suspense fallback={<h1>Download...</h1>}>
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
