import React from 'react';
import { Link, NavLink, Outlet } from "react-router-dom";
import css from './Navigation.module.css';
import clsx from 'clsx';

const Navigation = () => {

    const setActiveClass = ({ isActive }) => {
        return clsx(css.link, isActive && css.active);
    };

    return (
        <div>
          <nav className={css.nav}>
            <NavLink className={setActiveClass} to='/' >Home</NavLink>
            <NavLink className={setActiveClass} to='/contacts' >Contacts</NavLink>
            <NavLink className={setActiveClass} to='/login' >Login</NavLink>
            <NavLink className={setActiveClass} to='/register' >Register</NavLink>
          </nav>
          {/* <Outlet /> */}
        </div>
    )
}
export default Navigation;