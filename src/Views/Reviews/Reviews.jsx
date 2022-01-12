import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as Api from '../../services/moviesApi';
import s from './Reviews.module.css';

export default function Reviews() {
  const { moviesId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    Api.fetchMovieReviews(moviesId)
      .then(({ results }) => {
        setReviews(results);
      })
      .catch(error => console.error('error on catch Reviews'));
  }, [moviesId]);

  return (
    <>
      {reviews.length > 0 ? (
        <ul className={s.list}>
          {reviews.map(review => (
            <li key={review.id} className={s.item}>
              <p className={s.title}>
                {review.author}
                {/* `${review.created_at.slice(0, 10)}` */}
              </p>
              <p className={s.content}>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>There are no reviews about this movie</p>
      )}
    </>
  );
}
