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
      token.set(data.accesToken);

      Notify.success('Success login');
      return data;
    } catch (error) {
      return rejectWithValue(
        Notify.failure("Can't log in or user does not exist")
      );
    }
  }
);

export const logout = createAsyncThunk(
  'users/logout',
  async (user, { rejectWithValue }) => {
    const accesToken = JSON.parse(
      JSON.parse(localStorage.getItem('persist:token')).accesToken
    );

    try {
      await axios.post('users/logout', user, {
        headers: { Authorization: `Bearer ${accesToken}` },
      });
      token.unset();
      Notify.success('Success log out');
      return;
    } catch (error) {
      console.log(error);
      return rejectWithValue(
        Notify.failure("Can't log out user. Please reload the page")
      );
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'users/current',
  async (userToken, { rejectWithValue, getState }) => {
    try {
      const { data } = await axios.get('users/current', {
        headers: {
          Authorization: `Bearer ${getState().auth.accesToken}`,
        },
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.payload);
    }
  }
);
