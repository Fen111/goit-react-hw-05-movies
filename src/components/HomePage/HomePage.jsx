import { NavLink } from 'react-router-dom';
import s from './HomePage.module.css';

const HomePage = () => (
  <nav>
    <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
      Home
    </NavLink>
    <NavLink to="/movies" className={s.link} activeClassName={s.activeLink}>
      Movies
    </NavLink>
  </nav>
);

export default HomePage;
