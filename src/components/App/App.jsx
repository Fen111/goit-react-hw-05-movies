import { Switch, Route, Redirect } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Container from 'components/Container';
import Navigation from 'components/Navigation';

const AsyncHomeView = lazy(() =>
  import('../../views/HomeView' /* webpackChunkName: "Home-page" */),
);
const AsyncMovieDetailsView = lazy(() =>
  import(
    '../../views/MovieDetailsView/MovieDetailsView' /* webpackChunkName: "MovieDetails-page" */
  ),
);
const AsyncMoviesSearchView = lazy(() =>
  import(
    '../../views/MoviesSearchView' /* webpackChunkName: "SearchMovies-page" */
  ),
);

const App = () => {
  return (
    <Container>
      <Suspense fallback={<p>Download...</p>}>
        <Navigation />
        <Switch>
          <Route path="/" exact component={AsyncHomeView} />
          <Route path="/movies" exact component={AsyncMoviesSearchView} />
          <Route path="/movies/:moviesId" component={AsyncMovieDetailsView} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Container>
  );
};

export default App;
