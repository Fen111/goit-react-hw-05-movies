import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../../services/moviesApi';
import s from './Reviews.module.css';

export default function Reviews() {
  const { moviesId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    api
      .fetchMovieReviews(moviesId)
      .then(({ results }) => {
        setReviews(results);
      })
      .catch(error => console.error('error on catch Reviews'));
  }, [moviesId]);

  return (
    <>
      {reviews.length > 0 ? (
        <ul className={s.list}>
          {reviews.map(({ id, author, content }) => (
            <li key={id} className={s.item}>
              <p className={s.title}>{author}</p>
              <p className={s.content}>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={s.info}>!!!There are no reviews about this movie</p>
      )}
    </>
  );
}
