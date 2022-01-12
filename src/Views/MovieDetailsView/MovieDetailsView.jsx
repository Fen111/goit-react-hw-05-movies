import { useState, useEffect, Suspense } from 'react';
import {
  useParams,
  NavLink,
  useRouteMatch,
  Route,
  useLocation,
  useHistory,
} from 'react-router-dom';
import * as Api from '../../services/moviesApi';
import MovieDetailsElement from '../../components/MovieDetailsElement';
import Cast from '../Cast';
import Reviews from '../Reviews';

import s from './MovieDetailsView.module.css';

export default function MovieDetailsView() {
  const { moviesId } = useParams();
  const [movie, setMovie] = useState(null);
  const { url, path } = useRouteMatch();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    Api.fetchMoviesDetails(moviesId)
      .then(setMovie)
      .catch(error => console.log(error));
  }, [moviesId]);

  const onGoBack = () => {
    history.push(location.state.from);
  };

  return (
    <>
      {movie && (
        <>
          <button type="button" onClick={onGoBack} className={s.button}>
            Go back
          </button>
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
          <Suspense fallback={<div>Download...</div>}>
            <Route exact path={`${path}/cast`}>
              <Cast />
            </Route>
            <Route exact path={`${path}/reviews`}>
              <Reviews />
            </Route>
          </Suspense>
        </>
      )}
    </>
  );
}
