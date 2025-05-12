import React from 'react';
import { Link, NavLink, Outlet } from "react-router-dom";
import css from './Navigation.module.css';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';
import { logoutThunk } from '../../redux/auth/operations';

const setActiveClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
      <div>
        {isLoggedIn && <h2>{userName.name}</h2>}
          <nav className={css.nav}>
            <NavLink className={setActiveClass} to='/' >Home</NavLink>
            <NavLink className={setActiveClass} to='/contacts' >Contacts</NavLink>

          {!isLoggedIn && (
            <>
              <NavLink className={setActiveClass} to='/login' >Login</NavLink>
              <NavLink className={setActiveClass} to='/register' >Register</NavLink>
            </>
          )}
          {isLoggedIn && <button onClick={()=>{dispatch(logoutThunk())}
          }>Logout</button>}

          </nav>
        </div>
    )
}
export default Navigation;