import React from 'react';
import css from'./App.module.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from 'react-router-dom'

import Home from '../../pages/HomePage/HomePage';
import Login from '../../pages/LoginPage/LoginPage';
import Register from '../../pages/RegistrationPage/RegistrationPage';
import ContactsPage from '../../pages/ContactsPage/ContactsPage';
import NotFound from '../../pages/NotFound/NotFound';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Layout from '../Layout/Layout';
import { refreshThunk } from '../../redux/auth/operations';
import { selectIsRefreshing } from '../../redux/auth/selectors';
import RestrictedRoute from '../RestrictedRoute/RestrictedRoute';


const App = () => {

  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch])

      return isRefreshing ? null : (
        <div className={css.containerApp}>
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<Home />} />
              <Route path='contacts' element={
                <PrivateRoute>
                  <ContactsPage />
                </PrivateRoute>} />
              <Route path='/login' element={<RestrictedRoute component={<Login />} redirectTo='/contacts' />} />
              <Route path='/register' element={<RestrictedRoute component={<Register />} redirectTo='/contacts' />} />
              </Route>
            <Route path='*' element={<NotFound /> } />
          </Routes>    
        </div>
      )
  ;
};

export default App;
