import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// import {
//   deleteContact,
//   fetchContacts,
//   postContacts,
// } from 'helpers/contacts-api';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/postContact',
  async (contact, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      token.set(state.auth.token);

      const { data } = await axios.post('/contacts', contact);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const delContacts = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      token.set(state.auth.token);

      await axios.delete(`/contacts/${contactId}`);

      return contactId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
