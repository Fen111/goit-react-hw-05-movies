import { BASE_IMG_SRC } from '../../helpers/constants';
import s from './MovieDetailsElement.module.css';

export default function MovieDetailsElement({ movie }) {
  const { poster_path, original_title, overview, genres, vote_average } = movie;
  return (
    <div className={s.movieInfo}>
      <img
        className={s.moviePoster}
        src={BASE_IMG_SRC + poster_path}
        alt={original_title}
      />
      <div>
        <h2>{original_title}</h2>
        <p>User Score: {(vote_average * 100) / 10}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres:</h3>
        <p>
          {genres.map((genre, idx) => (
            <li key={idx}>{genre.name}</li>
          ))}
        </p>
      </div>
    </div>
  );
}
