import { useState, useEffect, Suspense } from 'react';
import { useParams, NavLink, useRouteMatch, Route } from 'react-router-dom';
import * as Api from '../services/moviesApi';
import MovieDetailsElement from '../components/MovieDetailsElement';
import Cast from 'components/Cast';
// import Reviews from 'components/Reviews';

import s from './style/MovieDetailsView.module.css';

export default function MovieDetailsView() {
  const { moviesId } = useParams();
  const [movie, setMovie] = useState(null);
  const { url, path } = useRouteMatch();
  console.log(path);

  useEffect(() => {
    Api.fetchMoviesDetails(moviesId)
      .then(setMovie)
      .catch(error => console.log(error));
  }, [moviesId]);

  return (
    <>
      {movie && (
        <>
          <MovieDetailsElement movie={movie} />
          <div className={s.linkContainer}>
            <NavLink
              exact
              to={`${url}/cast`}
              className={s.link}
              activeClassName={s.activeLink}
            >
              Cast
            </NavLink>
            <NavLink
              to={`${url}/reviews`}
              className={s.link}
              activeClassName={s.activeLink}
            >
              Reviews
            </NavLink>
          </div>
          <Suspense fallback={<h1>Download...</h1>}>
            <Route exact path={`${path}/cast`}>
              <Cast />
            </Route>
            {/* <Route exact path={`${path}/rewiews`}>
              <Reviews />
            </Route> */}
          </Suspense>
        </>
      )}
    </>
  );
}
