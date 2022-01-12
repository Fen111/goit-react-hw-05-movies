import { NavLink, useLocation } from 'react-router-dom';
import { BASE_IMG_SRC } from 'helpers/constants';
import defaultMoviePoster from '../../images/defaultMoviePoster.webp';

import s from './MoviesList.module.css';

export default function MoviesList({ movies }) {
  const location = useLocation();
  return (
    <ul className={s.list}>
      {movies.map(({ id, poster_path, original_title, name }) => (
        <li key={id} className={s.listItem}>
          <NavLink
            to={{ pathname: `/movies/${id}`, state: { from: location } }}
            className={s.link}
          >
            <img
              className={s.img}
              src={
                poster_path ? BASE_IMG_SRC + poster_path : defaultMoviePoster
              }
              alt={original_title}
            />
            <p className={s.title}>{original_title ? original_title : name}</p>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
