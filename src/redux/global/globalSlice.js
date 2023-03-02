import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import {
  getContacts,
  addContacts,
  delContacts,
  editContactOperation,
} from 'redux/contacts/operations';

import {
  register,
  logIn,
  logOut,
  getCurrentUser,
} from 'redux/auth/auth-operations';

const extraActions = [
  getContacts,
  addContacts,
  delContacts,
  editContactOperation,
  register,
  logIn,
  logOut,
  getCurrentUser,
];
const getActions = type => extraActions.map(action => action[type]);

const initialGlobalState = {
  themeTitle: 'light',

  isLoading: false,
  error: null,
};

const globalSlice = createSlice({
  name: 'global',
  initialState: initialGlobalState,
  reducers: {
    toggleThemeTitle(state) {
      state.themeTitle = state.themeTitle === 'light' ? 'dark' : 'light';
    },
  },
  extraReducers: builder => {
    builder
      .addMatcher(isAnyOf(...getActions('pending')), pendingHandler)
      .addMatcher(isAnyOf(...getActions('fulfilled')), fulfilledHandler)
      .addMatcher(isAnyOf(...getActions('rejected')), errorHandler);
  },
});

function pendingHandler(state) {
  state.isLoading = true;
  state.error = null;
}
function fulfilledHandler(state) {
  state.isLoading = false;
}

function errorHandler(state, { payload }) {
  state.isLoading = false;
  state.error = payload;
}

export const { toggleThemeTitle } = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
