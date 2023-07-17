import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, register } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.pending, (state, { payload }) => state)
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, { payload }) => state)
      .addCase(logIn.pending, (state, { payload }) => state)
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (state, { payload }) => state)
      .addCase(logOut.pending, (state, { payload }) => state)
      .addCase(logOut.fulfilled, (state) => {
        state.user = initialState.user;
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(logOut.rejected, (state, { payload }) => state).addCase(refreshUser.pending, (state, { payload }) => state).addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;

      }),
});

export const authReducer = authSlice.reducer;
