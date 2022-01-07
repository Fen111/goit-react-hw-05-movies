import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as Api from '../services/moviesApi';

import MovieDetailsElement from '../components/MovieDetailsElement/MovieDetailsElement';

export default function MovieDetailsView() {
  const { moviesId } = useParams();
  const [movie, setMovie] = useState(null);

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
        </>
      )}
    </>
  );
}
