import { NavLink } from 'react-router-dom';
import { BASE_IMG_SRC } from 'helpers/constants';

import s from './MoviesList.module.css';

export default function MoviesList({ movies }) {
  return (
    <ul className={s.list}>
      {movies.map(({ id, poster_path, original_title, name }) => (
        <li key={id} className={s.listItem}>
          <NavLink to={`/movies/${id}`} className={s.link}>
            <img
              className={s.img}
              src={BASE_IMG_SRC + poster_path}
              alt={original_title}
            />
            <p className={s.title}>{original_title ? original_title : name}</p>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
