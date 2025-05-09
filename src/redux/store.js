import { configureStore } from '@reduxjs/toolkit';
// import { combineReducers } from 'redux';
import contactsReducer from './contactsSlice';
import filtersReducer from './filtersSlice';
import authReducer from './auth/slice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
    auth: authReducer,
  },

  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});

// export store;
