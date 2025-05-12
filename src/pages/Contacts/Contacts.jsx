import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectLoadingApp } from '../../redux/contacts/selectors';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactForm from '../../components/ContactForm/ContactForm';
import { fetchContacts } from '../../redux/contacts/operations';
import Loader from '../../components/Loader/Loader';

const Contacts = () => {

  const dispatch = useDispatch();
  const loadingApp = useSelector(selectLoadingApp);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
      <>
          <ContactForm
        />
        
         <SearchBox
        />

        {loadingApp && !error && <b>Request in progress...<Loader color='green' loader={loadingApp} /></b>}
        
      <ContactList
          />
      </>
  )
}

export default Contacts;