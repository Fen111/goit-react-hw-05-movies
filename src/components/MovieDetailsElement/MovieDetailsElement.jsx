import s from './MovieDetailsElement.module.css';

export default function MovieDetailsElement({ movie }) {
  const { poster_path, original_title, overview, genres, id } = movie;
  return (
    <div className={s.movieInfo}>
      <img src={poster_path} alt={original_title} />
      <h2>{original_title}</h2>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres:</h3>
      <p>
        {genres.map(genre => (
          <li key={id}>{genre.name}</li>
        ))}
      </p>
    </div>
  );
}
