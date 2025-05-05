import { configureStore } from '@reduxjs/toolkit';
// import { combineReducers } from 'redux';
import contactsReducer from './contactsSlice';
import filtersReducer from './filtersSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },

  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});

export default store;
