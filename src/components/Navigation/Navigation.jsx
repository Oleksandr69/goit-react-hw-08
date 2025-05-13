import { NavLink } from "react-router-dom";
import css from './Navigation.module.css';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const setActiveClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return ( 
      <nav className={css.nav}>
        <NavLink className={setActiveClass} to='/' >Home</NavLink>
        {isLoggedIn && <NavLink className={setActiveClass} to='/contacts' >Contacts</NavLink>}
      </nav>
    )
}
export default Navigation;