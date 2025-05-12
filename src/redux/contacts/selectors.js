import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter } from '../filters/selectors';

export const selectError = state => state.contacts.error;
export const selectLoading = state => state.contacts.loading;
export const selectLoadingApp = state => state.contacts.loadingApp;
export const selectContacts = state => state.contacts.items;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contactList, searchName) =>
    contactList.filter(
      card =>
        card.name.toLowerCase().includes(searchName.toLowerCase()) ||
        card.number.includes(searchName)
    )
);
