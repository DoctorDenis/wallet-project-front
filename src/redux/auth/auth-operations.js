import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix';




axios.defaults.baseURL = 'https://wallet-project.cyclic.app/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'users/register',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('users/register', user);
       token.set(data.accesToken);
      Notify.success(`User ${data.user.name} is successfully registered`);
      return data;
    } catch (error) {
      Notify.failure("Can't create user or user exists");
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'users/login',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('users/login', user);
       token.set(data.token);
      Notify.success('Success login');
      return data;
    } catch (error) {
      return rejectWithValue(alert("Can't log in or user does not exist"));
    }
  }
);

export const logout = createAsyncThunk(
  'users/logout',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('users/logout', user);
       token.unset();
      Notify.success('Success log out');
      return data;
    } catch (error) {
      return rejectWithValue(
        Notify.failure("Can't log out user. Please reload the page")
      );
    }
  }
);
