import { createSlice } from '@reduxjs/toolkit';
import {
  getTransaction,
  addTransaction,
  deleteTransaction,
} from './transaction-operations';

const initialState = {
  transactions: [],
  isLoading: false,
  error: {},
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  extraReducers: {
    [getTransaction.pending]: state => {
      state.isLoading = true;
    },
    [getTransaction.fulfilled]: (state, { payload }) => {
      state.transactions = payload;
      state.isLoading = false;
    },
    [getTransaction.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    [addTransaction.pending]: state => {
      state.isLoading = true;
    },
    [addTransaction.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.transactions.transactions = [
        ...state.transactions.transactions,
        payload,
      ];
      state.isModalAddTransactionOpen = false;
    },
    [addTransaction.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    [deleteTransaction.pending]: state => {
      state.isLoading = true;
    },
    [deleteTransaction.fulfilled]: (state, { payload }) => {
      state.transactions.transactions = [
        ...state.transactions.transactions.filter(
          transaction => transaction._id !== payload._id
        ),
      ];
      state.isLoading = false;
    },
    [deleteTransaction.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default transactionsSlice.reducer;
