import { Link } from 'react-router-dom';

import s from './MoviesList.module.css';

export default function MoviesList({ movies }) {
  // const match = useRouteMatch();

  return (
    <ul className={s.list}>
      {movies.map(movie => (
        <li key={movie.id} className={s.listItem}>
          <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
        </li>
      ))}
    </ul>
  );
}
