import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix';

axios.defaults.baseURL = 'https://wallet-project.cyclic.app/';

export const getTransaction = createAsyncThunk(
  'transactions/get',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { data } = await axios.get('transactions/', {
        headers: {
          Authorization: `Bearer ${getState().auth.accesToken}`,
        },
      });
      return data;
    } catch (error) {
      return rejectWithValue(Notify.failure('Failed to get transactions'));
    }
  }
);

export const addTransaction = createAsyncThunk(
  'transactions/add',
  async (transaction, { rejectWithValue, getState }) => {
    try {
      const { data } = await axios.post('transactions/add', transaction, {
        headers: {
          Authorization: `Bearer ${getState().auth.accesToken}`,
        },
      });

      Notify.success('Transaction added successfully');
      return data;
    } catch (error) {
      return rejectWithValue(Notify.failure('Failed to add the transaction'));
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  'transactions/delete',
  async (transactionId, { rejectWithValue, getState }) => {
    try {
      const deletedTransaction = await axios.delete(
        `transactions/${transactionId}`,
        {
          headers: {
            Authorization: `Bearer ${getState().auth.accesToken}`,
          },
        }
      );
      Notify.success('Transaction delete successfully');
      return deletedTransaction.data;
    } catch (error) {
      return rejectWithValue(
        Notify.failure(`Failed to delete the transaction`)
      );
    }
  }
);
