import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as Api from '../../services/moviesApi';
import photoDefault from '../../images/photoDefault.webp';
import { BASE_IMG_SRC } from 'helpers/constants';

import s from './Cast.module.css';

export default function Cast() {
  const { moviesId } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    Api.fetchMovieActors(moviesId)
      .then(({ cast }) => {
        setActors(cast);
      })
      .catch(error => console.log('error on catch actorsView: ', error));
  }, [moviesId]);
  return (
    <div className={s.cast}>
      {actors.length >= 1 ? (
        actors.map(({ id, profile_path, name, character }) => (
          <div key={id} className={s.actorInfo}>
            <img
              className={s.img}
              src={profile_path ? BASE_IMG_SRC + profile_path : photoDefault}
              alt={name}
            />
            <h3 className={s.title}>{name}</h3>
            <span className={s.role}>Role: {character}</span>
          </div>
        ))
      ) : (
        <p className={s.info}>
          Information about the actors has not yet been added
        </p>
      )}
    </div>
  );
}
