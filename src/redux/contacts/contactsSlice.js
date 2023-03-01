import { createSlice } from '@reduxjs/toolkit';
import {
  getContacts,
  addContacts,
  delContacts,
} from 'redux/contacts/operations';

const initialContactsState = {
  contacts: [],
  filteredName: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  reducers: {
    setFilteredName(state, { payload }) {
      state.filteredName = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getContacts.fulfilled, (state, { payload }) => {
        state.contacts = payload;
      })
      .addCase(addContacts.fulfilled, (state, { payload }) => {
        state.contacts = [...state.contacts, payload];
      })
      .addCase(delContacts.fulfilled, (state, { payload }) => {
        state.contacts = state.contacts.filter(
          contact => contact.id !== payload
        );
      });
  },
});

export const { setFilteredName } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
