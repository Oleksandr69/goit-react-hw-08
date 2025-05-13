import { NavLink } from "react-router-dom";
import css from './AuthNav.module.css';
import clsx from 'clsx';

const setActiveClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const AuthNav = () => {
    return (
      <div className={css.nav}>
        <NavLink className={setActiveClass} to='/login' >Log In</NavLink>
        <NavLink className={setActiveClass} to='/register' >Register</NavLink>
      </div>
     )
}
export default AuthNav;

