import React from 'react';
import './App.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import { fetchContacts } from '../../redux/contactsOps';
import { selectError, selectLoadingApp } from '../../redux/contactsSlice';
import Loader from '../Loader/Loader';

const App = () => {

  const dispatch = useDispatch();
  const loadingApp = useSelector(selectLoadingApp);
  const error = useSelector(selectError);

    useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

      return (
      <div>
        <ContactForm
          />
          
        <SearchBox
          />

          {loadingApp && !error && <b>Request in progress...<Loader color='green' loader={loadingApp} /></b>}
          
        <ContactList
          />
      
    </div>
  );
};

export default App
