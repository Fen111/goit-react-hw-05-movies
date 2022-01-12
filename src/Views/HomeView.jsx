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
      .then(({ results }) => {
        if (!results) {
          console.error('error');
          return;
        }
        setMovies(results);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <Suspense fallback={<p>Dowload...</p>}>
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
