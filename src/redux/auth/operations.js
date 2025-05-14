import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const goitAPI = axios.create({
  baseURL: 'https://connections-api.goit.global',
});
const setAuthToken = token => {
  goitAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const removeAuthToken = () => {
  goitAPI.defaults.headers.common.Authorization = ``;
};

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (body, thunkAPI) => {
    try {
      const response = await goitAPI.post('/users/signup', body);
      setAuthToken(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logInThunk = createAsyncThunk(
  'auth/login',
  async (body, thunkAPI) => {
    try {
      const response = await goitAPI.post('/users/login', body);
      setAuthToken(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await goitAPI.post('/users/logout');
      removeAuthToken();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    try {
      const savedToken = thunkAPI.getState().auth.token;
      // console.log(thunkAPI.getState().auth);
      if (!savedToken) {
        return thunkAPI.rejectWithValue('token is not exist!');
      }
      setAuthToken(savedToken);
      const response = await goitAPI.get('/users/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
