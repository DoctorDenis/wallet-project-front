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
      return rejectWithValue(error.message);
    }
  }
);

export const addTransaction = createAsyncThunk(
  'transactions/add',
  async (transaction, { rejectWithValue, getState }) => {
    try {
      // console.log('step 0');
      // axios.defaults.headers.common.Authorization = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI2MzkzZGJkZmFiMDViN2YyZTdlOGMzMTYiLCJuYW1lIjoiYmxhYmxhIiwicGFzc3dvcmQiOiIkMmIkMTAkcXg3L2pyb2dsNGxuZUFOMGNhN09UdW9vUlBidnptay9HNmdEY2VBcE5lUFVmT0g3NDRndmkiLCJlbWFpbCI6ImJsYWJsYUBtYWlsLmNvbSIsInN1YnNjcmlwdGlvbiI6ImJhc2ljIiwiYmFsYW5jZSI6MTAwLCJhdmF0YXJVUkwiOiJodHRwOi8vd3d3LmdyYXZhdGFyLmNvbS9hdmF0YXIvYzc5YTdjMzljZmMwYjg1MWQ4YWJmZWY2ODBhOWUzMWE_cz0yMDAmcj1wZyZkPXJldHJvIiwiZW1haWxWZXJpZmllZCI6ZmFsc2UsImVtYWlsVmVyaWZpY2F0aW9uVG9rZW4iOiJDSmFHNk0tT0siLCJ0ZW1wb3JhcnlQYXNzd29yZCI6bnVsbCwidHJhbnNhY3Rpb25zIjpbXSwiX192IjowfQ.DzF6X9FcyGdUqPdTx7TmnFWMryOxiKc_7mUKk98hZR0";
      // console.log(axios.defaults.headers.common.Authorization);
      // console.log('step 1');
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
      await axios.delete(`transactions/${transactionId}`, {
        headers: {
          Authorization: `Bearer ${getState().auth.accesToken}`,
        },
      } );
      Notify.success('Transaction delete successfully');
      return transactionId;
    } catch (error) {
      return rejectWithValue(
        Notify.failure(`Failed to delete the transaction`)
      );
    }
  }
);
