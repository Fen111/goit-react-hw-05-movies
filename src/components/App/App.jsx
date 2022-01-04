import { Switch, Route } from 'react-router-dom';

import Container from 'components/Container';
import Navigation from 'components/Navigation';
import MoviesPage from 'components/MoviesPage';
import SearchMovies from 'components/SearchMovies/';
import PageNotFound from 'components/PageNotFound';

const App = () => {
  return (
    <Container>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <MoviesPage />
        </Route>
        <Route path="/movies">
          <SearchMovies />
        </Route>

        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </Container>
  );
};

export default App;
