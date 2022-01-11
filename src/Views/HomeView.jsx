import { useState, useEffect, Suspense, lazy } from 'react';
import { ToastContainer } from 'react-toastify';
// import LoaderContainer from 'components/LoaderContainer';

import * as Api from '../services/moviesApi';

const MoviesList = lazy(() =>
  import('../components/MoviesList' /* webpackChunkName: "Movies-list"*/),
);

export default function HomeView() {
  const [movies, setMovies] = useState([]);

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
      <Suspense fallback={<p>111</p>}>
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
