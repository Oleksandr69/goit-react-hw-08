import { createSlice, isAnyOf, createSelector } from '@reduxjs/toolkit';
import { selectNameFilter } from '../redux/filtersSlice';
import { fetchContacts, deleteContact, addContact } from './contactsOps';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    loadingApp: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          contact => contact.id !== action.payload
        );
      })

      .addMatcher(isAnyOf(fetchContacts.pending), state => {
        state.loadingApp = true;
        state.error = null;
      })
      .addMatcher(isAnyOf(addContact.pending, deleteContact.pending), state => {
        state.loading = true;
        state.error = null;
      })
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected
        ),
        (state, action) => {
          state.loading = false;
          state.loadingApp = false;
          state.error = action.payload;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          addContact.fulfilled,
          deleteContact.fulfilled
        ),
        state => {
          state.error = null;
          state.loading = false;
          state.loadingApp = false;
        }
      );
  },
});

export default contactsSlice.reducer;

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
