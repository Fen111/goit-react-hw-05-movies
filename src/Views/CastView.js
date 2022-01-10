import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as Api from '../services/moviesApi';

import Cast from 'components/Cast';

export default function CastPage() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    Api.fetchMovieCredits(movieId)
      .then(data => {
        const filtredData = data.cast.filter(actor => actor.popularity > 4);
        setCast(filtredData);
      })
      .catch(error => console.log('error on catch CastPage: ', error));
    return () => setCast([]);
  }, [movieId]);
  return <Cast cast={cast} />;
}
