import { Switch, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Container from 'components/Container';
import Navigation from 'components/Navigation';
// import MoviesList from 'components/MoviesList';
import SearchMovies from 'components/SearchMovies/';
import PageNotFound from 'components/PageNotFound';
// import HomeView from 'Views/HomeView';
import MovieDetailsView from 'Views/MovieDetailsView';

const HomeView = lazy(() =>
  import('../../Views/HomeView' /* webpackChunkName: "Home-page" */),
);

const App = () => {
  return (
    <Container>
      <Suspense fallback={<h1>download...</h1>}>
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>
          <Route path="/movies" exact>
            <SearchMovies />
          </Route>

          <Route path="/movies/:moviesId">
            <MovieDetailsView />
          </Route>

          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
};

export default App;
