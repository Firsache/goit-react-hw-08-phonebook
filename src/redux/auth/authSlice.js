import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  getCurrentUser,
} from 'redux/auth/auth-operations';

const extraActions = [register, logIn];
const getActions = type => extraActions.map(action => action[type]);

const initialAuthState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  extraReducers: builder => {
    builder
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.isLoggedIn = false;
        state.token = null;
      })
      .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.isLoggedIn = true;
      })
      .addMatcher(isAnyOf(...getActions('fulfilled')), successLogInHandler);
  },
});

function successLogInHandler(state, { payload }) {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
}

export const authReducer = authSlice.reducer;
