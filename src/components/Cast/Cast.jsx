import { BASE_IMG_SRC } from 'helpers/constants';

import s from './Cast.module.css';

export default function Cast({ cast }) {
  return (
    <div className={s.cast}>
      {cast.length >= 1 ? (
        cast.map(actor => (
          <div key={actor.id} className={s.actor}>
            <div className={s.img}>
              <img src={BASE_IMG_SRC + actor.profile_path} alt={actor.name} />
            </div>
            <h3 className={s.title}>{actor.name}</h3>
            <span className={s.role}>Character: {actor.character}</span>
          </div>
        ))
      ) : (
        <p className="no-info">There's no info about casts this movie yet.</p>
      )}
    </div>
  );
}
