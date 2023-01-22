import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  setToken(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unsetToken() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', userData);
      token.setToken(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', userData);
      token.setToken(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      token.unsetToken();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    const tokenLocalStorage = getState().auth.token;
    if (!tokenLocalStorage) {
      return rejectWithValue('No token');
    }
    token.setToken(tokenLocalStorage);
    try {
      const { data } = await axios.get('/users/current');

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
