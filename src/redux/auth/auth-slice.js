import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, getCurrentUser } from './auth-operations';
import {
  addTransaction,
  deleteTransaction,
} from '../transaction/transaction-operations';

const initialState = {
  user: { email: '', name: '' },
  accesToken: '',
  refreshToken: '',
  error: '',
  isLoading: false,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending]: state => {
      state.isLoading = true;
      state.isLoggedIn = false;
    },
    [register.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.accesToken = payload.accesToken;
      state.isLoading = false;
      state.isLoggedIn = true;
    },
    [register.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = payload.message;
    },

    [login.pending]: state => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.isLoading = false;
      state.isLoggedIn = true;
      state.accesToken = payload.accesToken;
    },
    [login.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = payload;
    },

    [logout.pending]: state => {
      state.isLoading = true;
      state.isLoggedIn = false;
    },
    [logout.fulfilled]: state => {
      state.user = { email: '', name: '' };
      state.isLoading = false;
      state.accesToken = '';
    },
    [logout.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = payload;
    },
    [addTransaction.fulfilled]: (state, action) => {
      state.user.balance = action.payload.balance;
    },

    [deleteTransaction.fulfilled]: (state, action) => {
      state.user.balance = action.payload.balance;
    },
    [getCurrentUser.fulfilled]: (state, action) => {
      state.user.balance = action.payload.data.user.balance;
    },
  },
});

export default authSlice.reducer;
