import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../store';

interface AuthState {
  loading: boolean;
  sessionKey: string | null;
  login: string | null;
  sublogin: string | null;
}

const initialState: AuthState = {
  loading: false,
  sessionKey: null,
  login: null,
  sublogin: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<number>) => {
      console.log('login');
    },
    logout: (state) => {
      console.log('logout');
    },
  },
});

export const {login, logout} = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
