import { Link, useRouteMatch } from 'react-router-dom';

import s from './MoviesList.module.css';

export default function MoviesList({ movies }) {
  const match = useRouteMatch();
  console.log(match);
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id} className={s.list}>
          <Link to={`movies/${movie.id}`}>{movie.original_title}</Link>
        </li>
      ))}
    </ul>
  );
}
