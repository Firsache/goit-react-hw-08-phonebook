import { createSlice } from '@reduxjs/toolkit';
import {
  getContacts,
  addContacts,
  delContacts,
  editContactOperation,
} from 'redux/contacts/operations';

const initialContactsState = {
  contacts: [],
  filteredName: '',
  showModal: false,
  editContact: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  reducers: {
    setFilteredName(state, { payload }) {
      state.filteredName = payload;
    },
    setEditModal(state) {
      state.showModal = !state.showModal;
    },
    setEditContact(state, { payload }) {
      state.editContact = payload;
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
      })
      .addCase(editContactOperation.fulfilled, (state, { payload }) => {
        state.contacts = state.contacts.map(c =>
          c.id === payload.id ? payload : c
        );
      });
  },
});

export const { setFilteredName, setEditModal, setEditContact } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
