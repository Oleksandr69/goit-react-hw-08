import React from 'react';
import './App.css';
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from 'react-router-dom'

import Navigation from '../Navigation/Navigation';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
// import { fetchContacts } from '../../redux/contactsOps';
// import { selectError, selectLoadingApp } from '../../redux/contactsSlice';
// import Loader from '../Loader/Loader';
import Home from '../../pages/HomePage/HomePage';
import Login from '../../pages/LoginPage/LoginPage';
import Register from '../../pages/RegistrationPage/RegistrationPage';
import Contacts from '../../pages/Contacts/Contacts';
import NotFound from '../../pages/NotFound/NotFound';
import SharedLayout from '../SharedLayout';

const App = () => {

      return (
        <div>
          <Routes>
            
            <Route path='/' element={<SharedLayout/>}>
              <Route index element={<Home />} />
              <Route path='contacts' element={<Contacts />} />
            </Route>
 
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='*' element={<NotFound /> } />
          </Routes>    
    </div>
  );
};

export default App;
