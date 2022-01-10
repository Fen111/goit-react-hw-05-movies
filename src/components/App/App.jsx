import { Switch, Route, Redirect } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Container from 'components/Container';
import Navigation from 'components/Navigation';
// import MoviesList from 'components/MoviesList';

const HomeView = lazy(() =>
  import('../../Views/HomeView' /* webpackChunkName: "Home-page" */),
);
const MovieDetailsView = lazy(() =>
  import(
    '../../Views/MovieDetailsView' /* webpackChunkName: "MovieDetails-page" */
  ),
);
const MoviesSearchView = lazy(() =>
  import(
    '../../Views/MoviesSearchView' /* webpackChunkName: "SearchMovies-page" */
  ),
);

const App = () => {
  return (
    <Container>
      <Suspense fallback={<p>download...</p>}>
        <Navigation />
        <Switch>
          <Route path="/" exact component={HomeView} />
          <Route path="/movies" exact component={MoviesSearchView} />
          <Route path="/movies/:moviesId" component={MovieDetailsView} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Container>
  );
};

export default App;
