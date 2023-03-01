import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { register, logIn, logOut } from 'redux/auth/auth-operations';

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
  reducers: {
    // setFilteredName(state, { payload }) {
    //   state.filteredName = payload;
    // },
  },
  extraReducers: builder => {
    builder
      //   .addCase(register.fulfilled, (state, { payload }) => {
      //     state.user = payload.user;
      //     state.token = payload.token;
      //     state.isLoggedIn = true;
      //   })

      //   .addCase(logIn.fulfilled, (state, { payload }) => {
      //     state.user = payload;
      //     state.token = payload.token;
      //     state.isLoggedIn = true;
      //   })

      .addCase(logOut.fulfilled, state => {
        state.isLoggedIn = false;
      })
      .addMatcher(isAnyOf(...getActions('fulfilled')), successLogInHandler);
  },
});

function successLogInHandler(state, { payload }) {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
}

// export const { setFilteredName } = authSlice.actions;
export const authReducer = authSlice.reducer;
